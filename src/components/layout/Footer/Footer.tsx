import Link from 'next/link';

interface FooterProps {
  socialLinks: {
    name: string;
    url: string;
    icon: string;
  }[];
}

export default function Footer({ socialLinks }: FooterProps) {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{' '}
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Your Name
            </Link>
            . The source code is available on{' '}
            <Link
              href="https://github.com/yourusername/portfolio"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
          <div className="flex items-center space-x-1">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">{link.name}</span>
                <span className="text-xl">{link.icon}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 