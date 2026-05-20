import { useContext } from 'react';
import { RoadmapBuilderContext, RoadmapBuilderContextType } from '../context/RoadmapBuilderContext';

export const useRoadmapBuilder = (): RoadmapBuilderContextType => {
  const context = useContext(RoadmapBuilderContext);
  if (context === undefined) {
    throw new Error('useRoadmapBuilder must be used within a RoadmapBuilderProvider');
  }
  return context;
};
