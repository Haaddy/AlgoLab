import { ArrowIcon, GithubIcon, LogoMark } from '../icons'

export default function HomeHeader() {
  return (
    <header className="container topbar">
      <a className="brand" href="#top" aria-label="AlgoLab — на главную">
        <LogoMark /> AlgoLab
      </a>
      <nav className="nav" aria-label="Основная навигация">
        <a href="#features">Возможности</a>
        <a href="#catalog">Алгоритмы</a>
        <a href="#start">С чего начать</a>
      </nav>
      <div className="nav-actions">
        <a
          className="github-link"
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Проект AlgoLab на GitHub"
        >
          <GithubIcon aria-hidden="true" />
        </a>
        <a className="nav-cta" href="#start">
          Начать изучение <ArrowIcon />
        </a>
      </div>
    </header>
  )
}
