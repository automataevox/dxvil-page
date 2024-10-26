import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function ContactSection() {
  return (
    <div className="flex flex-col gap-3">
      <header>
        <h2 className="text-2xl">CONTACT</h2>
      </header>
      <main className="">
        <div>
          <p>
            <b>
              Glad you’ve made it this far! 🎉 It looks like you’re on the
              contacts page. Are you looking to connect? If so, let me know!
            </b>
          </p>
          <br />
          <p>
            For bookings, please reach out at booking@dxvil.com. 📩 For personal
            inquiries, use artist@dxvil.com. If you’re not comfortable with
            emails, feel free to message me on social media! I’m most active on
            Instagram, so connect with me there if you’d like, and let’s work
            together! 🤝
          </p>
        </div>
        <div>
          <p>Artist: <Link href={`mailto:${siteConfig.artistEmail}`}>{siteConfig.artistEmail}</Link></p>
          <p>Booking: <Link href={`mailto:${siteConfig.bookingEmail}`}>{siteConfig.bookingEmail}</Link></p>
        </div>
      </main>
    </div>
  );
}
