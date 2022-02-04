let n1; //erschafft Variablen
let n2; //erschafft Variablen n2 und weist ihr die Zahl aus Textfeld 2 zu
let n3;//test 123
let n4;
let n5;
let ergebnis;
let anzahlNoten = 0; //erschafft Anzahl der Noten mit dem Startwert 0
let summe = 0;       //summe der Textfelder mit dem Startwert 0

function tfAuslesen () {
    n1 = parseInt(document.getElementById("tfNote1").value);//definiert die Variablen mit dem Inhalt des Textfeldes
    n2 = parseInt(document.getElementById("tfNote2").value);
    n3 = parseInt(document.getElementById("tfNote3").value);
    n4 = parseInt(document.getElementById("tfNote4").value);
    n5 = parseInt(document.getElementById("tfNote5").value);

    console.log(n1 + ";" + n2 + ";" + n3 + ";" + n4 + ";" + n5);

punktePruefen(n1); //Ausführen der Funktion punkteprüfen für alle Variablem
punktePruefen(n2);
punktePruefen(n3);
punktePruefen(n4);
punktePruefen(n5);

ergebnis = summe / anzahlNoten;// Formel um ergebnis zu berechnen

document.getElementById("ausgabe").innerHTML = ergebnis;//ersetzt das Feld ausgabe in der HTML Datei mit dem Ergebnis(Notendurchschnitt)


if (ergebnis <=5)
    {
        document.getElementById("ausgabe").style.color = "crimson"; //färbt Durchschnitt rot, wenn er unter 5 Punkten ist
    }

    if (ergebnis >5 && ergebnis <12.5){
        document.getElementById("ausgabe").style.color = "orange" // färbt Durchschnitt orange, wenn er über 5 und unter 12.5 Punkten ist
    }

    if (ergebnis >12.5){
        document.getElementById("ausgabe").style.color = "green"// färbt Durchschnitt grün, wenn er über 12.5 ist
    }



}

function punktePruefen(punkte) { //Prüft eingetragen Noten ob es eine Zahl ist oder nicht und ob sie mögliche Notenpunkte sind
    if(isNaN(punkte))
    {
        console.log(punkte + "ist keine Zahl!")                          // gibt Fehlermeldung in der Konsole(F12) aus
    }else if (punkte >15){                                               // da es keine Notenpunkte gibt die >15 sind
            console.log(punkte + "sind keine möglichen Notenpunkte!")    // gibt Fehlermeldung in der Konsole(F12) aus
        }else if (punkte <0){                                            // da es keine Notenpunkte <0 gibt
                console.log(punkte + "sind keine möglichen Notenpunkte!")// gibt Fehlermeldung in der Konsole(F12) aus
            }else
            {
                summe = summe + punkte;                //wenn mögliche Notenpunkte in den Textfeldern stehen rechnet der Computer sie zusammen
                anzahlNoten= anzahlNoten + 1;          //und berechnet die Anzahl der betrachteten Noten
            }
}

