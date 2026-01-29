import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms of Use", path: "/terms" },
  { name: "License Information", path: "/license" },
  { name: "Maryland", path: "#" },
  { name: "Contact", path: "/contact" },
];

export function Footer() {
  return (
    <footer>
      {/* Top divider */}
      <div className="container-editorial">
        <div className="divider-editorial"></div>
      </div>
      
      <div className="container-editorial py-16 md:py-20">
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {footerLinks.map((link, index) => (
            <li key={link.name} className="flex items-center gap-8">
              <Link
                to={link.path}
                className="hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
              {index < footerLinks.length - 1 && (
                <span className="hidden sm:inline text-neutral">·</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
