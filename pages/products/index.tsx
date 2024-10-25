import ProductSection from "@/components/productSection";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="p-8 flex flex-col gap-16">
        <ProductSection />
      </section>
    </DefaultLayout>
  );
}
