import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socials = [
  {
    name: 'GitHub',
    icon: <FaGithub />,
    path: '',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    path: '',
  },
  {
    name: 'Twitter',
    icon: <FaTwitter />,
    path: '',
  },
  {
    name: 'Facebook',
    icon: <FaFacebook />,
    path: '',
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            aria-label={item.name}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};
export default Social;
