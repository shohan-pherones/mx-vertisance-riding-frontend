import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-secondary text-base-content rounded p-10">
      <nav className="flex flex-wrap justify-center gap-4">
        <Link href="/" className="link link-hover">
          Home
        </Link>
        <Link href="/training-programs" className="link link-hover">
          Training Programs
        </Link>
        <Link href="/about" className="link link-hover">
          About
        </Link>
        <Link href="/contact" className="link link-hover">
          Contact
        </Link>
      </nav>
      <nav>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" target="_blank" className="link link-hover">
            <Facebook />
          </Link>
          <Link href="/" target="_blank" className="link link-hover">
            <Instagram />
          </Link>
          <Link href="/" target="_blank" className="link link-hover">
            <Twitter />
          </Link>
          <Link href="/" target="_blank" className="link link-hover">
            <Youtube />
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <Link href="/" className="link link-hover">
            MX Vertisance Riding Academy
          </Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
