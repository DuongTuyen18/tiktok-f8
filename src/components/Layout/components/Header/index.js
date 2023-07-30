import styles from './Header.module.scss';
import clsx from 'clsx';
import images from '~/assets/images';
import { wrapper as PropperWrapper } from '~/components/Propper';

import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/AccountItem';
function Header() {
  const [SearchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);
  return (
    <header className={clsx(styles.wrapper)}>
      <div className={clsx(styles.inner)}>
        <img src={images.logo} alt="Tiktok" />
        <Tippy
          interactive
          visible={SearchResult.length > 0}
          render={(SearchResult) => (
            <div className={clsx(styles['Search-Result'])} tabIndex="-1" {...SearchResult}>
              <PropperWrapper className="wrapper">
                <h4 className={clsx(styles['search-title'])}>Accounts</h4>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
              </PropperWrapper>
            </div>
          )}
        >
          <div className={clsx(styles.search)}>
            <input placeholder="Search accounts and videos" spellCheck={false} />
            <button className={clsx(styles.clear_btn)}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={clsx(styles.loadding_btn)} icon={faSpinner} />
            <span className={clsx(styles.SpanSpliter)}></span>
            <button className={clsx(styles.search_btn)}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={clsx(styles.actions)}>a</div>
      </div>
    </header>
  );
}

export default Header;
