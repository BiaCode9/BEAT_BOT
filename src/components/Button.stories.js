import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

const style = {
  backgroundColor: '#0069D9',
  color: 'purple',
  borderRadius: '20px',
  padding: '25px 50px',
  fontSize: '20px'
}


storiesOf('Button', module)
  .add('+ Add Song', () => <Button label="+ Add Song" style={style} />)
