import AboutSidebar from "./AboutSidebar";
import ServiceDigitalIntro from "@/components/Serives/ServiceDigitalIntro";
import SericeDigitaldemo from "@/components/Serives/SericeDigitaldemo";
import ServiceDigitalBanner from "@/components/Serives/ServiceDigitalbanner";
import WhatWeProvide from "@/components/Serives/WhatWeProvide";
import ServiceWebChallenges from "@/components/Serives/ServiceWebChallenges";
import ServiceDigitalQuestion from "@/components/Serives/ServiceDigitalQuestion";

export default function ServiceDigital() {
  return (
    <>
      <ServiceDigitalBanner />

      <section className="max-w-7xl mx-auto px-1 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 order-1 lg:order-1 ">
            <ServiceDigitalIntro />
            <WhatWeProvide/>
            <ServiceWebChallenges/>
            {/* <AboutFeatures />
            <AboutChallenges /> */}
            <ServiceDigitalQuestion/>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 order-2 lg:order-2">
            <div className="sticky top-24">
              <AboutSidebar />
              <SericeDigitaldemo/>
            </div>
          </aside>

        </div>
      </section>
    </>
  );
}
