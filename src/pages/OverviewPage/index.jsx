import React, { useState } from 'react';
import { IconSearch, IconSort } from '../../assets/icons';
import { Sidebar } from '../../components/Sidebar';
import { TaskItem } from '../../components/TaskItem';
import { Icon } from '../../UI/Icon';
import * as S from './styles';

const tasks = [
	{
		id: '1',
		title: 'Search inspiration for upcoming project',
		description: 'There is so much great inspiration in this world',
		done: false,
		due_on: '1636876215887',
		important: false,
		sub_tasks: [
			{ title: 'sub task title', isDone: false },
			{ title: 'complteted sub task', isDone: true },
		],
	},
	{
		id: '2',
		title:
			'Tатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Application for improve my javascript skills and learn how wor',
		description:
			'Tатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х г',
		done: true,
		due_on: '1636876215887',
		important: true,
		sub_tasks: [],
	},
];

export const OverviewPage = () => {
	const [items, setItems] = useState(tasks);

	const onCompleteItem = (id) => {
		setItems(items.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
	};

	const onDeleteItem = (id) => {
		setItems(items.filter((item) => item.id !== id));
	};

	return (
		<S.Container>
			<Sidebar />
			<S.PageContent>
				<S.PageHeader>
					<S.UserProfile>
						<S.UserOptions />
						<S.UserName>example@example.com</S.UserName>
						<S.UserAvatar />
					</S.UserProfile>
				</S.PageHeader>
				<S.MainContent>
					<S.ContentHeader>
						<S.MainTitle>Overview</S.MainTitle>
						<S.ButtonsWrapp>
							<S.SortWrapp>
								{/* sort tooltip */}
								<Icon content={IconSort} />
							</S.SortWrapp>
							<S.SearchWrapp>
								{/* filter tooltip */}
								<Icon content={IconSearch} />
							</S.SearchWrapp>
							<S.ButtonCreateTask>Create Task</S.ButtonCreateTask>
						</S.ButtonsWrapp>
					</S.ContentHeader>
					<S.ContentBody>
						<S.ListWrapp>
							<S.TaskList>
								{items.map((item) => (
									<TaskItem
										key={item.id}
										{...item}
										onDelete={onDeleteItem}
										onComplete={onCompleteItem}
									/>
								))}
							</S.TaskList>
						</S.ListWrapp>
						<S.Aside></S.Aside>
					</S.ContentBody>
				</S.MainContent>
			</S.PageContent>
		</S.Container>
	);
};
