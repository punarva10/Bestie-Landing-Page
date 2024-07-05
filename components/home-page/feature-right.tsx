// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// UI component imports
import { Container, Section } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import { Dispatch, SetStateAction } from "react";

const FeatureRight = ({
  setShowModal,
}: {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Section>
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-6 py-8">
          <h3 className="!my-0">Replace Your Instagram</h3>
          <p className="font-light leading-[1.4] opacity-70">
            Enough of looking at random people&apos;s lives, comparing yourself
            to them and feeling bad. <br />
            Enough of scrolling unlimited reels whenever you are free. <br />{" "}
            <br />
            Share posts, notes and videos only with your close friends and
            receive updates about only their lives.
          </p>
          <div className="not-prose flex items-center gap-2">
            <Button
              className="w-fit bg-gradient-to-br from-blue-500 to-purple-400 text-white"
              asChild
              onClick={() => setShowModal(true)}
            >
              <div>Get Started {"->"}</div>
            </Button>
          </div>
        </div>
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src="/insta_replace.jpg"
            alt="placeholder"
            className="fill object-cover"
            width={1920}
            height={1080}
          />
        </div>
      </Container>
    </Section>
  );
};

export default FeatureRight;
