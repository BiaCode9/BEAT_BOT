import React from 'react';
import { storiesOf } from '@storybook/react';

import Footer from './Footer';

const style = {
  backgroundColor: "red",
  color: 'black',
  height: '50px',
}


storiesOf('Footer', module)
  .add('Footer', () => <Footer title="footer" style={style} />)
