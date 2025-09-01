import HeroImg from "@/assets/images/hero.jpeg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 text-center">
          <h2 className="relative z-10 text-4xl font-medium lg:text-5xl text-white">
            Developer ,<span>&nbsp;&nbsp;</span> Creator ,<span>&nbsp;&nbsp;</span> Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I am Siddharth Mishra, a full-stack developer skilled in JavaScript and the MERN stack. 
                I enjoy building scalable web applications that combine clean design with reliable performance.
              </p>
              <p className="text-white">
                Alongside development, I am a 4★ coder on CodeChef and a Specialist on Codeforces. 
                Competitive programming has strengthened my problem-solving abilities, algorithmic thinking, and ability to write efficient, optimized code under pressure.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    With a balance of software development and competitive programming expertise, I aim to craft impactful solutions that are both technically sound and user-focused.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                     Siddharth Mishra
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
