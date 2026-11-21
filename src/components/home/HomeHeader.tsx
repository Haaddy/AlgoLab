import { useState } from 'react'
import { Link } from "react-router";
import { ArrowIcon, GithubIcon, LogoMark } from '../icons'

export default function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

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
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle__line" />
          <span className="menu-toggle__line" />
          <span className="menu-toggle__line" />
        </button>
        <a
          className="github-link"
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Проект AlgoLab на GitHub"
        >
          <GithubIcon aria-hidden="true" />
        </a>
        {/* <a className="nav-cta" href="#start">
          Начать изучение <ArrowIcon />
        </a> */}
        <Link className="nav-cta" to="/dashboard">Начать изучение <ArrowIcon /> </Link>
      </div>

      <nav
        className="mobile-nav"
        id="mobile-menu"
        aria-label="Мобильная навигация"
        hidden={!menuOpen}
      >
        <a className="mobile-nav__link" href="#features" onClick={() => setMenuOpen(false)}>Возможности</a>
        <a className="mobile-nav__link" href="#catalog" onClick={() => setMenuOpen(false)}>Алгоритмы</a>
        <a className="mobile-nav__link" href="#start" onClick={() => setMenuOpen(false)}>С чего начать</a>
      </nav>
    </header>
  )
}
