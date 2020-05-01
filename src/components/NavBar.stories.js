import React from 'react';
import { storiesOf } from '@storybook/react';

import NavBar from './NavBar';


const style = {
  display: 'flex',
  justifyContent: 'flex-end',
}

storiesOf('NavBar', module)
  .add('NavBar', () => <NavBar text="DJ BIA BIA" style={style} />)
