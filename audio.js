/* ============================================================
   STAR WARS AUDIO ENGINE
   Pure Web Audio API — no files needed
   Safari-safe: no arrow functions, no template literals
   ============================================================ */

var SWAudio = (function() {
  var ctx = null;
  var masterGain = null;
  var ambienceNode = null;
  var saberOscillators = [];
  var saberGain = null;
  var saberActive = false;
  var muted = false;

  /* ---- Init ---- */
  function init() {
    try {
      var AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return false;
      ctx = new AudioCtx();
      masterGain = ctx.createGain();
      masterGain.gain.value = 0.6;
      masterGain.connect(ctx.destination);
      return true;
    } catch(e) { return false; }
  }

  function resume() {
    if (ctx && ctx.state === 'suspended') {
      ctx.resume();
    }
  }

  function ensureInit() {
    if (!ctx) init();
    resume();
    return !!ctx;
  }

  /* ============================================================
     AMBIENT SPACE DRONE
     Deep low hum + subtle harmonics, like being in space
     ============================================================ */
  function startAmbience() {
    if (!ensureInit()) return;
    if (ambienceNode) return; /* already running */

    var gainNode = ctx.createGain();
    gainNode.gain.value = 0;
    gainNode.connect(masterGain);

    /* Sub bass drone — 40Hz */
    var osc1 = ctx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.value = 40;
    var g1 = ctx.createGain();
    g1.gain.value = 0.5;
    osc1.connect(g1); g1.connect(gainNode);
    osc1.start();

    /* Second harmonic — 80Hz */
    var osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.value = 80;
    var g2 = ctx.createGain();
    g2.gain.value = 0.2;
    osc2.connect(g2); g2.connect(gainNode);
    osc2.start();

    /* Shimmer — subtle high partial */
    var osc3 = ctx.createOscillator();
    osc3.type = 'sine';
    osc3.frequency.value = 320;
    var g3 = ctx.createGain();
    g3.gain.value = 0.04;
    osc3.connect(g3); g3.connect(gainNode);
    osc3.start();

    /* Very slow LFO on the shimmer */
    var lfo = ctx.createOscillator();
    lfo.frequency.value = 0.08;
    var lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.015;
    lfo.connect(lfoGain); lfoGain.connect(g3.gain);
    lfo.start();

    /* Fade in over 3 seconds */
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 3);

    ambienceNode = {
      gain: gainNode,
      oscillators: [osc1, osc2, osc3, lfo]
    };
  }

  function stopAmbience() {
    if (!ambienceNode) return;
    try {
      ambienceNode.gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.5);
      var oscs = ambienceNode.oscillators;
      setTimeout(function() {
        for (var i = 0; i < oscs.length; i++) {
          try { oscs[i].stop(); } catch(e) {}
        }
      }, 1600);
    } catch(e) {}
    ambienceNode = null;
  }

  /* ============================================================
     TIE FIGHTER ROAR
     Screeching harmonic sweep — iconic
     ============================================================ */
  function playTIERoar(volume) {
    if (!ensureInit()) return;
    volume = volume || 0.7;

    var gainNode = ctx.createGain();
    gainNode.gain.value = 0;
    gainNode.connect(masterGain);

    var now = ctx.currentTime;

    /* Main screech — sweeping from 800 to 200 Hz */
    var osc1 = ctx.createOscillator();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(800, now);
    osc1.frequency.exponentialRampToValueAtTime(200, now + 0.8);
    osc1.frequency.exponentialRampToValueAtTime(600, now + 1.4);
    osc1.frequency.exponentialRampToValueAtTime(180, now + 2.2);
    var g1 = ctx.createGain(); g1.gain.value = 0.5;
    osc1.connect(g1); g1.connect(gainNode);
    osc1.start(now); osc1.stop(now + 2.5);

    /* Harmonic layer — pitch shifted */
    var osc2 = ctx.createOscillator();
    osc2.type = 'sawtooth';
    osc2.frequency.setValueAtTime(1200, now);
    osc2.frequency.exponentialRampToValueAtTime(300, now + 0.8);
    osc2.frequency.exponentialRampToValueAtTime(900, now + 1.4);
    osc2.frequency.exponentialRampToValueAtTime(270, now + 2.2);
    var g2 = ctx.createGain(); g2.gain.value = 0.3;
    osc2.connect(g2); g2.connect(gainNode);
    osc2.start(now); osc2.stop(now + 2.5);

    /* Low body thud */
    var osc3 = ctx.createOscillator();
    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(120, now);
    osc3.frequency.exponentialRampToValueAtTime(60, now + 0.6);
    var g3 = ctx.createGain(); g3.gain.value = 0.4;
    osc3.connect(g3); g3.connect(gainNode);
    osc3.start(now); osc3.stop(now + 0.8);

    /* Bandpass filter for that hollow TIE quality */
    var filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(600, now);
    filter.frequency.exponentialRampToValueAtTime(300, now + 1.2);
    filter.Q.value = 1.2;
    gainNode.connect(filter);
    filter.connect(masterGain);
    /* Disconnect direct gainNode from master — use filtered only */
    gainNode.disconnect(masterGain);

    /* Volume envelope */
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(volume, now + 0.05);
    gainNode.gain.setValueAtTime(volume, now + 1.8);
    gainNode.gain.linearRampToValueAtTime(0, now + 2.5);
  }

  /* ============================================================
     LIGHTSABER IGNITION
     The iconic snap-hiss power-on
     ============================================================ */
  function playSaberIgnite(color) {
    if (!ensureInit()) return;
    color = color || 'blue';

    /* Frequency based on saber color */
    var baseFreq = 120;
    if (color === 'red' || color === '#FF2233') baseFreq = 100;
    else if (color === 'green' || color === '#00FF88' || color === '#33DD55') baseFreq = 130;
    else if (color === 'purple' || color === '#CC44FF' || color === '#A85AF0') baseFreq = 110;

    var now = ctx.currentTime;
    var gainNode = ctx.createGain();
    gainNode.gain.value = 0;
    gainNode.connect(masterGain);

    /* Initial snap — noise burst */
    var bufferSize = ctx.sampleRate * 0.08;
    var buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    var data = buffer.getChannelData(0);
    for (var i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i/bufferSize);
    }
    var noise = ctx.createBufferSource();
    noise.buffer = buffer;
    var noiseGain = ctx.createGain(); noiseGain.gain.value = 0.4;
    noise.connect(noiseGain); noiseGain.connect(gainNode);
    noise.start(now);

    /* Hiss rise — sweeping up */
    var osc1 = ctx.createOscillator();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(baseFreq * 0.5, now);
    osc1.frequency.exponentialRampToValueAtTime(baseFreq * 2, now + 0.3);
    osc1.frequency.setValueAtTime(baseFreq, now + 0.35);
    var g1 = ctx.createGain(); g1.gain.value = 0.35;
    osc1.connect(g1); g1.connect(gainNode);
    osc1.start(now); osc1.stop(now + 0.5);

    /* Sustain hum onset */
    var osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(baseFreq, now + 0.3);
    var g2 = ctx.createGain();
    g2.gain.setValueAtTime(0, now + 0.3);
    g2.gain.linearRampToValueAtTime(0.3, now + 0.5);
    osc2.connect(g2); g2.connect(gainNode);
    osc2.start(now + 0.3); osc2.stop(now + 0.8);

    /* Overall envelope */
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.6, now + 0.05);
    gainNode.gain.setValueAtTime(0.6, now + 0.5);
    gainNode.gain.linearRampToValueAtTime(0, now + 0.8);
  }

  /* ============================================================
     LIGHTSABER HUM (continuous)
     Start/stop for when a saber is "active"
     ============================================================ */
  function startSaberHum(color) {
    if (!ensureInit()) return;
    if (saberActive) return;
    saberActive = true;
    color = color || 'blue';

    var baseFreq = 120;
    if (color === 'red' || color === '#FF2233') baseFreq = 100;
    else if (color === 'green' || color === '#00FF88') baseFreq = 130;
    else if (color === 'purple' || color === '#CC44FF') baseFreq = 110;

    saberGain = ctx.createGain();
    saberGain.gain.value = 0;
    saberGain.connect(masterGain);

    /* Main hum */
    var osc1 = ctx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.value = baseFreq;
    var g1 = ctx.createGain(); g1.gain.value = 0.4;
    osc1.connect(g1); g1.connect(saberGain);
    osc1.start();
    saberOscillators.push(osc1);

    /* Second harmonic */
    var osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.value = baseFreq * 2;
    var g2 = ctx.createGain(); g2.gain.value = 0.15;
    osc2.connect(g2); g2.connect(saberGain);
    osc2.start();
    saberOscillators.push(osc2);

    /* Flutter LFO */
    var lfo = ctx.createOscillator();
    lfo.frequency.value = 5.8 + Math.random() * 1.4;
    var lfoGain = ctx.createGain(); lfoGain.gain.value = 0.012;
    lfo.connect(lfoGain); lfoGain.connect(g1.gain);
    lfo.start();
    saberOscillators.push(lfo);

    /* Fade in */
    saberGain.gain.setValueAtTime(0, ctx.currentTime);
    saberGain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.4);
  }

  function stopSaberHum() {
    if (!saberActive || !saberGain) return;
    saberActive = false;
    try {
      saberGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);
      var oscs = saberOscillators.slice();
      setTimeout(function() {
        for (var i = 0; i < oscs.length; i++) {
          try { oscs[i].stop(); } catch(e) {}
        }
      }, 400);
    } catch(e) {}
    saberOscillators = [];
    saberGain = null;
  }

  /* ============================================================
     LIGHTSABER CLASH
     For battle mode
     ============================================================ */
  function playSaberClash() {
    if (!ensureInit()) return;
    var now = ctx.currentTime;
    var gainNode = ctx.createGain();
    gainNode.connect(masterGain);

    /* Metallic crash — noise burst through filter */
    var bufferSize = ctx.sampleRate * 0.15;
    var buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    var data = buffer.getChannelData(0);
    for (var i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.04));
    }
    var noise = ctx.createBufferSource();
    noise.buffer = buffer;
    var filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2400;
    filter.Q.value = 0.8;
    noise.connect(filter); filter.connect(gainNode);
    noise.start(now);

    /* Impact thud */
    var osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(60, now + 0.15);
    var og = ctx.createGain(); og.gain.value = 0.6;
    osc.connect(og); og.connect(gainNode);
    osc.start(now); osc.stop(now + 0.2);

    /* Energy crackle */
    var osc2 = ctx.createOscillator();
    osc2.type = 'sawtooth';
    osc2.frequency.setValueAtTime(440, now);
    osc2.frequency.exponentialRampToValueAtTime(220, now + 0.1);
    var og2 = ctx.createGain(); og2.gain.value = 0.3;
    osc2.connect(og2); og2.connect(gainNode);
    osc2.start(now); osc2.stop(now + 0.12);

    gainNode.gain.setValueAtTime(0.8, now);
    gainNode.gain.linearRampToValueAtTime(0, now + 0.3);
  }

  /* ============================================================
     HYPERSPACE WHOOSH
     The jump-to-lightspeed sound
     ============================================================ */
  function playHyperspace() {
    if (!ensureInit()) return;
    var now = ctx.currentTime;
    var gainNode = ctx.createGain();
    gainNode.gain.value = 0;
    gainNode.connect(masterGain);

    /* Noise whoosh */
    var bufferSize = ctx.sampleRate * 1.8;
    var buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    var d = buffer.getChannelData(0);
    for (var i = 0; i < bufferSize; i++) {
      d[i] = (Math.random() * 2 - 1);
    }
    var noise = ctx.createBufferSource();
    noise.buffer = buffer;

    /* Highpass — starts dark, sweeps bright */
    var hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.setValueAtTime(100, now);
    hp.frequency.exponentialRampToValueAtTime(4000, now + 1.2);

    /* Lowpass to shape */
    var lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(8000, now);
    lp.frequency.exponentialRampToValueAtTime(12000, now + 0.8);
    lp.frequency.exponentialRampToValueAtTime(2000, now + 1.6);

    noise.connect(hp); hp.connect(lp); lp.connect(gainNode);
    noise.start(now);

    /* Rising tone */
    var osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(80, now);
    osc.frequency.exponentialRampToValueAtTime(3200, now + 1.0);
    var og = ctx.createGain();
    og.gain.setValueAtTime(0.3, now);
    og.gain.linearRampToValueAtTime(0, now + 1.2);
    osc.connect(og); og.connect(gainNode);
    osc.start(now); osc.stop(now + 1.2);

    /* Volume envelope — quick rise, sustained, fall off */
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.7, now + 0.15);
    gainNode.gain.setValueAtTime(0.7, now + 1.0);
    gainNode.gain.linearRampToValueAtTime(0, now + 1.8);
  }

  /* ============================================================
     UI CLICK — subtle tap feedback
     ============================================================ */
  function playUIClick() {
    if (!ensureInit()) return;
    var now = ctx.currentTime;
    var gainNode = ctx.createGain();
    gainNode.connect(masterGain);
    var osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.04);
    gainNode.gain.setValueAtTime(0.15, now);
    gainNode.gain.linearRampToValueAtTime(0, now + 0.06);
    osc.connect(gainNode);
    osc.start(now); osc.stop(now + 0.07);
  }

  /* ============================================================
     FORCE POWER — used in ceremony/reveal
     ============================================================ */
  function playForceChime() {
    if (!ensureInit()) return;
    var now = ctx.currentTime;
    var notes = [523, 659, 784, 1047]; /* C E G C */
    for (var i = 0; i < notes.length; i++) {
      (function(freq, delay) {
        var gainNode = ctx.createGain();
        gainNode.connect(masterGain);
        var osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gainNode.gain.setValueAtTime(0, now + delay);
        gainNode.gain.linearRampToValueAtTime(0.12, now + delay + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + delay + 1.2);
        osc.connect(gainNode);
        osc.start(now + delay);
        osc.stop(now + delay + 1.3);
      })(notes[i], i * 0.12);
    }
  }

  /* ============================================================
     MASTER MUTE TOGGLE
     ============================================================ */
  function toggleMute() {
    muted = !muted;
    if (masterGain) {
      masterGain.gain.setValueAtTime(muted ? 0 : 0.6, ctx.currentTime);
    }
    return muted;
  }

  function isMuted() { return muted; }

  /* ============================================================
     PUBLIC API
     ============================================================ */
  return {
    init: init,
    resume: resume,
    startAmbience: startAmbience,
    stopAmbience: stopAmbience,
    playTIERoar: playTIERoar,
    playSaberIgnite: playSaberIgnite,
    startSaberHum: startSaberHum,
    stopSaberHum: stopSaberHum,
    playSaberClash: playSaberClash,
    playHyperspace: playHyperspace,
    playUIClick: playUIClick,
    playForceChime: playForceChime,
    toggleMute: toggleMute,
    isMuted: isMuted
  };
})();
