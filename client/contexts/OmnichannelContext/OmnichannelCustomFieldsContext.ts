import { createContext, useContext } from 'react';

import { ILivechatCustomField } from '../../../definition/ILivechatCustomField';

export type OmnichannelCustomFieldContextValue = {
	customFields: ILivechatCustomField[];
};

export const OmnichannelCustomFieldContext = createContext<OmnichannelCustomFieldContextValue>({
	customFields: [],
});

export const useOmnichannelDepartments = (): OmnichannelCustomFieldContextValue['customFields'] =>
	useContext(OmnichannelCustomFieldContext).customFields;