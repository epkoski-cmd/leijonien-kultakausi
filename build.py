# Yhdistää game-core.js:n index.html:ään yhdeksi tiedostoksi.
#  - leijonat.html: Claude-artefaktiksi julkaistava versio (alusta lisää <head>-kehyksen itse)
#  - docs/index.html: GitHub Pages -versio, jossa on oma doctype ja merkistö
from pathlib import Path

d = Path(__file__).parent
html = (d / 'index.html').read_text()
core = (d / 'game-core.js').read_text()
out = html.replace('<script src="game-core.js"></script>', '<script>\n' + core + '\n</script>')
assert out != html
(d / 'leijonat.html').write_text(out)

page = '<!doctype html>\n<html lang="fi">\n<head>\n<meta charset="utf-8">\n' + out.replace('<body>', '') + '\n</html>\n'
(d / 'docs').mkdir(exist_ok=True)
(d / 'docs' / 'index.html').write_text(page)
print('ok', len(out))
