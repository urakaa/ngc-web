import About from "components/home/about";
import Hero from "components/home/hero";
import Step from "components/home/step";
import Investor from "components/home/investor";
import Pdf from "components/home/pdf";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Step />
      <Investor />
      <Pdf />
    </>
  );
}
