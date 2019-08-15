package modestasvalauskas.com.eloquention.persistence

import java.io.Serializable

data class ESD(var id: Int, var name: String, var examples: Array<String> = arrayOf(), var definition: String) : Serializable

object EloData {
    var data: Array<ESD> = arrayOf(
            ESD(    id = 1,
                    name = "a posteriori",
                    examples = arrayOf("Im Allgemeinen werden die Urteile des Empirismus als a posteriori beschrieben."),
                    definition = "nachträglich, später, im Nachhinein"
            ),
            ESD(    id = 2,
                    name = "a priori",
                    examples = arrayOf("»[…] Für mich waren die Nazis nicht a priori meine ersten Feinde. Das waren die Austrofaschisten, nicht die Nazis.«", "Aus dem Verstand stammt diejenige Erkenntnis, die der Erfahrung vorhergeht (a priori)", "Immanuel Kant kennzeichnet mit a priori Begriffe, die allein dem Verstande, der Vernunft entstammen, allerdings erst dann in Erscheinung bzw. Tätigkeit treten, wenn mit ihrer Hilfe Wahrnehmungen zu Begriffen geformt werden."),
                    definition = "grundsätzlich, im Vorhinein, von vornherein/von vorneherein"
            ),
            ESD(    id = 3,
                    name = "Abnorm",
                    examples = arrayOf("Seine Schwester ist abnorm groß.", "Sein Heißhunger ist abnorm.", "Letztes Jahr hatten wir einen abnorm kalten Winter."),
                    definition = "von der Norm oder dem Üblichen (Normalen) abweichend, über das Übliche/Normale hinausgehend"
            ),
            ESD(    id = 4,
                    name = "absent",
                    examples = arrayOf("Sie können den Geschäftsführer heute nicht sprechen, der ist absent.", "Er ist in absente Betrachtungen versunken."),
                    definition = "körperlich nicht anwesend, nicht zugegen, geistig nicht anwesend"
            ),
            ESD(    id = 5,
                    name = "abstinent",
                    examples = arrayOf("Man bezeichnet umgangssprachlich abstinent lebende Drogen- oder Medikamentenabhängige als clean."),
                    definition = "auf bestimmte Genüsse (besonders Rauschmittel) völlig verzichtend"
            ),
            ESD(    id = 6,
                    name = "abstrakt",
                    examples = arrayOf("Das ist zu abstrakt gedacht! Da hast du doch alle Gefühle außer Acht gelassen, in der Ehe der beiden herrschen nur noch Neid und Eifersucht!", "Diese Formulierung ist zu abstrakt! Das kann sich keiner bildhaft vorstellen."),
                    definition = "vom Besonderen oder Gegenständlichen losgelöst; verallgemeinert"
            ),
            ESD(    id = 7,
                    name = "Abstraktion",
                    examples = arrayOf("Die entstandenen Skulpturen sind elegant, stets reduziert, oft an der Grenze zur Abstraktion.", "Superierung ist die Fähigkeit, Einzelheiten zu einem Ganzen zusammenfassen zu können. Dadurch entsteht eine Abstraktion komplexer Sachverhalte.", "Es beginnt ein Kampf zwischen Abstraktion und Gegenständlichkeit."),
                    definition = "aus einem höheren Blickwinkel betrachtet, Verallgemeinerung, Generalisierung"
            ),
            ESD(    id = 8,
                    name = "abstrus",
                    examples = arrayOf("Bei der Analyse der Lehre von Hegel vom ersten Unterscheidungsmerkmal des Begriffes und dem Hervorgehen des Begriffes aus dem Wesen, und des Wesens aus dem Sein, schrieb Lenin: Die weitere Entwicklung des Allgemeinen, des Besonderen und des Einzelnen [bei Hegel] ist im höchsten Grad abstrakt und abstrus", "Der Rationalismus mit seinem Hasse gegen jeden Tiefsinn und gegen jede Mystik hatte sich gewöhnt, tiefsinniges Denken abstrus zu nennen, wenn er eine solche Denkrichtung tadeln wollte."),
                    definition = "absonderlich, töricht, schwer verständlich, verworren, ohne gedankliche Ordnung"
            ),
            ESD(    id = 9,
                    name = "ad absurdum",
                    examples = arrayOf("Wenn man energieeffiziente Unternehmen mit hohen Strompreisen belastet, wird das Anreizsystem für Energieeinsparungen ad absurdum geführt."),
                    definition = "etwas ad absurdum führen: das Widersinnige, die Sinnlosigkeit einer Sache nachweisen"
            ),
            ESD(    id = 10,
                    name = "ad acta",
                    definition = "etwas als erledigt betrachten / ansehen, an etwas nicht mehr denken, über etwas nicht mehr debattieren / diskutieren / reden",
                    examples = arrayOf("Die Staatsanwaltschaft hatte damals die Sache ad acta gelegt, wohl in der leider nicht unzutreffenden Befürchtung, daß sich die monarchistischen Attentatsversuche dieses Landes vor den Geschworenen, an die die Angelegenheit als Preß-Sache gekommen wäre, in Heiterkeit aufzulösen pflegen.", "Es wird höchste Zeit, das Märchen von der Sommerpause ad acta zu legen.", "Der Bundesvorstand hat deshalb auch jeden Gedanken an eine Beteiligung bei der Bundestagswahl im September endgültig ad acta gelegt und setzt jetzt auf die Perspektive 2013.")
            ),
            ESD(    id = 11,
                    name = "ad hoc",
                    definition = "ohne Vorbereitung, speziell für einen Zweck oder spontan aus einer Situation heraus entstanden",
                    examples = arrayOf("Wir haben natürlich auch noch mehr tolle Sachen gemacht – die fallen mir aber ad hoc nicht ein.", "Keiner war vorbereitet, die Krise trat ad hoc auf.")
            ),
            ESD(    id = 12,
                    name = "adäquat",
                    definition = "den gestellten Bedingungen angemessen",
                    examples = arrayOf("Es handelt sich bei dem konkreten mitgeführten Messer nicht mehr um einen Gebrauchsgegenstand des täglichen Lebens, der regelmäßig mitgeführt und durchweg in sozial adäquater Weise eingesetzt wird.", "Die Schrift ist nicht nur nicht die Sprache selbst, sondern sie ist derselben auch in keiner Weise adäquat.")
            ),
            ESD(    id = 13,
                    name = "Affekt",
                    definition = "heftige Gefühlsregung, starke Gemütsbewegung, innere Erregung",
                    examples = arrayOf("Es ist doch im Affekt passiert.", "Hierbei handelt es sich um eine Handlung aus dem Affekt.", "Ausreden für Kurzschlusshandlungen sind oftmals die Affekte.")
            ),
            ESD(    id = 14,
                    name = "affektiert",
                    definition = "von einem gekünstelten Verhalten geprägt, eingebildet, geziert, gekünstelt, gezwungen, unnatürlich",
                    examples = arrayOf("Tu doch nicht so affektiert!")
            ),
            ESD(    id = 15,
                    name = "Affront",
                    definition = "gehoben: öffentlicher verbaler oder schriftlicher Angriff bzw. Beschuldigung",
                    examples = arrayOf("Seine Antwort war ein einziger Affront.", "Portugal empfand das eigenmächtige Handeln seiner Kolonie als Affront.")
            ),
            ESD(    id = 16,
                    name = "Aficionado",
                    definition = "der Anhänger, der Fan, der Liebhaber, der Freund, der Anfänger, der Amateur",
                    examples = arrayOf()
            ),
            ESD(    id = 17,
                    name = "Ag­glo­me­ra­ti­on",
                    definition = "Zusammenballung, Anhäufung",
                    examples = arrayOf("London ist damit die bevölkerungsreichste Stadt der Europäischen Union. Die Agglomeration hat 8.278.251 Einwohner (2001).")
            ),
            ESD(    id = 18,
                    name = "aggregieren",
                    definition = "Physik: verdichten; zu einer Masse vereinigen, anhäufen",
                    examples = arrayOf()
            ),
            ESD(    id = 19,
                    name = "agieren",
                    definition = "etwas betreiben, tun",
                    examples = arrayOf("Er agierte bei dieser Verhandlung etwas unglücklich.", "Sie agierte in dieser Krise mit vollem Engagement und konnte so die Unternehmung wieder in die grünen Zahlen führen.")
            ),
            ESD(    id = 20,
                    name = "Agitator",
                    definition = "meist abwertend: jemand, der durch anspornende oder aufhetzende Reden oder Schriften, Menschenmassen zu bestimmten gemeinsamen Handlungen bewegen möchte; Person, die Agitation betreibt",
                    examples = arrayOf("François Noël Babeuf, genannt Gracchus Babeuf […] war Journalist und ein linksrevolutionärer französischer Agitator während der ersten französischen Revolution.")
            ),
            ESD(    id = 21,
                    name = "Ak­ro­nym",
                    definition = "Kurzwort, das aus den Anfangsbuchstaben mehrerer Wörter gebildet ist",
                    examples = arrayOf("„UNO“, „UNESCO“, „DOPA“, „GNU“ und „EDEKA“ sind Akronyme.")
            ),
            ESD(    id = 22,
                    name = "Akkordisch",
                    definition = "auf den Akkord bezogen, in Akkorden geschrieben",
                    examples = arrayOf("Das Lied ist akkordisch.")
            ),
            ESD(    id = 23,
                    name = "akkreditieren",
                    definition = "jemanden in einer bestimmten Funktion anerkennen, zulassen",
                    examples = arrayOf("Hierbei ist immer gut zu nennen, für welches Medium Ihr Euch akkreditieren wollt, welche Auflage das Medium hat und wie oft es erscheint.")
            ),
            ESD(    id = 24,
                    name = "Akquise",
                    definition = "Maßnahmen zur Kundengewinnung",
                    examples = arrayOf("Die Akquise von Betrieben verursacht immer wieder viel Unruhe unter den Beschäftigten", "Die Akquise von neuen Kunden erfordert viel Aufwand.")
            ),
            ESD(    id = 25,
                    name = "akribisch",
                    definition = "Mit sehr viel Rücksicht auf Details, sehr genau und äußerst sorgfältig",
                    examples = arrayOf("Er erledigte diese Arbeit akribisch.", "Besonders in seinen kleinen Formaten zeigt sich eine akribische Liebe zum Detail.")
            ),
            ESD(    id = 26,
                    name = "akut",
                    definition = "in diesem Moment (sehr) wichtig, bezogen auf eine Krankheit: unvermutet auftretend, rasch und heftig verlaufend",
                    examples = arrayOf("Die damalige Wissenslücke stellte sich als akutes Problem dar.", "Die Krankheit trat akut auf.", "Bei akuten Verbrennungen ist das wichtigste Gegenmittel kaltes Leitungswasser.")
            ),
            ESD(    id = 27,
                    name = "Allegorie",
                    definition = "personifizierende oder gegenständliche Darstellung eines abstrakten Sachverhaltes",
                    examples = arrayOf("Allegorien sind für Deutschland bzw. Deutsches Reich: die Germania, Frankreich: die Marianne, Schweiz: die Helvetia, Großbritannien: die Britannia, USA: Lady Liberty")
            ),
            ESD(    id = 28,
                    name = "Alter Ego",
                    definition = "zweite Identität, zweite Persönlichkeit",
                    examples = arrayOf("Clark Kent ist das Alter Ego von Superman.", "Wir sind die allerbesten Freunde und haben keine Geheimnisse voreinander, man kann schon sagen, meine Busenfreundin ist mein Alter Ego.")
            ),
            ESD(    id = 29,
                    name = "altruistisch",
                    definition = "selbstlos, uneigennützig, menschenliebend, aufopfernd",
                    examples = arrayOf("So konnten sie offensichtlich eigennützige Feldzüge als altruistische Missionen tarnen, die dazu dienten, wilde Barbaren zu zivilisieren.")
            ),
            ESD(    id = 30,
                    name = "Ambidextrie",
                    definition = "Beidhändigkeit, gleich ausgebildete Geschicklichkeit beider Hände",
                    examples = arrayOf("Er ist Ambidextrisch.")
            ),
            ESD(    id = 31,
                    name = "Ambiguität",
                    definition = "Zweideutigkeit, Doppelsinnigkeit, Doppeldeutigkeit, Mehrdeutigkeit eines Gegebenen, eines Sachverhalts, einer Lehre oder von sprachlichen Ausdrücken",
                    examples = arrayOf("Wenn jemand einen Ring trägt, kann Ambiguität vorliegen: Ist er ein reiner Schmuck oder zeigt er eine Freundschaft, Verlobung oder Ehe an?")
            ),
            ESD(    id = 32,
                    name = "ambivalent",
                    definition = "widersprüchlich, zwiespältig",
                    examples = arrayOf("Seine Gefühle ihr gegenüber sind ambivalent, sowohl positiv als auch negativ.")
            ),
            ESD(    id = 33,
                    name = "an­th­ro­po­gen",
                    definition = "durch den Menschen oder durch menschliches Handeln verursacht oder entstanden",
                    examples = arrayOf("Die künftige technische Umwelt wird nach Ansicht des Autors immer mehr anthropogenere Züge durch die menschlichen Gestaltungsaktivitäten annehmen.")
            ),
            ESD(    id = 34,
                    name = "Anachronismus",
                    definition = "falsche zeitliche Einordnung",
                    examples = arrayOf("Unter den ganzen Computern wirkte die mechanische Schreibmaschine wie ein glatter Anachronismus.", "Ein Darsteller in einem Gladiatorenfilm, der eine Digitalarmbanduhr trägt, ist ein Beispiel für einen besonders krassen Anachronismus.")
            ),
            ESD(    id = 35,
                    name = "Anagramm",
                    definition = "Wörter, die die gleichen Buchstaben in anderer Reihenfolge enthalten und sinnvolle Wörter darstellen",
                    examples = arrayOf("„Lager“ in „regaL“ umgewandelt ist ein Anagramm.")
            ),
            ESD(    id = 36,
                    name = "Antagonist",
                    definition = "allgemein: Widersacher, Gegner, Gegenspieler; Schauspiel, Film, Literatur: Gegenspieler des Helden",
                    examples = arrayOf("Zwar werden die Antagonisten versuchen, Spannungen im feindlichen Lager für ihre Zwecke auszunutzen. Aber derartige Bemühungen sind im Versgleich mit den Kriegszielen auf der internationalen Ebene sekundär.")
            ),
            ESD(    id = 37,
                    name = "antizipieren",
                    definition = "etwas erkennen, bevor es eingetreten ist; vorwegnehmen",
                    examples = arrayOf("Manchmal kann man einen Gedanken des Partners antizipieren, bevor er ihn äußern konnte.", "Die Aktie dürfte zwar schon viel antizipiert haben, insgesamt dürfte sich der positive Kurstrend des Papiers aber fortsetzen, erwartet der Analyst.")
            ),
            ESD(    id = 38,
                    name = "Antonym",
                    definition = "ein Wort, dessen Bedeutung das genaue Gegenteil zu der eines anderen Wortes ausdrückt",
                    examples = arrayOf("Das Antonym zu schwarz ist weiß.", "Antonyme sind zum Beispiel: riesig/winzig, groß/klein, hell/dunkel, Mann/Frau, verlieren/gewinnen, Liebe/Hass, Ideenreichtum/Einfallsreichtum/Gedankenarmut, berufstätig/arbeitslos, Betriebsgesellschaft/Besitzgesellschaft")
            ),
            ESD(    id = 39,
                    name = "apo­dik­tisch",
                    definition = "keinen Widerspruch zulassend, Philosophie: nicht widerlegbar",
                    examples = arrayOf("Er behauptete in apodiktischer Form, dass nur sein Vorschlag zum Ziel führe.")
            ),
            ESD(    id = 40,
                    name = "apokryph",
                    definition = "nicht als Teil der Bibel anerkannter, aber den Büchern der Bibel ähnlicher Text.",
                    examples = arrayOf()
            ),
            ESD(    id = 41,
                    name = "appellieren",
                    definition = "sich mahnend oder auffordernd an jmdn. oder etwas wenden.",
                    examples = arrayOf("Sie appellierte an seine Vernunft, sich nicht auf dieses Wagnis einzulassen.")
            ),
            ESD(    id = 42,
                    name = "approximativ",
                    definition = "annäherungsweise, nur in der Annäherung",
                    examples = arrayOf("Die Entfernung können wir einstweilen nur approximativ bestimmen.", "1 und 0,999 … stellen ein und dieselbe Idee dar, nämlich die Eins, die sowohl als konkretes Objekt als auch als ein endloser approximativer Prozess erfasst werden kann.")
            ),
            ESD(    id = 43,
                    name = "Arabellion",
                    definition = "eine Serie von Aufständen in der arabischen Welt, die im Jahre 2010 begann",
                    examples = arrayOf("Unpolitische Jugend? Von wegen! In diesem Jahr bewegte der Protest der Jungen die Welt. In Nordafrika brachten sie die Arabellion in Gang.")
            ),
            ESD(    id = 44,
                    name = "Arachnophobie",
                    definition = "krankhafte Angst vor Spinnen",
                    examples = arrayOf("Meine Frau hat eine Arachnophobie.")
            ),
            ESD(    id = 45,
                    name = "Askese",
                    definition = "Religion: streng enthaltsames Leben verbunden mit dem Ziel des Seelenheils",
                    examples = arrayOf("Der Mönch verbrachte sein gesamtes Leben in Askese.")
            ),
            ESD(    id = 46,
                    name = "assimilieren",
                    definition = "sich anpassen, sich angleichen",
                    examples = arrayOf("Den häufig gebrauchten Wörtern gelingt es in der Regel, sich zu assimilieren.")
            ),
            ESD(    id = 47,
                    name = "Assoziieren",
                    definition = "Gedanken oder Bilder verknüpfen",
                    examples = arrayOf("Den Anblick der Hunde assoziierte er immer mit seiner Flucht.", "Einige Staaten sind mit der EU assoziiert.")
            ),
            ESD(    id = 48,
                    name = "Atavismus",
                    definition = "eine Auffassung oder ein Verhalten, das einem veralteten Weltbild entspricht",
                    examples = arrayOf("Längst verlorene Eigenschaften vergangener Generationen schlagen wieder durch: man spricht von Atavismus. Geisteskranke haben gesunde Kinder, gesunde Eltern kranke oder schwachsinnige Kinder.")
            ),
            ESD(    id = 49,
                    name = "Atheist",
                    definition = "Person, welche nicht an die Existenz von Göttern glaubt",
                    examples = arrayOf("Atheisten glauben nicht an Gott.", "Ich hatte zuvor nicht gewusst, dass wir in Ägypten so viele Atheisten haben.")
            ),
            ESD(    id = 50,
                    name = "autark",
                    definition = "Wirtschaft, Politik: insbesondere von der ausländischen Wirtschaft unabhängig; von äußeren Einflüssen unabhängig",
                    examples = arrayOf("Wir streben eine autarke Stromversorgung an.", "Als Schutzmaßnahme [westlicher Sanktionen gegen Russland] propagiert die russische Führung das Ziel, autark zu werden. Sie möchte ein eigenes Zahlungssystem aufbauen, um dem Griff der US-Kreditkartenunternehmen zu entkommen.")
            ),
            ESD(    id = 51,
                    name = "authentisch",
                    definition = "richtig, zuverlässig, hinsichtlich der Echtheit gesichert und daher zuverlässig",
                    examples = arrayOf("Du wirkst beim Lügen authentisch.")
            ),
            ESD(    id = 52,
                    name = "Authentizität",
                    definition = "Eigenschaft einer Sache, Person oder Organisation, authentisch (auf Echtheit geprüft, zuverlässig) zu sein",
                    examples = arrayOf("Die Authentizität des Dokuments ist überprüft worden und nicht zu bestreiten.", "uthentizität, so definiert es das Lexikon, bedeutet, dass das Handeln einer Person nicht durch äußere Einflüsse bestimmt wird, sondern in der Person selbst begründet liegt.")
            ),
            ESD(    id = 53,
                    name = "autorisieren",
                    definition = "jemanden mit einer Vollmacht ausstatten, etwas seine Genehmigung erteilen, etwas für berechtigt erklären",
                    examples = arrayOf("Ich autorisiere dich etwas zu tun.", "Gleich nach den Anschlägen vom 11. September 2001 hat George Bush seinen Geheimdienst autorisiert, die wichtigsten Mitglieder von al-Qaida irgendwo in der Ferne zu verhören.")
            ),
            ESD(    id = 54,
                    name = "Autosuggestion",
                    definition = "bewusste oder unbewusste Beeinflussung eigener Verhaltensweisen sowie psychischer Funktionen ohne äußeren Anlass",
                    examples = arrayOf("Autosuggestion kann in der Psychotherapie eingesetzt werden.")
            ),
            ESD(    id = 55,
                    name = "Avantgarde",
                    definition = "Vorhut einer Armee, Vorkämpfer oder Vorreiter einer politischen oder künstlerischen Entwicklung",
                    examples = arrayOf("Die Avantgarde geriet unter Beschuss.", "Zuerst müsse sich eine Minderheit formieren, die dann als Avantgarde des Wandels handle")
            ),
            ESD(    id = 56,
                    name = "Vorhut",
                    definition = "kleiner Trupp Soldaten zur Erkundung/Sicherung des Vorfeldes einer Trup",
                    examples = arrayOf("Zwei Kinder hüpften ihnen als Vorhut voraus.")
            ),
            ESD(    id = 57,
                    name = "Aversion",
                    definition = "starke Abneigung gegen einen Menschen, eine Handlung oder ein Objekt",
                    examples = arrayOf("Er hat eine starke Aversion gegen Alkohol.")
            ),
            ESD(    id = 58,
                    name = "avisieren",
                    definition = " etwas schriftlich oder ähnlich ankündigen, beispielsweise eine Warenlieferung",
                    examples = arrayOf("Hiermit möchte ich Ihnen die Ankunft von Herrn X für Freitag den 10.10.2010 avisieren.", "Wie mit Frau Müller avisiert, schicke ich Ihnen anbei meine Bewerbungsunterlagen.")
            ),
            ESD(    id = 59,
                    name = "äquivalent",
                    definition = "gleichwertig, entsprechend",
                    examples = arrayOf("Wenn zwei Aussagen äquivalent sind, bedeutet das: trifft eine zu, ist auch die andere richtig und umgekehrt.", "Bei Vertragsrücktritt ist eine äquivalente Entschädigung zu zahlen.")
            ),
            ESD(    id = 60,
                    name = "Bagatelle",
                    definition = "kleine, unbedeutende Sache",
                    examples = arrayOf("Die Kosten sind im Vergleich zur Gesamtbestellung eine Bagatelle.", "Der Bruder, Mitte 20, und das noch minderjährige Mädchen hatten sich wegen einer Bagatelle lautstark in die Haare bekommen.")
            ),
            ESD(    id = 61,
                    name = "bagatellisieren",
                    definition = "etwas verniedlichen, als geringfügig und unbedeutend hinstellen",
                    examples = arrayOf("Man sollte die Tatsache, dass die Einkommen sich immer weiter auseinanderentwickeln, nicht bagatellisieren.")
            ),
            ESD(    id = 62,
                    name = "banal",
                    definition = "ohne großen Anspruch, einfach zu bewerkstelligen, auszuführen",
                    examples = arrayOf("Die Gespräche der so genannten Experten waren ganz schön banal.", "Die Lösung ist banal.", "Wie kannst du das immer wieder falsch machen? Das ist doch echt banal.")
            ),
            ESD(    id = 63,
                    name = "Bankrott",
                    definition = "Unfähigkeit, seinen Zahlungsverpflichtungen nachzukommen, finanzieller Zusammenbruch",
                    examples = arrayOf("Seine junge, anspruchsvolle Frau hat ihn in den Bankrott getrieben.", "Nach Eröffnung des Insolvenzverfahrens hat der Insolvenzverwalter bis zu drei Monate Zeit, das vom Bankrott bedrohte Unternehmen gründlich unter die Lupe zu nehmen.")
            ),
            ESD(    id = 64,
                    name = "Barrique",
                    definition = "ein altes französisches Weinmaß, ein Weinfass aus Eichenholz",
                    examples = arrayOf("„Kein Barrique ist wie das andere, […] Jedes Holzfass gibt einen bestimmten, unterschiedlichen Ton ab.")
            ),
            ESD(    id = 65,
                    name = "Bastard",
                    definition = "uneheliches Kind, besonders eines gesellschaftlich hoch gestellten Vaters und einer Mutter aus niedrigerem Stand; Schimpfwort: verabscheuter Mensch",
                    examples = arrayOf("Das Kind, sofern es geboren wurde, war nichts als ein rechtloser Bastard, eine Brandmarkung, die es sein ganzes Leben lang begleitete.")
            ),
            ESD(    id = 66,
                    name = "biblioman",
                    definition = "leidenschaftlicher Sammler von Büchern",
                    examples = arrayOf("Er ist ein bibliomane")
            ),
            ESD(    id = 67,
                    name = "bigott",
                    definition = "scheinheilig, heuchlerisch",
                    examples = arrayOf("Manche Menschen neigen dazu, mit höherem Alter bigott zu werden.")
            ),
            ESD(    id = 68,
                    name = "bilateral",
                    definition = "zwei Seiten betreffend, von zwei Seiten ausgehend",
                    examples = arrayOf("Die beiden Projektleiter müssen sich bilateral abstimmen.")
            ),
            ESD(    id = 69,
                    name = "fromm",
                    definition = "religiös observant, gottgläubig, religiös; veraltet: gut, gerecht, tapfer",
                    examples = arrayOf("Sag vor ihm ja nichts gegen den Pfarrer, er ist nämlich fromm", "Lieber Gott, mach mich fromm, dass ich in den Himmel komm!")
            ),
            ESD(    id = 70,
                    name = "Biomarker",
                    definition = "messbare Produkte von Organismen, die als Indikatoren für zum Beispiel Umweltbelastungen oder Krankheiten herangezogen werden",
                    examples = arrayOf("Der Biomarker half dabei, eine Umweltbelastung festzustellen.")
            ),
            ESD(    id = 71,
                    name = "Blasphemie",
                    definition = "Gotteslästerung; die Schmähung von etwas Heiligem oder Göttlichem, übertragen: Kritik an einer allgemein anerkannten oder respektierten Person, Sache oder Idee",
                    examples = arrayOf("Er wurde der Blasphemie angeklagt.")
            ),
            ESD(    id = 72,
                    name = "borniert",
                    definition = "stur von sich, seiner Meinung und Position überzeugt und alle anderen Standpunkte ignorierend",
                    examples = arrayOf("Bornierten Menschen sollte man nicht widersprechen. Widerspruch ist immerhin ein Zeichen von Anerkennung.")
            ),
            ESD(    id = 73,
                    name = "Bourgeoisie",
                    definition = "gehobenes, einflussreiches, gutsituiertes Bürgertum, im Kapitalismus derjenige Teil der Gesellschaft, der über Produktionsmittel und Macht verfügt",
                    examples = arrayOf("Die Industriellenfamilien der Gründerzeit gehören zur Bourgeoisie.", "Angehörige der Bourgeoisie werden auch Bourgeois genannt.")
            ),
            ESD(    id = 74,
                    name = "Bredouille",
                    definition = "redensartlich, meist nur in Wendungen: für Verlegenheit, Schwierigkeiten, Bedrängnis",
                    examples = arrayOf("Da war ich ganz schön in der Bredouille.", "Ohne dieses frische Geld würden die Landesbanken schnell in die Bredouille geraten.")
            ),
            ESD(    id = 75,
                    name = "Brüskieren",
                    definition = "jemanden vor den Kopf stoßen, die Gefühle von jemandem verletzen",
                    examples = arrayOf("Er hat mich brüskiert, als er mich auf mein Gewicht angesprochen hat.", "Nordkorea hat die Staatengemeinschaft im Februar mit einem weiteren Atomtest brüskiert.")
            ),
            ESD(    id = 76,
                    name = "Charisma",
                    definition = "Ausstrahlung einer Person",
                    examples = arrayOf("Dieser Moderator hat Charisma.", "Als habe jemand einen Schalter umgelegt, war es wieder da, das Charisma, das er schon in Chicago ausgestrahlt hatte.")
            ),
            ESD(    id = 77,
                    name = "Charme",
                    definition = "bezauberndes, gewinnendes Wesen",
                    examples = arrayOf("Karl konnte eine beträchtliche Menge von Charme entwickeln.", "Der Jüngling wird sich des Charmes bewußt, über den er verfügt und den er bald taktisch einzusetzen versteht, wo immer es ihm genehm scheint.")
            ),
            ESD(    id = 78,
                    name = "Charta",
                    definition = "Staatsrecht, Völkerrecht: Verfassungsurkunde",
                    examples = arrayOf("Wer kennt die Charta der Vereinten Nationen genau?")
            ),
            ESD(    id = 79,
                    name = "Chauvinismus",
                    definition = "extrem sexistische Einstellung einer Person, meist übersteigertes Männlichkeitsgefühl, exzessiver Patriotismus beziehungsweise Nationalismus, übersteigerter Nationalismus",
                    examples = arrayOf("Im College setzte sie sich unerschrocken gegen sexuelle Belästigung zur Wehr. Und später gegen den Chauvinismus der Vorgesetzten.", "Manche sagen, der Chauvinismus der Kolonialzeit sei Hauptursache für den Ersten Weltkrieg gewesen.")
            ),
            ESD(    id = 80,
                    name = "Chiffre",
                    definition = "Zeichen einer Geheimschrift, Wort mit einer verschlüsselten Bedeutung",
                    examples = arrayOf("Der kundige Leser kann hier noch weitere Chiffren entdecken.", "Antwort unter Chiffre X1234Y5678 erbeten.")
            ),
            ESD(    id = 81,
                    name = "chronologisch",
                    definition = "in zeitlicher Reihenfolge geordnet",
                    examples = arrayOf("In chronologischer Ordnung")
            ),
            ESD(    id = 82,
                    name = "Con­nais­seur",
                    definition = "Genussmensch, Kenner der guten Dinge",
                    examples = arrayOf("Nur weil der Kollege Rot- von Weißwein unterscheiden kann, hält er sich schon für einen Connaisseur.")
            ),
            ESD(    id = 83,
                    name = "Conditio sine qua non",
                    definition = "besonders Recht, Philosophie: notwendige Bedingung; Voraussetzung, die unerlässlich ist",
                    examples = arrayOf("Andererseits ist Kommunikation ganz offensichtlich eine Conditio sine qua non menschlichen Lebens und gesellschaftlicher Ordnung.")
            ),
            ESD(    id = 84,
                    name = "Corpus Delicti",
                    definition = "Recht: Beweismittel, Beweisstück für ein Verbrechen, zum Beispiel die Tatwaffe",
                    examples = arrayOf("Das Corpus Delicti war ein Messer.")
            ),
            ESD(    id = 85,
                    name = "Courage",
                    definition = "Gefühl, bei dem trotz gefährlicher Situation keine Angst auftritt",
                    examples = arrayOf("In so einer Situation muss man auch Courage zeigen.")
            ),
            ESD(    id = 86,
                    name = "Credo",
                    definition = "Überzeugung, die jemand vertritt",
                    examples = arrayOf("Niemals ist sie in der Öffentlichkeit mit ihrem stets offensiv vorgetragenen Credo auf Ablehnung gestoßen.")
            ),
            ESD(    id = 87,
                    name = "Curriculum",
                    definition = "Lebenslauf; eine präzise Regelung und Festlegung aller Lernziele und Lerninhalte sowie der zugehörigen Lernprozesse und der zugehörigen Lernorganisation für ein Unterrichtsfach und für einen bestimmten Zeitraum ",
                    examples = arrayOf("Für die Oberstufe wurden vollkommen neue Curricula entwickelt.", "Mail' mir doch bitte dein Curriculum zu.")
            ),
            ESD(    id = 88,
                    name = "d'ac­cord",
                    definition = "besonders österreichisch: einig, übereinstimmend, der gleichen Meinung, einverstanden",
                    examples = arrayOf("Ich nehme an, wir sind d’accord.", "In dem Punkt gehe ich d’accord.")
            ),
            ESD(    id = 89,
                    name = "de facto",
                    definition = "nach Tatsachen, in der Praxis, tatsächlich",
                    examples = arrayOf("Der Sieger der Wahl stand de facto schon vor der Wahl fest.", "Hier in Amerika hatte er de facto schon seit Jahrzehnten existiert.")
            ),
            ESD(    id = 90,
                    name = "Debatte",
                    definition = "Streitgespräch, das bestimmten Regeln folgt",
                    examples = arrayOf("Eine kritische Debatte über die durch die Einwanderung seit 30 Jahren entstandene Situation hat es nicht gegeben.")
            ),
            ESD(    id = 91,
                    name = "dechiffrieren",
                    definition = "einen in Geheimschrift verfassten Text entschlüsseln",
                    examples = arrayOf("Diese Ziffernfolge wurde nach Kuba gefunkt und konnte dort wieder dechiffriert werden")
            ),
            ESD(    id = 92,
                    name = "dediziert",
                    definition = "jemandem gewidmet, zugeeignet, zugeordnet",
                    examples = arrayOf("dedizierter Server: Ein Server, der nur dafür da ist, ganz bestimmte Dienste und Daten anderen Rechnern zukommen zu lassen oder nur für einen ganz bestimmten Großkunden zu arbeiten.")
            ),
            ESD(    id = 93,
                    name = "deduktiv",
                    definition = "Logik, Wissenschaftstheorie: vom Allgemeinen auf das Besondere schließend",
                    examples = arrayOf("Dieser Satz wurde deduktiv gewonnen.")
            ),
            ESD(    id = 94,
                    name = "Defätismus",
                    definition = "pessimistische, mutlose Haltung",
                    examples = arrayOf()
            ),
            ESD(    id = 95,
                    name = "defätistisch",
                    definition = "Hoffnungslosigkeit ausdrückend oder auch fast schon resignierend",
                    examples = arrayOf("Bitte jetzt keine defätistischen Bemerkungen.")
            ),
            ESD(    id = 96,
                    name = "degradieren",
                    definition = "Militär: jemanden im Rang herabsetzen",
                    examples = arrayOf("Der Offizier wurde wegen des Vorfalls zum Gefreiten degradiert.")
            ),
            ESD(    id = 97,
                    name = "dekadent",
                    definition = "infolge kultureller Überfeinerung entartet und ohne Kraft oder Widerstandsfähigkeit, im Verfall begriffen",
                    examples = arrayOf("Der dekadente Lebensstil der führenden Schichten Roms war mitschuld am Niedergang der römischen Republik.")
            ),
            ESD(    id = 98,
                    name = "delegieren",
                    definition = "jemandem etwas überweisen bzw. jemanden beauftragen, Rechte oder Aufgaben abtreten, Aufgaben auf einen anderen übertragen",
                    examples = arrayOf("Du solltest diese Arbeiten besser an deine Mitarbeiter delegieren.")
            ),
            ESD(    id = 99,
                    name = "delektieren",
                    definition = "jemanden mit etwas erfreuen",
                    examples = arrayOf("Sie delektierte sich an ihrer neuen Erfindung.")
            ),
            ESD(    id = 100,
                    name = "Delinquent",
                    definition = "Kriminologie: der Ausführende eines Delikts; jemand der ein Delikt (Straftat) begangen hat",
                    examples = arrayOf("Die im ganzen Deutschen Reich beliebte Folter diente der Erreichung eines schnellen Geständnisses des Delinquenten.")
            ),
            ESD(    id = 101,
                    name = "Demagoge",
                    definition = "jemand, der (politische) Hetze betreibt",
                    examples = arrayOf("Manche Politiker haben das Zeug zum Demagogen.")
            ),
            ESD(    id = 102,
                    name = "denunzieren",
                    definition = "etwas oder jemanden öffentlich bloßstellen oder brandmarken",
                    examples = arrayOf("Die Zeitschrift wurde als linkslastig denunziert.")
            ),
            ESD(    id = 103,
                    name = "derangiert",
                    definition = "ohne Ordnung, unordentlich, verwirrt, konfus",
                    examples = arrayOf("Er sah irgendwie komisch und derangiert aus.")
            ),
            ESD(    id = 104,
                    name = "desavouieren",
                    definition = "leugnen, widersprechen, nicht anerkennen",
                    examples = arrayOf("Er desavouierte Arabellas ganze Natur: aber das war ja, was er wollte, was er sollte.")
            ),
            ESD(    id = 105,
                    name = "designieren",
                    definition = "voraus ernennen, bezeichnen, vorsehen, bestimmen",
                    examples = arrayOf("Noch vor der Amtsübergabe wurde er zum Präsidenten designiert.")
            ),
            ESD(    id = 106,
                    name = "Deskriptiv",
                    definition = "sachlich darstellend",
                    examples = arrayOf("eine rein deskriptive Darstellung der hochsprachlichen Norm")
            ),
            ESD(    id = 107,
                    name = "desolat",
                    definition = "traurig, trostlos, einsam",
                    examples = arrayOf("Die desolate deutsche Mannschaft verlor das Spiel.")
            ),
            ESD(    id = 108,
                    name = "Despot",
                    definition = "Staatsoberhaupt, das willkürlich und absolut herrscht, Tyrann",
                    examples = arrayOf("ein grausamer Despot")
            ),
            ESD(    id = 109,
                    name = "deviant",
                    definition = "von gesellschaftlichen Normen abweichend",
                    examples = arrayOf("er hat ein deviantes Verhalten")
            ),
            ESD(    id = 110,
                    name = "dezidiert",
                    definition = "von Entscheidungen, Anweisungen, Meinungen, Forderungen: auf eindeutige und bestimmte Weise",
                    examples = arrayOf("Wir sollten diesen Standpunkt dezidiert vertreten.")
            ),
            ESD(    id = 111,
                    name = "diametral",
                    definition = "genau entgegengesetzt, völlig unterschiedlich",
                    examples = arrayOf("Unsere Ansichten zu dieser Sache sind diametral verschieden.")
            ),
            ESD(    id = 112,
                    name = "Diaspora",
                    definition = "konfessionelle oder nationale Minderheit",
                    examples = arrayOf("Der aus Franken stammende Professor sieht Norddeutschland als Diaspora an, wo er kaum andere Süddeutsche antrifft.")
            ),
            ESD(    id = 113,
                    name = "differenziert",
                    definition = "fein bis ins Einzelne abgestuft, nuanciert",
                    examples = arrayOf("die Wissenschaft hat heute viel differenziertere Methoden")
            ),
            ESD(    id = 114,
                    name = "diffizil",
                    definition = "schwierig, kompliziert, heikel, auch schwer verständlich (im zwischenmenschlichen oder gesellschaftlichen Zusammenhang verwendet)",
                    examples = arrayOf("Das ist eine diffizile Angelegenheit und erfordert Fingerspitzengefühl.", "Es gelinge ihm nicht, was solle er tun! Hunderte Stunden habe er sich damit befaßt. Die Sache sei unvorstellbar diffizil.")
            ),
            ESD(    id = 115,
                    name = "Dilettant",
                    definition = "Liebhaber von etwas ohne professionelle Kenntnisse (heute meist abwertend gebraucht)",
                    examples = arrayOf("Er war ein Dilettant in der Malerei.")
            ),
            ESD(    id = 116,
                    name = "dilettieren",
                    definition = "ohne angemessene Ausbildung oder Fähigkeiten etwas tun",
                    examples = arrayOf("Paul war ein spielerischer Intellektueller, beredt und wandlungsfähig, und in seiner Jugend ein dilettierender Literat")
            ),
            ESD(    id = 117,
                    name = "diskreditieren",
                    definition = "in Misskredit bringen, in Verruf bringen",
                    examples = arrayOf("Er wurde als Verräter diskreditiert.", "Sie haben sich selbst diskreditiert.")
            ),
            ESD(    id = 118,
                    name = "Diskrepanz",
                    definition = "Uneinigkeit oder Nichtübereinstimmung",
                    examples = arrayOf("Hier zeigt sich aber die Diskrepanz zwischen Wunsch und Wirklichkeit.")
            ),
            ESD(    id = 119,
                    name = "diskriminieren",
                    definition = "jemanden in ein unverdient schlechtes Licht setzen",
                    examples = arrayOf("Ihnen unterstellt man wohl, dass sie dazu neigen, andere zu diskriminieren.")
            ),
            ESD(    id = 120,
                    name = "Disput",
                    definition = "Gespräch oder (seltener schriftlicher) Gedankenaustausch zwischen zwei oder mehr Personen, mit dem Ziel, die jeweilige Gegenseite von den eigenen Argumenten zu überzeugen",
                    examples = arrayOf("Der Baden-Badener Disput ist relativ populär.")
            ),
            ESD(    id = 121,
                    name = "Dissens",
                    definition = "unterschiedliche Auffassung, Meinung",
                    examples = arrayOf("Sie trennten sich mit einem unüberwindlichen Dissens.")
            ),
            ESD(    id = 122,
                    name = "dissonant",
                    definition = "nicht zusammenpassend, unstimmig, mit Unstimmigkeiten",
                    examples = arrayOf("Unser letztes Gespräch hat ja leider sehr dissonant geendet.")
            ),
            ESD(    id = 123,
                    name = "distinguiert",
                    definition = "sich durch betont gepflegtes Auftreten oder Ähnliches von anderen abhebend",
                    examples = arrayOf("Sie legte ein sehr distinguiertes Benehmen an den Tag.")
            ),
            ESD(    id = 124,
                    name = "dito",
                    definition = "eine Bestätigung von vorher Genanntem; ich auch, ebenso",
                    examples = arrayOf("„Alles Gute zum neuen Jahr“ — „Dito“")
            ),
            ESD(    id = 125,
                    name = "Diversifikation",
                    definition = "Veränderung, Abwechslung, Vielfalt (Spezialisierung auf mehrere, unterschiedliche Gebiete)",
                    examples = arrayOf("Diversifikation betreiben Firmen, indem sie sich ein weiteres „Standbein“, also ein weiteres Produkt zulegen.")
            ),
            ESD(    id = 126,
                    name = "Dogma",
                    definition = "mit einem kritischen Unterton: Aussage oder Ansicht, die von einer Gruppe von Menschen als nicht verhandelbar angesehen wird",
                    examples = arrayOf("Die Unfehlbarkeit des Papstes ist seit 1870 ein Dogma der katholischen Kirche.")
            ),
            ESD(    id = 127,
                    name = "Duktus",
                    definition = "Linienführung beim Schreiben, Zeichnen und beim Malen",
                    examples = arrayOf("Fachleute erkennen bereits am Duktus, von welchem Künstler das Werk stammt.")
            ),
            ESD(    id = 128,
                    name = "düpieren",
                    definition = "jemanden hereinlegen, täuschen, zum Narren halten",
                    examples = arrayOf("Durch die Aussetzung des Wahlkampfes von John McCain sieht sich sein Konkurrent Barack Obama düpiert.")
            ),
            ESD(    id = 129,
                    name = "dysfunktional",
                    definition = "mit fehlender oder mangelhafter Funktion",
                    examples = arrayOf("Dysfunktional ist eine Uhr, die die Zeit nicht genau angibt.")
            ),
            ESD(    id = 130,
                    name = "echauffieren",
                    definition = "in beunruhigende Erregung versetzen; sich ereifern, sein Gemüt erhitzen",
                    examples = arrayOf("„Eine Unverschämtheit!“, echauffierte er sich.")
            ),
            ESD(    id = 131,
                    name = "eklatant",
                    definition = "auffällig, aufsehenerregend, sensationell (jeweils mit negativer Konnotation)",
                    examples = arrayOf("Dabei mussten sie eine eklatante Niederlage einstecken.", "Auf eklatante Weise hat sich gezeigt, dass…")
            ),
            ESD(    id = 132,
                    name = "eklektisch",
                    definition = "imitierend, nachahmend, unschöpferisch",
                    examples = arrayOf("Die rechte Selbständigkeit ging ihm ab; seine Natur war ebenso eklektisch als encyklopädistisch.")
            ),
            ESD(    id = 133,
                    name = "Ekstase",
                    definition = "Zustand rauschhafter Trance, der Begeisterung, des Kontrollverlustes über das (normale) Bewusstsein",
                    examples = arrayOf("Vollkommen entblößt gerieten Ruth und Bernhard in Ekstase.")
            ),
            ESD(    id = 134,
                    name = "elaboriert",
                    definition = "sorgfältig ausgeführt, sorgfältig herausgebildet, hoch differenziert ",
                    examples = arrayOf("Bediene dich doch bitte einer etwas elaborierteren Sprachform!")
            ),
            ESD(    id = 135,
                    name = "eloquent",
                    definition = "fähig, sich angemessen und wirkungsvoll auszudrücken",
                    examples = arrayOf("Dies ist ein äußerst eloquenter Mann.")
            ),
            ESD(    id = 136,
                    name = "elysisch",
                    definition = "himmlisch, paradiesisch",
                    examples = arrayOf("Wir erlebten elysische Freuden.", "Die Wonne, die uns durchströmte, war wahrhaft elysisch.")
            ),
            ESD(    id = 137,
                    name = "eminent",
                    definition = "herausragend, hervorragend, außerordentlich",
                    examples = arrayOf("Die neue Haltung war nur realisierbar, weil man aus einer eminenten Substanz schöpfen konnte.")
            ),
            ESD(    id = 138,
                    name = "Empathie",
                    definition = "Fähigkeit, sich in die Gefühle anderer Menschen hineinzuversetzen",
                    examples = arrayOf("Die Fähigkeit, Gefühlszustände anderer erkennen, Empathie empfinden und eigene Gefühlszustände regulieren zu können, stammt aus dieser Zeit - …")
            ),
            ESD(    id = 139,
                    name = "Enfant terrible",
                    definition = "jemand, der durch exzentrisches, nicht den Regeln entsprechendes Verhalten seine Umgebung schockiert und provoziert",
                    examples = arrayOf("Der würde weiterhin das Enfant terrible spielen mit rüden Manieren und einem goldenen Pfadfinderherzen.")
            ),
            ESD(    id = 140,
                    name = "engagiert",
                    definition = "vehement für eine Sache eintretend, ein starkes Interesse an einer Sache habend",
                    examples = arrayOf("Der ehemalige politische Gefangene, der jetzt in Deutschland lebt, ist zuversichtlich. „Die Proteste werden weitergehen. Besonders die Frauen sind engagiert und zornig wie nie.“")
            ),
            ESD(    id = 141,
                    name = "entopisch",
                    definition = "ortsgebunden, einheimisch.",
                    examples = arrayOf()
            ),
            ESD(    id = 142,
                    name = "Entrepreneur",
                    definition = "Unternehmer, der meist mit einer innovativen Idee seine Firma begründet hat",
                    examples = arrayOf("Er ist ein erfolgreicher Entrepreneur")
            ),
            ESD(    id = 143,
                    name = "Epiphanie",
                    definition = "plötzliche, unerwartet auftretende Erkenntnis, Offenbarung",
                    examples = arrayOf()
            ),
            ESD(    id = 144,
                    name = "Eremit",
                    definition = "in Zurückgezogenheit lebender Mann (zum Beispiel aus religiöser Überzeugung)",
                    examples = arrayOf("Nicht alle Eremiten haben sich aus religiösen Gründen für ein Leben in Abgeschiedenheit entschieden.")
            ),
            ESD(    id = 145,
                    name = "ero­die­ren",
                    definition = "Boden oder Gestein wegwaschen, abtragen",
                    examples = arrayOf("Das fließende Wasser erodiert das Felsgestein.")
            ),
            ESD(    id = 146,
                    name = "Erotomanie",
                    definition = "wahnhafte, unwiderstehliche, romantische und idealisierte Liebe zu einer meist unerreichbaren Person",
                    examples = arrayOf("Das zentrale Thema der Erotomanie besteht jedoch darin, dass der Verliebte glaubt, von eben jener Person, die meist nichts von dessen Gefühlen weiß, wiedergeliebt zu werden, auch wenn hierfür keinerlei Anzeichen vorhanden sind.")
            ),
            ESD(    id = 147,
                    name = "errare humanum est",
                    definition = "Redewendung: 'Irren ist menschlich'",
                    examples = arrayOf()
            ),
            ESD(    id = 148,
                    name = "erratisch",
                    definition = "verirrt, verstreut, weit weg vom Ursprung",
                    examples = arrayOf("In Libyen ist ein populistisch-revolutionäres Regime entstanden, dessen Entwicklung im Wesentlichen von den Inspirationen seines erratischen Führers abhängt")
            ),
            ESD(    id = 149,
                    name = "eruieren",
                    definition = "etwas durch gründliche Untersuchungen herausfinden; etwas in Erfahrung bringen",
                    examples = arrayOf("Wir konnten den Wohnort des Schuldners eruieren.")
            ),
            ESD(    id = 150,
                    name = "Eskapismus",
                    definition = "Flucht vor der realen Welt",
                    examples = arrayOf("Diese Romane sind der reinste Eskapismus.")
            ),
            ESD(    id = 151,
                    name = "essenziell",
                    definition = "wesentlich; zum Wesen (einer Sache) gehörig",
                    examples = arrayOf("Das ist eine essenzielle Voraussetzung.")
            ),
            ESD(    id = 152,
                    name = "et al.",
                    definition = "Bibliografie: und andere (Autoren)",
                    examples = arrayOf("Nach einer Studie von Pielke et al. (2008) hätte bspw. der \"Great Miami Hurricane\" von 1926 bei heutiger Küstenbesiedlung einen Schaden von 140–157 Milliarden Dollar (doppelt so viel wie Hurrikan Katrina) angerichtet.")
            ),
            ESD(    id = 153,
                    name = "etablieren",
                    definition = "etwas dauerhaft einrichten, ins Leben rufen",
                    examples = arrayOf("Sie haben das neue Geschäft inzwischen erfolgreich etabliert.")
            ),
            ESD(    id = 154,
                    name = "Euphemismus",
                    definition = "sprachlicher Ausdruck, der einen Sachverhalt beschönigend, mildernd oder in verschleiernder Absicht darstellt bzw. benennt",
                    examples = arrayOf("Euphemismen sind z.B. „Kollateralschaden“ für \"unbeabsichtigte Zivilopfer einer Kriegshandlung\" und „freisetzen“ für \"entlassen\".")
            ),
            ESD(    id = 155,
                    name = "euphemistisch",
                    definition = "etwas freundlicher darstellend, als es der Wirklichkeit entspricht",
                    examples = arrayOf("Nullwachstum“ ist eine euphemistische Bezeichnung für Stagnation in der Wirtschaftsentwicklung.", "„Wie ‚Frau‘, so steht auch das Wort ‚Mädel‘ häufig euphemistisch für ›Prostituierte‹.“")
            ),
            ESD(    id = 156,
                    name = "Euphorie",
                    definition = "ein begeisterter Gemütszustand der Lebensfreude, ein vorübergehendes gesteigertes gutes Lebensgefühl",
                    examples = arrayOf("Jetzt in Optimismus oder gar Euphorie auszubrechen, wäre falsch, doch vorsichtige Hoffnungen darf man erstmals hegen.")
            ),
            ESD(    id = 157,
                    name = "Euthanasie",
                    definition = "bewusstes Herbeiführen des Todes eines Menschen durch die Gabe von Medikamente oder einen Abbruch der Behandlung",
                    examples = arrayOf("Erleichterung des Sterbens durch schmerzlindernde Medikamente und Pflege", "Euthanasie im Sinne einer aktiven Sterbehilfe ist in Deutschland gesellschaftlich höchst umstritten.")
            ),
            ESD(    id = 158,
                    name = "evident",
                    definition = "überzeugend, offensichtlich oder klar ersichtlich",
                    examples = arrayOf("Das sieht man doch! Das ist ein evidenter Irrtum.")
            ),
            ESD(    id = 159,
                    name = "Ex abrupto",
                    definition = "überraschend, plötzlich, unversehens",
                    examples = arrayOf("Ex abrupto schwenkte das Wetter um.")
            ),
            ESD(    id = 160,
                    name = "ex ante",
                    definition = "im Vorfeld, vorab, zuvor, vorher",
                    examples = arrayOf("Eine ex ante Planung konnte nicht vorgenommen werden, da nicht alle Daten bekannt waren.", "Die ex ante ermittelten Werte konnten in einer Versuchsmessung bestätigt werden.")
            ),
            ESD(    id = 161,
                    name = "ex­t­rin­sisch",
                    definition = "von außen her (angeregt), nicht aus eigenem Antrieb erfolgend",
                    examples = arrayOf("Da seine Mutter ihm mit Taschengeldentzug drohte, war der kleine Junge extrinsisch motiviert, sein Zimmer aufzuräumen.")
            ),
            ESD(    id = 162,
                    name = "exaltiert",
                    definition = "übertrieben aufgeregt, künstlich übersteigert",
                    examples = arrayOf("Dafür dauerte der exaltierte Gefühlsausbruch allerdings ganz schön lange.")
            ),
            ESD(    id = 163,
                    name = "Exekutive",
                    definition = "ist die ausführende/vollziehende Gewalt; in der Staatstheorie neben Legislative (Gesetzgebung) und Judikative (Rechtsprechung) eine der drei unabhängigen Gewalten (Gewaltenteilung)",
                    examples = arrayOf("Die Exekutive ist eine der drei Gewalten.")
            ),
            ESD(    id = 164,
                    name = "exhumieren",
                    definition = "einen beerdigten Leichnam wieder ausgraben",
                    examples = arrayOf("Erst 1999 durfte der tote Kirchenmann in seine Gemeinde zurückkehren: Erzbischof Jorge Mario Bergoglio ließ Mugicas Leichnam exhumieren, in einer feierlichen Prozession wurde er in die Villa 31 überführt, Bergoglio ging hinter dem Sarg her.")
            ),
            ESD(    id = 165,
                    name = "Exodus",
                    definition = "Vorgang, bei dem Menschen ein Gebiet, ein Land verlassen",
                    examples = arrayOf("Ein in der deutschen Geschichte einmaliger Exodus an Talent und Wissen, an Erfahrungen und an handwerklichem Können setzte ein.")
            ),
            ESD(    id = 166,
                    name = "exorbitant",
                    definition = "gewaltig, außerhalb der Maßstäbe, außergewöhnlich, enorm",
                    examples = arrayOf("Die Preise für Original-Tintenpatronen sind exorbitant.")
            ),
            ESD(    id = 167,
                    name = "Expertise",
                    definition = "Eigenschaften, Fähigkeiten oder Wissen, das eine Person zu einem Experten auf einem Gebiet macht; schriftliches Gutachten eines Fachmanns",
                    examples = arrayOf("Nach der jahrelangen Ausbildung verfügt er über die nötige Expertise, um ein solches Vorhaben durchzuführen.")
            ),
            ESD(    id = 168,
                    name = "Exploration",
                    definition = "Versuch, etwas herauszufinden",
                    examples = arrayOf("Die persönliche Entwicklung oder überhaupt eine Exploration der eigenen Möglichkeiten und Interessen kam dabei häufig zu kurz.")
            ),
            ESD(    id = 169,
                    name = "Exponentiell",
                    definition = "Mathematik: prozentuale (nicht feste) Zunahme oder Abnahme eines Wertes pro Zeiteinheit",
                    examples = arrayOf("Wenn du nicht mal die Zinsen für deinen Kredit bezahlen kannst, wachsen deine Schulden exponentiell.")
            ),
            ESD(    id = 170,
                    name = "exponieren",
                    definition = "sich oder jemand anderen in eine gut einsehbare Position bringen",
                    examples = arrayOf("In der vordersten Stellung waren die Soldaten den Angriffen in besonderem Maße exponiert.")
            ),
            ESD(    id = 171,
                    name = "Exposé",
                    definition = "Grund-/Übersichtsinformation über etwas, Darstellung einer Planung",
                    examples = arrayOf("Das heißt, ich rufe ein paar Leute an und bitte sie, da mal reinzuschauen, und ich versende die ersten drei Kapitel inklusive Exposé an ein paar Verlage.")
            ),
            ESD(    id = 172,
                    name = "extrahieren",
                    definition = "etwas aus einer Mischung herausziehen",
                    examples = arrayOf("Flüssigkeiten kann man diskontinuierlich im Scheidetrichter extrahieren.")
            ),
            ESD(    id = 173,
                    name = "extrovertiert",
                    definition = "der Außenwelt zugewandt",
                    examples = arrayOf("Steve Ballmer und Marilyn Manson sind für ihre äußerst extrovertierten Auftritte bei öffentlichen Veranstaltungen ")
            ),
            ESD(    id = 174,
                    name = "Faible",
                    definition = "Vorliebe, Neigung, Schwäche für etwas oder jemanden; nicht unbedingt begründbare/leicht übertrieben positive Einstellung zu etwas",
                    examples = arrayOf("Er hat ein Faible für schnelle Autos.", "Er hatte ein besonders ausgeprägtes Faible für die Rheinlandschaft.")
            ),
            ESD(    id = 175,
                    name = "Fait accompli",
                    definition = "unumkehrbarer Umstand, eigenmächtig geschaffener Sachverhalt",
                    examples = arrayOf("Würde Kairo dieses Fait accompli anerkennen und einseitig die Grenze zu Gaza öffnen - argumentieren die Ägypter -, so übernähmen sie damit letztlich die Verantwortung für das Überleben des Territoriums, die immer noch bei der Besatzungsmacht Israel liegt.")
            ),
            ESD(    id = 176,
                    name = "Faksimile",
                    definition = "genaue Nachbildung einer Schrift, eines Buches oder einer Zeichnung meist mittels fotografischer Reproduktionsverfahren",
                    examples = arrayOf("Man kann von vielen alten Büchern Faksimiles erwerben.", "Ein gutes Faksimile entspricht der Vorlage sowohl in Größe, als auch Farbe und Erhaltungszustand.")
            ),
            ESD(    id = 177,
                    name = "fakturieren",
                    definition = "gelieferte Waren oder geleistete Dienste in Rechnung stellen; Waren berechnen",
                    examples = arrayOf("Öl und Gas werden in Dollar fakturiert.", "Pro Tag werden bis zu 70.000 Aufträge mit bis zu 650.000 Artikeln von verarbeitet, fakturiert und zu Sendungen zusammengestellt")
            ),
            ESD(    id = 178,
                    name = "fakultativ",
                    definition = "möglich, aber nicht zwingend erforderlich; freiwillig",
                    examples = arrayOf("Der Ausflug auf dem Kreuzfahrtschiff ist fakultativ, er gehört nicht zum Pflichtprogramm und ist in der Regel mit Zusatzkosten verbunden.")
            ),
            ESD(    id = 179,
                    name = "falsifizieren",
                    definition = "(eine Behauptung) durch Gegenbeispiel, Beobachtung oder Experiment widerlegen",
                    examples = arrayOf("Durch ein Gegenbeispiel ist die Theorie falsifiziert.")
            ),
            ESD(    id = 180,
                    name = "Faschismus",
                    definition = "Herrschaftssystem in Italien von 1922 bis 1945, nationalistische (chauvinistische), antidemokratische, rechtsradikale, antisozialistische und antikommunistische nach dem Führungsprinzip organisierte politische Bewegung, Ideologie sowie Herrschaftsform",
                    examples = arrayOf("Der Faschismus war die Ideologie, die den Diktaturen von Benito Mussolini und seiner Partito Nazionale Fascista (PNF) in Italien 1922–43 sowie von Adolf Hitler und seiner Nationalsozialistischen Deutschen Arbeiterpartei (NSDAP) in Deutschland 1933–45 zugrunde lag.")
            ),
            ESD(    id = 181,
                    name = "Fasson",
                    definition = "Lebensart eines Menschen; Kleidung, Frisur: eine bestimmte Form, Machart",
                    examples = arrayOf("Herr Schmidt lebte schon immer ganz nach seiner Fasson.", "Kaum war ich vor die Tür gegangen, war meine neue Frisur schon ganz aus der Fasson.")
            ),
            ESD(    id = 182,
                    name = "fatal",
                    definition = "unangenehm, verhängnisvoll, peinlich, ungünstig, schwerwiegend",
                    examples = arrayOf("eine fatale (unangenehme, peinliche) Angelegenheit", "Es wäre fatal, würde ihm auf der Bühne die Hose herunter rutschen.")
            ),
            ESD(    id = 183,
                    name = "Fatalismus",
                    definition = "eine Weltanschauung, die alle Geschehnisse dem Schicksal zuordnet",
                    examples = arrayOf("Und er verwirft den Fatalismus, weil er ein freier Mensch und nicht ein Teil einer, wenn auch Himmel und Erde umfassenden Maschinerie sein will.")
            ),
            ESD(    id = 184,
                    name = "feminin",
                    definition = "für Frauen passend, den Eigenschaften einer Frau ähnelnd beziehungsweise entsprechend",
                    examples = arrayOf("Eine hübsche Person femininen Geschlechts", "Er zeigt sich eher von seiner femininen Seite.", "„die Sache“ ist feminin, „das Weib“ ist ein Neutrum.")
            ),
            ESD(    id = 185,
                    name = "Femme fatale",
                    definition = "ein besonders attraktiver und verführerischer Frauentypus, der – mit magisch-dämonischen Zügen ausgestattet – Männer erotisch an sich bindet, sie aber auch manipuliert",
                    examples = arrayOf("Eine Femme Fatale sein")
            ),
            ESD(    id = 186,
                    name = "Fertilität",
                    definition = "Fähigkeit zur Fortpflanzung",
                    examples = arrayOf("Starkes Rauchen schädigt den Uterus und verringert die Fertilität, denn die befruchtete Eizelle kann sich nur schwer im Endometrium einnisten.")
            ),
            ESD(    id = 187,
                    name = "Fiasko",
                    definition = "Misserfolg, Reinfall, soziale oder wirtschaftliche Katastrophe",
                    examples = arrayOf("Die Aufführung endete in einem Fiasko, als die Sopranistin sich in den Orchestergraben erbrach.", "Es gab von Beginn an warnende Stimmen, daß ein derartiges Projekt im Fiasko enden mußte.")
            ),
            ESD(    id = 188,
                    name = "filibustern",
                    definition = "ausschweifend reden, um unangenehme Dinge (wie Entscheidungen oder Abstimmungen) zu verhindern oder zu verzögern",
                    examples = arrayOf("Sie wollen doch nur filibustern, Herr Schiller! Weiter wollen Sie doch gar nichts!", "Die Grünen haben dann angekündigt zu filibustern. Sie hatten zu allen Tagesordnungspunkten in der Nacht Änderungsanträge geschrieben, über 100.")
            ),
            ESD(    id = 189,
                    name = "filigran",
                    definition = "sehr fein, feingliedrig",
                    examples = arrayOf("Dieses Schmuckstück wurde filigran verarbeitet.", "Hier sehen Sie eine sehr filigran verarbeitete Holzflöte.", "Sie bieten hier auf ein filigranes Schmuckstück.")
            ),
            ESD(    id = 190,
                    name = "Filius",
                    definition = "bildungssprachlich, scherzhaft: männlicher Nachkomme",
                    examples = arrayOf("Für den Vorstadt-Familienvater gab es nur eine Möglichkeit, den Filius, der zu Unrecht verurteilt wurde, zu retten.")
            ),
            ESD(    id = 191,
                    name = "flamboyant",
                    definition = "energisch, farbenfroh, sehr bunt, flammend, geflammt",
                    examples = arrayOf("Der Dichter setzte sich als flamboyanter Lebemann in Szene.", "Heute trägt Trude wieder eine flamboyante Auswahl an Kleidungsstücken.")

            ),
            ESD(    id = 192,
                    name = "flanieren",
                    definition = "langsam, ohne besonderes Ziel umherschlendern",
                    examples = arrayOf("Ich flanierte in der wiederaufgebauten Altstadt, ging in jede Kirche, spazierte im Park.", "In deutschen und anderen europäischen Städten kann man flanieren: Man schlendert ohne Eile, verweilt hier und da, um etwas genauer zu betrachten.")
            ),
            ESD(    id = 193,
                    name = "Fluktuation",
                    definition = "unregelmäßige, zufällige Veränderung, Schwankung; zum Beispiel die Fluktuation um einen Mittelwert oder zwischen zwei Extremen",
                    examples = arrayOf("In den Zellen herrschte jetzt zwar eine höhere Fluktuation, doch die Zahl der Gefängnisinsassen war immer noch gefährlich hoch.", "Der Börsenkurs unterlag im letzten Monat starken Fluktuationen.")
            ),
            ESD(    id = 194,
                    name = "Foyer",
                    definition = "großer Vorraum in einer Oper, einem Theater, Konzertsaal etc., der dem Aufenthalt und der Kommunikation des Publikums dient",
                    examples = arrayOf("Er sah sich im Foyer um.", "Wir treffen uns in der Pause im Foyer.")
            ),
            ESD(    id = 195,
                    name = "fragil",
                    definition = "leicht zerbrechlich",
                    examples = arrayOf("Dein Kartenhaus sieht aber ziemlich fragil aus.", "Um die fragile Eintracht in ihrer Heimat zu wahren, haben die Siedler die Thinge geschaffen.")
            ),
            ESD(    id = 196,
                    name = "frappierend",
                    definition = "in Erstaunen versetzend; auch: frappant",
                    examples = arrayOf("Es kam zu einem frappierenden Abschluss der Veranstaltung.")
            ),
            ESD(    id = 197,
                    name = "fraternisieren",
                    definition = "Brüderschaft schließen; vertraut werden, Freundschaft schließen (vor allem von Soldaten mit der Bevölkerung eines besiegten Landes)",
                    examples = arrayOf("Statt das Gewehr auf die Nationalgarde zu richten, wandte sie die Gewehrkolben nach oben und fraternisierte mit dem Volk.", "Die Polen kommen; sie stehen schon südlich von Küstrin und wollen auf Berlin zu, um mit dem Berliner Volk zu fraternisieren.")
            ),
            ESD(    id = 198,
                    name = "frenetisch",
                    definition = "mit größter Begeisterung",
                    examples = arrayOf("Wegen der frenetischen Zuschauer musste das Spiel abgebrochen werden.", "Die Menge jubelte frenetisch.")
            ),
            ESD(    id = 199,
                    name = "frigide",
                    definition = "kühl, frostig",
                    examples = arrayOf("Eine frigide Frau empfindet keine Lust.", "Rochelle war frigide geworden und ließ ihn nicht mehr an sich heran.")
            ),
            ESD(    id = 200,
                    name = "frugal",
                    definition = "schlicht, spärlich, karg (wird meist in Hinblick auf Speisen verwendet)",
                    examples = arrayOf("Er konnte wieder ein frugales Mahl zu sich nehmen.", "Der Einsidler tischte uns ein frugales Mahl auf, nach dem jeder nur noch ans Schlafen dachte.")
            ),
            ESD(    id = 201,
                    name = "fulminant",
                    definition = "plötzlich beginnend, heftig und schnell verlaufend",
                    examples = arrayOf("Das Feuerwerk war fulminant.", "Die frühzeitige Diagnose ist Voraussetzung, um den gewöhnlich fulminanten Verlauf dieser Pilzpneumonie zu verhindern")
            ),
            ESD(    id = 202,
                    name = "Fundament",
                    definition = "Grundlage von etwas; der Unterbau eines Gebäudes oder einer Maschine, ",
                    examples = arrayOf("Für das Fundament des Hauses ist noch Erde auszuheben.", "Vertrauen ist das Fundament einer glücklichen Partnerschaft.")
            ),
            ESD(    id = 203,
                    name = "fundamental",
                    definition = "die Grundlage, das Fundament betreffend",
                    examples = arrayOf("Das Vertrauen ist fundamental in einer Beziehung.")
            ),
            ESD(    id = 204,
                    name = "fundamentalistisch",
                    definition = "Personen oder Gruppen, die unnachgiebig an ihren ideologischen oder religiösen Grundsätzen festhalten",
                    examples = arrayOf("Gruppen fundamentalistischer Christen könnte man vereinfacht auch als bibeltreu bezeichnen, da sie der Bibel absolute Irrtumslosigkeit attestieren.")
            ),
            ESD(    id = 205,
                    name = "fungieren",
                    definition = "wirken (als), sich betätigen (als), (als etwas) dienen",
                    examples = arrayOf("Er fungierte im alten China als Berater des Kaisers.")
            ),
            ESD(    id = 206,
                    name = "Furore",
                    definition = "meist in der Bedeutung ‚Furore machen‘: Aufsehen, Raserei, höchste Begeisterung",
                    examples = arrayOf("Deutschlands Curling-Männer sorgen bei der WM in Peking weiter für Furore.", "Lady Gaga sorgte mit nicht mit ihrem Auftritt allein für Furore - auch ihr hoch geschlitztes Kleid war ein Hingucker bei der Preisverleihung in New York.")
            ),
            ESD(    id = 207,
                    name = "Futurismus",
                    definition = "architektonischer, musikalischer, künstlerischer oder produktgestalterischer Stil, der auf Vorstellungen über die Zukunft basiert beziehungsweise der Versuch mit künstlerischen Mitteln die Zukunft zu erfassen und abzubilden",
                    examples = arrayOf()
            ),
            ESD(    id = 208,
                    name = "gerieren",
                    definition = "sich auf eine bestimmte Weise verhalten",
                    examples = arrayOf(" Er geriert sich seit Tagen so, als habe er seine Prüfung schon in der Tasche.")
            ),
            ESD(    id = 209,
                    name = "gustatorisch",
                    definition = "den Geschmackssinn betreffend",
                    examples = arrayOf("Das Mahl sieht aus wie zusammengewürfelt, aber gustatorisch sagt es mir dennoch zu.")
            ),
            ESD(    id = 210,
                    name = "haptisch",
                    definition = "den Tastsinn betreffend, auf ihm beruhend",
                    examples = arrayOf("Es war der vielleicht haptischste Versuch, den Raum als Ganzes zurückzuerobern, seit dieser nicht mehr gebraucht wurde von PC und Bildschirm.", "Der Tastsinn ist die haptische Wahrnehmung von Lebewesen.")
            ),
            ESD(    id = 211,
                    name = "harmonisieren",
                    definition = "in Einklang bringen",
                    examples = arrayOf("Durch den Vorschlag des Schlichters gelang es, die Interessen beider Partein zu harmonisieren.")
            ),
            ESD(    id = 212,
                    name = "Hasardeur",
                    definition = "jemand, der leichtsinnig ein hohes Risiko eingeht",
                    examples = arrayOf("„Geheimdienstveteranen des Kalten Krieges sind dabei, die den neuen Präsidenten für einen Hasardeur halten.“", "Er führt sich wie ein Hasardeur auf.")
            ),
            ESD(    id = 213,
                    name = "Hausse",
                    definition = "Aufschwung, Erhöhung der Konjunktur für etwas, besonders der Wirtschaft",
                    examples = arrayOf("Ich habe damals auf Hausse spekuliert und es hat sich ausgezahlt.")
            ),
            ESD(    id = 214,
                    name = "Hedonismus",
                    definition = "Streben nach Sinneslust und Genuss; Lehre, dass das Streben nach Genuss und Sinneslust die höchsten Werte des Lebens seien; eine an den Genusssüchten des Lebens orientierte Grundeinstellung",
                    examples = arrayOf("Der griechische Philosoph Aristippos von Kyrene gilt als der Begründer des Hedonismus.", "Für ihn ist Hedonismus ein Lebensprinzip.")
            ),
            ESD(    id = 215,
                    name = "heroisieren",
                    definition = "jemanden als Helden verehren oder als heldenhaft darstellen",
                    examples = arrayOf("Trotz seiner Gewalttaten wurde der Guerillaführer vom Volk heroisiert.")
            ),
            ESD(    id = 216,
                    name = "heterogen",
                    definition = "uneinheitlich, aus Ungleichartigem zusammengesetzt; einer anderen Gattung angehörend",
                    examples = arrayOf("Beispiele für homogene Stoffgemische sind: Mehl, Messing, Speisefett, Wein, Tee, Salzlösungen, Luft oder Erdgas.")
            ),
            ESD(    id = 217,
                    name = "Hommage",
                    definition = "(künstlerisches) Werk, das als Ehrung für jemanden entworfen wurde, der eine Art Vorbildfunktion hatte, oder für etwas, das besonders inspirierend war",
                    examples = arrayOf("Aus diesem Blickwinkel betrachtet, galt deshalb mein spätherbstlicher Besuch mehr einer Hommage an die Vergangenheit, als einer der sonst üblichen eingespielten gastronomischen Bestandsaufnahmen.")
            ),
            ESD(    id = 218,
                    name = "honett",
                    definition = "veraltend: in einer eher naiven Art anständig, ehrenhaft und rechtschaffen, und dadurch Achtung hervorrufend",
                    examples = arrayOf("Sie ist eine honette Frau.", "Vor dem Palast stehen sauber ausgerichtet die Kanonen und Feldschlangen, mit denen die Vorfahren des jetzigen und durchaus honetten Fürsten die Passanten belästigten.")
            ),
            ESD(    id = 219,
                    name = "honorieren",
                    definition = "eine erbrachte Leistung bezahlen, eine vollbrachte Leistung verbal oder durch Taten positiv rückmelden",
                    examples = arrayOf("Seine erbrachte Leistung wird mit Bargeld honoriert.", "Ruhm und Ehre honorieren Eure Taten.")
            ),
            ESD(    id = 220,
                    name = "Hybris",
                    definition = "realitätsfernes, maßloses und unangemessenes Vertrauen in die Handlungen der eigenen Person, Größenwahn, Selbstüberschätzung, Überheblichkeit",
                    examples = arrayOf("Solche Hybris war im imperialistischen 19. Jahrhundert der Normalfall.")
            ),
            ESD(    id = 221,
                    name = "Hypothese",
                    definition = "bloße Annahme, Behauptung ohne Beleg; Wissenschaft: unbewiesene (wissenschaftliche) Annahme, die noch eines Beweises bedarf",
                    examples = arrayOf("Hypothesen kann man induktiv aufgrund von Beobachtungen, aber auch deduktiv durch Ableitung aus Gesetzen oder gar einer Theorie gewinnen und müssen noch überprüft werden.", "Entscheidend ist, daß Phantasie und Einfallsreichtum auf glückliche Fragen und fruchtbare Hypothesen führen.")
            ),
            ESD(    id = 222,
                    name = "Hysterie",
                    definition = "mittlerweile veralteter Fachbegriff: neurotische Störung, Neurose; übertriebene Erregbarkeit",
                    examples = arrayOf("Die Hysterie ist eine Bezeichnung für eine neurotische Störung, bei der Geltungsbedürfnis, Egozentrismus und ein Bedürfnis nach Anerkennung zwar im Vordergrund stehen, die jedoch oft mit dem Symbol eines Paradiesvogels in Verbindung gebracht wird, da sie zu differenziert ist und dadurch kein einheitliches Erscheinungsbild aufweist.")
            ),
            ESD(    id = 223,
                    name = "idiosynkratisch",
                    definition = "spezifisch, eigentümlich; Eigenschaft, nur bei einzelnen Wörtern vorzukommen und sich nicht aus Regeln zu ergeben; einer Idiosynkrasie entsprechend",
                    examples = arrayOf("Ein Wort wie \"Löwenzahn\" ist in seiner Bedeutung idiosynkratisch; man kann die Bedeutung nicht aus der Bedeutung seiner Wortteile (Konstituenten) herleiten. (Ein \"Löwenzahn\" ist nicht der Zahn eines Löwen.)")
            ),
            ESD(    id = 224,
                    name = "Illusorisch",
                    definition = "nicht realistisch; nur auf Hoffnungen beruhend; zwecklos, unmöglich",
                    examples = arrayOf("Die Blockade Englands, mit der man die Insel aushungern wollte, ist illusorisch geworden.")
            ),
            ESD(    id = 225,
                    name = "immanent",
                    definition = "innerhalb der Grenzen der Erfahrung, der Erkenntnis bleibend; vorstellbar; im Innern eines Gegenstandes, einer Erscheinung vorhanden seiend; innewohnend",
                    examples = arrayOf("Ein mathematischer dreidimensionaler Raum ist immanent.", "Ein weiteres immanentes Problem des ökonomischen Föderalismus-Ansatzes liegt darin, daß die Ableitung der optimalen Föderationsstruktur aus dem individuellen Nutzenkalkül zur Konzentration auf ein Kollektiv unter vielen führt.")
            ),
            ESD(    id = 226,
                    name = "immens",
                    definition = "derart unermesslich, über die Maßen, überdimensioniert, groß oder riesig, dass es in Erstaunen versetzt",
                    examples = arrayOf("Deine Hobbys verursachen immense Kosten.", "Sein Stromverbrauch ist immens.", "In der Atmosphäre schlummern immense Energien.")
            ),
            ESD(    id = 227,
                    name = "imperativ",
                    definition = "befehlend, zwingend, bindend",
                    examples = arrayOf("An einer Türe, die gemäss einschlägigem Piktogramm zweifelsfrei als Männertoilette identifiziert werden kann, ist ein papierenes Schild mit folgender imperativer Aufschrift angeschlagen worden: «Bitte Türe immer schliessen! Danke.")
            ),
            ESD(    id = 228,
                    name = "impertinent",
                    definition = "aufdringlich, dummdreist, unverschämt, vorlaut",
                    examples = arrayOf("Etwas an dieser Antwort kam Humboldt impertinent vor, doch er war zu müde, um darüber nachzudenken.")
            ),
            ESD(    id = 229,
                    name = "Impetus",
                    definition = "innerer, begeisterter Antrieb einer Person; Schwung; Anfangsenergie, die eine Sache in Bewegung setzen kann; Anstoß",
                    examples = arrayOf("Ich glaube nicht, daß von heute zu morgen wieder jener Impetus in die Wirtschaft hineinkommt, der das eigentliche Kennzeichen einer guten Konjunktur ist.")
            ),
            ESD(    id = 230,
                    name = "implizieren",
                    definition = "mit aussagen einschließen; auch ohne es ausdrücklich auszusprechen",
                    examples = arrayOf("Die Annahme, die Quadratwurzel der Zwei sei eine rationale Zahl, impliziert nach dem bekannten Beweis Euklids einen Widerspruch zu dieser Annahme.", "Mit dieser Aussage möchten Sie implizieren, dass …")
            ),
            ESD(    id = 231,
                    name = "implizit",
                    definition = "unausgesprochen mitgemeint, mitverstanden",
                    examples = arrayOf("Sie brachten ihre Kritik vorsichtshalber nur implizit an und waren dadurch nicht angreifbar.")
            ),
            ESD(    id = 232,
                    name = "Imponderabilien",
                    definition = "unwägbare Gegebenheiten, also z. B. Befindlichkeiten, Gefühls- und Stimmungsschwankungen oder nicht quantifizierbare Risiken. Der Ausdruck wird nur im Plural verwendet",
                    examples = arrayOf("Vieles lässt sich planen, Imponderabilien können aber nie ganz ausgeschlossen werden.")
            ),
            ESD(    id = 233,
                    name = "Improvisation",
                    definition = "die Kunst, unvorbereitet, unmittelbar und spontan etwas darzubieten oder herzustellen, meist im Theater, in der Musik, oder beim Tanz",
                    examples = arrayOf("Im Jazz werden sehr oft Improvisationen gespielt.")
            ),
            ESD(    id = 234,
                    name = "impulsiv",
                    definition = "plötzlichen Eingebungen folgend, launenhaft, launisch, unüberlegt",
                    examples = arrayOf("Vielleicht habe ich da zu impulsiv gehandelt.")
            ),
            ESD(    id = 235,
                    name = "in flagranti",
                    definition = "auf frischer Tat",
                    examples = arrayOf("Er hätte jubiliert, wenn er mich in flagranti erwischt hätte.", "Die Polizei ertappte den Dieb in flagranti, als er gerade ein Fahrrad stehlen wollte.")
            ),
            ESD(    id = 236,
                    name = "in puncto",
                    definition = "im Hinblick auf, hinsichtlich",
                    examples = arrayOf("Frauen trinken aber auch viel Tee, um sich möglichst viel Flüssigkeit zuzuführen und es in puncto Gesundheit den Topmodels gleichzutun.")
            ),
            ESD(    id = 237,
                    name = "in­di­zie­ren",
                    definition = "in ein Register oder einen Index aufnehmen, indexieren, anzeigen; verbotene Werke in ein spezielles Verzeichnis verbotener Werke, den sogenannten Index, setzen.",
                    examples = arrayOf("Seine starken Schmerzen indizierten die Behandlung mit Morphium.", "In Deutschland werden viel mehr Computerspiele indiziert als in manch anderem Land.")
            ),
            ESD(    id = 238,
                    name = "in­t­rin­sisch",
                    definition = "von sich aus aufweisend; einem Ding oder System innewohnend, ohne äußere Ursache oder Beeinflussung vorliegend",
                    examples = arrayOf("Dieser Gegenstand ist für mich von intrinsischem Wert", "Wer seine Arbeit aus eigenem Antrieb leistet, ist intrinsisch motiviert, wer dasselbe nur des Geldes wegen tut, dessen Motivation ist extrinsisch.")
            ),
            ESD(    id = 239,
                    name = "indifferent",
                    definition = "unentschieden zwischen oder gleichgültig gegenüber mehreren Möglichkeiten",
                    examples = arrayOf("Dieser Behauptung stehe ich völlig indifferent gegenüber. Ich habe dazu keine vorgefasste Meinung.", "Ich bin hier indifferent, teils stimme ich zu, teils lehne ich auch ab.", "Trotz der heftigen Auseinandersetzung verhielt er sich diesmal völlig indifferent.")
            ),
            ESD(    id = 240,
                    name = "indigniert",
                    definition = "von etwas unangenehm, peinlich berührt, weil es zum Beispiel die Normen oder die Würde verletzt",
                    examples = arrayOf("Die Gräfin war äußerst indigniert über den Vorfall.", "Er setzte eine auffällig indignierte Miene auf.")
            ),
            ESD(    id = 241,
                    name = "Indikator",
                    definition = "Hilfsmittel, das die Verfolgung intransparenter Abläufe ermöglicht, indem es das Erreichen oder Verlassen bestimmter Zustände anzeigt",
                    examples = arrayOf("Eine gefrorene Autoscheibe ist ein Indikator für tiefe Temperaturen und damit für mögliches Glatteis auf der Straße.", "Der Artikel ist ein Indikator für die Groß- und Kleinschreibung eines Wortes.")
            ),
            ESD(    id = 242,
                    name = "Indiskutabel",
                    definition = "nicht erwägenswert, unannehmbar",
                    examples = arrayOf("Marvins Vorschläge sind leider indiskutabel.", "Das ist eine ganz indiskutable Idee.", "Dein Vorhaben ist indiskutabel.")
            ),
            ESD(    id = 243,
                    name = "infam",
                    definition = "niederträchtig, abscheulich, böswillig, bösartig; umgangssprachlich: fürchterlich, stark; sehr",
                    examples = arrayOf("Dies war wieder eine seiner infamen Lügen.", "Er hat bei seiner Schilderung wieder infam übertrieben.")
            ),
            ESD(    id = 244,
                    name = "infantil",
                    definition = "das Kind betreffend; abwertend: nicht reif, unterentwickelt",
                    examples = arrayOf("Ich verspürte eine infantile Freude, als ich das neue Spiel ausprobierte.", "Mit deinem infantilen Verhalten nimmt Dich niemand ernst.")
            ),
            ESD(    id = 245,
                    name = "inflationär",
                    definition = "mit den Merkmalen einer Inflation; bezogen auf eine Inflation; übertragen, allgemein: mit steigender Häufigkeit; in Form einer Inflation",
                    examples = arrayOf("Die inflationären Tendenzen veranlassten den Präsidenten der Europäischen Zentralbank, am Markt Wertpapiere zu verkaufen und so die Geldmenge zu verringern.", "Vielen Lehrern missfällt der inflationäre Gebrauch des Wortes Scheiße im Unterricht.")
            ),
            ESD(    id = 246,
                    name = "inhibieren",
                    definition = "die Ausführung (eines Vorgangs) nicht zustande kommen lassen; veraltet: einer Sache Einhalt gebieten",
                    examples = arrayOf("Außerdem soll es eine Möglichkeit geben, dieses Verhalten zu inhibieren, falls es sich störend auf andere Verhalten [des Roboters] auswirken könnte.")
            ),
            ESD(    id = 247,
                    name = "initiieren",
                    definition = "einen Anfangsimpuls zu etwas geben; etwas in die Wege leiten",
                    examples = arrayOf("Die Bewerbung wurde durch einen Beschluss des Stadtrates initiiert.")
            ),
            ESD(    id = 248,
                    name = "inkludieren",
                    definition = "etwas beinhalten",
                    examples = arrayOf("Die Massage wurde bereits im Preis inkludiert.")
            ),
            ESD(    id = 249,
                    name = "Inkluse",
                    definition = "Biologie, Geologie: Fossiler Einschluss von kleinen Tieren oder Pflanzenteilen in Bernstein",
                    examples = arrayOf("Im baltischen Bernstein finden sich häufig Inklusen.")
            ),
            ESD(    id = 250,
                    name = "Inklusion",
                    definition = "ein Einschluss, eine Einschließung oder das Einschließen",
                    examples = arrayOf("Die Inklusion findet noch nicht statt.")
            ),
            ESD(    id = 251,
                    name = "Innovation",
                    definition = "Einführung von etwas Neuem vor allem in Gesellschaft, Politik, Technik oder Wirtschaft, von dem man sich wesentliche Verbesserungen verspricht",
                    examples = arrayOf("Eine Innovation mit vielen Konsequenzen war die Erfindung des Internets.")
            ),
            ESD(    id = 252,
                    name = "insistieren",
                    definition = "sich von etwas nicht abbringen lassen, beharren",
                    examples = arrayOf("Insistiert auf eurer Position!", "Statt zu insistieren, setzte der Minister eine Arbeitsgruppe ein.")
            ),
            ESD(    id = 253,
                    name = "Insolvenz",
                    definition = "Konsequenz der Zahlungsunfähigkeit",
                    examples = arrayOf("Die Zahl der Insolvenzen war gestiegen.", "Traditions-Designschmiede Bertone steht nach über 100 Jahren vor der Insolvenz.")
            ),
            ESD(    id = 254,
                    name = "insuffizient",
                    definition = "Medizin: nicht ausreichend",
                    examples = arrayOf("Als insuffizient gelten \"in der Medizin üblicherweise Organe mit mangelhafter Funktion, die eine Homöostase nicht mehr gewährleistet, oder Therapien, die nicht zum Heilungserfolg führen.\"")
            ),
            ESD(    id = 255,
                    name = "integer",
                    definition = "unberührt, unversehrt, moralisch einwandfrei, unbescholten, unbestechlich",
                    examples = arrayOf("Was du getan hast, war integer, ich war ganz deiner Meinung!", "Sieh zu, dass du integer bleibst.")
            ),
            ESD(    id = 256,
                    name = "Interdependenz",
                    definition = "gegenseitige Abhängigkeit",
                    examples = arrayOf("Nur durch Interdependenz läßt sich erhellen, was eine Wissenschaft kennzeichnet und auszeichnet.", "Von Interdependenz in einer Beziehungsform redet man dann, wenn das Verhalten eines Partners das des anderen bedingt und umgekehrt")
            ),
            ESD(    id = 257,
                    name = "intermittierend",
                    definition = "fachsprachlich, Technik, Medizin: zeitweilig aussetzend, wechselnd",
                    examples = arrayOf("Dieser Effekt tritt intermittierend auf, wir wissen noch nicht, warum.")
            ),
            ESD(    id = 258,
                    name = "intrikat",
                    definition = "veraltet: durch viele feine Details und große Komplexität gekennzeichnet",
                    examples = arrayOf("Diese Erzählung der Minnenden ist so topisch trivial, wie auf eine gewisse Weise auch intrikat. ")
            ),
            ESD(    id = 259,
                    name = "introvertiert",
                    definition = "verschlossen, Kontakt mit der Außenwelt meidend",
                    examples = arrayOf("Peter ist ein ausgesprochen introvertierter Mensch.")
            ),
            ESD(    id = 260,
                    name = "intuitiv",
                    definition = "auf einer plötzlichen Ahnung, Vermutung beruhend, durch sie bewirkt",
                    examples = arrayOf("Intuitiv traf er die richtige Entscheidung.")
            ),
            ESD(    id = 261,
                    name = "invertiert",
                    definition = "die Umkehrung eines Zustandes oder Wertes beinhaltend",
                    examples = arrayOf()
            ),
            ESD(    id = 262,
                    name = "Ironie",
                    definition = "verhüllter Spott, bei dem ein Unterschied zwischen wörtlicher und wirklicher Bedeutung besteht",
                    examples = arrayOf("Jemand erzählt einen schlechten Witz. Darauf reagiert eine andere Person mit Ironie: „Sehr witzig!“")
            ),
            ESD(    id = 263,
                    name = "Isolation",
                    definition = "Abgeschiedenheit, Abgetrenntheit von bestimmten anderen Einflüssen, Abkapselung; Material mit hohem Widerstand gegen elektrischen Stromfluss",
                    examples = arrayOf("Er lebte in völliger Isolation.", "Die Isolation des Kabels besteht aus einer Art Gummi.")
            ),
            ESD(    id = 264,
                    name = "Jour fixe",
                    definition = "fester, wiederkehrender, gemeinsamer Termin einer kleinen Personengruppe",
                    examples = arrayOf("Jeden Mittwoch um 10 Uhr treffen wir uns zum Jour fixe.")
            ),
            ESD(    id = 265,
                    name = "jovial",
                    definition = "im Umgang mit anderen Personen freundlich und entgegenkommend, dies aber auf eine betonte Art, die gönnerisch oder herablassend wirken kann",
                    examples = arrayOf("Unser Chef klopfte dem neuen Mitarbeiter gleich jovial auf die Schulter.")
            ),
            ESD(    id = 266,
                    name = "Kabale",
                    definition = "heimtückische, hinterhältige Machenschaft zur Erreichung bösartiger Ziele",
                    examples = arrayOf("Kein Thema für die Drahtzieher dieser finsteren innerparteilichen Kabale. Statt dessen verschanzen sich diese Leute hinter nichtssagenden Redensarten.")
            ),
            ESD(    id = 267,
                    name = "kafkaesk",
                    definition = "absurd und so bedrohlich, dass es einem Angst macht; im Stil von Franz Kafka, ",
                    examples = arrayOf("Im Kampf gegen das französische Sozialmodell legt sie sich regelmäßig mit der Regierung an, deren Gesetze sie „kafkaesk und unlesbar“ nennt.", "Nicht von ungefähr mutet im Roman manches kafkaesk an, von hintergründiger Komik, die mit abrupten Schnitten zwischen den Szenen gleich wieder aufgelöst wird.")
            ),
            ESD(    id = 268,
                    name = "Kakophonie",
                    definition = "Laute und Lautverbindungen, die besonders hart, unangenehm oder unästhetisch klingen.",
                    examples = arrayOf("Die »schönsten« Gedichte einer Sprache können für jemanden, der diese Sprache nicht kennt, als reinste Kakophonie klingen.", "Ihn rief ich an, weil er Dolmetscher bei der Europäischen Union in Brüssel ist und tagtäglich in den Genuss einer aufregenden Kakophonie von multinationalem Genörgel kommt.")
            ),
            ESD(    id = 269,
                    name = "kapriziös",
                    definition = "auf attraktive Weise launisch, unberechenbar",
                    examples = arrayOf("Man sagt vor allem von Frauen, die auf eine eigentlich nicht unangenehme Weise mit immer neuen, unerwarteten Einfällen überraschen, sie seien kapriziös.", "Käthes Einfall, den Ring zu vergolden, war kapriziös.")
            ),
            ESD(    id = 270,
                    name = "Karenz",
                    definition = "Freistellung seitens der Firma wegen berechtigter Gründe wie Geburt, Kindererziehung oder Weiterbildung",
                    examples = arrayOf("Wenn Männer von der Karenz die letzten sechs Monate nicht beanspruchen, darf die Frau trotzdem nicht länger als eineinhalb Jahre auf Karenz gehen.", "Immer mehr Väter gehen in Karenz, dafür aber immer kürzer, wie eine aktuelle Studie der Arbeiterkammer zeigt.")
            ),
            ESD(    id = 271,
                    name = "Kaschieren",
                    definition = "unerwünschte Aspekte/ Eigenschaften durch gezielte Maßnahmen verbergen",
                    examples = arrayOf("Das Loch wurde mit einer Blume kaschiert.", "Er kaschiert seine Angst durch gesteigertes Engagement.", "Buchdeckel werden oft mit schönen Abbildungen kaschiert.")
            ),
            ESD(    id = 272,
                    name = "Katharsis",
                    definition = "die Befreiung von psychischen/seelischen Konflikten durch eine emotionale Handlung",
                    examples = arrayOf("Schafft der Fußball soziale Katharsis?", "Das Plakat von Karl Kraus, das um diese Zeit angeschlagen wurde, hatte die Wirkung einer Katharsis und erlöste mich von dieser Lähmung.")
            ),
            ESD(    id = 273,
                    name = "Kausalität",
                    definition = "Prinzip, nach dem jede Wirkung eine Ursache hat oder Ursache einer anderen Wirkung ist; Strafrecht: Verbindung zwischen Handlung des Täters und dem Erfolgseintritt",
                    examples = arrayOf("Einstein forderte zur Aufrechterhaltung der Kausalität, daß es keine Signale mit Überlichtgeschwindigkeit geben darf (Kausalitätsprinzip).")
            ),
            ESD(    id = 274,
                    name = "Klamauk",
                    definition = "umgangssprachlich: Lärm, Unsinn",
                    examples = arrayOf("Hör auf mit diesem Klamauk!")
            ),
            ESD(    id = 275,
                    name = "klandestin",
                    definition = "unbeobachtet, im Verborgenen befindlich, geheim gehalten",
                    examples = arrayOf("Er schob ihr klandestin einen Zettel zu.", "Der BND fürchtet nun, dass ein möglicher Prozess umfangreichen Einblick in die klandestine Operation ermöglicht, die lange Jahre als eine der wichtigsten Spionageaktionen der Dienste galt…")
            ),
            ESD(    id = 276,
                    name = "kognitiv",
                    definition = "erkenntnismäßig, auf Erkenntnis beruhend, das Denken betreffend",
                    examples = arrayOf("Kognitive Lernziele beschreiben alles, was mit dem Verstand erfasst wird, sowohl Faktenwissen, als auch kreative Anwendung von Wissen und das Lösen von Problemen.")
            ),
            ESD(    id = 277,
                    name = "kohärent",
                    definition = "zusammenhängend, verbunden mit, einheitlich",
                    examples = arrayOf("Diese Ausarbeitung ist nicht besonders kohärent.", "Sein Gedankengang ist logisch kohärent.")
            ),
            ESD(    id = 278,
                    name = "Kokolores",
                    definition = "umgangssprachlich: etwas Unsinniges, Törichtes (Geschwätz)",
                    examples = arrayOf("Die Erde soll größer sein als die Sonne? Was für ein Kokolores!")
            ),
            ESD(    id = 279,
                    name = "kollaborieren",
                    definition = "mit dem (militärischen) Feind zusammenarbeiten.",
                    examples = arrayOf("Schon kurz nach dem Einmarsch Deutschlands in Österreich, am 12. März 1938, kollaborierte ein Großteil des Landes mit den Nazis.")
            ),
            ESD(    id = 280,
                    name = "Kollaps",
                    definition = "plötzliches Ende der Funktionsfähigkeit eines Körpers oder Systems",
                    examples = arrayOf("Erwin erlitt einen Kollaps.")
            ),
            ESD(    id = 281,
                    name = "Kollateralschaden",
                    definition = "Militär, euphemistisch: unbeabsichtigter Schaden (insbesondere zivile Opfer), der durch einen militärischen Einsatz entstanden ist",
                    examples = arrayOf("Ungenaue Begriffe wie ‚humanitäre Katastrophe‘ oder ‚Kollateralschaden‘, die mehr vernebeln als erhellen, wurden gedankenlos übernommen.")
            ),
            ESD(    id = 282,
                    name = "kollektiv",
                    definition = "gemeinschaftlich; mit mehreren/vielen Personen zusammen",
                    examples = arrayOf("Durch kollektive Anstrengungen können wir auch große Projekte, wie ein Wörterbuch, bewältigen.")
            ),
            ESD(    id = 283,
                    name = "kolportieren",
                    definition = "Gerüchte verbreiten",
                    examples = arrayOf("Die Geschichte wurde ungeniert kolportiert.")
            ),
            ESD(    id = 284,
                    name = "Kommission",
                    definition = "eine Gruppe von Fachleuten, die ausgewählt wurde, ein bestimmtes Problem zu bearbeiten",
                    examples = arrayOf("Jetzt liegen der Kommission erstmals konkrete Zahlen vor.")
            ),
            ESD(    id = 285,
                    name = "kommod",
                    definition = "besonders in Österreich noch gebräuchlich, sonst veraltend: bequem",
                    examples = arrayOf("Nun, Ausreden sind kommod, besonders wenn sie geglaubt werden, aber leider ist es nicht alleweil dumm, das hochgeehrte Publikum.")
            ),
            ESD(    id = 286,
                    name = "kompatibel",
                    definition = "in (bestimmten) Eigenschaften übereinstimmend",
                    examples = arrayOf("Hast du darauf geachtet, dass der Speicher und die Hauptplatine kompatibel sind?")
            ),
            ESD(    id = 287,
                    name = "kompensieren",
                    definition = "ausgleichen, aufheben, vergüten, verrechnen",
                    examples = arrayOf("Einen Ausfall von Schweinsteiger? Das können wir unmöglich kompensieren, dann wird die Mannschaft schwächer.")
            ),
            ESD(    id = 288,
                    name = "komplementär",
                    definition = "jemanden oder etwas ergänzend",
                    examples = arrayOf("Eine ideale Arbeitsgruppe setzt sich aus Mitgliedern mit komplementären Fähigkeiten zusammen.")
            ),
            ESD(    id = 289,
                    name = "kompromittieren",
                    definition = "jemanden bloßstellen; in Verlegenheit bringen; ein System manipulieren, angreifen, stören; besonders ein Datenbanksystem",
                    examples = arrayOf("Die Machthaber leugnen jede Verbindung zu diesen Mordwellen und verschanzen sich hinter der Behauptung, diese Morde würden sie mehr kompromittieren als die dissidentischen Taten der Ermordeten.", "Die Daten auf dem Server müssen als kompromittiert betrachtet werden.")
            ),
            ESD(    id = 290,
                    name = "kondolieren",
                    definition = "Sein Beileid an die Angehörigen eines Verstorbenen aussprechen; jemandem sein Mitgefühl aussprechen",
                    examples = arrayOf("Er schrieb sich ins Kondolenzbuch ein, also hat er kondoliert.")
            ),
            ESD(    id = 291,
                    name = "Konfusion",
                    definition = "Zustand des Durcheinanders oder der Verwirrung",
                    examples = arrayOf("Der andere Passagier dagegen saß so ruhig und regungslos wie immer in dieser Konfusion und sagte kein Wort")
            ),
            ESD(    id = 292,
                    name = "kongruent",
                    definition = "übereinstimmend, gleich",
                    examples = arrayOf("In der Tendenz werden damit die unterschiedlichen Relevanzstrukturen nicht als gleich, aber kongruent angesehen.", "Ein Quadrat und ein Fünfeck können niemals kongruent sein.")
            ),
            ESD(    id = 293,
                    name = "Konklave",
                    definition = "von der Außenwelt abgeschlossener Raum im Vatikan, in dem sich die Kardinäle zur Wahl eines Papstes aufhalten",
                    examples = arrayOf("Die Kardinäle zogen feierlich zum Konklave in die sixtinische Kapelle ein.")
            ),
            ESD(    id = 294,
                    name = "konkludent",
                    definition = "aus dem Verhalten einer Person schlüssig ableitbar; sich zwingend ergebend",
                    examples = arrayOf("m Zivilrecht spricht man von einer konkludenten Willenserklärung, wenn sie ohne ausdrückliche Erklärung durch schlüssiges Verhalten abgegeben wird. D.h. die Willenserklärung wird aus den Handlungen des Erklärenden abgeleitet.")
            ),
            ESD(    id = 295,
                    name = "Konkurrent",
                    definition = "jemand, der das gleiche Ziel wie sein(e) Mitbewerber verfolgt",
                    examples = arrayOf("Durch Tricks hat er seine Konkurrenten ausgeschaltet.", "Auch der härteste Konkurrent ist immer auch eine Lehrer, der durch sein Tun auf Schwächen und Fehler hinweist.")
            ),
            ESD(    id = 296,
                    name = "Konnotation",
                    definition = "(emotionale, stilistische, wertende) Nebenbedeutung eines Wortes, Mitschwingendes",
                    examples = arrayOf("So lernen wir Wörter als Träger von Mitinformationen, von Konnotationen, kennen.")
            ),
            ESD(    id = 297,
                    name = "Konsens",
                    definition = "eine Übereinstimmung der Meinungen oder Standpunkte; Einigkeit, Einmütigkeit",
                    examples = arrayOf("Na, hoffentlich herrscht jetzt ein Konsens. Anscheinend hat der Gegenüber mir zugestimmt.")
            ),
            ESD(    id = 298,
                    name = "konsequent",
                    definition = "ohne Widersprüche, folgerichtig; so, dass man sich von etwas nicht abbringen lässt",
                    examples = arrayOf("Er verfolgte seine Ziele sehr konsequent.")
            ),
            ESD(    id = 299,
                    name = "konsolidieren",
                    definition = "eine bestehende Einrichtung stärken oder festigen",
                    examples = arrayOf("Der Finanzminister will den Haushalt konsolidieren.")
            ),
            ESD(    id = 300,
                    name = "konspirativ",
                    definition = "eine Verschwörung planend, zu einer Verschwörung gehörend",
                    examples = arrayOf("Einige DDR-Oppositionelle trafen sich in konspirativen Wohnungen, um ihr Vorgehen zu planen.")
            ),
            ESD(    id = 301,
                    name = "konstatieren",
                    definition = "eine Tatsache feststellen, bemerken",
                    examples = arrayOf("Dann konstatierte der Doktor Schmidt, nachdem er den Leib ihm aufgeschnitten, daß dieser Wurm an Würmern litt, die wiederum an Würmern litten")
            ),
            ESD(    id = 302,
                    name = "konsterniert",
                    definition = "gehoben: so verblüfft/bestürzt, dass man zunächst nichts sagen kann",
                    examples = arrayOf("Der Tod von Joana hatte mich konsterniert.")
            ),
            ESD(    id = 303,
                    name = "konstituieren",
                    definition = "gründen, ins Leben rufen",
                    examples = arrayOf("Der Ausschuss konstituierte sich am 29. Februar.")
            ),
            ESD(    id = 304,
                    name = "konstitutiv",
                    definition = "grundlegend, wesentlich, elementar",
                    examples = arrayOf("Dieser Teil ist konstitutiv für das Ganze.")
            ),
            ESD(    id = 305,
                    name = "kontaminieren",
                    definition = "etwas mit giftigen/pathogenen/radioaktiven Substanzen verseuchen",
                    examples = arrayOf("Die Erde wurde mit giftigen Substanzen kontaminiert.")
            ),
            ESD(    id = 306,
                    name = "kontemplativ",
                    definition = "besinnlich, beschaulich, untätig",
                    examples = arrayOf("Das deutsche Ideal war einst kontemplativ, nicht angriffslustig, transzendental, nicht fridrizianisch")
            ),
            ESD(    id = 307,
                    name = "konterkarieren",
                    definition = "etwas zu verhindern, untergraben suchen",
                    examples = arrayOf("Die Pläne der Gewerkschaften werden teilweise von der Wirtschaft konterkariert.")
            ),
            ESD(    id = 308,
                    name = "Kontext",
                    definition = "Zusammenhang, in dem bestimmte Dinge stehen oder betrachtet werden müssen",
                    examples = arrayOf("Aus dem Kontext können zusätzliche Informationen erschlossen werden.")
            ),
            ESD(    id = 309,
                    name = "kontradiktorisch",
                    definition = "sich widersprechend, sich gegenseitig aufhebend (von zwei Aussagen)",
                    examples = arrayOf("Tief in der Nacht stand die Sonne am Himmel. (kontradiktorische Aussage)")
            ),
            ESD(    id = 310,
                    name = "konträr",
                    definition = "total verschieden, in den Auswirkungen hinderlich",
                    examples = arrayOf("Deine Haltung zu diesem Thema ist vollkommen konträr zu meiner.", "Die Untersuchung wirft die Frage auf, ob die jüngere Entwicklung nicht konträr zur früheren Zielsetzung ist.")
            ),
            ESD(    id = 311,
                    name = "kontrovers",
                    definition = "entgegengesetzt, sich widersprechend",
                    examples = arrayOf("Kontroverse Meinungen machen eine Diskussion erst spannend.", "Die Abtreibungsdebatte ist ein kontrovers diskutiertes Thema.")
            ),
            ESD(    id = 312,
                    name = "konventionell",
                    definition = "auf herkömmlichen Techniken beruhend, gemäß geltenden Konventionen",
                    examples = arrayOf("Die Veranstaltung soll auf ganz konventionelle Weise durchgeführt werden.")
            ),
            ESD(    id = 313,
                    name = "konzedieren",
                    definition = "zugestehen, einen Anspruch anerkennen",
                    examples = arrayOf("Wir müssen ihm hier ein Gewohnheitsrecht konzedieren.")
            ),
            ESD(    id = 314,
                    name = "Konzession",
                    definition = "ein Zugeständnis",
                    examples = arrayOf("Der gemähte Rasen war eine Konzession an den Geschmack der Nachbarn.")
            ),
            ESD(    id = 315,
                    name = "Korrelation",
                    definition = "Beziehung zwischen zwei oder mehr Ereignissen, die in der Regel eine geordnete und nahe zeitliche Abfolge besitzen",
                    examples = arrayOf("Zwischen der Dauer des Sparens und dem Ertrag gibt es eine Korrelation.")
            ),
            ESD(    id = 316,
                    name = "korrumpieren",
                    definition = "durch Gewährung von Vorteilen bestechen, und somit auch moralisch verderben; Integrität oder Authentizität von elektronischen Daten schwächen",
                    examples = arrayOf("Schwer sei es manchmal gewesen, sich nicht korrumpieren zu lassen.", "Nach dem Stromausfall war der Inhalt der Festplatte korrumpiert.")
            ),
            ESD(    id = 317,
                    name = "Koryphäe",
                    definition = "eine herausragende Persönlichkeit in einem wissenschaftlichen Fachgebiet",
                    examples = arrayOf("Er ist eine Koryphäe auf seinem Gebiet.")
            ),
            ESD(    id = 318,
                    name = "kosmopolitisch",
                    definition = "sich als Weltbürger verstehend, weltoffen denkend, sich überall zuhause fühlend, weltbürgerlich, weltgewandt, weltoffen, weltstädtisch, international",
                    examples = arrayOf()
            ),
            ESD(    id = 319,
                    name = "kryptisch",
                    definition = "unverständlich oder unklar in der Ausdrucksweise oder Darstellung",
                    examples = arrayOf("Der Staatsanwalt, Georg Krakow, ist dann selbst als Zeuge geladen. Aus seinen wenigen, kryptischen Worten kann man indirekt herausfiltern, dass er keinen schriftlichen Auftrag erteilt hat.")
            ),
            ESD(    id = 320,
                    name = "kulminieren",
                    definition = "seinen Höhepunkt finden",
                    examples = arrayOf("Die Geschmacklosigkeit kulminierte in einer umständlich geknoteten, rosafarbenen Baumwollkrawatte.")
            ),
            ESD(    id = 321,
                    name = "kumulativ",
                    definition = "in Form einer Kumulation, auf eine Kumulation bezogen (= sich anhäufend, aufsummierend, steigernd)",
                    examples = arrayOf("In einem Zeitraum von 30 Jahren entspricht ein Wachstum von 1 % pro Jahr einem kumulativen Wachstum von mehr als 35 %.")
            ),
            ESD(    id = 322,
                    name = "kumulieren",
                    definition = "(an)häufen, summieren, bei einer Wahl einem Kandidaten oder einer Partei mehrere Stimmen geben",
                    examples = arrayOf("Die Entlehnungen aus anderen Sprachen kumulieren sich über Jahrhunderte hinweg.", "Wenn man seine Stimmen kumuliert, unterstützt man einen Kandidaten besonders stark.")
            ),
            ESD(    id = 323,
                    name = "lädiert",
                    definition = "beschädigt, im äußeren Erscheinungsbild beeinträchtigt",
                    examples = arrayOf("einige Möbelstücke waren beim Umzug lädiert worden")
            ),
            ESD(    id = 324,
                    name = "lakonisch",
                    definition = "kurz und treffend",
                    examples = arrayOf("Es wurde mit lakonischer Wortwahl beschrieben.", "Lakonisch antwortete er mit: „Nein!“")
            ),
            ESD(    id = 325,
                    name = "lamentieren",
                    definition = "abwertend: jammern, klagen",
                    examples = arrayOf("Er lamentiert über alles und jedes.")
            ),
            ESD(    id = 326,
                    name = "lapidar",
                    definition = "kurz und knapp, mit wenigen Worten auskommend",
                    examples = arrayOf("Er war für seinen lapidaren Stil berühmt.", "In dem Schreiben teilte uns die Schule lapidar mit, dass das Schuljahr bald vorbei sei.")
            ),
            ESD(    id = 327,
                    name = "Lapsus",
                    definition = "Fehler, der meist unbewusst, ohne Absicht gemacht wurde",
                    examples = arrayOf("Das ‚h‘ in nämlich war ein peinlicher Lapsus.")
            ),
            ESD(    id = 328,
                    name = "larmoyant",
                    definition = "weinerlich, rührselig, mit allzuviel Gefühl und Selbstmitleid",
                    examples = arrayOf("Die Menschen der neuen Bundesländer sind durchaus nicht larmoyant, aber sie sind dünnhäutig.", "Ein Mann der larmoyanten Abschiedszeremonien ist er nicht.")
            ),
            ESD(    id = 329,
                    name = "latent",
                    definition = "vorhanden, aber noch nicht erkennbar, versteckt, verborgen, nicht offenkundig",
                    examples = arrayOf("Diese Gefahr ist noch latent.")
            ),
            ESD(    id = 330,
                    name = "Latenz",
                    definition = "Vorhandensein einer (noch, momentan, vielleicht auch prinzipiell) nicht sichtbaren „Sache“; Zeit zwischen Reiz und Reaktion, zwischen Ursache und Wirkung",
                    examples = arrayOf("Nach der Revolution konnten alle Unterdrückten aus der Latenz treten.", "Wegen der manchmal so langen Latenz können Ursache und Wirkung nicht immer zugeordnet werden")
            ),
            ESD(    id = 331,
                    name = "Legislative",
                    definition = "gesetzgebende Gewalt; in der Staatstheorie neben Exekutive (ausführende Gewalt) und Judikative (Rechtsprechung) eine der drei unabhängigen Gewalten (Gewaltenteilung)",
                    examples = arrayOf("In Deutschland stellt der Bundestag und der Bundesrat die Legislative dar.")
            ),
            ESD(    id = 332,
                    name = "legitim",
                    definition = "allgemein anerkannt, unbestritten, berechtigt",
                    examples = arrayOf("Sein Verhalten war legitim.", "Das ist ein legitimer Einwand.")
            ),
            ESD(    id = 333,
                    name = "lethargisch",
                    definition = "schwerfällig, träge, teilnahmslos",
                    examples = arrayOf("Er ist seit Wochen so lethargisch und lässt sich zu nichts bewegen.")
            ),
            ESD(    id = 334,
                    name = "limitiert",
                    definition = "auf eine bestimmte Anzahl begrenzt; auf ein Limit festgelegt",
                    examples = arrayOf("Die Auflage war limitiert")
            ),
            ESD(    id = 335,
                    name = "liquidieren",
                    definition = "ein Unternehmen (oder auch andere wirtschaftliche Einheiten, zum Beispiel einen Fond) auflösen",
                    examples = arrayOf("Die Firma wurde Anfang des Jahres liquidiert.")
            ),
            ESD(    id = 336,
                    name = "Liquidität",
                    definition = "Fähigkeit, Zahlungsverpflichtungen zu entsprechen",
                    examples = arrayOf("Der Betrieb hat eine zu geringe Liquidität.", "Endlich greifen die Maßnahmen zur Erhöhung der Liquidität.")
            ),
            ESD(    id = 337,
                    name = "loyal",
                    definition = "regierungstreu, zu Regierung oder auch Staat stehend; zu jemandem haltend, sich an Abmachungen haltend, treu sein und sich anständig verhalten",
                    examples = arrayOf("Er war loyal, auch wenn die Entscheidungen der Regierung ihm nicht einleuchteten.", "Er war immer ein loyaler Mitarbeiter des Betriebes.")
            ),
            ESD(    id = 338,
                    name = "lynchen",
                    definition = "jemanden für eine Tat, die als Unrecht angesehen wird, ohne rechtskräftiges Gerichtsurteil schwer misshandeln und/oder töten",
                    examples = arrayOf("Weil sie ihn für einen Vergewaltiger hielten, lynchten die Farmer den Pfarrer.")
            ),
            ESD(    id = 339,
                    name = "maliziös",
                    definition = "boshaft, hämisch, giftig (von Bemerkungen, Kommentaren u. a.)",
                    examples = arrayOf("Das war eine maliziöse Bemerkung.")
            ),
            ESD(    id = 340,
                    name = "Manier",
                    definition = "Einzahl: Art und Weise, Stil, Eigenart; Mehrzahl: Umgangsformen, Benehmen",
                    examples = arrayOf("Diese Manier ist typisch für ihn.", "Seine scheinbare Schüchternheit war mehr ein Ausdruck guter Manieren und verbarg eine gute Portion Selbstsicherheit.")
            ),
            ESD(    id = 341,
                    name = "manifestieren",
                    definition = "etwas ausdrücken, zum Ausdruck bringen, offenbaren",
                    examples = arrayOf("Mit seiner Skulptur will der Künstler seinen Widerstand gegen die Gewaltherrschaft manifestieren.", "In diesem Werk des Dichters manifestiert sich sein Unvermögen.")
            ),
            ESD(    id = 342,
                    name = "Manko",
                    definition = "Mangel, Fehler",
                    examples = arrayOf("Das ist aber ein schwerwiegendes Manko!", "Das Manko wurde beim Kassensturz entdeckt.")
            ),
            ESD(    id = 343,
                    name = "Mantra",
                    definition = "einprägsamer Spruch, um etwas zu bekräftigen; in östlichen Religionen und beim Yoga verwendete, wiederholt gesprochene, magische Formel, der positive Wirkungskräfte zugesprochen werden",
                    examples = arrayOf("Der Mittelschicht neuen Grund zum Optimismus geben: Das ist das wirtschaftspolitische Mantra der Obama-Regierung.", "Besonders in den frühen Morgenstunden umrunden sie die Gebetsmauern und drehen dabei Gebetsmühlen gleichmäßig aus dem Handgelenk oder rezitieren leise die Mantras.")
            ),
            ESD(    id = 344,
                    name = "marginal",
                    definition = "am Rande liegend, auf der Grenze liegend; etwas Nebensächliches, nicht so Wichtiges; etwas, das nur am Rande Beachtung verdient",
                    examples = arrayOf("Die Probleme sind marginal.", "Ihre Existenz ist marginal.")
            ),
            ESD(    id = 345,
                    name = "Marginalie",
                    definition = "Anmerkungen am Rand eines Buches oder einer Handschrift; etwas Unbedeutendes, etwas das nicht der Rede wert ist, etwas das nur am Rande Beachtung verdient",
                    examples = arrayOf("Marginalien unbekannter Verfasser in den Büchern von öffentlichen Bibliotheken und Sammlungen oder auch in ausgeliehenen Schulbüchern gelten … als Kritzeleien und meist nur als Ärgernis und Sachbeschädigung.", "Marginalien befinden sich häufig auf dem äußeren und seltener auf dem inneren Rand eines Buches.")
            ),
            ESD(    id = 346,
                    name = "markant",
                    definition = "auffallend, zur Identifikation heranziehbar",
                    examples = arrayOf("Er hatte ein wirklich sehr markantes Kinn, weswegen man ihn auf jeder Party wiedererkannte.")
            ),
            ESD(    id = 347,
                    name = "martialisch",
                    definition = "mit unverhohlener Härte gegen jemanden oder etwas vorgehend; grausam, kriegerisch, furchterregend",
                    examples = arrayOf("Solche martialischen Spiele kann ich nicht leiden.", "Er ist ein martialischer Krieger.", "Sie hat einen martialischen Namen.")
            ),
            ESD(    id = 348,
                    name = "maskulin",
                    definition = "den Eigenschaften eines Mannes ähnelnd bzw. entsprechend",
                    examples = arrayOf("Wenn Menschen noch jung sind, ist es manchmal schwer festzustellen, ob sie maskulin oder feminin sind.", "Sie will einen maskulinen Freund, kein Weichei.")
            ),
            ESD(    id = 349,
                    name = "matrimonial",
                    definition = "zur Ehe gehörend; ehelich",
                    examples = arrayOf()
            ),
            ESD(    id = 350,
                    name = "Matura",
                    definition = "Ausbildung: Reifeprüfung; Abschluss einer höheren Schule, mit welchem die Hochschulreife erlangt wird",
                    examples = arrayOf("Bei meiner mündlichen Matura trat ich in Französisch an.", "Wer will, kann in eine Berufsschule wechseln oder auch drei Jahre lang in ein Lyzeum gehen, das mit der »Matura« (Abitur) abschließt.")
            ),
            ESD(    id = 351,
                    name = "Maxime",
                    definition = "Einstellung, Motto, Regel, wonach man sein Verhalten ausrichtet",
                    examples = arrayOf("Er folgte immer der Maxime: Zuerst die Arbeit, dann das Vergnügen.", "Handle so, daß die Maxime deines Willens jederzeit zugleich als Prinzip einer allgemeinen Gesetzgebung gelten könne.")
            ),
            ESD(    id = 352,
                    name = "megaloman",
                    definition = "größenwahnsinnig",
                    examples = arrayOf("Der Erfinder der ‚Dritten politischen Universaltheorie‘ mag ein megalomaner Irrer sein oder ein zynischer Machiavellist: Realist war er immer.")
            ),
            ESD(    id = 353,
                    name = "Melancholie",
                    definition = "Zustand der Schwermut oder Depression, psychische Niedergeschlagenheit, große Traurigkeit; Begriff aus der Viersäftelehre (Humoralpathologie)",
                    examples = arrayOf("In der Psychologie wird der Begriff Melancholie heute durch den Begriff Depression ersetzt.", "Trotzdem bleibt in dem Jungen eine Melancholie zurück, die sich mit den Jahren in Bitterkeit verwandelt.")
            ),
            ESD(    id = 354,
                    name = "mens sana in corpore sano",
                    definition = "Bedeutung: Ein gesunder Geist wohnt auch in einem gesunden Körper",
                    examples = arrayOf("lustige Erweiterung dieses Sprichwortes in Studentenkreisen: \"… Oder wer in die Mensa geht, muss einen gesunden Körper haben!\"")
            ),
            ESD(    id = 355,
                    name = "Metier",
                    definition = "Arbeitsbereich, den jemand erlernt hat",
                    examples = arrayOf("Und weil seit dem Mittelalter lange Zeit nur Juden solche Geschäfte ausüben durften, vom Handel und vom Handwerk ferngehalten wurden, lieferte das Metier auch gängige Vorwände für Antisemitismus.", "In seinem Metier kennt er sich aus.")
            ),
            ESD(    id = 356,
                    name = "Minimalismus",
                    definition = "Haltung, sich auf möglichst wenig zu beschränken; unterschiedliche Ausprägungen der Darstellung in den verschiedenen Künsten mit einer Grundtendenz zur Reduktion/Vereinfachung",
                    examples = arrayOf("Im Inneren schloss sich dieser vorsichtige Minimalismus an.")
            ),
            ESD(    id = 357,
                    name = "Minorität",
                    definition = "geringerer Teil einer abstimmenden Gruppe, die sich für oder gegen eine Option entscheidet",
                    examples = arrayOf("Die Majorität gewinnt die Abstimmung, die Minorität verliert sie.", "Als es freilich zur Abstimmung kam, wurde ihre winzige Minorität sichtbar.")
            ),
            ESD(    id = 358,
                    name = "minutiös",
                    definition = "sehr genau, peinlich genau",
                    examples = arrayOf("Der Auftritt war minutiös geplant.")
            ),
            ESD(    id = 359,
                    name = "Misanthrop",
                    definition = "ein Mensch, der die Menschheit hasst, also ein Menschenfeind",
                    examples = arrayOf("Schopenhauer gilt allgemein als ein Misanthrop.", "Er bemühte sich geduldig fünf Jahre lang bei einem in Damaskus ansässigen österreichischen Misanthropen.", "Sie konnte nicht recht begreifen, warum, aber sie wußte, daß der Druck auf einen imaginären Knopf in seinem Bewußtsein genügte, um ihn von einem Philanthropen in einen Misanthropen zu verwandeln.")
            ),
            ESD(    id = 360,
                    name = "Mischpoke",
                    definition = "abwertend: Familie, Großfamilie",
                    examples = arrayOf("Warte mal ab, wenn Meyer mit seiner ganzen Mischpoke hier anrückt.")
            ),
            ESD(    id = 361,
                    name = "moderat",
                    definition = "in Maßen, gemäßigt",
                    examples = arrayOf("Die Preise sind moderat.")
            ),
            ESD(    id = 362,
                    name = "mokieren",
                    definition = "sich über jemanden oder etwas spöttisch oder abfällig äußern",
                    examples = arrayOf("Er hat sich über die schlechte Organisation der Veranstaltung mokiert.", "Immer wieder mokierte sich Szmul über meine Unbildung und Provinzialität.")
            ),
            ESD(    id = 363,
                    name = "mondän",
                    definition = "auf eine modisch elegante Erscheinung und Lebensführung bedacht; betont elegant, sehr gewandt und dabei lässig überlegen, im Stil der großen Welt",
                    examples = arrayOf("Auf dem Wiener Opernball treffen sich Jahr für Jahr die eleganten Herren und mondänen Damen der internationalen High Society.")
            ),
            ESD(    id = 364,
                    name = "monetär",
                    definition = "geldlich, auf die Währung bezogen, das Geld betreffend",
                    examples = arrayOf("Monetär sieht es bei mir zur Zeit ziemlich schlecht aus.")
            ),
            ESD(    id = 365,
                    name = "Monolog",
                    definition = "nicht ganz kurze Äußerung einer einzigen Person, meist einer Figur auf der Bühne in einem Theaterstück",
                    examples = arrayOf("Endlich kam auch Macbeths bekannter Monolog an die Reihe: „Ist das ein Dolch, was ich vor mir erblicke, der Griff mir zugekehrt?“")
            ),
            ESD(    id = 366,
                    name = "Myriade",
                    definition = "meist im Plural: eine sehr große, aber unbestimmte Zahl",
                    examples = arrayOf("Nachdem die Presse vom bevorstehenden astronomischen Ereignis berichtet hatte, stand morgens um drei eine Myriade von schlaftrunkenen Neugierigen auf dem Schlossplatz und schaute auf zu den Myriaden von Sternen.")
            ),
            ESD(    id = 367,
                    name = "narzisstisch",
                    definition = "übersteigert in sich selbst verliebt, auf sich selbst bezogen",
                    examples = arrayOf("Eine narzisstische Störung entsteht laut Miller, wenn ein Kind seine eigenen Gefühle und Interessen nicht artikulieren durfte und später dafür ein ‚Ventil‘ braucht.", "Die Dame ist zu die narzisstischste und egomanischste Person, die ich kennen lernen durfte.")
            ),
            ESD(    id = 368,
                    name = "Nebulös",
                    definition = "nicht eindeutig/sicher verstehbar",
                    examples = arrayOf("Seine Ausführungen kamen mir recht nebulös vor.", "Einer der nebulösen Texte orakelt etwa von Geheiminformationen, die angeblich auf dem Gelände der CIA versteckt worden seien.")
            ),
            ESD(    id = 369,
                    name = "negieren",
                    definition = "abstreiten, leugnen, eine Sache als nicht existent betrachten oder behaupten",
                    examples = arrayOf("Ein Atheist negiert die Existenz von Göttern.", "Der Angeklagte negierte seine Schuld.")
            ),
            ESD(    id = 370,
                    name = "Nepotismus",
                    definition = "Vetternwirtschaft (übermäßige Begünstigung von Verwandten, zum Beispiel bei der Verteilung von Geldern, der Vergabe von Aufträgen oder der Besetzung von Positionen), ungerechtfertigte Begünstigung von Verwandten (z. B. bei Stellenbesetzungen)",
                    examples = arrayOf("Luther gefiel der Nepotismus, den der Staat betrieb, nicht.")
            ),
            ESD(    id = 371,
                    name = "Nerd",
                    definition = "Personen, die sich besonders mit Computern oder anderen Bereichen aus Wissenschaft und Technik beschäftigen, deren soziale Kompetenzen aber entweder schwach ausgeprägt sind oder diesen Eindruck zumindest erwecken",
                    examples = arrayOf("Er hatte überhaupt nichts dagegen, dass sie ihn Nerd nannten, im Gegenteil.", "Gamer, Exoten und andere Nerds treffen sich am Wochenende zur Messe.")
            ),
            ESD(    id = 372,
                    name = "Neurodegenerativ",
                    definition = "neurodegenerativ bezeichnet die Eigenschaft des fortschreitenden Verlusts von Nervenzellen",
                    examples = arrayOf("Alzheimer, Parkinson und Chorea Huntington gelten allesamt als neurodegenerative Erkrankungen.")
            ),
            ESD(    id = 373,
                    name = "Nihilismus",
                    definition = "Weltanschauung, die alle Werte und Normen als nichtig ansieht",
                    examples = arrayOf("Nicht nur der Nihilismus, sondern auch der religiöse Fanatismus, der heute oft als Fundamentalismus bezeichnet wird, kann terroristische Vorhaben und Handlungen inspirieren")
            ),
            ESD(    id = 374,
                    name = "Nimbus",
                    definition = "Malerei: Heiligenschein; ein besonderer Ruf, ein bestimmtes Renommee",
                    examples = arrayOf("Köpfe von Heiligen werden von Künstlern oft mit einem Nimbus dargestellt.", "Danach kam eine lange Durststrecke, in der er den Nimbus des Unschlagbaren verlor")
            ),
            ESD(    id = 375,
                    name = "nivellieren",
                    definition = "ausgleichen, begleichen, auf das gleiche Niveau bringen",
                    examples = arrayOf("Er hat durch das Stehlen von Franks Uhr den Diebstahl von Judiths Kette nivelliert.")
            ),
            ESD(    id = 376,
                    name = "nonchalant",
                    definition = "eigene Ideen/Interessen verfolgend, ohne sich allzu sehr auf andere Betroffene einzustellen",
                    examples = arrayOf("Über unseren Einwand ging er ganz nonchalant hinweg.", "Kaum hatte er sich in seinem neuen Domizil eingelebt, stellte er die gewohnten Verhältnisse nonchalant auf den Kopf.")
            ),
            ESD(    id = 377,
                    name = "Normativ",
                    definition = "als Norm geltend, eine Norm setzend",
                    examples = arrayOf("Eine normative Grammatik will festlegen, welche Sprech- oder Schreibweise als richtig zu gelten habe.")
            ),
            ESD(    id = 378,
                    name = "Nostalgie",
                    definition = "sehnsuchtsvoll verklärende Rückwendung zur Vergangenheit",
                    examples = arrayOf("„Trotzdem betrachte ich den Wellblechwürfel mit einiger Nostalgie.“", "Heute versteht man unter Nostalgie eine wehmütige Hinwendung zu vergangenen Zeiten, die in der Erinnerung oftmals stark idealisiert und verklärt reflektiert werden.")
            ),
            ESD(    id = 379,
                    name = "notorisch",
                    definition = "leicht abwertend: für ein bestimmtes, ständiges/wiederholtes Fehlverhalten bekannt, allgemein/weithin bekannt",
                    examples = arrayOf("Er ist ein notorischer Lügner!", "Als notorische Diebin stiehlt sie die Uhr des Erzählers, als ebenso notorische Lügnerin gibt sie sich Don José gegenüber als Baskin aus.")
            ),
            ESD(    id = 380,
                    name = "Novität",
                    definition = "Neuerscheinung, Neuheit (der Mode oder Ähnlichem)",
                    examples = arrayOf("Die neue Kollektion bringt keinerlei Novitäten.")
            ),
            ESD(    id = 381,
                    name = "Novum",
                    definition = "eine Neuheit in einem bestimmten Bereich oder Gebiet, die noch nie vorher da gewesen ist",
                    examples = arrayOf("Die Bildung einer Koalitionsregierung war für unser Land ein Novum.")
            ),
            ESD(    id = 382,
                    name = "nuanciert",
                    definition = "mit vielen Abstufungen oder Feinheiten.",
                    examples = arrayOf("Der Roman gab ein nuanciertes Bild des Lebens im Berlin der Kriegszeit.")
            ),
            ESD(    id = 383,
                    name = "nymphoman",
                    definition = "Psychologie: an Nymphomanie leidend, einen krankhaft gesteigerten Sexualtrieb habend",
                    examples = arrayOf()
            ),
            ESD(    id = 384,
                    name = "obligatorisch",
                    definition = "verpflichtend, verbindlich, vorgeschrieben, zwingend erforderlich",
                    examples = arrayOf("Diese Unterschrift ist obligatorisch.", "Diese Überschrift ist obligatorisch.")
            ),
            ESD(    id = 385,
                    name = "Obolus",
                    definition = "kleine Münze im alten Griechenland; leine Geldspende, kleiner finanzieller Beitrag",
                    examples = arrayOf("Jedem toten Griechen wurde ein Obolus unter die Zunge gelegt.", "Und es wäre nett, wenn Sie für unsere weitere Arbeit einen kleinen Obolus entrichten würden.")
            ),
            ESD(    id = 386,
                    name = "observieren",
                    definition = "etwas beobachten, etwas erkunden, jemanden (polizeilich) überwachen",
                    examples = arrayOf("Das Gebiet wurde zwei Jahre lang ausgiebig observiert.", "Die Polizei observiert den Verdächtigen.")
            ),
            ESD(    id = 387,
                    name = "Obsession",
                    definition = "emotional sehr starke Begeisterung für ein bestimmtes Thema, Hobby, eine Arbeit oder Aktion",
                    examples = arrayOf("Im Unterschied zu Patienten mit anderen psychischen Störungen seien sich die Betroffenen dabei durchaus bewußt, daß ihre Obsession unsinnig ist. Dennoch gelinge es ihnen nicht, sich hiervon zu befreien.", "Doch mitunter geraten bestimmte Handlungs- oder Denkmuster zur Obsession.")
            ),
            ESD(    id = 388,
                    name = "obskur",
                    definition = "abwertend: anrüchig, von schlechtem Ruf; unbekannt, mysteriös",
                    examples = arrayOf("Er kaufte bei obskuren Händlern anstatt bei welchen, die die Gewähr für die Echtheit und Qualität der Waren bieten konnten.")
            ),
            ESD(    id = 389,
                    name = "obsolet",
                    definition = "überholt, veraltet, ungebräuchlich, überflüssig geworden",
                    examples = arrayOf("Das Betriebssystem Windows 95 ist seit dem 1. Januar 2001 obsolet.")
            ),
            ESD(    id = 390,
                    name = "Odyssee",
                    definition = "kein Plural: die Irrfahrt des Odysseus, übertragen: generell jede Irrfahrt",
                    examples = arrayOf("Das Epos des Homer beginnt im zehnten Jahr der Odyssee.", "Tausende Bahnpassagiere haben in den letzten 24 Stunden eine wahre Odyssee hinter sich gebracht.")
            ),
            ESD(    id = 391,
                    name = "Offerte",
                    definition = "ein schriftliches Kaufangebot für Waren und Dienstleistungen, Angebot",
                    examples = arrayOf("Erst kürzlich hatte der chinesische Computerkonzern Lenovo eine rund 600 Mrd. Euro schwere Offerte für den Elektronik-Großhändler Medion abgegeben.", "Bereits in den letzten Wochen hatte der von der Bundesregierung beschlossene Atom-Ausstieg bei den Grünen Zustimmung geerntet und war als Offerte für zukünftige schwarz-grüne Regierungsbündnisse interpretiert worden.")
            ),
            ESD(    id = 392,
                    name = "okkupieren",
                    definition = "etwas besetzen, sich etwas aneignen, etwas einnehmen",
                    examples = arrayOf("Danach sollten die USA saudi-arabische Ölfelder okkupieren, falls das Land nicht mehr gegen den Terrorismus unternehme.")
            ),
            ESD(    id = 393,
                    name = "oktroyieren",
                    definition = "jemandem etwas aufzwingen, aufdrängen",
                    examples = arrayOf("Im Geist, auf dem Reißbrett, steht die Stadt der Zukunft. Aber lässt sich soziale Wandlung einfach organisieren? Lassen sich Ideen und Programme oktroyieren?")
            ),
            ESD(    id = 394,
                    name = "olfaktorisch",
                    definition = "den Geruchssinn betreffend",
                    examples = arrayOf("Olfaktorische Signale sind Geruchsstoffe, die über den Geruchssinn wahrgenommen werden.")
            ),
            ESD(    id = 395,
                    name = "Oligopol",
                    definition = "Wirtschaftsform, bei der der gesamte Markt von wenigen Unternehmen beherrscht wird",
                    examples = arrayOf("Die Energiekonzerne haben in Deutschland ein Oligopol.")
            ),
            ESD(    id = 396,
                    name = "omnipräsent",
                    definition = "immer und jederzeit anwesend; allgegenwärtig",
                    examples = arrayOf("Gott ist omnipräsent.")
            ),
            ESD(    id = 397,
                    name = "Onomatopoesie",
                    definition = "Wortbildung durch sprachliche Nachahmung von Geräuschen und Lauten, z.B. Kuckuck, Gong",
                    examples = arrayOf("In Gedicht x spielt Onomatopoesie eine große Rolle.")
            ),
            ESD(    id = 398,
                    name = "Opak",
                    definition = "dass man nicht durchschauen kann; so verworren, dass es nicht nachvollziehbar ist",
                    examples = arrayOf("Graphit ist im Gegensatz zu Diamant opak.", "Schon aus Gründen reiner Selbsterhaltung, also um das angestrebte Monopol über jegliches technikhistorisches Wissen langfristig zu sichern, aber auch um den mitunter zweifelhaften Status oder die Herkunft mancher Quellen nicht nachprüfbar zu machen, muss das Referenzsystem nach außen hin opak bleiben.")
            ),
            ESD(    id = 399,
                    name = "operationalisieren",
                    definition = "die Umformung von theoretischen Begriffen und Hypothesen im Sinn ihrer empirischen Überprüfbarkeit durch Angabe konkreter, im Einzelnen überprüfbarer, Zielvorgaben und Schritte",
                    examples = arrayOf("Wir sollten möglichst viele Definitionen operationalisieren; dann lassen sich Entscheidungen sicherer fällen.")
            ),
            ESD(    id = 400,
                    name = "opportun",
                    definition = "angebracht, in gegenwärtiger Situation von Vorteil",
                    examples = arrayOf("Auch sein Vorschlag eines Sozialpakets für alle entsprang einer Idee, die ihm heute nicht mehr opportun erscheint.")
            ),
            ESD(    id = 401,
                    name = "opulent",
                    definition = "üppig, reichlich; von großer Opulenz",
                    examples = arrayOf("Die opulente Ausstattung der Hotelzimmer versetzte die Besucher in Erstaunen.", "Am nächsten Tag um elf empfing mich ein opulentes Frühstück im Esszimmer der Pension.")
            ),
            ESD(    id = 402,
                    name = "orgiastisch",
                    definition = "ohne Hemmungen",
                    examples = arrayOf("Der Tanz war noch orgiastischer geworden.")
            ),
            ESD(    id = 403,
                    name = "originär",
                    definition = "nicht abgeleitet, wiederholt oder verändert, eigenständig, grundlegend neu",
                    examples = arrayOf("Originäres und derivatives Recht unterliegen verschiedenen Normen hinsichtlich des Erwerbs und der Qualität des Rechtes.")
            ),
            ESD(    id = 404,
                    name = "ostentativ",
                    definition = "bildungssprachlich: auf Beachtung berechnet, zur Schau gestellt, in einer herausfordernden Weise, bewusst ausrichten",
                    examples = arrayOf("Sie verließ ostentativ den Raum.", "Wirkliche Bedeutung erreichen jene Politiker, die, wie Helmut Schmidt oder Hans-Jochen Vogel, ostentativ einen bescheidenen Lebensstil pflegen.")
            ),
            ESD(    id = 405,
                    name = "Outplacement",
                    definition = "Vermittlung von gekündigten Mitarbeitern in ein neues Arbeitsverhältnis durch den bisherigen, kündigenden Arbeitgeber, insbesondere bei Fachkräften und Führungskräften",
                    examples = arrayOf("Der Betrieb setzte beim Personalabbau auf Outplacement.")
            ),
            ESD(    id = 406,
                    name = "Oxymoron",
                    definition = "sprachliche Konstruktion (rhetorische Figur), die aussieht wie ein Widerspruch in sich innerhalb eines Worts oder bei Wortkombinationen",
                    examples = arrayOf("„süßsauer“, „scharfsinniger Unsinn“, „virtuelle Realität“ oder „Bürgeradel“ sind Beispiele für beide Formen von Oxymora.", "Das Gedicht „Dunkel wars, der Mond schien helle“ lebt von Oxymora.")
            ),
            ESD(    id = 407,
                    name = "par ex­cel­lence",
                    definition = "in perfekter Vollendung, schlechthin",
                    examples = arrayOf("Zucker. Vor 500 Jahren am Beginn der Neuzeit ein Luxusgut par excellence, Privileg gekrönter Häupter und jener europäischen Superreichen, die mit Arabern Handel trieben.", "Der Kairoer Dialekt wird oft als Ägyptisch-Arabisch par excellence angesehen, obwohl die Dialekte außerhalb Kairos sich davon mehr oder minder deutlich unterscheiden.")
            ),
            ESD(    id = 408,
                    name = "Paradigma",
                    definition = "Muster, Beispiel; Denkmuster, Schema; eine grundlegende wissenschaftliche Denkweise",
                    examples = arrayOf("Maria Laach in der Eifel ist ein Paradigma für den romanischen Baustil.", "Müsste nicht in den Führungsetagen in diesem Land ein Wechsel der Paradigmen stattfinden?" , "Der Behaviorismus, die Tiefenpsychologie, die Kognitionspsychologie und die Biopsychologie sind Paradigmen der Psychologie.")
            ),
            ESD(    id = 409,
                    name = "paradox",
                    definition = "einen unauflösbaren Widerspruch enthaltend",
                    examples = arrayOf("Eine Idee war paradoxer als alle anderen.", "Der Zweck der paradoxen Formulierung ist zunächst, einen Gedanken besonders zugespitzt auszudrücken, indem man ihn scharf von der üblichen Ansicht abhebt.")
            ),
            ESD(    id = 410,
                    name = "paralysieren",
                    definition = "jemanden so beeinträchtigen, dass er fast nichts mehr tun kann",
                    examples = arrayOf("Nach dem erlittenen Schock wirkte sie wie paralysiert.")
            ),
            ESD(    id = 411,
                    name = "Paraphrasieren",
                    definition = "etwas in eigenen Worten wiedergeben oder erklären",
                    examples = arrayOf("Zunächst sollten Sie den vorliegenden Text paraphrasieren.")
            ),
            ESD(    id = 412,
                    name = "Pars pro Toto",
                    definition = "Rhetorik: ein Teil stellvertretend für das Ganze (Redefigur)",
                    examples = arrayOf("„Kopf“ als Pars pro Toto für „Mensch“: Unsere Gemeinschaft bestand aus 10 Köpfen.")
            ),
            ESD(    id = 413,
                    name = "partizipieren",
                    definition = "gehoben: an etwas teilhaben; an etwas seinen Anteil haben",
                    examples = arrayOf("Ich partizipiere an der finanziellen Sicherheit meiner Familie.")
            ),
            ESD(    id = 414,
                    name = "Parvenü",
                    definition = "abwertend: für einen Emporkömmling, Neureichen, der schnell aufgestiegen ist und mit seinem Reichtum protzt",
                    examples = arrayOf("Der Schulze, der Parvenü, hat Millionen geerbt und glaubt, er gehöre deshalb plötzlich zur besseren Gesellschaft.")
            ),
            ESD(    id = 415,
                    name = "pasteurisieren",
                    definition = "(flüssige) Lebensmittel oder andere Stoffe durch kurzfristiges Erhitzen auf 60 bis 90 °C konservieren",
                    examples = arrayOf("Die Milch ist homogenisiert und pasteurisiert.")
            ),
            ESD(    id = 416,
                    name = "pathetisch",
                    definition = "das Pathos betreffend; übertrieben oder aufgesetzt gefühlvoll, leidenschaftlich",
                    examples = arrayOf("Die Hauptdarstellerin im Theaterstück spielte mit der pathetischen Gestik einer Opernsängerin, die eben ihre Todesarie singt", "Der pathetische Wunsch, seinen Kummer zu überlisten, hatte in der Konfrontation mit der Maske geendet.")
            ),
            ESD(    id = 417,
                    name = "Pathos",
                    definition = "eine leidenschaftliche Ergriffenheit oder ein leidenschaftliches Verhalten",
                    examples = arrayOf("Die Hochzeit wurde mit großem Pathos begangen", "Es gelang ihm, das Publikum mit seinem Pathos zu begeistern.")
            ),
            ESD(    id = 418,
                    name = "Patrouille",
                    definition = "Wachdienst mit einer speziellen taktischen Aufgabe, einem Auftrag, der von einer oder mehreren Personen wahrgenommen wird",
                    examples = arrayOf("Trotzdem machen sich mutige Männer in dieses Gebiet auf - zur härtesten Patrouille der Welt.", "Außer einer Patrouille war in diesem Moment niemand zu erblicken.")
            ),
            ESD(    id = 419,
                    name = "Pazifismus",
                    definition = "die Ideologie, die sich für den Frieden einsetzt und den Krieg und die Gewalt ablehnt",
                    examples = arrayOf("Wir müssen unsere Kinder gegen Militarismus impfen, indem wir sie im Geiste des Pazifismus erziehen.")
            ),
            ESD(    id = 420,
                    name = "pejorativ",
                    definition = "abwertend hinsichtlich der (eigenen) Sprache, eines Wortes oder einer Redewendung",
                    examples = arrayOf("„Versager“ ist ein pejorativer Terminus für einen vom Leben Gebeutelten.")
            ),
            ESD(    id = 421,
                    name = "pekuniär",
                    definition = "auf Geld bezogen (geldlich, finanziell)",
                    examples = arrayOf("Er lebt in guten/schlechten pekuniären Verhältnissen.", "Seine pekuniäre Lage ist gut.")
            ),
            ESD(    id = 422,
                    name = "Pendant",
                    definition = "entsprechendes, ergänzendes, passendes Gegenstück",
                    examples = arrayOf("Dein schwarzer Schal ist das perfekte Pendant zu deinem weißen Hut.", "Immerhin gilt das deutsche Jugendstrafrecht in vielerlei Hinsicht als vorbildhaft — und könnte für ein russisches Pendant als Grundlage dienen, die den Eigenheiten des Landes angepasst wird.")
            ),
            ESD(    id = 423,
                    name = "per se",
                    definition = "an sich, für sich, selbst",
                    examples = arrayOf("Dieses Vorhaben ist per se schon unmöglich umzusetzen.", "Weder der Kapitalismus per se noch die Mehrheit der europäischen Wirtschaftsmagnaten können für den Krieg allein verantwortlich gemacht werden.")
            ),
            ESD(    id = 424,
                    name = "perfide",
                    definition = "mit Niedertracht und in hinterhältiger Weise",
                    examples = arrayOf("Perfide ist es jedoch, im politischen Kampf gegen das Betreuungsgeld das Image der Familien nachhaltig zu beschädigen, indem man dumpfe Vorurteile bedient.", "Plötzlich hatte sie eine perfide Idee.", "Der Vergleich von Nazis mit Tierschützern ist ziemlich perfide.")
            ),
            ESD(    id = 425,
                    name = "perforieren",
                    definition = "etwas mit Löchern versehen",
                    examples = arrayOf("Man kann mit einem Laser Blech an der Biegekante perforieren, um es sehr leicht zu biegen.")
            ),
            ESD(    id = 426,
                    name = "peripher",
                    definition = "am Rand gelegen, dort befindlich; Medizin: in den äußeren Bereichen des Körpers befindlich",
                    examples = arrayOf("Das ist ein peripheres Problem.", "Unter den peripheren Nerven lassen sich die Hirnnerven von den übrigen peripheren Nerven abgrenzen.")
            ),
            ESD(    id = 427,
                    name = "Perpetuum mobile",
                    definition = "fiktive Maschine, die einmal in Gang gesetzt, ohne Energiezufuhr ewig arbeitet",
                    examples = arrayOf("Als ich damals an seinen Aufgaben zum Perpetuum mobile verzweifelte, spürte ich seine Fremdheit", "Die Lokomotive Emma flog als Perpetuum mobile hinter den Magneten her, die Lukas ihr vorne drangehängt hatte.")
            ),
            ESD(    id = 428,
                    name = "persistent",
                    definition = "andauernd, beharrlich, unbeirrbar, permanent",
                    examples = arrayOf("Seine Freundlichkeit blieb unter all diesen widrigen Umständen persistent.", "Käthe ist gegen jegliche Andeutungen zu ihrem Vokabelheft persistent.")
            ),
            ESD(    id = 429,
                    name = "peu à peu",
                    definition = "allmählich, schrittweise, nach und nach",
                    examples = arrayOf("Peu à peu erreichte er sein Ziel.", "Peu à peu verschwand Swadeshs Glottolingo wieder aus den Fachzeitschriften.")
            ),
            ESD(    id = 430,
                    name = "Phänomen",
                    definition = "seltene, bemerkenswerte, auffällige Erscheinung",
                    examples = arrayOf("Der Sonnenuntergang ist ein Phänomen am westlichen Abendhimmel.", " Ein Phänomen, das bei Osteoporose auftreten kann, ist das Tannenbaumphänomen.")
            ),
            ESD(    id = 431,
                    name = "Pheromon",
                    definition = "Wirkstoff, der zwischen Individuen der gleichen Art Signale vermittelt",
                    examples = arrayOf("Pheromone dienen der Signalübermittlung zwischen den Individuen einer Spezies. Ein Beispiel ist Bombykol, der über die Luft verbreitete Sexuallockstoff des Seidenspinners Bombyx mori")
            ),
            ESD(    id = 432,
                    name = "philanthropisch",
                    definition = "in der Art und Weise eines Philanthropen, menschenfreundlich",
                    examples = arrayOf("So ehrgeizig seine und Stanleys Pläne auch sein mochten, Leopold war entschlossen, den Schein eines rein philanthropischen Unternehmens zu wahren.")
            ),
            ESD(    id = 433,
                    name = "Philister",
                    definition = "kleinlicher Mensch, nichtstudierte Person, Nichtakademiker",
                    examples = arrayOf("Als Nachbar war er Philister, der jeden Zweig, der über den Zaun wuchs, sauber entfernte.", "Später wurde aus dem Hörsaal eine Kneipe, in der sich auch Philister trafen.")
            ),
            ESD(    id = 434,
                    name = "phlegmatisch",
                    definition = "kaum zu erregen; nur schwer zu einer Handlung motivierbar",
                    examples = arrayOf("Den Jungen können wir im Betrieb nicht brauchen, er ist zu phlegmatisch.")
            ),
            ESD(    id = 435,
                    name = "Phobie",
                    definition = "krankhafte Angst; krankhafte Furcht; eine unbegründete, anhaltende Angst vor Situationen, Gegenständen, Tätigkeiten oder Personen. Der Begriff Phobie wird jedoch auch im nicht-medizinischen Sinne für Abneigungen aller Art gebraucht.",
                    examples = arrayOf("Dank Dr. Freud konnte ich von meiner Phobie vor Spinnen geheilt werden.", "Nachts kann ich kein Auge zudrücken, denn ich habe eine Phobie vor Dunkelheit.")
            ),
            ESD(    id = 436,
                    name = "Phrase",
                    definition = "syntaktisch zusammengehörige Wortgruppe; allgemein, abwertend: leere Redensart, Ausspruch ohne konkreten Inhalt",
                    examples = arrayOf("Ein Satz besteht meist aus mehreren Phrasen. Am Beispiel des Beispielsatzes: „Ein Satz“ „besteht“ „aus mehreren Phrasen“", "Er drischt nur leere Phrasen.")
            ),
            ESD(    id = 437,
                    name = "Pidgin",
                    definition = "Sprachform/Mischsprache mit stark vereinfachter Grammatik und eingeschränktem Wortschatz, die bei Sprechern mit verschiedenen Muttersprachen ein notwendiges Minimum an Verständigung ermöglicht",
                    examples = arrayOf("Pidgins sind in Kolonialzeiten entstanden, um eine gewisse Verständigung zwischen Einheimischen und Händlern/Kolonisten zu ermöglichen. Pidgins sind Mischsprachen mit Bestandteilen aus den Sprachen der Kommunikationspartner.")
            ),
            ESD(    id = 438,
                    name = "pittoresk",
                    definition = "bildungssprachlich: wie von einem Maler gemalt",
                    examples = arrayOf("Die kleine Stadt mit ihrem Labyrinth enger Straßen und ihren alten Häusern macht einen pittoresken Eindruck.", "Wir waren in dem pittoreskesten Dorf der ganzen Umgebung gelandet.")
            ),
            ESD(    id = 439,
                    name = "plagiieren",
                    definition = "es beschreibt den Vorgang des Diebstahls von geistigem Eigentum",
                    examples = arrayOf("Dieses Werk wurde plagiiert")
            ),
            ESD(    id = 440,
                    name = "Pleonasmus",
                    definition = "Verbindung bedeutungsgleicher oder -verwandter Ausdrücke in einer Wortgruppe",
                    examples = arrayOf("„Weißer Schimmel“ und „alter Greis“ werden von Wilpert als Beispiele für Pleonasmen angegeben.")
            ),
            ESD(    id = 441,
                    name = "pointiert",
                    definition = "treffend ausgedrückt.",
                    examples = arrayOf("eine pointierte Bemerkung")
            ),
            ESD(    id = 442,
                    name = "polarisieren",
                    definition = "beschreibt den Vorgang des Diebstahls von geistigem Eigentum",
                    examples = arrayOf("Das Konzept „Polarisieren” funktioniert getreu dem Motto „Entweder du bist mit uns oder du bist gegen uns!”", "Konflikte wie der um die Plagiatsaffäre eines Bundesministers können die Gesellschaft polarisieren.")
            ),
            ESD(    id = 443,
                    name = "polemisch",
                    definition = "in der Art eines unsachlichen Angriffs",
                    examples = arrayOf("Im Endeffekt hatte er in dieser Diskussion Erfolg, und damit konnte einer der polemischsten Schmidt-Texte der Nachkriegszeit dann doch noch sein (teils verärgertes) Radiopublikum finden.")
            ),
            ESD(    id = 444,
                    name = "Polygamie",
                    definition = "Form der Ehe, bei der mehr als zwei Personen miteinander verheiratet sind",
                    examples = arrayOf("In Deutschland ist Polygamie nicht erlaubt.", "In vielen afrikanischen Staaten wird zwar die monogame Ehe gefördert, doch ist die Polygamie nicht verboten.")
            ),
            ESD(    id = 445,
                    name = "Polypol",
                    definition = "Marktform, bei der sich viele Anbieter und viele Nachfrager gegenüberstehen",
                    examples = arrayOf("Die relativ hohe Häufung von Prostituierten der Straßen- und der Bordellprostitution in Rotlichtvierteln bei relativ hohen Kundenzahlen führt insgesamt zu einer sehr stark marktorientierten Preisbildung im Sinne eines Polypols.")
            ),
            ESD(    id = 446,
                    name = "Populist",
                    definition = "Person, die ein Anhänger oder Vertreter des Populismus ist",
                    examples = arrayOf("In Europa sind eher Populisten am rechten politischen Spektrum erfolgreich, in Lateinamerika stehen sie links von der Mitte.")
            ),
            ESD(    id = 447,
                    name = "Portfolio",
                    definition = "Wertpapierbestand; Gesamtangebot eines Unternehmens, mit dem es an den Markt geht",
                    examples = arrayOf("Zum Portfolio gehören auch hochriskante Rohstoffaktien.", "Zum Portfolio des Konzerns gehören neben Cremes und Parfums auch Produkte der Haarpflege.")
            ),
            ESD(    id = 448,
                    name = "postfaktisch",
                    definition = "auf Gefühlen, nicht auf Tatsachen beruhend",
                    examples = arrayOf("Merkel stellte sich vors Mikro und sagte: ‚Es heißt ja neuerdings, wir lebten in postfaktischen Zeiten. Das soll wohl heißen, die Menschen interessieren sich nicht mehr für Fakten, sie folgen allein den Gefühlen")
            ),
            ESD(    id = 449,
                    name = "postulieren",
                    definition = "etwas fordern oder zur Bedingung machen; eine grundsätzliche Annahme oder Voraussetzung aufstellen",
                    examples = arrayOf("Sie postulierten die Anerkennung der Ehe zwischen Homosexuellen.", "1913 postulierte Niels Bohr das „Bohr'sche Atommodell“.")
            ),
            ESD(    id = 450,
                    name = "potenziell",
                    definition = "nach Möglichkeit",
                    examples = arrayOf("Man muss die potenziellen Gewinne deutlich von den tatsächlichen unterscheiden.")
            ),
            ESD(    id = 451,
                    name = "prädestiniert",
                    definition = "wegen einer Eigenschaft, die etwas oder jemand bereits besitzt, für eine zukünftige Funktion vorbestimmt oder besonders geeignet sein",
                    examples = arrayOf("Er ist aufgrund seiner Kenntnisse geradezu prädestiniert dazu, diesen Vortrag zu halten.", " „Die chemische Industrie kann zu den prädestiniertesten Anwenderbranchen der Szenario-Technik gezählt werden.“")
            ),
            ESD(    id = 452,
                    name = "pragmatisch",
                    definition = "praxisbezogen, auf Nützliches ausgerichtet, sachlich",
                    examples = arrayOf("Lasst uns das Problem ganz pragmatisch angehen.")
            ),
            ESD(    id = 453,
                    name = "Prämisse",
                    definition = "Annahme, Voraussetzung (eines Schlusses)",
                    examples = arrayOf("Er ging von der Prämisse aus, dass die anderen ihm tatsächlich helfen wollten.")
            ),
            ESD(    id = 454,
                    name = "prätentiös",
                    definition = "durch besondere Darstellungsmöglichkeiten (Sprache, Aussehen usw.) versuchend kultiviert zu wirken",
                    examples = arrayOf("Das Musical war prätentiös.", "Der Schweinezüchter ist ein Emporkömmling, der durch sein prätentiöses Auftreten versucht, seinen sozialen Aufstieg zu inszenieren und eine große Rolle zu spielen.")
            ),
            ESD(    id = 455,
                    name = "prekär",
                    definition = "widerruflich, unsicher, heikel, schwierig, problematisch",
                    examples = arrayOf("Das Beschäftigungsverhältnis als Leiharbeiter ist prekär.", "Die Situation ist prekär.")
            ),
            ESD(    id = 456,
                    name = "Prêt-à-porter",
                    definition = "",
                    examples = arrayOf()
            ),
            ESD(    id = 457,
                    name = "preziös",
                    definition = "so, dass jemand sich affektiert, nicht natürliche oder gekünstelt benimmt.",
                    examples = arrayOf("Sie hat sich auf eine preziöse Art bedankt.")
            ),
            ESD(    id = 458,
                    name = "Primus inter Pares",
                    definition = "Führer einer Gruppe mit gleichberechtigten Mitgliedern, wörtlich: Erster unter Gleichen",
                    examples = arrayOf("Der Bundespräsident der Schweiz ist nicht das Staatsoberhaupt, sondern steht dem Bundesrat als Primus inter Pares vor.")
            ),
            ESD(    id = 459,
                    name = "pro forma",
                    definition = "der Form halber, um einer Regelung gerecht zu werden",
                    examples = arrayOf("Er hat die Bestellung pro forma schriftlich bestätigt.")
            ),
            ESD(    id = 460,
                    name = "proaktiv",
                    definition = "im Voraus wirkend, vorausschauend und klar im Hinblick auf zukünftige Herausforderungen planend und handelnd",
                    examples = arrayOf("Wir haben im Bereich der Datenverarbeitung seit den 1990er Jahren proaktiv gehandelt.")
            ),
            ESD(    id = 461,
                    name = "probat",
                    definition = "für den betreffenden Zweck geeignet, bewährt, erprobt, angemessen",
                    examples = arrayOf("Da fällt mir ein probates Mittel ein!")
            ),
            ESD(    id = 462,
                    name = "profan",
                    definition = "alltäglich, gewöhnlich, weltlich, nicht heilig, nicht kirchlich",
                    examples = arrayOf("Das ist ganz profaner Klatsch, keine bedeutsame Nachricht.", "Manche Kirche wird, wenn sie nicht mehr für Gottesdienste benötigt wird, profan genutzt.")
            ),
            ESD(    id = 463,
                    name = "Profession",
                    definition = "Beruf, Berufung, Gewerbe, Handwerk, Leidenschaft (sich zu etwas bekennen)",
                    examples = arrayOf("Das Tischlerhandwerk ist seine Profession.", "„Ständig dachte Freiligrath daran, seine Profession einfach wegzuwerfen.“")
            ),
            ESD(    id = 464,
                    name = "Profitabilität",
                    definition = "langfristig nachhaltige Gewinnerzielungsmöglichkeit",
                    examples = arrayOf("Mit einem neuen, modernen Konzept soll die Profitabilität gesteigert werden.")
            ),
            ESD(    id = 465,
                    name = "progressiv",
                    definition = "sich vergrößernd, zunehmend, in seinem Verhalten Dominanz ausdrückend",
                    examples = arrayOf("Dieser Steuersatz ist progressiv.", "Dieser Tumor ist progressiv, er wächst.", " Dieser Lehrer hat bezüglich seiner Klasse ein progressives Verhalten.")
            ),
            ESD(    id = 466,
                    name = "Prokrastination",
                    definition = "Verhalten, unangenehme, jedoch notwendige Arbeiten und Entscheidungen aufzuschieben",
                    examples = arrayOf("Erst wenn die Aufschieberitis chronisch wird und jemand gewohnheitsmäßig Aufgaben vertagt, die eigentlich erledigt werden müssen, spricht man von Prokrastination.", " Er prokrastinierte die Verhandlungen und wartete auf ein Wunder.")
            ),
            ESD(    id = 467,
                    name = "promisk",
                    definition = "fachsprachlich: sexuell freizügig; nicht an langfristigen Bindungen orientierten Geschlechtsverkehr mit häufig wechselnden Partnern habend",
                    examples = arrayOf("In Clans lebende Wanderratten sind bedingt durch das Paarungssystem weitgehend promisk.")
            ),
            ESD(    id = 468,
                    name = "Promiskuität",
                    definition = "die Praxis, Geschlechtsverkehr mit häufig wechselnden Partnern zu haben - ohne Interesse an langfristigen Bindungen",
                    examples = arrayOf("Allein anhand der Anzahl der Dates auf wachsende Promiskuität von Heranwachsenden zu schließen, wäre also voreilig.", "Die Veranstalter ermuntern die jugendlichen Reisenden mit Wettbewerben und Besäufnissen zur kopflosen Promiskuität am Urlaubsort.")
            ),
            ESD(    id = 469,
                    name = "Prospektion",
                    definition = "Werbung mit Drucksachen oder Prospekten",
                    examples = arrayOf("Die Prospektion hat trotz der elektronischen Medien noch immer einen großen Marktanteil in der Werbebranche.")
            ),
            ESD(    id = 470,
                    name = "prospektiv",
                    definition = "die Zukunft, eine Weiterentwicklung betreffend",
                    examples = arrayOf("ie British Doctors Study (deutsch: „Britische Ärzte-Studie“) ist der Name einer prospektiven epidemiologischen Studie, welche von 1951 bis 2001 lief und bereits 1956 überzeugende statistische Belege lieferte dafür, dass das Tabakrauchen das Lungenkrebs-Risiko erhöht.")
            ),
            ESD(    id = 471,
                    name = "Prosument",
                    definition = "Verbraucher die gleichzeitig Konsumenten darstellen",
                    examples = arrayOf("Bei den schwankenden Marktpreisen bleiben Prosumenten gegenüber Konsumenten autark.")
            ),
            ESD(    id = 472,
                    name = "provisorisch",
                    definition = "vorübergehend, notbehelfsweise",
                    examples = arrayOf("Das Gebilde aus Alufolie und Kabelbinder ist nur eine provisorische Lösung, damit der Betrieb weitergehen kann.", "Die provisorische Brücke muss halten, bis der endgültige Zahnersatz da ist.")
            ),
            ESD(    id = 473,
                    name = "Pseudonym",
                    definition = "ein vorgetäuschter Name, besonders von Künstlern und Schriftstellern genutzt, um eine wahre Identität zu verbergen",
                    examples = arrayOf("Immer wieder werden die Konten von Nutzern gesperrt, die nicht ihren bürgerlichen Namen angegeben haben, sondern ein Pseudonym.")
            ),
            ESD(    id = 474,
                    name = "Purismus",
                    definition = "übertriebene Bemühung, etwas rein, d.h. frei von fremden, unerwünschten Einflüssen zu halten",
                    examples = arrayOf("Im Falle der Sprache ist Purismus der Versuch, die Einflüsse anderer Sprachen auf die eigene einzuschränken, wenn man der Ansicht ist, dass die eigene Sprache durch diese Einflüsse gefährdet ist.")
            ),
            ESD(    id = 475,
                    name = "Qualität",
                    definition = "individuell und konkret definierte Eigenschaft einer Sache oder einer Dienstleistung; positive Eigenschaft einer Person oder einer Sache",
                    examples = arrayOf("Der Stoff mit der gröberen Qualität gefällt mir besser.", "Dieses Wein hat eine ausgezeichnete Qualität.")
            ),
            ESD(    id = 476,
                    name = "Quantität",
                    definition = "das Wieviel einer Sache im Gegensatz zum Wie",
                    examples = arrayOf("Die Mathematik beschäftigt sich mit Quantitäten.", "Quantitäten sind auch in der Linguistik, speziell in der Quantitativen Linguistik, von Bedeutung.")
            ),
            ESD(    id = 477,
                    name = "Quantitativ",
                    definition = "die Quantität betreffend",
                    examples = arrayOf("Ob die Grenzwerte überschritten sind, muss erst eine quantitative Analyse zeigen.")
            ),
            ESD(    id = 478,
                    name = "Querulant",
                    definition = "Person, die sich ständig wegen jeder Kleinigkeit beschwert",
                    examples = arrayOf("Du nervst so! Dir kann man es wirklich nicht recht machen, du Querulant!", "Man hatte bald genug, übergenug von diesem Querulanten und seiner Prahlerei, er sei schließlich schon ein Wunderkind gewesen.")
            ),
            ESD(    id = 479,
                    name = "Quintessenz",
                    definition = "das Wesen einer Sache; das endgültige Ergebnis dessen, was man aus allem Vorhergegangenen schlussfolgern kann",
                    examples = arrayOf("Die Quintessenz dieser Rede lässt sich in drei Worten zusammenfassen.", "Der kranke Pückler möchte mit ihm offensichtlich aus einem weiteren Kapitel seines Lebens, der unglücklichen Jugend, eine Quintessenz ziehen.")
            ),
            ESD(    id = 480,
                    name = "Quisquilie",
                    definition = "meist Plural: Kleinigkeit, Nichtigkeit, Bagatelle",
                    examples = arrayOf("Immer dramatischer klangen die Nachrichten, immer albtraumhafter sahen die Videoberichte von den Küsten aus, da konnte er doch wohl nicht wie in Normalzeiten über Quisquilien aus dem eigenen Land sprechen?", "Was auf den ersten Blick wie eine geschichtspolitische Quisquilie wirken mag, ist in Wirklichkeit elementar.")
            ),
            ESD(    id = 481,
                    name = "quod erat demonstrandum",
                    definition = "traditioneller Abschluss für Beweise mit der Bedeutung „was zu beweisen war“ , q.e.d",
                    examples = arrayOf("Ein mathematischer Beweis wird traditionell mit den lateinischen Worten quod erat demonstrandum, abgekürzt ‚q.e.d.‘, beziehungsweise mit was zu beweisen war, abgekürzt ‚wzbw.‘, abgeschlossen.")
            ),
            ESD(    id = 482,
                    name = "Ramsch",
                    definition = "abwertend: Ware, die aufgrund ihrer geringen Qualität nicht verkauft, nicht abgesetzt werden konnte; im übertragenen Sinne: wertloses Zeug",
                    examples = arrayOf("Für den letzten Ramsch wird den Leuten das Geld aus der Tasche gezogen.", "Aber es sei mickriges Zeug, Ramsch sei das, Pofelware.","Der Herzog wollte den ganzen Ramsch übernehmen, was der berühmte Kollege selbstverständlich fand.")
            ),
            ESD(    id = 483,
                    name = "ratifizieren",
                    definition = "etwas rechtskräftig bestätigen, genehmigen",
                    examples = arrayOf("Die Vereinigten Staaten von Amerika haben das Kyoto-Protokoll nicht ratifiziert.")
            ),
            ESD(    id = 484,
                    name = "re­mon­tant",
                    definition = "beschreibt etwas wiederkehrendes oder wiederblühendes",
                    examples = arrayOf("Die Regierung konnte trotz der Krise eine remontante Begeisterung im Volk hervorrufen.")
            ),
            ESD(    id = 485,
                    name = "redundant",
                    definition = "mehrfach vorhanden, wiederholt",
                    examples = arrayOf("In jeder sprachlichen Äußerung gibt es redundante Erscheinungen, die zur Sicherung der Kommunikation wichtig sind. In der Linguistik gelten redundante Informationen nicht als überflüssig.")
            ),
            ESD(    id = 486,
                    name = "Rekonvaleszenz",
                    definition = "Medizin: Periode der Genesung nach Krankheiten, die besondere Schonung, gute Ernährung und Vorsicht wegen der Gefahr von Rückfällen erfordert",
                    examples = arrayOf("Die Rekonvaleszenz zog sich lange hin.", "Die Zeit der Rekonvaleszenz verbrachte er in einem Sanatorium.")
            ),
            ESD(    id = 487,
                    name = "Rekuperation",
                    definition = "Technik: Rückgewinnung von Energie; Geschichtswissenschaft: Rückgewinnung von Territorien",
                    examples = arrayOf("Die Bremsleistung und das Maß der Rekuperation sind abhängig von der Leistung der elektrischen Maschinen, der Speicherleistung und der freien Kapazität der Energiespeicher.", "In der Mild-Hybrid-Variante wird der Dynastart den Start-Stopp-Betrieb sowie Rekuperation ermöglichen.", "Gerade die Rekuperation der an eidgenössische Orte gefallenen Besitzungen erwies sich trotz einer durchaus bemühten Politik Friedrichs als nicht durchführbar.", "„Auch wegen der Rekuperation von Ordensgütern in Italien hatte er vorzusprechen.")
            ),
            ESD(    id = 488,
                    name = "Relevanz",
                    definition = "Eigenschaft (in einem bestimmmten Zusammenhang) wichtig, bedeutsam zu sein",
                    examples = arrayOf("Maßstäbe für eine Rechtfertigung sind die Wahrhaftigkeit, Relevanz und Verständlichkeit des Gesagten.", "Ich bezweifle die Relevanz dieses Beitrags für unser Projekt.")
            ),
            ESD(    id = 489,
                    name = "renitent",
                    definition = "einem Druck widerstehend; permanent in Opposition (dagegen)",
                    examples = arrayOf("Er erwies sich als außerordentlich renitent und ließ sich in keiner Weise beeinflussen.", "Er ist aus Prinzip renitent.")
            ),
            ESD(    id = 490,
                    name = "renommiert",
                    definition = "einen guten Namen habend, einen guten Ruf habend",
                    examples = arrayOf("Damit ist das designierte Führungsteam des renommierten Kulturfestivals nun komplett.", "Im 19. Jahrhundert kaufte der russische Adel und die Kaiserfamilie nicht nur in Moskau bei renommierten Juwelieren, sondern in Paris.")
            ),
            ESD(    id = 491,
                    name = "Repertoire",
                    definition = "Menge von Objekten, die ein gemeinsames Merkmal besitzen oder derselben Gruppe angehören; Menge von Dramen, Opern, Stücken oder Rollen, die von einem oder mehreren Interpreten jederzeit aufgeführt werden können; Menge der Möglichkeiten, die für die Bewältigung einer Aufgabe zur Verfügung stehen",
                    examples = arrayOf("Er hat ein reichhaltiges Repertoire.", "Das Orchester spielt neuerdings ein sehr modernes Repertoire.", "Zum Repertoire der Betrüger gehören auch überraschende Lotteriegewinne, die eingelöst werden müssen, und Treuhandbetrug (mit Hilfe eigener Treuhänder) bei Online-Auktionshäusern.", "„Natürlich umfasst das ganze Repertoire einer umfangreichen Bootsausrüstung mehrere Seiten, die je nach Bootseigner variieren.“")
            ),
            ESD(    id = 492,
                    name = "Requisite",
                    definition = "Gegenstände die in Aufführungen benötigt werden.",
                    examples = arrayOf("Für die Generalprobe werden alle Requisiten des Stücks benötigt.")
            ),
            ESD(    id = 493,
                    name = "Resistenz",
                    definition = "Widerstandsfähigkeit; Widerstandsfähigkeit einfacher Organismen (besonders: Krankheitserreger) gegen bestimmte Substanzen (besonders: Medikamente) und Einflüsse.",
                    examples = arrayOf("Viele gram-positive Bakterien haben eine Resistenz gegen Penicillin ausgebildet.", "„… Grünzeug essen ansonsten nur Rinder. 'Gemüse ist das, was Essen isst' – in solchen Sätzen manifestiert sich die Mooksche Weltanschauung, die ihre Resistenz gegenüber kulinarischen Gesundheitstrends stolz kultiviert.“")
            ),
            ESD(    id = 494,
                    name = "respektive",
                    definition = "oder auch, anders ausgedrückt",
                    examples = arrayOf("Wir suchen eine Bewerberin respektive einen Bewerber mit sicheren Rechtschreibkenntnissen.")
            ),
            ESD(    id = 495,
                    name = "Ressentiment",
                    definition = "bildungssprachlich: gefühlsmäßige Abneigung, Vorbehalt",
                    examples = arrayOf("Die Rede strotzte vor Ressentiments.","Mittlerweile hätten die antideutschen Ressentiments die publizistische Sphäre verlassen, sagt Georgios Delastik.")
            ),
            ESD(    id = 496,
                    name = "Ressort",
                    definition = "Geschäfts-, Amtsbereich; Arbeits-, Aufgabenbereich",
                    examples = arrayOf("Das ist mein Ressort.")
            ),
            ESD(    id = 497,
                    name = "restriktiv",
                    definition = "einschränkend, streng, genau, strikt",
                    examples = arrayOf("Die Vorschriften werden hier sehr restriktiv gehandhabt.")
            ),
            ESD(    id = 498,
                    name = "restrukturieren",
                    definition = "(einer Sache) eine neue Struktur (Ordnung) geben; die alte Struktur durch eine neue ersetzen",
                    examples = arrayOf("Der Unternehmensberater möchte die gesamte Abteilung restrukturieren.")
            ),
            ESD(    id = 499,
                    name = "Resümee",
                    definition = "meist am Ende eines Textes stehende, inhaltliche Zusammenfassung mit eigener Wertung und/oder Schlussfolgerungen",
                    examples = arrayOf("Wladimir zieht ein Resümee seiner Amtszeit.")
            ),
            ESD(    id = 500,
                    name = "retrospektiv",
                    definition = "bildungssprachlich: in der Rückschau",
                    examples = arrayOf("Retrospektiv beurteile ich die ersten Semester meines Studiums als die besten.")
            ),
            ESD(    id = 501,
                    name = "reüssieren",
                    definition = "Erfolg haben",
                    examples = arrayOf("Er reüssierte mit seinem zweiten Soloalbum.", "„Der Hinge-Faktor ist ein weiterer Grund, warum manche reüssieren und andere scheitern.“", "„Unsere Fischerei reüssierte mehr und mehr.“[")
            ),
            ESD(    id = 502,
                    name = "revanchieren",
                    definition = "sich für etwas rächen; sich für etwas erkenntlich zeigen",
                    examples = arrayOf("Für diese Unverschämtheit wollte er sich unbedingt revanchieren.", "Wie soll ich mich für deine Hilfe jemals angemessen revanchieren.")
            ),
            ESD(    id = 503,
                    name = "revidieren",
                    definition = "etwas auf seine Richtigkeit überprüfen, etwas Falsches verbessern",
                    examples = arrayOf("„Sämtliche Rechnungen sind von mir eingehend revidiert.“", "Die Daten waren falsch und mussten revidiert werden.")
            ),
            ESD(    id = 504,
                    name = "Revision",
                    definition = "Überprüfung von Gegenständen, Zuständen oder Prozessen; Änderung nach gründlicher Prüfung",
                    examples = arrayOf("Die Abrechnungen der Krankenkassen werden von der Rezeptprüfstelle einer Revision unterzogen.", "Nach der Revision des Vertrages wurde er unterschrieben.")
            ),
            ESD(    id = 505,
                    name = "Rezension",
                    definition = "kritische Besprechung eines Werkes (eines Buches, einer künstlerischen Darbietung oder einer wissenschaftlichen Arbeit)",
                    examples = arrayOf("Die Rezension zu dem neuen Grass hat mir nicht zugesagt.", "Am Anfang, als Assistent und Privatdozent, hatte er auf jeden Sonderdruck mit einem Brief reagiert, der oft die Länge einer Rezension hatte.“", "Mit dieser einen Rezension vernichtete er das Buch")
            ),
            ESD(    id = 506,
                    name = "reziprok",
                    definition = "fachsprachlich: wechselseitig, in Wechselbeziehung stehend, gegenseitig",
                    examples = arrayOf("Reziproke Pronomen werden benutzt, um eine wechselseitige Beziehung auszudücken. Die reziproken Pronomen im Englischen sind: \neach other - einander, sich (gegenseitig) \none another - einander, sich (gegenseitig)")
            ),
            ESD(    id = 507,
                    name = "rezitieren",
                    definition = "einen Text auswendig aufsagen; ein literarisches Werk künstlerisch ausdrucksvoll vortragen",
                    examples = arrayOf("Gleichzeitig rezitieren verschiedene Stimmen Texte aus verschiedenen Quellen, und das Orchester spielt Zitate von Claude Debussy, Arnold Schönberg und anderen.“")
            ),
            ESD(    id = 508,
                    name = "rhetorisch",
                    definition = "auf die Fähigkeit zu reden bezogen",
                    examples = arrayOf("Er hat sich mit seinen rhetorischen Mitteln gut aus der Affaire gezogen.", "Die Klimax ist ein rhetorisches Mittel, um Zuhörer zu beeinflussen.", "„Nach der rhetorischen Glanzleistung des Präsidenten folgte ein Schwall blecherner patriotischer Phrasen.“")
            ),
            ESD(    id = 509,
                    name = "rigide",
                    definition = "steif, streng, starr",
                    examples = arrayOf("Er glaubte mal wieder, rigide durchgreifen zu müssen.")
            ),
            ESD(    id = 510,
                    name = "rigoros",
                    definition = "gehoben: streng vorgehend, ohne Rücksicht zu nehmen",
                    examples = arrayOf("Er fiel durch rigoroses Vorgehen in seinem Verhalten auf.", "Der Provider geht rigoros gegen Versender von SPAM vor.", "Die Flüchtlinge wurden rigoros abgeschoben.", "Es muss rigoros gespart werden.")
            ),
            ESD(    id = 511,
                    name = "rudimentär",
                    definition = "in Ansätzen; im Laufe der Evolution verkümmert oder unvollständig entwickelt",
                    examples = arrayOf("Das sind bloß rudimentäre Überlegungen zu einem Thema", "Wenn sich Personalchefs auf eine rudimentäre Suche von fünf Minuten pro Bewerber beschränkten, fänden sie nicht, was sie suchen.", "Unser Steißbein ist ein rudimentärer Schwanz.")
            ),
            ESD(    id = 512,
                    name = "Sakrileg",
                    definition = "Vergehen gegen Heiliges, zum Beispiel die Entweihung heiligen Bodens oder Sachen durch Raub, Schändung oder auch Missbrauch, aber auch Angriffe gegen geweihte Personen",
                    examples = arrayOf("Das ist ein Sakrileg!", " „Und diese Empfindung war, paradoxerweise, durchsetzt mit einer Gleichgültigkeit, die einem Sakrileg gleichkam, weil sie die gesamte akademische Welt in Frage stellte.“", "„Wer ihre experimentierende Verwendung als Sakrileg kritisiert, übersieht, dass sie selbst Sakrilegien ihre Existenz verdankten […].“", "„Theokratie, von Gott eingesetzte Gewalt, das Sakrileg aller Sakrilegien.“")
            ),
            ESD(    id = 513,
                    name = "sakrosankt",
                    definition = "unantastbar, unverletzlich; für jemanden persönlich sehr wichtig, heilig",
                    examples = arrayOf("Das Beichtgeheimnis ist sakrosankt.", "Besonders für eines dieser Stichworte kann er den sakrosankten Platz eines Säulenheiligen für sich reklamieren.")
            ),
            ESD(    id = 514,
                    name = "Säkularisierung",
                    definition = "sozialer Bedeutungsverlust von Religion; Auflösung geistlicher Herrschaften",
                    examples = arrayOf("Er und Frei sprachen von einer \"Säkularisierung der Sozialarbeit\".", "„Der Schwerpunkt der Revisionsausführungen liegt in der Frage, ob und inwieweit die Säkularisierung der Besitztümer und Rechte des Hochstiftes Passau durch Joseph II. die Fischereirechte der Kläger berühren konnten.“")
            ),
            ESD(    id = 515,
                    name = "Sanierung",
                    definition = "das Wiederherstellen eines geordneten Zustandes; Erneuerung eines Gebäudes oder Bauwerks; das Wiederherstellen der wirtschaftlichen Leistungsfähigkeit eines Betriebes",
                    examples = arrayOf("Der Erfolg der Sanierung [des Erdbodens] muss mit geeigneten Messverfahren nachgewiesen werden, evtl. mit wiederkehrenden Messungen (z. B. die dauerhafte Wirksamkeit der Sicherung).", "Geld braucht Tschechien für die Sanierung seines teils maroden Straßennetzes dringend.", "Deshalb ist eine Sanierung mit dem denkmalpflegerischen Erhaltungsanspruch schwer vereinbar.", "Es fehle aber ein Konzept für eine »nachhaltige Sanierung des Bankensystems«. Welche Folgen das haben kann, zeigt Japan.")
            ),
            ESD(    id = 516,
                    name = "Satire",
                    definition = "einzelnes künstlerisches Werk, das von der satirischen Schreibweise Gebrauch macht oder der Gattung angehört",
                    examples = arrayOf("„Der Satiriker hingegen kämpft oft einen verzweifelten Kampf, bei dem ungewiß bleibt, ob sich das Objekt der Satire überhaupt beeinflussen läßt.“")
            ),
            ESD(    id = 517,
                    name = "schassen",
                    definition = "jemanden schimpflich entlassen",
                    examples = arrayOf("Der Manager wurde vom Vorstand geschasst.")
            ),
            ESD(    id = 518,
                    name = "Schibboleth",
                    definition = "(verabredetes) Zeichen, das zur Erkennung von jemandem oder etwas dienen soll; einzelnes Wort als Losung; charakteristisches, unterscheidendes Zeichen, an dem eine Person/Personengruppe oder Sache (deutlich) zu erkennen ist",
                    examples = arrayOf("Er lebt nach der Maxime »wo immer ein Wesen meiner Art sich mir nähert, erkenne ich dasselbe Prinzip in ihm, dieselbe Natur; und die (erkannte) Vernunftsympathie (und keine bloß gefühlte) sei das Schibboleth, an dem sich Menschen und Menschen unter den übrigen Naturwesen suchen, finden, erkennen, vereinen und lieben«.", "„Der Chartismus war allerdings von seinem Anfange 1835 an hauptsächlich eine Bewegung unter den Arbeitern, aber noch nicht scharf von der radikalen kleinen Bourgeoisie getrennt. Der Arbeiterradikalismus ging Hand in Hand mit dem Radikalismus der Bourgeoisie; die Charte war das Schibboleth beider, sie hatten ihre ‚Nationalkonvente‘ jedes Jahr zusammen, es schien eine Partei zu sein.“")
            ),
            ESD(    id = 519,
                    name = "schmähen",
                    definition = "mit verachtenden Worten beleidigen",
                    examples = arrayOf("Harald Schmidt darf Klinsmann nicht mehr schmähen.“", "„Erst werden die Menschen unters Joch gezwungen und dann als knechtisch verachtet, unterdrückt und dann von oben herab behandelt, verdummt und ihrer Dummheit wegen verhöhnt, versklavt und als Sklaven geschmäht.“")
            ),
            ESD(    id = 520,
                    name = "sedieren",
                    definition = "mit Medikamenten ruhigstellen",
                    examples = arrayOf("Man musste die Patientin zuerst sedieren, bevor man ihre Wunden versorgen konnte.", "Die Angst vor Verstößen gegen das restriktive deutsche Betäubungsmittelgesetz und damit die Furcht, jemanden versehentlich zum Sterben zu sedieren, scheint zu weichen.")
            ),
            ESD(    id = 521,
                    name = "Semantik",
                    definition = "die Lehre von der Bedeutung von einfachen und komplexen sprachlichen Zeichen, also Morphemen, Wörtern, Sätzen und so weiter",
                    examples = arrayOf("Unter Semantik werden in der Linguistik unterschiedliche Ansätze verstanden.", "„Von diesem Bedeutungsgehalt, mit dem sich die Semantik beschäftigt, wollen wir in unserer Untersuchung zunächst einmal absehen.“", "Die Semantik dieses Wortes ist noch unklar.")
            ),
            ESD(    id = 522,
                    name = "sensibel",
                    definition = "leicht zu beschädigen; empfindlich auf emotionaler und geistiger Ebene",
                    examples = arrayOf("Diese Stelle des menschlichen Körpers ist äußerst sensibel.", "Dies ist eine sensible Apparatur.", "Pass auf was du sagst, er ist sehr sensibel.", "Die Politik müsse in der Islam-Debatte sensibel argumentieren, sagte [der Religionssoziologe der Uni Münster Detlef] Pollack: „Jedes Wort, das nicht sorgfältig abgewogen ist, kann die Konflikte verschärfen.“")
            ),
            ESD(    id = 523,
                    name = "separat",
                    definition = "getrennt voneinander, getrennt von etwas",
                    examples = arrayOf("Frauen und Männer beten in separaten Räumen.", "Die Einliegerwohnung hat einen separaten Zugang.")
            ),
            ESD(    id = 524,
                    name = "separieren",
                    definition = "jemand oder etwas aus seinen Bezügen herauslösen; fachsprachlich: Stoffe, oftmals mit Hilfe eines Separators, voneinander trennen",
                    examples = arrayOf("Beim Sport werden Jungen und Mädchen separiert und in eigenen Gruppen unterrichtet.", "Stoffgemische können technisch separiert werden.")
            ),
            ESD(    id = 525,
                    name = "Sezession",
                    definition = "Absonderung beziehungsweise Verselbstständigung von Staatsteilen",
                    examples = arrayOf("„Von einer Beendigung der Sezession Katangas mit militärischen Mitteln ist nicht die Rede.“")
            ),
            ESD(    id = 526,
                    name = "Sisyphusarbeit",
                    definition = "Arbeit, die nie vollendet werden kann; die immer wieder von vorne begonnen werden muss",
                    examples = arrayOf("„Alle tragen sie bunte Saris und halten in ihren Hütten die gleiche penible Sauberkeit. Dabei ist das Saubermachen im Slum eine Sisyphusarbeit.“")
            ),
            ESD(    id = 527,
                    name = "situiert",
                    definition = "in bestimmten wirtschaftlichen Verhältnissen lebend; in einer bestimmten Lebensstellung befindlich",
                    examples = arrayOf("Grethe ist hier zwar (uneheliche) Mutter eines Fräuleins, das, weil von Mama im Stich gelassen, durch reiche Adoptiveltern gut situiert wurde.", "Selbst wenn die Eltern gut situiert sind und das Studium mitfinanzieren, haben fast alle Studenten mindestens Nebenjobs und können sich ganz sicher keine 3-Zimmer-Wohnung in einer Innenstadt leisten.")
            ),
            ESD(    id = 528,
                    name = "skandieren",
                    definition = "mit starker Betonung der Hebungen lesen und sprechen",
                    examples = arrayOf("„Teile der Ansprache werden leider von den zehn Mitgliedern des Damenkegelclubs 'He wackelt' übertönt, die nach dem hastigen Genuss von anderthalb Flaschen Eckes Kirschlikör mit rotglühenden Gesichtern 'Ausziehen, Ausziehen!' skandieren.“")
            ),
            ESD(    id = 529,
                    name = "Skepsis",
                    definition = "Zweifel, kritische, misstrauische Haltung",
                    examples = arrayOf("Bei vielen auf den ersten Blick verlockenden Angeboten ist Skepsis angebracht.", "Fridolin ist ein Mann von gesunder Skepsis.", "Man kann es mit seiner Skepsis auch übertreiben.")
            ),
            ESD(    id = 530,
                    name = "Skeuomorphismus",
                    definition = " ist eine Stilrichtung hauptsächlich im Design, bei der Objekte in ihrer Gestaltung ein anderes Material oder eine Form eines älteren, vertrauten Gegenstandes nachahmen, ohne dass diese durch ihre Funktion begründet ist.",
                    examples = arrayOf()
            ),
            ESD(    id = 531,
                    name = "soigniert",
                    definition = "in Bezug auf das Aussehen: gepflegt, seriös",
                    examples = arrayOf("Er ist eine soignierte Erscheinung.")
            ),
            ESD(    id = 532,
                    name = "souverän",
                    definition = "bezogen auf Staaten, Regierungen: unabhängig sein, innehabend, ausführend; gehoben: im Auftreten sicher, überlegen, erhaben",
                    examples = arrayOf("„Man könnte Somaliland ‚souverän‘ nennen, doch international ist es das nicht, und die aus eigener Kraft erreichten Erfolge finden wenig Anerkennung.“", "„Tabori inszeniert ein Lächeln. ‚Sau‘ und ‚Tyrann‘, das ist, leicht zu spüren, nicht vergessen – darüber darf keine souveräne Geste hinwegtäuschen, da hilft kein ungarischer Charme, keine danubische Ironie.“")
            ),
            ESD(    id = 533,
                    name = "Souveränität",
                    definition = "selbstsichere Haltung einer Person gegenüber anderen; von anderen Staaten unabhängige Selbstständigkeit eines Staates in seinem eigenen Gebiet",
                    examples = arrayOf("Ihr Auftreten war von überzeugender Souveränität geprägt.","Die Kolonien erhielten nach und nach fast alle ihre Souveränität.","Die Souveränität des Regimes ist noch ungebrochen.")
            ),
            ESD(    id = 534,
                    name = "spartanisch",
                    definition = "auf das Notwendigste reduziert, in der Art einer genügsamen Lebensweise",
                    examples = arrayOf("Sein Schlafzimmer war sehr spartanisch eingerichtet. Nur ein Bett, ein Nachtschränkchen, eine Lampe.")
            ),
            ESD(    id = 535,
                    name = "Spekulation",
                    definition = "eine Schlussfolgerung über etwas ohne gesicherte Erkenntnis;  eine Erwartung, dass ein bestimmtes Ereignis oder ein Zustand in der Zukunft eintritt, ohne dafür eine ausreichende Basis zu haben",
                    examples = arrayOf("Alles ist pure Spekulation.", "„Interviewpartner grenzen sich bei Spekulationen auch gerne vom Frager ab, indem sie sich als »seriös« titulieren.“", "Die zukünftige Klimaentwicklung ist anscheinend nicht nur pure Spekulation.")
            ),
            ESD(    id = 536,
                    name = "spezifisch",
                    definition = "sich aus den Eigenschaften einer Sache oder Person ergebend",
                    examples = arrayOf(" Ein spezifisch deutsches Indianerbild entspringt der intensiven Beschäftigung mit Kulturen und Schicksalen der nordamerikanischen Ureinwohner im deutschen Sprachraum, in Publikationen und Medien.")
            ),
            ESD(    id = 537,
                    name = "sporadisch",
                    definition = "vereinzelt vorkommend, (nur) gelegentlich, relativ zerstreut, verstreut, relativ in unregelmäßigen Abständen wiederkehrend",
                    examples = arrayOf("Da die Fehler jetzt nur noch sporadisch auftraten, waren sie mit ihrer Arbeit zufrieden.", "Im Park gab es nur sporadisch Abfalleimer, weshalb es an Wochenenden immer aussah wie auf einer Müllkippe.", "Die Zugriffsstatistiken für die Homepage werden nur sporadisch ausgewertet.")
            ),
            ESD(    id = 538,
                    name = "stagnieren",
                    definition = "Gewässer: nicht fließen, nicht zirkulieren; auf gleichem Niveau bleiben; nicht weiterentwickeln",
                    examples = arrayOf("Die Verkaufszahlen stagnieren auf hohem Niveau.")
            ),
            ESD(    id = 539,
                    name = "Stakeholder",
                    definition = "Marketing, Projektmanagement, Wirtschaft: Personen oder Personengruppe, welche ein Projekt positiv oder negativ beeinflussen können oder Interesse am Projekt aufweisen oder aufweisen könnten",
                    examples = arrayOf("Bei einem Bauprojekt ist der Kunde der größte Stakeholder.")
            ),
            ESD(    id = 540,
                    name = "Status quo",
                    definition = "der derzeitige Zustand",
                    examples = arrayOf("Ich befürworte den Status quo.", "Wir befinden uns wirtschaftlich in einem labilen Status quo.", "„So bleibt der Status quo lange Zeit erhalten.“")
            ),
            ESD(    id = 541,
                    name = "stoisch",
                    definition = "die Stoa oder den Stoizismus betreffend; übertragen: unerschütterlich, gleichmütig",
                    examples = arrayOf(" „Die Kyniker waren von großer Bedeutung für die stoische Philosophie, die um das Jahr 300 v. Chr. in Athen aufkam.“", "Sie tritt meist stoisch auf.")
            ),
            ESD(    id = 542,
                    name = "Stigmatisierung",
                    definition = "ein Prozess, in dessen Verlauf innerhalb einer Gesellschaft bestimmte äußere Merkmale von Personen und Gruppen, zum Beispiel farbige Haut oder eine sichtbare Behinderung, mit negativen Bewertungen belegt und die Betroffenen, als \"die Farbigen\", oder \"die Körperbehinderten\" in eine Randgruppenposition gedrängt werden",
                    examples = arrayOf()
            ),
            ESD(    id = 543,
                    name = "stringent",
                    definition = "streng an Regeln haltend, ohne Abweichung genau nach Plan; schlüssig, nachvollziehbar, durchgehend, lückenlos, zwingend (bei Argumenten)",
                    examples = arrayOf("Der Plan wurde ganz stringent verfolgt.", "Er formulierte eine stringente Argumentation.")
            ),
            ESD(    id = 544,
                    name = "subaltern",
                    definition = "mit beschränkten Entscheidungsbefugnissen versehen; geistig abhängig oder auch unselbstständig; untergeordnet, unterwürfig",
                    examples = arrayOf("Mit subalternen Beamten zu verhandeln, nützt hier gar nichts.")
            ),
            ESD(    id = 545,
                    name = "subsidiär",
                    definition = "Hilfe leistend; (besonders Recht): als Behelf dienend",
                    examples = arrayOf("Der Staat agiert subsidiär, einzelne Entscheidungen liegen in der Hand der untergeordneten Stellen.", "Für den Lebensbedarf des Kindes stehen subsidiäre Sozialleistungen zur Verfügung.")
            ),
            ESD(    id = 546,
                    name = "subtil",
                    definition = "zart, fein; detailliert, in die Feinheiten gehend; spitzfindig, scharfsinnig; unterschwellig",
                    examples = arrayOf("Diese subtilen Zeichnungen erschließen sich erst bei genauerem Hinsehen.", "Er kommt nie über Redensarten hinaus, und ein etwas subtileres Denken wäre ihm zu wünschen.", "Eine pampige Behauptung siegt oft über eine subtile Begründung.", " \"Ich meine, wir sind besser in einigen Belangen… Wir sind subtiler… Benutzen mehr Worte und rechtliche Kniffe, um alles zu legitimieren.")
            ),
            ESD(    id = 547,
                    name = "subversiv",
                    definition = "verborgen gehaltene, auf Umsturz gerichtete Aktivität",
                    examples = arrayOf("Durch Subversion kann die Stabilität eines Staates gefährdet werden.", "Die Gruppe führte lange Zeit subversive Aktivitäten durch.")
            ),
            ESD(    id = 548,
                    name = "süffisant",
                    definition = "selbstgefällig, genüsslich überlegene Distanz zeigend, ein Gefühl von meist geistiger Überlegenheit zur Schau tragend, spöttisch-überheblich",
                    examples = arrayOf("Er hatte so einen merkwürdig süffisanten Ton bei seiner Ansprache.")
            ),
            ESD(    id = 549,
                    name = "suggerieren",
                    definition = "jemandem etwas suggerieren: etwas unterschwellig andeuten; jemanden dazu bringen oder den Versuch dazu machen, dass er etwas bemerkt, zur Kenntnis nimmt oder für wahr hält, ohne es dazu offen anzusprechen",
                    examples = arrayOf("Er hat mir fein suggeriert, meine Schwester stecke hinter der Intrige, aber ich glaube ihm nicht.", "Gesagt hat man mir nicht, dass ich störe, aber suggeriert schon.", "Die Art der Fragestellung suggeriert schon die Antwort.", "Man hat es ihm deutlich genug suggeriert, er hat aber nicht verstanden.")
            ),
            ESD(    id = 550,
                    name = "sukzessiv",
                    definition = "kontinuierlich, Schritt für Schritt ablaufend, schrittweise, sequentiell, allmählich, aufeinander folgend, schleichend",
                    examples = arrayOf("Das Heranwachsen eines biologischen Organismus ist ein sukzessiver Prozess.")
            ),
            ESD(    id = 551,
                    name = "Surrogat",
                    definition = "nicht vollwertiger Ersatzstoff, beispielsweise Malz oder Zichorie als Ersatz für „echten” Kaffee; Recht: das an Stelle einer Sache bei Verlust, Veräußerung oder Zerstörung Erlangte",
                    examples = arrayOf("Mit bestimmten Surrogaten lässt sich koffeinfreier Ersatzkaffee brauen.", "Ein Surrogat schafft einen äquivalenten Ersatz, damit ist die Geldleistung der Vollkaskoversicherung Surrogat für das zerstörte Kraftfahrzeug.")
            ),
            ESD(    id = 552,
                    name = "suspekt",
                    definition = "so geartet, dass Zweifel an der Echtheit, Nützlichkeit oder Qualität aufkommen",
                    examples = arrayOf("Der Laden ist mir suspekt, da würde ich niemals einkaufen.", "„Der Kläger habe, da ihm dieser Vertrag mehr als suspekt erschienen sei, von den Beklagten wiederholt die Einsichtnahme in das Original verlangt, was ihm, wohl aus gutem Grunde, bisher immer verweigert worden sei.“")
            ),
            ESD(    id = 553,
                    name = "Symptom",
                    definition = "allgemein: etwas, das auf etwas anderes schließen lässt; Anzeichen einer bereits vorhandenen oder sich anbahnenden Krankheit",
                    examples = arrayOf("Man kann den Verlauf der Börsenkurse als Symptom für den Zustand der Finanzmärkte interpretieren.", "Du hast den ersten Symptomen einer Erkältung keine Beachtung geschenkt. Nun hat es dich richtig erwischt!")
            ),
            ESD(    id = 554,
                    name = "Syndrom",
                    definition = "die Gesamtheit aller Symptome einer Erkrankung; eine Gruppe von Merkmalen oder Faktoren, deren gemeinsames Auftreten einen bestimmten Zusammenhang oder Zustand anzeigt",
                    examples = arrayOf("AIDS ist ein Syndrom, das heißt, es ist eine spezifische Kombination einer Reihe von Symptomen eines angegriffenen Immunsystems.", " „Dieses typische Syndrom bei den Nachkriegsgenerationen in Europa, Nord- und Südamerika ist ein besonderer Ausdruck eines \"Hamlet-Problems\".“", "Das Bambi-Syndrom bezeichnet eine Einstellung von Menschen zur Natur, bei der diese moralisiert und infantilisiert wird. Kennzeichnend für das Bambi-Syndrom ist eine Polarisierung dahingehend, dass die Natur generell gut und alles menschengemachte wie Technik, Zivilisation schlecht ist.“")
            ),
            ESD(    id = 555,
                    name = "Synonym",
                    definition = "ein Wort, das in einem bestimmten Zusammenhang die gleiche Bedeutung hat wie die eines anderen Wortes, gleichbedeutendes (neuzeitlich auch sinnverwandtes) Wort",
                    examples = arrayOf("„Apfelsine“ ist ein Synonym für „Orange“, und „Kunde“ ist eines für „Auftraggeber“.", "Der Begriff Synonym wird bisweilen auch auf Wörter angewendet, die nicht in einem strengen Sinn die gleiche, sondern lediglich eine (sehr) ähnliche Bedeutung haben.")
            ),
            ESD(    id = 556,
                    name = "Tableau",
                    definition = "Bild, Gemälde; wirkungsvoll gruppierte Darsteller auf der Bühne.",
                    examples = arrayOf()
            ),
            ESD(    id = 557,
                    name = "Tabula rasa",
                    definition = "bildungssprachlich: reinen Tisch machen; energisch, rücksichtslos und unbeirrt Ordnung, klare Verhältnisse schaffen oder Klarheit herbeiführen",
                    examples = arrayOf("Aus Furcht vor Inflation flüchten Sparer aus Geldwerten und machen Tabula rasa bei Lebensversicherungen und Sparplänen.", "Er halte aber nichts davon, dass Ratingagenturen \"tabula rasa nach dem Rasenmäherprinzip\" machen, kritisiert Mostböck", "Im Gegenteil: Selbst Norbert Blüm fühlte sich veranlaßt, vor \"neuen sozialpolitischen Rambos, die glauben, sie können Tabula rasa machen\", zu warnen.")
            ),
            ESD(    id = 558,
                    name = "Tacheles",
                    definition = "umgangssprachlich: (jemandem gegenüber) ganz offen und freimütig seine Meinung äußern",
                    examples = arrayOf("Endlich jemand, der Tacheles redet und anderen klarmacht, was Menschenrechte sind.", "„Endlich redet mal jemand Tacheles.“")
            ),
            ESD(    id = 559,
                    name = "taktil",
                    definition = "das Tasten, den Tastsinn betreffend",
                    examples = arrayOf("Die taktilen Fähigkeiten sind nur ungenügend ausgeprägt.", "Die Funktion des taktil-protopathischen Systems ist die Nutzung taktiler Informationen für das Wohlbefinden im eigenen Körper.", " Die Schmerzempfindung bei taktiler Hypersensibilität/Überempfindlichkeit ist paradox.")
            ),
            ESD(    id = 560,
                    name = "tangibel",
                    definition = "berührbar, greifbar",
                    examples = arrayOf("Aber ebenso wenig wie die „historische sache\" (vermöge ihrer absenz) tatsächlich tangibel ist, erscheint es als ausgemachte sache, dass sich der historische diskurs eindeutig langage oder langue zuordnen lasse.")
            ),
            ESD(    id = 561,
                    name = "tangieren",
                    definition = "(am Rande, oberflächlich) angehen, berühren, betreffen im übertragenen Sinn, es kümmert einen",
                    examples = arrayOf("Diese Sache tangiert mich nicht.", "„Er trank gern und teilte sich gern mit, es ging etwas gewalttätig an seinem Tisch zu, mit plötzlichen Ausbrüchen und Beschimpfungen, die ihn nicht tangierten.“")
            ),
            ESD(    id = 562,
                    name = "Tapet",
                    definition = "Bespannung, Überzug eines Konferenztisches; nur noch in Wendungen: etwas aufs Tapet bringen, aufs Tapet kommen: (ugs.) etwas zur Sprache bringen, zur Sprache kommen",
                    examples = arrayOf("Das hätte heute nicht auch noch aufs Tapet kommen müssen.", "„Kaum kam der Bruder aufs Tapet, verschlossen sich die Ohren.“", "„Irgendwie wurde das Thema nie aufs Tapet gebracht.“")
            ),
            ESD(    id = 563,
                    name = "technokratisch",
                    definition = "Die Technokratie ist eine Form der Regierung oder Verwaltung, in der alle Handlungen auf wissenschaftlichem und technischem Wissen aufbauen sollen.",
                    examples = arrayOf()
            ),
            ESD(    id = 564,
                    name = "temporär",
                    definition = "zeitlich begrenzt",
                    examples = arrayOf("„Temporäre Großereignisse wie Bundesgartenschauen (BUGA) können die Entwicklung einer Stadt in hohem Maße vorantreiben.“")
            ),
            ESD(    id = 565,
                    name = "tendenziös",
                    definition = "meist abwertend: einer Tendenz folgend; etwas bezweckend, beabsichtigend",
                    examples = arrayOf("Diese Abhandlung ist tendenziös, weil ein politisch voreingenommener Journalist seine eigene Tendenz (seine subjektive Meinung) zu erkennen gibt.", "Dieser Fernsehkommentar ist politisch gefärbt und deshalb tendenziös.")
            ),
            ESD(    id = 566,
                    name = "Terminus",
                    definition = "Wort der Fachsprache eines (wissenschaftlichen) Sachgebietes",
                    examples = arrayOf("„Termini sind im Rahmen einer Theorie begrifflich definierte Fachwörter.“", "„Seit Mitte des vorigen Jahrhunderts nehmen dabei umfangreiche Mehrfachkomposita überhand, mit denen versucht wird, die Nomination als Kurzbeschreibung des Denotats einzusetzen und Selbstdeutigkeit der Termini zu erreichen.“")
            ),
            ESD(    id = 567,
                    name = "Testimonial",
                    definition = "bezeichnet die konkrete Fürsprache für ein Produkt, eine Dienstleistung, eine Idee oder Institution durch eine Person, die der Zielgruppe meist bekannt ist und mit ihrem Auftritt die Glaubwürdigkeit der Werbebotschaft erhöht.",
                    examples = arrayOf()
            ),
            ESD(    id = 568,
                    name = "tête-à-tête",
                    definition = "Gespräch unter vier Augen, intime Verabredung (wörtlich: „Kopf-an-Kopf“), Treffen von zwei Personen",
                    examples = arrayOf("Sie verabredete sich zu einem Tête-à-tête mit dem attraktiven Kollegen.")
            ),
            ESD(    id = 569,
                    name = "Theodizee",
                    definition = "fachsprachlich (Philosophie, Theologie): der Versuch einer Rechtfertigung eines allmächtigen, allgütigen und allwissenden Gottes angesichts allen Übels und Leidens in der Welt",
                    examples = arrayOf("Einige Rabbiner argumentieren nicht rein religiös, wenn es um die sogenannte Theodizee-Frage geht, um die Frage nach Gottes Rolle bei all dem Übel in der Welt.", " „Zur Debatte stand die Theodizee, das Problem der Rechtfertigung eines allmächtigen, allwissenden und gütigen Gottes angesichts der Existenz des Leidens und des Bösen in einer offensichtlich unvollkommenen Welt.“")
            ),
            ESD(    id = 570,
                    name = "Thesaurus",
                    definition = "eine einsprachige, meist umfangreiche und nach Themen sortierte Wörtersammlung mit Vokabular, dessen Begriffe durch Relationen miteinander verbunden sind",
                    examples = arrayOf("Als Thesaurus werden Wörterbücher bezeichnet, mit denen versucht wird, den gesamten Wortschatz einer Sprache, einer Epoche oder eines Autors darzustellen.", "Ein Thesaurus einer Sprache ordnet deren Wörter nach Themen und Wortfeldern, dient vor allem zum Auffinden besser passender Wörter beim Schreiben und enthält dafür in der Regel einen alphabetischen Index.")
            ),
            ESD(    id = 571,
                    name = "Tinktur",
                    definition = "eine flüssige Arznei, die man auf eine Körperstelle reibt; dünnflüssiger Auszug aus pflanzlichen oder tierischen Grundstoffen, der mit Äther, Spiritus aethereus, Azeton, Wasser oder Weingeist hergestellt wurde",
                    examples = arrayOf("Auch in der Medizin werden die verschiedensten Tinkturen verwendet.")
            ),
            ESD(    id = 572,
                    name = "Tirade",
                    definition = "anhaltender Redeschwall",
                    examples = arrayOf("Er war froh, den Tiraden seiner Ehefrau entkommen zu sein.", "„Er konnte mich mit seinen Tobsuchtsanfällen und Tiraden nicht aus der Ruhe bringen,…“")
            ),
            ESD(    id = 573,
                    name = "transkribieren",
                    definition = "die lautgetreue Übertragung von gesprochener Sprache, Gesprächen oder Gebärden in eine schriftlich fixierte Form (beispielsweise Lautschrift)",
                    examples = arrayOf("Die Wortform „transkribieren“ kann man, wie oben gezeigt, phonetisch (lautlich) in der Form [tʀanskʀiˈbiːʀən] transkribieren.", "„Das Manuskript mußte natürlich entziffert, transkribiert und übersetzt werden.“")
            ),
            ESD(    id = 574,
                    name = "Transkulturation",
                    definition = "die Einflussnahme einer Kultur auf andere Kulturen",
                    examples = arrayOf("Hellenisierung zur Zeit des Hellenismus (antikes Griechenland)", "Romanisierung zur Zeit des Römischen Reiches", "Christianisierung, vor allem während der europäischen Expansion")
            ),
            ESD(    id = 575,
                    name = "transpirieren",
                    definition = "schwitzen; Feuchtigkeit abgeben.",
                    examples = arrayOf("stark transpirieren", "Die Pflanzen transpirieren über die Blätter.")
            ),
            ESD(    id = 576,
                    name = "Tribalisierung",
                    definition = "die Bildung von Gemeinschaften auf der Grundlage gemeinsamer kultureller Wurzeln und Merkmale oder politischer und religiöser Interessen",
                    examples = arrayOf()
            ),
            ESD(    id = 577,
                    name = "trivial",
                    definition = "etwas, das ohne weitere Erklärungen und Begriffe verstanden werden kann",
                    examples = arrayOf("Dieser Beweisschritt ist trivial; deshalb werde ich ihn nicht näher erläutern.", "Dass man bei Regen nass wird, ist trivial.")
            ),
            ESD(    id = 578,
                    name = "Trope",
                    definition = "Der Tropus (auch die Trope, Plural Tropen) Oberbegriff für Stilmittel, bei denen das Gesagte vom Gemeinten abweicht. Die Trope ist somit eine Figur, die das Gemeinte (bspw. Kamel) nicht direkt mit dem eigentlichen Wort benennt, sondern einen ausschmückenden Begriff wählt (bspw. Wüstenschiff), um so die Sprache zu schmücken, lebendiger erscheinen zu lassen oder anschaulicher zu gestalten.",
                    examples = arrayOf()
            ),
            ESD(    id = 579,
                    name = "Typografie",
                    definition = "die Kunst des Druckens; Wissenschaft und Lehre vom reproduzierbaren Schriftbild; die konkrete Gestaltung eines Druckerzeugnisses",
                    examples = arrayOf("Ein Webdesigner setzt sein Wissen über Typografie, Bildsprache und Farbgestaltung, ein, um einen Webauftritt benutzerfreundlich und lesbar zu machen.")
            ),
            ESD(    id = 580,
                    name = "Typus",
                    definition = "fachsprachliche Bezeichnung von Typ",
                    examples = arrayOf("„Bereits seit Mitte der 1970er Jahre haben die politischen Eliten sich neu organisiert, wer an den Hochschulen in Leitungspositionen und in der Politik gestalten durfte, waren weniger Künstler noch Intellektuelle, der pragmatische, karriere-orientierte Typus war gefragt und bereits da setzte bei den souveränen Denkern ein Entmutigungsprozess ein.“")
            ),
            ESD(    id = 581,
                    name = "ubiquitär",
                    definition = "allgegenwärtig, überall verbreitet",
                    examples = arrayOf("„Meine Tante hingegen setzt die ubiquitäre Existenz des Internets und aller in ihm enthaltenen Wunder als gegeben voraus.“", "„Tabus sind unhinterfragt, strikt, bedingungslos, sie sind universell und ubiquitär, sie sind mithin Bestandteil einer funktionierenden menschlichen Gesellschaft.“")
            ),
            ESD(    id = 582,
                    name = "unartikuliert",
                    definition = "nicht in klare Worte gefasst",
                    examples = arrayOf("Mit unartikuliertem Gebrüll stürzte er sich auf den Gegner, der schon nach dem ersten Schlag wie ein gefällter Baum zu Boden krachte.", "Ihre unartikulierte Trauer scheint sie von innen heraus zu verzehren.")
            ),
            ESD(    id = 583,
                    name = "unilateral",
                    definition = "einseitig; Politik: nur ein Akteur handelt; In der Politik versteht man darunter das Handeln eines Staates im eigenen Interesse ohne Rücksicht auf die Interessen anderer.",
                    examples = arrayOf("Sie gibt sich deutlich verhandlungsbereiter als ihr häufig unilateral handelnder Vorgänger.")
            ),
            ESD(    id = 584,
                    name = "unisono",
                    definition = "übereinstimmend, im Einklang",
                    examples = arrayOf("„Erklärt wird sie mit dem unisono als typisch bezeichneten nachmittäglichen Ritual von ‚Kaffee und Kuchen‘.“")
            ),
            ESD(    id = 585,
                    name = "Unitarismus",
                    definition = "politisches Ziel, die zentrale Macht eines Staates weiter zu stärken.",
                    examples = arrayOf("Der Unitarismus ist besonders in den USA weit verbreitet.")
            ),
            ESD(    id = 586,
                    name = "urban",
                    definition = "städtisch, zu einer Stadt gehörend; weltläufig, gesittet und höflich",
                    examples = arrayOf("Sie näherten sich dem Weichbild der Stadt und die Bebauung wurde immer urbaner.", "„Seine urbanen Umgangsformen fielen in dieser lärmenden Gesellschaft angenehm auf.“")
            ),
            ESD(    id = 587,
                    name = "usurpieren",
                    definition = "etwas durch Gewalt an sich reißen; widerrechtlich (und gewaltsam) Privilegien, Befugnisse oder Besitz aneignen",
                    examples = arrayOf("„Nach der Schlacht von Komorn (2. Juli 1849) usurpierte Görgey das Oberkommando der ungarischen Armee gegen den Befehl der ungarischen Regierung, die ihn abgesetzt hatte.“")
            ),
            ESD(    id = 588,
                    name = "vakant",
                    definition = "insbesondere Stellen/Ämter und so weiter: verfügbar, frei, offen",
                    examples = arrayOf("In unserer Abteilung gibt es drei vakante Stellen.")
            ),
            ESD(    id = 589,
                    name = "validieren",
                    definition = "etwas auf Gültigkeit prüfen, die Richtigkeit einer Methode beispielhaft testen, die Eignung einer Methode für einen bestimmten Zweck feststellen",
                    examples = arrayOf("Das Programm ist validiert worden, es durchläuft alle Tests fehlerfrei.", "Das Produkt ist für die geplante Anwendung validiert worden: Der vom Kunden erwartete Nutzen wird erreicht.")
            ),
            ESD(    id = 590,
                    name = "verbos",
                    definition = "veraltet: verbos bedeutet „wortreich“, „weitschweifig“",
                    examples = arrayOf("Hör mir doch mal zwei Minuten zu, anstatt mich nur verbos vollzuschwafeln!")
            ),
            ESD(    id = 591,
                    name = "verifizieren",
                    definition = "durch Überprüfen die Richtigkeit oder den Wahrheitsgehalt einer Sache bestätigen",
                    examples = arrayOf("Gemeinsam mit den Zuständigen im deutschen Auswärtigen Amt und den äthiopischen Behörden sei man dabei, die Umstände des Überfalls zu verifizieren.")
            ),
            ESD(    id = 592,
                    name = "veritabel",
                    definition = "wahrlich, wahr, wahrhaft, wahrhaftig, echt, unverfälscht",
                    examples = arrayOf("Das war ein veritabler Glücksfall.")
            ),
            ESD(    id = 593,
                    name = "verquer",
                    definition = "absonderlich, seltsam, merkwürdig.",
                    examples = arrayOf("Sie hat ziemlich verquere Ansichten/Ideen.")
            ),
            ESD(    id = 594,
                    name = "Veto",
                    definition = "Einspruch, der einen geplanten Beschluss verhindert",
                    examples = arrayOf("Wer kein Vetorecht hat, kann auch nicht mit Erfolg sein Veto einlegen.")
            ),
            ESD(    id = 595,
                    name = "vice versa",
                    definition = "bildungssprachlich: im umgekehrten Wechsel, andersherum, umgekehrt",
                    examples = arrayOf("Steigt der Preis des Gutes X, wächst die Nachfrage nach dem Gut Y. Vice versa bedeutet dies, dass die Nachfrage nach dem Gut X wächst, wenn der Preis des Gutes Y steigt.", "Ist im Süden Sommer, so herrscht auf der Nordhalbkugel Winter, et vice versa.")
            ),
            ESD(    id = 596,
                    name = "virtuos",
                    definition = "Musik: meisterhaft, mit absoluter technischer Perfektion, technisch vollendet",
                    examples = arrayOf("Er interpretiert das Stück virtuos.")
            ),
            ESD(    id = 597,
                    name = "volatil",
                    definition = "sehr beweglich, schwankend, unstetig; flüchtig, verdampfend, verdunstend",
                    examples = arrayOf("Daher sei der Geschäftsverlauf volatil.", "Stoffe, die leicht verdampfen oder bei niedrigen Temperaturen schon als Gas vorliegen, nennt man volatile Stoffe.")
            ),
            ESD(    id = 598,
                    name = "Voyeurismus",
                    definition = "allgemein, abwertend: übermäßiges Interesse an Ereignissen oder anderen Personen und deren Leben",
                    examples = arrayOf("Der alltägliche Voyeurismus auf deutschen Autobahnen, bei denen Fahrer zum Beglotzen von Unfällen absichtlich langsamer werden oder gar anhalten, gefährdet Menschenleben.")
            ),
            ESD(    id = 599,
                    name = "Xenophobie",
                    definition = "Angst vor Fremden (Ausländern)",
                    examples = arrayOf("„In offene Xenophobie umgeschlagen ist die Stimmung in Italien, das erst in den vergangenen zehn Jahren zum Einwanderungsland wurde.“", "„Der Film Fritz Langs liefert das Paradigma der unter den Deutschen seit dem Ende des 19. Jahrhunderts um sich greifenden Xenophobie.“")
            ),
            ESD(    id = 600,
                    name = "Zampano",
                    definition = "Anführer (einer Gruppe), jemand der sich wichtig tut, Erfolg hat",
                    examples = arrayOf("Ich spiel' mich ja nicht auf wie der große Zampano, oder so.")
            ),
            ESD(    id = 601,
                    name = "Zeche",
                    definition = "Rechnung für Getränke oder Speisen, die in einer Gaststätte getrunken oder verzehrt wurden; Anlage, um wertvolle Materialien aus der Erde zu gewinnen",
                    examples = arrayOf("In Deutschland sind sehr viele Zechen geschlossen worden.", "Leider konnte er seine Zeche nicht bezahlen.", "„Als José die Stühle auf die Tische zu stellen begann, zahlte Ambly unsere Zeche, und wir machten uns auf den Rückweg.“")
            ),
            ESD(    id = 602,
                    name = "Zenit",
                    definition = "Astronomie: der höchste Punkt des Himmelsgewölbes senkrecht über dem Betrachter; übertragen: Zeitpunkt des größten Erfolges",
                    examples = arrayOf("Im Mai steht der Große Wagen schon am frühen Abend hoch im Zenit.", "„Vom Zenit bis zum Nadir erstreckte sich ein unübersehbarer Ring von Sternenstaub, jene Milchstraße, in deren Mitte unsere Sonne nur als Stern vierter Größe gilt.“", "Bereits im Alter von 20 Jahren hatte er den Zenit seines Ruhms erreicht.", "„Denn auch an der Börse war der Zenit bereits überschritten.“")
            ),
            ESD(    id = 603,
                    name = "Zölibat",
                    definition = "Katholizismus: freiwillig gewählte Verpflichtung zur Ehelosigkeit und zur vollkommenen sexuellen Enthaltsamkeit katholischer Priester",
                    examples = arrayOf("In der orthodoxen Kirche ist der Zölibat nur für Bischöfe verpflichtend.", "„Die größte Schuld am Nachwuchsmangel in den Klöstern gab Eusebius aber dem Zölibat.“")
            ),
            ESD(    id = 604,
                    name = "zyklisch",
                    definition = "regelmäßig wiederkehrend, wiederholend; kreisläufig, kreisförmig",
                    examples = arrayOf("Sofort fällt einem der zyklische Verlauf auf.", "Ob ein zyklisches Anlageverhalten auf dem Aktienmarkt besser ist, als ein antizyklisches, dass muss jeder Anleger für sich entscheiden.", "Jene Denker, in denen alle Sterne sich in zyklischen Bahnen bewegen, sind nicht die tiefsten; (Nietzsche)", "Johann Sebastian Bach hat zahlreiche zyklische Werke komponiert.")
            ),
            ESD(    id = 605,
                    name = "zynisch",
                    definition = "boshaft und verletzend; in Art des Zynismus; beißend, bissig, höhnisch, spöttisch",
                    examples = arrayOf("„Du bist ja eine hübsche junge Frau“, warf er ihr zynisch an den Kopf.")
            )
    )

    fun dataSorted(): List<ESD> {
        return data.sortedWith(Comparator { a, b -> normalizeString(a.name).compareTo(normalizeString(b.name))})
    }

    private fun normalizeString(string: String) : String {
        return string.toLowerCase()
    }

}