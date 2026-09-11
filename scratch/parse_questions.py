import json, re

with open('scratch/all_ocr_output_utf8.txt', 'r', encoding='utf-8') as f:
    text = f.read()

slides = text.split('================ SLIDE ')
print(f"Total slides found: {len(slides) - 1}")

for s in slides[1:]:
    lines = s.split('\n')
    header = lines[0].strip().split()[0]
    content = '\n'.join(lines[1:]).strip()
    if '?' in content or 'Which' in content or 'what' in content.lower():
        print(f"--- Slide {header} has question content ---")
