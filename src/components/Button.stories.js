import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

const style = {
  backgroundColor: 'rgba(0, 105,217, .5)',
  color: 'purple',
  borderRadius: '20px',
  padding: '25px 50px',
  fontSize: '20px',
  boxShadow: '2px 3px purple'
}

storiesOf('Button', module)
  .add('+ Add Song', () => <Button label="+ Add Song" style={style} />)
