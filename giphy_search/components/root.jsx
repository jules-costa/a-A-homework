import React from 'react';
import { Provider } from 'react-redux';
import GiphysSearchContainer from './giphys_search_container';
import configureStore from '../store/store';

const Root = ({store}) => (
  <Provider store={store}>
    <GiphysSearchContainer store={store} />
  </Provider>
);

export default Root;
