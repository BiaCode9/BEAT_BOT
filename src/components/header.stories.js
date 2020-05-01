import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './Header';

const style = {
  border: '1px solid purple',
  right: '0',
  top: '0',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, .5)',
  textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF',
  width: '100%',
  fontSize: '20px',
}


storiesOf('Header', module)
  .add('Header', () => <Header title="header" style={style} />)
