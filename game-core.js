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
    // Mitalijoukkueiden lisäys 25.11.2026: vain kokoonpanoista löytyneet, karkeat arviot
    P('Mikko Lehtonen (s. 1978)', 'D', [], 76, ['00'], 'MM-pronssi 2006'),
    P('Simo Saarinen', 'D', [], 76, ['80'], 'Olympiahopea 1988'),
    P('Jukka Virtanen', 'D', [], 75, ['80'], 'Olympiahopea 1988'),
    P('Timo Susi', 'RW', ['LW', 'C'], 76, ['80'], 'Olympiahopea 1988'),
    P('Kai Suikkanen', 'RW', ['LW', 'C'], 75, ['80'], 'Olympiahopea 1988'),
    P('Jari Torkki', 'RW', ['LW', 'C'], 76, ['80'], 'Olympiahopea 1988'),
    P('Erkki Laine', 'RW', ['LW', 'C'], 76, ['80'], 'Olympiahopea 1988'),
    P('Pekka Tuomisto', 'RW', ['LW', 'C'], 76, ['80', '90'], 'Olympiahopea 1988, MM-hopea 1992'),
    P('Erkki Lehtonen', 'RW', ['LW', 'C'], 77, ['80'], 'Olympiahopea 1988'),
    P('Reijo Mikkolainen', 'RW', ['LW', 'C'], 76, ['80'], 'Olympiahopea 1988'),
    P('Kari Laitinen', 'RW', ['LW', 'C'], 75, ['80'], 'Olympiahopea 1988'),
    P('Ari-Pekka Siekkinen', 'G', [], 77, ['90'], 'MM-hopea 1992'),
    P('Waltteri Immonen', 'D', [], 76, ['90'], 'MM-hopea 1992, MM-hopea 1994'),
    P('Kai Rautio', 'D', [], 75, ['90'], 'MM-hopea 1992'),
    P('Harri Laurila', 'D', [], 76, ['90'], 'MM-hopea 1992'),
    P('Vesa Viitakoski', 'RW', ['LW', 'C'], 76, ['90'], 'MM-hopea 1992'),
    P('Keijo Säilynoja', 'RW', ['LW', 'C'], 77, ['90'], 'MM-hopea 1992'),
    P('Timo Saarikoski', 'RW', ['LW', 'C'], 75, ['90'], 'MM-hopea 1992'),
    P('Juha Riihijärvi', 'RW', ['LW', 'C'], 77, ['90'], 'MM-hopea 1992'),
    P('Rauli Raitanen', 'RW', ['LW', 'C'], 76, ['90'], 'MM-hopea 1992'),
    P('Jarkko Varvio', 'RW', ['LW', 'C'], 76, ['90'], 'MM-hopea 1992'),
    P('Pasi Kuivalainen', 'G', [], 78, ['90'], 'MM-hopea 1994, Olympiapronssi 1994'),
    P('Mika Alatalo', 'RW', ['LW', 'C'], 77, ['90'], 'MM-hopea 1994, Olympiapronssi 1994, MM-hopea 1998'),
    P('Pasi Sormunen', 'D', [], 76, ['90'], 'Olympiapronssi 1994'),
    P('Petri Varis', 'RW', ['LW', 'C'], 76, ['90'], 'Olympiapronssi 1994'),
    P('Jere Karalahti', 'D', [], 80, ['90', '00', '10'], 'MM-hopea 1998, MM-hopea 1999, MM-pronssi 2000, MM-hopea 2014'),
    P('Kaj Linna', 'D', [], 76, ['90'], 'MM-hopea 1998'),
    P('Juha Ikonen', 'RW', ['LW', 'C'], 77, ['90'], 'MM-hopea 1998'),
    P('Joni Lius', 'RW', ['LW', 'C'], 75, ['90'], 'MM-hopea 1998'),
    P('Toni Mäkiaho', 'RW', ['LW', 'C'], 75, ['90'], 'MM-hopea 1998'),
    P('Marko Tuomainen', 'RW', ['LW', 'C'], 77, ['90', '00'], 'MM-hopea 1998, MM-hopea 1999, MM-pronssi 2000'),
    P('Kari Martikainen', 'D', [], 76, ['90'], 'MM-hopea 1999'),
    P('Toni Sihvonen', 'RW', ['LW', 'C'], 76, ['90', '00'], 'MM-hopea 1999, MM-pronssi 2000, MM-hopea 2001'),
    P('Tony Virta', 'RW', ['LW', 'C'], 76, ['00'], 'MM-pronssi 2000, MM-hopea 2001'),
    P('Antti Aalto', 'RW', ['LW', 'C'], 77, ['00'], 'MM-pronssi 2000'),
    P('Janne Grönvall', 'D', [], 76, ['00'], 'MM-hopea 2001'),
    P('Mikko Luoma', 'D', [], 77, ['00'], 'MM-pronssi 2006, MM-pronssi 2008'),
    P('Tommi Santala', 'RW', ['LW', 'C'], 77, ['00'], 'MM-pronssi 2006'),
    P('Jani Rita', 'RW', ['LW', 'C'], 76, ['00'], 'MM-pronssi 2006'),
    P('Esa Pirnes', 'RW', ['LW', 'C'], 77, ['00'], 'MM-pronssi 2006, MM-pronssi 2008'),
    P('Hannes Hyvönen', 'RW', ['LW', 'C'], 76, ['00'], 'MM-pronssi 2008'),
    P('Mikko Jokela', 'D', [], 75, ['00'], 'MM-pronssi 2008'),
    P('Karri Rämö', 'G', [], 79, ['00'], 'MM-pronssi 2008'),
    P('Ville Lajunen', 'D', [], 76, ['10'], 'MM-hopea 2014'),
    P('Petteri Wirtanen', 'RW', ['LW', 'C'], 76, ['10'], 'MM-hopea 2014'),
    P('Miikka Salomäki', 'RW', ['LW', 'C'], 76, ['10'], 'MM-hopea 2014'),
    P('Pekka Jormakka', 'RW', ['LW', 'C'], 75, ['10'], 'MM-hopea 2014'),
    P('Jyri Marttinen', 'RW', ['LW', 'C'], 77, ['10'], 'MM-hopea 2014'),
    P('Olli Palola', 'RW', ['LW', 'C'], 76, ['10'], 'MM-hopea 2014'),
    P('Tommi Huhtala', 'RW', ['LW', 'C'], 75, ['10'], 'MM-hopea 2014'),
    P('Tony Sund', 'D', [], 75, ['20'], 'MM-hopea 2021'),
    P('Kim Nousiainen', 'D', [], 76, ['20'], 'MM-hopea 2021'),
    P('Axel Rindell', 'D', [], 76, ['20'], 'MM-hopea 2021'),
    P('Mikael Ruohomaa', 'RW', ['LW', 'C'], 76, ['20'], 'MM-hopea 2021'),
    P('Arttu Ruotsalainen', 'RW', ['LW', 'C'], 77, ['20'], 'MM-hopea 2021'),
    P('Jere Karjalainen', 'RW', ['LW', 'C'], 76, ['20'], 'MM-hopea 2021'),
    P('Teemu Turunen', 'RW', ['LW', 'C'], 75, ['20'], 'MM-hopea 2021'),
    P('Peter Tiivola', 'RW', ['LW', 'C'], 75, ['20'], 'MM-hopea 2021'),
    P('Valtteri Puustinen', 'RW', ['LW', 'C'], 77, ['20'], 'MM-hopea 2021'),
    P('Janne Juvonen', 'G', [], 78, ['20'], 'MM-hopea 2021'),
  ];

  // Syntymäajat turnauskohtaista kuntoa varten (lähde: Wikidata, haettu 2026-11-25)
  const BORN = {
    "Aki-Petteri Berg": '1977-07-28', "Aleksander Barkov": '1995-09-02', "Anssi Salmela": '1984-08-13', "Antero Niittymäki": '1980-06-18',
    "Anton Lundell": '2001-10-03', "Antti Aalto": '1975-03-04', "Antti Laaksonen": '1973-10-03', "Antti Miettinen": '1980-07-03',
    "Antti Niemi": '1983-08-29', "Antti Pihlström": '1984-10-22', "Antti Raanta": '1989-05-12', "Antti Törmänen": '1970-09-19',
    "Antti-Jussi Niemi": '1977-09-22', "Ari Sulander": '1969-01-06', "Ari-Pekka Siekkinen": '1965-01-12', "Arto Javanainen": '1959-04-08',
    "Arto Ruotanen": '1961-04-11', "Arttu Ilomäki": '1991-06-12', "Arttu Ruotsalainen": '1997-10-29', "Artturi Lehkonen": '1995-07-04',
    "Atte Ohtamaa": '1987-11-06', "Axel Rindell": '2000-01-01', "Christian Ruuttu": '1964-02-20', "Eeli Tolvanen": '1999-04-22',
    "Eetu Luostarinen": '1998-09-02', "Erik Haula": '1991-03-23', "Erik Hämäläinen": '1965-04-20', "Erkki Laine": '1957-09-13',
    "Erkki Lehtonen": '1957-01-09', "Esa Keskinen": '1965-02-03', "Esa Lindell": '1994-05-23', "Esa Pirnes": '1977-04-01',
    "Esa Tikkanen": '1965-01-25', "Frans Tuohimaa": '1991-08-19', "Fredrik Norrena": '1973-11-29', "Hannes Björninen": '1995-10-19',
    "Hannes Hyvönen": '1975-08-29', "Hannu Järvenpää": '1963-05-19', "Hannu Kamppuri": '1957-07-01', "Hannu Lassila": '1954-02-25',
    "Hannu Virta": '1963-03-22', "Harri Laurila": '1965-04-30', "Harri Pesonen": '1988-08-06', "Harri Säteri": '1989-12-29',
    "Heikki Riihiranta": '1948-10-04', "Henri Jokiharju": '1999-06-17', "Iiro Järvi": '1965-03-23', "Iiro Pakarinen": '1991-08-25',
    "Ilkka Sinisalo": '1958-07-10', "Jani Hakanpää": '1992-03-31', "Jani Lajunen": '1990-06-16', "Jani Rita": '1981-07-25',
    "Janne Grönvall": '1973-07-17', "Janne Juvonen": '1994-10-03', "Janne Lahti": '1982-07-20', "Janne Laukkanen": '1970-03-19',
    "Janne Niinimaa": '1975-05-22', "Janne Niskala": '1981-09-22', "Janne Ojanen": '1968-04-09', "Janne Pesonen": '1982-05-11',
    "Jari Grönstrand": '1962-11-14', "Jari Kurri": '1960-05-18', "Jari Torkki": '1965-08-11', "Jari Viuhkola": '1980-02-27',
    "Jarkko Immonen": '1982-04-19', "Jarkko Ruutu": '1975-08-23', "Jarkko Varvio": '1972-04-28', "Jarmo Kekäläinen": '1966-07-03',
    "Jarmo Myllys": '1965-05-29', "Jarno Koskiranta": '1986-12-09', "Jere Innala": '1998-03-17', "Jere Karalahti": '1975-03-25',
    "Jere Karjalainen": '1992-05-23', "Jere Lehtinen": '1973-06-24', "Jere Sallinen": '1990-10-26', "Jesperi Kotkaniemi": '2000-07-06',
    "Jesse Joensuu": '1987-10-05', "Jesse Puljujärvi": '1998-05-07', "Joel Armia": '1993-05-31', "Joel Kiviranta": '1996-03-23',
    "Joni Lius": '1971-03-04', "Joni Pitkänen": '1983-09-19', "Joonas Donskoi": '1992-04-13', "Joonas Korpisalo": '1994-04-28',
    "Joonas Nättinen": '1991-01-03', "Jori Lehterä": '1987-12-23', "Jorma Sevon": '1958-02-07', "Jorma Valtonen": '1946-12-22',
    "Jouko Narvanmaa": '1962-09-10', "Juha Huikari": '1960-01-08', "Juha Ikonen": '1970-06-07', "Juha Lind": '1974-01-02',
    "Juha Riihijärvi": '1969-12-15', "Juha Tuohimaa": '1956-06-05', "Juha Ylönen": '1972-02-13', "Juhamatti Aaltonen": '1985-06-04',
    "Juhani Tamminen": '1950-05-26', "Juhani Tyrväinen": '1990-09-11', "Juho Lammikko": '1996-01-29', "Jukka Hentunen": '1974-05-03',
    "Jukka Porvari": '1954-01-19', "Jukka Seppo": '1968-01-22', "Jukka Tammi": '1962-04-10', "Jukka Virtanen": '1959-07-15',
    "Jukka-Pekka Laamanen": '1976-10-04', "Jussi Jokinen": '1983-04-01', "Jussi Markkanen": '1975-05-08', "Jussi Olkinuora": '1990-11-04',
    "Juuse Saros": '1995-04-19', "Juuso Hietanen": '1985-06-14', "Juuso Pärssinen": '2001-02-01', "Juuso Välimäki": '1998-10-06',
    "Jyri Marttinen": '1982-09-01', "Jyrki Lumme": '1966-07-16', "Jyrki Välivaara": '1976-05-30', "Kaapo Kakko": '2001-02-13',
    "Kai Rautio": '1964-07-22', "Kai Suikkanen": '1959-06-29', "Kaj Linna": '1971-01-24', "Kari Eloranta": '1956-02-29',
    "Kari Jalonen": '1960-01-06', "Kari Laitinen": '1964-04-09', "Kari Lehtonen": '1983-11-16', "Kari Makkonen": '1955-01-20',
    "Kari Martikainen": '1968-09-15', "Kari Takko": '1962-06-23', "Karri Rämö": '1986-07-01', "Kasperi Kapanen": '1996-07-23',
    "Keijo Säilynoja": '1970-02-17', "Kevin Lankinen": '1995-04-28', "Kim Nousiainen": '2000-11-14', "Kimmo Rintanen": '1973-08-07',
    "Kimmo Timonen": '1975-03-18', "Konsta Helenius": '2006-05-11', "Kristian Kuusela": '1983-02-19', "Lasse Kukkonen": '1981-09-18',
    "Lasse Oksanen": '1942-12-07', "Lauri Korpikoski": '1986-07-28', "Leo Komarov": '1987-01-23', "Markku Kiimalainen": '1955-10-08',
    "Markku Kyllönen": '1962-02-15', "Marko Anttila": '1985-05-27', "Marko Kiprusoff": '1972-02-06', "Marko Palo": '1967-09-26',
    "Marko Tuomainen": '1972-04-25', "Markus Granlund": '1993-04-16', "Markus Ketterer": '1967-08-23', "Markus Mattsson": '1957-07-30',
    "Matias Maccelli": '2000-10-14', "Matti Hagman": '1955-09-21', "Miika Koivisto": '1990-07-20', "Miikka Kiprusoff": '1976-10-26',
    "Miikka Salomäki": '1993-03-09', "Mika Alatalo": '1971-06-11', "Mika Nieminen": '1966-01-01', "Mika Pyörälä": '1981-07-13',
    "Mika Strömberg": '1970-02-28', "Mikael Granlund": '1992-02-26', "Mikael Ruohomaa": '1988-11-17', "Mikael Seppälä": '1994-03-08',
    "Mikko Eloranta": '1972-08-24', "Mikko Jokela": '1980-03-04', "Mikko Koivu": '1983-03-12', "Mikko Koskinen": '1988-07-18',
    "Mikko Lehtonen": '1994-01-16', "Mikko Lehtonen (s. 1978)": '1978-06-12', "Mikko Leinonen": '1955-07-15', "Mikko Luoma": '1976-06-22',
    "Mikko Mäkelä": '1965-02-28', "Mikko Rantanen": '1996-10-29', "Miro Aaltonen": '1993-06-07', "Miro Heiskanen": '1999-07-18',
    "Niklas Bäckström": '1978-02-13', "Niklas Friman": '1993-08-30', "Niklas Hagman": '1979-12-05', "Niko Hovinen": '1988-03-16',
    "Niko Kapanen": '1978-04-29', "Niko Mikkola": '1996-04-27', "Niko Ojamäki": '1995-06-17', "Oliwer Kaski": '1995-09-04',
    "Olli Jokinen": '1978-12-05', "Olli Määttä": '1994-08-22', "Olli Palola": '1988-04-08', "Ossi Väänänen": '1980-08-18',
    "Pasi Huura": '1966-03-23', "Pasi Kuivalainen": '1972-07-15', "Pasi Nurminen": '1975-12-17', "Pasi Puistola": '1978-09-16',
    "Pasi Sormunen": '1970-03-08', "Patrik Laine": '1998-04-19', "Pekka Arbelius": '1960-06-26', "Pekka Jormakka": '1990-09-14',
    "Pekka Marjamäki": '1947-12-18', "Pekka Rautakallio": '1953-07-25', "Pekka Rinne": '1982-11-03', "Pekka Saravo": '1979-11-13',
    "Pekka Tirkkonen": '1968-07-17', "Pekka Tuomisto": '1960-12-29', "Peter Tiivola": '1993-09-05', "Petri Kontiola": '1984-10-04',
    "Petri Skriko": '1962-03-13', "Petri Varis": '1969-05-13', "Petri Vehanen": '1977-10-09', "Petteri Lindbohm": '1993-09-23',
    "Petteri Nokelainen": '1986-01-16', "Petteri Nummelin": '1972-11-25', "Petteri Wirtanen": '1986-05-28', "Raimo Helminen": '1964-03-11',
    "Raimo Hirvonen": '1957-07-20', "Raimo Summanen": '1962-03-02', "Rasmus Ristolainen": '1994-10-27', "Rauli Raitanen": '1970-01-14',
    "Reijo Mikkolainen": '1964-05-14', "Reijo Ruotsalainen": '1960-04-01', "Riku Hahl": '1980-11-01', "Risto Siltanen": '1958-10-31',
    "Roope Hintz": '1996-11-17', "Sakari Lindfors": '1966-04-27', "Sakari Manninen": '1992-02-10', "Sakari Salminen": '1988-05-31',
    "Saku Koivu": '1974-11-23', "Saku Mäenalanen": '1994-05-29', "Sami Kapanen": '1973-06-14', "Sami Lepistö": '1984-10-17',
    "Sami Salo": '1974-09-02', "Sami Vatanen": '1991-06-03', "Sean Bergenheim": '1984-02-08', "Sebastian Aho": '1997-07-26',
    "Simo Saarinen": '1963-02-14', "Sinuhe Wallinheimo": '1972-03-09', "Tapio Levo": '1955-09-24', "Teemu Hartikainen": '1990-05-03',
    "Teemu Lassila": '1983-03-26', "Teemu Pulkkinen": '1992-01-02', "Teemu Selänne": '1970-07-03', "Teemu Turunen": '1995-11-24',
    "Teppo Numminen": '1968-07-03', "Tero Lehterä": '1972-04-21', "Teuvo Teräväinen": '1994-09-11', "Timo Blomqvist": '1961-01-23',
    "Timo Jutila": '1963-12-24', "Timo Nummelin": '1948-09-07', "Timo Peltomaa": '1968-07-26', "Timo Pärssinen": '1977-01-19',
    "Timo Saarikoski": '1969-07-17', "Timo Susi": '1959-01-25', "Tomi Kallio": '1977-01-27', "Tomi Sallinen": '1989-02-11',
    "Tommi Huhtala": '1987-12-07', "Tommi Kivistö": '1991-06-07', "Tommi Santala": '1979-06-27', "Toni Lydman": '1977-09-25',
    "Toni Mäkiaho": '1975-01-11', "Toni Rajala": '1991-03-29', "Toni Sihvonen": '1971-02-19', "Toni Söderholm": '1978-04-14',
    "Tony Sund": '1995-08-04', "Tony Virta": '1972-06-28', "Topi Jaakola": '1983-11-15', "Tuomas Grönman": '1974-03-22',
    "Tuomo Ruutu": '1983-02-16', "Tuukka Mäntylä": '1981-05-25', "Tuukka Rask": '1987-03-10', "Ukko-Pekka Luukkonen": '1999-03-09',
    "Urho Vaakanainen": '1999-01-01', "Urpo Ylönen": '1943-05-25', "Valtteri Filppula": '1984-03-20', "Valtteri Kemiläinen": '1991-12-16',
    "Valtteri Puustinen": '1999-06-04', "Veini Vehviläinen": '1997-02-13', "Veli-Matti Savinainen": '1986-01-05', "Veli-Pekka Ketola": '1948-03-28',
    "Vesa Toskala": '1977-05-20', "Vesa Viitakoski": '1971-02-13', "Ville Heinola": '2001-03-02', "Ville Husso": '1995-02-06',
    "Ville Koistinen": '1982-06-17', "Ville Lajunen": '1988-03-08', "Ville Leino": '1983-10-06', "Ville Nieminen": '1977-04-06',
    "Ville Peltonen": '1973-05-24', "Ville Pokka": '1994-06-03', "Ville Siren": '1964-02-11', "Waltteri Immonen": '1967-04-03',
  };

  // Suomen turnauskokoonpanot (lähde: Wikipedian kokoonpanotaulukot, tarkistettu 2026-11-24 ja 2026-11-25)
  const TOURNAMENTS = [
    { id: "cc81", label: "Kanada-cup 1981", year: 1981, res: "", roster: ["Hannu Lassila", "Markus Mattsson", "Raimo Hirvonen", "Juha Huikari", "Tapio Levo", "Timo Nummelin", "Pekka Rautakallio", "Reijo Ruotsalainen", "Risto Siltanen", "Juha Tuohimaa", "Pekka Arbelius", "Matti Hagman", "Kari Jalonen", "Arto Javanainen", "Veli-Pekka Ketola", "Markku Kiimalainen", "Jari Kurri", "Mikko Leinonen", "Kari Makkonen", "Jukka Porvari", "Jorma Sevon", "Ilkka Sinisalo"] },
    { id: "cc87", label: "Kanada-cup 1987", year: 1987, res: "", roster: ["Jarmo Myllys", "Kari Takko", "Jukka Tammi", "Timo Blomqvist", "Jari Grönstrand", "Timo Jutila", "Jouko Narvanmaa", "Teppo Numminen", "Reijo Ruotsalainen", "Ville Siren", "Hannu Virta", "Matti Hagman", "Raimo Helminen", "Iiro Järvi", "Jari Kurri", "Markku Kyllönen", "Mikko Mäkelä", "Janne Ojanen", "Christian Ruuttu", "Jukka Seppo", "Petri Skriko", "Raimo Summanen", "Esa Tikkanen"] },
    { id: "og88", label: "Olympialaiset 1988", year: 1988, res: "hopea", roster: ["Sakari Lindfors", "Jarmo Myllys", "Jukka Tammi", "Teppo Numminen", "Timo Blomqvist", "Jyrki Lumme", "Arto Ruotanen", "Simo Saarinen", "Kari Eloranta", "Jukka Virtanen", "Reijo Ruotsalainen", "Timo Susi", "Kai Suikkanen", "Jari Torkki", "Raimo Helminen", "Iiro Järvi", "Erkki Laine", "Pekka Tuomisto", "Janne Ojanen", "Erkki Lehtonen", "Reijo Mikkolainen", "Esa Keskinen", "Kari Laitinen"] },
    { id: "cc91", label: "Kanada-cup 1991", year: 1991, res: "välierä", roster: ["Markus Ketterer", "Jarmo Myllys", "Jukka Tammi", "Kari Eloranta", "Pasi Huura", "Timo Jutila", "Janne Laukkanen", "Jyrki Lumme", "Teppo Numminen", "Arto Ruotanen", "Ville Siren", "Hannu Järvenpää", "Iiro Järvi", "Jarmo Kekäläinen", "Jari Kurri", "Janne Ojanen", "Timo Peltomaa", "Christian Ruuttu", "Teemu Selänne", "Petri Skriko", "Raimo Summanen", "Esa Tikkanen", "Pekka Tirkkonen"] },
    { id: "mm92", label: "MM 1992", year: 1992, res: "hopea", roster: ["Ari-Pekka Siekkinen", "Markus Ketterer", "Sakari Lindfors", "Erik Hämäläinen", "Timo Jutila", "Arto Ruotanen", "Waltteri Immonen", "Kai Rautio", "Janne Laukkanen", "Harri Laurila", "Vesa Viitakoski", "Jere Lehtinen", "Hannu Järvenpää", "Keijo Säilynoja", "Pekka Tuomisto", "Christian Ruuttu", "Timo Saarikoski", "Juha Riihijärvi", "Rauli Raitanen", "Timo Peltomaa", "Jarkko Varvio", "Mika Nieminen", "Mikko Mäkelä"] },
    { id: "mm94", label: "MM 1994", year: 1994, res: "hopea", roster: ["Pasi Kuivalainen", "Jarmo Myllys", "Jukka Tammi", "Erik Hämäläinen", "Waltteri Immonen", "Timo Jutila", "Marko Kiprusoff", "Janne Laukkanen", "Mika Strömberg", "Hannu Virta", "Mika Alatalo", "Raimo Helminen", "Sami Kapanen", "Esa Keskinen", "Saku Koivu", "Jari Kurri", "Jere Lehtinen", "Mikko Mäkelä", "Mika Nieminen", "Janne Ojanen", "Marko Palo", "Ville Peltonen", "Christian Ruuttu"] },
    { id: "og94", label: "Olympialaiset 1994", year: 1994, res: "pronssi", roster: ["Pasi Kuivalainen", "Jukka Tammi", "Jarmo Myllys", "Marko Kiprusoff", "Erik Hämäläinen", "Timo Jutila", "Pasi Sormunen", "Janne Laukkanen", "Hannu Virta", "Mika Strömberg", "Janne Ojanen", "Esa Keskinen", "Saku Koivu", "Marko Palo", "Raimo Helminen", "Mika Alatalo", "Ville Peltonen", "Jere Lehtinen", "Sami Kapanen", "Tero Lehterä", "Petri Varis", "Mika Nieminen", "Mikko Mäkelä"] },
    { id: "mm95", label: "MM 1995", year: 1995, res: "kulta", roster: ["Jarmo Myllys", "Ari Sulander", "Jukka Tammi", "Erik Hämäläinen", "Timo Jutila", "Marko Kiprusoff", "Janne Niinimaa", "Petteri Nummelin", "Mika Strömberg", "Hannu Virta", "Raimo Helminen", "Sami Kapanen", "Esa Keskinen", "Saku Koivu", "Tero Lehterä", "Jere Lehtinen", "Mika Nieminen", "Janne Ojanen", "Marko Palo", "Ville Peltonen", "Raimo Summanen", "Antti Törmänen", "Juha Ylönen"] },
    { id: "og98", label: "Olympialaiset 1998", year: 1998, res: "pronssi", roster: ["Jukka Tammi", "Ari Sulander", "Jarmo Myllys", "Kimmo Timonen", "Aki-Petteri Berg", "Tuomas Grönman", "Janne Laukkanen", "Jyrki Lumme", "Teppo Numminen", "Janne Niinimaa", "Teemu Selänne", "Esa Tikkanen", "Saku Koivu", "Raimo Helminen", "Antti Törmänen", "Ville Peltonen", "Jari Kurri", "Juha Lind", "Sami Kapanen", "Kimmo Rintanen", "Jere Lehtinen", "Juha Ylönen", "Mika Nieminen"] },
    { id: "mm98", label: "MM 1998", year: 1998, res: "hopea", roster: ["Jarmo Myllys", "Ari Sulander", "Vesa Toskala", "Jere Karalahti", "Marko Kiprusoff", "Janne Laukkanen", "Kaj Linna", "Toni Lydman", "Antti-Jussi Niemi", "Petteri Nummelin", "Kimmo Timonen", "Mika Alatalo", "Mikko Eloranta", "Raimo Helminen", "Juha Ikonen", "Olli Jokinen", "Sami Kapanen", "Joni Lius", "Toni Mäkiaho", "Ville Peltonen", "Kimmo Rintanen", "Jarkko Ruutu", "Marko Tuomainen", "Antti Törmänen"] },
    { id: "mm99", label: "MM 1999", year: 1999, res: "hopea", roster: ["Miikka Kiprusoff", "Ari Sulander", "Vesa Toskala", "Aki-Petteri Berg", "Jere Karalahti", "Marko Kiprusoff", "Toni Lydman", "Kari Martikainen", "Antti-Jussi Niemi", "Petteri Nummelin", "Kimmo Timonen", "Mikko Eloranta", "Raimo Helminen", "Olli Jokinen", "Tomi Kallio", "Saku Koivu", "Juha Lind", "Ville Peltonen", "Kimmo Rintanen", "Teemu Selänne", "Toni Sihvonen", "Marko Tuomainen", "Antti Törmänen"] },
    { id: "mm00", label: "MM 2000", year: 2000, res: "pronssi", roster: ["Pasi Nurminen", "Ari Sulander", "Vesa Toskala", "Petteri Nummelin", "Aki-Petteri Berg", "Antti-Jussi Niemi", "Toni Lydman", "Jyrki Lumme", "Jere Karalahti", "Janne Niinimaa", "Esa Tikkanen", "Raimo Helminen", "Ville Peltonen", "Tomi Kallio", "Toni Sihvonen", "Jukka Hentunen", "Juha Lind", "Niko Kapanen", "Kimmo Rintanen", "Marko Tuomainen", "Tony Virta", "Antti Aalto", "Olli Jokinen"] },
    { id: "mm01", label: "MM 2001", year: 2001, res: "hopea", roster: ["Pasi Nurminen", "Miikka Kiprusoff", "Jarmo Myllys", "Marko Kiprusoff", "Petteri Nummelin", "Kimmo Timonen", "Sami Salo", "Ossi Väänänen", "Aki-Petteri Berg", "Antti-Jussi Niemi", "Janne Grönvall", "Raimo Helminen", "Antti Laaksonen", "Tomi Kallio", "Niko Kapanen", "Sami Kapanen", "Jukka Hentunen", "Timo Pärssinen", "Juha Lind", "Toni Sihvonen", "Kimmo Rintanen", "Tony Virta", "Juha Ylönen", "Jarkko Ruutu"] },
    { id: "wc04", label: "World Cup 2004", year: 2004, res: "hopea", roster: ["Miikka Kiprusoff", "Kari Lehtonen", "Vesa Toskala", "Aki-Petteri Berg", "Toni Lydman", "Janne Niinimaa", "Teppo Numminen", "Joni Pitkänen", "Sami Salo", "Kimmo Timonen", "Ossi Väänänen", "Mikko Eloranta", "Niklas Hagman", "Riku Hahl", "Jukka Hentunen", "Olli Jokinen", "Niko Kapanen", "Mikko Koivu", "Saku Koivu", "Antti Laaksonen", "Jere Lehtinen", "Ville Nieminen", "Ville Peltonen", "Jarkko Ruutu", "Tuomo Ruutu", "Teemu Selänne"] },
    { id: "og06", label: "Olympialaiset 2006", year: 2006, res: "hopea", roster: ["Fredrik Norrena", "Antero Niittymäki", "Niklas Bäckström", "Petteri Nummelin", "Kimmo Timonen", "Lasse Kukkonen", "Sami Salo", "Aki-Petteri Berg", "Teppo Numminen", "Toni Lydman", "Antti-Jussi Niemi", "Teemu Selänne", "Ville Nieminen", "Saku Koivu", "Olli Jokinen", "Niklas Hagman", "Ville Peltonen", "Mikko Koivu", "Antti Laaksonen", "Jukka Hentunen", "Jere Lehtinen", "Jussi Jokinen", "Jarkko Ruutu", "Niko Kapanen"] },
    { id: "mm06", label: "MM 2006", year: 2006, res: "pronssi", roster: ["Petteri Nummelin", "Lasse Kukkonen", "Pekka Saravo", "Aki-Petteri Berg", "Mikko Luoma", "Tuukka Mäntylä", "Mikko Lehtonen (s. 1978)", "Sean Bergenheim", "Olli Jokinen", "Tuomo Ruutu", "Ville Peltonen", "Antti Miettinen", "Mikko Koivu", "Tommi Santala", "Riku Hahl", "Jari Viuhkola", "Jukka Hentunen", "Jani Rita", "Jussi Jokinen", "Jarkko Ruutu", "Esa Pirnes", "Tomi Kallio", "Antero Niittymäki", "Fredrik Norrena", "Niklas Bäckström"] },
    { id: "mm07", label: "MM 2007", year: 2007, res: "hopea", roster: ["Kari Lehtonen", "Fredrik Norrena", "Sinuhe Wallinheimo", "Aki-Petteri Berg", "Ville Koistinen", "Lasse Kukkonen", "Jukka-Pekka Laamanen", "Tuukka Mäntylä", "Petteri Nummelin", "Pekka Saravo", "Toni Söderholm", "Sean Bergenheim", "Jukka Hentunen", "Tomi Kallio", "Niko Kapanen", "Mikko Koivu", "Petri Kontiola", "Jere Lehtinen", "Antti Miettinen", "Timo Pärssinen", "Ville Peltonen", "Mika Pyörälä", "Jarkko Ruutu", "Tuomo Ruutu", "Jari Viuhkola"] },
    { id: "mm08", label: "MM 2008", year: 2008, res: "pronssi", roster: ["Sean Bergenheim", "Riku Hahl", "Hannes Hyvönen", "Mikko Jokela", "Jussi Jokinen", "Olli Jokinen", "Niko Kapanen", "Ville Koistinen", "Mikko Koivu", "Saku Koivu", "Sami Lepistö", "Mikko Luoma", "Antti-Jussi Niemi", "Janne Niskala", "Ville Peltonen", "Antti Pihlström", "Esa Pirnes", "Mika Pyörälä", "Tuomo Ruutu", "Anssi Salmela", "Teemu Selänne", "Ossi Väänänen", "Niklas Bäckström", "Karri Rämö", "Petri Vehanen"] },
    { id: "og10", label: "Olympialaiset 2010", year: 2010, res: "pronssi", roster: ["Niklas Bäckström", "Miikka Kiprusoff", "Antero Niittymäki", "Lasse Kukkonen", "Sami Lepistö", "Toni Lydman", "Janne Niskala", "Joni Pitkänen", "Sami Salo", "Kimmo Timonen", "Valtteri Filppula", "Niklas Hagman", "Jarkko Immonen", "Olli Jokinen", "Niko Kapanen", "Mikko Koivu", "Saku Koivu", "Jere Lehtinen", "Antti Miettinen", "Ville Peltonen", "Jarkko Ruutu", "Tuomo Ruutu", "Teemu Selänne"] },
    { id: "mm11", label: "MM 2011", year: 2011, res: "kulta", roster: ["Niko Hovinen", "Teemu Lassila", "Petri Vehanen", "Topi Jaakola", "Lasse Kukkonen", "Sami Lepistö", "Janne Niskala", "Pasi Puistola", "Anssi Salmela", "Ossi Väänänen", "Jyrki Välivaara", "Juhamatti Aaltonen", "Mikael Granlund", "Jarkko Immonen", "Jesse Joensuu", "Niko Kapanen", "Mikko Koivu", "Leo Komarov", "Janne Lahti", "Jani Lajunen", "Petteri Nokelainen", "Janne Pesonen", "Antti Pihlström", "Mika Pyörälä", "Tuomo Ruutu"] },
    { id: "og14", label: "Olympialaiset 2014", year: 2014, res: "pronssi", roster: ["Antti Niemi", "Kari Lehtonen", "Tuukka Rask", "Olli Määttä", "Ossi Väänänen", "Lasse Kukkonen", "Sami Salo", "Sami Lepistö", "Juuso Hietanen", "Kimmo Timonen", "Sami Vatanen", "Teemu Selänne", "Olli Jokinen", "Tuomo Ruutu", "Aleksander Barkov", "Jori Lehterä", "Sakari Salminen", "Jarkko Immonen", "Petri Kontiola", "Lauri Korpikoski", "Jussi Jokinen", "Antti Pihlström", "Juhamatti Aaltonen", "Mikael Granlund", "Leo Komarov"] },
    { id: "mm14", label: "MM 2014", year: 2014, res: "hopea", roster: ["Atte Ohtamaa", "Tommi Kivistö", "Jere Karalahti", "Tuukka Mäntylä", "Juuso Hietanen", "Ville Lajunen", "Olli Jokinen", "Petteri Wirtanen", "Veli-Matti Savinainen", "Jori Lehterä", "Miikka Salomäki", "Pekka Jormakka", "Jarkko Immonen", "Petri Kontiola", "Jyri Marttinen", "Olli Palola", "Tomi Sallinen", "Jere Sallinen", "Erik Haula", "Tommi Huhtala", "Leo Komarov", "Iiro Pakarinen", "Mikko Koskinen", "Juuse Saros", "Pekka Rinne"] },
    { id: "mm16", label: "MM 2016", year: 2016, res: "hopea", roster: ["Juuse Saros", "Mikko Koskinen", "Niklas Bäckström", "Ville Pokka", "Tommi Kivistö", "Lasse Kukkonen", "Topi Jaakola", "Esa Lindell", "Anssi Salmela", "Juuso Hietanen", "Atte Ohtamaa", "Mikko Koivu", "Sebastian Aho", "Jani Lajunen", "Patrik Laine", "Jussi Jokinen", "Mika Pyörälä", "Jarno Koskiranta", "Antti Pihlström", "Tomi Sallinen", "Teemu Pulkkinen", "Aleksander Barkov", "Mikael Granlund", "Leo Komarov", "Mikko Rantanen"] },
    { id: "mm19", label: "MM 2019", year: 2019, res: "kulta", roster: ["Kevin Lankinen", "Veini Vehviläinen", "Jussi Olkinuora", "Mikko Lehtonen", "Oliwer Kaski", "Henri Jokiharju", "Petteri Lindbohm", "Miika Koivisto", "Atte Ohtamaa", "Jani Hakanpää", "Niko Mikkola", "Marko Anttila", "Arttu Ilomäki", "Veli-Matti Savinainen", "Niko Ojamäki", "Juhani Tyrväinen", "Kaapo Kakko", "Toni Rajala", "Eetu Luostarinen", "Joel Kiviranta", "Sakari Manninen", "Kristian Kuusela", "Jere Sallinen", "Harri Pesonen", "Juho Lammikko"] },
    { id: "mm21", label: "MM 2021", year: 2021, res: "hopea", roster: ["Ville Pokka", "Olli Määttä", "Tony Sund", "Oliwer Kaski", "Kim Nousiainen", "Petteri Lindbohm", "Miika Koivisto", "Mikael Seppälä", "Atte Ohtamaa", "Axel Rindell", "Marko Anttila", "Mikael Ruohomaa", "Anton Lundell", "Niko Ojamäki", "Jere Innala", "Arttu Ruotsalainen", "Hannes Björninen", "Jere Karjalainen", "Petri Kontiola", "Teemu Turunen", "Peter Tiivola", "Valtteri Puustinen", "Jere Sallinen", "Saku Mäenalanen", "Iiro Pakarinen", "Harri Säteri", "Janne Juvonen", "Jussi Olkinuora"] },
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
    { name: 'Ruudun veljekset', m: ['Tuomo Ruutu', 'Jarkko Ruutu'], b: 0.8 },
    { name: 'Granlundin veljekset', m: ['Mikael Granlund', 'Markus Granlund'], b: 0.8 },
    { name: 'Isä ja poika Kapanen', m: ['Sami Kapanen', 'Kasperi Kapanen'], b: 0.8 },
    { name: 'Isä ja poika Hagman', m: ['Matti Hagman', 'Niklas Hagman'], b: 0.8 },
    { name: 'Kultaketju 1995', m: ['Saku Koivu', 'Jere Lehtinen', 'Ville Peltonen'], b: 0.8 },
    { name: 'Oilersin dynastia', m: ['Jari Kurri', 'Esa Tikkanen', 'Reijo Ruotsalainen'], b: 0.8 },
    { name: 'Dallasin suomalaiset', m: ['Roope Hintz', 'Miro Heiskanen', 'Esa Lindell', 'Jere Lehtinen', 'Juha Lind'], b: 0.6 },
    { name: 'Floridan mestarit', m: ['Aleksander Barkov', 'Anton Lundell', 'Niko Mikkola'], b: 0.6 },
    { name: 'Carolinan kaksikko', m: ['Sebastian Aho', 'Teuvo Teräväinen'], b: 0.6 },
    { name: 'Coloradon mestarit 2022', m: ['Mikko Rantanen', 'Artturi Lehkonen'], b: 0.6 },
  ];

  // Vain kultajoukkueet: muuten bonus tulisi lähes jokaiselle kentälle
  const MEDAL_CHEM = { kulta: { b: 0.7, word: 'kultajoukkue' } };
  const MEDAL_MIN = 3;
  const CHEM_CAP = 2.5;

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
    // Mitalijoukkue: vähintään kolme pelaajaa samasta mitalin voittaneesta turnausjoukkueesta (vain paras lasketaan)
    let medal = null;
    for (const t of TOURNAMENTS) {
      if (!MEDAL_CHEM[t.res]) continue;
      const hit = t.roster.filter((n) => names.includes(n));
      if (hit.length < MEDAL_MIN) continue;
      const b = MEDAL_CHEM[t.res].b + 0.2 * (hit.length - MEDAL_MIN);
      if (!medal || b > medal.b) medal = { name: `${t.label} · ${MEDAL_CHEM[t.res].word}`, b, who: hit, kind: 'medal' };
    }
    if (medal) chem.push(medal);
    const eraCount = {};
    for (const p of Object.values(lineup)) for (const e of p.e) eraCount[e] = (eraCount[e] || 0) + 1;
    let bestEra = null;
    for (const [e, c] of Object.entries(eraCount)) if (!bestEra || c > bestEra[1]) bestEra = [e, c];
    // Sukupolvi: koko kenttä samalta aikakaudelta (harvinainen)
    if (bestEra && bestEra[1] === 6) {
      const who = Object.values(lineup).map((p) => p.n);
      chem.push({ name: 'Saman sukupolven kenttä (' + ERAS[bestEra[0]] + ')', b: 0.8, who, kind: 'era' });
    }
    // Katto: kultasuonista saa yhteensä enintään CHEM_CAP
    const raw = chem.reduce((a, c) => a + c.b, 0);
    const chemTotal = Math.min(raw, CHEM_CAP);
    return { base, chem, chemTotal, chemRaw: raw, capped: raw > CHEM_CAP, total: base + chemTotal, rows };
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

  // Turnauskohtainen kunto: pelaajan arvio (r) on huipputaso, ja ikä turnauksen aikaan laskee sitä.
  // Kenttäpelaajat ovat huipussaan 24–31-vuotiaina, maalivahdit 27–34-vuotiaina.
  // Nuorempi: −1 / vuosi. Vanhempi: −(0,5·x + 0,06·x²), x = vuodet huippuiän yli.
  function tournamentDate(t) {
    // Olympialaiset helmikuussa, MM-kisat toukokuussa, Kanada-cup ja World Cup syyskuussa
    const month = t.id.startsWith('og') ? 1 : /^(cc|wc)/.test(t.id) ? 8 : 4;
    return Date.UTC(t.year, month, 15);
  }
  function formDelta(age, isG) {
    const lo = isG ? 27 : 24, hi = isG ? 34 : 31;
    if (age < lo) return -(lo - age);
    if (age > hi) { const x = age - hi; return -(0.5 * x + 0.06 * x * x); }
    return 0;
  }
  // Poikkeukset ikäkäyrään: turnauksessa loistaneet pelaajat (lähde: englanninkielisen Wikipedian
  // turnaussivujen palkinnot ja tilastot, haettu 2026-11-25). MM 1998–2001 -sivuilla ei ole tilastoja.
  // A = IIHF:n paras pelaaja/pelipaikka, MVP tai tähdistökenttä: ikävähennyksestä jää 25 %.
  // B = pistepörssin top 10 tai torjuntaprosentin top 5: ikävähennyksestä jää 50 %.
  const STANDOUT = {
    og88: { B: ["Erkki Lehtonen"] },
    mm92: { A: ["Markus Ketterer", "Timo Jutila", "Jarkko Varvio"], B: ["Mikko Mäkelä", "Mika Nieminen", "Timo Saarikoski", "Rauli Raitanen"] },
    mm94: { A: ["Timo Jutila", "Saku Koivu", "Jari Kurri"], B: ["Mikko Mäkelä", "Jere Lehtinen", "Jarmo Myllys"] },
    og94: { A: ["Timo Jutila"], B: ["Mika Nieminen"] },
    mm95: { A: ["Jarmo Myllys", "Saku Koivu", "Timo Jutila", "Jere Lehtinen", "Ville Peltonen"], B: ["Raimo Helminen"] },
    og98: { B: ["Teemu Selänne", "Saku Koivu", "Jere Lehtinen"] },
    wc04: { A: ["Kimmo Timonen", "Saku Koivu"], B: ["Miikka Kiprusoff"] },
    og06: { A: ["Antero Niittymäki", "Teemu Selänne", "Saku Koivu", "Kimmo Timonen"], B: ["Ville Peltonen", "Olli Jokinen", "Jere Lehtinen"] },
    mm06: { A: ["Petteri Nummelin"], B: ["Fredrik Norrena"] },
    mm07: { A: ["Kari Lehtonen", "Petteri Nummelin"] },
    mm08: { B: ["Niklas Bäckström"] },
    og10: { B: ["Niklas Hagman"] },
    mm11: { A: ["Jarkko Immonen"], B: ["Mikael Granlund", "Petri Vehanen"] },
    og14: { A: ["Teemu Selänne", "Mikael Granlund"] },
    mm14: { A: ["Pekka Rinne"], B: ["Jori Lehterä"] },
    mm16: { A: ["Mikko Koskinen", "Patrik Laine", "Mikael Granlund"], B: ["Mikko Koivu"] },
    mm19: { A: ["Mikko Lehtonen"], B: ["Kevin Lankinen"] },
    mm21: { A: ["Jussi Olkinuora"] },
    og22: { A: ["Mikko Lehtonen", "Sakari Manninen"], B: ["Teemu Hartikainen", "Harri Säteri"] },
    mm22: { A: ["Jussi Olkinuora", "Mikko Lehtonen", "Sakari Manninen"], B: ["Mikael Granlund"] },
  };
  const GOLD_FORM = 4;
  // Tähtivire: turnauksessa loistanut pelaaja oli tulessa. A (IIHF:n palkinto, tähdistökenttä) +2, B (pistekärki, torjuntakärki) +1.
  // Kertyy kultavireen päälle.
  const STAR_FORM = { A: 2, B: 1 };
  function inTournament(p, tid) {
    const t = TOURNAMENTS.find((x) => x.id === tid);
    if (!p || !t || !BORN[p.n]) return p;
    const age = (tournamentDate(t) - Date.parse(BORN[p.n])) / (365.25 * 864e5);
    const ex = STANDOUT[tid] || {};
    const star = ex.A && ex.A.includes(p.n) ? 'A' : ex.B && ex.B.includes(p.n) ? 'B' : null;
    const d = formDelta(age, p.p === 'G') * (star === 'A' ? 0.25 : star === 'B' ? 0.5 : 1);
    // Kultavire: oikean kultajoukkueen pelaajat olivat sinä vuonna parhaimmillaan yhdessä
    const vire = t.res === 'kulta' ? GOLD_FORM : 0;
    const starBonus = star ? STAR_FORM[star] : 0;
    return { ...p, r: Math.round(p.r + d + vire + starBonus), peak: p.r, age: Math.floor(age), star, vire, starBonus };
  }

  // Säädettävät: CONFIG.spread = kuinka paljon tuuria, CONFIG.offset = vastustajien lisävahvuus
  // offset 2 → 0.7 (25.11.2026): turnauskunto ja poikkeuslista laskivat keskivahvuutta noin 1,3;
  // kullan todennäköisyys pidettiin ennallaan (noin 8–9 % ahneella valinnalla)
  // 26.11.2026: kultavire +4 ja finaalin lisävahvuus +2 → offset 0,9. Ahneen draftin mediaani 89,5 voittaa
  // kullan noin joka 8. kausi (noin 12 %), mitali noin 60 %.
  // 26.11.2026 ilta: tähtivire (+2/+1) nosti ahneen draftin mediaanin 89,5 → 90,0 ja kullan 14,6 → 19 %;
  // offset 0,9 → 1,4 palauttaa kullan noin 15 %:iin. Tähdet ohittava draft on hieman aiempaa vaikeampi.
  const CONFIG = { spread: 3.0, offset: 1.4 };
  const winProb = (team, oppR) => 1 / (1 + Math.exp(-(team - oppR - CONFIG.offset) / CONFIG.spread));

  function goals(rng, win) {
    const w = 2 + Math.floor(rng() * rng() * 6);
    const l = Math.floor(rng() * w);
    return win ? [w, l] : [l, w];
  }

  // Vastustajien kauden vire: jokainen maa saa kaudeksi vireen −3…+3 (keskimäärin 0).
  // Vire arvotaan ennen kautta ja kerrotaan ennusteessa, joten kaudet eroavat toisistaan.
  const OPP_FORM_W = [1, 2, 3, 4, 3, 2, 1]; // −3 … +3
  const CONTENDERS = ['Kanada', 'Ruotsi', 'USA', 'Tšekki', 'Sveitsi', 'Slovakia', 'Saksa'];
  function rollOppForm(rng = Math.random) {
    const tot = OPP_FORM_W.reduce((a, b) => a + b, 0);
    const form = {};
    for (const o of OPPONENTS) {
      let x = rng() * tot, k = 0;
      while (x >= OPP_FORM_W[k]) { x -= OPP_FORM_W[k]; k++; }
      form[o.n] = k - 3;
    }
    return form;
  }

  // Ottelun sanallinen tulkinta Suomen voittomahdollisuuden mukaan
  function gameOutlook(p, win) {
    if (win) return p < 0.35 ? 'Yllätysvoitto' : p < 0.55 ? 'Tasaisen ottelun voitto' : 'Odotettu voitto';
    return p >= 0.55 ? 'Yllätystappio' : p >= 0.35 ? 'Tasaisen ottelun tappio' : 'Odotettu tappio';
  }

  function playGame(rng, team, o, stage, vire = 0, edge = 0) {
    const oppR = o.r + vire + edge;
    const p = winProb(team, oppR);
    const win = rng() < p;
    const extra = rng() < 0.22; // ratkesi jatkoajalla tai voittolaukauksilla
    let [f, a] = goals(rng, win);
    if (extra) {
      const t = Math.min(f, a);
      f = win ? t + 1 : t;
      a = win ? t : t + 1;
    }
    return { stage, opp: o.n, win, ot: extra, f, a, oppBase: o.r, oppR, vire, edge, p };
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
    { id: 'eht1', label: 'EHT 1/4 · Karjala Cup', cup: 'Karjala Cup', host: 'Suomi' },
    { id: 'eht2', label: 'EHT 2/4 · Swiss Ice Hockey Games', cup: 'Swiss Ice Hockey Games', host: 'Sveitsi' },
    { id: 'eht3', label: 'EHT 3/4 · Beijer Hockey Games', cup: 'Beijer Hockey Games', host: 'Ruotsi' },
    { id: 'eht4', label: 'EHT 4/4 · Czech Hockey Games', cup: 'Czech Hockey Games', host: 'Tšekki' },
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

  // Muut kentät: peli valitsee 6 hyökkääjää ja 3 puolustajaa. Ne tekevät maaleja ja ottavat jäähyjä,
  // mutta eivät vaikuta otteluiden tuloksiin. Ensisijaisesti draftin turnausjoukkueista, sitten samoilta
  // aikakausilta. Yli 90:n tähtiä ei valita, jottei muissa kentissä pelaa parempia kuin omassa.
  const DEPTH_MAX = 90;
  function pickDepth(rng, chosen, draws = []) {
    const names = chosen.map((p) => p.n);
    const eras = new Set(chosen.flatMap((p) => p.e));
    const pool = PLAYERS.filter((p) => p.p !== 'G' && !names.includes(p.n) && p.r <= DEPTH_MAX);
    const tids = draws.filter((d) => TOURNAMENTS.some((t) => t.id === d));
    const fromTour = new Map();
    for (const tid of shuffle(rng, tids)) {
      for (const n of TOURNAMENTS.find((t) => t.id === tid).roster) {
        const p = pool.find((x) => x.n === n);
        if (p && !fromTour.has(n)) fromTour.set(n, inTournament(p, tid));
      }
    }
    const fromEras = pool.filter((p) => p.e.some((e) => eras.has(e)));
    const take = (isD, k) => {
      const isPos = (p) => (p.p === 'D') === isD;
      const t1 = shuffle(rng, [...fromTour.values()].filter(isPos));
      const t2 = shuffle(rng, fromEras.filter((p) => isPos(p) && !fromTour.has(p.n)));
      const t3 = shuffle(rng, pool.filter((p) => isPos(p) && !fromTour.has(p.n) && !t2.includes(p)));
      return [...t1, ...t2, ...t3].slice(0, k).map((p) => ({ n: p.n, eff: p.r - 4, pos: isD ? 'D' : p.p, depth: true }));
    };
    return [...take(false, 6), ...take(true, 3)];
  }

  // Kauden ennuste: simuloidaan sama vahvuus monta kertaa kiinteällä siemenellä (sama vahvuus = sama luku)
  function seededRng(seed) {
    let a = seed >>> 0;
    return () => {
      a = (a + 0x6d2b79f5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  // Kauden lopputulos järjestyslukuna: 0 alkusarja, 1 puolivälierä, 2 neljäs, 3 pronssi, 4 hopea, 5 kulta
  const RANK_NAME = ['putoaminen alkusarjassa', 'puolivälierä', 'neljäs sija', 'MM-pronssi', 'MM-hopea', 'MM-kulta'];
  function resultRank(r) {
    if (r.medal) return { bronze: 3, silver: 4, gold: 5 }[r.medal];
    if (!r.advanced) return 0;
    const last = r.games.filter((g) => g.stage === 'po').pop();
    return last && last.round === 'Pronssiottelu' ? 2 : 1;
  }
  // Tulos suhteessa ennusteeseen: yli, odotusten mukainen vai alle (30 %:n hännät)
  function vsForecast(f, r) {
    if (!f || !f.dist) return null;
    const k = resultRank(r);
    const atLeast = f.dist.slice(k).reduce((a, x) => a + x, 0);
    const atMost = f.dist.slice(0, k + 1).reduce((a, x) => a + x, 0);
    const cmp = atLeast <= 0.3 ? 'up' : atMost <= 0.3 ? 'down' : 'even';
    return { cmp, rank: k, name: RANK_NAME[k], atLeast };
  }
  const fcCache = new Map();
  function forecast(teamRating, form = {}, n = 3000) {
    const key = teamRating.toFixed(2) + '|' + CONFIG.spread + '|' + CONFIG.offset + '|' + OPPONENTS.map((o) => form[o.n] || 0).join(',');
    if (fcCache.has(key)) return fcCache.get(key);
    const rng = seededRng(20261126);
    let gold = 0, medal = 0, adv = 0, perfect = 0;
    const dist = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < n; i++) {
      const r = simulateSeason(teamRating, rng, null, null, [], form);
      dist[resultRank(r)]++;
      if (r.medal === 'gold') gold++;
      if (r.medal) medal++;
      if (r.advanced) adv++;
      if (r.perfect) perfect++;
    }
    const f = { gold: gold / n, medal: medal / n, adv: adv / n, perfect: perfect / n, dist: dist.map((x) => x / n) };
    const t = f.gold >= 0.3 ? 0 : f.medal >= 0.5 ? 1 : f.medal >= 0.25 ? 2 : f.adv >= 0.5 ? 3 : 4;
    f.label = ['Kultasuosikki', 'Mitalisuosikki', 'Mitalikandidaatti', 'Puolivälieräjoukkue', 'Altavastaaja'][t];
    f.goal = ['Tavoite on MM-kulta.', 'Tavoite on mitali. Kulta olisi juhlan paikka.', 'Tavoite on puolivälierä. Mitali olisi hieno saavutus.', 'Tavoite on puolivälierä. Mitali olisi yllätys.', 'Tavoite on selvitä alkusarjasta.'][t];
    fcCache.set(key, f);
    return f;
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

  // EHT-sarjataulukko: neljä maata pelaa kaikki keskenään. Suomen ottelut on jo pelattu,
  // muiden keskinäiset ottelut simuloidaan samoilla vahvuuksilla ja kauden vireillä.
  // Pisteet: voitto 3, jatkoaikavoitto 2, jatkoaikatappio 1. Tasapisteissä maaliero, sitten tehdyt maalit.
  const EHT_TEAMS = ['Suomi', 'Ruotsi', 'Tšekki', 'Sveitsi'];
  function tableRow(n) { return { n, pts: 0, gf: 0, ga: 0, w: 0, otw: 0, otl: 0, l: 0 }; }
  function addResult(row, f, a, win, ot) {
    row.gf += f; row.ga += a;
    if (win) { if (ot) { row.otw++; row.pts += 2; } else { row.w++; row.pts += 3; } }
    else if (ot) { row.otl++; row.pts += 1; } else row.l++;
  }
  const sortTable = (rows) => rows.sort((x, y) => y.pts - x.pts || (y.gf - y.ga) - (x.gf - x.ga) || y.gf - x.gf || EHT_TEAMS.indexOf(x.n) - EHT_TEAMS.indexOf(y.n));
  function ehtTables(rng, games, form) {
    const str = (n) => opp(n).r + (form[n] || 0);
    const total = Object.fromEntries(EHT_TEAMS.map((n) => [n, tableRow(n)]));
    const stages = STAGES.slice(0, 4).map((st) => {
      const rows = Object.fromEntries(EHT_TEAMS.map((n) => [n, tableRow(n)]));
      const others = [];
      for (const g of games.filter((x) => x.stage === st.id)) {
        addResult(rows.Suomi, g.f, g.a, g.win, g.ot);
        addResult(rows[g.opp], g.a, g.f, !g.win, g.ot);
      }
      const rest = EHT_TEAMS.slice(1);
      for (let i = 0; i < rest.length; i++) for (let j = i + 1; j < rest.length; j++) {
        const [h, v] = [rest[i], rest[j]];
        const win = rng() < 1 / (1 + Math.exp(-(str(h) - str(v)) / CONFIG.spread));
        const ot = rng() < 0.22;
        let [f, a] = goals(rng, win);
        if (ot) { const t = Math.min(f, a); f = win ? t + 1 : t; a = win ? t : t + 1; }
        addResult(rows[h], f, a, win, ot);
        addResult(rows[v], a, f, !win, ot);
        others.push({ h, v, f, a, ot });
      }
      for (const n of EHT_TEAMS) for (const k of ['pts', 'gf', 'ga', 'w', 'otw', 'otl', 'l']) total[n][k] += rows[n][k];
      const table = sortTable(Object.values(rows));
      return { id: st.id, cup: st.cup, table, others, place: table.findIndex((x) => x.n === 'Suomi') + 1 };
    });
    const table = sortTable(Object.values(total));
    const place = table.findIndex((x) => x.n === 'Suomi') + 1;
    return { stages, table, place, champion: place === 1, cups: stages.filter((x) => x.place === 1).map((x) => x.cup) };
  }

  // Finaalissa vastustaja pelaa parhaansa: kulta on harvinaisempi, mitalien todennäköisyys ei muutu
  const FINAL_EDGE = 2;
  function simulateSeason(teamRating, rng = Math.random, skaters = null, goalie = null, depth = [], form = {}) {
    const games = [];
    const playGameF = (rng, team, o, stage, edge = 0) => playGame(rng, team, o, stage, form[o.n] || 0, edge);
    const eht = ['Ruotsi', 'Tšekki', 'Sveitsi'];
    for (const st of STAGES.slice(0, 4)) {
      for (const n of shuffle(rng, eht)) games.push(playGameF(rng, teamRating, opp(n), st.id));
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
      const g = playGameF(rng, teamRating, o, 'mm');
      pts += g.win ? (g.ot ? 2 : 3) : g.ot ? 1 : 0;
      games.push(g);
    }
    const groupNames = group.map((o) => o.n);
    let medal = null;
    let advanced = pts >= 10; // noin neljä voittoa riittää jatkoon
    if (advanced) {
      const qfPool = ['Sveitsi', 'Slovakia', 'Saksa', 'Tšekki', 'Latvia', 'USA', 'Ruotsi'].filter((n) => !groupNames.includes(n));
      const qf = playGameF(rng, teamRating, pickOne(rng, qfPool), 'po');
      qf.round = 'Puolivälierä';
      games.push(qf);
      if (qf.win) {
        const sfPool = ['Kanada', 'Ruotsi', 'USA', 'Tšekki'].filter((n) => n !== qf.opp);
        const sf = playGameF(rng, teamRating, pickOne(rng, sfPool), 'po');
        sf.round = 'Välierä';
        games.push(sf);
        if (sf.win) {
          const fPool = ['Kanada', 'Kanada', 'Ruotsi', 'USA'].filter((n) => n !== sf.opp && n !== qf.opp);
          const fo = pickOne(rng, fPool);
          const fin = playGameF(rng, teamRating, fo, 'po', FINAL_EDGE);
          fin.round = 'Finaali';
          games.push(fin);
          medal = fin.win ? 'gold' : 'silver';
        } else {
          const bPool = ['Ruotsi', 'USA', 'Tšekki', 'Sveitsi'].filter((n) => n !== sf.opp && n !== qf.opp);
          const br = playGameF(rng, teamRating, pickOne(rng, bPool), 'po');
          br.round = 'Pronssiottelu';
          games.push(br);
          medal = br.win ? 'bronze' : null;
        }
      }
    }
    const ehtRes = ehtTables(rng, games, form);
    if (skaters && skaters.length) for (const g of games) { assignGoals(rng, g, skaters, depth); assignPens(rng, g, [...skaters, ...depth]); }
    const W = games.filter((g) => g.win).length;
    const OTL = games.filter((g) => !g.win && g.ot).length;
    const L = games.length - W - OTL;
    const res = { games, W, L, OTL, played: games.length, groupPts: pts, advanced, medal, perfect: W === SEASON_GAMES, depth: depth.map((p) => p.n), eht: ehtRes };
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

  const api = { EHT_TEAMS, ERAS, PLAYERS, TOURNAMENTS, SLOTS, POS_LABEL, SYNERGIES, OPPONENTS, STAGES, SEASON_GAMES, CONFIG, CHEM_CAP, BORN, STANDOUT, inTournament, fitPenalty, seasonStats, pickDepth, forecast, rollOppForm, gameOutlook, CONTENDERS, FINAL_EDGE, GOLD_FORM, STAR_FORM, vsForecast, resultRank, evaluateTeam, simulateSeason, verdict, winProb, shuffle };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.Leijonat = api;
})(this);
