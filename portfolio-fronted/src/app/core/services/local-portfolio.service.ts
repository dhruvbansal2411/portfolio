import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import {
  Project,
  Experience,
  SkillCategory,
  Skill,
  ContactFormData,
  ContactResponse,
  PaginatedResponse
} from '../models';
import {
  PERSONAL_INFO,
  EDUCATION,
  EXPERIENCES,
  PROJECTS,
  SKILLS_DATA,
  CERTIFICATIONS,
  PUBLICATIONS,
  ACHIEVEMENTS
} from '../data/portfolio-data';

@Injectable({
  providedIn: 'root'
})
export class LocalPortfolioService {
  // Projects
  getProjects(): Observable<Project[]> {
    return of(PROJECTS).pipe(delay(300));
  }

  getProjectById(id: number): Observable<Project> {
    const project = PROJECTS.find(p => p.id === id);
    return of(project!).pipe(delay(300));
  }

  getProjectsByCategory(category: string): Observable<Project[]> {
    const filtered = PROJECTS.filter(p => p.category === category);
    return of(filtered).pipe(delay(300));
  }

  getPaginatedProjects(page: number = 1, pageSize: number = 6): Observable<PaginatedResponse<Project>> {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = PROJECTS.slice(startIndex, endIndex);
    
    const response: PaginatedResponse<Project> = {
      data: paginatedData,
      page,
      pageSize,
      totalCount: PROJECTS.length,
      totalPages: Math.ceil(PROJECTS.length / pageSize),
      hasNextPage: endIndex < PROJECTS.length,
      hasPreviousPage: page > 1
    };
    
    return of(response).pipe(delay(300));
  }

  // Experience
  getExperience(): Observable<Experience[]> {
    return of(EXPERIENCES).pipe(delay(300));
  }

  getExperienceById(id: number): Observable<Experience> {
    const experience = EXPERIENCES.find(e => e.id === id);
    return of(experience!).pipe(delay(300));
  }

  // Skills
  getSkillCategories(): Observable<SkillCategory[]> {
    return of(SKILLS_DATA).pipe(delay(300));
  }

  getAllSkills(): Observable<Skill[]> {
    const allSkills = SKILLS_DATA.flatMap(category => category.skills);
    return of(allSkills).pipe(delay(300));
  }

  getSkillsByCategory(category: string): Observable<Skill[]> {
    const categoryData = SKILLS_DATA.find(c => c.name === category);
    return of(categoryData?.skills || []).pipe(delay(300));
  }

  // Achievements
  getAchievements(): Observable<any[]> {
    return of(ACHIEVEMENTS).pipe(delay(300));
  }

  getAchievementById(id: number): Observable<any> {
    const achievement = ACHIEVEMENTS.find(a => a.id === id);
    return of(achievement!).pipe(delay(300));
  }

  // Certifications
  getCertifications(): Observable<any[]> {
    return of(CERTIFICATIONS).pipe(delay(300));
  }

  // Publications
  getPublications(): Observable<any[]> {
    return of(PUBLICATIONS).pipe(delay(300));
  }

  // Personal Info
  getPersonalInfo(): Observable<typeof PERSONAL_INFO> {
    return of(PERSONAL_INFO).pipe(delay(300));
  }

  // Education
  getEducation(): Observable<typeof EDUCATION> {
    return of(EDUCATION).pipe(delay(300));
  }

  // Contact
  submitContact(form: ContactFormData): Observable<ContactResponse> {
    console.log('Contact form submitted:', form);
    const response: ContactResponse = {
      message: 'Thank you for your message! I will get back to you soon.',
      emailSent: true
    };
    return of(response).pipe(delay(1000));
  }
}
