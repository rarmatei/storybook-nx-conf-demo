import React, { useRef, useState } from 'react';
import styles from './app.module.css';
import { CommonUiImageRadioButtons } from '@storybook-test/common/ui-image-radio-buttons';
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { calculatePercentageComplete } from './util';
import { CommonUiProgressMeter } from '@storybook-test/common/ui-progress-meter';
import {
  CommonUiMultiSelect,
  CommonUiMultiSelectProps,
} from '@storybook-test/common/ui-multi-select';
import { CommonUiForm } from '@storybook-test/common/ui-form';

export function App() {
  const elementRef = useRef();
  const options = [
    {
      value: 'slice',
      image: (
        <UiDescribedImage
          imageSrc="/assets/slice.png"
          description="The Single Library"
        />
      ),
    },
    {
      value: 'half',
      image: (
        <UiDescribedImage
          imageSrc="/assets/half.png"
          description="The 50% affected"
        />
      ),
    },
    {
      value: 'full',
      image: (
        <UiDescribedImage
          imageSrc="/assets/full.png"
          description="The Full Monorepo"
        />
      ),
    },
  ];

  const [percentageComplete, setPercentageComplete] = useState(0);

  const onChange = () => {
    const percentage = calculatePercentageComplete(elementRef!.current);
    setPercentageComplete(percentage);
  };

  const toppings: CommonUiMultiSelectProps['options'] = [
    { label: '🍄 Mushrooms.json', value: 'mushrooms' },
    { label: '🧀 Generated Cheese', value: 'cheese' },
    { label: '🐟 Cached Tuna', value: 'tuna' },
    { label: '🍍 Dependency Graph Pineapple', value: 'pineapple' },
  ];

  return (
    <div className={styles.app}>
      <CommonUiForm ref={elementRef} onChange={onChange}>
        <Heading as="h1" size="xl" textAlign="center">
          Nx Pizza
        </Heading>
        <UiInput name="firstName" label="Name" type="text" />
        <UiInput name="phoneNumber" label="Phone Number" type="number" />
        <CommonUiImageRadioButtons options={options} />
        <CommonUiMultiSelect
          name="toppings"
          label="Toppings"
          options={toppings}
        />
        <CommonUiProgressMeter
          value={percentageComplete}
          size="sm"
          my={5}
          hasStripe
          isAnimated
        />
        <ButtonGroup spacing={4}>
          <Button
            disabled={percentageComplete < 100}
            colorScheme="teal"
            loadingText="Submitting"
            variantColor="teal"
          >
            Place order
          </Button>
          <Button variantColor="teal" variant="outline">
            Reset
          </Button>
        </ButtonGroup>
      </CommonUiForm>
    </div>
  );
}

const UiDescribedImage = ({ description, imageSrc }) => {
  return (
    <Stack alignItems="center">
      <Image maxW="100px" maxH="100px" src={imageSrc}></Image>
      <Text color="black">"{description}"</Text>
    </Stack>
  );
};

const UiInput = ({ name, label, ...props }) => {
  return (
    <FormControl name={name} my={4}>
      <FormLabel fontWeight="bold" htmlFor={name}>
        {label}
      </FormLabel>
      <Input id={name} placeholder={label} {...props} />
    </FormControl>
  );
};

export default App;
