import { Link } from "react-router-dom";
export const Mailto = ({ email, subject = '', body = '',Class, children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`} className={Class}>{children}</a>;
  };
export default function SocialMediaNav() {
    return (
        <div className="SocialMediaLinks">
            <span className="linkedin"><a target="_blank" rel='noopener noreferrer' href="https://linkedin.com/in/hossamahmedem" className="linkedin-link"></a></span>
            <span className="github"><a target="_blank" href="https://github.com/HossamAh" rel='noopener noreferrer' className="github-link"></a></span>
            <span className="email"><Mailto email="hossam.ibrahem.998@gmail.com" Class="email-link" subject="contact from portofoli"></Mailto></span>
        </div>
    );
}