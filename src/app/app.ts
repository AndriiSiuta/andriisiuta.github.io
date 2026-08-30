import { Component } from '@angular/core';
import { Reveal } from './reveal.directive';
import {
  ACHIEVEMENTS,
  AI_CAPSTONE,
  AI_PRACTICES,
  CERTIFICATIONS,
  CONTACT,
  DOMAINS,
  EDUCATION,
  JOBS,
  METRICS,
  SKILL_GROUPS,
} from './data';

@Component({
  imports: [Reveal],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly metrics = METRICS;
  protected readonly jobs = JOBS;
  protected readonly skillGroups = SKILL_GROUPS;
  protected readonly domains = DOMAINS;
  protected readonly achievements = ACHIEVEMENTS;
  protected readonly aiPractices = AI_PRACTICES;
  protected readonly aiCapstone = AI_CAPSTONE;
  protected readonly certifications = CERTIFICATIONS;
  protected readonly education = EDUCATION;
  protected readonly contact = CONTACT;
  protected readonly roles = [
    'Principal Front-End Engineer',
    'Angular & Web Platform Architect',
    'Nx Monorepo Architect',
    'Tech Lead · AI Agentic Engineer',
  ];
  protected readonly year = new Date().getFullYear();
}
