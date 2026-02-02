import AboutBreadcrumb from "@/components/about/AboutBreadcrumb";
import AboutChallenges from "@/components/about/AboutChallenges";
import AboutFAQ from "@/components/about/AboutFAQ";
import AboutFeatures from "@/components/about/AboutFeatures";
import AboutIntro from "@/components/about/AboutIntro";
import AboutSidebar from "./AboutSidebar";

export default function About() {
  return (
    <>
      <AboutBreadcrumb />

      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 order-2 lg:order-1 space-y-16">
            <AboutIntro />
            <AboutFeatures />
            <AboutChallenges />
            <AboutFAQ />
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 order-1 lg:order-2">
            <div className="sticky top-24">
              <AboutSidebar />
            </div>
          </aside>

        </div>
      </section>
    </>
  );
}
