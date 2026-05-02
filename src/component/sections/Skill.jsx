import React from "react";
import { Sparkles, MonitorSmartphone, PenTool } from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiGithub,
  SiFigma,
  SiVite,
} from "react-icons/si";
import FadeIn from "../animations/Fadein";

const skillGroups = [
  {
    title: "Frontend Development",
    items: [
      {
        name: "React.js",
        experience: "3+ years",
        level: "Expert",
        progress: 95,
        icon: SiReact,
      },
      {
        name: "JavaScript",
        experience: "4+ years",
        level: "Expert",
        progress: 92,
        icon: SiJavascript,
      },
      {
        name: "TypeScript",
        experience: "2+ years",
        level: "Advanced",
        progress: 82,
        icon: SiTypescript,
      },
      {
        name: "Next.js",
        experience: "2+ years",
        level: "Advanced",
        progress: 80,
        icon: SiNextdotjs,
      },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      {
        name: "Node.js",
        experience: "2+ years",
        level: "Intermediate",
        progress: 65,
        icon: SiNodedotjs,
      },
      {
        name: "REST APIs",
        experience: "3+ years",
        level: "Advanced",
        progress: 78,
        icon: SiNodedotjs,
      },
    ],
  },
  {
    title: "Tools & Others",
    items: [
      {
        name: "Git & GitHub",
        experience: "4+ years",
        level: "Advanced",
        progress: 88,
        icon: SiGithub,
      },
      {
        name: "Responsive Design",
        experience: "3+ years",
        level: "Expert",
        progress: 94,
        icon: MonitorSmartphone,
      },
      {
        name: "Figma",
        experience: "2+ years",
        level: "Intermediate",
        progress: 72,
        icon: SiFigma,
      },
      {
        name: "Vite",
        experience: "1+ year",
        level: "Advanced",
        progress: 81,
        icon: SiVite,
      },
    ],
  },
];

const getLevelColor = (level) => {
  const colors = {
    Expert: "text-[#8DFF69] bg-[#8DFF69]/15 border-[#8DFF69]/25",
    Advanced: "text-cyan-400 bg-cyan-500/15 border-cyan-500/25",
    Intermediate: "text-emerald-400 bg-emerald-500/15 border-emerald-500/25",
  };

  return colors[level] || "text-gray-400 bg-gray-500/15 border-gray-500/25";
};

export const Skill = () => {
  return (
    <section id="skills" className="relative overflow-hidden bg-black py-24 sm:py-28">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-28 left-1/2 h-112 w-md -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/3 left-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn delay={50}>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-primary shadow-[0_0_0_1px_rgba(141,255,105,0.08)]">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">My Expertise</span>
            </div>

            <h2 className="mt-8 text-4xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl">
              Skills & Technologies
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/60 sm:text-lg">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-8 xl:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <FadeIn key={group.title} delay={120 + groupIndex * 100}>
              <article className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.07]">
                <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="h-10 w-1 rounded-full bg-primary/70" />
                  <h3 className="text-2xl font-medium text-white">{group.title}</h3>
                </div>

                <div className="space-y-6">
                  {group.items.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div key={skill.name} className="space-y-2.5">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex min-w-0 items-center gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-primary ring-1 ring-white/5">
                              <Icon className="h-5 w-5" />
                            </div>

                            <div className="min-w-0">
                              <div className="truncate text-base font-medium text-white">
                                {skill.name}
                              </div>
                              <div className="text-sm text-white/50">{skill.experience}</div>
                            </div>
                          </div>

                          <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${getLevelColor(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>

                        <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                          <div
                            className="h-full rounded-full bg-linear-to-r from-primary/60 via-primary to-primary/80 transition-all duration-700"
                            style={{ width: `${skill.progress}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-linear-to-br from-primary/0 via-transparent to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
