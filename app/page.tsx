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

      <h1 className="mb-8 text-2xl font-medium tracking-tight">I'm Anutej</h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          A clean, fast, and lightweight portfolio template built with Next.js, Vercel, and Tailwind CSS for
          optimal performance.
        </p>
        <p>
          Nextfolio includes all the essentials for a stunning portfolio: SEO, MDX support, RSS, Atom, & JSON
          feeds, analytics, tweet & YouTube embeds, KaTeX integration, and{" "}
          <a target="_blank" href="https://github.com/1msirius/Nextfolio?tab=readme-ov-file#features">
            more
          </a>
          .
        </p>
        <p>
          Nextfolio is{" "}
          <a href={socialLinks.github} target="_blank">
            open-source
          </a>{" "}
          and fully customizable, making it easy to add more features.
        </p>
        <p>
          <a
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F1msirius%2FNextfolio"
            target="_blank"
          >
            Deploy
          </a>{" "}
          your Nextfolio site with Vercel in minutes and follow the set up instructions in the{" "}
          <a href="/blog/getting-started">Getting Started</a> post.
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
