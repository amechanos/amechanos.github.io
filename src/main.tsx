import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const bg = document.querySelector('.bg') as HTMLElement;

if (bg) {
  window.addEventListener('scroll', () => {
    bg.style.transform = `translateY(${window.scrollY * -1.055}px)`;
  });
}