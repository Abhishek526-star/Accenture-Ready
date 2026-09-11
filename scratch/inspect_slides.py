import zipfile, xml.etree.ElementTree as ET, os, sys
sys.stdout.reconfigure(encoding='utf-8')

fp = r'C:\Users\abhis\Downloads\Telegram Desktop\70+ Cloud and Network Accenture.pptx'
with zipfile.ZipFile(fp) as z:
    slides = [name for name in z.namelist() if name.startswith('ppt/slides/slide') and name.endswith('.xml')]
    slides.sort(key=lambda s: int(s.replace('ppt/slides/slide', '').replace('.xml', '')))
    print(f'Total slides: {len(slides)}')
    for idx, s in enumerate(slides):
        xml_content = z.read(s)
        tree = ET.fromstring(xml_content)
        texts = [elem.text for elem in tree.iter() if elem.tag.endswith('}t') and elem.text]
        blips = [elem for elem in tree.iter() if elem.tag.endswith('}blip')]
        joined = ' '.join(texts).strip()
        print(f'Slide {idx+1}: text_len={len(joined)} | images={len(blips)} | text={joined[:80]}')
