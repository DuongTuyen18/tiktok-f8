import styles from './Sidebar.module.scss';
import clsx from 'clsx';

function Sidebar() {
  return (
    <aside className={clsx(styles.wrapper)}>
      <h2>sidebar</h2>
    </aside>
  );
}

export default Sidebar;
