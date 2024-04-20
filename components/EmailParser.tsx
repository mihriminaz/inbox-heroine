
import Anthropic from '@anthropic-ai/sdk';
import emailData from '../models/data/emails.json';
import { UserProfile } from '../models/userProfile';
import { useEffect, useState } from 'react';
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
        let ai_response = `Based on the emails provided, here are the ones that require a response, with suggested replies:

        - From: chiaram@uchicago.edu
        - Subject: RE: UChicago | Applications for Beams' Summer Internships 
        - Suggested reply: Hi Chiara, thanks for the update. Please proceed with the offer to Mia. If she does not accept, we can consider Cedric for the EiR position and have Avery take the Data Science role. Let me know if you need any other information from my end. Best regards, Mihri
        
        - From: tobi@spaceredi.com
        - Subject: Re: Space Redi Mentor Magic Request for Follow Up Meeting
        - Suggested reply: Hi Tobi, I'm glad we could find a time that works. Looking forward to our meeting next week. Please let me know if there's anything specific you'd like me to prepare or if you have any questions in advance. Best, Mihri
        
        - From: max@nozomihealth.co
        - Subject: Digital health product dev help for Beams
        - Suggested reply: Hi Max, thanks for reaching out and for your interest in Beams. We are always open to exploring potential partnerships that align with our mission. I'd be happy to set up a call to discuss how Nozomi Health might be able to support our product development efforts. Please let me know your availability for a brief introductory call. Best regards, Mihri`;//await generate_ai_response(anthropic, PMUser, userInput, emailData);
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