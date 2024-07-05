// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "../ui/button";

// Asset imports
import Placeholder from "@/public/placeholder.webp";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div>
          <Button
            asChild
            className="mb-6 w-fit"
            size={"sm"}
            variant={"outline"}
          >
            <Link className="not-prose" href="https://9d8.dev">
            Sign up for the wait list <ArrowRight className="w-4" />
            </Link>
          </Button>
          <h1>
            <Balancer>
            A social app to stay connected only with your closest circles
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>
            An app that restricts conversations and posts to your <br/>
            10 best friends, <br/>
            3 group chats and, <br/>
            1 romantic partner.
            </Balancer>
          </h3>
          <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Image
              className="h-full w-full object-cover object-bottom"
              src="/hero_img.jpg"
              width={1920}
              height={1080}
              alt="hero image"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
