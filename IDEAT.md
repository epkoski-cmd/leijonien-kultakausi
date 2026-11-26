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
- Oma ennätys -napista näkyviin ennätyskauden kortti (kokoonpano, tulos, mitali, palkinnot). Ei vaadi palvelinta: kauden tiedot voi tallentaa selaimeen samoin kuin ennätyksen, ja jakokuvan voi piirtää uudelleen. Näkyy vain samalla laitteella. ✅ tehty 25.11.2026: kortissa tulos, ottelunauha, mitali, ykköskenttä, palkinnot ja jakokuva.

## 14. Kauden yhteenveto puhelimessa (toive 2026-11-24) ✅ tehty (versio c91c627)
Yhteenveto on pitkä vieritettävä. "Uusi draft" voisi leijua koko ajan näkyvissä: sama kiinteä alapalkki kuin ottelu kerrallaan -tilassa, napit esim. "Uusi draft" ja "Jaa tulos" (jakokuva). Liittyy kohdan 11 ajatukseen siirtää Uusi draft ja lisätä "Katso pistepörssi".

## Tilanne 24.11.2026 illalla (versio 46c9837)
Tehty tänään: yhden napautuksen valinta, pieni kiinteä kaukalo puhelimessa, arvonta-animaatio, perehdytys (esittely, vinkit, kultasuoni-ohje, ?-nappi), kumoa, sumennetut arviot, ottelukortin tiivistelmä, alapalkit puhelimessa (ottelut ja yhteenveto), maalivahdin osio pistepörssiin, versionumero ja päivitysilmoitus, kultasuonet: veljekset, isä–poika (Kapanen, Hagman), kultajoukkueet, väripisteet ja katto.

Seuraavaksi (ehdotus):
1. ~~Ennätyskauden kortti "Oma ennätys" -napista (kohta 13)~~ ✅ tehty 25.11.2026
   + Analytiikka: GoatCounterin tapahtumat (event) pelatuista kausista, esim. "kausi-pelattu" (ja tarvittaessa "draft-aloitettu", "jakokuva-tehty"). GoatCounter ei tunnista yksittäisiä käyttäjiä, joten saadaan kokonaismäärät, ei käyttäjäkohtaista lukua. Kausia per käynti = kausi-pelattu / sivun käynnit. Vain GitHub Pages -versiossa. ✅ tehty 25.11.2026: tapahtumat kausi-pelattu, kausi-taydellinen ja jakokuva-tehty (GoatCounterissa näkyvät polkuina, Event-merkinnällä).
2. "Katso pistepörssi" -nappi yhteenvetoon (kohta 11)
3. Lisää kultasuonia: SM-liigan dynastiat valikoituna ja lähteistä tarkistettuna
4. Tunnelma: ottelun kello, maalit oikeassa tahdissa, konfetti (kohta 11)
5. Pelaajatietojen tarkistus ennen laajempaa jakoa

## 15. Linkin esikatselukuva WhatsAppiin ja iMessageen (lisätty 2026-11-25)
Kun linkin jakaa, viestiin tulee kuva, otsikko ja kuvaus. Tarvitaan:
- Open Graph -tagit sivulle: og:title, og:description, og:image (absoluuttinen osoite), og:url.
- Esikatselukuva 1200 × 630 PNG GitHub Pagesiin, esim. "LEIJONIEN KULTAKAUSI" ja kaukalokuvio pelin väreissä (piirretään samalla tekniikalla kuin jakokuva).
- Sivun kuvake (favicon) ja apple-touch-icon (180 × 180), jotka näkyvät selaimen välilehdessä, kirjanmerkeissä ja kotivalikossa.
Huom.: WhatsApp ja iMessage tallentavat esikatselun välimuistiin, joten jo jaetut linkit voivat näyttää vanhan esikatselun.

## 16. Vaihtelu: samat turnaukset ja tähdet toistuvat (havainto 2026-11-25)
Pelatessa tuntuu, että samat arvokisajoukkueet ja pelaajat tulevat melkein joka kerta. Keskustellaan, montako joukkuetta pitäisi olla ja miten vaihtelua saadaan.

Lähtötilanne (laskettu 25.11.2026):
- 15 turnausjoukkuetta (Kanada-cup 1981, 1987, 1991; MM 1995, 2007, 2011, 2016, 2019, 2022; olympialaiset 1998, 2006, 2010, 2014, 2022; World Cup 2004). Draftissa arvotaan 6 eri turnausta, eli joka draftissa näkyy 40 % kaikista.
- 191 eri pelaajaa, 362 rosteripaikkaa. 104 pelaajaa on vain yhdessä joukkueessa.
- Tähdet toistuvat: Selänne, Lehtinen, Peltonen, Mikko Koivu ja Kukkonen ovat kuudessa joukkueessa; Numminen, Saku Koivu, Timonen, Niko Kapanen ja Tuomo Ruutu viidessä. Kuuden joukkueen pelaaja tulee vastaan noin 98 %:ssa drafteista, viiden noin 96 %:ssa.
- Joukkueet ovat osin lähes samoja: MM 2022 ja olympialaiset 2022 jakavat 17 pelaajaa 25:stä, World Cup 2004 ja olympialaiset 2006 17/24, olympialaiset 2006 ja 2010 15/23.

Keskusteltavaksi: lisää turnauksia (muut MM-kisat 1980-luvulta alkaen), muistivaraus viime drafteista (ei samoja turnauksia peräkkäin), sama pelaaja vain kerran per draft näkyvissä, tai yhden tähden turnauskohtainen "versio" (esim. Selänne 1998 vs. 2014 eri arviolla).

Päätökset ja tehty (25.11.2026):
- Vain oikeasti pelatut, lähteistä tarkistetut kokoonpanot kelpaavat jatkossakin. Edetään hitaasti.
- Käyttäjää häiritsivät eniten tutut turnaukset. Lisäksi Selänne ja muut tähdet ovat lähes aina saatavilla, jolloin muun valinta tuntuu kullan heittämiseltä. Tavoite: tähti ei saa olla 90 %:n varmuudella tarjolla.
- ✅ Arvontamuisti korttipakkana: turnaukset jaetaan sekoitetusta pakasta, joka säilyy selaimessa draftista toiseen. Kaikki turnaukset tulevat vastaan ennen kuin mikään toistuu. Juuri nähdyt menevät uuden pakan loppuun. Kaksosjoukkueet (MM 2022 ja OL 2022, WC 2004 ja OL 2006) eivät tule samaan draftiin.
- Simulaatio: peräkkäisten draftien yhteiset turnaukset 2,4 → 0. Joka toisen draftin yhteiset 2,4 → 3. Kolmen draftin aikana jaetaan 18 turnausta, joten 15 turnauksella vähintään 3 toistuu aina. Tämä korjaantuu vain lisäämällä joukkueita (25 joukkueella toistoa ei tarvitse olla ollenkaan).
- Selänteen saatavuus ei muuttunut (98 %), koska hän on 6 joukkueessa 15:stä. Tarvitaan erillinen ratkaisu, ks. alla.

- ✅ Lepovuoro (25.11.2026): edellisen valmiin draftin kuusi pelaajaa näkyvät seuraavassa draftissa harmaina merkinnällä "Lepovuorossa", eikä heitä voi valita. Ohjeissa on oma rivinsä.
- Käyttäjän varsinainen toive on **turnauskohtainen huippukunto** (realismi): pelaajan arvio riippuu iästä ja kunnosta kyseisessä turnauksessa, esim. Selänne 1998 vs. 2014. Lepovuoro on välivaihe. Vaatii syntymävuodet ja ikäkäyrän tai arvion per turnaus.
- Kultasuonet tarkistetaan nimistä, ei siitä turnauksesta, josta pelaaja valittiin. Kultaketju 1995 (Saku Koivu, Lehtinen, Peltonen) ja MM 1995 -kultajoukkue syntyvät, vaikka pelaajat tulisivat eri turnauksista (he ovat yhdessä myös OL 1998, WC 2004, OL 2006 ja OL 2010 -joukkueissa). Käyttäjän mielestä tämä on oikein: vuoden 1995 kuntoa ei vaadita. Kun huippukunto tulee, kultasuonet pysyvät nimipohjaisina.
- Saman turnauksen toistumista samassa draftissa ei tarvita kultaketjun takia. Voidaan harkita myöhemmin pienellä todennäköisyydellä, jos halutaan muuten.

- ✅ Mitalijoukkueet lisätty (25.11.2026): 15 → 27 turnausta. Uudet: OL 1988 (hopea), MM 1992, 1994 (hopea), OL 1994 (pronssi), MM 1998, 1999 (hopea), MM 2000 (pronssi), MM 2001 (hopea), MM 2006, 2008 (pronssi), MM 2014, 2021 (hopea). Lähteet ja sivut on merkitty tiedostoon data/tournaments.py. 59 uutta pelaajaa karkeilla arvioilla (75–80), joita kannattaa tarkistaa.
- Kaksosparit (yli 2/3 samoja pelaajia): MM 1994 / OL 1994, OL 1994 / MM 1995, MM 1994 / MM 1995, WC 2004 / OL 2006, MM 2022 / OL 2022.
- Simulaatio (ahne paras valinta, 1500 draftia): keskivahvuus 89,0 → 88,4, MM-kulta 12 % → 10 %. Uudet joukkueet ovat vähemmän tähtivoittoisia, joten peli vaikeutui hieman. Ei viritetty.
- Selänne on nyt 8 joukkueessa 27:stä ja silti tarjolla noin 91 %:ssa drafteista (ilman lepovuoroa). Turnauskohtainen huippukunto on edelleen se varsinainen ratkaisu.
- Puuttuvia mitaleita/kisoja voi lisätä myöhemmin (esim. MM 2023–2026, World Cup 1996, OL 2018).

- ✅ Turnauskohtainen kunto (25.11.2026): syntymäajat Wikidatasta (kaikki 283), pelaajan arvio = huipputaso + ikäkäyrä turnauksen ajankohtana. Kenttäpelaajat huipussaan 24–31 v, maalivahdit 27–34 v; nuorempi −1/v, vanhempi −(0,5x + 0,06x²). Kortissa näkyy ikä. Aikakausiarvonnassa käytetään huipputasoa. Esim. Selänne: KC 1991 93, OL 1998 96, OL 2010 87, OL 2014 80.
- MM 2006:n Mikko Lehtonen on eri henkilö (puolustaja, s. 1978) kuin 2019–2022 pelannut, ja hän on nyt oma pelaajansa.
- Vaikeus: keskivahvuus laski 1,6, joten CONFIG.offset 2 → 0,4. Kullan todennäköisyys pysyi noin 8 %:ssa (ahne valinta, 2500 draftia).
- ✅ Poikkeuslista (25.11.2026, STANDOUT game-core.js:ssä): englanninkielisen Wikipedian turnaussivujen palkinnot ja tilastot kaikista 27 turnauksesta. A = IIHF:n paras pelaaja/pelipaikka, MVP tai tähdistökenttä → ikävähennyksestä jää 25 %. B = pistepörssin top 10 tai torjuntaprosentin top 5 → jää 50 %. Kortissa ★ Turnauksen tähti / Pistekärki / Torjuntakärki. Esim. Selänne OL 2014 80 → 92, OL 2006 92 → 95, Laine MM 2016 82 → 87, Koivu MM 1995 88 → 91.
- Aukot: MM 1998, 1999, 2000 ja 2001 -sivuilla ei ole palkintoja eikä tilastoja (voisi hakea IIHF:n arkistosta). OL 1988, 1994 ja 1998 sivuilla ei ole torjuntatilastoja, MM 2014:n torjuntataulukko jäi lukematta, MM 2011:n tähdistöstä luettiin vain osa.
- Vaikeus viritetty uudelleen: offset 0,7.

## 17. Testaajien palaute ja päätökset (2026-11-26)
Palaute: peli on vaikea (ensimmäinen kulta noin 40 kauden jälkeen), arvot tuntuvat alhaisilta ikäkäyrän jälkeen, MM 2011 -kultajoukkue on heikko, MM-vastustajat toistuvat, muut kentät tuntuvat vaikuttavan tulokseen epäreilusti. Kaverit: entinen ammattilainen piti hauskana; opettaja ymmärsi pelin tutoriaalin jälkeen; palvelumuotoilija koki tuloksen satunnaiseksi ja kaipasi vastustajaa (haaste kaverille).

Havainnot (simulaatio 26.11.2026):
- Muut kentät eivät vaikuta otteluiden tulokseen lainkaan, vain maalintekijöihin ja jäähyihin. Ongelma on esitystavassa.
- Oikeat kultajoukkueet ovat pelissä alakastissa: paras kenttä MM 1995 86,7, MM 2022 85,2, MM 2011 83,5, OL 2022 ja MM 2019 82,1 (kulta 1–5 %). WC 2004 92,9 ja OL 2006 91,4 ovat vahvimmat.
- Kulta joukkueen vahvuuden mukaan: 86 → 3 %, 88 → 11 %, 90 → 26 %, 92 → 44 %.

Päätökset:
- **Tavoitevaikeus:** hyvä draft (vahvuus noin 89) voittaa MM-kullan noin joka 8. kausi (~12 %). Keinot: tuuria hieman vähemmän (spread), kultajoukkuekemia isommaksi (+0,7 → noin +1,5), offset viritetään simuloiden. Ei keksittyjä bonuksia; STANDOUT-aukot täytetään lähteistä.
- **Muut kentät:** taitettu rivi "Muut kentät · eivät vaikuta tulokseen", avautuu napautuksella. Valitaan pelaajan turnausjoukkueista ilman yli 90:n tähtiä.
- **Kauden ennuste** ennen kautta (vahvuus + kullan todennäköisyys).

Järjestys: 1) ennuste ja muut kentät, 2) vaikeuden viritys, 3) EHT-palkinnot (osaturnausvoitot ja kokonaisvoitto ennätyskorttiin), 4) päivän haaste ja haastelinkki. Myöhemmin: MM-vastustajien kauden kunto, STANDOUT-aukot, karkeiden arvioiden tarkistus, "Pelaa sama joukkue 100 kertaa". Ei nyt: vaikeustasot, palvelimellinen tulostaulukko, automaattinen loppudraft.

Toteutettu 26.11.2026:
- ✅ Kauden ennuste (vahvuus, kulta, mitali, puolivälierä; 3 000 kauden simulaatio kiinteällä siemenellä) ja ennuste tulossivulla. Muut kentät taitettuna rivinä, valitaan draftin turnausjoukkueista, ei yli 90:n pelaajia.
- Vaikeuden tarkennus: 600 ahneen draftin mediaani oli 88,6 ja kulta 89:llä noin 17 %, eli huolellinen pelaaja oli jo tavoitteen yläpuolella. Turhautuminen johtui sumennetuista arvoista (joukkueet alle 87:n, kulta 1–4 %). Kultajoukkuekemia syntyi 13 %:ssa drafteista, lähes aina MM 1995 tai MM 2022; MM 2011 kerran 800:sta, joten kemian kasvattaminen ei olisi auttanut 2011:tä.
- ✅ Kultavire: kultaa voittaneen turnausjoukkueen pelaaja saa siitä turnauksesta +2 (◆ Kultavire kortissa, ohjeissa oma rivi). MM 2011:n paras kenttä 83,5 → 85,5.
- ✅ Finaalin vastustaja +2 (vain kultaan). offset 0,7 → 0,6. Tulos: vahvuus 89 → kulta noin 12 %, mitali noin 63 %; 86 → kulta 2–3 %; 92 → noin 34 %.
- Seuraavaksi: vastustajien kauden kunto ennusteeseen ja tappion selitys (esim. "Välierä: Ruotsi 90 vs. Suomi 88"), jotta tappiolla on näkyvä syy. Sitten EHT-palkinnot ja päivän haaste.
- Testipalaute 26.11.2026 klo 11: prosentit tuntuivat kylmiltä (hopea 2 %:n kultaennusteella ei tuntunut juhlalta), kultaviren vaikutusta ei huomannut, MM-alkusarjan uusin ottelu jäi alimmaksi.
- ✅ Uusin ottelu ensimmäisenä myös vaiheen sisällä (ottelu kerrallaan).
- ✅ Ennuste → "Kauden odotus": sanallinen tavoite, todennäköisyydet napautuksen takana. Tulossivulla vertailu odotukseen: Yli odotusten / Odotusten mukainen / Suosikki lunasti paikkansa / Alle odotusten (30 %:n hännät tulosjakaumasta).
- ✅ Kultavire +4, näkyy kaukalossa ◆ ja vahvuuden alla sirussa ("◆ Kultavire: Granlund, Olkinuora +1.6"). offset 0,9: ahneen draftin mediaani 89,5, kulta noin 12 %.
- Ei tehdä: hopea- ja pronssivire (23/27 turnauksesta on mitalijoukkueita, vire nostaisi vain kokonaistasoa).
- Iso idea, vaiheittain: hahmot (keksittyjä, ei oikeita henkilöitä): 1) kapteeni/valmentaja ennen ja jälkeen kauden, 2) selostaja ottelukortteihin, 3) mentori ja kriitikko draftiin, 4) nemesis = vastustajan valmentaja, liittyy vastustajien kauden kuntoon.
- ✅ Kultavire näytetään kerran pelaajalistan yläpuolella (vire koskee aina koko turnausjoukkuetta, korttikohtainen merkki toisti samaa), kaukalossa kultainen kehys. Jakokuvassa ja kopioitavassa tekstissä suhde odotukseen ("YLI ODOTUSTEN · ennakko: mitalikandidaatti").

### 17.x Vastustajien vire ja kauden ratkaisu (toteutettu 26.11.2026)
- Jokainen maa saa kaudeksi vireen −3…+3 (painot 1-2-3-4-3-2-1, keskiarvo 0). Arvotaan draftin alussa, näkyy ennusteessa ("Vastustajien vire": vain kärkimaat, |vire| ≥ 2). Ennuste lasketaan kauden vireillä.
- Simulointi: kultaprosentti ei muutu (89,5 → n. 13 %), mutta saman joukkueen ennuste vaihtelee kausittain 5–20 %.
- Ottelukortissa ja seuraavan ottelun kohdalla: "Joukkueiden vahvuus: Suomi 87.4 · Kanada 92 (vire +2, finaali +2)" + voittomahdollisuus ja sanallinen tulkinta (Odotettu / Tasaisen ottelun / Yllätys- voitto tai tappio; rajat 35 % ja 55 %).
- Yhteenvedossa "Kauden ratkaisu": viimeinen pudotuspeliottelu, tai alkusarjassa jääneillä kirvelevin tappio (suurin voittomahdollisuus).
- Sanalliset tulkinnat ovat pohja tuleville hahmoille (selostaja, kriitikko).

### 17.y EHT-palkinnot (toteutettu 26.11.2026)
- Osaturnauksille oikeat nimet: Karjala Cup, Swiss Ice Hockey Games, Beijer Hockey Games, Czech Hockey Games (lähde: Wikipedia, Euro Hockey Tour).
- Muiden maiden keskinäiset ottelut simuloidaan (samat vahvuudet ja kauden vireet, ilman Suomen offsetia). Pisteet 3/2/1, tasapisteissä maaliero ja tehdyt maalit.
- Ottelu kerrallaan: turnauksen päätyttyä ilmoitus sijoituksesta ja voittajasta, viimeisen jälkeen EHT:n lopputulos. Otsikkorivin sijoitusta napauttamalla avautuu turnauksen taulukko ja muut ottelut.
- Yhteenvedossa EHT-osio (mestaruus / sijoitus, turnaussijoitukset, kokonaistaulukko). Ennätyskorttiin, jakokuvaan ja kopioitavaan tekstiin rivi "EHT-mestari · x/4 turnausvoittoa" tai "Turnausvoitot: …". Ennätyksen laskenta ei muutu.
- Simulointi: vahvuus 89,5 → EHT-mestari noin 50 %, turnausvoittoja keskimäärin 1,7; 86 → 8 %; 91 → 72 %. MM-kulta ennallaan.

### 17.z Tähtivire, kiinteä arvontarivi ja MM-ilmoitukset (toteutettu 26.11.2026)
- Tähtivire: STANDOUT A (IIHF:n palkinto, tähdistökenttä) +2, B (pistekärki, torjuntakärki) +1, kultavireen päälle. Aiemmin tähti hyötyi vain pienemmästä ikävähennyksestä, joten parhaassa iässä oleva tähti ei saanut mitään. Kortissa "★ Turnauksen tähti +2", kaukalossa ★ pelipaikan vieressä, siru "★ Tähtivire: … +x".
- Tasapaino: ahneen draftin mediaani 89,5 → 90,0 ja kulta 14,6 → 19 %. offset 0,9 → 1,4 palauttaa kullan noin 15 %:iin. Tähdet ohittava draft on hieman aiempaa vaikeampi.
- Kiinteä arvontarivi kaukalon yläpuolella (turnaus, kierros, ↻ arvo uusi, ↶ kumoa, ?). Näkyy, kun sivun oma arvontaotsikko on vieritetty pois. Arvonnan aikana turnaus piilossa.
- MM-ilmoitukset ottelu kerrallaan: alkusarjan jälkeen (pisteet, jatkoon / ei, puolivälierän vastustaja ja vahvuus), puolivälierän ja välierän jälkeen (tulos ja seuraava vastustaja), finaalin ja pronssiottelun jälkeen. Pohja selostajahahmolle.

## 18. Tiekartta ja pikkuideat (26.11.2026)
Lopputavoite: sovelluskauppapeli. Kerrokset: ydinsilmukka → tavoitteet (syy kokeilla eri kokoonpanoja) → pelaaja-albumi (pitkä edistyminen) → sosiaalinen (päivän haaste, haastelinkki, myöhemmin tulostaulukot) → live-ops (viikkoteemat). Hahmot ovat tavoitteiden ja tarinan jakelukanava. Palvelin vasta, kun mittarit näyttävät paluuta.

Ehdotettu järjestys: 1) päivän haaste ja haastelinkki, 2) tavoitteet, 3) pelaaja-albumi, 4) ensimmäinen hahmo, 5) viikkoteemat, 6) palvelin.

Pikkuidea (ei vaadi keskustelua): pelaaja-albumissa näkyy **yleisin kentällisesi** ("näitä kavereita olet peluuttanut eniten"). Mentori voi neuvoa, miten valintoja voi tehdä toisin, jotta menestystä tulee.

Oikeudet: oikeat pelaajanimet ovat pelin ydin (keksityillä nimillä ei järkeä). Nimi-, tavaramerkki- ja persoonaoikeudet tarkistetaan IPR-juristilta ennen kaupallista julkaisua.

### 18.1 Päivän haaste, vaihe 1 (toteutettu 26.11.2026)
- Kaikki saavat samana päivänä samat kuusi turnausta, saman "Arvo uusi" -vaihtoehdon kullekin kierrokselle ja samat vastustajien vireet (siemen päivämäärästä, ei palvelinta).
- Sama kenttä saa saman kauden (siemen päivä + kenttä), joten ero syntyy valinnoista.
- Haasteessa arvontatapa on turnaus ja lepovuoro ei ole käytössä; haaste ei vaikuta lepovuoroon eikä arvontapakkaan.
- Ensimmäinen pelattu kausi on päivän tulos (tallessa selaimessa 14 päivää), sen jälkeen harjoituskierroksia.
- Kutsu draftin alussa (ennen ensimmäistä valintaa) ja yhteenvedon lopussa. Jakokuvassa ja tekstissä "Päivän haaste 26.11.".
- GoatCounter-tapahtumat: haaste-aloitettu, haaste-pelattu, haaste-harjoitus.
- Vaihe 2: haastelinkki ja vertailu kaverin tulokseen.

## 19. Kilpailijatutkimus: saman kategorian draft-pelit (kirjattu 26.11.2026)
Rajaus: verrataan vain 17-0- ja 82-0-tyyppisiin draft-peleihin (arvottu joukkue tai aikakausi → kaikkien aikojen kokoonpano → simuloitu kausi). Konamin ja EA:n lisensoidut korttipelit (eFootball, FC Mobile) ja managerit (Top Eleven ym.) jätetään pois, koska emme kilpaile niiden kanssa.

Tutkittavat pelit:
- **38-0** (38-0.app, Englannin pääsarja): sivun mukaan yli 5,4 M pelaajaa, ilmainen, tuotto mainoksista. Selaimessa sekä App Storessa ja Google Playssa.
- **PerThirtySix 17-0** (NFL): yli 100 000 pelikertaa ensimmäisen viikon aikana (kesäkuu 2026). Selaimessa sekä iPhonella ja Androidilla.
- **20-0: Sports Draft Legends** (iOS, 10 lajia): 4,8 tähteä ja 6,7 k arviota. Tuotto tukijatilauksesta (5,99 $/kk, 47,99 $/v), kausipassista (11,99 $), pelivaluuttapaketeista ja palkituista videomainoksista.
- **The Perfect Season** (runthe.gg, NFL): pelkkä selainpeli, palkkakatto 140 M$.
- **All-Timers: 17-0 & 82-0 Draft** ja **Football Draft Game: 17-0** (Android): latausmäärät selvittämättä.
- Alkuperä: NBA 82-0, joka lähti TikTok- ja Instagram-trendistä.

Mitä tutkitaan jokaisesta: ydinsilmukka, päivän haaste ja jakaminen, ansaintamalli, tavoitteet ja edistyminen, sovelluskauppaversion ero selainversioon sekä oikeuksien käsittely.

### 19.1 Oikeudet: miten kilpailijat toimivat (havainnot 26.11.2026)
- Kaikki käyttävät **oikeita pelaajien ja seurojen nimiä ilman lisenssiä**.
- Useimmilla on vastuuvapauslauseke, esimerkiksi "itsenäinen fanipeli, ei yhteydessä liigaan, seuroihin tai pelaajayhdistykseen". 20-0 lisää, että nimiä käytetään vain tunnistamiseen. The Perfect Season mainitsee erikseen NFLPA:n.
- 38-0 ilmoittaa, ettei se käytä logoja, seurojen vaakunoita, pelaajakuvia eikä muuta virallista brändäystä. PerThirtySix 17-0 käyttää NFL-joukkueiden logoja ja kypäräkuvia, mikä on riskialttein ratkaisu.
- Yhdysvalloissa tukena on C.B.C. v. MLB Advanced Media (2007): fantasiapeli sai käyttää pelaajien nimiä ja tilastoja, koska sananvapaus voitti persoonaoikeuden. Suomea ja EU:ta tämä ei koske.
- Johtopäätös: nimet kyllä, logot, vaakunat, pelipaidat ja pelaajakuvat ei. Vastuuvapauslauseke näkyviin.

### 19.2 Olympia-sanat
- Olympiasymbolit, -nimet ja -tunnisteet ovat KOK:n omaisuutta (olympiaperuskirjan sääntö 7). Nairobin sopimus velvoittaa jäsenmaat kieltämään olympiasymbolin kaupallisen käytön ilman KOK:n lupaa. Suomen jäsenyyttä ei ole tarkistettu. KOK valvoo käyttöä aggressiivisesti, ja sovelluskaupoista on poistettu sovelluksia olympia-sanojen takia.
- Pelissä esiintyy nyt sanoja Olympialaiset, Olympiakulta, Olympiahopea ja Olympiapronssi (game-core.js, data/tournaments.py, index.html). Ne kuvaavat tosiasiallisia turnauksia ja mitaleja. Riski on pienempi kuin nimessä tai markkinoinnissa, mutta ei nolla.
- Linja ennen sovelluskauppaa:
  - Ei olympiasanoja sovelluksen nimessä, kuvauksessa, hakusanoissa, kuvakaappauksissa eikä mainonnassa.
  - Ei renkaita eikä olympialogoja.
  - Pelin sisäinen tosiasiallinen maininta ("Olympiahopea 1988") mahdollisesti sallittu. Varmistetaan juristilta.
  - Varavaihtoehto: "Talvikisat" tai pelkkä paikka ja vuosi ("Nagano 1998", "Torino 2006").
- **"Leijonat" on Jääkiekkoliiton rekisteröimä tavaramerkki** (EUIPO, todettu 26.11.2026). Se on pelin nimessä, joten se on olympiasanoja tärkeämpi.
  - Vielä tarkistettavaa: kattaako rekisteröinti luokat 9 (sovellukset) ja 41 (viihde ja pelit), ja onko merkki sana- vai kuviomerkki.
  - Ennen sovelluskauppaa nimi vaihdetaan ilman sanaa Leijonat, ellei Jääkiekkoliiton kanssa sovita toisin. Myös sovelluksen nimi, kuvake, kuvaus ja hakusanat pidetään puhtaina.
  - Pelin sisällä "Suomi" ja "Suomen maajoukkue" ovat turvallisia kuvaavia ilmauksia.
  - Kaksi vaihtoehtoa: lisenssi tai yhteistyö Jääkiekkoliiton kanssa (toisi myös näkyvyyttä) tai oma nimi.
  - Selainversio (GitHub Pages, ilmainen fanipeli) on pienempi riski kuin kaupallinen sovellus, mutta nimi kannattaa vaihtaa jo ennen kuin peli kasvaa.
