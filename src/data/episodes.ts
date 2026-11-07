// Every Metal Mastication episode. Add new ones at the end of the list.
// youtubeId is the part after "watch?v=" in the YouTube link.
// date is the YouTube publish date (YYYY-MM-DD); seconds is the running time.

export const youtubeChannel = 'https://www.youtube.com/@Metal_Mastication';
export const subscribeUrl = `${youtubeChannel}?sub_confirmation=1`;

export interface EpisodePart {
  label: string;
  title: string;
  youtubeId: string;
  seconds: number;
}

export interface Episode {
  season: number;
  number: number;
  title: string;
  guests: string;
  band?: string;
  date: string;
  youtubeId: string;
  seconds: number;
  summary: string;
  description?: string;
  parts?: EpisodePart[];
}

export const episodes: Episode[] = [
  // ---------- Season 1 ----------
  {
    season: 1,
    number: 1,
    title: 'The Goodfellas Lasagna',
    guests: 'James Pulli',
    band: 'Impellitteri',
    date: '2024-03-25',
    youtubeId: '6nLrKg48lRs',
    seconds: 2319,
    summary:
      'The pilot. Metal Hall of Fame bassist James Pulli of Impellitteri makes lasagna with the sauce from the prison scene in Goodfellas.',
    description:
      "Where did a young James Pulli play bass without his mom's full knowledge? How did he land the gig in Chris Impellitteri's band? And most importantly, how does James get his cheese to stretch into strings when he cuts his lasagna?",
  },
  {
    season: 1,
    number: 2,
    title: 'Pit Master',
    guests: 'Shawn Duncan',
    band: 'L.A. Guns',
    date: '2024-03-25',
    youtubeId: 'zIpfnfvtDhw',
    seconds: 1818,
    summary: "L.A. Guns drummer Shawn Duncan, his backyard, and some awesome BBQ.",
    description:
      "How did Shawn get the coveted gig with L.A. Guns? What kind of books does he read? And did you know Shawn's dad wrote a song you've probably sung many times, or at least heard people sing?",
  },
  {
    season: 1,
    number: 3,
    title: 'Breasts of Fire',
    guests: 'Steve Unger',
    band: 'Metal Church',
    date: '2024-04-21',
    youtubeId: 'O5hpnZKyojw',
    seconds: 2832,
    summary: 'Metal Hall of Fame bassist Steve Unger of Metal Church has stories to tell. Does he ever!',
    description:
      'Steve talks about his passion for Elvis, his current projects and some great old stories, and even plays a bit for us while the bread is in the oven. If you can only watch one episode, this is the one to watch!',
  },
  {
    season: 1,
    number: 4,
    title: "Sean's Symphony of Salad",
    guests: 'Sean McNabb',
    band: 'Rhino Bucket',
    date: '2024-05-30',
    youtubeId: '74gl2va-Cb4',
    seconds: 1969,
    summary: 'Journeyman bassist Sean McNabb of Rhino Bucket is also a badass in the kitchen.',
    description:
      'He got to Hollywood with $250 in his pocket, two basses, three changes of clothes and a dream, then landed the gig with one of the most iconic heavy metal bands in Los Angeles. Later he got to work with John Entwistle. Hear this and much more.',
  },
  {
    season: 1,
    number: 5,
    title: 'Tater "Thrash" Hot Dish',
    guests: 'David Ellefson & Jeff Young',
    band: 'Kings of Thrash',
    date: '2024-06-12',
    youtubeId: 'XKVpVN2Vdns',
    seconds: 4256,
    summary:
      'Metal Hall of Famer David Ellefson and Jeff Young, pioneers of thrash now leading Kings of Thrash, make a very Minnesotan specialty: tater tot hot dish.',
    description:
      'David and Jeff talk about their early years, how they got into metal, the gear they use, and even how the album name So Far, So Good... So What! came about.',
  },
  {
    season: 1,
    number: 6,
    title: 'Swedish Street Tacos',
    guests: 'Bjorn Englen',
    band: 'Soul Sign',
    date: '2024-07-10',
    youtubeId: 'zCyXOyYBlpY',
    seconds: 2040,
    summary: 'Bassist Bjorn Englen of Soul Sign grills steak for street tacos with a Swedish twist.',
    description: 'Bjorn talks about his accent and why he chose the bass while the steak is on the grill.',
  },
  {
    season: 1,
    number: 7,
    title: "Mom's Rock 'N' Chili",
    guests: 'Michael Olivieri',
    band: 'Hail Mary',
    date: '2024-08-15',
    youtubeId: '7u3DjKc0uHs',
    seconds: 2557,
    summary: 'Michael Olivieri of Hail Mary makes a crazy chili.',
    description: "It's his mom's recipe: two kinds of sausage, six kinds of beans, and a big bag of Fritos.",
  },
  {
    season: 1,
    number: 8,
    title: "Drummer's Deli",
    guests: 'Mark Zonder',
    band: 'Warlord, A-Z Band, Fates Warning',
    date: '2024-09-07',
    youtubeId: 'fbtLegAULz4',
    seconds: 3926,
    summary: 'Drummer Mark Zonder of Warlord, A-Z Band and Fates Warning, in a three-part interview.',
    description:
      "On the menu: corned beef on rye with Jewish deli slaw and Dr. Brown's Black Cherry Soda, for an authentic Zonder childhood experience.",
    parts: [
      { label: 'Part 1', title: 'The Drummer Who Knew Too Much', youtubeId: 'fbtLegAULz4', seconds: 515 },
      { label: 'Part 2', title: 'The Metal Drummer Who Knew Too Much', youtubeId: 'VwMD-LNTgUs', seconds: 779 },
      { label: 'Part 3', title: 'Warlord and Corned Beef on Rye', youtubeId: 'aBLfZlHdsGM', seconds: 2632 },
    ],
  },
  {
    season: 1,
    number: 9,
    title: 'Taco Fueled Metal Mayhem Unleashed',
    guests: 'Siglos',
    date: '2025-06-17',
    youtubeId: 'wdhzI3j7WO8',
    seconds: 2283,
    summary:
      'The whole band is in the kitchen: Siglos, with two-time Grammy-nominated guitarist Sin Quirin (formerly of Ministry), vocalist Pedro Sanchez, guitarist Adrian Villanueva, bassist Juan Pina and drummer Iorden Mitev.',
    description:
      'On the menu: Mexican street tacos with homemade red and green salsas. Or gringo tacos, if you buy the wrong meat!',
  },
  {
    season: 1,
    number: 10,
    title: 'Brazilian Thunder in the Kitchen',
    guests: 'Julia Lage',
    band: 'Vixen',
    date: '2025-09-07',
    youtubeId: 'iT2zm55X8Z8',
    seconds: 4648,
    summary: 'Vixen bassist Julia Lage is a riot in the kitchen.',
    description: "Julia makes moqueca, a Brazilian fish stew with coconut milk, peppers and tomatoes. I'll have what she's having!",
  },

  {
    season: 1,
    number: 11,
    title: 'Rob Math',
    guests: 'Rob Math',
    band: 'Leatherwolf, Soul Sign',
    date: '2026-01-15',
    youtubeId: '-j8DUxJmy6Y',
    seconds: 2790,
    summary: "Rob Math talks music, life, and whatever comes up while the food's cooking.",
    description: 'No press tour energy, just real talk in a real space.',
  },

  {
    season: 1,
    number: 12,
    title: 'Keith St. John',
    guests: 'Keith St. John',
    band: 'Montrose',
    date: '2026-06-15',
    youtubeId: 'JBTOia4hd04',
    seconds: 3753,
    summary: 'Montrose vocalist Keith St. John prepares his Spicy Wild Salmon.',
    description:
      'He regales us with stories about Ronnie Montrose, touring the UK, hitting those high notes and dressing like a rock star.',
  },

  // ---------- Season 2 ----------
  {
    season: 2,
    number: 1,
    title: 'Graham Bonnet',
    guests: 'Graham Bonnet',
    band: 'Rainbow, Alcatrazz',
    date: '2026-09-24',
    youtubeId: 'pxd81BQmSCk',
    seconds: 4542,
    summary: 'Legendary Metal Hall of Fame vocalist Graham Bonnet talks Bee Gees, Ritchie Blackmore, and his decision to become a vegetarian.',
    description: 'Music, food, and unfiltered conversation.',
  },
];

/** Episodes grouped by season, newest season first. */
export function seasons() {
  const numbers = [...new Set(episodes.map((ep) => ep.season))].sort((a, b) => b - a);
  return numbers.map((season) => ({
    season,
    episodes: episodes.filter((ep) => ep.season === season).sort((a, b) => a.number - b.number),
  }));
}

/** The most recently published episode. */
export function latestEpisode() {
  return [...episodes].sort((a, b) => b.date.localeCompare(a.date))[0];
}

/** "38 min" or "1 hr 10 min" (whole minutes, like YouTube shows them) */
export function formatLength(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return hours ? `${hours} hr ${rest} min` : `${minutes} min`;
}

/** "Sep 2026" */
export function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}
