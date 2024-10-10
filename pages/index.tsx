import NewReleasesSection from "@/components/NewReleasesSection";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="p-8 ">
        <NewReleasesSection />
      </section>
    </DefaultLayout>
  );
}
