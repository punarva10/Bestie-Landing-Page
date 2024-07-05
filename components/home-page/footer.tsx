// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports
import { Section, Container } from "../craft";

// Asset imports
import Logo from "@/public/next.svg";
import {
  InstagramLogoIcon,
  Link1Icon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { LinkedinIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className="grid gap-12 md:grid-cols-[1.5fr_0.5fr]">
          <div className="grid gap-6">
            <Link href="/">
              <h3 className="sr-only">brijr/components</h3>
              <Image
                src="/logo.png"
                alt="Logo"
                width={80}
                height={30}
                className="transition-all hover:opacity-75"
              ></Image>
            </Link>
            <p>
              <Balancer>
                Join the Waitlist and you will be notified as soon as the beta
                version of the app is out!
              </Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="flex justify-around">My socials</h5>
            <Link
              href="https://www.linkedin.com/in/punarv-dinakar-tatakae/"
              className="flex justify-around"
            >
              Linkedin
              <LinkedInLogoIcon className="w-8 h-8" />
            </Link>
            <Link
              href="https://www.instagram.com/perksofbeingpunarv/"
              className="flex justify-around"
            >
              Instagram
              <InstagramLogoIcon className="w-8 h-8" />
            </Link>
            <Link
              href="https://twitter.com/PunarvDinakar1"
              className="flex justify-around"
            >
              Twitter
              <TwitterLogoIcon className="w-8 h-8" />
            </Link>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
