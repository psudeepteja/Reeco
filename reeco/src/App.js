import React from 'react';
import { Provider } from 'react-redux';
import { Container } from '@mui/material';
import Order from './components/order';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Order />
      </Container>
    </Provider>
  );
}

export default App;
