import { Hero } from "@/components/sections/Hero";
import { JoinUs } from "@/components/sections/JoinUs";
import { LatestVideo } from "@/components/sections/LatestVideo";
import { WhatsHappening } from "@/components/sections/WhatsHappening";
import { GetConnected } from "@/components/sections/GetConnected";
import { GrowInFaith } from "@/components/sections/GrowInFaith";
import { Serve } from "@/components/sections/Serve";
import { StayConnected } from "@/components/sections/StayConnected";

// Section order follows the build brief. Metadata comes from the root layout.
export default function HomePage() {
  return (
    <>
      <Hero />
      <JoinUs />
      <LatestVideo />
      <WhatsHappening />
      <GetConnected />
      <GrowInFaith />
      <Serve />
      <StayConnected />
    </>
  );
}
