import React from 'react';
import { storiesOf } from '@storybook/react';


import NameBar from './NameBar';


storiesOf('NameBar', module)
  .add('NameBar', () => <NameBar text="DJ BIA BIA" />)
