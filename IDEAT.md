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
2. Arvonta-animaatio (turnaus/aikakausi pyörii kuin ruletti) samassa näkymässä, ei sivunvaihtoja. ✅ Osa: puhelimessa pieni kaukalo pysyy ylhäällä ja lista vierii sen alla (versio d6e328a).
3. Kumoa viimeisin valinta.
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
7. Arviot sumennettuina oletuksena, napautus paljastaa (korvaa helppo tila -valintaruudun). Arvon selitys napautuksella.
8. Välitön palaute: valittu kortti korostuu heti, lista päivittyy animaatiolla, ei viiveitä.
9. Vinkkilaatikko ennen ensimmäistä draftia (3–4 vinkkiä).
