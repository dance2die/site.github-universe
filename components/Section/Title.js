import styles from './Title.module.css';
import cx from 'clsx';

const Title = ({ children, gradient }) => (
	<h4 style={{ '--gradient-value': gradient }} className={cx(`text-lg lg:text-2xl`, styles.gradient)}>
		{children}
	</h4>
);

export default Title;
