"use client";

import Image from "next/image";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <div className="font-bold tracking-wider">TN</div>

          <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#tech" className="hover:text-white">Tech Stack</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
<section className="relative flex min-h-screen items-center overflow-hidden px-6 py-28 sm:px-10 lg:px-20">
  <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/30 blur-[150px]" />

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 mx-auto max-w-7xl"
  >
    <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-blue-500">
          AI Engineer Portfolio
        </p>

        <h1 className="bg-gradient-to-r from-white via-white to-blue-400 bg-clip-text text-transparent font-black leading-[0.9] text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem]">
          TASOS
          <br />
          NIKOLOPOULOS
        </h1>

        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-white/10 px-4 py-2 text-sm">
            AI Engineer
          </span>

          <span className="rounded-full border border-white/10 px-4 py-2 text-sm">
            Machine Learning Developer
          </span>
        </div>

        <p className="mt-10 max-w-3xl text-xl leading-relaxed text-zinc-400">
          Computer Engineering & Informatics student focused on Artificial
          Intelligence, Machine Learning and Large Language Models, building
          real-world AI applications, APIs and intelligent systems.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <span className="rounded-full bg-zinc-900 px-5 py-3">
            Machine Learning
          </span>

          <span className="rounded-full bg-zinc-900 px-5 py-3">
            Natural Language Processing
          </span>

          <span className="rounded-full bg-zinc-900 px-5 py-3">
            LLM Applications
          </span>

          <span className="rounded-full bg-zinc-900 px-5 py-3">
            Software Development
          </span>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="https://github.com/TasosN-06"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-white/10 px-6 py-3 font-medium transition hover:border-white/30"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Image
            src="/profile.jpg"
            alt="Tasos Nikolopoulos"
            width={420}
            height={420}
            priority
            className="relative z-10 h-[260px] w-[260px] rounded-full border-4 border-white/10 object-cover object-center shadow-2xl sm:h-[320px] sm:w-[320px] lg:h-[420px] lg:w-[420px]"
          />
        </motion.div>
      </div>
    </div>
  </motion.div>
</section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-12 py-32 lg:px-20">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-500">
            About Me
          </p>

          <h2 className="mb-10 text-4xl font-bold md:text-5xl">
            Building AI systems that solve real-world problems.
          </h2>

          <p className="text-xl leading-relaxed text-zinc-400">
            I am a Computer Engineering and Informatics student with a strong
            focus on Artificial Intelligence, Machine Learning, and Software
            Development.
          </p>

          <p className="mt-6 text-xl leading-relaxed text-zinc-400">
            My experience includes developing machine learning models, building
            NLP applications, creating AI-powered APIs, and implementing
            transformer-based systems using technologies such as PyTorch,
            FastAPI, and LangChain.
          </p>

          <p className="mt-6 text-xl leading-relaxed text-zinc-400">
            Beyond technical development, I actively participate in student
            communities, hackathons, innovation events, and collaborative
            projects that help me continuously grow as an engineer.
          </p>
        </div>
      </section>

      {/* FEATURED PROJECTS */}

<section id="projects" className="mx-auto max-w-7xl px-12 py-32 lg:px-20">
  <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-500">
    Featured Projects
  </p>

  <h2 className="mb-16 text-4xl font-bold md:text-5xl">
    AI Projects & Applications
  </h2>

  <div className="grid gap-8 md:grid-cols-3">

{/* PDF TO SUM */}
<a
  href="https://github.com/TasosN-06/pdf-to-sum"
  target="_blank"
  rel="noopener noreferrer"
  className="group rounded-3xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-zinc-900"
>
  <p className="mb-3 text-blue-500">01</p>

  <h3 className="mb-4 text-2xl font-bold transition-colors group-hover:text-blue-400">
    AI Document Intelligence Platform
  </h3>

  <p className="mb-6 text-zinc-400">
    AI-powered document analysis system capable of extracting,
    understanding and summarizing PDF documents using modern LLM
    workflows.
  </p>

  <div className="flex flex-wrap gap-2 text-sm">
    <span>FastAPI</span>
    <span>•</span>
    <span>LangChain</span>
    <span>•</span>
    <span>Mistral OCR</span>
    <span>•</span>
    <span>Groq</span>
  </div>

  <div className="mt-6 flex flex-wrap gap-3">
  <a
    href="https://huggingface.co/spaces/Tasos06/pdf-to-sum"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
  >
    Live Demo →
  </a>

  <a
    href="https://github.com/TasosN-06/pdf-to-sum"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-blue-500/40"
  >
    View Code →
  </a>
</div>
</a>

{/* MINI GPT */}
<a
  href="https://github.com/TasosN-06/Mini-gpt"
  target="_blank"
  rel="noopener noreferrer"
  className="group rounded-3xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-zinc-900"
>
  <p className="mb-3 text-blue-500">02</p>

  <h3 className="mb-4 text-2xl font-bold transition-colors group-hover:text-blue-400">
    Mini GPT
  </h3>

  <p className="mb-6 text-zinc-400">
    Built and trained a GPT-style language model from scratch using
    PyTorch, implementing tokenization, transformers and text generation.
  </p>

  <div className="flex flex-wrap gap-2 text-sm">
    <span>PyTorch</span>
    <span>•</span>
    <span>Transformers</span>
    <span>•</span>
    <span>Deep Learning</span>
  </div>

  <p className="mt-6 text-sm text-blue-400">
    View on GitHub →
  </p>
</a>

{/* SENTIMENT ANALYSIS */}
<a
  href="https://github.com/TasosN-06/sentiment-analysis-api"
  target="_blank"
  rel="noopener noreferrer"
  className="group rounded-3xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-zinc-900"
>
  <p className="mb-3 text-blue-500">03</p>

  <h3 className="mb-4 text-2xl font-bold transition-colors group-hover:text-blue-400">
    Sentiment Analysis API
  </h3>

  <p className="mb-6 text-zinc-400">
    NLP application and API capable of classifying text sentiment
    using machine learning and natural language processing techniques.
  </p>

  <div className="flex flex-wrap gap-2 text-sm">
    <span>NLP</span>
    <span>•</span>
    <span>FastAPI</span>
    <span>•</span>
    <span>Scikit-Learn</span>
  </div>

  <p className="mt-6 text-sm text-blue-400">
    View on GitHub →
  </p>
</a>

  </div>
</section>

      {/* AI PROJECTS */}
<section className="mx-auto max-w-7xl px-12 py-32 lg:px-20">
  <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-500">
    Additional Projects
  </p>

  <h2 className="mb-16 text-4xl font-bold md:text-5xl">
    AI & Machine Learning Portfolio
  </h2>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

    <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
      <h3 className="mb-3 text-xl font-bold">
        Breast Cancer Classification
      </h3>

      <p className="text-zinc-400">
        Classification model using Support Vector Machines for cancer prediction and evaluation.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
      <h3 className="mb-3 text-xl font-bold">
        SMS Spam Detection
      </h3>

      <p className="text-zinc-400">
        NLP model using TF-IDF and machine learning techniques for spam detection.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
      <h3 className="mb-3 text-xl font-bold">
        Titanic Survival Prediction
      </h3>

      <p className="text-zinc-400">
        Logistic Regression model for predictive analytics and feature engineering.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
      <h3 className="mb-3 text-xl font-bold">
        K-Means Clustering
      </h3>

      <p className="text-zinc-400">
        Unsupervised learning project focused on clustering and pattern discovery.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
      <h3 className="mb-3 text-xl font-bold">
        KNN Classification
      </h3>

      <p className="text-zinc-400">
        Distance-based classification model with performance evaluation.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
      <h3 className="mb-3 text-xl font-bold">
        Random Forests & Decision Trees
      </h3>

      <p className="text-zinc-400">
        Ensemble learning techniques applied to classification problems.
      </p>
    </div>

  </div>
</section>

      {/* TECH STACK */}
      <section id="tech" className="mx-auto max-w-7xl px-12 py-32 lg:px-20">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-500">
          Tech Stack
        </p>

        <h2 className="mb-16 text-4xl font-bold md:text-5xl">
          Tools & Technologies
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8">
            <h3 className="mb-6 text-2xl font-bold">
              Artificial Intelligence
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Python",
                "PyTorch",
                "TensorFlow",
                "Scikit-Learn",
                "LangChain",
                "NLP",
                "Transformers",
                "LLMs",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-black px-4 py-2 text-sm text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8">
            <h3 className="mb-6 text-2xl font-bold">
              Software Engineering
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "FastAPI",
                "Docker",
                "Git",
                "GitHub",
                "Linux",
                "Java",
                "C++",
                "SQL",
                "Power BI",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-black px-4 py-2 text-sm text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* EXPERIENCE */}
<section
  id="experience"
  className="mx-auto max-w-7xl px-12 py-32 lg:px-20"
>
  <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-500">
    Experience
  </p>

  <h2 className="mb-16 text-4xl font-bold md:text-5xl">
    Education, Leadership & Experience
  </h2>

  <div className="space-y-8">

    {/* ATC */}
<div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8">
  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
    <h3 className="text-2xl font-bold">
      AI Engineer Training Program
    </h3>

    <span className="text-zinc-500">
      ATC • Sep 2025 – Jun 2026
    </span>
  </div>

  <p className="mt-4 text-zinc-400">
    Completed an intensive AI training program focused on Machine Learning,
    Deep Learning, Large Language Models, NLP applications and modern AI
    development workflows through hands-on projects and practical experience.
  </p>
</div>

    {/* MEDIA HOUSE */}
    <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h3 className="text-2xl font-bold">
          Founder & Creative Director
        </h3>

        <span className="text-zinc-500">
          Independent Media House • Present
        </span>
      </div>

      <p className="mt-4 text-zinc-400">
        Building a media house that collaborates with businesses to
        create content, strengthen brand presence and develop digital
        growth strategies through storytelling and creative production.
      </p>
    </div>

    {/* UNILEADS */}
    <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h3 className="text-2xl font-bold">
          UniLeads Member
        </h3>

        <span className="text-zinc-500">
          University of West Attica
        </span>
      </div>

      <p className="mt-4 text-zinc-400">
        Active member of a student community focused on innovation,
        networking, professional development, hackathons and
        collaboration with students and industry professionals.
      </p>
    </div>

  </div>
</section>
{/* CERTIFICATIONS */}
<section className="mx-auto max-w-7xl px-12 py-32 lg:px-20">
  <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-500">
    Certifications & Programs
  </p>

  <h2 className="mb-16 text-4xl font-bold md:text-5xl">
    Continuous Learning in AI & Technology
  </h2>

  <div className="grid gap-6 md:grid-cols-2">
    {[
      "AI Engineer Training Program — ATC",
      "AI Business Summer School — SHRM",
      "MIT Introduction to Deep Learning",
      "Introduction to Large Language Models",
    ].map((item) => (
      <div
        key={item}
        className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40"
      >
        <p className="text-xl font-bold">{item}</p>
      </div>
    ))}
  </div>
</section>
  {/* CONTACT */}
<section
  id="contact"
  className="mx-auto max-w-7xl px-12 py-32 lg:px-20"
>
  <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-500">
    Contact
  </p>

  <h2 className="mb-8 text-4xl font-bold md:text-5xl">
    Let's Build Something Great Together
  </h2>

  <p className="mb-12 max-w-2xl text-xl text-zinc-400">
    Whether it's Artificial Intelligence, Machine Learning,
    Software Development, research opportunities or exciting
    projects, I'm always open to connecting with people who
    are passionate about technology and innovation.
  </p>

  <div className="grid gap-6 md:grid-cols-3">

    <a
      href="https://github.com/TasosN-06"
      target="_blank"
      className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40"
    >
      <h3 className="mb-3 text-xl font-bold">
        GitHub
      </h3>

      <p className="text-zinc-400">
        Explore my projects and code repositories.
      </p>
    </a>

    <a
       href="https://www.linkedin.com/in/tasos-nikolopoulos-897260366"
       target="_blank"
       rel="noopener noreferrer"
       className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40"
    >
      <h3 className="mb-3 text-xl font-bold">
        LinkedIn
      </h3>

      <p className="text-zinc-400">
        Connect with me professionally.
      </p>
    </a>

    <a
      href="mailto:nikolopoulostasos06@gmail.com"
      className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40"
    >
      <h3 className="mb-3 text-xl font-bold">
        Email
      </h3>

      <p className="text-zinc-400">
        nikolopoulostasos06@gmail.com
      </p>
    </a>

  </div>
</section>

{/* FOOTER */}
<footer className="border-t border-white/10 py-8 text-center text-zinc-500">
  © 2026 Tasos Nikolopoulos. Built with Next.js & Tailwind CSS.
</footer>
    </main>
  );
}