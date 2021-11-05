import React from 'react';
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { authContext } from '../context/authContext';
import { useMemo } from 'react';

const auth = () => {
	const [authed, setAuthed] = useState(false);

	return useMemo(() => {
		console.log(authed);

		return {
			authed,
			login() {
				return new Promise((res) => {
					setAuthed(true);
					res();
				});
			},
			logout() {
				return new Promise((res) => {
					setAuthed(false);
					res();
				});
			},
		};
	}, [authed]);
};

export const AuthProvider = ({ children }) => {
	const authObj = auth();
	return <authContext.Provider value={authObj}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);

AuthProvider.propTypes = {
	children: PropTypes.object,
};
