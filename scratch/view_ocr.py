import json, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/all_slides_ocr.json', 'r', encoding='utf-8') as f:
    slides = json.load(f)

print(f'Total slides: {len(slides)}')
for s in slides:
    slide_num = s['slide']
    print(f"\n================ SLIDE {slide_num} ================")
    for o in s['ocr']:
        lines = [l.strip() for l in o['text'].split('\n') if l.strip()]
        txt = ' // '.join(lines)
        print(f"[{o['image']}] {txt}")
