import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import style from './Footer.module.scss'
import layout from '@/styles/Layout.module.scss'

function Footer() {
  const { t } = useTranslation()

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
          <a href='#' title={t('footer.logo')} className={style.footer__logo}>
            {t('footer.logo')}
          </a>
          <p className={style.footer__description}>{t('footer.description')}</p>
        </div>
        <div className={style.footer__content}>
          <h3 className={style.footer__title}>{t('footer.services')}</h3>
          <ul className={style.footer__links}>
            <li>
              <a
                href='#'
                title={t('footer.pricing')}
                className={style.footer__link}
              >
                {t('footer.pricing')}
              </a>
            </li>
            <li>
              <a
                href='#'
                title={t('footer.discounts')}
                className={style.footer__link}
              >
                {t('footer.discounts')}
              </a>
            </li>
            <li>
              <a
                href='#'
                title={t('footer.reportBug')}
                className={style.footer__link}
              >
                {t('footer.reportBug')}
              </a>
            </li>
            <li>
              <a
                href='#'
                title={t('footer.terms')}
                className={style.footer__link}
              >
                {t('footer.terms')}
              </a>
            </li>
          </ul>
        </div>
        <div className={style.footer__content}>
          <h3 className={style.footer__title}>{t('footer.company')}</h3>
          <ul className={style.footer__links}>
            <li>
              <a
                href='#'
                title={t('footer.blog')}
                className={style.footer__link}
              >
                {t('footer.blog')}
              </a>
            </li>
            <li>
              <a
                href='#'
                title={t('footer.ourMission')}
                className={style.footer__link}
              >
                {t('footer.ourMission')}
              </a>
            </li>
            <li>
              <a
                href='#'
                title={t('footer.getTouch')}
                className={style.footer__link}
              >
                {t('footer.getTouch')}
              </a>
            </li>
          </ul>
        </div>
        <div className={style.footer__content}>
          <h3 className={style.footer__title}>{t('footer.community')}</h3>
          <ul className={style.footer__links}>
            <li>
              <a
                href='#'
                title={t('footer.support')}
                className={style.footer__link}
              >
                {t('footer.support')}
              </a>
            </li>
            <li>
              <a
                href='#'
                title={t('footer.questions')}
                className={style.footer__link}
              >
                {t('footer.questions')}
              </a>
            </li>
            <li>
              <a
                href='#'
                title={t('footer.help')}
                className={style.footer__link}
              >
                {t('footer.help')}
              </a>
            </li>
          </ul>
        </div>
        <div className={style.footer__social}>
          <a
            href={t('footer.social.facebook.link')}
            target='_blank'
            rel='noreferrer'
            title={t('footer.social.facebook.title')}
            className={style['footer__social-link']}
          >
            <i className='bx bxl-facebook-circle' />
          </a>
          <a
            href={t('footer.social.twitter.link')}
            target='_blank'
            rel='noreferrer'
            title={t('footer.social.twitter.title')}
            className={style['footer__social-link']}
          >
            <i className='bx bxl-twitter' />
          </a>
          <a
            href={t('footer.social.instagram.link')}
            target='_blank'
            rel='noreferrer'
            title={t('footer.social.instagram.title')}
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
