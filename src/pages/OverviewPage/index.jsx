import React, { useState } from 'react';
import {
	IconArrow,
	IconDate,
	IconDescription,
	IconOptions,
	IconSearch,
	IconSort,
	IconSubTasks,
} from '../../assets/icons';
import { Sidebar } from '../../components/Sidebar';
import { TaskItem } from '../../components/TaskItem';
import * as S from './styles';

export const OverviewPage = () => {
	const [activeRadio, setActiveRadio] = useState('all');

	const changeRadio = (e) => {
		setActiveRadio(e.target.value);
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
								<S.SortIcon>
									<IconSort />
								</S.SortIcon>
							</S.SortWrapp>
							<S.SearchWrapp>
								<S.SearchIcon>
									<IconSearch />
								</S.SearchIcon>
							</S.SearchWrapp>
							<S.ButtonCreateTask>Create Task</S.ButtonCreateTask>
						</S.ButtonsWrapp>
						<S.FilterRadioWrapp>
							<S.FilterRadioLabel checked={activeRadio === 'all'}>
								<S.FilterRadioText>All</S.FilterRadioText>
								<S.FilterRadioInput value="all" onChange={changeRadio} />
							</S.FilterRadioLabel>
							<S.FilterRadioLabel checked={activeRadio === 'needToDo'}>
								<S.FilterRadioText>Need To Do</S.FilterRadioText>
								<S.FilterRadioInput value="needToDo" onChange={changeRadio} />
							</S.FilterRadioLabel>
							<S.FilterRadioLabel checked={activeRadio === 'done'}>
								<S.FilterRadioText>Done</S.FilterRadioText>
								<S.FilterRadioInput value="done" onChange={changeRadio} />
							</S.FilterRadioLabel>
						</S.FilterRadioWrapp>
					</S.ContentHeader>
					<S.ContentBody>
						<div className="bodyListWrapp">
							<div className="taskList">
								<TaskItem />
							</div>
						</div>
						<div className="bodyAside">
							<div className="vidgetAtThisWeek">
								<h3>At this week</h3>
								<div className="calendar">
									<div className="dateScreen">
										<span className="currentDate">May 14, wednesday</span>
										<div className="dateGrid">
											<span>M</span>
											<span>T</span>
											<span>W</span>
											<span>T</span>
											<span>F</span>
											<span>S</span>
											<span>S</span>
											<span>12</span>
											<span>13</span>
											<span>14</span>
											<span>15</span>
											<span>16</span>
											<span>17</span>
											<span>18</span>
										</div>
									</div>
									<div className="plansOnDate">
										<ul className="planList">
											<li className="planItem">
												<p className="text">Search inspiration for upcoming project</p>
												<div className="time">14:10</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</S.ContentBody>
				</S.MainContent>
			</S.PageContent>
		</S.Container>
	);
};
