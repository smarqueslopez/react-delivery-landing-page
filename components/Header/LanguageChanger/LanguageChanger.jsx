import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import style from './LanguageChanger.module.scss'

function LanguageChanger() {
  const { t, i18n } = useTranslation()
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    i18n.changeLanguage(toggle ? 'es-ES' : 'en-US')
  }, [i18n, toggle])

  return (
    <>
      <div className={style.languageChanger}>
        <button
          type='button'
          aria-label={t('languageChanger.languageSelector')}
          onClick={() => setToggle(!toggle)}
        >
          <img
            src={`images/flag-${toggle ? 'es' : 'us'}.svg`}
            alt={t('languageChanger.zoneFlag')}
            title={t('languageChanger.zoneFlag')}
          />
          <span className={style.languageChanger}>
            {t('languageChanger.langName')}
          </span>
        </button>
      </div>
    </>
  )
}

export default LanguageChanger
