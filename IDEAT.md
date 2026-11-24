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
