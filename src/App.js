import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import recoilPersist from 'recoil-persist';
import history from './services/history';
import Routes from './routes';
import './config/ReactotronConfig';
// necessita importa depois do reactoron
import { store, persistor } from './store';
import GlobalStyle from './styles/global';

const { RecoilPersist, updateState } = recoilPersist();
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RecoilRoot initializeState={updateState}>
          <RecoilPersist />
          <Router history={history}>
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
          </Router>
        </RecoilRoot>
      </PersistGate>
    </Provider>
  );
}

export default App;
