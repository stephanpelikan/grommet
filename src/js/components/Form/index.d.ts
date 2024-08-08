import * as React from 'react';

export interface FormExtendedEvent<R = Record<string, unknown>, T = Element>
  extends React.FormEvent<T> {
  value: R;
  touched: Record<string, boolean>;
}

export interface FormProps<T> {
  errors?: {};
  infos?: {};
  kind?: string;
  messages?: { invalid?: string; required?: string };
  onChange?: (value: T, options: { touched?: Record<string, boolean> }) => void;
  onSubmit?: (event: FormExtendedEvent<T>) => void;
  onReset?: (event: React.SyntheticEvent) => any;
  onValidate?: (validationResults: {
    errors: Record<string, any>;
    infos: Record<string, any>;
    valid: boolean;
  }) => void;
  validate?: 'blur' | 'submit' | 'change';
  value?: T;
}

type TypedFormProps<T> = FormProps<T> &
  Omit<JSX.IntrinsicElements['form'], 'onChange' | 'onSubmit'>;

declare const Form: <T = {}>(
  p: TypedFormProps<T>,
) => React.ReactElement<TypedFormProps<T>>;

export type UseFormInputProps = { value: any; initialValue: any; name: string };
type ValueSetter = (value: any) => void;
type useFormInputFunction = (
  value: UseFormInputProps,
) => [value: any, setter: ValueSetter];

export type UseFormFieldProps = {
  error?: string | React.ReactNode;
  info?: string | React.ReactNode;
  disabled: boolean;
};
type useFormFieldFunction = (value: UseFormFieldProps) => UseFormFieldProps;

type FormContextProps = {
  useFormField: useFormFieldFunction;
  useFormInput: useFormInputFunction;
};
declare const FormContext: React.Context<FormContextProps>;

export { Form, FormContext };
