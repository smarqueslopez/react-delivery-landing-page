import { ReactComponent as HomeImg } from '@/images/home-ilustration.svg'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import layout from '@/styles/Layout.module.scss'
import style from './Home.module.scss'

function Home() {
  const { t } = useTranslation()

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
          <h1 className={[style.home__title]}>{t('main.home.title')}</h1>
          <p className={[style.home__description]}>
            {t('main.home.description')}
          </p>
          <a href='#' className={[layout.button]}>
            {t('main.home.getStarted')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
