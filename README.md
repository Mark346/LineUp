# ⚽ Maliskamp · Opstelling Maker

Maak opstellingen met eerlijk verdeelde speeltijd voor meerdere teams (bijv. JO8 en JO15).

## Functies
- **Meerdere teams** (JO8, JO15, …), toevoegen en verwijderen bij *Instellingen → Teams*
- **Instellingen → Opstelling**: spelers in het veld (4–11), formatie (o.a. 1-1-3-1), wisselmomenten en speelduur
- **Instellingen → Spelers**: selectie per team/seizoen
- **Wedstrijdfases**: 📝 Voorbereiding → ▶️ Actief → 🏁 Na wedstrijd → ✅ Klaar
  - *Voorbereiding*: wie zijn er (+ invallers), zelf de opstelling per blok neerzetten door te slepen
  - *Actief*: wissels doorvoeren, minuten per speler live zien, iemand eruit halen (plek wordt opgevuld), rest eerlijk herverdelen, extra wissel
  - *Na wedstrijd*: eindstand en doelpuntenmakers invullen, opslaan als gespeeld
- **Seizoensstatistieken** (alleen gespeelde wedstrijden): speeltijd, doelpunten, topscorers
- Delen via WhatsApp, printen en back-up

## Op GitHub Pages zetten
1. Maak een nieuwe repository, bijv. `opstelling`.
2. Upload `index.html` (en deze README).
3. Ga naar **Settings → Pages**, kies *Deploy from a branch*, branch `main`, map `/ (root)`.
4. Na een minuutje staat de app op `https://<jouw-naam>.github.io/opstelling/`.
5. Op de iPhone: open in Safari → Deel → **Zet op beginscherm**.

## Samenwerken met meerdere trainers
Zie **FIREBASE.md** voor het (gratis) koppelen aan Firebase. Bestanden:
- `index.html` – de app (bij updates alleen dit bestand vervangen)
- `firebase-config.js` – jouw Firebase-gegevens (laten staan bij updates)
- `firestore.rules` – beveiligingsregels om in de Firebase-console te plakken

## Clublogo
Zet het Maliskamp-logo als **`logo.png`** in de repo (naast `index.html`). Het verschijnt dan vanzelf in de kop, midden op het veld en op de print.
Je kunt het logo ook in de app kiezen via **Instellingen → Clublogo**. Dat wordt alleen op dat apparaat bewaard.
