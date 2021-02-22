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

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'silkroad': 'silkroad-map.jpg',
	'nightfall': 'nightfallarrives.jpg',
	'meetinglocation': 'meetinglocation.jpg'
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
		name: 'You',
		color: 'ff0000',
		sprites: {
            normal: 'adventurer.png',
        },
        expressions: {
            normal: 'expressions/adventurer.png',
        },
		default_expression: 'normal',
	},
	'merchant': {
		name: 'You',
		color: 'ff0000',
		sprites: {
            normal: 'adventurer.png',
        },
        expressions: {
            normal: 'expressions/adventurer.png',
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
		'show character adventurer normal at center with fadeIn',
		'adventurer Not now BFF, I\'m trying to map out how to use the road to sell our products',
		'BFF frowned, unusually serious. ',
		'bff I most definitely do not need to tell you how dangerous it is right? Why would you risk your neck this way? Stay in the village, where everyone will remain safe',
		'adventurer You know too, that the harvest this year wasn\'t good, we need to earn our livelihood somehow, before we perish. It\'s so rare being you serious it\'s creepy, lighten up',
		'You joked, attempting to shift his train of thought before he got deep into it. BFF, despite being a pain, was also your deeply cherished friend after all, and you wouldn\'t lose him for anythig. Worrying him would do no one any good. The silk road had been shut down, forbidden to enter, after the last pair of travellers failed to come back. The villagers were afraid of it. They called it cursed. The feared the mountain gods were taking revenge for them daring to defile the holy mountains. However, winter harvest was failing. People were slowly beginning to lose hope. At this rate, our whole village would be wiped out. I have to do something, I silently vowed. ',
		'adventurer I will protect my family',
		'bff Oh no. I know that look in your eyes, it\'s when you think of TERRIBLE ideas, so stop immediately',
		'BFF knew what you were thinking, the minute they set foot on the road. He sighed.',
		'bff Alright. Meet me tomorrow night, by the tree. I will gather some people who might be helpful to you. And I am coming as well',
		'You breathed a sigh of relief. Atleast they weren\'t going to stop you. Although you didn\'t want them accompanying you on this potential suicide mission. Oh well. That\'s a problem for future me! For now let\'s focus on getting ready for the trip!',
		'show scene meetinglocation with fadeIn',
		'show character adventurer normal at center with fadeIn',
		'adventurer Welcome guys, thanks for coming here on such short notice',
		'? No problem, I would like to help',
		'?? Me too',
		'??? Don\'t forget about me',
		'You stare at the group, deep in thought. Who would be suitable for me to take on this trip? Click on each option to explore what they have to say'
	]
});