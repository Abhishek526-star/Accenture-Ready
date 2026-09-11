import os, sys, pypdf
sys.stdout.reconfigure(encoding='utf-8')

dirs = [
    r'C:\Users\abhis\Downloads\Telegram Desktop',
    r'C:\Users\abhis\Downloads',
    r'C:\Users\abhis\Desktop',
    r'C:\Users\abhis\Documents'
]

for d in dirs:
    if not os.path.exists(d): continue
    for f in os.listdir(d):
        if f.lower().endswith('.pdf'):
            fp = os.path.join(d, f)
            try:
                sz = os.path.getsize(fp)
                if sz == 0 or sz > 40*1024*1024: continue
                r = pypdf.PdfReader(fp)
                txt = ''
                for p in r.pages:
                    t = p.extract_text()
                    if t: txt += t + '\n'
                
                # Check for "61" or questions
                q_words = txt.count('Question') + txt.count('Q.') + txt.count('Q ')
                print(f'{f} | sz: {sz} | pgs: {len(r.pages)} | q_markers: {q_words}')
                if '61' in txt or 'accenture' in txt.lower() or 'pyq' in txt.lower():
                    lines = [l.strip() for l in txt.split('\n') if l.strip()]
                    print(f'   -> Sample lines: {lines[:3]}')
            except Exception as e:
                print(f'{f} | err: {e}')
