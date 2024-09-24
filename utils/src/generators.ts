import { FieldOption } from '@rufferal/types';
import * as yup from 'yup';

export const generateKey = () => Math.random().toString(36).substring(2);

export const generateOptionSchema: (
  requiredMessage?: string
) => yup.ObjectSchema<FieldOption> = (requiredMessage?: string) => {
  if (requiredMessage) {
    return yup.object({
      id: yup.string().required(),
      label: yup.string().required(),
      value: yup.string().required(requiredMessage),
    });
  } else {
    return yup.object({
      id: yup.string(),
      label: yup.string(),
      value: yup.string(),
    });
  }
};
