import zipfile, xml.etree.ElementTree as ET, os, sys, winocr, json
from PIL import Image
sys.stdout.reconfigure(encoding='utf-8')

pptx_path = r'C:\Users\abhis\Downloads\Telegram Desktop\70+ Cloud and Network Accenture.pptx'
output_dir = r'scratch/extracted_slides'
os.makedirs(output_dir, exist_ok=True)

with zipfile.ZipFile(pptx_path) as z:
    slides = [name for name in z.namelist() if name.startswith('ppt/slides/slide') and name.endswith('.xml')]
    slides.sort(key=lambda s: int(s.replace('ppt/slides/slide', '').replace('.xml', '')))
    
    slide_data = []
    print(f'Extracting and running OCR on {len(slides)} slides...')
    for idx, s in enumerate(slides):
        slide_num = idx + 1
        rel_name = f'ppt/slides/_rels/slide{slide_num}.xml.rels'
        slide_images = []
        if rel_name in z.namelist():
            rel_xml = z.read(rel_name)
            tree = ET.fromstring(rel_xml)
            for elem in tree.iter():
                target = elem.attrib.get('Target', '')
                if 'media/' in target:
                    img_filename = os.path.basename(target)
                    media_path = f'ppt/media/{img_filename}'
                    if media_path in z.namelist():
                        out_path = os.path.join(output_dir, f'slide_{slide_num}_{img_filename}')
                        with open(out_path, 'wb') as f_out:
                            f_out.write(z.read(media_path))
                        slide_images.append(out_path)
        
        # Run OCR on extracted images
        ocr_texts = []
        for img_p in slide_images:
            try:
                img = Image.open(img_p)
                # Ignore very small icons (e.g. logos < 100px wide/high)
                if img.width < 80 or img.height < 80:
                    continue
                res = winocr.recognize_pil_sync(img)
                txt = res.get('text', '').strip()
                if txt:
                    ocr_texts.append({'image': os.path.basename(img_p), 'width': img.width, 'height': img.height, 'text': txt})
            except Exception as e:
                pass
        
        slide_entry = {
            'slide': slide_num,
            'ocr': ocr_texts
        }
        slide_data.append(slide_entry)
        if slide_num % 5 == 0 or slide_num == len(slides):
            print(f'Processed slide {slide_num}/{len(slides)}')

with open(r'scratch/all_slides_ocr.json', 'w', encoding='utf-8') as f:
    json.dump(slide_data, f, indent=2, ensure_ascii=False)

print('Done saving all_slides_ocr.json')
