import type React from 'react';
import { useEffect, useMemo } from 'react';
import {
	Bar,
	BarChart,
	CartesianGrid,
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
			data
				.reduce(
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
				)
				// sort by label
				.toSorted((a, b) => a.x.localeCompare(b.x)),
		[data],
	);

	useEffect(() => {
		console.log(frequencyData);
	}, [frequencyData]);

	return (
		<BarChart
			responsive
			data={frequencyData}
			style={{
				width: '100%',
				maxWidth: '700%',
				maxHeight: '70vh',
				aspectRatio: 1.618,
			}}
			margin={{
				bottom: 100,
			}}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis
				angle={-30}
				textAnchor="end"
				dataKey="x"
				stroke="var(--foreground)"
			/>
			<YAxis
				dataKey="frequency"
				width="auto"
				label={{
					value: 'Frequency',
					position: 'insideLeft',
					dx: 0,
					dy: 20,
					angle: -90,
					fill: 'var(--foreground)',
				}}
				stroke="var(--foreground)"
			></YAxis>
			<Tooltip
				cursor={{
					fill: 'var(--muted)',
				}}
				contentStyle={{
					backgroundColor: 'var(--card)',
				}}
			/>
			<Bar
				dataKey="frequency"
				fill="var(--color-purple-400)"
				activeBar={<Rectangle fill="var(--color-purple-600)" />}
			/>
		</BarChart>
	);
};
