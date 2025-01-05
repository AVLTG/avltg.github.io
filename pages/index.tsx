import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Project from "../components/Project";

export default function Website() {
  return (
    <>
      <section id="hero" className="justify-center h-[85vh] items-center p-4 border border-foreground mx-2 lg:mx-48 rounded-3xl">
        <div className="relative overflow-hidden w-full h-full rounded-3xl">
          <img src="/images/b.jpg" />
          <div className="absolute top-0 w-full h-full flex flex-col gap-4 justify-center">
            <h1 className="text-center text-cream libreCaslonBold">Amirali Tolooei</h1>
            <h3 className="text-center text-cream libreCaslon">Software Developer</h3>
          </div>
        </div>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <div className="flex flex-col md:flex-row gap-4 md:gap-12">
          <p className="flex-1 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p className="flex-1 text-justify">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <Project name="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image="/images/b.jpg" link="https://www.github.com/avltg" />
          <Project name="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image="/images/b.jpg" link="https://www.github.com/avltg" />
          <Project name="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image="/images/b.jpg" link="https://www.github.com/avltg" />
          <Project name="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image="/images/b.jpg" link="https://www.github.com/avltg" />
          <Project name="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image="/images/b.jpg" link="https://www.github.com/avltg" />
          <Project name="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image="/images/b.jpg" link="https://www.github.com/avltg" />
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <ul className="text-4xl mt-8 flex justify-center">
          <li><a href="https://www.github.com/avltg" target="_blank"><FaGithub /></a></li>
          <li><a href="https://www.linkedin.com/in/amirali-tolooei" target="_blank"><FaLinkedin /></a></li>
          <li><a href="mailto:aa.tolooei@gmail.com"><FaEnvelope /></a></li>
        </ul>
      </section>
    </>
  );
}
