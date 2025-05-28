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
          <p className="flex-1 text-justify">My name is Amirali Tolooei, a computer science major and statistics minor at the University of Toronto! I'm currently in university learning Machine Learning, Game Dev, Human Computer Interactions, and computer vision. Outside of school, I'm interested in many things such as Magic The Gathering, video games, watching tv shows, and going to the gym. For those interested, in Magic I play a lot of Grixis, and Mardu, but I am currently working on a Volo deck. In video games I've been playing a lot of Marvel Rivals and Rocket League recently, and I also have a queue of story games to play. For tv shows, me and my friends are currently going through a watchthrough of the Netflix's Marvel series, and we are currently on Daredevil. Finally, At the gym, I am spending most of my time skipping leg days and cardio.</p>
          <p className="flex-1 text-justify">I've been a huge video game player since I was a kid, and that was really ignited my passion for computer science to begin with. I wanted to be able to develop games that people could enjoy the way I enjoyed the ones I played. However, after taking just one class on it I also developed a huge passion for AI and ML. It fascinated me learning all the ins and outs of different techniques and different applications especially when tied to game solving algorithms or agents. For this reason, I ended up doing a trifecta focus in AI, Computer Vision, and Game Development, and am currently looking to develop a career path in the same areas! More specifically, I am extremely interested in computer graphics and vision and its intersection with AI, as well as game AI's and "game beating" agents for more complex games.</p>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <Project name="Size Matters" description="A single-player puzzle experience, where players are challenged to cross a series of rooms by completing puzzles That can only be solved using the Swap Mechanic." image="/images/sizeMatters.png" link="https://gump0.itch.io/size-matters" />
          <Project name="Voxify" description="Voxify aims to be a platform for Voice Cloning and Text-to-Speech (TTS) synthesis. The project is focused on creating a user-friendly interface for users to upload their voice samples and generate synthetic speech. (Unfortunately not public yet)." image="/images/voxify_design.png" link="https://www.github.com/avltg" />
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
