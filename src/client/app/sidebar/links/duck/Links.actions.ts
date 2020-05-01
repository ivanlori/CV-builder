import * as type from './Links.types';
import * as model from './Links.model';

export const addLinkAction = (id: number, value: any): model.addLinkModelAction => ({
  type: type.ADD_LINK,
  id: id + 1,
  value,
});

export const labelAction = (id: number, value: string): model.labelModelAction => ({
  type: type.LINK_LABEL,
  id,
  value,
});

export const linkAction = (id: number, value: string): model.linkModelAction => ({
  type: type.LINK_TITLE,
  id,
  value,
});
