import React from 'react';
import { useDispatch } from 'react-redux';
import { Tooltip } from 'react-tooltip';

import styles from 'scss/modules/Button.module.scss';

import { toggleLock } from 'redux/slice/colorsSlice';

function Lock({ index, isLocked, luminance }) {
	const dispatch = useDispatch();

	const black = [styles.btn, styles.black].join(' ');
	const white = styles.btn;

	const className = luminance > 0.5 ? black : white;
	const color = luminance > 0.5 ? 'black' : 'white';

	return (
		<>
			<button id='lock' className={className} type='button' onClick={() => dispatch(toggleLock({ isLocked: !isLocked, index: index }))}>
				{
					isLocked ?
						<i className="fa-solid fa-lock" style={{ color: `${color}` }}></i>
						:
						<i className="fa-solid fa-lock-open" style={{ color: `${color}` }}></i>
				}
			</button>

			<Tooltip anchorSelect='#lock' className={styles.tooltip} delayShow={1000} delayHide={200}>
				Toggle lock
			</Tooltip>
		</>
	)
}

export default Lock;