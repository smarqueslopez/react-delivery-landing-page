import { ReactComponent as HomeImg } from '@/images/home-ilustration.svg'
import classNames from 'classnames'
import { useTranslate } from '@/hooks/useTranslate'
import layout from '@/styles/Layout.module.scss'
import style from './Home.module.scss'

function Home() {
  const translate = useTranslate()

  return (
    <section className={classNames([style.home], [layout.section])} id='home'>
      <div
        className={classNames(
          [style.home__container],
          [layout.container],
          [layout.grid]
        )}
      >
        <HomeImg
          className={classNames(
            [layout.svg__img],
            [layout.svg__color],
            [style.home__img]
          )}
        />
        <div className={[style.home__data]}>
          <h1 className={[style.home__title]}>{translate.main.home.title}</h1>
          <p className={[style.home__description]}>
            {translate.main.home.description}
          </p>
          <a href='#' className={[layout.button]}>
            {translate.main.home.getStarted}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
