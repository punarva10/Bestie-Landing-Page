// React and Next.js imports
import Image from "next/image";

// Third-party library imports
import { ArrowRight } from "lucide-react";
import Balancer from "react-wrap-balancer";

// Local component imports
import { Container, Section } from "@/components/craft";
import { Button } from "../ui/button";

// Asset imports
import { Dispatch, SetStateAction } from "react";

const Hero = ({setShowModal} : {setShowModal: Dispatch<SetStateAction<boolean>>}) => {
  return (
    <Section className="">
      <Container>
        <div>
          <Button
            asChild
            className="mb-6 w-fit h-12 text-base bg-gradient-to-br from-blue-500 to-purple-400 text-white cursor-pointer"
            size={"sm"}
            variant={"outline"}
          >
            <div onClick={() => setShowModal(true)}>
            Sign up for the wait list <ArrowRight className="w-4" />

            </div>
            {/* <Link className="not-prose" href="https://9d8.dev"> */}
            
            {/* </Link> */}
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
