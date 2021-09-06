import React from 'react';

import './common-ui-image-radio-buttons.module.css';
import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react';

export interface CommonUiImageRadioButtonsProps {
  options: { value: string; image: any }[];
  onChange?: (value: string) => void;
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export function CommonUiImageRadioButtons(
  props: CommonUiImageRadioButtonsProps
) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    onChange: props.onChange,
  });

  const group = getRootProps();

  return (
    <FormControl name="toppings" my={4}>
      <FormLabel fontWeight="bold">Pizza type</FormLabel>
      <HStack {...group}>
        {props.options.map((option) => {
          const radio = getRadioProps({ value: option.value } as any);
          return (
            <RadioCard key={option.value} {...radio}>
              {option.image}
            </RadioCard>
          );
        })}
      </HStack>
    </FormControl>
  );
}

function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: 'blue.50',
          color: 'white',
          borderColor: 'blue.50',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default CommonUiImageRadioButtons;
