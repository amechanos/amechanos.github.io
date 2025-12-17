import "../styles/social.css";
import YouTubeIcon from './assets/youtube.svg';
import SpotifyIcon from './assets/spotify.svg';
import LinkedInIcon from './assets/linkedin.svg';
import InstagramIcon from './assets/instagram.svg';
import DiscordIcon from './assets/discord.svg';

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={"social-links " + className}>
        <li>
            <a href="https://discord.gg/E46X78Wd8k" aria-label="Discord" title="Discord" target="_blank" rel="noopener noreferrer">
                <img src={DiscordIcon} alt="" />
            </a>
        </li>
        <li>
            <a href="https://instagram.com/jhxu_07" aria-label="Instagram" title="Instagram" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="" />
            </a>
        </li>
        <li>
            <a href="https://linkedin.com/in/jhxu07" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInIcon} alt="" />
            </a>
        </li>
        <li>
            <a href="https://open.spotify.com/artist/69YiNb7bGO98SmJ7qL0Jh2?" aria-label="Spotify" title="Spotify" target="_blank" rel="noopener noreferrer">
                <img src={SpotifyIcon} alt="" />
            </a>
        </li>
        <li>
            <a href="https://youtube.com/@jhxu" aria-label="YouTube" title="YouTube" target="_blank" rel="noopener noreferrer">
                <img src={YouTubeIcon} alt="" />
            </a>
        </li>
    </ul>
  )
}
