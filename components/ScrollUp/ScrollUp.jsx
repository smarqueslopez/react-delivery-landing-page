import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import style from './ScrollUp.module.scss'

function ScrollUp() {
  const { t } = useTranslation()

  useEffect(() => {
    const scrollUp = document.getElementById('scroll-up')
    window.onscroll = (e) => {
      window.scrollY >= 200
        ? scrollUp.classList.add(style['scroll-up--show'])
        : scrollUp.classList.remove(style['scroll-up--show'])
    }
  }, [])

  return (
    <a
      href='#'
      className={style['scroll-up']}
      id='scroll-up'
      title={t('scrollUp.title')}
    >
      <i
        className={classNames(
          'bx',
          'bx-up-arrow-alt',
          style['scroll-up__icon']
        )}
      ></i>
    </a>
  )
}

export default ScrollUp
