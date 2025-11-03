import type { SectionId } from './useGameStore';

export type SectionMeta = {
  id: SectionId;
  title: string;
  position: [number, number, number];
  color: string;
  icon: string;
};

export const SECTION_METADATA: SectionMeta[] = [
  {
    id: 'experience',
    title: 'Experience Garage',
    position: [8, 0, -2],
    color: '#f8b794',
    icon: '🚀'
  },
  {
    id: 'projects',
    title: 'Projects Lab',
    position: [0, 0, -10],
    color: '#f9c795',
    icon: '🧪'
  },
  {
    id: 'awards',
    title: 'Awards Hall',
    position: [-9, 0, -2],
    color: '#f3a859',
    icon: '🏆'
  },
  {
    id: 'education',
    title: 'Education Library',
    position: [-2, 0, 8],
    color: '#f5b967',
    icon: '📚'
  },
  {
    id: 'contact',
    title: 'Contact Dock',
    position: [10, 0, 8],
    color: '#f8c58c',
    icon: '📡'
  }
];

export const WELCOME_POSITION: [number, number, number] = [0, 0, 0];

export const MINIMAP_RADIUS = 14;
