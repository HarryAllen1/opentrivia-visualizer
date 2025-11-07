import type { APIResponse } from './api';

// dummy data for dev to avoid API spam
export const DUMMY_DATA = {
	response_code: 0,
	results: [
		{
			type: 'multiple',
			difficulty: 'medium',
			category: 'Entertainment: Japanese Anime &amp; Manga',
			question:
				'In &quot;To Love-Ru&quot;, who is the first to hear of Yami&#039;s past from her?',
			correct_answer: 'Rito',
			incorrect_answers: ['Mikan', 'Lala', 'Haruna'],
		},
		{
			type: 'multiple',
			difficulty: 'medium',
			category: 'Entertainment: Film',
			question:
				'Who played Baron Victor Frankestein in the 1957 Hammer horror film &quot;The Curse of Frankenstein&quot;?',
			correct_answer: 'Peter Cushing',
			incorrect_answers: ['Boris Karloff', 'Vincent Price', 'Lon Chaney Jr.'],
		},
		{
			type: 'multiple',
			difficulty: 'hard',
			category: 'Entertainment: Video Games',
			question:
				'In &quot;Final Fantasy VI&quot;, what is the name of (summoned) Gilgamesh&#039;s weakest attack?',
			correct_answer: 'Excalipoor',
			incorrect_answers: ['Excalibore', 'Excalisnore', 'Excalisore'],
		},
		{
			type: 'boolean',
			difficulty: 'hard',
			category: 'Entertainment: Video Games',
			question:
				'The Paradox Interactive game &quot;Stellaris&quot; was released in 2016.',
			correct_answer: 'True',
			incorrect_answers: ['False'],
		},
		{
			type: 'multiple',
			difficulty: 'easy',
			category: 'Entertainment: Video Games',
			question:
				'In &quot;A Hat in Time&quot;, what must Hat Kid collect to finish a level',
			correct_answer: 'A time piece',
			incorrect_answers: ['A heart fragment', 'A relic fragment', 'A hat'],
		},
		{
			type: 'multiple',
			difficulty: 'medium',
			category: 'Geography',
			question: 'Which Canadian province has Charlottetown as its capital?',
			correct_answer: 'Prince Edward Island',
			incorrect_answers: ['Saskachewan', 'Northwest Terrirories', 'Ontario'],
		},
		{
			type: 'multiple',
			difficulty: 'easy',
			category: 'Entertainment: Japanese Anime &amp; Manga',
			question: 'In the 9th Pokemon movie, who is the Prince of the Sea?',
			correct_answer: 'Manaphy',
			incorrect_answers: ['Ash', 'May', 'Phantom'],
		},
		{
			type: 'multiple',
			difficulty: 'medium',
			category: 'Geography',
			question: 'In which English county is Stonehenge?',
			correct_answer: 'Wiltshire',
			incorrect_answers: ['Somerset', 'Cumbria', 'Herefordshire'],
		},
		{
			type: 'boolean',
			difficulty: 'medium',
			category: 'Science: Computers',
			question:
				'A Boolean value of &quot;0&quot; represents which of these words?',
			correct_answer: 'False',
			incorrect_answers: ['True'],
		},
		{
			type: 'boolean',
			difficulty: 'easy',
			category: 'Entertainment: Video Games',
			question: 'Super Mario Bros. was the first video game ever created.',
			correct_answer: 'False',
			incorrect_answers: ['True'],
		},
		{
			type: 'multiple',
			difficulty: 'easy',
			category: 'Science &amp; Nature',
			question:
				'The biggest distinction between a eukaryotic cell and a prokaryotic cell is:',
			correct_answer: 'The presence or absence of a nucleus',
			incorrect_answers: [
				'The overall size',
				'The presence or absence of certain organelles',
				'The mode of reproduction',
			],
		},
		{
			type: 'multiple',
			difficulty: 'medium',
			category: 'Vehicles',
			question:
				'What country is the Hussarya supercar, made by the car manufacturer &quot;Arrinera&quot;, assembled in?',
			correct_answer: 'Poland',
			incorrect_answers: ['China', 'Sweden', 'Italy'],
		},
		{
			type: 'multiple',
			difficulty: 'easy',
			category: 'Entertainment: Comics',
			question: 'What&#039;s the race of Invincible&#039;s father?',
			correct_answer: 'Viltrumite',
			incorrect_answers: ['Kryptonian', 'Kree', 'Irken'],
		},
		{
			type: 'multiple',
			difficulty: 'medium',
			category: 'Entertainment: Video Games',
			question:
				'What is the real name of the Scout in &quot;Team Fortress 2&quot;?',
			correct_answer: 'Jeremy',
			incorrect_answers: ['Lance', 'Walter', 'John'],
		},
		{
			type: 'multiple',
			difficulty: 'easy',
			category: 'Entertainment: Video Games',
			question:
				'Half-Life by Valve uses the GoldSrc game engine, which is a highly modified version of what engine?',
			correct_answer: 'Quake Engine',
			incorrect_answers: ['Doom Engine', 'id Engine', 'Source Engine'],
		},
		{
			type: 'multiple',
			difficulty: 'hard',
			category: 'Entertainment: Music',
			question: 'Who had a 1981 hit with the song &quot;Japanese Boy&quot;?',
			correct_answer: 'Aneka',
			incorrect_answers: ['Toyah', 'Sandra', 'Madonna'],
		},
		{
			type: 'multiple',
			difficulty: 'medium',
			category: 'Entertainment: Video Games',
			question:
				'In Monster Hunter Generations, which of the following monsters are a part of the &quot;Fated Four&quot;?',
			correct_answer: 'Astalos',
			incorrect_answers: ['Gore Magala', 'Malfestio', 'Arzuros'],
		},
		{
			type: 'multiple',
			difficulty: 'medium',
			category: 'Entertainment: Music',
			question:
				'Which of these songs from American Idiot: The Musical was a previously unreleased Green Day song?',
			correct_answer: 'When It&#039;s Time',
			incorrect_answers: [
				'Are We The Waiting',
				'Before The Lobotomy',
				'Favorite Son',
			],
		},
		{
			type: 'multiple',
			difficulty: 'easy',
			category: 'Entertainment: Video Games',
			question:
				'In Grand Theft Auto V, what was Michael De Santa&#039;s former surname?',
			correct_answer: 'Townley',
			incorrect_answers: ['De Santos', 'Watson', 'Simpson'],
		},
		{
			type: 'multiple',
			difficulty: 'medium',
			category: 'Entertainment: Video Games',
			question:
				'Which musical artist was NOT featured as playable avatars in the game &quot;DJ Hero&quot;?',
			correct_answer: 'Dr. Dre',
			incorrect_answers: ['DJ Shadow', 'Daft Punk', 'Grandmaster Flash'],
		},
		{
			type: 'multiple',
			difficulty: 'easy',
			category: 'Science &amp; Nature',
			question: 'What is the speed of light in a vacuum?',
			correct_answer: '299,792,458 m\/s',
			incorrect_answers: [
				'50,461 m\/s',
				'308,215,043 m\/s',
				'751,665,014,151 m\/s',
			],
		},
		{
			type: 'multiple',
			difficulty: 'easy',
			category: 'Geography',
			question: 'Which ocean borders the west coast of the United States?',
			correct_answer: 'Pacific',
			incorrect_answers: ['Atlantic', 'Indian', 'Arctic'],
		},
		{
			type: 'boolean',
			difficulty: 'medium',
			category: 'Animals',
			question: 'Finnish Lapphund dogs were used for herding reindeer.',
			correct_answer: 'True',
			incorrect_answers: ['False'],
		},
		{
			type: 'boolean',
			difficulty: 'easy',
			category: 'General Knowledge',
			question:
				'It is automatically considered entrapment in the United States if the police sell you illegal substances without revealing themselves.',
			correct_answer: 'False',
			incorrect_answers: ['True'],
		},
		{
			type: 'multiple',
			difficulty: 'hard',
			category: 'Politics',
			question:
				'Which of these was an official candidate in the 2017 British General Election?',
			correct_answer: 'Lord Buckethead',
			incorrect_answers: [
				'James Francis',
				'Robert Wimbledon',
				'Sir Crumpetsby',
			],
		},
		{
			type: 'multiple',
			difficulty: 'hard',
			category: 'Entertainment: Film',
			question:
				'Which of the following films was directed by Ivan Reitman, written by Gary Ross, featured Kevin Kline, and was released in 1993?',
			correct_answer: 'Dave',
			incorrect_answers: ['John', 'Will', 'Carl'],
		},
		{
			type: 'multiple',
			difficulty: 'medium',
			category: 'Art',
			question:
				'Which artist&rsquo;s studio was known as &#039;The Factory&#039;?',
			correct_answer: 'Andy Warhol',
			incorrect_answers: ['Roy Lichtenstein', 'David Hockney', 'Peter Blake'],
		},
		{
			type: 'boolean',
			difficulty: 'hard',
			category: 'Entertainment: Video Games',
			question:
				'In The Witcher 3, the Zoltan Chivay Gwent card can be found under the Hanged Man&#039;s Tree.',
			correct_answer: 'True',
			incorrect_answers: ['False'],
		},
		{
			type: 'multiple',
			difficulty: 'medium',
			category: 'Entertainment: Video Games',
			question:
				'In the &quot;Halo&quot; franchise, in what country is New Mombasa?',
			correct_answer: 'Kenya',
			incorrect_answers: ['India', 'Turkey', 'Slovakia'],
		},
		{
			type: 'multiple',
			difficulty: 'easy',
			category: 'Science &amp; Nature',
			question: 'Which is the longest bone in the human body? ',
			correct_answer: 'Femur',
			incorrect_answers: ['Scapula', 'Fibula', 'Ulna'],
		},
		{
			type: 'multiple',
			difficulty: 'medium',
			category: 'History',
			question:
				'The Herero genocide was perpetrated in Africa by which of the following colonial nations?',
			correct_answer: 'Germany',
			incorrect_answers: ['Britain', 'Belgium', 'France'],
		},
		{
			type: 'boolean',
			difficulty: 'medium',
			category: 'Entertainment: Video Games',
			question: 'Metal Gear Solid V: The Phantom Pain runs on the Fox Engine.',
			correct_answer: 'True',
			incorrect_answers: ['False'],
		},
		{
			type: 'multiple',
			difficulty: 'medium',
			category: 'Mythology',
			question: 'What is the name of the Greek god of blacksmiths?',
			correct_answer: 'Hephaestus',
			incorrect_answers: ['Dyntos', 'Vulcan', 'Artagatus'],
		},
		{
			type: 'multiple',
			difficulty: 'hard',
			category: 'Entertainment: Video Games',
			question:
				'Which character from the Mega Man series made a small cameo on Volt Catfish&#039;s introduction scene in CD versions of Mega Man X3?',
			correct_answer: 'Auto',
			incorrect_answers: ['Eddie', 'Tango', 'Rush'],
		},
		{
			type: 'multiple',
			difficulty: 'medium',
			category: 'Entertainment: Film',
			question:
				'In what year was the movie &quot;Police Academy&quot; released?',
			correct_answer: '1984',
			incorrect_answers: ['1986', '1985', '1983'],
		},
		{
			type: 'multiple',
			difficulty: 'medium',
			category: 'Entertainment: Video Games',
			question:
				'Which of the following games was not a launch title for the Nintendo Gamecube?',
			correct_answer: 'Super Mario Sunshine',
			incorrect_answers: [
				'Luigi&rsquo;s Mansion',
				'Star Wars Rogue Squadron II',
				'Disney&rsquo;s Tarzan Untamed',
			],
		},
		{
			type: 'multiple',
			difficulty: 'easy',
			category: 'Entertainment: Video Games',
			question: 'Who is the protagonist in Dead Rising (2006)?',
			correct_answer: 'Frank West',
			incorrect_answers: ['Chuck Greene', 'John North', 'Jason Grey'],
		},
		{
			type: 'multiple',
			difficulty: 'easy',
			category: 'History',
			question: 'Pol Pot was the former dictator of which country?',
			correct_answer: 'Cambodia',
			incorrect_answers: ['Laos', 'North Korea', 'Vietnam'],
		},
		{
			type: 'multiple',
			difficulty: 'medium',
			category: 'Entertainment: Television',
			question:
				'In the show &quot;The Office&quot; who does Michael Scott eventually end up with?',
			correct_answer: 'Holly Flax',
			incorrect_answers: ['Angela Martin', 'Jan Levinson', 'Pam Beesly'],
		},
		{
			type: 'boolean',
			difficulty: 'medium',
			category: 'Geography',
			question: 'Is Tartu the capital of Estonia?',
			correct_answer: 'False',
			incorrect_answers: ['True'],
		},
		{
			type: 'multiple',
			difficulty: 'medium',
			category: 'Entertainment: Video Games',
			question:
				'On the 6th of June 2006, what was the name of the infamous glitch that occurred in the MMO RuneScape?',
			correct_answer: 'The Falador Massacre',
			incorrect_answers: [
				'Noclip glitch',
				'Party-hat Duplication Glitch',
				'TzHaar Massacre',
			],
		},
		{
			type: 'multiple',
			difficulty: 'hard',
			category: 'Entertainment: Film',
			question:
				'In what year was the first Indian movie submitted for an Oscar?',
			correct_answer: '1957',
			incorrect_answers: ['1962', '1938', '1954'],
		},
		{
			type: 'multiple',
			difficulty: 'medium',
			category: 'History',
			question: 'When did Vesuvius destroy the city of Pompeii? ',
			correct_answer: '79 AD',
			incorrect_answers: ['62 AD', '31 BC', '54 BC'],
		},
		{
			type: 'multiple',
			difficulty: 'easy',
			category: 'General Knowledge',
			question: 'What company developed the vocaloid Hatsune Miku?',
			correct_answer: 'Crypton Future Media',
			incorrect_answers: ['Sega', 'Sony', 'Yamaha Corporation'],
		},
		{
			type: 'multiple',
			difficulty: 'easy',
			category: 'Entertainment: Video Games',
			question:
				'In World of Warcraft&#039;s Mists of Pandaria expansion, What was the level cap?',
			correct_answer: '90',
			incorrect_answers: ['85', '80', '75'],
		},
		{
			type: 'multiple',
			difficulty: 'easy',
			category: 'Science &amp; Nature',
			question: 'The asteroid belt is located between which two planets?',
			correct_answer: 'Mars and Jupiter',
			incorrect_answers: [
				'Jupiter and Saturn',
				'Mercury and Venus',
				'Earth and Mars',
			],
		},
		{
			type: 'multiple',
			difficulty: 'easy',
			category: 'Entertainment: Television',
			question: 'In the Star Trek universe, what color is Vulcan blood?',
			correct_answer: 'Green',
			incorrect_answers: ['Blue', 'Red', 'Purple'],
		},
		{
			type: 'multiple',
			difficulty: 'easy',
			category: 'Entertainment: Video Games',
			question: 'Who voices GLaDOS in the Portal games?',
			correct_answer: 'Ellen McLain',
			incorrect_answers: [
				'Michelle Forbes ',
				'Mary Kae Irvin ',
				'Natasha Radski',
			],
		},
		{
			type: 'multiple',
			difficulty: 'medium',
			category: 'Geography',
			question: 'What city is the Terracotta Army located in?',
			correct_answer: 'Xi&#039;an',
			incorrect_answers: ['Beijing', 'Shanghai', 'Hong Kong'],
		},
		{
			type: 'multiple',
			difficulty: 'hard',
			category: 'History',
			question:
				'What was the real name of the Albanian national leader Skanderbeg?',
			correct_answer: 'Gjergj Kastrioti',
			incorrect_answers: [
				'Diturak Zhulati',
				'Iskander Bejko',
				'Mirash Krasniki',
			],
		},
	],
} as APIResponse;
