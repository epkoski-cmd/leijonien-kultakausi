# Yhdistää game-core.js:n index.html:ään yhdeksi tiedostoksi.
#  - leijonat.html: Claude-artefaktiksi julkaistava versio (alusta lisää <head>-kehyksen itse)
#  - docs/index.html: GitHub Pages -versio, jossa on oma doctype ja merkistö
# Jokaiseen buildiin leimataan versio: päivämäärä ja sisällöstä laskettu tunniste.
import hashlib
from datetime import datetime
from pathlib import Path

d = Path(__file__).parent
html = (d / 'index.html').read_text()
core = (d / 'game-core.js').read_text()

digest = hashlib.sha1((html + core).encode()).hexdigest()[:7]
stamp = datetime.now().strftime('%-d.%-m.%Y klo %H.%M')
version = f'{digest}'
label = f'{stamp} · {digest}'

out = html.replace('<script src="game-core.js"></script>', '<script>\n' + core + '\n</script>')
assert out != html
out = out.replace('__LKK_VERSION__', version).replace('__LKK_VERSION_LABEL__', label)
assert '__LKK_VERSION' not in out
(d / 'leijonat.html').write_text(out)

# Kävijälaskuri (GoatCounter, ei evästeitä) vain GitHub Pages -versioon
GOATCOUNTER = '<script data-goatcounter="https://kultakausi.goatcounter.com/count" async src="https://gc.zgo.at/count.js"></script>\n'
# Linkin esikatselu (WhatsApp, iMessage ym.) ja kuvakkeet vain GitHub Pages -versioon. Kuvat ovat docs/-kansiossa.
SITE = 'https://epkoski-cmd.github.io/leijonien-kultakausi/'
DESC = 'Draftaa kaikkien aikojen Leijonat ja pelaa kausi. Pystytkö täydelliseen 22–0-kauteen? Päivän haaste: haasta kaverisi.'
META = (
    f'<meta name="description" content="{DESC}">\n'
    '<meta property="og:type" content="website">\n'
    '<meta property="og:site_name" content="Leijonien kultakausi">\n'
    '<meta property="og:title" content="Leijonien kultakausi">\n'
    f'<meta property="og:description" content="{DESC}">\n'
    f'<meta property="og:url" content="{SITE}">\n'
    f'<meta property="og:image" content="{SITE}og.png">\n'
    '<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">\n'
    '<meta name="twitter:card" content="summary_large_image">\n'
    '<link rel="icon" type="image/png" href="favicon.png">\n'
    '<link rel="apple-touch-icon" href="apple-touch-icon.png">\n'
    '<meta name="theme-color" content="#0d1b2e">\n'
)
page = '<!doctype html>\n<html lang="fi">\n<head>\n<meta charset="utf-8">\n' + META + GOATCOUNTER + out + '\n</html>\n'
(d / 'docs').mkdir(exist_ok=True)
(d / 'docs' / 'index.html').write_text(page)
print('ok', len(out), label)
