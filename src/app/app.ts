import { Component } from '@angular/core';
import { Reveal } from './reveal.directive';
import {
  ACHIEVEMENTS,
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
  protected readonly education = EDUCATION;
  protected readonly contact = CONTACT;
  protected readonly roles = [
    'Principal Front-End Engineer',
    'Angular & Web Platform Architect',
    'Nx Monorepo Architect',
    'Tech Lead',
  ];
  protected readonly year = new Date().getFullYear();
}
