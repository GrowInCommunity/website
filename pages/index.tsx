import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/fun.png" title="Fun & Engaging Activities." overTitle="Have Some Fun">
            <p>
              We have some Exciting Games, Engaging Activities and Good Vibes 🫶{' '}
              <strong>Try to remove your Stage fear and Engage with others</strong> Join us for an unforgettable experience! Dive into a world of excitement with thrilling games, interactive activities, and an ambiance brimming with positivity and good vibes.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.jpg" title="Back to Back Speaker Sessions" overTitle="Endless Learnings" reversed>
            <p>
              We have a lot of Speakers best of the best that will teach you amazing stuff. We Selected only best speakers that are working in top tech companies{' '}
              <strong>Industry Goats are Coming in this Meet-up</strong>. This meetup focus on networking, learning and spreading awareness of tech.
            </p>
            <ul>
              <li>Workshops 💻</li>
              <li>Technology History 🚀</li>
              <li>Upcoming Techs 🤖</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
