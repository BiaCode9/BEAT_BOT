import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchBar from './SearchBar';


storiesOf('SearchBar', module)
  .add('SearchBar', () => <SearchBar text="Track Search" />)
