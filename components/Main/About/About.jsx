import { ReactComponent as AboutImg } from '@/images/about-ilustration.svg'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import layout from '@/styles/Layout.module.scss'
import style from './About.module.scss'

function About() {
  const { t } = useTranslation()

  return (
    <section
      className={classNames(
        [style.about],
        [layout.section],
        [layout.container]
      )}
      id='about'
    >
      <div className={classNames([style.about__container], [layout.grid])}>
        <div className={style.about__data}>
          <h2 className={[layout['section__title-center']]}>
            {t('main.about.title')}
          </h2>
          <p className={style.about__description}>
            {t('main.about.description')}
          </p>
        </div>

        <AboutImg
          className={classNames(
            [layout.svg__img],
            [layout.svg__color],
            [layout.svg__blob],
            [style.about__img]
          )}
        />
      </div>
    </section>
  )
}

export default About
