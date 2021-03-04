/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

monogatari.storage ({
	bff: false,
	dog: false,
	chief: false,
	moneylender: false,
	adventurer: false,
	cartographer: false,
	plaguedoc: false,
	merchant: false
});

function choicesMade() {
	let count = monogatari.storage('bff') + monogatari.storage('dog') + monogatari.storage('chief')
				+ monogatari.storage('moneylender') + monogatari.storage('adventurer') + monogatari.storage('cartographer')
				+ monogatari.storage('plaguedoc')+ monogatari.storage('merchant')
	console.log(count)
	return count >= 4
}

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'silkroad': 'silkroad-map.jpg',
	'nightfall': 'nightfallarrives.jpg',
	'meetinglocation': 'meetinglocation.jpg',
	'chinesevillage': 'chinesevillage1.jpg',
	'colddesert': 'colddesert.jpg',
	'cooldesert': 'cooldesert.jpg',
	'desertsunrise': 'desertsunrise.jpg',
	'homevillage': 'homevillage.jpg',
	'lakesights': 'lakesights.jpg',
	'oasis': 'oasis.jpg',
	'snakesindesert': 'snakesindesert.jpg',
	'cave': 'cave.jpg'
});

// Define the Characters
monogatari.characters ({
	'bff': {
		name: 'BFF',
		color: '#5bcaff',
		sprites: {
            normal: 'bff.png',
        },
        expressions: {
            normal: 'expressions/bff.png',
        },
		default_expression: 'normal',
	},
	'adventurer': {
		name: 'Adventurer',
		color: 'ff0000',
		sprites: {
            normal: 'adventurer.png',
        },
        expressions: {
            normal: 'expressions/adventurer.png',
        },
		default_expression: 'normal',
	},
	'you': {
		name: 'You',
		color: 'ff0000',
		sprites: {
            normal: 'you.png',
        },
        expressions: {
            normal: 'expressions/you.png',
        },
		default_expression: 'normal',
	},
	'merchant': {
		name: 'Merchant',
		color: 'ff0000',
		sprites: {
            normal: 'merchant.png',
        },
        expressions: {
            normal: 'expressions/merchant.png',
        },
		default_expression: 'normal',
	},
	'moneylender': {
		name: 'Moneylender',
		color: 'ff0000',
		sprites: {
            normal: 'moneylender.png',
        },
        expressions: {
            normal: 'expressions/moneylender.png',
        },
		default_expression: 'normal',
	},
	'cartographer': {
		name: 'Cartographer',
		color: 'ff0000',
		sprites: {
            normal: 'cartographer.png',
        },
        expressions: {
            normal: 'expressions/cartographer.png',
        },
		default_expression: 'normal',
	},
	'chief': {
		name: 'Chief',
		color: 'ff0000',
		sprites: {
            normal: 'chief.png',
        },
        expressions: {
            normal: 'expressions/chief.png',
        },
		default_expression: 'normal',
	},
	'plaguedoc': {
		name: 'Plaguedoc',
		color: 'ff0000',
		sprites: {
            normal: 'plaguedoc.png',
        },
        expressions: {
            normal: 'expressions/plaguedoc.png',
        },
		default_expression: 'normal',
	},
	'dog': {
		name: 'Pet Dog',
		color: 'ff0000',
		sprites: {
			normal: 'dog.png'
		},
		expressions: {
			normal: 'expressions/dog.png'
		},
		default_expression: 'normal'
	},
	'?': {
		name: '???',
		color: 'ff0000',
		sprites: {
            normal: 'plaguedoc.png',
        },
        expressions: {
            normal: 'expressions/plaguedoc.png',
        },
		default_expression: 'normal',
	},
	'??': {
		name: '???',
		color: 'ff0000',
		sprites: {
            normal: 'moneylender.png',
        },
        expressions: {
            normal: 'expressions/moneylender.png',
        },
		default_expression: 'normal',
	},
	'???': {
		name: '???',
		color: 'ff0000',
		sprites: {
            normal: 'chief.png',
        },
        expressions: {
            normal: 'expressions/chief.png',
        },
		default_expression: 'normal',
	},
	'thief': {
		name: 'thief',
		color: 'ff0000',
		sprites: {
            normal: 'thief.png',
        },
        expressions: {
            normal: 'expressions/thief.png',
        },
		default_expression: 'normal',
	},
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene silkroad with fadeIn',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'Hi {{player.name}}!! Welcome to Silk Road, here you will learn how our ancestors in the past used to navigate the treacherous roads. Can you successfully cross it and seal a deal with China? Only time will tell!',
		'show scene nightfall with fadeIn',
		'As you open your eyes, a desolate path stretches out in front of you, winds howling menacingly, whipping your scarf around. The temperature is -3 degrees and it is a chilling night. You remember your parent, making the trip to beyond the mountains, only to never return. "Stay far away from the paths" they warned. "It will do you no good to follow us". You sigh, unable to fulfil even their last request. ',
		{
			'Choice': {
				'Dialog': 'Do you want to reconsider your quest',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Start'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No-1'
				}
			}
		}
	],

	'No-1': [
		'A cheeky voice floats in the air',
		'show character bff normal at right with fadeIn',
		'bff We can simply go back and have fun',
		'You sigh. Your childhood best friend BFF, cheerful as they may be, are a menace most of the times, always trying to coax you into giving into their hedonistic ways of life ',
		'show character you normal at center with fadeIn',
		'you Not now BFF, I\'m trying to map out how to use the road to sell our products',
		'BFF frowned, unusually serious. ',
		'bff I most definitely do not need to tell you how dangerous it is right? Why would you risk your neck this way? Stay in the village, where everyone will remain safe',
		'you You know too, that the harvest this year wasn\'t good, we need to earn our livelihood somehow, before we perish. It\'s so rare being you serious it\'s creepy, lighten up',
		'You joked, attempting to shift his train of thought before he got deep into it. BFF, despite being a pain, was also your deeply cherished friend after all, and you wouldn\'t lose him for anythig. Worrying him would do no one any good. The silk road had been shut down, forbidden to enter, after the last pair of travellers failed to come back. The villagers were afraid of it. They called it cursed. The feared the mountain gods were taking revenge for them daring to defile the holy mountains. However, winter harvest was failing. People were slowly beginning to lose hope. At this rate, our whole village would be wiped out. I have to do something, I silently vowed. ',
		'you I will protect my family',
		'bff Oh no. I know that look in your eyes, it\'s when you think of TERRIBLE ideas, so stop immediately',
		'BFF knew what you were thinking, the minute they set foot on the road. He sighed.',
		'bff Alright. Meet me tomorrow night, by the tree. I will gather some people who might be helpful to you. And I am coming as well',
		'You breathed a sigh of relief. Atleast they weren\'t going to stop you. Although you didn\'t want them accompanying you on this potential suicide mission. Oh well. That\'s a problem for future me! For now let\'s focus on getting ready for the trip!',
		'jump make-choices'
	],
	'make-choices': [
		'show scene meetinglocation with fadeIn',
		'show character you normal at center with fadeIn',
		'you Welcome guys, thanks for coming here on such short notice',
		'? No problem, I would like to help',
		'?? Me too',
		'??? Don\'t forget about me',
		'You stare at the group, deep in thought. Who would be suitable for me to take on this trip? Explore what they have to say and choose four of them.',
		'show character chief normal at right with fadeIn',
		'chief I\'m sure you will need my experience, young one, after all, it was I who gave my people permission to travel the silk roads',
		'hide character chief with fadeOut',
		'show character bff normal at right with fadeIn',
		'bff You are GOING to take me, whether you like it or not!!! It\'s too dangerous to go alone. You need me, to have fun on this trip!',
		'hide character bff with fadeOut',
		'show character dog normal at right with fadeIn',
		'dog Woof',
		'hide character dog with fadeOut',
		'show character moneylender normal at right with fadeIn',
		'moneylender If you need any money, let me know, I will give you special interest rates too!',
		'hide character moneylender with fadeOut',
		'show character adventurer normal at right with fadeIn',
		'adventurer I can do anything, from fighting robbers, to lighting fires! I\'m sure you might find some use of me',
		'hide character adventurer with fadeOut',
		'show character cartographer normal at right with fadeIn',
		'cartographer Hmmm, I\'m a bit scared of the Silk Road, but there is nobody who could give directions better than me',
		'hide character cartographer with fadeOut',
		'show character plaguedoc normal at right with fadeIn',
		'plaguedoc I\'m sure you might find my knowledge of poisonous herbs and their antidotes valuable',
		'hide character plaguedoc with fadeOut',
		'show character merchant normal at right with fadeIn',
		'merchant I don\'t think it is profitable to risk my life, but if you need to know, there is nobody in the village who can better sell your goods!',
		'hide character merchant with fadeOut',
		'show character chief normal at right with fadeIn',
		function () {
			this.storage().adventurer = false
			this.storage().cartographer = false
			this.storage().plaguedoc = false
			this.storage().merchant = false
		},
		{
			'Choice': {
				'Dialog': 'Do you want to take village chief with you?',
				'Yes': {
					'Text': 'Yes',
					'Do': function () {
						this.storage().chief = true
					}
				},
				'No': {
					'Text': 'No',
					'Do': function () {
						this.storage().chief = false
					}
				}
			}
		},
		'hide character chief with fadeOut',
		'show character bff normal at right with fadeIn',
		{
			'Choice': {
				'Dialog': 'Do you want to take your BFF with you?',
				'Yes': {
					'Text': 'Yes',
					'Do': function () {
						this.storage().bff = true
					}
				},
				'No': {
					'Text': 'No',
					'Do': function () {
						this.storage().bff = false
					}
				}
			}
		},
		'hide character bff with fadeOut',
		'show character dog normal at right with fadeIn',
		{
			'Choice': {
				'Dialog': 'Do you want to take your pet dog with you?',
				'Yes': {
					'Text': 'Yes',
					'Do': function () {
						this.storage().dog = true
					}
				},
				'No': {
					'Text': 'No',
					'Do': function () {
						this.storage().dog = false
					}
				}
			}
		},
		'hide character dog with fadeOut',
		'show character moneylender normal at right with fadeIn',
		{
			'Choice': {
				'Dialog': 'Do you want to take money lender with you?',
				'Yes': {
					'Text': 'Yes',
					'Do': function () {
						this.storage().moneylender = true
					}
				},
				'No': {
					'Text': 'No',
					'Do': function () {
						this.storage().moneylender = false
					}
				}
			}
		},
		'hide character moneylender with fadeOut',
		'jump adventurer-choice'
	],
	'adventurer-choice': [
		{'Conditional': {
			'Condition': choicesMade,
			'True': 'jump adventure-starts',
			'False': 'show character adventurer normal at right with fadeIn'
		}},
		{
			'Choice': {
				'Dialog': 'Do you want to take aventurer with you?',
				'Yes': {
					'Text': 'Yes',
					'Do': function () {
						this.storage().adventurer = true
					}
				},
				'No': {
					'Text': 'No',
					'Do': function () {
						this.storage().adventurer = false
					}
				}
			}
		},
		'hide character adventurer with fadeOut',
		'jump cartographer-choice'
	],
	'cartographer-choice': [
		{'Conditional': {
			'Condition': choicesMade,
			'True': 'jump adventure-starts',
			'False': 'show character cartographer normal at right with fadeIn'
		}},
		{
			'Choice': {
				'Dialog': 'Do you want to take cartographer with you?',
				'Yes': {
					'Text': 'Yes',
					'Do': function () {
						this.storage().cartographer = true
					}
				},
				'No': {
					'Text': 'No',
					'Do': function () {
						this.storage().cartographer = false
					}
				}
			}
		},
		'hide character cartographer with fadeOut',
		'jump plaguedoc-choice'
	],
	'plaguedoc-choice': [
		{'Conditional': {
			'Condition': choicesMade,
			'True': 'jump adventure-starts',
			'False': 'show character plaguedoc normal at right with fadeIn'
		}},
		{
			'Choice': {
				'Dialog': 'Do you want to take plague doctor with you?',
				'Yes': {
					'Text': 'Yes',
					'Do': function () {
						this.storage().plaguedoc = true
					}
				},
				'No': {
					'Text': 'No',
					'Do': function () {
						this.storage().plaguedoc = false
					}
				}
			}
		},
		'hide character plaguedoc with fadeOut',
		'jump merchant-choice'
	],
	'merchant-choice': [
		{'Conditional': {
			'Condition': choicesMade,
			'True': 'jump adventure-starts',
			'False': 'show character merchant normal at right with fadeIn'
		}},
		{
			'Choice': {
				'Dialog': 'Do you want to take merchant with you?',
				'Yes': {
					'Text': 'Yes',
					'Do': function () {
						this.storage().merchant = true
					}
				},
				'No': {
					'Text': 'No',
					'Do': function () {
						this.storage().merchant = false
					}
				}
			}
		},
		'hide character merchant with fadeOut',
		'jump adventure-starts'
	],
	'adventure-starts': [
		'You choose your members, with a heavy heart, the others decide to go back. You decide to borrow the experience of the village chief, who is surely wise beyond his years. You do not need the adventurer for your mission. You travel with your food suppy and rations. The first night is uneventful.',
		'show scene lakesights with fadeIn',
		'You see beautiful sights of the lakes',
		'show scene cooldesert with fadeIn',
		'Cool deserts',
		'show scene desertsunrise with fadeIn',
		'And incredibly gorgeous sunrise',
		'jump quiz-1'
	],
	'quiz-1': [
		{
			'Choice': {
				'Dialog': 'Quick Quiz Time: Why do you think people used the Silk route, despite being dangerous?',
				'A': {
					'Text': 'For Silk trade and important exchange of goods',
					'Do': function() {
						this.storage().quiz1 = '1'
					}
				},
				'B': {
					'Text': 'Spirit of adventure',
					'Do': function() {
						this.storage().quiz1 = '2'
					},
				},
				'C': {
					'Text': 'It was a fun exercise',
					'Do': function() {
						this.storage().quiz1 = '3'
					},
				},
				'D': {
					'Text': 'They wanted to live in China',
					'Do': function() {
						this.storage().quiz1 = '4'
					},
				}
			}
		},
		{'Conditional': {
			'Condition': function(){
				return this.storage().quiz1;
			},
			'1': 'Congratulations! You got it.',
			'2': 'Not quite, try again!',
			'3': 'The Silk route was very dangerous!!',
			'4': 'We love Leh!',
		}},
		{'Conditional': {
			'Condition': function(){
				return this.storage().quiz1;
			},
			'1': 'jump adventure-adventurer',
			'2': 'jump quiz-1',
			'3': 'jump quiz-1',
			'4': 'jump quiz-1',
		}},
	],
	'quiz-2': [
		{
			'Choice': {
				'Dialog': 'Quick Quiz Time: What are the 4 major contributions made to civilization by China?',
				'A': {
					'Text': 'Compass',
					'Do': function() {
						this.storage().quiz2 = false
					}
				},
				'B': {
					'Text': 'Papermaking',
					'Do': function() {
						this.storage().quiz2 = false
					},
				},
				'C': {
					'Text': 'Printing',
					'Do': function() {
						this.storage().quiz2 = false
					},
				},
				'D': {
					'Text': 'Gunpowder',
					'Do': function() {
						this.storage().quiz2 = false
					},
				},
				'E': {
					'Text': 'All of the above',
					'Do': function() {
						this.storage().quiz2 = true
					},
				},
			}
		},
		{'Conditional': {
			'Condition': function(){
				return this.storage().quiz2;
			},
			'True': 'Congratulations! You got it.',
			'False': 'Not quite, try again!'
		}},
		{'Conditional': {
			'Condition': function(){
				return this.storage().quiz2;
			},
			'True': 'jump adventure-cartographer',
			'False': 'jump quiz-2',
		}},
	],
	'quiz-3': [
		{
			'Choice': {
				'Dialog': 'Quick Quiz Time: How were most goods transported via the Silk Road?',
				'A': {
					'Text': 'Horses',
					'Do': function() {
						this.storage().quiz3 = false
					}
				},
				'B': {
					'Text': 'Boats',
					'Do': function() {
						this.storage().quiz3 = false
					},
				},
				'C': {
					'Text': 'In a Caravan of Camels',
					'Do': function() {
						this.storage().quiz3 = true
					},
				},
				'D': {
					'Text': 'By Foot',
					'Do': function() {
						this.storage().quiz3 = false
					},
				},
				'E': {
					'Text': 'Bus',
					'Do': function() {
						this.storage().quiz3 = false
					},
				},
			}
		},
		{'Conditional': {
			'Condition': function(){
				return this.storage().quiz3;
			},
			'True': 'Congratulations! You got it.',
			'False': 'Not quite, try again!'
		}},
		{'Conditional': {
			'Condition': function(){
				return this.storage().quiz3;
			},
			'True': 'jump adventure-plaguedoc',
			'False': 'jump quiz-3',
		}},
	],
	'quiz-4': [
		{
			'Choice': {
				'Dialog': 'Quick Quiz Time: Under which dynasty in China did the Silk Road flourish?',
				'A': {
					'Text': 'Tang Dynasty',
					'Do': function() {
						this.storage().quiz4 = true
					}
				},
				'B': {
					'Text': 'Ming Dynasty',
					'Do': function() {
						this.storage().quiz4 = false
					},
				},
				'C': {
					'Text': 'Song Dynasty',
					'Do': function() {
						this.storage().quiz4 = false
					},
				},
				'D': {
					'Text': 'Han Dynasty',
					'Do': function() {
						this.storage().quiz4 = false
					},
				},
			}
		},
		{'Conditional': {
			'Condition': function(){
				return this.storage().quiz4;
			},
			'True': 'Congratulations! You got it.',
			'False': 'Not quite, try again!'
		}},
		{'Conditional': {
			'Condition': function(){
				return this.storage().quiz4;
			},
			'True': 'jump adventure-merchant',
			'False': 'jump quiz-4',
		}},
	],
	'quiz-5': [
		{
			'Choice': {
				'Dialog': 'Quick Quiz Time: What famous explorer is thought to have traveled along the Silk Road on his way to China?',
				'A': {
					'Text': 'Alexander Zimmer',
					'Do': function() {
						this.storage().quiz5 = false
					}
				},
				'B': {
					'Text': 'Vasco da Gama',
					'Do': function() {
						this.storage().quiz5 = false
					},
				},
				'C': {
					'Text': 'Marco Polo',
					'Do': function() {
						this.storage().quiz5 = true
					},
				},
				'D': {
					'Text': 'Abraham Lincon',
					'Do': function() {
						this.storage().quiz5 = false
					},
				},
			}
		},
		{'Conditional': {
			'Condition': function(){
				return this.storage().quiz5;
			},
			'True': 'Congratulations! You got it.',
			'False': 'Not quite, try again!'
		}},
		{'Conditional': {
			'Condition': function(){
				return this.storage().quiz5;
			},
			'True': 'Thanks for taking the time out for playing this game',
			'False': 'jump quiz-5',
		}},
		'Credits: Arti Vedula, Ashoka Shringla, Charan N.A, Abdul Kadir, Dhruv Mongia, Shruthi Nagarajan, Abha Ashapure, Cherie Singh, Roopal Shah'
	],
	'adventure-adventurer': [
		'show scene nightfall with fadeIn',
		'Nightfall arrives: You look at the beautiful night sky, the wind whispering gently in your ear, the stars glittering, you sigh, content. You wonder why everyone was so afraid of the Silk route, it was beautiful.',
		'show scene cave with fadeIn',
		'show character you normal at center with fadeIn',
		'You gather around with your members, looking for a suitable place to spend the night. You notice a source of light in the distance, and decide to follow it. You come to a cave (scene) that seems to be unoccupied. You decide to gather some firewood to create light to scare wild animals away. Finally, everyone is comfortable and well settled.',
		'Suddenly, from the distance, you hear a muffled sound. Wait, sound? We were the only ones supposed to be on the Silk road!! With increasing trepidation, you try to listen as carefully as possible. You hear the sound of metal. It\'s too dangerous to run, the cave is too small to hide, you can do nothing but wait for the unknown assailants to enter, and hopefully not be hostile.',
		'thief Give us everything you have!',
		{'Conditional': {
			'Condition': function(){
				return this.storage().adventurer;
			},
			'True': 'show character adventurer normal at right with fadeIn',
			'False': 'jump bad-ending-1'
		}},
		'You stare at your group members, startled. You were not aware that this part of the Silk road was infested by bandits. Fortunately, you decided to not take a chance with the safety of your members and brought the adventurer along with you. The adventurer quickly and efficiently dispatches the bandits, and you decide it best to move to a different resting area, for fear of attracting more dangerous animals or the bandits\' comrades. ',
		'jump quiz-2'
	],
	'adventure-cartographer': [
		'show scene colddesert with fadeIn',
		'show character you normal at center with fadeIn',
		'After a few days of travel, your group members finally reach the vast, cold desert, where the caravan trails end. You look helplessly at the open desert, being unable to determine which way would be the correct way to go.',
		{'Conditional': {
			'Condition': function(){
				return this.storage().cartographer;
			},
			'True':  'show character cartographer normal at right with fadeIn',
			'False': 'jump bad-ending-2'
		}},
		'However, the timid cartographer, starts to guide your group expertly through the sand dunes. You look on, relieved that you had the foresight to include the cartographer in your group. Almost no time seems to pass, before the sandy soils give way to firmer ground, and you begin to see the end in sight. ',
		'jump quiz-3'
	],
	'adventure-plaguedoc': [
		'show scene snakesindesert with fadeIn',
		'show character you normal at center with fadeIn',
		'Excited and energized, your group makes way across the shrubbery. In your haste, you fail to notice a nest of rattlesnakes on the ground, that you accidentally step into. It hapens so fast, there is almost no time to react, you feel yourself frothing at the mouth, and convulsing uncontrollably.',
		{'Conditional': {
			'Condition': function(){
				return this.storage().plaguedoc;
			},
			'True': 'show character plaguedoc normal at right with fadeIn',
			'False': 'jump bad-ending-3'
		}},
		'With a startling speed, the doctor whips out his bag, and applies a salve on the infected area. You feel your eyelids drooping, however under the doctor\'s expert care, you are no longer by death\'s door. Your group rests for a while, to give you a chance to regain your strength, before finally reaching the end of the road.',
		'jump quiz-4'
	],
	'adventure-merchant': [
		'show scene chinesevillage with fadeIn',
		'In the distance, you see bells, bamboo scaffolding and slanted roofs, bearing distinct resemblance to architecture of the Wei-Lun dynasty. You had made it. You successfully reached China. You had crossed the silk road.',
		'show character you normal at center with fadeIn',
		'Your group cheers. Tired, you decide to spend the night and then negotiate for prices of your goods the next day. Your group remains unaware of the greedy gleam that enters the eyes of the Chinese merchants, who have accurately discerned the level of your expertise with barely a glance. They simultaneously decide the night prior as to what prices they will buy your goods at, so that you sell at a disadvantage no matter who you turn to.',
		{'Conditional': {
			'Condition': function(){
				return this.storage().merchant;
			},
			'True': 'show character merchant normal at right with fadeIn',
			'False': 'jump bad-ending-4'
		}},
		'The next day, your group wanders the markets, trying to sell your goods. The Chinese traders give you exorbitant prices, however the merchant laughs. "I am a merchant, young sirs" he curtsies exaggeratedly. "You might be able to fool a normal group, and I certainly applaud your business acumen for that, but do not try these cheap tricks on me" The merchant, in his element, drives a hard bargain, and makes sure to get your group an appropriate price.',
		'show scene homevillage with fadeIn',
		'show character you normal at center with fadeIn',
		'You look in awe at all the food the merchant managed to buy. This would last your village until the summer. You were overjoyed.  Your group travels back to the village, in a jubilant mood, where the villagers are waiting. You did it. You saved them all.',
		'jump quiz-5'
	],
	'bad-ending-1': [
		'You look in despair at what can only be a bandit, wielding a dagger and threatening your group. None of you are proficient in combat, you did not choose the adventurer to travel with you. With a sinking heart you can only hope he leaves you alive. You can still return to your village. Your group offers all your food, silk and goods to the bandit. You turn to leave, when',
		'STAB',
		'Your hands instinctively clutch at the dagger protruding from your stomach. You look around frantic, trying to staunch the bleeding. This far out in the desert, a wound this deep was guaranteed to be fatal. You see your group mates all trying unsucessfully, to resist, and sharing a similar fate. It was too late, the bandits never intended to let you go from the start.',
		'adventurer flashback: "I can do anything, from fighting robbers, to lighting fires! I\'m sure you might find some use of me"',
		'You bitterly regret not heeding the adventurer\'s advice. You accomplished nothing, you failed to save your friends. The villagers would surely starve to death, all thanks to your blunder. ',
		'you If I get another chance, I will never make this mistake again',
		'You vow, resolute, even as your consciousness fades to black.',
		'GameMaster: Oh no, looks like you died. Remember this mistake well, and learn why you needed this person! Would you like to try again? With my powers, I can make it so this never happened. You can roll back to the time, when eveything was fine. Try not to mess it up this time, human. Good luck',
		'jump make-choices'
	],
	'bad-ending-2': [
		'Your group decides to follow the path with the sun as a marker. During the nights, you attempt to follow the North star to follow a consistent pattern. However, the desert seems to have no end. You keep traveling, and eventually realize that your group, is hopelessly lost. ',
		'cartographer flashback: "Hmmm, I\'m a bit scared of the Silk Road, but there is nobody who could give directions better than me"',
		'You have no map, and no experience, you realize, that the cartographer was a cruicial member for your operation to be successful',
		'Your group has run out of food, and water. Starving, and delirious with thirst, you realize you have failed your mission, because of your carelessness, not only you, but your entire village\'s life is forfeit.',
		'you If I get another chance, I will never make this mistake again',
		'You vow, resolute, even as your consciousness fades to black.',
		'GameMaster: If this is your first time here, welcome. To my old friends, Welcome back! Looks like you died. Remember this mistake well, and learn why you needed this person! Would you like to try again? With my powers, I can make it so this never happened. You can roll back to the time, when eveything was fine. Try not to mess it up this time, human. Good luck',
		'jump make-choices'
	],
	'bad-ending-3': [
		'Your group panics, trying to find someone, anyone around who could help. However, you knew, with certaintly that there was no hope. ',
		'plaguedoc flashback: "I\'m sure you might find my knowledge of poisonous herbs and their antidotes valuable"',
		'You prayed that your group would make it without you, and still get to save your village. However, this was the end of the road for you. ',
		'you If I get another chance, I will never make this mistake again',
		'You vow, resolute, even as your consciousness fades to black.',
		'GameMaster: If this is your first time here, welcome. To my old friends, Welcome back! Looks like you died. Remember this mistake well, and learn why you needed this person! Would you like to try again? With my powers, I can make it so this never happened. You can roll back to the time, when eveything was fine. Try not to mess it up this time, human. Good luck',
		'jump make-choices'
	],
	'bad-ending-4': [
		'The next day, you wander the markets, unable to determine the right prices of goods as the traders have already manipulated the market price. Everywhere you go, you see overpriced items, and you are forced to sell your spices and silks at a laughably low rate. You know you have been dealt a losing hand, however there is no further time to negotiate. ',
		'merchant flashback: "I don\'t think it is profitable to risk my life, but if you need to know, there is nobody in the village who can better sell your goods!"',
		'You wish you brought the merchant along. On the way back, everybody is somber. The happy mood that you started your journey with was nowhere to be found. You look at the meager food offerings you have, it is barely enough to feed the children of the village. You will be tasked with the callous task of deciding who to save, and who not to. You need to decide whose life is more precious to you, than the other. You see how severely you underestimated the Silk road. The mission did not simply end at the road. You needed someone competent to buy the goods at the right price as well. ',
		'show scene homevillage with fadeIn',
		'You return to your village, half starving. Your group chose to give up food so as to save a bit more for the rest of the villagers, however apart from the doctor, everybody had perished.  (scene) You look at your villagers\' eager faces. This was your family. How could you even face them with the meager offerings you managed to gather for them? There is no future for your village. You have finally failed.',
		'GameMaster:  Welcome one, welcome all, old friends, new friends. So you have crossed the Silk Road. Would you call it a success? Well, that depends on you. Some of your villagers were saved. Were you unsatisfied with this ending? Did you want to save everyone? Well, since this is a game, and I am generous, I can give you another chance. Will you learn from your mistakes, look at what you lacked and fill the gaps? Or will you continue on other, interesting paths? The choice is yours. For now, good luck, you will need it.',
		{
			'Choice': {
				'Dialog': 'Do you want to choose your characters again',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump make-choices'
				},
				'No': {
					'Text': 'No',
					'Do': 'Alright!'
				}
			}
		}
	]

});