'use strict';

var words = {
    eloquention: 
    [  
   {  
      "definition":"nachträglich, später, im Nachhinein",
      "examples":[  
         "Im Allgemeinen werden die Urteile des Empirismus als a posteriori beschrieben."
      ],
      "name":"a posteriori",
      "id":1
   },
   {  
      "definition":"grundsätzlich, im Vorhinein, von vornherein/von vorneherein",
      "examples":[  
         "»[…] Für mich waren die Nazis nicht a priori meine ersten Feinde. Das waren die Austrofaschisten, nicht die Nazis.«",
         "Aus dem Verstand stammt diejenige Erkenntnis, die der Erfahrung vorhergeht (a priori)",
         "Immanuel Kant kennzeichnet mit a priori Begriffe, die allein dem Verstande, der Vernunft entstammen, allerdings erst dann in Erscheinung bzw. Tätigkeit treten, wenn mit ihrer Hilfe Wahrnehmungen zu Begriffen geformt werden."
      ],
      "name":"a priori",
      "id":2
   },
   {  
      "definition":"von der Norm oder dem Üblichen (Normalen) abweichend, über das Übliche/Normale hinausgehend",
      "examples":[  
         "Seine Schwester ist abnorm groß.",
         "Sein Heißhunger ist abnorm.",
         "Letztes Jahr hatten wir einen abnorm kalten Winter."
      ],
      "name":"Abnorm",
      "id":3
   },
   {  
      "definition":"körperlich nicht anwesend, nicht zugegen, geistig nicht anwesend",
      "examples":[  
         "Sie können den Geschäftsführer heute nicht sprechen, der ist absent.",
         "Er ist in absente Betrachtungen versunken."
      ],
      "name":"absent",
      "id":4
   },
   {  
      "definition":"auf bestimmte Genüsse (besonders Rauschmittel) völlig verzichtend",
      "examples":[  
         "Man bezeichnet umgangssprachlich abstinent lebende Drogen- oder Medikamentenabhängige als clean."
      ],
      "name":"abstinent",
      "id":5
   },
   {  
      "definition":"vom Besonderen oder Gegenständlichen losgelöst; verallgemeinert",
      "examples":[  
         "Das ist zu abstrakt gedacht! Da hast du doch alle Gefühle außer Acht gelassen, in der Ehe der beiden herrschen nur noch Neid und Eifersucht!",
         "Diese Formulierung ist zu abstrakt! Das kann sich keiner bildhaft vorstellen."
      ],
      "name":"abstrakt",
      "id":6
   },
   {  
      "definition":"aus einem höheren Blickwinkel betrachtet, Verallgemeinerung, Generalisierung",
      "examples":[  
         "Die entstandenen Skulpturen sind elegant, stets reduziert, oft an der Grenze zur Abstraktion.",
         "Superierung ist die Fähigkeit, Einzelheiten zu einem Ganzen zusammenfassen zu können. Dadurch entsteht eine Abstraktion komplexer Sachverhalte.",
         "Es beginnt ein Kampf zwischen Abstraktion und Gegenständlichkeit."
      ],
      "name":"Abstraktion",
      "id":7
   },
   {  
      "definition":"absonderlich, töricht, schwer verständlich, verworren, ohne gedankliche Ordnung",
      "examples":[  
         "Bei der Analyse der Lehre von Hegel vom ersten Unterscheidungsmerkmal des Begriffes und dem Hervorgehen des Begriffes aus dem Wesen, und des Wesens aus dem Sein, schrieb Lenin: Die weitere Entwicklung des Allgemeinen, des Besonderen und des Einzelnen [bei Hegel] ist im höchsten Grad abstrakt und abstrus",
         "Der Rationalismus mit seinem Hasse gegen jeden Tiefsinn und gegen jede Mystik hatte sich gewöhnt, tiefsinniges Denken abstrus zu nennen, wenn er eine solche Denkrichtung tadeln wollte."
      ],
      "name":"abstrus",
      "id":8
   },
   {  
      "definition":"etwas ad absurdum führen: das Widersinnige, die Sinnlosigkeit einer Sache nachweisen",
      "examples":[  
         "Wenn man energieeffiziente Unternehmen mit hohen Strompreisen belastet, wird das Anreizsystem für Energieeinsparungen ad absurdum geführt."
      ],
      "name":"ad absurdum",
      "id":9
   },
   {  
      "definition":"etwas als erledigt betrachten / ansehen, an etwas nicht mehr denken, über etwas nicht mehr debattieren / diskutieren / reden",
      "examples":[  
         "Die Staatsanwaltschaft hatte damals die Sache ad acta gelegt, wohl in der leider nicht unzutreffenden Befürchtung, daß sich die monarchistischen Attentatsversuche dieses Landes vor den Geschworenen, an die die Angelegenheit als Preß-Sache gekommen wäre, in Heiterkeit aufzulösen pflegen.",
         "Es wird höchste Zeit, das Märchen von der Sommerpause ad acta zu legen.",
         "Der Bundesvorstand hat deshalb auch jeden Gedanken an eine Beteiligung bei der Bundestagswahl im September endgültig ad acta gelegt und setzt jetzt auf die Perspektive 2013."
      ],
      "name":"ad acta",
      "id":10
   },
   {  
      "definition":"ohne Vorbereitung, speziell für einen Zweck oder spontan aus einer Situation heraus entstanden",
      "examples":[  
         "Wir haben natürlich auch noch mehr tolle Sachen gemacht – die fallen mir aber ad hoc nicht ein.",
         "Keiner war vorbereitet, die Krise trat ad hoc auf."
      ],
      "name":"ad hoc",
      "id":11
   },
   {  
      "definition":"den gestellten Bedingungen angemessen",
      "examples":[  
         "Es handelt sich bei dem konkreten mitgeführten Messer nicht mehr um einen Gebrauchsgegenstand des täglichen Lebens, der regelmäßig mitgeführt und durchweg in sozial adäquater Weise eingesetzt wird.",
         "Die Schrift ist nicht nur nicht die Sprache selbst, sondern sie ist derselben auch in keiner Weise adäquat."
      ],
      "name":"adäquat",
      "id":12
   },
   {  
      "definition":"heftige Gefühlsregung, starke Gemütsbewegung, innere Erregung",
      "examples":[  
         "Es ist doch im Affekt passiert.",
         "Hierbei handelt es sich um eine Handlung aus dem Affekt.",
         "Ausreden für Kurzschlusshandlungen sind oftmals die Affekte."
      ],
      "name":"Affekt",
      "id":13
   },
   {  
      "definition":"von einem gekünstelten Verhalten geprägt, eingebildet, geziert, gekünstelt, gezwungen, unnatürlich",
      "examples":[  
         "Tu doch nicht so affektiert!"
      ],
      "name":"affektiert",
      "id":14
   },
   {  
      "definition":"gehoben: öffentlicher verbaler oder schriftlicher Angriff bzw. Beschuldigung",
      "examples":[  
         "Seine Antwort war ein einziger Affront.",
         "Portugal empfand das eigenmächtige Handeln seiner Kolonie als Affront."
      ],
      "name":"Affront",
      "id":15
   },
   {  
      "definition":"der Anhänger, der Fan, der Liebhaber, der Freund, der Anfänger, der Amateur",
      "examples":[  

      ],
      "name":"Aficionado",
      "id":16
   },
   {  
      "definition":"Zusammenballung, Anhäufung",
      "examples":[  
         "London ist damit die bevölkerungsreichste Stadt der Europäischen Union. Die Agglomeration hat 8.278.251 Einwohner (2001)."
      ],
      "name":"Agglomeration",
      "id":17
   },
   {  
      "definition":"Physik: verdichten; zu einer Masse vereinigen, anhäufen",
      "examples":[  

      ],
      "name":"aggregieren",
      "id":18
   },
   {  
      "definition":"etwas betreiben, tun",
      "examples":[  
         "Er agierte bei dieser Verhandlung etwas unglücklich.",
         "Sie agierte in dieser Krise mit vollem Engagement und konnte so die Unternehmung wieder in die grünen Zahlen führen."
      ],
      "name":"agieren",
      "id":19
   },
   {  
      "definition":"meist abwertend: jemand, der durch anspornende oder aufhetzende Reden oder Schriften, Menschenmassen zu bestimmten gemeinsamen Handlungen bewegen möchte; Person, die Agitation betreibt",
      "examples":[  
         "François Noël Babeuf, genannt Gracchus Babeuf […] war Journalist und ein linksrevolutionärer französischer Agitator während der ersten französischen Revolution."
      ],
      "name":"Agitator",
      "id":20
   },
   {  
      "definition":"Kurzwort, das aus den Anfangsbuchstaben mehrerer Wörter gebildet ist",
      "examples":[  
         "„UNO“, „UNESCO“, „DOPA“, „GNU“ und „EDEKA“ sind Akronyme."
      ],
      "name":"Akronym",
      "id":21
   },
   {  
      "definition":"auf den Akkord bezogen, in Akkorden geschrieben",
      "examples":[  
         "Das Lied ist akkordisch."
      ],
      "name":"Akkordisch",
      "id":22
   },
   {  
      "definition":"jemanden in einer bestimmten Funktion anerkennen, zulassen",
      "examples":[  
         "Hierbei ist immer gut zu nennen, für welches Medium Ihr Euch akkreditieren wollt, welche Auflage das Medium hat und wie oft es erscheint."
      ],
      "name":"akkreditieren",
      "id":23
   },
   {  
      "definition":"Maßnahmen zur Kundengewinnung",
      "examples":[  
         "Die Akquise von Betrieben verursacht immer wieder viel Unruhe unter den Beschäftigten",
         "Die Akquise von neuen Kunden erfordert viel Aufwand."
      ],
      "name":"Akquise",
      "id":24
   },
   {  
      "definition":"Mit sehr viel Rücksicht auf Details, sehr genau und äußerst sorgfältig",
      "examples":[  
         "Er erledigte diese Arbeit akribisch.",
         "Besonders in seinen kleinen Formaten zeigt sich eine akribische Liebe zum Detail."
      ],
      "name":"akribisch",
      "id":25
   },
   {  
      "definition":"in diesem Moment (sehr) wichtig, bezogen auf eine Krankheit: unvermutet auftretend, rasch und heftig verlaufend",
      "examples":[  
         "Die damalige Wissenslücke stellte sich als akutes Problem dar.",
         "Die Krankheit trat akut auf.",
         "Bei akuten Verbrennungen ist das wichtigste Gegenmittel kaltes Leitungswasser."
      ],
      "name":"akut",
      "id":26
   },
   {  
      "definition":"personifizierende oder gegenständliche Darstellung eines abstrakten Sachverhaltes",
      "examples":[  
         "Allegorien sind für Deutschland bzw. Deutsches Reich: die Germania, Frankreich: die Marianne, Schweiz: die Helvetia, Großbritannien: die Britannia, USA: Lady Liberty"
      ],
      "name":"Allegorie",
      "id":27
   },
   {  
      "definition":"zweite Identität, zweite Persönlichkeit",
      "examples":[  
         "Clark Kent ist das Alter Ego von Superman.",
         "Wir sind die allerbesten Freunde und haben keine Geheimnisse voreinander, man kann schon sagen, meine Busenfreundin ist mein Alter Ego."
      ],
      "name":"Alter Ego",
      "id":28
   },
   {  
      "definition":"selbstlos, uneigennützig, menschenliebend, aufopfernd",
      "examples":[  
         "So konnten sie offensichtlich eigennützige Feldzüge als altruistische Missionen tarnen, die dazu dienten, wilde Barbaren zu zivilisieren."
      ],
      "name":"altruistisch",
      "id":29
   },
   {  
      "definition":"Beidhändigkeit, gleich ausgebildete Geschicklichkeit beider Hände",
      "examples":[  
         "Er ist Ambidextrisch."
      ],
      "name":"Ambidextrie",
      "id":30
   },
   {  
      "definition":"Zweideutigkeit, Doppelsinnigkeit, Doppeldeutigkeit, Mehrdeutigkeit eines Gegebenen, eines Sachverhalts, einer Lehre oder von sprachlichen Ausdrücken",
      "examples":[  
         "Wenn jemand einen Ring trägt, kann Ambiguität vorliegen: Ist er ein reiner Schmuck oder zeigt er eine Freundschaft, Verlobung oder Ehe an?"
      ],
      "name":"Ambiguität",
      "id":31
   },
   {  
      "definition":"widersprüchlich, zwiespältig",
      "examples":[  
         "Seine Gefühle ihr gegenüber sind ambivalent, sowohl positiv als auch negativ."
      ],
      "name":"ambivalent",
      "id":32
   },
   {  
      "definition":"durch den Menschen oder durch menschliches Handeln verursacht oder entstanden",
      "examples":[  
         "Die künftige technische Umwelt wird nach Ansicht des Autors immer mehr anthropogenere Züge durch die menschlichen Gestaltungsaktivitäten annehmen."
      ],
      "name":"anthropogen",
      "id":33
   },
   {  
      "definition":"falsche zeitliche Einordnung",
      "examples":[  
         "Unter den ganzen Computern wirkte die mechanische Schreibmaschine wie ein glatter Anachronismus.",
         "Ein Darsteller in einem Gladiatorenfilm, der eine Digitalarmbanduhr trägt, ist ein Beispiel für einen besonders krassen Anachronismus."
      ],
      "name":"Anachronismus",
      "id":34
   },
   {  
      "definition":"Wörter, die die gleichen Buchstaben in anderer Reihenfolge enthalten und sinnvolle Wörter darstellen",
      "examples":[  
         "„Lager“ in „regaL“ umgewandelt ist ein Anagramm."
      ],
      "name":"Anagramm",
      "id":35
   },
   {  
      "definition":"allgemein: Widersacher, Gegner, Gegenspieler; Schauspiel, Film, Literatur: Gegenspieler des Helden",
      "examples":[  
         "Zwar werden die Antagonisten versuchen, Spannungen im feindlichen Lager für ihre Zwecke auszunutzen. Aber derartige Bemühungen sind im Versgleich mit den Kriegszielen auf der internationalen Ebene sekundär."
      ],
      "name":"Antagonist",
      "id":36
   },
   {  
      "definition":"etwas erkennen, bevor es eingetreten ist; vorwegnehmen",
      "examples":[  
         "Manchmal kann man einen Gedanken des Partners antizipieren, bevor er ihn äußern konnte.",
         "Die Aktie dürfte zwar schon viel antizipiert haben, insgesamt dürfte sich der positive Kurstrend des Papiers aber fortsetzen, erwartet der Analyst."
      ],
      "name":"antizipieren",
      "id":37
   },
   {  
      "definition":"ein Wort, dessen Bedeutung das genaue Gegenteil zu der eines anderen Wortes ausdrückt",
      "examples":[  
         "Das Antonym zu schwarz ist weiß.",
         "Antonyme sind zum Beispiel: riesig/winzig, groß/klein, hell/dunkel, Mann/Frau, verlieren/gewinnen, Liebe/Hass, Ideenreichtum/Einfallsreichtum/Gedankenarmut, berufstätig/arbeitslos, Betriebsgesellschaft/Besitzgesellschaft"
      ],
      "name":"Antonym",
      "id":38
   },
   {  
      "definition":"keinen Widerspruch zulassend, Philosophie: nicht widerlegbar",
      "examples":[  
         "Er behauptete in apodiktischer Form, dass nur sein Vorschlag zum Ziel führe."
      ],
      "name":"apodiktisch",
      "id":39
   },
   {  
      "definition":"nicht als Teil der Bibel anerkannter, aber den Büchern der Bibel ähnlicher Text.",
      "examples":[  

      ],
      "name":"apokryph",
      "id":40
   },
   {  
      "definition":"sich mahnend oder auffordernd an jmdn. oder etwas wenden.",
      "examples":[  
         "Sie appellierte an seine Vernunft, sich nicht auf dieses Wagnis einzulassen."
      ],
      "name":"appellieren",
      "id":41
   },
   {  
      "definition":"annäherungsweise, nur in der Annäherung",
      "examples":[  
         "Die Entfernung können wir einstweilen nur approximativ bestimmen.",
         "1 und 0,999 … stellen ein und dieselbe Idee dar, nämlich die Eins, die sowohl als konkretes Objekt als auch als ein endloser approximativer Prozess erfasst werden kann."
      ],
      "name":"approximativ",
      "id":42
   },
   {  
      "definition":"eine Serie von Aufständen in der arabischen Welt, die im Jahre 2010 begann",
      "examples":[  
         "Unpolitische Jugend? Von wegen! In diesem Jahr bewegte der Protest der Jungen die Welt. In Nordafrika brachten sie die Arabellion in Gang."
      ],
      "name":"Arabellion",
      "id":43
   },
   {  
      "definition":"krankhafte Angst vor Spinnen",
      "examples":[  
         "Meine Frau hat eine Arachnophobie."
      ],
      "name":"Arachnophobie",
      "id":44
   },
   {  
      "definition":"Religion: streng enthaltsames Leben verbunden mit dem Ziel des Seelenheils",
      "examples":[  
         "Der Mönch verbrachte sein gesamtes Leben in Askese."
      ],
      "name":"Askese",
      "id":45
   },
   {  
      "definition":"sich anpassen, sich angleichen",
      "examples":[  
         "Den häufig gebrauchten Wörtern gelingt es in der Regel, sich zu assimilieren."
      ],
      "name":"assimilieren",
      "id":46
   },
   {  
      "definition":"Gedanken oder Bilder verknüpfen",
      "examples":[  
         "Den Anblick der Hunde assoziierte er immer mit seiner Flucht.",
         "Einige Staaten sind mit der EU assoziiert."
      ],
      "name":"Assoziieren",
      "id":47
   },
   {  
      "definition":"eine Auffassung oder ein Verhalten, das einem veralteten Weltbild entspricht",
      "examples":[  
         "Längst verlorene Eigenschaften vergangener Generationen schlagen wieder durch: man spricht von Atavismus. Geisteskranke haben gesunde Kinder, gesunde Eltern kranke oder schwachsinnige Kinder."
      ],
      "name":"Atavismus",
      "id":48
   },
   {  
      "definition":"Person, welche nicht an die Existenz von Göttern glaubt",
      "examples":[  
         "Atheisten glauben nicht an Gott.",
         "Ich hatte zuvor nicht gewusst, dass wir in Ägypten so viele Atheisten haben."
      ],
      "name":"Atheist",
      "id":49
   },
   {  
      "definition":"Wirtschaft, Politik: insbesondere von der ausländischen Wirtschaft unabhängig; von äußeren Einflüssen unabhängig",
      "examples":[  
         "Wir streben eine autarke Stromversorgung an.",
         "Als Schutzmaßnahme [westlicher Sanktionen gegen Russland] propagiert die russische Führung das Ziel, autark zu werden. Sie möchte ein eigenes Zahlungssystem aufbauen, um dem Griff der US-Kreditkartenunternehmen zu entkommen."
      ],
      "name":"autark",
      "id":50
   },
   {  
      "definition":"richtig, zuverlässig, hinsichtlich der Echtheit gesichert und daher zuverlässig",
      "examples":[  
         "Du wirkst beim Lügen authentisch."
      ],
      "name":"authentisch",
      "id":51
   },
   {  
      "definition":"Eigenschaft einer Sache, Person oder Organisation, authentisch (auf Echtheit geprüft, zuverlässig) zu sein",
      "examples":[  
         "Die Authentizität des Dokuments ist überprüft worden und nicht zu bestreiten.",
         "uthentizität, so definiert es das Lexikon, bedeutet, dass das Handeln einer Person nicht durch äußere Einflüsse bestimmt wird, sondern in der Person selbst begründet liegt."
      ],
      "name":"Authentizität",
      "id":52
   },
   {  
      "definition":"jemanden mit einer Vollmacht ausstatten, etwas seine Genehmigung erteilen, etwas für berechtigt erklären",
      "examples":[  
         "Ich autorisiere dich etwas zu tun.",
         "Gleich nach den Anschlägen vom 11. September 2001 hat George Bush seinen Geheimdienst autorisiert, die wichtigsten Mitglieder von al-Qaida irgendwo in der Ferne zu verhören."
      ],
      "name":"autorisieren",
      "id":53
   },
   {  
      "definition":"bewusste oder unbewusste Beeinflussung eigener Verhaltensweisen sowie psychischer Funktionen ohne äußeren Anlass",
      "examples":[  
         "Autosuggestion kann in der Psychotherapie eingesetzt werden."
      ],
      "name":"Autosuggestion",
      "id":54
   },
   {  
      "definition":"Vorhut einer Armee, Vorkämpfer oder Vorreiter einer politischen oder künstlerischen Entwicklung",
      "examples":[  
         "Die Avantgarde geriet unter Beschuss.",
         "Zuerst müsse sich eine Minderheit formieren, die dann als Avantgarde des Wandels handle"
      ],
      "name":"Avantgarde",
      "id":55
   },
   {  
      "definition":"kleiner Trupp Soldaten zur Erkundung/Sicherung des Vorfeldes einer Trup",
      "examples":[  
         "Zwei Kinder hüpften ihnen als Vorhut voraus."
      ],
      "name":"Vorhut",
      "id":56
   },
   {  
      "definition":"starke Abneigung gegen einen Menschen, eine Handlung oder ein Objekt",
      "examples":[  
         "Er hat eine starke Aversion gegen Alkohol."
      ],
      "name":"Aversion",
      "id":57
   },
   {  
      "definition":" etwas schriftlich oder ähnlich ankündigen, beispielsweise eine Warenlieferung",
      "examples":[  
         "Hiermit möchte ich Ihnen die Ankunft von Herrn X für Freitag den 10.10.2010 avisieren.",
         "Wie mit Frau Müller avisiert, schicke ich Ihnen anbei meine Bewerbungsunterlagen."
      ],
      "name":"avisieren",
      "id":58
   },
   {  
      "definition":"gleichwertig, entsprechend",
      "examples":[  
         "Wenn zwei Aussagen äquivalent sind, bedeutet das: trifft eine zu, ist auch die andere richtig und umgekehrt.",
         "Bei Vertragsrücktritt ist eine äquivalente Entschädigung zu zahlen."
      ],
      "name":"äquivalent",
      "id":59
   },
   {  
      "definition":"kleine, unbedeutende Sache",
      "examples":[  
         "Die Kosten sind im Vergleich zur Gesamtbestellung eine Bagatelle.",
         "Der Bruder, Mitte 20, und das noch minderjährige Mädchen hatten sich wegen einer Bagatelle lautstark in die Haare bekommen."
      ],
      "name":"Bagatelle",
      "id":60
   },
   {  
      "definition":"etwas verniedlichen, als geringfügig und unbedeutend hinstellen",
      "examples":[  
         "Man sollte die Tatsache, dass die Einkommen sich immer weiter auseinanderentwickeln, nicht bagatellisieren."
      ],
      "name":"bagatellisieren",
      "id":61
   },
   {  
      "definition":"ohne großen Anspruch, einfach zu bewerkstelligen, auszuführen",
      "examples":[  
         "Die Gespräche der so genannten Experten waren ganz schön banal.",
         "Die Lösung ist banal.",
         "Wie kannst du das immer wieder falsch machen? Das ist doch echt banal."
      ],
      "name":"banal",
      "id":62
   },
   {  
      "definition":"Unfähigkeit, seinen Zahlungsverpflichtungen nachzukommen, finanzieller Zusammenbruch",
      "examples":[  
         "Seine junge, anspruchsvolle Frau hat ihn in den Bankrott getrieben.",
         "Nach Eröffnung des Insolvenzverfahrens hat der Insolvenzverwalter bis zu drei Monate Zeit, das vom Bankrott bedrohte Unternehmen gründlich unter die Lupe zu nehmen."
      ],
      "name":"Bankrott",
      "id":63
   },
   {  
      "definition":"ein altes französisches Weinmaß, ein Weinfass aus Eichenholz",
      "examples":[  
         "„Kein Barrique ist wie das andere, […] Jedes Holzfass gibt einen bestimmten, unterschiedlichen Ton ab."
      ],
      "name":"Barrique",
      "id":64
   },
   {  
      "definition":" uneheliches Kind, besonders eines gesellschaftlich hoch gestellten Vaters und einer Mutter aus niedrigerem Stand; Schimpfwort: verabscheuter Mensch",
      "examples":[  
         "Das Kind, sofern es geboren wurde, war nichts als ein rechtloser Bastard, eine Brandmarkung, die es sein ganzes Leben lang begleitete."
      ],
      "name":"Bastard",
      "id":65
   },
   {  
      "definition":"leidenschaftlicher Sammler von Büchern",
      "examples":[  
         "Er ist ein bibliomane"
      ],
      "name":"biblioman",
      "id":66
   },
   {  
      "definition":"scheinheilig, heuchlerisch",
      "examples":[  
         "Manche Menschen neigen dazu, mit höherem Alter bigott zu werden."
      ],
      "name":"bigott",
      "id":67
   },
   {  
      "definition":"zwei Seiten betreffend, von zwei Seiten ausgehend",
      "examples":[  
         "Die beiden Projektleiter müssen sich bilateral abstimmen."
      ],
      "name":"bilateral",
      "id":68
   },
   {  
      "definition":"religiös observant, gottgläubig, religiös; veraltet: gut, gerecht, tapfer",
      "examples":[  
         "Sag vor ihm ja nichts gegen den Pfarrer, er ist nämlich fromm",
         "Lieber Gott, mach mich fromm, dass ich in den Himmel komm!"
      ],
      "name":"fromm",
      "id":69
   },
   {  
      "definition":"messbare Produkte von Organismen, die als Indikatoren für zum Beispiel Umweltbelastungen oder Krankheiten herangezogen werden",
      "examples":[  
         "Der Biomarker half dabei, eine Umweltbelastung festzustellen."
      ],
      "name":"Biomarker",
      "id":70
   },
   {  
      "definition":"Gotteslästerung; die Schmähung von etwas Heiligem oder Göttlichem, übertragen: Kritik an einer allgemein anerkannten oder respektierten Person, Sache oder Idee",
      "examples":[  
         "Er wurde der Blasphemie angeklagt."
      ],
      "name":"Blasphemie",
      "id":71
   },
   {  
      "definition":"stur von sich, seiner Meinung und Position überzeugt und alle anderen Standpunkte ignorierend",
      "examples":[  
         "Bornierten Menschen sollte man nicht widersprechen. Widerspruch ist immerhin ein Zeichen von Anerkennung."
      ],
      "name":"borniert",
      "id":72
   },
   {  
      "definition":"gehobenes, einflussreiches, gutsituiertes Bürgertum, im Kapitalismus derjenige Teil der Gesellschaft, der über Produktionsmittel und Macht verfügt",
      "examples":[  
         "Die Industriellenfamilien der Gründerzeit gehören zur Bourgeoisie.",
         "Angehörige der Bourgeoisie werden auch Bourgeois genannt."
      ],
      "name":"Bourgeoisie",
      "id":73
   },
   {  
      "definition":"redensartlich, meist nur in Wendungen: für Verlegenheit, Schwierigkeiten, Bedrängnis",
      "examples":[  
         "Da war ich ganz schön in der Bredouille.",
         "Ohne dieses frische Geld würden die Landesbanken schnell in die Bredouille geraten."
      ],
      "name":"Bredouille",
      "id":74
   },
   {  
      "definition":"jemanden vor den Kopf stoßen, die Gefühle von jemandem verletzen",
      "examples":[  
         "Er hat mich brüskiert, als er mich auf mein Gewicht angesprochen hat.",
         "Nordkorea hat die Staatengemeinschaft im Februar mit einem weiteren Atomtest brüskiert."
      ],
      "name":"Brüskieren",
      "id":75
   },
   {  
      "definition":"Ausstrahlung einer Person",
      "examples":[  
         "Dieser Moderator hat Charisma.",
         "Als habe jemand einen Schalter umgelegt, war es wieder da, das Charisma, das er schon in Chicago ausgestrahlt hatte."
      ],
      "name":"Charisma",
      "id":76
   },
   {  
      "definition":"bezauberndes, gewinnendes Wesen",
      "examples":[  
         "Karl konnte eine beträchtliche Menge von Charme entwickeln.",
         "Der Jüngling wird sich des Charmes bewußt, über den er verfügt und den er bald taktisch einzusetzen versteht, wo immer es ihm genehm scheint."
      ],
      "name":"Charme",
      "id":77
   },
   {  
      "definition":"Staatsrecht, Völkerrecht: Verfassungsurkunde",
      "examples":[  
         "Wer kennt die Charta der Vereinten Nationen genau?"
      ],
      "name":"Charta",
      "id":78
   },
   {  
      "definition":"extrem sexistische Einstellung einer Person, meist übersteigertes Männlichkeitsgefühl, exzessiver Patriotismus beziehungsweise Nationalismus, übersteigerter Nationalismus",
      "examples":[  
         "Im College setzte sie sich unerschrocken gegen sexuelle Belästigung zur Wehr. Und später gegen den Chauvinismus der Vorgesetzten.",
         "Manche sagen, der Chauvinismus der Kolonialzeit sei Hauptursache für den Ersten Weltkrieg gewesen."
      ],
      "name":"Chauvinismus",
      "id":79
   },
   {  
      "definition":"Zeichen einer Geheimschrift, Wort mit einer verschlüsselten Bedeutung",
      "examples":[  
         "Der kundige Leser kann hier noch weitere Chiffren entdecken.",
         "Antwort unter Chiffre X1234Y5678 erbeten."
      ],
      "name":"Chiffre",
      "id":80
   },
   {  
      "definition":"in zeitlicher Reihenfolge geordnet",
      "examples":[  
         "In chronologischer Ordnung"
      ],
      "name":"chronologisch",
      "id":81
   },
   {  
      "definition":"Genussmensch, Kenner der guten Dinge",
      "examples":[  
         "Nur weil der Kollege Rot- von Weißwein unterscheiden kann, hält er sich schon für einen Connaisseur."
      ],
      "name":"Connaisseur",
      "id":82
   },
   {  
      "definition":"besonders Recht, Philosophie: notwendige Bedingung; Voraussetzung, die unerlässlich ist",
      "examples":[  
         "Andererseits ist Kommunikation ganz offensichtlich eine Conditio sine qua non menschlichen Lebens und gesellschaftlicher Ordnung."
      ],
      "name":"Conditio sine qua non",
      "id":83
   },
   {  
      "definition":"Recht: Beweismittel, Beweisstück für ein Verbrechen, zum Beispiel die Tatwaffe",
      "examples":[  
         "Das Corpus Delicti war ein Messer."
      ],
      "name":"Corpus Delicti",
      "id":84
   },
   {  
      "definition":"Gefühl, bei dem trotz gefährlicher Situation keine Angst auftritt",
      "examples":[  
         "In so einer Situation muss man auch Courage zeigen."
      ],
      "name":"Courage",
      "id":85
   },
   {  
      "definition":"Überzeugung, die jemand vertritt",
      "examples":[  
         "Niemals ist sie in der Öffentlichkeit mit ihrem stets offensiv vorgetragenen Credo auf Ablehnung gestoßen."
      ],
      "name":"Credo",
      "id":86
   },
   {  
      "definition":"Lebenslauf; eine präzise Regelung und Festlegung aller Lernziele und Lerninhalte sowie der zugehörigen Lernprozesse und der zugehörigen Lernorganisation für ein Unterrichtsfach und für einen bestimmten Zeitraum ",
      "examples":[  
         "Für die Oberstufe wurden vollkommen neue Curricula entwickelt.",
         "Mail\u0027 mir doch bitte dein Curriculum zu."
      ],
      "name":"Curriculum",
      "id":87
   },
   {  
      "definition":"besonders österreichisch: einig, übereinstimmend, der gleichen Meinung, einverstanden",
      "examples":[  
         "Ich nehme an, wir sind d’accord.",
         "In dem Punkt gehe ich d’accord."
      ],
      "name":"d'accord",
      "id":88
   },
   {  
      "definition":"nach Tatsachen, in der Praxis, tatsächlich",
      "examples":[  
         "Der Sieger der Wahl stand de facto schon vor der Wahl fest.",
         "Hier in Amerika hatte er de facto schon seit Jahrzehnten existiert."
      ],
      "name":"de facto",
      "id":89
   },
   {  
      "definition":"Streitgespräch, das bestimmten Regeln folgt",
      "examples":[  
         "Eine kritische Debatte über die durch die Einwanderung seit 30 Jahren entstandene Situation hat es nicht gegeben."
      ],
      "name":"Debatte",
      "id":90
   },
   {  
      "definition":"einen in Geheimschrift verfassten Text entschlüsseln",
      "examples":[  
         "Diese Ziffernfolge wurde nach Kuba gefunkt und konnte dort wieder dechiffriert werden"
      ],
      "name":"dechiffrieren",
      "id":91
   },
   {  
      "definition":"jemandem gewidmet, zugeeignet, zugeordnet",
      "examples":[  
         "dedizierter Server: Ein Server, der nur dafür da ist, ganz bestimmte Dienste und Daten anderen Rechnern zukommen zu lassen oder nur für einen ganz bestimmten Großkunden zu arbeiten."
      ],
      "name":"dediziert",
      "id":92
   },
   {  
      "definition":"Logik, Wissenschaftstheorie: vom Allgemeinen auf das Besondere schließend",
      "examples":[  
         "Dieser Satz wurde deduktiv gewonnen."
      ],
      "name":"deduktiv",
      "id":93
   },
   {  
      "definition":"pessimistische, mutlose Haltung",
      "examples":[  

      ],
      "name":"Defätismus",
      "id":94
   },
   {  
      "definition":"Hoffnungslosigkeit ausdrückend oder auch fast schon resignierend",
      "examples":[  
         "Bitte jetzt keine defätistischen Bemerkungen."
      ],
      "name":"defätistisch",
      "id":95
   },
   {  
      "definition":"Militär: jemanden im Rang herabsetzen",
      "examples":[  
         "Der Offizier wurde wegen des Vorfalls zum Gefreiten degradiert."
      ],
      "name":"degradieren",
      "id":96
   },
   {  
      "definition":"infolge kultureller Überfeinerung entartet und ohne Kraft oder Widerstandsfähigkeit, im Verfall begriffen",
      "examples":[  
         "Der dekadente Lebensstil der führenden Schichten Roms war mitschuld am Niedergang der römischen Republik."
      ],
      "name":"dekadent",
      "id":97
   },
   {  
      "definition":"jemandem etwas überweisen bzw. jemanden beauftragen, Rechte oder Aufgaben abtreten, Aufgaben auf einen anderen übertragen",
      "examples":[  
         "Du solltest diese Arbeiten besser an deine Mitarbeiter delegieren."
      ],
      "name":"delegieren",
      "id":98
   },
   {  
      "definition":"jemanden mit etwas erfreuen",
      "examples":[  
         "Sie delektierte sich an ihrer neuen Erfindung."
      ],
      "name":"delektieren",
      "id":99
   },
   {  
      "definition":"Kriminologie: der Ausführende eines Delikts; jemand der ein Delikt (Straftat) begangen hat",
      "examples":[  
         "Die im ganzen Deutschen Reich beliebte Folter diente der Erreichung eines schnellen Geständnisses des Delinquenten."
      ],
      "name":"Delinquent",
      "id":100
   },
   {  
      "definition":"jemand, der (politische) Hetze betreibt",
      "examples":[  
         "Manche Politiker haben das Zeug zum Demagogen."
      ],
      "name":"Demagoge",
      "id":101
   },
   {  
      "definition":"etwas oder jemanden öffentlich bloßstellen oder brandmarken",
      "examples":[  
         "Die Zeitschrift wurde als linkslastig denunziert."
      ],
      "name":"denunzieren",
      "id":102
   },
   {  
      "definition":"ohne Ordnung, unordentlich, verwirrt, konfus",
      "examples":[  
         "Er sah irgendwie komisch und derangiert aus."
      ],
      "name":"derangiert",
      "id":103
   },
   {  
      "definition":"leugnen, widersprechen, nicht anerkennen",
      "examples":[  
         "Er desavouierte Arabellas ganze Natur: aber das war ja, was er wollte, was er sollte."
      ],
      "name":"desavouieren",
      "id":104
   },
   {  
      "definition":"voraus ernennen, bezeichnen, vorsehen, bestimmen",
      "examples":[  
         "Noch vor der Amtsübergabe wurde er zum Präsidenten designiert."
      ],
      "name":"designieren",
      "id":105
   },
   {  
      "definition":"sachlich darstellend",
      "examples":[  
         "eine rein deskriptive Darstellung der hochsprachlichen Norm"
      ],
      "name":"Deskriptiv",
      "id":106
   },
   {  
      "definition":"traurig, trostlos, einsam",
      "examples":[  
         "Die desolate deutsche Mannschaft verlor das Spiel."
      ],
      "name":"desolat",
      "id":107
   },
   {  
      "definition":"Staatsoberhaupt, das willkürlich und absolut herrscht, Tyrann",
      "examples":[  
         "ein grausamer Despot"
      ],
      "name":"Despot",
      "id":108
   },
   {  
      "definition":"von gesellschaftlichen Normen abweichend",
      "examples":[  
         "er hat ein deviantes Verhalten"
      ],
      "name":"deviant",
      "id":109
   },
   {  
      "definition":"von Entscheidungen, Anweisungen, Meinungen, Forderungen: auf eindeutige und bestimmte Weise",
      "examples":[  
         "Wir sollten diesen Standpunkt dezidiert vertreten."
      ],
      "name":"dezidiert",
      "id":110
   },
   {  
      "definition":"genau entgegengesetzt, völlig unterschiedlich",
      "examples":[  
         "Unsere Ansichten zu dieser Sache sind diametral verschieden."
      ],
      "name":"diametral",
      "id":111
   },
   {  
      "definition":"konfessionelle oder nationale Minderheit",
      "examples":[  
         "Der aus Franken stammende Professor sieht Norddeutschland als Diaspora an, wo er kaum andere Süddeutsche antrifft."
      ],
      "name":"Diaspora",
      "id":112
   },
   {  
      "definition":"fein bis ins Einzelne abgestuft, nuanciert",
      "examples":[  
         "die Wissenschaft hat heute viel differenziertere Methoden"
      ],
      "name":"differenziert",
      "id":113
   },
   {  
      "definition":"schwierig, kompliziert, heikel, auch schwer verständlich (im zwischenmenschlichen oder gesellschaftlichen Zusammenhang verwendet)",
      "examples":[  
         "Das ist eine diffizile Angelegenheit und erfordert Fingerspitzengefühl.",
         "Es gelinge ihm nicht, was solle er tun! Hunderte Stunden habe er sich damit befaßt. Die Sache sei unvorstellbar diffizil."
      ],
      "name":"diffizil",
      "id":114
   },
   {  
      "definition":"Liebhaber von etwas ohne professionelle Kenntnisse (heute meist abwertend gebraucht)",
      "examples":[  
         "Er war ein Dilettant in der Malerei."
      ],
      "name":"Dilettant",
      "id":115
   },
   {  
      "definition":"ohne angemessene Ausbildung oder Fähigkeiten etwas tun",
      "examples":[  
         "Paul war ein spielerischer Intellektueller, beredt und wandlungsfähig, und in seiner Jugend ein dilettierender Literat"
      ],
      "name":"dilettieren",
      "id":116
   },
   {  
      "definition":"in Misskredit bringen, in Verruf bringen",
      "examples":[  
         "Er wurde als Verräter diskreditiert.",
         "Sie haben sich selbst diskreditiert."
      ],
      "name":"diskreditieren",
      "id":117
   },
   {  
      "definition":"Uneinigkeit oder Nichtübereinstimmung",
      "examples":[  
         "Hier zeigt sich aber die Diskrepanz zwischen Wunsch und Wirklichkeit."
      ],
      "name":"Diskrepanz",
      "id":118
   },
   {  
      "definition":"jemanden in ein unverdient schlechtes Licht setzen",
      "examples":[  
         "Ihnen unterstellt man wohl, dass sie dazu neigen, andere zu diskriminieren."
      ],
      "name":"diskriminieren",
      "id":119
   },
   {  
      "definition":"Gespräch oder (seltener schriftlicher) Gedankenaustausch zwischen zwei oder mehr Personen, mit dem Ziel, die jeweilige Gegenseite von den eigenen Argumenten zu überzeugen",
      "examples":[  
         "Der Baden-Badener Disput ist relativ populär."
      ],
      "name":"Disput",
      "id":120
   },
   {  
      "definition":"unterschiedliche Auffassung, Meinung",
      "examples":[  
         "Sie trennten sich mit einem unüberwindlichen Dissens."
      ],
      "name":"Dissens",
      "id":121
   },
   {  
      "definition":"nicht zusammenpassend, unstimmig, mit Unstimmigkeiten",
      "examples":[  
         "Unser letztes Gespräch hat ja leider sehr dissonant geendet."
      ],
      "name":"dissonant",
      "id":122
   },
   {  
      "definition":"sich durch betont gepflegtes Auftreten oder Ähnliches von anderen abhebend",
      "examples":[  
         "Sie legte ein sehr distinguiertes Benehmen an den Tag."
      ],
      "name":"distinguiert",
      "id":123
   },
   {  
      "definition":"eine Bestätigung von vorher Genanntem; ich auch, ebenso",
      "examples":[  
         "„Alles Gute zum neuen Jahr“ — „Dito“"
      ],
      "name":"dito",
      "id":124
   },
   {  
      "definition":"Veränderung, Abwechslung, Vielfalt (Spezialisierung auf mehrere, unterschiedliche Gebiete",
      "examples":[  
         "Diversifikation betreiben Firmen, indem sie sich ein weiteres „Standbein“, also ein weiteres Produkt zulegen."
      ],
      "name":"Diversifikation",
      "id":125
   },
   {  
      "definition":"mit einem kritischen Unterton: Aussage oder Ansicht, die von einer Gruppe von Menschen als nicht verhandelbar angesehen wird",
      "examples":[  
         "Die Unfehlbarkeit des Papstes ist seit 1870 ein Dogma der katholischen Kirche."
      ],
      "name":"Dogma",
      "id":126
   },
   {  
      "definition":"Linienführung beim Schreiben, Zeichnen und beim Malen",
      "examples":[  
         "Fachleute erkennen bereits am Duktus, von welchem Künstler das Werk stammt."
      ],
      "name":"Duktus",
      "id":127
   },
   {  
      "definition":"jemanden hereinlegen, täuschen, zum Narren halten",
      "examples":[  
         "Durch die Aussetzung des Wahlkampfes von John McCain sieht sich sein Konkurrent Barack Obama düpiert."
      ],
      "name":"düpieren",
      "id":128
   },
   {  
      "definition":"mit fehlender oder mangelhafter Funktion",
      "examples":[  
         "Dysfunktional ist eine Uhr, die die Zeit nicht genau angibt."
      ],
      "name":"dysfunktional",
      "id":129
   },
   {  
      "definition":"in beunruhigende Erregung versetzen; sich ereifern, sein Gemüt erhitzen",
      "examples":[  
         "„Eine Unverschämtheit!“, echauffierte er sich."
      ],
      "name":"echauffieren",
      "id":130
   },
   {  
      "definition":"auffällig, aufsehenerregend, sensationell (jeweils mit negativer Konnotation)",
      "examples":[  
         "Dabei mussten sie eine eklatante Niederlage einstecken.",
         "Auf eklatante Weise hat sich gezeigt, dass…"
      ],
      "name":"eklatant",
      "id":131
   },
   {  
      "definition":"imitierend, nachahmend, unschöpferisch",
      "examples":[  
         "Die rechte Selbständigkeit ging ihm ab; seine Natur war ebenso eklektisch als encyklopädistisch."
      ],
      "name":"eklektisch",
      "id":132
   },
   {  
      "definition":"Zustand rauschhafter Trance, der Begeisterung, des Kontrollverlustes über das (normale) Bewusstsein",
      "examples":[  
         "Vollkommen entblößt gerieten Ruth und Bernhard in Ekstase."
      ],
      "name":"Ekstase",
      "id":133
   },
   {  
      "definition":"sorgfältig ausgeführt, sorgfältig herausgebildet, hoch differenziert ",
      "examples":[  
         "Bediene dich doch bitte einer etwas elaborierteren Sprachform!"
      ],
      "name":"elaboriert",
      "id":134
   },
   {  
      "definition":"fähig, sich angemessen und wirkungsvoll auszudrücken",
      "examples":[  
         "Dies ist ein äußerst eloquenter Mann."
      ],
      "name":"eloquent",
      "id":135
   },
   {  
      "definition":"himmlisch, paradiesisch",
      "examples":[  
         "Wir erlebten elysische Freuden.",
         "Die Wonne, die uns durchströmte, war wahrhaft elysisch."
      ],
      "name":"elysisch",
      "id":136
   },
   {  
      "definition":"herausragend, hervorragend, außerordentlich",
      "examples":[  
         "Die neue Haltung war nur realisierbar, weil man aus einer eminenten Substanz schöpfen konnte."
      ],
      "name":"eminent",
      "id":137
   },
   {  
      "definition":"Fähigkeit, sich in die Gefühle anderer Menschen hineinzuversetzen",
      "examples":[  
         "Die Fähigkeit, Gefühlszustände anderer erkennen, Empathie empfinden und eigene Gefühlszustände regulieren zu können, stammt aus dieser Zeit - …"
      ],
      "name":"Empathie",
      "id":138
   },
   {  
      "definition":"Die Fähigkeit, Gefühlszustände anderer erkennen, Empathie empfinden und eigene Gefühlszustände regulieren zu können, stammt aus dieser Zeit - …",
      "examples":[  
         "Der würde weiterhin das Enfant terrible spielen mit rüden Manieren und einem goldenen Pfadfinderherzen."
      ],
      "name":"Enfant terrible",
      "id":139
   },
   {  
      "definition":"vehement für eine Sache eintretend, ein starkes Interesse an einer Sache habend",
      "examples":[  
         "Der ehemalige politische Gefangene, der jetzt in Deutschland lebt, ist zuversichtlich. „Die Proteste werden weitergehen. Besonders die Frauen sind engagiert und zornig wie nie.“"
      ],
      "name":"engagiert",
      "id":140
   },
   {  
      "definition":"ortsgebunden, einheimisch.",
      "examples":[  

      ],
      "name":"entopisch",
      "id":141
   },
   {  
      "definition":"Unternehmer, der meist mit einer innovativen Idee seine Firma begründet hat",
      "examples":[  
         "Er ist ein erfolgreicher Entrepreneur"
      ],
      "name":"Entrepreneur",
      "id":142
   },
   {  
      "definition":"plötzliche, unerwartet auftretende Erkenntnis, Offenbarung",
      "examples":[  

      ],
      "name":"Epiphanie",
      "id":143
   },
   {  
      "definition":"in Zurückgezogenheit lebender Mann (zum Beispiel aus religiöser Überzeugung)",
      "examples":[  
         "Nicht alle Eremiten haben sich aus religiösen Gründen für ein Leben in Abgeschiedenheit entschieden."
      ],
      "name":"Eremit",
      "id":144
   },
   {  
      "definition":"Boden oder Gestein wegwaschen, abtragen",
      "examples":[  
         "Das fließende Wasser erodiert das Felsgestein."
      ],
      "name":"erodieren",
      "id":145
   },
   {  
      "definition":"wahnhafte, unwiderstehliche, romantische und idealisierte Liebe zu einer meist unerreichbaren Person",
      "examples":[  
         "Das zentrale Thema der Erotomanie besteht jedoch darin, dass der Verliebte glaubt, von eben jener Person, die meist nichts von dessen Gefühlen weiß, wiedergeliebt zu werden, auch wenn hierfür keinerlei Anzeichen vorhanden sind."
      ],
      "name":"Erotomanie",
      "id":146
   },
   {  
      "definition":"Redewendung: \u0027Irren ist menschlich\u0027",
      "examples":[  

      ],
      "name":"errare humanum est",
      "id":147
   },
   {  
      "definition":"verirrt, verstreut, weit weg vom Ursprung",
      "examples":[  
         "In Libyen ist ein populistisch-revolutionäres Regime entstanden, dessen Entwicklung im Wesentlichen von den Inspirationen seines erratischen Führers abhängt"
      ],
      "name":"erratisch",
      "id":148
   },
   {  
      "definition":"etwas durch gründliche Untersuchungen herausfinden; etwas in Erfahrung bringen",
      "examples":[  
         "Wir konnten den Wohnort des Schuldners eruieren."
      ],
      "name":"eruieren",
      "id":149
   },
   {  
      "definition":"Flucht vor der realen Welt",
      "examples":[  
         "Diese Romane sind der reinste Eskapismus."
      ],
      "name":"Eskapismus",
      "id":150
   },
   {  
      "definition":"wesentlich; zum Wesen (einer Sache) gehörig",
      "examples":[  
         "Das ist eine essenzielle Voraussetzung."
      ],
      "name":"essenziell",
      "id":151
   },
   {  
      "definition":"Bibliografie: und andere (Autoren)",
      "examples":[  
         "Nach einer Studie von Pielke et al. (2008) hätte bspw. der \"Great Miami Hurricane\" von 1926 bei heutiger Küstenbesiedlung einen Schaden von 140–157 Milliarden Dollar (doppelt so viel wie Hurrikan Katrina) angerichtet."
      ],
      "name":"et al.",
      "id":152
   },
   {  
      "definition":"etwas dauerhaft einrichten, ins Leben rufen",
      "examples":[  
         "Sie haben das neue Geschäft inzwischen erfolgreich etabliert."
      ],
      "name":"etablieren",
      "id":153
   },
   {  
      "definition":"sprachlicher Ausdruck, der einen Sachverhalt beschönigend, mildernd oder in verschleiernder Absicht darstellt bzw. benennt",
      "examples":[  
         "Euphemismen sind z.B. „Kollateralschaden“ für \"unbeabsichtigte Zivilopfer einer Kriegshandlung\" und „freisetzen“ für \"entlassen\"."
      ],
      "name":"Euphemismus",
      "id":154
   },
   {  
      "definition":"etwas freundlicher darstellend, als es der Wirklichkeit entspricht",
      "examples":[  
         "Nullwachstum“ ist eine euphemistische Bezeichnung für Stagnation in der Wirtschaftsentwicklung.",
         "„Wie ‚Frau‘, so steht auch das Wort ‚Mädel‘ häufig euphemistisch für ›Prostituierte‹.“"
      ],
      "name":"euphemistisch",
      "id":155
   },
   {  
      "definition":"ein begeisterter Gemütszustand der Lebensfreude, ein vorübergehendes gesteigertes gutes Lebensgefühl",
      "examples":[  
         "Jetzt in Optimismus oder gar Euphorie auszubrechen, wäre falsch, doch vorsichtige Hoffnungen darf man erstmals hegen."
      ],
      "name":"Euphorie",
      "id":156
   },
   {  
      "definition":"bewusstes Herbeiführen des Todes eines Menschen durch die Gabe von Medikamente oder einen Abbruch der Behandlung",
      "examples":[  
         "Erleichterung des Sterbens durch schmerzlindernde Medikamente und Pflege",
         "Euthanasie im Sinne einer aktiven Sterbehilfe ist in Deutschland gesellschaftlich höchst umstritten."
      ],
      "name":"Euthanasie",
      "id":157
   },
   {  
      "definition":"überzeugend, offensichtlich oder klar ersichtlich",
      "examples":[  
         "Das sieht man doch! Das ist ein evidenter Irrtum."
      ],
      "name":"evident",
      "id":158
   },
   {  
      "definition":"überraschend, plötzlich, unversehens",
      "examples":[  
         "Ex abrupto schwenkte das Wetter um."
      ],
      "name":"Ex abrupto",
      "id":159
   },
   {  
      "definition":"im Vorfeld, vorab, zuvor, vorher",
      "examples":[  
         "Eine ex ante Planung konnte nicht vorgenommen werden, da nicht alle Daten bekannt waren.",
         "Die ex ante ermittelten Werte konnten in einer Versuchsmessung bestätigt werden."
      ],
      "name":"ex ante",
      "id":160
   },
   {  
      "definition":"von außen her (angeregt), nicht aus eigenem Antrieb erfolgend",
      "examples":[  
         "Da seine Mutter ihm mit Taschengeldentzug drohte, war der kleine Junge extrinsisch motiviert, sein Zimmer aufzuräumen."
      ],
      "name":"extrinsisch",
      "id":161
   },
   {  
      "definition":"übertrieben aufgeregt, künstlich übersteigert",
      "examples":[  
         "Dafür dauerte der exaltierte Gefühlsausbruch allerdings ganz schön lange."
      ],
      "name":"exaltiert",
      "id":162
   },
   {  
      "definition":"ist die ausführende/vollziehende Gewalt; in der Staatstheorie neben Legislative (Gesetzgebung) und Judikative (Rechtsprechung) eine der drei unabhängigen Gewalten (Gewaltenteilung)",
      "examples":[  
         "Die Exekutive ist eine der drei Gewalten."
      ],
      "name":"Exekutive",
      "id":163
   },
   {  
      "definition":"einen beerdigten Leichnam wieder ausgraben",
      "examples":[  
         "Erst 1999 durfte der tote Kirchenmann in seine Gemeinde zurückkehren: Erzbischof Jorge Mario Bergoglio ließ Mugicas Leichnam exhumieren, in einer feierlichen Prozession wurde er in die Villa 31 überführt, Bergoglio ging hinter dem Sarg her."
      ],
      "name":"exhumieren",
      "id":164
   },
   {  
      "definition":"Vorgang, bei dem Menschen ein Gebiet, ein Land verlassen",
      "examples":[  
         "Ein in der deutschen Geschichte einmaliger Exodus an Talent und Wissen, an Erfahrungen und an handwerklichem Können setzte ein."
      ],
      "name":"Exodus",
      "id":165
   },
   {  
      "definition":"gewaltig, außerhalb der Maßstäbe, außergewöhnlich, enorm",
      "examples":[  
         "Die Preise für Original-Tintenpatronen sind exorbitant."
      ],
      "name":"exorbitant",
      "id":166
   },
   {  
      "definition":"Eigenschaften, Fähigkeiten oder Wissen, das eine Person zu einem Experten auf einem Gebiet macht; schriftliches Gutachten eines Fachmanns",
      "examples":[  
         "Nach der jahrelangen Ausbildung verfügt er über die nötige Expertise, um ein solches Vorhaben durchzuführen."
      ],
      "name":"Expertise",
      "id":167
   },
   {  
      "definition":"Versuch, etwas herauszufinden",
      "examples":[  
         "Die persönliche Entwicklung oder überhaupt eine Exploration der eigenen Möglichkeiten und Interessen kam dabei häufig zu kurz."
      ],
      "name":"Exploration",
      "id":168
   },
   {  
      "definition":"Mathematik: prozentuale (nicht feste) Zunahme oder Abnahme eines Wertes pro Zeiteinheit",
      "examples":[  
         "Wenn du nicht mal die Zinsen für deinen Kredit bezahlen kannst, wachsen deine Schulden exponentiell."
      ],
      "name":"Exponentiell",
      "id":169
   },
   {  
      "definition":"sich oder jemand anderen in eine gut einsehbare Position bringen",
      "examples":[  
         "In der vordersten Stellung waren die Soldaten den Angriffen in besonderem Maße exponiert."
      ],
      "name":"exponieren",
      "id":170
   },
   {  
      "definition":"Grund-/Übersichtsinformation über etwas, Darstellung einer Planung",
      "examples":[  
         "Das heißt, ich rufe ein paar Leute an und bitte sie, da mal reinzuschauen, und ich versende die ersten drei Kapitel inklusive Exposé an ein paar Verlage."
      ],
      "name":"Exposé",
      "id":171
   },
   {  
      "definition":"etwas aus einer Mischung herausziehen",
      "examples":[  
         "Flüssigkeiten kann man diskontinuierlich im Scheidetrichter extrahieren."
      ],
      "name":"extrahieren",
      "id":172
   },
   {  
      "definition":"der Außenwelt zugewandt",
      "examples":[  
         "Steve Ballmer und Marilyn Manson sind für ihre äußerst extrovertierten Auftritte bei öffentlichen Veranstaltungen "
      ],
      "name":"extrovertiert",
      "id":173
   },
   {  
      "definition":"Vorliebe, Neigung, Schwäche für etwas oder jemanden; nicht unbedingt begründbare/leicht übertrieben positive Einstellung zu etwas",
      "examples":[  
         "Er hat ein Faible für schnelle Autos.",
         "Er hatte ein besonders ausgeprägtes Faible für die Rheinlandschaft."
      ],
      "name":"Faible",
      "id":174
   },
   {  
      "definition":"unumkehrbarer Umstand, eigenmächtig geschaffener Sachverhalt",
      "examples":[  
         "Würde Kairo dieses Fait accompli anerkennen und einseitig die Grenze zu Gaza öffnen - argumentieren die Ägypter -, so übernähmen sie damit letztlich die Verantwortung für das Überleben des Territoriums, die immer noch bei der Besatzungsmacht Israel liegt."
      ],
      "name":"Fait accompli",
      "id":175
   },
   {  
      "definition":"genaue Nachbildung einer Schrift, eines Buches oder einer Zeichnung meist mittels fotografischer Reproduktionsverfahren",
      "examples":[  
         "Man kann von vielen alten Büchern Faksimiles erwerben.",
         "Ein gutes Faksimile entspricht der Vorlage sowohl in Größe, als auch Farbe und Erhaltungszustand."
      ],
      "name":"Faksimile",
      "id":176
   },
   {  
      "definition":"gelieferte Waren oder geleistete Dienste in Rechnung stellen; Waren berechnen",
      "examples":[  
         "Öl und Gas werden in Dollar fakturiert.",
         "Pro Tag werden bis zu 70.000 Aufträge mit bis zu 650.000 Artikeln von verarbeitet, fakturiert und zu Sendungen zusammengestellt"
      ],
      "name":"fakturieren",
      "id":177
   },
   {  
      "definition":"möglich, aber nicht zwingend erforderlich; freiwillig",
      "examples":[  
         "Der Ausflug auf dem Kreuzfahrtschiff ist fakultativ, er gehört nicht zum Pflichtprogramm und ist in der Regel mit Zusatzkosten verbunden."
      ],
      "name":"fakultativ",
      "id":178
   },
   {  
      "definition":"(eine Behauptung) durch Gegenbeispiel, Beobachtung oder Experiment widerlegen",
      "examples":[  
         "Durch ein Gegenbeispiel ist die Theorie falsifiziert."
      ],
      "name":"falsifizieren",
      "id":179
   },
   {  
      "definition":"Herrschaftssystem in Italien von 1922 bis 1945, nationalistische (chauvinistische), antidemokratische, rechtsradikale, antisozialistische und antikommunistische nach dem Führungsprinzip organisierte politische Bewegung, Ideologie sowie Herrschaftsform",
      "examples":[  
         "Der Faschismus war die Ideologie, die den Diktaturen von Benito Mussolini und seiner Partito Nazionale Fascista (PNF) in Italien 1922–43 sowie von Adolf Hitler und seiner Nationalsozialistischen Deutschen Arbeiterpartei (NSDAP) in Deutschland 1933–45 zugrunde lag."
      ],
      "name":"Faschismus",
      "id":180
   },
   {  
      "definition":"Lebensart eines Menschen; Kleidung, Frisur: eine bestimmte Form, Machart",
      "examples":[  
         "Herr Schmidt lebte schon immer ganz nach seiner Fasson.",
         "Kaum war ich vor die Tür gegangen, war meine neue Frisur schon ganz aus der Fasson."
      ],
      "name":"Fasson",
      "id":181
   },
   {  
      "definition":"unangenehm, verhängnisvoll, peinlich, ungünstig, schwerwiegend",
      "examples":[  
         "eine fatale (unangenehme, peinliche) Angelegenheit",
         "Es wäre fatal, würde ihm auf der Bühne die Hose herunter rutschen."
      ],
      "name":"fatal",
      "id":182
   },
   {  
      "definition":"eine Weltanschauung, die alle Geschehnisse dem Schicksal zuordnet",
      "examples":[  
         "Und er verwirft den Fatalismus, weil er ein freier Mensch und nicht ein Teil einer, wenn auch Himmel und Erde umfassenden Maschinerie sein will."
      ],
      "name":"Fatalismus",
      "id":183
   },
   {  
      "definition":"für Frauen passend, den Eigenschaften einer Frau ähnelnd beziehungsweise entsprechend",
      "examples":[  
         "Eine hübsche Person femininen Geschlechts",
         "Er zeigt sich eher von seiner femininen Seite.",
         "„die Sache“ ist feminin, „das Weib“ ist ein Neutrum."
      ],
      "name":"feminin",
      "id":184
   },
   {  
      "definition":"ein besonders attraktiver und verführerischer Frauentypus, der – mit magisch-dämonischen Zügen ausgestattet – Männer erotisch an sich bindet, sie aber auch manipuliert",
      "examples":[  
         "Eine Femme Fatale sein"
      ],
      "name":"Femme fatale",
      "id":185
   },
   {  
      "definition":"Fähigkeit zur Fortpflanzung",
      "examples":[  
         "Starkes Rauchen schädigt den Uterus und verringert die Fertilität, denn die befruchtete Eizelle kann sich nur schwer im Endometrium einnisten."
      ],
      "name":"Fertilität",
      "id":186
   },
   {  
      "definition":"Misserfolg, Reinfall, soziale oder wirtschaftliche Katastrophe",
      "examples":[  
         "Die Aufführung endete in einem Fiasko, als die Sopranistin sich in den Orchestergraben erbrach.",
         "Es gab von Beginn an warnende Stimmen, daß ein derartiges Projekt im Fiasko enden mußte."
      ],
      "name":"Fiasko",
      "id":187
   },
   {  
      "definition":"ausschweifend reden, um unangenehme Dinge (wie Entscheidungen oder Abstimmungen) zu verhindern oder zu verzögern",
      "examples":[  
         "Sie wollen doch nur filibustern, Herr Schiller! Weiter wollen Sie doch gar nichts!",
         "Die Grünen haben dann angekündigt zu filibustern. Sie hatten zu allen Tagesordnungspunkten in der Nacht Änderungsanträge geschrieben, über 100."
      ],
      "name":"filibustern",
      "id":188
   },
   {  
      "definition":"sehr fein, feingliedrig",
      "examples":[  
         "Dieses Schmuckstück wurde filigran verarbeitet.",
         "Hier sehen Sie eine sehr filigran verarbeitete Holzflöte.",
         "Sie bieten hier auf ein filigranes Schmuckstück."
      ],
      "name":"filigran",
      "id":189
   },
   {  
      "definition":"bildungssprachlich, scherzhaft: männlicher Nachkomme",
      "examples":[  
         "Für den Vorstadt-Familienvater gab es nur eine Möglichkeit, den Filius, der zu Unrecht verurteilt wurde, zu retten."
      ],
      "name":"Filius",
      "id":190
   },
   {  
      "definition":"energisch, farbenfroh, sehr bunt, flammend, geflammt",
      "examples":[  
         "Der Dichter setzte sich als flamboyanter Lebemann in Szene.",
         "Heute trägt Trude wieder eine flamboyante Auswahl an Kleidungsstücken."
      ],
      "name":"flamboyant",
      "id":191
   },
   {  
      "definition":"langsam, ohne besonderes Ziel umherschlendern",
      "examples":[  
         "Ich flanierte in der wiederaufgebauten Altstadt, ging in jede Kirche, spazierte im Park.",
         "In deutschen und anderen europäischen Städten kann man flanieren: Man schlendert ohne Eile, verweilt hier und da, um etwas genauer zu betrachten."
      ],
      "name":"flanieren",
      "id":192
   },
   {  
      "definition":"unregelmäßige, zufällige Veränderung, Schwankung; zum Beispiel die Fluktuation um einen Mittelwert oder zwischen zwei Extremen",
      "examples":[  
         "In den Zellen herrschte jetzt zwar eine höhere Fluktuation, doch die Zahl der Gefängnisinsassen war immer noch gefährlich hoch.",
         "Der Börsenkurs unterlag im letzten Monat starken Fluktuationen."
      ],
      "name":"Fluktuation",
      "id":193
   },
   {  
      "definition":"großer Vorraum in einer Oper, einem Theater, Konzertsaal etc., der dem Aufenthalt und der Kommunikation des Publikums dient",
      "examples":[  
         "Er sah sich im Foyer um.",
         "Wir treffen uns in der Pause im Foyer."
      ],
      "name":"Foyer",
      "id":194
   },
   {  
      "definition":"leicht zerbrechlich",
      "examples":[  
         "Dein Kartenhaus sieht aber ziemlich fragil aus.",
         "Um die fragile Eintracht in ihrer Heimat zu wahren, haben die Siedler die Thinge geschaffen."
      ],
      "name":"fragil",
      "id":195
   },
   {  
      "definition":"in Erstaunen versetzend; auch: frappant",
      "examples":[  
         "Es kam zu einem frappierenden Abschluss der Veranstaltung."
      ],
      "name":"frappierend",
      "id":196
   },
   {  
      "definition":"Brüderschaft schließen; vertraut werden, Freundschaft schließen (vor allem von Soldaten mit der Bevölkerung eines besiegten Landes)",
      "examples":[  
         "Statt das Gewehr auf die Nationalgarde zu richten, wandte sie die Gewehrkolben nach oben und fraternisierte mit dem Volk.",
         "Die Polen kommen; sie stehen schon südlich von Küstrin und wollen auf Berlin zu, um mit dem Berliner Volk zu fraternisieren."
      ],
      "name":"fraternisieren",
      "id":197
   },
   {  
      "definition":"mit größter Begeisterung",
      "examples":[  
         "Wegen der frenetischen Zuschauer musste das Spiel abgebrochen werden.",
         "Die Menge jubelte frenetisch."
      ],
      "name":"frenetisch",
      "id":198
   },
   {  
      "definition":"kühl, frostig",
      "examples":[  
         "Eine frigide Frau empfindet keine Lust.",
         "Rochelle war frigide geworden und ließ ihn nicht mehr an sich heran."
      ],
      "name":"frigide",
      "id":199
   },
   {  
      "definition":"schlicht, spärlich, karg (wird meist in Hinblick auf Speisen verwendet)",
      "examples":[  
         "Er konnte wieder ein frugales Mahl zu sich nehmen.",
         "Der Einsidler tischte uns ein frugales Mahl auf, nach dem jeder nur noch ans Schlafen dachte."
      ],
      "name":"frugal",
      "id":200
   },
   {  
      "definition":"plötzlich beginnend, heftig und schnell verlaufend",
      "examples":[  
         "Das Feuerwerk war fulminant.",
         "Die frühzeitige Diagnose ist Voraussetzung, um den gewöhnlich fulminanten Verlauf dieser Pilzpneumonie zu verhindern"
      ],
      "name":"fulminant",
      "id":201
   },
   {  
      "definition":"Grundlage von etwas; der Unterbau eines Gebäudes oder einer Maschine, ",
      "examples":[  
         "Für das Fundament des Hauses ist noch Erde auszuheben.",
         "Vertrauen ist das Fundament einer glücklichen Partnerschaft."
      ],
      "name":"Fundament",
      "id":202
   },
   {  
      "definition":"die Grundlage, das Fundament betreffend",
      "examples":[  
         "Das Vertrauen ist fundamental in einer Beziehung."
      ],
      "name":"fundamental",
      "id":203
   },
   {  
      "definition":"Personen oder Gruppen, die unnachgiebig an ihren ideologischen oder religiösen Grundsätzen festhalten",
      "examples":[  
         "Gruppen fundamentalistischer Christen könnte man vereinfacht auch als bibeltreu bezeichnen, da sie der Bibel absolute Irrtumslosigkeit attestieren."
      ],
      "name":"fundamentalistisch",
      "id":204
   },
   {  
      "definition":"wirken (als), sich betätigen (als), (als etwas) dienen",
      "examples":[  
         "Er fungierte im alten China als Berater des Kaisers."
      ],
      "name":"fungieren",
      "id":205
   },
   {  
      "definition":"meist in der Bedeutung ‚Furore machen‘: Aufsehen, Raserei, höchste Begeisterung",
      "examples":[  
         "Deutschlands Curling-Männer sorgen bei der WM in Peking weiter für Furore.",
         "Lady Gaga sorgte mit nicht mit ihrem Auftritt allein für Furore - auch ihr hoch geschlitztes Kleid war ein Hingucker bei der Preisverleihung in New York."
      ],
      "name":"Furore",
      "id":206
   },
   {  
      "definition":"architektonischer, musikalischer, künstlerischer oder produktgestalterischer Stil, der auf Vorstellungen über die Zukunft basiert beziehungsweise der Versuch mit künstlerischen Mitteln die Zukunft zu erfassen und abzubilden",
      "examples":[  

      ],
      "name":"Futurismus",
      "id":207
   },
   {  
      "definition":"sich auf eine bestimmte Weise verhalten",
      "examples":[  
         " Er geriert sich seit Tagen so, als habe er seine Prüfung schon in der Tasche."
      ],
      "name":"gerieren",
      "id":208
   },
   {  
      "definition":"den Geschmackssinn betreffend",
      "examples":[  
         "Das Mahl sieht aus wie zusammengewürfelt, aber gustatorisch sagt es mir dennoch zu."
      ],
      "name":"gustatorisch",
      "id":209
   },
   {  
      "definition":"den Tastsinn betreffend, auf ihm beruhend",
      "examples":[  
         "Es war der vielleicht haptischste Versuch, den Raum als Ganzes zurückzuerobern, seit dieser nicht mehr gebraucht wurde von PC und Bildschirm.",
         "Der Tastsinn ist die haptische Wahrnehmung von Lebewesen."
      ],
      "name":"haptisch",
      "id":210
   },
   {  
      "definition":"in Einklang bringen",
      "examples":[  
         "Durch den Vorschlag des Schlichters gelang es, die Interessen beider Partein zu harmonisieren."
      ],
      "name":"harmonisieren",
      "id":211
   },
   {  
      "definition":"jemand, der leichtsinnig ein hohes Risiko eingeht",
      "examples":[  
         "„Geheimdienstveteranen des Kalten Krieges sind dabei, die den neuen Präsidenten für einen Hasardeur halten.“",
         "Er führt sich wie ein Hasardeur auf."
      ],
      "name":"Hasardeur",
      "id":212
   },
   {  
      "definition":"Aufschwung, Erhöhung der Konjunktur für etwas, besonders der Wirtschaft",
      "examples":[  
         "Ich habe damals auf Hausse spekuliert und es hat sich ausgezahlt."
      ],
      "name":"Hausse",
      "id":213
   },
   {  
      "definition":"Streben nach Sinneslust und Genuss; Lehre, dass das Streben nach Genuss und Sinneslust die höchsten Werte des Lebens seien; eine an den Genusssüchten des Lebens orientierte Grundeinstellung",
      "examples":[  
         "Der griechische Philosoph Aristippos von Kyrene gilt als der Begründer des Hedonismus.",
         "Für ihn ist Hedonismus ein Lebensprinzip."
      ],
      "name":"Hedonismus",
      "id":214
   },
   {  
      "definition":"jemanden als Helden verehren oder als heldenhaft darstellen",
      "examples":[  
         "Trotz seiner Gewalttaten wurde der Guerillaführer vom Volk heroisiert."
      ],
      "name":"heroisieren",
      "id":215
   },
   {  
      "definition":"uneinheitlich, aus Ungleichartigem zusammengesetzt; einer anderen Gattung angehörend",
      "examples":[  
         "Beispiele für homogene Stoffgemische sind: Mehl, Messing, Speisefett, Wein, Tee, Salzlösungen, Luft oder Erdgas."
      ],
      "name":"heterogen",
      "id":216
   },
   {  
      "definition":"(künstlerisches) Werk, das als Ehrung für jemanden entworfen wurde, der eine Art Vorbildfunktion hatte, oder für etwas, das besonders inspirierend war",
      "examples":[  
         "Aus diesem Blickwinkel betrachtet, galt deshalb mein spätherbstlicher Besuch mehr einer Hommage an die Vergangenheit, als einer der sonst üblichen eingespielten gastronomischen Bestandsaufnahmen."
      ],
      "name":"Hommage",
      "id":217
   },
   {  
      "definition":"veraltend: in einer eher naiven Art anständig, ehrenhaft und rechtschaffen, und dadurch Achtung hervorrufend",
      "examples":[  
         "Sie ist eine honette Frau.",
         "Vor dem Palast stehen sauber ausgerichtet die Kanonen und Feldschlangen, mit denen die Vorfahren des jetzigen und durchaus honetten Fürsten die Passanten belästigten."
      ],
      "name":"honett",
      "id":218
   },
   {  
      "definition":"eine erbrachte Leistung bezahlen, eine vollbrachte Leistung verbal oder durch Taten positiv rückmelden",
      "examples":[  
         "Seine erbrachte Leistung wird mit Bargeld honoriert.",
         "Ruhm und Ehre honorieren Eure Taten."
      ],
      "name":"honorieren",
      "id":219
   },
   {  
      "definition":"realitätsfernes, maßloses und unangemessenes Vertrauen in die Handlungen der eigenen Person, Größenwahn, Selbstüberschätzung, Überheblichkeit",
      "examples":[  
         "Solche Hybris war im imperialistischen 19. Jahrhundert der Normalfall."
      ],
      "name":"Hybris",
      "id":220
   },
   {  
      "definition":"bloße Annahme, Behauptung ohne Beleg; Wissenschaft: unbewiesene (wissenschaftliche) Annahme, die noch eines Beweises bedarf",
      "examples":[  
         "Hypothesen kann man induktiv aufgrund von Beobachtungen, aber auch deduktiv durch Ableitung aus Gesetzen oder gar einer Theorie gewinnen und müssen noch überprüft werden.",
         "Entscheidend ist, daß Phantasie und Einfallsreichtum auf glückliche Fragen und fruchtbare Hypothesen führen."
      ],
      "name":"Hypothese",
      "id":221
   },
   {  
      "definition":"mittlerweile veralteter Fachbegriff: neurotische Störung, Neurose; übertriebene Erregbarkeit",
      "examples":[  
         "Die Hysterie ist eine Bezeichnung für eine neurotische Störung, bei der Geltungsbedürfnis, Egozentrismus und ein Bedürfnis nach Anerkennung zwar im Vordergrund stehen, die jedoch oft mit dem Symbol eines Paradiesvogels in Verbindung gebracht wird, da sie zu differenziert ist und dadurch kein einheitliches Erscheinungsbild aufweist."
      ],
      "name":"Hysterie",
      "id":222
   },
   {  
      "definition":"spezifisch, eigentümlich; Eigenschaft, nur bei einzelnen Wörtern vorzukommen und sich nicht aus Regeln zu ergeben; einer Idiosynkrasie entsprechend",
      "examples":[  
         "Ein Wort wie \"Löwenzahn\" ist in seiner Bedeutung idiosynkratisch; man kann die Bedeutung nicht aus der Bedeutung seiner Wortteile (Konstituenten) herleiten. (Ein \"Löwenzahn\" ist nicht der Zahn eines Löwen.)"
      ],
      "name":"idiosynkratisch",
      "id":223
   },
   {  
      "definition":"nicht realistisch; nur auf Hoffnungen beruhend; zwecklos, unmöglich",
      "examples":[  
         "Die Blockade Englands, mit der man die Insel aushungern wollte, ist illusorisch geworden."
      ],
      "name":"Illusorisch",
      "id":224
   },
   {  
      "definition":"innerhalb der Grenzen der Erfahrung, der Erkenntnis bleibend; vorstellbar; im Innern eines Gegenstandes, einer Erscheinung vorhanden seiend; innewohnend",
      "examples":[  
         "Ein mathematischer dreidimensionaler Raum ist immanent.",
         "Ein weiteres immanentes Problem des ökonomischen Föderalismus-Ansatzes liegt darin, daß die Ableitung der optimalen Föderationsstruktur aus dem individuellen Nutzenkalkül zur Konzentration auf ein Kollektiv unter vielen führt."
      ],
      "name":"immanent",
      "id":225
   },
   {  
      "definition":"derart unermesslich, über die Maßen, überdimensioniert, groß oder riesig, dass es in Erstaunen versetzt",
      "examples":[  
         "Deine Hobbys verursachen immense Kosten.",
         "Sein Stromverbrauch ist immens.",
         "In der Atmosphäre schlummern immense Energien."
      ],
      "name":"immens",
      "id":226
   },
   {  
      "definition":"befehlend, zwingend, bindend",
      "examples":[  
         "An einer Türe, die gemäss einschlägigem Piktogramm zweifelsfrei als Männertoilette identifiziert werden kann, ist ein papierenes Schild mit folgender imperativer Aufschrift angeschlagen worden: «Bitte Türe immer schliessen! Danke."
      ],
      "name":"imperativ",
      "id":227
   },
   {  
      "definition":"aufdringlich, dummdreist, unverschämt, vorlaut",
      "examples":[  
         "Etwas an dieser Antwort kam Humboldt impertinent vor, doch er war zu müde, um darüber nachzudenken."
      ],
      "name":"impertinent",
      "id":228
   },
   {  
      "definition":"innerer, begeisterter Antrieb einer Person; Schwung; Anfangsenergie, die eine Sache in Bewegung setzen kann; Anstoß",
      "examples":[  
         "Ich glaube nicht, daß von heute zu morgen wieder jener Impetus in die Wirtschaft hineinkommt, der das eigentliche Kennzeichen einer guten Konjunktur ist."
      ],
      "name":"Impetus",
      "id":229
   },
   {  
      "definition":"mit aussagen einschließen; auch ohne es ausdrücklich auszusprechen",
      "examples":[  
         "Die Annahme, die Quadratwurzel der Zwei sei eine rationale Zahl, impliziert nach dem bekannten Beweis Euklids einen Widerspruch zu dieser Annahme.",
         "Mit dieser Aussage möchten Sie implizieren, dass …"
      ],
      "name":"implizieren",
      "id":230
   },
   {  
      "definition":"unausgesprochen mitgemeint, mitverstanden",
      "examples":[  
         "Sie brachten ihre Kritik vorsichtshalber nur implizit an und waren dadurch nicht angreifbar."
      ],
      "name":"implizit",
      "id":231
   },
   {  
      "definition":"unwägbare Gegebenheiten, also z. B. Befindlichkeiten, Gefühls- und Stimmungsschwankungen oder nicht quantifizierbare Risiken. Der Ausdruck wird nur im Plural verwendet",
      "examples":[  
         "Vieles lässt sich planen, Imponderabilien können aber nie ganz ausgeschlossen werden."
      ],
      "name":"Imponderabilien",
      "id":232
   },
   {  
      "definition":"die Kunst, unvorbereitet, unmittelbar und spontan etwas darzubieten oder herzustellen, meist im Theater, in der Musik, oder beim Tanz",
      "examples":[  
         "Im Jazz werden sehr oft Improvisationen gespielt."
      ],
      "name":"Improvisation",
      "id":233
   },
   {  
      "definition":"plötzlichen Eingebungen folgend, launenhaft, launisch, unüberlegt",
      "examples":[  
         "Vielleicht habe ich da zu impulsiv gehandelt."
      ],
      "name":"impulsiv",
      "id":234
   },
   {  
      "definition":"auf frischer Tat",
      "examples":[  
         "Er hätte jubiliert, wenn er mich in flagranti erwischt hätte.",
         "Die Polizei ertappte den Dieb in flagranti, als er gerade ein Fahrrad stehlen wollte."
      ],
      "name":"in flagranti",
      "id":235
   },
   {  
      "definition":"im Hinblick auf, hinsichtlich",
      "examples":[  
         "Frauen trinken aber auch viel Tee, um sich möglichst viel Flüssigkeit zuzuführen und es in puncto Gesundheit den Topmodels gleichzutun."
      ],
      "name":"in puncto",
      "id":236
   },
   {  
      "definition":"in ein Register oder einen Index aufnehmen, indexieren, anzeigen; verbotene Werke in ein spezielles Verzeichnis verbotener Werke, den sogenannten Index, setzen.",
      "examples":[  
         "Seine starken Schmerzen indizierten die Behandlung mit Morphium.",
         "In Deutschland werden viel mehr Computerspiele indiziert als in manch anderem Land."
      ],
      "name":"indizieren",
      "id":237
   },
   {  
      "definition":"von sich aus aufweisend; einem Ding oder System innewohnend, ohne äußere Ursache oder Beeinflussung vorliegend",
      "examples":[  
         "Dieser Gegenstand ist für mich von intrinsischem Wert",
         "Wer seine Arbeit aus eigenem Antrieb leistet, ist intrinsisch motiviert, wer dasselbe nur des Geldes wegen tut, dessen Motivation ist extrinsisch."
      ],
      "name":"intrinsisch",
      "id":238
   },
   {  
      "definition":"unentschieden zwischen oder gleichgültig gegenüber mehreren Möglichkeiten",
      "examples":[  
         "Dieser Behauptung stehe ich völlig indifferent gegenüber. Ich habe dazu keine vorgefasste Meinung.",
         "Ich bin hier indifferent, teils stimme ich zu, teils lehne ich auch ab.",
         "Trotz der heftigen Auseinandersetzung verhielt er sich diesmal völlig indifferent."
      ],
      "name":"indifferent",
      "id":239
   },
   {  
      "definition":"von etwas unangenehm, peinlich berührt, weil es zum Beispiel die Normen oder die Würde verletzt",
      "examples":[  
         "Die Gräfin war äußerst indigniert über den Vorfall.",
         "Er setzte eine auffällig indignierte Miene auf."
      ],
      "name":"indigniert",
      "id":240
   },
   {  
      "definition":"Hilfsmittel, das die Verfolgung intransparenter Abläufe ermöglicht, indem es das Erreichen oder Verlassen bestimmter Zustände anzeigt",
      "examples":[  
         "Eine gefrorene Autoscheibe ist ein Indikator für tiefe Temperaturen und damit für mögliches Glatteis auf der Straße.",
         "Der Artikel ist ein Indikator für die Groß- und Kleinschreibung eines Wortes."
      ],
      "name":"Indikator",
      "id":241
   },
   {  
      "definition":"nicht erwägenswert, unannehmbar",
      "examples":[  
         "Marvins Vorschläge sind leider indiskutabel.",
         "Das ist eine ganz indiskutable Idee.",
         "Dein Vorhaben ist indiskutabel."
      ],
      "name":"Indiskutabel",
      "id":242
   },
   {  
      "definition":"niederträchtig, abscheulich, böswillig, bösartig; umgangssprachlich: fürchterlich, stark; sehr",
      "examples":[  
         "Dies war wieder eine seiner infamen Lügen.",
         "Er hat bei seiner Schilderung wieder infam übertrieben."
      ],
      "name":"infam",
      "id":243
   },
   {  
      "definition":"das Kind betreffend; abwertend: nicht reif, unterentwickelt",
      "examples":[  
         "Ich verspürte eine infantile Freude, als ich das neue Spiel ausprobierte.",
         "Mit deinem infantilen Verhalten nimmt Dich niemand ernst."
      ],
      "name":"infantil",
      "id":244
   },
   {  
      "definition":"mit den Merkmalen einer Inflation; bezogen auf eine Inflation; übertragen, allgemein: mit steigender Häufigkeit; in Form einer Inflation",
      "examples":[  
         "Die inflationären Tendenzen veranlassten den Präsidenten der Europäischen Zentralbank, am Markt Wertpapiere zu verkaufen und so die Geldmenge zu verringern.",
         "Vielen Lehrern missfällt der inflationäre Gebrauch des Wortes Scheiße im Unterricht."
      ],
      "name":"inflationär",
      "id":245
   },
   {  
      "definition":"die Ausführung (eines Vorgangs) nicht zustande kommen lassen; veraltet: einer Sache Einhalt gebieten",
      "examples":[  
         "Außerdem soll es eine Möglichkeit geben, dieses Verhalten zu inhibieren, falls es sich störend auf andere Verhalten [des Roboters] auswirken könnte."
      ],
      "name":"inhibieren",
      "id":246
   },
   {  
      "definition":"einen Anfangsimpuls zu etwas geben; etwas in die Wege leiten",
      "examples":[  
         "Die Bewerbung wurde durch einen Beschluss des Stadtrates initiiert."
      ],
      "name":"initiieren",
      "id":247
   },
   {  
      "definition":"etwas beinhalten",
      "examples":[  
         "Die Massage wurde bereits im Preis inkludiert."
      ],
      "name":"inkludieren",
      "id":248
   },
   {  
      "definition":"Biologie, Geologie: Fossiler Einschluss von kleinen Tieren oder Pflanzenteilen in Bernstein",
      "examples":[  
         "Im baltischen Bernstein finden sich häufig Inklusen."
      ],
      "name":"Inkluse",
      "id":249
   },
   {  
      "definition":"ein Einschluss, eine Einschließung oder das Einschließen",
      "examples":[  
         "Die Inklusion findet noch nicht statt."
      ],
      "name":"Inklusion",
      "id":250
   },
   {  
      "definition":"Einführung von etwas Neuem vor allem in Gesellschaft, Politik, Technik oder Wirtschaft, von dem man sich wesentliche Verbesserungen verspricht",
      "examples":[  
         "Eine Innovation mit vielen Konsequenzen war die Erfindung des Internets."
      ],
      "name":"Innovation",
      "id":251
   },
   {  
      "definition":"sich von etwas nicht abbringen lassen, beharren",
      "examples":[  
         "Insistiert auf eurer Position!",
         "Statt zu insistieren, setzte der Minister eine Arbeitsgruppe ein."
      ],
      "name":"insistieren",
      "id":252
   },
   {  
      "definition":"Konsequenz der Zahlungsunfähigkeit",
      "examples":[  
         "Die Zahl der Insolvenzen war gestiegen.",
         "Traditions-Designschmiede Bertone steht nach über 100 Jahren vor der Insolvenz."
      ],
      "name":"Insolvenz",
      "id":253
   },
   {  
      "definition":"Medizin: nicht ausreichend",
      "examples":[  
         "Als insuffizient gelten \"in der Medizin üblicherweise Organe mit mangelhafter Funktion, die eine Homöostase nicht mehr gewährleistet, oder Therapien, die nicht zum Heilungserfolg führen.\""
      ],
      "name":"insuffizient",
      "id":254
   },
   {  
      "definition":"unberührt, unversehrt, moralisch einwandfrei, unbescholten, unbestechlich",
      "examples":[  
         "Was du getan hast, war integer, ich war ganz deiner Meinung!",
         "Sieh zu, dass du integer bleibst."
      ],
      "name":"integer",
      "id":255
   },
   {  
      "definition":"gegenseitige Abhängigkeit",
      "examples":[  
         "Nur durch Interdependenz läßt sich erhellen, was eine Wissenschaft kennzeichnet und auszeichnet.",
         "Von Interdependenz in einer Beziehungsform redet man dann, wenn das Verhalten eines Partners das des anderen bedingt und umgekehrt. (Internetbeleg)"
      ],
      "name":"Interdependenz",
      "id":256
   },
   {  
      "definition":"fachsprachlich, Technik, Medizin: zeitweilig aussetzend, wechselnd",
      "examples":[  
         "Dieser Effekt tritt intermittierend auf, wir wissen noch nicht, warum."
      ],
      "name":"intermittierend",
      "id":257
   },
   {  
      "definition":"veraltet: durch viele feine Details und große Komplexität gekennzeichnet",
      "examples":[  
         "Diese Erzählung der Minnenden ist so topisch trivial, wie auf eine gewisse Weise auch intrikat. "
      ],
      "name":"intrikat",
      "id":258
   },
   {  
      "definition":"verschlossen, Kontakt mit der Außenwelt meidend",
      "examples":[  
         "Peter ist ein ausgesprochen introvertierter Mensch."
      ],
      "name":"introvertiert",
      "id":259
   },
   {  
      "definition":"auf einer plötzlichen Ahnung, Vermutung beruhend, durch sie bewirkt",
      "examples":[  
         "Intuitiv traf er die richtige Entscheidung."
      ],
      "name":"intuitiv",
      "id":260
   },
   {  
      "definition":"die Umkehrung eines Zustandes oder Wertes beinhaltend",
      "examples":[  

      ],
      "name":"invertiert",
      "id":261
   },
   {  
      "definition":"verhüllter Spott, bei dem ein Unterschied zwischen wörtlicher und wirklicher Bedeutung besteht",
      "examples":[  
         "Jemand erzählt einen schlechten Witz. Darauf reagiert eine andere Person mit Ironie: „Sehr witzig!“"
      ],
      "name":"Ironie",
      "id":262
   },
   {  
      "definition":"Abgeschiedenheit, Abgetrenntheit von bestimmten anderen Einflüssen, Abkapselung; Material mit hohem Widerstand gegen elektrischen Stromfluss",
      "examples":[  
         "Er lebte in völliger Isolation.",
         "Die Isolation des Kabels besteht aus einer Art Gummi."
      ],
      "name":"Isolation",
      "id":263
   },
   {  
      "definition":"fester, wiederkehrender, gemeinsamer Termin einer kleinen Personengruppe",
      "examples":[  
         "Jeden Mittwoch um 10 Uhr treffen wir uns zum Jour fixe."
      ],
      "name":"Jour fixe",
      "id":264
   },
   {  
      "definition":"im Umgang mit anderen Personen freundlich und entgegenkommend, dies aber auf eine betonte Art, die gönnerisch oder herablassend wirken kann",
      "examples":[  
         "Unser Chef klopfte dem neuen Mitarbeiter gleich jovial auf die Schulter."
      ],
      "name":"jovial",
      "id":265
   },
   {  
      "definition":"heimtückische, hinterhältige Machenschaft zur Erreichung bösartiger Ziele",
      "examples":[  
         "Kein Thema für die Drahtzieher dieser finsteren innerparteilichen Kabale. Statt dessen verschanzen sich diese Leute hinter nichtssagenden Redensarten."
      ],
      "name":"Kabale",
      "id":266
   },
   {  
      "definition":"absurd und so bedrohlich, dass es einem Angst macht; im Stil von Franz Kafka, ",
      "examples":[  
         "Im Kampf gegen das französische Sozialmodell legt sie sich regelmäßig mit der Regierung an, deren Gesetze sie „kafkaesk und unlesbar“ nennt.",
         "Nicht von ungefähr mutet im Roman manches kafkaesk an, von hintergründiger Komik, die mit abrupten Schnitten zwischen den Szenen gleich wieder aufgelöst wird."
      ],
      "name":"kafkaesk",
      "id":267
   },
   {  
      "definition":"Laute und Lautverbindungen, die besonders hart, unangenehm oder unästhetisch klingen.",
      "examples":[  
         "Die »schönsten« Gedichte einer Sprache können für jemanden, der diese Sprache nicht kennt, als reinste Kakophonie klingen.",
         "Ihn rief ich an, weil er Dolmetscher bei der Europäischen Union in Brüssel ist und tagtäglich in den Genuss einer aufregenden Kakophonie von multinationalem Genörgel kommt."
      ],
      "name":"Kakophonie",
      "id":268
   },
   {  
      "definition":"auf attraktive Weise launisch, unberechenbar",
      "examples":[  
         "Man sagt vor allem von Frauen, die auf eine eigentlich nicht unangenehme Weise mit immer neuen, unerwarteten Einfällen überraschen, sie seien kapriziös.",
         "Käthes Einfall, den Ring zu vergolden, war kapriziös."
      ],
      "name":"kapriziös",
      "id":269
   },
   {  
      "definition":"Freistellung seitens der Firma wegen berechtigter Gründe wie Geburt, Kindererziehung oder Weiterbildung",
      "examples":[  
         "Wenn Männer von der Karenz die letzten sechs Monate nicht beanspruchen, darf die Frau trotzdem nicht länger als eineinhalb Jahre auf Karenz gehen.",
         "Immer mehr Väter gehen in Karenz, dafür aber immer kürzer, wie eine aktuelle Studie der Arbeiterkammer zeigt."
      ],
      "name":"Karenz",
      "id":270
   },
   {  
      "definition":"unerwünschte Aspekte/ Eigenschaften durch gezielte Maßnahmen verbergen",
      "examples":[  
         "Das Loch wurde mit einer Blume kaschiert.",
         "Er kaschiert seine Angst durch gesteigertes Engagement.",
         "Buchdeckel werden oft mit schönen Abbildungen kaschiert."
      ],
      "name":"Kaschieren",
      "id":271
   },
   {  
      "definition":"die Befreiung von psychischen/seelischen Konflikten durch eine emotionale Handlung",
      "examples":[  
         "Schafft der Fußball soziale Katharsis?",
         "Das Plakat von Karl Kraus, das um diese Zeit angeschlagen wurde, hatte die Wirkung einer Katharsis und erlöste mich von dieser Lähmung."
      ],
      "name":"Katharsis",
      "id":272
   },
   {  
      "definition":"Prinzip, nach dem jede Wirkung eine Ursache hat oder Ursache einer anderen Wirkung ist; Strafrecht: Verbindung zwischen Handlung des Täters und dem Erfolgseintritt",
      "examples":[  
         "Einstein forderte zur Aufrechterhaltung der Kausalität, daß es keine Signale mit Überlichtgeschwindigkeit geben darf (Kausalitätsprinzip)."
      ],
      "name":"Kausalität",
      "id":273
   },
   {  
      "definition":"umgangssprachlich: Lärm, Unsinn",
      "examples":[  
         "Hör auf mit diesem Klamauk!"
      ],
      "name":"Klamauk",
      "id":274
   },
   {  
      "definition":"unbeobachtet, im Verborgenen befindlich, geheim gehalten",
      "examples":[  
         "Er schob ihr klandestin einen Zettel zu.",
         "Der BND fürchtet nun, dass ein möglicher Prozess umfangreichen Einblick in die klandestine Operation ermöglicht, die lange Jahre als eine der wichtigsten Spionageaktionen der Dienste galt…"
      ],
      "name":"klandestin",
      "id":275
   },
   {  
      "definition":"erkenntnismäßig, auf Erkenntnis beruhend, das Denken betreffend",
      "examples":[  
         "Kognitive Lernziele beschreiben alles, was mit dem Verstand erfasst wird, sowohl Faktenwissen, als auch kreative Anwendung von Wissen und das Lösen von Problemen."
      ],
      "name":"kognitiv",
      "id":276
   },
   {  
      "definition":"zusammenhängend, verbunden mit, einheitlich",
      "examples":[  
         "Diese Ausarbeitung ist nicht besonders kohärent.",
         "Sein Gedankengang ist logisch kohärent."
      ],
      "name":"kohärent",
      "id":277
   },
   {  
      "definition":"umgangssprachlich: etwas Unsinniges, Törichtes (Geschwätz)",
      "examples":[  
         "Die Erde soll größer sein als die Sonne? Was für ein Kokolores!"
      ],
      "name":"Kokolores",
      "id":278
   },
   {  
      "definition":"mit dem (militärischen) Feind zusammenarbeiten.",
      "examples":[  
         "Schon kurz nach dem Einmarsch Deutschlands in Österreich, am 12. März 1938, kollaborierte ein Großteil des Landes mit den Nazis."
      ],
      "name":"kollaborieren",
      "id":279
   },
   {  
      "definition":"plötzliches Ende der Funktionsfähigkeit eines Körpers oder Systems",
      "examples":[  
         "Erwin erlitt einen Kollaps."
      ],
      "name":"Kollaps",
      "id":280
   },
   {  
      "definition":"Militär, euphemistisch: unbeabsichtigter Schaden (insbesondere zivile Opfer), der durch einen militärischen Einsatz entstanden ist",
      "examples":[  
         "Ungenaue Begriffe wie ‚humanitäre Katastrophe‘ oder ‚Kollateralschaden‘, die mehr vernebeln als erhellen, wurden gedankenlos übernommen."
      ],
      "name":"Kollateralschaden",
      "id":281
   },
   {  
      "definition":"gemeinschaftlich; mit mehreren/vielen Personen zusammen",
      "examples":[  
         "Durch kollektive Anstrengungen können wir auch große Projekte, wie ein Wörterbuch, bewältigen."
      ],
      "name":"kollektiv",
      "id":282
   },
   {  
      "definition":"Gerüchte verbreiten",
      "examples":[  
         "Die Geschichte wurde ungeniert kolportiert."
      ],
      "name":"kolportieren",
      "id":283
   },
   {  
      "definition":"eine Gruppe von Fachleuten, die ausgewählt wurde, ein bestimmtes Problem zu bearbeiten",
      "examples":[  
         "Jetzt liegen der Kommission erstmals konkrete Zahlen vor."
      ],
      "name":"Kommission",
      "id":284
   },
   {  
      "definition":"besonders in Österreich noch gebräuchlich, sonst veraltend: bequem",
      "examples":[  
         "Nun, Ausreden sind kommod, besonders wenn sie geglaubt werden, aber leider ist es nicht alleweil dumm, das hochgeehrte Publikum."
      ],
      "name":"kommod",
      "id":285
   },
   {  
      "definition":"in (bestimmten) Eigenschaften übereinstimmend",
      "examples":[  
         "Hast du darauf geachtet, dass der Speicher und die Hauptplatine kompatibel sind?"
      ],
      "name":"kompatibel",
      "id":286
   },
   {  
      "definition":"ausgleichen, aufheben, vergüten, verrechnen",
      "examples":[  
         "Einen Ausfall von Schweinsteiger? Das können wir unmöglich kompensieren, dann wird die Mannschaft schwächer."
      ],
      "name":"kompensieren",
      "id":287
   },
   {  
      "definition":"jemanden oder etwas ergänzend",
      "examples":[  
         "Eine ideale Arbeitsgruppe setzt sich aus Mitgliedern mit komplementären Fähigkeiten zusammen."
      ],
      "name":"komplementär",
      "id":288
   },
   {  
      "definition":"jemanden bloßstellen; in Verlegenheit bringen; ein System manipulieren, angreifen, stören; besonders ein Datenbanksystem",
      "examples":[  
         "Die Machthaber leugnen jede Verbindung zu diesen Mordwellen und verschanzen sich hinter der Behauptung, diese Morde würden sie mehr kompromittieren als die dissidentischen Taten der Ermordeten.",
         "Die Daten auf dem Server müssen als kompromittiert betrachtet werden."
      ],
      "name":"kompromittieren",
      "id":289
   },
   {  
      "definition":"Sein Beileid an die Angehörigen eines Verstorbenen aussprechen; jemandem sein Mitgefühl aussprechen",
      "examples":[  
         "Er schrieb sich ins Kondolenzbuch ein, also hat er kondoliert."
      ],
      "name":"kondolieren",
      "id":290
   },
   {  
      "definition":"Zustand des Durcheinanders oder der Verwirrung",
      "examples":[  
         "Der andere Passagier dagegen saß so ruhig und regungslos wie immer in dieser Konfusion und sagte kein Wort"
      ],
      "name":"Konfusion",
      "id":291
   },
   {  
      "definition":"übereinstimmend, gleich",
      "examples":[  
         "In der Tendenz werden damit die unterschiedlichen Relevanzstrukturen nicht als gleich, aber kongruent angesehen.",
         "Ein Quadrat und ein Fünfeck können niemals kongruent sein."
      ],
      "name":"kongruent",
      "id":292
   },
   {  
      "definition":"von der Außenwelt abgeschlossener Raum im Vatikan, in dem sich die Kardinäle zur Wahl eines Papstes aufhalten",
      "examples":[  
         "Die Kardinäle zogen feierlich zum Konklave in die sixtinische Kapelle ein."
      ],
      "name":"Konklave",
      "id":293
   },
   {  
      "definition":"aus dem Verhalten einer Person schlüssig ableitbar; sich zwingend ergebend",
      "examples":[  
         "m Zivilrecht spricht man von einer konkludenten Willenserklärung, wenn sie ohne ausdrückliche Erklärung durch schlüssiges Verhalten abgegeben wird. D.h. die Willenserklärung wird aus den Handlungen des Erklärenden abgeleitet."
      ],
      "name":"konkludent",
      "id":294
   },
   {  
      "definition":"jemand, der das gleiche Ziel wie sein(e) Mitbewerber verfolgt",
      "examples":[  
         "Durch Tricks hat er seine Konkurrenten ausgeschaltet.",
         "Auch der härteste Konkurrent ist immer auch eine Lehrer, der durch sein Tun auf Schwächen und Fehler hinweist."
      ],
      "name":"Konkurrent",
      "id":295
   },
   {  
      "definition":"(emotionale, stilistische, wertende) Nebenbedeutung eines Wortes, Mitschwingendes",
      "examples":[  
         "So lernen wir Wörter als Träger von Mitinformationen, von Konnotationen, kennen."
      ],
      "name":"Konnotation",
      "id":296
   },
   {  
      "definition":"eine Übereinstimmung der Meinungen oder Standpunkte; Einigkeit, Einmütigkeit",
      "examples":[  
         "Na, hoffentlich herrscht jetzt ein Konsens. Anscheinend hat der Gegenüber mir zugestimmt."
      ],
      "name":"Konsens",
      "id":297
   },
   {  
      "definition":"ohne Widersprüche, folgerichtig; so, dass man sich von etwas nicht abbringen lässt",
      "examples":[  
         "Er verfolgte seine Ziele sehr konsequent."
      ],
      "name":"konsequent",
      "id":298
   },
   {  
      "definition":"eine bestehende Einrichtung stärken oder festigen",
      "examples":[  
         "Der Finanzminister will den Haushalt konsolidieren."
      ],
      "name":"konsolidieren",
      "id":299
   },
   {  
      "definition":"eine Verschwörung planend, zu einer Verschwörung gehörend",
      "examples":[  
         "Einige DDR-Oppositionelle trafen sich in konspirativen Wohnungen, um ihr Vorgehen zu planen."
      ],
      "name":"konspirativ",
      "id":300
   },
   {  
      "definition":"eine Tatsache feststellen, bemerken",
      "examples":[  
         "Dann konstatierte der Doktor Schmidt, nachdem er den Leib ihm aufgeschnitten, daß dieser Wurm an Würmern litt, die wiederum an Würmern litten"
      ],
      "name":"konstatieren",
      "id":301
   },
   {  
      "definition":"gehoben: so verblüfft/bestürzt, dass man zunächst nichts sagen kann",
      "examples":[  
         "Der Tod von Joana hatte mich konsterniert."
      ],
      "name":"konsterniert",
      "id":302
   },
   {  
      "definition":"gründen, ins Leben rufen",
      "examples":[  
         "Der Ausschuss konstituierte sich am 29. Februar."
      ],
      "name":"konstituieren",
      "id":303
   },
   {  
      "definition":"grundlegend, wesentlich, elementar",
      "examples":[  
         "Dieser Teil ist konstitutiv für das Ganze."
      ],
      "name":"konstitutiv",
      "id":304
   },
   {  
      "definition":"etwas mit giftigen/pathogenen/radioaktiven Substanzen verseuchen",
      "examples":[  
         "Die Erde wurde mit giftigen Substanzen kontaminiert."
      ],
      "name":"kontaminieren",
      "id":305
   },
   {  
      "definition":"besinnlich, beschaulich, untätig",
      "examples":[  
         "Das deutsche Ideal war einst kontemplativ, nicht angriffslustig, transzendental, nicht fridrizianisch"
      ],
      "name":"kontemplativ",
      "id":306
   },
   {  
      "definition":"etwas zu verhindern, untergraben suchen",
      "examples":[  
         "Die Pläne der Gewerkschaften werden teilweise von der Wirtschaft konterkariert."
      ],
      "name":"konterkarieren",
      "id":307
   },
   {  
      "definition":"Zusammenhang, in dem bestimmte Dinge stehen oder betrachtet werden müssen",
      "examples":[  
         "Aus dem Kontext können zusätzliche Informationen erschlossen werden."
      ],
      "name":"Kontext",
      "id":308
   },
   {  
      "definition":"sich widersprechend, sich gegenseitig aufhebend (von zwei Aussagen)",
      "examples":[  
         "Tief in der Nacht stand die Sonne am Himmel. (kontradiktorische Aussage)"
      ],
      "name":"kontradiktorisch",
      "id":309
   },
   {  
      "definition":"total verschieden, in den Auswirkungen hinderlich",
      "examples":[  
         "Deine Haltung zu diesem Thema ist vollkommen konträr zu meiner.",
         "Die Untersuchung wirft die Frage auf, ob die jüngere Entwicklung nicht konträr zur früheren Zielsetzung ist."
      ],
      "name":"konträr",
      "id":310
   },
   {  
      "definition":"entgegengesetzt, sich widersprechend",
      "examples":[  
         "Kontroverse Meinungen machen eine Diskussion erst spannend.",
         "Die Abtreibungsdebatte ist ein kontrovers diskutiertes Thema."
      ],
      "name":"kontrovers",
      "id":311
   },
   {  
      "definition":"auf herkömmlichen Techniken beruhend, gemäß geltenden Konventionen",
      "examples":[  
         "Die Veranstaltung soll auf ganz konventionelle Weise durchgeführt werden."
      ],
      "name":"konventionell",
      "id":312
   },
   {  
      "definition":"zugestehen, einen Anspruch anerkennen",
      "examples":[  
         "Wir müssen ihm hier ein Gewohnheitsrecht konzedieren."
      ],
      "name":"konzedieren",
      "id":313
   },
   {  
      "definition":"ein Zugeständnis",
      "examples":[  
         "Der gemähte Rasen war eine Konzession an den Geschmack der Nachbarn."
      ],
      "name":"Konzession",
      "id":314
   },
   {  
      "definition":"Beziehung zwischen zwei oder mehr Ereignissen, die in der Regel eine geordnete und nahe zeitliche Abfolge besitzen",
      "examples":[  
         "Zwischen der Dauer des Sparens und dem Ertrag gibt es eine Korrelation."
      ],
      "name":"Korrelation",
      "id":315
   },
   {  
      "definition":"durch Gewährung von Vorteilen bestechen, und somit auch moralisch verderben; Integrität oder Authentizität von elektronischen Daten schwächen",
      "examples":[  
         "Schwer sei es manchmal gewesen, sich nicht korrumpieren zu lassen.",
         "Nach dem Stromausfall war der Inhalt der Festplatte korrumpiert."
      ],
      "name":"korrumpieren",
      "id":316
   },
   {  
      "definition":"eine herausragende Persönlichkeit in einem wissenschaftlichen Fachgebiet",
      "examples":[  
         "Er ist eine Koryphäe auf seinem Gebiet."
      ],
      "name":"Koryphäe",
      "id":317
   },
   {  
      "definition":"sich als Weltbürger verstehend, weltoffen denkend, sich überall zuhause fühlend, weltbürgerlich, weltgewandt, weltoffen, weltstädtisch, international",
      "examples":[  

      ],
      "name":"kosmopolitisch",
      "id":318
   },
   {  
      "definition":"unverständlich oder unklar in der Ausdrucksweise oder Darstellung",
      "examples":[  
         "Der Staatsanwalt, Georg Krakow, ist dann selbst als Zeuge geladen. Aus seinen wenigen, kryptischen Worten kann man indirekt herausfiltern, dass er keinen schriftlichen Auftrag erteilt hat."
      ],
      "name":"kryptisch",
      "id":319
   },
   {  
      "definition":"seinen Höhepunkt finden",
      "examples":[  
         "Die Geschmacklosigkeit kulminierte in einer umständlich geknoteten, rosafarbenen Baumwollkrawatte."
      ],
      "name":"kulminieren",
      "id":320
   },
   {  
      "definition":"in Form einer Kumulation, auf eine Kumulation bezogen (\u003d sich anhäufend, aufsummierend, steigernd)",
      "examples":[  
         "In einem Zeitraum von 30 Jahren entspricht ein Wachstum von 1 % pro Jahr einem kumulativen Wachstum von mehr als 35 %."
      ],
      "name":"kumulativ",
      "id":321
   },
   {  
      "definition":"(an)häufen, summieren, bei einer Wahl einem Kandidaten oder einer Partei mehrere Stimmen geben",
      "examples":[  
         "Die Entlehnungen aus anderen Sprachen kumulieren sich über Jahrhunderte hinweg.",
         "Wenn man seine Stimmen kumuliert, unterstützt man einen Kandidaten besonders stark."
      ],
      "name":"kumulieren",
      "id":322
   },
   {  
      "definition":"beschädigt, im äußeren Erscheinungsbild beeinträchtigt",
      "examples":[  
         "einige Möbelstücke waren beim Umzug lädiert worden"
      ],
      "name":"lädiert",
      "id":323
   },
   {  
      "definition":"kurz und treffend",
      "examples":[  
         "Es wurde mit lakonischer Wortwahl beschrieben.",
         "Lakonisch antwortete er mit: „Nein!“"
      ],
      "name":"lakonisch",
      "id":324
   },
   {  
      "definition":"abwertend: jammern, klagen",
      "examples":[  
         "Er lamentiert über alles und jedes."
      ],
      "name":"lamentieren",
      "id":325
   },
   {  
      "definition":"kurz und knapp, mit wenigen Worten auskommend",
      "examples":[  
         "Er war für seinen lapidaren Stil berühmt.",
         "In dem Schreiben teilte uns die Schule lapidar mit, dass das Schuljahr bald vorbei sei."
      ],
      "name":"lapidar",
      "id":326
   },
   {  
      "definition":"Fehler, der meist unbewusst, ohne Absicht gemacht wurde",
      "examples":[  
         "Das ‚h‘ in nämlich war ein peinlicher Lapsus."
      ],
      "name":"Lapsus",
      "id":327
   },
   {  
      "definition":"weinerlich, rührselig, mit allzuviel Gefühl und Selbstmitleid",
      "examples":[  
         "Die Menschen der neuen Bundesländer sind durchaus nicht larmoyant, aber sie sind dünnhäutig.",
         "Ein Mann der larmoyanten Abschiedszeremonien ist er nicht."
      ],
      "name":"larmoyant",
      "id":328
   },
   {  
      "definition":"vorhanden, aber noch nicht erkennbar, versteckt, verborgen, nicht offenkundig",
      "examples":[  
         "Diese Gefahr ist noch latent."
      ],
      "name":"latent",
      "id":329
   },
   {  
      "definition":"Vorhandensein einer (noch, momentan, vielleicht auch prinzipiell) nicht sichtbaren „Sache“; Zeit zwischen Reiz und Reaktion, zwischen Ursache und Wirkung",
      "examples":[  
         "Nach der Revolution konnten alle Unterdrückten aus der Latenz treten.",
         "Wegen der manchmal so langen Latenz können Ursache und Wirkung nicht immer zugeordnet werden"
      ],
      "name":"Latenz",
      "id":330
   },
   {  
      "definition":"gesetzgebende Gewalt; in der Staatstheorie neben Exekutive (ausführende Gewalt) und Judikative (Rechtsprechung) eine der drei unabhängigen Gewalten (Gewaltenteilung)",
      "examples":[  
         "In Deutschland stellt der Bundestag und der Bundesrat die Legislative dar."
      ],
      "name":"Legislative",
      "id":331
   },
   {  
      "definition":"allgemein anerkannt, unbestritten, berechtigt",
      "examples":[  
         "Sein Verhalten war legitim.",
         "Das ist ein legitimer Einwand."
      ],
      "name":"legitim",
      "id":332
   },
   {  
      "definition":"schwerfällig, träge, teilnahmslos",
      "examples":[  
         "Er ist seit Wochen so lethargisch und lässt sich zu nichts bewegen."
      ],
      "name":"lethargisch",
      "id":333
   },
   {  
      "definition":"auf eine bestimmte Anzahl begrenzt; auf ein Limit festgelegt",
      "examples":[  
         "Die Auflage war limitiert"
      ],
      "name":"limitiert",
      "id":334
   },
   {  
      "definition":"ein Unternehmen (oder auch andere wirtschaftliche Einheiten, zum Beispiel einen Fond) auflösen",
      "examples":[  
         "Die Firma wurde Anfang des Jahres liquidiert."
      ],
      "name":"liquidieren",
      "id":335
   },
   {  
      "definition":"Fähigkeit, Zahlungsverpflichtungen zu entsprechen",
      "examples":[  
         "Der Betrieb hat eine zu geringe Liquidität.",
         "Endlich greifen die Maßnahmen zur Erhöhung der Liquidität."
      ],
      "name":"Liquidität",
      "id":336
   },
   {  
      "definition":"regierungstreu, zu Regierung oder auch Staat stehend; zu jemandem haltend, sich an Abmachungen haltend, treu sein und sich anständig verhalten",
      "examples":[  
         "Er war loyal, auch wenn die Entscheidungen der Regierung ihm nicht einleuchteten.",
         "Er war immer ein loyaler Mitarbeiter des Betriebes."
      ],
      "name":"loyal",
      "id":337
   },
   {  
      "definition":"jemanden für eine Tat, die als Unrecht angesehen wird, ohne rechtskräftiges Gerichtsurteil schwer misshandeln und/oder töten",
      "examples":[  
         "Weil sie ihn für einen Vergewaltiger hielten, lynchten die Farmer den Pfarrer."
      ],
      "name":"lynchen",
      "id":338
   },
   {  
      "definition":"boshaft, hämisch, giftig (von Bemerkungen, Kommentaren u. a.)",
      "examples":[  
         "Das war eine maliziöse Bemerkung."
      ],
      "name":"maliziös",
      "id":339
   },
   {  
      "definition":"Einzahl: Art und Weise, Stil, Eigenart; Mehrzahl: Umgangsformen, Benehmen",
      "examples":[  
         "Diese Manier ist typisch für ihn.",
         "Seine scheinbare Schüchternheit war mehr ein Ausdruck guter Manieren und verbarg eine gute Portion Selbstsicherheit."
      ],
      "name":"Manier",
      "id":340
   },
   {  
      "definition":"etwas ausdrücken, zum Ausdruck bringen, offenbaren",
      "examples":[  
         "Mit seiner Skulptur will der Künstler seinen Widerstand gegen die Gewaltherrschaft manifestieren.",
         "In diesem Werk des Dichters manifestiert sich sein Unvermögen."
      ],
      "name":"manifestieren",
      "id":341
   },
   {  
      "definition":"Mangel, Fehler",
      "examples":[  
         "Das ist aber ein schwerwiegendes Manko!",
         "Das Manko wurde beim Kassensturz entdeckt."
      ],
      "name":"Manko",
      "id":342
   },
   {  
      "definition":"einprägsamer Spruch, um etwas zu bekräftigen; in östlichen Religionen und beim Yoga verwendete, wiederholt gesprochene, magische Formel, der positive Wirkungskräfte zugesprochen werden",
      "examples":[  
         "Der Mittelschicht neuen Grund zum Optimismus geben: Das ist das wirtschaftspolitische Mantra der Obama-Regierung.",
         "Besonders in den frühen Morgenstunden umrunden sie die Gebetsmauern und drehen dabei Gebetsmühlen gleichmäßig aus dem Handgelenk oder rezitieren leise die Mantras."
      ],
      "name":"Mantra",
      "id":343
   },
   {  
      "definition":"am Rande liegend, auf der Grenze liegend; etwas Nebensächliches, nicht so Wichtiges; etwas, das nur am Rande Beachtung verdient",
      "examples":[  
         "Die Probleme sind marginal.",
         "Ihre Existenz ist marginal."
      ],
      "name":"marginal",
      "id":344
   },
   {  
      "definition":"Anmerkungen am Rand eines Buches oder einer Handschrift; etwas Unbedeutendes, etwas das nicht der Rede wert ist, etwas das nur am Rande Beachtung verdient",
      "examples":[  
         "Marginalien unbekannter Verfasser in den Büchern von öffentlichen Bibliotheken und Sammlungen oder auch in ausgeliehenen Schulbüchern gelten … als Kritzeleien und meist nur als Ärgernis und Sachbeschädigung.",
         "Marginalien befinden sich häufig auf dem äußeren und seltener auf dem inneren Rand eines Buches."
      ],
      "name":"Marginalie",
      "id":345
   },
   {  
      "definition":"auffallend, zur Identifikation heranziehbar",
      "examples":[  
         "Er hatte ein wirklich sehr markantes Kinn, weswegen man ihn auf jeder Party wiedererkannte."
      ],
      "name":"markant",
      "id":346
   },
   {  
      "definition":"mit unverhohlener Härte gegen jemanden oder etwas vorgehend; grausam, kriegerisch, furchterregend",
      "examples":[  
         "Solche martialischen Spiele kann ich nicht leiden.",
         "Er ist ein martialischer Krieger.",
         "Sie hat einen martialischen Namen."
      ],
      "name":"martialisch",
      "id":347
   },
   {  
      "definition":"den Eigenschaften eines Mannes ähnelnd bzw. entsprechend",
      "examples":[  
         "Wenn Menschen noch jung sind, ist es manchmal schwer festzustellen, ob sie maskulin oder feminin sind.",
         "Sie will einen maskulinen Freund, kein Weichei."
      ],
      "name":"maskulin",
      "id":348
   },
   {  
      "definition":"zur Ehe gehörend; ehelich",
      "examples":[  

      ],
      "name":"matrimonial",
      "id":349
   },
   {  
      "definition":"Ausbildung: Reifeprüfung; Abschluss einer höheren Schule, mit welchem die Hochschulreife erlangt wird",
      "examples":[  
         "Bei meiner mündlichen Matura trat ich in Französisch an.",
         "Wer will, kann in eine Berufsschule wechseln oder auch drei Jahre lang in ein Lyzeum gehen, das mit der »Matura« (Abitur) abschließt."
      ],
      "name":"Matura",
      "id":350
   },
   {  
      "definition":"Einstellung, Motto, Regel, wonach man sein Verhalten ausrichtet",
      "examples":[  
         "Er folgte immer der Maxime: Zuerst die Arbeit, dann das Vergnügen.",
         "Handle so, daß die Maxime deines Willens jederzeit zugleich als Prinzip einer allgemeinen Gesetzgebung gelten könne."
      ],
      "name":"Maxime",
      "id":351
   },
   {  
      "definition":"größenwahnsinnig",
      "examples":[  
         "Der Erfinder der ‚Dritten politischen Universaltheorie‘ mag ein megalomaner Irrer sein oder ein zynischer Machiavellist: Realist war er immer."
      ],
      "name":"megaloman",
      "id":352
   },
   {  
      "definition":"Zustand der Schwermut oder Depression, psychische Niedergeschlagenheit, große Traurigkeit; Begriff aus der Viersäftelehre (Humoralpathologie)",
      "examples":[  
         "In der Psychologie wird der Begriff Melancholie heute durch den Begriff Depression ersetzt.",
         "Trotzdem bleibt in dem Jungen eine Melancholie zurück, die sich mit den Jahren in Bitterkeit verwandelt."
      ],
      "name":"Melancholie",
      "id":353
   },
   {  
      "definition":"Bedeutung: Ein gesunder Geist wohnt auch in einem gesunden Körper",
      "examples":[  
         "lustige Erweiterung dieses Sprichwortes in Studentenkreisen: \"… Oder wer in die Mensa geht, muss einen gesunden Körper haben!\""
      ],
      "name":"mens sana in corpore sano",
      "id":354
   },
   {  
      "definition":"Arbeitsbereich, den jemand erlernt hat",
      "examples":[  
         "Und weil seit dem Mittelalter lange Zeit nur Juden solche Geschäfte ausüben durften, vom Handel und vom Handwerk ferngehalten wurden, lieferte das Metier auch gängige Vorwände für Antisemitismus.",
         "In seinem Metier kennt er sich aus."
      ],
      "name":"Metier",
      "id":355
   },
   {  
      "definition":"Haltung, sich auf möglichst wenig zu beschränken; unterschiedliche Ausprägungen der Darstellung in den verschiedenen Künsten mit einer Grundtendenz zur Reduktion/Vereinfachung",
      "examples":[  
         "Im Inneren schloss sich dieser vorsichtige Minimalismus an."
      ],
      "name":"Minimalismus",
      "id":356
   },
   {  
      "definition":"geringerer Teil einer abstimmenden Gruppe, die sich für oder gegen eine Option entscheidet",
      "examples":[  
         "Die Majorität gewinnt die Abstimmung, die Minorität verliert sie.",
         "Als es freilich zur Abstimmung kam, wurde ihre winzige Minorität sichtbar."
      ],
      "name":"Minorität",
      "id":357
   },
   {  
      "definition":"sehr genau, peinlich genau",
      "examples":[  
         "Der Auftritt war minutiös geplant."
      ],
      "name":"minutiös",
      "id":358
   },
   {  
      "definition":"ein Mensch, der die Menschheit hasst, also ein Menschenfeind",
      "examples":[  
         "Schopenhauer gilt allgemein als ein Misanthrop.",
         "Er bemühte sich geduldig fünf Jahre lang bei einem in Damaskus ansässigen österreichischen Misanthropen.",
         "Sie konnte nicht recht begreifen, warum, aber sie wußte, daß der Druck auf einen imaginären Knopf in seinem Bewußtsein genügte, um ihn von einem Philanthropen in einen Misanthropen zu verwandeln."
      ],
      "name":"Misanthrop",
      "id":359
   },
   {  
      "definition":"abwertend: Familie, Großfamilie",
      "examples":[  
         "Warte mal ab, wenn Meyer mit seiner ganzen Mischpoke hier anrückt."
      ],
      "name":"Mischpoke",
      "id":360
   },
   {  
      "definition":"in Maßen, gemäßigt",
      "examples":[  
         "Die Preise sind moderat."
      ],
      "name":"moderat",
      "id":361
   },
   {  
      "definition":"sich über jemanden oder etwas spöttisch oder abfällig äußern",
      "examples":[  
         "Er hat sich über die schlechte Organisation der Veranstaltung mokiert.",
         "Immer wieder mokierte sich Szmul über meine Unbildung und Provinzialität."
      ],
      "name":"mokieren",
      "id":362
   },
   {  
      "definition":"auf eine modisch elegante Erscheinung und Lebensführung bedacht; betont elegant, sehr gewandt und dabei lässig überlegen, im Stil der großen Welt",
      "examples":[  
         "Auf dem Wiener Opernball treffen sich Jahr für Jahr die eleganten Herren und mondänen Damen der internationalen High Society."
      ],
      "name":"mondän",
      "id":363
   },
   {  
      "definition":"geldlich, auf die Währung bezogen, das Geld betreffend",
      "examples":[  
         "Monetär sieht es bei mir zur Zeit ziemlich schlecht aus."
      ],
      "name":"monetär",
      "id":364
   },
   {  
      "definition":"nicht ganz kurze Äußerung einer einzigen Person, meist einer Figur auf der Bühne in einem Theaterstück",
      "examples":[  
         "Endlich kam auch Macbeths bekannter Monolog an die Reihe: „Ist das ein Dolch, was ich vor mir erblicke, der Griff mir zugekehrt?“"
      ],
      "name":"Monolog",
      "id":365
   },
   {  
      "definition":"meist im Plural: eine sehr große, aber unbestimmte Zahl",
      "examples":[  
         "Nachdem die Presse vom bevorstehenden astronomischen Ereignis berichtet hatte, stand morgens um drei eine Myriade von schlaftrunkenen Neugierigen auf dem Schlossplatz und schaute auf zu den Myriaden von Sternen."
      ],
      "name":"Myriade",
      "id":366
   },
   {  
      "definition":"übersteigert in sich selbst verliebt, auf sich selbst bezogen",
      "examples":[  
         "Eine narzisstische Störung entsteht laut Miller, wenn ein Kind seine eigenen Gefühle und Interessen nicht artikulieren durfte und später dafür ein ‚Ventil‘ braucht.",
         "Die Dame ist zu die narzisstischste und egomanischste Person, die ich kennen lernen durfte."
      ],
      "name":"narzisstisch",
      "id":367
   },
   {  
      "definition":"nicht eindeutig/sicher verstehbar",
      "examples":[  
         "Seine Ausführungen kamen mir recht nebulös vor.",
         "Einer der nebulösen Texte orakelt etwa von Geheiminformationen, die angeblich auf dem Gelände der CIA versteckt worden seien."
      ],
      "name":"Nebulös",
      "id":368
   },
   {  
      "definition":"abstreiten, leugnen, eine Sache als nicht existent betrachten oder behaupten",
      "examples":[  
         "Ein Atheist negiert die Existenz von Göttern.",
         "Der Angeklagte negierte seine Schuld."
      ],
      "name":"negieren",
      "id":369
   },
   {  
      "definition":"Vetternwirtschaft (übermäßige Begünstigung von Verwandten, zum Beispiel bei der Verteilung von Geldern, der Vergabe von Aufträgen oder der Besetzung von Positionen), ungerechtfertigte Begünstigung von Verwandten (z. B. bei Stellenbesetzungen)",
      "examples":[  
         "Luther gefiel der Nepotismus, den der Staat betrieb, nicht."
      ],
      "name":"Nepotismus",
      "id":370
   },
   {  
      "definition":"Personen, die sich besonders mit Computern oder anderen Bereichen aus Wissenschaft und Technik beschäftigen, deren soziale Kompetenzen aber entweder schwach ausgeprägt sind oder diesen Eindruck zumindest erwecken",
      "examples":[  
         "Er hatte überhaupt nichts dagegen, dass sie ihn Nerd nannten, im Gegenteil.",
         "Gamer, Exoten und andere Nerds treffen sich am Wochenende zur Messe."
      ],
      "name":"Nerd",
      "id":371
   },
   {  
      "definition":"neurodegenerativ bezeichnet die Eigenschaft des fortschreitenden Verlusts von Nervenzellen",
      "examples":[  
         "Alzheimer, Parkinson und Chorea Huntington gelten allesamt als neurodegenerative Erkrankungen."
      ],
      "name":"Neurodegenerativ",
      "id":372
   },
   {  
      "definition":"Weltanschauung, die alle Werte und Normen als nichtig ansieht",
      "examples":[  
         "Nicht nur der Nihilismus, sondern auch der religiöse Fanatismus, der heute oft als Fundamentalismus bezeichnet wird, kann terroristische Vorhaben und Handlungen inspirieren"
      ],
      "name":"Nihilismus",
      "id":373
   },
   {  
      "definition":"Malerei: Heiligenschein; ein besonderer Ruf, ein bestimmtes Renommee",
      "examples":[  
         "Köpfe von Heiligen werden von Künstlern oft mit einem Nimbus dargestellt.",
         "Danach kam eine lange Durststrecke, in der er den Nimbus des Unschlagbaren verlor"
      ],
      "name":"Nimbus",
      "id":374
   },
   {  
      "definition":"ausgleichen, begleichen, auf das gleiche Niveau bringen",
      "examples":[  
         "Er hat durch das Stehlen von Franks Uhr den Diebstahl von Judiths Kette nivelliert."
      ],
      "name":"nivellieren",
      "id":375
   },
   {  
      "definition":"eigene Ideen/Interessen verfolgend, ohne sich allzu sehr auf andere Betroffene einzustellen",
      "examples":[  
         "Über unseren Einwand ging er ganz nonchalant hinweg.",
         "Kaum hatte er sich in seinem neuen Domizil eingelebt, stellte er die gewohnten Verhältnisse nonchalant auf den Kopf."
      ],
      "name":"nonchalant",
      "id":376
   },
   {  
      "definition":"als Norm geltend, eine Norm setzend",
      "examples":[  
         "Eine normative Grammatik will festlegen, welche Sprech- oder Schreibweise als richtig zu gelten habe."
      ],
      "name":"Normativ",
      "id":377
   },
   {  
      "definition":"sehnsuchtsvoll verklärende Rückwendung zur Vergangenheit",
      "examples":[  
         "„Trotzdem betrachte ich den Wellblechwürfel mit einiger Nostalgie.“",
         "Heute versteht man unter Nostalgie eine wehmütige Hinwendung zu vergangenen Zeiten, die in der Erinnerung oftmals stark idealisiert und verklärt reflektiert werden."
      ],
      "name":"Nostalgie",
      "id":378
   },
   {  
      "definition":"leicht abwertend: für ein bestimmtes, ständiges/wiederholtes Fehlverhalten bekannt, allgemein/weithin bekannt",
      "examples":[  
         "Er ist ein notorischer Lügner!",
         "Als notorische Diebin stiehlt sie die Uhr des Erzählers, als ebenso notorische Lügnerin gibt sie sich Don José gegenüber als Baskin aus."
      ],
      "name":"notorisch",
      "id":379
   },
   {  
      "definition":"Neuerscheinung, Neuheit (der Mode oder Ähnlichem)",
      "examples":[  
         "Die neue Kollektion bringt keinerlei Novitäten."
      ],
      "name":"Novität",
      "id":380
   },
   {  
      "definition":"eine Neuheit in einem bestimmten Bereich oder Gebiet, die noch nie vorher da gewesen ist",
      "examples":[  
         "Die Bildung einer Koalitionsregierung war für unser Land ein Novum."
      ],
      "name":"Novum",
      "id":381
   },
   {  
      "definition":"mit vielen Abstufungen oder Feinheiten.",
      "examples":[  
         "Der Roman gab ein nuanciertes Bild des Lebens im Berlin der Kriegszeit."
      ],
      "name":"nuanciert",
      "id":382
   },
   {  
      "definition":"Psychologie: an Nymphomanie leidend, einen krankhaft gesteigerten Sexualtrieb habend",
      "examples":[  

      ],
      "name":"nymphoman",
      "id":383
   },
   {  
      "definition":"verpflichtend, verbindlich, vorgeschrieben, zwingend erforderlich",
      "examples":[  
         "Diese Unterschrift ist obligatorisch.",
         "Diese Überschrift ist obligatorisch."
      ],
      "name":"obligatorisch",
      "id":384
   },
   {  
      "definition":"kleine Münze im alten Griechenland; leine Geldspende, kleiner finanzieller Beitrag",
      "examples":[  
         "Jedem toten Griechen wurde ein Obolus unter die Zunge gelegt.",
         "Und es wäre nett, wenn Sie für unsere weitere Arbeit einen kleinen Obolus entrichten würden."
      ],
      "name":"Obolus",
      "id":385
   },
   {  
      "definition":"etwas beobachten, etwas erkunden, jemanden (polizeilich) überwachen",
      "examples":[  
         "Das Gebiet wurde zwei Jahre lang ausgiebig observiert.",
         "Die Polizei observiert den Verdächtigen."
      ],
      "name":"observieren",
      "id":386
   },
   {  
      "definition":"emotional sehr starke Begeisterung für ein bestimmtes Thema, Hobby, eine Arbeit oder Aktion",
      "examples":[  
         "Im Unterschied zu Patienten mit anderen psychischen Störungen seien sich die Betroffenen dabei durchaus bewußt, daß ihre Obsession unsinnig ist. Dennoch gelinge es ihnen nicht, sich hiervon zu befreien.",
         "Doch mitunter geraten bestimmte Handlungs- oder Denkmuster zur Obsession."
      ],
      "name":"Obsession",
      "id":387
   },
   {  
      "definition":"abwertend: anrüchig, von schlechtem Ruf; unbekannt, mysteriös",
      "examples":[  
         "Er kaufte bei obskuren Händlern anstatt bei welchen, die die Gewähr für die Echtheit und Qualität der Waren bieten konnten."
      ],
      "name":"obskur",
      "id":388
   },
   {  
      "definition":"überholt, veraltet, ungebräuchlich, überflüssig geworden",
      "examples":[  
         "Das Betriebssystem Windows 95 ist seit dem 1. Januar 2001 obsolet."
      ],
      "name":"obsolet",
      "id":389
   },
   {  
      "definition":"kein Plural: die Irrfahrt des Odysseus, übertragen: generell jede Irrfahrt",
      "examples":[  
         "Das Epos des Homer beginnt im zehnten Jahr der Odyssee.",
         "Tausende Bahnpassagiere haben in den letzten 24 Stunden eine wahre Odyssee hinter sich gebracht."
      ],
      "name":"Odyssee",
      "id":390
   },
   {  
      "definition":"ein schriftliches Kaufangebot für Waren und Dienstleistungen, Angebot",
      "examples":[  
         "Erst kürzlich hatte der chinesische Computerkonzern Lenovo eine rund 600 Mrd. Euro schwere Offerte für den Elektronik-Großhändler Medion abgegeben.",
         "Bereits in den letzten Wochen hatte der von der Bundesregierung beschlossene Atom-Ausstieg bei den Grünen Zustimmung geerntet und war als Offerte für zukünftige schwarz-grüne Regierungsbündnisse interpretiert worden."
      ],
      "name":"Offerte",
      "id":391
   },
   {  
      "definition":"etwas besetzen, sich etwas aneignen, etwas einnehmen",
      "examples":[  
         "Danach sollten die USA saudi-arabische Ölfelder okkupieren, falls das Land nicht mehr gegen den Terrorismus unternehme."
      ],
      "name":"okkupieren",
      "id":392
   },
   {  
      "definition":"jemandem etwas aufzwingen, aufdrängen",
      "examples":[  
         "Im Geist, auf dem Reißbrett, steht die Stadt der Zukunft. Aber lässt sich soziale Wandlung einfach organisieren? Lassen sich Ideen und Programme oktroyieren?"
      ],
      "name":"oktroyieren",
      "id":393
   },
   {  
      "definition":"den Geruchssinn betreffend",
      "examples":[  
         "Olfaktorische Signale sind Geruchsstoffe, die über den Geruchssinn wahrgenommen werden."
      ],
      "name":"olfaktorisch",
      "id":394
   },
   {  
      "definition":"Wirtschaftsform, bei der der gesamte Markt von wenigen Unternehmen beherrscht wird",
      "examples":[  
         "Die Energiekonzerne haben in Deutschland ein Oligopol."
      ],
      "name":"Oligopol",
      "id":395
   },
   {  
      "definition":"immer und jederzeit anwesend; allgegenwärtig",
      "examples":[  
         "Gott ist omnipräsent."
      ],
      "name":"omnipräsent",
      "id":396
   },
   {  
      "definition":"Wortbildung durch sprachliche Nachahmung von Geräuschen und Lauten, z.B. Kuckuck, Gong",
      "examples":[  
         "In Gedicht x spielt Onomatopoesie eine große Rolle."
      ],
      "name":"Onomatopoesie",
      "id":397
   },
   {  
      "definition":"dass man nicht durchschauen kann; so verworren, dass es nicht nachvollziehbar ist",
      "examples":[  
         "Graphit ist im Gegensatz zu Diamant opak.",
         "Schon aus Gründen reiner Selbsterhaltung, also um das angestrebte Monopol über jegliches technikhistorisches Wissen langfristig zu sichern, aber auch um den mitunter zweifelhaften Status oder die Herkunft mancher Quellen nicht nachprüfbar zu machen, muss das Referenzsystem nach außen hin opak bleiben."
      ],
      "name":"Opak",
      "id":398
   },
   {  
      "definition":"die Umformung von theoretischen Begriffen und Hypothesen im Sinn ihrer empirischen Überprüfbarkeit durch Angabe konkreter, im Einzelnen überprüfbarer, Zielvorgaben und Schritte",
      "examples":[  
         "Wir sollten möglichst viele Definitionen operationalisieren; dann lassen sich Entscheidungen sicherer fällen."
      ],
      "name":"operationalisieren",
      "id":399
   },
   {  
      "definition":"angebracht, in gegenwärtiger Situation von Vorteil",
      "examples":[  
         "Auch sein Vorschlag eines Sozialpakets für alle entsprang einer Idee, die ihm heute nicht mehr opportun erscheint."
      ],
      "name":"opportun",
      "id":400
   },
   {  
      "definition":"üppig, reichlich; von großer Opulenz",
      "examples":[  
         "Die opulente Ausstattung der Hotelzimmer versetzte die Besucher in Erstaunen.",
         "Am nächsten Tag um elf empfing mich ein opulentes Frühstück im Esszimmer der Pension."
      ],
      "name":"opulent",
      "id":401
   },
   {  
      "definition":"ohne Hemmungen",
      "examples":[  
         "Der Tanz war noch orgiastischer geworden."
      ],
      "name":"orgiastisch",
      "id":402
   },
   {  
      "definition":"nicht abgeleitet, wiederholt oder verändert, eigenständig, grundlegend neu",
      "examples":[  
         "Originäres und derivatives Recht unterliegen verschiedenen Normen hinsichtlich des Erwerbs und der Qualität des Rechtes."
      ],
      "name":"originär",
      "id":403
   },
   {  
      "definition":"bildungssprachlich: auf Beachtung berechnet, zur Schau gestellt, in einer herausfordernden Weise, bewusst ausrichten",
      "examples":[  
         "Sie verließ ostentativ den Raum.",
         "Wirkliche Bedeutung erreichen jene Politiker, die, wie Helmut Schmidt oder Hans-Jochen Vogel, ostentativ einen bescheidenen Lebensstil pflegen."
      ],
      "name":"ostentativ",
      "id":404
   },
   {  
      "definition":"Vermittlung von gekündigten Mitarbeitern in ein neues Arbeitsverhältnis durch den bisherigen, kündigenden Arbeitgeber, insbesondere bei Fachkräften und Führungskräften",
      "examples":[  
         "Der Betrieb setzte beim Personalabbau auf Outplacement."
      ],
      "name":"Outplacement",
      "id":405
   },
   {  
      "definition":"sprachliche Konstruktion (rhetorische Figur), die aussieht wie ein Widerspruch in sich innerhalb eines Worts oder bei Wortkombinationen",
      "examples":[  
         "„süßsauer“, „scharfsinniger Unsinn“, „virtuelle Realität“ oder „Bürgeradel“ sind Beispiele für beide Formen von Oxymora.",
         "Das Gedicht „Dunkel wars, der Mond schien helle“ lebt von Oxymora."
      ],
      "name":"Oxymoron",
      "id":406
   },
   {  
      "definition":"in perfekter Vollendung, schlechthin",
      "examples":[  
         "Zucker. Vor 500 Jahren am Beginn der Neuzeit ein Luxusgut par excellence, Privileg gekrönter Häupter und jener europäischen Superreichen, die mit Arabern Handel trieben.",
         "Der Kairoer Dialekt wird oft als Ägyptisch-Arabisch par excellence angesehen, obwohl die Dialekte außerhalb Kairos sich davon mehr oder minder deutlich unterscheiden."
      ],
      "name":"par excellence",
      "id":407
   },
   {  
      "definition":"Muster, Beispiel; Denkmuster, Schema; eine grundlegende wissenschaftliche Denkweise",
      "examples":[  
         "Maria Laach in der Eifel ist ein Paradigma für den romanischen Baustil.",
         "Müsste nicht in den Führungsetagen in diesem Land ein Wechsel der Paradigmen stattfinden?",
         "Der Behaviorismus, die Tiefenpsychologie, die Kognitionspsychologie und die Biopsychologie sind Paradigmen der Psychologie."
      ],
      "name":"Paradigma",
      "id":408
   },
   {  
      "definition":"einen unauflösbaren Widerspruch enthaltend",
      "examples":[  
         "Eine Idee war paradoxer als alle anderen.",
         "Der Zweck der paradoxen Formulierung ist zunächst, einen Gedanken besonders zugespitzt auszudrücken, indem man ihn scharf von der üblichen Ansicht abhebt."
      ],
      "name":"paradox",
      "id":409
   },
   {  
      "definition":"jemanden so beeinträchtigen, dass er fast nichts mehr tun kann",
      "examples":[  
         "Nach dem erlittenen Schock wirkte sie wie paralysiert."
      ],
      "name":"paralysieren",
      "id":410
   },
   {  
      "definition":"etwas in eigenen Worten wiedergeben oder erklären",
      "examples":[  
         "Zunächst sollten Sie den vorliegenden Text paraphrasieren."
      ],
      "name":"Paraphrasieren",
      "id":411
   },
   {  
      "definition":"Rhetorik: ein Teil stellvertretend für das Ganze (Redefigur)",
      "examples":[  
         "„Kopf“ als Pars pro Toto für „Mensch“: Unsere Gemeinschaft bestand aus 10 Köpfen."
      ],
      "name":"Pars pro Toto",
      "id":412
   },
   {  
      "definition":"gehoben: an etwas teilhaben; an etwas seinen Anteil haben",
      "examples":[  
         "Ich partizipiere an der finanziellen Sicherheit meiner Familie."
      ],
      "name":"partizipieren",
      "id":413
   },
   {  
      "definition":"abwertend: für einen Emporkömmling, Neureichen, der schnell aufgestiegen ist und mit seinem Reichtum protzt",
      "examples":[  
         "Der Schulze, der Parvenü, hat Millionen geerbt und glaubt, er gehöre deshalb plötzlich zur besseren Gesellschaft."
      ],
      "name":"Parvenü",
      "id":414
   },
   {  
      "definition":"(flüssige) Lebensmittel oder andere Stoffe durch kurzfristiges Erhitzen auf 60 bis 90 °C konservieren",
      "examples":[  
         "Die Milch ist homogenisiert und pasteurisiert."
      ],
      "name":"pasteurisieren",
      "id":415
   },
   {  
      "definition":"das Pathos betreffend; übertrieben oder aufgesetzt gefühlvoll, leidenschaftlich",
      "examples":[  
         "Die Hauptdarstellerin im Theaterstück spielte mit der pathetischen Gestik einer Opernsängerin, die eben ihre Todesarie singt",
         "Der pathetische Wunsch, seinen Kummer zu überlisten, hatte in der Konfrontation mit der Maske geendet."
      ],
      "name":"pathetisch",
      "id":416
   },
   {  
      "definition":"eine leidenschaftliche Ergriffenheit oder ein leidenschaftliches Verhalten",
      "examples":[  
         "Die Hochzeit wurde mit großem Pathos begangen",
         "Es gelang ihm, das Publikum mit seinem Pathos zu begeistern."
      ],
      "name":"Pathos",
      "id":417
   },
   {  
      "definition":"Wachdienst mit einer speziellen taktischen Aufgabe, einem Auftrag, der von einer oder mehreren Personen wahrgenommen wird",
      "examples":[  
         "Trotzdem machen sich mutige Männer in dieses Gebiet auf - zur härtesten Patrouille der Welt.",
         "Außer einer Patrouille war in diesem Moment niemand zu erblicken."
      ],
      "name":"Patrouille",
      "id":418
   },
   {  
      "definition":"die Ideologie, die sich für den Frieden einsetzt und den Krieg und die Gewalt ablehnt",
      "examples":[  
         "Wir müssen unsere Kinder gegen Militarismus impfen, indem wir sie im Geiste des Pazifismus erziehen."
      ],
      "name":"Pazifismus",
      "id":419
   },
   {  
      "definition":"abwertend hinsichtlich der (eigenen) Sprache, eines Wortes oder einer Redewendung",
      "examples":[  
         "„Versager“ ist ein pejorativer Terminus für einen vom Leben Gebeutelten."
      ],
      "name":"pejorativ",
      "id":420
   },
   {  
      "definition":"auf Geld bezogen (geldlich, finanziell)",
      "examples":[  
         "Er lebt in guten/schlechten pekuniären Verhältnissen.",
         "Seine pekuniäre Lage ist gut."
      ],
      "name":"pekuniär",
      "id":421
   },
   {  
      "definition":"entsprechendes, ergänzendes, passendes Gegenstück",
      "examples":[  
         "Dein schwarzer Schal ist das perfekte Pendant zu deinem weißen Hut.",
         "Immerhin gilt das deutsche Jugendstrafrecht in vielerlei Hinsicht als vorbildhaft — und könnte für ein russisches Pendant als Grundlage dienen, die den Eigenheiten des Landes angepasst wird."
      ],
      "name":"Pendant",
      "id":422
   },
   {  
      "definition":"an sich, für sich, selbst",
      "examples":[  
         "Dieses Vorhaben ist per se schon unmöglich umzusetzen.",
         "Weder der Kapitalismus per se noch die Mehrheit der europäischen Wirtschaftsmagnaten können für den Krieg allein verantwortlich gemacht werden."
      ],
      "name":"per se",
      "id":423
   },
   {  
      "definition":"mit Niedertracht und in hinterhältiger Weise",
      "examples":[  
         "Perfide ist es jedoch, im politischen Kampf gegen das Betreuungsgeld das Image der Familien nachhaltig zu beschädigen, indem man dumpfe Vorurteile bedient.",
         "Plötzlich hatte sie eine perfide Idee.",
         "Der Vergleich von Nazis mit Tierschützern ist ziemlich perfide."
      ],
      "name":"perfide",
      "id":424
   },
   {  
      "definition":"etwas mit Löchern versehen",
      "examples":[  
         "Man kann mit einem Laser Blech an der Biegekante perforieren, um es sehr leicht zu biegen."
      ],
      "name":"perforieren",
      "id":425
   },
   {  
      "definition":"am Rand gelegen, dort befindlich; Medizin: in den äußeren Bereichen des Körpers befindlich",
      "examples":[  
         "Das ist ein peripheres Problem.",
         "Unter den peripheren Nerven lassen sich die Hirnnerven von den übrigen peripheren Nerven abgrenzen."
      ],
      "name":"peripher",
      "id":426
   },
   {  
      "definition":"fiktive Maschine, die einmal in Gang gesetzt, ohne Energiezufuhr ewig arbeitet",
      "examples":[  
         "Als ich damals an seinen Aufgaben zum Perpetuum mobile verzweifelte, spürte ich seine Fremdheit",
         "Die Lokomotive Emma flog als Perpetuum mobile hinter den Magneten her, die Lukas ihr vorne drangehängt hatte."
      ],
      "name":"Perpetuum mobile",
      "id":427
   },
   {  
      "definition":"andauernd, beharrlich, unbeirrbar, permanent",
      "examples":[  
         "Seine Freundlichkeit blieb unter all diesen widrigen Umständen persistent.",
         "Käthe ist gegen jegliche Andeutungen zu ihrem Vokabelheft persistent."
      ],
      "name":"persistent",
      "id":428
   },
   {  
      "definition":"allmählich, schrittweise, nach und nach",
      "examples":[  
         "Peu à peu erreichte er sein Ziel.",
         "Peu à peu verschwand Swadeshs Glottolingo wieder aus den Fachzeitschriften."
      ],
      "name":"peu à peu",
      "id":429
   },
   {  
      "definition":"seltene, bemerkenswerte, auffällige Erscheinung",
      "examples":[  
         "Der Sonnenuntergang ist ein Phänomen am westlichen Abendhimmel.",
         " Ein Phänomen, das bei Osteoporose auftreten kann, ist das Tannenbaumphänomen."
      ],
      "name":"Phänomen",
      "id":430
   },
   {  
      "definition":"Wirkstoff, der zwischen Individuen der gleichen Art Signale vermittelt",
      "examples":[  
         "Pheromone dienen der Signalübermittlung zwischen den Individuen einer Spezies. Ein Beispiel ist Bombykol, der über die Luft verbreitete Sexuallockstoff des Seidenspinners Bombyx mori"
      ],
      "name":"Pheromon",
      "id":431
   },
   {  
      "definition":"in der Art und Weise eines Philanthropen, menschenfreundlich",
      "examples":[  
         "So ehrgeizig seine und Stanleys Pläne auch sein mochten, Leopold war entschlossen, den Schein eines rein philanthropischen Unternehmens zu wahren."
      ],
      "name":"philanthropisch",
      "id":432
   },
   {  
      "definition":"kleinlicher Mensch, nichtstudierte Person, Nichtakademiker",
      "examples":[  
         "Als Nachbar war er Philister, der jeden Zweig, der über den Zaun wuchs, sauber entfernte.",
         "Später wurde aus dem Hörsaal eine Kneipe, in der sich auch Philister trafen."
      ],
      "name":"Philister",
      "id":433
   },
   {  
      "definition":"kaum zu erregen; nur schwer zu einer Handlung motivierbar",
      "examples":[  
         "Den Jungen können wir im Betrieb nicht brauchen, er ist zu phlegmatisch."
      ],
      "name":"phlegmatisch",
      "id":434
   },
   {  
      "definition":"krankhafte Angst; krankhafte Furcht; eine unbegründete, anhaltende Angst vor Situationen, Gegenständen, Tätigkeiten oder Personen. Der Begriff Phobie wird jedoch auch im nicht-medizinischen Sinne für Abneigungen aller Art gebraucht.",
      "examples":[  
         "Dank Dr. Freud konnte ich von meiner Phobie vor Spinnen geheilt werden.",
         "Nachts kann ich kein Auge zudrücken, denn ich habe eine Phobie vor Dunkelheit."
      ],
      "name":"Phobie",
      "id":435
   },
   {  
      "definition":"syntaktisch zusammengehörige Wortgruppe; allgemein, abwertend: leere Redensart, Ausspruch ohne konkreten Inhalt",
      "examples":[  
         "Ein Satz besteht meist aus mehreren Phrasen. Am Beispiel des Beispielsatzes: „Ein Satz“ „besteht“ „aus mehreren Phrasen“",
         "Er drischt nur leere Phrasen."
      ],
      "name":"Phrase",
      "id":436
   },
   {  
      "definition":"Sprachform/Mischsprache mit stark vereinfachter Grammatik und eingeschränktem Wortschatz, die bei Sprechern mit verschiedenen Muttersprachen ein notwendiges Minimum an Verständigung ermöglicht",
      "examples":[  
         "Pidgins sind in Kolonialzeiten entstanden, um eine gewisse Verständigung zwischen Einheimischen und Händlern/Kolonisten zu ermöglichen. Pidgins sind Mischsprachen mit Bestandteilen aus den Sprachen der Kommunikationspartner."
      ],
      "name":"Pidgin",
      "id":437
   },
   {  
      "definition":"bildungssprachlich: wie von einem Maler gemalt",
      "examples":[  
         "Die kleine Stadt mit ihrem Labyrinth enger Straßen und ihren alten Häusern macht einen pittoresken Eindruck.",
         "Wir waren in dem pittoreskesten Dorf der ganzen Umgebung gelandet."
      ],
      "name":"pittoresk",
      "id":438
   },
   {  
      "definition":"es beschreibt den Vorgang des Diebstahls von geistigem Eigentum",
      "examples":[  
         "Dieses Werk wurde plagiiert"
      ],
      "name":"plagiieren",
      "id":439
   },
   {  
      "definition":"Verbindung bedeutungsgleicher oder -verwandter Ausdrücke in einer Wortgruppe",
      "examples":[  
         "„Weißer Schimmel“ und „alter Greis“ werden von Wilpert als Beispiele für Pleonasmen angegeben."
      ],
      "name":"Pleonasmus",
      "id":440
   },
   {  
      "definition":"treffend ausgedrückt.",
      "examples":[  
         "eine pointierte Bemerkung"
      ],
      "name":"pointiert",
      "id":441
   },
   {  
      "definition":"beschreibt den Vorgang des Diebstahls von geistigem Eigentum",
      "examples":[  
         "Das Konzept „Polarisieren” funktioniert getreu dem Motto „Entweder du bist mit uns oder du bist gegen uns!”",
         "Konflikte wie der um die Plagiatsaffäre eines Bundesministers können die Gesellschaft polarisieren."
      ],
      "name":"polarisieren",
      "id":442
   },
   {  
      "definition":"in der Art eines unsachlichen Angriffs",
      "examples":[  
         "Im Endeffekt hatte er in dieser Diskussion Erfolg, und damit konnte einer der polemischsten Schmidt-Texte der Nachkriegszeit dann doch noch sein (teils verärgertes) Radiopublikum finden."
      ],
      "name":"polemisch",
      "id":443
   },
   {  
      "definition":"Form der Ehe, bei der mehr als zwei Personen miteinander verheiratet sind",
      "examples":[  
         "In Deutschland ist Polygamie nicht erlaubt.",
         "In vielen afrikanischen Staaten wird zwar die monogame Ehe gefördert, doch ist die Polygamie nicht verboten."
      ],
      "name":"Polygamie",
      "id":444
   },
   {  
      "definition":"Marktform, bei der sich viele Anbieter und viele Nachfrager gegenüberstehen",
      "examples":[  
         "Die relativ hohe Häufung von Prostituierten der Straßen- und der Bordellprostitution in Rotlichtvierteln bei relativ hohen Kundenzahlen führt insgesamt zu einer sehr stark marktorientierten Preisbildung im Sinne eines Polypols."
      ],
      "name":"Polypol",
      "id":445
   },
   {  
      "definition":"Person, die ein Anhänger oder Vertreter des Populismus ist",
      "examples":[  
         "In Europa sind eher Populisten am rechten politischen Spektrum erfolgreich, in Lateinamerika stehen sie links von der Mitte."
      ],
      "name":"Populist",
      "id":446
   },
   {  
      "definition":"Wertpapierbestand; Gesamtangebot eines Unternehmens, mit dem es an den Markt geht",
      "examples":[  
         "Zum Portfolio gehören auch hochriskante Rohstoffaktien.",
         "Zum Portfolio des Konzerns gehören neben Cremes und Parfums auch Produkte der Haarpflege."
      ],
      "name":"Portfolio",
      "id":447
   },
   {  
      "definition":"auf Gefühlen, nicht auf Tatsachen beruhend",
      "examples":[  
         "Merkel stellte sich vors Mikro und sagte: ‚Es heißt ja neuerdings, wir lebten in postfaktischen Zeiten. Das soll wohl heißen, die Menschen interessieren sich nicht mehr für Fakten, sie folgen allein den Gefühlen"
      ],
      "name":"postfaktisch",
      "id":448
   },
   {  
      "definition":"etwas fordern oder zur Bedingung machen; eine grundsätzliche Annahme oder Voraussetzung aufstellen",
      "examples":[  
         "Sie postulierten die Anerkennung der Ehe zwischen Homosexuellen.",
         "1913 postulierte Niels Bohr das „Bohr\u0027sche Atommodell“."
      ],
      "name":"postulieren",
      "id":449
   },
   {  
      "definition":"nach Möglichkeit",
      "examples":[  
         "Man muss die potenziellen Gewinne deutlich von den tatsächlichen unterscheiden."
      ],
      "name":"potenziell",
      "id":450
   },
   {  
      "definition":"wegen einer Eigenschaft, die etwas oder jemand bereits besitzt, für eine zukünftige Funktion vorbestimmt oder besonders geeignet sein",
      "examples":[  
         "Er ist aufgrund seiner Kenntnisse geradezu prädestiniert dazu, diesen Vortrag zu halten.",
         " „Die chemische Industrie kann zu den prädestiniertesten Anwenderbranchen der Szenario-Technik gezählt werden.“"
      ],
      "name":"prädestiniert",
      "id":451
   },
   {  
      "definition":"praxisbezogen, auf Nützliches ausgerichtet, sachlich",
      "examples":[  
         "Lasst uns das Problem ganz pragmatisch angehen."
      ],
      "name":"pragmatisch",
      "id":452
   },
   {  
      "definition":"Annahme, Voraussetzung (eines Schlusses)",
      "examples":[  
         "Er ging von der Prämisse aus, dass die anderen ihm tatsächlich helfen wollten."
      ],
      "name":"Prämisse",
      "id":453
   },
   {  
      "definition":"durch besondere Darstellungsmöglichkeiten (Sprache, Aussehen usw.) versuchend kultiviert zu wirken",
      "examples":[  
         "Das Musical war prätentiös.",
         "Der Schweinezüchter ist ein Emporkömmling, der durch sein prätentiöses Auftreten versucht, seinen sozialen Aufstieg zu inszenieren und eine große Rolle zu spielen."
      ],
      "name":"prätentiös",
      "id":454
   },
   {  
      "definition":"widerruflich, unsicher, heikel, schwierig, problematisch",
      "examples":[  
         "Das Beschäftigungsverhältnis als Leiharbeiter ist prekär.",
         "Die Situation ist prekär."
      ],
      "name":"prekär",
      "id":455
   },
   {  
      "definition":"",
      "examples":[  

      ],
      "name":"Prêt-à-porter",
      "id":456
   },
   {  
      "definition":"so, dass jemand sich affektiert, nicht natürliche oder gekünstelt benimmt.",
      "examples":[  
         "Sie hat sich auf eine preziöse Art bedankt."
      ],
      "name":"preziös",
      "id":457
   },
   {  
      "definition":"Führer einer Gruppe mit gleichberechtigten Mitgliedern, wörtlich: Erster unter Gleichen",
      "examples":[  
         "Der Bundespräsident der Schweiz ist nicht das Staatsoberhaupt, sondern steht dem Bundesrat als Primus inter Pares vor."
      ],
      "name":"Primus inter Pares",
      "id":458
   },
   {  
      "definition":"der Form halber, um einer Regelung gerecht zu werden",
      "examples":[  
         "Er hat die Bestellung pro forma schriftlich bestätigt."
      ],
      "name":"pro forma",
      "id":459
   },
   {  
      "definition":"im Voraus wirkend, vorausschauend und klar im Hinblick auf zukünftige Herausforderungen planend und handelnd",
      "examples":[  
         "Wir haben im Bereich der Datenverarbeitung seit den 1990er Jahren proaktiv gehandelt."
      ],
      "name":"proaktiv",
      "id":460
   },
   {  
      "definition":"für den betreffenden Zweck geeignet, bewährt, erprobt, angemessen",
      "examples":[  
         "Da fällt mir ein probates Mittel ein!"
      ],
      "name":"probat",
      "id":461
   },
   {  
      "definition":"alltäglich, gewöhnlich, weltlich, nicht heilig, nicht kirchlich",
      "examples":[  
         "Das ist ganz profaner Klatsch, keine bedeutsame Nachricht.",
         "Manche Kirche wird, wenn sie nicht mehr für Gottesdienste benötigt wird, profan genutzt."
      ],
      "name":"profan",
      "id":462
   },
   {  
      "definition":"Beruf, Berufung, Gewerbe, Handwerk, Leidenschaft (sich zu etwas bekennen)",
      "examples":[  
         "Das Tischlerhandwerk ist seine Profession.",
         "„Ständig dachte Freiligrath daran, seine Profession einfach wegzuwerfen.“"
      ],
      "name":"Profession",
      "id":463
   },
   {  
      "definition":"langfristig nachhaltige Gewinnerzielungsmöglichkeit",
      "examples":[  
         "Mit einem neuen, modernen Konzept soll die Profitabilität gesteigert werden."
      ],
      "name":"Profitabilität",
      "id":464
   },
   {  
      "definition":"sich vergrößernd, zunehmend, in seinem Verhalten Dominanz ausdrückend",
      "examples":[  
         "Dieser Steuersatz ist progressiv.",
         "Dieser Tumor ist progressiv, er wächst.",
         " Dieser Lehrer hat bezüglich seiner Klasse ein progressives Verhalten."
      ],
      "name":"progressiv",
      "id":465
   },
   {  
      "definition":"Verhalten, unangenehme, jedoch notwendige Arbeiten und Entscheidungen aufzuschieben",
      "examples":[  
         "Erst wenn die Aufschieberitis chronisch wird und jemand gewohnheitsmäßig Aufgaben vertagt, die eigentlich erledigt werden müssen, spricht man von Prokrastination.",
         " Er prokrastinierte die Verhandlungen und wartete auf ein Wunder."
      ],
      "name":"Prokrastination",
      "id":466
   },
   {  
      "definition":"fachsprachlich: sexuell freizügig; nicht an langfristigen Bindungen orientierten Geschlechtsverkehr mit häufig wechselnden Partnern habend",
      "examples":[  
         "In Clans lebende Wanderratten sind bedingt durch das Paarungssystem weitgehend promisk."
      ],
      "name":"promisk",
      "id":467
   },
   {  
      "definition":"die Praxis, Geschlechtsverkehr mit häufig wechselnden Partnern zu haben - ohne Interesse an langfristigen Bindungen",
      "examples":[  
         "Allein anhand der Anzahl der Dates auf wachsende Promiskuität von Heranwachsenden zu schließen, wäre also voreilig.",
         "Die Veranstalter ermuntern die jugendlichen Reisenden mit Wettbewerben und Besäufnissen zur kopflosen Promiskuität am Urlaubsort."
      ],
      "name":"Promiskuität",
      "id":468
   },
   {  
      "definition":"Werbung mit Drucksachen oder Prospekten",
      "examples":[  
         "Die Prospektion hat trotz der elektronischen Medien noch immer einen großen Marktanteil in der Werbebranche."
      ],
      "name":"Prospektion",
      "id":469
   },
   {  
      "definition":"die Zukunft, eine Weiterentwicklung betreffend",
      "examples":[  
         "die British Doctors Study (deutsch: „Britische Ärzte-Studie“) ist der Name einer prospektiven epidemiologischen Studie, welche von 1951 bis 2001 lief und bereits 1 956 überzeugende statistische Belege lieferte dafür, dass das Tabakrauchen das Lungenkrebs-Risiko erhöht."
      ],
      "name":"prospektiv",
      "id":470
   },
   {  
      "definition":"Verbraucher die gleichzeitig Konsumenten darstellen",
      "examples":[  
         "Bei den schwankenden Marktpreisen bleiben Prosumenten gegenüber Konsumenten autark."
      ],
      "name":"Prosument",
      "id":471
   },
   {  
      "definition":"vorübergehend, notbehelfsweise",
      "examples":[  
         "Das Gebilde aus Alufolie und Kabelbinder ist nur eine provisorische Lösung, damit der Betrieb weitergehen kann.",
         "Die provisorische Brücke muss halten, bis der endgültige Zahnersatz da ist."
      ],
      "name":"provisorisch",
      "id":472
   },
   {  
      "definition":"ein vorgetäuschter Name, besonders von Künstlern und Schriftstellern genutzt, um eine wahre Identität zu verbergen",
      "examples":[  
         "Immer wieder werden die Konten von Nutzern gesperrt, die nicht ihren bürgerlichen Namen angegeben haben, sondern ein Pseudonym."
      ],
      "name":"Pseudonym",
      "id":473
   },
   {  
      "definition":"übertriebene Bemühung, etwas rein, d.h. frei von fremden, unerwünschten Einflüssen zu halten",
      "examples":[  
         "Im Falle der Sprache ist Purismus der Versuch, die Einflüsse anderer Sprachen auf die eigene einzuschränken, wenn man der Ansicht ist, dass die eigene Sprache durch diese Einflüsse gefährdet ist."
      ],
      "name":"Purismus",
      "id":474
   },
   {  
      "definition":"individuell und konkret definierte Eigenschaft einer Sache oder einer Dienstleistung; positive Eigenschaft einer Person oder einer Sache",
      "examples":[  
         "Der Stoff mit der gröberen Qualität gefällt mir besser.",
         "Dieses Wein hat eine ausgezeichnete Qualität."
      ],
      "name":"Qualität",
      "id":475
   },
   {  
      "definition":"das Wieviel einer Sache im Gegensatz zum Wie",
      "examples":[  
         "Die Mathematik beschäftigt sich mit Quantitäten.",
         "Quantitäten sind auch in der Linguistik, speziell in der Quantitativen Linguistik, von Bedeutung."
      ],
      "name":"Quantität",
      "id":476
   },
   {  
      "definition":"die Quantität betreffend",
      "examples":[  
         "Ob die Grenzwerte überschritten sind, muss erst eine quantitative Analyse zeigen."
      ],
      "name":"Quantitativ",
      "id":477
   },
   {  
      "definition":"Person, die sich ständig wegen jeder Kleinigkeit beschwert",
      "examples":[  
         "Du nervst so! Dir kann man es wirklich nicht recht machen, du Querulant!",
         "Man hatte bald genug, übergenug von diesem Querulanten und seiner Prahlerei, er sei schließlich schon ein Wunderkind gewesen."
      ],
      "name":"Querulant",
      "id":478
   },
   {  
      "definition":"das Wesen einer Sache; das endgültige Ergebnis dessen, was man aus allem Vorhergegangenen schlussfolgern kann",
      "examples":[  
         "Die Quintessenz dieser Rede lässt sich in drei Worten zusammenfassen.",
         "Der kranke Pückler möchte mit ihm offensichtlich aus einem weiteren Kapitel seines Lebens, der unglücklichen Jugend, eine Quintessenz ziehen."
      ],
      "name":"Quintessenz",
      "id":479
   },
   {  
      "definition":"meist Plural: Kleinigkeit, Nichtigkeit, Bagatelle",
      "examples":[  
         "Immer dramatischer klangen die Nachrichten, immer albtraumhafter sahen die Videoberichte von den Küsten aus, da konnte er doch wohl nicht wie in Normalzeiten über Quisquilien aus dem eigenen Land sprechen?",
         "Was auf den ersten Blick wie eine geschichtspolitische Quisquilie wirken mag, ist in Wirklichkeit elementar."
      ],
      "name":"Quisquilie",
      "id":480
   },
   {  
      "definition":"traditioneller Abschluss für Beweise mit der Bedeutung „was zu beweisen war“ , q.e.d",
      "examples":[  
         "Ein mathematischer Beweis wird traditionell mit den lateinischen Worten quod erat demonstrandum, abgekürzt ‚q.e.d.‘, beziehungsweise mit was zu beweisen war, abgekürzt ‚wzbw.‘, abgeschlossen."
      ],
      "name":"quod erat demonstrandum",
      "id":481
   },
   {  
      "definition":"abwertend: Ware, die aufgrund ihrer geringen Qualität nicht verkauft, nicht abgesetzt werden konnte; im übertragenen Sinne: wertloses Zeug",
      "examples":[  
         "Für den letzten Ramsch wird den Leuten das Geld aus der Tasche gezogen.",
         "Aber es sei mickriges Zeug, Ramsch sei das, Pofelware.",
         "Der Herzog wollte den ganzen Ramsch übernehmen, was der berühmte Kollege selbstverständlich fand."
      ],
      "name":"Ramsch",
      "id":482
   },
   {  
      "definition":"etwas rechtskräftig bestätigen, genehmigen",
      "examples":[  
         "Die Vereinigten Staaten von Amerika haben das Kyoto-Protokoll nicht ratifiziert."
      ],
      "name":"ratifizieren",
      "id":483
   },
   {  
      "definition":"beschreibt etwas wiederkehrendes oder wiederblühendes",
      "examples":[  
         "Die Regierung konnte trotz der Krise eine remontante Begeisterung im Volk hervorrufen."
      ],
      "name":"remontant",
      "id":484
   },
   {  
      "definition":"mehrfach vorhanden, wiederholt",
      "examples":[  
         "In jeder sprachlichen Äußerung gibt es redundante Erscheinungen, die zur Sicherung der Kommunikation wichtig sind. In der Linguistik gelten redundante Informationen nicht als überflüssig."
      ],
      "name":"redundant",
      "id":485
   },
   {  
      "definition":"Medizin: Periode der Genesung nach Krankheiten, die besondere Schonung, gute Ernährung und Vorsicht wegen der Gefahr von Rückfällen erfordert",
      "examples":[  
         "Die Rekonvaleszenz zog sich lange hin.",
         "Die Zeit der Rekonvaleszenz verbrachte er in einem Sanatorium."
      ],
      "name":"Rekonvaleszenz",
      "id":486
   },
   {  
      "definition":"Technik: Rückgewinnung von Energie; Geschichtswissenschaft: Rückgewinnung von Territorien",
      "examples":[  
         "Die Bremsleistung und das Maß der Rekuperation sind abhängig von der Leistung der elektrischen Maschinen, der Speicherleistung und der freien Kapazität der Energiespeicher.",
         "In der Mild-Hybrid-Variante wird der Dynastart den Start-Stopp-Betrieb sowie Rekuperation ermöglichen.",
         "Gerade die Rekuperation der an eidgenössische Orte gefallenen Besitzungen erwies sich trotz einer durchaus bemühten Politik Friedrichs als nicht durchführbar.",
         "„Auch wegen der Rekuperation von Ordensgütern in Italien hatte er vorzusprechen."
      ],
      "name":"Rekuperation",
      "id":487
   },
   {  
      "definition":"Eigenschaft (in einem bestimmmten Zusammenhang) wichtig, bedeutsam zu sein",
      "examples":[  
         "Maßstäbe für eine Rechtfertigung sind die Wahrhaftigkeit, Relevanz und Verständlichkeit des Gesagten.",
         "Ich bezweifle die Relevanz dieses Beitrags für unser Projekt."
      ],
      "name":"Relevanz",
      "id":488
   },
   {  
      "definition":"einem Druck widerstehend; permanent in Opposition (dagegen)",
      "examples":[  
         "Er erwies sich als außerordentlich renitent und ließ sich in keiner Weise beeinflussen.",
         "Er ist aus Prinzip renitent."
      ],
      "name":"renitent",
      "id":489
   },
   {  
      "definition":"einen guten Namen habend, einen guten Ruf habend",
      "examples":[  
         "Damit ist das designierte Führungsteam des renommierten Kulturfestivals nun komplett.",
         "Im 19. Jahrhundert kaufte der russische Adel und die Kaiserfamilie nicht nur in Moskau bei renommierten Juwelieren, sondern in Paris."
      ],
      "name":"renommiert",
      "id":490
   },
   {  
      "definition":"Menge von Objekten, die ein gemeinsames Merkmal besitzen oder derselben Gruppe angehören; Menge von Dramen, Opern, Stücken oder Rollen, die von einem oder mehreren Interpreten jederzeit aufgeführt werden können; Menge der Möglichkeiten, die für die Bewältigung einer Aufgabe zur Verfügung stehen",
      "examples":[  
         "Er hat ein reichhaltiges Repertoire.",
         "Das Orchester spielt neuerdings ein sehr modernes Repertoire.",
         "Zum Repertoire der Betrüger gehören auch überraschende Lotteriegewinne, die eingelöst werden müssen, und Treuhandbetrug (mit Hilfe eigener Treuhänder) bei Online-Auktionshäusern.",
         "„Natürlich umfasst das ganze Repertoire einer umfangreichen Bootsausrüstung mehrere Seiten, die je nach Bootseigner variieren.“"
      ],
      "name":"Repertoire",
      "id":491
   },
   {  
      "definition":"Gegenstände die in Aufführungen benötigt werden.",
      "examples":[  
         "Für die Generalprobe werden alle Requisiten des Stücks benötigt."
      ],
      "name":"Requisite",
      "id":492
   },
   {  
      "definition":"Widerstandsfähigkeit; Widerstandsfähigkeit einfacher Organismen (besonders: Krankheitserreger) gegen bestimmte Substanzen (besonders: Medikamente) und Einflüsse.",
      "examples":[  
         "Viele gram-positive Bakterien haben eine Resistenz gegen Penicillin ausgebildet.",
         "„… Grünzeug essen ansonsten nur Rinder. \u0027Gemüse ist das, was Essen isst\u0027 – in solchen Sätzen manifestiert sich die Mooksche Weltanschauung, die ihre Resistenz gegenüber kulinarischen Gesundheitstrends stolz kultiviert.“"
      ],
      "name":"Resistenz",
      "id":493
   },
   {  
      "definition":"oder auch, anders ausgedrückt",
      "examples":[  
         "Wir suchen eine Bewerberin respektive einen Bewerber mit sicheren Rechtschreibkenntnissen."
      ],
      "name":"respektive",
      "id":494
   },
   {  
      "definition":"bildungssprachlich: gefühlsmäßige Abneigung, Vorbehalt",
      "examples":[  
         "Die Rede strotzte vor Ressentiments.",
         "Mittlerweile hätten die antideutschen Ressentiments die publizistische Sphäre verlassen, sagt Georgios Delastik."
      ],
      "name":"Ressentiment",
      "id":495
   },
   {  
      "definition":"Geschäfts-, Amtsbereich; Arbeits-, Aufgabenbereich",
      "examples":[  
         "Das ist mein Ressort."
      ],
      "name":"Ressort",
      "id":496
   },
   {  
      "definition":"einschränkend, streng, genau, strikt",
      "examples":[  
         "Die Vorschriften werden hier sehr restriktiv gehandhabt."
      ],
      "name":"restriktiv",
      "id":497
   },
   {  
      "definition":"(einer Sache) eine neue Struktur (Ordnung) geben; die alte Struktur durch eine neue ersetzen",
      "examples":[  
         "Der Unternehmensberater möchte die gesamte Abteilung restrukturieren."
      ],
      "name":"restrukturieren",
      "id":498
   },
   {  
      "definition":"meist am Ende eines Textes stehende, inhaltliche Zusammenfassung mit eigener Wertung und/oder Schlussfolgerungen",
      "examples":[  
         "Wladimir zieht ein Resümee seiner Amtszeit."
      ],
      "name":"Resümee",
      "id":499
   },
   {  
      "definition":"bildungssprachlich: in der Rückschau",
      "examples":[  
         "Retrospektiv beurteile ich die ersten Semester meines Studiums als die besten."
      ],
      "name":"retrospektiv",
      "id":500
   },
   {  
      "definition":"Erfolg haben",
      "examples":[  
         "Er reüssierte mit seinem zweiten Soloalbum.",
         "„Der Hinge-Faktor ist ein weiterer Grund, warum manche reüssieren und andere scheitern.“",
         "„Unsere Fischerei reüssierte mehr und mehr.“["
      ],
      "name":"reüssieren",
      "id":501
   },
   {  
      "definition":"sich für etwas rächen; sich für etwas erkenntlich zeigen",
      "examples":[  
         "Für diese Unverschämtheit wollte er sich unbedingt revanchieren.",
         "Wie soll ich mich für deine Hilfe jemals angemessen revanchieren."
      ],
      "name":"revanchieren",
      "id":502
   },
   {  
      "definition":"etwas auf seine Richtigkeit überprüfen, etwas Falsches verbessern",
      "examples":[  
         "„Sämtliche Rechnungen sind von mir eingehend revidiert.“",
         "Die Daten waren falsch und mussten revidiert werden."
      ],
      "name":"revidieren",
      "id":503
   },
   {  
      "definition":"Überprüfung von Gegenständen, Zuständen oder Prozessen; Änderung nach gründlicher Prüfung",
      "examples":[  
         "Die Abrechnungen der Krankenkassen werden von der Rezeptprüfstelle einer Revision unterzogen.",
         "Nach der Revision des Vertrages wurde er unterschrieben."
      ],
      "name":"Revision",
      "id":504
   },
   {  
      "definition":"kritische Besprechung eines Werkes (eines Buches, einer künstlerischen Darbietung oder einer wissenschaftlichen Arbeit)",
      "examples":[  
         "Die Rezension zu dem neuen Grass hat mir nicht zugesagt.",
         "Am Anfang, als Assistent und Privatdozent, hatte er auf jeden Sonderdruck mit einem Brief reagiert, der oft die Länge einer Rezension hatte.“",
         "Mit dieser einen Rezension vernichtete er das Buch"
      ],
      "name":"Rezension",
      "id":505
   },
   {  
      "definition":"fachsprachlich: wechselseitig, in Wechselbeziehung stehend, gegenseitig",
      "examples":[  
         "Reziproke Pronomen werden benutzt, um eine wechselseitige Beziehung auszudücken. Die reziproken Pronomen im Englischen sind: \neach other - einander, sich (gegenseitig) \none another - einander, sich (gegenseitig)"
      ],
      "name":"reziprok",
      "id":506
   },
   {  
      "definition":"einen Text auswendig aufsagen; ein literarisches Werk künstlerisch ausdrucksvoll vortragen",
      "examples":[  
         "Gleichzeitig rezitieren verschiedene Stimmen Texte aus verschiedenen Quellen, und das Orchester spielt Zitate von Claude Debussy, Arnold Schönberg und anderen.“"
      ],
      "name":"rezitieren",
      "id":507
   },
   {  
      "definition":"auf die Fähigkeit zu reden bezogen",
      "examples":[  
         "Er hat sich mit seinen rhetorischen Mitteln gut aus der Affaire gezogen.",
         "Die Klimax ist ein rhetorisches Mittel, um Zuhörer zu beeinflussen.",
         "„Nach der rhetorischen Glanzleistung des Präsidenten folgte ein Schwall blecherner patriotischer Phrasen.“"
      ],
      "name":"rhetorisch",
      "id":508
   },
   {  
      "definition":"steif, streng, starr",
      "examples":[  
         "Er glaubte mal wieder, rigide durchgreifen zu müssen."
      ],
      "name":"rigide",
      "id":509
   },
   {  
      "definition":"gehoben: streng vorgehend, ohne Rücksicht zu nehmen",
      "examples":[  
         "Er fiel durch rigoroses Vorgehen in seinem Verhalten auf.",
         "Der Provider geht rigoros gegen Versender von SPAM vor.",
         "Die Flüchtlinge wurden rigoros abgeschoben.",
         "Es muss rigoros gespart werden."
      ],
      "name":"rigoros",
      "id":510
   },
   {  
      "definition":"in Ansätzen; im Laufe der Evolution verkümmert oder unvollständig entwickelt",
      "examples":[  
         "Das sind bloß rudimentäre Überlegungen zu einem Thema",
         "Wenn sich Personalchefs auf eine rudimentäre Suche von fünf Minuten pro Bewerber beschränkten, fänden sie nicht, was sie suchen.",
         "Unser Steißbein ist ein rudimentärer Schwanz."
      ],
      "name":"rudimentär",
      "id":511
   },
   {  
      "definition":"Vergehen gegen Heiliges, zum Beispiel die Entweihung heiligen Bodens oder Sachen durch Raub, Schändung oder auch Missbrauch, aber auch Angriffe gegen geweihte Personen",
      "examples":[  
         "Das ist ein Sakrileg!",
         " „Und diese Empfindung war, paradoxerweise, durchsetzt mit einer Gleichgültigkeit, die einem Sakrileg gleichkam, weil sie die gesamte akademische Welt in Frage stellte.“",
         "„Wer ihre experimentierende Verwendung als Sakrileg kritisiert, übersieht, dass sie selbst Sakrilegien ihre Existenz verdankten […].“",
         "„Theokratie, von Gott eingesetzte Gewalt, das Sakrileg aller Sakrilegien.“"
      ],
      "name":"Sakrileg",
      "id":512
   },
   {  
      "definition":"unantastbar, unverletzlich; für jemanden persönlich sehr wichtig, heilig",
      "examples":[  
         "Das Beichtgeheimnis ist sakrosankt.",
         "Besonders für eines dieser Stichworte kann er den sakrosankten Platz eines Säulenheiligen für sich reklamieren."
      ],
      "name":"sakrosankt",
      "id":513
   },
   {  
      "definition":"sozialer Bedeutungsverlust von Religion; Auflösung geistlicher Herrschaften",
      "examples":[  
         "Er und Frei sprachen von einer \"Säkularisierung der Sozialarbeit\".",
         "„Der Schwerpunkt der Revisionsausführungen liegt in der Frage, ob und inwieweit die Säkularisierung der Besitztümer und Rechte des Hochstiftes Passau durch Joseph II. die Fischereirechte der Kläger berühren konnten.“"
      ],
      "name":"Säkularisierung",
      "id":514
   },
   {  
      "definition":"das Wiederherstellen eines geordneten Zustandes; Erneuerung eines Gebäudes oder Bauwerks; das Wiederherstellen der wirtschaftlichen Leistungsfähigkeit eines Betriebes",
      "examples":[  
         "Der Erfolg der Sanierung [des Erdbodens] muss mit geeigneten Messverfahren nachgewiesen werden, evtl. mit wiederkehrenden Messungen (z. B. die dauerhafte Wirksamkeit der Sicherung).",
         "Geld braucht Tschechien für die Sanierung seines teils maroden Straßennetzes dringend.",
         "Deshalb ist eine Sanierung mit dem denkmalpflegerischen Erhaltungsanspruch schwer vereinbar.",
         "Es fehle aber ein Konzept für eine »nachhaltige Sanierung des Bankensystems«. Welche Folgen das haben kann, zeigt Japan."
      ],
      "name":"Sanierung",
      "id":515
   },
   {  
      "definition":"einzelnes künstlerisches Werk, das von der satirischen Schreibweise Gebrauch macht oder der Gattung angehört",
      "examples":[  
         "„Der Satiriker hingegen kämpft oft einen verzweifelten Kampf, bei dem ungewiß bleibt, ob sich das Objekt der Satire überhaupt beeinflussen läßt.“"
      ],
      "name":"Satire",
      "id":516
   },
   {  
      "definition":"jemanden schimpflich entlassen",
      "examples":[  
         "Der Manager wurde vom Vorstand geschasst."
      ],
      "name":"schassen",
      "id":517
   },
   {  
      "definition":"(verabredetes) Zeichen, das zur Erkennung von jemandem oder etwas dienen soll; einzelnes Wort als Losung; charakteristisches, unterscheidendes Zeichen, an dem eine Person/Personengruppe oder Sache (deutlich) zu erkennen ist",
      "examples":[  
         "Er lebt nach der Maxime »wo immer ein Wesen meiner Art sich mir nähert, erkenne ich dasselbe Prinzip in ihm, dieselbe Natur; und die (erkannte) Vernunftsympathie (und keine bloß gefühlte) sei das Schibboleth, an dem sich Menschen und Menschen unter den übrigen Naturwesen suchen, finden, erkennen, vereinen und lieben«.",
         "„Der Chartismus war allerdings von seinem Anfange 1835 an hauptsächlich eine Bewegung unter den Arbeitern, aber noch nicht scharf von der radikalen kleinen Bourgeoisie getrennt. Der Arbeiterradikalismus ging Hand in Hand mit dem Radikalismus der Bourgeoisie; die Charte war das Schibboleth beider, sie hatten ihre ‚Nationalkonvente‘ jedes Jahr zusammen, es schien eine Partei zu sein.“"
      ],
      "name":"Schibboleth",
      "id":518
   },
   {  
      "definition":"mit verachtenden Worten beleidigen",
      "examples":[  
         "Harald Schmidt darf Klinsmann nicht mehr schmähen.“",
         "„Erst werden die Menschen unters Joch gezwungen und dann als knechtisch verachtet, unterdrückt und dann von oben herab behandelt, verdummt und ihrer Dummheit wegen verhöhnt, versklavt und als Sklaven geschmäht.“"
      ],
      "name":"schmähen",
      "id":519
   },
   {  
      "definition":"mit Medikamenten ruhigstellen",
      "examples":[  
         "Man musste die Patientin zuerst sedieren, bevor man ihre Wunden versorgen konnte.",
         "Die Angst vor Verstößen gegen das restriktive deutsche Betäubungsmittelgesetz und damit die Furcht, jemanden versehentlich zum Sterben zu sedieren, scheint zu weichen."
      ],
      "name":"sedieren",
      "id":520
   },
   {  
      "definition":"die Lehre von der Bedeutung von einfachen und komplexen sprachlichen Zeichen, also Morphemen, Wörtern, Sätzen und so weiter",
      "examples":[  
         "Unter Semantik werden in der Linguistik unterschiedliche Ansätze verstanden.",
         "„Von diesem Bedeutungsgehalt, mit dem sich die Semantik beschäftigt, wollen wir in unserer Untersuchung zunächst einmal absehen.“",
         "Die Semantik dieses Wortes ist noch unklar."
      ],
      "name":"Semantik",
      "id":521
   },
   {  
      "definition":"leicht zu beschädigen; empfindlich auf emotionaler und geistiger Ebene",
      "examples":[  
         "Diese Stelle des menschlichen Körpers ist äußerst sensibel.",
         "Dies ist eine sensible Apparatur.",
         "Pass auf was du sagst, er ist sehr sensibel.",
         "Die Politik müsse in der Islam-Debatte sensibel argumentieren, sagte [der Religionssoziologe der Uni Münster Detlef] Pollack: „Jedes Wort, das nicht sorgfältig abgewogen ist, kann die Konflikte verschärfen.“"
      ],
      "name":"sensibel",
      "id":522
   },
   {  
      "definition":"getrennt voneinander, getrennt von etwas",
      "examples":[  
         "Frauen und Männer beten in separaten Räumen.",
         "Die Einliegerwohnung hat einen separaten Zugang."
      ],
      "name":"separat",
      "id":523
   },
   {  
      "definition":"jemand oder etwas aus seinen Bezügen herauslösen; fachsprachlich: Stoffe, oftmals mit Hilfe eines Separators, voneinander trennen",
      "examples":[  
         "Beim Sport werden Jungen und Mädchen separiert und in eigenen Gruppen unterrichtet.",
         "Stoffgemische können technisch separiert werden."
      ],
      "name":"separieren",
      "id":524
   },
   {  
      "definition":"Absonderung beziehungsweise Verselbstständigung von Staatsteilen",
      "examples":[  
         "„Von einer Beendigung der Sezession Katangas mit militärischen Mitteln ist nicht die Rede.“"
      ],
      "name":"Sezession",
      "id":525
   },
   {  
      "definition":"Arbeit, die nie vollendet werden kann; die immer wieder von vorne begonnen werden muss",
      "examples":[  
         "„Alle tragen sie bunte Saris und halten in ihren Hütten die gleiche penible Sauberkeit. Dabei ist das Saubermachen im Slum eine Sisyphusarbeit.“"
      ],
      "name":"Sisyphusarbeit",
      "id":526
   },
   {  
      "definition":"in bestimmten wirtschaftlichen Verhältnissen lebend; in einer bestimmten Lebensstellung befindlich",
      "examples":[  
         "Grethe ist hier zwar (uneheliche) Mutter eines Fräuleins, das, weil von Mama im Stich gelassen, durch reiche Adoptiveltern gut situiert wurde.",
         "Selbst wenn die Eltern gut situiert sind und das Studium mitfinanzieren, haben fast alle Studenten mindestens Nebenjobs und können sich ganz sicher keine 3-Zimmer-Wohnung in einer Innenstadt leisten."
      ],
      "name":"situiert",
      "id":527
   },
   {  
      "definition":"mit starker Betonung der Hebungen lesen und sprechen",
      "examples":[  
         "„Teile der Ansprache werden leider von den zehn Mitgliedern des Damenkegelclubs \u0027He wackelt\u0027 übertönt, die nach dem hastigen Genuss von anderthalb Flaschen Eckes Kirschlikör mit rotglühenden Gesichtern \u0027Ausziehen, Ausziehen!\u0027 skandieren.“"
      ],
      "name":"skandieren",
      "id":528
   },
   {  
      "definition":"Zweifel, kritische, misstrauische Haltung",
      "examples":[  
         "Bei vielen auf den ersten Blick verlockenden Angeboten ist Skepsis angebracht.",
         "Fridolin ist ein Mann von gesunder Skepsis.",
         "Man kann es mit seiner Skepsis auch übertreiben."
      ],
      "name":"Skepsis",
      "id":529
   },
   {  
      "definition":" ist eine Stilrichtung hauptsächlich im Design, bei der Objekte in ihrer Gestaltung ein anderes Material oder eine Form eines älteren, vertrauten Gegenstandes nachahmen, ohne dass diese durch ihre Funktion begründet ist.",
      "examples":[  

      ],
      "name":"Skeuomorphismus",
      "id":530
   },
   {  
      "definition":"in Bezug auf das Aussehen: gepflegt, seriös",
      "examples":[  
         "Er ist eine soignierte Erscheinung."
      ],
      "name":"soigniert",
      "id":531
   },
   {  
      "definition":"bezogen auf Staaten, Regierungen: unabhängig sein, innehabend, ausführend; gehoben: im Auftreten sicher, überlegen, erhaben",
      "examples":[  
         "„Man könnte Somaliland ‚souverän‘ nennen, doch international ist es das nicht, und die aus eigener Kraft erreichten Erfolge finden wenig Anerkennung.“",
         "„Tabori inszeniert ein Lächeln. ‚Sau‘ und ‚Tyrann‘, das ist, leicht zu spüren, nicht vergessen – darüber darf keine souveräne Geste hinwegtäuschen, da hilft kein ungarischer Charme, keine danubische Ironie.“"
      ],
      "name":"souverän",
      "id":532
   },
   {  
      "definition":"selbstsichere Haltung einer Person gegenüber anderen; von anderen Staaten unabhängige Selbstständigkeit eines Staates in seinem eigenen Gebiet",
      "examples":[  
         "Ihr Auftreten war von überzeugender Souveränität geprägt.",
         "Die Kolonien erhielten nach und nach fast alle ihre Souveränität.",
         "Die Souveränität des Regimes ist noch ungebrochen."
      ],
      "name":"Souveränität",
      "id":533
   },
   {  
      "definition":"auf das Notwendigste reduziert, in der Art einer genügsamen Lebensweise",
      "examples":[  
         "Sein Schlafzimmer war sehr spartanisch eingerichtet. Nur ein Bett, ein Nachtschränkchen, eine Lampe."
      ],
      "name":"spartanisch",
      "id":534
   },
   {  
      "definition":"eine Schlussfolgerung über etwas ohne gesicherte Erkenntnis;  eine Erwartung, dass ein bestimmtes Ereignis oder ein Zustand in der Zukunft eintritt, ohne dafür eine ausreichende Basis zu haben",
      "examples":[  
         "Alles ist pure Spekulation.",
         "„Interviewpartner grenzen sich bei Spekulationen auch gerne vom Frager ab, indem sie sich als »seriös« titulieren.“",
         "Die zukünftige Klimaentwicklung ist anscheinend nicht nur pure Spekulation."
      ],
      "name":"Spekulation",
      "id":535
   },
   {  
      "definition":"sich aus den Eigenschaften einer Sache oder Person ergebend",
      "examples":[  
         " Ein spezifisch deutsches Indianerbild entspringt der intensiven Beschäftigung mit Kulturen und Schicksalen der nordamerikanischen Ureinwohner im deutschen Sprachraum, in Publikationen und Medien."
      ],
      "name":"spezifisch",
      "id":536
   },
   {  
      "definition":"vereinzelt vorkommend, (nur) gelegentlich, relativ zerstreut, verstreut, relativ in unregelmäßigen Abständen wiederkehrend",
      "examples":[  
         "Da die Fehler jetzt nur noch sporadisch auftraten, waren sie mit ihrer Arbeit zufrieden.",
         "Im Park gab es nur sporadisch Abfalleimer, weshalb es an Wochenenden immer aussah wie auf einer Müllkippe.",
         "Die Zugriffsstatistiken für die Homepage werden nur sporadisch ausgewertet."
      ],
      "name":"sporadisch",
      "id":537
   },
   {  
      "definition":"Gewässer: nicht fließen, nicht zirkulieren; auf gleichem Niveau bleiben; nicht weiterentwickeln",
      "examples":[  
         "Die Verkaufszahlen stagnieren auf hohem Niveau."
      ],
      "name":"stagnieren",
      "id":538
   },
   {  
      "definition":"Marketing, Projektmanagement, Wirtschaft: Personen oder Personengruppe, welche ein Projekt positiv oder negativ beeinflussen können oder Interesse am Projekt aufweisen oder aufweisen könnten",
      "examples":[  
         "Bei einem Bauprojekt ist der Kunde der größte Stakeholder."
      ],
      "name":"Stakeholder",
      "id":539
   },
   {  
      "definition":"der derzeitige Zustand",
      "examples":[  
         "Ich befürworte den Status quo.",
         "Wir befinden uns wirtschaftlich in einem labilen Status quo.",
         "„So bleibt der Status quo lange Zeit erhalten.“"
      ],
      "name":"Status quo",
      "id":540
   },
   {  
      "definition":"die Stoa oder den Stoizismus betreffend; übertragen: unerschütterlich, gleichmütig",
      "examples":[  
         " „Die Kyniker waren von großer Bedeutung für die stoische Philosophie, die um das Jahr 300 v. Chr. in Athen aufkam.“",
         "Sie tritt meist stoisch auf."
      ],
      "name":"stoisch",
      "id":541
   },
   {  
      "definition":"ein Prozess, in dessen Verlauf innerhalb einer Gesellschaft bestimmte äußere Merkmale von Personen und Gruppen, zum Beispiel farbige Haut oder eine sichtbare Behinderung, mit negativen Bewertungen belegt und die Betroffenen, als \"die Farbigen\", oder \"die Körperbehinderten\" in eine Randgruppenposition gedrängt werden",
      "examples":[  

      ],
      "name":"Stigmatisierung",
      "id":542
   },
   {  
      "definition":"streng an Regeln haltend, ohne Abweichung genau nach Plan; schlüssig, nachvollziehbar, durchgehend, lückenlos, zwingend (bei Argumenten)",
      "examples":[  
         "Der Plan wurde ganz stringent verfolgt.",
         "Er formulierte eine stringente Argumentation."
      ],
      "name":"stringent",
      "id":543
   },
   {  
      "definition":"mit beschränkten Entscheidungsbefugnissen versehen; geistig abhängig oder auch unselbstständig; untergeordnet, unterwürfig",
      "examples":[  
         "Mit subalternen Beamten zu verhandeln, nützt hier gar nichts."
      ],
      "name":"subaltern",
      "id":544
   },
   {  
      "definition":"Hilfe leistend; (besonders Recht): als Behelf dienend",
      "examples":[  
         "Der Staat agiert subsidiär, einzelne Entscheidungen liegen in der Hand der untergeordneten Stellen.",
         "Für den Lebensbedarf des Kindes stehen subsidiäre Sozialleistungen zur Verfügung."
      ],
      "name":"subsidiär",
      "id":545
   },
   {  
      "definition":"zart, fein; detailliert, in die Feinheiten gehend; spitzfindig, scharfsinnig; unterschwellig",
      "examples":[  
         "Diese subtilen Zeichnungen erschließen sich erst bei genauerem Hinsehen.",
         "Er kommt nie über Redensarten hinaus, und ein etwas subtileres Denken wäre ihm zu wünschen.",
         "Eine pampige Behauptung siegt oft über eine subtile Begründung.",
         " \"Ich meine, wir sind besser in einigen Belangen… Wir sind subtiler… Benutzen mehr Worte und rechtliche Kniffe, um alles zu legitimieren."
      ],
      "name":"subtil",
      "id":546
   },
   {  
      "definition":"verborgen gehaltene, auf Umsturz gerichtete Aktivität",
      "examples":[  
         "Durch Subversion kann die Stabilität eines Staates gefährdet werden.",
         "Die Gruppe führte lange Zeit subversive Aktivitäten durch."
      ],
      "name":"subversiv",
      "id":547
   },
   {  
      "definition":"selbstgefällig, genüsslich überlegene Distanz zeigend, ein Gefühl von meist geistiger Überlegenheit zur Schau tragend, spöttisch-überheblich",
      "examples":[  
         "Er hatte so einen merkwürdig süffisanten Ton bei seiner Ansprache."
      ],
      "name":"süffisant",
      "id":548
   },
   {  
      "definition":"jemandem etwas suggerieren: etwas unterschwellig andeuten; jemanden dazu bringen oder den Versuch dazu machen, dass er etwas bemerkt, zur Kenntnis nimmt oder für wahr hält, ohne es dazu offen anzusprechen",
      "examples":[  
         "Er hat mir fein suggeriert, meine Schwester stecke hinter der Intrige, aber ich glaube ihm nicht.",
         "Gesagt hat man mir nicht, dass ich störe, aber suggeriert schon.",
         "Die Art der Fragestellung suggeriert schon die Antwort.",
         "Man hat es ihm deutlich genug suggeriert, er hat aber nicht verstanden."
      ],
      "name":"suggerieren",
      "id":549
   },
   {  
      "definition":"kontinuierlich, Schritt für Schritt ablaufend, schrittweise, sequentiell, allmählich, aufeinander folgend, schleichend",
      "examples":[  
         "Das Heranwachsen eines biologischen Organismus ist ein sukzessiver Prozess."
      ],
      "name":"sukzessiv",
      "id":550
   },
   {  
      "definition":"nicht vollwertiger Ersatzstoff, beispielsweise Malz oder Zichorie als Ersatz für „echten” Kaffee; Recht: das an Stelle einer Sache bei Verlust, Veräußerung oder Zerstörung Erlangte",
      "examples":[  
         "Mit bestimmten Surrogaten lässt sich koffeinfreier Ersatzkaffee brauen.",
         "Ein Surrogat schafft einen äquivalenten Ersatz, damit ist die Geldleistung der Vollkaskoversicherung Surrogat für das zerstörte Kraftfahrzeug."
      ],
      "name":"Surrogat",
      "id":551
   },
   {  
      "definition":"so geartet, dass Zweifel an der Echtheit, Nützlichkeit oder Qualität aufkommen",
      "examples":[  
         "Der Laden ist mir suspekt, da würde ich niemals einkaufen.",
         "„Der Kläger habe, da ihm dieser Vertrag mehr als suspekt erschienen sei, von den Beklagten wiederholt die Einsichtnahme in das Original verlangt, was ihm, wohl aus gutem Grunde, bisher immer verweigert worden sei.“"
      ],
      "name":"suspekt",
      "id":552
   },
   {  
      "definition":"allgemein: etwas, das auf etwas anderes schließen lässt; Anzeichen einer bereits vorhandenen oder sich anbahnenden Krankheit",
      "examples":[  
         "Man kann den Verlauf der Börsenkurse als Symptom für den Zustand der Finanzmärkte interpretieren.",
         "Du hast den ersten Symptomen einer Erkältung kei ne Beachtung geschenkt. Nun hat es dich richtig erwischt!"
      ],
      "name":"Symptom",
      "id":553
   },
   {  
      "definition":"die Gesamtheit aller Symptome einer Erkrankung; eine Gruppe von Merkmalen oder Faktoren, deren gemeinsames Auftreten einen bestimmten Zusammenhang oder Zustand anzeigt",
      "examples":[  
         "AIDS ist ein Syndrom, das heißt, es ist eine spezifische Kombination einer Reihe von Symptomen eines angegriffenen Immunsystems.",
         " „Dieses typische Syndrom bei den Nachkriegsgenerationen in Europa, Nord- und Südamerika ist ein besonderer Ausdruck eines \"Hamlet-Problems\".“",
         "Das Bambi-Syndrom bezeichnet eine Einstellung von Menschen zur Natur, bei der diese moralisiert und infantilisiert wird. Kennzeichnend für das Bambi-Syndrom ist eine Polarisierung dahingehend, dass die Natur generell gut und alles menschengemachte wie Technik, Zivilisation schlecht ist.“"
      ],
      "name":"Syndrom",
      "id":554
   },
   {  
      "definition":"ein Wort, das in einem bestimmten Zusammenhang die gleiche Bedeutung hat wie die eines anderen Wortes, gleichbedeutendes (neuzeitlich auch sinnverwandtes) Wort",
      "examples":[  
         "„Apfelsine“ ist ein Synonym für „Orange“, und „Kunde“ ist eines für „Auftraggeber“.",
         "Der Begriff Synonym wird bisweilen auch auf Wörter angewendet, die nicht in einem strengen Sinn die gleiche, sondern lediglich eine (sehr) ähnliche Bedeutung haben."
      ],
      "name":"Synonym",
      "id":555
   },
   {  
      "definition":"Bild, Gemälde; wirkungsvoll gruppierte Darsteller auf der Bühne.",
      "examples":[  

      ],
      "name":"Tableau",
      "id":556
   },
   {  
      "definition":"bildungssprachlich: reinen Tisch machen; energisch, rücksichtslos und unbeirrt Ordnung, klare Verhältnisse schaffen oder Klarheit herbeiführen",
      "examples":[  
         "Aus Furcht vor Inflation flüchten Sparer aus Geldwerten und machen Tabula rasa bei Lebensversicherungen und Sparplänen.",
         "Er halte aber nichts davon, dass Ratingagenturen \"tabula rasa nach dem Rasenmäherprinzip\" machen, kritisiert Mostböck",
         "Im Gegenteil: Selbst Norbert Blüm fühlte sich veranlaßt, vor \"neuen sozialpolitischen Rambos, die glauben, sie können Tabula rasa machen\", zu warnen."
      ],
      "name":"Tabula rasa",
      "id":557
   },
   {  
      "definition":"umgangssprachlich: (jemandem gegenüber) ganz offen und freimütig seine Meinung äußern",
      "examples":[  
         "Endlich jemand, der Tacheles redet und anderen klarmacht, was Menschenrechte sind.",
         "„Endlich redet mal jemand Tacheles.“"
      ],
      "name":"Tacheles",
      "id":558
   },
   {  
      "definition":"das Tasten, den Tastsinn betreffend",
      "examples":[  
         "Die taktilen Fähigkeiten sind nur ungenügend ausgeprägt.",
         "Die Funktion des taktil-protopathischen Systems ist die Nutzung taktiler Informationen für das Wohlbefinden im eigenen Körper.",
         " Die Schmerzempfindung bei taktiler Hypersensibilität/Überempfindlichkeit ist paradox."
      ],
      "name":"taktil",
      "id":559
   },
   {  
      "definition":"berührbar, greifbar",
      "examples":[  
         "Aber ebenso wenig wie die „historische sache\" (vermöge ihrer absenz) tatsächlich tangibel ist, erscheint es als ausgemachte sache, dass sich der historische diskurs eindeutig langage oder langue zuordnen lasse."
      ],
      "name":"tangibel",
      "id":560
   },
   {  
      "definition":"(am Rande, oberflächlich) angehen, berühren, betreffen im übertragenen Sinn, es kümmert einen",
      "examples":[  
         "Diese Sache tangiert mich nicht.",
         "„Er trank gern und teilte sich gern mit, es ging etwas gewalttätig an seinem Tisch zu, mit plötzlichen Ausbrüchen und Beschimpfungen, die ihn nicht tangierten.“"
      ],
      "name":"tangieren",
      "id":561
   },
   {  
      "definition":"Bespannung, Überzug eines Konferenztisches; nur noch in Wendungen: etwas aufs Tapet bringen, aufs Tapet kommen: (ugs.) etwas zur Sprache bringen, zur Sprache kommen",
      "examples":[  
         "Das hätte heute nicht auch noch aufs Tapet kommen müssen.",
         "„Kaum kam der Bruder aufs Tapet, verschlossen sich die Ohren.“",
         "„Irgendwie wurde das Thema nie aufs Tapet gebracht.“"
      ],
      "name":"Tapet",
      "id":562
   },
   {  
      "definition":"Die Technokratie ist eine Form der Regierung oder Verwaltung, in der alle Handlungen auf wissenschaftlichem und technischem Wissen aufbauen sollen.",
      "examples":[  

      ],
      "name":"technokratisch",
      "id":563
   },
   {  
      "definition":"zeitlich begrenzt",
      "examples":[  
         "„Temporäre Großereignisse wie Bundesgartenschauen (BUGA) können die Entwicklung einer Stadt in hohem Maße vorantreiben.“"
      ],
      "name":"temporär",
      "id":564
   },
   {  
      "definition":"meist abwertend: einer Tendenz folgend; etwas bezweckend, beabsichtigend",
      "examples":[  
         "Diese Abhandlung ist tendenziös, weil ein politisch voreingenommener Journalist seine eigene Tendenz (seine subjektive Meinung) zu erkennen gibt.",
         "Dieser Fernsehkommentar ist politisch gefärbt und deshalb tendenziös."
      ],
      "name":"tendenziös",
      "id":565
   },
   {  
      "definition":"Wort der Fachsprache eines (wissenschaftlichen) Sachgebietes",
      "examples":[  
         "„Termini sind im Rahmen einer Theorie begrifflich definierte Fachwörter.“",
         "„Seit Mitte des vorigen Jahrhunderts nehmen dabei umfangreiche Mehrfachkomposita überhand, mit denen versucht wird, die Nomination als Kurzbeschreibung des Denotats einzusetzen und Selbstdeutigkeit der Termini zu erreichen.“"
      ],
      "name":"Terminus",
      "id":566
   },
   {  
      "definition":"bezeichnet die konkrete Fürsprache für ein Produkt, eine Dienstleistung, eine Idee oder Institution durch eine Person, die der Zielgruppe meist bekannt ist und mit ihrem Auftritt die Glaubwürdigkeit der Werbebotschaft erhöht.",
      "examples":[  

      ],
      "name":"Testimonial",
      "id":567
   },
   {  
      "definition":"Gespräch unter vier Augen, intime Verabredung (wörtlich: „Kopf-an-Kopf“), Treffen von zwei Personen",
      "examples":[  
         "Sie verabredete sich zu einem Tête-à-tête mit dem attraktiven Kollegen."
      ],
      "name":"tête-à-tête",
      "id":568
   },
   {  
      "definition":"fachsprachlich (Philosophie, Theologie): der Versuch einer Rechtfertigung eines allmächtigen, allgütigen und allwissenden Gottes angesichts allen Übels und Leidens in der Welt",
      "examples":[  
         "Einige Rabbiner argumentieren nicht rein religiös, wenn es um die sogenannte Theodizee-Frage geht, um die Frage nach Gottes Rolle bei all dem Übel in der Welt.",
         " „Zur Debatte stand die Theodizee, das Problem der Rechtfertigung eines allmächtigen, allwissenden und gütigen Gottes angesichts der Existenz des Leidens und des Bösen in einer offensichtlich unvollkommenen Welt.“"
      ],
      "name":"Theodizee",
      "id":569
   },
   {  
      "definition":"eine einsprachige, meist umfangreiche und nach Themen sortierte Wörtersammlung mit Vokabular, dessen Begriffe durch Relationen miteinander verbunden sind",
      "examples":[  
         "Als Thesaurus werden Wörterbücher bezeichnet, mit denen versucht wird, den gesamten Wortschatz einer Sprache, einer Epoche oder eines Autors darzustellen.",
         "Ein Thesaurus einer Sprache ordnet deren Wörter nach Themen und Wortfeldern, dient vor allem zum Auffinden besser passender Wörter beim Schreiben und enthält dafür in der Regel einen alphabetischen Index."
      ],
      "name":"Thesaurus",
      "id":570
   },
   {  
      "definition":"eine flüssige Arznei, die man auf eine Körperstelle reibt; dünnflüssiger Auszug aus pflanzlichen oder tierischen Grundstoffen, der mit Äther, Spiritus aethereus, Azeton, Wasser oder Weingeist hergestellt wurde",
      "examples":[  
         "Auch in der Medizin werden die verschiedensten Tinkturen verwendet."
      ],
      "name":"Tinktur",
      "id":571
   },
   {  
      "definition":"anhaltender Redeschwall",
      "examples":[  
         "Er war froh, den Tiraden seiner Ehefrau entkommen zu sein.",
         "„Er konnte mich mit seinen Tobsuchtsanfällen und Tiraden nicht aus der Ruhe bringen,…“"
      ],
      "name":"Tirade",
      "id":572
   },
   {  
      "definition":"die lautgetreue Übertragung von gesprochener Sprache, Gesprächen oder Gebärden in eine schriftlich fixierte Form (beispielsweise Lautschrift)",
      "examples":[  
         "Die Wortform „transkribieren“ kann man, wie oben gezeigt, phonetisch (lautlich) in der Form [tʀanskʀiˈbiːʀən] transkribieren.",
         "„Das Manuskript mußte natürlich entziffert, transkribiert und übersetzt werden.“"
      ],
      "name":"transkribieren",
      "id":573
   },
   {  
      "definition":"die Einflussnahme einer Kultur auf andere Kulturen",
      "examples":[  
         "Hellenisierung zur Zeit des Hellenismus (antikes Griechenland)",
         "Romanisierung zur Zeit des Römischen Reiches",
         "Christianisierung, vor allem während der europäischen Expansion"
      ],
      "name":"Transkulturation",
      "id":574
   },
   {  
      "definition":"schwitzen; Feuchtigkeit abgeben.",
      "examples":[  
         "stark transpirieren",
         "Die Pflanzen transpirieren über die Blätter."
      ],
      "name":"transpirieren",
      "id":575
   },
   {  
      "definition":"die Bildung von Gemeinschaften auf der Grundlage gemeinsamer kultureller Wurzeln und Merkmale oder politischer und religiöser Interessen",
      "examples":[  

      ],
      "name":"Tribalisierung",
      "id":576
   },
   {  
      "definition":"etwas, das ohne weitere Erklärungen und Begriffe verstanden werden kann",
      "examples":[  
         "Dieser Beweisschritt ist trivial; deshalb werde ich ihn nicht näher erläutern.",
         "Dass man bei Regen nass wird, ist trivial."
      ],
      "name":"trivial",
      "id":577
   },
   {  
      "definition":"Der Tropus (auch die Trope, Plural Tropen) Oberbegriff für Stilmittel, bei denen das Gesagte vom Gemeinten abweicht. Die Trope ist somit eine Figur, die das Gemeinte (bspw. Kamel) nicht direkt mit dem eigentlichen Wort benennt, sondern einen ausschmückenden Begriff wählt (bspw. Wüstenschiff), um so die Sprache zu schmücken, lebendiger erscheinen zu lassen oder anschaulicher zu gestalten.",
      "examples":[  

      ],
      "name":"Trope",
      "id":578
   },
   {  
      "definition":"die Kunst des Druckens; Wissenschaft und Lehre vom reproduzierbaren Schriftbild; die konkrete Gestaltung eines Druckerzeugnisses",
      "examples":[  
         "Ein Webdesigner setzt sein Wissen über Typografie, Bildsprache und Farbgestaltung, ein, um einen Webauftritt benutzerfreundlich und lesbar zu machen."
      ],
      "name":"Typografie",
      "id":579
   },
   {  
      "definition":"fachsprachliche Bezeichnung von Typ",
      "examples":[  
         "„Bereits seit Mitte der 1970er Jahre haben die politischen Eliten sich neu organisiert, wer an den Hochschulen in Leitungspositionen und in der Politik gestalten durfte, waren weniger Künstler noch Intellektuelle, der pragmatische, karriere-orientierte Typus war gefragt und bereits da setzte bei den souveränen Denkern ein Entmutigungsprozess ein.“"
      ],
      "name":"Typus",
      "id":580
   },
   {  
      "definition":"allgegenwärtig, überall verbreitet",
      "examples":[  
         "„Meine Tante hingegen setzt die ubiquitäre Existenz des Internets und aller in ihm enthaltenen Wunder als gegeben voraus.“",
         "„Tabus sind unhinterfragt, strikt, bedingungslos, sie sind universell und ubiquitär, sie sind mithin Bestandteil einer funktionierenden menschlichen Gesellschaft.“"
      ],
      "name":"ubiquitär",
      "id":581
   },
   {  
      "definition":"nicht in klare Worte gefasst",
      "examples":[  
         "Mit unartikuliertem Gebrüll stürzte er sich auf den Gegner, der schon nach dem ersten Schlag wie ein gefällter Baum zu Boden krachte.",
         "Ihre unartikulierte Trauer scheint sie von innen heraus zu verzehren."
      ],
      "name":"unartikuliert",
      "id":582
   },
   {  
      "definition":"einseitig; Politik: nur ein Akteur handelt; In der Politik versteht man darunter das Handeln eines Staates im eigenen Interesse ohne Rücksicht auf die Interessen anderer.",
      "examples":[  
         "Sie gibt sich deutlich verhandlungsbereiter als ihr häufig unilateral handelnder Vorgänger."
      ],
      "name":"unilateral",
      "id":583
   },
   {  
      "definition":"übereinstimmend, im Einklang",
      "examples":[  
         "„Erklärt wird sie mit dem unisono als typisch bezeichneten nachmittäglichen Ritual von ‚Kaffee und Kuchen‘.“"
      ],
      "name":"unisono",
      "id":584
   },
   {  
      "definition":"politisches Ziel, die zentrale Macht eines Staates weiter zu stärken.",
      "examples":[  
         "Der Unitarismus ist besonders in den USA weit verbreitet."
      ],
      "name":"Unitarismus",
      "id":585
   },
   {  
      "definition":"städtisch, zu einer Stadt gehörend; weltläufig, gesittet und höflich",
      "examples":[  
         "Sie näherten sich dem Weichbild der Stadt und die Bebauung wurde immer urbaner.",
         "„Seine urbanen Umgangsformen fielen in dieser lärmenden Gesellschaft angenehm auf.“"
      ],
      "name":"urban",
      "id":586
   },
   {  
      "definition":"etwas durch Gewalt an sich reißen; widerrechtlich (und gewaltsam) Privilegien, Befugnisse oder Besitz aneignen",
      "examples":[  
         "„Nach der Schlacht von Komorn (2. Juli 1849) usurpierte Görgey das Oberkommando der ungarischen Armee gegen den Befehl der ungarischen Regierung, die ihn abgesetzt hatte.“"
      ],
      "name":"usurpieren",
      "id":587
   },
   {  
      "definition":"insbesondere Stellen/Ämter und so weiter: verfügbar, frei, offen",
      "examples":[  
         "In unserer Abteilung gibt es drei vakante Stellen."
      ],
      "name":"vakant",
      "id":588
   },
   {  
      "definition":"etwas auf Gültigkeit prüfen, die Richtigkeit einer Methode beispielhaft testen, die Eignung einer Methode für einen bestimmten Zweck feststellen",
      "examples":[  
         "Das Programm ist validiert worden, es durchläuft alle Tests fehlerfrei.",
         "Das Produkt ist für die geplante Anwendung validiert worden: Der vom Kunden erwartete Nutzen wird erreicht."
      ],
      "name":"validieren",
      "id":589
   },
   {  
      "definition":"veraltet: verbos bedeutet „wortreich“, „weitschweifig“",
      "examples":[  
         "Hör mir doch mal zwei Minuten zu, anstatt mich nur verbos vollzuschwafeln!"
      ],
      "name":"verbos",
      "id":590
   },
   {  
      "definition":"durch Überprüfen die Richtigkeit oder den Wahrheitsgehalt einer Sache bestätigen",
      "examples":[  
         "Gemeinsam mit den Zuständigen im deutschen Auswärtigen Amt und den äthiopischen Behörden sei man dabei, die Umstände des Überfalls zu verifizieren."
      ],
      "name":"verifizieren",
      "id":591
   },
   {  
      "definition":"wahrlich, wahr, wahrhaft, wahrhaftig, echt, unverfälscht",
      "examples":[  
         "Das war ein veritabler Glücksfall."
      ],
      "name":"veritabel",
      "id":592
   },
   {  
      "definition":"absonderlich, seltsam, merkwürdig.",
      "examples":[  
         "Sie hat ziemlich verquere Ansichten/Ideen."
      ],
      "name":"verquer",
      "id":593
   },
   {  
      "definition":"Einspruch, der einen geplanten Beschluss verhindert",
      "examples":[  
         "Wer kein Vetorecht hat, kann auch nicht mit Erfolg sein Veto einlegen."
      ],
      "name":"Veto",
      "id":594
   },
   {  
      "definition":"bildungssprachlich: im umgekehrten Wechsel, andersherum, umgekehrt",
      "examples":[  
         "Steigt der Preis des Gutes X, wächst die Nachfrage nach dem Gut Y. Vice versa bedeutet dies, dass die Nachfrage nach dem Gut X wächst, wenn der Preis des Gutes Y steigt.",
         "Ist im Süden Sommer, so herrscht auf der Nordhalbkugel Winter, et vice versa."
      ],
      "name":"vice versa",
      "id":595
   },
   {  
      "definition":"Musik: meisterhaft, mit absoluter technischer Perfektion, technisch vollendet",
      "examples":[  
         "Er interpretiert das Stück virtuos."
      ],
      "name":"virtuos",
      "id":596
   },
   {  
      "definition":"sehr beweglich, schwankend, unstetig; flüchtig, verdampfend, verdunstend",
      "examples":[  
         "Daher sei der Geschäftsverlauf volatil.",
         "Stoffe, die leicht verdampfen oder bei niedrigen Temperaturen schon als Gas vorliegen, nennt man volatile Stoffe."
      ],
      "name":"volatil",
      "id":597
   },
   {  
      "definition":"allgemein, abwertend: übermäßiges Interesse an Ereignissen oder anderen Personen und deren Leben",
      "examples":[  
         "Der alltägliche Voyeurismus auf deutschen Autobahnen, bei denen Fahrer zum Beglotzen von Unfällen absichtlich langsamer werden oder gar anhalten, gefährdet Menschenleben."
      ],
      "name":"Voyeurismus",
      "id":598
   },
   {  
      "definition":"Angst vor Fremden (Ausländern)",
      "examples":[  
         "„In offene Xenophobie umgeschlagen ist die Stimmung in Italien, das erst in den vergangenen zehn Jahren zum Einwanderungsland wurde.“",
         "„Der Film Fritz Langs liefert das Paradigma der unter den Deutschen seit dem Ende des 19. Jahrhunderts um sich greifenden Xenophobie.“"
      ],
      "name":"Xenophobie",
      "id":599
   },
   {  
      "definition":"Anführer (einer Gruppe), jemand der sich wichtig tut, Erfolg hat",
      "examples":[  
         "Ich spiel\u0027 mich ja nicht auf wie der große Zampano, oder so."
      ],
      "name":"Zampano",
      "id":600
   },
   {  
      "definition":"Rechnung für Getränke oder Speisen, die in einer Gaststätte getrunken oder verzehrt wurden; Anlage, um wertvolle Materialien aus der Erde zu gewinnen",
      "examples":[  
         "In Deutschland sind sehr viele Zechen geschlossen worden.",
         "Leider konnte er seine Zeche nicht bezahlen.",
         "„Als José die Stühle auf die Tische zu stellen begann, zahlte Ambly unsere Zeche, und wir machten uns auf den Rückweg.“"
      ],
      "name":"Zeche",
      "id":601
   },
   {  
      "definition":"Astronomie: der höchste Punkt des Himmelsgewölbes senkrecht über dem Betrachter; übertragen: Zeitpunkt des größten Erfolges",
      "examples":[  
         "Im Mai steht der Große Wagen schon am frühen Abend hoch im Zenit.",
         "„Vom Zenit bis zum Nadir erstreckte sich ein unübersehbarer Ring von Sternenstaub, jene Milchstraße, in deren Mitte unsere Sonne nur als Stern vierter Größe gilt.“",
         "Bereits im Alter von 20 Jahren hatte er den Zenit seines Ruhms erreicht.",
         "„Denn auch an der Börse war der Zenit bereits überschritten.“"
      ],
      "name":"Zenit",
      "id":602
   },
   {  
      "definition":"Katholizismus: freiwillig gewählte Verpflichtung zur Ehelosigkeit und zur vollkommenen sexuellen Enthaltsamkeit katholischer Priester",
      "examples":[  
         "In der orthodoxen Kirche ist der Zölibat nur für Bischöfe verpflichtend.",
         "„Die größte Schuld am Nachwuchsmangel in den Klöstern gab Eusebius aber dem Zölibat.“"
      ],
      "name":"Zölibat",
      "id":603
   },
   {  
      "definition":"regelmäßig wiederkehrend, wiederholend; kreisläufig, kreisförmig",
      "examples":[  
         "Sofort fällt einem der zyklische Verlauf auf.",
         "Ob ein zyklisches Anlageverhalten auf dem Aktienmarkt besser ist, als ein antizyklisches, dass muss jeder Anleger für sich entscheiden.",
         "Jene Denker, in denen alle Sterne sich in zyklischen Bahnen bewegen, sind nicht die tiefsten; (Nietzsche)",
         "Johann Sebastian Bach hat zahlreiche zyklische Werke komponiert."
      ],
      "name":"zyklisch",
      "id":604
   },
   {  
      "definition":"boshaft und verletzend; in Art des Zynismus; beißend, bissig, höhnisch, spöttisch",
      "examples":[  
         "„Du bist ja eine hübsche junge Frau“, warf er ihr zynisch an den Kopf."
      ],
      "name":"zynisch",
      "id":605
   }
]
};

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);
       
        if (event.session.application.applicationId !== "amzn1.ask.skill.e1118820-fd85-413a-ab1f-0efeaf358791") {
            context.fail("Wrong App ID");
        }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
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
    console.log("onLaunch requestId=" + launchRequest.requestId + ", sessionId=" + session.sessionId);
    var cardTitle = "Eloquention"
    var speechOutput = "Willkommen zu Eloquention! " + getNewString()
    callback(session.attributes, buildSpeechletResponse(cardTitle, speechOutput, "", true));
}

function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId + ", sessionId=" + session.sessionId);
    var intent = intentRequest.intent, intentName = intentRequest.intent.name;
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
    callback(session.attributes, buildSpeechletResponse("Ein neues Wort von Eloquention", getNewString(), "true"));
}

function getNewString() {
    var word = words.eloquention[getRandomInt(0, words.eloquention.length)];
    var outputString = "";
    outputString += "Dein eloquentes Wort ist: ";
    outputString += word.name;
    outputString += ". ";
    outputString += "Es bedeutet: ";
    outputString += word.definition;
    outputString += ". ";
    word.examples.forEach ( function(example){ 
        outputString += " Beispiel: " + example + " ";
        outputString += ". ";
    })
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

function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
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
