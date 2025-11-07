import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type React from 'react';
import type { TriviaResult } from './api';
import { FrequencyBarChart } from './FrequencyBarChart';

export const Visualizer: React.FC<{
	data: TriviaResult[];
}> = ({ data }) => {
	return (
		<>
			<p>Visualize...</p>
			<Tabs defaultValue="category">
				<TabsList>
					<TabsTrigger value="category">by category</TabsTrigger>
					<TabsTrigger value="difficulty">by difficulty</TabsTrigger>
				</TabsList>
				<TabsContent value="category">
					<Card>
						<CardContent>
							<FrequencyBarChart data={data} x="category" xLabel="Category" />
						</CardContent>
					</Card>
				</TabsContent>
				<TabsContent value="difficulty">
					<Card>
						<CardContent>
							<FrequencyBarChart
								data={data}
								x="difficulty"
								xLabel="Difficulty"
							/>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</>
	);
};
