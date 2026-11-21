import { LogoMark } from '../icons'

export default function HomeFooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div>
            <a className="brand footer-brand" href="#top">
              <LogoMark /> AlgoLab
            </a>
            <p className="footer-tagline">Алгоритмы, которые можно увидеть и понять.</p>
          </div>
          <nav className="footer-links" aria-label="Навигация в подвале">
            <a href="#features">Возможности</a>
            <a href="#catalog">Каталог</a>
            <a href="#start">С чего начать</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2025 AlgoLab</span>
          <span>Сделано для любопытных умов</span>
        </div>
      </div>
    </footer>
  )
}
