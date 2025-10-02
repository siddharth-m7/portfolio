import React from "react";
import { Code2Icon, Code2, Activity, Cpu, Layers, Network, Binary } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
    <div className="relative bg-gray-900/50 rounded-lg p-6 h-full border border-gray-800/30 hover:border-cyan-400 hover:bg-gray-900/70 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
      {/* Simple icon */}
      <div className="mb-4">
        <Icon className="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
      </div>

      {/* Content with colorful highlights */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300">
          {title}
        </h3>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">{company}</span>
          <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent px-2 py-1 rounded-md border border-purple-400/20 group-hover:border-purple-400/40 transition-all duration-300">
            {period}
          </span>
        </div>
        <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Code2Icon,
      title: "Software Engineer Intern",
      company: "Shree Aanandam",
      period: "Sep - Nov 2025",
      description:
        "Contributed to creation of Database Models and Server side development of HealthCare Application using Node.js and PostgreSQL.",
    },
    {
      icon: Code2,
      title: "Full Stack Developer Intern",
      company: "Robosphere IOT",
      period: "July - Aug 2025",
      description:
        "Contributed to developing a web application using React and Node.js, enhancing user experience and functionality.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[#04081A]" />

        {/* Grid background */}
        <div className="absolute mx-auto inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Animated particles */}
        <div className="absolute inset-0 margin-auto">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative container mx-auto px-6 mt-10">
          {/* Section header with enhanced effects */}
          <div className="flex flex-col items-center space-y-8 mb-20">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
                Experience
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            </div>
          </div>

          {/* Experience grid with centered layout */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced background effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
      
      <style jsx>{`
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradient-xy 4s ease infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default ExperienceSection;