#!/usr/bin/env node
/**
 * LinkedIn Template Parser
 * 
 * This script parses the LINKEDIN_DATA_TEMPLATE.md file and converts it
 * to the portfolio component format.
 * 
 * Usage: node scripts/parse-linkedin-template.js
 */

const fs = require('fs');
const path = require('path');

function parseTemplateFile(templatePath) {
  const content = fs.readFileSync(templatePath, 'utf8');
  const projects = [];
  const internships = [];

  // Split by project/internship separators
  const sections = content.split(/^---$/m).filter(s => s.trim());

  for (const section of sections) {
    if (section.includes('PROJECT:')) {
      const project = parseProject(section);
      if (project) projects.push(project);
    } else if (section.includes('INTERNSHIP:')) {
      const internship = parseInternship(section);
      if (internship) internships.push(internship);
    }
  }

  return { projects, internships };
}

function parseProject(section) {
  const lines = section.split('\n').map(l => l.trim()).filter(l => l);
  
  const project = {
    title: '',
    description: '',
    features: [],
    technologies: [],
    icon: 'FaCode',
    link: '',
    github: ''
  };

  let currentField = null;
  let collectingFeatures = false;

  for (const line of lines) {
    if (line.startsWith('PROJECT:')) {
      project.title = line.replace('PROJECT:', '').trim();
    } else if (line.startsWith('DESCRIPTION:')) {
      project.description = line.replace('DESCRIPTION:', '').trim();
    } else if (line.startsWith('FEATURES:')) {
      collectingFeatures = true;
    } else if (line.startsWith('TECHNOLOGIES:')) {
      collectingFeatures = false;
      const techs = line.replace('TECHNOLOGIES:', '').trim();
      project.technologies = techs.split(',').map(t => t.trim()).filter(t => t);
    } else if (line.startsWith('ICON:')) {
      project.icon = line.replace('ICON:', '').trim() || 'FaCode';
    } else if (line.startsWith('LINK:')) {
      project.link = line.replace('LINK:', '').trim();
    } else if (line.startsWith('GITHUB:')) {
      project.github = line.replace('GITHUB:', '').trim();
    } else if (collectingFeatures && line.startsWith('-')) {
      project.features.push(line.replace(/^-/, '').trim());
    }
  }

  // Clean up empty fields
  if (!project.link) delete project.link;
  if (!project.github) delete project.github;

  return project.title ? project : null;
}

function parseInternship(section) {
  const lines = section.split('\n').map(l => l.trim()).filter(l => l);
  
  const internship = {
    title: '',
    company: '',
    location: '',
    period: '',
    description: '',
    achievements: [],
    techStack: []
  };

  let collectingAchievements = false;

  for (const line of lines) {
    if (line.startsWith('INTERNSHIP:')) {
      internship.title = line.replace('INTERNSHIP:', '').trim();
    } else if (line.startsWith('COMPANY:')) {
      internship.company = line.replace('COMPANY:', '').trim();
    } else if (line.startsWith('LOCATION:')) {
      internship.location = line.replace('LOCATION:', '').trim();
    } else if (line.startsWith('PERIOD:')) {
      internship.period = line.replace('PERIOD:', '').trim();
    } else if (line.startsWith('DESCRIPTION:')) {
      internship.description = line.replace('DESCRIPTION:', '').trim();
    } else if (line.startsWith('ACHIEVEMENTS:')) {
      collectingAchievements = true;
    } else if (line.startsWith('TECHSTACK:')) {
      collectingAchievements = false;
      const techs = line.replace('TECHSTACK:', '').trim();
      internship.techStack = techs.split(',').map(t => t.trim()).filter(t => t);
    } else if (collectingAchievements && line.startsWith('-')) {
      internship.achievements.push(line.replace(/^-/, '').trim());
    }
  }

  return internship.title ? internship : null;
}

function generateComponentCode(projects, internships) {
  const projectCode = `const projects: Project[] = ${JSON.stringify(projects, null, 2)};`;
  const internshipCode = `const internships: Internship[] = ${JSON.stringify(internships, null, 2)};`;
  
  return {
    projects: projectCode,
    internships: internshipCode
  };
}

// Main execution
const templatePath = path.join(__dirname, '../LINKEDIN_DATA_TEMPLATE.md');

if (!fs.existsSync(templatePath)) {
  console.log('❌ Template file not found at:', templatePath);
  console.log('💡 Please create LINKEDIN_DATA_TEMPLATE.md first and fill in your data.');
  process.exit(1);
}

try {
  const { projects, internships } = parseTemplateFile(templatePath);
  
  if (projects.length === 0 && internships.length === 0) {
    console.log('⚠️  No projects or internships found in the template.');
    console.log('💡 Please fill in LINKEDIN_DATA_TEMPLATE.md with your data.');
    process.exit(0);
  }

  console.log(`\n✅ Found ${projects.length} project(s) and ${internships.length} internship(s)\n`);

  // Generate TypeScript code
  const code = generateComponentCode(projects, internships);

  // Save to files
  if (projects.length > 0) {
    const projectsFile = path.join(__dirname, '../data/projects-generated.ts');
    fs.writeFileSync(projectsFile, code.projects, 'utf8');
    console.log('📄 Generated projects code:', projectsFile);
  }

  if (internships.length > 0) {
    const internshipsFile = path.join(__dirname, '../data/internships-generated.ts');
    fs.writeFileSync(internshipsFile, code.internships, 'utf8');
    console.log('📄 Generated internships code:', internshipsFile);
  }

  console.log('\n✨ Next steps:');
  console.log('1. Copy the generated code from data/projects-generated.ts to components/Projects.tsx');
  console.log('2. Copy the generated code from data/internships-generated.ts to components/Internships.tsx');
  console.log('3. Or review the JSON format and manually update the components\n');

} catch (error) {
  console.error('❌ Error parsing template:', error.message);
  process.exit(1);
}
