import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary bg-opacity-30 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-2xl font-light text-primary mb-2">Munique</h3>
          <p className="text-muted">Simply Munique: Elevate your beauty.</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold text-text mb-2">Quick Links</h4>
          <ul className="space-y-2">
            {["Services", "Gallery", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`} className="text-muted hover:text-primary transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-semibold text-text mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            {[
              { icon: Instagram, href: "#" },
              { icon: Facebook, href: "#" },
              { icon: Twitter, href: "#" },
            ].map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="text-muted hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-muted">
        <p>&copy; {new Date().getFullYear()} Munique. All rights reserved.</p>
      </div>
    </footer>
  )
}

