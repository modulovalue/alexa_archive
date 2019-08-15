'use strict';

var words = {
    "gedichte": [
        "Was ist weiß und guckt durchs Schlüsselloch? — Ein Spannbettlaken.",
        "Welches Getränk trinken Firmenchefs? — Leitungswasser",
        "Was sagt ein Origami-Lehrer zu seinem Schüler? — „Das kannste knicken.“",
        "Brennholzverleih",
        "Was findet man beim Kannibalen in der Dusche? — Head and Shoulders.",
        "Was passiert wenn man Cola und Bier gleichzeitig trinkt? — Man colabiert.",
        "Was essen Autos am liebsten? — Parkplätzchen.",
        "Was macht eine Bombe im Bordell? — Puff.",
        "Wie heißt ein Spanier ohne Auto? — Carlos",
        "Was sitzt auf einem Baum und winkt? — Ein Huhu!",
        "Was ist niedlich und hüpft qualmend über'n Acker? — Ein Kaminchen!",
        "Was sagt ein Gen, wenn es ein anderes trifft? — Halogen.",
        "Was ist ein studierter Bauer? — Ein Ackerdemiker",
        "Wie heißt das intelligenteste Gemüse? — Schlaubergine.",
        "Ich bin so unentschlossen. Als japanischer Krieger wäre ich ein Nunja.",
        "Was ist gelb und schießt? Eine Banone!",
        "Steht ein Baum allein im Wald…",
        "Was ist gelb und steht am Fenster? — Eine Spannanas.",
        "Welches ist die lustigste Automarke? — Scherzedes.",
        "Was ist grün, schlau und stellt viele Fragen? — Günther Lauch.",
        "Kommt ein Frosch in den Milchladen. Fragt die Verkäuferin: 'Was willst du denn?'' — Sagt der Frosch: 'Quak'.",
        "Was ist die Lieblingsspeise von Piraten? — Kapern",
        "Was ist groß, grau und kann telefonieren? — Ein Telefant",
        "Wieso können Seeräuber keinen Kreis fahren? — Weil sie Pi raten",
        "Was ist ein Keks unter einem Baum? — Ein schattiges Plätzchen.",
        "Was ist rot und steht am Straßenrand? — Eine Hagenutte",
        "Was ist gelb und hüpft durch den Wald? — Der Postfrosch",
        "Was sagt der große Stift zum kleinen Stift? — Wachsmalstift!",
        "Sagt der Pessimist „Schlimmer geht nicht!“ — Sagt der Optimist: „Doch!“",
        "Egal wir gut Du fährst, Züge fahren Güter",
        "Mein Arzt hat eine Südamerikanische Augenkrankheit bei mir diagnostiziert — Ich „Chile“",
        "Neulich im Tatort: Wo waren Sie zur Tatzeit? — Im Internet!",
        "Ich habe manchmal das Gefühl, der Münster-Tatort nutzt Gags, die Fips Asmussen zu flach waren.",
        "Warum summen Bienen? — Weil sie den Text nicht kennen!",
        "Was bestellt ein Maulwurf im Restaurant? — Ein Drei-Gänge-Menü.",
        "Wie nennt man ein verschwundenes Rindtier? — Oxford.",
        "Wie nennt man den Flur eines Iglus? — Eisdiele!",
        "Was ist braun, kann fliegen und macht Kindern die Zähne kaputt? — Die Toffi-Fee!",
        "Wie nennt man einen dicken Schriftsteller? — Kugelschreiber!",
        "Was macht ein schwuler Wurm im Salat? — Er schmeisst die Schnecken raus.",
        "Warum fliegen Storche im Winter in den Süden? — Weil Laufen zu lange dauern würde.",
        "'Ich bin ganz gerührt' sagte der Teig.",
        "„Soll ich Sie ihnen einschlagen?“, fragt er der Glaser den Käufer der Scheibe.",
        "Lehrer: 'Ich sehe heute viele die nicht da sind'",
        "Was sagt der Buddhist an der Würstchenbude? — 'Mach mich eins mit allem.'",
        "Die Wahlheimat ist der Ozean.",
        "Computer ersparen eine Menge Vermutungen; Bikinis tun das auch.",
        "'Herr Ober! Zahlen bitte!'' - '6, 45, 123, 1, 234, 21, ...,",
        "Man kann nicht alles mit Worten ausdrücken … Zitronen zum Beispiel.",
        "Karl und Nochmal sitzen im Boot. Karl fällt raus. Wer sitzt noch drin?",
        "Warum sieht man keine Ameisen in der Kirche? — Weil sie In—sekten sind",
        "Wie heißen dem Jesus seine Fußballschuhe? — Die Christstollen",
        "Was ist Trick 17? — Der Trick der nach Trick 16 kommt!",
        "Der Polizist zum Autofahrer: 'Ich muss sie mit zum Alkoholtest nehmen!' — 'Prima. In welcher Kneipe fangen wir an?'",
        "Ich erzähl euch jetzt einen richtigen Kalauer: 'a b c d e f g h i j.' - 'Merkt ihr schon wie das k—lauert?'",
        "Was ist der Unterschied zwischen einem Lehrerzimmer und einer Psychiatrie? Die Telefonnummer!",
        "Was macht ein Wikinger auf einem Eisberg? Frieren",
        "Mit dem Bizeps anzugeben ist doch echt oberarm!",
        "Wenn ich kommentiere, dann kommen Tiere.",
        "Drei Freunde heißen Karl, außer Günter, der heißt Max.",
        "Was schmeckt wie Zucker und kann singen? — Stevia Naidoo.",
        "Was sagt der Vogel im Käfig? — Ich bin ein Star, holt mich hier raus!",
        "Was sagt ein Betrunkener, der sich noch nicht entschieden hat? — Ich schwanke noch!",
        "Jemand schlägt auf einen Förderturm ein. Warum? — Er will die Zeche prellen!",
        "Das Ei des Kolumbus — eigentlich hätte auch er ein Anrecht auf zwei gehabt!",
        "Unterhalten sich zwei Männer: Sachma, schreit deine Frau, wenn sie kommt? - Na klar! - Meine nicht. Meine hat einen Schlüssel.",
        "Nachts, wenn alles schläft, ist meist keiner mehr wach",
        "Das Klavier: die einen spielen drauf, die anderen pfeifen drauf.",
        "Der Zucker: Stoff, der den Kaffee bitter macht, wenn man vergisst ihn hinein zu tun.",
        "Lokomotive Leipzig verheizt Trainer",
        "Einen Ball zu treten ist eine Sache; ihn zu knuddeln eine ganz andere.",
        "Und was war das erste Verkehrshindernis? Jesus und seine 12 Anhänger",
        "Warum haben Fische Schuppen — Damit sie bei Regen ihre Fahrräder unterstellen können",
        "Ein Witz liegt auf der Straße, kommt ein Auto vorbei ——> FLACH!",
        "Nach dem Sex: 'An wen denkst du jetzt?' — 'Kennst du nicht.'",
        "Kellner zum Gast: “Hatten Sie Barsch bestellt?” — „Nein, höflich!”",
        "Wie nennt man jemanden, der Klon—Schafe jagt? — Dolly—Buster.",
        "Heb die Uhr auf! — Aber ich hab' doch gar kein Urheberrecht.",
        "Fragt der Walfisch den Thunfisch: 'Was soll ich tun, Fisch?' ",
        "Sagt der Thunfisch zum Walfisch: 'Du hast die Wahl, Fisch'",
        "Treffen sich zwei Jäger — beide tot.",
        "Was haben Lehrer und Taucher gemeinsam? — Sie müssen allem auf den Grund gehen.",
        "Was macht ein Glaser, wenn er kein Glas mehr hat? Er trinkt aus der Flasche!",
        "Was ist grün und wird auf Knopfdruck rot? Ein Frosch im Mixer",
        "Warum steht die Freiheitstatue in New York? Weil sie sich nicht setzen kann!",
        "Sagt der Hefeteig zu seinem Freund: 'Also ich weiß nicht, wie's bei dir ist, aber ich geh in meiner Arbeit so richtig auf!'",
        "Frage: Wie nennt man einen Schwarzen, der ein Flugzeug fliegt? — Antwort: Pilot.",
        "Treffen sich 2 Magneten. Fragt der eine: 'Und, wie geht’s?'' — Der andere: 'Ganz gut. Ich weiß nur nicht was ich heut anziehen soll.'",
        "'Papa, da sammelt einer für das neue Schwimmbad.' — 'Na dann, gib ihm einen Eimer Wasser mit!'",
        "Treffen sich zwei Glühbirnen. Fragt die eine: „Wo ist dein Freund?“ — Sagt die andere: „Durchgebrannt!“",
        "Kommt ein Pferd in den Blumenladen und fragt: 'Ham se auch Mageriten ?'",
        "In Hamburg ist ein Sarg angeschwemmt worden. — Konnten sie nicht aufkriegen, war wohl ein Zuhälter drin!",
        "Was macht ein islamistischer Gärtner am liebsten? — Er sprengt den Rasen",
        "'Hast du meinen Hund gesehen?' - 'Ja, hinten bei seiner Hundehütte. Er war aber sehr kurz angebunden.'",
        "Wer sind die hungrigsten Handwerker? — Na die Maurer ... die verputzen ganze Häuser.",
        "Warum kann ein Skelet so schlecht lügen?! — Es ist leicht zu durchschauen!",
        "Oh ein Gerstenkorn! Das sollten Sie im Auge behalten!",
        "Kommt ein Pferd in die Bar. Barkeeper: Wieso machst denn so ‘n langes Gesicht?",
        "Gast: 'Ist das meins?' — Ober: 'Nein, Düsseldorf'",
        "Gast: 'ist das scharf?' — Ober: 'Nein, Rind'",
        "Was gibt es bei Olympia— Teilnehmern zum Nachtisch? — Fackelpudding!",
        "Was ist bunt und hüpft durch die Küche? — Ein Fluchtsalat.",
        "Unser Metzger ist kein Schlechter",
        "Was fliegt durch die Luft und macht 'MMUS — MMUS'? — Eine Biene im Rückwärtsgang!",
        "Warum gibt’s auf Schiffen keinen Honig? — Weil es auf Schiffen Ka/binen gibt!",
        "Was ist süß, klebrig und schwingt sich von Baum zu Baum? — Tarzipan",
        "Was ist dunkel und liegt unterm Baum? Ein schattiges Plätzchen.",
        "Kommt ein Igel in die Konditorei und sagt: 'Einmal rumkugeln bitte.' — Daraufhin der Konditor: 'Aber nicht in diesem Laden!'",
        "Wie heißt das Reh mit Vornamen? — Kartoffelpü",
        "Wer verhaut gerne Schafe? Der Mähdrescher",
        "Was ist ein Ritter in einem Kannibalen—Dorf? — Dosenfutter.",
        "Was ist grün und fliegt über Polen? — Peter Panowski!",
        "Was hängt im Urwald an den Bäumen? — Na, wer weiß es? — Urlaub!",
        "Sagt ein Keks zum anderen: »Verkrümle dich!«",
        "Wo wohnt die Katze? — Im Mietshaus!",
        "Was ist der Lieblingskuchen von Internet—Junkies? Google—Hoopf",
        "Wie heißt ein Soldat ohne Rüstung? — Wilhelm.",
        "Wer wohnt im Dschungel und schummelt? — Mogli",
        "Was macht ein Pirat am Computer? — Er drückt die Enter—Taste.",
        "Was liegt am Strand rum und kann nicht richtig reden? — Eine Nuschel.",
        "Was ist krank und liegt daneben? — Eine Niesnuschel.",
        "Wer anderen eine Grube gräbt, hat ein Grubengrabgerät",
        "Warum steht ein Pils im Wald? Weil die Tannen zapfen!",
        "Was sitzt auf einem Baum und schreit 'Aha', ein Uhu mit Sprachfehler.",
        "Sitze ein Gummibärchen auf der Stromleitung und sagt zum anderen Gummibärchen: 'brzzztbrzzztbbbbrzzztbrrrrzt'",
        "Geht ein Helium in eine Bar und bestellt ein Wasser. Barkeeper: 'Wir haben leider kein Wasser mehr.' Was macht das Helium? Es reagiert nicht.",
        "Treffen sich zwei Bomben auf der Treppe, sagt die eine: 'Lass mal hochgehen!'",
        "Womit findet man am besten neue Freunde? — Mit Kontaktlinsen.",
        "Was ist aller Laster Anfang? — Die Stoßstange.",
        "Wie heißt ein schwedischer Türsteher? Lasse Reinströmen.",
        "Fliegen zwei Luftballons durch die Wüste. Sagt der eine zum anderen: 'Pass auf da ist ein Ka … Peng :D'",
        "Neun von Zehn Leuten finden Mobbing lustig.",
        "Stehen zwei Kühe auf der Wiese, da sagt die eine: 'MUH.' — Da sagt die andere: 'Das wollt ich auch grad sagen!'",
        "Kommt ein Neutron in die Disco, sagt der Türsteher: 'Sorry, nur für geladene Gäste.'",
        "Wie heißt die polnische Version vom ersten Harry—Potter—Buch? — Harry Potzky und die Wegfahrsperre.",
        "Welche Tomaten sind die seltensten Tomaten? — Die Bankautomaten.",
        "Frage: 'Wie war die Stimmung in der DDR?' — Antwort: 'Sie hielt sich ziemlich in Grenzen.'",
        "Was sagt der Überfahrene zur Dampfwalze? — 'Da bin ich jetzt aber platt!'",
        "Ich habe versucht Angela Merkel anzurufen. — Leider vergessen zu wählen.",
        "Was ist rot und bewegt sich immer auf und ab? — eine Tomate im Fahrstuhl",
        "Zwei Erbsen rollen durchs Treppenhaus ... Plötzlich sagt die eine zur andern: 'Achtung ne trepp pe pe pe pe pe'",
    ]
};

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function(event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        if (event.session.application.applicationId !== "amzn1.ask.skill.321734d9-d8c2-44c3-97d5-e277bd69fa44") {
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
    var number = getRandomInt(0, words.gedichte.length)
    callback(session.attributes, buildSpeechletResponse("Flachwitz", words.gedichte[number], words.gedichte[number], "", true));
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
    var number = getRandomInt(0, words.gedichte.length);
    callback(session.attributes, buildSpeechletResponse("Ein neuer Flachwitz", words.gedichte[number], words.gedichte[number], "", true));
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