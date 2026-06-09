/*
============================================================
STAR WARS QUIZ — MASTER QUESTION BANK
20 CATEGORIES COMPLETE. 500 QUESTIONS COMPLETE.
100% OF TOTAL QUIZ.

THE QUIZ IS WRITTEN.

Next steps:
1. Crack image generation for 80 image-answer slots
2. Wire questions.js into the quiz engine
3. Test on iPhone Safari PWA
============================================================
*/

const QUESTION_BANK = [
  {
    "id": "think_01",
    "category": "THE WAY YOU THINK",
    "type": "personality",
    "image": "",
    "text": "Before you act, you always—",
    "answers": [
      {
        "text": "See the whole board. Every piece, every consequence.",
        "scores": {
          "yoda": 3,
          "obiwan": 2,
          "palpatine": 2,
          "quigon": 1,
          "maul": -2,
          "han": -1
        },
        "saber": {
          "green": 2,
          "yellow": 1,
          "red": -1
        }
      },
      {
        "text": "Feel for the right move. Something in you already knows.",
        "scores": {
          "quigon": 3,
          "grogu": 2,
          "finn": 2,
          "luke": 1,
          "palpatine": -2,
          "boba": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "red": -1
        }
      },
      {
        "text": "Calculate the odds. Feelings are not a strategy.",
        "scores": {
          "palpatine": 3,
          "vader": 2,
          "mace": 2,
          "boba": 1,
          "grogu": -2,
          "finn": -1
        },
        "saber": {
          "yellow": 2,
          "red": 2,
          "white": 1,
          "green": -1
        }
      },
      {
        "text": "Move. Thinking comes after — you can adjust.",
        "scores": {
          "han": 3,
          "poe": 3,
          "maul": 2,
          "kylo": 1,
          "yoda": -2,
          "obiwan": -1
        },
        "saber": {
          "white": 2,
          "red": 2,
          "green": -2
        }
      }
    ]
  },
  {
    "id": "think_02",
    "category": "THE WAY YOU THINK",
    "type": "personality",
    "image": null,
    "text": "A problem has no obvious solution. What happens inside you first?",
    "answers": [
      {
        "text": "A quiet comes over me. Like the answer is already on its way.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 1,
          "kylo": -2,
          "maul": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I see it from a different angle until it cracks open.",
        "scores": {
          "obiwan": 3,
          "palpatine": 2,
          "mace": 2,
          "han": -1
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "I want to test something — anything — just to see what happens.",
        "scores": {
          "poe": 3,
          "han": 3,
          "finn": 1,
          "palpatine": -2
        },
        "saber": {
          "white": 2,
          "blue": 1,
          "red": 1
        }
      },
      {
        "text": "I find the person who has solved it before.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mando": 1,
          "grogu": 1,
          "maul": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "white": -1
        }
      }
    ]
  },
  {
    "id": "think_03",
    "category": "THE WAY YOU THINK",
    "type": "personality",
    "image": null,
    "text": "Someone tells you your plan is too risky. What do you actually feel?",
    "answers": [
      {
        "text": "Relief. They might see something I missed.",
        "scores": {
          "obiwan": 3,
          "mace": 2,
          "yoda": 2,
          "luke": 1,
          "han": -2,
          "poe": -1
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "green": 1
        }
      },
      {
        "text": "A small thrill. They are probably right and I am still going.",
        "scores": {
          "han": 3,
          "poe": 3,
          "maul": 1,
          "kylo": 1,
          "mace": -2,
          "yoda": -1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      },
      {
        "text": "Steady focus. Their fear is not my problem.",
        "scores": {
          "vader": 3,
          "palpatine": 2,
          "boba": 2,
          "mace": 1,
          "finn": -2,
          "luke": -1
        },
        "saber": {
          "red": 3,
          "yellow": 2,
          "green": -2
        }
      },
      {
        "text": "Curiosity. What exactly are they afraid of?",
        "scores": {
          "quigon": 3,
          "luke": 2,
          "grogu": 2,
          "palpatine": 1,
          "boba": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "think_04",
    "category": "THE WAY YOU THINK",
    "type": "image-answer",
    "text": "Which path calls to you?",
    "answers": [
      {
        "image": "./assets/quiz/q-think_04-a.png",
        "caption": "The Climb",
        "scores": {
          "mace": 3,
          "vader": 2,
          "mando": 2,
          "boba": 1,
          "han": -1
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-think_04-b.png",
        "caption": "The Open Road",
        "scores": {
          "han": 3,
          "poe": 3,
          "mando": 1,
          "yoda": -1
        },
        "saber": {
          "white": 3,
          "blue": 1,
          "green": -1
        }
      },
      {
        "image": "./assets/quiz/q-think_04-c.png",
        "caption": "The Forest Way",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "luke": 1,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-think_04-d.png",
        "caption": "The Storm Path",
        "scores": {
          "kylo": 3,
          "maul": 3,
          "vader": 2,
          "palpatine": 1,
          "grogu": -2,
          "yoda": -1
        },
        "saber": {
          "red": 3,
          "purple": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "think_05",
    "category": "THE WAY YOU THINK",
    "type": "personality",
    "image": null,
    "text": "Three seconds. No time to think. What actually comes out?",
    "answers": [
      {
        "text": "Whatever I trained for. My body knows.",
        "scores": {
          "mace": 3,
          "vader": 2,
          "boba": 2,
          "mando": 2,
          "grogu": -1
        },
        "saber": {
          "yellow": 3,
          "red": 1,
          "blue": 1
        }
      },
      {
        "text": "A joke. It buys me time and throws everyone off.",
        "scores": {
          "han": 3,
          "poe": 3,
          "chewie": 1,
          "palpatine": -2,
          "mace": -1
        },
        "saber": {
          "white": 3,
          "blue": -1,
          "red": -1
        }
      },
      {
        "text": "Stillness. The right thing arrives in the silence.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "grogu": 1,
          "maul": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Whatever scares the other person more than they scare me.",
        "scores": {
          "vader": 3,
          "maul": 3,
          "palpatine": 2,
          "kylo": 2,
          "finn": -2,
          "luke": -2
        },
        "saber": {
          "red": 3,
          "white": 1,
          "blue": -2
        }
      }
    ]
  },
  {
    "id": "think_06",
    "category": "THE WAY YOU THINK",
    "type": "personality",
    "image": null,
    "text": "You spot a pattern no one else has noticed. What do you do with it?",
    "answers": [
      {
        "text": "Keep watching. Patterns mean something — but only if you stay patient.",
        "scores": {
          "yoda": 3,
          "palpatine": 3,
          "obiwan": 2,
          "boba": 1,
          "han": -1
        },
        "saber": {
          "green": 2,
          "yellow": 2,
          "purple": 1
        }
      },
      {
        "text": "Tell someone I trust. Two minds see further.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Use it. Right now. Before someone else notices.",
        "scores": {
          "palpatine": 3,
          "han": 2,
          "boba": 2,
          "kylo": 1,
          "grogu": -1
        },
        "saber": {
          "red": 2,
          "yellow": 1,
          "white": 2
        }
      },
      {
        "text": "Test it. Patterns lie sometimes.",
        "scores": {
          "obiwan": 3,
          "quigon": 2,
          "mace": 2,
          "maul": -1
        },
        "saber": {
          "yellow": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "think_07",
    "category": "THE WAY YOU THINK",
    "type": "personality",
    "image": null,
    "text": "You are stuck. Truly stuck. What do you actually do?",
    "answers": [
      {
        "text": "Stop trying. Walk away from the problem until the problem walks away from me.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "palpatine": -1
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "Try the dumbest possible idea. Sometimes it works.",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 1,
          "mace": -2,
          "palpatine": -2
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      },
      {
        "text": "Break the problem into smaller problems until one of them is small enough to solve.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "palpatine": 2,
          "vader": 1,
          "han": -1,
          "poe": -1
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "purple": 1
        }
      },
      {
        "text": "Ask the question I have been afraid to ask.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "kylo": 2,
          "obiwan": 1,
          "boba": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "think_08",
    "category": "THE WAY YOU THINK",
    "type": "image-answer",
    "text": "Choose a door.",
    "answers": [
      {
        "image": "./assets/quiz/q-think_08-a.png",
        "caption": "The Temple",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mace": 1,
          "palpatine": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-think_08-b.png",
        "caption": "The Blast Door",
        "scores": {
          "vader": 3,
          "palpatine": 2,
          "mace": 2,
          "boba": 2,
          "finn": -1
        },
        "saber": {
          "red": 3,
          "yellow": 2,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-think_08-c.png",
        "caption": "The Energy Door",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "kylo": 2,
          "palpatine": -1
        },
        "saber": {
          "blue": 3,
          "purple": 2,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-think_08-d.png",
        "caption": "The Forgotten One",
        "scores": {
          "han": 3,
          "kylo": 2,
          "maul": 2,
          "palpatine": 1,
          "mace": -2
        },
        "saber": {
          "white": 2,
          "red": 2,
          "purple": 1,
          "yellow": -1
        }
      }
    ]
  },
  {
    "id": "think_09",
    "category": "THE WAY YOU THINK",
    "type": "personality",
    "image": null,
    "text": "Your first plan failed. What is the very first thing that moves through you?",
    "answers": [
      {
        "text": "Information. Now I know something I did not know before.",
        "scores": {
          "obiwan": 3,
          "palpatine": 3,
          "yoda": 2,
          "luke": 1,
          "kylo": -1
        },
        "saber": {
          "yellow": 3,
          "blue": 2,
          "green": 1
        }
      },
      {
        "text": "A second plan, already forming. I had a backup.",
        "scores": {
          "palpatine": 3,
          "mace": 2,
          "boba": 2,
          "vader": 2,
          "finn": -1
        },
        "saber": {
          "yellow": 2,
          "red": 2,
          "white": 1
        }
      },
      {
        "text": "A laugh. The galaxy is hilarious sometimes.",
        "scores": {
          "han": 3,
          "poe": 3,
          "chewie": 1,
          "vader": -2,
          "palpatine": -2
        },
        "saber": {
          "white": 3,
          "blue": -1
        }
      },
      {
        "text": "Something hot. Something I have to channel before it channels me.",
        "scores": {
          "kylo": 3,
          "vader": 2,
          "maul": 2,
          "finn": 1,
          "grogu": -2,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "white": 1,
          "green": -2
        }
      }
    ]
  },
  {
    "id": "think_10",
    "category": "THE WAY YOU THINK",
    "type": "personality",
    "image": null,
    "text": "You have all the information you need. Most people would act now. Do you?",
    "answers": [
      {
        "text": "No. There is always one piece I am missing — and it is usually the important one.",
        "scores": {
          "yoda": 3,
          "palpatine": 3,
          "obiwan": 2,
          "mace": 1,
          "han": -2,
          "poe": -1
        },
        "saber": {
          "green": 2,
          "yellow": 3,
          "purple": 1
        }
      },
      {
        "text": "Yes. Waiting longer just lets fear in.",
        "scores": {
          "poe": 3,
          "han": 3,
          "mace": 1,
          "kylo": 1,
          "yoda": -2
        },
        "saber": {
          "white": 2,
          "blue": 2,
          "red": 1
        }
      },
      {
        "text": "I check with the people my decision affects.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I act, but I act small. Test the water before I jump.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "obiwan": 2,
          "quigon": 1,
          "maul": -1
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "think_11",
    "category": "THE WAY YOU THINK",
    "type": "personality",
    "image": null,
    "text": "When the room goes quiet and you have to decide — what is your mind doing?",
    "answers": [
      {
        "text": "It goes very quiet too. Like it is listening for something.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "obiwan": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Running through every outcome at once. I see the futures branching.",
        "scores": {
          "palpatine": 3,
          "obiwan": 2,
          "mace": 2,
          "vader": 1,
          "grogu": -1
        },
        "saber": {
          "yellow": 3,
          "red": 1,
          "purple": 1
        }
      },
      {
        "text": "It sharpens. Like a blade being drawn.",
        "scores": {
          "mace": 3,
          "vader": 2,
          "maul": 2,
          "boba": 2,
          "finn": -1,
          "grogu": -1
        },
        "saber": {
          "red": 2,
          "yellow": 2,
          "blue": 1
        }
      },
      {
        "text": "It goes loud. Too many voices. I just pick one and trust it.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "han": 2,
          "luke": 1,
          "palpatine": -2
        },
        "saber": {
          "red": 2,
          "blue": 2,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "think_12",
    "category": "THE WAY YOU THINK",
    "type": "personality",
    "image": null,
    "text": "Someone explains a complicated situation. You see the answer immediately. What do you do?",
    "answers": [
      {
        "text": "Wait. Let them work it out themselves. The answer means more if they find it.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "kylo": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Tell them. Time matters.",
        "scores": {
          "mace": 3,
          "vader": 2,
          "palpatine": 2,
          "han": 1,
          "grogu": -1
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "blue": 1
        }
      },
      {
        "text": "Ask a question that helps them see it without me saying it.",
        "scores": {
          "obiwan": 3,
          "quigon": 2,
          "luke": 2,
          "finn": 1,
          "maul": -1
        },
        "saber": {
          "blue": 3,
          "green": 2,
          "purple": 1
        }
      },
      {
        "text": "Keep it to myself. Information is leverage.",
        "scores": {
          "palpatine": 3,
          "boba": 2,
          "kylo": 1,
          "vader": 1,
          "finn": -3,
          "luke": -2,
          "grogu": -2
        },
        "saber": {
          "red": 3,
          "yellow": 1,
          "blue": -2
        }
      }
    ]
  },
  {
    "id": "think_13",
    "category": "THE WAY YOU THINK",
    "type": "image-answer",
    "text": "Which holocron whispers to you?",
    "answers": [
      {
        "image": "./assets/quiz/q-think_13-a.png",
        "caption": "The Jedi",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "mace": 2,
          "finn": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-think_13-b.png",
        "caption": "The Sith",
        "scores": {
          "palpatine": 3,
          "kylo": 3,
          "vader": 2,
          "maul": 2,
          "grogu": -3,
          "finn": -2
        },
        "saber": {
          "red": 3,
          "purple": 1,
          "blue": -2
        }
      },
      {
        "image": "./assets/quiz/q-think_13-c.png",
        "caption": "The Ancient",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 1,
          "palpatine": 1
        },
        "saber": {
          "green": 3,
          "purple": 2,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-think_13-d.png",
        "caption": "The Unknown",
        "scores": {
          "grogu": 3,
          "mando": 2,
          "han": 2,
          "finn": 1,
          "palpatine": -2
        },
        "saber": {
          "white": 3,
          "blue": 1,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "think_14",
    "category": "THE WAY YOU THINK",
    "type": "personality",
    "image": null,
    "text": "The smartest person in the room disagrees with you. What is your first move?",
    "answers": [
      {
        "text": "Listen harder. They might know something I do not.",
        "scores": {
          "luke": 3,
          "obiwan": 3,
          "finn": 2,
          "quigon": 2,
          "kylo": -2
        },
        "saber": {
          "blue": 3,
          "green": 2
        }
      },
      {
        "text": "Ask them what would change their mind.",
        "scores": {
          "obiwan": 3,
          "palpatine": 2,
          "mace": 2,
          "quigon": 1
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "Hold my position. Smart people are wrong all the time.",
        "scores": {
          "vader": 3,
          "mace": 3,
          "han": 2,
          "kylo": 2,
          "finn": -1
        },
        "saber": {
          "red": 2,
          "yellow": 2,
          "white": 1
        }
      },
      {
        "text": "Wait. The right argument arrives if you are patient.",
        "scores": {
          "yoda": 3,
          "palpatine": 3,
          "quigon": 1,
          "han": -1
        },
        "saber": {
          "green": 3,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "think_15",
    "category": "THE WAY YOU THINK",
    "type": "personality",
    "image": null,
    "text": "Your gut says one thing. The evidence says another. Which wins?",
    "answers": [
      {
        "text": "My gut. It has been collecting evidence longer than my mind has.",
        "scores": {
          "quigon": 3,
          "han": 3,
          "grogu": 2,
          "luke": 1,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "white": 2,
          "blue": 1
        }
      },
      {
        "text": "The evidence. My gut has been wrong before.",
        "scores": {
          "palpatine": 3,
          "mace": 3,
          "obiwan": 2,
          "boba": 1,
          "grogu": -2
        },
        "saber": {
          "yellow": 3,
          "red": 1,
          "blue": 1
        }
      },
      {
        "text": "I wait. Usually they agree if you give them time.",
        "scores": {
          "yoda": 3,
          "obiwan": 2,
          "quigon": 2,
          "mando": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Whichever one I am more afraid of being wrong about.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 2,
          "vader": 1,
          "palpatine": -1
        },
        "saber": {
          "blue": 2,
          "red": 2,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "think_16",
    "category": "THE WAY YOU THINK",
    "type": "personality",
    "image": null,
    "text": "How do you know when you are about to make a mistake?",
    "answers": [
      {
        "text": "I feel it in my chest. A weight that was not there before.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "grogu": 2,
          "kylo": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "I do not know. That is what makes them mistakes.",
        "scores": {
          "han": 3,
          "poe": 3,
          "chewie": 1,
          "palpatine": -2,
          "yoda": -1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      },
      {
        "text": "My logic stops working as cleanly. Something is off in the math.",
        "scores": {
          "palpatine": 3,
          "obiwan": 2,
          "mace": 2,
          "vader": 1,
          "grogu": -1
        },
        "saber": {
          "yellow": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "The quiet voice gets louder. The one I usually ignore.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 1,
          "maul": -2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "think_17",
    "category": "THE WAY YOU THINK",
    "type": "personality",
    "image": null,
    "text": "You overhear a secret. Useful, valuable, dangerous. What do you do with it?",
    "answers": [
      {
        "text": "Keep it. Some knowledge is meant to live in just one mind.",
        "scores": {
          "palpatine": 3,
          "boba": 3,
          "vader": 2,
          "mando": 1,
          "finn": -2,
          "luke": -1
        },
        "saber": {
          "red": 3,
          "yellow": 2,
          "white": 1
        }
      },
      {
        "text": "Find the person it most concerns and tell them.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "finn": 2,
          "quigon": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Forget it. Some things should not be carried.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "kylo": -1
        },
        "saber": {
          "green": 3,
          "purple": 1
        }
      },
      {
        "text": "Use it when the time is right. Information has a perfect moment.",
        "scores": {
          "palpatine": 3,
          "han": 2,
          "mace": 2,
          "obiwan": 1,
          "grogu": -2
        },
        "saber": {
          "yellow": 3,
          "red": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "think_18",
    "category": "THE WAY YOU THINK",
    "type": "scenario",
    "image": "",
    "text": "You walk into a war room. The plan on the map is wrong. Everyone has agreed to it. What do you do?",
    "answers": [
      {
        "text": "Speak up. Even if I am the only voice.",
        "scores": {
          "mace": 3,
          "luke": 3,
          "poe": 2,
          "finn": 2,
          "vader": 1,
          "boba": -2
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "yellow": 1
        }
      },
      {
        "text": "Ask a question that makes them see it themselves.",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "palpatine": 2,
          "mace": 1
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "Say nothing. Adjust my own plan around their mistake.",
        "scores": {
          "palpatine": 3,
          "boba": 3,
          "han": 2,
          "vader": 1,
          "finn": -2
        },
        "saber": {
          "yellow": 2,
          "red": 2,
          "white": 2
        }
      },
      {
        "text": "Walk it through with the most senior person in private. No spectacle.",
        "scores": {
          "obiwan": 3,
          "mando": 2,
          "mace": 2,
          "luke": 1,
          "kylo": -1
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "think_19",
    "category": "THE WAY YOU THINK",
    "type": "personality",
    "image": null,
    "text": "When you are alone with your thoughts, what is happening in there?",
    "answers": [
      {
        "text": "Quiet. I have learned to make space inside.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "grogu": 1,
          "kylo": -2
        },
        "saber": {
          "green": 3,
          "purple": 1,
          "blue": 1
        }
      },
      {
        "text": "A constant conversation. Sometimes it is exhausting.",
        "scores": {
          "kylo": 3,
          "luke": 2,
          "finn": 2,
          "palpatine": 1,
          "grogu": -1
        },
        "saber": {
          "red": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "Plans. Always plans. The next move, the move after that.",
        "scores": {
          "palpatine": 3,
          "mace": 2,
          "vader": 2,
          "boba": 2,
          "han": -1
        },
        "saber": {
          "yellow": 3,
          "red": 2
        }
      },
      {
        "text": "Honestly? Music or stories. I do not actually like sitting in silence.",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "chewie": 1,
          "yoda": -2
        },
        "saber": {
          "white": 3,
          "blue": 1,
          "green": -1
        }
      }
    ]
  },
  {
    "id": "think_20",
    "category": "THE WAY YOU THINK",
    "type": "personality",
    "image": null,
    "text": "You have to make a decision that affects other people. What weighs on you most?",
    "answers": [
      {
        "text": "What it costs them. Even if they never know.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "finn": 2,
          "quigon": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "What it costs me to make it. The weight is mine to carry.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "mace": 2,
          "boba": 1,
          "kylo": 1
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "white": 2,
          "black": 1
        }
      },
      {
        "text": "What it teaches them. About themselves, about me, about the galaxy.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 1
        },
        "saber": {
          "green": 3,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "Not much. Decisions are decisions. You make them and you move.",
        "scores": {
          "han": 3,
          "palpatine": 2,
          "boba": 2,
          "poe": 1,
          "finn": -2,
          "luke": -2
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "think_21",
    "category": "THE WAY YOU THINK",
    "type": "personality",
    "image": null,
    "text": "You realize you have been wrong about something for a long time. What do you do?",
    "answers": [
      {
        "text": "Sit with it. Let it teach me something I cannot rush.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 1,
          "vader": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Tell anyone I led wrong. Then fix it.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "finn": 2,
          "mace": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Quietly correct course. No announcement needed.",
        "scores": {
          "mando": 3,
          "boba": 2,
          "han": 2,
          "palpatine": 2,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "text": "Get angry at myself for not seeing it sooner.",
        "scores": {
          "kylo": 3,
          "vader": 2,
          "mace": 1,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "purple": 1,
          "green": -2
        }
      }
    ]
  },
  {
    "id": "think_22",
    "category": "THE WAY YOU THINK",
    "type": "personality",
    "image": null,
    "text": "How do you make peace with a problem you cannot solve?",
    "answers": [
      {
        "text": "I stop trying to solve it and start trying to understand it.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "kylo": -2
        },
        "saber": {
          "green": 3,
          "purple": 1,
          "blue": 1
        }
      },
      {
        "text": "I find the part of it I can solve, and I solve that.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "obiwan": 2,
          "boba": 1
        },
        "saber": {
          "yellow": 3,
          "blue": 1
        }
      },
      {
        "text": "I do not. Unsolved problems sit in my chest and they ache.",
        "scores": {
          "kylo": 3,
          "luke": 2,
          "finn": 2,
          "vader": 1,
          "yoda": -2
        },
        "saber": {
          "red": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "I trust that it will solve itself in time. The galaxy takes care of things.",
        "scores": {
          "quigon": 3,
          "grogu": 3,
          "han": 2,
          "yoda": 1,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "think_23",
    "category": "THE WAY YOU THINK",
    "type": "personality",
    "image": null,
    "text": "When you finally understand something, how do you know it is true understanding and not just an idea?",
    "answers": [
      {
        "text": "My body relaxes. I did not even realize it was tense.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "luke": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I can explain it to someone who knows nothing about it.",
        "scores": {
          "obiwan": 3,
          "luke": 2,
          "finn": 2,
          "mace": 1
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "It survives every test I throw at it.",
        "scores": {
          "palpatine": 3,
          "mace": 3,
          "vader": 2,
          "obiwan": 1
        },
        "saber": {
          "yellow": 3,
          "red": 1,
          "purple": 1
        }
      },
      {
        "text": "I can use it without thinking about it.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "han": 2,
          "mace": 1
        },
        "saber": {
          "white": 2,
          "yellow": 2,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "think_24",
    "category": "THE WAY YOU THINK",
    "type": "personality",
    "image": null,
    "text": "A question has been bothering you for days. What kind of question is it?",
    "answers": [
      {
        "text": "A question about why someone did what they did.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "kylo": 2,
          "palpatine": -1
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "green": 1
        }
      },
      {
        "text": "A question about whether I am doing the right thing.",
        "scores": {
          "kylo": 3,
          "vader": 2,
          "luke": 2,
          "mace": 1,
          "palpatine": -3
        },
        "saber": {
          "purple": 3,
          "blue": 2,
          "red": 1
        }
      },
      {
        "text": "A question I cannot quite put into words yet.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "obiwan": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "A practical question. How do I make this work?",
        "scores": {
          "han": 3,
          "mace": 2,
          "mando": 2,
          "boba": 2,
          "poe": 1
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "think_25",
    "category": "THE WAY YOU THINK",
    "type": "image-answer",
    "text": "Where does your mind live?",
    "answers": [
      {
        "image": "./assets/quiz/q-think_25-a.png",
        "caption": "The Mountain Temple",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "kylo": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-think_25-b.png",
        "caption": "The Cantina",
        "scores": {
          "han": 3,
          "poe": 3,
          "chewie": 2,
          "finn": 1,
          "yoda": -2,
          "palpatine": -1
        },
        "saber": {
          "white": 3,
          "blue": 1,
          "green": -2
        }
      },
      {
        "image": "./assets/quiz/q-think_25-c.png",
        "caption": "The Cockpit",
        "scores": {
          "poe": 3,
          "han": 2,
          "mace": 2,
          "mando": 2,
          "palpatine": 1,
          "grogu": -1
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-think_25-d.png",
        "caption": "The Empty Desert",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "kylo": 2,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "yellow": 1,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "fight_01",
    "category": "THE WAY YOU FIGHT",
    "type": "scenario",
    "image": "",
    "text": "You are pulled into a fight you did not start. What happens in your body first?",
    "answers": [
      {
        "text": "My breathing slows down. Everything else speeds up.",
        "scores": {
          "yoda": 3,
          "mace": 3,
          "obiwan": 2,
          "boba": 2,
          "vader": 1,
          "finn": -1
        },
        "saber": {
          "green": 2,
          "yellow": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "A grin. I have been waiting for this without knowing it.",
        "scores": {
          "maul": 3,
          "han": 2,
          "poe": 2,
          "kylo": 2,
          "grogu": -2,
          "yoda": -1
        },
        "saber": {
          "red": 3,
          "white": 2
        }
      },
      {
        "text": "My focus narrows. Only the next move exists.",
        "scores": {
          "mando": 3,
          "vader": 2,
          "boba": 2,
          "mace": 1,
          "palpatine": 1
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "red": 1
        }
      },
      {
        "text": "Sadness. I wish it had not come to this.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "quigon": 2,
          "obiwan": 1,
          "maul": -2
        },
        "saber": {
          "blue": 3,
          "green": 2,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "fight_02",
    "category": "THE WAY YOU FIGHT",
    "type": "personality",
    "image": null,
    "text": "When you fight, what do you trust most?",
    "answers": [
      {
        "text": "My training. My body knows what my mind cannot.",
        "scores": {
          "mace": 3,
          "boba": 3,
          "vader": 2,
          "mando": 2,
          "grogu": -1
        },
        "saber": {
          "yellow": 3,
          "red": 1,
          "blue": 1
        }
      },
      {
        "text": "My instincts. The right move appears when I need it.",
        "scores": {
          "quigon": 3,
          "han": 3,
          "poe": 2,
          "luke": 1,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "white": 2,
          "blue": 1
        }
      },
      {
        "text": "My patience. Most fights end before they begin if you wait.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 2,
          "kylo": -2
        },
        "saber": {
          "green": 3,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "My anger. Channeled correctly, it is the strongest weapon I have.",
        "scores": {
          "maul": 3,
          "kylo": 3,
          "vader": 2,
          "palpatine": 1,
          "yoda": -3,
          "grogu": -2
        },
        "saber": {
          "red": 3,
          "white": 1,
          "green": -2
        }
      }
    ]
  },
  {
    "id": "fight_03",
    "category": "THE WAY YOU FIGHT",
    "type": "personality",
    "image": null,
    "text": "How do you know when a fight is over?",
    "answers": [
      {
        "text": "When the other person stops fighting.",
        "scores": {
          "obiwan": 3,
          "mace": 2,
          "mando": 2,
          "luke": 1,
          "maul": -2
        },
        "saber": {
          "blue": 3,
          "yellow": 1,
          "purple": 1
        }
      },
      {
        "text": "When there is nothing left to fight for.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 1,
          "vader": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "When I have made absolutely sure it cannot start again.",
        "scores": {
          "vader": 3,
          "palpatine": 3,
          "maul": 3,
          "boba": 2,
          "finn": -2,
          "grogu": -2
        },
        "saber": {
          "red": 3,
          "yellow": 1,
          "black": 1
        }
      },
      {
        "text": "When I have walked away and can still breathe.",
        "scores": {
          "han": 3,
          "mando": 2,
          "finn": 2,
          "chewie": 1,
          "mace": -1
        },
        "saber": {
          "white": 3,
          "blue": 1,
          "red": -1
        }
      }
    ]
  },
  {
    "id": "fight_05",
    "category": "THE WAY YOU FIGHT",
    "type": "personality",
    "image": null,
    "text": "Someone is hurting someone weaker than them. What is your first move?",
    "answers": [
      {
        "text": "I step between them. No words yet. Just space.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "chewie": 2,
          "finn": 2,
          "palpatine": -3,
          "maul": -2
        },
        "saber": {
          "blue": 3,
          "yellow": 1,
          "white": 1
        }
      },
      {
        "text": "I make the bully see me first. Their fight is now with me.",
        "scores": {
          "mace": 3,
          "vader": 2,
          "kylo": 2,
          "han": 2,
          "boba": 1,
          "grogu": -1
        },
        "saber": {
          "red": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "I help the weaker one to safety, then deal with the rest.",
        "scores": {
          "obiwan": 3,
          "finn": 3,
          "luke": 2,
          "mando": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "I make sure the bully never wants to do this again.",
        "scores": {
          "vader": 3,
          "mace": 3,
          "maul": 2,
          "boba": 1,
          "finn": -1,
          "grogu": -2
        },
        "saber": {
          "red": 3,
          "yellow": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "fight_06",
    "category": "THE WAY YOU FIGHT",
    "type": "personality",
    "image": null,
    "text": "You realize you are losing. What changes inside you?",
    "answers": [
      {
        "text": "Nothing. I keep going. The end is not the end.",
        "scores": {
          "mace": 3,
          "vader": 3,
          "maul": 3,
          "mando": 2,
          "finn": 1
        },
        "saber": {
          "red": 2,
          "yellow": 2,
          "white": 1
        }
      },
      {
        "text": "A different question forms. What is this fight actually about?",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I look for the exit. Surviving today is winning.",
        "scores": {
          "han": 3,
          "mando": 2,
          "boba": 2,
          "poe": 1,
          "maul": -1
        },
        "saber": {
          "white": 3,
          "blue": 1,
          "red": -1
        }
      },
      {
        "text": "Something opens up. I had more in me than I knew.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "kylo": 2,
          "palpatine": -1
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "fight_07",
    "category": "THE WAY YOU FIGHT",
    "type": "personality",
    "image": null,
    "text": "When someone insults you, what is your real first reaction?",
    "answers": [
      {
        "text": "Curiosity. Why did they say that? What are they actually feeling?",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "yoda": 2,
          "luke": 1,
          "kylo": -2
        },
        "saber": {
          "blue": 3,
          "green": 2,
          "purple": 1
        }
      },
      {
        "text": "Heat. Quick and hot. I have to choose what to do with it.",
        "scores": {
          "kylo": 3,
          "finn": 2,
          "han": 2,
          "vader": 2,
          "grogu": -2,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "blue": 1
        }
      },
      {
        "text": "Quiet. I have already decided how this person fits into my life now.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "mace": 2,
          "finn": -1
        },
        "saber": {
          "white": 2,
          "yellow": 2,
          "red": 1
        }
      },
      {
        "text": "I laugh. Insults are usually about the person saying them.",
        "scores": {
          "han": 3,
          "poe": 3,
          "chewie": 1,
          "kylo": -1
        },
        "saber": {
          "white": 3,
          "blue": -1,
          "red": -1
        }
      }
    ]
  },
  {
    "id": "fight_09",
    "category": "THE WAY YOU FIGHT",
    "type": "scenario",
    "image": "",
    "text": "Three opponents are waiting on the other side of the door. You have one breath before you walk through. What do you do with it?",
    "answers": [
      {
        "text": "I let it go slowly. Whatever happens next will not happen to me — it will happen through me.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mace": 1,
          "kylo": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I check my weapon one last time. Calm hands win fights.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "mace": 2,
          "vader": 1,
          "finn": -1
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "red": 1
        }
      },
      {
        "text": "I picture the people I am doing this for.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mando": 2,
          "obiwan": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "I let the anger rise. I am going to need it.",
        "scores": {
          "maul": 3,
          "kylo": 3,
          "vader": 2,
          "mace": 1,
          "grogu": -2,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "purple": 1,
          "green": -2
        }
      }
    ]
  },
  {
    "id": "fight_10",
    "category": "THE WAY YOU FIGHT",
    "type": "personality",
    "image": null,
    "text": "When the fight is over and you won — what do you do with that feeling?",
    "answers": [
      {
        "text": "Let it pass through me. Holding onto victory makes you weaker, not stronger.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 1,
          "kylo": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Sit with it quietly. Earned things should be felt fully.",
        "scores": {
          "mando": 3,
          "boba": 2,
          "mace": 2,
          "vader": 1
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "red": 1
        }
      },
      {
        "text": "Find the people I love and tell them.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "han": 2,
          "poe": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "white": 1,
          "green": 1
        }
      },
      {
        "text": "Already think about what comes next. Victories are stepping stones.",
        "scores": {
          "palpatine": 3,
          "vader": 2,
          "mace": 2,
          "kylo": 1,
          "grogu": -1
        },
        "saber": {
          "yellow": 3,
          "red": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "fight_11",
    "category": "THE WAY YOU FIGHT",
    "type": "personality",
    "image": null,
    "text": "You have to fight someone you respect. What do you bring into that fight?",
    "answers": [
      {
        "text": "Honor. The same skill they brought, the same care for them as a person.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "obiwan": 3,
          "luke": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "yellow": 2,
          "purple": 1
        }
      },
      {
        "text": "Sadness, but no hesitation. Respect does not mean I lose on purpose.",
        "scores": {
          "vader": 3,
          "mace": 2,
          "obiwan": 2,
          "kylo": 2,
          "grogu": -1
        },
        "saber": {
          "red": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "A wish that this could be different. I fight, but I am also still hoping.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "quigon": 2,
          "kylo": 1
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "My absolute best. They deserve my full strength.",
        "scores": {
          "mace": 3,
          "vader": 2,
          "maul": 2,
          "boba": 2,
          "finn": -1,
          "grogu": -1
        },
        "saber": {
          "red": 2,
          "yellow": 2,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "fight_12",
    "category": "THE WAY YOU FIGHT",
    "type": "personality",
    "image": null,
    "text": "How does fear show up in you when you fight?",
    "answers": [
      {
        "text": "It does not. I let it leave me before I begin.",
        "scores": {
          "yoda": 3,
          "mace": 3,
          "vader": 2,
          "mando": 2,
          "finn": -1
        },
        "saber": {
          "green": 3,
          "yellow": 2,
          "red": 1
        }
      },
      {
        "text": "It sharpens everything. Fear is just energy with bad press.",
        "scores": {
          "kylo": 3,
          "han": 3,
          "poe": 2,
          "luke": 1,
          "grogu": -2
        },
        "saber": {
          "red": 2,
          "blue": 2,
          "white": 1
        }
      },
      {
        "text": "I notice it but I keep moving. It is information, not instruction.",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "boba": 2,
          "mace": 1
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "white": 1
        }
      },
      {
        "text": "I admit it to myself. Then I do the thing anyway.",
        "scores": {
          "finn": 3,
          "luke": 3,
          "poe": 2,
          "kylo": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "fight_14",
    "category": "THE WAY YOU FIGHT",
    "type": "personality",
    "image": null,
    "text": "When someone underestimates you in a fight, you—",
    "answers": [
      {
        "text": "Let them. The biggest advantage is being underestimated.",
        "scores": {
          "palpatine": 3,
          "han": 3,
          "boba": 2,
          "grogu": 2,
          "mace": -1
        },
        "saber": {
          "white": 3,
          "yellow": 1,
          "red": 1
        }
      },
      {
        "text": "Show them my real strength immediately. No reason to pretend.",
        "scores": {
          "mace": 3,
          "vader": 3,
          "maul": 2,
          "kylo": 2,
          "grogu": -1
        },
        "saber": {
          "red": 3,
          "yellow": 1,
          "purple": 1
        }
      },
      {
        "text": "Pity them. They will learn quickly enough.",
        "scores": {
          "palpatine": 2,
          "vader": 2,
          "kylo": 2,
          "mace": 1,
          "finn": -1,
          "luke": -1
        },
        "saber": {
          "red": 2,
          "yellow": 2,
          "purple": 1
        }
      },
      {
        "text": "Smile. This is going to be more interesting than I thought.",
        "scores": {
          "han": 3,
          "poe": 3,
          "maul": 2,
          "kylo": 1,
          "yoda": -1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "fight_15",
    "category": "THE WAY YOU FIGHT",
    "type": "personality",
    "image": null,
    "text": "What is more important — winning the fight, or staying yourself in it?",
    "answers": [
      {
        "text": "Staying myself. A win that costs you who you are is a loss.",
        "scores": {
          "yoda": 3,
          "luke": 3,
          "obiwan": 2,
          "finn": 2,
          "mando": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 2,
          "purple": 1
        }
      },
      {
        "text": "Winning. I can recover who I am. I cannot recover from losing.",
        "scores": {
          "palpatine": 3,
          "vader": 2,
          "maul": 2,
          "kylo": 1,
          "grogu": -2
        },
        "saber": {
          "red": 3,
          "yellow": 1
        }
      },
      {
        "text": "They are the same thing. If I lose myself, I have already lost.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "obiwan": 2,
          "vader": 1,
          "kylo": 1
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "purple": 2
        }
      },
      {
        "text": "Honestly? I do not think about it that way. I just fight.",
        "scores": {
          "han": 3,
          "chewie": 2,
          "poe": 2,
          "boba": 1,
          "mace": -1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "fight_16",
    "category": "THE WAY YOU FIGHT",
    "type": "scenario",
    "image": "",
    "text": "You enter an arena. There is one weapon in the center. Your opponent has not arrived yet. What do you do?",
    "answers": [
      {
        "text": "Walk past the weapon. I am not picking up something I did not bring.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "obiwan": 1,
          "maul": -2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "Pick it up. Test the weight. Get to know it before they do.",
        "scores": {
          "mace": 3,
          "vader": 2,
          "mando": 2,
          "boba": 2,
          "han": 1
        },
        "saber": {
          "yellow": 3,
          "red": 1,
          "purple": 1
        }
      },
      {
        "text": "Hide it. Move it. Change the rules of the fight before it starts.",
        "scores": {
          "palpatine": 3,
          "han": 3,
          "boba": 2,
          "kylo": 2,
          "finn": -1,
          "mace": -2
        },
        "saber": {
          "white": 3,
          "red": 1,
          "yellow": -1
        }
      },
      {
        "text": "Wait by the door. I want to see who I am dealing with before I commit.",
        "scores": {
          "obiwan": 3,
          "mando": 2,
          "palpatine": 2,
          "boba": 1
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "fight_17",
    "category": "THE WAY YOU FIGHT",
    "type": "personality",
    "image": null,
    "text": "You are about to lose to someone who deserves to win. What do you do?",
    "answers": [
      {
        "text": "Let them. Sometimes losing is the right answer.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2,
          "palpatine": -3,
          "kylo": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Fight harder. Even good people deserve a real opponent.",
        "scores": {
          "mace": 3,
          "vader": 2,
          "mando": 2,
          "finn": 2,
          "palpatine": 1
        },
        "saber": {
          "red": 2,
          "yellow": 2,
          "blue": 1
        }
      },
      {
        "text": "Take the loss with grace. Tell them they were the better fighter.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "finn": 2,
          "han": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "I do not believe anyone \"deserves\" to win. We just see who is left standing.",
        "scores": {
          "boba": 3,
          "han": 2,
          "palpatine": 2,
          "vader": 1,
          "finn": -2
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "fight_18",
    "category": "THE WAY YOU FIGHT",
    "type": "personality",
    "image": null,
    "text": "How do you decide when violence is the answer?",
    "answers": [
      {
        "text": "When everything else has failed and someone I love is in danger.",
        "scores": {
          "mando": 3,
          "mace": 2,
          "finn": 2,
          "chewie": 2,
          "vader": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "yellow": 1,
          "white": 1
        }
      },
      {
        "text": "It is almost never the answer. I always look for another way first.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2,
          "maul": -3
        },
        "saber": {
          "green": 3,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "When it is the most efficient solution. Force is a tool like any other.",
        "scores": {
          "palpatine": 3,
          "vader": 3,
          "boba": 2,
          "mace": 1,
          "finn": -2,
          "grogu": -2
        },
        "saber": {
          "red": 3,
          "yellow": 1
        }
      },
      {
        "text": "When I am pushed past a line I drew long ago. It is rare.",
        "scores": {
          "mando": 3,
          "han": 2,
          "obiwan": 2,
          "mace": 2,
          "kylo": 1
        },
        "saber": {
          "white": 2,
          "blue": 2,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "fight_19",
    "category": "THE WAY YOU FIGHT",
    "type": "personality",
    "image": null,
    "text": "You have your enemy on the ground. They are not getting up. What now?",
    "answers": [
      {
        "text": "I step back. The fight is over. Anything more is something else.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "mace": 2,
          "mando": 2,
          "palpatine": -3,
          "maul": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "I make sure. Truly sure. I do not want to fight them twice.",
        "scores": {
          "vader": 3,
          "palpatine": 3,
          "maul": 3,
          "boba": 2,
          "luke": -3,
          "finn": -2
        },
        "saber": {
          "red": 3,
          "yellow": 1,
          "black": 1
        }
      },
      {
        "text": "I offer a hand. They might be able to walk a different path now.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "quigon": 2,
          "obiwan": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "I leave. I do not look back. The fight chose me — I do not choose what comes after.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "han": 2,
          "vader": 1,
          "luke": -1
        },
        "saber": {
          "white": 3,
          "yellow": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "fight_20",
    "category": "THE WAY YOU FIGHT",
    "type": "personality",
    "image": null,
    "text": "When you fight to protect someone, what changes about you?",
    "answers": [
      {
        "text": "Everything sharpens. I am suddenly capable of more than I knew.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mace": 2,
          "mando": 2,
          "palpatine": -1
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Nothing. I fight the same way always. Cause does not change technique.",
        "scores": {
          "mace": 3,
          "boba": 3,
          "vader": 2,
          "palpatine": 1,
          "finn": -1
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      },
      {
        "text": "I become more dangerous. Something is unlocked.",
        "scores": {
          "vader": 3,
          "mando": 3,
          "kylo": 2,
          "mace": 2,
          "grogu": -2
        },
        "saber": {
          "red": 2,
          "blue": 2,
          "white": 1
        }
      },
      {
        "text": "My fear vanishes. I forget myself entirely.",
        "scores": {
          "yoda": 2,
          "luke": 3,
          "finn": 2,
          "chewie": 3,
          "quigon": 2,
          "palpatine": -2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "fight_21",
    "category": "THE WAY YOU FIGHT",
    "type": "personality",
    "image": null,
    "text": "You realize mid-fight that you are wrong. The other person is right. What do you do?",
    "answers": [
      {
        "text": "Stop. Lower my weapon. Speak.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "finn": 2,
          "quigon": 2,
          "palpatine": -2,
          "maul": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "Fight harder. I have committed. I do not unmake decisions mid-action.",
        "scores": {
          "vader": 3,
          "maul": 2,
          "mace": 2,
          "boba": 1,
          "kylo": 1,
          "luke": -2
        },
        "saber": {
          "red": 3,
          "yellow": 1
        }
      },
      {
        "text": "Slow down. Defend only. Wait for an opening to talk.",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "mace": 1,
          "han": 1
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "Feel sick about it. But finish what I started, then make it right after.",
        "scores": {
          "kylo": 3,
          "vader": 2,
          "finn": 2,
          "luke": 1,
          "palpatine": -1
        },
        "saber": {
          "red": 2,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "fight_22",
    "category": "THE WAY YOU FIGHT",
    "type": "personality",
    "image": null,
    "text": "What do you actually need from a fight?",
    "answers": [
      {
        "text": "To be done with it. I do not enjoy fighting — I survive it.",
        "scores": {
          "mando": 3,
          "han": 2,
          "finn": 2,
          "yoda": 2,
          "obiwan": 2,
          "maul": -2
        },
        "saber": {
          "white": 2,
          "blue": 2,
          "green": 1
        }
      },
      {
        "text": "To be tested. I learn who I am when something is pushing back.",
        "scores": {
          "mace": 3,
          "luke": 2,
          "kylo": 2,
          "vader": 1,
          "palpatine": 1
        },
        "saber": {
          "purple": 2,
          "yellow": 2,
          "red": 1
        }
      },
      {
        "text": "To prove something. To them, to myself, sometimes I am not even sure which.",
        "scores": {
          "kylo": 3,
          "maul": 2,
          "han": 1,
          "finn": 1,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "white": 1
        }
      },
      {
        "text": "To protect. Without something to protect, I would not fight at all.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "finn": 2,
          "luke": 2,
          "mace": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "fight_23",
    "category": "THE WAY YOU FIGHT",
    "type": "personality",
    "image": null,
    "text": "After a fight, what do you do alone?",
    "answers": [
      {
        "text": "Replay it. Every move. What I did, what I could have done.",
        "scores": {
          "mace": 3,
          "palpatine": 2,
          "kylo": 2,
          "vader": 2,
          "boba": 1
        },
        "saber": {
          "yellow": 3,
          "red": 1,
          "purple": 1
        }
      },
      {
        "text": "Let it go. Carrying old fights makes you slow.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "mando": 2,
          "han": 2,
          "kylo": -2
        },
        "saber": {
          "green": 3,
          "white": 1
        }
      },
      {
        "text": "Sit with how it felt. Not the moves — the feeling.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "grogu": 1,
          "palpatine": -1
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "green": 1
        }
      },
      {
        "text": "Eat. Drink. Sleep. I will think about it later, maybe.",
        "scores": {
          "han": 3,
          "chewie": 3,
          "boba": 2,
          "mando": 1,
          "mace": -1
        },
        "saber": {
          "white": 3,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "fight_24",
    "category": "THE WAY YOU FIGHT",
    "type": "personality",
    "image": null,
    "text": "Some people fight to win. Some fight to end. Some fight because they have to. Which are you?",
    "answers": [
      {
        "text": "I fight to end. The faster the fight is over, the better for everyone.",
        "scores": {
          "vader": 3,
          "mace": 3,
          "boba": 2,
          "mando": 2,
          "maul": 1,
          "kylo": 1
        },
        "saber": {
          "red": 2,
          "yellow": 2,
          "white": 1
        }
      },
      {
        "text": "I fight to win. Losing was never on my list of options.",
        "scores": {
          "palpatine": 3,
          "maul": 3,
          "kylo": 2,
          "han": 2,
          "mace": 1,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "white": 1
        }
      },
      {
        "text": "I fight because I have to. I would prefer almost anything else.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mando": 2,
          "obiwan": 2,
          "quigon": 1,
          "maul": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "I fight to learn. Each one teaches me something I needed.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 2,
          "obiwan": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "fight_04",
    "category": "THE WAY YOU FIGHT",
    "type": "image-answer",
    "text": "Pick a weapon.",
    "answers": [
      {
        "image": "./assets/quiz/q-fight_04-a.png",
        "caption": "The Lightsaber",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "mace": 2,
          "finn": 1,
          "maul": -1
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-fight_04-b.png",
        "caption": "The Blaster",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "leia": 1,
          "mando": 1,
          "yoda": -1
        },
        "saber": {
          "white": 3,
          "blue": -1,
          "green": -1
        }
      },
      {
        "image": "./assets/quiz/q-fight_04-c.png",
        "caption": "The Bowcaster",
        "scores": {
          "chewie": 3,
          "mando": 2,
          "boba": 2,
          "han": 1,
          "palpatine": -1
        },
        "saber": {
          "white": 2,
          "red": 1,
          "yellow": 1
        }
      },
      {
        "image": "./assets/quiz/q-fight_04-d.png",
        "caption": "No Weapon",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 3,
          "luke": 1,
          "palpatine": -3,
          "maul": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "red": -3
        }
      }
    ]
  },
  {
    "id": "fight_08",
    "category": "THE WAY YOU FIGHT",
    "type": "image-answer",
    "text": "Which battlefield draws you in?",
    "answers": [
      {
        "image": "./assets/quiz/q-fight_08-a.png",
        "caption": "The Frozen Plain",
        "scores": {
          "mace": 3,
          "vader": 2,
          "boba": 2,
          "mando": 1,
          "finn": 1
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "white": 1,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-fight_08-b.png",
        "caption": "The Lava Field",
        "scores": {
          "vader": 3,
          "maul": 3,
          "kylo": 2,
          "palpatine": 1,
          "grogu": -2
        },
        "saber": {
          "red": 3,
          "purple": 1,
          "black": 1
        }
      },
      {
        "image": "./assets/quiz/q-fight_08-c.png",
        "caption": "The Sacred Grove",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "grogu": 1,
          "mando": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-fight_08-d.png",
        "caption": "The Spaceport",
        "scores": {
          "han": 3,
          "boba": 3,
          "mando": 2,
          "poe": 1,
          "yoda": -2
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "fight_13",
    "category": "THE WAY YOU FIGHT",
    "type": "image-answer",
    "text": "When you fight, you become—",
    "answers": [
      {
        "image": "./assets/quiz/q-fight_13-a.png",
        "caption": "Still Water",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mace": 1,
          "maul": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-fight_13-b.png",
        "caption": "A Wildfire",
        "scores": {
          "maul": 3,
          "kylo": 3,
          "vader": 2,
          "finn": 1,
          "yoda": -3,
          "grogu": -2
        },
        "saber": {
          "red": 3,
          "white": 1,
          "green": -3
        }
      },
      {
        "image": "./assets/quiz/q-fight_13-c.png",
        "caption": "A Sunbreak",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "mace": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "yellow": 2,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-fight_13-d.png",
        "caption": "A Stone Wall",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "mace": 2,
          "vader": 2,
          "boba": 1
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "fight_25",
    "category": "THE WAY YOU FIGHT",
    "type": "image-answer",
    "text": "After the fight is over — which moment is yours?",
    "answers": [
      {
        "image": "./assets/quiz/q-fight_25-a.png",
        "caption": "Walking Away",
        "scores": {
          "mando": 3,
          "boba": 3,
          "han": 2,
          "vader": 1,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "image": "./assets/quiz/q-fight_25-b.png",
        "caption": "Kneeling Still",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2,
          "kylo": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-fight_25-c.png",
        "caption": "Helping Up",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "han": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-fight_25-d.png",
        "caption": "Standing Tall",
        "scores": {
          "mace": 3,
          "vader": 2,
          "palpatine": 2,
          "kylo": 2,
          "poe": 1
        },
        "saber": {
          "red": 2,
          "yellow": 2,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "choose_01",
    "category": "THE WAY YOU CHOOSE",
    "type": "scenario",
    "image": "",
    "text": "The rules say no. Your heart says yes. What do you actually do?",
    "answers": [
      {
        "text": "I follow the rules. They exist for a reason — usually a reason I do not see yet.",
        "scores": {
          "mace": 3,
          "obiwan": 2,
          "vader": 2,
          "palpatine": 1,
          "han": -3,
          "finn": -1
        },
        "saber": {
          "yellow": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I follow my heart. Always. The rules can adjust.",
        "scores": {
          "finn": 3,
          "luke": 3,
          "quigon": 2,
          "han": 1,
          "mace": -3,
          "vader": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "I figure out which kind of \"no\" the rule is. Some rules are walls, some are doors.",
        "scores": {
          "obiwan": 3,
          "han": 3,
          "quigon": 2,
          "palpatine": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1,
          "white": 1
        }
      },
      {
        "text": "I make my own rule. Then I follow that.",
        "scores": {
          "kylo": 3,
          "han": 2,
          "maul": 2,
          "mando": 2,
          "mace": -3,
          "obiwan": -2
        },
        "saber": {
          "white": 3,
          "red": 1,
          "black": 1,
          "blue": -2
        }
      }
    ]
  },
  {
    "id": "choose_02",
    "category": "THE WAY YOU CHOOSE",
    "type": "personality",
    "image": null,
    "text": "A shortcut exists. It involves bending your values slightly. Do you take it?",
    "answers": [
      {
        "text": "Never. My values are not negotiable, especially when no one is watching.",
        "scores": {
          "mace": 3,
          "obiwan": 3,
          "quigon": 2,
          "luke": 1,
          "han": -3,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 2,
          "purple": 1
        }
      },
      {
        "text": "If the cause is good enough, yes. The point is the outcome.",
        "scores": {
          "luke": 3,
          "mace": 1,
          "vader": 2,
          "finn": 1,
          "obiwan": -1
        },
        "saber": {
          "purple": 3,
          "blue": 1,
          "red": 1
        }
      },
      {
        "text": "If no one gets hurt and it saves time, sure.",
        "scores": {
          "han": 3,
          "poe": 2,
          "chewie": 1,
          "mace": -3,
          "obiwan": -2
        },
        "saber": {
          "white": 3,
          "blue": -2
        }
      },
      {
        "text": "I define my own values. The shortcut is fine.",
        "scores": {
          "palpatine": 3,
          "kylo": 2,
          "maul": 1,
          "mace": -3,
          "obiwan": -3,
          "grogu": -1
        },
        "saber": {
          "red": 2,
          "white": 2,
          "black": 1
        }
      }
    ]
  },
  {
    "id": "choose_03",
    "category": "THE WAY YOU CHOOSE",
    "type": "personality",
    "image": null,
    "text": "You discover the person you trusted most has been lying to you. What do you do?",
    "answers": [
      {
        "text": "Feel the hurt fully. Seek understanding. Then decide.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "quigon": 1,
          "kylo": -1
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "Cut them off completely. Trust is everything.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "mace": 2,
          "vader": 2,
          "grogu": -1
        },
        "saber": {
          "white": 3,
          "yellow": 1,
          "red": 1
        }
      },
      {
        "text": "Use what you learned about them as information.",
        "scores": {
          "palpatine": 3,
          "han": 2,
          "vader": 1,
          "boba": 1,
          "finn": -2,
          "luke": -1
        },
        "saber": {
          "red": 2,
          "yellow": 2,
          "white": 1
        }
      },
      {
        "text": "Rage. Then channel it into something — a project, a fight, a change.",
        "scores": {
          "kylo": 3,
          "vader": 2,
          "finn": 1,
          "mace": 1,
          "yoda": -2,
          "quigon": -2
        },
        "saber": {
          "red": 3,
          "purple": 1,
          "green": -2
        }
      }
    ]
  },
  {
    "id": "choose_05",
    "category": "THE WAY YOU CHOOSE",
    "type": "personality",
    "image": null,
    "text": "You realize halfway through that you are doing the wrong thing. What stops you?",
    "answers": [
      {
        "text": "Nothing external. Just a voice inside that I have learned to listen to.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2,
          "kylo": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Knowing that I would have to look someone I love in the eye after.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mando": 2,
          "chewie": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "Honestly, sometimes nothing does. I finish what I started and clean up after.",
        "scores": {
          "han": 3,
          "vader": 2,
          "kylo": 2,
          "boba": 2,
          "palpatine": 1,
          "yoda": -2
        },
        "saber": {
          "red": 2,
          "white": 2
        }
      },
      {
        "text": "The realization itself. If I see it clearly, I cannot keep going.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "finn": 2,
          "luke": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "choose_06",
    "category": "THE WAY YOU CHOOSE",
    "type": "personality",
    "image": null,
    "text": "You have to choose between what is easy and what is right. Which one usually wins?",
    "answers": [
      {
        "text": "Right. Even when it hurts. Especially when it hurts.",
        "scores": {
          "mace": 3,
          "luke": 3,
          "obiwan": 2,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "purple": 2,
          "green": 1
        }
      },
      {
        "text": "Easy. I have learned that \"right\" is often just someone else's preference.",
        "scores": {
          "palpatine": 3,
          "kylo": 2,
          "han": 1,
          "boba": 1,
          "mace": -2,
          "finn": -2
        },
        "saber": {
          "red": 3,
          "white": 1,
          "blue": -2
        }
      },
      {
        "text": "I look for the path that is both. It usually exists if you look hard enough.",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "han": 2,
          "luke": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1,
          "green": 1
        }
      },
      {
        "text": "Whichever one I can live with at the end of the day.",
        "scores": {
          "mando": 3,
          "vader": 2,
          "han": 2,
          "boba": 2,
          "finn": 1
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "choose_07",
    "category": "THE WAY YOU CHOOSE",
    "type": "personality",
    "image": null,
    "text": "When someone you love asks you to do something you do not believe in, what do you do?",
    "answers": [
      {
        "text": "I tell them no, but I tell them why. Honesty is part of love.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "mando": 2,
          "mace": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "green": 1
        }
      },
      {
        "text": "I do it. Their trust in me is worth more than my comfort.",
        "scores": {
          "vader": 3,
          "chewie": 3,
          "kylo": 2,
          "finn": 1,
          "palpatine": 1,
          "yoda": -2
        },
        "saber": {
          "red": 2,
          "blue": 2,
          "white": 1
        }
      },
      {
        "text": "I find a way to do it differently — something we can both live with.",
        "scores": {
          "obiwan": 3,
          "quigon": 2,
          "han": 2,
          "luke": 1
        },
        "saber": {
          "purple": 3,
          "green": 1,
          "blue": 1
        }
      },
      {
        "text": "I disappear quietly. I cannot lie to them but I cannot say yes either.",
        "scores": {
          "han": 3,
          "mando": 2,
          "boba": 2,
          "kylo": 1,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "choose_09",
    "category": "THE WAY YOU CHOOSE",
    "type": "personality",
    "image": null,
    "text": "You can save one person or save many. What actually goes through you in that moment?",
    "answers": [
      {
        "text": "The many. Always. The one would understand.",
        "scores": {
          "mace": 3,
          "obiwan": 2,
          "luke": 2,
          "palpatine": 1,
          "vader": -2
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "purple": 1
        }
      },
      {
        "text": "The one. The math is wrong if the one is mine.",
        "scores": {
          "vader": 3,
          "mando": 3,
          "kylo": 2,
          "han": 2,
          "palpatine": -2,
          "mace": -2
        },
        "saber": {
          "red": 3,
          "white": 1,
          "blue": -1
        }
      },
      {
        "text": "I refuse to choose. I find a way to save them all or die trying.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "quigon": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "Honestly, my body just moves. I do not know which one I picked until it is over.",
        "scores": {
          "grogu": 3,
          "han": 2,
          "quigon": 2,
          "finn": 1,
          "palpatine": -3
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "choose_10",
    "category": "THE WAY YOU CHOOSE",
    "type": "personality",
    "image": null,
    "text": "How do you decide who deserves your loyalty?",
    "answers": [
      {
        "text": "They earn it through what they do, not what they say.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "mace": 2,
          "vader": 1,
          "han": 1
        },
        "saber": {
          "white": 2,
          "yellow": 2,
          "blue": 1
        }
      },
      {
        "text": "My heart picks them before my mind has a chance to weigh in.",
        "scores": {
          "chewie": 3,
          "grogu": 2,
          "luke": 2,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I look at how they treat people they do not need anything from.",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "luke": 2,
          "finn": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "green": 1
        }
      },
      {
        "text": "I do not. Loyalty is dangerous. I prefer to keep my options open.",
        "scores": {
          "palpatine": 3,
          "boba": 2,
          "han": 1,
          "maul": 1,
          "chewie": -3,
          "finn": -2
        },
        "saber": {
          "red": 2,
          "white": 2,
          "black": 1,
          "blue": -2
        }
      }
    ]
  },
  {
    "id": "choose_11",
    "category": "THE WAY YOU CHOOSE",
    "type": "personality",
    "image": null,
    "text": "You can do something cruel and never get caught. Why would you not?",
    "answers": [
      {
        "text": "Because I would know. That is enough.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "luke": 3,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "yellow": 2,
          "purple": 1
        }
      },
      {
        "text": "Because cruelty changes you. The next time it would be easier. And the time after.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 2,
          "vader": 2,
          "kylo": 1,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I would. If it served something I believed in. Cruelty is just a tool.",
        "scores": {
          "palpatine": 3,
          "vader": 2,
          "kylo": 2,
          "maul": 1,
          "finn": -3,
          "luke": -3
        },
        "saber": {
          "red": 3,
          "black": 1,
          "blue": -3
        }
      },
      {
        "text": "Because the people I love would feel it somehow, even if they never knew.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "finn": 2,
          "luke": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "choose_12",
    "category": "THE WAY YOU CHOOSE",
    "type": "personality",
    "image": null,
    "text": "What do you do when you are not sure what is right?",
    "answers": [
      {
        "text": "Wait. Clarity comes. Forced decisions are usually wrong ones.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mace": 1,
          "han": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Pick the option I could explain to a child without flinching.",
        "scores": {
          "obiwan": 3,
          "luke": 2,
          "finn": 2,
          "mando": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "Trust whoever has to live with the consequence the most.",
        "scores": {
          "quigon": 3,
          "luke": 3,
          "finn": 2,
          "obiwan": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "purple": 1
        }
      },
      {
        "text": "Pick something. Either choice is better than no choice.",
        "scores": {
          "han": 3,
          "poe": 3,
          "mace": 2,
          "vader": 1,
          "yoda": -2
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "choose_14",
    "category": "THE WAY YOU CHOOSE",
    "type": "personality",
    "image": null,
    "text": "You can have power. Real power. The kind that changes everything. What do you ask first?",
    "answers": [
      {
        "text": "Who pays for it. Power that costs nothing is a trap.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 2,
          "mace": 2,
          "palpatine": -3,
          "kylo": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "What I have to give up. Everything has a price.",
        "scores": {
          "mace": 3,
          "vader": 2,
          "luke": 2,
          "mando": 2,
          "finn": 1
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "yellow": 1
        }
      },
      {
        "text": "How much. I want to know what I am working with.",
        "scores": {
          "palpatine": 3,
          "kylo": 3,
          "vader": 2,
          "boba": 1,
          "yoda": -3
        },
        "saber": {
          "red": 3,
          "black": 1,
          "green": -3
        }
      },
      {
        "text": "What I would use it for. If I cannot answer that, I do not want it.",
        "scores": {
          "luke": 3,
          "obiwan": 3,
          "finn": 3,
          "quigon": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "choose_15",
    "category": "THE WAY YOU CHOOSE",
    "type": "personality",
    "image": null,
    "text": "How do you make peace with a decision you regret?",
    "answers": [
      {
        "text": "I do not. I carry it. It teaches me something every time I think of it.",
        "scores": {
          "kylo": 3,
          "vader": 2,
          "mace": 2,
          "luke": 1,
          "palpatine": -2
        },
        "saber": {
          "red": 2,
          "purple": 2,
          "blue": 1
        }
      },
      {
        "text": "I understand why I made it. Past me did the best they could with what they had.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2,
          "palpatine": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I make the next decision better. That is the only repair available.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "obiwan": 2,
          "vader": 1,
          "finn": 1
        },
        "saber": {
          "yellow": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I let it go. Regret is a kind of vanity — it pretends I should have known better.",
        "scores": {
          "han": 3,
          "palpatine": 2,
          "boba": 2,
          "poe": 1,
          "luke": -1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "choose_16",
    "category": "THE WAY YOU CHOOSE",
    "type": "scenario",
    "image": "",
    "text": "You are offered power and asked to give up one thing in return. What is hardest to give up?",
    "answers": [
      {
        "text": "The people who love me. Power without them means nothing.",
        "scores": {
          "mando": 3,
          "luke": 3,
          "finn": 3,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "My principles. The version of me that wakes up in the mirror.",
        "scores": {
          "mace": 3,
          "obiwan": 3,
          "vader": 2,
          "luke": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "yellow": 1
        }
      },
      {
        "text": "My freedom. The ability to walk away whenever I choose.",
        "scores": {
          "han": 3,
          "mando": 2,
          "boba": 2,
          "kylo": 1,
          "palpatine": -1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      },
      {
        "text": "Honestly? I would have to think about it. That alone tells me something.",
        "scores": {
          "kylo": 3,
          "palpatine": 1,
          "vader": 1,
          "han": 1,
          "mace": -2,
          "yoda": -2
        },
        "saber": {
          "red": 2,
          "purple": 1,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "choose_17",
    "category": "THE WAY YOU CHOOSE",
    "type": "personality",
    "image": null,
    "text": "Someone you have always disagreed with turns out to be right. What do you do?",
    "answers": [
      {
        "text": "I tell them. Out loud. With no hedging.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "finn": 2,
          "mace": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "green": 1
        }
      },
      {
        "text": "I quietly adjust my position. No announcement needed.",
        "scores": {
          "mando": 3,
          "boba": 2,
          "han": 2,
          "palpatine": 2,
          "yoda": 1
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "text": "I get curious. What else have I been wrong about?",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 1,
          "kylo": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I feel something painful. I have built my identity partly on being right about this.",
        "scores": {
          "kylo": 3,
          "vader": 2,
          "mace": 1,
          "finn": 1,
          "yoda": -2
        },
        "saber": {
          "red": 2,
          "purple": 1,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "choose_18",
    "category": "THE WAY YOU CHOOSE",
    "type": "personality",
    "image": null,
    "text": "What is the one rule you would never break?",
    "answers": [
      {
        "text": "I never abandon someone who is depending on me.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "finn": 2,
          "luke": 2,
          "palpatine": -3,
          "boba": -2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "I never act out of fear. Anger I can work with. Fear is the trap.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 1,
          "kylo": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I never lie to someone I love. Strangers, sometimes. Family, never.",
        "scores": {
          "mando": 3,
          "chewie": 2,
          "luke": 2,
          "han": 2,
          "palpatine": -3
        },
        "saber": {
          "white": 2,
          "blue": 2,
          "yellow": 1
        }
      },
      {
        "text": "I do not have one. That is the rule.",
        "scores": {
          "palpatine": 3,
          "han": 2,
          "kylo": 1,
          "maul": 1,
          "mace": -3,
          "obiwan": -2
        },
        "saber": {
          "red": 2,
          "white": 2,
          "black": 1,
          "blue": -2
        }
      }
    ]
  },
  {
    "id": "choose_19",
    "category": "THE WAY YOU CHOOSE",
    "type": "personality",
    "image": null,
    "text": "When you have to choose between mercy and justice, which do you lean toward?",
    "answers": [
      {
        "text": "Mercy. Almost always. Justice can be cruel in ways mercy never is.",
        "scores": {
          "yoda": 3,
          "luke": 3,
          "obiwan": 2,
          "quigon": 2,
          "mace": -2,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Justice. Mercy is a luxury for people who have not been hurt the way I have.",
        "scores": {
          "mace": 3,
          "vader": 2,
          "kylo": 2,
          "boba": 2,
          "mando": 1,
          "yoda": -2
        },
        "saber": {
          "red": 2,
          "yellow": 2,
          "purple": 1
        }
      },
      {
        "text": "Whichever one the person in front of me actually needs. They are not the same.",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "luke": 2,
          "finn": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1,
          "green": 1
        }
      },
      {
        "text": "I refuse the choice. There is always a third option if you look hard enough.",
        "scores": {
          "luke": 3,
          "han": 2,
          "finn": 2,
          "obiwan": 1,
          "palpatine": -1
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "choose_20",
    "category": "THE WAY YOU CHOOSE",
    "type": "personality",
    "image": null,
    "text": "When did you last change your mind about something important?",
    "answers": [
      {
        "text": "Recently. I try to stay open. A mind that does not move is dead.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 1,
          "palpatine": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "A long time ago. The things I believe now are tested and true.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "vader": 2,
          "boba": 2,
          "finn": -1
        },
        "saber": {
          "yellow": 3,
          "red": 1,
          "white": 1
        }
      },
      {
        "text": "Yesterday. I change my mind constantly. It is how I think.",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "palpatine": 1,
          "mace": -2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "I am not sure I have ever truly changed it. I have only refined what I already knew.",
        "scores": {
          "palpatine": 3,
          "vader": 2,
          "kylo": 2,
          "mace": 1,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "yellow": 1,
          "green": -2
        }
      }
    ]
  },
  {
    "id": "choose_21",
    "category": "THE WAY YOU CHOOSE",
    "type": "personality",
    "image": null,
    "text": "How do you know when you have made the right choice?",
    "answers": [
      {
        "text": "My body relaxes. Even if the outcome is hard, the choice itself sits right.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 2,
          "obiwan": 1,
          "palpatine": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I do not feel the need to defend it. Right choices need less explanation.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "mando": 2,
          "vader": 1,
          "han": -1
        },
        "saber": {
          "blue": 3,
          "yellow": 1,
          "purple": 1
        }
      },
      {
        "text": "The people I love still trust me afterward.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mando": 2,
          "chewie": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I never know. I just know I chose. That has to be enough.",
        "scores": {
          "han": 3,
          "kylo": 2,
          "mace": 1,
          "vader": 1,
          "yoda": -1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "choose_22",
    "category": "THE WAY YOU CHOOSE",
    "type": "personality",
    "image": null,
    "text": "A choice that looks small is offered. You sense it is not actually small. What do you do?",
    "answers": [
      {
        "text": "Slow down. Treat it like it is large. Trust the sense.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mace": 2,
          "han": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Make it quickly. Small choices should not become large ones through hesitation.",
        "scores": {
          "han": 3,
          "poe": 3,
          "mace": 1,
          "boba": 2,
          "yoda": -2
        },
        "saber": {
          "white": 3,
          "red": 1,
          "green": -1
        }
      },
      {
        "text": "Refuse to choose yet. Make space to understand what is actually happening.",
        "scores": {
          "obiwan": 3,
          "palpatine": 2,
          "vader": 2,
          "kylo": 1
        },
        "saber": {
          "yellow": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Talk it through with someone I trust. Two perspectives are wiser than one.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "choose_23",
    "category": "THE WAY YOU CHOOSE",
    "type": "personality",
    "image": null,
    "text": "What pulls at you most when you have to choose between two good things?",
    "answers": [
      {
        "text": "The one with more risk. Good things on the edge are worth more.",
        "scores": {
          "poe": 3,
          "han": 3,
          "kylo": 2,
          "luke": 1,
          "mace": -1
        },
        "saber": {
          "white": 3,
          "blue": 1,
          "red": 1
        }
      },
      {
        "text": "The one that requires more of me. Comfort is the wrong measure.",
        "scores": {
          "mace": 3,
          "vader": 2,
          "mando": 2,
          "luke": 2,
          "palpatine": -1
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "purple": 1
        }
      },
      {
        "text": "The one I would regret not choosing.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "han": 2,
          "kylo": 2,
          "obiwan": 1
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "The one that aligns with the larger pattern I am building.",
        "scores": {
          "palpatine": 3,
          "obiwan": 2,
          "yoda": 2,
          "vader": 1,
          "han": -1
        },
        "saber": {
          "yellow": 3,
          "red": 1,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "choose_24",
    "category": "THE WAY YOU CHOOSE",
    "type": "personality",
    "image": null,
    "text": "When you have to live with a choice no one else understands, what gets you through?",
    "answers": [
      {
        "text": "Knowing why I made it. The reason was clear to me in that moment.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "vader": 2,
          "boba": 2,
          "finn": -1
        },
        "saber": {
          "white": 2,
          "yellow": 2,
          "blue": 1
        }
      },
      {
        "text": "Trusting that time will reveal it. Not everything has to be understood right away.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 1,
          "palpatine": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "The one or two people who do understand. That is enough.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mando": 2,
          "chewie": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I do not need to be understood. I need to be free.",
        "scores": {
          "han": 3,
          "boba": 3,
          "kylo": 2,
          "palpatine": 1,
          "finn": -2
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -2
        }
      }
    ]
  },
  {
    "id": "choose_04",
    "category": "THE WAY YOU CHOOSE",
    "type": "image-answer",
    "text": "A test arrives. Which version do you face?",
    "answers": [
      {
        "image": "./assets/quiz/q-choose_04-a.png",
        "caption": "The Mirror",
        "scores": {
          "yoda": 3,
          "kylo": 3,
          "luke": 2,
          "vader": 2,
          "palpatine": 1
        },
        "saber": {
          "purple": 3,
          "green": 1,
          "red": 1
        }
      },
      {
        "image": "./assets/quiz/q-choose_04-b.png",
        "caption": "The Scale",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "mando": 2,
          "vader": 1,
          "palpatine": 1
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "yellow": 1
        }
      },
      {
        "image": "./assets/quiz/q-choose_04-c.png",
        "caption": "The Threshold",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "kylo": 2,
          "han": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "white": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-choose_04-d.png",
        "caption": "The Maze",
        "scores": {
          "palpatine": 3,
          "han": 3,
          "kylo": 2,
          "obiwan": 1,
          "finn": -1
        },
        "saber": {
          "white": 2,
          "red": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "choose_08",
    "category": "THE WAY YOU CHOOSE",
    "type": "image-answer",
    "text": "Two hands are extended to you. Which one do you take?",
    "answers": [
      {
        "image": "./assets/quiz/q-choose_08-a.png",
        "caption": "The Master",
        "scores": {
          "yoda": 2,
          "obiwan": 3,
          "quigon": 3,
          "luke": 1,
          "kylo": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-choose_08-b.png",
        "caption": "The Dark Hand",
        "scores": {
          "vader": 3,
          "palpatine": 3,
          "kylo": 2,
          "maul": 2,
          "finn": -3,
          "grogu": -3
        },
        "saber": {
          "red": 3,
          "black": 1,
          "blue": -3
        }
      },
      {
        "image": "./assets/quiz/q-choose_08-c.png",
        "caption": "The Friend",
        "scores": {
          "luke": 3,
          "finn": 3,
          "han": 2,
          "poe": 2,
          "chewie": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-choose_08-d.png",
        "caption": "The Small Hand",
        "scores": {
          "grogu": 3,
          "mando": 3,
          "luke": 2,
          "chewie": 1,
          "palpatine": -3
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "choose_13",
    "category": "THE WAY YOU CHOOSE",
    "type": "image-answer",
    "text": "Which light do you walk toward?",
    "answers": [
      {
        "image": "./assets/quiz/q-choose_13-a.png",
        "caption": "The Golden Light",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "han": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-choose_13-b.png",
        "caption": "The Blue Light",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "luke": 2,
          "quigon": 1
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-choose_13-c.png",
        "caption": "The Red Light",
        "scores": {
          "vader": 3,
          "palpatine": 3,
          "kylo": 3,
          "maul": 2,
          "grogu": -3,
          "finn": -2
        },
        "saber": {
          "red": 3,
          "black": 1,
          "blue": -3
        }
      },
      {
        "image": "./assets/quiz/q-choose_13-d.png",
        "caption": "The Star Field",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "mando": 1,
          "palpatine": -1
        },
        "saber": {
          "green": 3,
          "white": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "choose_25",
    "category": "THE WAY YOU CHOOSE",
    "type": "image-answer",
    "text": "At the moment of choice, what stands beside you?",
    "answers": [
      {
        "image": "./assets/quiz/q-choose_25-a.png",
        "caption": "A Ghost",
        "scores": {
          "luke": 3,
          "obiwan": 2,
          "kylo": 2,
          "quigon": 1,
          "han": -2
        },
        "saber": {
          "blue": 3,
          "green": 2,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-choose_25-b.png",
        "caption": "A Friend",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "han": 2,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 2,
          "white": 2,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-choose_25-c.png",
        "caption": "No One",
        "scores": {
          "boba": 3,
          "kylo": 3,
          "vader": 2,
          "mando": 2,
          "palpatine": 1,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "black": 1,
          "blue": -1
        }
      },
      {
        "image": "./assets/quiz/q-choose_25-d.png",
        "caption": "Myself",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "luke": 2,
          "mace": 1,
          "palpatine": 1
        },
        "saber": {
          "purple": 3,
          "red": 1,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "begin_01",
    "category": "THE WAY YOU BEGIN",
    "type": "scenario",
    "image": "",
    "text": "When you wake up in the morning, what is the first thing that moves through you?",
    "answers": [
      {
        "text": "A list. Things I want to do. Plans that started forming in sleep.",
        "scores": {
          "palpatine": 3,
          "mace": 2,
          "vader": 2,
          "boba": 2,
          "poe": 1,
          "grogu": -1
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      },
      {
        "text": "Stillness. A few minutes before the day exists.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mando": 1,
          "han": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Energy. Whatever today is, I am ready for it.",
        "scores": {
          "poe": 3,
          "han": 3,
          "luke": 2,
          "finn": 2,
          "palpatine": -1
        },
        "saber": {
          "white": 3,
          "blue": 1,
          "red": 1
        }
      },
      {
        "text": "A pull toward someone. The person who matters most that day.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "grogu": 2,
          "kylo": 2,
          "finn": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "begin_02",
    "category": "THE WAY YOU BEGIN",
    "type": "personality",
    "image": null,
    "text": "You walk into a new place. What is your first instinct?",
    "answers": [
      {
        "text": "Find the exits. Always know how to leave.",
        "scores": {
          "boba": 3,
          "han": 3,
          "mando": 2,
          "palpatine": 1,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "text": "Read the room. Who is here, who matters, who is watching whom.",
        "scores": {
          "palpatine": 3,
          "obiwan": 2,
          "mace": 2,
          "han": 1
        },
        "saber": {
          "yellow": 3,
          "purple": 1,
          "blue": 1
        }
      },
      {
        "text": "Feel the energy. The room tells you what it is before words do.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "luke": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Just go. Whoever I need to know will find me.",
        "scores": {
          "han": 3,
          "poe": 3,
          "chewie": 1,
          "palpatine": -2
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "begin_03",
    "category": "THE WAY YOU BEGIN",
    "type": "personality",
    "image": null,
    "text": "How do you start something hard?",
    "answers": [
      {
        "text": "I just begin. Thinking too much is how things never get done.",
        "scores": {
          "han": 3,
          "poe": 3,
          "mace": 2,
          "finn": 1,
          "yoda": -1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      },
      {
        "text": "I sit with it first. Let it tell me what shape it wants to take.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "grogu": 1,
          "han": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I make a small move. Something I cannot undo. Then I am committed.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "vader": 2,
          "boba": 1
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "red": 1
        }
      },
      {
        "text": "I tell someone. Out loud. Now there is a witness.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "begin_05",
    "category": "THE WAY YOU BEGIN",
    "type": "personality",
    "image": null,
    "text": "You meet someone new. What is the first thing you actually notice?",
    "answers": [
      {
        "text": "Their eyes. Eyes lie less than mouths.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 2,
          "luke": 1,
          "han": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Their hands. What they have done shows up in them.",
        "scores": {
          "mace": 3,
          "vader": 2,
          "mando": 2,
          "boba": 2,
          "grogu": -1
        },
        "saber": {
          "yellow": 3,
          "red": 1,
          "white": 1
        }
      },
      {
        "text": "How they hold themselves. The posture tells the story.",
        "scores": {
          "palpatine": 3,
          "obiwan": 2,
          "mace": 2,
          "kylo": 1
        },
        "saber": {
          "yellow": 3,
          "red": 1,
          "purple": 1
        }
      },
      {
        "text": "Whether they smile. Real smiles change a face.",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "chewie": 1
        },
        "saber": {
          "white": 3,
          "blue": 1,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "begin_06",
    "category": "THE WAY YOU BEGIN",
    "type": "personality",
    "image": null,
    "text": "What energy do you bring into a room without trying?",
    "answers": [
      {
        "text": "Calm. People settle when I walk in. I do not know why.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 2,
          "grogu": 1,
          "kylo": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Heat. Things start happening. I am not always sure I caused it.",
        "scores": {
          "han": 3,
          "poe": 3,
          "maul": 2,
          "kylo": 2,
          "finn": 1
        },
        "saber": {
          "red": 3,
          "white": 1
        }
      },
      {
        "text": "Weight. People pay attention without me asking them to.",
        "scores": {
          "vader": 3,
          "mace": 3,
          "palpatine": 2,
          "mando": 2,
          "boba": 1,
          "finn": -1
        },
        "saber": {
          "red": 2,
          "yellow": 2,
          "purple": 1
        }
      },
      {
        "text": "Warmth. People relax. They tell me things they did not plan to.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "chewie": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "begin_07",
    "category": "THE WAY YOU BEGIN",
    "type": "personality",
    "image": null,
    "text": "You have a free day. No obligations. What do you do first?",
    "answers": [
      {
        "text": "Find someone I love and go do something with them.",
        "scores": {
          "chewie": 3,
          "finn": 3,
          "luke": 2,
          "han": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "Disappear somewhere quiet. Let my mind rest.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "mando": 2,
          "obiwan": 1,
          "poe": -1
        },
        "saber": {
          "green": 3,
          "white": 1,
          "blue": 1
        }
      },
      {
        "text": "Build something. Read something. Use the time to grow.",
        "scores": {
          "obiwan": 3,
          "palpatine": 3,
          "luke": 2,
          "mace": 1
        },
        "saber": {
          "yellow": 3,
          "blue": 1,
          "green": 1
        }
      },
      {
        "text": "Do something I should not. Test what I can get away with.",
        "scores": {
          "han": 3,
          "poe": 2,
          "kylo": 2,
          "maul": 1,
          "mace": -2,
          "yoda": -1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -2
        }
      }
    ]
  },
  {
    "id": "begin_09",
    "category": "THE WAY YOU BEGIN",
    "type": "scenario",
    "image": "",
    "text": "You are at the edge of something completely new. The first step is yours. What carries you across?",
    "answers": [
      {
        "text": "Curiosity. I want to know what is on the other side more than I am afraid.",
        "scores": {
          "luke": 3,
          "poe": 3,
          "grogu": 3,
          "finn": 2,
          "quigon": 2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "white": 1
        }
      },
      {
        "text": "Discipline. I made the decision already. The feet just follow.",
        "scores": {
          "mace": 3,
          "vader": 3,
          "mando": 2,
          "boba": 2,
          "finn": 1
        },
        "saber": {
          "yellow": 3,
          "red": 1,
          "white": 1
        }
      },
      {
        "text": "Faith. Something in me knows this is the right direction.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 2,
          "obiwan": 1,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Just momentum. I started moving and I have not stopped yet.",
        "scores": {
          "han": 3,
          "poe": 2,
          "kylo": 2,
          "maul": 1,
          "yoda": -1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "begin_10",
    "category": "THE WAY YOU BEGIN",
    "type": "personality",
    "image": null,
    "text": "When something exciting happens, what is your first sound?",
    "answers": [
      {
        "text": "A laugh. Pure surprise.",
        "scores": {
          "han": 3,
          "poe": 3,
          "chewie": 2,
          "finn": 1,
          "palpatine": -2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "A breath out. Long. Like I had been holding it.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mando": 1
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "Nothing. I notice myself going very still.",
        "scores": {
          "vader": 3,
          "palpatine": 2,
          "boba": 2,
          "mace": 2,
          "han": -2
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      },
      {
        "text": "A whoop. I cannot help it.",
        "scores": {
          "poe": 3,
          "finn": 3,
          "luke": 2,
          "han": 2,
          "palpatine": -3
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "begin_11",
    "category": "THE WAY YOU BEGIN",
    "type": "personality",
    "image": null,
    "text": "You meet a stranger who could become a friend. What do you do first?",
    "answers": [
      {
        "text": "Ask them something specific. Not small talk — a real question.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "finn": 2,
          "quigon": 2,
          "palpatine": -1
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "Listen. Most people tell you who they are within five minutes.",
        "scores": {
          "yoda": 3,
          "palpatine": 3,
          "mando": 2,
          "obiwan": 1
        },
        "saber": {
          "green": 2,
          "yellow": 2,
          "blue": 1
        }
      },
      {
        "text": "Make them laugh. If we can laugh together, we can be anything else together.",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "chewie": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "Stay reserved. They have to prove they are worth my attention.",
        "scores": {
          "boba": 3,
          "mando": 2,
          "vader": 2,
          "kylo": 2,
          "palpatine": 1,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "yellow": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "begin_12",
    "category": "THE WAY YOU BEGIN",
    "type": "personality",
    "image": null,
    "text": "What is the first thing you do when you sense danger?",
    "answers": [
      {
        "text": "Stop moving. Every sense sharpens.",
        "scores": {
          "yoda": 3,
          "mace": 3,
          "boba": 3,
          "obiwan": 2,
          "mando": 2
        },
        "saber": {
          "yellow": 3,
          "green": 1,
          "blue": 1
        }
      },
      {
        "text": "Reach for whoever I need to protect first.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "finn": 2,
          "luke": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "Smile. Danger means something is finally happening.",
        "scores": {
          "han": 3,
          "poe": 2,
          "maul": 2,
          "kylo": 2,
          "grogu": -1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      },
      {
        "text": "Disappear. I cannot be hit if I am not there.",
        "scores": {
          "palpatine": 3,
          "boba": 2,
          "han": 2,
          "kylo": 1
        },
        "saber": {
          "white": 2,
          "red": 1,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "begin_14",
    "category": "THE WAY YOU BEGIN",
    "type": "personality",
    "image": null,
    "text": "You have to start a conversation you have been avoiding. How?",
    "answers": [
      {
        "text": "Direct. The first sentence is the hardest one. I just say it.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "vader": 2,
          "obiwan": 2,
          "han": -1
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "red": 1
        }
      },
      {
        "text": "Around the edges. I get to it through other things first.",
        "scores": {
          "obiwan": 3,
          "palpatine": 2,
          "han": 2,
          "kylo": 1,
          "mace": -1
        },
        "saber": {
          "purple": 3,
          "blue": 1,
          "yellow": 1
        }
      },
      {
        "text": "Honestly about the avoiding. I name it. That cuts it in half.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "quigon": 2,
          "obiwan": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "I do not. I find another way around it entirely.",
        "scores": {
          "han": 3,
          "boba": 2,
          "palpatine": 2,
          "kylo": 1,
          "finn": -2
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "begin_15",
    "category": "THE WAY YOU BEGIN",
    "type": "personality",
    "image": null,
    "text": "Before you commit to something, what do you have to feel first?",
    "answers": [
      {
        "text": "A pull. Not certainty — just the pull. Certainty comes later.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "quigon": 2,
          "han": 2,
          "palpatine": -1
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "That my values are not at stake. If they are, no amount of pull matters.",
        "scores": {
          "mace": 3,
          "obiwan": 3,
          "mando": 2,
          "vader": 1,
          "han": -1
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "That I can leave if I need to. Commitment without exit is a trap.",
        "scores": {
          "han": 3,
          "boba": 3,
          "mando": 2,
          "kylo": 1,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      },
      {
        "text": "Nothing. I commit, then figure out what I committed to.",
        "scores": {
          "poe": 3,
          "kylo": 2,
          "maul": 2,
          "han": 1,
          "yoda": -2
        },
        "saber": {
          "white": 2,
          "red": 2
        }
      }
    ]
  },
  {
    "id": "begin_16",
    "category": "THE WAY YOU BEGIN",
    "type": "scenario",
    "image": "",
    "text": "You realize a long journey is starting. The first night you sleep on it — what is in your dreams?",
    "answers": [
      {
        "text": "Faces of people I will miss. The cost of leaving arrives in dreams first.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mando": 2,
          "chewie": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Strategies. Routes. Paths I had not noticed when awake.",
        "scores": {
          "palpatine": 3,
          "mace": 2,
          "obiwan": 2,
          "boba": 2
        },
        "saber": {
          "yellow": 3,
          "purple": 1
        }
      },
      {
        "text": "Something I cannot name. Strong, beautiful, just outside reach.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 2,
          "grogu": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Nothing. I sleep dreamless. Tomorrow has not arrived yet.",
        "scores": {
          "han": 3,
          "mando": 2,
          "boba": 2,
          "chewie": 1,
          "kylo": -1
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "begin_17",
    "category": "THE WAY YOU BEGIN",
    "type": "personality",
    "image": null,
    "text": "When something is about to happen — you can feel it in the air — what do you do?",
    "answers": [
      {
        "text": "Slow down. Let it arrive in its own time.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mando": 1,
          "han": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Get ready. Whatever it is, I want to meet it standing up.",
        "scores": {
          "mace": 3,
          "vader": 2,
          "mando": 2,
          "finn": 2,
          "poe": 1
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "blue": 1
        }
      },
      {
        "text": "Lean in. Whatever it is, I want it sooner.",
        "scores": {
          "han": 3,
          "poe": 3,
          "kylo": 2,
          "maul": 2
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      },
      {
        "text": "Find the people I trust. Whatever is coming, we face it together.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "chewie": 2,
          "mando": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "begin_18",
    "category": "THE WAY YOU BEGIN",
    "type": "personality",
    "image": null,
    "text": "How do you start a fight with someone you actually like?",
    "answers": [
      {
        "text": "Very carefully. With the truth, soft enough that they can hear it.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "quigon": 2,
          "finn": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "I would not. I would find another way around it.",
        "scores": {
          "han": 3,
          "mando": 2,
          "boba": 2,
          "grogu": 1,
          "mace": -2
        },
        "saber": {
          "white": 3,
          "green": 1,
          "blue": -1
        }
      },
      {
        "text": "Honestly. If it matters enough to fight about, it matters enough to say plainly.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "vader": 2,
          "obiwan": 1,
          "kylo": 1
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "purple": 1
        }
      },
      {
        "text": "I let it explode. Then we deal with it. Pretending makes it worse.",
        "scores": {
          "kylo": 3,
          "han": 2,
          "poe": 2,
          "mace": 1,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "white": 1,
          "green": -1
        }
      }
    ]
  },
  {
    "id": "begin_19",
    "category": "THE WAY YOU BEGIN",
    "type": "personality",
    "image": null,
    "text": "You are about to do something for the first time. What is the dominant feeling?",
    "answers": [
      {
        "text": "Curiosity. I want to see what happens.",
        "scores": {
          "grogu": 3,
          "luke": 3,
          "finn": 2,
          "poe": 2,
          "quigon": 1
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "A small ache. I will be different after this.",
        "scores": {
          "kylo": 3,
          "mando": 2,
          "vader": 2,
          "luke": 1,
          "obiwan": 1
        },
        "saber": {
          "purple": 2,
          "red": 1,
          "blue": 1
        }
      },
      {
        "text": "Nothing in particular. First times are just times.",
        "scores": {
          "boba": 3,
          "palpatine": 2,
          "han": 2,
          "vader": 1,
          "finn": -1
        },
        "saber": {
          "white": 2,
          "yellow": 2,
          "red": 1
        }
      },
      {
        "text": "Sharp focus. Now is not the time for feelings.",
        "scores": {
          "mace": 3,
          "vader": 3,
          "mando": 2,
          "boba": 2,
          "grogu": -1
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "begin_20",
    "category": "THE WAY YOU BEGIN",
    "type": "personality",
    "image": null,
    "text": "What pulls you toward something? How do you know it is yours to do?",
    "answers": [
      {
        "text": "I cannot stop thinking about it. Even when I try.",
        "scores": {
          "kylo": 3,
          "luke": 3,
          "finn": 3,
          "palpatine": 1,
          "han": -1
        },
        "saber": {
          "red": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "My breath changes when I think about it. Something opens up.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "luke": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "The right people keep appearing around it. That is the signal.",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "luke": 2,
          "finn": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I just start. The thinking comes after the doing.",
        "scores": {
          "han": 3,
          "poe": 3,
          "mace": 2,
          "vader": 1,
          "yoda": -1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "begin_21",
    "category": "THE WAY YOU BEGIN",
    "type": "personality",
    "image": null,
    "text": "What kind of beginning are you most afraid of?",
    "answers": [
      {
        "text": "One where I am completely alone.",
        "scores": {
          "mando": 3,
          "finn": 3,
          "kylo": 3,
          "chewie": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "One where I have to depend on people I do not trust.",
        "scores": {
          "boba": 3,
          "han": 3,
          "palpatine": 2,
          "vader": 1,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "text": "One that requires faith I do not have yet.",
        "scores": {
          "luke": 3,
          "kylo": 2,
          "vader": 2,
          "mace": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "red": 1
        }
      },
      {
        "text": "One I did not choose. Forced beginnings are the hardest.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "mando": 2,
          "luke": 2,
          "finn": 1
        },
        "saber": {
          "red": 2,
          "purple": 2,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "begin_22",
    "category": "THE WAY YOU BEGIN",
    "type": "personality",
    "image": null,
    "text": "When you start to fall in love with something — an idea, a place, a person — how does it begin?",
    "answers": [
      {
        "text": "Quietly. So quietly I do not notice until I am already in it.",
        "scores": {
          "mando": 3,
          "obiwan": 3,
          "luke": 2,
          "vader": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "white": 1
        }
      },
      {
        "text": "All at once. Lightning. Everything looks different in five minutes.",
        "scores": {
          "kylo": 3,
          "han": 3,
          "poe": 2,
          "finn": 2,
          "palpatine": -2
        },
        "saber": {
          "red": 3,
          "white": 1,
          "blue": 1
        }
      },
      {
        "text": "Through wonder. I find myself drawn back without knowing why.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Through usefulness. It starts as something practical and becomes something else.",
        "scores": {
          "palpatine": 3,
          "mace": 2,
          "mando": 2,
          "boba": 1
        },
        "saber": {
          "yellow": 3,
          "red": 1,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "begin_23",
    "category": "THE WAY YOU BEGIN",
    "type": "personality",
    "image": null,
    "text": "When you make a promise, what do you actually mean by it?",
    "answers": [
      {
        "text": "That my word is the same as my action. There is no gap between them.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "obiwan": 2,
          "vader": 2,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "white": 1,
          "black": 1
        }
      },
      {
        "text": "That I will try as hard as I can. I cannot promise outcomes.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "han": 2,
          "poe": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "That this matters to me right now. I do not over-promise the future.",
        "scores": {
          "han": 3,
          "palpatine": 2,
          "boba": 2,
          "kylo": 1,
          "mando": -1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      },
      {
        "text": "That something has shifted in me. The promise is the proof of the shift.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 2,
          "obiwan": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "begin_24",
    "category": "THE WAY YOU BEGIN",
    "type": "personality",
    "image": null,
    "text": "What does the very first day of something new feel like in your body?",
    "answers": [
      {
        "text": "A buzz. Everything is sharper, louder, faster.",
        "scores": {
          "poe": 3,
          "han": 3,
          "finn": 2,
          "kylo": 2,
          "palpatine": -1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      },
      {
        "text": "A weight. Like I am holding something I have to be careful not to drop.",
        "scores": {
          "mace": 3,
          "vader": 3,
          "mando": 2,
          "obiwan": 2,
          "luke": 1
        },
        "saber": {
          "yellow": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "A quiet. Like the air is paying attention.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "obiwan": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Nothing. I do not feel it differently than any other day until later.",
        "scores": {
          "boba": 3,
          "palpatine": 2,
          "han": 1,
          "mando": 1,
          "finn": -1
        },
        "saber": {
          "white": 2,
          "yellow": 2,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "begin_04",
    "category": "THE WAY YOU BEGIN",
    "type": "image-answer",
    "text": "Pick your ship.",
    "answers": [
      {
        "image": "./assets/quiz/q-begin_04-a.png",
        "caption": "The Falcon",
        "scores": {
          "han": 3,
          "chewie": 3,
          "poe": 2,
          "finn": 1,
          "palpatine": -2
        },
        "saber": {
          "white": 3,
          "blue": 1,
          "red": -1
        }
      },
      {
        "image": "./assets/quiz/q-begin_04-b.png",
        "caption": "The X-Wing",
        "scores": {
          "luke": 3,
          "poe": 3,
          "finn": 2,
          "mando": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "yellow": 1,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-begin_04-c.png",
        "caption": "The TIE",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "palpatine": 2,
          "mace": 1,
          "finn": -2,
          "grogu": -2
        },
        "saber": {
          "red": 3,
          "yellow": 1,
          "blue": -2
        }
      },
      {
        "image": "./assets/quiz/q-begin_04-d.png",
        "caption": "The Razor Crest",
        "scores": {
          "mando": 3,
          "boba": 3,
          "grogu": 2,
          "han": 1,
          "palpatine": -1
        },
        "saber": {
          "white": 2,
          "yellow": 2,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "begin_08",
    "category": "THE WAY YOU BEGIN",
    "type": "image-answer",
    "text": "Pick your droid companion.",
    "answers": [
      {
        "image": "./assets/quiz/q-begin_08-a.png",
        "caption": "R2-D2",
        "scores": {
          "luke": 3,
          "poe": 2,
          "finn": 2,
          "han": 2,
          "palpatine": -1
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "image": "./assets/quiz/q-begin_08-b.png",
        "caption": "BB-8",
        "scores": {
          "poe": 3,
          "finn": 3,
          "grogu": 2,
          "luke": 1
        },
        "saber": {
          "white": 2,
          "blue": 2,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-begin_08-c.png",
        "caption": "IG-11",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "palpatine": 1,
          "grogu": -1
        },
        "saber": {
          "white": 2,
          "yellow": 2,
          "red": 1
        }
      },
      {
        "image": "./assets/quiz/q-begin_08-d.png",
        "caption": "C-3PO",
        "scores": {
          "obiwan": 3,
          "quigon": 2,
          "luke": 2,
          "palpatine": 1,
          "han": -1
        },
        "saber": {
          "yellow": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "begin_13",
    "category": "THE WAY YOU BEGIN",
    "type": "image-answer",
    "text": "Which planet calls to you?",
    "answers": [
      {
        "image": "./assets/quiz/q-begin_13-a.png",
        "caption": "Tatooine",
        "scores": {
          "luke": 3,
          "han": 2,
          "boba": 2,
          "poe": 1,
          "kylo": 1
        },
        "saber": {
          "white": 2,
          "blue": 1,
          "yellow": 1
        }
      },
      {
        "image": "./assets/quiz/q-begin_13-b.png",
        "caption": "Dagobah",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 1,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-begin_13-c.png",
        "caption": "Coruscant",
        "scores": {
          "palpatine": 3,
          "mace": 2,
          "obiwan": 1,
          "vader": 2,
          "kylo": 1,
          "mando": -1
        },
        "saber": {
          "yellow": 3,
          "red": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-begin_13-d.png",
        "caption": "Naboo",
        "scores": {
          "quigon": 3,
          "grogu": 2,
          "finn": 2,
          "luke": 2,
          "palpatine": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "begin_25",
    "category": "THE WAY YOU BEGIN",
    "type": "image-answer",
    "text": "You see this. What is your very first instinct?",
    "answers": [
      {
        "image": "./assets/quiz/q-begin_25-a.png",
        "caption": "Protect",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "finn": 3,
          "luke": 2,
          "grogu": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-begin_25-b.png",
        "caption": "Investigate",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "luke": 2,
          "palpatine": 2,
          "grogu": 1
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-begin_25-c.png",
        "caption": "Open",
        "scores": {
          "han": 3,
          "poe": 3,
          "kylo": 2,
          "palpatine": 1,
          "mace": -1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      },
      {
        "image": "./assets/quiz/q-begin_25-d.png",
        "caption": "Step Back",
        "scores": {
          "boba": 3,
          "mando": 2,
          "palpatine": 2,
          "vader": 1,
          "yoda": 1,
          "han": -1
        },
        "saber": {
          "yellow": 3,
          "white": 1,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "love_01",
    "category": "THE WAY YOU LOVE",
    "type": "scenario",
    "image": "",
    "text": "Someone you love is in trouble. So are you. What do you actually do?",
    "answers": [
      {
        "text": "Them first. Always. My problem can wait — theirs cannot.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "finn": 3,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Both at once. I find a way to solve them together or die trying.",
        "scores": {
          "luke": 3,
          "poe": 2,
          "han": 2,
          "obiwan": 1
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "green": 1
        }
      },
      {
        "text": "Mine first — quickly. Then I am free to help them properly.",
        "scores": {
          "vader": 2,
          "palpatine": 2,
          "mace": 2,
          "boba": 2,
          "han": 1
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "white": 1
        }
      },
      {
        "text": "They would want me to handle mine. I trust them to handle theirs.",
        "scores": {
          "obiwan": 3,
          "quigon": 2,
          "mando": 2,
          "boba": 1,
          "finn": -1
        },
        "saber": {
          "blue": 2,
          "yellow": 1,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "love_02",
    "category": "THE WAY YOU LOVE",
    "type": "personality",
    "image": null,
    "text": "Who matters most to you?",
    "answers": [
      {
        "text": "The people I have chosen as family. Blood is not the same as bond.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "finn": 2,
          "han": 2,
          "palpatine": -3,
          "maul": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "Everyone. Truly. Every person in the galaxy matters to me.",
        "scores": {
          "luke": 3,
          "poe": 3,
          "finn": 2,
          "quigon": 2,
          "boba": -2,
          "maul": -2
        },
        "saber": {
          "blue": 3,
          "green": 2,
          "purple": 1
        }
      },
      {
        "text": "Myself, first. Then the few who have earned my care.",
        "scores": {
          "han": 3,
          "boba": 3,
          "kylo": 1,
          "vader": 1,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      },
      {
        "text": "One person. I would burn the galaxy for one person.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "mando": 2,
          "palpatine": -2
        },
        "saber": {
          "red": 2,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "love_03",
    "category": "THE WAY YOU LOVE",
    "type": "personality",
    "image": null,
    "text": "Someone small and scared needs your help. What do you do?",
    "answers": [
      {
        "text": "I kneel. I speak softly. I make myself small so they are not.",
        "scores": {
          "grogu": 3,
          "finn": 3,
          "luke": 2,
          "mando": 2,
          "palpatine": -3,
          "maul": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "white": 1
        }
      },
      {
        "text": "I protect them without saying a word. They will know.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "vader": 2,
          "boba": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1,
          "yellow": 1
        }
      },
      {
        "text": "I teach them how to protect themselves. That is the real gift.",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "mace": 2,
          "yoda": 2,
          "finn": -1
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "purple": 1
        }
      },
      {
        "text": "I have my own problems. They are not my responsibility.",
        "scores": {
          "palpatine": 3,
          "maul": 2,
          "boba": 2,
          "grogu": -3,
          "finn": -3,
          "luke": -2
        },
        "saber": {
          "red": 3,
          "white": 1,
          "blue": -3
        }
      }
    ]
  },
  {
    "id": "love_05",
    "category": "THE WAY YOU LOVE",
    "type": "personality",
    "image": null,
    "text": "How do you show someone you love them?",
    "answers": [
      {
        "text": "Quietly. Through what I do, not what I say.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "chewie": 2,
          "boba": 2,
          "han": 1
        },
        "saber": {
          "blue": 2,
          "white": 2,
          "yellow": 1
        }
      },
      {
        "text": "Honestly. With words. They should never have to guess.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "obiwan": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "By making space for who they are. Even when it costs me.",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "yoda": 2,
          "finn": 2,
          "kylo": -2
        },
        "saber": {
          "green": 3,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "I am still learning. I am not always sure I know how.",
        "scores": {
          "kylo": 3,
          "vader": 2,
          "han": 2,
          "finn": 1,
          "palpatine": -1
        },
        "saber": {
          "red": 1,
          "purple": 2,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "love_06",
    "category": "THE WAY YOU LOVE",
    "type": "personality",
    "image": null,
    "text": "You love someone who has to leave. What do you do?",
    "answers": [
      {
        "text": "Let them go fully. Holding on is the opposite of love.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 1,
          "kylo": -3,
          "vader": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Walk with them as far as I can. Then turn around alone.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "mando": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Make sure they know they can always come back.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "han": 2,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "Refuse. Find a way to keep them with me, even if I should not.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "palpatine": 1,
          "luke": -2,
          "yoda": -3
        },
        "saber": {
          "red": 3,
          "purple": 1,
          "green": -3
        }
      }
    ]
  },
  {
    "id": "love_07",
    "category": "THE WAY YOU LOVE",
    "type": "personality",
    "image": null,
    "text": "What does someone have to do to earn your loyalty?",
    "answers": [
      {
        "text": "Show up. Once. When it actually counted. That is enough.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "han": 2,
          "luke": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "Prove it across time. Loyalty given easily is given to too many.",
        "scores": {
          "boba": 3,
          "mace": 3,
          "vader": 2,
          "palpatine": 2,
          "finn": -1
        },
        "saber": {
          "yellow": 3,
          "red": 1,
          "white": 1
        }
      },
      {
        "text": "Nothing. I give it first. They prove me right or wrong over time.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "grogu": 2,
          "obiwan": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Be useful to me. Loyalty without purpose is sentiment.",
        "scores": {
          "palpatine": 3,
          "kylo": 1,
          "boba": 1,
          "finn": -3,
          "luke": -3
        },
        "saber": {
          "red": 3,
          "yellow": 1,
          "blue": -3
        }
      }
    ]
  },
  {
    "id": "love_09",
    "category": "THE WAY YOU LOVE",
    "type": "scenario",
    "image": "",
    "text": "You can save the galaxy or save one person. What actually happens in you?",
    "answers": [
      {
        "text": "The galaxy. The one would understand. They would not want me to choose them.",
        "scores": {
          "mace": 3,
          "obiwan": 3,
          "luke": 2,
          "yoda": 1,
          "vader": -3,
          "mando": -3
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "purple": 1
        }
      },
      {
        "text": "The one. The galaxy is too abstract. The one is real.",
        "scores": {
          "vader": 3,
          "mando": 3,
          "kylo": 2,
          "han": 2,
          "palpatine": -2
        },
        "saber": {
          "red": 2,
          "blue": 2,
          "white": 1
        }
      },
      {
        "text": "I refuse to choose. I find a way to save them both or die trying.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "quigon": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "I have already saved myself. Now I can think clearly.",
        "scores": {
          "palpatine": 3,
          "boba": 1,
          "kylo": -1,
          "mando": -1,
          "luke": -2
        },
        "saber": {
          "red": 2,
          "white": 2,
          "black": 1
        }
      }
    ]
  },
  {
    "id": "love_10",
    "category": "THE WAY YOU LOVE",
    "type": "personality",
    "image": null,
    "text": "How do you handle it when someone you love disappoints you?",
    "answers": [
      {
        "text": "Tell them. With love. They cannot fix what they do not know hurt me.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "mando": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "Sit with it alone first. I want to know what is mine to carry before I speak.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "kylo": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Carry it quietly. Most disappointments are not worth the cost of saying them.",
        "scores": {
          "mando": 3,
          "vader": 2,
          "boba": 2,
          "han": 1,
          "palpatine": 1
        },
        "saber": {
          "white": 3,
          "yellow": 1,
          "blue": -1
        }
      },
      {
        "text": "It cuts deeper than they know. I might not show it but I do not forget.",
        "scores": {
          "kylo": 3,
          "vader": 2,
          "finn": 2,
          "mace": 1,
          "palpatine": -1
        },
        "saber": {
          "red": 2,
          "purple": 2,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "love_11",
    "category": "THE WAY YOU LOVE",
    "type": "personality",
    "image": null,
    "text": "What does it cost you to love someone?",
    "answers": [
      {
        "text": "My freedom. Loving someone means I cannot just walk away anymore.",
        "scores": {
          "han": 3,
          "boba": 2,
          "mando": 3,
          "kylo": 1,
          "palpatine": -2
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      },
      {
        "text": "Nothing. Love does not cost. It gives.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 2,
          "grogu": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "My peace. I worry about them in ways I never worried about myself.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "vader": 2,
          "finn": 2,
          "obiwan": 1
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "My focus. When I love someone, half my attention is always with them.",
        "scores": {
          "kylo": 3,
          "vader": 2,
          "luke": 2,
          "han": 2,
          "palpatine": 1,
          "mace": -1
        },
        "saber": {
          "red": 2,
          "blue": 2,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "love_12",
    "category": "THE WAY YOU LOVE",
    "type": "personality",
    "image": null,
    "text": "You realize you love someone. What is the first thing you do?",
    "answers": [
      {
        "text": "Sit with it quietly. I do not want to rush something this important.",
        "scores": {
          "mando": 3,
          "obiwan": 3,
          "vader": 2,
          "yoda": 1,
          "han": -1
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "white": 1
        }
      },
      {
        "text": "Tell them. The moment I know, they should know too.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "kylo": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "Get scared. Loving someone means I have something to lose.",
        "scores": {
          "kylo": 3,
          "han": 3,
          "vader": 2,
          "mando": 2,
          "palpatine": -1
        },
        "saber": {
          "red": 2,
          "white": 2,
          "purple": 1
        }
      },
      {
        "text": "Change how I act. Then maybe they will notice.",
        "scores": {
          "han": 2,
          "kylo": 2,
          "mando": 2,
          "finn": 1,
          "mace": -1
        },
        "saber": {
          "white": 2,
          "red": 1,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "love_14",
    "category": "THE WAY YOU LOVE",
    "type": "personality",
    "image": null,
    "text": "How do you love someone when they are hard to love?",
    "answers": [
      {
        "text": "I see who they could be underneath the hard parts. That keeps me there.",
        "scores": {
          "luke": 3,
          "obiwan": 3,
          "finn": 2,
          "quigon": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "I love them anyway. That is the whole point of loving someone.",
        "scores": {
          "chewie": 3,
          "mando": 3,
          "grogu": 2,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "Honestly? Sometimes I cannot. I have to step back to keep loving them at all.",
        "scores": {
          "obiwan": 3,
          "han": 3,
          "mando": 2,
          "kylo": 2,
          "yoda": 1
        },
        "saber": {
          "white": 2,
          "purple": 2,
          "blue": 1
        }
      },
      {
        "text": "I do not. Love that costs that much is not sustainable for me.",
        "scores": {
          "palpatine": 3,
          "boba": 2,
          "vader": 1,
          "finn": -2,
          "luke": -3
        },
        "saber": {
          "red": 2,
          "white": 1,
          "blue": -2
        }
      }
    ]
  },
  {
    "id": "love_15",
    "category": "THE WAY YOU LOVE",
    "type": "personality",
    "image": null,
    "text": "What is the love that has shaped you most?",
    "answers": [
      {
        "text": "The love of someone who saw me when I could not see myself.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "kylo": 2,
          "mando": 1
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "green": 1
        }
      },
      {
        "text": "The love I had to choose, again and again, even when it was hard.",
        "scores": {
          "mando": 3,
          "obiwan": 3,
          "vader": 2,
          "mace": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 2,
          "white": 2,
          "yellow": 1
        }
      },
      {
        "text": "A love I lost. It taught me what mattered.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "obiwan": 2,
          "han": 1,
          "palpatine": -1
        },
        "saber": {
          "red": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "The love I give freely now without needing anything back.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "love_16",
    "category": "THE WAY YOU LOVE",
    "type": "scenario",
    "image": "",
    "text": "You are watching someone you love sleep, completely vulnerable. What goes through you?",
    "answers": [
      {
        "text": "A vow. Quiet. That nothing will reach them as long as I am here.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "vader": 2,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "Gratitude. That I am the one they trust enough to sleep beside.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "mando": 1,
          "kylo": -1
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "A wish that I could give them more than I have.",
        "scores": {
          "kylo": 3,
          "vader": 2,
          "han": 2,
          "luke": 1,
          "palpatine": -2
        },
        "saber": {
          "purple": 2,
          "red": 1,
          "blue": 1
        }
      },
      {
        "text": "A still moment. Just being there. No words. No thoughts.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "obiwan": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "love_17",
    "category": "THE WAY YOU LOVE",
    "type": "personality",
    "image": null,
    "text": "Someone leaves you. What is the truest thing inside you?",
    "answers": [
      {
        "text": "I understand. People walk their own paths. That is what love allows.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 1,
          "kylo": -3
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "I hurt. Deeply. I will not pretend otherwise.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 2,
          "han": 1,
          "palpatine": -2
        },
        "saber": {
          "red": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "I close the door. Some doors do not open twice.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "mace": 1,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "yellow": 1,
          "blue": -1
        }
      },
      {
        "text": "I learn from it. People show you who they are when they leave.",
        "scores": {
          "palpatine": 3,
          "obiwan": 2,
          "vader": 2,
          "han": 1
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "love_18",
    "category": "THE WAY YOU LOVE",
    "type": "personality",
    "image": null,
    "text": "What is the most loving thing you have ever done?",
    "answers": [
      {
        "text": "Let someone go who needed to leave, even though it hurt me.",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "yoda": 2,
          "luke": 2,
          "kylo": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Stayed when it would have been easier to leave.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "han": 2,
          "vader": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "Told someone the truth they did not want to hear.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "finn": 2,
          "luke": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "yellow": 1
        }
      },
      {
        "text": "Was just there. No fixing, no advice, just present.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "finn": 2,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "love_19",
    "category": "THE WAY YOU LOVE",
    "type": "personality",
    "image": null,
    "text": "How do you know when love is real?",
    "answers": [
      {
        "text": "When I would still choose them even when it costs me.",
        "scores": {
          "luke": 3,
          "mando": 3,
          "finn": 2,
          "vader": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "When they have seen the worst of me and stayed.",
        "scores": {
          "kylo": 3,
          "han": 3,
          "mando": 2,
          "chewie": 1,
          "palpatine": -1
        },
        "saber": {
          "purple": 2,
          "blue": 2,
          "white": 1
        }
      },
      {
        "text": "When I want them to be happy more than I want them to be mine.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 1,
          "kylo": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I am not always sure I know. But my body knows before my mind does.",
        "scores": {
          "grogu": 3,
          "han": 2,
          "finn": 2,
          "luke": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 2,
          "green": 1,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "love_20",
    "category": "THE WAY YOU LOVE",
    "type": "personality",
    "image": null,
    "text": "What kind of love is hardest for you?",
    "answers": [
      {
        "text": "Loving someone who keeps hurting me. I cannot make that math work.",
        "scores": {
          "han": 3,
          "mando": 2,
          "boba": 2,
          "finn": 1,
          "luke": -1
        },
        "saber": {
          "white": 3,
          "yellow": 1,
          "blue": -1
        }
      },
      {
        "text": "Loving someone who cannot love me back the way I need.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "luke": 2,
          "finn": 1,
          "palpatine": -2
        },
        "saber": {
          "red": 2,
          "purple": 2,
          "blue": 1
        }
      },
      {
        "text": "Loving myself. That is the one I am still learning.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "mando": 2,
          "luke": 2,
          "palpatine": -2
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "Loving people I do not really know. The galaxy at scale.",
        "scores": {
          "boba": 3,
          "han": 2,
          "mando": 2,
          "mace": 1,
          "luke": -3,
          "finn": -2
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -3
        }
      }
    ]
  },
  {
    "id": "love_21",
    "category": "THE WAY YOU LOVE",
    "type": "personality",
    "image": null,
    "text": "What is the gift you would give to someone you love most?",
    "answers": [
      {
        "text": "My protection. Forever. Without conditions.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "vader": 3,
          "finn": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "My honesty. Even when it costs me.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "luke": 2,
          "han": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "yellow": 1
        }
      },
      {
        "text": "My absence when they need it. My presence when they ask for it.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mando": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Everything I have. They can decide what they want from it.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "grogu": 2,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "love_22",
    "category": "THE WAY YOU LOVE",
    "type": "personality",
    "image": null,
    "text": "When someone says they love you — how do you actually receive it?",
    "answers": [
      {
        "text": "Easily. Love is offered, I take it in. It feeds something.",
        "scores": {
          "grogu": 3,
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Carefully. I want to be sure it is real before I respond.",
        "scores": {
          "mando": 3,
          "obiwan": 2,
          "mace": 2,
          "boba": 2,
          "palpatine": 1
        },
        "saber": {
          "yellow": 3,
          "blue": 1,
          "white": 1
        }
      },
      {
        "text": "With suspicion. Why do they love me? What do they want?",
        "scores": {
          "kylo": 3,
          "palpatine": 3,
          "boba": 2,
          "vader": 2,
          "finn": -2
        },
        "saber": {
          "red": 3,
          "white": 1,
          "blue": -2
        }
      },
      {
        "text": "Quietly grateful. I do not always know what to say back.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "han": 2,
          "chewie": 1,
          "poe": -1
        },
        "saber": {
          "blue": 2,
          "white": 2,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "love_23",
    "category": "THE WAY YOU LOVE",
    "type": "personality",
    "image": null,
    "text": "Someone you love is becoming someone you do not recognize. What do you do?",
    "answers": [
      {
        "text": "Stay. Love them through it. They might come back.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "mando": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "Reach. Try one last time to find who they were.",
        "scores": {
          "vader": 3,
          "luke": 3,
          "obiwan": 2,
          "kylo": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 2,
          "red": 1,
          "purple": 1
        }
      },
      {
        "text": "Step back. The version of them I loved is gone. I cannot pretend.",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "mace": 2,
          "boba": 1,
          "finn": -1
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "blue": 1
        }
      },
      {
        "text": "Honestly, I become someone they would not recognize either.",
        "scores": {
          "kylo": 3,
          "vader": 2,
          "mace": 1,
          "mando": 1,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "purple": 1,
          "green": -2
        }
      }
    ]
  },
  {
    "id": "love_24",
    "category": "THE WAY YOU LOVE",
    "type": "personality",
    "image": null,
    "text": "What does love require you to give up?",
    "answers": [
      {
        "text": "My old idea of who I was alone. That person could not love this much.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "kylo": 2,
          "han": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "red": 1
        }
      },
      {
        "text": "The illusion that I could leave whenever I wanted to.",
        "scores": {
          "han": 3,
          "boba": 2,
          "mando": 2,
          "kylo": 1,
          "luke": -1
        },
        "saber": {
          "white": 3,
          "blue": -1
        }
      },
      {
        "text": "My need to be right about everything. Love asks for humility.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "quigon": 2,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "purple": 1
        }
      },
      {
        "text": "Nothing. Love does not require sacrifice. That is just bad theology.",
        "scores": {
          "yoda": 2,
          "palpatine": 2,
          "han": 1,
          "grogu": 1,
          "kylo": -2
        },
        "saber": {
          "green": 2,
          "white": 1,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "love_04",
    "category": "THE WAY YOU LOVE",
    "type": "image-answer",
    "text": "Who would you bring on a long journey?",
    "answers": [
      {
        "image": "./assets/quiz/q-love_04-a.png",
        "caption": "The Innocent",
        "scores": {
          "grogu": 3,
          "mando": 3,
          "luke": 2,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-love_04-b.png",
        "caption": "The Loyal One",
        "scores": {
          "chewie": 3,
          "han": 3,
          "mando": 2,
          "luke": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-love_04-c.png",
        "caption": "The Teacher",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "yoda": 2,
          "luke": 1,
          "kylo": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-love_04-d.png",
        "caption": "The Friend",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "mando": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "love_08",
    "category": "THE WAY YOU LOVE",
    "type": "image-answer",
    "text": "Which home calls to you?",
    "answers": [
      {
        "image": "./assets/quiz/q-love_08-a.png",
        "caption": "The Farm",
        "scores": {
          "luke": 3,
          "finn": 2,
          "han": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-love_08-b.png",
        "caption": "The Ship",
        "scores": {
          "mando": 3,
          "han": 3,
          "chewie": 2,
          "boba": 1,
          "yoda": -1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-love_08-c.png",
        "caption": "The Temple",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 2,
          "mace": 2,
          "han": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-love_08-d.png",
        "caption": "The Palace",
        "scores": {
          "palpatine": 3,
          "vader": 2,
          "kylo": 2,
          "mace": 1,
          "finn": -2
        },
        "saber": {
          "red": 3,
          "yellow": 1,
          "black": 1
        }
      }
    ]
  },
  {
    "id": "love_13",
    "category": "THE WAY YOU LOVE",
    "type": "image-answer",
    "text": "What gift do you give to someone you love?",
    "answers": [
      {
        "image": "./assets/quiz/q-love_13-a.png",
        "caption": "My Words",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "finn": 3,
          "quigon": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-love_13-b.png",
        "caption": "My Protection",
        "scores": {
          "mando": 3,
          "vader": 2,
          "chewie": 2,
          "boba": 1,
          "palpatine": -1
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-love_13-c.png",
        "caption": "My Trust",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "han": 2,
          "kylo": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-love_13-d.png",
        "caption": "My Time",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "mando": 2,
          "chewie": 2,
          "finn": 1
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "love_25",
    "category": "THE WAY YOU LOVE",
    "type": "image-answer",
    "text": "Pick a moment that feels like love.",
    "answers": [
      {
        "image": "./assets/quiz/q-love_25-a.png",
        "caption": "A Hug",
        "scores": {
          "chewie": 3,
          "mando": 2,
          "finn": 2,
          "grogu": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-love_25-b.png",
        "caption": "A Shared Meal",
        "scores": {
          "han": 3,
          "chewie": 2,
          "finn": 2,
          "luke": 2,
          "palpatine": -2
        },
        "saber": {
          "white": 2,
          "blue": 2,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-love_25-c.png",
        "caption": "A Piggyback Ride",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "grogu": 2,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-love_25-d.png",
        "caption": "A Goodnight",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "vader": 2,
          "yoda": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "connect_01",
    "category": "THE WAY YOU CONNECT",
    "type": "scenario",
    "image": "",
    "text": "You walk into a room full of strangers. What is the first thing you do?",
    "answers": [
      {
        "text": "Find the person who looks the most uncomfortable. Make them feel less alone.",
        "scores": {
          "finn": 3,
          "luke": 3,
          "obiwan": 2,
          "mando": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Read the room. Figure out who runs it. Then decide my next move.",
        "scores": {
          "palpatine": 3,
          "han": 2,
          "mace": 2,
          "boba": 2,
          "obiwan": 1
        },
        "saber": {
          "yellow": 3,
          "white": 1,
          "red": 1
        }
      },
      {
        "text": "Make myself easy to find. Whoever needs me will come to me.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "grogu": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Stay near the wall. Watch. Connect later if at all.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "kylo": 2,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "yellow": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "connect_02",
    "category": "THE WAY YOU CONNECT",
    "type": "personality",
    "image": null,
    "text": "What role do you naturally play in a group?",
    "answers": [
      {
        "text": "The heart. I keep everyone connected to why we are together.",
        "scores": {
          "finn": 3,
          "luke": 3,
          "poe": 2,
          "chewie": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "The brain. I see the moves no one else sees and call them.",
        "scores": {
          "palpatine": 3,
          "obiwan": 2,
          "mace": 2,
          "yoda": 1
        },
        "saber": {
          "yellow": 3,
          "purple": 1,
          "blue": 1
        }
      },
      {
        "text": "The fire. I make things happen. Without me, the group stalls.",
        "scores": {
          "poe": 3,
          "han": 3,
          "kylo": 2,
          "maul": 1,
          "yoda": -1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      },
      {
        "text": "The shield. I am where the trouble lands so it does not land on others.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "mace": 2,
          "vader": 2,
          "finn": 1
        },
        "saber": {
          "blue": 3,
          "yellow": 1,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "connect_03",
    "category": "THE WAY YOU CONNECT",
    "type": "personality",
    "image": null,
    "text": "How do you make a new friend?",
    "answers": [
      {
        "text": "I am just myself. The right people find me.",
        "scores": {
          "yoda": 3,
          "mando": 3,
          "han": 2,
          "boba": 2,
          "finn": -1
        },
        "saber": {
          "green": 2,
          "white": 2
        }
      },
      {
        "text": "I ask them real questions. Not small talk — real ones.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "finn": 2,
          "quigon": 2,
          "palpatine": -1
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "I make them laugh. Once we can laugh together we can do anything.",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "chewie": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "I show up when they need me. Words come later — actions come first.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "finn": 2,
          "mace": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 2,
          "white": 2,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "connect_05",
    "category": "THE WAY YOU CONNECT",
    "type": "personality",
    "image": null,
    "text": "What do you need from the people around you to do your best work?",
    "answers": [
      {
        "text": "Trust. Just let me do what I do — I will not let you down.",
        "scores": {
          "han": 3,
          "poe": 3,
          "mando": 2,
          "boba": 2,
          "finn": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "Push-back. People who will tell me when I am wrong.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "luke": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "yellow": 1
        }
      },
      {
        "text": "Space. Quiet. Room to think.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "vader": 2,
          "boba": 2
        },
        "saber": {
          "green": 3,
          "yellow": 1,
          "white": 1
        }
      },
      {
        "text": "Belief. Even when I do not believe in myself, someone has to.",
        "scores": {
          "finn": 3,
          "luke": 3,
          "kylo": 2,
          "grogu": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "connect_06",
    "category": "THE WAY YOU CONNECT",
    "type": "personality",
    "image": null,
    "text": "In a group, do you talk first or listen first?",
    "answers": [
      {
        "text": "Listen first. Always. Speaking before listening is wasting both.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 2,
          "mace": 2,
          "han": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Talk first. Get the energy going. Quiet rooms make me restless.",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "kylo": 1,
          "yoda": -2
        },
        "saber": {
          "white": 3,
          "blue": -1
        }
      },
      {
        "text": "Watch first. I want to see how everyone fits together before I do anything.",
        "scores": {
          "palpatine": 3,
          "boba": 3,
          "mando": 2,
          "vader": 2,
          "finn": -1
        },
        "saber": {
          "yellow": 3,
          "white": 1
        }
      },
      {
        "text": "Honestly, it depends on whether anyone is hurting. If they are, I talk.",
        "scores": {
          "finn": 3,
          "luke": 3,
          "obiwan": 2,
          "chewie": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "connect_07",
    "category": "THE WAY YOU CONNECT",
    "type": "personality",
    "image": null,
    "text": "Someone in your group is hurting. They have not told anyone. How do you know?",
    "answers": [
      {
        "text": "Their eyes are doing the work their mouth is not.",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "mando": 2,
          "luke": 2,
          "han": -1
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "They got quieter. Quiet people get quieter when something is wrong.",
        "scores": {
          "yoda": 3,
          "grogu": 3,
          "mando": 2,
          "finn": 1
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "They are trying harder than usual. The trying is the tell.",
        "scores": {
          "obiwan": 3,
          "mace": 2,
          "luke": 2,
          "finn": 2,
          "palpatine": 1
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "yellow": 1
        }
      },
      {
        "text": "I have to admit — sometimes I do not notice until it is too late.",
        "scores": {
          "han": 3,
          "vader": 2,
          "palpatine": 1,
          "mando": 1,
          "finn": -1
        },
        "saber": {
          "white": 2,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "connect_09",
    "category": "THE WAY YOU CONNECT",
    "type": "scenario",
    "image": "",
    "text": "You meet someone who could become your closest friend. The moment you both realize it — what is happening?",
    "answers": [
      {
        "text": "We are saving each other in a crisis. The bond gets forged in fire.",
        "scores": {
          "han": 3,
          "finn": 3,
          "chewie": 2,
          "poe": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 2,
          "white": 2,
          "red": 1
        }
      },
      {
        "text": "We are sitting quietly somewhere. Nothing is happening. Everything is happening.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mando": 1
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "We are arguing about something we both care about. Real care looks like real fights.",
        "scores": {
          "obiwan": 3,
          "mace": 2,
          "luke": 2,
          "kylo": 2,
          "han": 1
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "red": 1
        }
      },
      {
        "text": "We are laughing at something nobody else thinks is funny.",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "chewie": 2,
          "palpatine": -2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "connect_10",
    "category": "THE WAY YOU CONNECT",
    "type": "personality",
    "image": null,
    "text": "When you are tired or stressed, who do you actually want to be around?",
    "answers": [
      {
        "text": "My closest person. The one I do not have to perform for.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "han": 2,
          "vader": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "No one. I recharge alone. People take energy I do not have.",
        "scores": {
          "yoda": 3,
          "mando": 2,
          "boba": 3,
          "kylo": 2,
          "poe": -2
        },
        "saber": {
          "green": 2,
          "white": 2,
          "yellow": 1
        }
      },
      {
        "text": "People who make me laugh. Stress is fixable with the right room.",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "chewie": 2,
          "palpatine": -2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "Someone who needs me. Helping them gets me out of my own head.",
        "scores": {
          "finn": 3,
          "luke": 3,
          "obiwan": 2,
          "mando": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "connect_11",
    "category": "THE WAY YOU CONNECT",
    "type": "personality",
    "image": null,
    "text": "What is the fastest way to feel close to you?",
    "answers": [
      {
        "text": "Trust me with something hard. The harder the thing, the closer we get.",
        "scores": {
          "mando": 3,
          "obiwan": 3,
          "mace": 2,
          "vader": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "Be honest about something you are scared of. I will meet you there.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "kylo": 2,
          "obiwan": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "Show me you are exactly who you said you were.",
        "scores": {
          "boba": 3,
          "mando": 2,
          "palpatine": 2,
          "mace": 2,
          "han": 1
        },
        "saber": {
          "yellow": 3,
          "white": 1
        }
      },
      {
        "text": "Make me laugh until my face hurts. The fastest bond in the galaxy.",
        "scores": {
          "han": 3,
          "poe": 3,
          "chewie": 2,
          "finn": 2,
          "palpatine": -2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "connect_12",
    "category": "THE WAY YOU CONNECT",
    "type": "personality",
    "image": null,
    "text": "A friend hurts your feelings without realizing it. What do you do?",
    "answers": [
      {
        "text": "Tell them. Gently but clearly. Real friends can hear hard things.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "finn": 2,
          "mace": 1,
          "palpatine": -1
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "green": 1
        }
      },
      {
        "text": "Sit with it alone first. I want to know if it is mine or theirs.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mando": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Let it go. Most hurts are not worth the cost of bringing up.",
        "scores": {
          "han": 3,
          "mando": 2,
          "chewie": 2,
          "palpatine": 1,
          "mace": -1
        },
        "saber": {
          "white": 3,
          "blue": -1
        }
      },
      {
        "text": "Carry it quietly. They will figure it out eventually.",
        "scores": {
          "kylo": 3,
          "vader": 2,
          "boba": 2,
          "mando": 1,
          "finn": -1
        },
        "saber": {
          "red": 2,
          "white": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "connect_14",
    "category": "THE WAY YOU CONNECT",
    "type": "personality",
    "image": null,
    "text": "How do you know when a friendship is real?",
    "answers": [
      {
        "text": "When we can be quiet together and it does not feel weird.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "yoda": 2,
          "han": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "white": 1
        }
      },
      {
        "text": "When they have seen me at my worst and stayed.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "vader": 2,
          "han": 2,
          "palpatine": -2
        },
        "saber": {
          "purple": 2,
          "blue": 2,
          "red": 1
        }
      },
      {
        "text": "When I would do something hard for them — and they would for me.",
        "scores": {
          "luke": 3,
          "mando": 3,
          "chewie": 2,
          "mace": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "When we have outgrown the version of us that started the friendship.",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "yoda": 2,
          "luke": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "connect_15",
    "category": "THE WAY YOU CONNECT",
    "type": "personality",
    "image": null,
    "text": "How do you handle a disagreement with someone you care about?",
    "answers": [
      {
        "text": "Talk it out. The longer it sits unspoken, the bigger it gets.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "finn": 3,
          "mace": 1,
          "han": -1
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Walk it off first. I do not say things in the heat that I would not say in the calm.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "mando": 2,
          "vader": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "yellow": 1
        }
      },
      {
        "text": "Make a joke about it. Tension is sometimes just energy with nowhere to go.",
        "scores": {
          "han": 3,
          "poe": 3,
          "chewie": 2,
          "finn": 1,
          "mace": -1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "Stand my ground but stay kind. The disagreement is not the relationship.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "obiwan": 2,
          "vader": 1,
          "finn": 1
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "connect_16",
    "category": "THE WAY YOU CONNECT",
    "type": "scenario",
    "image": "",
    "text": "You walk into a group meal. There is one empty seat at each end of a long table. Which one do you choose?",
    "answers": [
      {
        "text": "The middle is taken — so I take whichever end. I do not need to be at the center.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "yoda": 1,
          "han": 1
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "text": "The end near the door. I want to see who comes and goes.",
        "scores": {
          "palpatine": 3,
          "han": 3,
          "boba": 2,
          "obiwan": 1
        },
        "saber": {
          "yellow": 3,
          "white": 1
        }
      },
      {
        "text": "The end near whoever looks like they need a friend tonight.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "quigon": 2,
          "obiwan": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Honestly? I would rather sit at the bar by myself.",
        "scores": {
          "boba": 3,
          "kylo": 2,
          "mando": 2,
          "han": 1,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "connect_17",
    "category": "THE WAY YOU CONNECT",
    "type": "personality",
    "image": null,
    "text": "Someone you barely know tells you a secret. What do you actually feel?",
    "answers": [
      {
        "text": "Honored. They trusted me with something rare.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "mando": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Suspicious. Why are they telling me this?",
        "scores": {
          "palpatine": 3,
          "boba": 3,
          "vader": 2,
          "kylo": 1,
          "finn": -1
        },
        "saber": {
          "yellow": 3,
          "red": 1,
          "white": 1
        }
      },
      {
        "text": "Protective. I will carry it for them.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "mace": 2,
          "obiwan": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "A little overwhelmed. That is heavier than they probably realize.",
        "scores": {
          "finn": 3,
          "luke": 2,
          "grogu": 2,
          "kylo": 1,
          "han": -1
        },
        "saber": {
          "blue": 2,
          "green": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "connect_18",
    "category": "THE WAY YOU CONNECT",
    "type": "personality",
    "image": null,
    "text": "When you are with someone you love, what kind of silence is your favorite?",
    "answers": [
      {
        "text": "The one where we are both reading or working — present but separate.",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "yoda": 2,
          "mace": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "yellow": 1
        }
      },
      {
        "text": "The one right after laughing too hard. Out of breath, leaning on each other.",
        "scores": {
          "han": 3,
          "poe": 3,
          "chewie": 2,
          "finn": 2,
          "palpatine": -2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "The one watching something beautiful together. Sunset. Stars.",
        "scores": {
          "luke": 3,
          "quigon": 3,
          "grogu": 2,
          "finn": 1
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "purple": 1
        }
      },
      {
        "text": "The one before falling asleep. Quietly safe.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "vader": 2,
          "han": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "connect_19",
    "category": "THE WAY YOU CONNECT",
    "type": "personality",
    "image": null,
    "text": "How do you handle a friend who is going through something you cannot understand?",
    "answers": [
      {
        "text": "I do not try to understand it. I just stay near them.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "mando": 3,
          "grogu": 2,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "I ask them what they need. Then I do that.",
        "scores": {
          "obiwan": 3,
          "finn": 3,
          "luke": 2,
          "mace": 1,
          "palpatine": -1
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "I share something hard of my own. So they know I can hear theirs.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "kylo": 2,
          "obiwan": 1
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "I keep doing normal things with them. Not everything has to be processed.",
        "scores": {
          "han": 3,
          "chewie": 3,
          "mando": 2,
          "boba": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "connect_20",
    "category": "THE WAY YOU CONNECT",
    "type": "personality",
    "image": null,
    "text": "Who do you become for the people you love?",
    "answers": [
      {
        "text": "A safer, calmer version of myself. They make me steadier.",
        "scores": {
          "mando": 3,
          "yoda": 2,
          "obiwan": 2,
          "chewie": 2,
          "kylo": -1
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "white": 1
        }
      },
      {
        "text": "A braver, bigger version. They make me reach for things I would not alone.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "kylo": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "A more honest version. I cannot hide from the people who know me.",
        "scores": {
          "obiwan": 3,
          "han": 2,
          "mace": 2,
          "finn": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "I am not sure I become different. The people I love are the ones I do not have to perform for.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "han": 2,
          "vader": 1
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "connect_21",
    "category": "THE WAY YOU CONNECT",
    "type": "personality",
    "image": null,
    "text": "You are at a celebration. The people you care about are all there. What is the best moment?",
    "answers": [
      {
        "text": "The moment I notice they are all laughing at the same time.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "han": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "The moment when it gets quiet for a second and I can just look at them.",
        "scores": {
          "mando": 3,
          "obiwan": 3,
          "yoda": 2,
          "vader": 1
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "white": 1
        }
      },
      {
        "text": "When someone toasts something I did not realize they noticed.",
        "scores": {
          "finn": 3,
          "kylo": 3,
          "luke": 2,
          "han": 1,
          "palpatine": -1
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Honestly, I usually end up watching from the edge of the room. That is my favorite part.",
        "scores": {
          "boba": 3,
          "mando": 2,
          "palpatine": 1,
          "vader": 2,
          "poe": -2
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "connect_22",
    "category": "THE WAY YOU CONNECT",
    "type": "personality",
    "image": null,
    "text": "When you give someone a compliment, what does it usually sound like?",
    "answers": [
      {
        "text": "Specific. I notice something they probably did not realize anyone saw.",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "luke": 2,
          "finn": 2,
          "palpatine": 1
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "Direct. They earned it. I say so.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "vader": 2,
          "boba": 1
        },
        "saber": {
          "yellow": 3,
          "blue": 1
        }
      },
      {
        "text": "Big and loud. Why be quiet about something good?",
        "scores": {
          "poe": 3,
          "han": 3,
          "chewie": 2,
          "finn": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "I am bad at compliments. I show care through things, not words.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "boba": 2,
          "han": 1,
          "finn": -1
        },
        "saber": {
          "white": 2,
          "yellow": 2,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "connect_23",
    "category": "THE WAY YOU CONNECT",
    "type": "personality",
    "image": null,
    "text": "What kind of person are you most drawn to?",
    "answers": [
      {
        "text": "The quiet one. Quiet people have the most going on underneath.",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "kylo": 2,
          "yoda": 2
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "purple": 1
        }
      },
      {
        "text": "The funny one. Life is too long to spend with humorless people.",
        "scores": {
          "han": 3,
          "poe": 3,
          "chewie": 2,
          "finn": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "The honest one. I would rather be hurt by the truth than soothed by a lie.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "obiwan": 2,
          "vader": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "yellow": 1,
          "purple": 1
        }
      },
      {
        "text": "The intense one. Half-anything is exhausting to be around.",
        "scores": {
          "kylo": 3,
          "maul": 2,
          "vader": 2,
          "palpatine": 1,
          "yoda": -1
        },
        "saber": {
          "red": 3,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "connect_24",
    "category": "THE WAY YOU CONNECT",
    "type": "personality",
    "image": null,
    "text": "When you connect deeply with someone, what is happening inside you?",
    "answers": [
      {
        "text": "A relaxing. Like I had been holding something I did not know I was holding.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "kylo": 2,
          "han": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 2,
          "white": 2,
          "purple": 1
        }
      },
      {
        "text": "A recognition. Like meeting someone I already knew somehow.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 2,
          "grogu": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "An alertness. I want to remember every detail of this.",
        "scores": {
          "obiwan": 3,
          "palpatine": 2,
          "mace": 2,
          "finn": 1
        },
        "saber": {
          "yellow": 3,
          "blue": 1
        }
      },
      {
        "text": "A spark. Energy starts moving. We are going to do things together.",
        "scores": {
          "poe": 3,
          "han": 3,
          "finn": 2,
          "kylo": 1
        },
        "saber": {
          "white": 3,
          "blue": 1,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "connect_04",
    "category": "THE WAY YOU CONNECT",
    "type": "image-answer",
    "text": "Pick your crew symbol.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic emblem illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. Square 1:1 overall, 1024x1024.\n\nTOP LEFT — \"The Rebellion\": The classic Rebel Alliance Starbird symbol, orange and gold phoenix-like emblem with wings raised, weathered metal texture, atmosphere of hope and resistance.\n\nTOP RIGHT — \"The Empire\": A black Imperial cog emblem with sharp geometric edges, gleaming dark metal, atmosphere of disciplined power.\n\nBOTTOM LEFT — \"The Mandalorian\": A skull-shaped helmet emblem with a single T-shaped visor, weathered metal with battle scratches, atmosphere of bounty hunter clan.\n\nBOTTOM RIGHT — \"The Jedi\": A circular Jedi Order emblem with stylized wings extending outward, soft blue-gold glow, atmosphere of ancient guardianship.",
    "answers": [
      {
        "image": "./assets/quiz/q-connect_04-a.png",
        
        "caption": "The Rebellion",
        "scores": {
          "luke": 3,
          "poe": 3,
          "finn": 3,
          "han": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-connect_04-b.png",
        
        "caption": "The Empire",
        "scores": {
          "vader": 3,
          "palpatine": 3,
          "kylo": 2,
          "mace": 1,
          "finn": -2
        },
        "saber": {
          "red": 3,
          "yellow": 1,
          "black": 1
        }
      },
      {
        "image": "./assets/quiz/q-connect_04-c.png",
        
        "caption": "The Mandalorian",
        "scores": {
          "mando": 3,
          "boba": 3,
          "han": 2,
          "grogu": 1
        },
        "saber": {
          "white": 3,
          "blue": 1,
          "yellow": 1
        }
      },
      {
        "image": "./assets/quiz/q-connect_04-d.png",
        
        "caption": "The Jedi",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mace": 3,
          "luke": 2,
          "quigon": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 2,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "connect_08",
    "category": "THE WAY YOU CONNECT",
    "type": "image-answer",
    "text": "Pick your ideal crew.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic group silhouette illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. NO faces clearly visible — silhouettes only. Square 1:1 overall, 1024x1024.\n\nTOP LEFT — \"Just Me\": A single Star Wars-style figure standing alone on a cliff edge with cape blowing in the wind, vast empty sky behind them, atmosphere of self-reliance and solitude.\n\nTOP RIGHT — \"Two of Us\": Two Star Wars figures standing back to back, one large furred warrior and one smaller human in a vest, ready for anything together, atmosphere of unbreakable partnership.\n\nBOTTOM LEFT — \"A Small Crew\": Four Star Wars figures standing together in a tight group, varied silhouettes — a Jedi, a pilot, a smuggler, and a small companion — strong group bond, atmosphere of chosen family.\n\nBOTTOM RIGHT — \"An Army\": A vast array of Star Wars figures stretching into the distance, dozens of silhouetted warriors in formation, atmosphere of mass loyalty and command.",
    "answers": [
      {
        "image": "./assets/quiz/q-connect_08-a.png",
        
        "caption": "Just Me",
        "scores": {
          "boba": 3,
          "mando": 2,
          "kylo": 2,
          "vader": 2,
          "palpatine": 1,
          "finn": -2
        },
        "saber": {
          "white": 3,
          "yellow": 1,
          "blue": -2
        }
      },
      {
        "image": "./assets/quiz/q-connect_08-b.png",
        
        "caption": "Two of Us",
        "scores": {
          "han": 3,
          "chewie": 3,
          "mando": 3,
          "grogu": 2,
          "palpatine": -1
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-connect_08-c.png",
        
        "caption": "A Small Crew",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 3,
          "obiwan": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-connect_08-d.png",
        
        "caption": "An Army",
        "scores": {
          "mace": 3,
          "palpatine": 3,
          "vader": 2,
          "poe": 1,
          "yoda": -1,
          "mando": -1
        },
        "saber": {
          "yellow": 3,
          "red": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "connect_13",
    "category": "THE WAY YOU CONNECT",
    "type": "image-answer",
    "text": "Where do you most feel like yourself with the people you love?",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic atmospheric illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. NO figures visible. Square 1:1 overall, 1024x1024.\n\nTOP LEFT — \"Around a Fire\": A warm campfire in the middle of a wilderness clearing, soft golden light radiating outward, log seats arranged in a circle, atmosphere of intimate gathering.\n\nTOP RIGHT — \"In a Cantina\": A bustling alien cantina interior with warm hanging lanterns, a long bar, exotic instruments hanging on walls, the suggestion of music and laughter, no figures visible.\n\nBOTTOM LEFT — \"On a Ship\": A small starship lounge with circular table and bench seating, warm lights, viewport showing stars streaking past at hyperspace, cozy and intimate.\n\nBOTTOM RIGHT — \"In a Temple\": A quiet ancient meditation chamber with stone benches around a central altar, soft beams of light through tall windows, atmosphere of sacred companionship.",
    "answers": [
      {
        "image": "./assets/quiz/q-connect_13-a.png",
        
        "caption": "Around a Fire",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "finn": 2,
          "luke": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 2,
          "white": 2,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-connect_13-b.png",
        
        "caption": "In a Cantina",
        "scores": {
          "han": 3,
          "poe": 3,
          "chewie": 2,
          "finn": 1,
          "yoda": -2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-connect_13-c.png",
        
        "caption": "On a Ship",
        "scores": {
          "mando": 3,
          "han": 3,
          "poe": 2,
          "boba": 1,
          "yoda": -1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-connect_13-d.png",
        
        "caption": "In a Temple",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "mace": 2,
          "han": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "connect_25",
    "category": "THE WAY YOU CONNECT",
    "type": "image-answer",
    "text": "Pick the moment that feels most like being in a crew.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic emotional illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. Figures may appear as silhouettes but NO clear faces. Square 1:1 overall, 1024x1024.\n\nTOP LEFT — \"Backs Together\": Two figures standing back-to-back with weapons drawn, facing outward in opposite directions, defending each other, atmosphere of unbreakable trust under pressure.\n\nTOP RIGHT — \"All Laughing\": Three or four figures clustered together, all visibly laughing, hands on each other's shoulders, warm joyful golden light, atmosphere of shared joy.\n\nBOTTOM LEFT — \"Watching Together\": A group of figures all looking up at the same vast starscape, side by side, no one speaking, atmosphere of shared awe and quiet companionship.\n\nBOTTOM RIGHT — \"Leaving the Bay\": A small group walking together onto a starship ramp, one leading, others following, ready for what comes next, atmosphere of shared mission.",
    "answers": [
      {
        "image": "./assets/quiz/q-connect_25-a.png",
        
        "caption": "Backs Together",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "han": 3,
          "mace": 2,
          "finn": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-connect_25-b.png",
        
        "caption": "All Laughing",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 3,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-connect_25-c.png",
        
        "caption": "Watching Together",
        "scores": {
          "luke": 3,
          "quigon": 3,
          "yoda": 2,
          "finn": 2,
          "grogu": 1
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-connect_25-d.png",
        
        "caption": "Leaving the Bay",
        "scores": {
          "poe": 3,
          "mando": 3,
          "mace": 2,
          "han": 2,
          "vader": 1
        },
        "saber": {
          "white": 2,
          "blue": 2,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "trust_01",
    "category": "THE WAY YOU TRUST",
    "type": "scenario",
    "image": "",
    "text": "Someone offers you something precious. You can take it or leave it. What do you do first?",
    "answers": [
      {
        "text": "Look in their eyes. The gift means nothing without the giver.",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "luke": 2,
          "mando": 2,
          "palpatine": -1
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "Take it. Trust the gesture. Whatever happens, happens.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "grogu": 2,
          "han": 1,
          "boba": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Ask why. The reason matters more than the thing.",
        "scores": {
          "palpatine": 3,
          "mace": 2,
          "obiwan": 2,
          "boba": 2,
          "finn": -1
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      },
      {
        "text": "Do not take it. Things this precious always come with strings.",
        "scores": {
          "boba": 3,
          "mando": 2,
          "kylo": 2,
          "vader": 1,
          "finn": -2
        },
        "saber": {
          "white": 3,
          "yellow": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "trust_02",
    "category": "THE WAY YOU TRUST",
    "type": "personality",
    "image": null,
    "text": "How long does it take for someone to earn your trust?",
    "answers": [
      {
        "text": "Years. Trust is given to me carefully, and I give it back the same way.",
        "scores": {
          "boba": 3,
          "mando": 3,
          "vader": 2,
          "mace": 2,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "text": "A single moment. One real thing they did when no one was watching.",
        "scores": {
          "mando": 3,
          "han": 3,
          "luke": 2,
          "chewie": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 2,
          "white": 2
        }
      },
      {
        "text": "No time. I trust first. They have to break it for me to take it back.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "grogu": 3,
          "poe": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I do not trust people fully. Not really. But I work with them anyway.",
        "scores": {
          "palpatine": 3,
          "boba": 2,
          "vader": 2,
          "kylo": 1,
          "finn": -3
        },
        "saber": {
          "red": 3,
          "yellow": 1,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "trust_03",
    "category": "THE WAY YOU TRUST",
    "type": "personality",
    "image": null,
    "text": "Someone betrays you. What is the first thing you actually feel?",
    "answers": [
      {
        "text": "Sadness. Not anger. Sadness that I read them wrong.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 2,
          "quigon": 2,
          "kylo": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Cold. Everything goes quiet inside me. I am already deciding what comes next.",
        "scores": {
          "vader": 3,
          "mando": 3,
          "boba": 3,
          "mace": 2,
          "finn": -1
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "white": 1
        }
      },
      {
        "text": "Heat. Quick and hot. I will have to be careful what I do with it.",
        "scores": {
          "kylo": 3,
          "han": 2,
          "maul": 2,
          "finn": 1,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "blue": 1
        }
      },
      {
        "text": "Confusion. Because part of me always saw it coming.",
        "scores": {
          "palpatine": 3,
          "obiwan": 2,
          "boba": 2,
          "kylo": 1,
          "luke": -1
        },
        "saber": {
          "yellow": 2,
          "purple": 1,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "trust_05",
    "category": "THE WAY YOU TRUST",
    "type": "personality",
    "image": null,
    "text": "A secret is given to you. What do you do with it?",
    "answers": [
      {
        "text": "Carry it. Forever. They trusted me — that is sacred.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "mace": 2,
          "obiwan": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "Sit with it for a while. Decide if the secret is good for them or bad.",
        "scores": {
          "obiwan": 3,
          "quigon": 2,
          "luke": 2,
          "mace": 1
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "green": 1
        }
      },
      {
        "text": "Honestly, I might tell one person I trust. Just one.",
        "scores": {
          "han": 3,
          "finn": 2,
          "poe": 2,
          "mando": -1
        },
        "saber": {
          "white": 3,
          "blue": -1
        }
      },
      {
        "text": "Use it. Carefully. Secrets are power if you hold them right.",
        "scores": {
          "palpatine": 3,
          "kylo": 2,
          "vader": 1,
          "boba": 2,
          "finn": -3
        },
        "saber": {
          "red": 3,
          "yellow": 1,
          "black": 1
        }
      }
    ]
  },
  {
    "id": "trust_06",
    "category": "THE WAY YOU TRUST",
    "type": "personality",
    "image": null,
    "text": "Do you trust yourself more, or other people more?",
    "answers": [
      {
        "text": "Myself. I have been with me the longest. I know how I react.",
        "scores": {
          "boba": 3,
          "mando": 2,
          "han": 2,
          "palpatine": 2,
          "vader": 1
        },
        "saber": {
          "white": 3,
          "yellow": 1,
          "red": 1
        }
      },
      {
        "text": "Others. People I love know me better than I know myself.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "chewie": 2,
          "grogu": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Both at different times. The trick is knowing when to lean which way.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "mace": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Honestly? Neither. I keep my guard up either way.",
        "scores": {
          "kylo": 3,
          "palpatine": 2,
          "boba": 2,
          "vader": 1,
          "finn": -2,
          "luke": -2
        },
        "saber": {
          "red": 2,
          "white": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "trust_07",
    "category": "THE WAY YOU TRUST",
    "type": "personality",
    "image": null,
    "text": "How do you decide who you can be vulnerable with?",
    "answers": [
      {
        "text": "When I see them be vulnerable first. It tells me they understand the cost.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "kylo": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "When they have been in the room for something hard. Then I know they can stay.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "han": 2,
          "mace": 2
        },
        "saber": {
          "blue": 2,
          "white": 2,
          "yellow": 1
        }
      },
      {
        "text": "When my body relaxes around them. Bodies know before minds do.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "obiwan": 1
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "I am not vulnerable. With anyone. That is how I survive.",
        "scores": {
          "palpatine": 3,
          "boba": 3,
          "vader": 2,
          "kylo": 2,
          "finn": -3,
          "luke": -2
        },
        "saber": {
          "red": 2,
          "white": 2,
          "black": 1
        }
      }
    ]
  },
  {
    "id": "trust_09",
    "category": "THE WAY YOU TRUST",
    "type": "scenario",
    "image": "",
    "text": "A stranger offers to help you with something important. They have nothing to gain. What do you do?",
    "answers": [
      {
        "text": "Accept. People want to help more than the galaxy lets on.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "quigon": 2,
          "grogu": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Accept, but watch them. Generous strangers usually want something they have not named yet.",
        "scores": {
          "mando": 3,
          "han": 3,
          "obiwan": 2,
          "boba": 2
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "blue": 1
        }
      },
      {
        "text": "Decline politely. I do not owe debts I did not choose.",
        "scores": {
          "boba": 3,
          "mando": 2,
          "vader": 2,
          "palpatine": 1,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "text": "Ask what they want in return. Honest help has honest costs.",
        "scores": {
          "palpatine": 3,
          "mace": 2,
          "han": 1,
          "obiwan": 1,
          "luke": -1
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "trust_10",
    "category": "THE WAY YOU TRUST",
    "type": "personality",
    "image": null,
    "text": "Someone you have always trusted asks you to do something that feels wrong. What do you do?",
    "answers": [
      {
        "text": "I tell them no, and I tell them why. Trust includes the right to disagree.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "luke": 2,
          "finn": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "I do it. They have earned the right to be wrong sometimes.",
        "scores": {
          "vader": 3,
          "chewie": 3,
          "han": 2,
          "finn": 1,
          "mace": -1
        },
        "saber": {
          "blue": 2,
          "white": 2,
          "red": 1
        }
      },
      {
        "text": "I ask more questions. Maybe I am missing something they can see.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I quietly do something different. Then deal with the consequences later.",
        "scores": {
          "han": 3,
          "boba": 2,
          "palpatine": 2,
          "kylo": 1,
          "mando": -1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "trust_11",
    "category": "THE WAY YOU TRUST",
    "type": "personality",
    "image": null,
    "text": "What does it feel like in your body when you fully trust someone?",
    "answers": [
      {
        "text": "Lighter. Like I have been carrying something I did not know I was carrying.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "kylo": 2,
          "finn": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 2,
          "purple": 1,
          "green": 1
        }
      },
      {
        "text": "Safer. The world is a little less sharp around the edges.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "grogu": 3,
          "mando": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Quieter. The constant noise in my head turns down.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "grogu": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Honestly, I am not sure I have felt that. Or if I have, I have forgotten.",
        "scores": {
          "palpatine": 3,
          "boba": 3,
          "kylo": 2,
          "vader": 1,
          "finn": -3
        },
        "saber": {
          "red": 2,
          "white": 1,
          "black": 1,
          "blue": -3
        }
      }
    ]
  },
  {
    "id": "trust_12",
    "category": "THE WAY YOU TRUST",
    "type": "personality",
    "image": null,
    "text": "Someone tells you a lie that does not hurt anyone. What do you do?",
    "answers": [
      {
        "text": "Call it out. Lies are lies even when they are small.",
        "scores": {
          "mace": 3,
          "obiwan": 3,
          "mando": 2,
          "vader": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "purple": 1
        }
      },
      {
        "text": "Let it go. Small lies are the social glue. I do not need every truth.",
        "scores": {
          "han": 3,
          "palpatine": 3,
          "poe": 2,
          "boba": 1,
          "mace": -1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      },
      {
        "text": "Remember it. Not to use against them — to know who I am dealing with.",
        "scores": {
          "boba": 3,
          "palpatine": 3,
          "mando": 2,
          "vader": 1
        },
        "saber": {
          "yellow": 3,
          "white": 1
        }
      },
      {
        "text": "Wonder why they lied. Curiosity, not anger. Lies usually reveal more than the truth would have.",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "yoda": 2,
          "kylo": 1
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "trust_14",
    "category": "THE WAY YOU TRUST",
    "type": "personality",
    "image": null,
    "text": "When you cannot trust someone, what do you do about them?",
    "answers": [
      {
        "text": "I keep my distance. Politely. They do not need to know how I feel about them.",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "boba": 2,
          "mace": 2,
          "han": 1
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "white": 1
        }
      },
      {
        "text": "I watch them carefully. Untrustworthy people show themselves eventually.",
        "scores": {
          "palpatine": 3,
          "boba": 3,
          "vader": 2,
          "mace": 1
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      },
      {
        "text": "I cut them out entirely. Life is too short.",
        "scores": {
          "mando": 3,
          "han": 3,
          "boba": 2,
          "vader": 1,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "text": "I try to understand them. There is usually a reason they became hard to trust.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 2,
          "obiwan": 2,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "trust_15",
    "category": "THE WAY YOU TRUST",
    "type": "personality",
    "image": null,
    "text": "What is the hardest thing about trusting someone new?",
    "answers": [
      {
        "text": "I cannot see who they really are yet. I am trusting a version they are showing me.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "palpatine": 2,
          "boba": 2,
          "finn": -1
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "The risk that I will be wrong. I have been wrong before and it costs.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "mando": 2,
          "han": 1,
          "luke": -1
        },
        "saber": {
          "red": 2,
          "purple": 1,
          "blue": 1
        }
      },
      {
        "text": "Nothing. I just do it. Worrying about being wrong is more exhausting than being wrong.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "grogu": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Holding the trust open long enough for them to step into it. Patience is the hard part.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "trust_16",
    "category": "THE WAY YOU TRUST",
    "type": "scenario",
    "image": "",
    "text": "You have to leave something precious in someone else's hands. Who do you actually leave it with?",
    "answers": [
      {
        "text": "The person who has always been there. Not the smartest — the steadiest.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "obiwan": 2,
          "mace": 2
        },
        "saber": {
          "blue": 3,
          "yellow": 1,
          "white": 1
        }
      },
      {
        "text": "The one with the most to lose if it goes wrong. They will guard it like their own.",
        "scores": {
          "palpatine": 3,
          "boba": 2,
          "vader": 2,
          "mace": 1,
          "luke": -1
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      },
      {
        "text": "Someone unexpected. The person no one would think to look for.",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "han": 2,
          "mando": 1
        },
        "saber": {
          "blue": 2,
          "white": 1,
          "purple": 1
        }
      },
      {
        "text": "No one. I keep it with me. The only person I trust completely is me.",
        "scores": {
          "boba": 3,
          "mando": 2,
          "vader": 2,
          "palpatine": 2,
          "han": 1,
          "luke": -1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "trust_17",
    "category": "THE WAY YOU TRUST",
    "type": "personality",
    "image": null,
    "text": "When someone says \"trust me\" — what is your first reaction?",
    "answers": [
      {
        "text": "I already do. Why would they need to say that?",
        "scores": {
          "luke": 3,
          "finn": 3,
          "grogu": 2,
          "chewie": 1
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I get suspicious immediately. People who have to ask usually have not earned it.",
        "scores": {
          "palpatine": 3,
          "boba": 3,
          "vader": 2,
          "mace": 1,
          "finn": -1
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      },
      {
        "text": "I trust them — but I keep my eyes open. Both can be true.",
        "scores": {
          "obiwan": 3,
          "han": 3,
          "mando": 2,
          "mace": 1
        },
        "saber": {
          "blue": 2,
          "white": 2,
          "yellow": 1
        }
      },
      {
        "text": "I think about it for a long moment. Trust is not given on demand.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "mando": 2,
          "obiwan": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "trust_18",
    "category": "THE WAY YOU TRUST",
    "type": "personality",
    "image": null,
    "text": "What makes you lose trust in someone fast?",
    "answers": [
      {
        "text": "Watching them treat someone else badly. They will eventually treat me the same way.",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "luke": 2,
          "finn": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "Catching them in a small lie. If they will lie about something small, they will lie about anything.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "boba": 2,
          "vader": 2,
          "han": -1
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "Watching them break a promise without acknowledging it. The lack of repair, more than the break itself.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "vader": 2,
          "kylo": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "red": 1
        }
      },
      {
        "text": "Their pattern. One thing might be a mistake. Three things are a person.",
        "scores": {
          "palpatine": 3,
          "boba": 3,
          "mace": 2,
          "mando": 1
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "trust_19",
    "category": "THE WAY YOU TRUST",
    "type": "personality",
    "image": null,
    "text": "After someone has broken your trust, can it ever fully come back?",
    "answers": [
      {
        "text": "Yes. Different than before, but yes. People can change.",
        "scores": {
          "luke": 3,
          "obiwan": 3,
          "finn": 2,
          "quigon": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "No. It can come close — but never all the way.",
        "scores": {
          "mando": 3,
          "han": 3,
          "mace": 2,
          "boba": 2,
          "finn": -1
        },
        "saber": {
          "white": 2,
          "blue": 2,
          "yellow": 1
        }
      },
      {
        "text": "Almost never. The version of me that trusted them is gone.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "boba": 2,
          "mando": 1,
          "luke": -1
        },
        "saber": {
          "red": 2,
          "purple": 1,
          "white": 1
        }
      },
      {
        "text": "It depends on what they do next. Words mean nothing. Time and actions, everything.",
        "scores": {
          "yoda": 3,
          "mando": 3,
          "mace": 2,
          "obiwan": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "trust_20",
    "category": "THE WAY YOU TRUST",
    "type": "personality",
    "image": null,
    "text": "Who gets the most honest version of you?",
    "answers": [
      {
        "text": "My closest person. Maybe one or two others. That is it.",
        "scores": {
          "mando": 3,
          "han": 3,
          "chewie": 2,
          "vader": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "Almost everyone. I do not hide much. What you see is what you get.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 3,
          "chewie": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Whoever earns it in the moment. The honest version shows up when it is safe.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "quigon": 2,
          "mando": 1
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "yellow": 1
        }
      },
      {
        "text": "No one. Not even me. The fully honest version of me does not exist outside my head.",
        "scores": {
          "palpatine": 3,
          "boba": 2,
          "kylo": 2,
          "vader": 1,
          "luke": -3
        },
        "saber": {
          "red": 2,
          "white": 1,
          "black": 1,
          "blue": -3
        }
      }
    ]
  },
  {
    "id": "trust_21",
    "category": "THE WAY YOU TRUST",
    "type": "personality",
    "image": null,
    "text": "When you put your trust in someone and they come through — what do you feel?",
    "answers": [
      {
        "text": "Relief. Most of the time, I was holding my breath without knowing it.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "finn": 2,
          "kylo": 1,
          "palpatine": -1
        },
        "saber": {
          "blue": 2,
          "purple": 1,
          "white": 1
        }
      },
      {
        "text": "Gratitude. The kind that does not need words, but does need actions.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "mando": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Pride. I read them right. My judgement was good.",
        "scores": {
          "palpatine": 3,
          "mace": 2,
          "han": 2,
          "boba": 1,
          "finn": -1
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      },
      {
        "text": "Like a door opened. We can do harder things together now.",
        "scores": {
          "obiwan": 3,
          "poe": 3,
          "mace": 2,
          "mando": 1
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "trust_22",
    "category": "THE WAY YOU TRUST",
    "type": "personality",
    "image": null,
    "text": "How do you handle someone who trusts you too easily?",
    "answers": [
      {
        "text": "I become very careful with them. Their open heart is mine to protect.",
        "scores": {
          "mando": 3,
          "obiwan": 3,
          "chewie": 2,
          "mace": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "I worry about them. The galaxy is not always kind to open hearts.",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "yoda": 2,
          "han": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "I tell them. Gently. That kind of trust can hurt them.",
        "scores": {
          "mace": 3,
          "obiwan": 2,
          "mando": 2,
          "han": 1,
          "palpatine": -1
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "yellow": 1
        }
      },
      {
        "text": "Honestly, I take advantage. People who trust easily are easy to work with.",
        "scores": {
          "palpatine": 3,
          "boba": 2,
          "vader": 1,
          "kylo": 1,
          "luke": -3,
          "finn": -3
        },
        "saber": {
          "red": 3,
          "black": 1,
          "blue": -3
        }
      }
    ]
  },
  {
    "id": "trust_23",
    "category": "THE WAY YOU TRUST",
    "type": "personality",
    "image": null,
    "text": "What is the biggest trust you have ever given someone?",
    "answers": [
      {
        "text": "I let them see me at my worst. The version I would not put online.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 2,
          "mando": 1,
          "palpatine": -2
        },
        "saber": {
          "purple": 2,
          "blue": 2,
          "red": 1
        }
      },
      {
        "text": "I let them make a decision that affected my whole life.",
        "scores": {
          "luke": 3,
          "obiwan": 2,
          "finn": 2,
          "han": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "I told them something I had never told anyone.",
        "scores": {
          "mando": 3,
          "kylo": 3,
          "luke": 2,
          "finn": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "red": 1
        }
      },
      {
        "text": "I let them watch over someone I love.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "vader": 2,
          "han": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "trust_24",
    "category": "THE WAY YOU TRUST",
    "type": "personality",
    "image": null,
    "text": "What does trust mean to you in one line?",
    "answers": [
      {
        "text": "Trust is what makes me brave.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "mando": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Trust is what I give people only after I have earned the right to give it.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "mace": 2,
          "vader": 2,
          "finn": -1
        },
        "saber": {
          "white": 2,
          "yellow": 2,
          "blue": 1
        }
      },
      {
        "text": "Trust is the thing the strong protect for the people who cannot.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "finn": 2,
          "mace": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "Trust is something I have learned the hard way to give carefully.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "han": 2,
          "boba": 1,
          "luke": -1
        },
        "saber": {
          "red": 2,
          "purple": 1,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "trust_04",
    "category": "THE WAY YOU TRUST",
    "type": "image-answer",
    "text": "Pick the person you would trust with a secret.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic character silhouette illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. NO faces clearly visible — silhouettes or partial shadow only. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): A wise elder hooded figure in flowing brown Jedi-style robes standing in calm meditation pose, soft green-gold glow around them, ancient and serene presence.\n\nQUADRANT 2 (top right): A masked warrior figure in full helmeted armor with a single T-shaped visor, ammunition belt across chest, weapon holstered, atmosphere of disciplined silent loyalty.\n\nQUADRANT 3 (bottom left): A scrappy roguish figure in a worn vest leaning casually against a wall, hands in pockets, sense of charm and humor, weapon at hip, atmosphere of cocky friendship.\n\nQUADRANT 4 (bottom right): A tall furred large-bodied alien creature silhouette with bandolier across chest, profound calm strength, atmosphere of unwavering loyalty.",
    "answers": [
      {
        "image": "./assets/quiz/q-trust_04-a.png",
        
        "caption": "The Wise Elder",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "mace": 2,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-trust_04-b.png",
        
        "caption": "The Silent Warrior",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "mace": 1
        },
        "saber": {
          "white": 3,
          "yellow": 1,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-trust_04-c.png",
        
        "caption": "The Friend",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "luke": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-trust_04-d.png",
        
        "caption": "The Loyal One",
        "scores": {
          "chewie": 3,
          "mando": 2,
          "finn": 2,
          "luke": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "trust_08",
    "category": "THE WAY YOU TRUST",
    "type": "image-answer",
    "text": "Pick a place to hide something precious.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic atmospheric illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. NO figures visible. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): A small ornate wooden box sitting in plain sight on a busy workshop table cluttered with tools and parts, hidden in plain sight, atmosphere of disguise through ordinariness.\n\nQUADRANT 2 (top right): A deep underground vault with a heavy round metal door, dim cyan lighting, sense of impenetrable security, atmosphere of guarded fortress.\n\nQUADRANT 3 (bottom left): An ancient stone altar in a remote mountain temple at sunrise, weathered carvings, sacred light from above, atmosphere of protected sanctuary.\n\nQUADRANT 4 (bottom right): A small leather pouch worn close to the chest, partially hidden inside a vest pocket, suggesting always-on-person security, intimate atmosphere of personal carry.",
    "answers": [
      {
        "image": "./assets/quiz/q-trust_08-a.png",
        
        "caption": "In Plain Sight",
        "scores": {
          "palpatine": 3,
          "han": 3,
          "obiwan": 2,
          "poe": 1
        },
        "saber": {
          "white": 2,
          "yellow": 2,
          "red": 1
        }
      },
      {
        "image": "./assets/quiz/q-trust_08-b.png",
        
        "caption": "The Vault",
        "scores": {
          "boba": 3,
          "mace": 3,
          "palpatine": 2,
          "vader": 2,
          "finn": -1
        },
        "saber": {
          "yellow": 3,
          "white": 1,
          "red": 1
        }
      },
      {
        "image": "./assets/quiz/q-trust_08-c.png",
        
        "caption": "The Temple",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 2,
          "luke": 1,
          "han": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-trust_08-d.png",
        
        "caption": "On Me",
        "scores": {
          "mando": 3,
          "boba": 2,
          "han": 2,
          "vader": 1
        },
        "saber": {
          "white": 3,
          "blue": 1,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "trust_13",
    "category": "THE WAY YOU TRUST",
    "type": "image-answer",
    "text": "Pick what trust looks like to you.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic symbolic illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. NO figures with faces visible — hands, objects, and symbolic imagery only. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): A handshake between two different hands — one weathered and gloved, one bare and human — clasping firmly at the wrist in a warrior greeting, warm light, atmosphere of bond forged through action.\n\nQUADRANT 2 (top right): A back-to-back combat stance — two silhouetted figures pressed against each other, weapons drawn outward, ready to defend each other, atmosphere of trust under fire.\n\nQUADRANT 3 (bottom left): An ancient key being handed from one hand to another in soft warm light, both hands open and vulnerable, atmosphere of access being granted.\n\nQUADRANT 4 (bottom right): A small child silhouette being held safely in adult arms, profound size difference, warm golden glow around them, atmosphere of unconditional safekeeping.",
    "answers": [
      {
        "image": "./assets/quiz/q-trust_13-a.png",
        
        "caption": "A Warrior Handshake",
        "scores": {
          "mando": 3,
          "han": 3,
          "mace": 2,
          "boba": 2,
          "palpatine": -1
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-trust_13-b.png",
        
        "caption": "Backs Together",
        "scores": {
          "chewie": 3,
          "han": 3,
          "mando": 3,
          "finn": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-trust_13-c.png",
        
        "caption": "A Key Handed Over",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "yoda": 2,
          "luke": 1
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-trust_13-d.png",
        
        "caption": "A Child Held Safe",
        "scores": {
          "mando": 3,
          "chewie": 2,
          "vader": 3,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "trust_25",
    "category": "THE WAY YOU TRUST",
    "type": "image-answer",
    "text": "Pick the moment trust feels strongest.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic emotional illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. Figures may appear as silhouettes but NO clear faces. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): A figure sleeping peacefully while another figure sits nearby keeping watch, soft warm light from a single lamp, atmosphere of trust through vigilance.\n\nQUADRANT 2 (top right): Two figures standing on the edge of a high cliff together, one figure's hand on the other's shoulder, vast sky ahead of them, atmosphere of leaping into the unknown together.\n\nQUADRANT 3 (bottom left): One figure passing a small bundled item to another figure across a doorway, hands meeting in the middle, atmosphere of an important thing being entrusted.\n\nQUADRANT 4 (bottom right): A small figure climbing onto a larger figure's back, arms wrapping around the larger one's neck, the larger figure walking forward into a bright horizon, atmosphere of being carried in trust.",
    "answers": [
      {
        "image": "./assets/quiz/q-trust_25-a.png",
        
        "caption": "Sleeping While You Watch",
        "scores": {
          "mando": 3,
          "vader": 3,
          "obiwan": 2,
          "chewie": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-trust_25-b.png",
        
        "caption": "Jumping Together",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 3,
          "han": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-trust_25-c.png",
        
        "caption": "Entrusting Something",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-trust_25-d.png",
        
        "caption": "Being Carried",
        "scores": {
          "grogu": 3,
          "mando": 3,
          "chewie": 2,
          "luke": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "live_01",
    "category": "THE WAY YOU LIVE",
    "type": "scenario",
    "image": "",
    "text": "You have a whole day ahead with no one telling you what to do. What is your first move?",
    "answers": [
      {
        "text": "Build something with my hands. I work best when something is taking shape.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "mace": 1,
          "han": 1
        },
        "saber": {
          "white": 2,
          "yellow": 2,
          "blue": 1
        }
      },
      {
        "text": "Wander. See where my feet take me. The day will tell me what it wants.",
        "scores": {
          "quigon": 3,
          "han": 3,
          "luke": 2,
          "grogu": 2,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "white": 1,
          "blue": 1
        }
      },
      {
        "text": "Find someone I love and make plans with them. Days are better shared.",
        "scores": {
          "chewie": 3,
          "finn": 3,
          "poe": 2,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "Plan it carefully. I have things I want to accomplish.",
        "scores": {
          "palpatine": 3,
          "mace": 2,
          "vader": 2,
          "obiwan": 2,
          "han": -1
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "live_02",
    "category": "THE WAY YOU LIVE",
    "type": "personality",
    "image": null,
    "text": "What gets you out of bed?",
    "answers": [
      {
        "text": "A purpose. Something I committed to. My word is my alarm.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "vader": 2,
          "obiwan": 2,
          "han": -1
        },
        "saber": {
          "yellow": 3,
          "blue": 1
        }
      },
      {
        "text": "Curiosity about what today might bring.",
        "scores": {
          "luke": 3,
          "poe": 3,
          "finn": 2,
          "grogu": 2,
          "palpatine": -1
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "The smell of breakfast. Or the sound of someone I love moving around.",
        "scores": {
          "han": 3,
          "chewie": 3,
          "finn": 2,
          "mando": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "The next move. Something I started yesterday is waiting for me.",
        "scores": {
          "palpatine": 3,
          "mace": 2,
          "vader": 2,
          "boba": 2,
          "yoda": -1
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "live_03",
    "category": "THE WAY YOU LIVE",
    "type": "personality",
    "image": null,
    "text": "When you are alone for a long time, what do you actually do?",
    "answers": [
      {
        "text": "I work on something. Quiet hands keep my mind quiet.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "palpatine": 1,
          "mace": 1
        },
        "saber": {
          "white": 2,
          "yellow": 2,
          "red": 1
        }
      },
      {
        "text": "I think. Long thoughts. Solving problems that have been sitting with me.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mace": 2,
          "vader": 2,
          "palpatine": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "yellow": 1
        }
      },
      {
        "text": "I get restless. Solitude is not really my thing.",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "kylo": 1,
          "yoda": -2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "I rest. Real rest. Most people do not actually know how.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "obiwan": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "live_05",
    "category": "THE WAY YOU LIVE",
    "type": "personality",
    "image": null,
    "text": "How important are routines to you?",
    "answers": [
      {
        "text": "Essential. My routines are how I become the person I want to be.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "vader": 2,
          "palpatine": 2,
          "han": -1
        },
        "saber": {
          "yellow": 3,
          "blue": 1
        }
      },
      {
        "text": "Useful. I have a few I keep. The rest I let go.",
        "scores": {
          "obiwan": 3,
          "mando": 2,
          "finn": 2,
          "luke": 2,
          "boba": 1
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "white": 1
        }
      },
      {
        "text": "I avoid them. They make me feel boxed in.",
        "scores": {
          "han": 3,
          "poe": 3,
          "kylo": 2,
          "maul": 1,
          "mace": -1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "yellow": -1
        }
      },
      {
        "text": "I have one true routine — meditation. The rest of the day flows from that.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "live_06",
    "category": "THE WAY YOU LIVE",
    "type": "personality",
    "image": null,
    "text": "What is your relationship with quiet?",
    "answers": [
      {
        "text": "I crave it. Most of my life happens in the spaces between sounds.",
        "scores": {
          "yoda": 3,
          "mando": 3,
          "vader": 2,
          "grogu": 2,
          "han": -1
        },
        "saber": {
          "green": 2,
          "white": 2,
          "yellow": 1
        }
      },
      {
        "text": "I respect it but I do not need much of it. I think better with noise.",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "mace": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "Quiet makes me uncomfortable. I usually fill it.",
        "scores": {
          "poe": 3,
          "han": 2,
          "kylo": 2,
          "finn": 1,
          "yoda": -2
        },
        "saber": {
          "white": 2,
          "red": 1
        }
      },
      {
        "text": "Quiet is sacred. I treat it like a guest.",
        "scores": {
          "quigon": 3,
          "obiwan": 3,
          "yoda": 2,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "live_07",
    "category": "THE WAY YOU LIVE",
    "type": "personality",
    "image": null,
    "text": "When you are tired, how do you actually rest?",
    "answers": [
      {
        "text": "Sleep. Deeply. My body knows what it needs.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "boba": 2,
          "han": 2,
          "palpatine": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "Sit somewhere beautiful. Looking at something steady. A horizon, a flame, a sky.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 2,
          "grogu": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Move. Walk somewhere. My body recharges when it has somewhere to go.",
        "scores": {
          "poe": 3,
          "han": 3,
          "finn": 2,
          "mace": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "I am bad at rest. I usually keep working until I crash.",
        "scores": {
          "vader": 3,
          "palpatine": 2,
          "mace": 2,
          "kylo": 2,
          "yoda": -2
        },
        "saber": {
          "red": 2,
          "yellow": 2
        }
      }
    ]
  },
  {
    "id": "live_09",
    "category": "THE WAY YOU LIVE",
    "type": "scenario",
    "image": "",
    "text": "You are working on something for hours. No one is asking you to. What is it?",
    "answers": [
      {
        "text": "Something I can hold when it is done. Tangible. Real.",
        "scores": {
          "mando": 3,
          "han": 3,
          "boba": 2,
          "chewie": 2,
          "palpatine": -1
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "text": "Something I am trying to understand. A puzzle. An idea that will not leave me alone.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "palpatine": 2,
          "quigon": 2
        },
        "saber": {
          "green": 2,
          "yellow": 2,
          "blue": 1
        }
      },
      {
        "text": "Something for someone I love. A gift they do not know is coming.",
        "scores": {
          "mando": 3,
          "finn": 3,
          "chewie": 2,
          "luke": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Something that will give me more power tomorrow than I have today.",
        "scores": {
          "palpatine": 3,
          "kylo": 3,
          "vader": 2,
          "mace": 1,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "yellow": 1,
          "green": -2
        }
      }
    ]
  },
  {
    "id": "live_10",
    "category": "THE WAY YOU LIVE",
    "type": "personality",
    "image": null,
    "text": "What kind of place do you want to wake up in?",
    "answers": [
      {
        "text": "Somewhere familiar. The same view, the same sounds. The comfort of a place that knows me.",
        "scores": {
          "mando": 3,
          "vader": 2,
          "obiwan": 2,
          "mace": 2,
          "han": -1
        },
        "saber": {
          "blue": 2,
          "white": 2,
          "yellow": 1
        }
      },
      {
        "text": "Somewhere I have never been. Tomorrow should not look like yesterday.",
        "scores": {
          "han": 3,
          "poe": 3,
          "kylo": 2,
          "finn": 2,
          "mando": -1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      },
      {
        "text": "Somewhere with the people I love. The place itself does not matter.",
        "scores": {
          "chewie": 3,
          "finn": 3,
          "luke": 2,
          "mando": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Somewhere quiet. Where the world starts slow.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "obiwan": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "live_11",
    "category": "THE WAY YOU LIVE",
    "type": "personality",
    "image": null,
    "text": "What is the small thing that means more to you than it should?",
    "answers": [
      {
        "text": "A particular meal. The smell, the place, the people I usually share it with.",
        "scores": {
          "han": 3,
          "chewie": 3,
          "finn": 2,
          "luke": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "A piece of gear I have used a thousand times. It knows my hand.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "han": 2,
          "vader": 1
        },
        "saber": {
          "white": 2,
          "yellow": 2
        }
      },
      {
        "text": "A particular kind of light. Late afternoon. Or first morning.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 2,
          "grogu": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "A memory I return to often. It is more home than any place is.",
        "scores": {
          "obiwan": 3,
          "vader": 3,
          "kylo": 2,
          "luke": 2,
          "palpatine": -1
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "live_12",
    "category": "THE WAY YOU LIVE",
    "type": "personality",
    "image": null,
    "text": "What do you do when you have an empty afternoon?",
    "answers": [
      {
        "text": "I find someone who needs help with something. Empty time wants to be useful.",
        "scores": {
          "mando": 3,
          "finn": 3,
          "obiwan": 2,
          "luke": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "I go somewhere I have been meaning to go. Empty time is the only kind worth using.",
        "scores": {
          "poe": 3,
          "han": 3,
          "quigon": 2,
          "finn": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "I sit. I let it be empty. Not all time has to be filled.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "obiwan": 2,
          "han": -2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "I work on what I am building. Free time is what I do my best work in.",
        "scores": {
          "palpatine": 3,
          "mace": 2,
          "vader": 2,
          "boba": 2,
          "han": -1
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "live_14",
    "category": "THE WAY YOU LIVE",
    "type": "personality",
    "image": null,
    "text": "What does your version of a good evening look like?",
    "answers": [
      {
        "text": "Quiet. A meal. Maybe a fire. The day winding down with intention.",
        "scores": {
          "mando": 3,
          "obiwan": 3,
          "yoda": 2,
          "mace": 1
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Loud. Friends. Stories told and retold. Laughing until late.",
        "scores": {
          "han": 3,
          "poe": 3,
          "chewie": 3,
          "finn": 2,
          "vader": -1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "Productive. The world is quiet so I can finally focus.",
        "scores": {
          "palpatine": 3,
          "vader": 2,
          "mace": 2,
          "boba": 1,
          "yoda": -2
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      },
      {
        "text": "Outside. Under the stars. The galaxy is bigger at night.",
        "scores": {
          "luke": 3,
          "quigon": 3,
          "poe": 2,
          "grogu": 1
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "live_15",
    "category": "THE WAY YOU LIVE",
    "type": "personality",
    "image": null,
    "text": "What do you actually do with your hands when you are thinking?",
    "answers": [
      {
        "text": "I make something. Even small. Carving, polishing, fixing.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "mace": 1
        },
        "saber": {
          "white": 2,
          "yellow": 2
        }
      },
      {
        "text": "I hold them still. Stillness in the body lets the mind move.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mace": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I move them. Pace, tap, gesture. My thinking is physical.",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "kylo": 1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      },
      {
        "text": "I write. Notes, sketches, plans. Hands and brain working together.",
        "scores": {
          "obiwan": 3,
          "palpatine": 3,
          "mace": 2,
          "luke": 1
        },
        "saber": {
          "yellow": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "live_16",
    "category": "THE WAY YOU LIVE",
    "type": "scenario",
    "image": "",
    "text": "You are looking out at the vastness of space. What is going through you?",
    "answers": [
      {
        "text": "Peace. The size of it makes my problems feel small.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Wonder. The galaxy is too big to ever finish exploring. That excites me.",
        "scores": {
          "poe": 3,
          "luke": 3,
          "han": 2,
          "finn": 2,
          "grogu": 1
        },
        "saber": {
          "blue": 2,
          "white": 2
        }
      },
      {
        "text": "Calculation. So many places. So many possibilities. So much to organize.",
        "scores": {
          "palpatine": 3,
          "mace": 2,
          "vader": 2,
          "boba": 1,
          "yoda": -2
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      },
      {
        "text": "Loneliness. The honest kind. A reminder of how small I am.",
        "scores": {
          "kylo": 3,
          "vader": 2,
          "mando": 2,
          "obiwan": 1,
          "palpatine": -1
        },
        "saber": {
          "purple": 2,
          "red": 1,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "live_17",
    "category": "THE WAY YOU LIVE",
    "type": "personality",
    "image": null,
    "text": "How do you handle a boring day?",
    "answers": [
      {
        "text": "I notice it. The boredom is information. What is missing today?",
        "scores": {
          "obiwan": 3,
          "yoda": 2,
          "quigon": 2,
          "mace": 2,
          "palpatine": 1
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "yellow": 1
        }
      },
      {
        "text": "I create chaos. A boring day is a wasted day.",
        "scores": {
          "han": 3,
          "poe": 3,
          "kylo": 2,
          "maul": 1,
          "yoda": -2
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      },
      {
        "text": "I welcome it. Boring days are when the deepest things happen quietly.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "mando": 2,
          "obiwan": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I treat it like training. Boring is when discipline sharpens.",
        "scores": {
          "mace": 3,
          "vader": 3,
          "mando": 2,
          "boba": 2,
          "han": -1
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "live_18",
    "category": "THE WAY YOU LIVE",
    "type": "personality",
    "image": null,
    "text": "What do you make sure is true about your life every single day?",
    "answers": [
      {
        "text": "I do at least one thing that I would not regret.",
        "scores": {
          "mando": 3,
          "luke": 3,
          "obiwan": 2,
          "mace": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "I move. My body, my plans, something — forward.",
        "scores": {
          "poe": 3,
          "han": 3,
          "mace": 2,
          "finn": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "I am quiet for a moment. At least one. To remember I am here.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "obiwan": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I check in with at least one person I love.",
        "scores": {
          "chewie": 3,
          "finn": 3,
          "mando": 2,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "live_19",
    "category": "THE WAY YOU LIVE",
    "type": "personality",
    "image": null,
    "text": "What kind of work makes the time disappear for you?",
    "answers": [
      {
        "text": "Working with my hands. Building, fixing, making. Hours feel like minutes.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "han": 2,
          "chewie": 2
        },
        "saber": {
          "white": 2,
          "yellow": 2
        }
      },
      {
        "text": "Solving something hard. A puzzle. A strategy. An idea unfolding.",
        "scores": {
          "palpatine": 3,
          "obiwan": 3,
          "mace": 2,
          "yoda": 1
        },
        "saber": {
          "yellow": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Being out in the world. Movement, people, change. The opposite of a desk.",
        "scores": {
          "poe": 3,
          "han": 3,
          "finn": 2,
          "luke": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "Teaching something. Watching someone get it for the first time.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "mace": 1,
          "palpatine": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "live_20",
    "category": "THE WAY YOU LIVE",
    "type": "personality",
    "image": null,
    "text": "What is the rhythm of your perfect week?",
    "answers": [
      {
        "text": "Predictable. Same things, same days. The repetition itself is the gift.",
        "scores": {
          "mando": 3,
          "vader": 2,
          "palpatine": 2,
          "mace": 2,
          "han": -1
        },
        "saber": {
          "yellow": 3,
          "blue": 1
        }
      },
      {
        "text": "Mostly steady, with one wild day. The contrast is what makes both good.",
        "scores": {
          "obiwan": 3,
          "mando": 2,
          "han": 2,
          "luke": 2
        },
        "saber": {
          "blue": 2,
          "white": 2,
          "yellow": 1
        }
      },
      {
        "text": "Different every week. The rhythm IS unpredictability.",
        "scores": {
          "poe": 3,
          "han": 3,
          "finn": 2,
          "kylo": 1,
          "yoda": -2
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      },
      {
        "text": "Built around moments of stillness. The rest is just the space between them.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "obiwan": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "live_21",
    "category": "THE WAY YOU LIVE",
    "type": "personality",
    "image": null,
    "text": "What do you want to be true about how you live?",
    "answers": [
      {
        "text": "That I was kind. To people. To creatures. To myself.",
        "scores": {
          "yoda": 3,
          "finn": 3,
          "grogu": 2,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "That I was brave. That I did not let fear shape my days.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "mace": 2,
          "kylo": 1
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "That I was useful. That what I built mattered to someone.",
        "scores": {
          "mando": 3,
          "obiwan": 3,
          "mace": 2,
          "chewie": 2
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "white": 1
        }
      },
      {
        "text": "That I lived on my own terms. Not someone else's.",
        "scores": {
          "han": 3,
          "boba": 3,
          "kylo": 2,
          "palpatine": 2,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "live_22",
    "category": "THE WAY YOU LIVE",
    "type": "personality",
    "image": null,
    "text": "How do you decide what to spend your time on?",
    "answers": [
      {
        "text": "I ask: will I be glad I did this in a year?",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "mace": 2,
          "mando": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "I follow what pulls me. Resistance usually means I should do it.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 2,
          "kylo": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "Whatever serves the people I love. That is the whole filter.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "finn": 2,
          "vader": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "Whatever moves me closer to what I want. Time is the only thing I cannot get more of.",
        "scores": {
          "palpatine": 3,
          "mace": 2,
          "vader": 2,
          "boba": 1
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "live_23",
    "category": "THE WAY YOU LIVE",
    "type": "personality",
    "image": null,
    "text": "You realize you have been living wrong somehow. What is the first thing you change?",
    "answers": [
      {
        "text": "Where I spend my mornings. The day is set in the first hour.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "vader": 2,
          "obiwan": 2
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "white": 1
        }
      },
      {
        "text": "Who I spend my time with. The people shape everything else.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "han": 2,
          "mando": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "What I tell myself. The voice in my head was lying.",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "kylo": 2,
          "luke": 1
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "green": 1
        }
      },
      {
        "text": "Everything. I leap. Small changes feel like dishonesty.",
        "scores": {
          "han": 3,
          "poe": 3,
          "kylo": 3,
          "maul": 1,
          "yoda": -2
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "live_24",
    "category": "THE WAY YOU LIVE",
    "type": "personality",
    "image": null,
    "text": "When you think of the most \"you\" version of your life, what is happening in it?",
    "answers": [
      {
        "text": "I am doing meaningful work. Hands busy. Mind focused. Quiet pride.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "obiwan": 2,
          "vader": 2
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "white": 1
        }
      },
      {
        "text": "I am free. No one tells me where to go. Whatever happens today, I chose it.",
        "scores": {
          "han": 3,
          "boba": 3,
          "poe": 2,
          "kylo": 1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      },
      {
        "text": "I am surrounded by the people who matter most. We are doing something together.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "chewie": 3,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "I am still. Listening. Present. The world is doing its thing without my interference.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "obiwan": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "live_04",
    "category": "THE WAY YOU LIVE",
    "type": "image-answer",
    "text": "Pick your morning.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic atmospheric illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. NO figures visible. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): A simple workbench with tools laid out neatly in the same arrangement, a half-finished project waiting, single warm overhead lamp casting golden light, atmosphere of patient discipline.\n\nQUADRANT 2 (top right): An open landing ramp of a starship in dawn light, mist rolling around the bottom of the ramp, a vast unknown landscape beyond, atmosphere of adventure beginning.\n\nQUADRANT 3 (bottom left): A stone meditation platform on a mountaintop at sunrise, simple cushion in the center, mist below, atmosphere of sacred stillness.\n\nQUADRANT 4 (bottom right): A bustling alien marketplace at dawn, lanterns being lit, stalls opening, sense of chaotic life beginning, atmosphere of energy and possibility.",
    "answers": [
      {
        "image": "./assets/quiz/q-live_04-a.png",
        
        "caption": "The Workbench",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "mace": 1
        },
        "saber": {
          "white": 2,
          "yellow": 2
        }
      },
      {
        "image": "./assets/quiz/q-live_04-b.png",
        
        "caption": "The Open Ramp",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "mando": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-live_04-c.png",
        
        "caption": "The Mountain Platform",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-live_04-d.png",
        
        "caption": "The Marketplace",
        "scores": {
          "poe": 3,
          "han": 2,
          "finn": 2,
          "palpatine": 2,
          "yoda": -1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "live_08",
    "category": "THE WAY YOU LIVE",
    "type": "image-answer",
    "text": "Pick the object that means the most to you.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic still-life illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. NO figures visible. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): A worn weapon hilt resting on weathered cloth, scratches and personal markings carved into the metal, soft side lighting, atmosphere of an object that has been used a thousand times.\n\nQUADRANT 2 (top right): A small worn helmet on a wooden stand, soft warm lamp light, the helmet showing battle scratches and personal dents, atmosphere of armor that has become identity.\n\nQUADRANT 3 (bottom left): A faded handwritten letter sitting on a desk, ink slightly smudged from being read many times, soft window light falling across it, atmosphere of words returned to again and again.\n\nQUADRANT 4 (bottom right): A glowing crystal on a small altar surrounded by simple stones, soft green light emanating from within, atmosphere of sacred discovery.",
    "answers": [
      {
        "image": "./assets/quiz/q-live_08-a.png",
        
        "caption": "My Weapon",
        "scores": {
          "mando": 3,
          "boba": 3,
          "mace": 3,
          "vader": 2,
          "palpatine": 1
        },
        "saber": {
          "white": 2,
          "yellow": 2,
          "red": 1
        }
      },
      {
        "image": "./assets/quiz/q-live_08-b.png",
        
        "caption": "My Helmet",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "han": 1
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "image": "./assets/quiz/q-live_08-c.png",
        
        "caption": "A Letter",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "kylo": 3,
          "finn": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-live_08-d.png",
        
        "caption": "A Crystal",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 2,
          "grogu": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "live_13",
    "category": "THE WAY YOU LIVE",
    "type": "image-answer",
    "text": "Pick the place that feels like your space.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic interior illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. NO figures visible. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): A small starship cockpit at hyperspeed with stars streaking past viewports, holographic displays glowing softly, single pilot chair, atmosphere of focused solitude in motion.\n\nQUADRANT 2 (top right): A simple workshop with tools hanging on the wall, work surface with a half-finished project, warm side lighting, atmosphere of patient craftsmanship.\n\nQUADRANT 3 (bottom left): A small private library with floor-to-ceiling shelves of ancient books, a single reading chair under a warm lamp, atmosphere of contemplation and study.\n\nQUADRANT 4 (bottom right): A wide open balcony overlooking a vast vista at golden hour, simple stone bench facing the view, atmosphere of perspective and openness.",
    "answers": [
      {
        "image": "./assets/quiz/q-live_13-a.png",
        
        "caption": "The Cockpit",
        "scores": {
          "han": 3,
          "poe": 3,
          "mando": 2,
          "boba": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-live_13-b.png",
        
        "caption": "The Workshop",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "mace": 1
        },
        "saber": {
          "white": 2,
          "yellow": 2
        }
      },
      {
        "image": "./assets/quiz/q-live_13-c.png",
        
        "caption": "The Library",
        "scores": {
          "obiwan": 3,
          "palpatine": 3,
          "yoda": 2,
          "mace": 2
        },
        "saber": {
          "yellow": 3,
          "blue": 1,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-live_13-d.png",
        
        "caption": "The Balcony",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 2,
          "grogu": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "live_25",
    "category": "THE WAY YOU LIVE",
    "type": "image-answer",
    "text": "Pick the moment that feels most like a perfect day.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic atmospheric illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. Figures may appear as silhouettes but NO clear faces. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): A figure sitting alone on a cliff edge watching a sunset over a vast alien landscape, no face visible, atmosphere of solitary peace.\n\nQUADRANT 2 (top right): A small group of figures gathered around a campfire under a star-filled sky, warm orange glow on all of them, no faces clearly visible, atmosphere of shared joy.\n\nQUADRANT 3 (bottom left): A figure leaning against the side of a parked starship after a long journey, hands on hips, looking out at a new horizon, atmosphere of adventure completed and beginning again.\n\nQUADRANT 4 (bottom right): A figure standing in a workshop holding up a completed object they have built, soft warm light, atmosphere of patient work finished.",
    "answers": [
      {
        "image": "./assets/quiz/q-live_25-a.png",
        
        "caption": "A Quiet Sunset",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2,
          "grogu": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-live_25-b.png",
        
        "caption": "Around a Fire",
        "scores": {
          "han": 3,
          "chewie": 3,
          "finn": 3,
          "poe": 2,
          "palpatine": -3
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-live_25-c.png",
        
        "caption": "A New Horizon",
        "scores": {
          "poe": 3,
          "han": 3,
          "mando": 2,
          "luke": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-live_25-d.png",
        
        "caption": "A Finished Build",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "mace": 2
        },
        "saber": {
          "yellow": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "fall_01",
    "category": "THE WAY YOU FALL",
    "type": "scenario",
    "image": "",
    "text": "You realize you are about to do something you will regret. The moment to stop is right now. What happens?",
    "answers": [
      {
        "text": "I stop. Even if it costs me — even if everyone is watching — I stop.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "mace": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "I do it anyway. I have already committed. Stopping is its own failure.",
        "scores": {
          "vader": 3,
          "maul": 3,
          "kylo": 2,
          "han": 1,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "purple": 1,
          "green": -2
        }
      },
      {
        "text": "I slow down. I leave myself a way out, even if I keep going.",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "han": 2,
          "mace": 1,
          "palpatine": 1
        },
        "saber": {
          "white": 2,
          "blue": 2,
          "yellow": 1
        }
      },
      {
        "text": "I freeze. Half of me wants to do it. Half of me wants to stop. I am stuck between.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 2,
          "vader": 2,
          "palpatine": -1
        },
        "saber": {
          "purple": 3,
          "blue": 1,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "fall_02",
    "category": "THE WAY YOU FALL",
    "type": "personality",
    "image": null,
    "text": "How do you usually start to fall?",
    "answers": [
      {
        "text": "Slowly. A small thing. Then another. I do not notice until I am already there.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "obiwan": 2,
          "palpatine": 1,
          "yoda": -1
        },
        "saber": {
          "red": 2,
          "purple": 1,
          "blue": 1
        }
      },
      {
        "text": "All at once. One big moment. I leap and only see the ground later.",
        "scores": {
          "han": 3,
          "kylo": 2,
          "maul": 2,
          "finn": 2,
          "mace": -1
        },
        "saber": {
          "white": 2,
          "red": 2
        }
      },
      {
        "text": "I do not really fall. I am too careful. I have built my whole life to avoid it.",
        "scores": {
          "boba": 3,
          "mando": 2,
          "mace": 2,
          "palpatine": 2,
          "luke": -1
        },
        "saber": {
          "yellow": 3,
          "white": 1,
          "red": 1
        }
      },
      {
        "text": "When I am exhausted. Falls happen when I have nothing left.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "vader": 2,
          "obiwan": 2,
          "palpatine": -1
        },
        "saber": {
          "blue": 2,
          "purple": 2
        }
      }
    ]
  },
  {
    "id": "fall_03",
    "category": "THE WAY YOU FALL",
    "type": "personality",
    "image": null,
    "text": "What part of you is the most dangerous when you are falling?",
    "answers": [
      {
        "text": "My anger. It tells me lies and I am tired enough to believe them.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "maul": 2,
          "luke": 2,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "purple": 1
        }
      },
      {
        "text": "My pride. I would rather keep falling than admit I was wrong.",
        "scores": {
          "mace": 3,
          "vader": 2,
          "kylo": 2,
          "palpatine": 1,
          "mando": 1
        },
        "saber": {
          "red": 2,
          "yellow": 2,
          "purple": 1
        }
      },
      {
        "text": "My loneliness. I make worse decisions when I do not feel anyone is with me.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "mando": 2,
          "luke": 2,
          "palpatine": -1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "My hope. I keep believing the next move will fix it. Hope can be a trap.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "quigon": 2,
          "finn": 2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "fall_05",
    "category": "THE WAY YOU FALL",
    "type": "personality",
    "image": null,
    "text": "Someone offers you the thing you most want — but at a cost. What do you do?",
    "answers": [
      {
        "text": "I look at the cost first. Always. The price reveals the giver.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mace": 2,
          "quigon": 2,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I take it. If I want it badly enough to ache, the cost is already worth it.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "maul": 2,
          "palpatine": 1,
          "yoda": -3
        },
        "saber": {
          "red": 3,
          "purple": 1,
          "green": -3
        }
      },
      {
        "text": "I refuse. Things I most want do not come from people I do not trust.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "boba": 2,
          "obiwan": 2
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "blue": 1
        }
      },
      {
        "text": "I take it but try to outsmart the cost. I think I am cleverer than the trap.",
        "scores": {
          "han": 3,
          "kylo": 2,
          "palpatine": 2,
          "boba": 1,
          "mace": -1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "fall_06",
    "category": "THE WAY YOU FALL",
    "type": "personality",
    "image": null,
    "text": "What is the lie you tell yourself when you are heading the wrong direction?",
    "answers": [
      {
        "text": "\"I can stop anytime I want.\" Even though I keep not stopping.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "han": 2,
          "palpatine": 1,
          "yoda": -1
        },
        "saber": {
          "red": 2,
          "purple": 2
        }
      },
      {
        "text": "\"This is who I really am.\" Even though it does not feel like me at all.",
        "scores": {
          "kylo": 3,
          "vader": 2,
          "maul": 2,
          "finn": 1,
          "luke": -1
        },
        "saber": {
          "red": 3,
          "purple": 1
        }
      },
      {
        "text": "\"I am doing this for the right reasons.\" Even though the reasons keep changing.",
        "scores": {
          "mace": 3,
          "palpatine": 3,
          "vader": 2,
          "kylo": 1,
          "yoda": -1
        },
        "saber": {
          "purple": 2,
          "red": 1,
          "yellow": 1
        }
      },
      {
        "text": "I do not lie to myself. I just keep going anyway.",
        "scores": {
          "boba": 3,
          "han": 3,
          "palpatine": 2,
          "mando": 1,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "fall_07",
    "category": "THE WAY YOU FALL",
    "type": "personality",
    "image": null,
    "text": "Someone you love is heading toward their own fall. What do you do?",
    "answers": [
      {
        "text": "I reach for them. Every chance I get. Until they are gone or saved.",
        "scores": {
          "luke": 3,
          "obiwan": 3,
          "mando": 2,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "I let them. They have to make their own choices, even the bad ones.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "han": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I follow them. If they fall, I want to be near enough to pull them back.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "chewie": 2,
          "luke": 1,
          "palpatine": -2
        },
        "saber": {
          "red": 1,
          "purple": 2,
          "blue": 1
        }
      },
      {
        "text": "I tell them once, then I step back. I cannot fall with them.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "boba": 2,
          "han": 2,
          "luke": -1
        },
        "saber": {
          "white": 2,
          "yellow": 2,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "fall_09",
    "category": "THE WAY YOU FALL",
    "type": "scenario",
    "image": "",
    "text": "A teacher you respected becomes someone who hurts people. They invite you to join them. What goes through you?",
    "answers": [
      {
        "text": "Grief. The person who taught me did not have to become this. They chose it.",
        "scores": {
          "obiwan": 3,
          "yoda": 3,
          "luke": 3,
          "quigon": 2,
          "palpatine": -1
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "Temptation. Just for a moment. The shape of who I could become with them.",
        "scores": {
          "luke": 3,
          "kylo": 3,
          "vader": 2,
          "finn": 1,
          "yoda": -1
        },
        "saber": {
          "purple": 3,
          "red": 1,
          "blue": 1
        }
      },
      {
        "text": "Anger. They were supposed to be better than this. They owed me.",
        "scores": {
          "mace": 3,
          "kylo": 3,
          "vader": 2,
          "maul": 1,
          "yoda": -1
        },
        "saber": {
          "red": 2,
          "purple": 2
        }
      },
      {
        "text": "I am already deciding what I have to do. Sadness can come later.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "boba": 2,
          "vader": 1,
          "finn": 1
        },
        "saber": {
          "yellow": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "fall_10",
    "category": "THE WAY YOU FALL",
    "type": "personality",
    "image": null,
    "text": "When you have made a mistake you cannot undo, what do you actually do?",
    "answers": [
      {
        "text": "I sit with it. I let it teach me. Not punishment — instruction.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2,
          "palpatine": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I try to make it right. Even when I cannot. The trying is part of the repair.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "mando": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "I bury it. The mistake does not get to live in me forever.",
        "scores": {
          "boba": 3,
          "han": 3,
          "mando": 2,
          "palpatine": 1
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "text": "I carry it. Heavier than I want to. It is part of who I am now.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "mace": 2,
          "obiwan": 1
        },
        "saber": {
          "red": 2,
          "purple": 2,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "fall_11",
    "category": "THE WAY YOU FALL",
    "type": "personality",
    "image": null,
    "text": "What stops you from doing something you know is wrong?",
    "answers": [
      {
        "text": "The face of someone I love. They appear in my head right before I do it.",
        "scores": {
          "luke": 3,
          "mando": 3,
          "finn": 2,
          "vader": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "My own face. I cannot live with myself if I become the kind of person who does this.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "luke": 2,
          "yoda": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "yellow": 1
        }
      },
      {
        "text": "A teaching I was given long ago. Even if the teacher is gone, the lesson holds.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Honestly? Sometimes nothing stops me. I find out who I am after.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "han": 2,
          "maul": 1,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "fall_12",
    "category": "THE WAY YOU FALL",
    "type": "personality",
    "image": null,
    "text": "What is the version of you that you are most afraid of becoming?",
    "answers": [
      {
        "text": "The version that hurt people on purpose. Cold. Without feeling.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "vader": 2,
          "kylo": 1
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "The version that gave up. That stopped trying. That settled.",
        "scores": {
          "mace": 3,
          "poe": 3,
          "han": 2,
          "mando": 2,
          "yoda": -1
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "white": 1
        }
      },
      {
        "text": "The version that hurt the people I love most.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "mando": 2,
          "luke": 2,
          "palpatine": -2
        },
        "saber": {
          "red": 2,
          "purple": 2,
          "blue": 1
        }
      },
      {
        "text": "The version that became my parents — or worse, my masters.",
        "scores": {
          "kylo": 3,
          "luke": 3,
          "vader": 2,
          "finn": 1,
          "palpatine": -1
        },
        "saber": {
          "purple": 3,
          "blue": 1,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "fall_14",
    "category": "THE WAY YOU FALL",
    "type": "personality",
    "image": null,
    "text": "When you feel yourself slipping, what do you reach for first?",
    "answers": [
      {
        "text": "Quiet. Stillness. I need to hear my own voice without all the noise.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "A person. Someone steady. I need to borrow their balance for a while.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mando": 2,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "A task. Something physical. Something my hands can solve.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "han": 2,
          "mace": 1
        },
        "saber": {
          "white": 2,
          "yellow": 2
        }
      },
      {
        "text": "Honestly, I reach for the slip. Sometimes the only way out is through.",
        "scores": {
          "kylo": 3,
          "vader": 2,
          "maul": 2,
          "han": 1,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "fall_15",
    "category": "THE WAY YOU FALL",
    "type": "personality",
    "image": null,
    "text": "What is the difference between a mistake and a fall?",
    "answers": [
      {
        "text": "A mistake happens. A fall is chosen. Mistakes you can fix. Falls change who you are.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mace": 3,
          "palpatine": -1
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "A mistake is small. A fall is the moment everything you built was wrong.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "mace": 2,
          "finn": 1
        },
        "saber": {
          "red": 2,
          "purple": 2,
          "blue": 1
        }
      },
      {
        "text": "They are the same. Mistakes that go on long enough become falls.",
        "scores": {
          "obiwan": 3,
          "palpatine": 2,
          "vader": 2,
          "han": 1
        },
        "saber": {
          "yellow": 2,
          "purple": 1,
          "blue": 1
        }
      },
      {
        "text": "I do not know the difference yet. I am still in one.",
        "scores": {
          "kylo": 3,
          "luke": 2,
          "finn": 2,
          "vader": 1
        },
        "saber": {
          "purple": 3,
          "red": 1,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "fall_16",
    "category": "THE WAY YOU FALL",
    "type": "scenario",
    "image": "",
    "text": "You are mid-fall. There is no stopping it now. What is the truest thing inside you?",
    "answers": [
      {
        "text": "Acceptance. Some falls have to finish themselves.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "vader": 2,
          "palpatine": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Determination. The fall is going to happen — but I get to choose how I land.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mace": 2,
          "mando": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Rage. At everyone who let me get this far. At myself for not seeing it.",
        "scores": {
          "kylo": 3,
          "maul": 3,
          "vader": 2,
          "mace": 1,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "purple": 1
        }
      },
      {
        "text": "Curiosity. I am about to find out what is at the bottom.",
        "scores": {
          "han": 3,
          "kylo": 2,
          "boba": 2,
          "palpatine": 2,
          "luke": -1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "fall_17",
    "category": "THE WAY YOU FALL",
    "type": "personality",
    "image": null,
    "text": "How do you talk to yourself after you have fallen?",
    "answers": [
      {
        "text": "Gently. Like I would talk to someone I love. Same kindness.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Harshly. Honestly. I do not let myself off easy.",
        "scores": {
          "mace": 3,
          "vader": 2,
          "mando": 2,
          "kylo": 2
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "purple": 1
        }
      },
      {
        "text": "I do not talk to myself. I get up and move on. Words are useless after.",
        "scores": {
          "boba": 3,
          "han": 3,
          "mando": 2,
          "palpatine": 1,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      },
      {
        "text": "I am quiet. I do not have words yet. I am still figuring out what just happened.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 2,
          "grogu": 2
        },
        "saber": {
          "purple": 2,
          "blue": 2
        }
      }
    ]
  },
  {
    "id": "fall_18",
    "category": "THE WAY YOU FALL",
    "type": "personality",
    "image": null,
    "text": "Who do you become when you are at your worst?",
    "answers": [
      {
        "text": "Cold. Distant. The version of me that pushes everyone away to protect them.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "mando": 2,
          "obiwan": 1,
          "palpatine": 1
        },
        "saber": {
          "red": 2,
          "purple": 2,
          "white": 1
        }
      },
      {
        "text": "Loud. Angry. The version that says things I will regret.",
        "scores": {
          "han": 3,
          "kylo": 3,
          "maul": 2,
          "finn": 2,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "white": 1
        }
      },
      {
        "text": "Quiet. I shut down. The version of me no one can reach.",
        "scores": {
          "finn": 3,
          "luke": 3,
          "mando": 2,
          "vader": 2
        },
        "saber": {
          "blue": 2,
          "purple": 2
        }
      },
      {
        "text": "Calculating. The version that uses people. Solves problems by sacrificing things.",
        "scores": {
          "palpatine": 3,
          "vader": 2,
          "mace": 1,
          "boba": 1,
          "luke": -3
        },
        "saber": {
          "red": 3,
          "yellow": 1,
          "black": 1
        }
      }
    ]
  },
  {
    "id": "fall_19",
    "category": "THE WAY YOU FALL",
    "type": "personality",
    "image": null,
    "text": "A friend has fallen. They are not who they used to be. How do you treat them?",
    "answers": [
      {
        "text": "Like they are still in there. I see the old them, even when they cannot.",
        "scores": {
          "luke": 3,
          "obiwan": 3,
          "finn": 2,
          "mando": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "Cautiously. The old them is gone for now. The new them has to earn trust again.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "boba": 2,
          "vader": 2,
          "finn": -1
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "blue": 1
        }
      },
      {
        "text": "With grief. I mourn the person they were while still showing up for who they are.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I do not. The old friend is gone. The new person is a stranger to me.",
        "scores": {
          "boba": 3,
          "mando": 2,
          "palpatine": 1,
          "vader": 2,
          "luke": -3
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -3
        }
      }
    ]
  },
  {
    "id": "fall_20",
    "category": "THE WAY YOU FALL",
    "type": "personality",
    "image": null,
    "text": "What pulls you back from a fall?",
    "answers": [
      {
        "text": "The thought of someone I love seeing me become this.",
        "scores": {
          "vader": 3,
          "mando": 3,
          "luke": 2,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "A teaching I had forgotten. A line from someone wise that returns at the right moment.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "luke": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Pain. Real, sharp pain. It wakes me up from the dream of who I was becoming.",
        "scores": {
          "kylo": 3,
          "vader": 2,
          "luke": 2,
          "finn": 1
        },
        "saber": {
          "purple": 3,
          "red": 1,
          "blue": 1
        }
      },
      {
        "text": "Honestly? Sometimes I do not pull back. I have to hit the bottom before I climb.",
        "scores": {
          "kylo": 3,
          "han": 2,
          "maul": 1,
          "boba": 1,
          "yoda": -1
        },
        "saber": {
          "red": 2,
          "white": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "fall_21",
    "category": "THE WAY YOU FALL",
    "type": "personality",
    "image": null,
    "text": "Some people fall and stay down. Some fall and rise. Which are you?",
    "answers": [
      {
        "text": "I always rise. Always. Even when it takes years.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "vader": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "green": 1
        }
      },
      {
        "text": "I rise — but I am different after. The fall became part of who I am.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "vader": 3,
          "kylo": 2
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "yellow": 1
        }
      },
      {
        "text": "I rarely fall. My whole structure is built to prevent it.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "mace": 2,
          "palpatine": 2,
          "luke": -1
        },
        "saber": {
          "yellow": 3,
          "white": 1
        }
      },
      {
        "text": "I have not figured this out yet. The last fall is still teaching me.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 1,
          "grogu": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "fall_22",
    "category": "THE WAY YOU FALL",
    "type": "personality",
    "image": null,
    "text": "What gift does falling give you, if any?",
    "answers": [
      {
        "text": "Humility. The kind you cannot get any other way.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mace": 2,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Understanding. I cannot help someone else fall until I have fallen first.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "vader": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Strength. I survived. That changes what I think I can survive next.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "vader": 3,
          "kylo": 2
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "white": 1
        }
      },
      {
        "text": "Nothing. Falling is just loss. I would rather not have fallen.",
        "scores": {
          "boba": 3,
          "han": 2,
          "palpatine": 2,
          "kylo": 1,
          "yoda": -2
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "fall_23",
    "category": "THE WAY YOU FALL",
    "type": "personality",
    "image": null,
    "text": "When you look back at your worst moment, what do you actually feel about that version of yourself?",
    "answers": [
      {
        "text": "Compassion. They were doing the best they could with what they had.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 3,
          "obiwan": 2,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Disappointment. I should have known better. I did know better.",
        "scores": {
          "mace": 3,
          "vader": 3,
          "obiwan": 2,
          "kylo": 2
        },
        "saber": {
          "yellow": 2,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Distance. That person feels like a stranger now.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "han": 2,
          "vader": 1
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "text": "A complicated mix. Part of me hates them. Part of me still understands why.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "luke": 2,
          "finn": 1
        },
        "saber": {
          "purple": 3,
          "red": 1,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "fall_24",
    "category": "THE WAY YOU FALL",
    "type": "personality",
    "image": null,
    "text": "Can anyone fully come back from a fall, or are they changed forever?",
    "answers": [
      {
        "text": "Anyone can come back. But not as they were. Something is always different.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "vader": 2,
          "luke": 2,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Some falls are too deep. Not everyone gets to rise.",
        "scores": {
          "mace": 3,
          "vader": 3,
          "kylo": 2,
          "boba": 1
        },
        "saber": {
          "red": 1,
          "purple": 2,
          "yellow": 1
        }
      },
      {
        "text": "The question is wrong. Falling and rising are the same shape — just at different points.",
        "scores": {
          "quigon": 3,
          "yoda": 3,
          "obiwan": 2,
          "luke": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Everyone comes back if someone loves them enough to wait.",
        "scores": {
          "luke": 3,
          "mando": 3,
          "finn": 3,
          "vader": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "fall_04",
    "category": "THE WAY YOU FALL",
    "type": "image-answer",
    "text": "Pick what your fall would look like.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic dramatic illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. Figures may appear as silhouettes but NO clear faces. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): A figure standing at the very edge of a cliff with one foot extended into the air, dramatic vertical composition, vast empty sky below, atmosphere of suspended decision before the fall.\n\nQUADRANT 2 (top right): A figure in mid-air falling backwards into a deep chasm, hands reaching upward, sense of unstoppable descent, atmosphere of fall already in motion.\n\nQUADRANT 3 (bottom left): A figure walking slowly down a dark staircase descending into red-glowing depths, deliberate pace, atmosphere of chosen descent.\n\nQUADRANT 4 (bottom right): A figure on the ground after a fall, slowly beginning to push themselves up, weight of failure visible in their posture, atmosphere of rising from below.",
    "answers": [
      {
        "image": "./assets/quiz/q-fall_04-a.png",
        
        "caption": "On the Edge",
        "scores": {
          "kylo": 3,
          "luke": 3,
          "finn": 2,
          "vader": 1,
          "palpatine": -1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-fall_04-b.png",
        
        "caption": "Already Falling",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "maul": 2,
          "han": 1
        },
        "saber": {
          "red": 3,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-fall_04-c.png",
        
        "caption": "Walking Down",
        "scores": {
          "vader": 3,
          "palpatine": 3,
          "mace": 2,
          "kylo": 2,
          "yoda": -3
        },
        "saber": {
          "red": 3,
          "yellow": 1,
          "black": 1
        }
      },
      {
        "image": "./assets/quiz/q-fall_04-d.png",
        
        "caption": "Rising From Below",
        "scores": {
          "luke": 3,
          "obiwan": 3,
          "finn": 2,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "fall_08",
    "category": "THE WAY YOU FALL",
    "type": "image-answer",
    "text": "Pick the thing that would tempt you most.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic symbolic illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. NO figures with faces visible — objects and atmospheric imagery only. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): A glowing crown floating in mid-air, surrounded by faint red light, ornate metalwork, atmosphere of power and dominion offered.\n\nQUADRANT 2 (top right): A glowing red blade hilt resting on a black pedestal, surrounded by sparks of crimson energy, atmosphere of forbidden strength.\n\nQUADRANT 3 (bottom left): An open ancient book with glowing pages, mysterious symbols pulsing softly, surrounded by warm golden light, atmosphere of forbidden knowledge.\n\nQUADRANT 4 (bottom right): A silhouette of a beloved person standing in a doorway with arms extended in welcome, soft warm light around them, atmosphere of impossible reunion offered.",
    "answers": [
      {
        "image": "./assets/quiz/q-fall_08-a.png",
        
        "caption": "A Crown",
        "scores": {
          "palpatine": 3,
          "kylo": 3,
          "vader": 2,
          "mace": 1,
          "mando": -1
        },
        "saber": {
          "red": 3,
          "yellow": 1,
          "black": 1
        }
      },
      {
        "image": "./assets/quiz/q-fall_08-b.png",
        
        "caption": "A Red Blade",
        "scores": {
          "kylo": 3,
          "maul": 3,
          "vader": 2,
          "mace": 1,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-fall_08-c.png",
        
        "caption": "A Forbidden Book",
        "scores": {
          "palpatine": 3,
          "obiwan": 2,
          "kylo": 2,
          "yoda": 1,
          "luke": 1
        },
        "saber": {
          "yellow": 2,
          "purple": 2,
          "red": 1
        }
      },
      {
        "image": "./assets/quiz/q-fall_08-d.png",
        
        "caption": "A Lost Loved One",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "luke": 3,
          "obiwan": 2,
          "finn": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "fall_13",
    "category": "THE WAY YOU FALL",
    "type": "image-answer",
    "text": "Pick what happens after you fall.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic emotional illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. Figures may appear as silhouettes but NO clear faces. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): A figure walking away alone down a long empty road into the distance, sunset behind them, atmosphere of solitary recovery.\n\nQUADRANT 2 (top right): A figure being helped to their feet by another figure, hand extended in compassion, warm golden light around the moment of help, atmosphere of being lifted by another.\n\nQUADRANT 3 (bottom left): A figure meditating in a quiet stone alcove, sitting still, soft natural light from above, atmosphere of inner work and acceptance.\n\nQUADRANT 4 (bottom right): A figure standing tall on a battlefield surrounded by aftermath, weapon still in hand, scarred but unbroken, atmosphere of choosing to continue.",
    "answers": [
      {
        "image": "./assets/quiz/q-fall_13-a.png",
        
        "caption": "Walking Alone",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "kylo": 2,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "yellow": 1,
          "blue": -1
        }
      },
      {
        "image": "./assets/quiz/q-fall_13-b.png",
        
        "caption": "A Hand Lifts Me",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-fall_13-c.png",
        
        "caption": "I Sit With It",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-fall_13-d.png",
        
        "caption": "I Keep Fighting",
        "scores": {
          "mace": 3,
          "mando": 3,
          "vader": 2,
          "poe": 2,
          "kylo": 1
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "fall_25",
    "category": "THE WAY YOU FALL",
    "type": "image-answer",
    "text": "Pick the moment in a fall that feels most true to you.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic dramatic illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. Figures may appear as silhouettes but NO clear faces. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): A close view of a single hand reaching out desperately toward another hand just out of reach, fingers straining, atmosphere of last moment before the fall.\n\nQUADRANT 2 (top right): A figure pausing mid-step, frozen between two choices, one foot forward and one foot back, atmosphere of the moment before committing.\n\nQUADRANT 3 (bottom left): A figure crouched on the ground after a fall, head down, hand against the earth, atmosphere of impact and arrival at bottom.\n\nQUADRANT 4 (bottom right): A figure standing at dawn after a long night, dust settling around them, scarred but standing, atmosphere of having survived the fall.",
    "answers": [
      {
        "image": "./assets/quiz/q-fall_25-a.png",
        
        "caption": "The Hand Out of Reach",
        "scores": {
          "luke": 3,
          "vader": 3,
          "obiwan": 2,
          "kylo": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-fall_25-b.png",
        
        "caption": "The Pause Before",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 2,
          "mace": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-fall_25-c.png",
        
        "caption": "The Impact",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "mace": 2,
          "finn": 2
        },
        "saber": {
          "red": 2,
          "purple": 2,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-fall_25-d.png",
        
        "caption": "The Standing After",
        "scores": {
          "luke": 3,
          "obiwan": 3,
          "mace": 2,
          "mando": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "hurt_01",
    "category": "THE WAY YOU HURT",
    "type": "scenario",
    "image": "",
    "text": "You are hurt. Not in your body — somewhere deeper. What do you do first?",
    "answers": [
      {
        "text": "I sit with it. I let it move through me. Pain wants to be felt, not fought.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2,
          "kylo": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I keep moving. If I stop, I am afraid I will not start again.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "han": 2,
          "boba": 2,
          "palpatine": 1
        },
        "saber": {
          "white": 2,
          "red": 1,
          "yellow": 1
        }
      },
      {
        "text": "I find someone. Just to be near. I do not need them to fix it.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "chewie": 2,
          "grogu": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I get sharp. Pain makes me clearer about what I want next.",
        "scores": {
          "kylo": 3,
          "mace": 3,
          "vader": 2,
          "maul": 2,
          "yoda": -1
        },
        "saber": {
          "red": 2,
          "purple": 2,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "hurt_02",
    "category": "THE WAY YOU HURT",
    "type": "personality",
    "image": null,
    "text": "Where does pain actually live in you?",
    "answers": [
      {
        "text": "In my chest. A weight that sits there. Sometimes for years.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "obiwan": 2,
          "luke": 2,
          "palpatine": 1
        },
        "saber": {
          "red": 1,
          "purple": 2,
          "blue": 1
        }
      },
      {
        "text": "In my breath. It gets shorter. Tighter. Like I forgot how to breathe deep.",
        "scores": {
          "finn": 3,
          "luke": 3,
          "grogu": 2,
          "kylo": 1
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "In my hands. I clench them without knowing. I have to remind myself to relax.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "vader": 2,
          "boba": 1
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "red": 1
        }
      },
      {
        "text": "Everywhere. Pain does not stay in one place for me. It moves.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "han": 2,
          "finn": 1
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "hurt_03",
    "category": "THE WAY YOU HURT",
    "type": "personality",
    "image": null,
    "text": "How do you carry old pain?",
    "answers": [
      {
        "text": "Quietly. Most people who know me have no idea what I carry.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "obiwan": 2,
          "mace": 2,
          "han": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "I let it go. I have learned to. Otherwise it eats you.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "finn": 1,
          "kylo": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "It is part of me now. Not a weight. A feature.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "mace": 2,
          "palpatine": 1,
          "luke": 1
        },
        "saber": {
          "red": 2,
          "purple": 2,
          "yellow": 1
        }
      },
      {
        "text": "I share it with the people who can hold it with me. Carried weight is half as heavy.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "han": 2,
          "chewie": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "hurt_05",
    "category": "THE WAY YOU HURT",
    "type": "personality",
    "image": null,
    "text": "When someone hurts you, what is your first instinct after the sting?",
    "answers": [
      {
        "text": "Understand them. Why did they do it? Pain is information.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 2,
          "quigon": 2,
          "palpatine": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Walk away. Slowly. Make sure they see me leaving.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "han": 2,
          "vader": 1
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "text": "Hurt them back. Not always. But the urge is there.",
        "scores": {
          "kylo": 3,
          "maul": 3,
          "vader": 2,
          "han": 1,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "purple": 1
        }
      },
      {
        "text": "Pretend I am fine. Even when I am not. Especially when I am not.",
        "scores": {
          "finn": 3,
          "han": 3,
          "mando": 2,
          "kylo": 1,
          "yoda": -1
        },
        "saber": {
          "white": 2,
          "blue": 2,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "hurt_06",
    "category": "THE WAY YOU HURT",
    "type": "personality",
    "image": null,
    "text": "You realize you have hurt someone. They have not said anything. What do you do?",
    "answers": [
      {
        "text": "Say something. Quickly. Before it becomes the new normal between us.",
        "scores": {
          "luke": 3,
          "obiwan": 3,
          "finn": 2,
          "mando": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "green": 1
        }
      },
      {
        "text": "Watch them. Look for the sign. They will let me know when they are ready.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Act normal. Do not draw attention to it. They might forget.",
        "scores": {
          "han": 3,
          "boba": 2,
          "palpatine": 2,
          "kylo": 2,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      },
      {
        "text": "Do something kind. Without explaining. Repair through action.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "vader": 2,
          "finn": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "hurt_07",
    "category": "THE WAY YOU HURT",
    "type": "personality",
    "image": null,
    "text": "What is the hurt you have not let go of yet?",
    "answers": [
      {
        "text": "Something someone I loved did. The smallest version still surprises me.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "red": 1,
          "purple": 2,
          "blue": 1
        }
      },
      {
        "text": "Something I did. A mistake I keep paying for in my own head.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "vader": 2,
          "kylo": 2,
          "luke": 1
        },
        "saber": {
          "purple": 2,
          "blue": 2,
          "yellow": 1
        }
      },
      {
        "text": "Honestly? I am not sure. I think I have let things go that are still there.",
        "scores": {
          "mando": 3,
          "han": 2,
          "boba": 2,
          "finn": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "Nothing. The past is the past. Carrying hurt is choosing it.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 1,
          "palpatine": 1
        },
        "saber": {
          "green": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "hurt_09",
    "category": "THE WAY YOU HURT",
    "type": "scenario",
    "image": "",
    "text": "Something hurt you a long time ago. You think you are over it. Then suddenly, you are not. What do you do?",
    "answers": [
      {
        "text": "Sit with the surprise of it. Old hurt does not mean unhealed hurt.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Get angry that it still has power over me. I should be past this.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "mace": 2,
          "mando": 1
        },
        "saber": {
          "red": 2,
          "purple": 2
        }
      },
      {
        "text": "Call someone who knew me back then. They remember the original version.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "han": 2,
          "obiwan": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Move. Do something. Bury it again with action.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "han": 2,
          "palpatine": 2,
          "yoda": -1
        },
        "saber": {
          "white": 3,
          "yellow": 1,
          "green": -1
        }
      }
    ]
  },
  {
    "id": "hurt_10",
    "category": "THE WAY YOU HURT",
    "type": "personality",
    "image": null,
    "text": "How do you know when someone is hurting in a way they cannot say out loud?",
    "answers": [
      {
        "text": "They get quieter. The quiet has a shape to it I recognize.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "mando": 3,
          "obiwan": 2,
          "han": -1
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "They get louder. Performance increases when something underneath is breaking.",
        "scores": {
          "obiwan": 3,
          "han": 3,
          "poe": 2,
          "palpatine": 2
        },
        "saber": {
          "blue": 2,
          "white": 2,
          "yellow": 1
        }
      },
      {
        "text": "They start treating me differently. Pulling close or pulling away — both are signs.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mace": 2,
          "kylo": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "My body tells me before my mind does. I feel it in the room.",
        "scores": {
          "yoda": 3,
          "grogu": 3,
          "quigon": 2,
          "mando": 1
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "hurt_11",
    "category": "THE WAY YOU HURT",
    "type": "personality",
    "image": null,
    "text": "When you are in pain, what do you actually want from the people around you?",
    "answers": [
      {
        "text": "Just their presence. They do not need to do anything. Just be near.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "yoda": 2,
          "vader": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Distraction. Take me somewhere else. Make me laugh. Anything but this.",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "chewie": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "For them to ask the right question. The one that helps me find what I am actually feeling.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "quigon": 2,
          "finn": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "green": 1
        }
      },
      {
        "text": "Nothing. I want them to leave me alone. I will come back when I am ready.",
        "scores": {
          "boba": 3,
          "mando": 2,
          "kylo": 2,
          "vader": 2,
          "palpatine": 1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "hurt_12",
    "category": "THE WAY YOU HURT",
    "type": "personality",
    "image": null,
    "text": "What is your relationship with anger?",
    "answers": [
      {
        "text": "I let it pass through. Like a storm. It belongs to weather, not to me.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2,
          "kylo": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Anger is fuel. I use it. Then I let go of it.",
        "scores": {
          "mace": 3,
          "luke": 2,
          "finn": 2,
          "mando": 1,
          "vader": 1
        },
        "saber": {
          "purple": 2,
          "blue": 2,
          "yellow": 1
        }
      },
      {
        "text": "Anger is part of me. I trust it. It tells me what I care about.",
        "scores": {
          "kylo": 3,
          "han": 3,
          "maul": 2,
          "mace": 1,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "purple": 1,
          "green": -2
        }
      },
      {
        "text": "I am afraid of mine. If I let it out, I do not know what I would do.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "luke": 2,
          "finn": 1
        },
        "saber": {
          "red": 2,
          "purple": 2,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "hurt_14",
    "category": "THE WAY YOU HURT",
    "type": "personality",
    "image": null,
    "text": "What do you do with pain you cannot share?",
    "answers": [
      {
        "text": "I let it teach me. Even alone, pain is the best teacher I have.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I write it down. Or build something. The pain needs somewhere to go.",
        "scores": {
          "mando": 3,
          "obiwan": 2,
          "palpatine": 2,
          "kylo": 2
        },
        "saber": {
          "white": 2,
          "yellow": 1,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I let it become part of how I show up for others. They never know it is there.",
        "scores": {
          "mando": 3,
          "obiwan": 3,
          "vader": 2,
          "mace": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "I bury it. Deep. Some pain is mine alone and that is how it stays.",
        "scores": {
          "boba": 3,
          "vader": 3,
          "mando": 2,
          "kylo": 2
        },
        "saber": {
          "red": 2,
          "white": 2,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "hurt_15",
    "category": "THE WAY YOU HURT",
    "type": "personality",
    "image": null,
    "text": "How has the pain you have lived through changed you?",
    "answers": [
      {
        "text": "Softer. Slower to judge. I have been on the other side of that judgment.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "quigon": 2,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "Stronger. Harder. I am not as easy to break as I once was.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "mace": 2,
          "vader": 2
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "red": 1
        }
      },
      {
        "text": "Carefully. I watch out for the same hurt in other people. I try to spare them.",
        "scores": {
          "finn": 3,
          "luke": 3,
          "obiwan": 2,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "I am not sure yet. I am still in the part where it is just hurt.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "grogu": 2,
          "luke": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "hurt_16",
    "category": "THE WAY YOU HURT",
    "type": "scenario",
    "image": "",
    "text": "Someone you love tells you they are in pain. Real pain. What do you actually do?",
    "answers": [
      {
        "text": "I sit with them. I do not talk much. I just stay near.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "yoda": 2,
          "obiwan": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I ask what they need. Then I do that. Even if it is just listening.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 3,
          "quigon": 2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "I try to fix it. I know it is not always what people want — but I cannot help it.",
        "scores": {
          "han": 3,
          "poe": 3,
          "mace": 2,
          "mando": 1,
          "yoda": -1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "I share something painful of mine. So they know they are not alone.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 2,
          "vader": 2,
          "palpatine": -2
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "hurt_17",
    "category": "THE WAY YOU HURT",
    "type": "personality",
    "image": null,
    "text": "What does your body do when you are about to cry?",
    "answers": [
      {
        "text": "It tightens. Throat, chest, jaw. I have to remind myself it is okay to let go.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "mace": 2,
          "boba": 2,
          "palpatine": 1
        },
        "saber": {
          "white": 2,
          "yellow": 1,
          "red": 1
        }
      },
      {
        "text": "It opens. I let it through. Crying is just water moving.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 2,
          "finn": 2,
          "grogu": 1
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "I leave the room first. I do not cry in front of people.",
        "scores": {
          "kylo": 3,
          "mando": 2,
          "boba": 2,
          "vader": 2,
          "han": 1
        },
        "saber": {
          "red": 1,
          "white": 2,
          "purple": 1
        }
      },
      {
        "text": "Honestly? I am not sure. I think I have stopped noticing what happens.",
        "scores": {
          "palpatine": 3,
          "boba": 2,
          "vader": 1,
          "han": 1,
          "luke": -2
        },
        "saber": {
          "red": 2,
          "white": 1,
          "blue": -2
        }
      }
    ]
  },
  {
    "id": "hurt_18",
    "category": "THE WAY YOU HURT",
    "type": "personality",
    "image": null,
    "text": "Someone is in your life who reminds you of an old hurt. What do you do?",
    "answers": [
      {
        "text": "I do not punish them for it. They are not the person who hurt me.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "quigon": 2,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I keep distance. Even if it is not their fault. Self-protection comes first.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "kylo": 2,
          "vader": 2,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "yellow": 1,
          "blue": -1
        }
      },
      {
        "text": "I name it to them. Carefully. So they know it is not about who they are now.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "luke": 2,
          "finn": 2,
          "palpatine": -1
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "green": 1
        }
      },
      {
        "text": "I have to work on it constantly. The reaction is not them — but my body forgets that.",
        "scores": {
          "finn": 3,
          "kylo": 3,
          "luke": 2,
          "vader": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "hurt_19",
    "category": "THE WAY YOU HURT",
    "type": "personality",
    "image": null,
    "text": "You realize you have hurt someone because of pain that was not theirs to carry. What do you do?",
    "answers": [
      {
        "text": "Tell them. Plainly. The mistake was mine, not theirs.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "luke": 2,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "yellow": 1,
          "purple": 1
        }
      },
      {
        "text": "Apologize. Then do the work so it does not happen again.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "mace": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "Carry the shame. Try harder. Do better silently.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "mando": 2,
          "mace": 1
        },
        "saber": {
          "red": 2,
          "purple": 2,
          "white": 1
        }
      },
      {
        "text": "Make it right with actions. They will know without me saying.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "han": 2,
          "vader": 2
        },
        "saber": {
          "blue": 2,
          "white": 2
        }
      }
    ]
  },
  {
    "id": "hurt_20",
    "category": "THE WAY YOU HURT",
    "type": "personality",
    "image": null,
    "text": "What is the gift hidden in pain, if any?",
    "answers": [
      {
        "text": "Compassion. You cannot truly meet someone in their pain unless you have known your own.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 3,
          "yoda": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "Honesty. Pain strips away the things I was pretending to be.",
        "scores": {
          "yoda": 3,
          "mace": 3,
          "obiwan": 2,
          "quigon": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Power. I do not say that to be cruel — pain just makes me stronger.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "mace": 2,
          "palpatine": 1,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "purple": 1
        }
      },
      {
        "text": "I do not see a gift. Pain is just pain. I would prefer less of it.",
        "scores": {
          "han": 3,
          "boba": 3,
          "finn": 1,
          "grogu": 1
        },
        "saber": {
          "white": 3,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "hurt_21",
    "category": "THE WAY YOU HURT",
    "type": "personality",
    "image": null,
    "text": "When you remember a hurt from long ago, what does it look like in your head?",
    "answers": [
      {
        "text": "Faded. A picture in a frame. Real, but distant.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "Vivid. I can still feel the temperature of the room. The sound of someone breathing.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "luke": 2,
          "obiwan": 1
        },
        "saber": {
          "red": 1,
          "purple": 2,
          "blue": 1
        }
      },
      {
        "text": "It changes. Some days small. Some days it fills the whole room.",
        "scores": {
          "finn": 3,
          "luke": 3,
          "kylo": 2,
          "han": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "A scene I can walk away from when I choose. I have practiced that.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "vader": 2,
          "boba": 2,
          "kylo": -1
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "hurt_22",
    "category": "THE WAY YOU HURT",
    "type": "personality",
    "image": null,
    "text": "Who taught you how to handle pain — for better or worse?",
    "answers": [
      {
        "text": "Someone wise. They taught me to feel it through, not run from it.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Someone strong. They taught me to keep moving no matter what.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "mace": 2,
          "vader": 2
        },
        "saber": {
          "white": 2,
          "yellow": 2
        }
      },
      {
        "text": "Honestly, no one. I taught myself. And I am still learning.",
        "scores": {
          "han": 3,
          "kylo": 3,
          "finn": 2,
          "boba": 1
        },
        "saber": {
          "white": 3,
          "purple": 1
        }
      },
      {
        "text": "Someone hurtful. I learned by watching what not to do.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "luke": 2,
          "finn": 2,
          "palpatine": -1
        },
        "saber": {
          "purple": 2,
          "red": 1,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "hurt_23",
    "category": "THE WAY YOU HURT",
    "type": "personality",
    "image": null,
    "text": "What is the difference between pain that grows you and pain that breaks you?",
    "answers": [
      {
        "text": "Someone who stayed. The ones who grow are the ones who were not alone in it.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mando": 3,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Time. Some pain needs years. Some pain is too short for the lesson to land.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "mace": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Meaning. If I can make sense of it, it teaches. If I cannot, it just hurts.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "palpatine": 2,
          "kylo": 2
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "yellow": 1
        }
      },
      {
        "text": "Honestly, I am not sure. Some of mine broke me and some grew me, and I cannot always tell why.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "finn": 2,
          "luke": 1
        },
        "saber": {
          "purple": 3,
          "red": 1,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "hurt_24",
    "category": "THE WAY YOU HURT",
    "type": "personality",
    "image": null,
    "text": "Is there anyone who has earned the right to see the deepest part of your pain?",
    "answers": [
      {
        "text": "Yes. One or two people. Not many. The right ones.",
        "scores": {
          "mando": 3,
          "han": 3,
          "vader": 3,
          "kylo": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "Yes. Many. I do not keep pain a secret — that just makes it grow.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "quigon": 1
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "No. Not because no one is worthy — because there are parts I have not even shown myself yet.",
        "scores": {
          "yoda": 3,
          "vader": 3,
          "kylo": 3,
          "mando": 1
        },
        "saber": {
          "green": 2,
          "purple": 2,
          "red": 1
        }
      },
      {
        "text": "I am working on letting someone in. It is harder than I thought.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 2,
          "mando": 2
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "hurt_04",
    "category": "THE WAY YOU HURT",
    "type": "image-answer",
    "text": "Pick the image that feels most like your pain.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic atmospheric illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. NO figures with faces visible — symbolic and atmospheric imagery only. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): A vast distant storm on the horizon over a calm sea, lightning crackling far away but the foreground still peaceful, atmosphere of pain held at a distance.\n\nQUADRANT 2 (top right): A heavy stone sitting on top of a wooden box, the box slightly crushed under the weight, simple still life with soft side lighting, atmosphere of weight carried quietly.\n\nQUADRANT 3 (bottom left): A broken crystal whose pieces are slowly reforming into something new and beautiful, soft golden light flowing through the cracks, atmosphere of pain becoming wisdom.\n\nQUADRANT 4 (bottom right): A landscape with a deep dark canyon running through it, the canyon hidden behind sunlit hills, hint of the chasm just visible, atmosphere of hidden depth.",
    "answers": [
      {
        "image": "./assets/quiz/q-hurt_04-a.png",
        
        "caption": "A Distant Storm",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-hurt_04-b.png",
        
        "caption": "A Heavy Weight",
        "scores": {
          "vader": 3,
          "mando": 3,
          "mace": 2,
          "kylo": 2,
          "palpatine": 1
        },
        "saber": {
          "red": 1,
          "white": 2,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-hurt_04-c.png",
        
        "caption": "A Broken Crystal",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 3,
          "kylo": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-hurt_04-d.png",
        
        "caption": "A Hidden Canyon",
        "scores": {
          "han": 3,
          "boba": 3,
          "vader": 2,
          "palpatine": 2
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "hurt_08",
    "category": "THE WAY YOU HURT",
    "type": "image-answer",
    "text": "Pick what helps when you are hurting.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic emotional illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. Figures may appear as silhouettes but NO clear faces. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): A figure sitting alone under a vast star-filled sky, completely still, atmosphere of solitary processing under cosmic perspective.\n\nQUADRANT 2 (top right): A figure being wrapped in a blanket by another figure standing beside them, gentle gesture, warm soft light, atmosphere of being cared for in silence.\n\nQUADRANT 3 (bottom left): Two figures laughing together over a meal at a small table, warm hanging lamp above them, atmosphere of joy as medicine.\n\nQUADRANT 4 (bottom right): A figure working steadily with their hands at a workbench, focused on a task, atmosphere of healing through doing.",
    "answers": [
      {
        "image": "./assets/quiz/q-hurt_08-a.png",
        
        "caption": "The Sky Alone",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "mando": 2,
          "luke": 2,
          "palpatine": -1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-hurt_08-b.png",
        
        "caption": "Being Wrapped Up",
        "scores": {
          "chewie": 3,
          "mando": 3,
          "grogu": 3,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-hurt_08-c.png",
        
        "caption": "Laughing With Someone",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 3,
          "chewie": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-hurt_08-d.png",
        
        "caption": "Working With My Hands",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "mace": 1
        },
        "saber": {
          "white": 2,
          "yellow": 2
        }
      }
    ]
  },
  {
    "id": "hurt_13",
    "category": "THE WAY YOU HURT",
    "type": "image-answer",
    "text": "Pick what an old hurt feels like inside you now.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic metaphorical illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. NO figures with faces visible. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): A scar on weathered metal armor, beautiful in its imperfection, soft warm light catching the texture, atmosphere of marks earned and accepted.\n\nQUADRANT 2 (top right): A tree trunk grown around an old wound, the bark now smooth where it once was torn, atmosphere of nature healing around pain.\n\nQUADRANT 3 (bottom left): A simple stone in a clear stream of running water, the water flowing past and around it constantly, atmosphere of pain present but not stopping life.\n\nQUADRANT 4 (bottom right): An old lantern with a small flame still burning inside despite long years of weather, atmosphere of pain that fuels rather than destroys.",
    "answers": [
      {
        "image": "./assets/quiz/q-hurt_13-a.png",
        
        "caption": "A Scar on Armor",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 3,
          "mace": 2
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "red": 1
        }
      },
      {
        "image": "./assets/quiz/q-hurt_13-b.png",
        
        "caption": "A Healed Tree",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-hurt_13-c.png",
        
        "caption": "A Stone in a Stream",
        "scores": {
          "quigon": 3,
          "yoda": 3,
          "obiwan": 2,
          "grogu": 1
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-hurt_13-d.png",
        
        "caption": "A Burning Lantern",
        "scores": {
          "kylo": 3,
          "vader": 2,
          "mace": 2,
          "finn": 2,
          "luke": 1
        },
        "saber": {
          "red": 1,
          "purple": 2,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "hurt_25",
    "category": "THE WAY YOU HURT",
    "type": "image-answer",
    "text": "Pick the moment that feels most like being there for someone who is hurting.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic emotional illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. Figures may appear as silhouettes but NO clear faces. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): Two figures sitting side by side on a porch step, no one talking, the silence soft and shared, atmosphere of presence without words.\n\nQUADRANT 2 (top right): One figure offering a steaming mug to another figure who is sitting hunched and tired, small gesture of care, warm light, atmosphere of small kindness during hard times.\n\nQUADRANT 3 (bottom left): One figure wrapping their arms around another in a strong hug, both standing in soft light, atmosphere of being held tightly when it is needed.\n\nQUADRANT 4 (bottom right): One figure walking shoulder to shoulder with another along a path, both moving forward together at the same pace, atmosphere of company through difficulty.",
    "answers": [
      {
        "image": "./assets/quiz/q-hurt_25-a.png",
        
        "caption": "Sitting in Silence",
        "scores": {
          "yoda": 3,
          "mando": 3,
          "quigon": 2,
          "obiwan": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-hurt_25-b.png",
        
        "caption": "A Warm Mug",
        "scores": {
          "finn": 3,
          "obiwan": 3,
          "luke": 2,
          "chewie": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-hurt_25-c.png",
        
        "caption": "A Strong Hug",
        "scores": {
          "chewie": 3,
          "mando": 3,
          "finn": 3,
          "grogu": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-hurt_25-d.png",
        
        "caption": "Walking Together",
        "scores": {
          "luke": 3,
          "mando": 3,
          "han": 2,
          "obiwan": 2
        },
        "saber": {
          "blue": 2,
          "white": 2,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "hide_01",
    "category": "THE WAY YOU HIDE",
    "type": "scenario",
    "image": "",
    "text": "You take off the mask you wear in public. What part of you do you actually let out?",
    "answers": [
      {
        "text": "Tenderness. The version of me that worries about people. The soft part.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "finn": 3,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Tiredness. The pretending takes more than people realize.",
        "scores": {
          "obiwan": 3,
          "han": 3,
          "mace": 2,
          "boba": 2,
          "palpatine": 1
        },
        "saber": {
          "blue": 2,
          "white": 2,
          "yellow": 1
        }
      },
      {
        "text": "Fear. The honest kind I cannot show during the day.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 2,
          "vader": 2
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "Nothing changes. The mask and the face are the same.",
        "scores": {
          "yoda": 3,
          "palpatine": 3,
          "grogu": 2,
          "boba": 1,
          "kylo": -1
        },
        "saber": {
          "green": 2,
          "red": 1,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "hide_02",
    "category": "THE WAY YOU HIDE",
    "type": "personality",
    "image": null,
    "text": "How much of yourself do you actually show people?",
    "answers": [
      {
        "text": "A lot. Maybe too much. I have not really learned to hide.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "grogu": 3,
          "poe": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Some. The important parts. The rest is for me to know.",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "mace": 2,
          "han": 2
        },
        "saber": {
          "blue": 2,
          "white": 2,
          "yellow": 1
        }
      },
      {
        "text": "Very little. The world gets the version of me that works in the world.",
        "scores": {
          "vader": 3,
          "boba": 3,
          "palpatine": 2,
          "kylo": 2,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "yellow": 1
        }
      },
      {
        "text": "Different versions to different people. Each one is real. None is the whole.",
        "scores": {
          "palpatine": 3,
          "han": 2,
          "obiwan": 2,
          "kylo": 1
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "hide_03",
    "category": "THE WAY YOU HIDE",
    "type": "personality",
    "image": null,
    "text": "What is the thing you hide best?",
    "answers": [
      {
        "text": "How much I care. If people knew, they could use it.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "boba": 2,
          "han": 2,
          "palpatine": 1
        },
        "saber": {
          "white": 2,
          "red": 1,
          "blue": 1
        }
      },
      {
        "text": "My doubts. People look to me for certainty. I cannot let them see the cracks.",
        "scores": {
          "mace": 3,
          "obiwan": 3,
          "luke": 2,
          "poe": 1
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "The version of me that is afraid. Most days even I do not see her.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "vader": 2,
          "luke": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "My true plans. The galaxy sees the surface — never the depth.",
        "scores": {
          "palpatine": 3,
          "boba": 2,
          "mace": 1,
          "vader": 1,
          "finn": -3,
          "luke": -2
        },
        "saber": {
          "red": 3,
          "yellow": 1,
          "black": 1
        }
      }
    ]
  },
  {
    "id": "hide_05",
    "category": "THE WAY YOU HIDE",
    "type": "personality",
    "image": null,
    "text": "When you hide a part of yourself, who are you protecting?",
    "answers": [
      {
        "text": "Myself. From getting hurt by people who would not understand it.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "kylo": 3,
          "boba": 2,
          "palpatine": 1
        },
        "saber": {
          "white": 2,
          "red": 1,
          "purple": 1
        }
      },
      {
        "text": "The other person. From a weight they did not ask to carry.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "mando": 2,
          "vader": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "purple": 1
        }
      },
      {
        "text": "Both. Some things are not safe in the open yet.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Honestly, I am not always sure who I am hiding it for. Just that I am.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "han": 2,
          "vader": 1
        },
        "saber": {
          "purple": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "hide_06",
    "category": "THE WAY YOU HIDE",
    "type": "personality",
    "image": null,
    "text": "What is the disguise you put on most often?",
    "answers": [
      {
        "text": "Strength. People need to feel safe around me. So I make sure they do.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "vader": 2,
          "chewie": 2,
          "finn": -1
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "white": 1
        }
      },
      {
        "text": "Ease. Like nothing bothers me. Even when it does.",
        "scores": {
          "han": 3,
          "poe": 3,
          "boba": 2,
          "obiwan": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "Calm. The Jedi mask. Inside is a thousand things, but the surface stays smooth.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "yoda": 2,
          "quigon": 2
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "yellow": 1
        }
      },
      {
        "text": "I do not really disguise. People get the actual me. It is exhausting for them sometimes.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "kylo": 2,
          "grogu": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "hide_07",
    "category": "THE WAY YOU HIDE",
    "type": "personality",
    "image": null,
    "text": "How do you feel when someone sees through your mask?",
    "answers": [
      {
        "text": "Relieved. Half of me was hoping they would.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "luke": 2,
          "finn": 2,
          "palpatine": -2
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "Caught. Like I have lost some advantage I had been keeping.",
        "scores": {
          "palpatine": 3,
          "boba": 3,
          "han": 2,
          "mace": 1
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "white": 1
        }
      },
      {
        "text": "Curious. Who is this person who saw what others miss?",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "yoda": 2,
          "palpatine": 1
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "purple": 1
        }
      },
      {
        "text": "Embarrassed. Like I have been walking around with food on my face.",
        "scores": {
          "finn": 3,
          "luke": 3,
          "han": 2,
          "mando": 1
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "hide_09",
    "category": "THE WAY YOU HIDE",
    "type": "scenario",
    "image": "",
    "text": "You need to disappear for a while. Where do you actually go?",
    "answers": [
      {
        "text": "Somewhere wild. No one. Just trees, water, sky. The world reset.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 2,
          "mando": 1
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "A crowd. Hide in plain sight. Sometimes the busiest place is the most private.",
        "scores": {
          "han": 3,
          "obiwan": 3,
          "palpatine": 2,
          "boba": 2
        },
        "saber": {
          "white": 2,
          "yellow": 1,
          "blue": 1
        }
      },
      {
        "text": "My ship. Out into space. Stars are the safest neighbors.",
        "scores": {
          "mando": 3,
          "han": 3,
          "boba": 2,
          "poe": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "Back to the person I trust most. Hiding alone is harder than hiding together.",
        "scores": {
          "chewie": 3,
          "finn": 3,
          "luke": 2,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "hide_10",
    "category": "THE WAY YOU HIDE",
    "type": "personality",
    "image": null,
    "text": "What is the secret only you know about yourself?",
    "answers": [
      {
        "text": "How soft I really am underneath. Most people would not believe it.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "boba": 2,
          "mace": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "How scared I am. Of failure, of being seen, of being too much.",
        "scores": {
          "luke": 3,
          "kylo": 3,
          "finn": 3,
          "vader": 2
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "How much I am still learning. People think I have it figured out.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "quigon": 2,
          "yoda": 2,
          "palpatine": -1
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "purple": 1
        }
      },
      {
        "text": "How much I have already planned. People see the moment — never the move three steps ahead.",
        "scores": {
          "palpatine": 3,
          "mace": 2,
          "boba": 2,
          "han": 2,
          "finn": -2
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "hide_11",
    "category": "THE WAY YOU HIDE",
    "type": "personality",
    "image": null,
    "text": "When someone gets close enough to see the real you, what do you do?",
    "answers": [
      {
        "text": "Let them in. The right people are worth being known by.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "han": 2,
          "obiwan": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Pull back. Gently. Not because they are wrong — because I am not ready.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "kylo": 2,
          "mace": 2
        },
        "saber": {
          "white": 2,
          "purple": 1,
          "blue": 1
        }
      },
      {
        "text": "Test them. Show one small piece. See what they do with it.",
        "scores": {
          "boba": 3,
          "obiwan": 3,
          "palpatine": 2,
          "mando": 2,
          "finn": -1
        },
        "saber": {
          "yellow": 3,
          "white": 1,
          "red": 1
        }
      },
      {
        "text": "Get scared. The closeness itself is the danger, not whatever they would see.",
        "scores": {
          "kylo": 3,
          "vader": 2,
          "finn": 2,
          "luke": 1
        },
        "saber": {
          "purple": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "hide_12",
    "category": "THE WAY YOU HIDE",
    "type": "personality",
    "image": null,
    "text": "What is the gap between who you are inside and who people think you are?",
    "answers": [
      {
        "text": "Small. What you see is what you get.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "han": 2,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1,
          "green": 1
        }
      },
      {
        "text": "Big. They see calm. Inside is a storm they would not recognize.",
        "scores": {
          "mace": 3,
          "vader": 3,
          "obiwan": 2,
          "kylo": 2
        },
        "saber": {
          "purple": 2,
          "blue": 2,
          "yellow": 1
        }
      },
      {
        "text": "Enormous. The version they know was built for them to be comfortable with.",
        "scores": {
          "palpatine": 3,
          "boba": 2,
          "kylo": 1,
          "vader": 1,
          "finn": -3
        },
        "saber": {
          "red": 3,
          "yellow": 1,
          "black": 1
        }
      },
      {
        "text": "It depends on the person. Some see almost everything. Some see a stranger.",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "palpatine": 2,
          "han": 2
        },
        "saber": {
          "blue": 2,
          "white": 1,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "hide_14",
    "category": "THE WAY YOU HIDE",
    "type": "personality",
    "image": null,
    "text": "Why do you keep your real feelings to yourself sometimes?",
    "answers": [
      {
        "text": "Because they are too much. I do not want to put my weight on someone else.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "obiwan": 2,
          "mace": 2,
          "palpatine": 1
        },
        "saber": {
          "white": 2,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Because feelings change. By the time I would say them, they would already be different.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "han": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Because some feelings I have not even named for myself yet.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 2,
          "grogu": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "I usually do not. If I am feeling it, someone usually hears about it.",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 1,
          "chewie": 1,
          "palpatine": -2
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "hide_15",
    "category": "THE WAY YOU HIDE",
    "type": "personality",
    "image": null,
    "text": "What happens to a hidden part of you over time?",
    "answers": [
      {
        "text": "It gets smaller. The longer it is in the dark, the less I remember it.",
        "scores": {
          "vader": 3,
          "palpatine": 2,
          "mando": 2,
          "boba": 2,
          "luke": -1
        },
        "saber": {
          "red": 2,
          "white": 1,
          "purple": 1
        }
      },
      {
        "text": "It gets stronger. Pressure builds. Eventually it has to come out.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 2,
          "vader": 2
        },
        "saber": {
          "purple": 3,
          "red": 1,
          "blue": 1
        }
      },
      {
        "text": "It stays the same. Hidden things in me are paused, not killed.",
        "scores": {
          "obiwan": 3,
          "yoda": 3,
          "mace": 2,
          "mando": 2
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "yellow": 1
        }
      },
      {
        "text": "It changes me. The act of hiding it slowly shapes everything else.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "palpatine": 2,
          "luke": 1,
          "finn": 1
        },
        "saber": {
          "red": 1,
          "purple": 2,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "hide_16",
    "category": "THE WAY YOU HIDE",
    "type": "scenario",
    "image": "",
    "text": "You see your own reflection unexpectedly. What is the first thing you actually notice?",
    "answers": [
      {
        "text": "How tired I look. I have been carrying more than I realized.",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "vader": 2,
          "mace": 2,
          "han": 1
        },
        "saber": {
          "blue": 2,
          "white": 1,
          "purple": 1
        }
      },
      {
        "text": "How much I look like someone from my past. A parent. A teacher. Even one I do not want to look like.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "luke": 2,
          "finn": 1
        },
        "saber": {
          "purple": 3,
          "red": 1,
          "blue": 1
        }
      },
      {
        "text": "How calm my face is. Sometimes my insides do not match my outsides at all.",
        "scores": {
          "mace": 3,
          "yoda": 3,
          "obiwan": 2,
          "palpatine": 2
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "green": 1
        }
      },
      {
        "text": "Nothing. I look like me. That is enough.",
        "scores": {
          "luke": 3,
          "han": 3,
          "grogu": 2,
          "chewie": 2,
          "palpatine": -1
        },
        "saber": {
          "blue": 2,
          "white": 2
        }
      }
    ]
  },
  {
    "id": "hide_17",
    "category": "THE WAY YOU HIDE",
    "type": "personality",
    "image": null,
    "text": "Someone asks you a question you do not want to answer. What do you do?",
    "answers": [
      {
        "text": "Answer honestly. Even if I just say \"I do not want to talk about that.\"",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "luke": 2,
          "mace": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "Change the subject. Lightly. They might not even notice.",
        "scores": {
          "han": 3,
          "poe": 3,
          "palpatine": 2,
          "boba": 1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      },
      {
        "text": "Tell them part of the truth. The part that does not cost anything.",
        "scores": {
          "palpatine": 3,
          "obiwan": 2,
          "han": 2,
          "mace": 1,
          "finn": -1
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "white": 1
        }
      },
      {
        "text": "Go silent. Some questions deserve no answer.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "boba": 3,
          "kylo": 2,
          "finn": -1
        },
        "saber": {
          "white": 2,
          "red": 1,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "hide_18",
    "category": "THE WAY YOU HIDE",
    "type": "personality",
    "image": null,
    "text": "What does \"being yourself\" actually mean to you?",
    "answers": [
      {
        "text": "Letting people see what is already there. Not building anything new for them.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "grogu": 3,
          "han": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Acting in line with my deepest values. Even when no one is watching.",
        "scores": {
          "mace": 3,
          "obiwan": 3,
          "mando": 2,
          "vader": 2
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "purple": 1
        }
      },
      {
        "text": "Being the version of me that is closest to my purpose. Not all of me — the useful part.",
        "scores": {
          "palpatine": 3,
          "mace": 2,
          "vader": 2,
          "boba": 2
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      },
      {
        "text": "I am not sure I know what that means. I have always been many things at once.",
        "scores": {
          "kylo": 3,
          "han": 2,
          "palpatine": 2,
          "finn": 1
        },
        "saber": {
          "purple": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "hide_19",
    "category": "THE WAY YOU HIDE",
    "type": "personality",
    "image": null,
    "text": "When you wear a mask too long, what starts to happen?",
    "answers": [
      {
        "text": "I forget which face is mine and which is the mask.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "palpatine": 2,
          "mace": 1,
          "luke": 1
        },
        "saber": {
          "red": 1,
          "purple": 3
        }
      },
      {
        "text": "I get tired in ways sleep does not fix.",
        "scores": {
          "obiwan": 3,
          "han": 3,
          "mace": 2,
          "mando": 2
        },
        "saber": {
          "blue": 2,
          "white": 1,
          "yellow": 1
        }
      },
      {
        "text": "I start resenting the people I am hiding from. Even though they did nothing.",
        "scores": {
          "kylo": 3,
          "vader": 2,
          "mace": 1,
          "finn": 1,
          "yoda": -1
        },
        "saber": {
          "red": 2,
          "purple": 2
        }
      },
      {
        "text": "Honestly? Nothing much. I have worn it long enough that it fits.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "palpatine": 2,
          "vader": 1,
          "luke": -2
        },
        "saber": {
          "white": 3,
          "yellow": 1,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "hide_20",
    "category": "THE WAY YOU HIDE",
    "type": "personality",
    "image": null,
    "text": "Who in your life has seen the most of who you really are?",
    "answers": [
      {
        "text": "The person who has been with me longest. Time gives access I did not give on purpose.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "han": 2,
          "vader": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "A teacher. Someone wise. They saw what I was hiding and did not flinch.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Honestly, no one. The version everyone knows is everyone's. The deeper version is mine alone.",
        "scores": {
          "palpatine": 3,
          "boba": 3,
          "vader": 2,
          "kylo": 2,
          "luke": -2
        },
        "saber": {
          "red": 2,
          "white": 2,
          "black": 1
        }
      },
      {
        "text": "Many people. Different pieces. No one has the whole picture but together they have it all.",
        "scores": {
          "obiwan": 3,
          "palpatine": 2,
          "han": 2,
          "mando": 1
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "hide_21",
    "category": "THE WAY YOU HIDE",
    "type": "personality",
    "image": null,
    "text": "What would you want to stop hiding, if you could?",
    "answers": [
      {
        "text": "How much I love. Some people I have not told. They probably know — but I want to actually say it.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "finn": 3,
          "han": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "My doubts. The cracks. The not-knowing.",
        "scores": {
          "mace": 3,
          "obiwan": 3,
          "luke": 2,
          "mando": 1
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "yellow": 1
        }
      },
      {
        "text": "The version of me that wants to be soft. Most people have only met the hard one.",
        "scores": {
          "boba": 3,
          "vader": 3,
          "mando": 2,
          "kylo": 2
        },
        "saber": {
          "white": 2,
          "red": 1,
          "purple": 1
        }
      },
      {
        "text": "I am already mostly out. I do not have much I hide.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "grogu": 3,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "hide_22",
    "category": "THE WAY YOU HIDE",
    "type": "personality",
    "image": null,
    "text": "What is the cost of hiding?",
    "answers": [
      {
        "text": "Loneliness. Even in a crowd. The people next to me do not know who is next to them.",
        "scores": {
          "obiwan": 3,
          "vader": 3,
          "mace": 2,
          "mando": 2,
          "palpatine": 1
        },
        "saber": {
          "blue": 2,
          "purple": 1,
          "white": 1
        }
      },
      {
        "text": "Exhaustion. The maintenance. The constant management of which version is which.",
        "scores": {
          "han": 3,
          "palpatine": 3,
          "mace": 2,
          "obiwan": 2
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "red": 1
        }
      },
      {
        "text": "A slow forgetting. What I hide long enough, I start to lose access to.",
        "scores": {
          "vader": 3,
          "mando": 3,
          "kylo": 2,
          "palpatine": 2,
          "luke": -2
        },
        "saber": {
          "red": 1,
          "purple": 2,
          "white": 1
        }
      },
      {
        "text": "I do not see a real cost. Privacy is healthy. Some doors should stay closed.",
        "scores": {
          "boba": 3,
          "mando": 2,
          "palpatine": 2,
          "yoda": 1
        },
        "saber": {
          "white": 3,
          "yellow": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "hide_23",
    "category": "THE WAY YOU HIDE",
    "type": "personality",
    "image": null,
    "text": "When you imagine being fully seen — really, completely seen — what is the feeling?",
    "answers": [
      {
        "text": "Relief. So tired of carrying the gap between who I am and who they think I am.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "obiwan": 2,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "Joy. To finally be known would be one of the best things life could offer.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "han": 2,
          "chewie": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Terror. I cannot imagine letting anyone that far in.",
        "scores": {
          "palpatine": 3,
          "boba": 3,
          "kylo": 2,
          "vader": 2,
          "finn": -1
        },
        "saber": {
          "red": 2,
          "white": 2,
          "black": 1
        }
      },
      {
        "text": "Curiosity. I wonder what would actually be there if I let someone look.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "kylo": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "hide_24",
    "category": "THE WAY YOU HIDE",
    "type": "personality",
    "image": null,
    "text": "Is hiding always a bad thing?",
    "answers": [
      {
        "text": "No. Some things need protection before they can survive the light.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "mace": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Mostly bad. Hiding is what keeps people from really living.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "han": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Hiding is just a tool. It can serve or it can trap.",
        "scores": {
          "obiwan": 3,
          "palpatine": 3,
          "mace": 2,
          "mando": 2
        },
        "saber": {
          "yellow": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "For me it is necessary. The world does not always deserve everything.",
        "scores": {
          "boba": 3,
          "mando": 3,
          "vader": 2,
          "palpatine": 1,
          "luke": -2
        },
        "saber": {
          "white": 3,
          "red": 1,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "hide_04",
    "category": "THE WAY YOU HIDE",
    "type": "image-answer",
    "text": "Pick the mask that feels most like yours.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic still-life illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. NO figures or faces visible — only the masks/coverings themselves resting on simple surfaces. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): A weathered Mandalorian-style helmet with a single T-shaped visor sitting on a stone bench, scratches and dents from battle, soft warm side lighting, atmosphere of protective armor that has become identity.\n\nQUADRANT 2 (top right): A dark imposing helmet with a deep red glow inside the eye slits, polished black surface, sitting on a metal pedestal, intimidating and powerful, atmosphere of power that conceals.\n\nQUADRANT 3 (bottom left): A simple cloth hood lying gently folded on weathered wood, soft natural light, no menace, no power, just quiet concealment, atmosphere of humble hiding from a wider world.\n\nQUADRANT 4 (bottom right): A polished diplomatic mask of refined design with subtle ornamentation, almost beautiful, but with empty eyes that reveal nothing, atmosphere of social presentation.",
    "answers": [
      {
        "image": "./assets/quiz/q-hide_04-a.png",
        
        "caption": "The Warrior Helmet",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "mace": 1
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "image": "./assets/quiz/q-hide_04-b.png",
        
        "caption": "The Dark Helmet",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "palpatine": 2,
          "mace": 1
        },
        "saber": {
          "red": 3,
          "purple": 1,
          "black": 1
        }
      },
      {
        "image": "./assets/quiz/q-hide_04-c.png",
        
        "caption": "The Hood",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 2,
          "luke": 1
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-hide_04-d.png",
        
        "caption": "The Social Mask",
        "scores": {
          "palpatine": 3,
          "han": 2,
          "obiwan": 2,
          "boba": 1,
          "finn": -2,
          "grogu": -2
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "hide_08",
    "category": "THE WAY YOU HIDE",
    "type": "image-answer",
    "text": "Pick where you would go to disappear.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic atmospheric illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. NO figures visible. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): A small humble hut in the middle of a misty swamp forest, alone among ancient trees, single warm light in the window, atmosphere of chosen exile and quiet wisdom.\n\nQUADRANT 2 (top right): A bustling crowded alien marketplace at dusk, dozens of figures and stalls, anonymous in the chaos, atmosphere of hiding in plain sight through crowd.\n\nQUADRANT 3 (bottom left): A small starship parked alone on a desolate moon, the only light for miles, vast empty space around it, atmosphere of solitude through distance.\n\nQUADRANT 4 (bottom right): A hidden underground vault behind a heavy stone door, soft amber lighting, secure and inaccessible, atmosphere of fortified privacy.",
    "answers": [
      {
        "image": "./assets/quiz/q-hide_08-a.png",
        
        "caption": "The Swamp Hut",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-hide_08-b.png",
        
        "caption": "The Crowd",
        "scores": {
          "han": 3,
          "obiwan": 2,
          "palpatine": 2,
          "finn": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-hide_08-c.png",
        
        "caption": "A Lonely Moon",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "kylo": 2
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "image": "./assets/quiz/q-hide_08-d.png",
        
        "caption": "The Vault",
        "scores": {
          "palpatine": 3,
          "boba": 2,
          "mace": 2,
          "vader": 1
        },
        "saber": {
          "yellow": 3,
          "red": 1,
          "black": 1
        }
      }
    ]
  },
  {
    "id": "hide_13",
    "category": "THE WAY YOU HIDE",
    "type": "image-answer",
    "text": "Pick what is behind your public face.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic symbolic illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. NO figures with faces visible. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): A small warm flame burning gently in the center of a stone alcove, protected from wind, glowing steadily, atmosphere of soft love kept safe.\n\nQUADRANT 2 (top right): A small cracked teacup sitting on a windowsill, hairline fractures visible but the cup still holding its shape, soft morning light, atmosphere of fragility carefully managed.\n\nQUADRANT 3 (bottom left): A coiled rope on a workshop floor, tightly wound, ready to spring outward, sense of stored energy, atmosphere of strength held in reserve.\n\nQUADRANT 4 (bottom right): A vast complex mechanism of gears and dials in motion, intricate and beautiful, atmosphere of constant calculation beneath the surface.",
    "answers": [
      {
        "image": "./assets/quiz/q-hide_13-a.png",
        
        "caption": "A Small Flame",
        "scores": {
          "mando": 3,
          "vader": 3,
          "finn": 2,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-hide_13-b.png",
        
        "caption": "A Cracked Cup",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 2,
          "obiwan": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-hide_13-c.png",
        
        "caption": "A Coiled Rope",
        "scores": {
          "mace": 3,
          "boba": 3,
          "mando": 2,
          "vader": 2
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "red": 1
        }
      },
      {
        "image": "./assets/quiz/q-hide_13-d.png",
        
        "caption": "A Mechanism",
        "scores": {
          "palpatine": 3,
          "obiwan": 2,
          "han": 2,
          "boba": 1
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "hide_25",
    "category": "THE WAY YOU HIDE",
    "type": "image-answer",
    "text": "Pick the moment that feels most like being seen.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic emotional illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic sci-fi illustration, soft cel-shading, painterly storybook style, vibrant colors, high contrast. Figures may appear as silhouettes but NO clear faces. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): A figure removing a helmet slowly with both hands, head bowed, the helmet held in front of them, atmosphere of vulnerable revelation.\n\nQUADRANT 2 (top right): Two figures sitting across from each other in dim warm light, one speaking, one listening with full attention, atmosphere of being truly heard.\n\nQUADRANT 3 (bottom left): A figure standing in a doorway looking out at a wide open landscape, hood thrown back, no armor, atmosphere of stepping into the light unguarded.\n\nQUADRANT 4 (bottom right): A close view of one hand reaching for another in soft light, both hands open, palms turned up in trust, atmosphere of letting someone in.",
    "answers": [
      {
        "image": "./assets/quiz/q-hide_25-a.png",
        
        "caption": "Removing the Helmet",
        "scores": {
          "mando": 3,
          "vader": 3,
          "boba": 2,
          "kylo": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-hide_25-b.png",
        
        "caption": "Being Truly Heard",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 3,
          "kylo": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-hide_25-c.png",
        
        "caption": "Stepping Into the Light",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 3,
          "obiwan": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-hide_25-d.png",
        
        "caption": "Reaching for a Hand",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mando": 2,
          "vader": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "heal_01",
    "category": "THE WAY YOU HEAL",
    "type": "scenario",
    "image": "",
    "text": "You have been carrying something heavy for a long time. You finally feel ready to start healing. What is the first move?",
    "answers": [
      {
        "text": "I sit with it fully. Even the parts I have been avoiding. Healing starts with looking.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I talk to someone. Words I have not said out loud yet. That is where it starts.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "han": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I rebuild the small things first. Sleep. Food. Routine. Foundation comes before walls.",
        "scores": {
          "mando": 3,
          "boba": 2,
          "mace": 2,
          "vader": 2
        },
        "saber": {
          "white": 2,
          "yellow": 2,
          "blue": 1
        }
      },
      {
        "text": "I move toward what hurt me. Carefully. Healing is not avoiding the wound — it is meeting it.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "kylo": 2,
          "vader": 2,
          "palpatine": -1
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "heal_02",
    "category": "THE WAY YOU HEAL",
    "type": "personality",
    "image": null,
    "text": "Do you believe people can really heal?",
    "answers": [
      {
        "text": "Yes. Always. The shape may change but healing is real.",
        "scores": {
          "yoda": 3,
          "luke": 3,
          "obiwan": 3,
          "quigon": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Yes — but it takes longer than most people are willing to give it.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "mando": 2,
          "quigon": 1
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "green": 1
        }
      },
      {
        "text": "Some can. Some cannot. The deepest wounds do not always close.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "mace": 2,
          "boba": 2
        },
        "saber": {
          "red": 1,
          "purple": 2,
          "white": 1
        }
      },
      {
        "text": "I am not sure. I have seen both. I am still deciding what I believe.",
        "scores": {
          "finn": 3,
          "kylo": 3,
          "luke": 2,
          "mando": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "heal_03",
    "category": "THE WAY YOU HEAL",
    "type": "personality",
    "image": null,
    "text": "What do you actually need to heal?",
    "answers": [
      {
        "text": "Time. Just time. The wound does the work if I stop touching it.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "mando": 2,
          "obiwan": 1,
          "palpatine": -1
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "People who saw the original. Their memory of who I was helps me find my way back.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "han": 2,
          "obiwan": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Purpose. Something to do. The wound shrinks when it is not the main event.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "vader": 2,
          "palpatine": 1
        },
        "saber": {
          "white": 2,
          "yellow": 2
        }
      },
      {
        "text": "Honestly, I do not know what I need. That is part of why healing is hard for me.",
        "scores": {
          "kylo": 3,
          "finn": 2,
          "han": 2,
          "vader": 1
        },
        "saber": {
          "purple": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "heal_05",
    "category": "THE WAY YOU HEAL",
    "type": "personality",
    "image": null,
    "text": "When you are healing, what gets in your way the most?",
    "answers": [
      {
        "text": "Impatience. I want to be done before I am done.",
        "scores": {
          "han": 3,
          "poe": 3,
          "kylo": 2,
          "luke": 2,
          "yoda": -2
        },
        "saber": {
          "white": 3,
          "red": 1,
          "green": -2
        }
      },
      {
        "text": "The voice in my head that says I should be over this already.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "vader": 3,
          "kylo": 2
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "purple": 1
        }
      },
      {
        "text": "The people around me. They want me healed too — and that pressure makes it harder.",
        "scores": {
          "finn": 3,
          "kylo": 3,
          "luke": 2,
          "obiwan": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "I am my own obstacle. I keep reopening the wound to look at it.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "luke": 2,
          "palpatine": 1
        },
        "saber": {
          "red": 1,
          "purple": 3
        }
      }
    ]
  },
  {
    "id": "heal_06",
    "category": "THE WAY YOU HEAL",
    "type": "personality",
    "image": null,
    "text": "How do you know when healing has actually happened?",
    "answers": [
      {
        "text": "When I can think about the thing without my body changing. Just a thought now, not a wave.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "mace": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "When I have used what happened to help someone else. The wound became a gift.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "quigon": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "When I stop telling the story the same way. The shape of it changes.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "han": 2,
          "vader": 1
        },
        "saber": {
          "blue": 2,
          "yellow": 2
        }
      },
      {
        "text": "I am not sure I ever fully know. Healing is more shape than line.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "vader": 2,
          "luke": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "heal_07",
    "category": "THE WAY YOU HEAL",
    "type": "personality",
    "image": null,
    "text": "Who has helped you heal the most in your life?",
    "answers": [
      {
        "text": "A wise person. Someone who knew when to speak and when to be quiet.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "A loved one who just stayed. Did not fix me. Just stayed.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "finn": 2,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Someone going through something similar. We healed at the same time.",
        "scores": {
          "finn": 3,
          "luke": 3,
          "kylo": 2,
          "mando": 1
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Honestly? Myself. The healers I needed were not there. So I learned.",
        "scores": {
          "boba": 3,
          "mando": 2,
          "vader": 2,
          "kylo": 2,
          "palpatine": 1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "heal_09",
    "category": "THE WAY YOU HEAL",
    "type": "scenario",
    "image": "",
    "text": "You see someone you used to be — younger, hurt, still raw. What do you want to say to them?",
    "answers": [
      {
        "text": "You will not believe how much it changes. Hold on. The waiting is part of it.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "quigon": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "You did your best with what you had. That is enough. That has always been enough.",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "luke": 2,
          "finn": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "Get up. Just one more time. That is the only thing you need to do today.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "vader": 2,
          "poe": 2
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "white": 1
        }
      },
      {
        "text": "I do not have anything to say. They had to figure it out the hard way. That is how they became me.",
        "scores": {
          "boba": 3,
          "han": 2,
          "kylo": 2,
          "vader": 2,
          "luke": -2
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "heal_10",
    "category": "THE WAY YOU HEAL",
    "type": "personality",
    "image": null,
    "text": "What kind of healing happens fastest for you?",
    "answers": [
      {
        "text": "Healing in nature. Quiet places do something my words cannot.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 2,
          "grogu": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "Healing through movement. My body fixes things my mind cannot.",
        "scores": {
          "poe": 3,
          "han": 3,
          "finn": 2,
          "mace": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "Healing through making. I build my way out of pain.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "palpatine": 1
        },
        "saber": {
          "white": 2,
          "yellow": 2
        }
      },
      {
        "text": "Healing through connection. With one right person, I move twice as fast.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "chewie": 2,
          "obiwan": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "heal_11",
    "category": "THE WAY YOU HEAL",
    "type": "personality",
    "image": null,
    "text": "When you cannot heal a wound, what do you do with it?",
    "answers": [
      {
        "text": "I make peace with it. Some things are companions, not problems.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "vader": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I work around it. I build the rest of my life so the wound is not the center.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "boba": 2,
          "han": 2
        },
        "saber": {
          "white": 2,
          "yellow": 2,
          "blue": 1
        }
      },
      {
        "text": "I let it shape me. The wound becomes part of who I am, for better or worse.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "mace": 2,
          "obiwan": 1
        },
        "saber": {
          "red": 1,
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "I keep trying. I am not ready to call it unhealable yet.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "kylo": 2,
          "mando": 1
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "heal_12",
    "category": "THE WAY YOU HEAL",
    "type": "personality",
    "image": null,
    "text": "How do you help someone else heal?",
    "answers": [
      {
        "text": "I sit with them. I do not try to fix anything. I just stay near.",
        "scores": {
          "yoda": 3,
          "mando": 3,
          "chewie": 3,
          "grogu": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "white": 1
        }
      },
      {
        "text": "I ask careful questions. I listen with my whole self. Healing happens through being heard.",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "luke": 2,
          "finn": 2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "I share what I learned from my own healing. So they know they are not alone.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "kylo": 2,
          "obiwan": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "I help them build the next thing. Forward motion heals things that looking back cannot.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "poe": 2,
          "han": 2
        },
        "saber": {
          "white": 2,
          "yellow": 2,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "heal_14",
    "category": "THE WAY YOU HEAL",
    "type": "personality",
    "image": null,
    "text": "What gets in the way of you helping yourself heal?",
    "answers": [
      {
        "text": "The voice that says I do not deserve to heal yet.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "mace": 2,
          "finn": 2,
          "palpatine": 1
        },
        "saber": {
          "red": 1,
          "purple": 3
        }
      },
      {
        "text": "I do not always notice I am hurt. I keep going until something forces me to stop.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "vader": 2,
          "han": 2,
          "yoda": -1
        },
        "saber": {
          "yellow": 2,
          "white": 2
        }
      },
      {
        "text": "I am ashamed of needing healing in the first place.",
        "scores": {
          "mace": 3,
          "vader": 3,
          "mando": 2,
          "kylo": 2
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "purple": 1
        }
      },
      {
        "text": "Honestly, not much. I have learned to take care of myself.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 2,
          "grogu": 2,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "heal_15",
    "category": "THE WAY YOU HEAL",
    "type": "personality",
    "image": null,
    "text": "When healing feels impossible, what keeps you going?",
    "answers": [
      {
        "text": "The people who would mourn me. Their love is louder than my doubt.",
        "scores": {
          "luke": 3,
          "mando": 3,
          "finn": 3,
          "vader": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "A sense that something is asking me to keep walking. I do not always know what.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Discipline. Healing is something I am working on. I do not stop a project mid-way.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "boba": 2,
          "palpatine": 1
        },
        "saber": {
          "yellow": 3,
          "white": 1
        }
      },
      {
        "text": "Anger. I refuse to be ended by whatever hurt me. That alone keeps me alive.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "maul": 2,
          "mace": 1,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "heal_16",
    "category": "THE WAY YOU HEAL",
    "type": "scenario",
    "image": "",
    "text": "A friend says, \"I think I am finally healing.\" What is the first thing you actually feel for them?",
    "answers": [
      {
        "text": "Joy. Real, full joy. I want to know everything about how it is happening.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Quiet gratitude. I have watched them walk through it. This is the day.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Relief. I had been carrying their pain too without realizing it.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "han": 2,
          "mace": 1
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "A complicated mix. Glad for them. Also reminded of my own things I have not healed yet.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 2,
          "vader": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "heal_17",
    "category": "THE WAY YOU HEAL",
    "type": "personality",
    "image": null,
    "text": "What does it actually feel like in your body when healing is happening?",
    "answers": [
      {
        "text": "Lighter. A weight I had stopped noticing has moved.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "Strange. Almost like the absence of something. Healing is quiet, not loud.",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "vader": 2,
          "mace": 1
        },
        "saber": {
          "blue": 2,
          "yellow": 1,
          "white": 1
        }
      },
      {
        "text": "Like crying without sadness. Release in a form I do not have a word for.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "grogu": 2,
          "kylo": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "green": 1
        }
      },
      {
        "text": "Honestly, I am not sure I have felt it. Or if I have, I did not name it that.",
        "scores": {
          "boba": 3,
          "mando": 2,
          "palpatine": 2,
          "han": 1,
          "luke": -1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "heal_18",
    "category": "THE WAY YOU HEAL",
    "type": "personality",
    "image": null,
    "text": "After you have healed from something, what do you do with the lesson?",
    "answers": [
      {
        "text": "I share it. Not as a teacher — as a person who walked through.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "quigon": 2,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I let it shape how I help others. I never say it directly, but it shows up.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "obiwan": 2,
          "chewie": 1
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "I write it down. Or build it into something. The lesson needs a form.",
        "scores": {
          "obiwan": 3,
          "palpatine": 3,
          "mace": 2,
          "kylo": 1
        },
        "saber": {
          "yellow": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I keep it. It is mine. The lesson belongs to me, not to whoever I pass it to.",
        "scores": {
          "boba": 3,
          "mando": 2,
          "vader": 2,
          "kylo": 2,
          "luke": -1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "heal_19",
    "category": "THE WAY YOU HEAL",
    "type": "personality",
    "image": null,
    "text": "Someone hurt you a long time ago. They never apologized. How do you heal anyway?",
    "answers": [
      {
        "text": "I let go of needing them to. Their absence does not stop my healing.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "quigon": 2,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I write them a letter I never send. The words still do the work.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "finn": 2,
          "mace": 1
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "I focus on what I have built since. They are not the main character anymore.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "han": 2,
          "vader": 2
        },
        "saber": {
          "white": 2,
          "yellow": 2,
          "blue": 1
        }
      },
      {
        "text": "I have not, fully. Some part of me is still waiting for the apology.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "finn": 2,
          "luke": 1
        },
        "saber": {
          "red": 1,
          "purple": 3
        }
      }
    ]
  },
  {
    "id": "heal_20",
    "category": "THE WAY YOU HEAL",
    "type": "personality",
    "image": null,
    "text": "What is your relationship with forgiveness — of yourself, of others?",
    "answers": [
      {
        "text": "I forgive easily. Holding grudges costs more than they protect.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "quigon": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Forgiveness happens slowly for me. But once it does, it is complete.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "obiwan": 2,
          "vader": 2
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "purple": 1
        }
      },
      {
        "text": "I forgive others more easily than I forgive myself.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "luke": 2,
          "finn": 2,
          "palpatine": -1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "I do not believe in forgiveness as a destination. It is something you keep doing.",
        "scores": {
          "obiwan": 3,
          "yoda": 3,
          "mace": 2,
          "mando": 1
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "heal_21",
    "category": "THE WAY YOU HEAL",
    "type": "personality",
    "image": null,
    "text": "What is the strangest gift healing has given you?",
    "answers": [
      {
        "text": "Patience for other people. I know what they are walking through, even when they cannot say it.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "quigon": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "A clearer voice. The wound made me say what I actually mean.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "obiwan": 2,
          "kylo": 1
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "Less fear. I have survived something. That information lives in my body now.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "vader": 2,
          "mando": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "A strange kind of gratitude. Even for the hurt. I would not be me without it.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "luke": 2,
          "obiwan": 1
        },
        "saber": {
          "purple": 3,
          "red": 1,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "heal_22",
    "category": "THE WAY YOU HEAL",
    "type": "personality",
    "image": null,
    "text": "When someone is healing more slowly than you wish, what do you do?",
    "answers": [
      {
        "text": "I let them. Each person's timing is their own. Pushing only delays.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I stay near. They do not have to do it faster — they do not have to do it alone.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "luke": 2,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I get frustrated. I try not to show it. Sometimes I fail.",
        "scores": {
          "han": 3,
          "mace": 2,
          "kylo": 2,
          "palpatine": 1,
          "yoda": -1
        },
        "saber": {
          "white": 2,
          "red": 1
        }
      },
      {
        "text": "I check on my own healing. Sometimes their slowness shows me my own.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "kylo": 2,
          "finn": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "heal_23",
    "category": "THE WAY YOU HEAL",
    "type": "personality",
    "image": null,
    "text": "Is there a hurt you are still healing right now?",
    "answers": [
      {
        "text": "Yes. Probably always will be. Healing is not a checklist.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mace": 2,
          "kylo": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Yes. And I am okay with it. I have made room for it in my life.",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "vader": 2,
          "luke": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Yes. And I am tired of it. I want this part to be over.",
        "scores": {
          "finn": 3,
          "kylo": 3,
          "han": 2,
          "mace": 1
        },
        "saber": {
          "purple": 2,
          "white": 1,
          "red": 1
        }
      },
      {
        "text": "No. I have moved past it. Mostly.",
        "scores": {
          "boba": 3,
          "han": 2,
          "palpatine": 2,
          "mando": 1,
          "luke": -1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "heal_24",
    "category": "THE WAY YOU HEAL",
    "type": "personality",
    "image": null,
    "text": "What would you want a younger person, just starting to heal from something, to know?",
    "answers": [
      {
        "text": "You are not broken. You are healing. Those are completely different things.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "quigon": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "It takes longer than you think. And it is worth every day.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "mando": 2,
          "finn": 2
        },
        "saber": {
          "blue": 3,
          "yellow": 1,
          "purple": 1
        }
      },
      {
        "text": "Find someone who knew you before. Their memory of you will help you find yourself.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "han": 2,
          "chewie": 1
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Whatever you are feeling right now — even the parts you are ashamed of — they are okay.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "finn": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "heal_04",
    "category": "THE WAY YOU HEAL",
    "type": "image-answer",
    "text": "Pick where healing finds you.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic atmospheric illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic space-opera illustration in the style of vintage 1970s/1980s sci-fi film concept art. Lived-in, weathered, dusty, practical. Warm earth-tone palette: tan, ochre, rust, faded orange. Hard practical lighting with long shadows. Smoke and dust catching the light. Painterly storybook execution with soft cel-shading. NOT futuristic chrome. NOT superhero aesthetic. NOT glossy CGI. NO figures visible. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): An ancient mossy stone meditation alcove in a misty primal forest, sunbeams cutting through dense canopy, a simple woven mat on damp stone, atmosphere of healing through stillness and ancient natural wisdom.\n\nQUADRANT 2 (top right): A weathered starship cockpit at sunset over a vast desert landscape, dust motes drifting through warm orange light through the viewport, worn leather pilot seat, atmosphere of healing through motion and open sky.\n\nQUADRANT 3 (bottom left): A simple workshop bench in a dusty desert hut, hand tools laid out in careful rows, a half-mended piece of armor, soft warm lamp light, atmosphere of healing through patient work with the hands.\n\nQUADRANT 4 (bottom right): A small fire in the center of a circle of figures gathered close in a rocky desert canyon, warm golden flames flickering on tan rock walls, atmosphere of healing through company and shared warmth.",
    "answers": [
      {
        "image": "./assets/quiz/q-heal_04-a.png",
        
        "caption": "A Quiet Forest",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-heal_04-b.png",
        
        "caption": "A Long Flight",
        "scores": {
          "han": 3,
          "poe": 3,
          "mando": 2,
          "boba": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-heal_04-c.png",
        
        "caption": "A Workbench",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "mace": 1
        },
        "saber": {
          "white": 2,
          "yellow": 2
        }
      },
      {
        "image": "./assets/quiz/q-heal_04-d.png",
        
        "caption": "A Fire With Friends",
        "scores": {
          "chewie": 3,
          "finn": 3,
          "luke": 2,
          "han": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "heal_08",
    "category": "THE WAY YOU HEAL",
    "type": "image-answer",
    "text": "Pick what healing looks like.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic symbolic illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic space-opera illustration in the style of vintage 1970s/1980s sci-fi film concept art. Lived-in, weathered, dusty, practical. Warm earth-tone palette: tan, ochre, rust, faded orange. Hard practical lighting with long shadows. Smoke and dust catching the light. Painterly storybook execution with soft cel-shading. NOT futuristic chrome. NOT superhero aesthetic. NOT glossy CGI. NO figures with faces visible. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): A cracked piece of weathered armor being mended with gold lacquer, the gold tracing the lines of damage and making them beautiful, soft warm light on the metal, atmosphere of broken things made stronger.\n\nQUADRANT 2 (top right): A small green sprout pushing up through a crack in dry desert stone, soft golden sunlight on the tiny leaves, atmosphere of new life finding a way through old hurt.\n\nQUADRANT 3 (bottom left): A old rusted blaster pistol being slowly cleaned and reassembled on a worn workbench, parts laid out in order, soft warm overhead light, atmosphere of careful restoration through patient work.\n\nQUADRANT 4 (bottom right): A weathered woven brown cloak being mended by hand with simple needle and thread, the fabric stronger where it has been repaired, atmosphere of healing as quiet ongoing craft.",
    "answers": [
      {
        "image": "./assets/quiz/q-heal_08-a.png",
        
        "caption": "A Gold-Mended Crack",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "luke": 2,
          "obiwan": 2,
          "palpatine": -1
        },
        "saber": {
          "purple": 3,
          "blue": 1,
          "red": 1
        }
      },
      {
        "image": "./assets/quiz/q-heal_08-b.png",
        
        "caption": "A Sprout from Stone",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 3,
          "grogu": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-heal_08-c.png",
        
        "caption": "A Restored Weapon",
        "scores": {
          "mando": 3,
          "boba": 3,
          "han": 2,
          "mace": 1
        },
        "saber": {
          "white": 2,
          "yellow": 2
        }
      },
      {
        "image": "./assets/quiz/q-heal_08-d.png",
        
        "caption": "A Mended Cloak",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "yoda": 2,
          "mando": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "heal_13",
    "category": "THE WAY YOU HEAL",
    "type": "image-answer",
    "text": "Pick what dawn looks like after a long dark night.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic atmospheric illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic space-opera illustration in the style of vintage 1970s/1980s sci-fi film concept art. Lived-in, weathered, dusty, practical. Warm earth-tone palette: tan, ochre, rust, faded orange. Hard practical lighting with long shadows. Smoke and dust catching the light. Painterly storybook execution with soft cel-shading. NOT futuristic chrome. NOT superhero aesthetic. NOT glossy CGI. NO figures visible. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): Twin suns rising over an endless tan desert dune landscape, brilliant golden-orange light spreading across the sand, weathered moisture collectors silhouetted against the sky, atmosphere of new beginning in a familiar place.\n\nQUADRANT 2 (top right): Soft early sunlight filtering through ancient mossy primal trees in a misty swamp forest, the air thick with golden particles, atmosphere of sacred awakening in nature.\n\nQUADRANT 3 (bottom left): The view from a starship cockpit emerging from hyperspeed into a calm star-filled void, soft cyan-blue light from the displays, vast quiet space ahead, atmosphere of arrival after long journey.\n\nQUADRANT 4 (bottom right): A small candle flame burning steady on a windowsill in a humble desert dwelling at dawn, warm light catching dust in the air, simple peaceful interior, atmosphere of small light returning home.",
    "answers": [
      {
        "image": "./assets/quiz/q-heal_13-a.png",
        
        "caption": "Twin Suns Rising",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "han": 2
        },
        "saber": {
          "blue": 2,
          "white": 2,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-heal_13-b.png",
        
        "caption": "Light Through Trees",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "grogu": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-heal_13-c.png",
        
        "caption": "Out of Hyperspeed",
        "scores": {
          "mando": 3,
          "han": 3,
          "poe": 2,
          "boba": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-heal_13-d.png",
        
        "caption": "A Candle Returning",
        "scores": {
          "mando": 3,
          "obiwan": 3,
          "vader": 2,
          "finn": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "heal_25",
    "category": "THE WAY YOU HEAL",
    "type": "image-answer",
    "text": "Pick the moment that feels most like healing.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic emotional illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic space-opera illustration in the style of vintage 1970s/1980s sci-fi film concept art. Lived-in, weathered, dusty, practical. Warm earth-tone palette: tan, ochre, rust, faded orange. Hard practical lighting with long shadows. Smoke and dust catching the light. Painterly storybook execution with soft cel-shading. NOT futuristic chrome. NOT superhero aesthetic. NOT glossy CGI. Figures may appear as silhouettes but NO clear faces. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left): A figure sitting in meditation on a weathered stone platform overlooking misty primal forests at dawn, simple brown robes, no face visible, atmosphere of inner peace reclaimed.\n\nQUADRANT 2 (top right): Two figures sitting close on a low desert wall watching twin suns set together, soft warm light surrounding them, no faces visible, atmosphere of being healed by company.\n\nQUADRANT 3 (bottom left): A figure in worn armor standing tall and steady in a dusty desert canyon at dawn, scars visible on the armor, weapon holstered, no face visible, atmosphere of choosing to keep walking.\n\nQUADRANT 4 (bottom right): A weathered hand opened in a gentle gesture of letting go, soft warm light catching dust drifting upward from the open palm, atmosphere of release as healing.",
    "answers": [
      {
        "image": "./assets/quiz/q-heal_25-a.png",
        
        "caption": "Sitting in Stillness",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-heal_25-b.png",
        
        "caption": "Sunset Together",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "finn": 3,
          "han": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-heal_25-c.png",
        
        "caption": "Standing Again",
        "scores": {
          "mando": 3,
          "mace": 3,
          "vader": 2,
          "poe": 2
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-heal_25-d.png",
        
        "caption": "Letting Go",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "kylo": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "rise_01",
    "category": "THE WAY YOU RISE",
    "type": "scenario",
    "image": "",
    "text": "You are at the bottom. You know you have to climb. What is the first step actually like?",
    "answers": [
      {
        "text": "Small. Just one move. I do not look up at the whole staircase — only the step in front of me.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "obiwan": 2,
          "yoda": 1
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "green": 1
        }
      },
      {
        "text": "Loud. I tell someone I am starting. Saying it out loud makes it real.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "han": 1,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Sharp. I make a decision and move. Thinking too long is when I freeze.",
        "scores": {
          "han": 3,
          "poe": 3,
          "kylo": 2,
          "vader": 2
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      },
      {
        "text": "Quiet. I begin without announcing. The work speaks when it is done.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "mando": 2,
          "obiwan": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "rise_02",
    "category": "THE WAY YOU RISE",
    "type": "personality",
    "image": null,
    "text": "How do you actually grow past who you were?",
    "answers": [
      {
        "text": "Through teachers. The right person finds me at the right time.",
        "scores": {
          "luke": 3,
          "obiwan": 3,
          "finn": 3,
          "kylo": 2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "Through discipline. Repetition. Daily practice. Becoming what I rehearse.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "vader": 2,
          "palpatine": 2
        },
        "saber": {
          "yellow": 3,
          "blue": 1
        }
      },
      {
        "text": "Through pain. The old version dies and a new one is forced into the world.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "luke": 2,
          "finn": 2
        },
        "saber": {
          "purple": 3,
          "red": 1,
          "blue": 1
        }
      },
      {
        "text": "Through love. Someone loves the next version of me into existence.",
        "scores": {
          "mando": 3,
          "luke": 3,
          "finn": 3,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "rise_03",
    "category": "THE WAY YOU RISE",
    "type": "personality",
    "image": null,
    "text": "What is the gap between the version of you that exists now and the version you are becoming?",
    "answers": [
      {
        "text": "Small. I am mostly already there. The work is fine-tuning.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mace": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Wide. The future me would barely recognize the current me.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "kylo": 3,
          "han": 1
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "A skill. There is one specific thing I do not have yet. Once I do, I am there.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "poe": 2,
          "palpatine": 2
        },
        "saber": {
          "yellow": 3,
          "blue": 1,
          "white": 1
        }
      },
      {
        "text": "I am not sure. Maybe I am already the future me and I have not noticed yet.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "obiwan": 1
        },
        "saber": {
          "green": 3,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "rise_05",
    "category": "THE WAY YOU RISE",
    "type": "personality",
    "image": null,
    "text": "When you have grown past someone — a friend, a mentor, a version of your life — what do you do?",
    "answers": [
      {
        "text": "I leave gently. With gratitude. Without pretending we are still where we were.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 2,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I try to bring them with me. Even if they cannot come the whole way.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "han": 2,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I get sad. Growing is loss too. I have to grieve the version of life I am leaving.",
        "scores": {
          "obiwan": 3,
          "kylo": 3,
          "luke": 2,
          "vader": 2
        },
        "saber": {
          "blue": 2,
          "purple": 2
        }
      },
      {
        "text": "I do not look back. The new version of me would slow down if I did.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "han": 2,
          "palpatine": 2,
          "luke": -1
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "rise_06",
    "category": "THE WAY YOU RISE",
    "type": "personality",
    "image": null,
    "text": "What is your relationship with patience?",
    "answers": [
      {
        "text": "I have learned it. Slowly. It does not come naturally.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "mando": 2,
          "luke": 2
        },
        "saber": {
          "blue": 2,
          "purple": 1,
          "yellow": 1
        }
      },
      {
        "text": "It is the most important thing I have. The Force teaches it first.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "grogu": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I struggle with it. I want it now. I want it ten years ago.",
        "scores": {
          "han": 3,
          "poe": 3,
          "kylo": 3,
          "anakin": 1,
          "yoda": -2
        },
        "saber": {
          "white": 2,
          "red": 2
        }
      },
      {
        "text": "I am patient for the right thing. Not patient with the wrong thing.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "vader": 2,
          "palpatine": 2
        },
        "saber": {
          "yellow": 3,
          "blue": 1,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "rise_07",
    "category": "THE WAY YOU RISE",
    "type": "personality",
    "image": null,
    "text": "What kind of teacher do you need to grow?",
    "answers": [
      {
        "text": "Someone who pushes me. Hard. They see what I am hiding from.",
        "scores": {
          "mace": 3,
          "vader": 3,
          "mando": 2,
          "kylo": 2
        },
        "saber": {
          "yellow": 2,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Someone who waits for me. Patient enough that I can mess up without breaking.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Someone who walked it first. Their stories make my impossible feel possible.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "han": 1
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I do not need a teacher. I figure it out by living.",
        "scores": {
          "boba": 3,
          "han": 3,
          "palpatine": 2,
          "kylo": 1,
          "finn": -1
        },
        "saber": {
          "white": 3,
          "red": 1,
          "blue": -1
        }
      }
    ]
  },
  {
    "id": "rise_09",
    "category": "THE WAY YOU RISE",
    "type": "scenario",
    "image": "",
    "text": "You realize something you used to need, you do not need anymore. What do you do with it?",
    "answers": [
      {
        "text": "I let it go with respect. It served me. Now I am bigger than it.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I give it to someone who still needs it. The wisdom passes on.",
        "scores": {
          "mace": 3,
          "obiwan": 3,
          "mando": 3,
          "luke": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "yellow": 1,
          "purple": 1
        }
      },
      {
        "text": "I keep it close, just in case. I might need that version of me again someday.",
        "scores": {
          "boba": 3,
          "mando": 2,
          "vader": 2,
          "palpatine": 2,
          "luke": -1
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "text": "I burn it. Symbolic or actual. The old me does not get to come back.",
        "scores": {
          "kylo": 3,
          "vader": 2,
          "maul": 2,
          "han": 1,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "purple": 1,
          "green": -2
        }
      }
    ]
  },
  {
    "id": "rise_10",
    "category": "THE WAY YOU RISE",
    "type": "personality",
    "image": null,
    "text": "How do you know when you are ready for the next level?",
    "answers": [
      {
        "text": "My body tells me. Restless. The current life feels too small around me.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "My old fears are gone. Or smaller. The thing that scared me is now a Tuesday.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "Someone calls me up. They see what I cannot see in myself.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "kylo": 2,
          "obiwan": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "I am tired of where I am. The discomfort of staying gets bigger than the fear of going.",
        "scores": {
          "han": 3,
          "finn": 3,
          "poe": 2,
          "kylo": 2
        },
        "saber": {
          "white": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "rise_11",
    "category": "THE WAY YOU RISE",
    "type": "personality",
    "image": null,
    "text": "What is the gift that comes with growing past your old self?",
    "answers": [
      {
        "text": "Compassion. For everyone still standing where I used to stand.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "quigon": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Skill. I can do things now I could not do before. The work shows.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "vader": 2,
          "palpatine": 2
        },
        "saber": {
          "yellow": 3,
          "blue": 1
        }
      },
      {
        "text": "Freedom. I am not trapped in the patterns I used to be trapped in.",
        "scores": {
          "han": 3,
          "finn": 3,
          "poe": 2,
          "luke": 2,
          "palpatine": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "A clearer voice. I know what I think now. The doubt is quieter.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "obiwan": 2,
          "vader": 2
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "rise_12",
    "category": "THE WAY YOU RISE",
    "type": "personality",
    "image": null,
    "text": "What kind of failure stops your rising?",
    "answers": [
      {
        "text": "Failure in front of people I respect. The shame is heavier than the failure itself.",
        "scores": {
          "mace": 3,
          "kylo": 3,
          "vader": 2,
          "finn": 2
        },
        "saber": {
          "purple": 2,
          "red": 1,
          "blue": 1
        }
      },
      {
        "text": "Failure that hurts someone else. I can fail myself. I cannot fail people I love.",
        "scores": {
          "mando": 3,
          "obiwan": 3,
          "luke": 2,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Failure that confirms an old fear. I do not want it to be true that I am that.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "finn": 2,
          "luke": 1
        },
        "saber": {
          "purple": 3,
          "red": 1
        }
      },
      {
        "text": "None really stop me for long. I have learned that failure is information.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "han": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "rise_14",
    "category": "THE WAY YOU RISE",
    "type": "personality",
    "image": null,
    "text": "Someone you love has stopped trying to grow. What do you do?",
    "answers": [
      {
        "text": "I love them anyway. Growing is not the price of love.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "mando": 2,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I tell them. Once. Honestly. Then I let them decide what to do.",
        "scores": {
          "mace": 3,
          "obiwan": 3,
          "luke": 2,
          "finn": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "I keep growing. Slow. Visible. Sometimes that pulls them along.",
        "scores": {
          "luke": 3,
          "mando": 3,
          "finn": 2,
          "han": 1
        },
        "saber": {
          "blue": 2,
          "white": 1,
          "purple": 1
        }
      },
      {
        "text": "I get frustrated. They were supposed to be moving with me.",
        "scores": {
          "kylo": 3,
          "han": 2,
          "mace": 2,
          "palpatine": 1,
          "yoda": -1
        },
        "saber": {
          "red": 2,
          "white": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "rise_15",
    "category": "THE WAY YOU RISE",
    "type": "personality",
    "image": null,
    "text": "What is the difference between rising and just escaping?",
    "answers": [
      {
        "text": "Rising changes you. Escaping just changes your address.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mace": 3,
          "quigon": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Rising means you become more useful to others. Escape only helps you.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "I am not sure they are different. Both can save you.",
        "scores": {
          "han": 3,
          "boba": 3,
          "finn": 2,
          "palpatine": 1,
          "mace": -1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      },
      {
        "text": "Rising is voluntary. Escape is what you do when staying is impossible.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "luke": 2,
          "han": 1
        },
        "saber": {
          "purple": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "rise_16",
    "category": "THE WAY YOU RISE",
    "type": "scenario",
    "image": "",
    "text": "You finally reach a level you have been working toward for years. The first feeling — what is it?",
    "answers": [
      {
        "text": "Quiet. Not loud joy. A still kind of arrival.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Gratitude. For everyone who was part of this. I would not be here without them.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Hunger. What is the next level? I want to know.",
        "scores": {
          "palpatine": 3,
          "kylo": 3,
          "mace": 2,
          "vader": 2
        },
        "saber": {
          "red": 2,
          "yellow": 2,
          "purple": 1
        }
      },
      {
        "text": "A little disbelief. I am not sure I deserve to be here yet.",
        "scores": {
          "finn": 3,
          "luke": 3,
          "kylo": 2,
          "han": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "rise_17",
    "category": "THE WAY YOU RISE",
    "type": "personality",
    "image": null,
    "text": "What lifts you when you cannot lift yourself?",
    "answers": [
      {
        "text": "Someone reminding me of who I am at my best.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 3,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "A teaching I have heard before. The words come back when I need them.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Music. Movement. Something that catches my body before my mind catches up.",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "chewie": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "My own anger. At my situation. Sometimes that is what lifts me.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "maul": 2,
          "mace": 1,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "rise_18",
    "category": "THE WAY YOU RISE",
    "type": "personality",
    "image": null,
    "text": "You see someone rising who used to be where you were. What do you actually feel?",
    "answers": [
      {
        "text": "Pride. Like I helped get them there even if I did not.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Hope. If they did it, the path is real.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "han": 1
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "A little jealous. I have to be honest about that part.",
        "scores": {
          "kylo": 3,
          "han": 3,
          "vader": 2,
          "mace": 1
        },
        "saber": {
          "red": 1,
          "purple": 2,
          "white": 1
        }
      },
      {
        "text": "Recognition. Like seeing a younger me. I want to give them what I did not have.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "mando": 3,
          "luke": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "rise_19",
    "category": "THE WAY YOU RISE",
    "type": "personality",
    "image": null,
    "text": "Is there a part of your past you would refuse to leave behind, even to rise?",
    "answers": [
      {
        "text": "The people. Every version of me belongs to the people who loved that version.",
        "scores": {
          "mando": 3,
          "luke": 3,
          "finn": 3,
          "han": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "The wounds. They are part of who I am. Erasing them would erase me.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "mace": 2,
          "obiwan": 1
        },
        "saber": {
          "red": 1,
          "purple": 2,
          "blue": 1
        }
      },
      {
        "text": "The lessons. Hard won. I am not letting go of what they cost.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mace": 2,
          "mando": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "No. The whole point of rising is to leave the lower self behind.",
        "scores": {
          "palpatine": 3,
          "kylo": 2,
          "vader": 1,
          "boba": 1,
          "luke": -2,
          "finn": -2
        },
        "saber": {
          "red": 3,
          "yellow": 1,
          "black": 1
        }
      }
    ]
  },
  {
    "id": "rise_20",
    "category": "THE WAY YOU RISE",
    "type": "personality",
    "image": null,
    "text": "How do you handle the slow part of rising — when nothing visible is happening yet?",
    "answers": [
      {
        "text": "I trust the work. Even when I cannot see it, the foundation is forming.",
        "scores": {
          "yoda": 3,
          "mace": 3,
          "mando": 3,
          "obiwan": 2
        },
        "saber": {
          "yellow": 2,
          "green": 2,
          "blue": 1
        }
      },
      {
        "text": "I get restless. I have to remind myself that slow is not the same as stopped.",
        "scores": {
          "han": 3,
          "poe": 3,
          "kylo": 2,
          "finn": 1,
          "yoda": -1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      },
      {
        "text": "I find joy in the small. Tiny signs the work is real keep me going.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "grogu": 2,
          "quigon": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I doubt. A lot. I think about quitting. Then I do not.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 2,
          "mace": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "rise_21",
    "category": "THE WAY YOU RISE",
    "type": "personality",
    "image": null,
    "text": "When you rise, what gets harder, not easier?",
    "answers": [
      {
        "text": "Being alone. Few people are at the level I am reaching. The view gets thinner up here.",
        "scores": {
          "yoda": 3,
          "vader": 3,
          "palpatine": 2,
          "mace": 2
        },
        "saber": {
          "green": 2,
          "red": 1,
          "yellow": 1
        }
      },
      {
        "text": "Choosing who to bring with me. Some old friends fit. Some do not. Saying that is hard.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "luke": 2,
          "han": 2
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "yellow": 1
        }
      },
      {
        "text": "Trusting that I deserve it. The voice that says I am a fraud gets louder, not quieter.",
        "scores": {
          "finn": 3,
          "kylo": 3,
          "luke": 2,
          "mando": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "The cost. Each rise has a price. I see it more clearly the higher I go.",
        "scores": {
          "vader": 3,
          "palpatine": 3,
          "kylo": 2,
          "obiwan": 2
        },
        "saber": {
          "purple": 2,
          "red": 2,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "rise_22",
    "category": "THE WAY YOU RISE",
    "type": "personality",
    "image": null,
    "text": "What does rising look like in someone else that you admire?",
    "answers": [
      {
        "text": "Quiet competence. They got better and barely mentioned it.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "obiwan": 2,
          "yoda": 2
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "white": 1
        }
      },
      {
        "text": "Generosity. The higher they got, the more they shared.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Authority. Not arrogance — earned weight. People listen when they speak.",
        "scores": {
          "mace": 3,
          "palpatine": 2,
          "vader": 2,
          "mando": 1
        },
        "saber": {
          "yellow": 3,
          "blue": 1,
          "red": 1
        }
      },
      {
        "text": "Freedom. They stopped performing. They became fully themselves.",
        "scores": {
          "luke": 3,
          "han": 3,
          "yoda": 2,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "rise_23",
    "category": "THE WAY YOU RISE",
    "type": "personality",
    "image": null,
    "text": "What did your earliest self get right that you sometimes forget?",
    "answers": [
      {
        "text": "Wonder. Things were new. I noticed everything. I want that back.",
        "scores": {
          "luke": 3,
          "quigon": 3,
          "grogu": 3,
          "yoda": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "Honesty. I had not learned to hide yet. I just said what was true.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "grogu": 3,
          "han": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Trust. I gave it freely. Now I make people earn it. Both have a cost.",
        "scores": {
          "kylo": 3,
          "luke": 3,
          "finn": 2,
          "mando": 1
        },
        "saber": {
          "blue": 2,
          "purple": 2
        }
      },
      {
        "text": "Courage. I tried things without knowing if I could. I had not learned to be scared of failure.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 3,
          "han": 2,
          "yoda": 1
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "rise_24",
    "category": "THE WAY YOU RISE",
    "type": "personality",
    "image": null,
    "text": "When you imagine your strongest self — fully risen — who is that person?",
    "answers": [
      {
        "text": "Calm. Whatever happens, I am steady. Inner storm does not show up on the outside.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mace": 3,
          "mando": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "yellow": 1
        }
      },
      {
        "text": "Useful. People come to me with hard things. I have something to give.",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "finn": 3,
          "luke": 2
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "Free. I am not afraid of much. I move toward what calls me.",
        "scores": {
          "han": 3,
          "luke": 3,
          "poe": 2,
          "kylo": 2,
          "finn": 1
        },
        "saber": {
          "blue": 2,
          "white": 2,
          "purple": 1
        }
      },
      {
        "text": "Powerful. Quietly. The kind that does not need to prove itself.",
        "scores": {
          "yoda": 3,
          "vader": 3,
          "palpatine": 3,
          "mace": 2
        },
        "saber": {
          "green": 2,
          "red": 1,
          "yellow": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "rise_04",
    "category": "THE WAY YOU RISE",
    "type": "image-answer",
    "text": "Pick what your rise looks like.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic space-opera illustration in the style of vintage 1970s/1980s sci-fi film concept art. Hard practical lighting with long shadows. Painterly storybook execution with soft cel-shading. NOT modern Marvel CGI. NOT plastic chrome. NOT superhero aesthetic. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left) — OUTER RIM aesthetic, warm dusty earth tones, tan and ochre: A weathered figure in worn brown robes climbing a long stone staircase carved into a desert cliff, twin suns rising above, dust catching warm light, no face visible, atmosphere of pilgrim's ascent.\n\nQUADRANT 2 (top right) — CORE WORLDS aesthetic, polished marble and cool tones, electric blue and brass: A figure in elegant ceremonial robes walking up a wide grand marble staircase between towering pillars, blue-white light from above, geometric precision, no face visible, atmosphere of being elevated into power.\n\nQUADRANT 3 (bottom left) — OUTER RIM aesthetic, weathered, dusty, lived-in: A figure climbing up the rocky inside of a deep canyon at dawn, hands and feet on ancient handholds, faded orange light from above, no face visible, atmosphere of working their way up by sheer will.\n\nQUADRANT 4 (bottom right) — CORE WORLDS aesthetic, refined, regal, powerful: A figure standing in a cathedral-like ancient temple of curved arches and beams of light from above, single rays piercing the architecture, no face visible, atmosphere of ascending toward something sacred and vast.",
    "answers": [
      {
        "image": "./assets/quiz/q-rise_04-a.png",
        
        "caption": "The Stone Staircase",
        "scores": {
          "yoda": 3,
          "mando": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "green": 2,
          "blue": 2
        }
      },
      {
        "image": "./assets/quiz/q-rise_04-b.png",
        
        "caption": "The Marble Steps",
        "scores": {
          "palpatine": 3,
          "mace": 2,
          "vader": 2,
          "kylo": 2
        },
        "saber": {
          "yellow": 3,
          "purple": 1,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-rise_04-c.png",
        
        "caption": "Climbing the Canyon",
        "scores": {
          "han": 3,
          "finn": 3,
          "poe": 2,
          "boba": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-rise_04-d.png",
        
        "caption": "The Sacred Temple",
        "scores": {
          "luke": 3,
          "obiwan": 3,
          "quigon": 3,
          "yoda": 2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "rise_08",
    "category": "THE WAY YOU RISE",
    "type": "image-answer",
    "text": "Pick what fuels your rise.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic symbolic illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic space-opera illustration in the style of vintage 1970s/1980s sci-fi film concept art. Hard practical lighting with long shadows. Painterly storybook execution with soft cel-shading. NOT modern Marvel CGI. NOT plastic chrome. NOT superhero aesthetic. NO figures with faces visible. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left) — OUTER RIM aesthetic, warm earth tones, lived-in: A weathered photo or holographic image of a loved one held in a worn gloved hand, soft warm tan lamp light catching the image, dust in the air, atmosphere of memory as fuel.\n\nQUADRANT 2 (top right) — CORE WORLDS aesthetic, polished, regal, crimson and brass: An ornate gleaming dark crown resting on a polished obsidian pedestal in a vast chamber, dramatic spot lighting from above, atmosphere of ambition as fuel.\n\nQUADRANT 3 (bottom left) — OUTER RIM aesthetic, dusty, practical: A simple worn workbench with hands placed on its surface, half-finished work in front of them, golden afternoon light through a window, atmosphere of daily discipline as fuel.\n\nQUADRANT 4 (bottom right) — JEDI aesthetic, sacred and serene, soft green-blue tones: A small glowing crystal sitting cupped in two open hands, soft cool light radiating from it, atmosphere of inner knowing as fuel.",
    "answers": [
      {
        "image": "./assets/quiz/q-rise_08-a.png",
        
        "caption": "A Loved One Remembered",
        "scores": {
          "mando": 3,
          "vader": 3,
          "luke": 2,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-rise_08-b.png",
        
        "caption": "A Crown",
        "scores": {
          "palpatine": 3,
          "kylo": 3,
          "mace": 2,
          "vader": 1
        },
        "saber": {
          "red": 3,
          "yellow": 1
        }
      },
      {
        "image": "./assets/quiz/q-rise_08-c.png",
        
        "caption": "The Daily Work",
        "scores": {
          "mando": 3,
          "boba": 3,
          "mace": 2,
          "han": 2
        },
        "saber": {
          "white": 2,
          "yellow": 2
        }
      },
      {
        "image": "./assets/quiz/q-rise_08-d.png",
        
        "caption": "A Light Within",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "rise_13",
    "category": "THE WAY YOU RISE",
    "type": "image-answer",
    "text": "Pick what arriving at the top looks like.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic atmospheric illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic space-opera illustration in the style of vintage 1970s/1980s sci-fi film concept art. Hard practical lighting with long shadows. Painterly storybook execution with soft cel-shading. NOT modern Marvel CGI. NOT plastic chrome. NOT superhero aesthetic. Figures may appear as silhouettes but NO clear faces. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left) — OUTER RIM aesthetic, warm sunset, weathered: A figure standing alone at the edge of a tall desert cliff at sunset, twin suns on the horizon, weathered cloak blowing in wind, no face visible, atmosphere of solitary arrival after long journey.\n\nQUADRANT 2 (top right) — CORE WORLDS aesthetic, regal, powerful: A figure standing on a high marble balcony overlooking a vast city of towers and starships at dawn, hands resting on the balustrade, polished refined architecture, no face visible, atmosphere of dominion earned.\n\nQUADRANT 3 (bottom left) — OUTER RIM aesthetic, communal, warm: A group of figures gathered around their leader on a desert canyon ridge, lifting them up in celebration, warm orange evening light, no clear faces, atmosphere of being raised up by others.\n\nQUADRANT 4 (bottom right) — JEDI aesthetic, sacred, transcendent: A figure standing on an ancient stone platform high above misty primal forests, arms slightly extended, soft golden light pouring down from above, atmosphere of arrival through inner mastery.",
    "answers": [
      {
        "image": "./assets/quiz/q-rise_13-a.png",
        
        "caption": "A Solitary Cliff",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "luke": 2
        },
        "saber": {
          "white": 2,
          "blue": 2
        }
      },
      {
        "image": "./assets/quiz/q-rise_13-b.png",
        
        "caption": "A Balcony Above the City",
        "scores": {
          "palpatine": 3,
          "kylo": 3,
          "mace": 2,
          "vader": 2
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-rise_13-c.png",
        
        "caption": "Lifted Up by Others",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 3,
          "han": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-rise_13-d.png",
        
        "caption": "A Sacred Platform",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "rise_25",
    "category": "THE WAY YOU RISE",
    "type": "image-answer",
    "text": "Pick the moment that feels most like becoming who you were meant to be.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic emotional illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic space-opera illustration in the style of vintage 1970s/1980s sci-fi film concept art. Hard practical lighting with long shadows. Painterly storybook execution with soft cel-shading. NOT modern Marvel CGI. NOT plastic chrome. NOT superhero aesthetic. Figures may appear as silhouettes but NO clear faces. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left) — JEDI aesthetic, sacred, serene: A figure in simple robes kneeling in a beam of soft golden light in an ancient stone temple, head bowed in deep meditation, atmosphere of full presence and inner alignment.\n\nQUADRANT 2 (top right) — CORE WORLDS aesthetic, regal, weighty: A figure standing tall and centered in front of a tall window overlooking a great fleet of starships, hands clasped behind their back, ceremonial robes, atmosphere of having become someone whose word matters.\n\nQUADRANT 3 (bottom left) — OUTER RIM aesthetic, warm, weathered: A figure putting an arm around a smaller figure on a dusty desert ridge at sunset, both watching the horizon together, atmosphere of being someone whose strength is for others.\n\nQUADRANT 4 (bottom right) — OUTER RIM aesthetic, lived-in, free: A figure leaning back against the side of their starship looking up at the stars, arms crossed, content, no destination in sight, atmosphere of being fully oneself with nowhere to prove it.",
    "answers": [
      {
        "image": "./assets/quiz/q-rise_25-a.png",
        
        "caption": "Aligned in Light",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "quigon": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-rise_25-b.png",
        
        "caption": "A Word That Matters",
        "scores": {
          "mace": 3,
          "palpatine": 2,
          "vader": 2,
          "mando": 2
        },
        "saber": {
          "yellow": 3,
          "purple": 1,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-rise_25-c.png",
        
        "caption": "Strength for Others",
        "scores": {
          "mando": 3,
          "finn": 3,
          "chewie": 2,
          "obiwan": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-rise_25-d.png",
        
        "caption": "Free Under the Stars",
        "scores": {
          "han": 3,
          "boba": 3,
          "poe": 2,
          "luke": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "win_01",
    "category": "THE WAY YOU WIN",
    "type": "scenario",
    "image": "",
    "text": "You just won something you have been working toward for a long time. What is your first move?",
    "answers": [
      {
        "text": "Stop. Just stand still and feel it. Big moments deserve to be felt fully.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Tell someone. Loudly. The win is half the size if I cannot share it.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 3,
          "han": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Plan the next thing. The win is a stepping stone. I do not stop on stones.",
        "scores": {
          "palpatine": 3,
          "kylo": 3,
          "mace": 2,
          "vader": 2,
          "yoda": -2
        },
        "saber": {
          "red": 2,
          "yellow": 2
        }
      },
      {
        "text": "Quiet. Almost embarrassed. I do not really know what to do with winning.",
        "scores": {
          "finn": 3,
          "kylo": 3,
          "luke": 2,
          "grogu": 1
        },
        "saber": {
          "blue": 2,
          "purple": 2
        }
      }
    ]
  },
  {
    "id": "win_02",
    "category": "THE WAY YOU WIN",
    "type": "personality",
    "image": null,
    "text": "What does winning actually mean to you?",
    "answers": [
      {
        "text": "Protecting someone or something. The win belongs to who I was fighting for.",
        "scores": {
          "mando": 3,
          "obiwan": 3,
          "luke": 2,
          "mace": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "Knowing I was strong enough. The win is proof of who I am.",
        "scores": {
          "mace": 3,
          "vader": 3,
          "palpatine": 2,
          "kylo": 2
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "purple": 1
        }
      },
      {
        "text": "A weight lifting. The thing I have been carrying gets to come off.",
        "scores": {
          "finn": 3,
          "kylo": 3,
          "han": 2,
          "mando": 2
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "white": 1
        }
      },
      {
        "text": "I do not think about it that much. I just keep doing the work. Some days the work wins.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "win_03",
    "category": "THE WAY YOU WIN",
    "type": "personality",
    "image": null,
    "text": "When you win against someone, what do you actually feel about them?",
    "answers": [
      {
        "text": "Respect. They pushed me to be better. I am grateful for the fight.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 2,
          "mace": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Compassion. They lost. I know what losing feels like.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 3,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "Satisfaction. They got what they deserved. I do not pretend otherwise.",
        "scores": {
          "mace": 3,
          "vader": 3,
          "kylo": 2,
          "boba": 2
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "purple": 1
        }
      },
      {
        "text": "Nothing much. The fight was the point, not the person.",
        "scores": {
          "han": 3,
          "boba": 3,
          "palpatine": 2,
          "vader": 1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "win_05",
    "category": "THE WAY YOU WIN",
    "type": "personality",
    "image": null,
    "text": "How do you celebrate?",
    "answers": [
      {
        "text": "Loud. Big. With everyone. Celebration shared is celebration multiplied.",
        "scores": {
          "han": 3,
          "poe": 3,
          "chewie": 3,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "Quiet. Alone. The win is mine. The celebration is mine too.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "palpatine": 1
        },
        "saber": {
          "white": 2,
          "red": 1,
          "yellow": 1
        }
      },
      {
        "text": "Ceremonial. Marked. I want the moment to have weight.",
        "scores": {
          "mace": 3,
          "obiwan": 3,
          "palpatine": 2,
          "luke": 2
        },
        "saber": {
          "yellow": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I barely do. I am already onto the next thing.",
        "scores": {
          "yoda": 3,
          "kylo": 3,
          "palpatine": 2,
          "vader": 2,
          "han": -1
        },
        "saber": {
          "green": 2,
          "red": 1,
          "white": -1
        }
      }
    ]
  },
  {
    "id": "win_06",
    "category": "THE WAY YOU WIN",
    "type": "personality",
    "image": null,
    "text": "What worries you about winning?",
    "answers": [
      {
        "text": "That I will become someone I do not like. Winning changes people in ways they do not see.",
        "scores": {
          "luke": 3,
          "obiwan": 3,
          "yoda": 2,
          "mando": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "That the people I lost along the way will not come back, even after I win.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "obiwan": 2,
          "mando": 1
        },
        "saber": {
          "red": 1,
          "purple": 3
        }
      },
      {
        "text": "That I will start expecting to win. And lose the hunger that got me here.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "vader": 2,
          "palpatine": 2
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      },
      {
        "text": "Honestly, nothing. I worked for this. I am going to enjoy it.",
        "scores": {
          "han": 3,
          "poe": 2,
          "palpatine": 2,
          "boba": 2,
          "luke": -1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "win_07",
    "category": "THE WAY YOU WIN",
    "type": "personality",
    "image": null,
    "text": "When you watch someone else win something they have wanted badly, what do you do?",
    "answers": [
      {
        "text": "I cheer. Loudly. Their win does not take anything from me.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "chewie": 3,
          "han": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I am quietly happy. The right ones win is its own kind of justice.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mando": 2,
          "mace": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I study them. How did they do it? What can I learn?",
        "scores": {
          "palpatine": 3,
          "mace": 2,
          "boba": 2,
          "kylo": 2
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      },
      {
        "text": "I feel a complicated mix. Joy for them. Pang for me. Both at once.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 2,
          "vader": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "win_09",
    "category": "THE WAY YOU WIN",
    "type": "scenario",
    "image": "",
    "text": "Someone hands you the symbol of your victory — a medal, a title, a trophy. What do you actually do with it?",
    "answers": [
      {
        "text": "I accept it gracefully. Then I give the credit to someone else who deserves it more.",
        "scores": {
          "luke": 3,
          "mando": 3,
          "obiwan": 2,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I hold it for a moment. Then I put it somewhere I do not have to see it every day.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "vader": 2,
          "boba": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "white": 1
        }
      },
      {
        "text": "I display it. Where I can see it. Where others can see it. Earned things deserve to be seen.",
        "scores": {
          "mace": 3,
          "palpatine": 3,
          "han": 2,
          "kylo": 2
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      },
      {
        "text": "I give it to someone I love. The win was always theirs too.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "luke": 2,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "win_10",
    "category": "THE WAY YOU WIN",
    "type": "personality",
    "image": null,
    "text": "What kind of winning means the most to you?",
    "answers": [
      {
        "text": "Quiet wins. The ones nobody else saw. Just me and the thing I overcame.",
        "scores": {
          "mando": 3,
          "yoda": 3,
          "boba": 2,
          "vader": 2
        },
        "saber": {
          "green": 2,
          "white": 2,
          "yellow": 1
        }
      },
      {
        "text": "Wins for the team. When everyone gets to celebrate together.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 3,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Wins that prove I was right. When the doubters have to admit it.",
        "scores": {
          "palpatine": 3,
          "kylo": 3,
          "han": 2,
          "mace": 2
        },
        "saber": {
          "red": 2,
          "yellow": 2
        }
      },
      {
        "text": "Wins that opened a door. The win itself matters less than what becomes possible after.",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "mace": 2,
          "palpatine": 2
        },
        "saber": {
          "blue": 3,
          "yellow": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "win_11",
    "category": "THE WAY YOU WIN",
    "type": "personality",
    "image": null,
    "text": "How do you handle being congratulated?",
    "answers": [
      {
        "text": "I let it in. People are being kind. I do not deflect that.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mando": 2,
          "obiwan": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I deflect. \"I had help.\" \"It was not just me.\" I cannot quite take it.",
        "scores": {
          "finn": 3,
          "luke": 3,
          "mando": 2,
          "kylo": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "I accept it. Briefly. Then I redirect attention. I am uncomfortable being the focus.",
        "scores": {
          "obiwan": 3,
          "yoda": 3,
          "mando": 3,
          "mace": 2
        },
        "saber": {
          "green": 2,
          "blue": 2
        }
      },
      {
        "text": "I enjoy it. I do not see why I should not. I earned this.",
        "scores": {
          "han": 3,
          "poe": 3,
          "palpatine": 2,
          "mace": 2
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "win_12",
    "category": "THE WAY YOU WIN",
    "type": "personality",
    "image": null,
    "text": "What is the most dangerous thing about winning?",
    "answers": [
      {
        "text": "Believing I deserved it. Some wins are luck wearing a costume.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mando": 2,
          "han": 2,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Wanting more. The first win is fine. The hunger after — that is what gets dangerous.",
        "scores": {
          "palpatine": 3,
          "kylo": 3,
          "vader": 2,
          "mace": 2
        },
        "saber": {
          "red": 3,
          "purple": 1
        }
      },
      {
        "text": "Forgetting the people who got me there. Their work is invisible once the trophy is mine.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mando": 2,
          "obiwan": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Stopping. Some people win once and never push themselves again.",
        "scores": {
          "mace": 3,
          "han": 3,
          "vader": 2,
          "palpatine": 1,
          "yoda": -1
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "win_14",
    "category": "THE WAY YOU WIN",
    "type": "personality",
    "image": null,
    "text": "You win something that costs someone else dearly. What do you do with that?",
    "answers": [
      {
        "text": "I sit with the cost. The win is not clean. I have to carry that.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "luke": 2,
          "vader": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "yellow": 1
        }
      },
      {
        "text": "I find a way to honor what they lost. Maybe not aloud. But in how I use the win.",
        "scores": {
          "mando": 3,
          "luke": 3,
          "obiwan": 2,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I accept it. Cost is part of winning. Pretending otherwise is naive.",
        "scores": {
          "palpatine": 3,
          "kylo": 3,
          "vader": 2,
          "boba": 2,
          "luke": -2
        },
        "saber": {
          "red": 3,
          "yellow": 1
        }
      },
      {
        "text": "I refuse the win. Some victories are too expensive.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 2,
          "obiwan": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "win_15",
    "category": "THE WAY YOU WIN",
    "type": "personality",
    "image": null,
    "text": "What does a real, lasting win look like for you?",
    "answers": [
      {
        "text": "Someone I love gets to live a better life because of it.",
        "scores": {
          "mando": 3,
          "luke": 3,
          "obiwan": 3,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I become someone whose word weighs more than it did before.",
        "scores": {
          "mace": 3,
          "palpatine": 2,
          "vader": 2,
          "mando": 2
        },
        "saber": {
          "yellow": 3,
          "blue": 1
        }
      },
      {
        "text": "A skill I now have forever. Something I built that lasts.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "palpatine": 2,
          "mace": 2
        },
        "saber": {
          "white": 2,
          "yellow": 2
        }
      },
      {
        "text": "A version of myself I respect. The win was internal.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "win_16",
    "category": "THE WAY YOU WIN",
    "type": "scenario",
    "image": "",
    "text": "The cheering stops. The crowd goes home. You are alone with your win. What is going through you?",
    "answers": [
      {
        "text": "Relief. The carrying is over. I had been holding my breath without knowing.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "finn": 2,
          "luke": 2
        },
        "saber": {
          "blue": 2,
          "purple": 1,
          "white": 1
        }
      },
      {
        "text": "Strange quiet. The crowd was the loud part. The win itself is quieter than I expected.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Already hunting. What is next? Where do I go from here?",
        "scores": {
          "palpatine": 3,
          "kylo": 3,
          "mace": 2,
          "vader": 1
        },
        "saber": {
          "red": 2,
          "yellow": 2
        }
      },
      {
        "text": "Gratitude. For everyone who walked beside me. The win is theirs as much as mine.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mando": 2,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "win_17",
    "category": "THE WAY YOU WIN",
    "type": "personality",
    "image": null,
    "text": "What kind of person do you want to be when you win?",
    "answers": [
      {
        "text": "Generous. The win was big — I want to be bigger than the win.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "quigon": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Steady. The same person I was before. The win does not get to change me.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "vader": 2,
          "boba": 2
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "blue": 1
        }
      },
      {
        "text": "Joyful. Visible. People should see what winning looks like.",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "luke": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "Powerful. Earned. Whoever doubted me now sees what I am.",
        "scores": {
          "palpatine": 3,
          "kylo": 3,
          "vader": 2,
          "mace": 1
        },
        "saber": {
          "red": 3,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "win_18",
    "category": "THE WAY YOU WIN",
    "type": "personality",
    "image": null,
    "text": "Someone you beat fairly comes back for a rematch. What do you do?",
    "answers": [
      {
        "text": "I take it. They earned the chance. I will face them again.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "han": 2,
          "luke": 2
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "white": 1
        }
      },
      {
        "text": "I help them get ready. I want the rematch to be real, not a repeat.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "yoda": 2,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "I decline. The first match was the answer. Repeating it cheapens both.",
        "scores": {
          "yoda": 3,
          "vader": 3,
          "obiwan": 2,
          "boba": 2
        },
        "saber": {
          "green": 2,
          "red": 1,
          "blue": 1
        }
      },
      {
        "text": "I take it harder. The second time, I make sure they remember.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "maul": 2,
          "palpatine": 1,
          "yoda": -2
        },
        "saber": {
          "red": 3,
          "purple": 1,
          "green": -2
        }
      }
    ]
  },
  {
    "id": "win_19",
    "category": "THE WAY YOU WIN",
    "type": "personality",
    "image": null,
    "text": "Have you ever won something and felt empty afterward?",
    "answers": [
      {
        "text": "Yes. More than once. The chasing was more alive than the catching.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "mace": 2,
          "palpatine": 2
        },
        "saber": {
          "red": 1,
          "purple": 3
        }
      },
      {
        "text": "Yes. But it taught me to want different things next time.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "finn": 2,
          "quigon": 1
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "No. I win the right things. The full feeling lasts.",
        "scores": {
          "yoda": 3,
          "mando": 3,
          "han": 2,
          "chewie": 1
        },
        "saber": {
          "green": 2,
          "white": 2,
          "blue": 1
        }
      },
      {
        "text": "I have not won enough yet to know.",
        "scores": {
          "finn": 3,
          "grogu": 2,
          "luke": 1,
          "kylo": 1
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "win_20",
    "category": "THE WAY YOU WIN",
    "type": "personality",
    "image": null,
    "text": "When you win, who do you most want to tell?",
    "answers": [
      {
        "text": "My closest person. Their reaction matters more than anyone else's.",
        "scores": {
          "mando": 3,
          "han": 3,
          "chewie": 2,
          "vader": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "The version of me from years ago who did not think this was possible.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "kylo": 2,
          "obiwan": 1
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "My teacher. The one who saw it before I could.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Everyone who doubted me. Politely. By winning.",
        "scores": {
          "palpatine": 3,
          "kylo": 3,
          "mace": 2,
          "han": 2
        },
        "saber": {
          "red": 2,
          "yellow": 2
        }
      }
    ]
  },
  {
    "id": "win_21",
    "category": "THE WAY YOU WIN",
    "type": "personality",
    "image": null,
    "text": "You win an argument with someone you love. Now what?",
    "answers": [
      {
        "text": "I let it go. The relationship is the thing. Being right is small.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mando": 3,
          "luke": 2,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I make sure they know I love them. Right after. Same breath if I can.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mando": 2,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I sit with the win awkwardly. Winning against someone I love does not feel like winning.",
        "scores": {
          "finn": 3,
          "kylo": 3,
          "luke": 2,
          "obiwan": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "I move on quickly. They will get over it.",
        "scores": {
          "han": 3,
          "palpatine": 2,
          "kylo": 2,
          "boba": 1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "win_22",
    "category": "THE WAY YOU WIN",
    "type": "personality",
    "image": null,
    "text": "How long do you let yourself enjoy a win?",
    "answers": [
      {
        "text": "Days. Sometimes weeks. Real wins deserve real time.",
        "scores": {
          "han": 3,
          "poe": 3,
          "luke": 2,
          "finn": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "A moment. Then I am back to work. The next thing is not going to do itself.",
        "scores": {
          "palpatine": 3,
          "mace": 3,
          "vader": 2,
          "kylo": 2
        },
        "saber": {
          "yellow": 2,
          "red": 1
        }
      },
      {
        "text": "As long as the people I love want to keep celebrating. Their joy keeps mine going.",
        "scores": {
          "chewie": 3,
          "finn": 3,
          "mando": 3,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "I do not really mark wins. They become Tuesdays. Some Tuesdays are better than others.",
        "scores": {
          "yoda": 3,
          "mando": 2,
          "quigon": 2,
          "boba": 2
        },
        "saber": {
          "green": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "win_23",
    "category": "THE WAY YOU WIN",
    "type": "personality",
    "image": null,
    "text": "What is your private feeling when you stand at the top?",
    "answers": [
      {
        "text": "Gratitude. Bigger than the win itself.",
        "scores": {
          "yoda": 3,
          "luke": 3,
          "obiwan": 3,
          "quigon": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "A strange loneliness. Few people understand what this view costs.",
        "scores": {
          "palpatine": 3,
          "vader": 3,
          "mace": 2,
          "kylo": 2
        },
        "saber": {
          "red": 1,
          "purple": 2,
          "yellow": 1
        }
      },
      {
        "text": "Quiet pride. The kind I do not need to announce.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "mace": 2,
          "obiwan": 2
        },
        "saber": {
          "white": 2,
          "blue": 2,
          "yellow": 1
        }
      },
      {
        "text": "A pull to keep going. I cannot rest yet. The top is just another step.",
        "scores": {
          "palpatine": 3,
          "kylo": 3,
          "mace": 2,
          "han": 1
        },
        "saber": {
          "red": 2,
          "yellow": 2
        }
      }
    ]
  },
  {
    "id": "win_24",
    "category": "THE WAY YOU WIN",
    "type": "personality",
    "image": null,
    "text": "When you win, what becomes possible that was not before?",
    "answers": [
      {
        "text": "The chance to help someone else win.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Rest. I have earned a stretch of peace.",
        "scores": {
          "han": 3,
          "mando": 3,
          "chewie": 2,
          "finn": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "A bigger fight. Wins open doors to harder things.",
        "scores": {
          "mace": 3,
          "palpatine": 3,
          "vader": 2,
          "kylo": 2
        },
        "saber": {
          "red": 1,
          "yellow": 2,
          "purple": 1
        }
      },
      {
        "text": "A new version of me. The win was the chrysalis. Now I get to find out who is on the other side.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "kylo": 2,
          "obiwan": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "win_04",
    "category": "THE WAY YOU WIN",
    "type": "image-answer",
    "text": "Pick what victory feels like to you.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic illustration in the style of vintage 1970s/1980s film concept art. Hard practical lighting with long shadows. Painterly storybook execution with soft cel-shading. NOT modern Marvel CGI. NOT plastic chrome. NOT superhero aesthetic. Figures may appear as silhouettes but NO clear faces. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left) — Warm earth tones, dusty, communal: A group of weathered figures gathered around a campfire in a desert canyon, arms raised in celebration, warm orange flames lighting their silhouettes, atmosphere of shared victory with chosen family.\n\nQUADRANT 2 (top right) — Polished, regal, brass and crimson: A figure standing alone at the top of wide marble steps in a vast classical hall, soft beams of cool light falling around them, atmosphere of authority claimed.\n\nQUADRANT 3 (bottom left) — Warm sunset, weathered, intimate: Two silhouetted figures standing close at a desert ridge at sunset, one with an arm across the other's shoulders, atmosphere of victory shared between two.\n\nQUADRANT 4 (bottom right) — Sacred, serene, soft green-blue tones: A single figure standing quietly in a beam of golden light inside an ancient stone temple, head slightly bowed, no celebration, atmosphere of inner victory.",
    "answers": [
      {
        "image": "./assets/quiz/q-win_04-a.png",
        
        "caption": "Around the Fire",
        "scores": {
          "han": 3,
          "poe": 3,
          "chewie": 3,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-win_04-b.png",
        
        "caption": "At the Top of the Hall",
        "scores": {
          "palpatine": 3,
          "mace": 3,
          "kylo": 2,
          "vader": 2
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-win_04-c.png",
        
        "caption": "Shoulder to Shoulder",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "luke": 2,
          "han": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-win_04-d.png",
        
        "caption": "In the Light",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "win_08",
    "category": "THE WAY YOU WIN",
    "type": "image-answer",
    "text": "Pick the symbol of winning that means the most to you.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic still-life illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic illustration in the style of vintage 1970s/1980s film concept art. Hard practical lighting with long shadows. Painterly storybook execution with soft cel-shading. NOT modern Marvel CGI. NOT plastic chrome. NOT superhero aesthetic. NO figures or faces visible. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left) — Polished, regal, brass and crimson: An ornate ceremonial medal of brass and crimson ribbon resting on a polished marble pedestal, dramatic spot lighting from above, atmosphere of formal recognition.\n\nQUADRANT 2 (top right) — Warm earth tones, lived-in: A simple cup of dark drink on a worn wooden table being toasted alongside other cups, mid-clink, soft warm tavern light, atmosphere of victory toasted with friends.\n\nQUADRANT 3 (bottom left) — Weathered, intimate: A small handmade trinket — a carved wooden piece, perhaps a charm — sitting in an open weathered palm, soft afternoon light, atmosphere of personal triumph carried close.\n\nQUADRANT 4 (bottom right) — Sacred, soft green tones: A glowing small object glowing softly with gentle inner light, surrounded by soft cool mist, sitting on a simple stone surface, atmosphere of a sacred meaning earned.",
    "answers": [
      {
        "image": "./assets/quiz/q-win_08-a.png",
        
        "caption": "A Ceremonial Medal",
        "scores": {
          "mace": 3,
          "palpatine": 3,
          "vader": 2,
          "obiwan": 1
        },
        "saber": {
          "yellow": 3,
          "blue": 1,
          "red": 1
        }
      },
      {
        "image": "./assets/quiz/q-win_08-b.png",
        
        "caption": "A Cup Raised With Friends",
        "scores": {
          "han": 3,
          "poe": 3,
          "chewie": 3,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-win_08-c.png",
        
        "caption": "A Small Token I Carry",
        "scores": {
          "mando": 3,
          "boba": 3,
          "luke": 2,
          "vader": 2
        },
        "saber": {
          "white": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-win_08-d.png",
        
        "caption": "A Sacred Object",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "win_13",
    "category": "THE WAY YOU WIN",
    "type": "image-answer",
    "text": "Pick what you do in the first moment of winning.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic action illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic illustration in the style of vintage 1970s/1980s film concept art. Hard practical lighting with long shadows. Painterly storybook execution with soft cel-shading. NOT modern Marvel CGI. NOT plastic chrome. NOT superhero aesthetic. Figures may appear as silhouettes but NO clear faces. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left) — Warm, joyful, communal: A silhouetted figure with arms thrown wide and head tilted back in pure joy, others around them mid-cheer, warm orange firelight illuminating the scene, atmosphere of unrestrained celebration.\n\nQUADRANT 2 (top right) — Quiet, weathered, alone: A silhouetted figure standing perfectly still at a desert ridge at sunset, head slightly bowed, no movement at all, atmosphere of stillness in victory.\n\nQUADRANT 3 (bottom left) — Polished, regal, cool tones: A silhouetted figure already turning to walk through a marble archway away from the celebration behind them, halfway to the next thing, atmosphere of moving past the win immediately.\n\nQUADRANT 4 (bottom right) — Warm, intimate, tender: A silhouetted figure embracing a smaller figure tightly, holding them close, soft warm light around the moment, atmosphere of victory shared with a loved one.",
    "answers": [
      {
        "image": "./assets/quiz/q-win_13-a.png",
        
        "caption": "Throw My Arms Wide",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 3,
          "luke": 2,
          "palpatine": -2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-win_13-b.png",
        
        "caption": "Stand Perfectly Still",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "mando": 3,
          "vader": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-win_13-c.png",
        
        "caption": "Walk Toward the Next Thing",
        "scores": {
          "palpatine": 3,
          "kylo": 3,
          "mace": 2,
          "vader": 2,
          "yoda": -1
        },
        "saber": {
          "red": 2,
          "yellow": 2
        }
      },
      {
        "image": "./assets/quiz/q-win_13-d.png",
        
        "caption": "Hold Someone Close",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "finn": 2,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "win_25",
    "category": "THE WAY YOU WIN",
    "type": "image-answer",
    "text": "Pick the kind of winning you want most.",
    "grid_prompt": "Create a 2x2 grid of 4 cinematic emotional illustrations, each in its own quadrant, separated by thin clean borders. PURE BLACK BACKGROUND throughout. Style: cinematic illustration in the style of vintage 1970s/1980s film concept art. Hard practical lighting with long shadows. Painterly storybook execution with soft cel-shading. NOT modern Marvel CGI. NOT plastic chrome. NOT superhero aesthetic. Figures may appear as silhouettes but NO clear faces. NO TEXT OR WORDS anywhere in the images. Square 1:1 overall, 1024x1024.\n\nQUADRANT 1 (top left) — Sacred, serene, green and gold: A figure kneeling in soft light in an ancient stone temple, hands open in their lap, atmosphere of inner mastery as the true win.\n\nQUADRANT 2 (top right) — Regal, powerful, brass and crimson: A figure standing tall at a high marble window overlooking a sprawling capital city at dawn, ceremonial robes draped behind them, atmosphere of authority recognized.\n\nQUADRANT 3 (bottom left) — Warm, weathered, family: A figure in worn armor standing protectively over a smaller seated figure at a campfire, soft orange firelight, atmosphere of having won so someone smaller is safe.\n\nQUADRANT 4 (bottom right) — Warm, communal, joyful: A group of figures with arms around each other at a desert ridge at sunset, all silhouetted together, atmosphere of having won together as a crew.",
    "answers": [
      {
        "image": "./assets/quiz/q-win_25-a.png",
        
        "caption": "Inner Mastery",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-win_25-b.png",
        
        "caption": "Authority Recognized",
        "scores": {
          "palpatine": 3,
          "mace": 3,
          "vader": 2,
          "kylo": 2
        },
        "saber": {
          "yellow": 3,
          "red": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-win_25-c.png",
        
        "caption": "Someone Smaller Is Safe",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "vader": 3,
          "obiwan": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-win_25-d.png",
        
        "caption": "Together as a Crew",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 3,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "fail_01",
    "category": "THE WAY YOU FAIL",
    "type": "scenario",
    "image": "",
    "text": "You just failed at something that mattered to you. The first thirty seconds — what is happening in you?",
    "answers": [
      {
        "text": "Quiet. I do not say anything yet. I want to understand what just happened.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Heat. Anger fast. I have to be careful what I do with it.",
        "scores": {
          "kylo": 3,
          "maul": 3,
          "vader": 2,
          "han": 1
        },
        "saber": {
          "red": 3,
          "purple": 1
        }
      },
      {
        "text": "A flood of why-why-why. My brain replays it before I can stop it.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "luke": 2,
          "finn": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Already moving. I am up before the dust settles. Standing still is the worst part.",
        "scores": {
          "poe": 3,
          "han": 3,
          "mace": 2,
          "mando": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "fail_02",
    "category": "THE WAY YOU FAIL",
    "type": "personality",
    "image": null,
    "text": "How do you talk to yourself when you have just failed?",
    "answers": [
      {
        "text": "Gently. Like I would talk to a friend. Same patience.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 2,
          "obiwan": 2,
          "palpatine": -2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Harshly. I do not let myself off easy. The voice is sharp.",
        "scores": {
          "mace": 3,
          "vader": 3,
          "kylo": 3,
          "mando": 2
        },
        "saber": {
          "red": 1,
          "purple": 1,
          "yellow": 2
        }
      },
      {
        "text": "Practically. What went wrong. What I missed. What I do next.",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "boba": 2,
          "mace": 2,
          "palpatine": 1
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "white": 1
        }
      },
      {
        "text": "I try not to. The voice never has anything useful to say.",
        "scores": {
          "han": 3,
          "poe": 3,
          "boba": 2,
          "mando": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "fail_03",
    "category": "THE WAY YOU FAIL",
    "type": "personality",
    "image": null,
    "text": "What does failure actually teach you?",
    "answers": [
      {
        "text": "Where the edge of my skill is. I cannot grow without knowing.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "yellow": 2,
          "blue": 2
        }
      },
      {
        "text": "Who I am under pressure. The version that shows up when things break.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "vader": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "Who is really with me. Failure clears out the people who were not.",
        "scores": {
          "mando": 3,
          "han": 3,
          "finn": 2,
          "kylo": 2,
          "palpatine": -2
        },
        "saber": {
          "white": 2,
          "blue": 2
        }
      },
      {
        "text": "Honestly, I usually just want to skip the lesson and try again.",
        "scores": {
          "poe": 3,
          "han": 3,
          "kylo": 2,
          "finn": 1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "fail_05",
    "category": "THE WAY YOU FAIL",
    "type": "personality",
    "image": null,
    "text": "How long does it take you to bounce back from a failure?",
    "answers": [
      {
        "text": "A breath. A moment. Then I am back at it. Long recovery is its own failure.",
        "scores": {
          "poe": 3,
          "han": 3,
          "mace": 2,
          "finn": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "A while. I have to sit with it. Rushing back leaves the lesson on the floor.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Different times for different failures. Some take days. Some take years.",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "mace": 2,
          "vader": 2
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "purple": 1
        }
      },
      {
        "text": "Honestly, sometimes I am still bouncing. Old failures still bother me.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "vader": 2,
          "luke": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "fail_06",
    "category": "THE WAY YOU FAIL",
    "type": "personality",
    "image": null,
    "text": "You failed in front of people whose opinion matters to you. What is the worst part?",
    "answers": [
      {
        "text": "The look on their face. The flicker before they pretend they did not see.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 2,
          "mando": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "Not the failure itself — the way it changes how they think of me.",
        "scores": {
          "mace": 3,
          "vader": 3,
          "kylo": 2,
          "palpatine": 1
        },
        "saber": {
          "yellow": 2,
          "purple": 1,
          "red": 1
        }
      },
      {
        "text": "Knowing they will be patient with me. That is somehow harder than judgment.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "kylo": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Nothing, actually. My respect for them comes from things they cannot take away.",
        "scores": {
          "yoda": 3,
          "han": 3,
          "obiwan": 2,
          "mando": 2,
          "palpatine": -2
        },
        "saber": {
          "green": 2,
          "white": 2,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "fail_07",
    "category": "THE WAY YOU FAIL",
    "type": "personality",
    "image": null,
    "text": "What is the worst thing failure can do to a person?",
    "answers": [
      {
        "text": "Make them stop trying. Some failures kill the next attempt before it starts.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mace": 3,
          "mando": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "yellow": 1
        }
      },
      {
        "text": "Make them harder than they were. Some people armor up after failing and stay armored.",
        "scores": {
          "obiwan": 3,
          "vader": 3,
          "mando": 3,
          "luke": 2
        },
        "saber": {
          "blue": 2,
          "purple": 1,
          "white": 1
        }
      },
      {
        "text": "Make them blame everyone else. Failure looks for somewhere to land. Sometimes it lands wrong.",
        "scores": {
          "kylo": 3,
          "mace": 3,
          "vader": 2,
          "palpatine": 2
        },
        "saber": {
          "red": 2,
          "purple": 1,
          "yellow": 1
        }
      },
      {
        "text": "Convince them they were stupid to try at all.",
        "scores": {
          "finn": 3,
          "kylo": 3,
          "han": 2,
          "luke": 1
        },
        "saber": {
          "purple": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "fail_09",
    "category": "THE WAY YOU FAIL",
    "type": "scenario",
    "image": "",
    "text": "You worked toward something for years. It did not work. You are standing in the aftermath. What is the first decision?",
    "answers": [
      {
        "text": "Whether the dream still fits. Maybe what I wanted was wrong, not the work.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 2,
          "kylo": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "How to try again. Differently. The dream stays. The plan adapts.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 3,
          "mace": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "Who I want with me for the next round. Some people are not coming.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "han": 2,
          "vader": 2,
          "palpatine": -3
        },
        "saber": {
          "white": 2,
          "blue": 1,
          "yellow": 1
        }
      },
      {
        "text": "Nothing. I sit. The decision will arrive. Forcing it now would be wrong.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "grogu": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "fail_10",
    "category": "THE WAY YOU FAIL",
    "type": "personality",
    "image": null,
    "text": "What is the difference between a failure that teaches you and one that breaks you?",
    "answers": [
      {
        "text": "Someone who stays. The ones that teach are the ones I was not alone in.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mando": 3,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "My response. Failures do not break you. Your reaction to them does.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mace": 3,
          "quigon": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Whether I made meaning of it. Random failure breaks. Meaningful failure teaches.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "vader": 2,
          "kylo": 2
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "yellow": 1
        }
      },
      {
        "text": "Time. The same failure that breaks me at 20 teaches me at 40.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "han": 2,
          "mace": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "fail_11",
    "category": "THE WAY YOU FAIL",
    "type": "personality",
    "image": null,
    "text": "When someone close to you fails badly, what do you actually do?",
    "answers": [
      {
        "text": "I sit with them. I do not bring up what they should have done.",
        "scores": {
          "yoda": 3,
          "mando": 3,
          "chewie": 3,
          "obiwan": 2
        },
        "saber": {
          "green": 2,
          "blue": 2
        }
      },
      {
        "text": "I tell them I have failed too. Worse, sometimes. The pain shrinks when it is shared.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "han": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I ask them what they think happened. I do not give them my theory unless they ask.",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "luke": 2,
          "mace": 2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "I distract them. Take them somewhere. Move their body. Let the brain catch up later.",
        "scores": {
          "han": 3,
          "poe": 3,
          "chewie": 2,
          "finn": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "fail_12",
    "category": "THE WAY YOU FAIL",
    "type": "personality",
    "image": null,
    "text": "What is your relationship with the failures of your past?",
    "answers": [
      {
        "text": "They are companions now. I have made peace with them.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Some still sting. The ones where I knew better and did not do better.",
        "scores": {
          "mace": 3,
          "vader": 3,
          "kylo": 2,
          "obiwan": 2
        },
        "saber": {
          "purple": 2,
          "yellow": 1,
          "blue": 1
        }
      },
      {
        "text": "I do not think about them much. The future is more interesting.",
        "scores": {
          "han": 3,
          "poe": 3,
          "boba": 2,
          "palpatine": 2
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      },
      {
        "text": "They are part of what I tell others now. Stories carry the lessons forward.",
        "scores": {
          "luke": 3,
          "obiwan": 3,
          "quigon": 2,
          "mace": 2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "fail_14",
    "category": "THE WAY YOU FAIL",
    "type": "personality",
    "image": null,
    "text": "How do you keep trying after you have failed at the same thing many times?",
    "answers": [
      {
        "text": "I change what I am trying for. Sometimes the same goal is the problem, not me.",
        "scores": {
          "obiwan": 3,
          "han": 3,
          "quigon": 2,
          "mace": 2
        },
        "saber": {
          "blue": 2,
          "white": 2,
          "green": 1
        }
      },
      {
        "text": "I find someone who has done what I am trying to do. I copy their footsteps.",
        "scores": {
          "mando": 3,
          "finn": 3,
          "luke": 2,
          "poe": 1
        },
        "saber": {
          "white": 2,
          "blue": 2
        }
      },
      {
        "text": "Honestly, sometimes I do not. Some doors I have tried to open are no longer for me.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "han": 2,
          "kylo": 1
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "Stubbornness. I refuse to lose to a thing.",
        "scores": {
          "mace": 3,
          "kylo": 3,
          "vader": 2,
          "mando": 2,
          "palpatine": 2
        },
        "saber": {
          "yellow": 2,
          "red": 2
        }
      }
    ]
  },
  {
    "id": "fail_15",
    "category": "THE WAY YOU FAIL",
    "type": "personality",
    "image": null,
    "text": "You fail at something. The failure was visible. People know. Now what?",
    "answers": [
      {
        "text": "Own it. Out loud. The cover-up is always worse than the failure.",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "mace": 3,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "yellow": 1,
          "purple": 1
        }
      },
      {
        "text": "Make a joke. Disarm it before anyone else can use it against me.",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "chewie": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "Quiet. Steady. Let my next action speak louder than my last one did.",
        "scores": {
          "yoda": 3,
          "mando": 3,
          "mace": 2,
          "vader": 2
        },
        "saber": {
          "green": 2,
          "yellow": 2,
          "white": 1
        }
      },
      {
        "text": "Honestly, I want to hide for a while. That is the truthful first move.",
        "scores": {
          "finn": 3,
          "kylo": 3,
          "luke": 2,
          "vader": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "fail_16",
    "category": "THE WAY YOU FAIL",
    "type": "scenario",
    "image": "",
    "text": "You finish a long practice session. You did worse, not better. The mat is empty. Just you and the silence. What do you do?",
    "answers": [
      {
        "text": "Pack up. Eat. Sleep. Tomorrow is a fresh attempt. Tonight is for rest.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "han": 2,
          "yoda": 1
        },
        "saber": {
          "white": 2,
          "yellow": 2,
          "blue": 1
        }
      },
      {
        "text": "Run it again. Once more. Even if I am tired. I am not leaving on failure.",
        "scores": {
          "kylo": 3,
          "mace": 3,
          "vader": 2,
          "poe": 2,
          "yoda": -1
        },
        "saber": {
          "red": 1,
          "yellow": 2,
          "purple": 1
        }
      },
      {
        "text": "Sit on the floor. Just for a minute. Let it move through me before I move.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Find someone. Talk it out. The thinking goes better when I am not alone with it.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "han": 2,
          "chewie": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "fail_17",
    "category": "THE WAY YOU FAIL",
    "type": "personality",
    "image": null,
    "text": "What does failure feel like in your body?",
    "answers": [
      {
        "text": "Heavy. Like something just landed on my shoulders.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "obiwan": 2,
          "mace": 2
        },
        "saber": {
          "blue": 2,
          "purple": 1,
          "white": 1
        }
      },
      {
        "text": "Hot. My face. My ears. It rises fast.",
        "scores": {
          "kylo": 3,
          "han": 3,
          "finn": 2,
          "maul": 1
        },
        "saber": {
          "red": 3,
          "purple": 1
        }
      },
      {
        "text": "Hollow. Quiet. Like the room got smaller.",
        "scores": {
          "finn": 3,
          "luke": 3,
          "kylo": 2,
          "grogu": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "Honestly, almost nothing. I have learned not to react to losing.",
        "scores": {
          "yoda": 3,
          "boba": 3,
          "palpatine": 2,
          "mando": 1
        },
        "saber": {
          "green": 2,
          "white": 1,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "fail_18",
    "category": "THE WAY YOU FAIL",
    "type": "personality",
    "image": null,
    "text": "How much do you let other people see when you fail?",
    "answers": [
      {
        "text": "Almost everything. Hiding it costs more energy than just being honest.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "han": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Almost nothing. By the time they see me, I have already processed it.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "boba": 3,
          "palpatine": 2
        },
        "saber": {
          "white": 3,
          "red": 1,
          "yellow": 1
        }
      },
      {
        "text": "Only my closest people. They get the real version. Everyone else gets the recovery.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "mando": 2,
          "han": 2
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "Depends. I read the room first. Some failures need company. Some need silence.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "kylo": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "fail_19",
    "category": "THE WAY YOU FAIL",
    "type": "personality",
    "image": null,
    "text": "What kind of failure are you most afraid of?",
    "answers": [
      {
        "text": "Failing the people who counted on me. Disappointing them, not the task.",
        "scores": {
          "mando": 3,
          "obiwan": 3,
          "luke": 3,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Failing publicly in a way I cannot recover from.",
        "scores": {
          "mace": 3,
          "palpatine": 3,
          "kylo": 2,
          "vader": 2
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "purple": 1
        }
      },
      {
        "text": "Failing in a way that proves an old fear of mine was true.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "finn": 2,
          "luke": 1
        },
        "saber": {
          "purple": 3,
          "red": 1
        }
      },
      {
        "text": "Failing slowly. The kind I do not notice until it is too late to correct.",
        "scores": {
          "obiwan": 3,
          "yoda": 3,
          "mace": 2,
          "quigon": 2
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "fail_20",
    "category": "THE WAY YOU FAIL",
    "type": "personality",
    "image": null,
    "text": "What does success-from-failure look like to you?",
    "answers": [
      {
        "text": "The failure becomes the story I tell. The one that helps someone else.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "quigon": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I do the same thing again — and this time, it works.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "poe": 2,
          "han": 2
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "white": 1
        }
      },
      {
        "text": "I find that I am not afraid of failing anymore. The failure took the fear with it.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "han": 2,
          "mando": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "The failure made me sharp. The next thing I touch goes better than it would have.",
        "scores": {
          "palpatine": 3,
          "kylo": 3,
          "mace": 2,
          "vader": 2
        },
        "saber": {
          "red": 2,
          "yellow": 2,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "fail_21",
    "category": "THE WAY YOU FAIL",
    "type": "personality",
    "image": null,
    "text": "When you watch someone else fail badly, what is your first instinct?",
    "answers": [
      {
        "text": "Move toward them. Not to help yet. Just to be near.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "yoda": 2,
          "obiwan": 2
        },
        "saber": {
          "green": 2,
          "blue": 2
        }
      },
      {
        "text": "Look at my own work. Their failure makes me check what I am missing.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "mando": 2,
          "palpatine": 2
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "purple": 1
        }
      },
      {
        "text": "Ache for them. I know how that feels. The body remembers.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "kylo": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Stay quiet. Failure does not need an audience.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "palpatine": 1
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "fail_22",
    "category": "THE WAY YOU FAIL",
    "type": "personality",
    "image": null,
    "text": "Is there a failure you are still working on accepting?",
    "answers": [
      {
        "text": "Yes. And I think I always will be. Some failures live with you.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "obiwan": 3,
          "mace": 2
        },
        "saber": {
          "purple": 2,
          "red": 1,
          "blue": 1
        }
      },
      {
        "text": "Yes. But it teaches me less every year. The acceptance is slow but real.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 2,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Yes. And I am tired of carrying it. I want to put it down.",
        "scores": {
          "finn": 3,
          "kylo": 3,
          "han": 2,
          "mace": 1
        },
        "saber": {
          "purple": 3,
          "white": 1
        }
      },
      {
        "text": "Not really. I have made peace with my failures or I have set them aside.",
        "scores": {
          "boba": 3,
          "han": 3,
          "palpatine": 2,
          "yoda": 1
        },
        "saber": {
          "white": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "fail_23",
    "category": "THE WAY YOU FAIL",
    "type": "personality",
    "image": null,
    "text": "How has failure changed how you treat people who are failing?",
    "answers": [
      {
        "text": "Gentler. I know what they are walking through. I do not pile on.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "quigon": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "More honest. I tell them what I wish someone had told me at the time.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "blue": 3,
          "yellow": 1,
          "purple": 1
        }
      },
      {
        "text": "I let them have it. I do not rescue them from the lesson. That was MY gift.",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "yoda": 3,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "It made me less patient, honestly. I know there is a way out — I want them to take it faster.",
        "scores": {
          "han": 3,
          "mace": 3,
          "palpatine": 2,
          "kylo": 1
        },
        "saber": {
          "white": 2,
          "red": 1,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "fail_24",
    "category": "THE WAY YOU FAIL",
    "type": "personality",
    "image": null,
    "text": "What would you say to your past self after one of your biggest failures?",
    "answers": [
      {
        "text": "You will be glad this happened. Even though right now you cannot imagine it.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Get up. Just one more time. That is all I am asking.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "poe": 2,
          "finn": 2
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "white": 1
        }
      },
      {
        "text": "It was not as bad as you thought. Future me promises.",
        "scores": {
          "han": 3,
          "luke": 3,
          "obiwan": 2,
          "finn": 2
        },
        "saber": {
          "white": 2,
          "blue": 2
        }
      },
      {
        "text": "You are not the failure. The failure is one thing. You are still you.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 3,
          "kylo": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "fail_04",
    "category": "THE WAY YOU FAIL",
    "type": "image-answer",
    "text": "Pick the image that feels most like failure to you.",
    "grid_prompt": "TBD — to be written once aesthetic system is finalized",
    "answers": [
      {
        "image": "./assets/quiz/q-fail_04-a.png",
        
        "caption": "A Broken Tool",
        "scores": {
          "mando": 3,
          "boba": 3,
          "han": 2,
          "vader": 2
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "image": "./assets/quiz/q-fail_04-b.png",
        
        "caption": "An Empty Arena",
        "scores": {
          "mace": 3,
          "kylo": 3,
          "palpatine": 2,
          "vader": 2
        },
        "saber": {
          "purple": 2,
          "red": 1,
          "yellow": 1
        }
      },
      {
        "image": "./assets/quiz/q-fail_04-c.png",
        
        "caption": "A Long Walk Home",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "yoda": 2,
          "finn": 2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-fail_04-d.png",
        
        "caption": "A Friend Standing Beside Me",
        "scores": {
          "chewie": 3,
          "finn": 3,
          "mando": 2,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "fail_08",
    "category": "THE WAY YOU FAIL",
    "type": "image-answer",
    "text": "Pick how you recover after a fall.",
    "grid_prompt": "TBD — to be written once aesthetic system is finalized",
    "answers": [
      {
        "image": "./assets/quiz/q-fail_08-a.png",
        
        "caption": "Back to the Workbench",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "mace": 1
        },
        "saber": {
          "white": 2,
          "yellow": 2
        }
      },
      {
        "image": "./assets/quiz/q-fail_08-b.png",
        
        "caption": "Out Into the Open Sky",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "luke": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-fail_08-c.png",
        
        "caption": "Into Quiet Stillness",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "grogu": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-fail_08-d.png",
        
        "caption": "Toward Someone I Love",
        "scores": {
          "mando": 3,
          "luke": 3,
          "finn": 2,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "fail_13",
    "category": "THE WAY YOU FAIL",
    "type": "image-answer",
    "text": "Pick what you take with you from a failure.",
    "grid_prompt": "TBD — to be written once aesthetic system is finalized",
    "answers": [
      {
        "image": "./assets/quiz/q-fail_13-a.png",
        
        "caption": "A Scar",
        "scores": {
          "mando": 3,
          "vader": 3,
          "boba": 2,
          "mace": 2
        },
        "saber": {
          "white": 2,
          "red": 1,
          "yellow": 1
        }
      },
      {
        "image": "./assets/quiz/q-fail_13-b.png",
        
        "caption": "A Story",
        "scores": {
          "obiwan": 3,
          "yoda": 3,
          "luke": 3,
          "quigon": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-fail_13-c.png",
        
        "caption": "A Sharper Edge",
        "scores": {
          "mace": 3,
          "palpatine": 3,
          "kylo": 2,
          "vader": 2
        },
        "saber": {
          "red": 2,
          "yellow": 2,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-fail_13-d.png",
        
        "caption": "A Lighter Heart",
        "scores": {
          "yoda": 3,
          "han": 3,
          "luke": 2,
          "finn": 2
        },
        "saber": {
          "green": 2,
          "white": 2,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "fail_25",
    "category": "THE WAY YOU FAIL",
    "type": "image-answer",
    "text": "Pick what failure truly means to you.",
    "grid_prompt": "TBD — to be written once aesthetic system is finalized",
    "answers": [
      {
        "image": "./assets/quiz/q-fail_25-a.png",
        
        "caption": "A Door I Walked Past",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "han": 2,
          "quigon": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-fail_25-b.png",
        
        "caption": "A Mirror I Did Not Want",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "mace": 2,
          "luke": 2
        },
        "saber": {
          "purple": 3,
          "red": 1
        }
      },
      {
        "image": "./assets/quiz/q-fail_25-c.png",
        
        "caption": "A Lesson I Paid For",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "mace": 3,
          "palpatine": 1
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-fail_25-d.png",
        
        "caption": "A Bridge to Who I Am Now",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "yoda": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "lead_01",
    "category": "THE WAY YOU LEAD",
    "type": "scenario",
    "image": "",
    "text": "People are looking to you to make a call. The room is quiet, waiting. What do you actually do?",
    "answers": [
      {
        "text": "Take the moment. Breathe. Then speak clearly. They will move with calm if I give them calm.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mace": 2,
          "mando": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "yellow": 1
        }
      },
      {
        "text": "Make the call. Quickly. People can adjust to a decision. They cannot adjust to a paralyzed leader.",
        "scores": {
          "mace": 3,
          "han": 3,
          "poe": 3,
          "palpatine": 2,
          "finn": 1
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "red": 1
        }
      },
      {
        "text": "Ask one person I trust before I answer. Two heads are better. Even at the top.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "finn": 3,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Honestly? I would rather someone else made it. I do not love this part.",
        "scores": {
          "han": 3,
          "finn": 3,
          "luke": 2,
          "kylo": 1
        },
        "saber": {
          "white": 2,
          "blue": 2
        }
      }
    ]
  },
  {
    "id": "lead_02",
    "category": "THE WAY YOU LEAD",
    "type": "personality",
    "image": null,
    "text": "What kind of leader do you actually want to be?",
    "answers": [
      {
        "text": "The kind who is hard to find when things go well, and easy to find when they go wrong.",
        "scores": {
          "mando": 3,
          "obiwan": 3,
          "mace": 3,
          "yoda": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "The kind people walk away from feeling bigger than when they arrived.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "The kind who gets the job done. People follow effective leaders. Stories come later.",
        "scores": {
          "mace": 3,
          "han": 3,
          "palpatine": 2,
          "boba": 2
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "red": 1
        }
      },
      {
        "text": "The kind who can step out of the way when someone else is ready.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 2,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "lead_03",
    "category": "THE WAY YOU LEAD",
    "type": "personality",
    "image": null,
    "text": "How do you actually move people to do something hard?",
    "answers": [
      {
        "text": "I do it first. They will follow what I am willing to do.",
        "scores": {
          "luke": 3,
          "mando": 3,
          "mace": 3,
          "poe": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "I tell them the truth about the cost. They get to choose. People follow honest more than easy.",
        "scores": {
          "obiwan": 3,
          "yoda": 3,
          "quigon": 2,
          "mace": 2
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "purple": 1
        }
      },
      {
        "text": "I make them believe in themselves. They do the hard thing because of who they think they are.",
        "scores": {
          "poe": 3,
          "finn": 3,
          "luke": 2,
          "obiwan": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "I show them what we lose if they do not. Fear is a fuel. Used carefully.",
        "scores": {
          "palpatine": 3,
          "vader": 2,
          "mace": 2,
          "boba": 1,
          "yoda": -2
        },
        "saber": {
          "red": 2,
          "yellow": 2
        }
      }
    ]
  },
  {
    "id": "lead_05",
    "category": "THE WAY YOU LEAD",
    "type": "personality",
    "image": null,
    "text": "What is the hardest part of leading for you?",
    "answers": [
      {
        "text": "Disappointing someone. Even when I know my decision was right.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 3,
          "mando": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Knowing I am not always going to be the smartest person in the room. And still having to lead.",
        "scores": {
          "mace": 3,
          "han": 3,
          "poe": 2,
          "mando": 2
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "blue": 1
        }
      },
      {
        "text": "Saying no to people I like. The relationship pulls one way. The right decision pulls another.",
        "scores": {
          "mace": 3,
          "obiwan": 3,
          "mando": 2,
          "vader": 2
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "Carrying the weight when it goes wrong. I do not pass that down. It stops with me.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "obiwan": 3,
          "vader": 2
        },
        "saber": {
          "blue": 3,
          "yellow": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "lead_06",
    "category": "THE WAY YOU LEAD",
    "type": "personality",
    "image": null,
    "text": "When you are leading and you make a mistake, what do you do?",
    "answers": [
      {
        "text": "Say it. Out loud. To everyone. Hiding it would cost more than it would save.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "mace": 3,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "Tell my closest person first. Then figure out the rest with them.",
        "scores": {
          "mando": 3,
          "han": 3,
          "luke": 2,
          "finn": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "Quietly correct course. People do not need to know the steering wheel slipped.",
        "scores": {
          "palpatine": 3,
          "boba": 3,
          "vader": 2,
          "mace": 1
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "white": 1
        }
      },
      {
        "text": "Sit with it alone first. Understand it. Then bring the lesson, not the wound.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mando": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "lead_07",
    "category": "THE WAY YOU LEAD",
    "type": "personality",
    "image": null,
    "text": "What do you do when one of your people disagrees with you?",
    "answers": [
      {
        "text": "Stop everything and hear them. If they came to me, it matters. Their disagreement is information.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "yoda": 3,
          "mace": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "Hear them once. Decide. Move. If they cannot come with the decision, that is its own answer.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "han": 2,
          "boba": 2
        },
        "saber": {
          "yellow": 3,
          "white": 1,
          "blue": 1
        }
      },
      {
        "text": "Push back, but make sure they know the door is open. Disagreement is healthy. Silence is not.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "mace": 2,
          "poe": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Hear them. Watch them carefully. Disagreement now usually means more later.",
        "scores": {
          "palpatine": 3,
          "vader": 2,
          "boba": 2,
          "kylo": 2
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "lead_09",
    "category": "THE WAY YOU LEAD",
    "type": "scenario",
    "image": "",
    "text": "Someone you are responsible for is scared. They are about to do something hard. What do you actually say?",
    "answers": [
      {
        "text": "I am scared too. We will do it together.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mando": 3,
          "obiwan": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "You have already done the hard part — showing up. The rest is just what happens next.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I have seen people like you do things they did not think they could do. I do not doubt you.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "mando": 2,
          "han": 2
        },
        "saber": {
          "blue": 2,
          "yellow": 2
        }
      },
      {
        "text": "Nothing. I just put a hand on their shoulder. Words sometimes get in the way.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "vader": 2,
          "yoda": 1,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "lead_10",
    "category": "THE WAY YOU LEAD",
    "type": "personality",
    "image": null,
    "text": "How do you know if someone is ready to lead?",
    "answers": [
      {
        "text": "When they start serving people instead of being served. The shift is visible.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mace": 3,
          "quigon": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "When they stay after others have left. Stamina is a leadership skill people underrate.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "palpatine": 2,
          "han": 2
        },
        "saber": {
          "yellow": 2,
          "white": 2
        }
      },
      {
        "text": "When they make the call no one else will make.",
        "scores": {
          "poe": 3,
          "han": 3,
          "mace": 2,
          "kylo": 2
        },
        "saber": {
          "white": 2,
          "blue": 1,
          "red": 1
        }
      },
      {
        "text": "When they can tell people things they do not want to hear — and stay loved.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "yoda": 2,
          "luke": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "lead_11",
    "category": "THE WAY YOU LEAD",
    "type": "personality",
    "image": null,
    "text": "What do you do with credit when something goes well?",
    "answers": [
      {
        "text": "Push it to the people who actually did the work. They earned it.",
        "scores": {
          "luke": 3,
          "mando": 3,
          "obiwan": 3,
          "mace": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Accept it. Briefly. Then redirect attention to the next thing. I am uncomfortable being the focus.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mando": 2,
          "finn": 2
        },
        "saber": {
          "green": 2,
          "blue": 2
        }
      },
      {
        "text": "Take it. It is earned. False humility is its own kind of lie.",
        "scores": {
          "mace": 3,
          "palpatine": 3,
          "han": 2,
          "poe": 1
        },
        "saber": {
          "yellow": 3,
          "red": 1,
          "white": 1
        }
      },
      {
        "text": "Spread it. Different parts to different people. The whole was not mine.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "mando": 2,
          "finn": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "lead_12",
    "category": "THE WAY YOU LEAD",
    "type": "personality",
    "image": null,
    "text": "What do you do with blame when something goes wrong?",
    "answers": [
      {
        "text": "Take it. All of it. Even when it was not all mine. The buck has to stop somewhere.",
        "scores": {
          "mando": 3,
          "obiwan": 3,
          "mace": 3,
          "luke": 2
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "Find what was actually mine and own that. Without taking on what was not.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mace": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Move past it. Quickly. The story of how it went wrong matters less than what we do next.",
        "scores": {
          "han": 3,
          "poe": 3,
          "palpatine": 2,
          "mando": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "Make sure the right person carries it. Sometimes that is me. Sometimes it is not.",
        "scores": {
          "palpatine": 3,
          "mace": 2,
          "boba": 2,
          "vader": 2,
          "finn": -1
        },
        "saber": {
          "yellow": 2,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "lead_14",
    "category": "THE WAY YOU LEAD",
    "type": "personality",
    "image": null,
    "text": "What is the smallest thing you do that has the biggest leadership effect?",
    "answers": [
      {
        "text": "Remember their names. Their kids' names. What they care about. People follow people who actually see them.",
        "scores": {
          "luke": 3,
          "mando": 3,
          "obiwan": 3,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Show up on time. Every time. The smallest agreement honored is the biggest one too.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "vader": 2,
          "boba": 2
        },
        "saber": {
          "yellow": 3,
          "blue": 1
        }
      },
      {
        "text": "Listen completely. No phone. No interruption. Full attention. It is rare and people remember.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Eat last. Take my own turn after everyone else has had theirs.",
        "scores": {
          "mando": 3,
          "luke": 3,
          "mace": 2,
          "finn": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "lead_15",
    "category": "THE WAY YOU LEAD",
    "type": "personality",
    "image": null,
    "text": "Have you ever followed someone who did not deserve it?",
    "answers": [
      {
        "text": "Yes. I did not see it at the time. The seeing is the lesson.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "red": 1,
          "purple": 2,
          "blue": 1
        }
      },
      {
        "text": "Yes. Briefly. I left when I saw clearly.",
        "scores": {
          "mace": 3,
          "obiwan": 3,
          "han": 2,
          "mando": 2
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "white": 1
        }
      },
      {
        "text": "No. I do not follow people. I work with people.",
        "scores": {
          "han": 3,
          "boba": 3,
          "palpatine": 2,
          "kylo": 1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      },
      {
        "text": "I am not sure. Following is harder to read than leading. I might still be doing it.",
        "scores": {
          "finn": 3,
          "luke": 2,
          "kylo": 2,
          "grogu": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "lead_16",
    "category": "THE WAY YOU LEAD",
    "type": "scenario",
    "image": "",
    "text": "You realize people have been following you. You did not ask for it. Now what?",
    "answers": [
      {
        "text": "Accept it. Quietly. Lead well. They chose me — the least I owe them is to be worthy.",
        "scores": {
          "luke": 3,
          "mando": 3,
          "obiwan": 3,
          "mace": 2
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "Push back. Hard. Lead means responsibility, and that responsibility was not mine to take.",
        "scores": {
          "han": 3,
          "boba": 3,
          "yoda": 2,
          "finn": 2
        },
        "saber": {
          "white": 3,
          "green": 1
        }
      },
      {
        "text": "Train them. So they do not need me. The best leadership ends with people who do not need you anymore.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Use it. Carefully. People who follow are a resource. Resources should not be wasted.",
        "scores": {
          "palpatine": 3,
          "mace": 2,
          "vader": 2,
          "boba": 1,
          "finn": -2,
          "luke": -2
        },
        "saber": {
          "red": 2,
          "yellow": 2,
          "black": 1
        }
      }
    ]
  },
  {
    "id": "lead_17",
    "category": "THE WAY YOU LEAD",
    "type": "personality",
    "image": null,
    "text": "What does a good leader look like to you in the room?",
    "answers": [
      {
        "text": "Calm. Steady. The way the room slows down when they walk in.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mace": 3,
          "mando": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "yellow": 1
        }
      },
      {
        "text": "Warm. Funny. Easy to be around. People follow people they actually like.",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "chewie": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "Focused. Visible. Clearly the one in charge — but not making a show of it.",
        "scores": {
          "mace": 3,
          "palpatine": 2,
          "vader": 2,
          "mando": 2
        },
        "saber": {
          "yellow": 3,
          "blue": 1
        }
      },
      {
        "text": "Quiet. Almost easy to miss until you realize everyone is looking at them for the answer.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "mando": 2,
          "vader": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "lead_18",
    "category": "THE WAY YOU LEAD",
    "type": "personality",
    "image": null,
    "text": "How do you handle someone smarter than you on your team?",
    "answers": [
      {
        "text": "Give them more room. Their ceiling is higher than mine. Get out of their way.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "obiwan": 3,
          "luke": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "Ask their opinion first. On everything. They probably already see what I will see in five minutes.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "finn": 2,
          "mando": 1
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Stay sharp. Smarter people make me work harder, not feel smaller.",
        "scores": {
          "mace": 3,
          "han": 3,
          "poe": 2,
          "palpatine": 2
        },
        "saber": {
          "yellow": 2,
          "white": 1,
          "red": 1
        }
      },
      {
        "text": "Watch them carefully. Smart people who follow me always have a reason.",
        "scores": {
          "palpatine": 3,
          "vader": 2,
          "boba": 2,
          "mace": 1
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "lead_19",
    "category": "THE WAY YOU LEAD",
    "type": "personality",
    "image": null,
    "text": "Someone you have been training is ready to lead on their own. What do you actually feel?",
    "answers": [
      {
        "text": "Pride. Pure and full. The kind that does not need them to acknowledge it.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "A pang. They will not need me as much. The role I had with them is changing.",
        "scores": {
          "obiwan": 3,
          "kylo": 3,
          "vader": 2,
          "mando": 2
        },
        "saber": {
          "blue": 2,
          "purple": 2
        }
      },
      {
        "text": "Excitement. Now we get to lead side by side. New chapter.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 3,
          "han": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "Relief. Now I can step back. They are good. I can rest.",
        "scores": {
          "yoda": 3,
          "mando": 3,
          "obiwan": 2,
          "mace": 1
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "lead_20",
    "category": "THE WAY YOU LEAD",
    "type": "personality",
    "image": null,
    "text": "What kind of leader do you become when you are scared?",
    "answers": [
      {
        "text": "A quieter one. I slow down. I speak less. I make the next move clearly.",
        "scores": {
          "yoda": 3,
          "mando": 3,
          "obiwan": 3,
          "vader": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "white": 1
        }
      },
      {
        "text": "A faster one. Decisions get sharper. Fear becomes fuel.",
        "scores": {
          "mace": 3,
          "palpatine": 3,
          "han": 2,
          "poe": 2
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "white": 1
        }
      },
      {
        "text": "A more honest one. I tell my people I am scared too. We carry it together.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "A harder one. I close the doors I usually leave open. It is not my best version of leading.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "mace": 2,
          "palpatine": 1
        },
        "saber": {
          "red": 2,
          "purple": 2
        }
      }
    ]
  },
  {
    "id": "lead_21",
    "category": "THE WAY YOU LEAD",
    "type": "personality",
    "image": null,
    "text": "What is one thing you refuse to do, no matter what, as a leader?",
    "answers": [
      {
        "text": "Make someone afraid of me. Fear is fast leadership but it is not real leadership.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Take credit for someone else's work. Ever. Even by silence.",
        "scores": {
          "mace": 3,
          "obiwan": 3,
          "mando": 3,
          "luke": 2
        },
        "saber": {
          "blue": 2,
          "yellow": 2
        }
      },
      {
        "text": "Ask someone to do something I would not do myself.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "han": 2,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "white": 2,
          "blue": 2
        }
      },
      {
        "text": "Pretend I have all the answers when I do not.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "quigon": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "lead_22",
    "category": "THE WAY YOU LEAD",
    "type": "personality",
    "image": null,
    "text": "What kind of follower do you want around you?",
    "answers": [
      {
        "text": "The kind who will tell me I am wrong. The kind who is loyal to the work, not to me.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "mando": 2,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "The kind who shows up. Even on the hard days. Especially on the hard days.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "han": 2,
          "finn": 2
        },
        "saber": {
          "white": 2,
          "blue": 2
        }
      },
      {
        "text": "The kind who will eventually outgrow me. I want to lead leaders, not followers.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "The kind who believes in what we are doing. Not in me. The work.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mace": 2,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "lead_23",
    "category": "THE WAY YOU LEAD",
    "type": "personality",
    "image": null,
    "text": "When you imagine someone telling stories about you years from now, what do you want them to say?",
    "answers": [
      {
        "text": "That I made them feel like they could do it. Whatever \"it\" was.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "quigon": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "That I had their back. Always. No matter what.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "finn": 2,
          "han": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "That I built something that outlasted me. The work matters more than me being remembered.",
        "scores": {
          "mace": 3,
          "obiwan": 3,
          "palpatine": 2,
          "vader": 2
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "That I was just one of them. Their friend who happened to lead for a while.",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "luke": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "lead_24",
    "category": "THE WAY YOU LEAD",
    "type": "personality",
    "image": null,
    "text": "If you had to lead one person through one impossible day, what would you bring them?",
    "answers": [
      {
        "text": "My calm. Whatever happens to them, I will not be one of the things going wrong.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mace": 3,
          "mando": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "yellow": 1
        }
      },
      {
        "text": "A small list. One thing at a time. We will not look at the whole day at once.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "mando": 3,
          "luke": 2
        },
        "saber": {
          "blue": 2,
          "yellow": 2
        }
      },
      {
        "text": "Snacks. Jokes. The right kind of music. Hard days need light handles to grip.",
        "scores": {
          "han": 3,
          "poe": 3,
          "chewie": 3,
          "finn": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "My total attention. Nothing else gets it that day. Just them.",
        "scores": {
          "mando": 3,
          "obiwan": 3,
          "luke": 3,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "lead_04",
    "category": "THE WAY YOU LEAD",
    "type": "image-answer",
    "text": "Pick what your kind of leading looks like.",
    "grid_prompt": "TBD — to be written once aesthetic system is finalized",
    "answers": [
      {
        "image": "./assets/quiz/q-lead_04-a.png",
        
        "caption": "Standing in Front",
        "scores": {
          "mace": 3,
          "palpatine": 2,
          "vader": 2,
          "poe": 2
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      },
      {
        "image": "./assets/quiz/q-lead_04-b.png",
        
        "caption": "Walking Beside",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mando": 2,
          "han": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-lead_04-c.png",
        
        "caption": "Standing Behind",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "obiwan": 2,
          "vader": 2
        },
        "saber": {
          "blue": 2,
          "white": 1,
          "yellow": 1
        }
      },
      {
        "image": "./assets/quiz/q-lead_04-d.png",
        
        "caption": "Sitting Quietly",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "grogu": 1
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "lead_08",
    "category": "THE WAY YOU LEAD",
    "type": "image-answer",
    "text": "Pick how your voice sounds when you lead.",
    "grid_prompt": "TBD — to be written once aesthetic system is finalized",
    "answers": [
      {
        "image": "./assets/quiz/q-lead_08-a.png",
        
        "caption": "Firm and Clear",
        "scores": {
          "mace": 3,
          "palpatine": 2,
          "mando": 2,
          "vader": 2
        },
        "saber": {
          "yellow": 3,
          "blue": 1,
          "red": 1
        }
      },
      {
        "image": "./assets/quiz/q-lead_08-b.png",
        
        "caption": "Warm and Funny",
        "scores": {
          "han": 3,
          "poe": 3,
          "chewie": 2,
          "finn": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-lead_08-c.png",
        
        "caption": "Quiet and Steady",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mando": 2,
          "quigon": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-lead_08-d.png",
        
        "caption": "Honest and Open",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "lead_13",
    "category": "THE WAY YOU LEAD",
    "type": "image-answer",
    "text": "Pick what power means to you as a leader.",
    "grid_prompt": "TBD — to be written once aesthetic system is finalized",
    "answers": [
      {
        "image": "./assets/quiz/q-lead_13-a.png",
        
        "caption": "A Crown",
        "scores": {
          "palpatine": 3,
          "vader": 2,
          "kylo": 2,
          "mace": 1
        },
        "saber": {
          "red": 3,
          "yellow": 1,
          "black": 1
        }
      },
      {
        "image": "./assets/quiz/q-lead_13-b.png",
        
        "caption": "A Hand on a Shoulder",
        "scores": {
          "mando": 3,
          "obiwan": 3,
          "luke": 2,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-lead_13-c.png",
        
        "caption": "A Lit Torch",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "mace": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-lead_13-d.png",
        
        "caption": "An Open Door",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "lead_25",
    "category": "THE WAY YOU LEAD",
    "type": "image-answer",
    "text": "Pick the kind of leader you want to be remembered as.",
    "grid_prompt": "TBD — to be written once aesthetic system is finalized",
    "answers": [
      {
        "image": "./assets/quiz/q-lead_25-a.png",
        
        "caption": "The Wise One",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "mace": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-lead_25-b.png",
        
        "caption": "The Guardian",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "vader": 2,
          "obiwan": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-lead_25-c.png",
        
        "caption": "The Spark",
        "scores": {
          "poe": 3,
          "finn": 3,
          "luke": 3,
          "han": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-lead_25-d.png",
        
        "caption": "The Quiet Hand",
        "scores": {
          "yoda": 3,
          "mando": 3,
          "obiwan": 2,
          "quigon": 2
        },
        "saber": {
          "green": 2,
          "blue": 2
        }
      }
    ]
  },
  {
    "id": "dream_01",
    "category": "THE WAY YOU DREAM",
    "type": "scenario",
    "image": "",
    "text": "You are alone. You let yourself imagine what you most want. What kind of picture comes up?",
    "answers": [
      {
        "text": "Bright. Big. A whole life I have never lived yet. I can see it clearly.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 3,
          "han": 2,
          "palpatine": -1
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "Small. Specific. One person, one place, one quiet morning. That is enough.",
        "scores": {
          "mando": 3,
          "obiwan": 3,
          "vader": 3,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "Vast. Almost too big to hold. Something that would change the galaxy.",
        "scores": {
          "palpatine": 3,
          "kylo": 3,
          "mace": 2,
          "luke": 2
        },
        "saber": {
          "red": 2,
          "yellow": 2,
          "blue": 1
        }
      },
      {
        "text": "Quiet. A kind of stillness. Not a thing I want — a way I want to feel.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "grogu": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "dream_02",
    "category": "THE WAY YOU DREAM",
    "type": "personality",
    "image": null,
    "text": "How often do you let yourself actually dream?",
    "answers": [
      {
        "text": "Every day. I cannot live without something to walk toward.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 3,
          "kylo": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Rarely. I trust the work more than the dreaming.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "boba": 2,
          "han": 2
        },
        "saber": {
          "yellow": 2,
          "white": 2
        }
      },
      {
        "text": "Only when I am quiet. The dreams have to come find me. I do not chase them.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "grogu": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Constantly. The dream is louder than the day usually.",
        "scores": {
          "kylo": 3,
          "palpatine": 3,
          "finn": 2,
          "luke": 1
        },
        "saber": {
          "purple": 2,
          "red": 1,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "dream_03",
    "category": "THE WAY YOU DREAM",
    "type": "personality",
    "image": null,
    "text": "What is the dream you have not told anyone?",
    "answers": [
      {
        "text": "A simple one. Too simple to say. People might laugh at how small it is.",
        "scores": {
          "mando": 3,
          "obiwan": 3,
          "finn": 2,
          "luke": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "A big one. Too big to say. People might laugh at how impossible it is.",
        "scores": {
          "luke": 3,
          "poe": 3,
          "kylo": 3,
          "finn": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "A dark one. The kind that surprises me when I notice it.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "palpatine": 2,
          "mace": 1
        },
        "saber": {
          "red": 2,
          "purple": 2
        }
      },
      {
        "text": "I have told most of mine. I do not have many that hide.",
        "scores": {
          "han": 3,
          "poe": 2,
          "luke": 2,
          "grogu": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "dream_05",
    "category": "THE WAY YOU DREAM",
    "type": "personality",
    "image": null,
    "text": "When a dream of yours dies, what do you do with it?",
    "answers": [
      {
        "text": "Grieve it. Like a person. Then let it become a story I tell.",
        "scores": {
          "obiwan": 3,
          "yoda": 3,
          "quigon": 2,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Bury it. The new dream has to come from clean ground.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "han": 2,
          "mace": 2
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "text": "Keep it. Even dead, the shape of it taught me something.",
        "scores": {
          "obiwan": 3,
          "vader": 3,
          "kylo": 3,
          "luke": 2
        },
        "saber": {
          "blue": 2,
          "purple": 2
        }
      },
      {
        "text": "Find a new version. Same heart, different shape.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "obiwan": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "dream_06",
    "category": "THE WAY YOU DREAM",
    "type": "personality",
    "image": null,
    "text": "What kind of dreaming is dangerous?",
    "answers": [
      {
        "text": "Dreams that need other people to stay small for me to be big.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "mace": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Dreams that keep me from living the life I have now.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "mando": 2,
          "obiwan": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "Dreams that are too easy. I do not trust a dream that asks for nothing.",
        "scores": {
          "mace": 3,
          "kylo": 3,
          "vader": 2,
          "palpatine": 2
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "purple": 1
        }
      },
      {
        "text": "I do not think dreams are dangerous. They are just maps. Not all maps are good.",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "luke": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "dream_07",
    "category": "THE WAY YOU DREAM",
    "type": "personality",
    "image": null,
    "text": "How do you tell the difference between a dream and a fantasy?",
    "answers": [
      {
        "text": "A dream costs something. A fantasy is free. That is the test.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "obiwan": 2,
          "vader": 2
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "A dream still feels true the next morning. A fantasy fades by lunch.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 2,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "A dream pulls me toward it. A fantasy is something I just enjoy from the couch.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 3,
          "kylo": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Honestly, I have stopped trying to tell. Some of my best dreams started as fantasies.",
        "scores": {
          "han": 3,
          "quigon": 3,
          "poe": 2,
          "luke": 1
        },
        "saber": {
          "white": 2,
          "green": 1,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "dream_09",
    "category": "THE WAY YOU DREAM",
    "type": "scenario",
    "image": "",
    "text": "You are walking through a long stretch of life with no clear path. What dream do you carry like a small lit lantern?",
    "answers": [
      {
        "text": "That one person I love most will be safe. That is the lantern.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "obiwan": 3,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "That I become someone whose word weighs something. The lantern is the future me.",
        "scores": {
          "mace": 3,
          "palpatine": 2,
          "vader": 2,
          "kylo": 2
        },
        "saber": {
          "yellow": 3,
          "blue": 1,
          "red": 1
        }
      },
      {
        "text": "That the wider galaxy gets a little kinder because of something I did. Even small.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "poe": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "That I get to wake up free. No one telling me where to be. The lantern is freedom.",
        "scores": {
          "han": 3,
          "boba": 3,
          "luke": 1,
          "poe": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "dream_10",
    "category": "THE WAY YOU DREAM",
    "type": "personality",
    "image": null,
    "text": "When you imagine the life you most want, who is in it?",
    "answers": [
      {
        "text": "The same people who are in my life now. Just more of them. More time. More days.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "han": 2,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "People I have not met yet. The life I want has strangers in it I will love.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 3,
          "quigon": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Just me. Mostly. The life I most want has room to breathe.",
        "scores": {
          "yoda": 3,
          "boba": 3,
          "quigon": 2,
          "mando": 2
        },
        "saber": {
          "green": 2,
          "white": 2
        }
      },
      {
        "text": "People who saw something in me before I did. I want to thank them by becoming it.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "kylo": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "dream_11",
    "category": "THE WAY YOU DREAM",
    "type": "personality",
    "image": null,
    "text": "What dream of yours has already come true that you forget to celebrate?",
    "answers": [
      {
        "text": "Being here. Being someone. I forget I dreamed of just being this.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mando": 3,
          "obiwan": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "The people in my life. I dreamed of having them before I had them.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "han": 2,
          "vader": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "The skill in my hands. I forget that someone younger than me dreamed of being able to do this.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "mace": 2,
          "vader": 2
        },
        "saber": {
          "white": 2,
          "yellow": 2
        }
      },
      {
        "text": "My freedom. I have it. Sometimes I forget how rare that is.",
        "scores": {
          "han": 3,
          "boba": 3,
          "luke": 2,
          "poe": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "dream_12",
    "category": "THE WAY YOU DREAM",
    "type": "personality",
    "image": null,
    "text": "What is the dream you have for someone else?",
    "answers": [
      {
        "text": "That they become bigger than I ever was. Even if it means I am forgotten.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "mace": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "That they are safe. Every day. For as long as they live.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "chewie": 2,
          "obiwan": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "That they find their own dream. Not mine for them. Theirs.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "That they get the chance I did not get. The opening I never had.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "mando": 2,
          "kylo": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "dream_14",
    "category": "THE WAY YOU DREAM",
    "type": "personality",
    "image": null,
    "text": "What is the smallest dream you have?",
    "answers": [
      {
        "text": "A good cup of something hot. A quiet hour. That kind of small.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "A laugh shared with someone I love. The kind of laugh I will remember on a hard day.",
        "scores": {
          "han": 3,
          "chewie": 3,
          "finn": 3,
          "luke": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "Doing my work well. Just one good day of being good at it.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "boba": 2,
          "vader": 2
        },
        "saber": {
          "yellow": 2,
          "white": 2
        }
      },
      {
        "text": "Being seen. Just once. By the right person.",
        "scores": {
          "finn": 3,
          "kylo": 3,
          "luke": 2,
          "vader": 2
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "dream_15",
    "category": "THE WAY YOU DREAM",
    "type": "personality",
    "image": null,
    "text": "What is the dream you have given up that you wish you had not?",
    "answers": [
      {
        "text": "A version of me that walked a different road. I think about it more than I admit.",
        "scores": {
          "obiwan": 3,
          "kylo": 3,
          "vader": 3,
          "luke": 2
        },
        "saber": {
          "blue": 2,
          "purple": 2
        }
      },
      {
        "text": "Honestly, none. The dreams I gave up were the right ones to give up.",
        "scores": {
          "yoda": 3,
          "mando": 3,
          "quigon": 2,
          "mace": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "A relationship I let drift. I keep wondering what we would have built.",
        "scores": {
          "vader": 3,
          "obiwan": 3,
          "han": 2,
          "kylo": 2
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "I have not given up on much. I have just adjusted the timing.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 3,
          "han": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "dream_16",
    "category": "THE WAY YOU DREAM",
    "type": "scenario",
    "image": "",
    "text": "You wake up tomorrow morning and find your biggest dream came true overnight. What is the very first feeling?",
    "answers": [
      {
        "text": "Gratitude. Bigger than the dream itself. I get to share this with the people who carried me here.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mando": 3,
          "obiwan": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "A kind of stillness. Like the world finally got quiet.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "vader": 2,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Restlessness. Already. What is next? I was not built for arrival.",
        "scores": {
          "palpatine": 3,
          "kylo": 3,
          "mace": 2,
          "han": 2
        },
        "saber": {
          "red": 2,
          "yellow": 2
        }
      },
      {
        "text": "Disbelief. I look around for the trick. Dreams coming true is not normally how this works.",
        "scores": {
          "boba": 3,
          "kylo": 3,
          "finn": 2,
          "mando": 1
        },
        "saber": {
          "white": 2,
          "purple": 2
        }
      }
    ]
  },
  {
    "id": "dream_17",
    "category": "THE WAY YOU DREAM",
    "type": "personality",
    "image": null,
    "text": "What is the difference between a dream and a goal?",
    "answers": [
      {
        "text": "A goal has a plan. A dream has a pull. Both work — they just work differently.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "han": 2,
          "palpatine": 2
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "A goal is what I want to do. A dream is who I want to become.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 3,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "A goal is mine alone. A dream usually involves other people.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "mando": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "A goal can be checked off. A dream changes shape as I get closer to it.",
        "scores": {
          "obiwan": 3,
          "yoda": 3,
          "quigon": 2,
          "han": 2
        },
        "saber": {
          "green": 2,
          "blue": 2
        }
      }
    ]
  },
  {
    "id": "dream_18",
    "category": "THE WAY YOU DREAM",
    "type": "personality",
    "image": null,
    "text": "What kind of dreams do you protect from other people?",
    "answers": [
      {
        "text": "The ones that sound silly out loud. They are not silly inside me.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "grogu": 2,
          "kylo": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "The ones that are still new. I do not let air in too early.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "mando": 3,
          "obiwan": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "The ones about people I love. They are not mine to share — they belong to the relationship.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "han": 2,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "I do not really hide my dreams. I would rather have them heard and lose them than keep them and lose myself.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "han": 2,
          "poe": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "dream_19",
    "category": "THE WAY YOU DREAM",
    "type": "personality",
    "image": null,
    "text": "How has dreaming changed for you as you have grown?",
    "answers": [
      {
        "text": "Smaller. More specific. I used to dream of everything. Now I dream of one good thing.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mando": 2,
          "vader": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "Bigger. I have learned that the dream usually gets larger, not smaller, as you walk toward it.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 3,
          "palpatine": 2
        },
        "saber": {
          "blue": 3,
          "red": 1
        }
      },
      {
        "text": "Quieter. I do not need to announce my dreams the way I used to.",
        "scores": {
          "mando": 3,
          "obiwan": 3,
          "mace": 2,
          "quigon": 2
        },
        "saber": {
          "blue": 2,
          "green": 2
        }
      },
      {
        "text": "I am still figuring out how I dream. Honestly. It changes year to year.",
        "scores": {
          "finn": 3,
          "kylo": 3,
          "luke": 2,
          "grogu": 2
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "dream_20",
    "category": "THE WAY YOU DREAM",
    "type": "personality",
    "image": null,
    "text": "Someone you love tells you their dream. It seems impossible to you. What do you do?",
    "answers": [
      {
        "text": "I believe in it with them. Even if I doubt it. My doubt is mine. Their dream is theirs.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mando": 3,
          "obiwan": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I ask them about it. What would they need? Who would they be? The asking is the support.",
        "scores": {
          "obiwan": 3,
          "quigon": 3,
          "yoda": 2,
          "luke": 2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "I tell them the truth about what I see. Gently. Real support is not pretending.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "han": 2,
          "obiwan": 1
        },
        "saber": {
          "blue": 2,
          "yellow": 2
        }
      },
      {
        "text": "I tell them they can absolutely do it. Even when I am not sure. Sometimes belief is the missing piece.",
        "scores": {
          "poe": 3,
          "finn": 3,
          "luke": 2,
          "chewie": 2,
          "palpatine": -2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "dream_21",
    "category": "THE WAY YOU DREAM",
    "type": "personality",
    "image": null,
    "text": "What does your dream ask of you that the regular life does not?",
    "answers": [
      {
        "text": "To risk something. The dream costs more than a quiet life would.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 3,
          "han": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "To be patient. The dream is slower than I want it to be.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mando": 3,
          "mace": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "yellow": 1
        }
      },
      {
        "text": "To stay sharp. The dream will not survive a soft version of me.",
        "scores": {
          "mace": 3,
          "palpatine": 3,
          "vader": 2,
          "boba": 2
        },
        "saber": {
          "yellow": 2,
          "red": 2
        }
      },
      {
        "text": "To love someone harder than I knew I could. That is what my dream actually wants.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "luke": 2,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "dream_22",
    "category": "THE WAY YOU DREAM",
    "type": "personality",
    "image": null,
    "text": "When you imagine yourself ten years from now, what is most different?",
    "answers": [
      {
        "text": "I am steadier. Less reactive. The same person, but settled into myself.",
        "scores": {
          "yoda": 3,
          "mando": 3,
          "obiwan": 3,
          "mace": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "yellow": 1
        }
      },
      {
        "text": "I am bigger. Brighter. I have built things I cannot picture yet.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 3,
          "palpatine": 2
        },
        "saber": {
          "blue": 3,
          "red": 1
        }
      },
      {
        "text": "I am freer. Fewer obligations. More days that are my own.",
        "scores": {
          "han": 3,
          "boba": 3,
          "mando": 1,
          "yoda": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "I am someone people come to when they need help. That is the difference.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "luke": 2,
          "mando": 2
        },
        "saber": {
          "blue": 3,
          "yellow": 1,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "dream_23",
    "category": "THE WAY YOU DREAM",
    "type": "personality",
    "image": null,
    "text": "What does it feel like in your body when you let yourself fully dream?",
    "answers": [
      {
        "text": "A lift. Light. Like the day got bigger.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 3,
          "han": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "A pull. Forward. Like my whole body wants to walk toward something I cannot quite see.",
        "scores": {
          "kylo": 3,
          "luke": 3,
          "finn": 2,
          "palpatine": 2
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "Quiet warmth. Like sitting near a fire. Not loud. Just present.",
        "scores": {
          "yoda": 3,
          "mando": 3,
          "obiwan": 3,
          "grogu": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "Honestly, a little scared. Dreams feel risky to inhabit too much.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "kylo": 2,
          "finn": 2
        },
        "saber": {
          "blue": 2,
          "purple": 2
        }
      }
    ]
  },
  {
    "id": "dream_24",
    "category": "THE WAY YOU DREAM",
    "type": "personality",
    "image": null,
    "text": "What dream do you want to leave with the next generation?",
    "answers": [
      {
        "text": "That kindness is not a small thing. That kindness changes everything.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "That they can be more than they were told they could be.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 3,
          "kylo": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "That doing the work matters. Quietly. Daily. The dream lives in the work.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "obiwan": 2,
          "boba": 2
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "white": 1
        }
      },
      {
        "text": "That the people they love are the dream. Not the side effect.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "chewie": 2,
          "han": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "dream_04",
    "category": "THE WAY YOU DREAM",
    "type": "image-answer",
    "text": "Pick the image that feels most like your dream.",
    "grid_prompt": "TBD — to be written once aesthetic system is finalized",
    "answers": [
      {
        "image": "./assets/quiz/q-dream_04-a.png",
        
        "caption": "A Distant Sunrise",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "han": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-dream_04-b.png",
        
        "caption": "A Quiet Hearth",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "vader": 2,
          "obiwan": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-dream_04-c.png",
        
        "caption": "A Mountain Peak",
        "scores": {
          "palpatine": 3,
          "kylo": 3,
          "mace": 2,
          "vader": 2
        },
        "saber": {
          "red": 2,
          "yellow": 2
        }
      },
      {
        "image": "./assets/quiz/q-dream_04-d.png",
        
        "caption": "A Vast Open Sky",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "han": 2,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "dream_08",
    "category": "THE WAY YOU DREAM",
    "type": "image-answer",
    "text": "Pick what you reach for when you let yourself dream.",
    "grid_prompt": "TBD — to be written once aesthetic system is finalized",
    "answers": [
      {
        "image": "./assets/quiz/q-dream_08-a.png",
        
        "caption": "A Hand to Hold",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "finn": 2,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-dream_08-b.png",
        
        "caption": "A Bright Star",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 3,
          "kylo": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-dream_08-c.png",
        
        "caption": "An Open Road",
        "scores": {
          "han": 3,
          "boba": 3,
          "poe": 2,
          "mando": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-dream_08-d.png",
        
        "caption": "A Sacred Light",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "dream_13",
    "category": "THE WAY YOU DREAM",
    "type": "image-answer",
    "text": "Pick where your dream actually lives.",
    "grid_prompt": "TBD — to be written once aesthetic system is finalized",
    "answers": [
      {
        "image": "./assets/quiz/q-dream_13-a.png",
        
        "caption": "In Another Person",
        "scores": {
          "mando": 3,
          "vader": 3,
          "obiwan": 2,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-dream_13-b.png",
        
        "caption": "In a Place I Have Not Seen",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 3,
          "han": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-dream_13-c.png",
        
        "caption": "In a Skill I Want",
        "scores": {
          "mando": 3,
          "boba": 3,
          "mace": 2,
          "palpatine": 2
        },
        "saber": {
          "yellow": 2,
          "white": 2,
          "red": 1
        }
      },
      {
        "image": "./assets/quiz/q-dream_13-d.png",
        
        "caption": "In a Future Version of Me",
        "scores": {
          "luke": 3,
          "kylo": 3,
          "obiwan": 2,
          "mace": 2
        },
        "saber": {
          "blue": 2,
          "purple": 2
        }
      }
    ]
  },
  {
    "id": "dream_25",
    "category": "THE WAY YOU DREAM",
    "type": "image-answer",
    "text": "Pick what dreaming truly is to you.",
    "grid_prompt": "TBD — to be written once aesthetic system is finalized",
    "answers": [
      {
        "image": "./assets/quiz/q-dream_25-a.png",
        
        "caption": "A Map I Follow",
        "scores": {
          "mando": 3,
          "mace": 3,
          "han": 2,
          "poe": 2
        },
        "saber": {
          "white": 2,
          "yellow": 2,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-dream_25-b.png",
        
        "caption": "A Light I Carry",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 3,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-dream_25-c.png",
        
        "caption": "A Voice I Listen For",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "grogu": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-dream_25-d.png",
        
        "caption": "A Hunger I Feed",
        "scores": {
          "palpatine": 3,
          "kylo": 3,
          "vader": 2,
          "mace": 1
        },
        "saber": {
          "red": 3,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "leave_01",
    "category": "THE WAY YOU LEAVE",
    "type": "scenario",
    "image": "",
    "text": "You know it is time to leave something behind. You have known for a while. How do you actually go?",
    "answers": [
      {
        "text": "Slowly. With acknowledgment. I say goodbye to what I am leaving.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Quickly. Once I have decided, I do not draw it out. Drawing it out is its own kind of cruelty.",
        "scores": {
          "mando": 3,
          "han": 3,
          "boba": 3,
          "mace": 2
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "text": "With a letter. Or a long talk. The people who matter deserve more than a quick exit.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "han": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Sometimes I cannot. I am still half-leaving things from years ago.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "luke": 2,
          "finn": 2
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "leave_02",
    "category": "THE WAY YOU LEAVE",
    "type": "personality",
    "image": null,
    "text": "How do you know when it is time to leave something?",
    "answers": [
      {
        "text": "My body tells me before my mind does. Something gets restless. Something gets quiet.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 2,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "When I am not adding anymore. When my presence has become a habit, not a contribution.",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "mace": 3,
          "yoda": 2
        },
        "saber": {
          "blue": 3,
          "yellow": 1,
          "purple": 1
        }
      },
      {
        "text": "When staying would cost me something I am not willing to pay.",
        "scores": {
          "han": 3,
          "boba": 3,
          "mando": 2,
          "vader": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "When someone I love would be better off if I were not there.",
        "scores": {
          "obiwan": 3,
          "vader": 3,
          "mando": 3,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "leave_03",
    "category": "THE WAY YOU LEAVE",
    "type": "personality",
    "image": null,
    "text": "What is the hardest part of leaving?",
    "answers": [
      {
        "text": "The faces. Of the people who will not understand why. Even when I am sure.",
        "scores": {
          "mando": 3,
          "obiwan": 3,
          "vader": 3,
          "luke": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "The not knowing. What happens to the people I leave. The story keeps going without me.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "finn": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "The version of me who lived there. I am leaving her too. Not just the place.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "kylo": 3,
          "obiwan": 2
        },
        "saber": {
          "blue": 2,
          "purple": 2
        }
      },
      {
        "text": "Nothing, honestly. I have made peace with leaving. It is just one of the things I do.",
        "scores": {
          "boba": 3,
          "han": 3,
          "mando": 2,
          "palpatine": 2
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "leave_05",
    "category": "THE WAY YOU LEAVE",
    "type": "personality",
    "image": null,
    "text": "How do you say goodbye to a person?",
    "answers": [
      {
        "text": "I say what is true. Plainly. Even if it is hard. Especially if it is hard.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "mando": 2,
          "luke": 2
        },
        "saber": {
          "blue": 3,
          "yellow": 1,
          "purple": 1
        }
      },
      {
        "text": "I keep it light. A joke. A wave. Heavy goodbyes ask too much of the person leaving.",
        "scores": {
          "han": 3,
          "poe": 3,
          "boba": 2,
          "finn": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "I let them know what they have meant. So they carry it after I am gone.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 3,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I do not always say it. Some of my best goodbyes were silent. A look. A nod.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "yoda": 2,
          "vader": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "leave_06",
    "category": "THE WAY YOU LEAVE",
    "type": "personality",
    "image": null,
    "text": "When someone leaves you, how do you handle it?",
    "answers": [
      {
        "text": "I wish them well. Their leaving is not about me. Sometimes love is letting them go.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I keep moving. Their absence is a fact. Mourning the fact does not change it.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "han": 2,
          "mace": 2
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "text": "I sit with it for a long time. Some leavings deserve real grief.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "vader": 3,
          "kylo": 2
        },
        "saber": {
          "blue": 2,
          "purple": 2
        }
      },
      {
        "text": "Honestly? It still surprises me how much it hurts. Even when I saw it coming.",
        "scores": {
          "finn": 3,
          "kylo": 3,
          "luke": 2,
          "han": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "leave_07",
    "category": "THE WAY YOU LEAVE",
    "type": "personality",
    "image": null,
    "text": "What is the most important thing to do before you leave a place?",
    "answers": [
      {
        "text": "Look at it one more time. So I remember it correctly.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "quigon": 2,
          "mando": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Thank it. Out loud or in my head. The place gave me something. I want to acknowledge that.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Leave it better than I found it. Even a small repair. Some last act of care.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "obiwan": 2,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 2,
          "yellow": 2,
          "white": 1
        }
      },
      {
        "text": "Get clear on what I am taking with me. Some things stay. Some come.",
        "scores": {
          "han": 3,
          "boba": 3,
          "poe": 2,
          "mando": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "leave_09",
    "category": "THE WAY YOU LEAVE",
    "type": "scenario",
    "image": "",
    "text": "You are at the threshold of leaving for the last time. The door is open. What is the last thing you do?",
    "answers": [
      {
        "text": "I turn back. Just for a second. I want one last look I will remember.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "vader": 3,
          "finn": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "I walk through without turning. Looking back too long is its own trap.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "han": 2,
          "mace": 2
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "text": "I say something. Out loud. Even if no one hears. Endings deserve a word.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "quigon": 2,
          "mando": 2
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "purple": 1
        }
      },
      {
        "text": "I close the door gently. Doors closed gently stay closed. That is the lesson.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "leave_10",
    "category": "THE WAY YOU LEAVE",
    "type": "personality",
    "image": null,
    "text": "What kind of goodbye do you remember most from your own life?",
    "answers": [
      {
        "text": "A long one. With words. We knew it was the last time and we honored it.",
        "scores": {
          "luke": 3,
          "obiwan": 3,
          "han": 2,
          "finn": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "A sudden one. We thought we would have more time. We did not.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "obiwan": 3,
          "mando": 2
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "A silent one. We both knew. We just looked at each other.",
        "scores": {
          "mando": 3,
          "yoda": 2,
          "chewie": 2,
          "vader": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "white": 1
        }
      },
      {
        "text": "A return-someday kind. We did not say goodbye because we did not believe it was one.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "han": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "leave_11",
    "category": "THE WAY YOU LEAVE",
    "type": "personality",
    "image": null,
    "text": "When you leave a version of yourself behind, what happens to her?",
    "answers": [
      {
        "text": "She is still in me. Underneath. Sometimes she comes back to visit.",
        "scores": {
          "luke": 3,
          "obiwan": 3,
          "kylo": 3,
          "vader": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "She becomes a story I tell. A character. I can love her without being her.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "She fades. Slowly. Until one day I realize I cannot quite remember being her.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "boba": 2,
          "palpatine": 2
        },
        "saber": {
          "white": 2,
          "red": 1
        }
      },
      {
        "text": "I make sure she is taken care of. Even gone, she gets compassion.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "finn": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "leave_12",
    "category": "THE WAY YOU LEAVE",
    "type": "personality",
    "image": null,
    "text": "What kind of leaving is harder than people think?",
    "answers": [
      {
        "text": "Leaving a person who is still alive. Death is a clean kind of grief. Distance is not.",
        "scores": {
          "obiwan": 3,
          "vader": 3,
          "kylo": 3,
          "luke": 2
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "Leaving a place you outgrew. Nobody else sees the loss because the change looks like success.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 2,
          "han": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "Leaving a story about yourself. The one you have been telling for years. Letting it go is its own grief.",
        "scores": {
          "mace": 3,
          "kylo": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "yellow": 1
        }
      },
      {
        "text": "Leaving on a small disagreement. Big fights make sense. Small ones haunt.",
        "scores": {
          "mando": 3,
          "han": 3,
          "vader": 2,
          "luke": 2
        },
        "saber": {
          "blue": 2,
          "white": 2,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "leave_14",
    "category": "THE WAY YOU LEAVE",
    "type": "personality",
    "image": null,
    "text": "What do you do when someone refuses to let you leave?",
    "answers": [
      {
        "text": "I am gentle but clear. The leaving is not negotiable. Their feelings about it are valid.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "mando": 2,
          "luke": 2
        },
        "saber": {
          "blue": 3,
          "yellow": 1,
          "purple": 1
        }
      },
      {
        "text": "I leave anyway. The conversation does not change the truth of what I need.",
        "scores": {
          "han": 3,
          "boba": 3,
          "mando": 2,
          "vader": 2
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "text": "I sit with them. Long enough for them to hear it. Sometimes longer than I want to.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "quigon": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I delay. Not because I should. Because I cannot quite do the leaving when they are this close.",
        "scores": {
          "finn": 3,
          "kylo": 3,
          "luke": 2,
          "han": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "leave_15",
    "category": "THE WAY YOU LEAVE",
    "type": "personality",
    "image": null,
    "text": "What is the gift of leaving well?",
    "answers": [
      {
        "text": "The people you leave can let you go without confusion. The relationship can stay clean.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mando": 3,
          "mace": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "yellow": 1
        }
      },
      {
        "text": "You can come back. Maybe years later. The door you closed gently is the door that opens again.",
        "scores": {
          "quigon": 3,
          "obiwan": 3,
          "luke": 3,
          "han": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "The leaving teaches everyone something. Including the people watching.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mace": 3,
          "mando": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "You get to move on without the weight. Leaving badly leaves cargo. Leaving well does not.",
        "scores": {
          "mando": 3,
          "han": 3,
          "boba": 2,
          "mace": 2
        },
        "saber": {
          "white": 2,
          "blue": 2
        }
      }
    ]
  },
  {
    "id": "leave_16",
    "category": "THE WAY YOU LEAVE",
    "type": "scenario",
    "image": "",
    "text": "You are leaving someone you love because it is the right thing to do — even though they will not understand for years. What do you say in the moment?",
    "answers": [
      {
        "text": "I love you. That is the only thing they need to hear. The rest is for later.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "obiwan": 3,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "You will see. Someday. Not today.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "vader": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I am sorry. For what this looks like from where you stand right now.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "mace": 2,
          "kylo": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Nothing. I just go. Words would not survive the weight of what I am doing.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "vader": 2,
          "han": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "leave_17",
    "category": "THE WAY YOU LEAVE",
    "type": "personality",
    "image": null,
    "text": "How do you handle the days right after leaving something big?",
    "answers": [
      {
        "text": "I let myself feel it. Whatever shows up. I do not rush back into busy.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I get busy. Quickly. Movement is the medicine for that particular sting.",
        "scores": {
          "han": 3,
          "poe": 3,
          "mace": 2,
          "mando": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "I check in with the people I love. They keep me anchored when something just got cut loose.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "chewie": 2,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I have a hard time. More than I expected. Even when the leaving was right.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 2,
          "obiwan": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "leave_18",
    "category": "THE WAY YOU LEAVE",
    "type": "personality",
    "image": null,
    "text": "What is the difference between leaving and running away?",
    "answers": [
      {
        "text": "Leaving has a place you are going to. Running away just has a place you are getting out of.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "han": 2,
          "luke": 2
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "Leaving still loves what it is leaving. Running away has stopped.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mando": 3,
          "quigon": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "You can come back from leaving. You cannot come back from running away — the door is different.",
        "scores": {
          "quigon": 3,
          "obiwan": 3,
          "luke": 2,
          "mando": 2
        },
        "saber": {
          "green": 2,
          "blue": 2
        }
      },
      {
        "text": "Honestly? Sometimes I cannot tell which one I am doing until I get there.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "han": 2,
          "luke": 1
        },
        "saber": {
          "purple": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "leave_19",
    "category": "THE WAY YOU LEAVE",
    "type": "personality",
    "image": null,
    "text": "What do you take with you when you leave?",
    "answers": [
      {
        "text": "Almost nothing physical. The important things travel inside.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "One specific thing. Something small that the place gave me. A token.",
        "scores": {
          "mando": 3,
          "luke": 3,
          "obiwan": 2,
          "vader": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "My tools. My ship. What I need to keep doing what I do.",
        "scores": {
          "han": 3,
          "boba": 3,
          "mando": 2,
          "mace": 2
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      },
      {
        "text": "The people who fit in my next chapter. Everything else stays.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "han": 2,
          "finn": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "leave_20",
    "category": "THE WAY YOU LEAVE",
    "type": "personality",
    "image": null,
    "text": "Is there something you have not left yet that you know you need to?",
    "answers": [
      {
        "text": "Yes. I have been working up to it for a while. I will know when I am ready.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 2,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "Yes. And I am scared. The leaving is the right thing and I still hesitate.",
        "scores": {
          "finn": 3,
          "kylo": 3,
          "luke": 2,
          "vader": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "A story about myself. The version that does not fit me anymore. I am still wearing it.",
        "scores": {
          "obiwan": 3,
          "kylo": 3,
          "mace": 2,
          "luke": 2
        },
        "saber": {
          "blue": 2,
          "purple": 2
        }
      },
      {
        "text": "No. I leave what I need to leave. Quickly. I do not let things hang.",
        "scores": {
          "mando": 3,
          "han": 3,
          "boba": 3,
          "mace": 1
        },
        "saber": {
          "white": 3,
          "yellow": 1
        }
      }
    ]
  },
  {
    "id": "leave_21",
    "category": "THE WAY YOU LEAVE",
    "type": "personality",
    "image": null,
    "text": "What is the most graceful exit you have ever seen?",
    "answers": [
      {
        "text": "Someone who left quietly. No announcement. No drama. The grace was in the lack of show.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "mando": 3,
          "obiwan": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "Someone who made sure everyone else was okay before they went. Even when they did not have to.",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "vader": 2,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "Someone who left at the right time. Not too early. Not too late. The timing itself was the grace.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mace": 3,
          "han": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "yellow": 1
        }
      },
      {
        "text": "Someone who left without bitterness. After being hurt. That is the hardest one to do well.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "finn": 2,
          "mando": 1
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "leave_22",
    "category": "THE WAY YOU LEAVE",
    "type": "personality",
    "image": null,
    "text": "What do you imagine your final goodbye looking like?",
    "answers": [
      {
        "text": "Quiet. With the people I love near. Hands held. Few words. Just presence.",
        "scores": {
          "yoda": 3,
          "mando": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 2,
          "blue": 2
        }
      },
      {
        "text": "Mid-motion. Doing something. I do not picture myself stopping for it.",
        "scores": {
          "han": 3,
          "poe": 3,
          "boba": 2,
          "mace": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "With words. The right ones. The ones I have been holding for the right moment.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "finn": 2,
          "mando": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I have not imagined it. I do not think too much about it. I would rather just live.",
        "scores": {
          "han": 3,
          "boba": 3,
          "finn": 2,
          "grogu": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "leave_23",
    "category": "THE WAY YOU LEAVE",
    "type": "personality",
    "image": null,
    "text": "What do you want people to feel when you leave their lives?",
    "answers": [
      {
        "text": "Bigger than when I arrived. I want my leaving to leave them better.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Loved. They should know without question that I cared.",
        "scores": {
          "mando": 3,
          "luke": 3,
          "finn": 3,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Steady. Like the leaving did not break anything in them. The relationship can hold.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "mando": 2,
          "yoda": 2
        },
        "saber": {
          "blue": 3,
          "yellow": 1,
          "green": 1
        }
      },
      {
        "text": "Free. To live their own lives. My leaving should not be a weight.",
        "scores": {
          "yoda": 3,
          "han": 3,
          "obiwan": 2,
          "quigon": 2
        },
        "saber": {
          "green": 2,
          "white": 2,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "leave_24",
    "category": "THE WAY YOU LEAVE",
    "type": "personality",
    "image": null,
    "text": "What does leaving well teach you about staying?",
    "answers": [
      {
        "text": "That staying is a choice too. The good leavers are also good stayers.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mando": 2,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "That presence is fragile. Knowing how to leave makes me hold the time better while I am here.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "That every relationship has an end built in. That truth makes me kinder while I am in it.",
        "scores": {
          "obiwan": 3,
          "vader": 3,
          "mace": 2,
          "mando": 2
        },
        "saber": {
          "blue": 2,
          "purple": 2
        }
      },
      {
        "text": "That leaving and staying are made of the same material. Care, mostly. Just pointed different directions.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "leave_04",
    "category": "THE WAY YOU LEAVE",
    "type": "image-answer",
    "text": "Pick what leaving feels like to you.",
    "grid_prompt": "TBD",
    "answers": [
      {
        "image": "./assets/quiz/q-leave_04-a.png",
        
        "caption": "A Long Last Look",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "vader": 2,
          "finn": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-leave_04-b.png",
        
        "caption": "A Closed Door",
        "scores": {
          "yoda": 3,
          "mando": 3,
          "quigon": 2,
          "mace": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-leave_04-c.png",
        
        "caption": "A Ship Lifting Off",
        "scores": {
          "han": 3,
          "boba": 3,
          "poe": 2,
          "mando": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-leave_04-d.png",
        
        "caption": "A Letter Left Behind",
        "scores": {
          "luke": 3,
          "obiwan": 3,
          "finn": 2,
          "han": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "leave_08",
    "category": "THE WAY YOU LEAVE",
    "type": "image-answer",
    "text": "Pick what you leave behind.",
    "grid_prompt": "TBD",
    "answers": [
      {
        "image": "./assets/quiz/q-leave_08-a.png",
        
        "caption": "A Place That Shaped Me",
        "scores": {
          "luke": 3,
          "obiwan": 3,
          "finn": 3,
          "han": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-leave_08-b.png",
        
        "caption": "A Person I Loved",
        "scores": {
          "mando": 3,
          "vader": 3,
          "obiwan": 3,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-leave_08-c.png",
        
        "caption": "A Version of Myself",
        "scores": {
          "kylo": 3,
          "luke": 3,
          "finn": 2,
          "vader": 2
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-leave_08-d.png",
        
        "caption": "A Dream I Outgrew",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "mace": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "leave_13",
    "category": "THE WAY YOU LEAVE",
    "type": "image-answer",
    "text": "Pick what you take with you when you go.",
    "grid_prompt": "TBD",
    "answers": [
      {
        "image": "./assets/quiz/q-leave_13-a.png",
        
        "caption": "A Memory",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "vader": 3,
          "mando": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-leave_13-b.png",
        
        "caption": "A Lesson",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "mace": 3,
          "obiwan": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-leave_13-c.png",
        
        "caption": "A Friend",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "finn": 3,
          "han": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-leave_13-d.png",
        
        "caption": "Nothing",
        "scores": {
          "boba": 3,
          "han": 2,
          "palpatine": 2,
          "vader": 1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "leave_25",
    "category": "THE WAY YOU LEAVE",
    "type": "image-answer",
    "text": "Pick the kind of goodbye that feels most like you.",
    "grid_prompt": "TBD",
    "answers": [
      {
        "image": "./assets/quiz/q-leave_25-a.png",
        
        "caption": "A Quiet Word",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mando": 2,
          "quigon": 2
        },
        "saber": {
          "green": 2,
          "blue": 2
        }
      },
      {
        "image": "./assets/quiz/q-leave_25-b.png",
        
        "caption": "A Long Hug",
        "scores": {
          "chewie": 3,
          "finn": 3,
          "mando": 2,
          "luke": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-leave_25-c.png",
        
        "caption": "A Wave From a Distance",
        "scores": {
          "han": 3,
          "poe": 3,
          "boba": 2,
          "mando": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-leave_25-d.png",
        
        "caption": "A Promise",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 3,
          "mando": 2
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "force_01",
    "category": "THE WAY YOU FORCE",
    "type": "scenario",
    "image": "",
    "text": "There is a feeling some people talk about — a sense of being connected to something bigger than themselves. What is your honest relationship with it?",
    "answers": [
      {
        "text": "Real. Constant. Quiet. I feel it under everything. It is more reliable than my thoughts.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "grogu": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Real, but rare. I feel it sometimes. Mostly when I am quiet enough to notice.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mando": 2,
          "obiwan": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I am unsure. I want to believe in it. Some days I do.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "han": 2,
          "luke": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "Honestly? I trust what I can see. The rest is somebody else's job.",
        "scores": {
          "han": 3,
          "boba": 3,
          "mando": 2,
          "palpatine": 1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "force_02",
    "category": "THE WAY YOU FORCE",
    "type": "personality",
    "image": null,
    "text": "How do you listen to your gut?",
    "answers": [
      {
        "text": "Carefully. It speaks softly. I have to slow down to hear it.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Immediately. My gut is faster than my brain. I trust it first, justify it later.",
        "scores": {
          "han": 3,
          "poe": 3,
          "mando": 2,
          "finn": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "With caution. My gut has been wrong before. I want a second opinion from my head.",
        "scores": {
          "mace": 3,
          "obiwan": 3,
          "palpatine": 2,
          "luke": 2
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "Honestly, sometimes I cannot tell my gut from my fear. I am still learning the difference.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 2,
          "vader": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "force_03",
    "category": "THE WAY YOU FORCE",
    "type": "personality",
    "image": null,
    "text": "When you walk into a room, what do you notice first?",
    "answers": [
      {
        "text": "The feeling. Before anyone speaks. Rooms have weather.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 3,
          "obiwan": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "The exits. The angles. The people I should watch.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "han": 2,
          "mace": 2
        },
        "saber": {
          "white": 2,
          "yellow": 2
        }
      },
      {
        "text": "The faces. Who is here. Who I want to talk to. Who I need to avoid.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "finn": 2,
          "poe": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Who is in charge. Power tells me how the room is going to move.",
        "scores": {
          "palpatine": 3,
          "mace": 2,
          "vader": 2,
          "kylo": 2
        },
        "saber": {
          "yellow": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "force_05",
    "category": "THE WAY YOU FORCE",
    "type": "personality",
    "image": null,
    "text": "Have you ever known something was about to happen before it happened?",
    "answers": [
      {
        "text": "Yes. More than once. I do not always know how I knew.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 3,
          "obiwan": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "Yes, but only after. Looking back I see the signs. Looking forward I miss them.",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "mace": 2,
          "han": 2
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "Yes. And it scares me a little. I do not always want to know.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "finn": 2,
          "luke": 1
        },
        "saber": {
          "purple": 3,
          "red": 1
        }
      },
      {
        "text": "Not really. I think most \"knowing\" is pattern matching. The brain is fast.",
        "scores": {
          "han": 3,
          "palpatine": 2,
          "boba": 2,
          "mace": 1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "force_06",
    "category": "THE WAY YOU FORCE",
    "type": "personality",
    "image": null,
    "text": "What does it mean to be in the right place at the right time?",
    "answers": [
      {
        "text": "It means I was listening. Being in the right place is mostly paying attention.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "It means something larger arranged it. I just had to show up.",
        "scores": {
          "quigon": 3,
          "yoda": 3,
          "luke": 3,
          "grogu": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "It means I worked for it. People call it luck. It is preparation meeting an opening.",
        "scores": {
          "mace": 3,
          "mando": 3,
          "palpatine": 2,
          "boba": 2
        },
        "saber": {
          "yellow": 2,
          "white": 2
        }
      },
      {
        "text": "Honestly? It usually means nothing. Random things happen and we make them mean something later.",
        "scores": {
          "han": 3,
          "palpatine": 2,
          "boba": 2,
          "kylo": 1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "force_07",
    "category": "THE WAY YOU FORCE",
    "type": "personality",
    "image": null,
    "text": "When you are quiet — really quiet — what shows up?",
    "answers": [
      {
        "text": "A kind of presence. Like the room is full of something I cannot see but can feel.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "grogu": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "My thoughts. Loudly. Quiet is when I hear what is actually going on in me.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "luke": 2,
          "kylo": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Restlessness. I am not good at quiet. I have to work at it.",
        "scores": {
          "han": 3,
          "poe": 3,
          "kylo": 2,
          "mace": 1
        },
        "saber": {
          "white": 2,
          "red": 1,
          "purple": 1
        }
      },
      {
        "text": "The people I love. Their faces. Their voices. Quiet brings them close.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "luke": 2,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "force_09",
    "category": "THE WAY YOU FORCE",
    "type": "scenario",
    "image": "",
    "text": "You sit quietly somewhere beautiful. You let yourself feel the thing some people call the Force — or the spirit — or just the bigness. What comes up for you?",
    "answers": [
      {
        "text": "I feel held. Like the world has me, not the other way around.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I feel small. In the good way. Less weight on my shoulders for a minute.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "mando": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I feel connected. To people I love. To people I have never met. Like one big thing.",
        "scores": {
          "yoda": 3,
          "luke": 3,
          "quigon": 2,
          "grogu": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 2,
          "blue": 2
        }
      },
      {
        "text": "Honestly? Not much. I have to keep working on the quiet. It does not come easy.",
        "scores": {
          "han": 3,
          "kylo": 3,
          "mace": 2,
          "finn": 2
        },
        "saber": {
          "white": 2,
          "purple": 2
        }
      }
    ]
  },
  {
    "id": "force_10",
    "category": "THE WAY YOU FORCE",
    "type": "personality",
    "image": null,
    "text": "Do you believe everything is connected?",
    "answers": [
      {
        "text": "Yes. Deeply. Even the things that look separate are part of one whole.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I believe people are connected. The rest I am less sure about.",
        "scores": {
          "mando": 3,
          "luke": 3,
          "finn": 3,
          "obiwan": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I believe in patterns. Not magic. Patterns can look like connection from a distance.",
        "scores": {
          "mace": 3,
          "palpatine": 3,
          "han": 2,
          "boba": 2
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "white": 1
        }
      },
      {
        "text": "I am still figuring it out. I want to believe it. I am cautious about what I trust.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 2,
          "mando": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "force_11",
    "category": "THE WAY YOU FORCE",
    "type": "personality",
    "image": null,
    "text": "When you think about everything you cannot see — what the world is really made of — how does that feel?",
    "answers": [
      {
        "text": "Wonderful. The unseen is the best part. I want to know more, not less.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 3,
          "obiwan": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Heavy. The unseen has weight. Some of it is beautiful. Some of it is not.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "obiwan": 3,
          "mace": 2
        },
        "saber": {
          "purple": 2,
          "blue": 2,
          "red": 1
        }
      },
      {
        "text": "Calm. I do not need to understand it. I just need to live well inside of it.",
        "scores": {
          "mando": 3,
          "grogu": 3,
          "yoda": 2,
          "han": 2
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "white": 1
        }
      },
      {
        "text": "Honestly? I do not think about it much. Big questions are for when I have time.",
        "scores": {
          "han": 3,
          "poe": 3,
          "boba": 2,
          "palpatine": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "force_12",
    "category": "THE WAY YOU FORCE",
    "type": "personality",
    "image": null,
    "text": "How do you tell the difference between fear and a real warning?",
    "answers": [
      {
        "text": "A warning is steady. Fear is loud. The quiet voice is usually the true one.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I check my body. Fear is in my chest. A warning is lower — in my stomach. Different places.",
        "scores": {
          "mando": 3,
          "han": 3,
          "finn": 2,
          "mace": 2
        },
        "saber": {
          "blue": 2,
          "white": 2
        }
      },
      {
        "text": "I ask someone I trust. If they hear my fear, it is probably fear. If they go quiet, it might be real.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "mando": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Honestly, I am still learning. Sometimes I cannot tell until afterward.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 2,
          "han": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "force_14",
    "category": "THE WAY YOU FORCE",
    "type": "personality",
    "image": null,
    "text": "What is the closest thing you have had to a moment that felt magical?",
    "answers": [
      {
        "text": "A quiet one. With someone I loved. Time stopped for a second. I knew it while it was happening.",
        "scores": {
          "mando": 3,
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "In nature. Sky. Ocean. Forest. Some places do something to me I cannot explain.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 2,
          "grogu": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "When I knew something I should not have known. Once. Maybe twice.",
        "scores": {
          "yoda": 3,
          "vader": 3,
          "kylo": 3,
          "obiwan": 2
        },
        "saber": {
          "purple": 2,
          "blue": 1,
          "green": 1
        }
      },
      {
        "text": "Honestly? I am not sure. I have had moments I really enjoyed. I am not sure I would call them magical.",
        "scores": {
          "han": 3,
          "boba": 3,
          "mace": 2,
          "finn": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "force_15",
    "category": "THE WAY YOU FORCE",
    "type": "personality",
    "image": null,
    "text": "How do you feel about the idea that some things are meant to be?",
    "answers": [
      {
        "text": "I believe it. Not for everything. But for the big things. The right people find me.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I believe we make meaning afterward. The \"meant to be\" feeling is real, but it is something we build.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "han": 2,
          "luke": 2
        },
        "saber": {
          "blue": 2,
          "yellow": 2
        }
      },
      {
        "text": "I am torn. Some moments feel undeniable. Others feel like luck.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "kylo": 3,
          "mando": 2
        },
        "saber": {
          "blue": 2,
          "purple": 2
        }
      },
      {
        "text": "I do not. I believe in choices and consequences. The rest is a story we tell.",
        "scores": {
          "han": 3,
          "boba": 3,
          "palpatine": 2,
          "mace": 1
        },
        "saber": {
          "white": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "force_16",
    "category": "THE WAY YOU FORCE",
    "type": "scenario",
    "image": "",
    "text": "Someone hands you something they say is sacred. Old. Important to them. You hold it. What happens in you?",
    "answers": [
      {
        "text": "I feel it. The weight of what they are entrusting me with. The object is just the symbol.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mando": 3,
          "luke": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "I get still. Some things ask you to be quieter than you usually are.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "I look at it carefully. I want to honor it by really seeing it. Not just the surface.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "kylo": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Honestly? I am respectful. But I do not feel what they feel. The sacred for them might not be sacred for me.",
        "scores": {
          "han": 3,
          "boba": 3,
          "mace": 2,
          "palpatine": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "force_17",
    "category": "THE WAY YOU FORCE",
    "type": "personality",
    "image": null,
    "text": "When you make a decision based on a feeling, how often is it right?",
    "answers": [
      {
        "text": "Almost always. When I trust the feeling, I am usually right.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "Right enough. Not every time. But enough to keep listening.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "mando": 3,
          "finn": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "About as often as my head is right. They are roughly equal in my experience.",
        "scores": {
          "mace": 3,
          "han": 3,
          "obiwan": 2,
          "palpatine": 1
        },
        "saber": {
          "yellow": 3,
          "white": 1
        }
      },
      {
        "text": "Less than I would like to admit. My feelings have steered me wrong more than once.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "finn": 2,
          "han": 1
        },
        "saber": {
          "purple": 3,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "force_18",
    "category": "THE WAY YOU FORCE",
    "type": "personality",
    "image": null,
    "text": "What do you think happens after we die?",
    "answers": [
      {
        "text": "We become part of the larger thing we were already part of. Just without the body.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "We live on in the people we loved. That is the real afterlife. The rest is mystery.",
        "scores": {
          "mando": 3,
          "luke": 3,
          "obiwan": 2,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Honestly? I do not know. I try not to spend the living time figuring out the after.",
        "scores": {
          "han": 3,
          "poe": 3,
          "boba": 2,
          "mace": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "Something. I am not sure what. The not-knowing is part of what makes this life precious.",
        "scores": {
          "quigon": 3,
          "luke": 3,
          "finn": 2,
          "kylo": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "force_19",
    "category": "THE WAY YOU FORCE",
    "type": "personality",
    "image": null,
    "text": "How do you know when someone is lying to you, even if you cannot prove it?",
    "answers": [
      {
        "text": "I feel it. Before I can name it. The air gets thinner around them.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "I watch them carefully. Liars have tells. I just have to be paying attention.",
        "scores": {
          "mace": 3,
          "palpatine": 2,
          "boba": 2,
          "obiwan": 2
        },
        "saber": {
          "yellow": 3,
          "blue": 1
        }
      },
      {
        "text": "I check my own gut. If I want to believe them too much, that is usually the sign.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "han": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Honestly? Not always quickly. I have been fooled. The realizing comes later.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 2,
          "han": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "force_20",
    "category": "THE WAY YOU FORCE",
    "type": "personality",
    "image": null,
    "text": "What helps you trust the unseen?",
    "answers": [
      {
        "text": "Practice. The more I listen, the better the listening gets.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "A teacher who has done it before. Their certainty gives me permission for mine.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "kylo": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Evidence. I trust the unseen when its predictions are right. Otherwise I stay cautious.",
        "scores": {
          "mace": 3,
          "palpatine": 3,
          "han": 2,
          "boba": 2
        },
        "saber": {
          "yellow": 2,
          "red": 1,
          "white": 1
        }
      },
      {
        "text": "Quiet. The unseen is loud in quiet. I just have to give it room.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "mando": 2,
          "grogu": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "force_21",
    "category": "THE WAY YOU FORCE",
    "type": "personality",
    "image": null,
    "text": "What is the most spiritual thing you do that you do not call spiritual?",
    "answers": [
      {
        "text": "Sit alone outside. Mornings. Evenings. The air does most of the work.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 2,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "Make something with my hands. The making is its own quiet conversation.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "obiwan": 2,
          "vader": 2
        },
        "saber": {
          "white": 2,
          "blue": 2
        }
      },
      {
        "text": "Hold someone I love. The contact says things words cannot.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "chewie": 3,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Honestly, I am not sure I have one. Maybe that is something I am missing.",
        "scores": {
          "han": 3,
          "kylo": 3,
          "boba": 2,
          "finn": 1
        },
        "saber": {
          "white": 2,
          "purple": 2
        }
      }
    ]
  },
  {
    "id": "force_22",
    "category": "THE WAY YOU FORCE",
    "type": "personality",
    "image": null,
    "text": "When you imagine all the people who came before you — your ancestors, your teachers, anyone whose work made yours possible — what do you feel?",
    "answers": [
      {
        "text": "Gratitude. Enormous. I am standing on a thousand pairs of shoulders.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Responsibility. They put something in my hands. I owe it to them to carry it well.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "Connection. Like a long line stretching back. I am just one more link in something old.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "vader": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "Honestly, not much. I think most days I am just trying to handle today. They had their time. I have mine.",
        "scores": {
          "han": 3,
          "boba": 3,
          "poe": 2,
          "kylo": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "force_23",
    "category": "THE WAY YOU FORCE",
    "type": "personality",
    "image": null,
    "text": "What is the most important thing you have learned about the unseen?",
    "answers": [
      {
        "text": "It is real. Whether or not people believe in it.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "It works through us. Not around us. We are how the unseen acts in the world.",
        "scores": {
          "yoda": 3,
          "mace": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "yellow": 1
        }
      },
      {
        "text": "Trust it slowly. The unseen can be twisted. Not everything that feels right is good.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "vader": 2,
          "kylo": 2
        },
        "saber": {
          "blue": 2,
          "purple": 2
        }
      },
      {
        "text": "I am still in the early part of learning. I do not feel ready to teach what I know yet.",
        "scores": {
          "finn": 3,
          "kylo": 3,
          "luke": 2,
          "grogu": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "force_24",
    "category": "THE WAY YOU FORCE",
    "type": "personality",
    "image": null,
    "text": "What would you tell someone who said the unseen is not real?",
    "answers": [
      {
        "text": "Nothing. They will find it when they need it. Or they will not. Not my job to convince.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I respect it. They are not wrong to be careful. The unseen attracts a lot of bad ideas.",
        "scores": {
          "mace": 3,
          "obiwan": 3,
          "han": 2,
          "palpatine": 1
        },
        "saber": {
          "yellow": 2,
          "blue": 2
        }
      },
      {
        "text": "I would tell them about a time it saved me. Or a time it was right. Stories work where arguments do not.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "mando": 1
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "Honestly? I might agree with them sometimes. The unseen is a complicated thing to defend.",
        "scores": {
          "han": 3,
          "kylo": 3,
          "boba": 2,
          "mace": 1
        },
        "saber": {
          "white": 2,
          "purple": 2
        }
      }
    ]
  },
  {
    "id": "force_04",
    "category": "THE WAY YOU FORCE",
    "type": "image-answer",
    "text": "Pick what the unseen feels like to you.",
    "grid_prompt": "TBD",
    "answers": [
      {
        "image": "./assets/quiz/q-force_04-a.png",
        
        "caption": "A Warm Current",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-force_04-b.png",
        
        "caption": "A Quiet Whisper",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "mando": 2,
          "yoda": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-force_04-c.png",
        
        "caption": "A Hidden Edge",
        "scores": {
          "palpatine": 3,
          "vader": 3,
          "kylo": 2,
          "mace": 1
        },
        "saber": {
          "red": 2,
          "purple": 2
        }
      },
      {
        "image": "./assets/quiz/q-force_04-d.png",
        
        "caption": "Nothing I Can Name",
        "scores": {
          "han": 3,
          "boba": 3,
          "finn": 2,
          "mando": 1
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "force_08",
    "category": "THE WAY YOU FORCE",
    "type": "image-answer",
    "text": "Pick where the unseen finds you most easily.",
    "grid_prompt": "TBD",
    "answers": [
      {
        "image": "./assets/quiz/q-force_08-a.png",
        
        "caption": "In Nature",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "luke": 2,
          "grogu": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "image": "./assets/quiz/q-force_08-b.png",
        
        "caption": "In Stillness",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 2,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-force_08-c.png",
        
        "caption": "In a Loved One",
        "scores": {
          "mando": 3,
          "luke": 3,
          "finn": 3,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-force_08-d.png",
        
        "caption": "In My Own Work",
        "scores": {
          "mando": 3,
          "boba": 3,
          "mace": 2,
          "vader": 2
        },
        "saber": {
          "white": 2,
          "yellow": 2
        }
      }
    ]
  },
  {
    "id": "force_13",
    "category": "THE WAY YOU FORCE",
    "type": "image-answer",
    "text": "Pick what your inner compass looks like.",
    "grid_prompt": "TBD",
    "answers": [
      {
        "image": "./assets/quiz/q-force_13-a.png",
        
        "caption": "A Steady Flame",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 2,
          "mando": 2
        },
        "saber": {
          "green": 2,
          "blue": 2
        }
      },
      {
        "image": "./assets/quiz/q-force_13-b.png",
        
        "caption": "A Bright Beam",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 2,
          "mace": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-force_13-c.png",
        
        "caption": "A Sharp Point",
        "scores": {
          "mace": 3,
          "vader": 3,
          "palpatine": 2,
          "boba": 2
        },
        "saber": {
          "yellow": 2,
          "red": 2
        }
      },
      {
        "image": "./assets/quiz/q-force_13-d.png",
        
        "caption": "A Quiet Pull",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "grogu": 3,
          "obiwan": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "force_25",
    "category": "THE WAY YOU FORCE",
    "type": "image-answer",
    "text": "Pick what you most trust to guide you.",
    "grid_prompt": "TBD",
    "answers": [
      {
        "image": "./assets/quiz/q-force_25-a.png",
        
        "caption": "The Unseen",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-force_25-b.png",
        
        "caption": "My Own Mind",
        "scores": {
          "mace": 3,
          "palpatine": 3,
          "obiwan": 2,
          "mando": 2
        },
        "saber": {
          "yellow": 2,
          "blue": 1,
          "red": 1
        }
      },
      {
        "image": "./assets/quiz/q-force_25-c.png",
        
        "caption": "The People I Love",
        "scores": {
          "mando": 3,
          "luke": 3,
          "finn": 3,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-force_25-d.png",
        
        "caption": "My Own Hands",
        "scores": {
          "han": 3,
          "boba": 3,
          "mando": 2,
          "poe": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "surprise_01",
    "category": "THE WAY YOU SURPRISE",
    "type": "scenario",
    "image": "",
    "text": "You did something that surprised even you. What was it like in that moment?",
    "answers": [
      {
        "text": "Quiet. Almost slow. Like time made room for the bigger version of me to show up.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "vader": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "purple": 1
        }
      },
      {
        "text": "Sudden. Like something took over. The choice happened before I could think.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "han": 2,
          "vader": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Honest. A version of me I usually keep hidden walked through the door.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "kylo": 3,
          "finn": 2
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "I am not sure I have had that moment yet. Maybe I am still waiting for it.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 2,
          "grogu": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "surprise_02",
    "category": "THE WAY YOU SURPRISE",
    "type": "personality",
    "image": null,
    "text": "What version of yourself surprises you most often?",
    "answers": [
      {
        "text": "The brave one. I forget she lives in me until she shows up.",
        "scores": {
          "finn": 3,
          "luke": 3,
          "han": 2,
          "poe": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "The gentle one. People think I am tougher than I actually am.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "boba": 3,
          "mace": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1,
          "white": 1
        }
      },
      {
        "text": "The funny one. She is in there. She just does not always come out.",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "obiwan": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "The wise one. I sound like someone older than me when she speaks.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "surprise_03",
    "category": "THE WAY YOU SURPRISE",
    "type": "personality",
    "image": null,
    "text": "When have you done something that contradicted who you thought you were?",
    "answers": [
      {
        "text": "When I forgave someone I thought I never would.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "vader": 3,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "When I stayed for someone. The version of me I knew would have left.",
        "scores": {
          "mando": 3,
          "han": 3,
          "vader": 3,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "When I left for someone. The version of me I knew would have stayed.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "mando": 2,
          "vader": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "When I told the truth. The whole thing. I had planned to soften it.",
        "scores": {
          "mace": 3,
          "obiwan": 3,
          "mando": 2,
          "luke": 2
        },
        "saber": {
          "yellow": 2,
          "blue": 2,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "surprise_05",
    "category": "THE WAY YOU SURPRISE",
    "type": "personality",
    "image": null,
    "text": "What do people often get wrong about you?",
    "answers": [
      {
        "text": "They think I am harder than I am. The armor is mostly for protection, not personality.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "boba": 3,
          "kylo": 2
        },
        "saber": {
          "blue": 2,
          "purple": 2,
          "white": 1
        }
      },
      {
        "text": "They think I am softer than I am. The kindness is a choice. The strength under it is real.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "yoda": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "They think I have it together. I do not. I am improvising more than they realize.",
        "scores": {
          "han": 3,
          "poe": 3,
          "finn": 2,
          "kylo": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "They think I am simple. I am not. There is more in here than I usually show.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "grogu": 3,
          "boba": 2
        },
        "saber": {
          "blue": 2,
          "green": 2,
          "white": 1
        }
      }
    ]
  },
  {
    "id": "surprise_06",
    "category": "THE WAY YOU SURPRISE",
    "type": "personality",
    "image": null,
    "text": "What is something you can do that almost no one knows about?",
    "answers": [
      {
        "text": "I can stay calm in chaos. Other people lose it. I get steadier.",
        "scores": {
          "yoda": 3,
          "mando": 3,
          "mace": 3,
          "obiwan": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "yellow": 1
        }
      },
      {
        "text": "I can tell what people need. Without them saying. It is almost a sense.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "grogu": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "I can fix things. Hands-on things. I do not advertise it. But I am good at it.",
        "scores": {
          "mando": 3,
          "boba": 3,
          "han": 2,
          "vader": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "I can make people laugh on their worst days. It is not a trick. It is timing.",
        "scores": {
          "han": 3,
          "poe": 3,
          "chewie": 3,
          "finn": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "surprise_07",
    "category": "THE WAY YOU SURPRISE",
    "type": "personality",
    "image": null,
    "text": "When were you most surprised by your own courage?",
    "answers": [
      {
        "text": "When I spoke up. Quietly. Not loudly. The room got smaller when I did.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "luke": 2,
          "mando": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "When I went toward something I should have been afraid of. My feet just kept moving.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 3,
          "han": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "When I admitted I was wrong. Out loud. To someone who could use it against me.",
        "scores": {
          "obiwan": 3,
          "vader": 3,
          "mace": 2,
          "mando": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "When I let someone see me. Really see me. That took more than most of my fights.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "kylo": 3,
          "finn": 2
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "surprise_09",
    "category": "THE WAY YOU SURPRISE",
    "type": "scenario",
    "image": "",
    "text": "You meet a version of yourself from five years ago. They get to see who you are now. What surprises them most?",
    "answers": [
      {
        "text": "How steady I have become. The me from then was so loud inside.",
        "scores": {
          "yoda": 3,
          "mando": 3,
          "obiwan": 3,
          "mace": 2
        },
        "saber": {
          "green": 2,
          "blue": 2
        }
      },
      {
        "text": "Who is in my life. The people I love now are not the people I knew then.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mando": 2,
          "han": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "What I do not care about anymore. The things I worried over then are nothing now.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 2,
          "han": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      },
      {
        "text": "That I am still here. The me from then was not sure I would be.",
        "scores": {
          "kylo": 3,
          "vader": 3,
          "finn": 3,
          "luke": 2
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "surprise_10",
    "category": "THE WAY YOU SURPRISE",
    "type": "personality",
    "image": null,
    "text": "What surprises you about who you are becoming?",
    "answers": [
      {
        "text": "How much I sound like the people who raised me. For better and for worse.",
        "scores": {
          "luke": 3,
          "kylo": 3,
          "vader": 3,
          "obiwan": 2
        },
        "saber": {
          "blue": 2,
          "purple": 2
        }
      },
      {
        "text": "How patient I have gotten. Younger me would not recognize this version.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mace": 3,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "yellow": 1
        }
      },
      {
        "text": "How free I feel. I expected getting older to feel heavier. It does not.",
        "scores": {
          "han": 3,
          "yoda": 3,
          "poe": 2,
          "luke": 2
        },
        "saber": {
          "white": 2,
          "green": 2
        }
      },
      {
        "text": "How much love I have to give. There is more in me than I knew about.",
        "scores": {
          "mando": 3,
          "luke": 3,
          "finn": 3,
          "vader": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "surprise_11",
    "category": "THE WAY YOU SURPRISE",
    "type": "personality",
    "image": null,
    "text": "You think you are about to do one thing. Then you do another. What kind of pull made you switch?",
    "answers": [
      {
        "text": "My body knew before my head did. I just followed.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "mando": 3,
          "han": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "white": 1
        }
      },
      {
        "text": "Love. A face I love showed up in my head at the last second and I changed.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "luke": 2,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Something true. I was about to do the safe thing. The real thing knocked it off course.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "luke": 2,
          "mando": 2
        },
        "saber": {
          "blue": 3,
          "yellow": 1,
          "purple": 1
        }
      },
      {
        "text": "Honestly, I do not always know. Sometimes the switch just happens.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "han": 2,
          "grogu": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "surprise_12",
    "category": "THE WAY YOU SURPRISE",
    "type": "personality",
    "image": null,
    "text": "Have you ever shown someone the part of you that you never show anyone?",
    "answers": [
      {
        "text": "Yes. Once. It changed both of us.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "kylo": 3,
          "luke": 2
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "Yes. More than I used to. I am learning that hiding it costs more than showing it.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "kylo": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Almost. Many times. I have come close. I have not quite crossed the line.",
        "scores": {
          "mando": 3,
          "mace": 3,
          "vader": 2,
          "obiwan": 2
        },
        "saber": {
          "blue": 2,
          "yellow": 1,
          "purple": 1
        }
      },
      {
        "text": "Not yet. I am not sure I ever will. Some parts feel like mine alone.",
        "scores": {
          "boba": 3,
          "palpatine": 3,
          "vader": 2,
          "kylo": 1
        },
        "saber": {
          "white": 2,
          "red": 1
        }
      }
    ]
  },
  {
    "id": "surprise_14",
    "category": "THE WAY YOU SURPRISE",
    "type": "personality",
    "image": null,
    "text": "What is the most unexpected thing love has done to you?",
    "answers": [
      {
        "text": "Made me brave. I did not know I could do hard things until there was someone I would do them for.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "luke": 3,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Made me soft. I was hard before. The softening was a kind of becoming.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "boba": 2,
          "kylo": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Made me honest. I had been performing. Love did not need that version of me.",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "finn": 3,
          "mace": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "Made me patient. I had been in a hurry my whole life. Love asked me to slow down.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "surprise_15",
    "category": "THE WAY YOU SURPRISE",
    "type": "personality",
    "image": null,
    "text": "What do you do that no one would expect from someone like you?",
    "answers": [
      {
        "text": "I cry at small things. Music. A kind word. A small kindness from a stranger.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "chewie": 3,
          "mace": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "I take care of someone smaller than me. With surprising tenderness.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "chewie": 3,
          "obiwan": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I make art. Or I make food. Or I make some kind of beauty no one knows I make.",
        "scores": {
          "mando": 3,
          "obiwan": 3,
          "palpatine": 2,
          "kylo": 2
        },
        "saber": {
          "blue": 2,
          "white": 1,
          "purple": 1
        }
      },
      {
        "text": "I listen for a really long time. People come to me to talk and I just let them.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "surprise_16",
    "category": "THE WAY YOU SURPRISE",
    "type": "scenario",
    "image": "",
    "text": "You are in a moment you have been dreading. You suddenly do something kind. Where did the kindness come from?",
    "answers": [
      {
        "text": "From the part of me I forgot I had. The one I lost track of for years.",
        "scores": {
          "vader": 3,
          "kylo": 3,
          "luke": 3,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      },
      {
        "text": "From the person I love. I saw their face in my head and that decided it.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "luke": 2,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "From something I was taught a long time ago. The teaching came back when I needed it.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "quigon": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Honestly, I do not know. Kindness comes through me sometimes. I am just a door.",
        "scores": {
          "yoda": 3,
          "grogu": 3,
          "quigon": 2,
          "obiwan": 2
        },
        "saber": {
          "green": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "surprise_17",
    "category": "THE WAY YOU SURPRISE",
    "type": "personality",
    "image": null,
    "text": "What is the surprise about you that scares people?",
    "answers": [
      {
        "text": "How quiet I get when I am serious. The quiet is harder to read than the loud.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "boba": 3,
          "mace": 2
        },
        "saber": {
          "white": 2,
          "blue": 2,
          "yellow": 1
        }
      },
      {
        "text": "How fast I move when I have made up my mind. There is no delay between deciding and doing.",
        "scores": {
          "han": 3,
          "poe": 3,
          "mace": 3,
          "mando": 2
        },
        "saber": {
          "yellow": 2,
          "white": 2
        }
      },
      {
        "text": "How much I see. I notice things people do not want noticed.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "palpatine": 3,
          "quigon": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "yellow": 1
        }
      },
      {
        "text": "How much I would give up. I am willing to lose more than people expect.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "luke": 2,
          "obiwan": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "surprise_18",
    "category": "THE WAY YOU SURPRISE",
    "type": "personality",
    "image": null,
    "text": "What is the surprise about you that pleases people?",
    "answers": [
      {
        "text": "I remember things they did not think I noticed. Small things. Names. Dates. Their kids.",
        "scores": {
          "mando": 3,
          "obiwan": 3,
          "luke": 3,
          "finn": 2
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "I show up. When it counts. Even when I said I would not.",
        "scores": {
          "han": 3,
          "mando": 3,
          "chewie": 3,
          "vader": 3
        },
        "saber": {
          "white": 2,
          "blue": 2
        }
      },
      {
        "text": "I am funnier than they expected. The humor comes out when the pressure is highest.",
        "scores": {
          "han": 3,
          "poe": 3,
          "obiwan": 2,
          "finn": 2
        },
        "saber": {
          "white": 3,
          "blue": 1
        }
      },
      {
        "text": "I listen better than people who claim to listen. The attention is the gift.",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "mando": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "surprise_19",
    "category": "THE WAY YOU SURPRISE",
    "type": "personality",
    "image": null,
    "text": "What part of you would you most want someone you love to discover?",
    "answers": [
      {
        "text": "How much of my life is built around them. Even when I do not say it.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "han": 3,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "How much I think about big questions. Even when I am acting practical.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "How creative I am. Most people only see the part of me that gets things done.",
        "scores": {
          "obiwan": 3,
          "han": 2,
          "palpatine": 2,
          "kylo": 2
        },
        "saber": {
          "blue": 2,
          "white": 1,
          "purple": 1
        }
      },
      {
        "text": "How scared I sometimes am. So they know I am brave on purpose, not by default.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "kylo": 3,
          "han": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "surprise_20",
    "category": "THE WAY YOU SURPRISE",
    "type": "personality",
    "image": null,
    "text": "When have you done the right thing without knowing how you knew it was right?",
    "answers": [
      {
        "text": "A long time ago. The not-knowing was bigger than the knowing. I did it anyway.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "Recently. The pattern is starting to feel familiar.",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "mace": 2,
          "luke": 2
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "text": "Most times. I have learned to trust the inside voice more than the outside one.",
        "scores": {
          "yoda": 3,
          "mando": 3,
          "han": 2,
          "grogu": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "white": 1
        }
      },
      {
        "text": "Honestly, I am still working on it. I do not always know if I knew.",
        "scores": {
          "kylo": 3,
          "finn": 3,
          "luke": 2,
          "vader": 1
        },
        "saber": {
          "purple": 3,
          "blue": 1
        }
      }
    ]
  },
  {
    "id": "surprise_21",
    "category": "THE WAY YOU SURPRISE",
    "type": "personality",
    "image": null,
    "text": "What is the most surprising thing about being you?",
    "answers": [
      {
        "text": "How much room there is inside. I keep finding new floors I did not know about.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "obiwan": 2,
          "kylo": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "How steady I have gotten. Younger me would not believe it.",
        "scores": {
          "yoda": 3,
          "mando": 3,
          "obiwan": 3,
          "mace": 2
        },
        "saber": {
          "green": 2,
          "blue": 2,
          "yellow": 1
        }
      },
      {
        "text": "How much I love. It keeps surprising me. Every year there is more, not less.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "luke": 3,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "text": "How much I am still becoming. I thought I would be done by now. I am not.",
        "scores": {
          "yoda": 3,
          "kylo": 3,
          "luke": 2,
          "finn": 2
        },
        "saber": {
          "green": 2,
          "purple": 2
        }
      }
    ]
  },
  {
    "id": "surprise_22",
    "category": "THE WAY YOU SURPRISE",
    "type": "personality",
    "image": null,
    "text": "What is the moment that revealed who you really are?",
    "answers": [
      {
        "text": "A moment of mercy. When I could have done something hard and I chose not to.",
        "scores": {
          "luke": 3,
          "yoda": 3,
          "obiwan": 3,
          "vader": 3,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "A moment of staying. When everyone expected me to leave and I did not.",
        "scores": {
          "mando": 3,
          "chewie": 3,
          "finn": 3,
          "han": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "A moment of speaking. When I told the truth I had been holding for years.",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "luke": 2,
          "mando": 2
        },
        "saber": {
          "blue": 3,
          "yellow": 1,
          "purple": 1
        }
      },
      {
        "text": "A moment of choosing love over fear. When both were on the table and love won.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mando": 3,
          "vader": 3,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      }
    ]
  },
  {
    "id": "surprise_23",
    "category": "THE WAY YOU SURPRISE",
    "type": "personality",
    "image": null,
    "text": "What is the version of you that has not arrived yet — the one you are walking toward?",
    "answers": [
      {
        "text": "A quieter one. With more space inside. Less reactive. More present.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "mando": 3,
          "quigon": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "A braver one. Who says what she means without softening it.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mace": 2,
          "han": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "A wiser one. Who can be useful to people who are walking what I have walked.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "text": "A softer one. With the armor off. Around the people who deserve to see me.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "boba": 2,
          "kylo": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "surprise_24",
    "category": "THE WAY YOU SURPRISE",
    "type": "personality",
    "image": null,
    "text": "When you imagine telling the truth about yourself to someone who loves you — really telling it — what is the first thing you would say?",
    "answers": [
      {
        "text": "I love you more than I have ever said. By a lot. I have not had the words for it.",
        "scores": {
          "mando": 3,
          "vader": 3,
          "han": 3,
          "chewie": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "text": "I am scared sometimes. Even though I do not look it.",
        "scores": {
          "luke": 3,
          "finn": 3,
          "mace": 3,
          "mando": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "text": "I am proud of you. So much. Even when I do not show it well.",
        "scores": {
          "obiwan": 3,
          "mando": 3,
          "vader": 3,
          "yoda": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1,
          "purple": 1
        }
      },
      {
        "text": "I see you. The real you. The one you are not sure anyone notices.",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "luke": 3,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "surprise_04",
    "category": "THE WAY YOU SURPRISE",
    "type": "image-answer",
    "text": "Pick the surprise you most often are.",
    "grid_prompt": "TBD",
    "answers": [
      {
        "image": "./assets/quiz/q-surprise_04-a.png",
        
        "caption": "A Hidden Softness",
        "scores": {
          "mando": 3,
          "vader": 3,
          "boba": 3,
          "kylo": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-surprise_04-b.png",
        
        "caption": "A Sudden Courage",
        "scores": {
          "finn": 3,
          "luke": 3,
          "poe": 2,
          "han": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-surprise_04-c.png",
        
        "caption": "A Deep Wisdom",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 2,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-surprise_04-d.png",
        
        "caption": "A Quiet Strength",
        "scores": {
          "mando": 3,
          "mace": 3,
          "obiwan": 3,
          "vader": 2
        },
        "saber": {
          "blue": 2,
          "yellow": 2
        }
      }
    ]
  },
  {
    "id": "surprise_08",
    "category": "THE WAY YOU SURPRISE",
    "type": "image-answer",
    "text": "Pick the gesture that surprised you most about yourself.",
    "grid_prompt": "TBD",
    "answers": [
      {
        "image": "./assets/quiz/q-surprise_08-a.png",
        
        "caption": "Letting Someone In",
        "scores": {
          "mando": 3,
          "vader": 3,
          "kylo": 3,
          "finn": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-surprise_08-b.png",
        
        "caption": "Walking Away",
        "scores": {
          "obiwan": 3,
          "luke": 3,
          "mando": 2,
          "han": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-surprise_08-c.png",
        
        "caption": "Saying the True Thing",
        "scores": {
          "obiwan": 3,
          "mace": 3,
          "luke": 2,
          "mando": 2
        },
        "saber": {
          "blue": 3,
          "yellow": 1
        }
      },
      {
        "image": "./assets/quiz/q-surprise_08-d.png",
        
        "caption": "Choosing Mercy",
        "scores": {
          "yoda": 3,
          "luke": 3,
          "vader": 3,
          "obiwan": 3,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "surprise_13",
    "category": "THE WAY YOU SURPRISE",
    "type": "image-answer",
    "text": "Pick the moment that revealed who you really are.",
    "grid_prompt": "TBD",
    "answers": [
      {
        "image": "./assets/quiz/q-surprise_13-a.png",
        
        "caption": "A Hand Offered",
        "scores": {
          "luke": 3,
          "mando": 3,
          "obiwan": 3,
          "vader": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "green": 1
        }
      },
      {
        "image": "./assets/quiz/q-surprise_13-b.png",
        
        "caption": "A Helmet Removed",
        "scores": {
          "mando": 3,
          "vader": 3,
          "boba": 2,
          "kylo": 2
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-surprise_13-c.png",
        
        "caption": "A Sword Lowered",
        "scores": {
          "yoda": 3,
          "luke": 3,
          "obiwan": 3,
          "vader": 3,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-surprise_13-d.png",
        
        "caption": "A Door Held Open",
        "scores": {
          "yoda": 3,
          "quigon": 3,
          "obiwan": 3,
          "mando": 2,
          "palpatine": -3
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      }
    ]
  },
  {
    "id": "surprise_25",
    "category": "THE WAY YOU SURPRISE",
    "type": "image-answer",
    "text": "Pick the final picture of who you are becoming.",
    "grid_prompt": "TBD",
    "answers": [
      {
        "image": "./assets/quiz/q-surprise_25-a.png",
        
        "caption": "Someone Quieter",
        "scores": {
          "yoda": 3,
          "mando": 3,
          "obiwan": 3,
          "quigon": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-surprise_25-b.png",
        
        "caption": "Someone Braver",
        "scores": {
          "luke": 3,
          "finn": 3,
          "poe": 3,
          "mace": 2
        },
        "saber": {
          "blue": 3,
          "white": 1
        }
      },
      {
        "image": "./assets/quiz/q-surprise_25-c.png",
        
        "caption": "Someone Wiser",
        "scores": {
          "yoda": 3,
          "obiwan": 3,
          "quigon": 3,
          "luke": 2
        },
        "saber": {
          "green": 3,
          "blue": 1,
          "purple": 1
        }
      },
      {
        "image": "./assets/quiz/q-surprise_25-d.png",
        
        "caption": "Someone Softer",
        "scores": {
          "mando": 3,
          "vader": 3,
          "kylo": 2,
          "boba": 2,
          "palpatine": -3
        },
        "saber": {
          "blue": 3,
          "purple": 1
        }
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUESTION_BANK;
}
