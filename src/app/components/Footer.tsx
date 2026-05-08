import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

const socials = [
  { href: "https://www.linkedin.com/in/kennethwan18/", label: "LinkedIn", Icon: BsLinkedin },
  { href: "https://github.com/wanke20", label: "GitHub", Icon: BsGithub },
  { href: "https://www.instagram.com/_kwan18_/", label: "Instagram", Icon: BsInstagram },
  { href: "https://twitter.com/kwan132382", label: "Twitter", Icon: BsTwitter },
  { href: "https://www.facebook.com/kenneth.wan.984/", label: "Facebook", Icon: BsFacebook },
];

export function FooterComponent() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <hr className="footer-divider" aria-hidden="true" />
      <div className="footer-row">
        <p className="footer-copyright">
          © {year} <span className="footer-brand">Kenneth's Portfolio</span>
        </p>
        <ul className="footer-icons">
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
