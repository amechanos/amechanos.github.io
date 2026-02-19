import "../styles/social.css";
import youtube from '../assets/youtube.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import discord from '../assets/discord.svg';

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={"social-links " + className}>
        <li>
            <a href="https://discord.gg/E46X78Wd8k" aria-label="Discord" title="Discord" target="_blank" rel="noopener noreferrer">
                <img src={discord} alt="" />
            </a>
        </li>
        <li>
            <a href="https://instagram.com/jhxu_07" aria-label="Instagram" title="Instagram" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="" />
            </a>
        </li>
        <li>
            <a href="https://linkedin.com/in/jhxu07" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="" />
            </a>
        </li>
        <li>
            <a href="https://youtube.com/@jhxu" aria-label="YouTube" title="YouTube" target="_blank" rel="noopener noreferrer">
                <img src={youtube} alt="" />
            </a>
        </li>
    </ul>
  )
}
