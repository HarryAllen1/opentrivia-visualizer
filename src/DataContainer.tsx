import { Label } from '@/components/ui/label';
import { MultiSelect } from '@/components/ui/multi-select';
import { Visualizer } from './Visualizer';
import React, { useEffect, useMemo, useState } from 'react';
import type { TriviaResult } from './api';

/**
 * Container which accepts the data for easier upstream manipulation of said data (for merging the categories)
 */
export const DataContainer: React.FC<{
	data: TriviaResult[];
}> = ({ data }) => {
	const categories = useMemo(
		() =>
			[...new Set(data?.map((question) => question.category))].toSorted(
				(a, b) => a.localeCompare(b),
			),
		[data],
	);
	const [selectedCategories, setSelectedCategories] =
		useState<string[]>(categories);

	// whenever the categories change (whether through merging them or through a data refresh), just allow all categories to be shown.
	useEffect(() => {
		setSelectedCategories(categories);
	}, [categories]);

	const filteredCategories = useMemo(
		() =>
			data?.filter((result) => selectedCategories.includes(result.category)) ??
			[],
		[selectedCategories],
	);
	return (
		<>
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
				<Visualizer data={filteredCategories} />
			</div>
		</>
	);
};
