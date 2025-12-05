# LinkedIn Data Integration - Summary

## What Was Added

I've set up a complete structure for adding your LinkedIn projects and internships to your portfolio:

### 1. **Internships Component** ✅
   - Created `components/Internships.tsx`
   - Matches the design style of your Experience section
   - Automatically hides if no internships are added

### 2. **Updated Navigation** ✅
   - Added "Internships" link to the navigation menu
   - Positioned between "Experience" and "Projects"

### 3. **Updated Main Page** ✅
   - Added Internships section to `app/page.tsx`
   - Appears between Experience and Projects sections

### 4. **Helper Scripts** ✅
   - `scripts/extract-linkedin-data.js` - Node.js script to format data
   - `scripts/format-linkedin-data.py` - Python alternative
   - `LINKEDIN_DATA_GUIDE.md` - Complete step-by-step guide

## How to Add Your LinkedIn Data

### Quick Method (Recommended):

1. **Open your LinkedIn profile**: https://www.linkedin.com/in/kanishka-sonkar-30520a243/

2. **For Projects**:
   - Open `components/Projects.tsx`
   - Find the `projects` array (around line 6)
   - Add your projects following the existing format
   - Each project should have: title, description, features, technologies, icon

3. **For Internships**:
   - Open `components/Internships.tsx`
   - Find the `internships` array (around line 16)
   - Add your internships following the commented example format
   - Each internship should have: title, company, location, period, description, achievements, techStack

### Format Examples:

**Project:**
```typescript
{
  title: "Your Project Name",
  description: "What the project does",
  features: [
    "Feature 1",
    "Feature 2"
  ],
  technologies: ["Tech1", "Tech2"],
  icon: <FaServer />, // Choose appropriate icon
}
```

**Internship:**
```typescript
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
}
```

## Available Icons for Projects

You can use these icons (import from `react-icons/fa`):
- `<FaCode />` - General coding projects
- `<FaServer />` - Backend/API projects
- `<FaDatabase />` - Database projects
- `<FaMobile />` - Mobile apps
- `<FaGlobe />` - Web applications

## Important Notes

⚠️ **LinkedIn doesn't allow automated scraping** due to their terms of service. You'll need to:
- Manually copy the information from your LinkedIn profile
- Paste it into the component files
- Format it according to the existing structure

The helper scripts in the `scripts/` folder can help you format the data once you've copied it manually.

## Next Steps

1. Visit your LinkedIn profile
2. Copy your projects and internships information
3. Edit the component files (`Projects.tsx` and `Internships.tsx`)
4. Save and refresh your portfolio to see the changes!

## Files to Edit

- `components/Projects.tsx` - Add your projects here
- `components/Internships.tsx` - Add your internships here

## Documentation

- See `LINKEDIN_DATA_GUIDE.md` for detailed step-by-step instructions
- Helper scripts available in `scripts/` folder

---

**Tip**: Start by adding one project or internship to test the format, then add the rest!
