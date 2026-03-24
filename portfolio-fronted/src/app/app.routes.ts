import { Routes } from '@angular/router';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HeroComponent,
    title: 'Home | Dhruv Bansal'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About | Dhruv Bansal'
  },
  {
    path: 'skills',
    component: SkillsComponent,
    title: 'Skills | Dhruv Bansal'
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    title: 'Experience | Dhruv Bansal'
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Projects | Dhruv Bansal'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact | Dhruv Bansal'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];