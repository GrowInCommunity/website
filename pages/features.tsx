import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Fun & Engaging Activities.',
    description:
      'We have some Amazing Fun and Engaging Activities in our Meet-up. In the form for game we will spread some actual knowledge which is really helpful for your career',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Networking Opporunity',
    description:
      'Connect, collaborate, and thrive among a network of like-minded individuals, where each interaction sparks inspiration and cultivates a supportive ecosystem for growth.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Career Guidance',
    description:
      "Our career guidance programs offer a roadmap to success, blending mentorship, skill assessment, and industry insights to steer you towards a rewarding and purposeful career",
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Help Others',
    description:
      'At our meetups, we believe in the power of collective growth. Together, we cultivate an atmosphere where supporting each others growth isnt just a goal—its a way of life',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Mentorships from Professionals',
    description:
      'Navigate your professional journey with expert mentorship sessions, tailored to fuel your ambitions and steer your career towards success',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Good Vibes & Energy',
    description:
      'Welcome to a space filled with nothing but good vibes—a place where positivity thrives, smiles are contagious, and inspiration is in the air.',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Pizza & Coldrinks',
    description:
      'Experience a flavor explosion! Our gourmet pizzas, paired with an assortment of cold, thirst-quenching drinks, are the recipe for a satisfying meal.',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Tech Support',
    description:
      'Our meetups prioritize your comfort. With on-site tech support available, you can focus on networking and learning while we take care of any tech-related concerns.',
  },
  
];

export default function FeaturesPage() {
  return (
    <Page title="Features" description="">
      <Wrapper>
        <SectionTitle>Check out this quick Features</SectionTitle>
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
