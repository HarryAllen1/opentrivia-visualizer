interface APIResponse {
	response: number;
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
 * Gets a number of trivia questions from the OpenTrivia DB
 */
export const getTriviaQuestions = async (
	numOfQuestions: number,
): Promise<TriviaResult[]> => {
	const response = await fetch(
		`https://opentdb.com/api.php?amount=${numOfQuestions}`,
	);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const json = (await response.json()) as APIResponse;
	return json.results;
};
