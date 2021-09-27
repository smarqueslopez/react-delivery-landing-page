import { useState } from 'react'
import { useTranslate } from '../../hooks/useTranslate'
import classNames from 'classnames'
import layout from '../../styles/Layout.module.scss'
import style from './Header.module.scss'

function Header() {
  const [toggle, setToggle] = useState(false)
  const translate = useTranslate()

  const clickHandler = (e) => {
    if (e.target.tagName === 'A') {
      setToggle(!toggle)
    }
  }

  return (
    <header className={style.header}>
      <nav className={classNames([style.nav], [layout.container])}>
        <a href='#' className={style.nav__logo} title={translate.header.logo}>
          {translate.header.logo}
        </a>
        <div
          className={classNames({
            [style.nav__menu]: true,
            [style['menu-show']]: toggle
          })}
        >
          <ul className={style.nav__list} onClick={clickHandler}>
            <li className={style.nav__item}>
              <a
                href='#home'
                title={translate.header.nav.home}
                className={style.nav__link}
              >
                {translate.header.nav.home}
              </a>
            </li>
            <li className={style.nav__item}>
              <a
                href='#about'
                title={translate.header.nav.about}
                className={style.nav__link}
              >
                {translate.header.nav.about}
              </a>
            </li>
            <li className={style.nav__item}>
              <a
                href='#services'
                title={translate.header.nav.services}
                className={style.nav__link}
              >
                {translate.header.nav.services}
              </a>
            </li>
            <li className={style.nav__item}>
              <a
                href='#contact'
                title={translate.header.nav.contact}
                className={style.nav__link}
              >
                {translate.header.nav.contact}
              </a>
            </li>
          </ul>
        </div>
        <div className={style.nav__toggle} onClick={() => setToggle(!toggle)}>
          <i className='bx bx-grid-alt' />
        </div>
        <a
          href='#'
          className={([layout.button], [style.header__button])}
          title={translate.header.order}
        >
          {translate.header.order}
        </a>
      </nav>
    </header>
  )
}

export default Header
