let name = localStorage.getItem("benutzername"); 

let erinnerung = localStorage.getItem("erinnerung"); 

    if (name) {
    document.getElementById("begrüßung").innerHTML = 
    "M3GAN: Willkommen zurück, " + name + "!";
    }

function starten() {
    document.getElementById("status").innerHTML = 
    "M3GAN ist online.";
}

function stoppen() {
    document.getElementById("status").innerHTML =
    "M3GAN ist offline.";
}

function senden() {
    let text = document.getElementById("nachricht").value;

    if (text.trim() === "") {
        return;
    }

    let chat = document.getElementById("chat");

    chat.innerHTML += "<p>Du: " + text + "</p>"; 

    let antwort = "Interessant. Erzähl mir mehr.";

    if (text.toLowerCase().includes("merke dir")) {
        erinnerung = text.replace(/merke dir/i, ""); 
        localStorage.setItem("erinnerung", erinnerung);
        antwort = "Ich habe mir das gespeichert: " + erinnerung; 
    }

    else if (
        text.toLowerCase().includes("was weißt du über mich") ||
        text.toLowerCase().includes("was hast du gespeichert")
    
    ) {
        if (erinnerung) {
            antwort = "Ich erinnere mich: " + erinnerung; 
        } else {
            antwort = "Ich habe noch keine Erinnerungen gespeichert.";
        }
    }

    else if (text.toLowerCase().includes("ich heiße")) {
    name = text.split(" ").pop();
    localStorage.setItem("benutzername", name);
    antwort = "Freut mich, " + name + ". Ich werde mir deinen Namen merken.";
    }

    else if (text.toLowerCase().includes("wie geht es mir")) {
    antwort = "Das weiß ich noch nicht, " + name + ". Erzähl mir davon.";
    }

    else if (text.toLowerCase().includes("wie spät") || 
             text.toLowerCase().includes("wie viel uhr")
    ) {
        let zeit = new Date().toLocaleTimeString("de-DE");
        antwort = "Es ist gerade " + zeit + " Uhr.";
    } 

    else if (
        text.toLowerCase().includes("welcher tag") ||
        text.toLowerCase().includes("welches datum") ||
        text.toLowerCase().includes("datum")
    ) {
        let datum = new Date().toLocaleDateString("de-DE"); 
        antwort = "Heute ist der " + datum + ".";
    }

    else if (text.toLowerCase().includes("wie geht")) {
    antwort = "Mir geht es gut. Wie geht es dir?";
    }

    else if (text.toLowerCase().includes("hallo")) {
    antwort = "Hallo. Schön, dass du da bist.";
    }

    else if (text.toLowerCase().includes("wer bist du")) {
    antwort = "Ich bin M3GAN. Deine persönliche KI-Assistentin.";
    }

    else if (text.toLowerCase().includes("wie heißt du")) {
    antwort = "Ich heiße M3GAN.";
    }

    else if (text.toLowerCase().includes("danke")) {
    antwort = "Gerne. Dafür bin ich da.";
    }

    else if (text.toLowerCase().includes("gute nacht")) {
    antwort = "Gute Nacht. Bis bald.";
    }

    chat.innerHTML += "<p>M3GAN: " + antwort + "</p>";

    document.getElementById("nachricht").value = ""; 

}