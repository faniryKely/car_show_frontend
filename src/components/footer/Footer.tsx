import React from 'react';
import './footer.css';

const socialLinks = [
  { platform: 'Instagram', url: '#' },
  { platform: 'Snapchat', url: '#' },
  { platform: 'Twitter', url: '#' },
  { platform: 'Facebook', url: '#' },
];

const footerContent = [
  { label: 'Home', url: '#' },
  { label: 'Services', url: '#' },
  { label: 'About', url: '#' },
  { label: 'Terms', url: '#' },
  { label: 'Privacy Policy', url: '#' },
];

const Footer: React.FC = () => {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          {socialLinks.map(({ platform, url }) => (
            <a key={platform} href={url}>
              <i className={`icon ion-social-${platform.toLowerCase().replace(' ', '-')}`}></i>
            </a>
          ))}
        </div>
        <ul className="list-inline">
          {footerContent.map(({ label, url }) => (
            <li key={label} className="list-inline-item">
              <a href={url}>{label}</a>
            </li>
          ))}
        </ul>
        <p className="copyright">Company Name © 2024</p>
      </footer>
    </div>
  );
};

export default Footer;
