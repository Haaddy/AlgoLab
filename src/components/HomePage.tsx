import '../styles/reset.css'
import '../styles/variables.css'
import '../styles/fonts.css'
import '../styles/general.css'
import '../styles/HomePage.css'
import {
  CallToAction,
  CatalogSection,
  FeaturesSection,
  Hero,
  HomeFooter,
  HomeHeader,
  StartersSection,
} from './home'

export default function HomePage() {
  return (
    <div className="site-shell">
      <HomeHeader />
      <main id="top">
        <Hero />
        <FeaturesSection />
        <CatalogSection />
        <StartersSection />
        <CallToAction />
      </main>
      <HomeFooter />
    </div>
  )
}
