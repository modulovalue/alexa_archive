	'use strict';

var words = {
    zitate: 
    [  
   {  
      "text": `Man ist nur unglücklich, weil man Zeit hat, zu überlegen, ob man unglücklich ist oder nicht.`,
      "source":`George Bernard Shaw`,
      "id":1
   },
   {  
      "text":`Das Leben ist zu kurz für Nebensächlichkeiten`,
      "source":`Disraeli`,
      "id":2
   },
   {  
      "text":`Du bist nicht das, was du denkst, dass du bist, sondern du bist, was du denkst.`,
      "source":`Norman Vincent Peale`,
      "id":3
   },
   {  
      "text":`Gewöhnliche Menschen haben großes Vergnügen an den Fehlern bedeutender Menschen`,
      "source":`Schopenhauer`,
      "id":4
   },
   {  
      "text":`Der größere Teil der Müdigkeit, an der wir leiden, ist geistigen Ursprungs`,
      "source":`J.A. Hadfield`,
      "id":5
   },
   {  
      "text":`Wenn alles gegen dich zu laufen scheint, erinnere dich daran, dass das Flugzeug gegen den Wind abhebt, nicht mit ihm.`,
      "source":`Henry Ford`,
      "id":6
   },
   {  
      "text":`Die Welt zerbricht jeden und nachher sind viele an den gebrochenen Stellen stärker.`,
      "source":`Ernest Hemingway`,
      "id":7
   },
   {  
      "text":`Wie schnell sich ein »nicht jetzt« in ein »niemals« verwandelt…`,
      "source":`Martin Luther`,
      "id":8
   },
   {  
      "text":`Derjenige, der nicht mutig genug ist Risiken einzugehen, wird niemals etwas im Leben erreichen.`,
      "source":`Muhammad Ali`,
      "id":9
   },
   {  
      "text":`Sag’ einer Person, dass sie mutig ist, und du hilfst ihr es zu werden.`,
      "source":`Thomas Carlyle`,
      "id":10
   },
   {  
      "text":`Wer immer tut, was er schon kann, bleibt immer das, was er schon ist.`,
      "source":`Henry Ford`,
      "id":11
   },
   {  
      "text":`Wenn Du Dich von jedem Hund anbellen lässt, der Dir auf Deinem Weg begegnet, wirst Du nie ans Ziel kommen.`,
      "source":`Arabisches Sprichwort`,
      "id":12
   },
   {  
      "text":`Was Sie von mir denken geht mich nichts an.`,
      "source":`Terry Cole-Whittaker`,
      "id":13
   },
   {  
      "text":`Der Unterschied zwischen einer erfolgreichen Person und anderen ist nicht mangelnde Kraft oder mangelndes Wissen, sondern mangelnder Wille.`,
      "source":`Vince Lombardi`,
      "id":14
   },
   {  
      "text":`Ein Mensch, der nicht mehr bereit ist, ein Risiko einzugehen, lebt in Wirklichkeit nicht mehr.`,
      "source":`Gudrun Kropp`,
      "id":15
   },
   {  
      "text":`Gib jedem Tag die Chance, der schönste deines Lebens zu werden.`,
      "source":`Mark Twain`,
      "id":16
   },
   {  
      "text":`Der eine wartet, dass die Zeit sich wandelt, der andere packt sie an und handelt!`,
      "source":`Dante Alighieri`,
      "id":17
   },
   {  
      "text":`Auch im Alphabet kommt Anstrengung vor Erfolg.`,
      "source":`deutsche Weisheit`,
      "id":18
   },
   {  
      "text":`Faulheit ist die Angewohnheit, sich auszuruhen, bevor man müde ist.`,
      "source":`Jules Renard`,
      "id":19
   },
   {  
      "text":`Der Erfolg eines Menschen setzt sich aus seinen Fehlschlägen zusammen.`,
      "source":`Ralph Waldo Emerson`,
      "id":20
   },
   {  
      "text":`Wer sich selbst alles zutraut, wird andere übertreffen.`,
      "source":`chinesische Weisheit`,
      "id":21
   },
   {  
      "text":`Erfolg ist die Belohnung für schwere Arbeit.`,
      "source":`Sophokles`,
      "id":22
   },
   {  
      "text":`Nichts wissen ist keine Schande, wohl aber, nichts lernen wollen.`,
      "source":`Sokrates`,
      "id":23
   },
   {  
      "text":`Mach es wie die Briefmarke. Sie sichert sich den Erfolg durch die Fähigkeit an einer Sache festzuhalten bis sie ankommt.`,
      "source":`Josh Billings`,
      "id":24
   },
   {  
      "text":`Es bedarf nur eines Anfangs, dann erledigt sich das Übrige.`,
      "source":`Sallust`,
      "id":25
   },
   {  
      "text":`Man soll sich nicht über Dinge ärgern. Denn das ist ihnen völlig egal.`,
      "source":`Euripides`,
      "id":26
   },
   {  
      "text":`Wer einen Misserfolg nur als kleinen Umweg betrachtet, verliert nie sein Ziel aus den Augen.`,
      "source":`Martin Luther`,
      "id":27
   },
   {  
      "text":`Wege entstehen dadurch, dass wir sie gehen.`,
      "source":`Franz Kafka`,
      "id":28
   },
   {  
      "text":`Jeder Mensch ist der Architekt seiner eigenen Zukunft.`,
      "source":`Sallust`,
      "id":29
   },
   {  
      "text":`Mit Tränen kann man nichts gewinnen, wer schaffen will – muss fröhlich sein!`,
      "source":`Theodor Fontane`,
      "id":30
   },
   {  
      "text":`Es gibt kein Omelett, ohne Eier zu zerbrechen.`,
      "source":`Maximilien Robespierre`,
      "id":31
   },
   {  
      "text":`In der Natur gibt es weder Belohnungen noch Strafen. Es gibt Folgen.`,
      "source":`Robert G. Ingersoll`,
      "id":32
   },
   {  
      "text":`Deine erste Pflicht ist, dich selbst glücklich zu machen. Bist du glücklich, so machst du auch andere glücklich.`,
      "source":`Ludwig Andreas Feuerbach`,
      "id":33
   },
   {  
      "text":`Niemand weiß, was er kann, bis er es probiert hat.`,
      "source":`Publilius Syrus`,
      "id":34
   },
   {  
      "text":`Verbringe nicht die Zeit mit der Suche nach einem Hindernis. Vielleicht ist keines da.`,
      "source":`Franz Kafka`,
      "id":35
   },
   {  
      "text":`Nur wer selbst brennt, kann Feuer in anderen entfachen.`,
      "source":`Augustinus`,
      "id":36
   },
   {  
      "text":`Du bist deine eigene Grenze, erhebe dich darüber!`,
      "source":`Hafes`,
      "id":37
   },
   {  
      "text":`Der ideale Tag wird nie kommen. Er ist heute, wenn wir ihn dazu machen.`,
      "source":`Horaz`,
      "id":38
   },
   {  
      "text":`Mut steht am Anfang des Handelns, Glück am Ende.`,
      "source":`Demokrit`,
      "id":39
   },
   {  
      "text":`Wer arbeitet, macht Fehler. Wer viel arbeitet, macht mehr Fehler. Nur wer die Hände in den Schoss legt, macht gar keine Fehler.`,
      "source":`Alfred Krupp`,
      "id":40
   },
   {  
      "text":`Das Wort ‘unmöglich’ gibt es nur im Wörterbuch von Narren.`,
      "source":`Napoleon`,
      "id":41
   },
   {  
      "text":`Sehr dumme und sehr intelligente Menschen sind sich wechselseitig ein Sicherheitsrisiko.`,
      "source":`Gregor Brand`,
      "id":42
   },
   {  
      "text":`Jeder ist seines Glückes Schmied – doch leider haben die wenigsten auch nur die einfachsten Grundlagen des Schmiedens begriffen.`,
      "source":`Walter Boveri`,
      "id":43
   },
   {  
      "text":`Fortschritt hat wenig mit Geschwindigkeit zu tun, aber sehr viel mit Richtung.`,
      "source":`Unbekannt`,
      "id":44
   },
   {  
      "text":`Neid muss man sich erarbeiten, Mitleid bekommt man geschenkt.`,
      "source":`Robert Lembke`,
      "id":45
   },
   {  
      "text":`Es kann vorkommen, dass du eine Schlacht mehr als einmal kämpfen muss, um sie zu gewinnen.`,
      "source":`Margaret Thatcher`,
      "id":46
   },
   {  
      "text":`Das Leben bietet dir immer eine zweite Chance. Ihr Name ist Morgen.`,
      "source":`Unbekannt`,
      "id":47
   },
   {  
      "text":`Wer kein Ziel hat, kann auch keines erreichen.`,
      "source":`Laotse`,
      "id":48
   },
   {  
      "text":`Zu jedem Nachteil gibt es auch einen entsprechenden Vorteil.`,
      "source":`W. Clement Stone`,
      "id":49
   },
   {  
      "text":`Wenn Du Zeit hast zu jammern und Dich zu beklagen, dann hast Du auch Zeit, etwas dagegen zu tun.`,
      "source":`Anthony J. D’Angelo`,
      "id":50
   },
   {  
      "text":`Es spielt keine Rolle, woher Du kommst. Alles was zählt ist, wohin Du gehst. `,
      "source":`Brian Tracy`,
      "id":51
   },
   {  
      "text":`Versuch nicht besser zu sein als andere. Versuche besser zu sein als Du gestern warst.`,
      "source":`Unbekannt`,
      "id":52
   },
   {  
      "text":`Wenn Du für Wochenenden und Urlaube lebst, stimmt etwas nicht.`,
      "source":`Gary Vaynerchuck`,
      "id":53
   },
   {  
      "text":`Der Erfolg eines Menschen setzt sich aus seinen Fehlschlägen zusammen.`,
      "source":`Ralph Waldo Emerson`,
      "id":54
   },
   {  
      "text":`Manchmal bringen uns die falschen Entscheidungen an die richtigen Orte.`,
      "source":`Unbekannt`,
      "id":55
   },
   {  
      "text":`Wer den Weg der Wahrheit geht, stolpert nicht.`,
      "source":`Mahatma Gandhi`,
      "id":56
   },
   {  
      "text":`Wer seinen Weg kennt, läuft nicht der Karawane hinterher.`,
      "source":`Arabisches Sprichwort`,
      "id":57
   },
   {  
      "text":`Erfolg hat 3 Buchstaben: Tun.`,
      "source":`J.W.v. Goethe`,
      "id":58
   },
   {  
      "text":`Das einzige Mittel, Zeit zu haben, ist, sich Zeit zu machen.`,
      "source":`Bertha Eckstein`,
      "id":59
   },
   {  
      "text":`Viel zu viele Menschen haben Angst, dass sie sich zum Affen machen könnten.`,
      "source":`Henry Ford`,
      "id":60
   }
       ,
    {
        "text":`Die meisten Menschen haben Angst vor dem Tod, weil sie nicht genug aus ihrem Leben gemacht haben.`,
        "source":`Peter Ustinov`,
        "id":61
    }    ,
    {
        "text":`Es gibt nur zwei Tage in deinem Leben an denen du nichts ändern kannst. Der eine ist gestern und der andere ist morgen.`,
        "source":`Dalai Lama`,
        "id":62
    }    ,
    {
        "text":`Wenn Du Dich von jedem Hund anbellen lässt, der Dir auf Deinem Weg begegnet, wirst Du nie ans Ziel kommen.`,
        "source":`Arabisches Sprichwort`,
        "id":63
    }    ,
    {
        "text":`Probleme sind Gelegenheiten, zu zeigen, was man kann.`,
        "source":`Duke Ellington`,
        "id":64
    }    ,
    {
        "text":`Wer eine Jogginghose trägt, hat die Kontrolle über sein Leben verloren.`,
        "source":`Karl Lagerfeld`,
        "id":65
    }    ,
    {
        "text":`Man kann nicht kämpfen, wenn die Hosen voller sind als das Herz.`,
        "source":`Carl von Ossietzky`,
        "id":66
    }    ,
    {
        "text":`Freiheit bedeutet Verantwortlichkeit. Das ist der Grund, weshalb die meisten Menschen sich vor ihr fürchten.`,
        "source":`George Bernard Shaw`,
        "id":67
    }    ,
    {
        "text":`Wer einen Fehler gemacht hat und ihn nicht korrigiert, begeht einen zweiten.`,
        "source":`Konfuzius`,
        "id":68
    }    ,
    {
        "text":`Alles, was beachtet wird, verstärkt sich. Alles, was man weniger beachtet, schwächt sich ab.`,
        "source":`Grundsatz der Psychologie`,
        "id":69
    }    ,
    {
        "text":`Ich habe geweint, weil ich keine Schuhe hatte, bis ich einen traf, der keine Füße hatte.`,
        "source":`Giacomo Graf Leopardi`,
        "id":70
    }    ,
    {
        "text":`Glaube daran, DASS du es schaffst und du hast schon den halben Weg gemeistert.`,
        "source":`Theodore Roosevelt`,
        "id":71
    }    ,
    {
        "text":`Das größte Hindernis auf dem Weg zum Erfolg ist die Angst vor dem Scheitern.`,
        "source":`Sven-Göran Eriksson`,
        "id":72
    }    ,
    {
        "text":`Wer den Tag mit einem Lachen beginnt, hat ihn bereits gewonnen.`,
        "source":`Cicero`,
        "id":73
    }    ,
    {
        "text":`Die Straße zum Erfolg ist immer eine Baustelle.`,
        "source":`Lily Tomlin`,
        "id":74
    }    ,
    {
        "text":`Eine ruhige See hat noch keinen guten Seemann hervor gebracht`,
        "source":`Englisches Sprichwort`,
        "id":75
    }    ,
    {
        "text":`Erst Ziele geben unserem Leben einen Sinn.`,
        "source":`C.H. Parkhurst`,
        "id":76
    }    ,
    {
        "text":`Wenn du es träumen kannst, kannst du es auch tun.`,
        "source":`Walt Disney`,
        "id":77
    }    ,
    {
        "text":`Probleme sind keine Stop-Schilder, sondern Wegweiser.`,
        "source":`Robert H. Schuller`,
        "id":78
    }    ,
    {
        "text":`Ziele sind Träume mit einer Deadline.`,
        "source":`Napoleon Hill`,
        "id":79
    }    ,
    {
        "text":`Wer etwas will, findet Wege. Wer etwas nicht will, findet Gründe.`,
        "source":`Willy Meurer`,
        "id":80
    }    ,
    {
        "text":`Eine Reise endet nicht, nur weil zwischendrin mal der Schnürsenkel aufgeht.`,
        "source":`unbekannt`,
        "id":81
    }    ,
    {
        "text":`Erfolg ist, von einem Fehlschlag zum nächsten zu gehen, ohne die Begeisterung zu verlieren.`,
        "source":`Winston Churchill`,
        "id":82
    }    ,
    {
        "text":`Zweifel vernichten mehr Träume, als es Misserfolge je könnten.`,
        "source":`unbekannter Autor`,
        "id":83
    }    ,
    {
        "text":`Du musst nicht spitze sein, um anzufangen. Aber du musst anfangen, um spitze zu werden.`,
        "source":`Zig Zagler`,
        "id":84
    }    ,
    {
        "text":`Lass’ dir durch einen schlechten Tag nicht das Gefühl geben, du hättest ein schlechtes Leben.`,
        "source":`unbekannt`,
        "id":85
    }    ,
    {
        "text":`Manchmal gewinnt man, manchmal lernt man.`,
        "source":`John C. Maxwell`,
        "id":86
    }    ,
    {
        "text":`Wer will, ist des Schicksals Freund, wer nicht, sein Knecht.`,
        "source":`Marcus Tullius Cicero`,
        "id":87
    }    ,
    {
        "text":`Nur wer selbst brennt, kann Feuer in anderen entfachen.`,
        "source":`Augustinus`,
        "id":88
    }    ,
    {
        "text":`Die Tragödie des Lebens liegt nicht im Nichterreichen seines Ziels. Die Tragödie des Lebens liegt darin keine Ziele zu haben, die man erreichen kann.`,
        "source":`Benjamin Mays`,
        "id":89
    }    ,
    {
        "text":`Lass deine Träume niemals Träume bleiben!`,
        "source":`Jack Johnson`,
        "id":90
    }    ,
    {
        "text":`Ich bin wie ich bin. Die einen kennen mich, die anderen können mich.`,
        "source":`Konrad Adenauer`,
        "id":91
    }    ,
    {
        "text":`Den größten Fehler, den man im Leben machen kann, ist immer Angst zu haben, einen Fehler zu machen.`,
        "source":`Dietrich Bonhoeffer`,
        "id":92
    }    ,
    {
        "text":`Einen Schritt zurück zu gehen, nachdem man gerade einen nach vorne gemacht hat, ist kein Desaster, sondern ein Cha-Cha-Cha.`,
        "source":`Rober Brault`,
        "id":93
    }    ,
    {
        "text":`Wenn der Mensch kein Ziel hat, ist ihm jeder Weg zu weit.`,
        "source":`unbekannt`,
        "id":94
    }    ,
    {
        "text":`Der Unterschied zwischen dem, was Du bist und dem, wer Du sein möchtest, ist das was Du tust.`,
        "source":`unbekannt`,
        "id":95
    }    ,
    {
        "text":`Jeder Erfolg fußt in der Entscheidung, es zu auszuprobieren.`,
        "source":`unbekannt`,
        "id":96
    }    ,
    {
        "text":`Denke nicht so oft an das, was dir fehlt, sondern an das, was du hast.`,
        "source":`Marc Aurel`,
        "id":97
    }    ,
    {
        "text":`Optimisten, Pessimisten. Oft liegen beide falsch. Aber der Optimist lebt glücklicher.`,
        "source":`Kofi Annan`,
        "id":98
    }    ,
    {
        "text":`Auch Wolkenkratzer haben mal als Keller angefangen.`,
        "source":`unbekannt`,
        "id":99
    }    ,
    {
        "text":`Erfolg hat nur, wer etwas tut, während er auf den Erfolg wartet.`,
        "source":`Thomas Alva Edison`,
        "id":100
    }    ,
    {
        "text":`Wer im Leben kein Ziel hat, kann wenigstens das Vorankommen der anderen stören.`,
        "source":`Benjamin Franklin`,
        "id":101
    }    ,
    {
        "text":`Deine Träume haben kein Verfallsdatum. Atme tief ein und versuche es erneut.`,
        "source":`unbekannt`,
        "id":102
    }    ,
    {
        "text":`Wenn du an deiner Erfolgsgeschichte schreibst, gib’ den Stift nicht in die Hände anderer Menschen.`,
        "source":`unbekannt`,
        "id":103
    }    ,
    {
        "text":`Arbeite an dir selbst, nicht an deinem Selfie.`,
        "source":`unbekannt`,
        "id":104
    }    ,
    {
        "text":`Wenn du aufhören möchtest: Denk’ daran, warum du angefangen hast.`,
        "source":`unbekannt`,
        "id":105
    }    ,
    {
        "text":`Die Erfahrung ist wie eine Laterne auf unserem Rücken. Sie beleuchtet immer nur den Weg, der bereits hinter uns liegt.`,
        "source":`Konfuzius`,
        "id":106
    }    ,
    {
        "text":`Fange nie an, aufzuhören. Höre nie auf, anzufangen.`,
        "source":`Cicero`,
        "id":107
    }    ,
    {
        "text":`Misserfolg ist lediglich eine Gelegenheit, mit neuen Ansichten noch einmal anzufangen.`,
        "source":`Henry Ford`,
        "id":108
    }    ,
    {
        "text":`Wenn du Angst hast zu verlieren, dann hast du es nicht verdient, erfolgreich zu sein.`,
        "source":`Charles Barkley`,
        "id":109
    }    ,
    {
        "text":`Die beste Form der Rache ist Erfolg.`,
        "source":`Frank Sinatra`,
        "id":110
    }    ,
    {
        "text":`Die einzige Disziplin, welche du beherrschen musst, ist Selbstdisziplin.`,
        "source":`Bum Phillips`,
        "id":111
    }    ,
    {
        "text":`Deine Zeit ist begrenzt, also verschwende sie nicht, um das Leben eines Anderen zu leben.`,
        "source":`Steve Jobs`,
        "id":112
    }    ,
    {
        "text":`Glück ist, daran zu glauben, dass du glücklich bist.`,
        "source":`unbekannt`,
        "id":113
    }    ,
    {
        "text":`Die Windrichtung kann ich nicht ändern. Aber ich kann meine Segel so setzen, dass ich dennoch immer ans Ziel komme.`,
        "source":`Jimmy Dean`,
        "id":114
    }    ,
    {
        "text":`Am Mut hängt der Erfolg.`,
        "source":`Theodor Fontane`,
        "id":115
    }    ,
    {
        "text":`Erfolg = Arbeit + Muße + Mund halten`,
        "source":`Albert Einstein`,
        "id":116
    }    ,
    {
        "text":`Was nützt uns das schnellste und schönste Auto, wenn wir damit ständig gegen die Wand fahren?`,
        "source":`Claudia Scheiderer`,
        "id":117
    }    ,
    {
        "text":`Das Leben ist zu wichtig, um es ernst zu nehmen.`,
        "source":`Oscar Wilde`,
        "id":118
    }    ,
    {
        "text":`Der Optimist erklärt, dass wir in der besten aller Welten leben, und der Pessimist fürchtet, dass dies wahr ist.`,
        "source":`James Branch Cabell`,
        "id":119
    }    ,
    {
        "text":`Wer die Freiheit aufgibt, um Sicherheit zu gewinnen, wird am Ende beides verlieren.`,
        "source":`Benjamin Franklin`,
        "id":120
    }    ,
    {
        "text":`Du lebst nur einmal. Aber wenn du es richtig machst, reicht das auch vollkommen aus.`,
        "source":`Mae West`,
        "id":121
    }    ,
    {
        "text":`Was dich nicht herausfordert, wird dich auch nicht ändern.`,
        "source":`Fred Devito`,
        "id":122
    }    ,
    {
        "text":`Fürchte nicht die Zukunft & bereue nicht Vergangenes`,
        "source":`unbekannt`,
        "id":123
    }    ,
    {
        "text":`Der Meister ist öfter gescheitert, als der Anfänger es überhaupt versucht hat.`,
        "source":`Stephen McCranie`,
        "id":124
    }    ,
    {
        "text":`Von denen einen Rat zu holen, die nicht den gleichen Weg gehen, ist nutzlos.`,
        "source":`Konfuzius`,
        "id":125
    }    ,
    {
        "text":`Interessiere dich nicht für die Vergangenheit. Interessiere dich für die Zukunft, denn dort wirst du den Rest deines Lebens verbringen.`,
        "source":`Charles F. Kettering`,
        "id":126
    }    ,
    {
        "text":`Einen Vorsprung im Leben hat, wer da anpackt, wo die anderen erst einmal reden.`,
        "source":`John F. Kennedy`,
        "id":127
    }    ,
    {
        "text":`Eine Investition in Wissen bringt noch immer die besten Zinsen.`,
        "source":`Benjamin Franklin`,
        "id":128
    }    ,
    {
        "text":`Jeder Mensch kann alles, aber er muss auch zu allem bereit sein.`,
        "source":`Alma Mahler-Werfel`,
        "id":129
    }    ,
    {
        "text":`Wenn du sprichst, wiederholst du nur, was du eh schon weißt. Aber wenn du zuhörst, kannst du unter Umständen etwas Neues lernen.`,
        "source":`Dalai Lama`,
        "id":130
    }    ,
    {
        "text":`Wenn deine Vergangenheit ruft, antworte nicht. Sie hat ohnehin nichts Neues zu sagen.`,
        "source":`unbekannt`,
        "id":131
    }    ,
    {
        "text":`Motivation ist der Zündschlüssel für Erfolg, Leidenschaft der beste Treibstoff.`,
        "source":`Karl-Heinz Karius`,
        "id":132
    }    ,
    {
        "text":`Schau nur zurück, um zu realisieren, wie weit du bereits gekommen bist.`,
        "source":`unbekannt`,
        "id":133
    }    ,
    {
        "text":`Die Zukunft hängt davon ab, was wir heute tun.`,
        "source":`Mahatma Gandhi`,
        "id":134
    }    ,
    {
        "text":`Motivation ist die Fähigkeit, Fähigkeiten zu mobilisieren.`,
        "source":`Prof. Dr. Quadbeck-Seeger`,
        "id":135
    }    ,
    {
        "text":`Jeder ist Herr über seine Gedanken und somit auch Herr über seine Motivation. Ändere deine Gedanken und du veränderst deine Motivation.`,
        "source":`Andreas Hoffstadt`,
        "id":136
    }    ,
    {
        "text":`Die Motivation der meisten Menschen frühmorgens aufzustehen, besteht darin, daß sie pinkeln müssen.`,
        "source":`Albert Ziegler`,
        "id":137
    }    ,
    {
        "text":`Du kannst deine Motivation verändern, indem du dein Denken über dich selbst und über deine Umstände veränderst.`,
        "source":`Karl Pilsl`,
        "id":138
    }    ,
    {
        "text":`Glück ist ein Entschluss.`,
        "source":`René Descartes`,
        "id":139
    }    ,
    {
        "text":`Gegen Glück hilft Dummheit.`,
        "source":`Manfred Hinrich`,
        "id":140
    }    ,
    {
        "text":`Glück ist, was jeder sich als Glück gedacht.`,
        "source":`Friedrich Halm`,
        "id":141
    }    ,
    {
        "text":`Glück ist der Dummen Vormund.`,
        "source":`Deutsches Sprichwort`,
        "id":142
    }    ,
    {
        "text":`Wenn man kein Glück hat, soll man sich Glück anschaffen.`,
        "source":`Friedrich W. Nietzsche`,
        "id":143
    }    ,
    {
        "text":`Wer glaubt, etwas zu sein, hat aufgehört, etwas zu werden.`,
        "source":`Philip Rosenthal`,
        "id":144
    }    ,
    {
        "text":`Auch im Alphabet kommt Anstrengung vor Erfolg.`,
        "source":`Deutsches Sprichwort`,
        "id":145
    }    ,
    {
        "text":`Lass dir von deinem gestern nicht zu viel von deinem heute nehmen.`,
        "source":`unbekannt`,
        "id":146
    }    ,
    {
        "text":`Es geht nicht darum, ewig zu leben. Der Trick ist, ewig mit sich selbst leben zu können.`,
        "source":`Pirates of the Caribbean`,
        "id":147
    }    ,
    {
        "text":`Wer heute den Kopf in den Sand steckt, knirscht morgen mit den Zähnen.`,
        "source":`unbekannt`,
        "id":148
    }    ,
    {
        "text":`Was wir am nötigsten brauchen, ist ein Mensch, der uns zwingt, das zu tun, was wir können.`,
        "source":`Ralph Waldo Emerson`,
        "id":149
    }    ,
    {
        "text":`Was Du mit guter Laune tust, fällt Dir nicht schwer.`,
        "source":`ungarische Weisheit`,
        "id":150
    }    ,
    {
        "text":`Achtung verdient, wer vollbringt, was er vermag.`,
        "source":`Sophokles`,
        "id":151
    }    ,
    {
        "text":`Was du heute denkst, wirst du morgen tun.`,
        "source":`Tolstoi`,
        "id":152
    }    ,
    {
        "text":`Niemand weiß, was er kann, bis er es probiert hat.`,
        "source":`Publilius Syrus`,
        "id":153
    }    ,
    {
        "text":`Der Glaube an unsere Kraft kann sie ins unendliche verstärken.`,
        "source":`Friedrich von Schlegel`,
        "id":154
    }    ,
    {
        "text":`Fange zu tun an, dann hast du auch die Kraft dazu.`,
        "source":`Ralph Waldo Emerson`,
        "id":155
    }    ,
    {
        "text":`Willst du etwas wissen, so frage einen Erfahrenen und keine Gelehrten.`,
        "source":`chinesische Weisheit`,
        "id":156
    }    ,
    {
        "text":`Macht Ernst mit euren schönen Worten, so wird das Paradies auf Erden sein.`,
        "source":`Paul de Lagarde`,
        "id":157
    }    ,
    {
        "text":`Ich habe geweint, weil ich keine Schuhe hatte, bis ich einen traf, der keine Füße hatte.`,
        "source":`Giacomo Graf Leopardi`,
        "id":158
    }    ,
    {
        "text":`Unser Schicksal hängt nicht von den Sternen ab, sondern von unserem Handeln.`,
        "source":`William Shakespeare`,
        "id":159
    }    ,
    {
        "text":`Wenn es einen Glauben gibt, der Berge versetzen kann, so ist es der Glaube an die eigene Kraft.`,
        "source":`Marie v. Ebner-Eschenbach`,
        "id":160
    }    ,
    {
        "text":`Nicht der Wille ist der Antrieb unseres Handelns, sondern unsere Vorstellungskraft.`,
        "source":`Émile Coué`,
        "id":161
    }    ,
    {
        "text":`Jeder Tag ist eine neue Chance, das zu tun, was du möchtest.`,
        "source":`Friedrich von Schiller`,
        "id":162
    }    ,
    {
        "text":`Verbringe nicht die Zeit mit der Suche nach einem Hindernis. Vielleicht ist keines da.`,
        "source":`Franz Kafka`,
        "id":163
    }    ,
    {
        "text":`Ein Traum ist unerlässlich, wenn man die Zukunft gestalten will.`,
        "source":`Victor Hugo`,
        "id":164
    }    ,
    {
        "text":`Wer hohe Türme bauen will, muss lange beim Fundament verweilen.`,
        "source":`Anton Bruckner`,
        "id":165
    }    ,
    {
        "text":`Du bist deine eigene Grenze, erhebe dich darüber.`,
        "source":`Hafes`,
        "id":166
    }    ,
    {
        "text":`Ein entspannter Mensch ist ein gesunder Mensch.`,
        "source":`chinesische Weisheit`,
        "id":167
    }    ,
    {
        "text":`Möge dein schlechtester Tag der Zukunft besser sein als dein bester der Vergangenheit.`,
        "source":`Laotse`,
        "id":168
    }    ,
    {
        "text":`Kleine Gelegenheiten sind oft der Anfang zu großen Unternehmungen.`,
        "source":`Demosthenes`,
        "id":169
    }    ,
    {
        "text":`Entweder werden wir einen Weg finden oder wie machen einen!`,
        "source":`Hannibal`,
        "id":170
    }    ,
    {
        "text":`Sie können alles tun, weil sie denken, dass sie es können.`,
        "source":`Vergil`,
        "id":171
    }    ,
    {
        "text":`Man kann einem Menschen nichts beibringen, man kann ihm nur helfen, es in sich selbst zu entdecken.`,
        "source":`Galileo Galilei`,
        "id":172
    }    ,
    {
        "text":`Der ideale Tag wird nie kommen. Er ist heute, wenn wir ihn dazu machen.`,
        "source":`Horaz`,
        "id":173
    }    ,
    {
        "text":`Wer sein Ziel kennt, findet den Weg.`,
        "source":`Laotse`,
        "id":174
    }    ,
    {
        "text":`Fehler sind das Tor zu neuen Entdeckungen.`,
        "source":`James Joyce`,
        "id":175
    }    ,
    {
        "text":`Sechs Wörtchen nehmen mich in Anspruch jeden Tag: Ich soll, ich muß, ich kann, ich will, ich darf, ich mag.`,
        "source":`Friedrich Rückert`,
        "id":176
    }    ,
    {
        "text":`Lust verkürzt den Weg.`,
        "source":`William Shakespeare`,
        "id":177
    }    ,
    {
        "text":`In jedem Menschen steckt ein König. Sprich zu dem König, und er wird herauskommen.`,
        "source":`Deutsches Sprichwort`,
        "id":178
    }    ,
    {
        "text":`Besessenheit ist der Motor – Verbissenheit ist die Bremse.`,
        "source":`Rudolf G. Nurejew`,
        "id":179
    }    ,
    {
        "text":`Schwierigkeiten sind die Sprossen auf der Leiter des Erfolgs.`,
        "source":`Hermann J. Elling`,
        "id":180
    }    ,
    {
        "text":`Die einzige Person die uns am Erfolg hindert ist diese welche wir im Spiegel sehen.`,
        "source":`Anton Weber`,
        "id":181
    }    ,
    {
        "text":`Wirklich erfolgreich zu sein, bedeutet immer erfolgreicher zu werden. Denn Erfolg ist kein Zustand sondern ein Prozess.`,
        "source":`Wadim Korsch`,
        "id":182
    }    ,
    {
        "text":`Viele Menschen versäumen das kleine Glück, während sie auf das Große vergebens warten.`,
        "source":`Pearl S. Buck`,
        "id":183
    }    ,
    {
        "text":`Nicht die Glücklichen sind dankbar. Es sind die Dankbaren, die glücklich sind.`,
        "source":`Francis Bacon`,
        "id":184
    }    ,
    {
        "text":`Wenn wir Freude am Leben haben, kommen die Glücksmomente von selber.`,
        "source":`Ernst Ferstl`,
        "id":185
    }    ,
    {
        "text":`Glücklich ist nicht, wer anderen so vorkommt, sondern wer sich selbst dafür hält.`,
        "source":`Lucius Annaeus Seneca`,
        "id":186
    }    ,
    {
        "text":`Lasse nie zu, dass du jemandem begegnest, der nicht nach der Begegnung mit dir glücklicher ist.`,
        "source":`Mutter Theresa`,
        "id":187
    }    ,
    {
        "text":`Viele Menschen wissen, dass sie unglücklich sind. Aber noch mehr Menschen wissen nicht, dass sie glücklich sind.`,
        "source":`Albert Schweitzer`,
        "id":188
    }    ,
    {
        "text":`Bildung kann einen sehr glücklich und gelassen machen.`,
        "source":`Günther Jauch`,
        "id":189
    }    ,
    {
        "text":`Unsere Fehlschläge sind oft erfolgreicher als unsere Erfolge.`,
        "source":`Henry Ford`,
        "id":190
    }    ,
    {
        "text":`Man kann niemanden überholen, wenn man in seine Fußstapfen tritt.`,
        "source":`Francois Truffaut`,
        "id":191
    }    ,
    {
        "text":`Nur wer etwas leistet, kann sich etwas leisten.`,
        "source":`Michail Gorbatschow`,
        "id":192
    }    ,
    {
        "text":`Unheil beklagen, das nicht mehr zu bessern ist, heißt umso mehr das Unheil nur vergrößern.`,
        "source":`William Shakespeare`,
        "id":193
    }    ,
    {
        "text":`Das Übel, was uns trifft, ist selten so schlimm als das, welches wir befürchten.`,
        "source":`Friedrich von Schiller`,
        "id":194
    }    ,
    {
        "text":`Wenn man die Ruhe nicht in sich selbst findet, ist es vergeblich, sie anderswo zu suchen.`,
        "source":`François de La Rochefoucauld`,
        "id":195
    }    ,
    {
        "text":`Der Mensch ist nicht Gefangener des Schicksals, sondern einzig und allein seines eigenen Geistes.`,
        "source":`Franklin D. Roosevelt`,
        "id":196
    }    ,
    {
        "text":`Das Leben eines Menschen ist, was seine Gedanken aus ihm machen.`,
        "source":`Mark Aurel`,
        "id":197
    }    ,
    {
        "text":`Fantasie ist die Gabe, unsichtbare Dinge zu sehen.`,
        "source":`Jonathan Swift`,
        "id":198
    }    ,
    {
        "text":`Der Gedanke ist alles. Der Gedanke ist der Anfang von allem. Und Gedanken lassen sich lenken. Daher ist das Wichtigste: die Arbeit an den Gedanken.`,
        "source":`Tolstoi`,
        "id":199
    }    ,
    {
        "text":`Der Hauptgrund dafür, warum die meisten Menschen nicht das bekommen, was sie wollen, ist der, dass sie gar nicht wissen, was sie wollen.`,
        "source":`T. Harv Eker`,
        "id":200
    }    ,
    {
        "text":`Du kannst nicht immer bekommen, was du willst. Aber wenn du es gelegentlich versuchst, bekommst du was du brauchst.`,
        "source":`Mick Jagger`,
        "id":201
    }    ,
    {
        "text":`Damit das Mögliche geschehe, muss immer wieder das Unmögliche versucht werden.`,
        "source":`Hermann Hesse`,
        "id":202
    }    ,
    {
        "text":`Wer sich zum Wurm macht, kann nachher nicht klagen, wenn er mit Füßen getreten wird.`,
        "source":`Immanuel Kant`,
        "id":203
    }    ,
    {
        "text":`Es ist besser, unvollkommene Entscheidungen durchzuführen, als beständig nach vollkommenen Entscheidungen zu suchen, die es niemals geben wird.`,
        "source":`Charles de Gaulle`,
        "id":204
    }    ,
    {
        "text":`Wer lange bedenkt, der wählt nicht immer das Beste.`,
        "source":`Goethe`,
        "id":205
    }    ,
    {
        "text":`Aus Niederlagen lernt man leicht. Schwieriger ist es, aus Siegen zu lernen.`,
        "source":`Gustav Stresemann`,
        "id":206
    }    ,
    {
        "text":`Nichts zeugt mehr von Dummheit, als immer wieder die gleichen Dinge zu machen und andere Ergebnisse zu erwarten.`,
        "source":`Albert Einstein`,
        "id":207
    }    ,
    {
        "text":`Leben ist Veränderung – wer sich nicht verändert, wird auch verlieren, was er bewahren möchte.`,
        "source":`Gustav Heinemann`,
        "id":208
    }    ,
    {
        "text":`Oft gehört mehr Mut dazu, seine Meinung zu ändern, als ihr treu zu bleiben.`,
        "source":`Christian Friedrich Hebbel`,
        "id":209
    }    ,
    {
        "text":`Wer nicht jeden Tag etwas für seine Gesundheit aufbringt, muss eines Tages viel Zeit für die Krankheit opfern.`,
        "source":`Sebastian Kneipp`,
        "id":210
    }    ,
    {
        "text":`Unser größter Ruhm liegt nicht darin, niemals zu fallen, sondern jedes Mal wieder aufzustehen, wenn wir gescheitert sind.`,
        "source":`Konfuzius`,
        "id":211
    }    ,
    {
        "text":`Gehe schlauer zu Bett, als du aufgewacht bist.`,
        "source":`Charlie Munger`,
        "id":212
    }    ,
    {
        "text":`Geh’ nicht, wohin der Weg dich führt, sondern hinterlasse dort eine Spur, wo vorher gar kein Weg war.`,
        "source":`Ralph Waldo Emerson`,
        "id":213
    }    ,
    {
        "text":`Ein rollender Stein setzt kein Moos an.`,
        "source":`Englisches Sprichwort`,
        "id":214
    }    ,
    {
        "text":`Die Anzahl unserer Neider bestätigt unsere Fähigkeiten.`,
        "source":`Oscar Wilde`,
        "id":215
    }    ,
    {
        "text":`Jede lange Reise beginnt immer mit dem ersten Schritt.`,
        "source":`Laotse`,
        "id":216
    }    ,
    {
        "text":`Was in unserer Macht liegt zu tun, liegt in unserer Macht nicht zu tun.`,
        "source":`Aristoteles`,
        "id":217
    }    ,
    {
        "text":`Kein übler Drang des menschlichen Herzens ist so mächtig, als dass dieser nicht durch Disziplin gebändigt werden kann.`,
        "source":`Seneca`,
        "id":218
    }    ,
    {
        "text":`Beherrsche deinen Geist, oder dieser wird dich beherrschen.`,
        "source":`Horatius`,
        "id":219
    }    ,
    {
        "text":`Es gibt nur weniges, was einem Mann, welcher sich selbst besiegen kann, widersteht.`,
        "source":`Ludwig der Große`,
        "id":220
    }    ,
    {
        "text":`Die meisten Menschen würden eher sterben als denken. Und in der Tat: Sie tun es.`,
        "source":`Bertrand Russell`,
        "id":221
    }    ,
    {
        "text":`Sofern du dich nicht selbst eroberst, wirst du von deinem Selbst erobert.`,
        "source":`Napoleon Hill`,
        "id":222
    }    ,
    {
        "text":`Sofern wir uns nicht selbst disziplinieren, wird die Umwelt es für uns tun.`,
        "source":`William Feather`,
        "id":223
    }    ,
    {
        "text":`Ein Mann von Worten und nicht von Taten ist wie ein Gärtner ohne Spaten.`,
        "source":`Englisches Sprichwort`,
        "id":224
    }    ,
    {
        "text":`Es gibt keinen Erfolg, wo es keine Disziplin gibt.`,
        "source":`Irisches Sprichwort`,
        "id":225
    }    ,
    {
        "text":`Zuerst formen wir Gewohnheiten, dann formen diese uns.`,
        "source":`Rob Gilbert`,
        "id":226
    }    ,
    {
        "text":`Die einzige Disziplin, welche Bestand hat, ist Selbstdisziplin.`,
        "source":`Bum Phillips`,
        "id":227
    }    ,
    {
        "text":`Je disziplinierter man wird, desto einfacher wird das Leben.`,
        "source":`Steve Pavlina`,
        "id":228
    }    ,
    {
        "text":`Ein Leben ohne Disziplin ist wie ein Schiff ohne Ruder.`,
        "source":`Ronie Mathew Thomas`,
        "id":229
    }    ,
    {
        "text":`Wenn du denkst, Abenteuer sind gefährlich: Versuch’s mal mit Routine. Die ist tödlich.`,
        "source":`Paulo Coelho`,
        "id":230
    }    ,
    {
        "text":`Im Haus des Glücks ist der Warteraum das größte Zimmer.`,
        "source":`unbekannter Autor`,
        "id":231
    }    ,
    {
        "text":`Nichts ändert sich, bis man sich selbst ändert. Und plötzlich ändert sich alles.`,
        "source":`unbekannter Autor`,
        "id":232
    }    ,
    {
        "text":`Sich Sorgen zu machen und Angst zu haben – das sind die größten Probleme der Menschheit.`,
        "source":`Dale Carnegie`,
        "id":233
    }    ,
    {
        "text":`Unser Hauptaufgabe ist nicht, zu sehen, was in vager Ferne liegt, sondern das zu tun, was das Nächstliegende ist.`,
        "source":`Thomas Carlyle`,
        "id":234
    }    ,
    {
        "text":`Der kluge Mann fängt jeden Tag wie neues Leben an.`,
        "source":`Dale Carnegie`,
        "id":235
    }    ,
    {
        "text":`Eine der tragischsten Eigenschaften der menschlichen Natur ist der Hang, das Leben aufzuschieben.`,
        "source":`Dale Carnegie`,
        "id":236
    }    ,
    {
        "text":`Das Leben muss gelebt werden, in jedem Augenblick des Tages und der Stunde.`,
        "source":`Stephen Leacock`,
        "id":237
    }    ,
    {
        "text":`Mein Leben war voll fürchterlichem Unglück, das meistens gar nicht passiert ist.`,
        "source":`Montaigne`,
        "id":238
    }    ,
    {
        "text":`Alles, was mit unseren persönlichen Wünschen übereinstimmt, erscheint uns als wahr. Alles andere macht uns wütend.`,
        "source":`André Maurois`,
        "id":239
    }    ,
    {
        "text":`Umstände allein machen uns nicht glücklich oder unglücklich. Es ist die Art der Reaktion darauf, die unsere Gefühle bestimmt.`,
        "source":`Dale Carnegie`,
        "id":240
    }    ,
    {
        "text":`Weise Menschen sitzen nicht tatenlos da und jammern über das Verlorene, sondern bemühen sich heiter, den Schaden wieder gut zu machen.`,
        "source":`Shakespeare`,
        "id":241
    }    ,
    {
        "text":`Sie sind nicht das, was Sie denken, das Sie sind, sondern Sie sind, was Sie denken.`,
        "source":`Norman Vincent Peale`,
        "id":242
    }    ,
    {
        "text":`Ein Mensch, der sich nicht ärgern kann, ist ein Dummkopf, ein Mensch, der sich nicht ärgern will, ein Weiser.`,
        "source":`Dale Carnegie`,
        "id":243
    }    ,
    {
        "text":`Heute ist das Morgen, über das wir uns gestern den Kopf zerbrachen.`,
        "source":`unbekannter Autor`,
        "id":244
    }    ,
    {
        "text":`Unternehmertum bedeutet, einige Jahre Dinge zu tun, die andere nicht wollen, um den Rest des Lebens Dinge zu tun, die andere nicht können.`,
        "source":`unbekannter Autor`,
        "id":245
    }    ,
    {
        "text":`Wer nicht mit der Zeit geht, geht mit der Zeit.`,
        "source":`unbekannter Autor`,
        "id":246
    }    ,
    {
        "text":`Wer den Hafen nicht kennt, in den er segeln will, für den ist kein Wind der richtige.`,
        "source":`Lucius Annaeus Seneca`,
        "id":247
    }    ,
    {
        "text":`Unsere wahre Aufgabe ist es, glücklich zu sein.`,
        "source":`Dalei Lama`,
        "id":248
    }    ,
    {
        "text":`Jeder Tag ist auch stets ein neuer Anfang.`,
        "source":`George Eliot`,
        "id":249
    }    ,
    {
        "text":`Lernen ist wie Rudern gegen den Strom. Wer damit aufhört, treibt zurück.`,
        "source":`Laozi`,
        "id":250
    }    ,
    {
        "text":`Manchmal kann man nichts machen, außer weiter.`,
        "source":`unbekannter Autor`,
        "id":251
    }    ,
    {
        "text":`Aufwachen ist die beste Art, seine Träume wahr zu machen.`,
        "source":`unbekannter Autor`,
        "id":252
    }    ,
    {
        "text":`Es ist immer zu früh, um aufzugeben.`,
        "source":`Norman Vincent Peale`,
        "id":253
    }    ,
    {
        "text":`Eine Minute Erfolg entschädigt für jahrelanges Scheitern.`,
        "source":`Robert Browning`,
        "id":254
    }    ,
    {
        "text":`Erfolg ist eine Treppe, keine Tür.`,
        "source":`unbekannter Autor`,
        "id":255
    }    ,
    {
        "text":`Deine Zeit ist begrenzt. Vergeude sie nicht damit, das Leben anderer zu leben.`,
        "source":`Steve Jobs`,
        "id":256
    }    ,
    {
        "text":`Ich habe nie vom Erfolg geträumt, ich habe für ihn gearbeitet.`,
        "source":`Jessica Hardy`,
        "id":257
    }    ,
    {
        "text":`Der Wille gestaltet den Menschen. Zum Erfolg braucht er jedoch Mut und Ausdauer.`,
        "source":`Bruce Lee`,
        "id":258
    }    ,
    {
        "text":`Schmerz ist vergänglich. Erfolge bleiben für immer.`,
        "source":`George Halas`,
        "id":259
    }    ,
    {
        "text":`Wer nicht mehr will – als er kann, bleibt unter seinem Können.`,
        "source":`A. Marcuse`,
        "id":260
    }    ,
    {
        "text":`Warte nicht, bis das Unwetter im Leben vorüber zieht, sondern lerne, im Regen zu tanzen.`,
        "source":`unbekannter Autor`,
        "id":261
    }    ,
    {
        "text":`Erfolg besteht darin, dass man genau das kann, was im Moment gefragt ist.`,
        "source":`Henry Ford`,
        "id":262
    }    ,
    {
        "text":`Scheitern ist nicht das Gegenteil von Erfolg. Es ist ein Teil davon.`,
        "source":`unbekannter Autor`,
        "id":263
    }    ,
    {
        "text":`Du hast 3 Möglichkeiten im Leben: Aufgeben, Nachgeben oder alles geben.`,
        "source":`unbekannter Autor`,
        "id":264
    }    ,
    {
        "text":`Die Zukunft ist die Summe aller Möglichkeiten.`,
        "source":`unbekannter Autor`,
        "id":265
    }    ,
    {
        "text":`Das Leben besteht zu 10% aus dem, was uns passiert und zu 90% aus dem, wie wir darauf reagieren.`,
        "source":`Dennis P. Kimbro`,
        "id":266
    }    ,
    {
        "text":`Ein Ziel ohne Plan ist einfach nur ein Wunsch.`,
        "source":`AntoAntoine de Saint-Exupéry`,
        "id":267
    }    ,
    {
        "text":`Die wichtigsten Dinge im Leben sind keine Dinge`,
        "source":`unbekannter Autor`,
        "id":268
    }    ,
    {
        "text":`Das Leben ist kurz. Lache, so lange du noch Zähne hast.`,
        "source":`unbekannter Autor`,
        "id":269
    }    ,
    {
        "text":`Viele Menschen sterben mit 25, werden aber erst mit 75 begraben.`,
        "source":`Benjamin Franklin`,
        "id":270
    }    ,
    {
        "text":`Das Leben ist einfach, wir bestehen nur darauf, es kompliziert machen zu wollen.`,
        "source":`Konfuzius`,
        "id":271
    }    ,
    {
        "text":`Wenn alles gegen dich zu sein scheint, erinnere dich daran, dass das Flugzeug gegen den Wind abhebt, nicht mit ihm.`,
        "source":`Henry Ford`,
        "id":272
    }    ,
    {
        "text":`Wir kommen aus dem Nichts – wir gehen ins Nichts. Was haben wir zu verlieren? Nichts.`,
        "source":`Monty Python`,
        "id":273
    }    ,
    {
        "text":`Chancen multiplizieren sich, wenn man sie ergreift.`,
        "source":`Sunzi`,
        "id":274
    }    ,
    {
        "text":`Chancen gehen nie verloren. Die man selbst versäumt, nutzen andere.`,
        "source":`unbekannter Autor`,
        "id":275
    }    ,
    {
        "text":`Jeden Morgen werden neue Chancen geboren.`,
        "source":`Prof. Dr. Quadbeck-Seeger`,
        "id":276
    }    ,
    {
        "text":`Wer ins kalte Wasser springt, taucht ins Meer der Möglichkeiten.`,
        "source":`finnische Redewendung`,
        "id":277
    }    ,
    {
        "text":`Das Glück ist auf der Seite der Mutigen.`,
        "source":`unbekannter Autor`,
        "id":278
    }    ,
    {
        "text":`Die höchste Form des Glücks ist ein Leben mit einem gewissen Grad an Verrücktheit.`,
        "source":`Erasmus von Rotterdam`,
        "id":279
    }    ,
    {
        "text":`Glück ist kein Geschenk der Götter, sondern die Frucht innerer Einstellung.`,
        "source":`Erich Fromm`,
        "id":280
    }    ,
    {
        "text":`Man will nicht nur glücklich sein, sondern glücklicher als die anderen. Und das ist deshalb so schwer, weil wir die anderen für glücklicher halten, als sie sind.`,
        "source":`Charles-Louis de Montesquieu`,
        "id":281
    }    ,
    {
        "text":`Nicht den Tod sollte man fürchten, sondern dass man nie beginnen wird, zu leben.`,
        "source":`Marcus Aurelius`,
        "id":282
    }    ,
    {
        "text":`Es ist besser, zu genießen und zu bereuen, als zu bereuen, dass man nicht genossen hat.`,
        "source":`Giovanni Boccaccio`,
        "id":283
    }    ,
    {
        "text":`Die größte Entscheidung deines Lebens liegt darin, dass du dein Leben ändern kannst, indem du deine Geisteshaltung änderst.`,
        "source":`Albert Schweitzer`,
        "id":284
    }    ,
    {
        "text":`Mein Vater gab mir den besten Rat meines Lebens. Er sagte: Was du auch tust, auf keinen Fall darfst du mit 65 aufwachen und darüber nachdenken, was du versäumt hast.`,
        "source":`George Clooney`,
        "id":285
    }    ,
    {
        "text":`Alle Lebewesen außer den Menschen wissen, dass der Hauptzweck des Lebens darin besteht, es zu genießen.`,
        "source":`Samuel Butler`,
        "id":286
    }    ,
    {
        "text":`Die Zukunft gehört denen, die an die Wahrhaftigkeit ihrer Träume glauben.`,
        "source":`Eleanor Roosevelt`,
        "id":287
    }    ,
    {
        "text":`Geh nicht immer auf dem vorgezeichneten Weg, der nur dahin führt, wo andere bereits gegangen sind.`,
        "source":`Alexander Graham Bell`,
        "id":288
    }    ,
    {
        "text":`Wer sich nachts zu lange mit den Problemen von morgen beschäftigt, ist am nächsten Tag zu müde, sie zu lösen.`,
        "source":`Rainer Haak`,
        "id":289
    }    ,
    {
        "text":`Was nennen die Menschen am liebsten dumm? Das Gescheite, das sie nicht verstehen.`,
        "source":`Marie von Ebner-Eschenbach`,
        "id":290
    }    ,
    {
        "text":`Der Optimist hat nicht weniger oft unrecht als der Pessimist, aber er lebt froher.`,
        "source":`Charlie Rivel`,
        "id":291
    }    ,
    {
        "text":`Auf die Arbeit schimpft man nur solange, bis man keine mehr hat.`,
        "source":`Sinclair Lewis`,
        "id":292
    }    ,
    {
        "text":`Wirklich reich ist der, der mehr Träume in seiner Seele hat, als die Wirklichkeit zerstören kann.`,
        "source":`Hans Kruppa`,
        "id":293
    }    ,
    {
        "text":`Die Kunst ist, einmal mehr aufzustehen, als man umgeworfen wird.`,
        "source":`Winston Churchill`,
        "id":294
    }    ,
    {
        "text":`Ein voller Terminkalender ist noch lange kein erfülltes Leben.`,
        "source":`Kurt Tucholsky`,
        "id":295
    }    ,
    {
        "text":`Inmitten von Schwierigkeiten liegen oft Möglichkeiten.`,
        "source":`Albert Einstein`,
        "id":296
    }    ,
    {
        "text":`Wer lachen kann, dort wo er hätte heulen können, bekommt wieder Lust am Leben.`,
        "source":`Werner Finck`,
        "id":297
    }    ,
    {
        "text":`Man muss sein Leben aus dem Holz schnitzen, das man zur Verfügung hat.`,
        "source":`Theodor Storm`,
        "id":298
    }    ,
    {
        "text":`Jeder würde sein eigenes Leben gleich viel schöner finden, wenn er aufhörte, es mit dem Leben der Leute von nebenan zu vergleichen.`,
        "source":`Henry Fonda`,
        "id":299
    }    ,
    {
        "text":`Auf jedes Leben muss etwas Regen fallen. Manche Tage müssen dunkel und trübe sein.`,
        "source":`Henry Wadsworth Longfellow`,
        "id":300
    }    ,
    {
        "text":`Das Leben ist bezaubernd, man muss es nur durch die richtige Brille sehen.`,
        "source":`Alexandre Dumas`,
        "id":301
    }    ,
    {
        "text":`Wer sein Leben so einrichtet, dass er niemals auf die Schnauze fallen kann, der kann nur auf dem Bauch kriechen.`,
        "source":`Heinz Riesenhuber`,
        "id":302
    }    ,
    {
        "text":`Wem das Leben keine Lasten auflädt, dem wird es selbst zur Last.`,
        "source":`Peter Sirius`,
        "id":303
    }    ,
    {
        "text":`Es genügt nicht, mit beiden Beinen im Leben zu stehen. Man muss sie auch in Bewegung setzen.`,
        "source":`Lothar Schmidt`,
        "id":304
    }    ,
    {
        "text":`Die meisten Menschen planen ihr eigenes Leben schlechter als einen vierzehntägigen Urlaub.`,
        "source":`Nikolaus B. Enkelmann`,
        "id":305
    }    ,
    {
        "text":`Wir leben alle unter dem gleichen Himmel, aber wir haben nicht alle den gleichen Horizont.`,
        "source":`Konrad Adenauer`,
        "id":306
    }    ,
    {
        "text":`Leben heißt sich verändern. Vollkommen sein heißt, sich oft verändert zu haben.`,
        "source":`John Henry Newman`,
        "id":307
    }    ,
    {
        "text":`Wer das Leben nicht schätzt, der verdient es nicht.`,
        "source":`Leonardo Da Vinci`,
        "id":308
    }    ,
    {
        "text":`Lerne, dass Siege wie Niederlagen zum Leben eines jeden gehören – außer zum Leben der Feiglinge.`,
        "source":`Paulo Coelho`,
        "id":309
    }    ,
    {
        "text":`Es gibt Menschen, die nicht leben, sondern gelebt werden.`,
        "source":`Karl May`,
        "id":310
    }    ,
    {
        "text":`Das Leben besteht zu 95% aus Gewohnheit und zu 5% aus Überraschungen.`,
        "source":`Jules Romains`,
        "id":311
    }    ,
    {
        "text":`Nur durch Mut kann man sein Leben in Ordnung bringen.`,
        "source":`Pierre Corneille`,
        "id":312
    }    ,
    {
        "text":`Ich bin der erfolgreichste Mann, dem ich je begegnet bin.`,
        "source":`Hugh Hefner`,
        "id":313
    }    ,
    {
        "text":`Dein Erfolg enthält immer etwas, das selbst deinen besten Freunden mißfällt.`,
        "source":`Oscar Wilde`,
        "id":314
    }    ,
    {
        "text":`Entweder man fliegt mit den Adlern, oder man scharrt mit den Hühnern.`,
        "source":`Robert Halver`,
        "id":315
    }    ,
    {
        "text":`Es ist nie zu spät so zu sein, wie man gerne gewesen wäre.`,
        "source":`G. Eliot`,
        "id":316
    }    ,
    {
        "text":`Das Leben wirft uns ständig Bälle zu. Wir können ihnen ausweichen, sie fangen oder von ihnen getroffen werden.`,
        "source":`Buddhistische Weisheit`,
        "id":317
    }    ,
    {
        "text":`Alle Menschen sind klug. Die einen vorher, die anderen hinterher.`,
        "source":`Voltaire`,
        "id":318
    }    ,
    {
        "text":`Wir sind nicht nur verantwortlich, für das was wir tun, sondern auch für das, was wir nicht tun.`,
        "source":`Moliere`,
        "id":319
    }    ,
    {
        "text":`Der beste Weg, die Zukunft vorauszusagen, ist, sie zu gestalten.`,
        "source":`Willy Brandt`,
        "id":320
    }    ,
    {
        "text":`Es ist besser, unvollkommen anzupacken, als perfekt zu zögern.`,
        "source":`Thomas Edison`,
        "id":321
    }    ,
    {
        "text":`Alles Große in der Welt passiert nur, weil einer mehr tut, als er muss.`,
        "source":`Albert Einstein`,
        "id":322
    }    ,
    {
        "text":`Es ist nicht zu wenig Zeit, die wir haben, sondern es ist zu viel Zeit, die wir nicht nutzen.`,
        "source":`Lucius Annaeus Seneca`,
        "id":323
    }    ,
    {
        "text":`Wer seine Schweißtropfen zählt, wird nie Geld zählen.`,
        "source":`Friedrich Hebbel`,
        "id":324
    }    ,
    {
        "text":`Alles, was du dir vorstellen kannst, ist real.`,
        "source":`Picasso`,
        "id":325
    }    ,
    {
        "text":`Ideen sind der Anfang aller Vermögen.`,
        "source":`Napoleon Hill`,
        "id":326
    }    ,
    {
        "text":`Wenn du nicht weißt, wohin du gehst, landest du wahrscheinlich am Ende woanders.`,
        "source":`The Peter Principle`,
        "id":327
    }    ,
    {
        "text":`Erfolglosigkeit bedeutet nicht, dass Du ein Versager bist. Es bedeutet, dass Du bis jetzt noch keinen Erfolg hattest.`,
        "source":`Robert H. Schuller`,
        "id":328
    }    ,
    {
        "text":`Genie ist unendliche Geduld.`,
        "source":`Michelangelo`,
        "id":329
    }    ,
    {
        "text":`Der, der Geduld hat, kann bekommen, was er will.`,
        "source":`Benjamin Franklin`,
        "id":330
    }    ,
    {
        "text":`Geduld ist bitter, aber ihre Früchte sind süß.`,
        "source":`Jean-Jacques Rousseau`,
        "id":331
    }    ,
    {
        "text":`Wissen ist Macht.`,
        "source":`Sir Francis Bacon`,
        "id":332
    }    ,
    {
        "text":`Wenn alles unter Kontrolle scheint, bewegst du dich einfach nicht schnell genug.`,
        "source":`Mario Andretti`,
        "id":333
    }    ,
    {
        "text":`Ändere deine Gedanken und du veränderst deine Welt.`,
        "source":`Norman Vincent Peale`,
        "id":334
    }    ,
    {
        "text":`Der bequemste Weg geht immer bergab.`,
        "source":`Jochen Simbrig`,
        "id":335
    }    ,
    {
        "text":`Nichts muß so sein, nur weil es immer so gewesen ist.`,
        "source":`unbekannter Autor`,
        "id":336
    }    ,
    {
        "text":`Unser größter Feind ist die Langeweile.`,
        "source":`Voltaire`,
        "id":337
    }    ,
    {
        "text":`Wenn du die Absicht hast, dich zu erneuern, tu es jeden Tag.`,
        "source":`Konfuzius`,
        "id":338
    }    ,
    {
        "text":`Die Welt besteht aus denen, die etwas in Gang setzen, denen, die zusehen, wie etwas geschieht, und denen, die fragen, was geschehen ist.`,
        "source":`Augustine`,
        "id":339
    }    ,
    {
        "text":`Es gibt mehr Leute, die kapitulieren, als solche, die scheitern.`,
        "source":`Henry Ford`,
        "id":340
    }    ,
    {
        "text":`Handeln ist der grundlegende Schlüssel zum Erfolg.`,
        "source":`Pablo Picasso`,
        "id":341
    }    ,
    {
        "text":`Erfolg ist einfach erklärt: Tue das Richtige auf die richtige Weise zur richtigen Zeit.`,
        "source":`Arnold H. Glasgow`,
        "id":342
    }    ,
    {
        "text":`Im Leben erfolgreich zu sein erfordert zwei Dinge: Ignoranz und Vertrauen`,
        "source":`Mark Twain`,
        "id":343
    }    ,
    {
        "text":`Erfolg haben für gewöhnlich diejenigen, die zu beschäftigt sind, um darauf zu warten.`,
        "source":`Henry David Thoreau`,
        "id":344
    }    ,
    {
        "text":`Erfolg meint, wie hoch du springst, nachdem du auf dem Boden aufgeschlagen bist.`,
        "source":`George S. Patton`,
        "id":345
    }    ,
    {
        "text":`Probleme sind Chancen in neuem Gewand.`,
        "source":`Hermann Scherer`,
        "id":346
    }    ,
    {
        "text":`So lange du glaubst, dass an allem immer die anderen schuld sind, wirst du leiden.`,
        "source":`Dalai Lama`,
        "id":347
    }    ,
    {
        "text":`Wer selbst kein Ziel hat, arbeitet automatisch für die Ziele anderer.`,
        "source":`unbekannter Autor`,
        "id":348
    }    ,
    {
        "text":`Zu den Quellen gelangt man gegen den Strom.`,
        "source":`Stanislaw Jerzy Lec`,
        "id":349
    }    ,
    {
        "text":`Zu allem großen ist der erste Schritt Mut.`,
        "source":`Goethe`,
        "id":350
    }    ,
    {
        "text":`Wer nicht Teil der Lösung ist, ist Teil des Problems.`,
        "source":`Michael Gorbatschow`,
        "id":351
    }    ,
    {
        "text":`Wer all seine Ziele erreicht hat, hat sie sich als zu niedrig ausgewählt.`,
        "source":`Herbert von Karajan`,
        "id":352
    }    ,
    {
        "text":`Wenn man in die falsche Richtung läuft, hat es keinen Zweck, das Tempo zu erhöhen.`,
        "source":`Birgit Breuel`,
        "id":353
    }    ,
    {
        "text":`Wenn du nichts veränderst, wird sich auch nichts verändern!`,
        "source":`Sparky Anderson`,
        "id":354
    }    ,
    {
        "text":`Nirgendwo ist der, der überall ist.`,
        "source":`Lucius Annaeus Seneca`,
        "id":355
    }    ,
    {
        "text":`Wir müssen die Dunkelheit durchqueren, um zum Licht zu finden.`,
        "source":`Albert Pike`,
        "id":356
    }    ,
    {
        "text":`Manchmal müssen wir ordentlich hinfallen, um zu merken, wo wir standen.`,
        "source":`Hayley Williams`,
        "id":357
    }    ,
    {
        "text":`Der Weg zum Erfolg ist aufzuhören zu reden und stattdessen zu machen.`,
        "source":`Walt Disney`,
        "id":358
    }    ,
    {
        "text":`Wer mit Hühnern rumhängt, wird stets nur gackern. Wer mit Adlern rumhängt, der wird fliegen.`,
        "source":`Steve Maraboli`,
        "id":359
    }    ,
    {
        "text":`Erfolgreiche Leute haben kleine Fernseher und volle Bücherregale, Erfolglose haben große Fernseher und leere Bücherregale.`,
        "source":`Zig Ziglar`,
        "id":360
    }    ,
    {
        "text":`Um erfolgreich zu werden braucht es Freunde. Um sehr erfolgreich zu werden braucht es Feinde.`,
        "source":`Sidney Sheldon`,
        "id":361
    }    ,
    {
        "text":`Die holprigsten Straßen führen oft nach oben.`,
        "source":`Christina Aguilera`,
        "id":362
    }    ,
    {
        "text":`Wünsch dir nicht, dass es leichter wird. Wünsch dir, dass du besser wirst.`,
        "source":`Jim Rohn`,
        "id":363
    }    ,
    {
        "text":`Der sicherste Weg, deine Träume wahr werden zu lassen, ist sie zu leben.`,
        "source":`Roy T. Bennett`,
        "id":364
    }    ,
    {
        "text":`Vielleicht wirft dir das Leben ja Zitronen zu, weil du die beste Limonade machst…`,
        "source":`King James Gadsden`,
        "id":365
    }    ,
    {
        "text":`Lern aus deiner Vergangenheit, aber leb nicht in ihr.`,
        "source":`Steve Maraboli`,
        "id":366
    }    ,
    {
        "text":`Machen ist wie wollen, nur krasser.`,
        "source":`unbekannter Autor`,
        "id":367
    }    ,
    {
        "text":`Nimm das Leben nicht zu ernst. Du kommst ohnehin nicht lebend da raus.`,
        "source":`Elbert Hubbard`,
        "id":368
    }    ,
    {
        "text":`Versuche nicht ein Mann des Erfolgs zu werden. Versuche ein Mann der Wahl zu werden.`,
        "source":`Albert Einstein`,
        "id":369
    }    ,
    {
        "text":`Das Leben lässt sich in drei Worten zusammenfassen: Es geht weiter.`,
        "source":`Robert Frost`,
        "id":370
    }    ,
    {
        "text":`Der Mann, der den Berg abtrug, war derselbe, der anfing, kleine Steine wegzutragen.`,
        "source":`Konfuzius`,
        "id":371
    }    ,
    {
        "text":`Wer zu sich selbst finden will, darf andere nicht nach dem Weg fragen.`,
        "source":`Paul Watzlawick`,
        "id":372
    }    ,
    {
        "text":`Wer den Hafen nicht kennt, in den er segeln will, für den ist kein Wind ein günstiger`,
        "source":`Seneca`,
        "id":373
    }    ,
    {
        "text":`Der einzige Mist, auf dem nichts wächst, ist der Pessimist.`,
        "source":`Theodor Heuss`,
        "id":374
    }    ,
    {
        "text":`Man wird nicht dadurch besser, dass man andere schlecht macht.`,
        "source":`Heinrich Nordhoff`,
        "id":375
    }    ,
    {
        "text":`Je lockerer die Schraube, umso mehr Spiel hat das Leben`,
        "source":`unbekannter Autor`,
        "id":376
    }    ,
    {
        "text":`Man weiß nie, vor welchem größeren Unglück einen das Pech bewahrt hat.`,
        "source":`C. McCarthy`,
        "id":377
    }    ,
    {
        "text":`Von allen Worten, geschrieben oder gelesen, sind die traurigsten die: was wäre gewesen….`,
        "source":`John G. Whittier`,
        "id":378
    }    ,
    {
        "text":`Wer die Welt nicht mehr begreift, wird manipulierbar.`,
        "source":`Jean Pütz`,
        "id":379
    }    ,
    {
        "text":`Sei stärker als deine stärkste Ausrede`,
        "source":`unbekannter Autor`,
        "id":380
    }    ,
    {
        "text":`Gib’ alles, nur nicht auf!`,
        "source":`unbekannter Autor`,
        "id":381
    }    ,
    {
        "text":`Was dich nicht herausfordert, ändert dich auch nicht.`,
        "source":`Fred Devito`,
        "id":382
    }    ,
    {
        "text":`Ein Optimist findet immer einen Weg, ein Pessimist immer eine Sackgasse.`,
        "source":`unbekannter Autor`,
        "id":383
    }    ,
    {
        "text":`Begeisterung ist der Motor, Zweifel ist die Bremse`,
        "source":`unbekannter Autor`,
        "id":384
    }    ,
    {
        "text":`Wer heute nichts tut, lebt morgen wie gestern.`,
        "source":`unbekannter Autor`,
        "id":385
    }    ,
    {
        "text":`Das Einzige, was zwischen dir und deinem Erfolg steht, sind die Ausreden, mit denen du dich ablenkst.`,
        "source":`unbekannter Autor`,
        "id":386
    }    ,
    {
        "text":`Wie langsam du auch läufst: Du schlägst alle, die zu Hause bleiben.`,
        "source":`unbekannter Autor`,
        "id":387
    }    ,
    {
        "text":`Es gibt viele Wege zum Glück. Einer davon ist aufhören zu jammern.`,
        "source":`Albert Einstein`,
        "id":388
    }    ,
    {
        "text":`Menschen, die verrückt genug sind zu denken, sie könnten die Welt verändern, sind diejenigen, die es auch tun. `,
        "source":`Steve Jobs`,
        "id":389
    }    ,
    {
        "text":`Es ist leichter, Probleme zu lösen, als mit ihnen zu leben.`,
        "source":`unbekannter Autor`,
        "id":390
    }    ,
    {
        "text":`Es ist nicht schlimm in die falsche Richtung gegangen zu sein, man muss nur den Mut haben umzudrehen!`,
        "source":`unbekannter Autor`,
        "id":391
    }    ,
    {
        "text":`Das Leben meistert man lächelnd oder gar nicht.`,
        "source":`chinesische Weisheit`,
        "id":392
    }    ,
    {
        "text":`Was ist, wenn ich falle? Oh, aber mein Liebling, was ist, wenn Du fliegst?`,
        "source":`Erin Hanson`,
        "id":393
    }    ,
    {
        "text":`Genialität ohne Bildung ist wie Silber in der Mine`,
        "source":`Benjamin Franklin`,
        "id":394
    }    ,
    {
        "text":`Wer mit Schlangen lästert und mit Hyänen schreit – wird nie verstehen warum der Löwe schweigt.`,
        "source":`Kianimus`,
        "id":395
    }    ,
    {
        "text":`Wann immer du feststellst, dass du auf der Seite der Mehrheit bist, wird es Zeit innezuhalten und nachzudenken.`,
        "source":`Mark Twain`,
        "id":396
    }    ,
    {
        "text":`Bevor du mit dem Finger auf andere zeigst, sieh zu, dass deine eigenen Hände sauber sind.`,
        "source":`unbekannter Autor`,
        "id":397
    }    ,
    {
        "text":`Eine der besten Methoden, unglücklich zu werden, ist der Glaube, dass man mehr braucht, als man hat.`,
        "source":`Michael Depner`,
        "id":398
    }    ,
    {
        "text":`So lange die Leute über dich reden, kannst du davon ausgehen, dass sie dein Leben spannender finden als ihr eigenes.`,
        "source":`unbekannter Autor`,
        "id":399
    }    ,
    {
        "text":`Das Problem ist nicht das Problem. Das Problem ist deine Einstellung zu dem Problem.`,
        "source":`Fluch der Karibik`,
        "id":400
    }

]
};

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);
       
        if (event.session.application.applicationId !== "amzn1.ask.skill.ed6a850a-2873-4e69-a95e-12ebd4ca9023") {
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
    //console.log("onLaunch requestId=" + launchRequest.requestId + ", sessionId=" + session.sessionId);
    var newStringSpeech = getNewString(true)
    callback(session.attributes, buildSpeechletResponse("Neujahrsmotivation", newStringSpeech, newStringSpeech, "", true));
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
    var newStringSpeech = getNewString(true)
    callback(session.attributes, buildSpeechletResponse("Neujahrsmotivation", newStringSpeech, newStringSpeech, "", true));
}

function getNewString(speechlet, word) {
    var outputString = "";
    outputString += 'Hier sind 5 Zitate für die tägliche Dosis Motivation. \n\n';
    var i = 0
    for (i = 0; i < 5; i++) {
        var zitat = words.zitate[getRandomInt(0, words.zitate.length)]
        outputString += zitat.text;
        outputString += "\n\nQuelle: ";
        outputString += zitat.source;
    }
    outputString += "\n\nStarte mich nochmal wenn du mehr möchtest. Viel Erfolg!";
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
