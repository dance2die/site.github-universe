import cx from 'clsx';

import styles from './ViewAllButton.module.css';

export default function ViewAllButton({ url = '#', gradient }) {
  return (
    <div className="relative isolate w-32 h-10">
      <a
        style={{ '--gradient-value': gradient }}
        className={cx(
          'grid place-items-center bg-transparent tracking-tight',
          styles.button
        )}
        href={url}
      >
        <span className="uppercase text-xs tracking-wider">View All</span>
      </a>
    </div>
  );
}
