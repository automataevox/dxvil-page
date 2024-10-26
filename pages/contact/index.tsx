import ContactSection from "@/components/contactSection";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="p-8 flex flex-col gap-16">
        <ContactSection />
      </section>
    </DefaultLayout>
  );
}
