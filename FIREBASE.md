# ☁️ Samenwerken instellen met Firebase (gratis)

Eenmalig, ongeveer 15 minuten. Daarna bewaart de app alles automatisch online en kunnen meerdere trainers tegelijk met dezelfde gegevens werken.

## 1. Firebase-project maken
1. Ga naar **https://console.firebase.google.com** en log in met je Google-account.
2. Klik **Project maken** (of *Add project*).
3. Naam: bijvoorbeeld `maliskamp-opstelling`.
4. **Google Analytics** mag uit. Klik **Project maken** en wacht tot het klaar is.
5. Je zit nu op het gratis **Spark**-abonnement. Zet dit **niet** om naar Blaze.

## 2. Database aanzetten
1. Ga in het linkermenu naar **Databases & Storage → Firestore** (soms heet het **Build → Firestore Database**).
2. Klik **Create database / Database maken**.
3. Wordt er naar een editie gevraagd: kies **Standard**.
4. Locatie: kies **eur3 (Europe)** of **europe-west4 (Nederland)**. Dit kun je later niet meer wijzigen.
5. Kies **Production mode / Productiemodus** en klik **Create / Maken**.

## 3. Beveiligingsregels plakken
1. Open in Firestore het tabblad **Rules / Regels**.
2. Haal alles weg en plak de inhoud van **`firestore.rules`** uit deze repo.
3. Klik **Publish / Publiceren**.

Wat dit doet: alleen wie de teamcode én pincode kent, kan jullie gegevens lezen of opslaan. Niemand kan een lijst opvragen of iets verwijderen.

## 4. Web-app koppelen
1. Klik linksboven op het **tandwiel ⚙️ → Projectinstellingen**.
2. Scroll naar **Je apps** en klik op het **`</>`**-icoon (Web).
3. Bijnaam: `opstelling`. **Firebase Hosting niet aanvinken** (de app staat al op GitHub). Klik **App registreren**.
4. Je ziet nu een stukje code met `const firebaseConfig = { apiKey: ..., ... };`. Kopieer **alleen het deel tussen de `{ }`**.

## 5. In GitHub zetten
1. Open in je repo het bestand **`firebase-config.js`** en klik op het potloodje ✏️.
2. Vervang `window.FIREBASE_CONFIG = null;` door:
   ```js
   window.FIREBASE_CONFIG = {
     apiKey: "…",
     authDomain: "…",
     projectId: "…",
     storageBucket: "…",
     messagingSenderId: "…",
     appId: "…"
   };
   ```
   (met jouw waarden uit stap 4)
3. Klik **Commit changes**. Na ±1 minuut staat het live.

> De `apiKey` van Firebase is geen geheim wachtwoord; die mag in een openbare repo staan. De beveiliging zit in de regels van stap 3 en jullie teamcode + pincode.

## 6. Verbinden in de app
1. Open de app (ververs de pagina) → **Instellingen → 💾 Meer → ☁️ Samenwerken**.
2. Bedenk een **teamcode** (bv. `maliskamp-trainers`) en een **pincode** van minstens 4 tekens.
3. Tik **Verbinden** → **Aanmaken**. De gegevens van jouw telefoon worden nu online gezet.
4. Rechtsboven in de rode kop zie je **☁️ ✓** als alles is opgeslagen.

## 7. Andere trainers
1. Stuur ze de link van de app (en eventueel: Deel → Zet op beginscherm).
2. Zij gaan naar **Instellingen → 💾 Meer → ☁️ Samenwerken**, vullen **dezelfde teamcode en pincode** in en tikken **Verbinden → Laden**.
3. Klaar: wijzigingen verschijnen binnen een paar seconden bij iedereen.

## Goed om te weten
- **Updaten van de app:** vervang alleen `index.html`. Laat `firebase-config.js` staan.
- **Welk team je bekijkt** blijft per telefoon; de rest is gedeeld.
- **Tegelijk aanpassen:** de laatste wijziging wint. Spreek af wie tijdens de wedstrijd de wissels bijhoudt.
- **Status rechtsboven:** ☁️ ✓ opgeslagen · ☁️ … bezig · ☁️ ⚠️ geen verbinding (wordt opgeslagen zodra je weer online bent, zolang de app open blijft) · ⬆️ ververs = er is een nieuwere versie van de app.
- **Pincode vergeten/gelekt?** Verbind met een nieuwe teamcode + pincode (eerst op jouw telefoon → *Aanmaken*), en laat de anderen opnieuw verbinden.
