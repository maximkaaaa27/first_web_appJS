import { AboutView } from './view/about.js';
import { ProjectsView } from './view/projects.js';
import { SkillsView } from './view/skills.js';
import { Router } from './router.js'

const router = new Router();




router.register('about', new AboutView(
  document.querySelector('.js-about-view')
), true);
router.register('projects', new ProjectsView(
  document.querySelector('.js-projects-view')
));
router.register('skills', new SkillsView(
  document.querySelector('.js-skills-view')
));

router.start();