import classNames from 'classnames'
import { useTranslate } from '@/hooks/useTranslate'
import layout from '@/styles/Layout.module.scss'
import style from './Contact.module.scss'

function Contact() {
  const translate = useTranslate()

  return (
    <section
      className={classNames(
        [style.contact],
        [layout.section],
        [layout.container]
      )}
      id='contact'
    >
      <div className={classNames([style.contact__container], [layout.grid])}>
        <div className={[style.contact__content]}>
          <h2 className={[layout['section__title-center']]}>
            {translate.main.contact.title}
          </h2>
          <p className={[style.contact__description]}>
            {translate.main.contact.description}
          </p>
        </div>

        <ul className={classNames([style.contact__content], [layout.grid])}>
          <li className={[style.contact__address]}>
            {`${translate.main.contact.info.phoneLabel}: `}
            <a
              href={`tel:${translate.main.contact.info.phone}`}
              target='_blank'
              rel='noreferrer'
              title={translate.main.contact.info.phone}
              className={[style.contact__information]}
            >
              {translate.main.contact.info.phone}
            </a>
          </li>
          <li className={[style.contact__address]}>
            {`${translate.main.contact.info.emailLabel}: `}
            <a
              href={`mailto:${translate.main.contact.info.email}`}
              target='_blank'
              rel='noreferrer'
              title={translate.main.contact.info.email}
              className={[style.contact__information]}
            >
              {translate.main.contact.info.email}
            </a>
          </li>
          <li className={[style.contact__address]}>
            {`${translate.main.contact.info.addressLabel}: `}
            <a
              href='https://maps.google.com'
              target='_blank'
              rel='noreferrer'
              title={translate.main.contact.info.address}
              className={[style.contact__information]}
            >
              {translate.main.contact.info.address}
            </a>
          </li>
        </ul>
        <div className={style.contact__content}>
          <a
            href='#'
            className={layout.button}
            title={translate.main.contact.contactUs}
          >
            {translate.main.contact.contactUs}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
