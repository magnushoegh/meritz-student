// Mock-data for freelance-/studenteropgaver.
// I en rigtig app ville dette komme fra et API, men her bruger vi en
// simpel hardcodet liste, så appen kan fungere uden en backend.
const opgaver = [
  {
    id: '1',
    titel: 'Frontend-udvikler til kampagnesite',
    virksomhed: 'NordicTech ApS',
    honorar: '6.000 kr.',
    deadline: '2026-10-01',
    beskrivelse:
      'Vi søger en studerende med erfaring i React til at bygge en landingsside ' +
      'til vores efterårskampagne. Opgaven omfatter implementering af design ' +
      'fra Figma samt integration med vores eksisterende API.',
  },
  {
    id: '2',
    titel: 'Regnskabsassistance for Q4',
    virksomhed: 'Havnegaard Revision',
    honorar: '3.500 kr.',
    deadline: '2026-11-15',
    beskrivelse:
      'Vi mangler en økonomistuderende til at hjælpe med afstemning af ' +
      'kontoudtog og forberedelse af materiale til årsregnskabet. Erfaring ' +
      'med Excel og bogføring er en fordel.',
  },
  {
    id: '3',
    titel: 'Sociale medier og content-plan',
    virksomhed: 'Bloom Studio',
    honorar: '2.500 kr.',
    deadline: '2026-09-30',
    beskrivelse:
      'Vi ønsker en 4-ugers content-plan til Instagram og LinkedIn, inklusiv ' +
      'tekstforslag og forslag til visuelt udtryk. God skriftlig formidling ' +
      'og forståelse for B2B-kommunikation er et krav.',
  },
  {
    id: '4',
    titel: 'Markedsanalyse af det nordiske marked',
    virksomhed: 'Kaptain Consulting',
    honorar: '5.000 kr.',
    deadline: '2026-10-20',
    beskrivelse:
      'Opgaven består i at udarbejde en kort markedsanalyse med fokus på ' +
      'konkurrentlandskabet i Danmark, Sverige og Norge. Afleveres som en ' +
      'skriftlig rapport på ca. 15 sider.',
  },
  {
    id: '5',
    titel: 'UX-review af mobilapp',
    virksomhed: 'Fintory',
    honorar: '3.500 kr.',
    deadline: '2026-10-10',
    beskrivelse:
      'Vi søger en studerende med interesse for UX til at gennemgå vores ' +
      'nuværende app og komme med konkrete forbedringsforslag til flowet ' +
      'ved oprettelse af bruger og betaling.',
  },
  {
    id: '6',
    titel: 'Oversættelse af produktkatalog',
    virksomhed: 'Nordisk Emballage A/S',
    honorar: '2.000 kr.',
    deadline: '2026-09-25',
    beskrivelse:
      'Vores produktkatalog på 40 sider skal oversættes fra dansk til ' +
      'engelsk. Vi lægger vægt på præcis og letforståelig fagsprogsbrug ' +
      'inden for emballageindustrien.',
  },
];

export default opgaver;
