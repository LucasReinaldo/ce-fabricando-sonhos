import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { client } from "@/libs/prismic";
import Prismic from "prismic-javascript";
import PrismicDOM from "prismic-dom";
import { Document } from "prismic-javascript/types/documents";

import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Path from "@/components/Path";
import Company from "@/components/Company";
import Classes from "@/components/Classes";
import Footer from "@/components/Footer";
import DesignedBy from "@/components/DesignedBy";

import {
  ImageContainer,
  Container,
  Main,
  WaveContainer,
  CardContainer,
  PathContainer,
  CompanyContainer,
  ClassesContainer,
  MapContainer,
  FooterContainer,
} from "@/styles/pages/Home";

interface HomeProps {
  cards: Document[];
  routine: Document[];
  morning: Document[];
  afternoon: Document[];
  about: Document[];
  classes: Document[];
}

const DynamicMap = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home({
  cards,
  routine,
  afternoon,
  morning,
  about,
  classes
}: HomeProps) {
  const router = useRouter();

  if (router.isFallback) return <p>Loading...</p>;
  return (
    <>
      <Head>
        <title>CE Fabricando Sonhos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ImageContainer>
        <Image src="/background.jpg" unsized />
      </ImageContainer>
      <Container>
        <Main>
          <WaveContainer>
            <Image className="first-wave" src="/wave-orange.svg" unsized />
          </WaveContainer>
          <CardContainer>
            {cards.map(({ data }, index) => (
              <Card key={index}>
                {PrismicDOM.RichText.asText(data.card_title)}
              </Card>
            ))}
          </CardContainer>
          <PathContainer>
            <Path routine={routine} afternoon={afternoon} morning={morning} />
          </PathContainer>
          <WaveContainer>
            <Image className="second-wave" src="/wave-blue.svg" unsized />
          </WaveContainer>
          <CompanyContainer>
            <Company about={about} />
          </CompanyContainer>
          <ClassesContainer>
            <Classes classes={classes} />
          </ClassesContainer>
          <MapContainer>
            <DynamicMap />
          </MapContainer>
          <FooterContainer>
            <Footer />
            <hr />
            <DesignedBy />
          </FooterContainer>
        </Main>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const cards = await client().query(
    [Prismic.Predicates.at("document.type", "cards")],
    { orderings: "[my.cards.first_publication_date]" }
  );

  const routine = await client().query([
    Prismic.Predicates.at("document.type", "routine"),
  ]);

  const morning = await client().query(
    [Prismic.Predicates.at("document.type", "path")],
    { orderings: "[document.first_publication_date]" }
  );

  const afternoon = await client().query(
    [Prismic.Predicates.at("document.type", "path_vespertino")],
    { orderings: "[document.first_publication_date]" }
  );

  const about = await client().query(
    [Prismic.Predicates.at("document.type", "about")]
  );

  const classes = await client().query(
    [Prismic.Predicates.at("document.type", "extra_classes")],
    { orderings: "[document.first_publication_date]" }
  );

  return {
    props: {
      cards: cards.results,
      routine: routine.results,
      morning: morning.results,
      afternoon: afternoon.results,
      about: about.results,
      classes: classes.results,
    },
  };
};
