import json, sys

with open('scratch/all_slides_ocr.json', 'r', encoding='utf-8') as f:
    slides = json.load(f)

with open('scratch/all_ocr_output_utf8.txt', 'w', encoding='utf-8') as out:
    for s in slides:
        slide_num = s['slide']
        out.write(f"\n================ SLIDE {slide_num} ================\n")
        for o in s['ocr']:
            lines = [l.strip() for l in o['text'].split('\n') if l.strip()]
            txt = ' // '.join(lines)
            out.write(f"[{o['image']}] {txt}\n")

print("Done writing scratch/all_ocr_output_utf8.txt")
