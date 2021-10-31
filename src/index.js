import React, { createContext } from 'react';
import { render } from 'react-dom';
import App from './App';
import { Global } from './styles/GlobalStyles';
import { firebase, auth, firestore } from 'firebase/app';

const Context = createContext(null);

render(
	<Context.Provider
		value={{
			firebase,
			auth,
			firestore,
		}}
	>
		<Global />
		<App />
	</Context.Provider>,
	document.getElementById('root')
);
