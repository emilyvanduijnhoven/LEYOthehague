# Foto's — LEYO the Hague

Deze map bevat de beelden van de site. Ze zijn geoptimaliseerd
(verkleind naar max 1920 px breed, JPG kwaliteit 82, progressive)
zodat de site snel laadt. De CSS koppelt elke `.img-*`-klasse aan
één bestand hieronder — zie `assets/style.css`, kopje **IMAGE SYSTEM**.

## Aanwezige beelden

| Bestand              | Inhoud                                   | Gebruikt op |
|----------------------|------------------------------------------|-------------|
| `facade.jpg`         | De gevel, Medemblikstraat 275            | Omgeving (hero), home (gallery), nieuws |
| `studio.jpg`         | Studio met bed + bureau (foto)           | Home (hero + gallery), aanbod, woningzoeker |
| `bedroom.jpg`        | Studio slaapkamer, breed (foto)          | Gallery, community, woningzoeker |
| `living.jpg`         | Woonkamer / eethoek (foto)               | Gallery, kaarten, nieuws |
| `living2.jpg`        | Woonkamer met balkondeuren (foto)        | Aanbod, woningzoeker |
| `kitchen.jpg`        | Keuken (foto)                            | Gallery, kaarten, nieuws |
| `bathroom.jpg`       | Badkamer (foto)                          | Beschikbaar (`.img-bathroom`) |
| `gym.jpg`            | Fitnessruimte (foto)                     | Community (feature), gallery |
| `rooftop.jpg`        | Dakterras (foto)                         | Community (hero) |
| `buurt.jpg`          | Straat in Leyenburg (foto, Pim Geerts)   | Omgeving (feature) |
| `render-bed.jpg`     | Slaapkamer (3D-render)                   | Reserve |
| `render-studio.jpg`  | Studio met uitzicht (3D-render)          | Reserve |
| `luchtfoto.jpg`      | Luchtfoto Den Haag                       | **Niet gebruikt — zie let op** |

## Let op

- **`luchtfoto.jpg`** heeft een zichtbaar **watermerk** (stockbureau).
  Ik heb 'm daarom nergens ingezet. Lever je een rechtenvrije versie aan,
  dan kan ik 'm bijvoorbeeld op Omgeving plaatsen.
- `buurt.jpg` was relatief laag in resolutie (768×400). Voor een groot
  vlak mag een scherpere versie mooier zijn.
- De twee `render-*` bestanden zijn 3D-renders i.p.v. foto's; bewust als
  reserve gehouden zodat de site op echte foto's leunt.

## Een foto vervangen of toevoegen

1. Zet je nieuwe foto in deze map (liefst liggend, ≥ ~1600 px breed).
2. Gebruik dezelfde bestandsnaam om te vervangen — klaar.
3. Voor een nieuwe categorie: voeg in `assets/style.css` onder
   **IMAGE SYSTEM** één regel toe, bijv.
   `.img-balkon {background-image:url('img/balkon.jpg'), var(--ph);}`.
