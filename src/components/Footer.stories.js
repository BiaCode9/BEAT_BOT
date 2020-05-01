import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from './Footer';

const style = {
  border: '1px solid purple',
  color: 'purple',
  fontSize: '8px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
}

storiesOf('Footer', module)
  .add('Footer', () => <Footer title="Copyright DJ BIA BIA" style={style} />)
