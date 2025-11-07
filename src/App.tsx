import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Switch } from '@/components/ui/switch';
import { InfoIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { getTriviaQuestions, type TriviaResult } from './api';
import { DataContainer } from './DataContainer';

// Must be <=50
const NUM_QUESTIONS_VISUALIZED = 50;

const App: React.FC = () => {
	const [data, setData] = useState<TriviaResult[] | undefined>();
	const [mergeCategories, setMergeCategories] = useState(false);
	const [potentiallyMergedData, setPotentiallyMergedData] = useState<
		TriviaResult[] | undefined
	>();

	const refreshData = () => {
		getTriviaQuestions(NUM_QUESTIONS_VISUALIZED).then((results) => {
			try {
				setData(results);
				if (mergeCategories) {
					setPotentiallyMergedData(getMergedData(results));
				} else {
					setPotentiallyMergedData(results);
				}
			} catch (error: unknown) {
				console.error(error);
			}
		});
	};

	const getMergedData = (data: TriviaResult[]) =>
		data.map((result) => ({
			...result,
			category: result.category.includes(':')
				? result.category.slice(0, result.category.indexOf(':'))
				: result.category,
		}));

	useEffect(refreshData, []);

	return (
		<div className="container mx-auto my-4">
			<h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
				OpenTrivia Data Visualizer
			</h1>

			<p className="font-bold my-2">
				Number of questions visualized: {NUM_QUESTIONS_VISUALIZED}
			</p>

			<Button onClick={refreshData}>Refresh data</Button>

			{data && (
				<div className="flex items-center space-x-2">
					<Switch
						checked={mergeCategories}
						onCheckedChange={(checked) => {
							setMergeCategories(checked);
							if (checked) {
								setPotentiallyMergedData(getMergedData(data));
							} else {
								setPotentiallyMergedData(data);
							}
						}}
						id="merge-categories"
					/>
					<Label htmlFor="merge-categories">
						Merge categories
						<Popover>
							<PopoverTrigger>
								<InfoIcon />
							</PopoverTrigger>
							<PopoverContent>
								The OpenTrivia API likes to subcategorise question categories.
								Enabling this merges similar categories (e.g., 'entertainment:
								video games' and 'entertainment: anime').
							</PopoverContent>
						</Popover>
					</Label>
				</div>
			)}

			{potentiallyMergedData ? (
				<DataContainer data={potentiallyMergedData} />
			) : (
				<p>Fetching data...</p>
			)}
		</div>
	);
};

export default App;
