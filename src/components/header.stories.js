import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './Header';

const style = {
  backgroundColor: "red",
  color: 'black',
  height: '50px',
}


storiesOf('Header', module)
  .add('Header', () => <Header title="header" style={style} />)
