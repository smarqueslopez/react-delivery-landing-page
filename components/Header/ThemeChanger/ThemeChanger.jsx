import { useState } from 'react'
import classNames from 'classnames'
import style from './ThemeChanger.module.scss'

function ThemeChanger() {
  const [toggle, setToggle] = useState(true)

  const themeChanger = () => {
    setToggle(!toggle)
    document.body.classList.toggle('dark-theme', toggle)
  }

  return (
    <i
      className={classNames(
        'bx',
        `bx-toggle-${toggle ? 'left' : 'right'}`,
        style['theme-changer']
      )}
      id='theme-changer'
      onClick={themeChanger}
    ></i>
  )
}

export default ThemeChanger
