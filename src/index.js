import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import ConnectFunction from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducer  from './reducers/rootReducers'

const store = createStore(reducer);


ReactDOM.render(
     <Provider store={store}>
        <ConnectFunction />
     </Provider>,
     document.getElementById('root'));
//ReactDOM.render(  <App />, document.getElementById('root'));
registerServiceWorker();
