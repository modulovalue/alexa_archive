'use strict';

var words = {
    "gedichte": [
    {
        "text": "„Wäre, wäre, Fahrradkette“",
        "source": "Lothar Matthäus",
        "id": 1
    },
    {
        "text": "„Ich mache nie Voraussagen und werde dies auch niemals tun.“",
        "source": "Paul Gascoigne",
        "id": 2
    },
    {
        "text": "„Ich bin körperlich und physisch topfit.“",
        "source": "Thomas Häßler",
        "id": 3
    },
    {
        "text": "„Wir wollten in Bremen kein Gegentor kassieren. Das hat auch bis zum Gegentor ganz gut geklappt.“",
        "source": "Thomas Häßler",
        "id": 4
    },
    {
        "text": "„Ich hatte vom Feeling her ein gutes Gefühl.“",
        "source": "Andreas Möller",
        "id": 5
    },
    {
        "text": "„Wir müssen gewinnen, alles andere ist primär.“",
        "source": "Hans Krankl",
        "id": 6
    },
    {
        "text": "„Es ist mir völlig egal, was es wird. Hauptsache, er ist gesund.“",
        "source": "Mehmet Scholl ",
        "id": 7
    },
    {
        "text": "„Ich habe ihn nur ganz leicht retuschiert.“",
        "source": "Olaf Thon",
        "id": 8
    },
    {
        "text": "„Es ist wichtig, daß man neunzig Minuten mit voller Konzentration an das nächste Spiel denkt.“",
        "source": "Lothar Matthäus",
        "id": 9
    },
    {
        "text": "„Die Kroaten sollen auf alles treten, was sich bewegt – da hat unser Mittelfeld ja nichts zu befürchten.“",
        "source": "Berti Vogts ",
        "id": 10
    },
    {
        "text": "„Ich wage mal eine Prognose: Es könnte so oder so ausgehen.“",
        "source": "Ron Atkinson",
        "id": 11
    },
    {
        "text": "„Fußball ist Ding, Dang, Dong. Es gibt nicht nur Ding.“",
        "source": "Giovanni Trappatoni",
        "id": 12
    },
    {
        "text": "„Ihr Fünf spielt jetzt vier gegen drei.“",
        "source": "Fritz Langner",
        "id": 13
    },
    {
        "text": "„Würden wir jede Woche so spielen, wären unsere Leistungen nicht so schwankend.“",
        "source": "Bryan Robson",
        "id": 14
    },
    {
        "text": "„Bei der ",
        "source": "Dieter Nuhr",
        "id": 15
    },
    {
        "text": "„Wenn der Ball am Torwart vorbei geht, ist es meist ein Tor.“",
        "source": "Mario Basler",
        "id": 16
    },
    {
        "text": "„Am Ergebnis wird sich nicht mehr viel ändern. Es sei denn, es schießt einer ein Tor.“",
        "source": "Franz Beckenbauer",
        "id": 17
    },
    {
        "text": "„Die schönsten Tore sind diejenigen, bei denen der Ball schön flach oben rein geht.“",
        "source": "Mehmet Scholl",
        "id": 18
    },
    {
        "text": "„Wir sind eine gut intrigierte Truppe.“",
        "source": "Lothar Matthäus",
        "id": 19
    },
    {
        "text": "„Das habe ich ihm dann auch verbal gesagt.“",
        "source": "Mario Basler",
        "id": 20
    },
    {
        "text": "„Ich hab gleich gemerkt, das ist ein Druckschmerz, wenn man drauf drückt.“",
        "source": "Lothar Matthäus",
        "id": 21
    },
    {
        "text": "„Zuerst hatten wir kein Glück, und dann kam auch noch Pech dazu.“",
        "source": "Jürgen Wegmann",
        "id": 22
    },
    {
        "text": "„Ich habe viel von meinem Geld für Alkohol, Weiber und schnelle Autos ausgegeben. Den Rest habe ich einfach verprasst.“",
        "source": "George Best",
        "id": 23
    },
    {
        "text": "„Ich bin immer sehr selbstkritisch, auch mir selbst gegenüber.“",
        "source": "Andreas Möller",
        "id": 24
    },
    {
        "text": "„Der ",
        "source": "Fritz Walter jun.",
        "id": 25
    },
    {
        "text": "„Mailand oder Madrid – Hauptsache Italien!“",
        "source": "Andreas Möller",
        "id": 26
    },
    {
        "text": "„Zwei Chancen, ein Tor – das nenne ich hundertprozentige Chancenauswertung.“",
        "source": "Roland Wohlfahrt",
        "id": 27
    },
    {
        "text": "„Da geht er, ein großer Spieler. Ein Mann wie Steffi Graf.“",
        "source": "Jörg Dahlmann",
        "id": 28
    },
    {
        "text": "„Sollten Sie dieses Spiel atemberaubend finden, dann haben Sie es an den Bronchien.“",
        "source": "Marcel Reif",
        "id": 29
    },
    {
        "text": "„Man darf jetzt nicht alles so schlecht reden, wie es war.“",
        "source": "Fredi Bobic",
        "id": 30
    },
    {
        "text": "„In letzter Konsequenz waren wir nicht konsequent genug.“",
        "source": "Karl-Heinz Rummenigge",
        "id": 31
    },
    {
        "text": "„Ich glaube, dass der Tabellenerste jederzeit den Spitzenreiter schlagen kann.“",
        "source": "Berti Vogts",
        "id": 32
    },
    {
        "text": "„Das wird alles von den Medien hochsterilisiert.“",
        "source": "Bruno Labbadia",
        "id": 33
    },
    {
        "text": "„Jetzt müssen wir die Köpfe hochkrempeln. Und die Ärmel natürlich auch.“ ",
        "source": "Lukas Podolski",
        "id": 34
    },
    {
        "text": "„Das interessiert mich wie eine geplatzte Currywurst im ostfriesischen Wattenmeer.“",
        "source": "Dieter Eilts",
        "id": 35
    },
    {
        "text": "„Es muss eine Kehrtwende geben. Und die muss 360 Grad sein.“",
        "source": "Eduard Geyer",
        "id": 36
    },
    {
        "text": "„Fußball ist ein Spiel von 22 Leuten, die rumlaufen, und am Ende gewinnt immer ",
        "source": "Gary Lineker",
        "id": 37
    },
    {
        "text": "„Die Achillesferse von Bobic ist die rechte Schulter.“",
        "source": "Gerd Rubenbauer",
        "id": 38
    },
    {
        "text": "„Wir können so was nicht trainieren, sondern nur üben.“",
        "source": "Michael Ballack",
        "id": 39
    },
    {
        "text": "„Es steht im Augenblick 1:1, aber es hätte auch umgekehrt lauten können.“",
        "source": "Heribert Faßbender",
        "id": 40
    },
    {
        "text": "„Die Polen darf man nicht unterschätzen. Diese Balkan-Kicker sind unberechenbar!“",
        "source": "Heribert Faßbender",
        "id": 41
    },
    {
        "text": "„Wenn wir alle schlagen, können wir es schaffen.“",
        "source": "Horst Hrubesch",
        "id": 42
    },
    {
        "text": "„Halten Sie die Luft an, und vergessen Sie das Atmen nicht.“",
        "source": "Johannes B. Kerner",
        "id": 43
    },
    {
        "text": "„Die Spieler von Ghana erkennen Sie an den gelben Stutzen.“",
        "source": "Marcel Reif ",
        "id": 44
    },
    {
        "text": "„Zu 50 Prozent stehen wir im Viertelfinale, aber die halbe Miete ist das noch lange nicht!“",
        "source": "Rudi Völler",
        "id": 45
    },
    {
        "text": "„Wenn man ein 0:2 kassiert, dann ist ein 1:1 nicht mehr möglich.“",
        "source": "Aleksander Ristic",
        "id": 46
    },
    {
        "text": "„Nichts ist scheißer als Platz zwei.“",
        "source": "Eric Meijer",
        "id": 47
    },
    {
        "text": "„Ich hatte noch nie Streit mit meiner Frau. Bis auf das eine Mal, als sie mit auf´s Hochzeitsfoto wollte.“",
        "source": "Mehmet Scholl",
        "id": 48
    },
    {
        "text": "„Meine Spieler könne 50-Meter-Pässe spielen, 5 m weit und 45 m hoch.“",
        "source": "Uwe Klimaschewski",
        "id": 49
    },
    {
        "text": "„Man muss nicht immer die absolute Mehrheit hinter sich haben, manchmal reichen auch 51 Prozent.“",
        "source": "Christph Daum",
        "id": 50
    },
    {
        "text": "„Mal verliert man und mal gewinnen die anderen“.",
        "source": "Otto Rehagel",
        "id": 51
    },
    {
        "text": "„Ich sage nur ein Wort: Vielen Dank!“",
        "source": "Horst Hrubesch",
        "id": 52
    },
    {
        "text": "„Ich habe es mir sehr genau überlegt und dann spontan zugesagt“.",
        "source": "Toni Polster",
        "id": 53
    },
    {
        "text": "„Jede Seite hat zwei Medaillen!“",
        "source": "Mario Basler",
        "id": 54
    },
    {
        "text": "„Da gehe ich mit Ihnen ganz chloroform.“",
        "source": "Helmut Schön",
        "id": 55
    },
    {
        "text": "„Ob Felix Magath die Titanic gerettet hätte, weiß ich nicht. Aber die Überlebenden wären topfit gewesen.“",
        "source": "Jan-Aage Fjörtoft",
        "id": 56
    },
    {
        "text": "„Der Trainer hatte nach den ganzen Ausfällen im Angriff nur noch die Wahl zwischen mir und dem Busfahrer. Da der Busfahrer seine Schuhe nicht dabei hatte, habe ich gespielt.“",
        "source": "Jan-Aage Fjörtoft",
        "id": 57
    },
    {
        "text": "„Ich habe nie an unserer Chancenlosigkeit gezweifelt.“",
        "source": "Richard Golz",
        "id": 58
    },
    {
        "text": "„Die Sanitäter haben mir sofort eine Invasion gelegt.“",
        "source": "Fritz Walter jun.",
        "id": 59
    },
    {
        "text": "„Ich kann nicht mehr als schießen. Außerdem standen da 40 Leute auf der Linie.“",
        "source": "Toni Polster ",
        "id": 60
    },
    {
        "text": "„In der ersten Halbzeit haben wir ganz gut gespielt, in der zweiten fehlte uns die Kontinu…, äh Kontuni…, ach scheiß Fremdwörter: Wir waren nicht beständig genug!“",
        "source": "Pierre Littbarski",
        "id": 61
    },
    {
        "text": "„Das Chancenplus war ausgeglichen“",
        "source": "Lothar Matthäus",
        "id": 62
    },
    {
        "text": "„Für mich war es noch nie ein Problem, aus zwanzig Metern über die Latte zu schießen.“",
        "source": "Axel Kruse",
        "id": 63
    },
    {
        "text": "„Alles andere als die Nicht-Meisterschaft wäre eine Katastrophe gewesen.“",
        "source": "Thomas Strunz",
        "id": 64
    },
    {
        "text": "„Alles hat gestimmt: Das Wetter war gut, die Stimmung war gut, der Platz war gut – nur wir waren schlecht.“",
        "source": "Dariusz Wosz",
        "id": 65
    },
    {
        "text": "„Auswärts sind die Greuther stärker als in der Fremde.“",
        "source": "Carsten Fuss",
        "id": 66
    },
    {
        "text": "„Bei manchen Spielern fehlt etwas, deshalb spielen sie auch bei mir und nicht in Barcelona.“",
        "source": "Aleksander Ristic",
        "id": 67
    },
    {
        "text": "„Bei so einem Spiel muß man die Hosen runterlassen und sein wahres Gesicht zeigen.“",
        "source": "Alexander Strehmel",
        "id": 68
    },
    {
        "text": "„Bundesligaspiele sind keine russischen Wahlen, bei denen immer gewonnen wird.“",
        "source": "Gyula Lorant",
        "id": 69
    },
    {
        "text": "„Das Gegentor fiel zum psychologisch ungünstigsten Zeitpunkt. Aber man muss an dieser Stelle auch einmal die Frage stellen, ob es Gegentore gibt, die zu einem psychologisch günstigen Zeitpunkt fallen.“",
        "source": "Christoph Daum",
        "id": 70
    },
    {
        "text": "„Das ist eine Deprimierung.“ ",
        "source": "Andreas Möller",
        "id": 71
    },
    {
        "text": "„Das Runde muß ins Eckige.“",
        "source": "Helmut Schulte",
        "id": 72
    },
    {
        "text": "„Das Schönste an Stuttgart ist die ",
        "source": "Thomas Strunz",
        "id": 73
    },
    {
        "text": "„Das war europäische ",
        "source": "Felix Magath",
        "id": 74
    },
    {
        "text": "„Ich habe keine Rituale, bloß die Dinge, die man immer gleich macht“.",
        "source": "Michael Ballack",
        "id": 75
    },
    {
        "text": "„Viele sehen es negativ, dass wir schlecht gespielt haben“.",
        "source": "Kevin Kuranyi",
        "id": 76
    },
    {
        "text": "„Jetzt müssen wir die Köpfe hochkrempeln. Und die Ärmel natürlich auch.“",
        "source": "Lukas Podolski",
        "id": 77
    },
    {
        "text": "„Man muss nicht immer das Salz in der Suppe suchen“.",
        "source": "Philipp Lahm",
        "id": 78
    },
    {
        "text": "…“Ein Trainer ist nicht ein Idiot. Ein Trainier sehen was passiert in Platz. In diese Spiel es waren zwei, drei oder vier Spieler, die waren schwach wie eine Flasche leer … Strunz … was erlauben Strunz?“…. Ich habe fertig!“ ",
        "source": "Giovanni Trapattoni",
        "id": 79
    },
    {
        "text": "„Der Dieter und ich, wir haben uns überlegt, dass wir von jetzt an nur noch Foul spielen, wenn es nötig ist.“",
        "source": "Jan Kocian",
        "id": 80
    },
    {
        "text": "„Der Grund war nicht die Ursache, sondern der Auslöser.“",
        "source": "Franz Beckenbauer",
        "id": 81
    },
    {
        "text": "„Der ist mit allen Abwassern gewaschen.“",
        "source": "Norbert Dickel",
        "id": 82
    },
    {
        "text": "„In einem Jahr hab ich mal 15 Monate durchgespielt.“",
        "source": "Franz Beckenbauer",
        "id": 83
    },
    {
        "text": "„Der Oberarm gehört zur Hand.“",
        "source": "Beni Turnher",
        "id": 84
    },
    {
        "text": "„Der Rasen sieht alt und gebraucht aus, irgendwie erinnert er mich an die Kleider der Kelly Family.“",
        "source": "Beni Turnher",
        "id": 85
    },
    {
        "text": "„Der springt so hoch; wenn der wieder runter kommt, liegt auf seiner Glatze Schnee.“",
        "source": "Norbert Nachtweih",
        "id": 86
    },
    {
        "text": "„It’s not a wish concert“",
        "source": "Jürgen Klopp ",
        "id": 87
    },
    {
        "text": "„Die ",
        "source": "Andreas Brehme",
        "id": 88
    },
    {
        "text": "„Die deutschen Spieler hören erst dann auf zu kämpfen, wenn sie im Bus sitzen.“",
        "source": "Ronald Koeman",
        "id": 89
    },
    {
        "text": "„Die ersten 90 Minuten sind die schwersten.“",
        "source": "Bobby Robson",
        "id": 90
    },
    {
        "text": "„Qualität kommt von Qual“",
        "source": "Felix Magath",
        "id": 91
    },
    {
        "text": "„Die Schotten sind meistens eher zu Hause als ihre Postkarten.“",
        "source": "Wilfried Mohren",
        "id": 92
    },
    {
        "text": "„Die Schweden sind keine Holländer – das hat man ganz genau gesehen.“",
        "source": "Franz Beckenbauer",
        "id": 93
    },
    {
        "text": "„Ein Denkmal will ich nicht sein, darauf scheißen ja nur die Tauben.“",
        "source": "Toni Polster",
        "id": 94
    },
    {
        "text": "„Eine Straßenbahn hat mehr Anhänger als Uerdingen.“",
        "source": "Max Merkel",
        "id": 95
    },
    {
        "text": "„Er spielte ohne Tal und Fehdel.“",
        "source": "Jochen Hageleit",
        "id": 96
    },
    {
        "text": "„Es gibt nur einen Ball. Wenn der Gegner ihn hat, muß man sich fragen: Warum!?“",
        "source": "Giovanni Trappatoni",
        "id": 97
    },
    {
        "text": "„Es ist egal, ob ein Spieler bei Bayern München spielt oder sonst wo im Ausland.“",
        "source": "Erich Ribbeck",
        "id": 98
    },
    {
        "text": "„Er hat gute und schlechte Tage. Aber er ist konstant in seinen Leistungen“.",
        "source": "Michael Schaub",
        "id": 99
    },
    {
        "text": "„Die Achillesferse von Bobic ist seine rechte Schulter“.",
        "source": "Gerd Rubenbauer",
        "id": 100
    },
    {
        "text": "„Gib mich die Kirsche!“",
        "source": "Lothar Emmerich",
        "id": 101
    },
    {
        "text": "„I hope, we have a little bit lucky.“",
        "source": "Lothar ",
        "id": 102
    },
    {
        "text": "„Ich bin Optimist. Sogar meine Blutgruppe ist positiv.“",
        "source": "Toni Polster",
        "id": 103
    },
    {
        "text": "„Wenn sich die Geschichte wiederholt, können wir das gleiche noch mal erwarten.“",
        "source": "Terry Venables",
        "id": 104
    },
    {
        "text": "„Ich fair foul gespielt. Ich nicht getreten.“",
        "source": "Vlado Saric",
        "id": 105
    },
    {
        "text": "„Ich fliege irgendwo in den Süden – vielleicht nach Kanada oder so.“",
        "source": "Mehmet Scholl",
        "id": 106
    },
    {
        "text": "„Ich habe 2 1/2 Jahre bei Young Boys Bern, 6 Monate bei Lierse und 53 Minuten bei Duisburg gespielt.“",
        "source": "Mini Jacobsen",
        "id": 107
    },
    {
        "text": "„Ich hoffe, dass dieses Spiel nicht mein einziges Debüt bleibt.“",
        "source": "Sebastian Deisler",
        "id": 108
    },
    {
        "text": "„Ich möchte nie mehr arbeiten, sondern nur noch am Tresen stehen und saufen.“",
        "source": "Erwin Kostedde",
        "id": 109
    },
    {
        "text": "„Ich spiele weiterhin mit Risiko. Schließlich profitieren alle davon: Wir, das Publikum und auch der Gegner.“",
        "source": "Ad de Mos",
        "id": 110
    },
    {
        "text": "„Ein Drittel mehr Geld? Nee, ich will mindestens ein Viertel!“",
        "source": "Horst Szymaniak",
        "id": 111
    },
    {
        "text": "„Ich will an meinem rechten Fuß feilen“.",
        "source": "Michael Tarnat",
        "id": 112
    },
    {
        "text": "„In der Schlußphase war der Pfosten der Einzige, auf den wir uns 100%ig verlassen konnten.“",
        "source": "Christoph Daum",
        "id": 113
    },
    {
        "text": "„Es gibt nur eine Möglichkeit: Sieg, Unentschieden oder Niederlage!“",
        "source": "Franz Beckenbauer",
        "id": 114
    },
    {
        "text": "„Ja, der FC Tirol hat eine Obduktion auf mich.“",
        "source": "Peter Pacult",
        "id": 115
    },
    {
        "text": "„Jetzt müssen wir gegen Stuttgart gewinnen. Ob wir wollen oder nicht.“",
        "source": "Otto Rehhagel",
        "id": 116
    },
    {
        "text": "„Ich grüße meinen Vater, meine Mutter und ganz besonders meine Eltern.“",
        "source": "Toni Polster",
        "id": 117
    },
    {
        "text": "„Portugal spielt heute mit sechs Ausländern.“",
        "source": "Bela Rethy",
        "id": 118
    },
    {
        "text": "„Resignation ist der Egoismus der Schwachen.“",
        "source": "Jörg Berger",
        "id": 119
    },
    {
        "text": "„Und dieser öffnende Paß brachte wieder 57 cm Raumgewinn!“",
        "source": "Marcel Reif",
        "id": 120
    },
    {
        "text": "„Wenn das keine Chance war, dann war das zumindest eine große Möglichkeit.“",
        "source": "Werner Hansch",
        "id": 121
    },
    {
        "text": "„Wenn ich heute fünf Talente einbaue und mehrere Spiele hintereinander verliere, dann lassen die Leute an den Blumen, die sie mir zuwerfen, plötzlich die Töpfe dran.“",
        "source": "Otto Rehhagel",
        "id": 122
    },
    {
        "text": "„Wenn man keine Tore macht, ist es ganz schwer, ein Spiel zu gewinnen.“",
        "source": "Reinhold Fanz",
        "id": 123
    },
    {
        "text": "„Wenn man mir die Freude am Fußball nimmt, hört der Spaß bei mir auf!“",
        "source": "Thomas Häßler",
        "id": 124
    },
    {
        "text": "„Wenn wir Deutschen tanzen, und nebenan tanzen ",
        "source": "Berti Vogts",
        "id": 125
    },
    {
        "text": "„Wie es auch ausgehen mag, es war ein schwer erkämpfter Sieg für die Bayern.“",
        "source": "Wilfried Mohren",
        "id": 126
    },
    {
        "text": "„Gegen Portugal gab es schon mühevolle Unentschieden- und Remis-Spiele.“",
        "source": "Wolf-Dieter Poschmann",
        "id": 127
    },
    {
        "text": "„Wir haben genügend Potenz für die ",
        "source": "Steffen Baumgart",
        "id": 128
    },
    {
        "text": "„Wir haben sehr viel Arbeit in diese Niederlage gesteckt.“",
        "source": "Max Merkel",
        "id": 129
    },
    {
        "text": "„Wir hatten ein Dutzend Eckbälle – ich schätze so um die zwölf.“",
        "source": "Craig Brown",
        "id": 130
    },
    {
        "text": "„Wir müssen jetzt mit dem Boden auf den Füßen bleiben.“",
        "source": "Jürgen Röber",
        "id": 131
    },
    {
        "text": "„Wir spielen am Besten, wenn der Gegner nicht da ist.“",
        "source": "Otto Rehhagel",
        "id": 132
    },
    {
        "text": "„",
        "source": "Michael Wiese",
        "id": 133
    },
    {
        "text": "„Zur Schiedsrichterleistung will ich gar nichts sagen, aber das war eine Frechheit, was da gepfiffen wurde!“",
        "source": "Stefan Reuter",
        "id": 134
    },
    {
        "text": "„Zwei Minuten gespielt, noch immer hohes Tempo.“",
        "source": "Holger Obermann",
        "id": 135
    },
    {
        "text": "„Vorne gewinnst du die Spiele, hinten die Meisterschaften!“",
        "source": "Bruno Hübner\xa0",
        "id": 136
    },
    {
        "text": "„Ich halte nix von Sex vor dem Spiel, besonders deshalb, weil ich mir mit Salou das Zimmer teile.“",
        "source": "Jan-Aage Fjörtorft",
        "id": 137
    },
    {
        "text": "„Branco tanzt, ich grätsche. Das ist der Unterschied zwischen Kamerun und Norwegen.“",
        "source": "Jan-Aage Fjörtorft",
        "id": 138
    },
    {
        "text": "„Es war die Chancenauswertung, die wir nicht verwertet haben.“",
        "source": "Andi Brehme",
        "id": 139
    },
    {
        "text": "„Bis auf die 12 Karten war’s fast ein Freundschaftsspiel.“",
        "source": "Reiner Calmund",
        "id": 140
    },
    {
        "text": "„Je länger das Spiel dauert, desto weniger Zeit bleibt.“",
        "source": "Marcel Reif",
        "id": 141
    },
    {
        "text": "„Der Typ ist so quirlig, der geht nach dir in die Drehtür und kommt vor dir wieder raus.“",
        "source": "Bela Rethy",
        "id": 142
    },
    {
        "text": "„Man macht nicht in drei Tagen aus einer Würstchenbude eine Großraumdisco.“",
        "source": "Norbert Meier",
        "id": 143
    },
    {
        "text": "„Da hat wirklich der Riese gegen Goliath gespielt.“",
        "source": "Franz Beckenbauer",
        "id": 144
    },
    {
        "text": "„Wir sind an ein Limit gekommen, wo es im Moment nicht drüber geht.“",
        "source": "Andreas Möller",
        "id": 145
    },
    {
        "text": "„Wir sind nicht von vorne herein das Dosenfutter, wie von manchen befürchtet.“",
        "source": "Axel Bellinghausen",
        "id": 146
    },
    {
        "text": "„Für mich war es wichtig zu sehen, dass ich konditionell mithalten konnte.“",
        "source": "Axel Kruse",
        "id": 147
    },
    {
        "text": "„Ich habe eine Oberschenkelzerrung im linken Fuß.“",
        "source": "Guido Buchwald",
        "id": 148
    },
    {
        "text": "„I´m a german record-player!“",
        "source": "Lothar Matthäus",
        "id": 149
    },
    {
        "text": "„Daran sind nur die Schiedsrichter schuld, da bin ich ganz selbstkritisch.“",
        "source": "Markus Osthoff",
        "id": 150
    },
    {
        "text": "„Wir haben unsere Gegner nicht unterschätzt. Sie waren nur besser, als wir dachten.“",
        "source": "Bobby Robson",
        "id": 151
    },
    {
        "text": "„Es überwiegt eigentlich beides.“",
        "source": "Lukas Podolski",
        "id": 152
    },
    {
        "text": "„Es war ein wunderschöner Augenblick, als der ",
        "source": "Steffen Freund",
        "id": 153
    },
    {
        "text": "„In der Schule gab‘s für mich Höhen und Tiefen. Die Höhen waren der Fußball.“",
        "source": "Thomas Häßler",
        "id": 154
    },
    {
        "text": "„Ich suche nicht nach Alibis, aber die Luftfeuchtigkeit war hoch“.",
        "source": "Slawen Bilic",
        "id": 155
    },
    {
        "text": "„Dann kam das ",
        "source": "Paul Breitner",
        "id": 156
    },
    {
        "text": "„Golden Goal ist scheiße. Man weiß nie, ob man sich noch ein Bier holen soll“",
        "source": "Harald Schmidt",
        "id": 157
    },
    {
        "text": "„Zwei Chancen, ein Tor – das nenne ich hundertprozentige Chancenauswertung.“",
        "source": "Roland Wohlfahrt",
        "id": 158
    },
    {
        "text": "„Ich bin keiner, der beim ersten Tsunami gleich wegrennt“.",
        "source": "Thomas Brdaric",
        "id": 159
    },
    {
        "text": "„Ich bleibe auf jeden Fall wahrscheinlich beim KSC.“",
        "source": "Sean Dundee",
        "id": 160
    },
    {
        "text": "„Wenn die Geschichte sich wiederholt, können wir noch mal das gleiche erwarten.“",
        "source": "Terry Venables",
        "id": 161
    },
    {
        "text": "„Haste Scheiße am Fuß, haste Scheiße am Fuß!“",
        "source": "Andreas Brehme",
        "id": 162
    },
    {
        "text": "„Man hetzt die Leute auf mit Tatsachen, die nicht der Wahrheit entsprechen.“",
        "source": "Toni Polster",
        "id": 163
    },
    {
        "text": "„Wir sind hierher gefahren und haben gesagt: Okay, wenn wir verlieren, fahren wir wieder nach Hause.“",
        "source": "Marko Rehmer",
        "id": 164
    },
    {
        "text": "\n",
        "source": "Robert Roelofson",
        "id": 165
    },
    {
        "text": "„Ich will keine Karotten, ich will Möhren.“",
        "source": "Volker Abramczik",
        "id": 166
    },
    {
        "text": "„Ich glaube nicht, dass mir der Verein Steine in den Vertrag legt.“",
        "source": "Torsten Legat",
        "id": 167
    },
    {
        "text": "„An die fünf lebenswichtigen Bausteine in Nutella.“",
        "source": "Horst Heldt",
        "id": 168
    },
    {
        "text": "„Die ",
        "source": "Karl-Heinz Körbel",
        "id": 169
    },
    {
        "text": "„Wenn wir hier nicht gewinnen, dann treten wir ihnen wenigstens den Rasen kaputt.“",
        "source": "Rolf Rüßmann",
        "id": 170
    },
    {
        "text": "„Das beste Trainingslager ist eine Frau, die eigene natürlich.“ ",
        "source": "Willi Lemke",
        "id": 171
    },
    {
        "text": "„In der Mitte, da sind sie vierbeinig.“",
        "source": "Karl-Heinz Rummenigge",
        "id": 172
    },
    {
        "text": "„Wunderbar, wie er seinen Körper zwischen sich und den Gegner schiebt.“",
        "source": "Udo Lattek",
        "id": 173
    },
    {
        "text": "„Da sind meine Gefühle mit mir Gassi gegangen.“",
        "source": "Jürgen Klinsmann",
        "id": 174
    },
    {
        "text": "„Wir haben mit der notwendigen fairen Brutalität gespielt.“",
        "source": "Christian Beeck",
        "id": 175
    },
    {
        "text": "„Ich lerne nicht extra französisch für die Spieler, wo diese Sprache nicht mächtig sind.“",
        "source": "Mario Basler",
        "id": 176
    },
    {
        "text": "„Mein Name ist Finken, und du wirst gleich hinken.“",
        "source": "Herbert Finken",
        "id": 177
    },
    {
        "text": "„So ist Fußball. Manchmal gewinnt der Bessere.“",
        "source": "Lukas Podolski",
        "id": 178
    },
    {
        "text": "„Den größten Fehler, den wir jetzt machen könnten, wäre, die Schuld beim Trainer zu suchen.“",
        "source": "Charly Körbel",
        "id": 179
    },
    {
        "text": "„Wir haben 99 Prozent des Spiels beherrscht. Die übrigen drei Prozent waren schuld daran, dass wir verloren haben.“",
        "source": "Ruud Gullit",
        "id": 180
    },
    {
        "text": "„Hass gehört nicht ins Stadion. Die Leute sollen ihre Emotionen zu Hause in den Wohnzimmern mit ihren Frauen ausleben.“",
        "source": "Berti Vogts",
        "id": 181
    },
    {
        "text": "„Dies kann ein Nachteil oder ein Vorteil sein, sowohl für uns als auch für die gegnerische Mannschaft.“",
        "source": "Erich Ribbeck",
        "id": 182
    },
    {
        "text": "„Ich weiß auch nicht, wo bei uns der Wurm hängt.“",
        "source": "Fabrizio Hayer",
        "id": 183
    },
    {
        "text": "„Was, der Kapellmann wird Arzt? Der wird doch Doktor!“",
        "source": "Manfred Kaltz",
        "id": 184
    },
    {
        "text": "„Ich bin der linke, mittlere, defensive Offensivspieler.“",
        "source": "Christian Ziege",
        "id": 185
    },
    {
        "text": "„80 Prozent von euch und ich kraulen sich doch auch mal an den Eiern“",
        "source": "Lukas Podolski",
        "id": 186
    },
    {
        "text": "„Ich brauche keinen Butler. Ich habe eine junge Frau!“",
        "source": "Thomas Doll",
        "id": 187
    },
    {
        "text": "„Die Holländer sind vorne vom Feinsten bestückt.“",
        "source": "Oliver Kahn",
        "id": 188
    },
    {
        "text": "„Ich sehe in der Bundesliga Spieler, denen springt beim Stoppen der Ball weiter vom Fuß, als ich ihn jemals schießen konnte.“",
        "source": "Horst Köppel",
        "id": 189
    },
    {
        "text": "„Manche Leute halten Fußball für eine Sache von Leben und Tod. Ich kann Ihnen versichern, es ist sehr viel wichtiger als das.“",
        "source": "Bill Shankley",
        "id": 190
    },
    {
        "text": "„Wenn die Deutschen gut spielen, dann werden sie Weltmeister, wenn sie schlecht spielen, dann kommen sie ins Finale.“",
        "source": "Michel Platini",
        "id": 191
    },
    {
        "text": "„Lebbe geht weida!“",
        "source": "Dragoslav Stepanovic",
        "id": 192
    },
    {
        "text": "„Die Realität ist anders als die Wirklichkeit.“",
        "source": "Berti Vogts",
        "id": 193
    },
    {
        "text": "„Vom Willen her hat die Mannschaft schon gewollt.“",
        "source": "Eduard Geyer",
        "id": 194
    },
    {
        "text": "„Was soll der Scheiß, ich kann kein Englisch.“",
        "source": "Francesco Totti ",
        "id": 195
    },
    {
        "text": "„Spanien wäre ein schönes Land, wenn nicht so viele Spanier dort leben würden.“",
        "source": "Max Merkel",
        "id": 196
    },
    {
        "text": "„Fußball ist ein Tagesgeschäft. Nach dem 0:3 in Aue waren wir die Bratwürste, jetzt sind wir für einen Tag halt mal das Rinderfilet.“",
        "source": "Pirmin Schwegler",
        "id": 197
    },
    {
        "text": "„Andere erziehen ihre Kinder zweisprachig, ich beidfüßig.“",
        "source": "Christoph Daum",
        "id": 198
    },
    {
        "text": "„I look not back, I look in front.“",
        "source": "Lothar Matthäus",
        "id": 199
    },
    {
        "text": "„Das größte Problem beim Fußball sind die Spieler. Wenn wir die abschaffen könnten, wäre alles gut.“",
        "source": "Helmut Schulte",
        "id": 200
    },
    {
        "text": "„Wir sind die einzige Mannschaft, die durch einen Abgang stärker geworden ist.“",
        "source": "Uli Stein",
        "id": 201
    },
    {
        "text": "„Der Österreicher glaubt mit 18, er sei Pelé. Mit 20 glaubt er, er sei Beckenbauer. Und mit 24 merkt er, dass er Österreicher ist.“",
        "source": "Max Merkel",
        "id": 202
    },
    {
        "text": "„Das Tor gehört zu 70 Prozent mir und zu 40 Prozent dem Wilmots.“",
        "source": "Ingo Anderbrügge",
        "id": 203
    },
    {
        "text": "„Wenn schon vier Leute so viele Fehler machen, ist es vielleicht richtig, dass man auf eine Dreierkette umstellen sollte.“",
        "source": "Ralf Rangnick",
        "id": 204
    },
    {
        "text": "„Wenn jeder Spieler zehn Prozent von seinem Ego an das Team abgibt, haben wir einen Spieler mehr auf dem Feld.“",
        "source": "Berti Vogts",
        "id": 205
    },
    {
        "text": "„Ich glaube nicht, dass wir das Spiel verloren hätten, wenn es 1:1 ausgegangen wäre.“",
        "source": "Uli Hoeneß",
        "id": 206
    },
    {
        "text": "„Mir ist es egal, ob einer Brasilianer, Pole, Kroate, Norddeutscher oder Süddeutscher ist. Die Leistung entscheidet, nicht irgendeine Blutgruppe.“",
        "source": "Christoph Daum",
        "id": 207
    },
    {
        "text": "„Es hängt alles irgendwie zusammen. Sie können sich am Hintern ein Haar ausreißen, dann tränt das Auge.“",
        "source": "Dettmar Cramer",
        "id": 208
    },
    {
        "text": "„Wenn es einmal hart auf hart kommt, kommt es meistens ganz hart.“",
        "source": "Jens Jeremies",
        "id": 209
    },
    {
        "text": "„Der Junge spielt gut für seine 19 Jahre. Das könnte daran liegen, dass er schon 21 ist.“",
        "source": "David Begg",
        "id": 210
    },
    {
        "text": "„Ich habe den Spielern gesagt, dass wir gewinnen müssen. Damit ich danach genügend Geld habe, um neue Spieler zu kaufen“",
        "source": "Chris Turner",
        "id": 211
    },
    {
        "text": "„Gut, er hat drei Tore geschossen. Aber abgesehen davon hatte ich ihn ganz gut im Griff.“",
        "source": "Michael Duberry",
        "id": 212
    },
    {
        "text": "„Es gibt nichts dazwischen: Du bist entweder gut oder schlecht. Wir waren heute so mittel.“",
        "source": "Gary Lineker",
        "id": 213
    },
    {
        "text": "„Chelsea hat diesen Roman Abramowitsch und seine Milliarden, die er mit den russischen Ölfeldern verdient hat. Aber wir haben Barry Hearn, der eine ziemlich gut gehende Billardhalle in Leyton hat!“",
        "source": "Bob Mills",
        "id": 214
    },
    {
        "text": "„Heute hätten wir keinen Hering vom Teller gezogen.“",
        "source": "Frank Rost",
        "id": 215
    },
    {
        "text": "„Für Streicheleinheiten müssen wir uns eine Katze kaufen.“",
        "source": "Miroslav Klose",
        "id": 216
    },
    {
        "text": "„Manni, Bananenflanke, ich, Kopf, Tor!“",
        "source": "Horst Hrubesch",
        "id": 217
    },
    {
        "text": "„Bayern spielt jetzt im 4-3-1-3-System“",
        "source": "Marcel Reif",
        "id": 218
    },
    {
        "text": "„Kickenbacher Offers“",
        "source": "Arnim Basche",
        "id": 219
    },
    {
        "text": "„Spätzle? Hab ich noch nicht probiert. Aber im Allgemeinen mag ich Geflügel.“",
        "source": "Thorsten Legat",
        "id": 220
    },
    {
        "text": "„Wir haben die Mannschaft ganz karibisch zusammengestellt.“",
        "source": "Klaus Hilpert",
        "id": 221
    },
    {
        "text": "„Wenn man Gelb hat und so reingeht, kann man nur wichtige Termine haben.“",
        "source": "Johannes B. Kerner",
        "id": 222
    },
    {
        "text": "„Ich habe nur immer meine Finger in Wunden gelegt, die sonst unter den Tisch gekehrt worden wären.“",
        "source": "Paul Breitner",
        "id": 223
    },
    {
        "text": "„Die Luft, die nie drin war, ist raus aus dem Spiel.“",
        "source": "Gerhard Delling",
        "id": 224
    },
    {
        "text": "„Gewollt habe ich schon gemocht, aber gedurft ham se mich nicht gelassen.“",
        "source": "Lothar Matthäus",
        "id": 225
    },
    {
        "text": "„Wenn der Kopf richtig funktioniert, dann ist das wie ein drittes Bein.“",
        "source": "Christoph Daum",
        "id": 226
    },
    {
        "text": "„Männer haben 100 Gramm mehr Gehirn als Frauen – da ist unter anderem die Abseitsregel drin.“",
        "source": "Dieter Nuhr",
        "id": 227
    },
    {
        "text": "„Das Einzige, was sich in der ersten Hälfte bewegt hat, war der Wind.“",
        "source": "Franz Beckenbauer",
        "id": 228
    },
    {
        "text": "„Wir haben fehlende Cleverness vermissen lassen.“",
        "source": "Lorenz-Günther Köstner",
        "id": 229
    },
    {
        "text": "„Wir brauchen wieder Spieler, die Gras fressen. Und wenn es sein muss, rohes.“",
        "source": "Jürgen Friedrich",
        "id": 230
    },
    {
        "text": "„Schalke hat das Mittelfeld schnell überbrückt, mit schnellen, äh, Mittelfeldspielern.“",
        "source": "Berti Vogts",
        "id": 231
    },
    {
        "text": "„Schalke 05“",
        "source": "Carmen Thomas",
        "id": 232
    },
    {
        "text": "„Jetzt in Überzahl! Zwei gegen zwei!“",
        "source": "Beni Turnher",
        "id": 233
    },
    {
        "text": "„Telefonieren Sie mit uns oder rufen Sie uns an!“",
        "source": "Jörg Wontorra",
        "id": 234
    },
    {
        "text": "„Entweder ich gehe links vorbei, oder ich gehe rechts vorbei.“",
        "source": "Ludwig Kögl",
        "id": 235
    },
    {
        "text": "„Fußball ist wie Schach, nur ohne Würfel.“",
        "source": "Jan Böhmermann",
        "id": 236
    },
    {
        "text": "„Jetzt müssen wir dem Vorsprung schon wieder hinterher laufen.“",
        "source": "Klaus Allofs",
        "id": 237
    },
    {
        "text": "„Dass wir heute verloren haben, ärgert mich noch mehr, als dass ich morgen Geburtstag habe.“",
        "source": "Jörg Berger",
        "id": 238
    },
    {
        "text": "„Ich habe ihn nicht geschoben, ich habe ihn geschubst.“",
        "source": "Thomas Brdaric",
        "id": 239
    },
    {
        "text": "„Er hat angezeigt, dass er in einer Minute ausgewechselt werden will.“",
        "source": "Christoph Daum ",
        "id": 240
    },
    {
        "text": "„Die Anatomie der Frau ist für Trikotwerbung nicht geeignet. Die Reklame verzerrt.“",
        "source": "DFB ",
        "id": 241
    },
    {
        "text": "„Rudi Sturz, gerade ausgewechselt, schießt in der 90. Minute das 2:0.“",
        "source": "Sammy Drechsel",
        "id": 242
    },
    {
        "text": "„Tagsüber, wenn die Sonne scheint, ist es hier noch wärmer.“",
        "source": "Heribert Faßbender",
        "id": 243
    },
    {
        "text": "„Heute greifen wir an der gegnerischen Mittellinie an.“",
        "source": "Jürgen Franz",
        "id": 244
    },
    {
        "text": "„Das Gute an England ist: Wir haben viele englische Wochen.“",
        "source": "Lukas Podolski",
        "id": 245
    },
    {
        "text": "„Der Ball war so lasch geschossen, den konnte man unterwegs noch aufpumpen.“",
        "source": "Eduard Geyer",
        "id": 246
    },
    {
        "text": "„Die einzige Schwäche von Van Nistelrooy ist seine Kopfballstärke.“",
        "source": "Werner Hansch",
        "id": 247
    },
    {
        "text": "„Von der Anzahl her hatten wir mehr Chancen.“",
        "source": "Ottmar Hitzfeld",
        "id": 248
    },
    {
        "text": "„Rosenborg und Trondheim sind sehr starke Mannschaften.“",
        "source": "Carsten Jancker",
        "id": 249
    },
    {
        "text": "„Die Karten sind neu gewürfelt.“",
        "source": "Oliver Kahn",
        "id": 250
    },
    {
        "text": "„Meine Spieler sind Intellektuelle. Die haben Maos Tod letzte Woche noch nicht verkraftet.“",
        "source": "Uwe Klimaschewski",
        "id": 251
    },
    {
        "text": "„Wir haben keine Chance – und die müssen wir nützen.“",
        "source": "Hans Krankl",
        "id": 252
    },
    {
        "text": "„Zuerst waren die Stuttgarter nervös, jetzt sind sie unruhig geworden.“",
        "source": "Marcel Reif",
        "id": 253
    },
    {
        "text": "„Brehme deckt halt den Raum.“",
        "source": "Marcel Reif",
        "id": 254
    },
    {
        "text": "„Das da vorn, was aussieht wie eine Klobürste, ist Valderrama.“",
        "source": "Béla Réthy",
        "id": 255
    },
    {
        "text": "„Die beiden haben nicht mehr gezeigt, als man von ihnen gesehen hat.“",
        "source": "Erich Ribbeck",
        "id": 256
    },
    {
        "text": "„Für uns wäre es besser gewesen, wenn wir heute gewonnen hätten.“",
        "source": "Erich Ribbeck",
        "id": 257
    },
    {
        "text": "„Stancovic hat die Zukunft noch vor sich.“",
        "source": "Sascha Rufer",
        "id": 258
    },
    {
        "text": "„Die Stimmung auf den Rängen kommt mir vor wie bei der Einweihung einer Kläranlage.“",
        "source": "Sascha Rufer",
        "id": 259
    },
    {
        "text": "„Die sprechen Englisch. Zum Teil alle.“",
        "source": "Winfried Schäfer ",
        "id": 260
    },
    {
        "text": "„Meine Unbekümmertheit wandelte sich in kontrollierte Spontanität.“",
        "source": "Mehmet Scholl",
        "id": 261
    },
    {
        "text": "„Egal ob ich auf der Bank sitze oder von Anfang an spiele, ich gebe immer alles.“",
        "source": "Sebastian Schoof",
        "id": 262
    },
    {
        "text": "„Ball rund muß in Tor eckig.“",
        "source": "Helmut Schulte",
        "id": 263
    },
    {
        "text": "„Wer hinten steht, hat das Pech der Glücklosen.“",
        "source": "Helmut Schulte",
        "id": 264
    },
    {
        "text": "„Abgestiegen ist man, wenn man abgestiegen ist“.",
        "source": "Holger Fach",
        "id": 265
    },
    {
        "text": "„Wir brauchen keinen Psychiater, sondern einen Heimsieg“.",
        "source": "Alexander Frei",
        "id": 266
    },
    {
        "text": "„Ich glaube, er ist DIN A4“",
        "source": "Dragoslav Stepanovic ",
        "id": 267
    },
    {
        "text": "„Das Problem des deutschen Fußballs ist der Mangel an Quantität der Qualität.“",
        "source": "Uli Stielike",
        "id": 268
    },
    {
        "text": "„Kompliment an meine Mannschaft und meinen Dank an unsere Mediziner. Sie haben Unmenschliches geleistet.“",
        "source": "Berti Vogts",
        "id": 269
    },
    {
        "text": "„Ich bin eigentlich ganz anders. Nur habe ich leider überhaupt keine Zeit dazu.“",
        "source": "Berti Vogts",
        "id": 270
    },
    {
        "text": "„Ich habe immer gesagt, dass ich niemals nach Österreich wechseln würde.“",
        "source": "Jürgen Wegmann",
        "id": 271
    },
    {
        "text": "„Ein Tag ohne Fußball ist ein verlorener Tag.“",
        "source": "Ernst Happel",
        "id": 272
    },
    {
        "text": "„Magaths Training ist wie ein Zahnarzttermin.Man fürchtet sich vorher, aber danach fühlt man sich besser.“",
        "source": "Jan Aage Fjörtoft",
        "id": 273
    },
    {
        "text": "„Schiedsrichter kommt für mich nicht in Frage. Schon eher etwas, das mit Fußball zu tun hat“",
        "source": "Lothar Matthäus",
        "id": 274
    },
    {
        "text": "„Mal ist man der Hund, mal ist man der Baum“.",
        "source": "Mario Götze",
        "id": 275
    },
    {
        "text": "„So, jetzt alphabetisch der Größe nach aufstellen!“",
        "source": "Archie Kox",
        "id": 276
    }]
};

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function(event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        if (event.session.application.applicationId !== "amzn1.ask.skill.5e00f857-bbc2-466a-a633-6c882db179f1") {
            context.fail("Wrong App ID");
        }

        if (event.session.new) {
            onSessionStarted({ requestId: event.request.requestId }, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request, event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request, event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        } else {

        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId + ", sessionId=" + session.sessionId);
}

function onLaunch(launchRequest, session, callback) {
    //console.log("onLaunch requestId=" + launchRequest.requestId + ", sessionId=" + session.sessionId);
    var number = getRandomInt(0, words.gedichte.length)
    var newStringSpeech = getNewString(true, words.gedichte[number])
    var newStringCard = getNewString(false, words.gedichte[number])
    callback(session.attributes, buildSpeechletResponse("Weihnachtsgedichte", newStringCard, newStringSpeech, "", true));
}

function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId + ", sessionId=" + session.sessionId);
    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;
    if (intentName == 'NewWordIntent') {
        handleTestRequest(intent, session, callback);
    } else if (intentName == 'TestIntent') {
        handleTestRequest(intent, session, callback);
    } else {
        console.log("Intent: " + JSON.stringify(intentRequest));
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session. Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId + ", sessionId=" + session.sessionId);
}

function handleTestRequest(intent, session, callback) {
    var number = getRandomInt(0, words.gedichte.length)
    var newStringSpeech = getNewString(true, words.gedichte[number])
    var newStringCard = getNewString(false, words.gedichte[number])
    callback(session.attributes, buildSpeechletResponse("Ein neues Weihnachtsgedicht", newStringCard, newStringSpeech, "", true));
}

function getNewString(speechlet, word) {
    var outputString = "";
    if (speechlet) { outputString += '<audio src="https://s3-eu-west-1.amazonaws.com/weihnachtsgedichtebucket/christmas2ready.mp3"/>'; }
    outputString += 'Hier ist dein weihnachtliches Gedicht: \n\n';
    outputString += word.text;
    outputString += "\n\nDas Gedicht stammt von ";
    outputString += word.source;
    outputString += ". \n";
    outputString += "Ich wünsche dir eine frohe Weihnachtszeit!";
    return outputString;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ------- Helper functions to build responses -------

function buildSpeechletResponse(title, outputCard, outputSpeech, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: outputSpeech
        },
        card: {
            type: "Simple",
            title: title,
            content: outputCard
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}