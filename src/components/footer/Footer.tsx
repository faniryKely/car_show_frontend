import React from 'react';
import './footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const socialLinks = [
  { platform: 'Instagram', url: '#' },
  { platform: 'LinkedIn', url: '#' },
  { platform: 'Twitter', url: '#' },
  { platform: 'Facebook', url: '#' },
];

const footerContent = [
  { label: 'Home', url: '/' },
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
            <a key={platform} href={url} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%' }}>
              {platform === 'Facebook' ? <FacebookIcon style={{ color: 'white', fontSize: '48px' }} /> : 
                    platform === 'Instagram' ? <InstagramIcon style={{ color: 'white', fontSize: '48px' }} /> : 
                    platform === 'Twitter' ? <XIcon style={{ color: 'white', fontSize: '48px' }} /> :
                    platform === 'LinkedIn' ? <LinkedInIcon style={{ color: 'white', fontSize: '48px'}} /> :
                    <i className={`icon ion-social-${platform.toLowerCase().replace(' ', '-')}`}></i>
                }
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
