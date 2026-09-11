import json, re

with open('scratch/all_ocr_output_utf8.txt', 'r', encoding='utf-8') as f:
    raw = f.read()

slides = raw.split('================ SLIDE ')
print(f"Total slides: {len(slides)-1}")

questions_found = []

# Let's inspect slide by slide
for idx in range(1, len(slides)):
    s_text = slides[idx]
    s_lines = [l.strip() for l in s_text.split('\n') if l.strip() and not l.startswith('===')]
    print(f"\n[SLIDE {idx}]")
    for l in s_lines:
        if any(w in l for w in ['Which', 'What', 'How', 'Assume', 'Your company', 'In computing', 'Unsolicited', 'Attack', 'An attack', 'Computing refers', 'Cloud computing', 'Bridge can', 'Find the odd', 'As per which', 'Match the following', 'The ability', 'hides the']):
            print(f"  Q: {l[:110]}")
