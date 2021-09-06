import React from 'react';
import './common-ui-multi-select.module.css';
import { Checkbox, FormControl, FormLabel, Stack } from '@chakra-ui/react';

export interface CommonUiMultiSelectProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
}

export function CommonUiMultiSelect({
  name,
  label,
  options,
}: CommonUiMultiSelectProps) {
  return (
    <FormControl name={name} my={4}>
      <FormLabel fontWeight="bold" htmlFor={name}>
        {label}
      </FormLabel>
      <Stack pl={6} mt={1} spacing={1}>
        {options.map((option) => (
          <Checkbox key={option.value} name={name} value={option.value}>
            {option.label}
          </Checkbox>
        ))}
      </Stack>
    </FormControl>
  );
}

export default CommonUiMultiSelect;
