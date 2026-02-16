import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-content">
        <p className="eyebrow">Yo, I'm</p>
        <h1 className="hero-title">jhxu</h1>
        <p className="hero-sub">I'm a interactive designer & developer based in Melbourne Australia. I create beautiful front-end experiences and engaging games for everyone to enjoy. </p>
        {/* <div className="hero-cta">
          <a className="btn primary" href="#projects">View my work</a>
          <a className="btn ghost" href="#contact">Get in touch</a>
        </div> */}
      </div>
    </section>
  );
}
