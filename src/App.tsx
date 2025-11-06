import React, { useEffect, useState } from 'react';
import { getTriviaQuestions, type TriviaResult } from './api';
import { Visualizer } from './Visualizer';

const App: React.FC = () => {
	const [data, setData] = useState<TriviaResult[] | undefined>();
	const [errorText, setErrorText] = useState<string | undefined>();

	useEffect(() => {
		getTriviaQuestions(50).then((results) => {
			try {
				setData(results);
			} catch (error: unknown) {
				console.error(error);
				setErrorText(
					error &&
						typeof error === 'object' &&
						'message' in error &&
						typeof error.message === 'string'
						? error.message
						: 'An unknown error occurred.',
				);
			}
		});
	}, []);

	return (
		<div className="container mx-auto my-4">
			<h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
				OpenTrivia Data Visualizer
			</h1>

			<div>
				{data ? (
					<Visualizer data={data} />
				) : (
					(errorText ?? <p>Fetching results...</p>)
				)}
			</div>
		</div>
	);
};

export default App;
