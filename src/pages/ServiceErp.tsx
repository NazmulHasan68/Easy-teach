
import AboutChallenges from "@/components/about/AboutChallenges";
import AboutFAQ from "@/components/about/AboutFAQ";
import AboutFeatures from "@/components/about/AboutFeatures";
import AboutSidebar from "./AboutSidebar";
import ServiceErpDemo from "@/components/Serives/ServiceErpDemo";
import ServiceErpIntro from "@/components/Serives/ServiceErpIntro";
import ServiceErpBanner from "@/components/Serives/ServiceErpBanner";

export default function ServiceErp() {
  return (
    <>
      <ServiceErpBanner />

      <section className="max-w-7xl mx-auto px-0 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 order-2 lg:order-1 space-y-16">
            <ServiceErpIntro />
            <AboutFeatures />
            <AboutChallenges />
            <AboutFAQ />
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 order-1 lg:order-2">
            <div className="flex flex-col gap-2">
              <AboutSidebar />
              <ServiceErpDemo/>
            </div>
          </aside>

        </div>
      </section>
    </>
  );
}
