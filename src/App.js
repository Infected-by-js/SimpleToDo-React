import React from 'react';
import * as S from './AppStyled';
import { Sidebar } from './components/Sidebar';

const App = () => {
	return (
		<S.App>
			<Sidebar />
		</S.App>
	);
};

export default App;
