# BUILD PLAN — STAR WARS QUIZ APP
## Session-by-session roadmap

================================================================
## SESSION 1: COCKPIT POLISH
================================================================
**What it adds:** Makes the landing page feel completely shipped.

- Guapo's name throughout the landing page
- Planet rotation animation (each planet slowly spins)
- Constellation lines connecting the four planets
- Lightspeed flash tinted to match destination planet color
- TIE fighter follows cursor (desktop) / finger trail (mobile)
- Distant ships occasionally drift across the background
- Lightsaber blade wipe transition system (reusable across app)

**Files affected:** cockpit.html

================================================================
## SESSION 2: THE CEREMONY (8 scenes)
================================================================
**What it adds:** The cinematic intro that plays when he taps Tatooine.

**Scenes:**
1. The Call — black screen, single light, Yoda whisper
2. Name Input — "What is your name, young one?" → he types GUAPO
3. Birthplace — choose from Tatooine/Naboo/Coruscant/Mandalore
4. The Calling — kyber crystal selection (blue/green/purple/yellow/white)
5. The Oath — "I will use my gifts for good" word by word
6. The Crawl — personalized Star Wars opening crawl
7. The Chamber — arrives at council chamber based on birthplace
8. First Question — transitions into the quiz

**Total length:** ~60 seconds

**Files created:** ceremony.html

================================================================
## SESSION 3: QUIZ EXPERIENCE UPGRADES
================================================================
**What it adds:** Wires up the real 500 questions plus the magic during the quiz.

- Wire questions.js into quiz.html
- Image-answer rendering (2x2 grid for image questions)
- Replace progress bar with hyperspace journey (small ship traveling)
- Yoda commentary every 5 questions
- Mid-quiz Dad message at question 15
- Force-sensitive pivotal questions (visual transformation)
- Lightsaber color reveal building during quiz
- Set QUESTIONS_PER_SESSION to a good number (probably 40)

**Files affected:** quiz.html, questions.js wiring

================================================================
## SESSION 4: RESULT SCREEN
================================================================
**What it adds:** The cinematic payoff.

- Prototype the cinematic arrival sequence first
- Full-bleed character portrait
- Match bars with surprises ("87% Yoda with 64% Han Solo's stubbornness")
- "Your Path" personalized story paragraph
- Named lightsaber reveal
- Atmospheric SVG animations per character

**Files created:** result.html

================================================================
## SESSION 5: CHARACTER CHAT
================================================================
**What it adds:** Talk to your character after the result.

Same architecture as Guapa's princess chat. Each of 16 characters has:
- Unique voice and speech patterns
- Specific topics they engage with
- Personality-consistent responses

Built using Claude API in the artifact (anthropic_api_in_artifacts feature).

**Files created:** chat.html

================================================================
## SESSION 6: POLISH LAYER (the magic)
================================================================
**What it adds:** The small details that make the app feel magical.

- Text appears word-by-word or letter-by-letter
- Buttons assemble (border draws, then text fades in)
- Falcon flying through hyperspace loading screens
- Yoda-personality error messages
- Lightsaber blade wipe transitions between screens
- Dashboard reacts to navigation (lights up, powers down)
- App remembers him by visit count
- Time-of-day awareness (morning greeting vs night)
- Aurebesh long-press easter egg
- Hidden 17th/18th/19th characters

**Files affected:** All screens get polish updates

================================================================
## SESSION 7: AUDIO SYSTEM
================================================================
**What it adds:** Synthetic Star Wars-feeling audio.

Note: We can't use real Star Wars audio (copyrighted). 
We're building synthetic audio with Web Audio API.

- Deep space ambient drone (always playing)
- Soft beeps when interacting with planets
- Targeting lock beep
- Lightspeed whoosh
- Victory harmonic chord on result
- Yoda voice synthesis with pitch manipulation
- All built with Web Audio API oscillators — no licensing risk

**Files created:** audio.js (shared across all screens)

================================================================
## SESSION 8: BATTLE MODE
================================================================
**What it adds:** Two-player duel mode.

- Both players take the quiz separately
- Results compared as a duel screen
- "GUAPO (Mando) vs DAD (Vader)"
- Animated lightsabers crossing
- Stats compared
- Replayable

**Files created:** battle.html

================================================================
## YOUR PARALLEL WORK
================================================================

### Generate 70 remaining quiz image grids
- Photoroom with locked style prompt (Disney/Pixar storybook)
- All prompts in images-prompts/all-image-prompts.txt
- Save as PNG with naming convention: think_04_grid.png, etc.

### Build Transmissions admin tool
- Like the Royal Chest admin you built for Guapa
- Write letters that commit to GitHub via API
- Letters unlock by date
- Special letters for milestones (first birthday with app, 100th play, etc.)

### Birthday Mode
- Small enough to slot into Session 6
- Triggers on Guapo's birthday
- Yoda appears with birthday message
- Hidden character (Anakin) becomes available

================================================================
## SHIP ORDER PRIORITY
================================================================

**Minimum viable to ship:**
Session 1 (polish landing) + Session 3 (wire quiz) + Session 4 (result screen)

After that ships, layer in:
- Session 2 (ceremony) — the wow factor for new visits
- Session 6 (polish) — the everyday magic
- Session 7 (audio) — the immersion
- Session 5 (chat) — the relationship
- Session 8 (battle) — the social mode

================================================================
## DECISIONS LOCKED IN
================================================================

✅ Real planet images, not CSS gradients
✅ No cockpit frame (incompatible with portrait screens)
✅ Two-tap interaction (lock then launch)
✅ Gyroscope parallax for depth
✅ Synthetic audio (no copyright risk)
✅ Character chat instead of standalone quotes
✅ Ceremony as the bridge from landing to quiz
✅ Guapo's name appears throughout
✅ Birthday Mode for once-a-year magic
