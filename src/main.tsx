
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Initialize animations
const initAnimations = () => {
  // Service cards animation
  const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.15 });
    
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
      observer.observe(card);
    });
  };
  
  // Run after initial render
  window.addEventListener('load', observeElements);
};

createRoot(document.getElementById("root")!).render(<App />);

// Initialize animations after app render
initAnimations();
