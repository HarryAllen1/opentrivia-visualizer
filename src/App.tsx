import { Label } from '@/components/ui/label';
import React, { useEffect, useMemo, useState } from 'react';
import { getTriviaQuestions, type TriviaResult } from './api';
import { MultiSelect } from './components/ui/multi-select';
import { Visualizer } from './Visualizer';

// Must be <=50
const NUM_QUESTIONS_VISUALIZED = 50;

const App: React.FC = () => {
	const [data, setData] = useState<TriviaResult[] | undefined>();
	const [errorText, setErrorText] = useState<string | undefined>();
	const [categories, setCategories] = useState<string[]>([]);
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const filteredCategories = useMemo(
		() =>
			data?.filter((result) => selectedCategories.includes(result.category)) ??
			[],
		[selectedCategories],
	);

	useEffect(() => {
		getTriviaQuestions(NUM_QUESTIONS_VISUALIZED).then((results) => {
			try {
				setData(results);

				const allCategories = [
					...new Set(results?.map((question) => question.category)),
				].toSorted((a, b) => a.localeCompare(b));
				setCategories(allCategories);
				// By default, show all categories
				setSelectedCategories(allCategories);
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

			<p className="font-bold my-2">
				Number of questions visualized: {NUM_QUESTIONS_VISUALIZED}
			</p>

			<div className="my-2 max-w-lg">
				<Label htmlFor="filter">Filter by category</Label>
				<MultiSelect
					defaultValue={selectedCategories}
					options={categories.map((category) => ({
						value: category,
						label: category,
					}))}
					value={selectedCategories}
					onValueChange={setSelectedCategories}
				/>
			</div>

			<div>
				{data ? (
					<Visualizer data={filteredCategories} />
				) : (
					(errorText ?? <p>Fetching results...</p>)
				)}
			</div>
		</div>
	);
};

export default App;
