import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Cookies policy">
      <CookiesPolicyContainer>
        <RichText>
          <p>
           
Our Cookie Policy provides insight into how we utilize cookies on our event website to enhance user experiences. Cookies are small text files that aid in functionality, categorized into essential, functional, analytical, and marketing types. These cookies improve website performance, tailor content, and analyze user interactions. By using our website, you automatically consent to the use of cookies, and you can manage preferences through your browser settings. Third-party services may also employ cookies, and we recommend reviewing their policies. Our use of Google Analytics is for traffic analysis, with an opt-out option for users. Any significant changes to this policy will be communicated, and users are encouraged to check for updates regularly. For inquiries, contact us at the provided information, and rest assured, our cookie usage aligns with data protection laws.
          </p>
          <br />

        </RichText>
      </CookiesPolicyContainer>
    </Page>
  );
}

const CookiesPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
