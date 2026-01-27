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
    <footer className="border-t border-neutral/50">
      <div className="container-wide py-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {footerLinks.map((link, index) => (
            <li key={link.name} className="flex items-center gap-6">
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
