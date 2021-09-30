import { ReactComponent as SecImg } from '@/images/security-ilustration.svg'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import layout from '@/styles/Layout.module.scss'
import style from './Security.module.scss'

function Security() {
  const { t } = useTranslation()

  return (
    <section
      className={classNames(
        [style.security],
        [layout.section],
        [layout.container]
      )}
      id='security'
    >
      <div className={classNames([style.security__container], [layout.grid])}>
        <div className={style.security__data}>
          <h2 className={layout['section__title-center']}>
            {t('main.security.title')}
          </h2>
          <p className={style.security__description}>
            {t('main.security.description')}
          </p>
        </div>
        <SecImg
          className={classNames(
            [layout.svg__img],
            [layout.svg__color],
            [layout.svg__blob],
            [style.security__img]
          )}
        />
      </div>
    </section>
  )
}

export default Security
