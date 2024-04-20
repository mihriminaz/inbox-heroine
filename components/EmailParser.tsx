
import Anthropic from '@anthropic-ai/sdk';
import emailData from '../models/data/emails.json';
import { UserProfile } from '../models/userProfile';
import { useEffect, useState } from 'react';
import styles from '../styles/EmailItem.module.css';
import Parser from 'html-react-parser';

export function generate_system_prompt_with_profile(userProfile) {
    const profile_details = `The user is a ${userProfile.age} year old ${userProfile.gender}, 
    working as a ${userProfile.org_role} in ${userProfile.relative_business}. Their email address is ${userProfile.email}
    Their priority for emails includes ${userProfile.priority_for_emails.join(', ')}`;
    return baseSystemPrompt + " " + profile_details;
  }

  export function prepare_email_summary(emailData) {
    const summaries: string[] = [];
    for (const email_dict of emailData.emails) {
      const summary = `Email from ${email_dict.from}, subject: ${email_dict.subject}, received at ${email_dict.deliveredAt} with snippet ${email_dict.snippet}.`;
      summaries.push(summary);
    }
    return summaries.join(" ");
  }

  export async function generate_ai_response(anthropic, userProfile, user_input, emailData) {
    const system_prompt = generate_system_prompt_with_profile(userProfile) + " " + prepare_email_summary(emailData);
    const response = await anthropic.messages.create({
        max_tokens: 2500,
        messages: [{ role: 'user', content: user_input}],
        model: 'claude-3-opus-20240229',
        system: system_prompt,
      });

      return response.content[0].text;
  };

// Example Usage:
const baseSystemPrompt = `
You are a friendly and motivational email management assistant,
and responder for corporate professionals working in tech like product managers, developers and designers. 
You help identify unresponded emails coming to the user's email address, based on urgency, deadlines, open questions, task and predefined preferences and curated. You are capable of suggesting 
responses to key emails and providing summaries of emails when requested.
`;

const PMUser: UserProfile = {
  age: 35,
  gender: "Non-binary",
  email: "jana@usebeams.com",
  org_role: "Product Manager",
  relative_business: "Tech Startups",
  priority_for_emails: ["urgent", "deadline", "send", "please", "question"],
};

const EmailParser = () => {

    console.log('EmailParserEmailParserEmailParser');
    const [emailsSorted, setEmailsSorted] = useState('');
    const [fetching, setFetching] = useState(true);

    const userInput = "Could you identify all emails that require a response, ensuring that they are flagged or categorized for follow-up? Please list details in bullet points as separate paragraphs, such as the sender, subject and suggest a text to reply to the email.";
 
    useEffect( () => { 
        const domain = window?.location?.origin || '';
        const anthropic = new Anthropic({
        apiKey: `${process.env.ANTHROPIC_KEY}`,
        baseURL: domain + '/anthropic/',
        });
       setFetching(true);
        async function fetchData() {
        try {
        let ai_response = await generate_ai_response(anthropic, PMUser, userInput, emailData);
        console.log('ai_response', ai_response);
        let some = ai_response.replace(/-/g, '<br/>');
        console.log('some', some);
        setEmailsSorted(some);
        setFetching(false);
        } catch (err) {
        console.log('err', err);
        setFetching(false);
        console.log(err);
        }
        }
        console.log('fetchData');
        fetchData();
    }, []);
    
    return <div><div className="content">{Parser(emailsSorted ?? '')}</div>
    <p>{fetching ? 'Fetching...' : 'Done.'}</p></div>;

}
export default EmailParser;