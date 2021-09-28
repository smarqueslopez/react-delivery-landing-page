import classNames from 'classnames'
import style from './Footer.module.scss'
import layout from '@/styles/Layout.module.scss'
import { useTranslate } from '@/hooks/useTranslate'

function Footer() {
  const translate = useTranslate()

  return (
    <footer
      id='footer'
      className={classNames([style.footer], [layout.section])}
    >
      <div
        className={classNames(
          [style.footer__container],
          [layout.container],
          [layout.grid]
        )}
      >
        <div className={style.footer__content}>
          <a
            href='#'
            title={translate.footer.logo}
            className={style.footer__logo}
          >
            {translate.footer.logo}
          </a>
          <p className={style.footer__description}>
            {translate.footer.description}
          </p>
        </div>
        <div className={style.footer__content}>
          <h3 className={style.footer__title}>{translate.footer.services}</h3>
          <ul className={style.footer__links}>
            <li>
              <a
                href='#'
                title={translate.footer.pricing}
                className={style.footer__link}
              >
                {translate.footer.pricing}
              </a>
            </li>
            <li>
              <a
                href='#'
                title={translate.footer.discounts}
                className={style.footer__link}
              >
                {translate.footer.discounts}
              </a>
            </li>
            <li>
              <a
                href='#'
                title={translate.footer.reportBug}
                className={style.footer__link}
              >
                {translate.footer.reportBug}
              </a>
            </li>
            <li>
              <a
                href='#'
                title={translate.footer.terms}
                className={style.footer__link}
              >
                {translate.footer.terms}
              </a>
            </li>
          </ul>
        </div>
        <div className={style.footer__content}>
          <h3 className={style.footer__title}>{translate.footer.company}</h3>
          <ul className={style.footer__link}>
            <li>
              <a
                href='#'
                title={translate.footer.blog}
                className={style.footer__link}
              >
                {translate.footer.blog}
              </a>
            </li>
            <li>
              <a
                href='#'
                title={translate.footer.ourMission}
                className={style.footer__link}
              >
                {translate.footer.ourMission}
              </a>
            </li>
            <li>
              <a
                href='#'
                title={translate.footer.getTouch}
                className={style.footer__link}
              >
                {translate.footer.getTouch}
              </a>
            </li>
          </ul>
        </div>
        <div className={style.footer__content}>
          <h3 className={style.footer__title}>{translate.footer.community}</h3>
          <ul className={style.footer__link}>
            <li>
              <a
                href='#'
                title={translate.footer.support}
                className={style.footer__link}
              >
                {translate.footer.support}
              </a>
            </li>
            <li>
              <a
                href='#'
                title={translate.footer.questions}
                className={style.footer__link}
              >
                {translate.footer.questions}
              </a>
            </li>
            <li>
              <a
                href='#'
                title={translate.footer.help}
                className={style.footer__link}
              >
                {translate.footer.help}
              </a>
            </li>
          </ul>
        </div>
        <div className={style.footer__social}>
          <a
            href={translate.footer.social.facebook.link}
            target='_blank'
            rel='noreferrer'
            title={translate.footer.social.facebook.title}
            className={style['footer__social-link']}
          >
            <i className='bx bxl-facebook-circle' />
          </a>
          <a
            href={translate.footer.social.twitter.link}
            target='_blank'
            rel='noreferrer'
            title={translate.footer.social.twitter.title}
            className={style['footer__social-link']}
          >
            <i className='bx bxl-twitter' />
          </a>
          <a
            href={translate.footer.social.instagram.link}
            target='_blank'
            rel='noreferrer'
            title={translate.footer.social.instagram.title}
            className={style['footer__social-link']}
          >
            <i className='bx bxl-instagram-alt' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
