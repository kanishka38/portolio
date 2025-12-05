/**
 * LinkedIn Data Extraction Helper Script
 * 
 * This script helps you format data from your LinkedIn profile
 * Since LinkedIn doesn't allow direct scraping, you'll need to:
 * 1. Open your LinkedIn profile: https://www.linkedin.com/in/kanishka-sonkar-30520a243/
 * 2. Manually copy the projects and internships information
 * 3. Use this script to format it properly
 * 
 * Run: node scripts/extract-linkedin-data.js
 */

const fs = require('fs');
const path = require('path');

// Example projects data structure - replace with your actual projects
const exampleProjects = [
  {
    title: "Project Name",
    description: "Brief description of what the project does",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
    technologies: ["Tech1", "Tech2", "Tech3"],
    icon: "FaCode", // Choose from: FaCode, FaServer, FaDatabase, FaMobile, FaGlobe
    link: "https://project-link.com", // Optional
    github: "https://github.com/username/repo" // Optional
  }
];

// Example internships data structure - replace with your actual internships
const exampleInternships = [
  {
    title: "Intern Position Title",
    company: "Company Name",
    location: "City, State/Country",
    period: "Month Year - Month Year",
    description: "Brief description of the internship role",
    achievements: [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2",
      "Achievement or responsibility 3"
    ],
    techStack: ["Technology1", "Technology2", "Technology3"]
  }
];

function saveProjects(data) {
  const filePath = path.join(__dirname, '../data/projects.json');
  const jsonData = JSON.stringify({ projects: data }, null, 2);
  fs.writeFileSync(filePath, jsonData, 'utf8');
  console.log('✅ Projects data saved to data/projects.json');
}

function saveInternships(data) {
  const filePath = path.join(__dirname, '../data/internships.json');
  const jsonData = JSON.stringify({ internships: data }, null, 2);
  fs.writeFileSync(filePath, jsonData, 'utf8');
  console.log('✅ Internships data saved to data/internships.json');
}

// Instructions
console.log('\n📋 LinkedIn Data Extraction Helper\n');
console.log('Since LinkedIn doesn\'t allow automated scraping, please follow these steps:\n');
console.log('1. Visit your LinkedIn profile: https://www.linkedin.com/in/kanishka-sonkar-30520a243/');
console.log('2. Navigate to your Projects and Experience sections');
console.log('3. Copy the information manually');
console.log('4. Update the exampleProjects and exampleInternships arrays in this file');
console.log('5. Run this script again to save the formatted data\n');
console.log('Example formats are already in the script. Replace them with your actual data.\n');

// Uncomment the lines below after you've added your data:
// saveProjects(exampleProjects);
// saveInternships(exampleInternships);

console.log('💡 Tip: Edit this script, add your data, then uncomment the save functions at the bottom.\n');
