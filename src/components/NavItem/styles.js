import styled from 'styled-components/macro';

export const NavItem = styled.li`
	display: flex;
	margin-bottom: 27px;
	margin-right: -1px;
	border-right: 4px solid transparent;
	transition: color 0.15s ease-in-out, border-color 0.15s ease-in-out;

	& g {
		transition: stroke 0.15s ease-in-out;
	}

	&:hover {
		border-color: var(--color-violet);
		color: var(--color-violet);

		& g {
			stroke: var(--color-violet);
		}
	}
`;
export const Link = styled.a`
	display: flex;
	align-items: center;
	flex: 1;
`;

export const ItemIcon = styled.span`
	margin-right: 15px;
	display: flex;
	align-items: center;

	svg {
		width: 20px;
		height: 20px;
	}
`;
export const ItemTitle = styled.span`
	font-size: 16px;
	font-weight: 500;
	color: inherit;
`;
