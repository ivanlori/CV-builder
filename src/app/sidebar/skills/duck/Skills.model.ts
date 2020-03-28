import * as types from './Skills.types';

export type SkillsState = [
  {
    name: string | null;
    level: string | null;
  },
];

interface SetName {
  type: typeof types.SET_NAME;
  id: number;
  value: string;
}

interface SetLevel {
  type: typeof types.SET_LEVEL;
  id: number;
  value: string;
}

export type ActionType = SetName & SetLevel;
