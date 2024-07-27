import * as React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { RButton } from '../atom';
import { RFormInput } from '../molecule';

type LogInInputs = {
  email: string;
  password: string;
};

export const RLogInForm = (): React.JSX.Element => {
  /* REACT HOOK FORM */
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  /* BEHAVIORS */
  const onSubmit: SubmitHandler<LogInInputs> = (data) => {
    // Handle form submission
    console.log('BLARG SUBMISSION data', data);
  };

  return (
    <View style={{ width: '100%' }}>
      <Controller
        name="email"
        control={control}
        rules={{
          required: 'Email is required',
          maxLength: 320,
        }}
        render={({ field: { onBlur, onChange, value, ref } }) => (
          <RFormInput
            onBlur={onBlur} // notify when input is touched
            onChange={onChange} // send value to hook form
            value={value}
            formRef={ref}
            label="Email"
            placeholder="rufferer@rufferal.com"
            error={errors.email}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{
          required: 'Password is required',
          maxLength: 120,
        }}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <RFormInput
            onBlur={onBlur} // notify when input is touched
            onChange={onChange} // send value to hook form
            value={value}
            formRef={ref}
            label="Password"
            placeholder="************"
            error={errors.password}
          />
        )}
      />

      <RButton title="Log In" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
