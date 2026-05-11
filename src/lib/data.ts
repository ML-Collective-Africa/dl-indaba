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
        affiliation: "ML Collective · University of Nigeria",
      },
      {
        name: "Ifihanagbara Olusheye",
        affiliation: "University of the Witwatersrand",
        image: "/assets/images/organizers/ifihan.jpg",
      },
      {
        name: "Honour-Jesus Bezaleel",
        affiliation: "ML Collective · Ekiti State University",
        image: "/assets/images/organizers/honour-jesus.jpg",
      },
    ],
  },
  {
    title: "Organizers",
    columns: 2,
    background: true,
    members: [
      { name: "Busayo Awobade", affiliation: "Intron Health" },
      { name: "Fatimo Adebanjo", affiliation: "ML Collective" },
    ],
  },
  {
    title: "Workshop chairs",
    columns: 3,
    members: [
      {
        name: "Steven Kolawole",
        affiliation: "Carnegie Mellon University · Amazon Bedrock",
      },
      { name: "Abraham Owodunni", affiliation: "Ohio State University" },
      { name: "Mardiyyah Oduwole", affiliation: "ML Collective" },
    ],
  },
  {
    title: "Advisors",
    columns: 2,
    background: true,
    members: [
      { name: "Rosanne Liu", affiliation: "Google DeepMind" },
      { name: "Jason Yosinski", affiliation: "OpenAI" },
    ],
  },
  {
    title: "Volunteers",
    columns: 3,
    members: [
      {
        name: "Ayodeji Adesegun",
        affiliation: "Independent Researcher",
        image: "/assets/images/organizers/ayodeji.jpg",
      },
      {
        name: "Iremide Oyelaja",
        affiliation: "Independent Researcher",
        image: "/assets/images/organizers/iremide.jpg",
      },
      {
        name: "Shiloh Oni",
        affiliation: "Independent Researcher",
        image: "/assets/images/organizers/shiloh.jpg",
      },
      {
        name: "Emmanuel Idoko",
        affiliation: "ML Collective · University of Lagos",
        image: "/assets/images/organizers/emmanuel.jpg",
      },
      {
        name: "Yusuf Olaniyi",
        affiliation: "Carnegie Mellon University, Africa",
        image: "/assets/images/organizers/yusuf.jpg",
      },
      {
        name: "Chialuka Onuoha",
        affiliation: "Independent Researcher",
        image: "/assets/images/organizers/chialuka.jpg",
      },
      {
        name: "Ibukun Oduntan",
        affiliation: "Independent Researcher",
        image: "/assets/images/organizers/ibukun.png",
      },
      {
        name: "Olamide Lawal",
        affiliation: "Independent Researcher",
        image: "/assets/images/organizers/olamide.jpg",
      },
      { name: "Kelechi Chibundu", affiliation: "ML Collective · FUNAAB" },
      { name: "Nunsi Shaki", affiliation: "\u2014" },
      {
        name: "Asama Temitope",
        affiliation: "Researcher · ML Collective",
      },
      { name: "Kayode Makinde", affiliation: "\u2014" },
    ],
  },
];

export const WORKSHOP_EVENT = {
  targetDate: new Date("2026-08-06T09:00:00+02:00"),
  format: "Forums & Dialogues",
  length: "90 minutes",
  venue: "DLI 2026",
  hostedBy: "ML Collective",
  output: "Open preprint",
};
