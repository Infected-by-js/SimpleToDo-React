import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';
import { IconDate, IconOptions, IconSubTasks, IconDescription } from '../../assets/icons';

export const TaskItem = () => {
	return (
		<S.TaskWrapp>
			<S.Content>
				<S.CompleteCheckboxWrapp>
					<S.CompleteHiddenCheckbox />
				</S.CompleteCheckboxWrapp>
				<S.Title>Search inspiration for upcoming project</S.Title>
				<S.Description>
					<IconDescription />
					<span> There is so much great inspiration in this world</span>
				</S.Description>
				<S.Priority>Normal</S.Priority>
				<S.Date>
					<IconDate />
				</S.Date>
				<S.OptionsButton>
					<IconOptions />
				</S.OptionsButton>
				<S.SubTasksButton>
					<IconSubTasks />
				</S.SubTasksButton>
			</S.Content>
		</S.TaskWrapp>
	);
};

TaskItem.propTypes = {};
