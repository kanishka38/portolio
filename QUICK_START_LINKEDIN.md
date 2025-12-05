# Quick Start: Adding LinkedIn Data to Your Portfolio

Since LinkedIn doesn't allow automated data fetching (due to their terms of service), here's the **easiest way** to add your projects and internships:

## Option 1: Direct Edit (Fastest) ⚡

### For Projects:
1. Open `components/Projects.tsx`
2. Find the `projects` array (around line 24)
3. Add your projects directly:

```typescript
const projects: Project[] = [
  {
    title: "Your Project Name",
    description: "What it does",
    features: [
      "Feature 1",
      "Feature 2"
    ],
    technologies: ["React", "Node.js"],
    icon: "FaServer", // or FaCode, FaDatabase, FaMobile, FaGlobe
    link: "https://your-project.com", // optional
    github: "https://github.com/your-repo" // optional
  },
  // Add more projects here...
];
```

### For Internships:
1. Open `components/Internships.tsx`
2. Find the `internships` array (around line 16)
3. Add your internships:

```typescript
const internships: Internship[] = [
  {
    title: "Intern Position",
    company: "Company Name",
    location: "City, State",
    period: "Month Year - Month Year",
    description: "Brief description",
    achievements: [
      "Achievement 1",
      "Achievement 2"
    ],
    techStack: ["Tech1", "Tech2"]
  },
  // Add more internships here...
];
```

## Option 2: Use Template File (Organized) 📝

1. Open `LINKEDIN_DATA_TEMPLATE.md`
2. Fill in your projects and internships using the simple format
3. Run: `node scripts/parse-linkedin-template.js`
4. Copy the generated code to your components

## Option 3: Copy from LinkedIn (Manual) 📋

1. Go to your LinkedIn profile
2. Open each project/internship
3. Copy the information
4. Paste into the component files using Option 1 format

## Need Help?

If you provide me with your LinkedIn projects/internships data, I can:
- Format it for you
- Add it directly to your components
- Help you structure it properly

Just share the information and I'll take care of the formatting!

## What Information Do I Need?

### For Each Project:
- Title
- Description
- Key features/achievements
- Technologies used
- Links (if available)

### For Each Internship:
- Position/title
- Company name
- Location
- Duration
- Description
- Achievements/responsibilities
- Technologies used

---

**Tip:** Start with 1-2 projects/internships to test the format, then add the rest!
