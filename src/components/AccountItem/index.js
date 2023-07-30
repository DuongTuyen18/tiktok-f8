import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import clsx from 'clsx';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
function AccountItem() {
  return (
    <div className={clsx(styles.wrapper)}>
      <img
        className={clsx(styles.avatar)}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/13dc9ea718bc5018e30c07bb723f035b~c5_300x300.webp?x-expires=1690794000&x-signature=j4MZtivmJQ%2FZRGT7DC9wVl3vaQo%3D"
        alt="aaa"
      />
      <div className={clsx(styles.info)}>
        <h4 className={clsx(styles.name)}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={clsx(styles['check-icon'])} icon={faCheckCircle}></FontAwesomeIcon>
        </h4>
        <span className={clsx(styles.username)}>dvt@gmail</span>
      </div>
    </div>
  );
}

export default AccountItem;
