# How to Extract Projects and Internships from LinkedIn

Since LinkedIn doesn't allow automated scraping due to their terms of service, you'll need to manually extract the data. Here's a step-by-step guide:

## Step 1: Access Your LinkedIn Profile

1. Go to your LinkedIn profile: https://www.linkedin.com/in/kanishka-sonkar-30520a243/
2. Make sure you're logged in
3. Scroll through your profile to find:
   - **Projects** section
   - **Experience** section (for internships)

## Step 2: Extract Projects Data

For each project, collect:
- Project title
- Description
- Key features/achievements
- Technologies used
- Project links (if any)
- GitHub links (if any)

## Step 3: Extract Internships Data

For each internship, collect:
- Position/title
- Company name
- Location
- Duration (start date - end date)
- Description
- Key achievements/responsibilities
- Technologies/tools used

## Step 4: Format the Data

### Option A: Use the Helper Script

1. Open `scripts/extract-linkedin-data.js`
2. Replace the example data with your actual projects and internships
3. Run: `node scripts/extract-linkedin-data.js`
4. The data will be saved to `data/projects.json` and `data/internships.json`

### Option B: Manually Edit the Component Files

1. Open `components/Projects.tsx`
2. Find the `projects` array (around line 6)
3. Add your projects following the existing format
4. Open `components/Internships.tsx`
5. Find the `internships` array
6. Add your internships following the existing format

## Example Format

### Project Format:
```javascript
{
  title: "Project Name",
  description: "Brief description of what the project does",
  features: [
    "Feature or achievement 1",
    "Feature or achievement 2",
    "Feature or achievement 3"
  ],
  technologies: ["Technology1", "Technology2", "Technology3"],
  icon: "FaCode", // Options: FaCode, FaServer, FaDatabase, FaMobile, FaGlobe
  link: "https://project-url.com", // Optional
  github: "https://github.com/username/repo" // Optional
}
```

### Internship Format:
```javascript
{
  title: "Intern Position Title",
  company: "Company Name",
  location: "City, State/Country",
  period: "Month Year - Month Year",
  description: "Brief description of the internship role",
  achievements: [
    "Achievement or responsibility 1",
    "Achievement or responsibility 2"
  ],
  techStack: ["Technology1", "Technology2"]
}
```

## Quick Steps:

1. **Open your LinkedIn profile** in a browser
2. **Copy the project/internship information** manually
3. **Edit the component files** directly in your code editor:
   - `components/Projects.tsx` for projects
   - `components/Internships.tsx` for internships
4. **Save and refresh** your portfolio to see the changes

## Tips:

- Keep descriptions concise but informative
- Highlight key technologies and achievements
- Include links when available (GitHub, live demos)
- Maintain consistent formatting across all entries

## Need Help?

If you have many projects/internships, you can:
1. Create a spreadsheet with all the data first
2. Then copy it into the component files in batches
3. Or use the helper script to format it programmatically
