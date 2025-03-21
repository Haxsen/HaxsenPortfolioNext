import { z } from 'zod';

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  githubUrl: z.string().url().optional(),
  liveUrl: z.string().url().optional(),
  featured: z.boolean().default(false),
  date: z.string(),
  content: z.string(),
  image: z.string().optional(),
});

export const blogPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  date: z.string(),
  author: z.string(),
  tags: z.array(z.string()),
  content: z.string(),
  image: z.string().optional(),
});

export const aboutSchema = z.object({
  name: z.string(),
  title: z.string(),
  bio: z.string(),
  skills: z.array(z.string()),
  experience: z.array(
    z.object({
      title: z.string(),
      company: z.string(),
      period: z.string(),
      description: z.string(),
    })
  ),
  education: z.array(
    z.object({
      degree: z.string(),
      institution: z.string(),
      period: z.string(),
      description: z.string(),
    })
  ),
  contact: z.object({
    email: z.string().email(),
    location: z.string(),
    social: z.array(
      z.object({
        name: z.string(),
        url: z.string().url(),
        icon: z.string(),
      })
    ),
  }),
});

export type Project = z.infer<typeof projectSchema>;
export type BlogPost = z.infer<typeof blogPostSchema>;
export type About = z.infer<typeof aboutSchema>; 