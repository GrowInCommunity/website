import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="Where and when is the meetup happening?">
        20-jan-2024 at 415/2, 7th Floor, Motorola Excellence Centre, Mehrauli-Gurgaon Rd, DLF Colony, Sector 14, Gurugram, Haryana 122001
      </Accordion>

      <Accordion title="Who can attend the meetup?">
        Anyone Can Attend this Meetup, It's Free for all Student and Working Professionals.
      </Accordion>

      <Accordion title="What's the agenda or schedule for the meetup?">
        It's a Community Collabration Meetup GrowIn x CloudOps, the main Agenda is Learning, networking, Learn from Speakers.
      </Accordion>

      <Accordion title="Will there be any costs associated with attending?">
        It's totally free; you don't need to pay a single rupee.
      </Accordion>

      <Accordion title="Can I network or connect with others at the meetup?">
        This meetup is specially focus on networking and mentorships, Yes you can connect with peoples as much as you can.
      </Accordion>

      <Accordion title="Are any travel facilities provided for this meetup?">
        We will not provide any travel expenses or facilities.
      </Accordion>

    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
