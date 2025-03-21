import { Button } from '@/components/ui/Button/Button';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  image,
}: HeroProps) {
  return (
    <section className="relative py-20">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">{subtitle}</p>
            <p className="mt-6 text-lg text-muted-foreground">{description}</p>
            <div className="mt-8 flex gap-4">
              <Button asChild>
                <a href={ctaLink}>{ctaText}</a>
              </Button>
            </div>
          </div>
          {image && (
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src={image}
                alt={title}
                className="object-cover"
                width={600}
                height={600}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 