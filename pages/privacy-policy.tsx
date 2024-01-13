import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Event Privacy Policy">
      <PrivacyPolicyContainer>
        <RichText>
          <strong>
          1. Collection of Information:
          </strong>
          <ul>
            <li>
            We may collect personal information, including but not limited to names, contact details, and professional affiliations, during the registration process for event participation.
            </li>
            </ul>

            <strong>
            2. Purpose of Collection:
          </strong>
          <ul>
            <li>
            The collected information is used for event registration, communication, and to personalize the event experience.
            </li>
            <li>
            Information may also be used for statistical analysis and to improve future events.
            </li>
            </ul>


            <strong>
            3. Consent:
          </strong>
          <ul>
            <li>
            By registering for the event, participants provide consent for the collection and use of their personal information as outlined in this privacy policy.
            </li>

            <li>
            We may collect personal information, including but not limited to names, contact details, and professional affiliations, during the registration process for event participation.
            </li>
            </ul>


            <strong>
            4. Use of Information:
          </strong>
          <ul>
            <li>
            Personal information will be used solely for event-related purposes and will not be shared with third parties without explicit consent.
            </li>
            </ul>

            <strong>
            5. Data Security:
          </strong>
          <ul>
            <li>
            We employ industry-standard security measures to protect the confidentiality and integrity of participant information.
            </li>
            <li>
            Access to personal information is restricted to authorized personnel only.
            </li>
            </ul>

            <strong>
            6. Retention Period:
          </strong>
          <ul>
            <li>
            Personal information will be retained only for the duration necessary to fulfill the purposes outlined in this privacy policy.
            </li>
            </ul>

            <strong>
            7. Third-Party Services:
          </strong>
          <ul>
            <li>
            Some event-related services may be provided by third-party vendors. These vendors are required to adhere to privacy practices that align with this policy.
            </li>
            </ul>

            <strong>
            8. Communications:
          </strong>
          <ul>
            <li>
            Participants may receive event-related communications, including updates, announcements, and information about future events.
            </li>

            <li>
            Participants can opt out of non-essential communications at any time.
            </li>
            </ul>

            <strong>
            9. Participant Rights:
          </strong>
          <ul>
            <li>
            Participants have the right to access, correct, or request deletion of their personal information.
            </li>

            <li>
            Requests can be submitted to the event organizers using the contact information provided.
            </li>
            </ul>

            <strong>
            10. Cookies and Analytics:
          </strong>
          <ul>
            <li>
            The event website may use cookies and analytics tools to enhance user experience and gather information about website usage. Participants can adjust their browser settings to manage cookies.
            </li>
            </ul>

            <strong>
            11. Children’s Privacy:
          </strong>
          <ul>
            <li>
            The event is not directed towards individuals under the age of 13. We do not knowingly collect personal information from children.
            </li>
            </ul>

            <strong>
            12. Changes to Privacy Policy:
          </strong>
          <ul>
            <li>
            This privacy policy may be updated periodically. Participants will be notified of any significant changes, and the updated policy will be posted on the event website.
            </li>
            </ul>

            <strong>
            13. Contact Information:
          </strong>
          <ul>
            <li>
            For inquiries or concerns regarding this privacy policy, participants can contact the event organizers at the provided contact information.
            </li>
            </ul>

            <strong>
            14. Compliance with Laws:
          </strong>
          <ul>
            <li>
            The event organizers comply with applicable data protection laws and regulations.
            </li>
            </ul>

         
        </RichText>
      </PrivacyPolicyContainer>
    </Page>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
