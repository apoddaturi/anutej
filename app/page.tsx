import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">I'm అనుటేజ్</h1>

      <div className="prose prose-neutral dark:prose-invert">
        {/* I’m Anutej Poddaturi, a software development engineer passionate about creating impactful solutions. I’ve honed my skills at esteemed companies like S&P Global Market Intelligence and Salesforce, enhancing software systems and boosting user engagement.

        Proficient in Python, Java, AWS, and Terraform, I optimize workflows and implement innovative solutions. Notably, I migrated and improved the OmniSearch platform, increasing its user base.

        A Master’s degree in Information Systems from Northeastern University, coupled with a Bachelor’s degree in Computer Science from Osmania University, has equipped me with knowledge in application engineering.

        I’ve received recognition like the S&P Global Recognition and VIBE Champion award. My portfolio showcases my commitment to excellence and passion for driving technological advancements while ensuring customer satisfaction. I’m dedicated to continuous learning and contributing to growth-fostering projects. */}
        <p>
          I’m Anutej Poddaturi, a software development engineer passionate about creating impactful solutions.
          I’ve honed my skills at esteemed companies like S&P Global Market Intelligence and Salesforce, enhancing
          software systems and boosting user engagement.
        </p>
        <p>
          Proficient in Python, Java, AWS, and Terraform, I optimize workflows and implement innovative solutions.
          Notably, I migrated and improved the OmniSearch platform, increasing its user base.
        </p>
        <p>
          A Master’s degree in Information Systems from Northeastern University, coupled with a Bachelor’s degree
          in Computer Science from Osmania University, has equipped me with knowledge in application engineering.
        </p>
        <p>
          I’ve received recognition like the S&P Global Recognition and VIBE Champion award. My portfolio
          showcases my commitment to excellence and passion for driving technological advancements while ensuring
          customer satisfaction. I’m dedicated to continuous learning and contributing to growth-fostering
          projects.
        </p>
        <p>
          Built and maintained by{" "}
          <a href="https://imsirius.xyz/" target="_blank">
            Sirius
          </a>
          .
        </p>
        <div className="flex flex-row gap-3 content-center">
          <p>Site Visitors:</p>
          <div className="content-center">
            <a href="https://hits.seeyoufarm.com">
              <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fwww.apoddaturi.com&count_bg=%2373C932&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=Visits&edge_flat=false" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
