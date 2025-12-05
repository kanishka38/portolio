#!/usr/bin/env python3
"""
LinkedIn Data Formatter
This script helps format your LinkedIn projects and internships data into JSON format.
Since LinkedIn doesn't allow automated scraping, you'll need to manually input your data.
"""

import json
import os
from pathlib import Path

# Example projects data - replace with your actual projects from LinkedIn
PROJECTS_DATA = [
    {
        "title": "Project Name",
        "description": "Brief description of what the project does",
        "features": [
            "Feature or achievement 1",
            "Feature or achievement 2",
            "Feature or achievement 3"
        ],
        "technologies": ["Technology1", "Technology2", "Technology3"],
        "icon": "FaCode",  # Options: FaCode, FaServer, FaDatabase, FaMobile, FaGlobe
        "link": "https://project-url.com",  # Optional
        "github": "https://github.com/username/repo"  # Optional
    }
]

# Example internships data - replace with your actual internships from LinkedIn
INTERNSHIPS_DATA = [
    {
        "title": "Intern Position Title",
        "company": "Company Name",
        "location": "City, State/Country",
        "period": "Month Year - Month Year",
        "description": "Brief description of the internship role",
        "achievements": [
            "Achievement or responsibility 1",
            "Achievement or responsibility 2",
            "Achievement or responsibility 3"
        ],
        "techStack": ["Technology1", "Technology2", "Technology3"]
    }
]

def save_projects(data):
    """Save projects data to JSON file"""
    script_dir = Path(__file__).parent
    data_dir = script_dir.parent / "data"
    data_dir.mkdir(exist_ok=True)
    
    file_path = data_dir / "projects.json"
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump({"projects": data}, f, indent=2, ensure_ascii=False)
    print(f"✅ Projects data saved to {file_path}")

def save_internships(data):
    """Save internships data to JSON file"""
    script_dir = Path(__file__).parent
    data_dir = script_dir.parent / "data"
    data_dir.mkdir(exist_ok=True)
    
    file_path = data_dir / "internships.json"
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump({"internships": data}, f, indent=2, ensure_ascii=False)
    print(f"✅ Internships data saved to {file_path}")

def main():
    print("\n📋 LinkedIn Data Formatter\n")
    print("Since LinkedIn doesn't allow automated scraping, please follow these steps:\n")
    print("1. Visit your LinkedIn profile: https://www.linkedin.com/in/kanishka-sonkar-30520a243/")
    print("2. Navigate to your Projects and Experience sections")
    print("3. Copy the information manually")
    print("4. Update PROJECTS_DATA and INTERNSHIPS_DATA in this script")
    print("5. Run this script again to save the formatted data\n")
    
    # Uncomment the lines below after adding your data:
    # save_projects(PROJECTS_DATA)
    # save_internships(INTERNSHIPS_DATA)
    
    print("💡 Tip: Edit this script, add your data to PROJECTS_DATA and INTERNSHIPS_DATA,")
    print("   then uncomment the save functions at the bottom.\n")

if __name__ == "__main__":
    main()
