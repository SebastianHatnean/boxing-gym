export const siteContent = {
  seo: {
    title: 'Suceava Boxing Club | Locul unde se nasc campionii',
    description:
      'Antrenamente de box pentru toate nivelurile in Suceava. Tehnica, conditie fizica, disciplina si o comunitate puternica. Programeaza o clasa de proba.',
  },
  brand: {
    name: 'Suceava Boxing Club',
    city: 'Suceava, Romania',
    tagline: 'Locul unde se nasc campionii',
    instagram: 'suceavaboxing.club',
    phone: '0751 968 937',
    email: 'contact@suceavaboxingclub.ro',
  },
  navigation: [
    { label: 'Acasa', href: '#home' },
    { label: 'Despre', href: '#about' },
    { label: 'Clase', href: '#classes' },
    { label: 'Antrenor', href: '#trainer' },
    { label: 'Testimoniale', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Box. Disciplina. Performanta.',
    title: 'ANTRENAMENT REAL PENTRU CORP PUTERNIC SI MENTAL DE CAMPION.',
    description:
      'De la primele lovituri pana la pregatirea pentru competitie, construim tehnica, conditie si incredere intr-un club unde fiecare progres se simte.',
    primaryCta: { label: 'Programeaza o clasa de proba', href: '#contact' },
    secondaryCta: { label: 'Descopera antrenamentele', href: '#classes' },
    floatingCard: {
      title: 'Sesiuni ghidate',
      description: 'Grupe pentru incepatori, juniori, fitness si performanta.',
    },
    image: {
      src: new URL('../assets/box-heero-section2.jpg', import.meta.url).href,
      alt: 'Sportiv intr-o sala de box moderna, pregatit pentru antrenament',
    },
  },
  stats: [
    { value: '120+', label: 'Sportivi activi in comunitate' },
    { value: '4', label: 'Grupe clare pentru nivel si obiectiv' },
    { value: '5 zile', label: 'Program saptamanal stabil' },
    { value: '1 scop', label: 'Rezultate vizibile prin disciplina' },
  ],
  about: {
    label: 'Despre club',
    title: 'Atmosfera intensa, antrenament atent si o comunitate care te ridica.',
    description:
      'Suceava Boxing Club combina boxul ca sport de performanta cu boxul ca instrument pentru conditie, slabire, disciplina si incredere. Ai parte de tehnica, lucru la sac, sparring controlat, pregatire fizica si un mediu in care esti impins corect, nu intimidat.',
    bullets: [
      'Antrenamente pentru copii, adolescenti si adulti.',
      'Box pentru fitness, tehnica si traseu competitional.',
      'Accent pe disciplina mentala, respect si progres masurabil.',
    ],
    image: {
      src: new URL('../assets/despre-club.jpg', import.meta.url).href,
      alt: 'Antrenament de grup in sala de box',
    },
    highlights: [
      { title: 'Tehnica', text: 'Fundamente solide, combinatie, deplasare, aparare.' },
      { title: 'Conditie', text: 'Explozie, rezistenta si mobilitate pentru rezultate reale.' },
      { title: 'Comunitate', text: 'Energie de echipa, evenimente, sparring si sustinere.' },
    ],
  },
  classes: [
    {
      title: 'Incepatori',
      level: 'Primii pasi',
      description:
        'Pozitie, garda, combinatii de baza si acomodare progresiva cu ritmul salii.',
    },
    {
      title: 'Youth Boxing',
      level: 'Copii si juniori',
      description:
        'Coordonare, disciplina, incredere si obiceiuri sanatoase intr-un cadru supravegheat.',
    },
    {
      title: 'Fitness Boxing',
      level: 'Ardere si tonifiere',
      description:
        'Antrenamente dinamice pentru slabire, conditie fizica si descarcare mentala.',
    },
    {
      title: 'Performance Boxing',
      level: 'Competitie',
      description:
        'Pregatire orientata spre sparring, strategie, ritm de meci si ambitie de performanta.',
    },
  ],
  schedule: [
    { days: 'Luni / Miercuri / Vineri', hours: '14:00 - 22:00' },
    { days: 'Marti / Joi', hours: '15:00 - 21:00' },
  ],
  trainer: {
    name: 'Antrenor principal',
    role: 'Coordonare tehnica si dezvoltare sportiva',
    bio: 'Profilul poate fi actualizat rapid din fisierul de continut. In versiunea initiala, pozitionam clubul ca un spatiu cu exigenta, atentie la tehnica si abordare prietenoasa pentru fiecare nivel.',
    achievements: [
      'Lucreaza cu incepatori, sportivi de fitness si boxeri orientati spre competitie.',
      'Construieste antrenamente axate pe progres real si disciplina consecventa.',
      'Poate fi extins imediat pentru mai multi antrenori fara refactorizare.',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=900&q=80',
      alt: 'Antrenor de box intr-o sala premium',
    },
  },
  testimonials: [
    {
      name: 'Andrei, 27',
      role: 'Fitness boxing',
      quote:
        'Am venit pentru conditie si am ramas pentru atmosfera. Antrenamentele sunt serioase, dar accesibile chiar daca incepi de la zero.',
    },
    {
      name: 'Ioana, 34',
      role: 'Clasa de seara',
      quote:
        'E locul unde chiar simti progresul. Mai multa energie, mai multa disciplina si o stare mentala mult mai buna dupa fiecare sedinta.',
    },
    {
      name: 'Mihai, 16',
      role: 'Youth & performance',
      quote:
        'Am castigat incredere in mine si am invatat sa lucrez cu disciplina. Se pune accent pe tehnica, nu doar pe intensitate.',
    },
  ],
  gallery: [
    {
      src: new URL('../assets/box1.jpg', import.meta.url).href,
      alt: 'Sportiv antrenandu-se la sac',
    },
    {
      src: new URL('../assets/box2.jpg', import.meta.url).href,
      alt: 'Echipament de box intr-o sala moderna',
    },
    {
      src: new URL('../assets/box3.jpg', import.meta.url).href,
      alt: 'Antrenament de forta si conditie pentru box',
    },
    {
      src: new URL('../assets/box4.jpg', import.meta.url).href,
      alt: 'Sportivi intr-o sesiune intensa de pregatire',
    },
  ],
  faqs: [
    {
      question: 'Pot veni daca nu am mai facut box?',
      answer:
        'Da. Exista grupe si ritm de lucru potrivite pentru incepatori, iar primele sedinte pun accent pe baza tehnica si adaptare.',
    },
    {
      question: 'Este potrivit si pentru copii sau adolescenti?',
      answer:
        'Da. Boxul pentru juniori este organizat cu accent pe coordonare, disciplina, respect si dezvoltare fizica sigura.',
    },
    {
      question: 'Am nevoie de echipament complet de la prima sedinta?',
      answer:
        'Nu neaparat. Pentru inceput sunt suficiente haine sport si incaltaminte confortabila. Manusile si echipamentul dedicat pot fi stabilite ulterior.',
    },
    {
      question: 'Cum programez o clasa de proba?',
      answer:
        'Ne poti scrie prin formular, pe Instagram sau ne poti suna direct. Confirmam rapid intervalul potrivit pentru tine.',
    },
  ],
  contact: {
    intro:
      'Spune-ne daca vrei conditie mai buna, primele lectii de box sau pregatire serioasa. Te ajutam sa intri in ritmul potrivit.',
    address:
      'Bulevardul Ana Ipătescu, nr. 3, Suceava, Romania, 720026',
    mapEmbed:
      'https://www.google.com/maps?q=Bulevardul%20Ana%20Ip%C4%83tescu%2C%20nr.%203%2C%20Suceava%2C%20Romania%2C%20720026&z=16&output=embed',
    socials: [
      { label: 'Instagram', href: 'https://www.instagram.com/suceavaboxing.club/' },
      { label: 'Telefon', href: 'tel:0751968937' },
      { label: 'WhatsApp', href: 'https://wa.me/40751968937' },
    ],
  },
}
