import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata = pageMeta({
  title: "Privacy",
  description:
    "How the Faith Fellowship Community Church website handles the information you send through the contact form, plus the outside services it links to.",
  path: "/privacy",
});

// Draft written for the build. The church should review it before launch (see CONTENT_TODO.md).
export default function PrivacyPage() {
  const h2 = "mt-10 font-display text-h3 font-medium text-ink";
  return (
    <>
      <PageHeader title="Privacy" />
      <section className="py-16 sm:py-20">
        <Container width="narrow" className="prose-ffcc text-lg leading-relaxed text-ink-soft">
          <p>
            This page explains what this website collects and how {site.name} uses it.
          </p>

          <h2 className={h2}>The contact form</h2>
          <p>
            When you send a message we receive your name, your email address, your message and the reason you chose.
            A phone number and how you heard about FFCC are optional. The church office uses this information to reply
            to you. We do not sell it or share it for marketing.
          </p>

          <h2 className={h2}>Site measurement</h2>
          <p>
            We count page views and a few actions, such as a tap on the phone number or the Give button. These counts do
            not identify you and the site sets no advertising cookies.
          </p>

          <h2 className={h2}>Outside services</h2>
          <p>
            Online giving happens on Givelify. Service videos come from Facebook and load only after you press play. The
            map comes from Google and loads only after you ask for it. Each of those services has its own privacy policy.
          </p>

          <h2 className={h2}>Questions</h2>
          <p>
            Call the church office at <a href={site.phone.href}>{site.phone.display}</a> or email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>. You can ask us to delete a message you sent.
          </p>
        </Container>
      </section>
    </>
  );
}
