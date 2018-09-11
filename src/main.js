import React from 'react';
import ReactDom from 'react-dom';

import App from './component/app/app.js';
import registerServiceWorker from './registerServiceWorker';

ReactDom.render(<App />, document.getElementById('root'));
registerServiceWorker();