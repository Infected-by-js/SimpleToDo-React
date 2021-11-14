import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';

export const FilterRadioBtn = () => {
	return (
		<S.FilterRadioWrapp>
			<S.FilterRadioLabel>
				<S.FilterRadioText>All</S.FilterRadioText>
				<S.FilterRadioInput value="all" />
			</S.FilterRadioLabel>
			<S.FilterRadioLabel>
				<S.FilterRadioText>Need To Do</S.FilterRadioText>
				<S.FilterRadioInput value="needToDo" />
			</S.FilterRadioLabel>
			<S.FilterRadioLabel>
				<S.FilterRadioText>Done</S.FilterRadioText>
				<S.FilterRadioInput value="done" />
			</S.FilterRadioLabel>
		</S.FilterRadioWrapp>
	);
};

FilterRadioBtn.propTypes = {};
