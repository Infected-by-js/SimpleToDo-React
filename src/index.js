import React, { createContext } from 'react';
import { render } from 'react-dom';

import App from './App';
import { Global } from './styles/GlobalStyles';
import { firebase, auth, firestore } from './lib/firebase';
import { firebaseContext } from './context/firebaseContext';

render(
	<firebaseContext.Provider
		value={{
			firebase,
			auth,
			firestore,
		}}
	>
		<Global />
		<App />
	</firebaseContext.Provider>,
	document.getElementById('root')
);
