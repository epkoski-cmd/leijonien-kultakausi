# Leijonien kultakausi

Selaimessa pelattava jääkiekon draft-peli. Kokoa kaikkien aikojen Leijonat arvotuista turnausjoukkueista (tai aikakausista) ja pelaa vuoden kausi: Euro Hockey Tour, MM-alkusarja ja MM-pudotuspelit. Tavoitteena on täydellinen kausi, 22–0.

**Pelaa:** https://epkoski-cmd.github.io/leijonien-kultakausi/

## Ominaisuudet
- Draft kuudelle paikalle (VL, KH, OL, 2 × P, MV) arvotuista turnauskokoonpanoista
- Kultasuoni: kemiabonukset joukkuekavereista
- Kausi ottelu kerrallaan tai kerralla simuloituna, maalintekijät ja syöttäjät
- MM-palkinnot, joukkueen kuninkaat ja jaettava tuloskuva

## Rakenne
- `game-core.js` – pelaajat, turnaukset, simulaatio
- `index.html` – käyttöliittymä
- `data/tournaments.py` – Suomen turnauskokoonpanot (lähde: Wikipedian kokoonpanotaulukot)
- `build.py` – yhdistää tiedostot: `docs/index.html` (GitHub Pages) ja `leijonat.html`
- `IDEAT.md` – idealista

Muutosten jälkeen aja `python3 build.py`.

Epävirallinen fanipeli. Ei yhteyttä Suomen Jääkiekkoliittoon, IIHF:ään tai NHL:ään. Pelaajien arviot ovat tekijän näkemyksiä.
