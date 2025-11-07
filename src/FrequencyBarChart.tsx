import type React from 'react';
import { useEffect, useMemo } from 'react';
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	Rectangle,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import type { TriviaResult } from './api';

interface Props {
	x: keyof TriviaResult;
	xLabel: string;
	data: TriviaResult[];
}

/**
 * Displays a rechart bar graph where the y axis is the frequency of each x value throughout the given dataset.
 */
export const FrequencyBarChart: React.FC<Props> = ({ x, data }) => {
	// transforms the data into an array of objects with x and the frequency of x
	const frequencyData = useMemo(
		() =>
			data.reduce(
				(acc, curr) => {
					const frequencyObject = acc.find((obj) => obj.x === curr[x]);

					if (frequencyObject) {
						frequencyObject.frequency++;
					} else {
						acc.push({
							frequency: 1,
							x: curr[x] as string,
						});
					}

					return acc;
				},
				[] as { x: string; frequency: number }[],
			),
		[data],
	);

	useEffect(() => {
		console.log(frequencyData);
	}, [frequencyData]);

	return (
		<BarChart
			responsive
			style={{
				width: '100%',
				maxWidth: '700px',
				maxHeight: '70vh',
				aspectRatio: 1.618,
			}}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="x" />
			<YAxis dataKey="frequency" width="auto" />
			<Tooltip />
			<Legend />
			<Bar
				dataKey="x"
				fill="var(--color-green-400)"
				activeBar={<Rectangle fill="gold" stroke="purple" />}
			/>
		</BarChart>
	);
};
