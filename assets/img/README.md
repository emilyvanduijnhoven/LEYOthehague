# Foto's voor LEYO the Hague

De website wijst al naar de juiste bestandsnamen. Zolang een bestand
hier nog niet staat, toont de site automatisch een nette LEYO-groen
placeholder. Zodra je de foto's plaatst, verschijnen ze vanzelf —
verversen is genoeg, er hoeft niets in de code te veranderen.

## Zet deze 5 foto's in deze map (`assets/img/`)

Gebruik exact deze bestandsnamen (kleine letters, `.jpg`):

| Bestandsnaam   | Welke foto                                                                 |
|----------------|-----------------------------------------------------------------------------|
| `facade.jpg`   | De gevel van het gebouw aan de Medemblikstraat (bakstenen complex, straat) |
| `studio.jpg`   | De studio met bed + bureau bij het raam (uitzicht op het bakstenen blok)   |
| `kitchen.jpg`  | De keuken met aanrecht, doorkijk naar de woonkamer/studio                  |
| `living.jpg`   | De woonkamer-studio met bank, eettafel en doorkijk naar het bed            |
| `gym.jpg`      | De fitnessruimte met halters en toestellen                                  |

## Waar ze terugkomen

- `facade.jpg`  → hero-strip Omgeving, gallery "het gebouw", nieuwskaart
- `studio.jpg`  → hero op de homepage, gallery, aanbod- en woningzoeker-kaarten
- `kitchen.jpg` → gallery, kaarten, nieuws
- `living.jpg`  → gallery, feature-blokken, kaarten
- `gym.jpg`     → community hero-strip + feature-blok

## Meer foto's toevoegen?

Wil je later extra beelden onderscheiden (bv. een apart dakterras,
badkamer of slaapfoto), voeg dan een bestand toe en koppel het in
`assets/style.css` onder het kopje **IMAGE SYSTEM**. Daar staat per
klasse één regel, bijvoorbeeld:

```css
.img-rooftop {background-image:url('img/rooftop.jpg'), var(--ph);}
```

## Tips

- Liggend (landscape), minimaal ~1600 px breed voor de grote vlakken.
- JPG, geoptimaliseerd (< ~400 kB per foto) voor snelle laadtijd.
- Echte foto's van de woningen en het gebouw passen het best bij LEYO —
  iets concreter en minder "lifestyle" dan abstracte sfeerbeelden.
