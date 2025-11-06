import type React from 'react';
import type { TriviaResult } from './api';

export const Visualizer: React.FC<{
	data: TriviaResult[];
}> = ({ data }) => {
	return <>{data.length}</>;
};
