# Meritz Student

En simpel Expo/React Native-app til studerende, der vil finde og ansøge på
kortere freelance-/studenteropgaver hos virksomheder.

Appen har tre skærme:

- **Ledige opgaver** – en liste over alle opgaver, med et kort pr. opgave og en
  "Se detaljer"-knap.
- **Opgavedetaljer** – fuld information om en enkelt opgave samt en
  "Ansøg"-knap.
- **Mine ansøgninger** – en liste over de opgaver, man selv har ansøgt på.

Ansøgnings-status deles mellem skærmene via React Context, så en opgave, man
ansøger på i detalje-visningen, straks dukker op under "Mine ansøgninger".

## Kom i gang

```bash
npm install
npx expo start
```

Scan QR-koden med Expo Go-appen, eller tryk `a`/`i`/`w` i terminalen for at
åbne appen i hhv. Android-emulator, iOS-simulator eller browseren.

## Projektstruktur

```
App.js                          # Navigation (React Navigation) + Context-provider
data/opgaver.js                 # Mock-data for de 6 opgaver
context/AnsoegningerContext.js  # Delt state for hvilke opgaver der er ansøgt på
components/OpgaveKort.js        # Kort-komponent for én opgave
components/OpgaveListe.js       # Genbrugelig FlatList-komponent (bruges af begge lister)
screens/OpgaveListeScreen.js    # Skærm: alle opgaver
screens/OpgaveDetaljeScreen.js  # Skærm: detaljer + ansøg
screens/MineAnsoegningerScreen.js # Skærm: kun ansøgte opgaver
theme.js                        # Fælles farver/afstande
```

Demo video: https://youtube.com/shorts/L-h8R2XXkPo?feature=share 
