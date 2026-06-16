import { PageHero } from "@/components/PageHero";
import { ModelDecoderTool } from "@/components/ModelDecoderTool";

export default function ModelDecoderPage() {
  return (
    <>
      <PageHero
        eyebrow="Identification Tool"
        title="Ford Tractor Model Decoder"
        intro="Translate Ford model codes into series, chassis, engine, transmission, and production details."
      />
      <section className="paper-texture py-20">
        <div className="site-container max-w-5xl">
          <ModelDecoderTool />
        </div>
      </section>
    </>
  );
}
