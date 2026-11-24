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
page = '<!doctype html>\n<html lang="fi">\n<head>\n<meta charset="utf-8">\n' + GOATCOUNTER + out + '\n</html>\n'
(d / 'docs').mkdir(exist_ok=True)
(d / 'docs' / 'index.html').write_text(page)
print('ok', len(out), label)
