import { ReactComponent as AppImg } from '@/images/app-ilustration.svg'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import layout from '@/styles/Layout.module.scss'
import style from './InfoApp.module.scss'

function InfoApp() {
  const { t } = useTranslation()

  return (
    <section
      className={classNames([style.app], [layout.section], [layout.container])}
      id='app'
    >
      <div className={classNames([style.app__container], [layout.grid])}>
        <div className={[style.app__data]}>
          <h2 className={[layout['section__title-center']]}>
            {t('main.app.title')}
          </h2>
          <p className={[style.app__description]}>
            {t('main.app.description')}
          </p>
          <div className={[style.app__buttons]}>
            <a
              href='#'
              className={classNames([layout.button], [layout['button--flex']])}
            >
              <i
                className={classNames('bx', 'bxl-apple', [layout.button__icon])}
              ></i>
              {t('main.app.storeApple')}
            </a>
            <a
              href='#'
              className={classNames([layout.button], [layout['button--flex']])}
            >
              <i
                className={classNames('bx', 'bxl-play-store', [
                  layout.button__icon
                ])}
              ></i>
              {t('main.app.storeGoogle')}
            </a>
          </div>
        </div>

        <AppImg
          className={classNames(
            [layout.svg__img],
            [layout.svg__color],
            [layout.svg__blob],
            [style.app__img]
          )}
        />
      </div>
    </section>
  )
}

export default InfoApp
