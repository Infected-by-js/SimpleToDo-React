import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';

export const DateVidget = () => {
	return (
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
	);
};

DateVidget.propTypes = {};
