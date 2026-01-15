import re
import json
import os
from config import BOOK_MAP

def transform_all():
    input_dir = "data/interim/text"
    output_dir = "data/interim/json"
    os.makedirs(output_dir, exist_ok=True)

    for section, info in BOOK_MAP.items():
        print(f"Transforming {section}...")

        input_path = os.path.join(input_dir, info["raw_name"])

        if not os.path.exists(input_path):
            continue

        with open(input_path, "r", encoding="utf-8") as f:
            lines = f.readlines()

        cleaned_data = []
        pattern = info["pattern"]

        for line in lines:
            line = line.strip()
            if not line: continue

            match = re.search(pattern, line)
            
            if match:
                cleaned_data.append({
                    "name": match.group(1).strip(),
                    "description": match.group(2).strip()
                })
            else:
                if cleaned_data:
                    cleaned_data[-1]["description"] += " " + line

        save_path = os.path.join(output_dir, info["clean_name"])
        with open(save_path, "w", encoding="utf-8") as f:
            json.dump(cleaned_data, f, indent=4, ensure_ascii=False)

        print(f"Finished {section}  -> {save_path}")

if __name__ == "__main__":
    transform_all()

