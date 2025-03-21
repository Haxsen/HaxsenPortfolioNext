import Hero from '@/components/sections/Hero/Hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card/Card';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Hero
        title="Welcome to My Portfolio"
        subtitle="Full Stack Developer"
        description="I create beautiful and functional web applications using modern technologies. Passionate about building user-friendly experiences and solving complex problems."
        ctaText="View My Work"
        ctaLink="/projects"
        image="/images/hero.jpg"
      />
      <section className="container py-8 md:py-12 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Featured Project 1 */}
          <Link href="/projects/project-1">
            <Card className="h-full transition-colors hover:bg-muted/50">
              <CardHeader>
                <CardTitle>Project One</CardTitle>
                <CardDescription>A brief description of the project and its key features.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Built with Next.js, React, and Tailwind CSS.
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Featured Project 2 */}
          <Link href="/projects/project-2">
            <Card className="h-full transition-colors hover:bg-muted/50">
              <CardHeader>
                <CardTitle>Project Two</CardTitle>
                <CardDescription>Another amazing project showcasing different technologies.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Using TypeScript, Node.js, and modern web technologies.
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Featured Project 3 */}
          <Link href="/projects/project-3">
            <Card className="h-full transition-colors hover:bg-muted/50">
              <CardHeader>
                <CardTitle>Project Three</CardTitle>
                <CardDescription>An innovative solution to a real-world problem.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Leveraging cloud services and modern architecture patterns.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
}
