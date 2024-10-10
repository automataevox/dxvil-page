import DefaultLayout from "@/layouts/default";
import logo from "@/public/logo.png";
import Image from "next/image";
export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="grid place-content-center w-screen h-screen">
          
          <Image src={logo} className="w-[15rem] animate-pulse" alt="logo"/>

      </section>
    </DefaultLayout>
  );
}
