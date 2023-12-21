import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="Where and when is the meetup happening?">
        The GrowIn x CloudOps Community Meetup will happend on 20-jan-2024 at Tata 1mg Office, Gurugram
        
      </Accordion>
      <Accordion title="Who can attend the meetup?">
        Anyone Can Attend this Meetup, It's Free for all Student and Working Professionals.
      </Accordion>
      <Accordion title="What's the agenda or schedule for the meetup?">
        It's a Community Collabration Meetup GrowIn x CloudOps, the main Agenda is Learning, networking, Learn from Speakers.
      </Accordion>
      <Accordion title="Will there be any costs associated with attending?">
        It's totally Free you don't need to pay a single Rupees.
      </Accordion>
      <Accordion title="Can I network or connect with others at the meetup?">
        This meetup is specially focus on networking and mentorships, Yes you can connect with peoples as much as you can.
      </Accordion>

      <Accordion title="Can I network or connect with others at the meetup?">
        This meetup is specially focus on networking and mentorships, Yes you can connect with peoples as much as you can.
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
