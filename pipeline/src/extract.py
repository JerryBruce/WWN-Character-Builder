import pdfplumber

pdf_path = "data/raw/WWN_SRD.pdf"

with pdfplumber.open(pdf_path) as pdf:
    skills_list_page1 = pdf.pages[4]
    skills_list_page2 = pdf.pages[5]


    #creating the starting point and column split
    middle = skills_list_page1.width / 2
    start_margin = 410

    # getting ONLY the skills text
    skill_list_start = skills_list_page1.crop((middle, start_margin, skills_list_page1.width, 760))
    skill_list_end = skills_list_page2.crop((0, 30, middle, 760))

    # combine the start and end
    raw_text = skill_list_start.extract_text() + " " + skill_list_end.extract_text()

    #Save text to interim folder
    with open("data/interim/skills_raw.txt", "w", encoding="utf-8") as f:
        f.write(raw_text)