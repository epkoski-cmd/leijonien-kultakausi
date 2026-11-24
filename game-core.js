// Leijonien kultakausi — pelaajadata ja simulaatio (ei DOM-riippuvuuksia, testattavissa nodella)
(function (root) {
  'use strict';

  const ERAS = {
    '80': '70–80-luku',
    '90': '1990-luku',
    '00': '2000-luku',
    '10': '2010-luku',
    '20': '2020-luku',
  };

  // p = pääpelipaikka, a = muut luontevat paikat, r = arvio (tekijän näkemys), e = aikakaudet, h = vihje
  const P = (n, p, a, r, e, h) => ({ n, p, a, r, e, h });
  const PLAYERS = [
    // Maalivahdit
    P('Urpo Ylönen', 'G', [], 77, ['80'], 'Leijonien ykkösvahti 70-luvulla'),
    P('Jorma Valtonen', 'G', [], 76, ['80'], 'Olympiakisojen konkari'),
    P('Hannu Kamppuri', 'G', [], 78, ['80'], 'Kanada-cupin torjuja'),
    P('Jukka Tammi', 'G', [], 80, ['80', '90'], 'Ilveksen legenda, MM-hopea 1992'),
    P('Jarmo Myllys', 'G', [], 83, ['80', '90'], 'MM-kulta 1995'),
    P('Ari Sulander', 'G', [], 81, ['90', '00'], 'Zürichin ikoni, MM-hopea 2001'),
    P('Miikka Kiprusoff', 'G', [], 92, ['00', '10'], 'Vezina 2006'),
    P('Kari Lehtonen', 'G', [], 85, ['00', '10'], 'NHL-varaus nro 2 vuonna 2002'),
    P('Niklas Bäckström', 'G', [], 86, ['00', '10'], 'Jennings 2007'),
    P('Vesa Toskala', 'G', [], 80, ['00'], 'San Josen ja Toronton torjuja'),
    P('Pekka Rinne', 'G', [], 91, ['10'], 'Vezina 2018'),
    P('Tuukka Rask', 'G', [], 92, ['10'], 'Vezina 2014, Sotšin olympiapronssi'),
    P('Antti Niemi', 'G', [], 84, ['10'], 'Stanley Cup 2010'),
    P('Kevin Lankinen', 'G', [], 82, ['10', '20'], 'MM-kulta 2019'),
    P('Juuse Saros', 'G', [], 91, ['10', '20'], 'Nashvillen pieni jättiläinen'),
    P('Harri Säteri', 'G', [], 84, ['20'], 'Olympiakulta 2022'),
    P('Jussi Olkinuora', 'G', [], 82, ['20'], 'MM-kulta 2022'),
    P('Ukko-Pekka Luukkonen', 'G', [], 84, ['20'], 'Buffalon ykkösvahti'),
    P('Markus Mattsson', 'G', [], 76, ['80'], 'WHA:n ja NHL:n torjuja'),
    P('Sakari Lindfors', 'G', [], 78, ['80', '90'], 'HIFK:n legenda'),
    P('Pasi Nurminen', 'G', [], 78, ['90', '00'], 'Atlantan ykkösvahti'),
    P('Jussi Markkanen', 'G', [], 79, ['90', '00'], 'Edmontonin finaalivahti 2006'),
    P('Antero Niittymäki', 'G', [], 83, ['00', '10'], 'Torinon olympiaturnauksen paras pelaaja 2006'),
    P('Fredrik Norrena', 'G', [], 79, ['00'], 'Columbuksen torjuja'),
    P('Antti Raanta', 'G', [], 85, ['10', '20'], 'Carolinan ja Arizonan torjuja'),
    P('Joonas Korpisalo', 'G', [], 82, ['10', '20'], '85 torjuntaa yhdessä pudotuspeliottelussa'),
    P('Ville Husso', 'G', [], 81, ['20'], 'St. Louisin ja Detroitin torjuja'),

    // Puolustajat
    P('Pekka Rautakallio', 'D', [], 84, ['80'], 'WHA:n ja Flamesin luottopakki'),
    P('Reijo Ruotsalainen', 'D', [], 86, ['80'], 'Stanley Cup Edmontonissa'),
    P('Hannu Virta', 'D', [], 79, ['80'], 'Buffalon hyökkäävä pakki'),
    P('Kari Eloranta', 'D', [], 77, ['80'], 'Kanada-cupin 1981 kärkipakki'),
    P('Jyrki Lumme', 'D', [], 83, ['80', '90'], 'Vancouverin pakkitykki'),
    P('Timo Jutila', 'D', [], 82, ['80', '90'], 'MM-kulta 1995, kapteeni'),
    P('Teppo Numminen', 'D', [], 87, ['80', '90', '00'], 'Yli 1300 NHL-ottelua'),
    P('Marko Kiprusoff', 'D', [], 79, ['90', '00'], 'MM-kulta 1995'),
    P('Janne Niinimaa', 'D', [], 83, ['90', '00'], 'Flyersin ja Oilersin syöttäjä'),
    P('Petteri Nummelin', 'D', [], 81, ['90', '00'], 'MM-kulta 1995, ylivoiman taituri'),
    P('Kimmo Timonen', 'D', [], 90, ['90', '00', '10'], 'Stanley Cup 2015'),
    P('Sami Salo', 'D', [], 85, ['00', '10'], 'Vancouverin lyöntipakki'),
    P('Toni Lydman', 'D', [], 82, ['00', '10'], 'Torinon olympiahopea 2006'),
    P('Joni Pitkänen', 'D', [], 83, ['00', '10'], 'Liikkuva pakki Flyersista'),
    P('Ossi Väänänen', 'D', [], 80, ['00'], 'Kova kotipään pakki'),
    P('Sami Vatanen', 'D', [], 81, ['10'], 'Anaheimin pelinrakentaja'),
    P('Olli Määttä', 'D', [], 80, ['10'], 'Kaksi Stanley Cupia Pittsburghissa'),
    P('Mikko Lehtonen', 'D', [], 80, ['10', '20'], 'MM-kulta 2019 ja 2022'),
    P('Rasmus Ristolainen', 'D', [], 82, ['10', '20'], 'Isokokoinen raskaan työn pakki'),
    P('Esa Lindell', 'D', [], 85, ['10', '20'], 'Dallasin luotettavin puolustaja'),
    P('Miro Heiskanen', 'D', [], 94, ['10', '20'], 'Sukupolven puolustaja'),
    P('Juuso Välimäki', 'D', [], 79, ['20'], 'Kiekollinen nykypakki'),
    P('Niko Mikkola', 'D', [], 81, ['20'], 'Stanley Cup 2025'),
    P('Heikki Riihiranta', 'D', [], 78, ['80'], 'WHA-pakki Winnipegissä'),
    P('Pekka Marjamäki', 'D', [], 79, ['80'], 'Tapparan pakkilegenda'),
    P('Risto Siltanen', 'D', [], 80, ['80'], 'Pieni mies, kova laukaus'),
    P('Timo Blomqvist', 'D', [], 77, ['80'], 'Washingtonin puolustaja'),
    P('Tapio Levo', 'D', [], 78, ['80'], 'NHL-pakki Coloradosta New Jerseyhin'),
    P('Ville Siren', 'D', [], 78, ['80', '90'], 'Pittsburghin ja Minnesotan pakki'),
    P('Janne Laukkanen', 'D', [], 79, ['90', '00'], 'Ottawan ja Pittsburghin pakki'),
    P('Mika Strömberg', 'D', [], 78, ['90', '00'], 'Jokerien mestaripakki'),
    P('Aki-Petteri Berg', 'D', [], 79, ['90', '00'], 'Kingsin ja Leafsin pakki'),
    P('Jani Hakanpää', 'D', [], 80, ['10', '20'], 'Isokokoinen tankki'),
    P('Henri Jokiharju', 'D', [], 80, ['10', '20'], 'Buffalon liikkuva pakki'),
    P('Urho Vaakanainen', 'D', [], 77, ['20'], 'Ykköskierroksen varaus Bostoniin'),
    P('Ville Heinola', 'D', [], 77, ['20'], 'Winnipegin ykköskierroksen varaus'),

    // Hyökkääjät
    P('Veli-Pekka Ketola', 'C', ['RW'], 81, ['80'], 'WHA-tähti Winnipegissä'),
    P('Lasse Oksanen', 'C', ['LW'], 80, ['80'], 'Ilveksen ja Leijonien maalitykki'),
    P('Matti Hagman', 'C', [], 80, ['80'], 'Bostonin ja Oilersin sentteri'),
    P('Mikko Leinonen', 'C', [], 78, ['80'], 'Rangersin pudotuspelisankari'),
    P('Ilkka Sinisalo', 'LW', ['RW'], 78, ['80'], 'Flyersin maalintekijä'),
    P('Raimo Summanen', 'LW', [], 78, ['80'], 'Nopea Edmontonin laituri'),
    P('Jari Kurri', 'RW', ['LW'], 95, ['80', '90'], '601 NHL-maalia, viisi Stanley Cupia'),
    P('Esa Tikkanen', 'LW', ['RW'], 87, ['80', '90'], 'Viisi Stanley Cupia'),
    P('Christian Ruuttu', 'C', [], 81, ['80', '90'], 'Buffalon taitava keskushyökkääjä'),
    P('Raimo Helminen', 'C', [], 82, ['80', '90'], 'Eniten maaotteluita Leijonissa'),
    P('Esa Keskinen', 'C', [], 80, ['80', '90'], 'MM-kulta 1995, syöttäjä'),
    P('Mika Nieminen', 'C', ['LW'], 79, ['90'], 'MM-kulta 1995'),
    P('Saku Koivu', 'C', [], 92, ['90', '00', '10'], 'MM-kulta 1995, Montrealin kapteeni'),
    P('Jere Lehtinen', 'RW', ['LW'], 88, ['90', '00'], 'Kolme Selke-palkintoa'),
    P('Ville Peltonen', 'LW', ['C'], 83, ['90', '00'], 'Hattutemppu MM-finaalissa 1995'),
    P('Teemu Selänne', 'RW', ['LW'], 96, ['90', '00', '10'], '76 maalia tulokaskaudella'),
    P('Sami Kapanen', 'RW', ['LW'], 84, ['90', '00'], 'Carolinan pikaluistelija'),
    P('Olli Jokinen', 'C', [], 85, ['00'], 'Olympiahopea 2006'),
    P('Mikko Koivu', 'C', [], 88, ['00', '10'], 'MM-kulta 2011, kapteeni'),
    P('Jussi Jokinen', 'LW', ['C'], 82, ['00', '10'], 'Rankkarikuningas'),
    P('Tuomo Ruutu', 'LW', ['C'], 83, ['00', '10'], 'Fyysinen kahden suunnan laituri'),
    P('Niklas Hagman', 'LW', [], 80, ['00'], 'Torinon olympiahopea 2006'),
    P('Niko Kapanen', 'C', [], 80, ['00'], 'Dallasin ja Leijonien luottosentteri'),
    P('Ville Nieminen', 'LW', [], 79, ['00'], 'Stanley Cup 2001'),
    P('Valtteri Filppula', 'C', ['LW'], 84, ['00', '10', '20'], 'Olympiakulta 2022, kapteeni'),
    P('Jarkko Immonen', 'C', [], 81, ['10'], 'MM-kulta 2011, turnauksen maalikuningas'),
    P('Petri Kontiola', 'C', [], 80, ['10'], 'KHL:n syöttökuningas'),
    P('Leo Komarov', 'LW', ['C'], 81, ['10'], 'Ärsyttävin vastustaja'),
    P('Mikael Granlund', 'C', ['RW'], 87, ['10', '20'], 'Ilmaveivi 2011'),
    P('Joel Armia', 'RW', [], 80, ['10', '20'], 'Montrealin kahden suunnan laituri'),
    P('Marko Anttila', 'C', ['RW'], 80, ['10', '20'], 'MM-kulta 2019, kapteeni'),
    P('Erik Haula', 'C', ['LW'], 81, ['10', '20'], 'Vegasin finaalisentteri 2018'),
    P('Patrik Laine', 'RW', ['LW'], 88, ['10', '20'], 'Varaus nro 2 vuonna 2016'),
    P('Teuvo Teräväinen', 'LW', ['RW'], 86, ['10', '20'], 'Stanley Cup 2015'),
    P('Sebastian Aho', 'C', ['LW'], 92, ['10', '20'], 'Carolinan ykköstähti'),
    P('Aleksander Barkov', 'C', [], 97, ['10', '20'], 'Stanley Cup -kapteeni, Selke'),
    P('Mikko Rantanen', 'RW', [], 94, ['10', '20'], 'Stanley Cup 2022'),
    P('Kaapo Kakko', 'RW', [], 82, ['10', '20'], 'MM-kulta 2019 18-vuotiaana'),
    P('Roope Hintz', 'C', [], 88, ['20'], 'Dallasin ykkössentteri'),
    P('Artturi Lehkonen', 'LW', ['RW'], 84, ['20'], 'Stanley Cupin ratkaisumaali 2022'),
    P('Anton Lundell', 'C', [], 83, ['20'], 'Kaksinkertainen mestari Floridassa'),
    P('Eeli Tolvanen', 'LW', [], 81, ['20'], 'Rannelaukauksen erikoismies'),
    P('Sakari Manninen', 'C', [], 80, ['20'], 'Olympiakulta 2022'),
    P('Juho Lammikko', 'C', [], 78, ['20'], 'MM-kulta 2022'),
    P('Harri Pesonen', 'RW', ['LW'], 78, ['20'], 'MM-kulta 2019 ja 2022'),
    P('Juhani Tamminen', 'C', ['RW'], 77, ['80'], 'WHA:ssa ja Leijonien kärjessä'),
    P('Jukka Porvari', 'RW', [], 77, ['80'], 'Colorado Rockiesin hyökkääjä'),
    P('Hannu Järvenpää', 'RW', [], 77, ['80'], 'Winnipegin hyökkääjä'),
    P('Petri Skriko', 'RW', ['LW'], 82, ['80', '90'], 'Vancouverin maalitykki'),
    P('Iiro Järvi', 'LW', [], 78, ['80', '90'], 'Quebecin hyökkääjä'),
    P('Janne Ojanen', 'C', [], 79, ['80', '90'], 'Tapparan taituri'),
    P('Antti Törmänen', 'RW', [], 78, ['90'], 'Ottawan ja Jokerien laituri'),
    P('Juha Ylönen', 'C', [], 78, ['90', '00'], 'NHL-sentteri Phoenixista'),
    P('Juha Lind', 'LW', [], 77, ['90', '00'], 'Dallasin laituri'),
    P('Tomi Kallio', 'LW', [], 77, ['00'], 'Atlantan laituri'),
    P('Jarkko Ruutu', 'RW', ['LW'], 79, ['00', '10'], 'Ärhäkkä ärsyttäjä'),
    P('Antti Miettinen', 'RW', [], 79, ['00', '10'], 'Minnesotan kahden suunnan laituri'),
    P('Ville Leino', 'LW', ['C'], 81, ['00', '10'], 'Flyersin finaaliputki 2010'),
    P('Lauri Korpikoski', 'LW', [], 79, ['00', '10'], 'Phoenixin kahden suunnan laituri'),
    P('Jori Lehterä', 'C', [], 80, ['10'], 'St. Louisin sentteri'),
    P('Teemu Hartikainen', 'LW', ['RW'], 79, ['10', '20'], 'Leijonien kahden suunnan konkari'),
    P('Joonas Donskoi', 'RW', [], 79, ['10', '20'], 'San Josen laituri'),
    P('Jesse Puljujärvi', 'RW', [], 80, ['10', '20'], 'Varaus nro 4 vuonna 2016'),
    P('Kasperi Kapanen', 'RW', [], 80, ['10', '20'], 'Toronton nopea laituri'),
    P('Saku Mäenalanen', 'LW', ['RW'], 78, ['10', '20'], 'Fyysinen kahden suunnan laituri'),
    P('Jesperi Kotkaniemi', 'C', [], 79, ['10', '20'], 'Varaus nro 3 vuonna 2018'),
    P('Joel Kiviranta', 'LW', [], 78, ['20'], 'Hattutemppu seitsemännessä ottelussa 2020'),
    P('Matias Maccelli', 'LW', [], 81, ['20'], 'Arizonan luova syöttäjä'),
    P('Juuso Pärssinen', 'C', [], 77, ['20'], 'Nashvillen keskushyökkääjä'),
    P('Konsta Helenius', 'C', [], 78, ['20'], 'Varaus nro 14 vuonna 2024'),
    // Turnauskokoonpanoista lisätyt pelaajat (arviot karkeita, hyökkääjien tarkka paikka ei tiedossa)
    P('Arto Javanainen', 'RW', ['LW', 'C'], 77, ['80'], 'Kanada-cup 1981'),
    P('Hannu Lassila', 'G', [], 75, ['80'], 'Kanada-cup 1981'),
    P('Jari Grönstrand', 'D', [], 76, ['80'], 'Kanada-cup 1987'),
    P('Jorma Sevon', 'RW', ['LW', 'C'], 76, ['80'], 'Kanada-cup 1981'),
    P('Jouko Narvanmaa', 'D', [], 75, ['80'], 'Kanada-cup 1987'),
    P('Juha Huikari', 'D', [], 75, ['80'], 'Kanada-cup 1981'),
    P('Juha Tuohimaa', 'D', [], 75, ['80'], 'Kanada-cup 1981'),
    P('Jukka Seppo', 'RW', ['LW', 'C'], 76, ['80'], 'Kanada-cup 1987'),
    P('Kari Jalonen', 'RW', ['LW', 'C'], 79, ['80'], 'Kanada-cup 1981'),
    P('Kari Makkonen', 'RW', ['LW', 'C'], 77, ['80'], 'Kanada-cup 1981'),
    P('Kari Takko', 'G', [], 78, ['80'], 'Kanada-cup 1987'),
    P('Markku Kiimalainen', 'RW', ['LW', 'C'], 75, ['80'], 'Kanada-cup 1981'),
    P('Markku Kyllönen', 'RW', ['LW', 'C'], 76, ['80'], 'Kanada-cup 1987'),
    P('Mikko Mäkelä', 'RW', ['LW', 'C'], 78, ['80'], 'Kanada-cup 1987'),
    P('Pekka Arbelius', 'RW', ['LW', 'C'], 76, ['80'], 'Kanada-cup 1981'),
    P('Raimo Hirvonen', 'D', [], 75, ['80'], 'Kanada-cup 1981'),
    P('Timo Nummelin', 'D', [], 76, ['80'], 'Kanada-cup 1981'),
    P('Arto Ruotanen', 'D', [], 77, ['90'], 'Kanada-cup 1991 (välierä)'),
    P('Erik Hämäläinen', 'D', [], 77, ['90'], 'MM-kulta 1995'),
    P('Jarmo Kekäläinen', 'RW', ['LW', 'C'], 76, ['90'], 'Kanada-cup 1991 (välierä)'),
    P('Kimmo Rintanen', 'RW', ['LW', 'C'], 78, ['90'], 'Olympiapronssi 1998'),
    P('Marko Palo', 'RW', ['LW', 'C'], 76, ['90'], 'MM-kulta 1995'),
    P('Markus Ketterer', 'G', [], 78, ['90'], 'Kanada-cup 1991 (välierä)'),
    P('Pasi Huura', 'D', [], 75, ['90'], 'Kanada-cup 1991 (välierä)'),
    P('Pekka Tirkkonen', 'RW', ['LW', 'C'], 76, ['90'], 'Kanada-cup 1991 (välierä)'),
    P('Tero Lehterä', 'RW', ['LW', 'C'], 76, ['90'], 'MM-kulta 1995'),
    P('Timo Peltomaa', 'RW', ['LW', 'C'], 77, ['90'], 'Kanada-cup 1991 (välierä)'),
    P('Tuomas Grönman', 'D', [], 75, ['90'], 'Olympiapronssi 1998'),
    P('Antti Laaksonen', 'RW', ['LW', 'C'], 78, ['00'], 'World Cup -hopea 2004, Olympiahopea 2006'),
    P('Antti-Jussi Niemi', 'D', [], 76, ['00'], 'Olympiahopea 2006'),
    P('Jari Viuhkola', 'RW', ['LW', 'C'], 77, ['00'], 'MM-hopea 2007'),
    P('Jukka Hentunen', 'RW', ['LW', 'C'], 77, ['00'], 'World Cup -hopea 2004, Olympiahopea 2006, MM-hopea 2007'),
    P('Jukka-Pekka Laamanen', 'D', [], 76, ['00'], 'MM-hopea 2007'),
    P('Lasse Kukkonen', 'D', [], 79, ['00', '10'], 'Olympiahopea 2006, MM-hopea 2007, Olympiapronssi 2010, MM-kulta 2011, Olympiapronssi 2014, MM-hopea 2016'),
    P('Mika Pyörälä', 'RW', ['LW', 'C'], 77, ['00', '10'], 'MM-hopea 2007, MM-kulta 2011, MM-hopea 2016'),
    P('Mikko Eloranta', 'RW', ['LW', 'C'], 77, ['00'], 'World Cup -hopea 2004'),
    P('Pekka Saravo', 'D', [], 76, ['00'], 'MM-hopea 2007'),
    P('Riku Hahl', 'RW', ['LW', 'C'], 76, ['00'], 'World Cup -hopea 2004'),
    P('Sean Bergenheim', 'RW', ['LW', 'C'], 80, ['00'], 'MM-hopea 2007'),
    P('Sinuhe Wallinheimo', 'G', [], 75, ['00'], 'MM-hopea 2007'),
    P('Timo Pärssinen', 'RW', ['LW', 'C'], 77, ['00'], 'MM-hopea 2007'),
    P('Toni Söderholm', 'D', [], 76, ['00'], 'MM-hopea 2007'),
    P('Tuukka Mäntylä', 'D', [], 76, ['00'], 'MM-hopea 2007'),
    P('Ville Koistinen', 'D', [], 77, ['00'], 'MM-hopea 2007'),
    P('Anssi Salmela', 'D', [], 77, ['10'], 'MM-kulta 2011, MM-hopea 2016'),
    P('Antti Pihlström', 'RW', ['LW', 'C'], 77, ['10'], 'MM-kulta 2011, Olympiapronssi 2014, MM-hopea 2016'),
    P('Arttu Ilomäki', 'RW', ['LW', 'C'], 75, ['10'], 'MM-kulta 2019'),
    P('Atte Ohtamaa', 'D', [], 79, ['10', '20'], 'MM-hopea 2016, MM-kulta 2019, MM-kulta 2022, Olympiakulta 2022'),
    P('Eetu Luostarinen', 'RW', ['LW', 'C'], 78, ['10'], 'MM-kulta 2019'),
    P('Jani Lajunen', 'RW', ['LW', 'C'], 77, ['10'], 'MM-kulta 2011, MM-hopea 2016'),
    P('Janne Lahti', 'RW', ['LW', 'C'], 76, ['10'], 'MM-kulta 2011'),
    P('Janne Niskala', 'D', [], 78, ['10'], 'Olympiapronssi 2010, MM-kulta 2011'),
    P('Janne Pesonen', 'RW', ['LW', 'C'], 77, ['10'], 'MM-kulta 2011'),
    P('Jarno Koskiranta', 'RW', ['LW', 'C'], 76, ['10'], 'MM-hopea 2016'),
    P('Jere Sallinen', 'RW', ['LW', 'C'], 77, ['10', '20'], 'MM-kulta 2019, MM-kulta 2022'),
    P('Jesse Joensuu', 'RW', ['LW', 'C'], 77, ['10'], 'MM-kulta 2011'),
    P('Juhamatti Aaltonen', 'RW', ['LW', 'C'], 78, ['10'], 'MM-kulta 2011, Olympiapronssi 2014'),
    P('Juhani Tyrväinen', 'RW', ['LW', 'C'], 76, ['10'], 'MM-kulta 2019'),
    P('Juuso Hietanen', 'D', [], 78, ['10', '20'], 'Olympiapronssi 2014, MM-hopea 2016, MM-kulta 2022, Olympiakulta 2022'),
    P('Jyrki Välivaara', 'D', [], 76, ['10'], 'MM-kulta 2011'),
    P('Kristian Kuusela', 'RW', ['LW', 'C'], 77, ['10'], 'MM-kulta 2019'),
    P('Miika Koivisto', 'D', [], 76, ['10'], 'MM-kulta 2019'),
    P('Mikko Koskinen', 'G', [], 81, ['10'], 'MM-hopea 2016'),
    P('Niko Hovinen', 'G', [], 75, ['10'], 'MM-kulta 2011'),
    P('Niko Ojamäki', 'RW', ['LW', 'C'], 76, ['10', '20'], 'MM-kulta 2019, Olympiakulta 2022'),
    P('Oliwer Kaski', 'D', [], 76, ['10'], 'MM-kulta 2019'),
    P('Pasi Puistola', 'D', [], 76, ['10'], 'MM-kulta 2011'),
    P('Petri Vehanen', 'G', [], 79, ['10'], 'MM-kulta 2011'),
    P('Petteri Lindbohm', 'D', [], 76, ['10', '20'], 'MM-kulta 2019, Olympiakulta 2022'),
    P('Petteri Nokelainen', 'RW', ['LW', 'C'], 77, ['10'], 'MM-kulta 2011'),
    P('Sakari Salminen', 'RW', ['LW', 'C'], 77, ['10'], 'Olympiapronssi 2014'),
    P('Sami Lepistö', 'D', [], 78, ['10'], 'Olympiapronssi 2010, MM-kulta 2011, Olympiapronssi 2014'),
    P('Teemu Lassila', 'G', [], 77, ['10'], 'MM-kulta 2011'),
    P('Teemu Pulkkinen', 'RW', ['LW', 'C'], 77, ['10'], 'MM-hopea 2016'),
    P('Tomi Sallinen', 'RW', ['LW', 'C'], 75, ['10'], 'MM-hopea 2016'),
    P('Tommi Kivistö', 'D', [], 75, ['10'], 'MM-hopea 2016'),
    P('Toni Rajala', 'RW', ['LW', 'C'], 78, ['10', '20'], 'MM-kulta 2019, MM-kulta 2022, Olympiakulta 2022'),
    P('Topi Jaakola', 'D', [], 76, ['10'], 'MM-kulta 2011, MM-hopea 2016'),
    P('Veini Vehviläinen', 'G', [], 77, ['10'], 'MM-kulta 2019'),
    P('Veli-Matti Savinainen', 'RW', ['LW', 'C'], 76, ['10'], 'MM-kulta 2019'),
    P('Ville Pokka', 'D', [], 78, ['10', '20'], 'MM-hopea 2016, MM-kulta 2022, Olympiakulta 2022'),
    P('Frans Tuohimaa', 'G', [], 77, ['20'], 'MM-kulta 2022, Olympiakulta 2022'),
    P('Hannes Björninen', 'RW', ['LW', 'C'], 76, ['20'], 'MM-kulta 2022, Olympiakulta 2022'),
    P('Iiro Pakarinen', 'RW', ['LW', 'C'], 77, ['20'], 'Olympiakulta 2022'),
    P('Jere Innala', 'RW', ['LW', 'C'], 77, ['20'], 'MM-kulta 2022'),
    P('Joonas Nättinen', 'RW', ['LW', 'C'], 76, ['20'], 'Olympiakulta 2022'),
    P('Markus Granlund', 'RW', ['LW', 'C'], 79, ['20'], 'Olympiakulta 2022'),
    P('Mikael Seppälä', 'D', [], 76, ['20'], 'MM-kulta 2022'),
    P('Miro Aaltonen', 'RW', ['LW', 'C'], 77, ['20'], 'Olympiakulta 2022'),
    P('Niklas Friman', 'D', [], 76, ['20'], 'MM-kulta 2022, Olympiakulta 2022'),
    P('Valtteri Kemiläinen', 'D', [], 76, ['20'], 'Olympiakulta 2022'),
  ];

  // Suomen turnauskokoonpanot (lähde: Wikipedian kokoonpanotaulukot, tarkistettu 2026-11-24)
  const TOURNAMENTS = [
    { id: "cc81", label: "Kanada-cup 1981", year: 1981, res: "", roster: ["Hannu Lassila", "Markus Mattsson", "Raimo Hirvonen", "Juha Huikari", "Tapio Levo", "Timo Nummelin", "Pekka Rautakallio", "Reijo Ruotsalainen", "Risto Siltanen", "Juha Tuohimaa", "Pekka Arbelius", "Matti Hagman", "Kari Jalonen", "Arto Javanainen", "Veli-Pekka Ketola", "Markku Kiimalainen", "Jari Kurri", "Mikko Leinonen", "Kari Makkonen", "Jukka Porvari", "Jorma Sevon", "Ilkka Sinisalo"] },
    { id: "cc87", label: "Kanada-cup 1987", year: 1987, res: "", roster: ["Jarmo Myllys", "Kari Takko", "Jukka Tammi", "Timo Blomqvist", "Jari Grönstrand", "Timo Jutila", "Jouko Narvanmaa", "Teppo Numminen", "Reijo Ruotsalainen", "Ville Siren", "Hannu Virta", "Matti Hagman", "Raimo Helminen", "Iiro Järvi", "Jari Kurri", "Markku Kyllönen", "Mikko Mäkelä", "Janne Ojanen", "Christian Ruuttu", "Jukka Seppo", "Petri Skriko", "Raimo Summanen", "Esa Tikkanen"] },
    { id: "cc91", label: "Kanada-cup 1991", year: 1991, res: "välierä", roster: ["Markus Ketterer", "Jarmo Myllys", "Jukka Tammi", "Kari Eloranta", "Pasi Huura", "Timo Jutila", "Janne Laukkanen", "Jyrki Lumme", "Teppo Numminen", "Arto Ruotanen", "Ville Siren", "Hannu Järvenpää", "Iiro Järvi", "Jarmo Kekäläinen", "Jari Kurri", "Janne Ojanen", "Timo Peltomaa", "Christian Ruuttu", "Teemu Selänne", "Petri Skriko", "Raimo Summanen", "Esa Tikkanen", "Pekka Tirkkonen"] },
    { id: "mm95", label: "MM 1995", year: 1995, res: "kulta", roster: ["Jarmo Myllys", "Ari Sulander", "Jukka Tammi", "Erik Hämäläinen", "Timo Jutila", "Marko Kiprusoff", "Janne Niinimaa", "Petteri Nummelin", "Mika Strömberg", "Hannu Virta", "Raimo Helminen", "Sami Kapanen", "Esa Keskinen", "Saku Koivu", "Tero Lehterä", "Jere Lehtinen", "Mika Nieminen", "Janne Ojanen", "Marko Palo", "Ville Peltonen", "Raimo Summanen", "Antti Törmänen", "Juha Ylönen"] },
    { id: "og98", label: "Olympialaiset 1998", year: 1998, res: "pronssi", roster: ["Jukka Tammi", "Ari Sulander", "Jarmo Myllys", "Kimmo Timonen", "Aki-Petteri Berg", "Tuomas Grönman", "Janne Laukkanen", "Jyrki Lumme", "Teppo Numminen", "Janne Niinimaa", "Teemu Selänne", "Esa Tikkanen", "Saku Koivu", "Raimo Helminen", "Antti Törmänen", "Ville Peltonen", "Jari Kurri", "Juha Lind", "Sami Kapanen", "Kimmo Rintanen", "Jere Lehtinen", "Juha Ylönen", "Mika Nieminen"] },
    { id: "wc04", label: "World Cup 2004", year: 2004, res: "hopea", roster: ["Miikka Kiprusoff", "Kari Lehtonen", "Vesa Toskala", "Aki-Petteri Berg", "Toni Lydman", "Janne Niinimaa", "Teppo Numminen", "Joni Pitkänen", "Sami Salo", "Kimmo Timonen", "Ossi Väänänen", "Mikko Eloranta", "Niklas Hagman", "Riku Hahl", "Jukka Hentunen", "Olli Jokinen", "Niko Kapanen", "Mikko Koivu", "Saku Koivu", "Antti Laaksonen", "Jere Lehtinen", "Ville Nieminen", "Ville Peltonen", "Jarkko Ruutu", "Tuomo Ruutu", "Teemu Selänne"] },
    { id: "og06", label: "Olympialaiset 2006", year: 2006, res: "hopea", roster: ["Fredrik Norrena", "Antero Niittymäki", "Niklas Bäckström", "Petteri Nummelin", "Kimmo Timonen", "Lasse Kukkonen", "Sami Salo", "Aki-Petteri Berg", "Teppo Numminen", "Toni Lydman", "Antti-Jussi Niemi", "Teemu Selänne", "Ville Nieminen", "Saku Koivu", "Olli Jokinen", "Niklas Hagman", "Ville Peltonen", "Mikko Koivu", "Antti Laaksonen", "Jukka Hentunen", "Jere Lehtinen", "Jussi Jokinen", "Jarkko Ruutu", "Niko Kapanen"] },
    { id: "mm07", label: "MM 2007", year: 2007, res: "hopea", roster: ["Kari Lehtonen", "Fredrik Norrena", "Sinuhe Wallinheimo", "Aki-Petteri Berg", "Ville Koistinen", "Lasse Kukkonen", "Jukka-Pekka Laamanen", "Tuukka Mäntylä", "Petteri Nummelin", "Pekka Saravo", "Toni Söderholm", "Sean Bergenheim", "Jukka Hentunen", "Tomi Kallio", "Niko Kapanen", "Mikko Koivu", "Petri Kontiola", "Jere Lehtinen", "Antti Miettinen", "Timo Pärssinen", "Ville Peltonen", "Mika Pyörälä", "Jarkko Ruutu", "Tuomo Ruutu", "Jari Viuhkola"] },
    { id: "og10", label: "Olympialaiset 2010", year: 2010, res: "pronssi", roster: ["Niklas Bäckström", "Miikka Kiprusoff", "Antero Niittymäki", "Lasse Kukkonen", "Sami Lepistö", "Toni Lydman", "Janne Niskala", "Joni Pitkänen", "Sami Salo", "Kimmo Timonen", "Valtteri Filppula", "Niklas Hagman", "Jarkko Immonen", "Olli Jokinen", "Niko Kapanen", "Mikko Koivu", "Saku Koivu", "Jere Lehtinen", "Antti Miettinen", "Ville Peltonen", "Jarkko Ruutu", "Tuomo Ruutu", "Teemu Selänne"] },
    { id: "mm11", label: "MM 2011", year: 2011, res: "kulta", roster: ["Niko Hovinen", "Teemu Lassila", "Petri Vehanen", "Topi Jaakola", "Lasse Kukkonen", "Sami Lepistö", "Janne Niskala", "Pasi Puistola", "Anssi Salmela", "Ossi Väänänen", "Jyrki Välivaara", "Juhamatti Aaltonen", "Mikael Granlund", "Jarkko Immonen", "Jesse Joensuu", "Niko Kapanen", "Mikko Koivu", "Leo Komarov", "Janne Lahti", "Jani Lajunen", "Petteri Nokelainen", "Janne Pesonen", "Antti Pihlström", "Mika Pyörälä", "Tuomo Ruutu"] },
    { id: "og14", label: "Olympialaiset 2014", year: 2014, res: "pronssi", roster: ["Antti Niemi", "Kari Lehtonen", "Tuukka Rask", "Olli Määttä", "Ossi Väänänen", "Lasse Kukkonen", "Sami Salo", "Sami Lepistö", "Juuso Hietanen", "Kimmo Timonen", "Sami Vatanen", "Teemu Selänne", "Olli Jokinen", "Tuomo Ruutu", "Aleksander Barkov", "Jori Lehterä", "Sakari Salminen", "Jarkko Immonen", "Petri Kontiola", "Lauri Korpikoski", "Jussi Jokinen", "Antti Pihlström", "Juhamatti Aaltonen", "Mikael Granlund", "Leo Komarov"] },
    { id: "mm16", label: "MM 2016", year: 2016, res: "hopea", roster: ["Juuse Saros", "Mikko Koskinen", "Niklas Bäckström", "Ville Pokka", "Tommi Kivistö", "Lasse Kukkonen", "Topi Jaakola", "Esa Lindell", "Anssi Salmela", "Juuso Hietanen", "Atte Ohtamaa", "Mikko Koivu", "Sebastian Aho", "Jani Lajunen", "Patrik Laine", "Jussi Jokinen", "Mika Pyörälä", "Jarno Koskiranta", "Antti Pihlström", "Tomi Sallinen", "Teemu Pulkkinen", "Aleksander Barkov", "Mikael Granlund", "Leo Komarov", "Mikko Rantanen"] },
    { id: "mm19", label: "MM 2019", year: 2019, res: "kulta", roster: ["Kevin Lankinen", "Veini Vehviläinen", "Jussi Olkinuora", "Mikko Lehtonen", "Oliwer Kaski", "Henri Jokiharju", "Petteri Lindbohm", "Miika Koivisto", "Atte Ohtamaa", "Jani Hakanpää", "Niko Mikkola", "Marko Anttila", "Arttu Ilomäki", "Veli-Matti Savinainen", "Niko Ojamäki", "Juhani Tyrväinen", "Kaapo Kakko", "Toni Rajala", "Eetu Luostarinen", "Joel Kiviranta", "Sakari Manninen", "Kristian Kuusela", "Jere Sallinen", "Harri Pesonen", "Juho Lammikko"] },
    { id: "mm22", label: "MM 2022", year: 2022, res: "kulta", roster: ["Harri Säteri", "Frans Tuohimaa", "Jussi Olkinuora", "Ville Pokka", "Niklas Friman", "Mikko Lehtonen", "Esa Lindell", "Juuso Hietanen", "Miro Heiskanen", "Sami Vatanen", "Mikael Seppälä", "Atte Ohtamaa", "Joel Armia", "Marko Anttila", "Jere Innala", "Hannes Björninen", "Toni Rajala", "Valtteri Filppula", "Mikael Granlund", "Sakari Manninen", "Teemu Hartikainen", "Jere Sallinen", "Saku Mäenalanen", "Harri Pesonen", "Juho Lammikko"] },
    { id: "og22", label: "Olympialaiset 2022", year: 2022, res: "kulta", roster: ["Harri Säteri", "Frans Tuohimaa", "Jussi Olkinuora", "Ville Pokka", "Niklas Friman", "Mikko Lehtonen", "Valtteri Kemiläinen", "Juuso Hietanen", "Petteri Lindbohm", "Sami Vatanen", "Atte Ohtamaa", "Marko Anttila", "Miro Aaltonen", "Niko Ojamäki", "Hannes Björninen", "Toni Rajala", "Joonas Nättinen", "Valtteri Filppula", "Markus Granlund", "Sakari Manninen", "Teemu Hartikainen", "Leo Komarov", "Saku Mäenalanen", "Iiro Pakarinen", "Harri Pesonen"] },
  ];

  const SLOTS = [
    { id: 'LW', label: 'Vasen laituri', short: 'VL', pos: 'LW', w: 0.14 },
    { id: 'C', label: 'Keskushyökkääjä', short: 'KH', pos: 'C', w: 0.18 },
    { id: 'RW', label: 'Oikea laituri', short: 'OL', pos: 'RW', w: 0.14 },
    { id: 'D1', label: 'Puolustaja', short: 'P', pos: 'D', w: 0.14 },
    { id: 'D2', label: 'Puolustaja', short: 'P', pos: 'D', w: 0.14 },
    { id: 'G', label: 'Maalivahti', short: 'MV', pos: 'G', w: 0.26 },
  ];

  const POS_LABEL = { C: 'KH', LW: 'VL', RW: 'OL', D: 'P', G: 'MV' };
  const FWD = ['C', 'LW', 'RW'];

  // Montako pistettä arviosta lähtee, kun pelaaja pelaa tällä paikalla. null = ei sallittu.
  function fitPenalty(player, slotPos) {
    if (player.p === 'G' || slotPos === 'G') return player.p === slotPos ? 0 : null;
    if (player.p === slotPos || player.a.includes(slotPos)) return 0;
    if (FWD.includes(player.p) && FWD.includes(slotPos)) return 4;
    return 12; // hyökkääjä puolustuksessa tai toisin päin
  }

  const SYNERGIES = [
    { name: 'Teemu & Saku', m: ['Teemu Selänne', 'Saku Koivu'], b: 0.8 },
    { name: 'Koivun veljekset', m: ['Saku Koivu', 'Mikko Koivu'], b: 0.8 },
    { name: 'Kultaketju 1995', m: ['Saku Koivu', 'Jere Lehtinen', 'Ville Peltonen'], b: 0.8 },
    { name: 'Oilersin dynastia', m: ['Jari Kurri', 'Esa Tikkanen', 'Reijo Ruotsalainen'], b: 0.8 },
    { name: 'Dallasin suomalaiset', m: ['Roope Hintz', 'Miro Heiskanen', 'Esa Lindell', 'Jere Lehtinen', 'Juha Lind'], b: 0.6 },
    { name: 'Torinon olympiahopea 2006', m: ['Antero Niittymäki', 'Teemu Selänne', 'Saku Koivu', 'Olli Jokinen', 'Kimmo Timonen', 'Toni Lydman', 'Niklas Hagman'], b: 0.6 },
    { name: 'Floridan mestarit', m: ['Aleksander Barkov', 'Anton Lundell', 'Niko Mikkola'], b: 0.6 },
    { name: 'MM-kulta 2011', m: ['Mikko Koivu', 'Mikael Granlund', 'Jarkko Immonen'], b: 0.6 },
    { name: 'Carolinan kaksikko', m: ['Sebastian Aho', 'Teuvo Teräväinen'], b: 0.6 },
    { name: 'Coloradon mestarit 2022', m: ['Mikko Rantanen', 'Artturi Lehkonen'], b: 0.6 },
    { name: 'MM-kulta 2019', m: ['Marko Anttila', 'Kaapo Kakko', 'Kevin Lankinen', 'Mikko Lehtonen', 'Harri Pesonen'], b: 0.6 },
    { name: 'Pekingin olympiakulta', m: ['Valtteri Filppula', 'Harri Säteri', 'Marko Anttila', 'Sakari Manninen', 'Mikko Lehtonen'], b: 0.6 },
  ];

  function evaluateTeam(lineup) {
    // lineup: { slotId: player }
    let base = 0;
    const rows = [];
    for (const s of SLOTS) {
      const pl = lineup[s.id];
      if (!pl) continue;
      const pen = fitPenalty(pl, s.pos) || 0;
      const eff = pl.r - pen;
      base += s.w * eff;
      rows.push({ slot: s, player: pl, eff, pen });
    }
    const names = Object.values(lineup).map((p) => p.n);
    const chem = [];
    for (const syn of SYNERGIES) {
      const hit = syn.m.filter((m) => names.includes(m));
      if (hit.length >= 2) chem.push({ name: syn.name, b: syn.b + 0.2 * (hit.length - 2), who: hit });
    }
    const eraCount = {};
    for (const p of Object.values(lineup)) for (const e of p.e) eraCount[e] = (eraCount[e] || 0) + 1;
    let bestEra = null;
    for (const [e, c] of Object.entries(eraCount)) if (!bestEra || c > bestEra[1]) bestEra = [e, c];
    if (bestEra && bestEra[1] >= 4) {
      chem.push({ name: 'Saman sukupolven joukkue (' + ERAS[bestEra[0]] + ')', b: bestEra[1] === 6 ? 1.0 : bestEra[1] === 5 ? 0.7 : 0.4, who: [] });
    }
    const chemTotal = chem.reduce((a, c) => a + c.b, 0);
    return { base, chem, chemTotal, total: base + chemTotal, rows };
  }

  const OPPONENTS = [
    { n: 'Kanada', r: 90 },
    { n: 'Ruotsi', r: 88 },
    { n: 'USA', r: 88 },
    { n: 'Tšekki', r: 86 },
    { n: 'Sveitsi', r: 84 },
    { n: 'Slovakia', r: 82 },
    { n: 'Saksa', r: 82 },
    { n: 'Latvia', r: 79 },
    { n: 'Tanska', r: 78 },
    { n: 'Norja', r: 76 },
    { n: 'Itävalta', r: 75 },
    { n: 'Kazakstan', r: 74 },
    { n: 'Ranska', r: 73 },
    { n: 'Slovenia', r: 72 },
    { n: 'Unkari', r: 72 },
    { n: 'Iso-Britannia', r: 71 },
  ];
  const opp = (n) => OPPONENTS.find((o) => o.n === n);

  // Säädettävät: CONFIG.spread = kuinka paljon tuuria, CONFIG.offset = vastustajien lisävahvuus
  const CONFIG = { spread: 3.0, offset: 2 };
  const winProb = (team, oppR) => 1 / (1 + Math.exp(-(team - oppR - CONFIG.offset) / CONFIG.spread));

  function goals(rng, win) {
    const w = 2 + Math.floor(rng() * rng() * 6);
    const l = Math.floor(rng() * w);
    return win ? [w, l] : [l, w];
  }

  function playGame(rng, team, o, stage) {
    const win = rng() < winProb(team, o.r);
    const extra = rng() < 0.22; // ratkesi jatkoajalla tai voittolaukauksilla
    let [f, a] = goals(rng, win);
    if (extra) {
      const t = Math.min(f, a);
      f = win ? t + 1 : t;
      a = win ? t : t + 1;
    }
    return { stage, opp: o.n, win, ot: extra, f, a };
  }

  function shuffle(rng, arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const pickOne = (rng, names) => opp(names[Math.floor(rng() * names.length)]);

  // Kausi: Euro Hockey Tour 4 × 3 ottelua, MM-alkusarja 7, pudotuspelit 3 = 22 ottelua
  const STAGES = [
    { id: 'eht1', label: 'EHT · Suomi' },
    { id: 'eht2', label: 'EHT · Sveitsi' },
    { id: 'eht3', label: 'EHT · Ruotsi' },
    { id: 'eht4', label: 'EHT · Tšekki' },
    { id: 'mm', label: 'MM-alkusarja' },
    { id: 'po', label: 'MM-pudotuspelit' },
  ];
  const SEASON_GAMES = 22;

  // Maalintekijät: skaters = [{ n, eff, pos }] (pos = kentän paikka: C, LW, RW tai D)
  function pickWeighted(rng, items) {
    const tot = items.reduce((a, it) => a + it.w, 0);
    let x = rng() * tot;
    for (const it of items) { x -= it.w; if (x <= 0) return it.p; }
    return items[items.length - 1].p;
  }
  const scoreW = (p) => Math.pow(Math.max(2, p.eff - 68), 1.6) * (p.pos === 'D' ? 0.3 : 1);
  const assistW = (p) => Math.pow(Math.max(2, p.eff - 68), 1.3) * (p.pos === 'D' ? 0.75 : 1);

  // Muut kentät: peli valitsee 6 hyökkääjää ja 3 puolustajaa samoilta aikakausilta kuin draftatut pelaajat
  function pickDepth(rng, chosen) {
    const names = chosen.map((p) => p.n);
    const eras = new Set(chosen.flatMap((p) => p.e));
    const pool = PLAYERS.filter((p) => p.p !== 'G' && !names.includes(p.n));
    const fromEras = pool.filter((p) => p.e.some((e) => eras.has(e)));
    const take = (isD, k) => {
      const prim = shuffle(rng, fromEras.filter((p) => (p.p === 'D') === isD));
      const rest = shuffle(rng, pool.filter((p) => (p.p === 'D') === isD && !prim.includes(p)));
      return [...prim, ...rest].slice(0, k).map((p) => ({ n: p.n, eff: p.r - 4, pos: isD ? 'D' : p.p, depth: true }));
    };
    return [...take(false, 6), ...take(true, 3)];
  }

  // Osa maaleista ja syötöistä tulee muilta kentiltä
  const DEPTH_GOAL = 0.38;
  const DEPTH_ASSIST = 0.42;
  function assignGoals(rng, g, skaters, depth) {
    let seq = shuffle(rng, [...Array(g.f).fill('F'), ...Array(g.a).fill('A')]);
    if (g.ot) {
      const last = g.win ? 'F' : 'A';
      seq.splice(seq.lastIndexOf(last), 1);
      seq.push(last);
    }
    let f = 0, a = 0;
    g.goals = seq.map((t, i) => {
      const ot = g.ot && i === seq.length - 1;
      if (t === 'A') { a++; return { fin: false, f, a, ot }; }
      f++;
      const scorerPool = depth.length && rng() < DEPTH_GOAL ? depth : skaters;
      const scorer = pickWeighted(rng, scorerPool.map((p) => ({ p, w: scoreW(p) })));
      const nA = rng() < 0.12 ? 0 : rng() < 0.4 ? 1 : 2;
      const as = [];
      for (let k = 0; k < nA; k++) {
        const src = depth.length && rng() < DEPTH_ASSIST ? depth : skaters;
        const pool = src.filter((p) => p !== scorer && !as.includes(p));
        if (!pool.length) continue;
        as.push(pickWeighted(rng, pool.map((p) => ({ p, w: assistW(p) }))));
      }
      return { fin: true, f, a, ot, s: scorer.n, as: as.map((p) => p.n) };
    });
  }

  // Jäähyt: tavallisesti harvinaisia, tunnetuilla ärsyttäjillä tiheämpiä
  const AGITATORS = ['Jarkko Ruutu', 'Leo Komarov', 'Esa Tikkanen', 'Ville Nieminen', 'Tuomo Ruutu', 'Rasmus Ristolainen', 'Jani Hakanpää', 'Saku Mäenalanen'];
  function assignPens(rng, g, skaters) {
    g.pens = [];
    for (const p of skaters) {
      const rate = (AGITATORS.includes(p.n) ? 0.42 : 0.14) * (p.depth ? 0.45 : 1);
      if (rng() < rate) g.pens.push({ n: p.n, min: rng() < 0.08 ? 4 : 2 });
    }
  }

  function seasonStats(games) {
    const st = {};
    const get = (n) => (st[n] = st[n] || { n, g: 0, a: 0, pim: 0 });
    for (const g of games) {
      for (const x of g.goals || []) {
        if (!x.fin) continue;
        if (x.s) get(x.s).g++;
        for (const n of x.as) get(n).a++;
      }
      for (const pn of g.pens || []) get(pn.n).pim += pn.min;
    }
    return Object.values(st).map((v) => ({ ...v, p: v.g + v.a }));
  }

  // MM-palkinnot: suomalaisen suoritusta verrataan arvottuun muiden maiden tasoon
  function computeAwards(rng, r, skaters, goalie) {
    const mm = r.games.filter((g) => g.stage === 'mm' || g.stage === 'po');
    const st = {};
    for (const x of seasonStats(mm)) st[x.n] = x;
    const pt = (n) => (st[n] ? st[n].p : 0);
    const gl = (n) => (st[n] ? st[n].g : 0);
    const medalB = { gold: 3, silver: 2, bronze: 1 }[r.medal] || 0;
    const rv = { pts: 10 + rng() * 6, fwd: 11 + rng() * 6, def: 7 + rng() * 5, gaa: 1.5 + rng() * 0.9 };
    const gaa = mm.reduce((a, g) => a + g.a, 0) / mm.length;
    const line = (n) => `${gl(n)}+${pt(n) - gl(n)}`;
    const fwds = skaters.filter((p) => p.pos !== 'D').map((p) => ({ p, sc: pt(p.n) + medalB })).sort((a, b) => b.sc - a.sc);
    const defs = skaters.filter((p) => p.pos === 'D').map((p) => ({ p, sc: pt(p.n) + medalB + (p.eff - 85) / 3 })).sort((a, b) => b.sc - a.sc);
    const all = skaters.slice().sort((a, b) => pt(b.n) - pt(a.n) || gl(b.n) - gl(a.n));
    const awards = [];
    if (all[0] && pt(all[0].n) > rv.pts) awards.push({ id: 'pts', title: 'Pistepörssin voittaja', n: all[0].n, note: `${line(all[0].n)} = ${pt(all[0].n)} p` });
    const bestF = fwds[0] && fwds[0].sc >= rv.fwd ? fwds[0].p : null;
    if (bestF) awards.push({ id: 'fwd', title: 'Paras hyökkääjä', n: bestF.n, note: `${line(bestF.n)} MM-kisoissa` });
    if (defs[0] && defs[0].sc >= rv.def) awards.push({ id: 'def', title: 'Paras puolustaja', n: defs[0].p.n, note: `${line(defs[0].p.n)} MM-kisoissa` });
    const gkBest = r.advanced && medalB >= 2 && gaa <= rv.gaa;
    if (gkBest) awards.push({ id: 'g', title: 'Paras maalivahti', n: goalie.n, note: `${gaa.toFixed(2)} päästettyä / ottelu` });
    if (r.medal === 'gold' && (bestF || gkBest) && rng() < 0.65) {
      const mvp = gkBest && (!bestF || gaa < 1.6) ? goalie.n : bestF.n;
      awards.unshift({ id: 'mvp', title: 'Turnauksen arvokkain pelaaja (MVP)', n: mvp, note: 'Median valinta' });
    }
    const allstar = [];
    if (r.advanced && gaa <= rv.gaa * 1.15) allstar.push({ pos: 'MV', n: goalie.n });
    defs.filter((d) => d.sc >= rv.def * 0.8).slice(0, 2).forEach((d) => allstar.push({ pos: 'P', n: d.p.n }));
    fwds.filter((f) => f.sc >= rv.fwd * 0.8).slice(0, 3).forEach((f) => allstar.push({ pos: 'H', n: f.p.n }));
    return { awards, allstar, mmGames: mm.length };
  }

  function simulateSeason(teamRating, rng = Math.random, skaters = null, goalie = null, depth = []) {
    const games = [];
    const eht = ['Ruotsi', 'Tšekki', 'Sveitsi'];
    for (const st of STAGES.slice(0, 4)) {
      for (const n of shuffle(rng, eht)) games.push(playGame(rng, teamRating, opp(n), st.id));
    }
    // MM-lohko: 8 joukkuetta, neljä parasta jatkoon
    const group = [
      pickOne(rng, ['Kanada', 'USA']),
      pickOne(rng, ['Ruotsi', 'Tšekki']),
      pickOne(rng, ['Sveitsi', 'Slovakia', 'Saksa']),
      ...shuffle(rng, ['Latvia', 'Tanska', 'Norja']).slice(0, 2).map(opp),
      ...shuffle(rng, ['Itävalta', 'Kazakstan', 'Ranska', 'Slovenia', 'Unkari', 'Iso-Britannia']).slice(0, 2).map(opp),
    ];
    let pts = 0;
    for (const o of shuffle(rng, group)) {
      const g = playGame(rng, teamRating, o, 'mm');
      pts += g.win ? (g.ot ? 2 : 3) : g.ot ? 1 : 0;
      games.push(g);
    }
    const groupNames = group.map((o) => o.n);
    let medal = null;
    let advanced = pts >= 10; // noin neljä voittoa riittää jatkoon
    if (advanced) {
      const qfPool = ['Sveitsi', 'Slovakia', 'Saksa', 'Tšekki', 'Latvia', 'USA', 'Ruotsi'].filter((n) => !groupNames.includes(n));
      const qf = playGame(rng, teamRating, pickOne(rng, qfPool), 'po');
      qf.round = 'Puolivälierä';
      games.push(qf);
      if (qf.win) {
        const sfPool = ['Kanada', 'Ruotsi', 'USA', 'Tšekki'].filter((n) => n !== qf.opp);
        const sf = playGame(rng, teamRating, pickOne(rng, sfPool), 'po');
        sf.round = 'Välierä';
        games.push(sf);
        if (sf.win) {
          const fPool = ['Kanada', 'Kanada', 'Ruotsi', 'USA'].filter((n) => n !== sf.opp && n !== qf.opp);
          const fin = playGame(rng, teamRating, pickOne(rng, fPool), 'po');
          fin.round = 'Finaali';
          games.push(fin);
          medal = fin.win ? 'gold' : 'silver';
        } else {
          const bPool = ['Ruotsi', 'USA', 'Tšekki', 'Sveitsi'].filter((n) => n !== sf.opp && n !== qf.opp);
          const br = playGame(rng, teamRating, pickOne(rng, bPool), 'po');
          br.round = 'Pronssiottelu';
          games.push(br);
          medal = br.win ? 'bronze' : null;
        }
      }
    }
    if (skaters && skaters.length) for (const g of games) { assignGoals(rng, g, skaters, depth); assignPens(rng, g, [...skaters, ...depth]); }
    const W = games.filter((g) => g.win).length;
    const OTL = games.filter((g) => !g.win && g.ot).length;
    const L = games.length - W - OTL;
    const res = { games, W, L, OTL, played: games.length, groupPts: pts, advanced, medal, perfect: W === SEASON_GAMES, depth: depth.map((p) => p.n) };
    if (skaters && skaters.length && goalie) res.mmAwards = computeAwards(rng, res, skaters, goalie);
    return res;
  }

  function verdict(r) {
    if (r.perfect) return { title: 'Kultakausi', line: '22 voittoa, nolla tappiota ja MM-kulta. Täydellinen vuosi.' };
    if (r.medal === 'gold' && r.L + r.OTL <= 2) return { title: 'Lähes täydellinen', line: 'Kulta tuli, vain pari kompastusta matkalla.' };
    if (r.medal === 'gold') return { title: 'Maailmanmestarit', line: 'Kausi ei ollut virheetön, mutta keväällä juhlittiin.' };
    if (r.medal) return { title: 'Mitalikausi', line: 'Kova joukkue, mutta kulta jäi tällä kertaa saamatta.' };
    if (r.advanced) return { title: 'Puolivälierätappio', line: 'Tuttu tarina: yksi huono ilta ja kesä alkoi.' };
    return { title: 'Alkusarjaan jäätiin', line: 'Kokoonpano ei kantanut. Uusi draft?' };
  }

  const api = { ERAS, PLAYERS, TOURNAMENTS, SLOTS, POS_LABEL, SYNERGIES, OPPONENTS, STAGES, SEASON_GAMES, CONFIG, fitPenalty, seasonStats, pickDepth, evaluateTeam, simulateSeason, verdict, winProb, shuffle };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.Leijonat = api;
})(this);
