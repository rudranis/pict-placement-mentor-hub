import * as yup from 'yup';
import { DEPARTMENTS, RESOURCE_PLATFORMS } from '../config/constants';

export const resourceSchema = yup.object().shape({
  platform: yup
    .string()
    .required('Platform is required')
    .oneOf(Object.values(RESOURCE_PLATFORMS), 'Invalid platform'),
  details: yup.string().url('Must be a valid URL').required('URL is required'),
});

export const mentorSchema = yup.object().shape({
  id: yup.string().required('ID is required'),
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  department: yup
    .string()
    .required('Department is required')
    .oneOf(Object.values(DEPARTMENTS), 'Invalid department'),
  company: yup.string().required('Company is required'),
  interviewQuestions: yup
    .array()
    .of(yup.string().required('Question is required'))
    .min(1, 'At least one interview question is required'),
  resources: yup
    .array()
    .of(resourceSchema)
    .min(1, 'At least one resource is required'),
});
