export interface NavItem {
  href: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/schedule", label: "Schedule" },
  { href: "/speakers", label: "Speakers" },
  { href: "/organizers", label: "Organizers" },
  { href: "/sponsors", label: "Sponsors" },
];

export interface Speaker {
  name: string;
  affiliation: string;
  image?: string;
  linkedin?: string;
  website?: string;
}

export const SPEAKERS: Speaker[] = [
  { name: "Chris Emezue", affiliation: "Lanfrica · Mila" },
  { name: "Jason Yosinski", affiliation: "OpenAI · ML Collective" },
  { name: "Rosanne Liu", affiliation: "Google DeepMind · ML Collective" },
  { name: "Jade Abbott", affiliation: "Lelapa AI" },
  { name: "Tobi Olatunji", affiliation: "Intron AI" },
  { name: "Benjamin Rosman", affiliation: "University of the Witwatersrand" },
];

export interface Person {
  name: string;
  affiliation: string;
  image?: string;
  linkedin?: string;
  website?: string;
}

export interface PersonGroup {
  title: string;
  members: Person[];
  columns?: 2 | 3;
  background?: boolean;
}

export const ORGANIZER_GROUPS: PersonGroup[] = [
  {
    title: "Lead organizers",
    columns: 3,
    members: [
      {
        name: "Chisom Chibuike",
        affiliation: "ML Collective · University of Cambridge",
        image: "/assets/images/organizers/chisom.png",
        website: "https://sites.google.com/view/chisom-chibuike",
      },
      {
        name: "Ifihanagbara Olusheye",
        affiliation: "ML Collective · University of the Witwatersrand",
        image: "/assets/images/organizers/ifihan.jpg",
        website: "https://ifihan.com/",
      },
      {
        name: "Honour-Jesus Bezaleel",
        affiliation: "ML Collective · Ekiti State University",
        image: "/assets/images/organizers/honour-jesus.jpg",
        linkedin: "https://www.linkedin.com/in/honour-jesus-bezaleel/",

      },
    ],
  },
  {
    title: "Organizers",
    columns: 2,
    background: true,
    members: [
      {
        name: "Busayo Awobade",
        affiliation: "Intron Health",
        image: "/assets/images/organizers/busayo.jpeg",
        website: "https://iambusayor.github.io",
      },
      {
        name: "Fatimo Adebanjo",
        affiliation: "ML Collective",
        image: "/assets/images/organizers/fatimo.jpeg",
        linkedin: "https://www.linkedin.com/in/fatimo-adebanjo/",
      },
    ],
  },
  {
    title: "Workshop chairs",
    columns: 3,
    members: [
      {
        name: "Steven Kolawole",
        affiliation: "Carnegie Mellon University · Amazon Bedrock",
        image: "/assets/images/organizers/steven.png",
        website: "https://stevenkolawole.github.io/"
      },
      {
        name: "Abraham Owodunni",
        affiliation: "Ohio State University",
        image: "/assets/images/organizers/abraham.jpg",
        website: "https://owos.github.io/",
      },
      {
        name: "Mardiyyah Oduwole",
        affiliation: "ML Collective",
        image: "/assets/images/organizers/mardiyyah.jpeg",
        website: "http://mardiyyahoduwole.com/"
      },
    ],
  },
  {
    title: "Advisors",
    columns: 2,
    background: true,
    members: [
      {
        name: "Rosanne Liu",
        affiliation: "Google DeepMind",
        image: "/assets/images/organizers/rosanne.jpg",
        website: "https://rosanneliu.com/"
      },
      {
        name: "Jason Yosinski",
        affiliation: "OpenAI",
        image: "/assets/images/organizers/jason.png",
        website: "https://yosinski.com/",
      },
    ],
  },
  {
    title: "Volunteers",
    columns: 3,
    members: [
      {
        name: "Asama Temitope",
        affiliation: "Researcher · ML Collective",
        image: "/assets/images/organizers/asama.jpg",
        linkedin: "https://www.linkedin.com/in/temitopeasama/"
      },
      {
        name: "Ayodeji Adesegun",
        affiliation: "Researcher · ML Collective",
        image: "/assets/images/organizers/ayodeji.jpg",
        website: "https://ayodeji.tech",
      },
      {
        name: "Chialuka Onuoha",
        affiliation: "Independent Researcher",
        image: "/assets/images/organizers/chialuka.jpg",
        linkedin: "https://www.linkedin.com/in/chialuka-prisca-mary-onuoha-630205229/"
      },
      {
        name: "Emmanuel Idoko",
        affiliation: "ML Collective · University of Lagos",
        image: "/assets/images/organizers/emmanuel.jpg",
        linkedin: "https://www.linkedin.com/in/emmanuelidoko/"
      },
      {
        name: "Ibukun Oduntan",
        affiliation: "Independent Researcher",
        image: "/assets/images/organizers/ibukun.png",
        linkedin: "https://www.linkedin.com/in/ibukun-d-oduntan/"
      },
      {
        name: "Iremide Oyelaja",
        affiliation: "Independent Researcher",
        image: "/assets/images/organizers/iremide.jpg",
        linkedin: "https://www.linkedin.com/in/oyelajairemide/"
      },
      {
        name: "Kayode Makinde",
        affiliation: "\u2014",
        image: "/assets/images/organizers/kayode.jpeg",
        linkedin: "https://www.linkedin.com/in/kayode-makinde-4b0b491ba/",
      },
      {
        name: "Kelechi Chibundu",
        affiliation: "ML Collective · FUNAAB",
        image: "/assets/images/organizers/kelechi.jpeg",
        linkedin: "https://www.linkedin.com/in/kelechichibundu/",
      },
      {
        name: "Nunsi Shaki",
        affiliation: "\u2014",
        image: "/assets/images/organizers/nunsi.jpeg",
        linkedin: "https://www.linkedin.com/in/nunsi-shiaki/"
      },
      {
        name: "Olamide Lawal",
        affiliation: "Independent Researcher",
        image: "/assets/images/organizers/olamide.jpg",
        linkedin: "https://www.linkedin.com/in/olamide--lawal/"
      },
      {
        name: "Shiloh Oni",
        affiliation: "Independent Researcher",
        image: "/assets/images/organizers/shiloh.jpg",
        linkedin: "https://www.linkedin.com/in/adebisi-oni-2a6aa83b8/"
      },
      {
        name: "Yusuf Olaniyi",
        affiliation: "Carnegie Mellon University, Africa",
        image: "/assets/images/organizers/yusuf.jpg",
        linkedin: "https://www.linkedin.com/in/yusuf-olaniyi/"
      },
    ],
  },
];

export const WORKSHOP_EVENT = {
  targetDate: new Date("2026-08-06T09:00:00+02:00"),
  format: "Forums & Dialogues",
  length: "90 minutes",
  venue: "DLI 2026",
  hostedBy: "ML Collective (Africa)",
  output: "Open Preprint",
};
