import * as types from './Employment.types';

export type EmploymentState = [
  {
    jobTitle: string | null;
    employer: string | null;
    city: string | null;
    dateFrom: Date | string;
    dateTo: Date | string;
    description: string | null;
  },
];

interface AddEmploymentAction {
  type: typeof types.ADD_EMPLOYMENT;
  id: number;
  value: any;
}

interface SetJobTitleAction {
  type: typeof types.SET_JOB_TITLE;
  id: number;
  value: string;
}

interface SetEmployerAction {
  type: typeof types.SET_EMPLOYER;
  id: number;
  value: string;
}

interface SetCityAction {
  type: typeof types.SET_CITY;
  id: number;
  value: string;
}

interface SetDescriptionAction {
  type: typeof types.SET_DESCRIPTION;
  id: number;
  value: string;
}

interface SetDateFromAction {
  type: typeof types.SET_DATE_FROM;
  id: number;
  value: string;
}

interface SetDateToAction {
  type: typeof types.SET_DATE_TO;
  id: number;
  value: string;
}

export type ActionType = AddEmploymentAction &
  SetJobTitleAction &
  SetEmployerAction &
  SetCityAction &
  SetDescriptionAction &
  SetDateFromAction &
  SetDateToAction;
