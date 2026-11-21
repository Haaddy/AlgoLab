import { ArrowIcon } from '../icons'

export default function CallToAction() {
  return (
    <section className="cta" id="how-it-works">
      <div className="container cta-inner">
        <div className="cta-copy">
          <div className="section-kicker">Готовы попробовать?</div>
          <h2>Откройте алгоритмы<br />с новой стороны.</h2>
          <p>Выберите тему, запустите визуализацию и разберите каждый шаг в своём темпе.</p>
          <a className="primary-button" href="#catalog">
            Перейти к каталогу <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
