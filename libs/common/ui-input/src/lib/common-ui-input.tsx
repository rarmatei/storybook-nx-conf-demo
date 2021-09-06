import React from 'react';

import './common-ui-input.module.css';
import { FormControl, FormLabel, Input, InputProps } from '@chakra-ui/react';

export interface CommonUiInputProps extends InputProps {
  name: string;
  label: string;
}

export function CommonUiInput({ name, label, ...props }: CommonUiInputProps) {
  return (
    <FormControl name={name} my={4}>
      <FormLabel fontWeight="bold" htmlFor={name}>
        {label}
      </FormLabel>
      <Input id={name} placeholder={label} {...props} />
    </FormControl>
  );
}

export default CommonUiInput;
