import type React from 'react';
import { useMemo } from 'react';
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
	data: TriviaResult[];
	/**
	 * Sometimes, the labels get obscenely large.
	 */
	bottomMargin?: number;
	xLabelRotation?: number;
	/**
	 * By default, sorts the labels alphabetically, but this can specify a custom order
	 */
	xLabelOrder?: string[];
}

/**
 * Displays a rechart bar graph where the y axis is the frequency of each x value throughout the given dataset.
 */
export const FrequencyBarChart: React.FC<Props> = ({
	x,
	data,
	bottomMargin,
	xLabelRotation,
	xLabelOrder,
}) => {
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
				// sort alphabetically (or by the given sort order) by label
				.toSorted((a, b) =>
					xLabelOrder && xLabelOrder.includes(a.x) && xLabelOrder.includes(b.x)
						? xLabelOrder.indexOf(a.x) - xLabelOrder.indexOf(b.x)
						: a.x.localeCompare(b.x),
				),
		[data],
	);

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
				bottom: bottomMargin,
			}}
		>
			<CartesianGrid strokeDasharray="2 2" />
			<XAxis
				angle={xLabelRotation}
				textAnchor={xLabelRotation ? 'end' : 'middle'}
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
