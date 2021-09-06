import React from 'react';

import './common-ui-described-image.module.css';
import { Image, Stack, Text } from '@chakra-ui/react';

export interface OrderPizzaUiPizzaImageProps {
  imageSrc: string;
  description: string;
}

export function OrderPizzaUiPizzaImage({
  imageSrc,
  description,
}: OrderPizzaUiPizzaImageProps) {
  return (
    <Stack alignItems="center">
      <Image maxW="100px" maxH="100px" src={imageSrc}></Image>
      <Text color="black">"{description}"</Text>
    </Stack>
  );
}

export default OrderPizzaUiPizzaImage;
