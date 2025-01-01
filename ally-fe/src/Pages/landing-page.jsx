import FeatureComponent from "../components/homepage-components/FeatureComponent"
import FooterComponent from "../components/homepage-components/footerComponent"
import HeroComponent from "../components/homepage-components/HeroComponent"
import Navbar from "../components/homepage-components/NavbarComponent"
function LandingPage() {
  return (
    <>
      <main className="text-sm text-neutral-200 antialiased" >
        <Navbar />
        <HeroComponent />
        <FeatureComponent />
        <FooterComponent />
      </main>
    </>
  )
}
export default LandingPage