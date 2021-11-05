import React, { useState } from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';
import { IconVisible } from './assets/IconPasswordVisble.jsx';

export const FormInput = ({ Icon, placeholder, type = 'text', style, ...rest }) => {
	const [isPasswordShown, setIsPasswordShown] = useState(false);
	const isPasswordInput = type === 'password';

	const togglePasswordVisible = () => {
		setIsPasswordShown((isPasswordShown) => !isPasswordShown);
	};

	return (
		<S.InputWrapp style={style}>
			<S.InputLabel>
				<S.InputIcon>
					<Icon />
				</S.InputIcon>
				<S.Input
					type={isPasswordInput ? (isPasswordShown ? 'text' : 'password') : type}
					placeholder={placeholder}
					{...rest}
				/>
			</S.InputLabel>

			{isPasswordInput && (
				<S.ButtonVisibleWrap>
					<S.ButtonVisibleLabel>
						<S.ButtonVisible onClick={togglePasswordVisible} />
						<S.ButtonVisibleIcon>
							<IconVisible />
						</S.ButtonVisibleIcon>
					</S.ButtonVisibleLabel>
				</S.ButtonVisibleWrap>
			)}
		</S.InputWrapp>
	);
};

FormInput.propTypes = {
	Icon: PropTypes.elementType,
	placeholder: PropTypes.string,
	style: PropTypes.object,
	type: PropTypes.string,
};
