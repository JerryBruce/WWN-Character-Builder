import re
import json

skills_data_path = "data/interim//text/skills_raw.txt"

# Read the skills text
with open(skills_data_path, "r", encoding="utf-8") as f:
    raw_text = f.read()

# Defines the pattern
skill_pattern = r"^([\w\s]+):\s*(.*)"

# Group each skill
all_skills = []
current_skill = None

lines = raw_text.split('\n')

# Loop through each line of text
for line in lines:
    line = line.strip()
    if not line: continue

    # Sets up the grouping
    match = re.search(skill_pattern, line)
    
    if match:
        all_skills.append({"name": match.group(1), "description": match.group(2)})
    else:
        if all_skills:
            all_skills[-1]["description"] += " " + line


with open("data/interim/json/skills_clean.json", "w", encoding="utf-8") as f:
    json.dump(all_skills, f, indent=4, ensure_ascii=False)
        

