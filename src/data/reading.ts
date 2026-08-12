/**
 * Audiobook library, pulled from my Audible account and then re-grouped by
 * hand, because Audible's own series metadata is inconsistent — it splits
 * Harry Potter across two "series", labels the first Dune book #12, and has
 * no concept of a shared universe like the Cosmere.
 *
 * `grp` is the top-level shelf: a series, a shared universe, or an author I
 * own several unrelated books by. `sub` nests a sub-series inside a bigger
 * universe. Deliberately absent: Audible's finished flag and progress
 * percentage, which are wrong often enough not to be worth showing.
 */

export const GENRES = [
  'Sci-Fi',
  'Fantasy',
  'Fiction',
  'Non-Fiction',
  'Education',
  'Personal Development',
  'Biographies & Memoirs',
] as const

export type Genre = (typeof GENRES)[number]

/**
 * `series` and `author` shelves are facts about the books. `theme` shelves are
 * my own curation over everything that isn't part of either.
 */
export type ShelfKind = 'series' | 'author' | 'theme'

/** One line per shelf, shown under its title. */
export const SHELF_BLURBS: Record<string, string> = {
  'Andy Weir': 'Engineering problems dressed as novels: stranded people, hostile vacuum, and protagonists who solve their way out with arithmetic and improvisation.',
  'Big History & Science': 'Deep time, ice, physics and the machinery of the state — the long-view books, from the Big Bang to the Constitution.',
  'Blake Crouch': 'High-concept thrillers where one piece of physics gets loose and dismantles an ordinary man\'s life at speed.',
  'Brandon Sanderson': 'Sanderson outside the Cosmere: a London necromancy series opener, a short-fiction collection, and a comic novel about mail-order parallel Englands.',
  'Brené Brown': 'Research on shame, vulnerability and belonging, converted into vocabulary and practices for leaders and everyone else.',
  'Business, Design & Decisions': 'How things get built, chosen and sold — design, incentives, startups, and the quiet mechanics behind decisions people think they make freely.',
  'Dungeon Crawler Carl': 'Earth is demolished to build a galactic dungeon game show; a man and his ex\'s show cat descend floor by floor.',
  'Focus & Performance': 'Three attempts at the same problem: doing less, measuring progress honestly, and resting hard enough to keep going.',
  'Harry Potter': 'Seven school years at a British wizarding boarding school, following one orphan from his admission letter to open war with a dark wizard.',
  'John Green': 'Novels about clever teenagers and essays about everything else, both built on close attention to small things.',
  'John Scalzi': 'Fast, funny science fiction that takes an absurd premise seriously and works out exactly what would follow.',
  'Kim Stanley Robinson': 'Long, technical novels about settling other worlds and the politics that arrive right behind the engineers.',
  'Leading & Working With People': 'Six takes on the hardest part of any job — telling people the truth and getting them to move together.',
  'Literary & General Fiction': 'Novels held together by voice rather than plot machinery — postwar road trips, wars, satire, and one teenage detective who wandered in.',
  'Middle-earth': 'Tolkien\'s invented world: the Ring quest in three volumes, plus the mythology and Second Age histories assembled by his editors.',
  'Mind & Meaning': 'Trauma, attachment, ego and creative work — books about what runs underneath behaviour, from clinicians, monks and a record producer.',
  'Modern Science Fiction': 'Newer science fiction where the machinery is only the setting and the argument is about loyalty, loneliness and who counts as human.',
  'Mountains & Makers': 'Climbers, engineers and one physicist working at the edge of what was possible, and unusually plain about the doing of it.',
  'Red Rising Saga': 'A miner from beneath the surface of Mars is remade to infiltrate the ruling caste that keeps his people underground.',
  'Science Fiction Classics': 'Older science fiction that later writers keep answering — gender, censorship, ecology, empire, and one nineteenth-century submarine.',
  'Shades of Magic': 'Four parallel Londons, one door between them, and the last men alive who can carry anything across.',
  'Silo': 'Generations live inside a buried silo where asking to go outside is a capital offence.',
  'Standalone Fantasy': 'Fantasy that finishes in one volume — heist magic, a stolen library, an aging pirate, and a squad of armed animals.',
  'The Cosmere': 'Sanderson\'s shared universe: separate worlds with their own magic systems, linked by recurring characters and a slow-building story that spans all of them.',
  'The Dark Tower': 'A gunslinger crosses a decayed world chasing the man in black, and beyond him a tower holding everything together.',
  'The Expanse': 'The solar system colonised, Earth, Mars and the Belt at each other\'s throats, and something older interfering.',
  'The Feynman Lectures on Physics': 'Recordings of Feynman teaching Caltech undergraduates in the early 1960s, remastered and regrouped by subject.',
  'The Inheritance Cycle': 'A farm boy finds a dragon egg and becomes the empire\'s central problem, across four volumes and a coda.',
  'The Kingkiller Chronicle': 'An innkeeper in hiding tells a chronicler the true version of how he became a legend.',
  'The Wheel of Time': 'Village kids leave home under an Aes Sedai\'s protection and get swept into a prophecy about the world ending.',
  'The Witcher': 'Short stories and novels about a mutant monster hunter, the child he is fated to protect, and a continent at war.',
}

export interface Book {
  /** title */ t: string
  /** author */ a: string
  /** narrator */ n: string
  /** genre */ g: Genre
  /** cover asset id */ c: string
  /** top-level shelf */ grp: string
  /** how the shelf was formed */ kind: ShelfKind
  /** one-line summary, shown when the cover is clicked */ d?: string
  /** sub-series within the shelf */ sub?: string
  /** sub-series position within the shelf */ so?: number
  /** position within the series */ o?: number
}

export const BOOKS: Book[] = [
  { t: 'Morning Star: Book III of the Red Rising Trilogy', a: 'Pierce Brown', n: 'Tim Gerard Reynolds', g: 'Sci-Fi', c: '41uGVHtH2pL', grp: 'Red Rising Saga', kind: 'series', d: 'The rebellion comes into the open, and Darrow has to hold together allies who want incompatible versions of victory.', o: 3 },
  { t: 'Klara and the Sun: A Novel', a: 'Kazuo Ishiguro', n: 'Sura Siu', g: 'Sci-Fi', c: '41cpC-UIqOL', grp: 'Modern Science Fiction', kind: 'theme', d: 'Klara, a solar-powered Artificial Friend, is bought as a companion for a sick girl and takes the sun literally.' },
  { t: 'Golden Son: Book II of the Red Rising Trilogy', a: 'Pierce Brown', n: 'Tim Gerard Reynolds', g: 'Sci-Fi', c: '514G5+-hXEL', grp: 'Red Rising Saga', kind: 'series', d: 'Established among the Golds, Darrow plays the aristocracy\'s wars against each other while the cost of the deception mounts.', o: 2 },
  { t: 'Songs of the Dead', a: 'Brandon Sanderson, Peter Orullian', n: 'Luke Daniels', g: 'Fantasy', c: '51hOM-HVS5L', grp: 'Brandon Sanderson', kind: 'author', d: 'A London musician is murdered, wakes up alive, and finds the city\'s buried historical eras and their necromancers sliding into civil war.' },
  { t: 'Who Is Government?: The Untold Story of Public Service', a: 'Michael Lewis - editor', n: 'Michael Lewis, Sarah Vowell, John Lanchester, Geraldine Brooks, Casey Cep, Dave Eggers, W. Kamau Bell', g: 'Non-Fiction', c: '418VwSCLn6L', grp: 'Big History & Science', kind: 'theme', d: 'Eight essays profiling career civil servants: a mine-safety researcher, an IRS investigator, the manager who fixed the national cemeteries.' },
  { t: 'Alone on the Wall (Expanded Edition)', a: 'Alex Honnold, David Roberts', n: 'Andrew Eiden, Will Damron', g: 'Biographies & Memoirs', c: '61ayC6BazYL', grp: 'Mountains & Makers', kind: 'theme', d: 'Honnold on the free solos leading to El Capitan — Half Dome, Moonlight Buttress, Sendero Luminoso — told largely without drama.' },
  { t: 'Royal Robbins: The American Climber', a: 'David Smart', n: 'Brian P. Craig', g: 'Biographies & Memoirs', c: '511ldJMkW5L', grp: 'Mountains & Makers', kind: 'theme', d: 'The Yosemite big-wall pioneer who argued for clean climbing, feuded with Warren Harding, and later sold outdoor clothing under his name.' },
  { t: 'The Left Hand of Darkness', a: 'Ursula K. Le Guin, Charlie Jane Anders - afterword', n: 'Alyssa Bresnahan, Michael Crouch', g: 'Sci-Fi', c: '41wI5K1EI7L', grp: 'Science Fiction Classics', kind: 'theme', d: 'An envoy on an ice-bound world whose people have no fixed sex, and the exiled politician who crosses a glacier with him.' },
  { t: 'Old Man\'s War', a: 'John Scalzi', n: 'William Dufris', g: 'Sci-Fi', c: '5101IFXo3+L', grp: 'John Scalzi', kind: 'author', d: 'On his seventy-fifth birthday a widower enlists in the Colonial Defense Forces, which recruit only the elderly and never explain why.' },
  { t: 'A Parade of Horribles: Dungeon Crawler Carl, Book 8', a: 'Matt Dinniman', n: 'Jeff Hays', g: 'Sci-Fi', c: '51QkyISCzbL', grp: 'Dungeon Crawler Carl', kind: 'series', d: 'Vehicle races on the tenth floor, glitches spreading through the system, and an eleventh floor even the showrunners can\'t explain.', o: 8 },
  { t: 'An Abundance of Katherines', a: 'John Green', n: 'Jeff Woodman', g: 'Fiction', c: '414-t39o46L', grp: 'John Green', kind: 'author', d: 'A washed-up child prodigy, dumped for the nineteenth time by a girl of the same name, drives to Tennessee to build a theorem.' },
  { t: 'When the Moon Hits Your Eye', a: 'John Scalzi', n: 'Wil Wheaton', g: 'Sci-Fi', c: '51zdS5z+NHL', grp: 'John Scalzi', kind: 'author', d: 'Earth\'s satellite turns to cheese, and astronomers, cheesemongers, funeral directors and billionaires each work out what that means for them.' },
  { t: 'The Lincoln Highway: A Read with Jenna Pick (A Novel)', a: 'Amor Towles', n: 'Edoardo Ballerini, Marin Ireland, Dion Graham', g: 'Fiction', c: '51p-PyhyqTL', grp: 'Literary & General Fiction', kind: 'theme', d: '1954: Emmett leaves a Nebraska work farm meaning to drive west, and two escapees redirect him toward New York.' },
  { t: 'Ends of the Earth: Journeys to the Polar Regions in Search of Life, the Cosmos, and Our Future', a: 'Neil Shubin', n: 'Fred Berman', g: 'Non-Fiction', c: '41PRxQbw--L', grp: 'Big History & Science', kind: 'theme', d: 'Shubin\'s trips to the Arctic and Antarctic, and what the ice records about deep time, evolution, cosmic dust and warming.' },
  { t: 'Elder Race', a: 'Adrian Tchaikovsky', n: 'John Lee', g: 'Sci-Fi', c: '51GlKPlw0SL', grp: 'Modern Science Fiction', kind: 'theme', d: 'A queen\'s fourth daughter summons the sorcerer in the tower to fight a demon. He is a stranded Earth anthropologist.' },
  { t: 'Tomorrow, and Tomorrow, and Tomorrow: A Novel', a: 'Gabrielle Zevin', n: 'Jennifer Kim, Julian Cihi', g: 'Fiction', c: '615ZWwoPBRL', grp: 'Literary & General Fiction', kind: 'theme', d: 'Sam and Sadie build video games together across thirty years, and the collaboration survives more than the friendship does.' },
  { t: 'Red Rising', a: 'Pierce Brown', n: 'Tim Gerard Reynolds', g: 'Sci-Fi', c: '51IM+e-toYL', grp: 'Red Rising Saga', kind: 'series', d: 'A miner beneath the surface of Mars learns his labour is a lie, and is surgically remade to pass as his rulers.', o: 1 },
  { t: 'The Creative Act: A Way of Being', a: 'Rick Rubin', n: 'Rick Rubin', g: 'Personal Development', c: '51l+1wW-S5L', grp: 'Mind & Meaning', kind: 'theme', d: 'Rubin on creativity as a way of living rather than a job: attention, taste, and getting out of the work\'s way.' },
  { t: 'Tailored Realities', a: 'Brandon Sanderson', n: 'André Santana, Avi Roque, Dion Graham, Dylan Reilly Fitzpatrick, Imani Jade Powers, January LaVoy, MacLeod Andrews, Michael Kramer, Ray Porter, Shahjehan Khan, Stephanie Németh-Parker', g: 'Sci-Fi', c: '517CPujS5TL', grp: 'Brandon Sanderson', kind: 'author', d: 'Ten science fiction and fantasy shorts from outside the Cosmere, including the new novella Moment Zero, with author\'s notes on each.' },
  { t: 'Dark Matter: A Novel', a: 'Blake Crouch', n: 'Jon Lindstrom', g: 'Sci-Fi', c: '51K8ZKzDjFL', grp: 'Blake Crouch', kind: 'author', d: 'A physics professor is abducted, wakes into a life that isn\'t his, and has to work out whose it is.' },
  { t: 'This Inevitable Ruin: Dungeon Crawler Carl, Book 7', a: 'Matt Dinniman', n: 'Jeff Hays, Travis Baldree', g: 'Sci-Fi', c: '51rtjss07uL', grp: 'Dungeon Crawler Carl', kind: 'series', d: 'Faction Wars: nine armies led by rich aliens fight for one castle, and the dungeon\'s disposable NPCs field an army of their own.', o: 7 },
  { t: 'The Eye of the Bedlam Bride: Dungeon Crawler Carl, Book 6', a: 'Matt Dinniman', n: 'Jeff Hays, Patrick Warburton, Travis Baldree, Annie Ellicott', g: 'Sci-Fi', c: '51qfZAq2J4L', grp: 'Dungeon Crawler Carl', kind: 'series', d: 'The eighth floor scatters the survivors among forgotten gods, an old grudge between celebrities, and an AI system coming apart at the seams.', o: 6 },
  { t: 'The Butcher\'s Masquerade: Dungeon Crawler Carl, Book 5', a: 'Matt Dinniman', n: 'Jeff Hays', g: 'Sci-Fi', c: '51kOQeaXbAL', grp: 'Dungeon Crawler Carl', kind: 'series', d: 'On the jungle Hunting Grounds, wealthy aliens buy the right to hunt crawlers for sport, and the crawlers start organizing into guilds.', o: 5 },
  { t: 'The Gate of the Feral Gods: Dungeon Crawler Carl, Book 4', a: 'Matt Dinniman', n: 'Jeff Hays', g: 'Sci-Fi', c: '51rmyTTWPsL', grp: 'Dungeon Crawler Carl', kind: 'series', d: 'The floor splits into sealed bubbles—a floating gnome citadel, a haunted crypt—around a legendary quest to open something meant to stay shut.', o: 4 },
  { t: 'The Dungeon Anarchist\'s Cookbook: Dungeon Crawler Carl, Book 3', a: 'Matt Dinniman', n: 'Jeff Hays, The Critical Drinker', g: 'Sci-Fi', c: '518nfG1FaYL', grp: 'Dungeon Crawler Carl', kind: 'series', d: 'An impossible subway system where the trains never stop and up is down, plus a manual for people who prefer sabotage.', o: 3 },
  { t: 'Carl\'s Doomsday Scenario: Dungeon Crawler Carl, Book 2', a: 'Matt Dinniman', n: 'Jeff Hays', g: 'Sci-Fi', c: '51e1PKKdv8L', grp: 'Dungeon Crawler Carl', kind: 'series', d: 'Race and class selection, a former crawler hired as manager, and a live broadcast that turns Carl into a marketable anarchist.', o: 2 },
  { t: 'Dungeon Crawler Carl: A LitRPG/Gamelit Adventure', a: 'Matt Dinniman', n: 'Jeff Hays', g: 'Sci-Fi', c: '51HIZdnqASL', grp: 'Dungeon Crawler Carl', kind: 'series', d: 'Aliens demolish Earth\'s surface. Carl enters the dungeon in boxers and boots with his ex-girlfriend\'s prizewinning cat and a galactic audience watching.', o: 1 },
  { t: 'We Are Legion (We Are Bob): Bobiverse, Book 1', a: 'Dennis E. Taylor', n: 'Ray Porter', g: 'Sci-Fi', c: '51yMirAE25L', grp: 'Modern Science Fiction', kind: 'theme', d: 'Bob dies, wakes a century later as software running a von Neumann probe, and copies himself across the galaxy.' },
  { t: 'Recursion: A Novel', a: 'Blake Crouch', n: 'Jon Lindstrom, Abby Craden', g: 'Sci-Fi', c: '41kTCl6OwHL', grp: 'Blake Crouch', kind: 'author', d: 'A neuroscientist builds a chair that preserves memories, and people start remembering lives they never lived.' },
  { t: 'We the People: A History of the U.S. Constitution', a: 'Jill Lepore', n: 'Jill Lepore', g: 'Non-Fiction', c: '41QNXWmrilL', grp: 'Big History & Science', kind: 'theme', d: 'Lepore argues the framers built the Constitution to be amended, and tracks two centuries of Americans who tried.' },
  { t: 'Foundryside: A Novel', a: 'Robert Jackson Bennett', n: 'Tara Sands', g: 'Fantasy', c: '51Ak3oMiskL', grp: 'Standalone Fantasy', kind: 'theme', d: 'A thief in a merchant city steals a key that talks, in a world where objects are argued into breaking physics.' },
  { t: 'The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma', a: 'Bessel van der Kolk M.D.', n: 'Sean Pratt', g: 'Personal Development', c: '41ubqX+ZoAL', grp: 'Mind & Meaning', kind: 'theme', d: 'Van der Kolk argues trauma lodges in the body and nervous system, and surveys EMDR, yoga, theatre and neurofeedback as treatment.' },
  { t: 'The Library at Mount Char', a: 'Scott Hawkins', n: 'Hillary Huber', g: 'Fantasy', c: '61q4UbjS4JL', grp: 'Standalone Fantasy', kind: 'theme', d: 'Twelve children were raised by a man called Father to master separate catalogues of impossible knowledge. He has now gone missing.' },
  { t: 'Isles of the Emberdark: A Cosmere Novel Secret Projects, Book 5', a: 'Brandon Sanderson', n: 'Kaleo Griffith, Jennifer Jill Araya', g: 'Fantasy', c: '61cDYHWgzBL', grp: 'The Cosmere', kind: 'series', d: 'An island trapper and his bonded birds sail beyond a portal into the dark between worlds, pursued by star-faring powers who want his people\'s Aviar.', sub: 'Secret Projects', so: 4, o: 5 },
  { t: 'The Dragon Reborn: Book Three of The Wheel of Time', a: 'Robert Jordan', n: 'Kate Reading, Michael Kramer', g: 'Fantasy', c: '51mcAFVS4fL', grp: 'The Wheel of Time', kind: 'series', d: 'Separated companions converge on a fortress holding a sword no one can touch, while the prophecy gets harder to deny.', o: 3 },
  { t: 'Attached: The New Science of Adult Attachment and How It Can Help You Find—and Keep—Love', a: 'Amir Levine, Rachel Heller', n: 'Robert Petkoff', g: 'Personal Development', c: '41vXXIvlKxL', grp: 'Mind & Meaning', kind: 'theme', d: 'Anxious, avoidant and secure attachment styles applied to adult romance, with the claim that mismatched pairs reliably produce the same fights.' },
  { t: 'The Great Hunt: Book Two of The Wheel Of Time', a: 'Robert Jordan', n: 'Kate Reading, Michael Kramer', g: 'Fantasy', c: '51KfIGoTucL', grp: 'The Wheel of Time', kind: 'series', d: 'A stolen horn that calls dead heroes back to battle, and a long chase by everyone who wants to blow it.', o: 2 },
  { t: 'New Spring: The Wheel of Time Prequel', a: 'Robert Jordan', n: 'Kate Reading, Michael Kramer', g: 'Fantasy', c: '51I0mNibihL', grp: 'The Wheel of Time', kind: 'series', d: 'Twenty years earlier, two Accepted are sent to find a child born on the slopes of Dragonmount as the Aiel War ends.', o: 0 },
  { t: 'The Eye of the World: Book One of The Wheel of Time', a: 'Robert Jordan', n: 'Kate Reading, Michael Kramer', g: 'Fantasy', c: '516PPlGGZML', grp: 'The Wheel of Time', kind: 'series', d: 'Three young men flee their village with a stranger in a silk cloak after creatures out of stories come looking for them.', o: 1 },
  { t: 'The Frugal Wizard\'s Handbook for Surviving Medieval England', a: 'Brandon Sanderson', n: 'Michael Kramer, Kate Reading', g: 'Sci-Fi', c: '512wAWtbBlL', grp: 'Brandon Sanderson', kind: 'author', d: 'A man wakes in medieval England with no memory, holding a self-help manual for tourists who buy their own parallel dimensions.' },
  { t: 'The Anthropocene Reviewed: Essays on a Human-Centered Planet', a: 'John Green', n: 'John Green', g: 'Non-Fiction', c: '51MU+MI1ztL', grp: 'John Green', kind: 'author', d: 'Essays rating pieces of the human-made world on a five-star scale: Diet Dr Pepper, sunsets, Halley\'s Comet, Canada geese.' },
  { t: 'Everything Is Tuberculosis: The History and Persistence of Our Deadliest Infection', a: 'John Green', n: 'John Green', g: 'Non-Fiction', c: '41XosBEWVlL', grp: 'John Green', kind: 'author', d: 'The history of the world\'s deadliest infection, told through one patient in Sierra Leone and the economics keeping it alive.' },
  { t: 'The Very Secret Society of Irregular Witches', a: 'Sangu Mandanna', n: 'Samara MacLaren', g: 'Fantasy', c: '514fBC7dC9L', grp: 'Standalone Fantasy', kind: 'theme', d: 'A lonely witch answers an advert to tutor three young witches at a rambling house, and meets its unimpressed librarian.' },
  { t: 'James: A Novel', a: 'Percival Everett', n: 'Dominic Hoffman', g: 'Fiction', c: '31pWkSAaXpL', grp: 'Literary & General Fiction', kind: 'theme', d: 'Huckleberry Finn retold by Jim, who has been concealing his literacy and his real voice from every white character.' },
  { t: 'Yumi and the Nightmare Painter: A Cosmere Novel', a: 'Brandon Sanderson', n: 'Kate Reading, Michael Kramer', g: 'Fantasy', c: '51hQngaas5L', grp: 'The Cosmere', kind: 'series', d: 'A ritual summoner and a man who paints away nightmares start swapping bodies between two worlds that were never supposed to touch.', sub: 'Secret Projects', so: 4, o: 3 },
  { t: 'White Sand: Volume Three [Dramatized Adaptation]', a: 'Brandon Sanderson', n: 'A Full Cast, Terence Aselford, Alexander Strain, Dawn Ursula, Yasmin Tuazon, Scott McCormick, Bradley Smith, Jason B. McIntosh, Holly Vagley, Nick DePinto, Joe Mallon, Kenyatta Rogers, Frank Britton, Ken Jackson, Steve Wannall', g: 'Fantasy', c: '51Kht8QxJjL', grp: 'The Cosmere', kind: 'series', d: 'The vote on the sand masters\' future arrives while the people behind the massacre make their last move. Dramatized conclusion of the trilogy.', sub: 'White Sand', so: 5, o: 3 },
  { t: 'White Sand: Volume Two [Dramatized Adaptation]', a: 'Brandon Sanderson', n: 'A Full Cast, Terence Aselford, Alexander Strain, Dawn Ursula, Bradley Smith, Yasmin Tuazon, Jason B. McIntosh, Scott McCormick, Frank Britton, Kenyatta Rogers, Mort Shelby, Rose Elizabeth Supan, Duyen Washington, Eric Messner, Joe Mallon', g: 'Fantasy', c: '61hWsH+Ud6L', grp: 'The Cosmere', kind: 'series', d: 'Kenton takes charge of what remains of the sand masters and is given a deadline to justify their existence to a hostile council.', sub: 'White Sand', so: 5, o: 2 },
  { t: 'White Sand: Volume One [Dramatized Adaptation]: White Sand, Book 1', a: 'Brandon Sanderson', n: 'A Full Cast, Terence Aselford, Alexander Strain, Dawn Ursula, Jason B. McIntosh, Frank Britton, Yasmin Tuazon, Holly Vagley, Peter Holdway, Paul Reisman, Kenyatta Rogers, Bradley Smith, Eric Messner, Duyen Washington, Jacob Yeh', g: 'Fantasy', c: '61ur94w8TWL', grp: 'The Cosmere', kind: 'series', d: 'Taldain\'s sand mages are massacred, leaving one of the weakest to prove the order still deserves to exist. Full-cast dramatized adaptation.', sub: 'White Sand', so: 5, o: 1 },
  { t: 'Arcanum Unbounded: The Cosmere Collection', a: 'Brandon Sanderson', n: 'Michael Kramer, Kate Reading', g: 'Fantasy', c: '51CMXJmtxqL', grp: 'The Cosmere', kind: 'series', d: 'Collected Cosmere short fiction with star charts and essays for each planetary system, explaining how the worlds and their magics connect.', sub: 'Standalones & collections', so: 7 },
  { t: 'The Sunlit Man: A Cosmere Novel', a: 'Brandon Sanderson', n: 'William DeMeritt', g: 'Fantasy', c: '51XcOWQmtEL', grp: 'The Cosmere', kind: 'series', d: 'A fugitive with no name lands on a planet where sunrise incinerates everything, and the locals keep their city moving to stay ahead of it.', sub: 'Secret Projects', so: 4, o: 4 },
  { t: 'Elantris', a: 'Brandon Sanderson', n: 'Jack Garrett', g: 'Fantasy', c: '61nY4EiXZ3L', grp: 'The Cosmere', kind: 'series', d: 'A prince is struck by the transformation that turned a shining city into a leper colony, days before his arranged political marriage.', sub: 'Elantris', so: 6, o: 1 },
  { t: 'Wind and Truth: Book Five of the Stormlight Archive', a: 'Brandon Sanderson', n: 'Kate Reading, Michael Kramer', g: 'Fantasy', c: '51bCtVYcLHL', grp: 'The Cosmere', kind: 'series', d: 'Ten days remain before a contest of champions. Oaths, gods, and the people who swore them all come due at once.', sub: 'The Stormlight Archive', so: 1, o: 5 },
  { t: 'The Women: A Novel', a: 'Kristin Hannah', n: 'Julia Whelan, Kristin Hannah', g: 'Fiction', c: '51ujOH49gJL', grp: 'Literary & General Fiction', kind: 'theme', d: 'Frankie McGrath enlists as an army nurse in Vietnam, then comes home to a country insisting no women served.' },
  { t: 'Wicked: The Life and Times of the Wicked Witch of the West', a: 'Gregory Maguire', n: 'John McDonough', g: 'Fantasy', c: '51lrEQqx4cL', grp: 'Standalone Fantasy', kind: 'theme', d: 'Elphaba\'s life before Dorothy: green at birth, radicalised at university, and cast as Oz\'s villain by politics she opposed.' },
  { t: 'Dawnshard: Stormlight Archive', a: 'Brandon Sanderson', n: 'Kate Reading, Michael Kramer', g: 'Fantasy', c: '51oUwcEc9UL', grp: 'The Cosmere', kind: 'series', d: 'A merchant confined to a wheelchair captains a voyage to a forbidden island that no previous expedition has returned from intact.', sub: 'The Stormlight Archive', so: 1, o: 3.5 },
  { t: 'Rhythm of War: Book Four of the Stormlight Archive', a: 'Brandon Sanderson', n: 'Kate Reading, Michael Kramer', g: 'Fantasy', c: '51+MGwgwVsL', grp: 'The Cosmere', kind: 'series', d: 'The tower fortress falls under occupation, and its captive scholar-queen and the enemy commander keep pursuing research neither side should be sharing.', sub: 'The Stormlight Archive', so: 1, o: 4 },
  { t: 'Edgedancer: Stormlight Archive', a: 'Brandon Sanderson', n: 'Kate Reading', g: 'Fantasy', c: '51xoSh3ZbOL', grp: 'The Cosmere', kind: 'series', d: 'A teenage runaway with an invisible companion and a habit of stealing follows the man hunting her into a city built inside a trench.', sub: 'The Stormlight Archive', so: 1, o: 2.5 },
  { t: 'Oathbringer: Book Three of the Stormlight Archive', a: 'Brandon Sanderson', n: 'Michael Kramer, Kate Reading', g: 'Fantasy', c: '51+YovOwdoL', grp: 'The Cosmere', kind: 'series', d: 'The storms have changed and a coalition of monarchs will not hold. Dalinar\'s own history, the parts he cannot remember, becomes the problem.', sub: 'The Stormlight Archive', so: 1, o: 3 },
  { t: 'Words of Radiance: Book Two of the Stormlight Archive', a: 'Brandon Sanderson', n: 'Michael Kramer, Kate Reading', g: 'Fantasy', c: '51DZfSH5qQL', grp: 'The Cosmere', kind: 'series', d: 'The war on the Shattered Plains turns toward the enemy\'s home while the assassin returns and a scholar races an approaching catastrophe.', sub: 'The Stormlight Archive', so: 1, o: 2 },
  { t: 'Good Girl, Bad Blood: The Sequel to A Good Girl\'s Guide to Murder', a: 'Holly Jackson', n: 'Bailey Carr, MacLeod Andrews, Donte Bonner, James Fouhey, Neil Hellegers, Cary Hite, Amy Landon, Raymond J. Lee, Keylor Leigh, Maggi-Meg Reed, Shezi Sardar', g: 'Fiction', c: '51cvoq+pmaL', grp: 'Literary & General Fiction', kind: 'theme', d: 'Pip swears off investigating, then restarts her podcast when a boy vanishes from a memorial and police call him a runaway.' },
  { t: 'The Adventures of Amina al-Sirafi: A Novel', a: 'Shannon Chakraborty', n: 'Lameece Issaq, Amin El Gamal', g: 'Fantasy', c: '61IySFWdiCL', grp: 'Standalone Fantasy', kind: 'theme', d: 'A retired pirate captain in the twelfth-century Indian Ocean takes one last commission to retrieve a kidnapped girl.' },
  { t: 'Beyond the Mountain', a: 'Steve House, Reinhold Messner - introduction', n: 'Steve House', g: 'Biographies & Memoirs', c: '61dr-KKmPgL', grp: 'Mountains & Makers', kind: 'theme', d: 'House on alpine-style ascents in Pakistan and Alaska, the partners he lost, and his refusal of fixed ropes and oxygen.' },
  { t: 'The Return of the King: Lord of the Rings, Book 3', a: 'J. R. R. Tolkien', n: 'Andy Serkis', g: 'Fantasy', c: '51KBy8XxMzL', grp: 'Middle-earth', kind: 'series', d: 'The war reaches Gondor\'s capital while two hobbits cross Mordor on foot toward the mountain where the ring was made.', o: 5 },
  { t: 'The Two Towers: Lord of the Rings, Book 2', a: 'J. R. R. Tolkien', n: 'Andy Serkis', g: 'Fantasy', c: '51EgIMxu00L', grp: 'Middle-earth', kind: 'series', d: 'The company is split. One pair carries the ring east through the marshes; the rest fight a wizard\'s war in Rohan.', o: 4 },
  { t: 'The Fall of Númenor: And Other Tales from the Second Age of Middle-Earth', a: 'J.R.R. Tolkien, Brian Sibley - editor', n: 'Samuel West', g: 'Fantasy', c: '51utbo9lq1L', grp: 'Middle-earth', kind: 'series', d: 'Tolkien\'s scattered Second Age writings arranged as one chronicle: the forging of the rings and the rise and drowning of an island kingdom.', o: 2 },
  { t: 'The Silmarillion', a: 'J. R. R. Tolkien, Christopher Tolkien - editor', n: 'Andy Serkis', g: 'Fantasy', c: '5167YEsQ6YL', grp: 'Middle-earth', kind: 'series', d: 'The mythology behind Middle-earth: creation, the making of three jewels, and the long ruinous war among elves to get them back.', o: 1 },
  { t: 'Tress of the Emerald Sea: A Cosmere Novel', a: 'Brandon Sanderson', n: 'Michael Kramer', g: 'Fantasy', c: '5197S28VyHL', grp: 'The Cosmere', kind: 'series', d: 'A girl who collects cups leaves her island to rescue the man she loves, crossing oceans of spores that kill on contact.', sub: 'Secret Projects', so: 4, o: 1 },
  { t: 'The Fellowship of the Ring: Lord of the Rings, Book 1', a: 'J. R. R. Tolkien', n: 'Andy Serkis', g: 'Fantasy', c: '51YHc7SK5HL', grp: 'Middle-earth', kind: 'series', d: 'A hobbit inherits a ring that has to be destroyed and leaves the Shire with eight companions on a journey across hostile country.', o: 3 },
  { t: 'The Three-Body Problem', a: 'Cixin Liu, Ken Liu - translator', n: 'Luke Daniels', g: 'Sci-Fi', c: '518UKlc1WKL', grp: 'Modern Science Fiction', kind: 'theme', d: 'A Cultural Revolution physicist answers a signal from a dying alien world; decades later, scientists start killing themselves.' },
  { t: 'Dark Tower II: The Drawing of the Three', a: 'Stephen King', n: 'Frank Muller', g: 'Fantasy', c: '51Ij7gHT5zL', grp: 'The Dark Tower', kind: 'series', d: 'Stranded on a beach and short two fingers, Roland finds doors opening onto 1980s New York and the people behind them.', o: 2 },
  { t: 'The Challenger Sale: Taking Control of the Customer Conversation', a: 'Matthew Dixon, Brent Adamson', n: 'Matthew Dixon, Brent Adamson', g: 'Personal Development', c: '41Zs-2qu8OL', grp: 'Leading & Working With People', kind: 'theme', d: 'Research on thousands of sales reps finding that the ones who teach, tailor and push back outsell the relationship builders.' },
  { t: 'The Friction Project: How Smart Leaders Make the Right Things Easier and the Wrong Things Harder', a: 'Robert I. Sutton, Huggy Rao', n: 'Sean Patrick Hopkins', g: 'Personal Development', c: '41AenJEJ6mL', grp: 'Leading & Working With People', kind: 'theme', d: 'Sutton and Rao on organisational drag: which meetings, approvals and rules to delete, and where friction should be added deliberately.' },
  { t: 'The Narrow Road Between Desires: Kingkiller Chronicle', a: 'Patrick Rothfuss', n: 'Nick Podehl, Patrick Rothfuss', g: 'Fantasy', c: '51bDKyreUJL', grp: 'The Kingkiller Chronicle', kind: 'series', d: 'Bast spends a day in Newarre trading favours with the village children, which proves more dangerous than it sounds.', o: 2.6 },
  { t: 'Murtagh: The World of Eragon', a: 'Christopher Paolini', n: 'Gerard Doyle, Christopher Paolini', g: 'Fantasy', c: '51zWyo6LeVL', grp: 'The Inheritance Cycle', kind: 'series', d: 'A year after the war, a rider and dragon nobody trusts travel in disguise, following rumours of a witch to a remote town.', o: 5 },
  { t: 'The Blade Itself', a: 'Joe Abercrombie', n: 'Steven Pacey', g: 'Fantasy', c: '61Wl40L+SXL', grp: 'Standalone Fantasy', kind: 'theme', d: 'A barbarian, a crippled torturer and a vain duellist are collected by a wizard with plans none of them like.' },
  { t: 'Shift: The Silo Saga, Book 2', a: 'Hugh Howey', n: 'Edoardo Ballerini', g: 'Sci-Fi', c: '411t1EmUMrL', grp: 'Silo', kind: 'series', d: 'How the silos were built and by whom, running from a Washington congressman\'s office to the men rotating through cryo below ground.', o: 2 },
  { t: 'Wool: The Silo Saga, Book 1', a: 'Hugh Howey', n: 'Edoardo Ballerini', g: 'Sci-Fi', c: '51wvy7jratL', grp: 'Silo', kind: 'series', d: 'A buried community where the one forbidden question is what lies outside, and a sheriff who asks it anyway.', o: 1 },
  { t: 'Crucial Conversations (Third Edition): Tools for Talking When Stakes Are High', a: 'Joseph Grenny, Kerry Patterson, Ron McMillan, Al Switzler, Emily Gregory', n: 'Emily Gregory, Joseph Grenny', g: 'Personal Development', c: '51t9JyigW+L', grp: 'Leading & Working With People', kind: 'theme', d: 'A method for high-stakes disagreements: keep the other person feeling safe, state the facts first, then your story.' },
  { t: 'The Emperor\'s Soul', a: 'Brandon Sanderson', n: 'Angela Lin', g: 'Fantasy', c: '511j6wWOFNL', grp: 'The Cosmere', kind: 'series', d: 'A forger facing execution gets a hundred days to rebuild a murdered emperor\'s soul using stamps that rewrite an object\'s history.', sub: 'Standalones & collections', so: 7 },
  { t: 'Living Untethered: Beyond the Human Predicament', a: 'Michael A. Singer', n: 'Michael A. Singer', g: 'Personal Development', c: '51J8O5-peDL', grp: 'Mind & Meaning', kind: 'theme', d: 'Singer\'s account of how the mind assembles experience from stored impressions, and what letting those impressions pass through instead would mean.' },
  { t: 'A New Earth: Awakening Your Life\'s Purpose', a: 'Eckhart Tolle', n: 'Eckhart Tolle', g: 'Personal Development', c: '41ctIrOMGUL', grp: 'Mind & Meaning', kind: 'theme', d: 'Tolle on the ego as a story the mind maintains, and the pain-body that feeds on conflict to sustain it.' },
  { t: 'The Builders', a: 'Daniel Polansky', n: 'Corey Gagne', g: 'Fantasy', c: '51g1lyJCftL', grp: 'Standalone Fantasy', kind: 'theme', d: 'A one-eyed mouse reassembles his old squad — stoat, badger, opossum, salamander — to settle a betrayal from a lost war.' },
  { t: 'The Lost Metal: A Mistborn Novel', a: 'Brandon Sanderson', n: 'Michael Kramer', g: 'Fantasy', c: '51i+goRkIqL', grp: 'The Cosmere', kind: 'series', d: 'Wax is a senator now, until a bomb, a foreign god\'s cult, and an old enemy\'s plans pull him back into the field.', sub: 'Mistborn — Wax & Wayne (Era 2)', so: 3, o: 4 },
  { t: 'The Gap and the Gain: The High Achievers\' Guide to Happiness, Confidence, and Success', a: 'Dan Sullivan, Benjamin Hardy', n: 'Dan Sullivan, Benjamin Hardy', g: 'Personal Development', c: '51nwcdYvuBL', grp: 'Focus & Performance', kind: 'theme', d: 'Sullivan and Hardy\'s fix for high achievers: measure backwards from where you started, not against a receding ideal.' },
  { t: 'Atlas of the Heart: Mapping Meaningful Connection and the Language of Human Experience', a: 'Brené Brown', n: 'Brené Brown', g: 'Personal Development', c: '512eLzUcx6L', grp: 'Brené Brown', kind: 'author', d: 'Eighty-seven emotions and experiences defined precisely, on the theory that you cannot navigate what you cannot name.' },
  { t: 'Get Out of Your Head: Stopping the Spiral of Toxic Thoughts', a: 'Jennie Allen', n: 'Jennie Allen', g: 'Personal Development', c: '41hBWSZ1oHL', grp: 'Mind & Meaning', kind: 'theme', d: 'Allen\'s Christian argument that spiralling thoughts can be interrupted by choosing what to dwell on, built around 2 Corinthians 10:5.' },
  { t: 'Dare to Lead: Brave Work. Tough Conversations. Whole Hearts.', a: 'Brené Brown', n: 'Brené Brown', g: 'Personal Development', c: '41jpUR12hQL', grp: 'Brené Brown', kind: 'author', d: 'Courage as a teachable skill set for managers: hard conversations, real feedback, trust, and admitting you don\'t know.' },
  { t: 'Big Feelings: How to Be Okay When Things Are Not Okay', a: 'Liz Fosslien, Mollie West Duffy', n: 'Liz Fosslien, Mollie West Duffy', g: 'Personal Development', c: '41xe-w0U8bL', grp: 'Mind & Meaning', kind: 'theme', d: 'Uncertainty, comparison, anger, burnout, perfectionism, despair and regret, handled one chapter each with research, charts and unsentimental advice.' },
  { t: 'The Personal MBA: Master the Art of Business', a: 'Josh Kaufman', n: 'Josh Kaufman', g: 'Non-Fiction', c: '51TpKdRgVbL', grp: 'Business, Design & Decisions', kind: 'theme', d: 'Kaufman\'s argument that business school is skippable, distilled into value creation, marketing, sales, delivery and finance as connected systems.' },
  { t: 'The Design of Everyday Things: Revised and Expanded Edition', a: 'Don Norman', n: 'Neil Hellegers', g: 'Non-Fiction', c: '413wHlnbCSL', grp: 'Business, Design & Decisions', kind: 'theme', d: 'Why doors get pushed when they should be pulled: affordances, signifiers, feedback and mapping, and the case for blaming design.' },
  { t: 'Rogues', a: 'George R. R. Martin, Gardner Dozois, Gillian Flynn, Neil Gaiman', n: 'George R. R. Martin, Gwendoline Christie, Roy Dotrice, Ron Donachie, W. Morgan Sheppard, Janis Ian, Molly Quinn, Rupert Degas, Iain Glen, Various', g: 'Fiction', c: '61Jq7u0l8GL', grp: 'Literary & General Fiction', kind: 'theme', d: 'Twenty-one stories about con artists, thieves and liars across genres, including Martin\'s account of the Targaryen prince Daemon.' },
  { t: 'Baptism of Fire: The Witcher, Book 3', a: 'Andrzej Sapkowski, David French - translator', n: 'Peter Kenny', g: 'Fantasy', c: '51wdRcGluKL', grp: 'The Witcher', kind: 'series', d: 'Recovering among the dryads of Brokilon, Geralt assembles an unlikely company and walks into a war zone to look for Ciri.', o: 3 },
  { t: 'The 9 Types of Leadership: Mastering the Art of People in the 21st Century Workplace', a: 'Beatrice Chestnut PhD', n: 'Dina Pearlman', g: 'Personal Development', c: '51ucKDdwY+L', grp: 'Leading & Working With People', kind: 'theme', d: 'The Enneagram applied to the workplace, mapping nine personality types to how people lead, avoid conflict and derail under pressure.' },
  { t: 'The Time of Contempt: The Witcher, Book 2', a: 'Andrzej Sapkowski, David French - translator', n: 'Peter Kenny', g: 'Fantasy', c: '4156tuBRBML', grp: 'The Witcher', kind: 'series', d: 'Ciri\'s education continues under Yennefer, and the mages\' conclave on Thanedd Island goes exactly as badly as expected.', o: 2 },
  { t: 'Blood of Elves', a: 'Andrzej Sapkowski, Danusia Stok - translator', n: 'Peter Kenny', g: 'Fantasy', c: '51mde09DauL', grp: 'The Witcher', kind: 'series', d: 'Ciri trains at the witchers\' keep and then with a sorceress, while everyone who wants her closes in.', o: 1 },
  { t: 'Sword of Destiny', a: 'Andrzej Sapkowski, David French - translator', n: 'Peter Kenny', g: 'Fantasy', c: '51DwLRWUWtL', grp: 'The Witcher', kind: 'series', d: 'More short stories, in which Geralt keeps running into a bard, a sorceress, and a child he never asked for.', o: 0.7 },
  { t: 'Essentialism: The Disciplined Pursuit of Less', a: 'Greg McKeown', n: 'Greg McKeown', g: 'Personal Development', c: '513RraOM6jL', grp: 'Focus & Performance', kind: 'theme', d: 'McKeown on the disciplined pursuit of less: fewer commitments, chosen deliberately, and the case for saying no as a system.' },
  { t: 'Randomize: Forward collection', a: 'Andy Weir', n: 'Janina Gavankar', g: 'Sci-Fi', c: '51GYTiZhzwL', grp: 'Andy Weir', kind: 'author', d: 'A casino installs a quantum computer to secure its keno draw, then hires the physicist most likely to break it.' },
  { t: 'Project Hail Mary', a: 'Andy Weir', n: 'Ray Porter', g: 'Sci-Fi', c: '51POf8gOyLL', grp: 'Andy Weir', kind: 'author', d: 'A man wakes on a spacecraft with amnesia, two dead crewmates, and a job that decides whether Earth survives.' },
  { t: 'Harry Potter and the Half-Blood Prince, Book 6', a: 'J.K. Rowling', n: 'Jim Dale', g: 'Fantasy', c: '51sImF7gqML', grp: 'Harry Potter', kind: 'series', d: 'Sixth year: Dumbledore walks Harry through memories of Voldemort\'s childhood while a secondhand potions textbook teaches him things it shouldn\'t.', o: 6 },
  { t: 'Harry Potter and the Deathly Hallows, Book 7', a: 'J.K. Rowling', n: 'Jim Dale', g: 'Fantasy', c: '61yMjtQzKcL', grp: 'Harry Potter', kind: 'series', d: 'No school year. Three teenagers camp across Britain hunting the objects keeping the dark lord alive while his people take the country.', o: 7 },
  { t: 'Harry Potter and the Order of the Phoenix, Book 5', a: 'J.K. Rowling', n: 'Jim Dale', g: 'Fantasy', c: '51KHVovUpGL', grp: 'Harry Potter', kind: 'series', d: 'Fifth year: the Ministry denies the dark lord\'s return and installs its own teacher, so the students learn to fight in secret.', o: 5 },
  { t: 'Harry Potter and the Goblet of Fire, Book 4', a: 'J.K. Rowling', n: 'Jim Dale', g: 'Fantasy', c: '61m99NmM4jL', grp: 'Harry Potter', kind: 'series', d: 'Fourth year: an international tournament of lethal tasks, and Harry\'s name comes out of the cup despite being years too young.', o: 4 },
  { t: 'Animal Farm', a: 'George Orwell', n: 'Ralph Cosham', g: 'Fiction', c: '51sqTPCkXWL', grp: 'Literary & General Fiction', kind: 'theme', d: 'Farm animals expel the farmer, then the pigs take over; Orwell\'s fable of the Russian Revolution ending in indistinguishable tyranny.' },
  { t: 'Harry Potter and the Prisoner of Azkaban, Book 3', a: 'J.K. Rowling', n: 'Jim Dale', g: 'Fantasy', c: '51O29wSqEsL', grp: 'Harry Potter', kind: 'series', d: 'Third year: an escaped prisoner is hunting Harry, soul-draining guards patrol the grounds, and the story of his parents\' betrayal gets complicated.', o: 3 },
  { t: 'Fahrenheit 451', a: 'Ray Bradbury', n: 'Tim Robbins', g: 'Sci-Fi', c: '510aIzH7XfL', grp: 'Science Fiction Classics', kind: 'theme', d: 'Montag burns books for a living until he starts keeping them, in a country that chose wall-sized television instead.' },
  { t: 'Nudge (Revised Edition): Improving Decisions About Health, Wealth, and Happiness [Expanded Edition]', a: 'Richard H. Thaler, Cass R. Sunstein', n: 'Sean Pratt', g: 'Non-Fiction', c: '51sxiYFLQwL', grp: 'Business, Design & Decisions', kind: 'theme', d: 'Choice architecture: defaults, framing and small design changes steer behaviour, which Thaler and Sunstein argue should be arranged for people\'s benefit.' },
  { t: 'Radical Candor: Fully Revised & Updated Edition: Be a Kick-Ass Boss Without Losing Your Humanity', a: 'Kim Scott', n: 'Teri Schnaubelt', g: 'Personal Development', c: '412O+gU9XZL', grp: 'Leading & Working With People', kind: 'theme', d: 'Scott\'s grid: care personally and challenge directly. The failure modes are ruinous empathy, obnoxious aggression and manipulative insincerity.' },
  { t: 'Guns, Germs and Steel: The Fate of Human Societies', a: 'Jared Diamond', n: 'Doug Ordunio', g: 'Non-Fiction', c: '51Oi+FcrkKL', grp: 'Big History & Science', kind: 'theme', d: 'Diamond\'s case that geography — domesticable crops, animals, an east-west continental axis — rather than innate difference decided which societies conquered others.' },
  { t: 'Harry Potter and the Chamber of Secrets, Book 2', a: 'J.K. Rowling', n: 'Jim Dale', g: 'Fantasy', c: '61fmfnA-uCL', grp: 'Harry Potter', kind: 'series', d: 'Second year: students are turning to stone, a hidden chamber beneath the school has been reopened, and a blank diary writes back.', o: 2 },
  { t: 'Harry Potter and the Sorcerer\'s Stone, Book 1', a: 'J.K. Rowling', n: 'Jim Dale', g: 'Fantasy', c: '51xJbFMRsxL', grp: 'Harry Potter', kind: 'series', d: 'An orphan raised in a cupboard learns he is a wizard, starts boarding school, and finds out what really killed his parents.', o: 1 },
  { t: 'The Ballad of Songbirds and Snakes: A Hunger Games Novel', a: 'Suzanne Collins', n: 'Santino Fontana', g: 'Sci-Fi', c: '61dpaAoU+KL', grp: 'Modern Science Fiction', kind: 'theme', d: 'Eighteen-year-old Coriolanus Snow mentors a District 12 tribute in the tenth Hunger Games, sixty-four years before Katniss.' },
  { t: '20,000 Leagues Under the Sea', a: 'Jules Verne', n: 'David Linski', g: 'Sci-Fi', c: '51NsPwILyfL', grp: 'Science Fiction Classics', kind: 'theme', d: 'Professor Aronnax is taken aboard Nemo\'s submarine and spends a year touring the ocean floor as a well-treated prisoner.' },
  { t: 'Warbreaker', a: 'Brandon Sanderson', n: 'Alyssa Bresnahan', g: 'Fantasy', c: '51+KkCG3A5L', grp: 'The Cosmere', kind: 'series', d: 'A princess sent to marry a god-king finds a city running on stolen breath, resurrected gods, and a war her father seems to want.', sub: 'Standalones & collections', so: 7 },
  { t: 'Hyperion', a: 'Dan Simmons', n: 'Marc Vietor, Allyson Johnson, Kevin Pariseau, Jay Snyder, Victor Bevine', g: 'Sci-Fi', c: '51RIKu29fRL', grp: 'Science Fiction Classics', kind: 'theme', d: 'Seven pilgrims travel toward the Time Tombs and the creature guarding them, telling their stories on the way, Canterbury-style.' },
  { t: 'Leaders Eat Last: Why Some Teams Pull Together and Others Don\'t', a: 'Simon Sinek', n: 'Simon Sinek', g: 'Personal Development', c: '516OBygEerL', grp: 'Leading & Working With People', kind: 'theme', d: 'Sinek\'s Circle of Safety — leaders who absorb risk get trust back, argued through Marines, brain chemistry and corporate layoffs.' },
  { t: 'Invisible Man: A Novel', a: 'Ralph Ellison', n: 'Joe Morton', g: 'Fiction', c: '416oGM2R5hL', grp: 'Literary & General Fiction', kind: 'theme', d: 'An unnamed Black narrator moves from a Southern college to Harlem and the Brotherhood, used by everyone, seen by nobody.' },
  { t: 'Peak Performance: Elevate Your Game, Avoid Burnout, and Thrive with the New Science of Success', a: 'Brad Stulberg, Steve Magness', n: 'Christopher Lane', g: 'Personal Development', c: '41ssxrhLwCL', grp: 'Focus & Performance', kind: 'theme', d: 'Stress plus rest equals growth — athletes, scientists and artists compared to find the cycle that produces work without burnout.' },
  { t: 'Skunk Works: A Personal Memoir of My Years of Lockheed', a: 'Ben R. Rich, Leo Janos', n: 'Pete Larkin', g: 'Biographies & Memoirs', c: '51-XJRg2dCL', grp: 'Mountains & Makers', kind: 'theme', d: 'Rich on running Lockheed\'s secret shop: the U-2, the SR-71, and the F-117 built largely by dodging Pentagon process.' },
  { t: 'Sapiens: A Brief History of Humankind', a: 'Yuval Noah Harari', n: 'Derek Perkins', g: 'Non-Fiction', c: '41HWFhtig3L', grp: 'Big History & Science', kind: 'theme', d: 'Harari\'s sweep through the cognitive, agricultural and scientific revolutions, arguing shared fictions — money, nations, religion — let strangers cooperate at scale.' },
  { t: 'Cosmos: A Personal Voyage', a: 'Carl Sagan', n: 'LeVar Burton, Seth MacFarlane, Neil deGrasse Tyson, Ann Druyan', g: 'Non-Fiction', c: '51e91glnHUL', grp: 'Big History & Science', kind: 'theme', d: 'Sagan\'s tour of astronomy and its history, from the Library of Alexandria to interstellar space, written for the television series.' },
  { t: 'The Way of Kings: Book One of the Stormlight Archive', a: 'Brandon Sanderson', n: 'Michael Kramer, Kate Reading', g: 'Fantasy', c: '51hAwcG3oNL', grp: 'The Cosmere', kind: 'series', d: 'On a world scoured by storms, a bridge slave, a thieving scholar, and a war-weary highprince are drawn toward magic thought extinct.', sub: 'The Stormlight Archive', so: 1, o: 1 },
  { t: 'So You\'ve Been Publicly Shamed', a: 'Jon Ronson', n: 'Jon Ronson', g: 'Non-Fiction', c: '51Rw9xCr2tL', grp: 'Business, Design & Decisions', kind: 'theme', d: 'Ronson interviews people whose lives collapsed after a tweet or a fabricated quote, and traces where public shaming went.' },
  { t: 'The Last Wish: Introducing the Witcher', a: 'Andrzej Sapkowski, Danusia Stok - translator', n: 'Peter Kenny', g: 'Fantasy', c: '51EncOjsNgL', grp: 'The Witcher', kind: 'series', d: 'Short stories introducing Geralt of Rivia, a monster killer for hire, framed around fairy tales bent badly out of shape.', o: 0.5 },
  { t: 'Braving the Wilderness: The Quest for True Belonging and the Courage to Stand Alone', a: 'Brené Brown', n: 'Brené Brown', g: 'Personal Development', c: '51-6vVkb+qL', grp: 'Brené Brown', kind: 'author', d: 'An argument that belonging requires standing alone often enough to stop bargaining away who you actually are.' },
  { t: 'The Bands of Mourning: A Mistborn Novel', a: 'Brandon Sanderson', n: 'Michael Kramer', g: 'Fantasy', c: '51AwWj57P9L', grp: 'The Cosmere', kind: 'series', d: 'A rumor of a legendary artifact sends the lawmen south to a mountain temple, a rival organization, and an airship nobody should have.', sub: 'Mistborn — Wax & Wayne (Era 2)', so: 3, o: 3 },
  { t: 'Shadows of Self: A Mistborn Novel', a: 'Brandon Sanderson', n: 'Michael Kramer', g: 'Fantasy', c: '51VDSsGoP7L', grp: 'The Cosmere', kind: 'series', d: 'A shapeshifting killer works the capital during labor unrest, and the investigation leads back to the god Wax answers to.', sub: 'Mistborn — Wax & Wayne (Era 2)', so: 3, o: 2 },
  { t: 'A Conjuring of Light: A Novel', a: 'V. E. Schwab', n: 'Kate Reading, Michael Kramer', g: 'Fantasy', c: '61iFtrNPRkL', grp: 'Shades of Magic', kind: 'series', d: 'A city under siege by a power that consumes magicians, with three Londons\' worth of old debts coming due.', o: 3 },
  { t: 'A Gathering of Shadows: A Novel', a: 'V. E. Schwab', n: 'Michael Kramer, Kate Reading', g: 'Fantasy', c: '51cz7GIVAoL', grp: 'Shades of Magic', kind: 'series', d: 'Four months on: a magicians\' tournament in Red London, a thief with ambitions, and something stirring out at sea.', o: 2 },
  { t: 'The Slow Regard of Silent Things: Kingkiller Chronicle, Book 2.5', a: 'Patrick Rothfuss', n: 'Patrick Rothfuss', g: 'Fantasy', c: '51IMLdpQB6L', grp: 'The Kingkiller Chronicle', kind: 'series', d: 'A week with Auri in the tunnels beneath the University, told with almost no dialogue and no plot to speak of.', o: 2.5 },
  { t: 'The Alloy of Law: A Mistborn Novel', a: 'Brandon Sanderson', n: 'Michael Kramer', g: 'Fantasy', c: '51VNzOolx+L', grp: 'The Cosmere', kind: 'series', d: 'Three centuries on, with railroads and revolvers, a frontier lawman returns to the city and finds a gang robbing moving trains.', sub: 'Mistborn — Wax & Wayne (Era 2)', so: 3, o: 1 },
  { t: 'Red Moon', a: 'Kim Stanley Robinson', n: 'Maxwell Hamilton, Joy Osmanski, Feodor Chin', g: 'Sci-Fi', c: '41D4TPLsVQL', grp: 'Kim Stanley Robinson', kind: 'author', d: 'A quantum-device technician arrives at China\'s lunar colony, witnesses a murder, and becomes an inconvenience to two governments.' },
  { t: 'A Darker Shade of Magic: A Darker Shade of Magic, Book 1', a: 'V. E. Schwab', n: 'Steven Crossley', g: 'Fantasy', c: '51G8cQ3WB1L', grp: 'Shades of Magic', kind: 'series', d: 'Kell, one of the last men able to travel between four parallel Londons, smuggles the wrong object home.', o: 1 },
  { t: 'Zero to One: Notes on Startups, or How to Build the Future', a: 'Peter Thiel, Blake Masters', n: 'Blake Masters', g: 'Non-Fiction', c: '41UpV7crlHL', grp: 'Business, Design & Decisions', kind: 'theme', d: 'Thiel on building monopolies rather than competing: find a secret, own a small market first, and make something genuinely new.' },
  { t: 'Dune: Book One in the Dune Chronicles', a: 'Frank Herbert', n: 'Scott Brick, Orlagh Cassidy, Euan Morton, Simon Vance, Ilyana Kadushin, Byron Jennings, David R. Gordon, Jason Culp, Kent Broadhurst, Oliver Wyman, Patricia Kilgarriff, Scott Sowers', g: 'Sci-Fi', c: '41rrXYM-wHL', grp: 'Science Fiction Classics', kind: 'theme', d: 'Paul Atreides inherits a desert planet producing the drug interstellar travel depends on, and the war his family walked into.' },
  { t: 'The Hero of Ages: Book Three of Mistborn', a: 'Brandon Sanderson', n: 'Michael Kramer', g: 'Fantasy', c: '51-nnxwOinL', grp: 'The Cosmere', kind: 'series', d: 'Ash falls thicker every year and the mists have turned lethal. The survivors dig through old records to work out what is ending the world.', sub: 'Mistborn — Era 1', so: 2, o: 3 },
  { t: 'The Well of Ascension: Book Two of Mistborn', a: 'Brandon Sanderson', n: 'Michael Kramer', g: 'Fantasy', c: '51dIuQBEZLL', grp: 'The Cosmere', kind: 'series', d: 'Holding a city is harder than taking one. Three armies besiege it while a prophecy about a saving power gets read again, closely.', sub: 'Mistborn — Era 1', so: 2, o: 2 },
  { t: 'The Final Empire: Mistborn Book 1', a: 'Brandon Sanderson', n: 'Michael Kramer', g: 'Fantasy', c: '61rYqiz8yJL', grp: 'The Cosmere', kind: 'series', d: 'A street thief joins a crew of magic-using con artists planning to rob the imperial treasury and overthrow an immortal emperor.', sub: 'Mistborn — Era 1', so: 2, o: 1 },
  { t: 'Inheritance: The Inheritance Cycle, Book 4', a: 'Christopher Paolini', n: 'Gerard Doyle', g: 'Fantasy', c: '51qw-ZuHjZL', grp: 'The Inheritance Cycle', kind: 'series', d: 'The Varden march on the capital, and Eragon has to find something capable of beating a king a century in power.', o: 4 },
  { t: 'Brisingr: The Inheritance Cycle, Book 3', a: 'Christopher Paolini', n: 'Gerard Doyle', g: 'Fantasy', c: '51siq9Ad2iL', grp: 'The Inheritance Cycle', kind: 'series', d: 'Oaths sworn in the first two books come due, with dwarves, elves and a stalled rebellion all holding markers.', o: 3 },
  { t: 'Eldest: The Inheritance Cycle, Book 2', a: 'Christopher Paolini', n: 'Gerard Doyle', g: 'Fantasy', c: '51qCEi-auNL', grp: 'The Inheritance Cycle', kind: 'series', d: 'Eragon trains with the elves in Ellesméra while his cousin\'s village and the rebellion fight the war without him.', o: 2 },
  { t: 'Eragon: Inheritance, Book 1', a: 'Christopher Paolini', n: 'Gerard Doyle', g: 'Fantasy', c: '51i7mXy61VL', grp: 'The Inheritance Cycle', kind: 'series', d: 'A farm boy finds a blue stone in the mountains, and it hatches into the empire\'s oldest enemy.', o: 1 },
  { t: 'Ready Player One', a: 'Ernest Cline', n: 'Wil Wheaton', g: 'Sci-Fi', c: '41Eptolyo+L', grp: 'Modern Science Fiction', kind: 'theme', d: 'A teenager hunts an Easter egg hidden inside a global VR world by its dead creator, guarded by 1980s trivia.' },
  { t: 'Artemis', a: 'Andy Weir', n: 'Rosario Dawson', g: 'Sci-Fi', c: '51fisVXQNrL', grp: 'Andy Weir', kind: 'author', d: 'A small-time smuggler in the Moon\'s only city takes a job worth a million slugs and considerably more trouble.' },
  { t: 'Surely You\'re Joking, Mr. Feynman!', a: 'Richard P. Feynman', n: 'Raymond Todd', g: 'Biographies & Memoirs', c: '510fhCMBFoL', grp: 'Mountains & Makers', kind: 'theme', d: 'Anecdotes from a physicist who cracked safes at Los Alamos, played bongos in Brazil, and treated authority as a puzzle.' },
  { t: 'Dark Tower I: The Gunslinger', a: 'Stephen King', n: 'George Guidall', g: 'Fantasy', c: '41AoF-lTijL', grp: 'The Dark Tower', kind: 'series', d: 'Roland crosses a desert after the man in black, through a world that has moved on and largely emptied out.', o: 1 },
  { t: 'Einstein\'s Relativity and the Quantum Revolution: Modern Physics for Non-Scientists, 2nd Edition', a: 'Richard Wolfson, The Great Courses', n: 'Richard Wolfson', g: 'Education', c: '6171uu1XWlL', grp: 'Big History & Science', kind: 'theme', d: 'A lecture course walking non-physicists through special and general relativity, then quantum mechanics and its paradoxes, with almost no math.' },
  { t: 'Caliban\'s War: The Expanse, Book 2', a: 'James S. A. Corey', n: 'Jefferson Mays', g: 'Sci-Fi', c: '51DsPQ4cWBL', grp: 'The Expanse', kind: 'series', d: 'A Martian marine, a botanist hunting his abducted daughter, and a UN politician swearing her way through a system-wide crisis.', o: 2 },
  { t: 'The Screwtape Letters', a: 'C. S. Lewis', n: 'Joss Ackland', g: 'Fiction', c: '51FWlX4xLzL', grp: 'Literary & General Fiction', kind: 'theme', d: 'A senior devil writes his nephew with advice on corrupting an ordinary Englishman, mostly through distraction and small vanities.' },
  { t: 'Red Mars', a: 'Kim Stanley Robinson', n: 'Richard Ferrone', g: 'Sci-Fi', c: '61oovVuXB5L', grp: 'Kim Stanley Robinson', kind: 'author', d: 'The first hundred colonists arrive to build a settlement, then split over whether to terraform the planet or leave it alone.' },
  { t: 'The Alchemist: A Fable About Following Your Dream', a: 'Paulo Coelho', n: 'Jeremy Irons', g: 'Fiction', c: '510a46Y-G9L', grp: 'Literary & General Fiction', kind: 'theme', d: 'A Spanish shepherd sells his flock and crosses North Africa chasing a recurring dream about treasure at the Egyptian pyramids.' },
  { t: 'The Wise Man\'s Fear: Kingkiller Chronicle, Book 2', a: 'Patrick Rothfuss', n: 'Nick Podehl', g: 'Fantasy', c: '51f2XSzLauL', grp: 'The Kingkiller Chronicle', kind: 'series', d: 'Day two of the telling: Kvothe leaves the University for a nobleman\'s court, a bandit hunt, and an education elsewhere.', o: 2 },
  { t: 'The Name of the Wind: Kingkiller Chronicle, Book 1', a: 'Patrick Rothfuss', n: 'Nick Podehl', g: 'Fantasy', c: '61Csiq-T2hL', grp: 'The Kingkiller Chronicle', kind: 'series', d: 'A travelling troupe, years surviving the streets of Tarbean, and admission to a University that teaches sympathy and arithmancy.', o: 1 },
  { t: 'The Feynman Lectures on Physics: Volume 2, Advanced Quantum Mechanics', a: 'Richard P. Feynman', n: 'Richard P. Feynman', g: 'Education', c: '41bjBB-DIVL', grp: 'The Feynman Lectures on Physics', kind: 'series', d: 'Symmetry and conservation laws, identical particles, the hydrogen atom and periodic table, the Schrödinger equation, and a seminar on superconductivity.', o: 2 },
  { t: 'The Feynman Lectures on Physics: Volume 1, Quantum Mechanics', a: 'Richard P. Feynman', n: 'Richard P. Feynman', g: 'Education', c: '41zdLSU-rWL', grp: 'The Feynman Lectures on Physics', kind: 'series', d: 'Quantum behaviour from the two-slit experiment onward: wave and particle viewpoints, probability amplitudes, uncertainty, and spin-one and spin-half systems.', o: 1 },
  { t: 'Halo: The Fall of Reach', a: 'Eric Nylund', n: 'Todd McLaren', g: 'Sci-Fi', c: '51WaFoqq9FL', grp: 'Modern Science Fiction', kind: 'theme', d: 'The SPARTAN-II program from the start: children abducted, augmented and armoured, and the colony lost before the first game begins.' },
  { t: 'The Feynman Lectures on Physics: Volume 16, Feynman on Electromagnetism', a: 'Richard P. Feynman', n: 'Richard P. Feynman', g: 'Education', c: '41M4gOS3beL', grp: 'The Feynman Lectures on Physics', kind: 'series', d: 'The vector potential, induced currents, the laws of induction, and Maxwell\'s equations solved in free space and with sources.', o: 16 },
  { t: 'Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration', a: 'Ed Catmull, Amy Wallace', n: 'Peter Altschuler', g: 'Non-Fiction', c: '4127sREOO4L', grp: 'Business, Design & Decisions', kind: 'theme', d: 'Catmull on running Pixar — the Braintrust, candour, and the managerial habits that let broken early films get fixed.' },
  { t: 'The Egg', a: 'Andy Weir', n: 'R.C. Bray', g: 'Sci-Fi', c: '41no1-0LCwL', grp: 'Andy Weir', kind: 'author', d: 'A man dies in a car crash and receives an explanation of the universe that reframes every life in it.' },
  { t: 'Leviathan Wakes', a: 'James S. A. Corey', n: 'Jefferson Mays', g: 'Sci-Fi', c: '51yp-mBsRdL', grp: 'The Expanse', kind: 'series', d: 'An ice hauler\'s surviving crew and a Ceres detective chasing a missing girl converge on the thing that could start a war.', o: 1 },
  { t: 'The Martian', a: 'Andy Weir', n: 'R. C. Bray', g: 'Sci-Fi', c: '51Lr5rAN6cL', grp: 'Andy Weir', kind: 'author', d: 'An astronaut left behind on Mars keeps himself alive with potatoes, duct tape and chemistry while NASA argues.' },
  { t: 'The Feynman Lectures on Physics: Volume 11, Feynman on Science and Vision', a: 'Richard P. Feynman', n: 'Richard P. Feynman', g: 'Education', c: '41y5417NMyL', grp: 'The Feynman Lectures on Physics', kind: 'series', d: 'How physics meets the other sciences, worked out through the eye: colour perception, photoreceptors, and the neurology of what we see.', o: 11 },
]

const coverModules = import.meta.glob<string>('../assets/covers/*.jpg', {
  eager: true,
  import: 'default',
  query: '?url',
})

const coverUrls: Record<string, string> = Object.fromEntries(
  Object.entries(coverModules).map(([path, url]) => [
    path.split('/').pop()!.replace(/\.jpg$/, ''),
    url,
  ]),
)

export function coverUrl(id: string): string | undefined {
  return coverUrls[id]
}

export interface SubShelf {
  name: string | null
  books: Book[]
}

export interface Shelf {
  group: string
  kind: ShelfKind
  blurb?: string
  count: number
  subs: SubShelf[]
}

/**
 * Builds shelves: biggest collections first, loose singles last. Sub-series
 * order comes from `so`, book order from `o`.
 */
export function shelve(books: Book[]): Shelf[] {
  const groups = new Map<string, Book[]>()
  for (const b of books) {
    const list = groups.get(b.grp)
    if (list) list.push(b)
    else groups.set(b.grp, [b])
  }

  const shelves: Shelf[] = []
  for (const [group, list] of groups) {
    const kind = list[0].kind
    const bySub = new Map<string | null, Book[]>()
    for (const b of list) {
      const key = b.sub ?? null
      const arr = bySub.get(key)
      if (arr) arr.push(b)
      else bySub.set(key, [b])
    }

    const subs: SubShelf[] = Array.from(bySub, ([name, bs]) => ({
      name,
      books: [...bs].sort(
        (x, y) => (x.o ?? 999) - (y.o ?? 999) || x.t.localeCompare(y.t),
      ),
    })).sort(
      (a, b) =>
        (a.books[0].so ?? 999) - (b.books[0].so ?? 999) ||
        (a.name ?? '').localeCompare(b.name ?? ''),
    )

    shelves.push({
      group,
      kind,
      blurb: SHELF_BLURBS[group],
      count: list.length,
      subs,
    })
  }

  // Real series and author collections lead; curated themes follow.
  const rank = (k: ShelfKind) => (k === 'theme' ? 1 : 0)
  return shelves.sort(
    (a, b) =>
      rank(a.kind) - rank(b.kind) ||
      b.count - a.count ||
      a.group.localeCompare(b.group),
  )
}

/**
 * Audible bakes the series into the title in half a dozen shapes. The shelf
 * already names the series, so strip it — but never strip everything away.
 */
const TRIM: RegExp[] = [
  // "…: Book III of the Red Rising Trilogy"
  /\s*[:,]\s*(Book|Volume)\s+[\w.]+\s+of\s+.*$/i,
  // "…: Dungeon Crawler Carl, Book 8"
  /\s*[:,]\s*[^:,]*,\s*Book\s+[\d.]+\s*$/i,
  // "…: Mistborn Book 1"  /  "…, Book 6"
  /\s*[:,]\s*[^:]*\bBook\s+[\d.]+\s*$/i,
  // "…: A Novel", "…: A Cosmere Novel"
  /\s*:\s*(A|An|The)\b[^:]*\bNovel\s*$/i,
  /\s*:\s*$/,
]

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function shortTitle(b: Book): string {
  let t = b.t
  for (const re of TRIM) {
    const next = t.replace(re, '').trim()
    if (next) t = next
  }
  // The shelf already names the series, so a trailing ": Stormlight Archive"
  // or ": The Cosmere Collection" is pure repetition.
  for (const label of [b.sub, b.grp]) {
    if (!label) continue
    // Match with or without a leading "The" on either side, so "Edgedancer:
    // Stormlight Archive" trims against the shelf "The Stormlight Archive".
    const bare = escapeRe(label.replace(/^The\s+/i, ''))
    const next = t
      .replace(new RegExp(`\\s*:\\s*(The\\s+)?${bare}\\b.*$`, 'i'), '')
      .trim()
    if (next) t = next
  }
  return t || b.t
}
