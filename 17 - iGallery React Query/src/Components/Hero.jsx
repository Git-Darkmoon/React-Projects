import { AiOutlineArrowRight } from "react-icons/ai"

function Hero() {
  return (
    <section className="hero">
      <a
        id="hero-badge"
        href="https://tanstack.com/query/latest"
        target="_blank"
        rel="noopener noreferrer"
      >
        🎉 Implementing React Query <AiOutlineArrowRight className="icon" />
      </a>
      <h1 className="hero-title">check out some pictures.</h1>
      <p className="hero-desc">
        Explore a captivating gallery <b>made for you</b> and by you. Enter
        prompts for <b>personalized</b> image discovery.
      </p>
      <button className="btn primary-btn">get started</button>
    </section>
  )
}

export default Hero
