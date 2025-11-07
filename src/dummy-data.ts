import type { APIResponse } from './api';

// dummy data for dev to avoid API spam
export const DUMMY_DATA = {
	response_code: 0,
	results: [
		{
			type: 'multiple',
			difficulty: 'easy',
			category: 'Art',
			question: 'Who painted the biblical fresco The Creation of Adam?',
			correct_answer: 'Michelangelo',
			incorrect_answers: ['Leonardo da Vinci', 'Caravaggio', 'Rembrandt'],
		},
		{
			type: 'boolean',
			difficulty: 'easy',
			category: 'Animals',
			question: 'Rabbits are carnivores.',
			correct_answer: 'False',
			incorrect_answers: ['True'],
		},
		{
			type: 'boolean',
			difficulty: 'easy',
			category: 'Entertainment: Video Games',
			question: 'The protagonist of Dead Rising 3 is called Chuck Greene.',
			correct_answer: 'False',
			incorrect_answers: ['True'],
		},
		{
			type: 'multiple',
			difficulty: 'medium',
			category: 'Celebrities',
			question: 'Where was Kanye West born?',
			correct_answer: 'Atlanta, Georgia',
			incorrect_answers: [
				'Chicago, Illinois',
				'Los Angeles, California',
				'Detroit, Michigan',
			],
		},
		{
			type: 'boolean',
			difficulty: 'medium',
			category: 'Science: Computers',
			question: 'MacOS is based on Linux.',
			correct_answer: 'False',
			incorrect_answers: ['True'],
		},
		{
			type: 'multiple',
			difficulty: 'hard',
			category: 'Entertainment: Music',
			question: 'Pamina and Papageno are characters in what Mozart opera?',
			correct_answer: 'The Magic Flute',
			incorrect_answers: [
				'The Marriage of Figaro',
				'The Impresario',
				'The Goose of Cairo',
			],
		},
		{
			type: 'boolean',
			difficulty: 'medium',
			category: 'History',
			question:
				'In 1967, a magazine published a story about extracting hallucinogenic chemicals from bananas to raise moral questions about banning drugs.',
			correct_answer: 'True',
			incorrect_answers: ['False'],
		},
		{
			type: 'boolean',
			difficulty: 'easy',
			category: 'Entertainment: Cartoon &amp; Animations',
			question:
				'Bill Cipher in the show &quot;Gravity Falls&quot; is the good guy.',
			correct_answer: 'False',
			incorrect_answers: ['True'],
		},
		{
			type: 'multiple',
			difficulty: 'medium',
			category: 'Entertainment: Music',
			question:
				'EDM producer Marshmello performs live wearing clothes and a marshmallow mask of what colour?',
			correct_answer: 'White',
			incorrect_answers: ['Black', 'Blue', 'Yellow'],
		},
		{
			type: 'multiple',
			difficulty: 'hard',
			category: 'Entertainment: Video Games',
			question: 'What was the world&#039;s first video game?',
			correct_answer: 'Draughts',
			incorrect_answers: ['Spacewar!', 'Pong', 'Space Travel'],
		},
	],
} as APIResponse;
