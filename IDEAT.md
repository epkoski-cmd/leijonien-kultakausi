# Leijonien kultakausi – idealista

Arviot: **työmäärä** (pieni / keskikokoinen / iso) ja huomioita toteutuksesta.

## 1. Kausi ottelu kerrallaan ✅ tehty (versio 12)
Valinta: simuloi koko kausi kerralla tai pelaa ottelu kerrallaan (Seuraava ottelu -nappi, turnauksen tilanne näkyvissä).
- Maalintekijät ja syöttäjät Suomelle: kyllä. Jokaiselle maalille arvotaan tekijä ja 0–2 syöttäjää omista pelaajista (hyökkääjille isompi todennäköisyys kuin pakeille, vahvemmille isompi kuin heikommille).
- Kauden lopussa joukkueen pistepörssi.
- **Työmäärä:** keskikokoinen. Maalintekijät ovat helpompi osa.

## 2. Jaettava kuva ykköskentästä ja tuloksesta ✅ tehty (versio 14)
Kuva, jossa on kenttäkaavio, kauden tulos ja mitali.
- Kuva voidaan piirtää selaimessa (canvas). Huom.: tässä alustassa sivu ei voi itse käynnistää latausta, joten näytetään valmis kuva, jonka pelaaja tallentaa painamalla sitä pitkään (puhelin) tai hiiren oikealla (kone).
- **Työmäärä:** pieni–keskikokoinen.

## 3. MM-kisojen palkinnot ✅ tehty (versio 13)
MM-kisoissa jaetaan yleensä:
- Kisaorganisaation (IIHF:n direktoraatin) palkinnot: paras maalivahti, paras puolustaja, paras hyökkääjä
- Median valitsema tähdistökenttä (maalivahti, kaksi puolustajaa, kolme hyökkääjää) ja MVP
- Pistepörssin voittaja (tilastot)

Pelin sisäisinä palkintoina lisäksi: joukkueen maalikuningas, syöttökuningas, pistekuningas ja jäähykuningas.
- Vaatii idean 1 maalintekijät (ja jäähyjen simuloinnin).
- **Työmäärä:** pieni, kun idea 1 on tehty.

## 4. Kieliversiot: suomi, ruotsi, englanti, saame
- Suomi, ruotsi ja englanti ovat realistisia. Tekstit kerätään yhteen paikkaan ja kieli valitaan valikosta. Pelaajien vihjeet pitää kääntää kaikille kielille (~130 kpl).
- Saame: valittava, mikä saame (pohjoissaame on yleisin). Claude pystyy luonnostelemaan, mutta käännös kannattaa tarkistuttaa äidinkieliseltä puhujalta.
- **Työmäärä:** keskikokoinen (pelaajavihjeiden kääntäminen on suurin osa).

## 5. Maavalinta
Pelaaja valitsee maan, jonka kaikkien aikojen joukkueen draftaa.
- Venäjä ja Valko-Venäjä jätetään pois: eivät valittavina eivätkä vastustajina.
- Isoin työ on data: jokaiselle maalle ~80–130 pelaajaa aikakausineen, pelipaikkoineen, arvioineen ja vihjeineen sekä omat kemiabonukset. Kanada, Ruotsi, USA, Tšekki, Slovakia, Sveitsi ja Saksa ovat realistisia; pienempien maiden historia jää ohueksi.
- Kausirakenne vaihtelee maittain (EHT koskee vain neljää maata). Muille maille kausi voisi olla esim. harjoitusotteluita + MM.
- **Työmäärä:** iso, mutta tehtävissä maa kerrallaan.

## 6. Team World
Joukkue kaikista mukana olevista maista (esim. Gretzky, Sundin ja Barkov samassa kentässä).
- Edellyttää idean 5 pelaajadataa. Kun maat ovat olemassa, Team World on pieni lisäys.
- Vastustajat pitää miettiä erikseen (esim. maiden kaikkien aikojen joukkueet).
- **Työmäärä:** pieni idean 5 jälkeen, muuten iso.

## 7. Kultasuoni: synergiat näkyviin ✅ tehty (versio 11)
Pelaajan pitää huomata, kun synergia syntyy (Koivun veljekset, Edmontonin dynastia jne.).
- Kun pelaaja täydentäisi synergian, hänen korttiinsa tulee merkki (esim. ✦ ja synergian nimi).
- Synergian syntyessä näytetään ilmoitus ("Kultasuoni! Koivun veljekset +0,8").
- Lisää synergioita: esim. Edmontonin tutkapari, kultaketju 2011 (Granlund, Koivu, Immonen?), Ilveksen tai Jokerien kasvatit.
- **Työmäärä:** pieni.

## 8. Neljä ketjua ja varapelaajat / pakotetut huonot valinnat

Käyttäjän idea: manager-moodi (koko joukkue: neljä kenttää, kaksi maalivahtia, varamiehet). Loukkaantumiset pakottaisivat nostamaan varamiehiä, ja kenttiä/pelipaikkoja voisi muuttaa kesken kauden. Riski: siirrytään manager-pelin puolelle ja draftin nopeus katoaa. Jos tehdään, oma pelimuoto, ja kauden aikaiset muutokset rajattuja (esim. vaihto vain turnausten välissä).
Turnausarvonta tehty (versio 16): 15 turnausta, kokoonpanot `data/tournaments.py`. Välivaihe tehty (versio 15): peli valitsee automaattisesti muut kentät (6 hyökkääjää, 3 puolustajaa) samoilta aikakausilta, ja ne tekevät noin 38 % maaleista. Neljän ketjun draft voisi korvata tämän myöhemmin.
**Hyödyt:** syvyys alkaa merkitä, ja pakko valita myös heikompia pelaajia. Valinnoista tulee vaikeampia ja kiinnostavampia.
**Haitat:** draft venyy noin 20–22 kierrokseen, puhelimella kenttäkaavio vie paljon tilaa, ja jokaiselle aikakaudelle tarvitaan enemmän pelaajia.

Saman tunteen kuin 38-0-0:ssa (heikko joukkue tai täytetyt paikat) saa kevyemmin:
- **Arvotaan aikakauden sijaan tietty turnaus**, esim. "MM 1995" tai "MM 2011". Valittavana on vain sen joukkueen ~25 pelaajaa, joten välillä pool on heikko ja välillä paikat on jo täytetty. Vaatii turnauskokoonpanot, jotka pitää tarkistaa lähteistä.
- Välimuoto: 2 ketjua + 2 pakkiparia + maalivahti = 11 pelaajaa. Painotus ykköskentälle, kakkoskentällä pienempi vaikutus.
- **Työmäärä:** keskikokoinen (turnausarvonta) tai iso (neljä ketjua).

## Ehdotettu järjestys
1. Kultasuoni-merkinnät (pieni, parantaa peliä heti)
2. Ottelu kerrallaan + maalintekijät (keskikokoinen)
3. Palkinnot (pieni idean 2 jälkeen)
4. Jaettava kuva (pieni–keskikokoinen)
5. Turnausarvonta tai kaksi kenttää
6. Kieliversiot
7. Maavalinta ja Team World

## 9. Käytettävyys: draftin virta uusiksi (havainnot nhl82.ca:sta, 2026-11-24)
Ystävän palaute: ei ymmärrä, että ensin valitaan pelaaja ja sitten paikka.

Omat havainnot nhl82.ca:sta:
- Arvonta pyörii kuin ruletti, jolloin ymmärtää että jotain arvotaan. Animaatio on tärkeä.
- Pelaajan valinta: kortin napautus välähdyttää pelaajan sopivat paikat keltaisena, ja paikka valitaan kortin omista napeista. Selkeä.
- Kaikki/pelipaikka-suodatin ja "vaihda joukkue/aikakausi kerran" saivat empimään: kannattaako käyttää?
- Turha edestakaisin kulku: valinnan jälkeen palataan alkuruutuun, spinneri pyörii itsestään ja lista aukeaa taas. Parempi: lista kerroksena perusnäkymän päällä tai arvonta samassa näkymässä.
- Pelimuoto (Toughest Team) selvisi vasta tuloksesta. Tilastot (PIM) näyttivät "hyvyyspisteiltä" asteikolla 0–100. Luvun merkitys pitää kertoa.

Suunnitelma omaan peliin:
1. ✅ Yhden napautuksen valinta: paikkanapit kortissa, yksi sopiva paikka -> koko kortti riittää. Valittu paikka välähtää kaukalossa.
2. ✅ Arvonta-animaatio (turnaus/aikakausi pyörii kuin ruletti) samassa näkymässä, ei sivunvaihtoja. Ensimmäisellä kierroksella selittävä lause. Lisäksi: puhelimessa pieni kaukalo pysyy ylhäällä ja lista vierii sen alla (versio d6e328a).
3. ✅ Kumoa viimeisin valinta.
4. Kierrosotsikko + edistymispallot: "Kierros 2/6 · Valitse yksi pelaaja".
5. Arvio-luku selitetään (esim. "Taso 0–100") tai näytetään tähdillä; helppo tila pois ensinäkymästä asetuksiin.
6. Uudelleenarvonta selitetään lyhyesti ("1 käyttökerta koko draftissa").

Lisähavainnot (Classic, IceIQ, Dynasty tips):
- IceIQ sumentaa arvot sen sijaan että piilottaisi ne. Pelaaja tietää, että arvot ovat olemassa ja ne voi avata. Parempi kuin meidän "Näytä arviot" -valintaruutu.
- Pisteluku (esim. Palffy 91) näytti asteikolta 0–100, vaikka se oli kauden pisteet. Luvun merkitys pitää selittää napauttamalla tai hiirellä.
- Hitaus on suurin ongelma: pelaajaa piti klikata 3–5 kertaa, valintaa ei korostettu, ja suodattimen vaihto kesti sekunteja. Tuntui rikkinäiseltä. Meillä data on sivulla itsessään, joten kaiken pitää tapahtua heti.
- Listan päivittymisestä tarvitaan pieni animaatio, jotta näkee että suodatin toimi.
- Pelkät maali- ja pistetilastot eivät kerro, onko puolustaja hyvä puolustamaan. Meidän yksi arvio kattaa kokonaisuuden, mutta sen pitää näkyä ymmärrettävästi (esim. taso + rooli).
- "Dynasty tips" etusivulla: lyhyet vinkit siitä, miten kannattaa pelata (maalivahti tärkeä, tasapaino, kultasuonet). Hyvä idea meillekin.

Lisäys suunnitelmaan:
7. ✅ Arviot sumennettuina oletuksena, napautus paljastaa (korvaa helppo tila -valintaruudun). Arvon selitys napautuksella.
8. Välitön palaute: valittu kortti korostuu heti, lista päivittyy animaatiolla, ei viiveitä.
9. Vinkkilaatikko ennen ensimmäistä draftia (3–4 vinkkiä).

### Havainnot: Draft Prospects Hockey 84-0 (2026-11-24, käyttäjän testi)
- Hyvää: pelaajakortissa tilastot (GP, G, A, PTS, +/-) ja oma kokonaisarvio (OVR), jonka merkitys selitetään yhdellä rivillä listan yläpuolella ("OVR is a game rating, computed from each player's stats").
- Hyvää: "68 players available · 41 F · 22 D · 5 G still needed", Undo pick, Share lineup, lajittelu (PTS).
- Ongelma: peli alkaa suoraan pelaajanvalintanäkymästä ilman arvontaa tai johdantoa, joten ei ymmärrä mistä on kyse.
- Opetus meille: ensimmäisellä kierroksella pitää kertoa mitä tapahtuu (arvonta-animaatio + yksi lause: "Sinulle arvottiin Suomen MM 1995 -joukkue. Valitse siitä yksi pelaaja.").
  Arvion selitys yhdellä rivillä listan yläpuolelle on hyvä malli kohtaan 7.

## 10. Perehdytys uudelle pelaajalle (lisätty 2026-11-24, tälle päivälle) ✅ tehty (versio 9c67c00)
- Ensimmäisellä käynnillä esittely-ikkuna: mikä peli on ja tavoite (puhelimessa otsikon selite ei näy). Selain muistaa (localStorage), että se on näytetty; uusi laite, yksityinen selaus tai selaintietojen tyhjennys näyttää sen uudelleen.
- Ensimmäisen arvonnan jälkeen lyhyet vinkit: valitse pelaaja haluamallesi paikalle, maalivahti painaa eniten, pelaaja on vahvin omalla paikallaan. Korvaa erillisen vinkkilaatikon (kohta 9, nro 9).
- Kultasuoni selitetään vasta, kun ✦-merkki näkyy ensimmäistä kertaa.
- Vinkit saa myöhemmin auki ?-napista.
- Pieni bugi: puhelimessa "Paras"-laatikon tulos (esim. 21–1–0) rivittyy kolmelle riville.

## 11. Myöhemmin: tunnelma ja tulossivu (lisätty 2026-11-24)
- Tulossivulla "Uusi draft" siirretään "Joukkueen kuninkaat" -osion alle, ja sen vasemmalle "Katso pistepörssi" -nappi, joka avaa pistepörssin samalla animaatiolla kuin otteluiden tiedot.
- Ottelu kerrallaan: tuloskortin alareunaan edistymispalkki (ottelun kello), maalit ilmestyvät siinä tahdissa kuin ne syntyvät. Konfetti Suomen voitosta.
- Äänet: alkupilli, Suomen maalista fanfaari, vastustajan maalista buuaus, tappiosta "oooh"-huokaus, voitosta taputus ja juhlinta. Huom.: äänet voivat alkaa vasta pelaajan ensimmäisen napautuksen jälkeen (selainten sääntö), ja mykistysnappi tarvitaan. Äänitiedostot pitää tehdä itse tai hankkia vapailla lisensseillä.
- Kaksi lätkäukkoa ottelukortin vieressä: kalistelevat mailoja, maalista toinen tuulettaa ja toinen lyyhistyy. Peliasut maiden lippujen väreissä (ei oikeita joukkueiden logoja).

## 12. Katkeava vihjeteksti pelaajakortissa (lisätty 2026-11-24, myöhemmin)
Esim. "Lauri Korpikoski ✦ Sukupolvi Phoenixin kahden …": vihje ei mahdu korttiin, eikä käyttäjä näe loppua. Nyt koko teksti näkyy vain hiiren alla (title), puhelimessa ei ollenkaan.
Käydään läpi vaihtoehdot, kun on aika:
- Vihje toiselle riville nimen alle (kortti korkeammaksi)
- Kortin napautus tai pitkä painallus avaa lisätiedot (vihje, aikakausi, arvio)
- Lyhyemmät vihjeet tai ✦-merkki pelkäksi tähdeksi, jolloin vihjeelle jää tilaa
- Leveällä näytöllä yksi sarake kahden sijaan

## 13. Havainnot ja ideat (2026-11-24 ilta)
- Kumoa toimii monta kertaa, mikä yllätti ja sekoitti: ei tiennyt, millä kierroksella on. Vaihtoehdot: ilmoitus kertoo kierroksen ("Kumottu: X · palattiin kierrokselle 4/6"), tai kumoa vain kerran per kierros.
- Olympialaiset 2022 -joukkueessa ei ole yhtään yli 90 pisteen pelaajaa, mutta joukkue voitti kultaa. Yhteispeli ratkaisee. Idea: saman turnausjoukkueen pelaajat saavat kemiabonuksen ("Pekingin kultajoukkue"), jolloin vähemmän tähtiä sisältävä mutta yhtenäinen kenttä voi pärjätä.
- Toistettavuus: helpossa tilassa valitsee usein samat tähdet, ja maajoukkuepelaajia on vähän. Pitää validoida, käykö peli tylsäksi. 38-0-0 tarjoaa eri sarjoja (liigat, MM-kisat). Meille vaihtoehtoja: Liiga-seurojen kaikkien aikojen joukkueet, eri maat (kohta 5), päivittäinen haaste (kaikille sama arvonta), sumennetut arviot (kohta 9).
- Oma ennätys -napista näkyviin ennätyskauden kortti (kokoonpano, tulos, mitali, palkinnot). Ei vaadi palvelinta: kauden tiedot voi tallentaa selaimeen samoin kuin ennätyksen, ja jakokuvan voi piirtää uudelleen. Näkyy vain samalla laitteella.
