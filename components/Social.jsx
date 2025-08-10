import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const social = [
  { icon: <FaGithub />, path: 'https://github.com/KatoGraphix' },
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/kurt-von-schaeffer-aa962180' },
  
];

const Social = ({ containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
