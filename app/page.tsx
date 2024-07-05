'use client'

import { Container, Main, Section } from "@/components/craft";
import CTA from "@/components/home-page/cta";
import FeatureLeft from "@/components/home-page/feature-left";
import FeatureRight from "@/components/home-page/feature-right";
import Footer from "@/components/home-page/footer";
import Hero from "@/components/home-page/hero";
import Modal from "@/components/home-page/modal";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(true)

  return (
    <Main>
      <Section id="hero">
        <Container>
          <Hero />
        </Container>
      </Section>
      <Section id="feature-left">
        <Container>
          <FeatureLeft />
        </Container>
      </Section>
      <Section id="feature-right">
        <Container>
          <FeatureRight />
        </Container>
      </Section>
      <Section id="cta">
        <Container>
          <CTA />
        </Container>
      </Section>
      <Section id="footer">
        <Container>
          <Footer />
        </Container>
      </Section>

      {showModal && <Modal showModal={showModal} setShowModal={setShowModal}/>}
    </Main>
  );
}
