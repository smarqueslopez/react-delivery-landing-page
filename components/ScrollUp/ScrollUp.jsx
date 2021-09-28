import { useEffect } from 'react'
import { useTranslate } from '@/hooks/useTranslate'
import classNames from 'classnames'
import style from './ScrollUp.module.scss'

function ScrollUp() {
  const translate = useTranslate()

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
      title={translate.scrollUp.title}
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
