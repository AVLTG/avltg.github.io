import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Website() {
  return (
    <>
      <section id="hero" className="justify-center h-[85vh] items-center p-4 border border-foreground rounded-3xl">
        <div className="relative overflow-hidden w-full h-full rounded-3xl">
          <img src="/images/b.jpg" />
          <div className="absolute top-0 w-full h-full flex flex-col gap-4 justify-center">
            <h1 className="text-center text-cream libreCaslonBold">Amirali Tolooei</h1>
            <h2 className="text-center text-cream libreCaslon">Software Developer</h2>
          </div>
        </div>
      </section>

      <section id="about">
        <h1>About</h1>
        <p>Lorem Ipsum</p>
      </section>

      <section id="projects">
        <h1>Projects</h1>
      </section>

      <section id="contact">
        <h1>Contact</h1>
        <ul className="text-6xl">
          <li><FaGithub /></li>
          <li><FaLinkedin /></li>
          <li><FaEnvelope /></li>
        </ul>
      </section>
    </>
  );
}
