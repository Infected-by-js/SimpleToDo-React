import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';
import { IconDate, IconOptions, IconSubTasks, IconDescription } from '../../assets/icons';
import { useState } from 'react';

export const TaskItem = ({
	id,
	title,
	description,
	done,
	due_on,
	important,
	sub_tasks,
	onComplete,
	onDelete,
}) => {
	const [isDone, setIsDone] = useState(done);

	const completeTask = (e) => {
		setIsDone((isDone) => !isDone);
		onComplete(id);
	};

	const deleteTask = () => {
		onDelete(id);
	};

	return (
		<S.TaskWrapp>
			<S.Content>
				<S.CompleteCheckboxWrapp done={done}>
					<S.CompleteHiddenCheckbox onChange={completeTask} value={isDone} />
				</S.CompleteCheckboxWrapp>
				<S.Title done={done}>{title}</S.Title>
				<S.Description done={done}>
					<span>
						<IconDescription />
					</span>
					<span>{description}</span>
				</S.Description>
				<S.Priority important={important}>{important ? 'Important' : 'Normal'}</S.Priority>
				<S.Date>
					<IconDate />
				</S.Date>
				<S.OptionsButton onClick={deleteTask}>
					<IconOptions />
				</S.OptionsButton>
				<S.SubTasksButton>
					<IconSubTasks />
				</S.SubTasksButton>
			</S.Content>
		</S.TaskWrapp>
	);
};

TaskItem.propTypes = {
	id: PropTypes.any.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	done: PropTypes.bool.isRequired,
	due_on: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date), PropTypes.number])
		.isRequired,
	important: PropTypes.bool.isRequired,
	sub_tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
	onComplete: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
};
