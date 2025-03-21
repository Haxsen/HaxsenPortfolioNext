import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card/Card';
import { getAbout } from '@/lib/content/loader';

export default async function About() {
  const about = await getAbout();

  return (
    <div className="container py-8 md:py-12 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
          <p className="mt-4 text-lg text-muted-foreground">{about.bio}</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {about.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {about.experience.map((exp) => (
                  <div key={exp.period}>
                    <h3 className="font-semibold">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.company} • {exp.period}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {about.education.map((edu) => (
                  <div key={edu.period}>
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution} • {edu.period}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{edu.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 