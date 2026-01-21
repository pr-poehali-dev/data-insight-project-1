import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Notifications } from "@/components/Notifications";
import { Widget } from "@/components/Widget";

export default function Index() {
  return (
    <>
      <Hero />
      <Features />
      <Notifications />
      <Widget />
    </>
  );
}