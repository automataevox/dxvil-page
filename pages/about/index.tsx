import AboutSection from "@/components/aboutSection";
import UpcomingShowsSection from "@/components/UpcomingShowsSection";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="p-8 flex flex-col gap-16">
        <AboutSection />
      </section>
    </DefaultLayout>
  );
}
