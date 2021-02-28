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
	'snakesindesert': 'snakesindesert.jpg'
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
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene silkroad with fadeIn',
		'show notification Welcome',
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
		'show scene nightfall',
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
					'Do': 'Okay!'
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
					'Do': 'Okay!'
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
					'Do': 'Okay!'
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
					'Do': 'Okay!'
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
					'Do': 'Okay!'
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
					'Do': 'Okay!'
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
					'Do': 'Okay!'
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
					'Do': 'Okay!'
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
			'1': 'jump adventure-continues',
			'2': 'jump quiz-1',
			'3': 'jump quiz-1',
			'4': 'jump quiz-1',
		}},
	],

});