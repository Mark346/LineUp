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

Wat dit doet: alleen ingelogde trainers die bij een team horen, kunnen dat team lezen of wijzigen. Spelers kunnen via de spelerslink alleen hun eigen antwoord insturen.

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

> De `apiKey` van Firebase is geen geheim wachtwoord; die mag in een openbare repo staan. De beveiliging zit in het inloggen en de regels van stap 3.

## 6. Inloggen aanzetten (Authentication)
1. Ga in het linkermenu naar **Security → Authentication** (soms **Build → Authentication**) en klik **Get started / Aan de slag**.
2. Tabblad **Sign-in method**:
   - Klik **Email/Password** → zet de eerste schakelaar (**Email/Password**) aan → **Save**. (De tweede, *Email link*, mag uit blijven.)
   - Klik **Add new provider → Google** → zet aan, kies bij *Support email* je eigen e-mailadres → **Save**.
3. Tabblad **Settings → Authorized domains** → **Add domain** → vul `mark346.github.io` in → **Add**.

## 7. In de app
1. Open de app → **Instellingen → Team → 👤 Account** → **Inloggen of account maken** (met Google of e-mail + wachtwoord).
2. Al je teams worden nu veilig online bewaard onder jouw account. Op een nieuwe telefoon log je in en staan ze er weer.
3. Rechtsboven in de kop zie je **☁️ ✓** als alles is opgeslagen.

## 8. Andere trainers
1. Ga naar het team → **Instellingen → Team → Samenwerken → Trainer uitnodigen** en stuur de link via WhatsApp.
2. De trainer opent de link, tikt **Meedoen** en logt één keer in. Een link werkt maar voor één persoon.
3. Onder **Gedeeld met** zie je wie meedoet. Met × verwijder je iemand; hij kan het team dan echt niet meer openen.
