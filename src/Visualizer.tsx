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
							<FrequencyBarChart
								xLabelRotation={-30}
								data={data}
								x="category"
								bottomMargin={150}
							/>
						</CardContent>
					</Card>
				</TabsContent>
				<TabsContent value="difficulty">
					<Card>
						<CardContent>
							<FrequencyBarChart
								data={data}
								x="difficulty"
								xLabelOrder={['easy', 'medium', 'hard']}
								bottomMargin={30}
							/>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</>
	);
};
