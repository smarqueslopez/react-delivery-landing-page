import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import style from './ColorChanger.module.scss'

const COLORS = {
  yellow: {
    hue: '45',
    sat: '90%'
  },
  red: {
    hue: '4',
    sat: '90%'
  },
  orange: {
    hue: '18',
    sat: '85%'
  },
  green: {
    hue: '118',
    sat: '50%'
  }
}

function ColorChanger() {
  const { t } = useTranslation()

  const changeColor = (e) => {
    if (e.target.nodeName === 'DIV') {
      const color = e.target.getAttribute('data-color')
      const rootStyles = document.documentElement.style
      rootStyles.setProperty('--hue', COLORS[color].hue)
      rootStyles.setProperty('--sat', COLORS[color].sat)
    }
  }

  return (
    <div className={style.colorChanger} onClick={changeColor}>
      <div
        data-color='yellow'
        title={t('colorChanger.yellow')}
        className={classNames(style.colorChanger__button, style.yellow)}
      ></div>
      <div
        data-color='red'
        title={t('colorChanger.red')}
        className={classNames(style.colorChanger__button, style.red)}
      ></div>
      <div
        data-color='orange'
        title={t('colorChanger.orange')}
        className={classNames(style.colorChanger__button, style.orange)}
      ></div>
      <div
        data-color='green'
        title={t('colorChanger.green')}
        className={classNames(style.colorChanger__button, style.green)}
      ></div>
    </div>
  )
}

export default ColorChanger
