import { ReactComponent as SecImg } from '../../../public/images/security-ilustration.svg'
import classNames from 'classnames'
import { useTranslate } from '../../../hooks/useTranslate'
import layout from '../../../styles/Layout.module.scss'
import style from './Security.module.scss'

function Security() {
  const translate = useTranslate()

  return (
    <section
      className={classNames(
        [style.security],
        [layout.section],
        [layout.container]
      )}
      id='security'
    >
      <div className={([style.security__container], [layout.grid])}>
        <div className={[style.security__data]}>
          <h2 className={[layout['section__title-center']]}>
            {translate.main.security.title}
          </h2>
          <p className={[style.security__description]}>
            {translate.main.security.description}
          </p>
        </div>
        <SecImg
          className={classNames(
            [layout.svg__img],
            [layout.svg__color],
            [layout.svg__blob]
          )}
        />
      </div>
    </section>
  )
}

export default Security
