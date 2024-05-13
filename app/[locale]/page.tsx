import Preview from "@/components/index/Preview";
import About from "@/components/index/About";
import Skills from "@/components/index/Skills";
import Experience from "@/components/index/Experience";
import Work from "@/components/index/Work";
import GetInTouch from "@/components/index/GetInTouch";
import { unstable_setRequestLocale } from "next-intl/server";

// @ts-ignore
export default function Index({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  return (
    <div>
      <Preview />
      <About />
      <Skills />
      <Experience />
      <Work />
      <GetInTouch />
    </div>
  );
}
