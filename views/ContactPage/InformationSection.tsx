import styled from 'styled-components';

export default function InformationSection() {
  return (
    <Wrapper>
      <h3>Contact Us via email</h3>
      <p>
        <span>Email :</span> growincomm@gmail.com
      </p>
      <p>
      <span>Email2 :</span> cloudopscomm@gmail.com
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-weight: normal;
    font-size: 1.6rem;
    color: rgba(var(--text), 0.7);
  }

  span {
    opacity: 1.4;
    color: rgba(var(--text), 1);
  }
`;
