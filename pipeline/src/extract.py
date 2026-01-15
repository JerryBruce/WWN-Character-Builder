import pdfplumber
import os
from config import BOOK_MAP

def extract_content():
    pdf_path = "data/raw/WWN_SRD.pdf"
    output_dir = "data/interim/text"

    with pdfplumber.open(pdf_path) as pdf:
        for section, info in BOOK_MAP.items():
            print(f"Extracting {section}...")
            combined_text = []

            for segment in info["segments"]:
                page = pdf.pages[segment["page"]]
                crop = page.crop(segment["bbox"])
                text = crop.extract_text()
                if text:
                    combined_text.append(text)
            char = info.get("join_char", "/n")
            final_text = char.join(combined_text)

            save_path = os.path.join(output_dir, info["raw_name"])
            with open(save_path, "w", encoding="utf-8") as f:
                f.write(final_text)
            
            print(f"Successfully Bridged {len(info['segments'])} segments into {save_path}")

if __name__ == "__main__":
        extract_content()
        