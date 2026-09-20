import Link from "next/link";
import { mainNav, utilityNav } from "@/content/navigation";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { HeaderShell } from "./HeaderShell";
import { DesktopNav } from "./DesktopNav";
import { MobileDrawer } from "./MobileDrawer";
import { Logo } from "./Logo";

export function Header() {
  return (
    <HeaderShell>
      <Container className="flex min-h-[4.5rem] items-center justify-between gap-4 transition-[min-height] duration-fast ease-standard lg:min-h-20 lg:group-data-[scrolled=true]/header:min-h-16">
        <Logo />
        <div className="flex items-center gap-3">
          <DesktopNav items={mainNav} />
          <div className="hidden xl:block">
            <ButtonLink href="/about/times-directions">Join Us Sunday</ButtonLink>
          </div>
          <MobileDrawer items={mainNav} utility={utilityNav} />
        </div>
      </Container>

      {/* The drawer needs JavaScript. This keeps the main links reachable without it. */}
      <noscript>
        <nav aria-label="Main" className="border-t border-line bg-mist lg:hidden">
          <ul className="mx-auto flex max-w-site flex-wrap gap-x-5 gap-y-1 px-5 py-3 text-[0.9375rem]">
            {mainNav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="inline-flex min-h-11 items-center underline underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </noscript>
    </HeaderShell>
  );
}
