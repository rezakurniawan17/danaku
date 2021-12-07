import Header from "../components/Header/Header"
import Features from "../components/Features/Features.jsx"
import Stats from "../components/Features/Stats"
import Price from "../components/Price/Price"
import Review from "../components/Review/Review"
import FAQ from "../components/FAQ/FAQ"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <Features />
      <Stats />
      <Price />
      <Review />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  )
}
