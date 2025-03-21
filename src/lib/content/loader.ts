import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { projectSchema, blogPostSchema, aboutSchema, type Project, type BlogPost, type About } from './config';

const contentDir = path.join(process.cwd(), 'content');

export async function getProjects(): Promise<Project[]> {
  const projectsDir = path.join(contentDir, 'projects');
  const files = fs.readdirSync(projectsDir);

  const projects = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(projectsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);
      const id = file.replace(/\.md$/, '');

      return projectSchema.parse({
        id,
        content,
        ...data,
      });
    });

  return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getProject(id: string): Promise<Project | null> {
  try {
    const filePath = path.join(contentDir, 'projects', `${id}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    return projectSchema.parse({
      id,
      content,
      ...data,
    });
  } catch {
    return null;
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(contentDir, 'blog');
  const files = fs.readdirSync(blogDir);

  const posts = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);
      const id = file.replace(/\.md$/, '');

      return blogPostSchema.parse({
        id,
        content,
        ...data,
      });
    });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(contentDir, 'blog', `${id}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    return blogPostSchema.parse({
      id,
      content,
      ...data,
    });
  } catch {
    return null;
  }
}

export async function getAbout(): Promise<About> {
  const filePath = path.join(contentDir, 'about', 'index.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContent);

  return aboutSchema.parse(data);
} 