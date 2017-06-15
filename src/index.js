import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.css';

const store = configureStore();
render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
