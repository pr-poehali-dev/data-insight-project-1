import { Hero } from "@/components/webapp/Hero";
import { Features } from "@/components/webapp/Features";
import { Notifications } from "@/components/webapp/Notifications";
import { Widget } from "@/components/webapp/Widget";

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