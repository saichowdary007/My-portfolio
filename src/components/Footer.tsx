"use client";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const footerLinks: Array<{
  title: string;
  links: FooterLink[];
}> = [];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden pb-32 md:pb-64">

      <section className="py-16 sm:py-32">
        <div className="mx-auto w-full px-6 xl:max-w-7xl space-y-16 sm:space-y-32">
          <div className="relative grid gap-16 md:grid-cols-4">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <div className="space-y-5">
                  <div>
                    <span className="mono-tag text-sm">{section.title}</span>
                  </div>

                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : "_self"}
                        rel={link.external ? "noopener noreferrer" : ""}
                        className="hover:underline"
                      >
                        {link.label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}
