import { DUMMY_DATA } from './dummy-data';

export interface APIResponse {
	response_code: number;
	results: TriviaResult[];
}

export interface TriviaResult {
	type: 'boolean' | 'multiple';
	difficulty: 'easy' | 'medium' | 'hard';
	category: string;
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
}

/**
 * For whatever reason, the trivia API uses HTML entities in its strings, instead of leaving it to the developer to prevent XSS.
 * This function replaces a small subset of these HTML entities (since the API only uses a few and properly escaping it would be computationally expensive).
 */
const decodeBasicHTMLEntityString = (str: string): string =>
	str
		.replaceAll('&amp;', '&')
		.replaceAll('&#039;', "'")
		.replaceAll('&quot;', '"');

/**
 * Gets a number of trivia questions from the OpenTrivia DB
 */
export const getTriviaQuestions = async (
	numOfQuestions: number,
): Promise<TriviaResult[]> => {
	// use dummy data in dev to avoid API spam
	if (import.meta.env.DEV) {
		return DUMMY_DATA.results;
	}
	const response = await fetch(
		`https://opentdb.com/api.php?amount=${numOfQuestions}`,
	);
	if (!response.ok) {
		alert('Hit an API error! Try refreshing the page in a sec.');
	}
	const json = (await response.json()) as APIResponse;
	return json.results.map((result) => ({
		...result,
		category: decodeBasicHTMLEntityString(result.category),
		question: decodeBasicHTMLEntityString(result.question),
		correct_answer: decodeBasicHTMLEntityString(result.correct_answer),
		incorrect_answers: result.incorrect_answers.map((answer) =>
			decodeBasicHTMLEntityString(answer),
		),
	}));
};
