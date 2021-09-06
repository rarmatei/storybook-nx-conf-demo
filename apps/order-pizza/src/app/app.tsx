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
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
import { calculatePercentageComplete } from './util';

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
          description="The 50% cached"
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

  return (
    <div className={styles.app}>
      <UiForm ref={elementRef} onChange={onChange}>
        <Heading as="h1" size="xl" textAlign="center">
          Nx Pizza
        </Heading>
        <UiInput name="firstName" label="Name" type="text" />
        <UiInput name="phoneNumber" label="Phone Number" type="number" />
        <CommonUiImageRadioButtons options={options} />
        <UiMultiSelect />
        <UiProgress
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
      </UiForm>
    </div>
  );
}

const UiMultiSelect = () => {
  return (
    <FormControl name="toppings" my={4}>
      <FormLabel fontWeight="bold" htmlFor="toppings">
        Toppings
      </FormLabel>
      <Stack pl={6} mt={1} spacing={1}>
        <Checkbox name="toppings" value="mushrooms">
          🍄 Microfrontend Mushrooms
        </Checkbox>
        <Checkbox name="toppings" value="cheese">
          🧀 Generated Cheese
        </Checkbox>
        <Checkbox name="toppings" value="tuna">
          🐟 Cached Tuna
        </Checkbox>
        <Checkbox name="toppings" value="pineapple">
          🍍 Dependency Graph Pineapple
        </Checkbox>
      </Stack>
    </FormControl>
  );
};

const UiForm = React.forwardRef((props: any, ref: any) => {
  return (
    <Box
      as="form"
      ref={ref}
      onChange={props.onChange}
      p={4}
      borderWidth="1px"
      rounded="lg"
      shadow="1px 1px 3px rgba(0,0,0,0.3)"
    >
      {props.children}
    </Box>
  );
});

const UiDescribedImage = ({ description, imageSrc }) => {
  return (
    <Stack alignItems="center">
      <Image maxW="100px" maxH="100px" src={imageSrc}></Image>
      <Text color="black">"{description}"</Text>
    </Stack>
  );
};

const UiProgress = ({ value, ...props }) => {
  return <Progress value={value} {...props} />;
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
