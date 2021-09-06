import { ,  } from '@storybook/addon-knobs';
import React from 'react';
import { CommonUiImageRadioButtons, CommonUiImageRadioButtonsProps  } from './common-ui-image-radio-buttons';

export default {
  component: CommonUiImageRadioButtons,
  title: 'CommonUiImageRadioButtons'
};

export const primary = () => {
  
  
  const props:CommonUiImageRadioButtonsProps = {
    options: ('options', ),
    onChange: ('onChange', ),
  };
  

  return <CommonUiImageRadioButtons options = {props.options} onChange = {props.onChange}  />;
};