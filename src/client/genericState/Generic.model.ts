import * as types from './Generic.types';

export interface ShowModalState {
  showModal: boolean;
}

export interface LangState {
  lang: string;
}

export interface UpdateDocumentTitleState {
  documentTitle: string;
}

export interface TemplateState {
  template: number;
}

export interface GenericState {
  showModal: boolean;
  lang: string;
  documentTitle: string;
  template: {
    selected: number | null;
    available: Object;
  }
}

export interface ShowModalAction {
  type: typeof types.SHOW_MODAL;
  value: boolean;
}

export interface ChangeLangAction {
  type: typeof types.CHANGE_LANGUAGE;
  value: string;
}

export interface UpdateDocumentTitleAction {
  type: typeof types.UPDATE_DOCUMENT_TITLE;
  value: string;
}

export interface TemplateAction {
  type: typeof types.CHOOSE_TEMPLATE;
  value: string;
}

export type ActionType = ShowModalAction &
  ChangeLangAction &
  UpdateDocumentTitleAction &
  TemplateAction;
