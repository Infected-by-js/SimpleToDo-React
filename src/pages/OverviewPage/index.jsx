import React, { useState } from 'react';
import { IconSearch, IconSort } from '../../assets/icons';
import { DateVidget } from '../../components/DateVidget';
import { Sidebar } from '../../components/Sidebar';
import { TaskItem } from '../../components/TaskItem';
import { Icon } from '../../UI/Icon';
import * as S from './styles';

export const OverviewPage = () => {
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
								<TaskItem />
							</S.TaskList>
						</S.ListWrapp>
						<S.Aside>{/* <DateVidget /> */}</S.Aside>
					</S.ContentBody>
				</S.MainContent>
			</S.PageContent>
		</S.Container>
	);
};
