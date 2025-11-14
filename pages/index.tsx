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
          <p className="flex-1 text-justify">My name is Amirali Tolooei, a computer science major and statistics minor at the University of Toronto! I'm I am a recent grad who studied a lot of Machine Learning and Human Computer Interactions while in school. Ever since graduating however, I have been taking Angela Yu's Complete Full-Stack Web Development Bootcamp, and Stephane Maarek's AWS Certified Solutions Architect Associate course hoping to get my certification soon. Outside of studying, I'm interested in many things such as Magic The Gathering, video games, watching tv shows, and going to the gym. For those interested, in Magic I play a lot of commander and pauper games. In video games I've been playing a lot of Overwatch with my friends lately, and I also have a queue of story games to play. For tv shows, me and my girlfriend are on hiatus from going through all of the Netflix's Marvel series, and we are currently watching Dexter. Finally, At the gym, I am spending most of my time skipping leg days and cardio.</p>
          <p className="flex-1 text-justify">I've been a huge video game nerd since I was a kid, and that was what really ignited my passion for computer science to begin with. I wanted to be able to develop games that people could enjoy the way I enjoyed the ones I played. When I got to highschool, however, learning javascript peaqued my interest in computer science as a whole. From there I took computer science as my major hoping to do something with game dev or web dev, but during my studies AI hit a huge boom and I ended up making it my focus. It was definitely fascinating learning all the ins and outs of different techniques and different applications especially reinforcement learning models. For this reason, I ended up doing a focus in AI and Game Development (although the second one was a bit of an accident), and am currently looking to develop a career path in the same areas! However, I have also recently through my online courses rekindled my love of web development and have been trying to get back into that as well.</p>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <Project name="Size Matters" description="A single-player puzzle experience, where players are challenged to cross a series of rooms by completing puzzles That can only be solved using the Swap Mechanic." image="/images/sizeMatters.png" link="https://gump0.itch.io/size-matters" />
          <Project name="Voxify" description="Montagy aims to be a platform for Voice Cloning and Text-to-Speech (TTS) synthesis. The voxify project is focused on creating a user-friendly interface for users to upload their voice samples and generate synthetic speech with multilingual capabilities, emotion blending, and TTS streamed voices of LLM outputs. (Unfortunately not public)." image="/images/voxify_design.png" link="https://www.github.com/avltg" />
          <Project name="Connuki" description="Connuki is a chrome extension that helps users' change their YouTube recommendation algorithm, helping them see more shorts and videos they want to see, and suppress content that they want to avoid." image="/images/connuki.jpg" link="https://devpost.com/software/contentnuke" />
          <Project name="U-Net Image Segmentation for Multi-MNIST" description="An implementation of the U-Net architecture for segmenting overlapping MNIST digits into 11 distinct classes, with a focus on analyzing the impact of skip connections on segmentation accuracy." image="/images/Unet.png" link="https://colab.research.google.com/drive/1lOd01zhpsz5L795FKP-ZL03TexQDWAhD?usp=sharingD" />
          <Project name="MathBERT Fine-Tuning for Verbal Arithmetic" description="A fine-tuning experiment using MathBERT and BERTweet on a verbal arithmetic classification task, comparing model performance with and without pretrained weights on mathematical expressions." image="/images/Bert.png" link="https://colab.research.google.com/drive/1fFks3sL0sasPM6VV7fbjOK9ABdlKjFyt?usp=sharing" />
          <Project name="PatchMatch" description="An object-oriented implementation of the PatchMatch algorithm using only NumPy, featuring optimized nearest-neighbor field generation, vectorized patch comparisons, and image reconstruction to validate performance. (Not public for Academic Integrity reasons)" image="/images/PatchMatch.png" link="https://www.github.com/avltg" />
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p className="text-center">Feel free to check out my Github or LinkedIn, or shoot me an email if you want to chat!</p>
        <ul className="text-4xl mt-8 flex justify-center">
          <li><a href="https://www.github.com/avltg" target="_blank"><FaGithub /></a></li>
          <li><a href="https://www.linkedin.com/in/amirali-tolooei" target="_blank"><FaLinkedin /></a></li>
          <li><a href="mailto:aa.tolooei@gmail.com"><FaEnvelope /></a></li>
        </ul>
      </section>
    </>
  );
}
