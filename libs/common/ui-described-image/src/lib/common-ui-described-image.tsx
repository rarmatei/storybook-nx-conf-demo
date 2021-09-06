import React from 'react';

import './common-ui-described-image.module.css';
import { Image, Stack, Text } from '@chakra-ui/react';

export interface CommonUiDescribedImageProps {
  imageSrc: string;
  description: string;
}

export function CommonUiDescribedImage({
  imageSrc,
  description,
}: CommonUiDescribedImageProps) {
  return (
    <Stack alignItems="center">
      <Image maxW="100px" maxH="100px" src={imageSrc}></Image>
      <Text color="black">"{description}"</Text>
    </Stack>
  );
}

export default CommonUiDescribedImage;
