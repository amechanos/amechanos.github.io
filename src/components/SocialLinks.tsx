import React from 'react'
import "../styles/social.css";

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={"social-links " + className}>
        <li>
            <a href="https://discord.gg/E46X78Wd8k" aria-label="Discord" title="Discord" target="_blank" rel="noopener noreferrer">
                <img src="src\assets\discord.svg" alt="" />
            </a>
        </li>
        <li>
            <a href="https://instagram.com/jhxu_07" aria-label="Instagram" title="Instagram" target="_blank" rel="noopener noreferrer">
                <img src="src\assets\instagram.svg" alt="" />
            </a>
        </li>
        <li>
            <a href="https://linkedin.com/in/jhxu07" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <img src="src\assets\linkedin.svg" alt="" />
            </a>
        </li>
        <li>
            <a href="https://open.spotify.com/artist/69YiNb7bGO98SmJ7qL0Jh2?" aria-label="Spotify" title="Spotify" target="_blank" rel="noopener noreferrer">
                <img src="src\assets\spotify.svg" alt="" />
            </a>
        </li>
        <li>
            <a href="https://youtube.com/@jhxu" aria-label="YouTube" title="YouTube" target="_blank" rel="noopener noreferrer">
                <img src="src\assets\youtube.svg" alt="" />
            </a>
        </li>
    </ul>
  )
}
