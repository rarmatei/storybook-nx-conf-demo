import React from 'react';

import './common-ui-progress-meter.module.css';
import { Progress, ProgressProps } from '@chakra-ui/react';

export interface CommonUiProgressMeterProps extends ProgressProps {
  value: number;
}

export function CommonUiProgressMeter(props: CommonUiProgressMeterProps) {
  return <Progress value={props.value} {...props} />;
}

export default CommonUiProgressMeter;
