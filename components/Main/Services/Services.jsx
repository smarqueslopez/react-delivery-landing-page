import { ReactComponent as ServImg1 } from '@/images/services1-ilustration.svg'
import { ReactComponent as ServImg2 } from '@/images/services2-ilustration.svg'
import { ReactComponent as ServImg3 } from '@/images/services3-ilustration.svg'
import classNames from 'classnames'
import { useTranslate } from '@/hooks/useTranslate'
import layout from '@/styles/Layout.module.scss'
import style from './Services.module.scss'

function Services() {
  const translate = useTranslate()

  return (
    <section
      className={classNames(
        [style.services],
        [layout.section],
        [layout.container]
      )}
      id='services'
    >
      <h2 className={[layout.section__title]}>
        {translate.main.services.title}
      </h2>
      <div className={classNames([style.services__container], [layout.grid])}>
        <div className={[style.services__data]}>
          <h3 className={[style.services__subtitle]}>
            {translate.main.services.servOff1}
          </h3>
          <ServImg1
            className={classNames(
              [layout.svg__color],
              [style.services__img],
              [layout.svg__blob]
            )}
          />
          <p className={[style.services__description]}>
            {translate.main.services.descOff1}
          </p>
          <a
            href='#'
            className={classNames([layout.button], [layout['button--link']])}
          >
            {translate.main.services.learnMore}
          </a>
        </div>
        <div className={[style.services__data]}>
          <h3 className={[style.services__subtitle]}>
            {translate.main.services.servOff2}
          </h3>
          <ServImg2
            className={classNames(
              [layout.svg__color],
              [style.services__img],
              [layout.svg__blob]
            )}
          />
          <p className={[style.services__description]}>
            {translate.main.services.descOff2}
          </p>
          <a
            href='#'
            className={classNames([layout.button], [layout['button--link']])}
          >
            {translate.main.services.learnMore}
          </a>
        </div>
        <div className={[style.services__data]}>
          <h3 className={[style.services__subtitle]}>
            {translate.main.services.servOff3}
          </h3>
          <ServImg3
            className={classNames(
              [layout.svg__color],
              [style.services__img],
              [layout.svg__blob]
            )}
          />
          <p className={[style.services__description]}>
            {translate.main.services.descOff3}
          </p>
          <a
            href='#'
            className={classNames([layout.button], [layout['button--link']])}
          >
            {translate.main.services.learnMore}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
