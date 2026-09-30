import { EventDetail, Ticket } from '../../src/types/eventDetails.interface'

type TicketSeed = Omit<Ticket, 'id'>
type EventDetailSeed = Omit<EventDetail, 'id' | 'tickets'> & {
  tickets: TicketSeed[]
}

export const eventDetailsData: Record<string, EventDetailSeed> = {
  
  
'econo-carnival-bangladesh-season-01': {
    title: 'Econo Carnival Bangladesh | Season-01',
    venue: 'Notre Dame College, Dhaka',
    bannerImage: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790690268/1200_X_630_-_Shanto_Dev_qvqik9.webp",
    startDate: new Date('2026-10-15T00:00:00.000Z'),
    endDate: new Date('2026-10-17T00:00:00.000Z'),
    startTime: '08:00',
    endTime: '18:00',
    description: `The journey towards understanding the world through economics has begun. Sharpen your minds, challenge your perspectives, and explore the forces shaping societies, businesses, markets and nations. Here, knowledge meets creativity, logic meets expression, and every challenge brings you closer to understanding the world around us.

After a year of preparation, Notre Dame Socio-Economic Club proudly presents its flagship event, **"Econo Carnival Bangladesh, Season-01"** — a national celebration of Economics, Business, Sociology, History, Finance, Creativity and Critical Thinking.

From Olympiads and economic cases to debates, marketing, design, photography and creative challenges, Econo Carnival Bangladesh brings young minds from across the country together on one platform. Whether you are an aspiring economist, quiz enthusiast, debater, designer, creative thinker or simply curious about the world — there's a challenge waiting for you.

**✪ Hosted By:** Notre Dame Socio-Economic Club

**✪ Authorized By:** Notre Dame College, Dhaka

**✪ Date:** 15–17 October 2026

**✪ Eligibility:** Class 2–12 (HSC26)

**CATEGORIES**

- **Pre-Junior (P):** Class 2–5
- **Junior (J):** Class 6–8
- **Secondary (S):** Class 9–10
- **Higher Secondary (HS):** Class 11–12 / HSC Batch 2026

**✪ SEGMENTS**

**■ BUNDLE SEGMENTS**

1. QuizBowl (J, S, HS)

Economics Olympiad • Finance & Business Olympiad • History Olympiad • General Knowledge Olympiad

2. Pre-Junior Bundle (P)

ArtVerse • Do You Know? • EconoMath

3. Submission Based Bundle (Open for All)

Brandonomics • Digital Poster Design • PhotoVerse • MemeCraft

**■ SOLO SEGMENTS**

4. Economist For A Day (S, HS)

Solve an economic case involving mathematics, graphs and relevant information within 20 minutes.

5. EconoSpeak (J, S, HS)

Extempore speech competition in English and Bangla.

6. Future's Bangladesh (J, S, HS)

Essay competition on the future of Bangladesh. Word limit: 150 words.

7. Marketing Master (S, HS)

Develop a marketing strategy for a given product.

8. The People's Parliament (S, HS — Combined)

A parliamentary roleplay featuring speeches, debate and voting, with the top three MPs selected based on logic, speech and knowledge.

**■ TEAM SEGMENTS**

9. Wall Magazine (J, S, HS)

Teams of 2 create and present an Economics-related wall magazine.

10. Scrapbook (J, S, HS)

Teams of 2 create a scrapbook based on Economics, Sociology or History.

11. Guess The Icon (J, S, HS — Combined)

Teams of up to 2 identify 30 logos within 15 minutes.

12. Project Display (S, HS)

Present a Science, Business or Economics project highlighting its socio-economic impact.

13. OVC (Open for All)

Teams of 2 create a minimum 1:30-minute TVC based on a given topic, product or brand.

**✪ FOR MORE INFORMATION**

For registration, participation, segment details or queries:

1. General Secretary — Ahbab Ayyan Islam
📞 +880 1908-769382

2. President — Administration — Raiyan Navid
📞 +880 1618-801485

3. Co-Ordinator — Shanto Deb
📞 +880 1956-187197

4. Co-Ordinator — Aranno Dip
📞 01841075526

5. Co-Ordinator — Ayman Ibne Raihan
📞 01754743809

Step beyond the classroom, challenge your ideas, discover new perspectives and celebrate the world of Economics with us.`,

tickets: [
      {
        name: 'QuizBowl (J, S, HS)',
        group: 'Bundle Segments',
        price: 150,
        description: null,
        includes: [
          'Economics Olympiad',
          'Finance & Business Olympiad',
          'History Olympiad',
          'General Knowledge Olympiad',
        ],
        available: true,
        sortOrder: 1,
      },
      {
        name: 'Pre-Junior Bundle (P)',
        group: 'Bundle Segments',
        price: 150,
        description: null,
        includes: ['ArtVerse', 'Do You Know?', 'EconoMath'],
        available: true,
        sortOrder: 2,
      },
      {
        name: 'Submission Based Bundle (Open for All)',
        group: 'Bundle Segments',
        price: 150,
        description: null,
        includes: ['Brandonomics', 'Digital Poster Design', 'PhotoVerse', 'MemeCraft'],
        available: true,
        sortOrder: 3,
      },

      {
        name: 'Economist For A Day (S, HS)',
        group: 'Solo Segments',
        price: 100,
        description:
          'Solve an economic case involving mathematics, graphs and relevant information within 20 minutes.',
        includes: [],
        available: true,
        sortOrder: 4,
      },
      {
        name: 'EconoSpeak (J, S, HS)',
        group: 'Solo Segments',
        price: 100,
        description: 'Extempore speech competition in English and Bangla.',
        includes: [],
        available: true,
        sortOrder: 5,
      },
      {
        name: "Future's Bangladesh (J, S, HS)",
        group: 'Solo Segments',
        price: 100,
        description: 'Essay competition on the future of Bangladesh. Word limit: 150 words.',
        includes: [],
        available: true,
        sortOrder: 6,
      },
      {
        name: 'Marketing Master (S, HS)',
        group: 'Solo Segments',
        price: 100,
        description: 'Develop a marketing strategy for a given product.',
        includes: [],
        available: true,
        sortOrder: 7,
      },
      {
        name: "The People's Parliament (S, HS — Combined)",
        group: 'Solo Segments',
        price: 150,
        description:
          'A parliamentary roleplay featuring speeches, debate and voting, with the top three MPs selected based on logic, speech and knowledge.',
        includes: [],
        available: true,
        sortOrder: 8,
      },


      {
        name: 'Wall Magazine (J, S, HS)',
        group: 'Team Segments',
        price: 200,
        description: 'Teams of 2 create and present an Economics-related wall magazine.',
        includes: [],
        available: true,
        sortOrder: 9,
      },
      {
        name: 'Scrapbook (J, S, HS)',
        group: 'Team Segments',
        price: 200,
        description: 'Teams of 2 create a scrapbook based on Economics, Sociology or History.',
        includes: [],
        available: true,
        sortOrder: 10,
      },
      {
        name: 'Guess The Icon (J, S, HS — Combined)',
        group: 'Team Segments',
        price: 200,
        description: 'Teams of up to 2 identify 30 logos within 15 minutes.',
        includes: [],
        available: true,
        sortOrder: 11,
      },
      {
        name: 'Project Display (S, HS)',
        group: 'Team Segments',
        price: 200,
        description:
          'Present a Science, Business or Economics project highlighting its socio-economic impact.',
        includes: [],
        available: true,
        sortOrder: 12,
      },
      {
        name: 'OVC (Open for All)',
        group: 'Team Segments',
        price: 200,
        description:
          'Teams of 2 create a minimum 1:30-minute TVC based on a given topic, product or brand.',
        includes: [],
        available: true,
        sortOrder: 13,
      },
    ],
  },




'winds-of-metropolis': {
    title: 'Winds of Metropolis',
    venue: 'Krishibid Institution Bangladesh (KIB), Dhaka',
    startDate: new Date('2026-10-03T00:00:00.000Z'),
    bannerImage: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790739408/WOM_Tickify_new_landing_page_copy_DflsgQV_qcqdcr.webp",
    endDate: new Date('2026-10-03T00:00:00.000Z'),
    startTime: '15:00',
    endTime: '23:00',

    description: `**WINDS OF METROPOLIS**

The city never stops. Neither should the music.

Winds of Metropolis is an evening built around the sounds that give the city its rhythm. On 3rd October, Kaaktaal, Meghdol and Karnival come together for a night of live music, joined by Shuvro, at Krishibid Institution Bangladesh, Dhaka.

From familiar melodies to loud, restless moments, the night is an invitation to step away from the city's constant rush and make room for music, movement and a little breathing space.

**Featuring**

- Meghdol
- Kaaktaal
- Karnival
- Shuvro

**Date:** 3rd October, 2026

**Gates Open:** 3:00 PM

**Venue:** Krishibid Institution Bangladesh (KIB), Dhaka

Brought to you by **The Bigshot Experiences**`,

    tickets: [
      {
        name: 'General',
        group: 'General',
        price: 799,
        description: null,
        includes: [],
        available: true,
        sortOrder: 1,
      },
      {
        name: '4 tickets',
        group: 'General',
        price: 3000,
        description: null,
        includes: [],
        available: true,
        sortOrder: 2,
      },
    ],
  },


'music-moments-renaissance': {
    title: 'Music. Moments. Renaissance Featuring Shironamhin',
    venue: 'Renaissance Dhaka Gulshan Hotel',
    bannerImage: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790737582/WhatsApp_Image_2026-09-19_at_19.21.54_ginbcc.jpg",
    startDate: new Date('2026-11-01T00:00:00.000Z'),
    endDate: new Date('2026-11-01T00:00:00.000Z'),
    startTime: "08:00",
    endTime: "18:00",

    description: `🎶 Get ready for an unforgettable evening of live, unplugged music at **Renaissance Dhaka Gulshan Hotel!**

Experience the powerful sound of Shironamhin alongside a delicious buffet dinner at Music Moments, Renaissance.

📅 October 1

⏰ 8:00 PM onwards

📍 R Events, Level 2

🎟 BDT 2,499 NET per person, including buffet dinner

Limited seats available. Book your tickets and let the music take over the night! 🎶

#MusicMomentsRenaissance #UnpluggedMusic #RenaissanceDhaka #LiveMusic #DhakaEvents`,

    tickets: [
      {
        name: 'Entry Pass',
        group: 'General',
        price: 2499,
        description: 'Including buffet dinner',
        includes: [],
        available: true,
        sortOrder: 1,
      },
    ],
},




  '1st-iscsc-national-sports-festival': {
    title: '1st ISCSC National Sports Festival',
    bannerImage: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790689497/Event_Banner_1_1600x600_-_Sazidur_Rahman_c47pnj.png",
    venue: 'Ideal School and College, Dhaka',
    startDate: new Date('2026-10-20T00:00:00.000Z'),
    endDate: new Date('2026-10-24T00:00:00.000Z'),
    startTime: '08:00',
    endTime: '19:30',

    description: `**1st ISCSC National Sports Fest (INSF)**

*Chasing Dreams, Breaking Limits*

Compete for a share of the 240,000 BDT prize pool at Bangladesh's premier five-day multisport and esports festival. Hosted by the Ideal School & College Sports Club, INSF brings together young athletes, gamers, and strategists across 16 exciting segments.

When the competition ends, the celebration is just beginning. The Grand Prize Giving Ceremony will feature a special lineup of guests, followed by a live concert that brings everyone together for one unforgettable finale.

**Event Overview**

- **Dates:** October 17 & 20–24, 2026
- **Venues:** Ideal School & College (Banasree, Motijheel, and Mugda branches)
- **Eligibility:** Classes 4–12 (including HSC '26)
- **Total Prize Pool:** 2,40,000 BDT
- **Registration Deadline:** October 15, 2026 (Registration may close early if slots fill)
- **Dress Code:** Official Institution Uniform (Football & Handball players wear the provided official INSF jersey)

**Team & Format Rules**

1. School and college students cannot be mixed on the same team in any segment. Cross-institutional teams are allowed in all segments except Football and Handball.
2. Football and Handball segments will follow a fully knockout, inter-institutional format. Institutional teams must apply first; ISCSC will then select up to two teams per institution: one school and one college team. The qualifying rounds will feature School vs. School and College vs. College matches. From the quarter-finals onward, all teams will compete in a single open bracket.
3. Free Fire & PUBG: Qualifying rounds will be held online. The Grand Finals will take place on LAN at the Mugda Branch, with Wi-Fi provided.

**Segments & Registration Fees**

**1. Field Sports (Institutional Application Required to Participate)**

- Football (Banasree | Oct 20–24): 12 Players/Team | 4,000 BDT
- Handball - Boys & Girls (Motijheel | Oct 20–24): 10 Players/Team | 4,000 BDT

**2. Martial Arts (Banasree | Oct 17)**

- Kata: 800 BDT
- Kumite: 800 BDT
- Karate Bundle (Kata + Kumite): 1,200 BDT

**3. Esports (Online + Mugda | Oct 23–24)**

- FC 26: Solo | 300 BDT (256 Slots)
- Free Fire: 5 Players/Team | 500 BDT (240 Slots)
- PUBG: 4 Players/Team | 400 BDT (192 Slots)

**4. Team Strategy & Mind Games (Mugda | Oct 23–24)**

- Tug of War: 8 Players/Team | 500 BDT
- Outrush: 3 Players/Team | 300 BDT
- Guess the Player: 3 Players/Team | 300 BDT
- Tic-Tac-Toe: 3 Players/Team | 200 BDT
- Killer Who?: 3 Players/Team | 300 BDT
- Hide and Seek: 3 Players/Team | 300 BDT
- Rapid Quiz: 3 Players/Team | 300 BDT

**5. Solo Segments (Mugda | Oct 23–24)**

- Chess: 200 BDT
- Uno: 100 BDT

**Prize Distribution & Rewards**

*General*

All participants will receive an Official Certificate of Participation. Football and handball players will also receive the Official Event Jersey. Winners and runners-up will receive Certificates of Excellence and gold, silver, or bronze medals, according to their final positions.

*Segment Pools*

- Football: Champion (45,000 BDT + Trophy) | Runner-Up (25,000 BDT + Trophy) | 2nd & 3rd Runners-Up (5,000 BDT each)
- Handball (Boys & Girls): Champion (15,000 BDT + Trophy) | Runner-Up (10,000 BDT + Trophy)
- Free Fire: Champion (30,000 BDT + Trophy) | Runner-Up (15,000 BDT) | 2nd Runner-Up (5,000 BDT)
- PUBG: Champion (25,000 BDT + Trophy) | Runner-Up (10,000 BDT) | 2nd Runner-Up (5,000 BDT)
- FC 26: Champion (12,000 BDT + Crest) | Runner-Up (8,000 BDT)

**Grand Final & Live Concert**

Following the intense competition, the Grand Prize Giving Ceremony will transition into a celebration with celebrity guests and a live concert featuring:

- Indalo
- Bagdhara
- Bloodshot Pentarch
- 10+ Surprise Guests, National Players and Influencers

General Inquiries:

- Rashid Ahmed Shad: +880 1340-724865
- Abdullah Al Muqtadir: +880 1839-989388
- Tamzid Juhaer: +880 1948-163166
- Tahmid Ahamed: +880 1558-014952

Technical Assistance (Only):

Sazidur Rahman: +880 1351-448658
Website: iscsc.bd
Follow us on Facebook and Instagram.`,

    tickets: [

      {
        name: 'Football',
        group: 'Sports',
        price: 4000,
        description:
          'A 48-team knockout tournament with 12 players per team, where School and College teams compete separately in the opening rounds before facing each other from the quarter-finals onward. Apply to participate.',
        includes: [
          'Apply: https://forms.gle/uFpzPrcvdAgBsxya7',
          'Eligibility: Class 8–12 (Boys)',
          'Date: 20–24 October',
          'Venue: Banasree Branch',
        ],
        available: true,
        sortOrder: 1,
      },
      {
        name: 'Handball (Boys)',
        group: 'Sports',
        price: 4000,
        description:
          'A team-based knockout tournament featuring 10 players per team, with School and College teams competing separately in the opening rounds before facing each other from the quarter-finals onward. Apply to Participate',
        includes: [
          'Apply: https://forms.gle/MAdtgDUPAvWlKQHv5',
          'Eligibility: Class 8–12 (Boys)',
          'Date: 20–24 October',
          'Venue: Motijheel Branch',
        ],
        available: true,
        sortOrder: 2,
      },
      {
        name: 'Handball (Girls)',
        group: 'Sports',
        price: 4000,
        description:
          'A team-based knockout tournament featuring 10 players per team, with School and College teams competing separately in the opening rounds before facing each other from the quarter-finals onward. Apply to Participate',
        includes: [
          'Apply: https://forms.gle/6AynbXmNFX2QUUUQq5',
          'Eligibility: Class 8–12 (Girls)',
          'Date: 20–24 October',
          'Venue: Motijheel Branch',
        ],
        available: true,
        sortOrder: 3,
      },

      {
        name: 'Kata',
        group: 'Karate',
        price: 800,
        description:
          'An individual Karate competition where participants are judged on the precision, technique, and execution of Kata.',
        includes: [
          'Participants: 1 Player',
          'Eligibility: Class 6–12',
          'Date: 17 October',
          'Venue: Banasree Branch',
        ],
        available: true,
        sortOrder: 4,
      },
      {
        name: 'Kumite',
        group: 'Karate',
        price: 800,
        description:
          'An individual Karate competition where participants compete against one another in regulated Kumite bouts.',
        includes: [
          'Participants: 1 Player',
          'Eligibility: Class 6–12',
          'Date: 17 October',
          'Venue: Banasree Branch',
        ],
        available: true,
        sortOrder: 5,
      },
      {
        name: 'Karate Bundle',
        group: 'Karate',
        price: 1200,
        description:
          'A combined entry covering both the Kata and Kumite competitions, available at a special package price.',
        includes: [
          'Segments: Kata & Kumite',
          'Participants: 1 Player',
          'Eligibility: Class 6–12',
          'Date: 17 October',
          'Venue: Banasree Branch',
        ],
        available: true,
        sortOrder: 6,
      },


      {
        name: 'Free Fire',
        group: 'E-sports',
        price: 500,
        description:
          'A team-based competition where squads compete in matches to secure the Booyah. The qualifying rounds will be held online, while the Finals will take place on LAN with Wi-Fi provided.',
        includes: [
          'Participants: 5 Players',
          'Eligibility: Class 4–12',
          'Date: 23–24 October',
          'Venue: Mugda Branch',
        ],
        available: true,
        sortOrder: 7,
      },
      {
        name: 'PUBG',
        group: 'E-sports',
        price: 400,
        description:
          'A team-based competition where squads compete in matches to secure the Chicken Dinner. The qualifying rounds will be held online, while the Finals will take place on LAN with Wi-Fi provided.',
        includes: [
          'Participants: 4 Players',
          'Eligibility: Class 4–12',
          'Date: 23–24 October',
          'Venue: Mugda Branch',
        ],
        available: true,
        sortOrder: 8,
      },
      {
        name: 'FC 26',
        group: 'E-sports',
        price: 300,
        description:
          'A competitive FC 26 tournament where players face off in head-to-head matches to determine the overall champion.',
        includes: [
          'Participants: 1 Player',
          'Eligibility: Class 4–12',
          'Date: 23–24 October',
          'Venue: Mugda Branch',
        ],
        available: true,
        sortOrder: 9,
      },

   
      {
        name: 'Outrush',
        group: 'Team Segments',
        price: 300,
        description:
          'A fast-paced football game inspired by Sling Puck, where players launch footballs through a central net and race to clear their side before their opponents.',
        includes: [
          'Participants: 3 Players',
          'Eligibility: Class 6–12',
          'Date: 23–24 October',
          'Venue: Mugda Branch',
        ],
        available: true,
        sortOrder: 10,
      },
      {
        name: 'Tic-Tac-Toe',
        group: 'Team Segments',
        price: 200,
        description:
          'A real-life team challenge where players run 100 metres to place their X or O on a giant Tic-Tac-Toe board, aiming to complete a winning line first.',
        includes: [
          'Participants: 3 Players',
          'Eligibility: Class 4–12',
          'Date: 23–24 October',
          'Venue: Mugda Branch',
        ],
        available: true,
        sortOrder: 11,
      },
      {
        name: 'Guess the Player',
        group: 'Team Segments',
        price: 300,
        description:
          'A team-based trivia challenge where players use a series of clues to identify a mystery cricket or football player.',
        includes: [
          'Participants: 3 Players',
          'Eligibility: Class 4–12',
          'Date: 23–24 October',
          'Venue: Mugda Branch',
        ],
        available: true,
        sortOrder: 12,
      },
      {
        name: 'Hide and Seek',
        group: 'Team Segments',
        price: 300,
        description:
          'A classic chase-and-search game where one player seeks while the others hide, with the last player found winning the round.',
        includes: [
          'Participants: 3 Players',
          'Eligibility: Class 6–12',
          'Date: 23–24 October',
          'Venue: Mugda Branch',
        ],
        available: true,
        sortOrder: 13,
      },
      {
        name: 'Killer Who?',
        group: 'Team Segments',
        price: 300,
        description:
          'A mystery-solving challenge where participants follow clues, solve riddles, and complete location-based challenges to uncover the identity of the hidden killer.',
        includes: [
          'Participants: 3 Players',
          'Eligibility: Class 6–12',
          'Date: 23–24 October',
          'Venue: Mugda Branch',
        ],
        available: true,
        sortOrder: 14,
      },
      {
        name: 'Rapid Sports Quiz',
        group: 'Team Segments',
        price: 300,
        description:
          'A fast-paced sports trivia competition covering athletes, teams, sports, and major sporting events.',
        includes: [
          'Participants: 3 Players',
          'Eligibility: Class 4–12',
          'Date: 23–24 October',
          'Venue: Mugda Branch',
        ],
        available: true,
        sortOrder: 15,
      },
      {
        name: 'Tug of War',
        group: 'Team Segments',
        price: 500,
        description:
          "A team-based strength competition where two teams pull opposite ends of a rope, aiming to pull the opposing team's marker across the centre line.",
        includes: [
          'Participants: 8 Players',
          'Eligibility: Class 8–12',
          'Date: 23–24 October',
          'Venue: Mugda Branch',
        ],
        available: true,
        sortOrder: 16,
      },

  
      {
        name: 'Uno',
        group: 'Solo Segments',
        price: 100,
        description:
          'A competitive card game where players match cards by colour, number, or symbol, aiming to be the first to play all their cards.',
        includes: [
          'Participants: 1 Player',
          'Eligibility: Class 4–12',
          'Date: 23–24 October',
          'Venue: Mugda Branch',
        ],
        available: true,
        sortOrder: 17,
      },
      {
        name: 'Chess',
        group: 'Solo Segments',
        price: 200,
        description:
          "A two-player strategy game played on an 8×8 board, where each player aims to checkmate the opponent's king.",
        includes: [
          'Participants: 1 Player',
          'Eligibility: Class 4–12',
          'Date: 23–24 October',
          'Venue: Mugda Branch',
        ],
        available: true,
        sortOrder: 18,
      },
    ],
  },




'14th-istarc-science-technology-festival': {
    title: '14th ISTARC Science & Technology Festival',
    bannerImage: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790690514/image_2026-09-10_194506177_-_Saiyeda_Fatima_Tahura_usodxm.png",
    venue: 'Ideal School & College, Peerjongi Majar Road, Motijheel, Dhaka-1000',
    startDate: new Date('2026-09-01T00:00:00.000Z'),
    endDate: new Date('2026-09-02T00:00:00.000Z'),
    startTime: '09:00',
    endTime: '18:00',


    description: `Long before humanity learned to count, we learned to look up. The night sky became our first laboratory: every star a mystery, every constellation a question, and every galaxy a reminder that the greatest discoveries begin with a spark of curiosity.

This year marks the 14th ISTARC Science & Technology Festival 2026, not just another milestone, but a new horizon and another chapter in our journey of exploration.

The Ideal School and College Science and Technology Aiming Research Council (ISTARC) has always transformed curiosity into innovation, imagination into creation, and ideas into impact. Guided by our motto, "Science in Creation, not Annihilation," we continue inspiring young minds to think beyond today and shape tomorrow. This year's festival celebrates the limitless spirit of discovery, where science, technology, and creativity come together to illuminate the future. The universe has never stopped expanding and neither have we.

The 14th ISTARC Science & Technology Festival 2026 brings together dreamers, innovators, and bright minds, where ideas ignite like supernovas. Every scientific revolution began with one question: "What if?"

As the countdown begins, we invite you to be part of the story. Will you simply witness history, or help write the next chapter among the stars?

📍 **Venue**

Ideal School and College

Peerjongi Majar Road, Motijheel, Dhaka-1000

🗓 **Dates**

October 1st (Thursday) – October 3rd (Saturday), 2026

**Program Segments**

**Olympiads**

1. Science Olympiad
2. Math Olympiad
3. Physics Olympiad
4. Chemistry Olympiad
5. Biology Olympiad
6. MystIQ

**Quizzes**

1. Team Based Quiz
2. General Knowledge Competition
3. IQ Test with Criminal Case Solving
4. Anime Quiz
5. Word Grid

**Display & Presentation**

1. Project Display
2. Wall Magazine
3. Scrap Book

**Online Submission Based**

1. Poster Design
2. Digital Art
3. Photography Exhibition
4. Sci-fi Story Writing
5. Sci-fi Idea Presentation

**Signature Segments**

1. Search Among Us
2. Chess
3. Rubik's Cube`,

    tickets: [
      { name: 'Team Based Quiz (Maximum- 3 people)', group: 'General', price: 150, description: null, includes: [], available: true, sortOrder: 1 },
      { name: 'Chess (Boys)', group: 'General', price: 50, description: null, includes: [], available: true, sortOrder: 2 },
      { name: 'Chess (Girls)', group: 'General', price: 50, description: null, includes: [], available: true, sortOrder: 3 },
      { name: 'Display & Presentation', group: 'General', price: 200, description: null, includes: [], available: true, sortOrder: 4 },
      { name: 'Search Among Us', group: 'General', price: 200, description: null, includes: [], available: true, sortOrder: 5 },
      { name: 'Event Pass', group: 'General', price: 0, description: null, includes: [], available: true, sortOrder: 6 },
      { name: 'Science Olympiad', group: 'General', price: 0, description: null, includes: [], available: true, sortOrder: 7 },
      { name: 'Math Olympiad', group: 'General', price: 0, description: null, includes: [], available: true, sortOrder: 8 },
      { name: 'Physics Olympiad', group: 'General', price: 0, description: null, includes: [], available: true, sortOrder: 9 },
      { name: 'Chemistry Olympiad', group: 'General', price: 0, description: null, includes: [], available: true, sortOrder: 10 },
      { name: 'Biology Olympiad', group: 'General', price: 0, description: null, includes: [], available: true, sortOrder: 11 },
      { name: 'MystIQ', group: 'General', price: 0, description: null, includes: [], available: true, sortOrder: 12 },
      { name: 'General Knowledge Competition', group: 'General', price: 0, description: null, includes: [], available: true, sortOrder: 13 },
      { name: 'IQ Test with Criminal Case Solving', group: 'General', price: 0, description: null, includes: [], available: true, sortOrder: 14 },
      { name: 'Anime Quiz', group: 'General', price: 0, description: null, includes: [], available: true, sortOrder: 15 },
      { name: 'Word Grid', group: 'General', price: 0, description: null, includes: [], available: true, sortOrder: 16 },
      { name: 'Poster Design', group: 'General', price: 0, description: null, includes: [], available: true, sortOrder: 17 },
      { name: 'Digital Art', group: 'General', price: 0, description: null, includes: [], available: true, sortOrder: 18 },
      { name: 'Photography Exhibition', group: 'General', price: 0, description: null, includes: [], available: true, sortOrder: 19 },
      { name: 'Sci-fi Story Writing', group: 'General', price: 0, description: null, includes: [], available: true, sortOrder: 20 },
      { name: 'Sci-fi Idea Presentation', group: 'General', price: 0, description: null, includes: [], available: true, sortOrder: 21 },
      { name: "Rubik's Cube", group: 'General', price: 0, description: null, includes: [], available: true, sortOrder: 22 },
    ],
  },


'project-noir': {
    title: 'PROJECT NOIR',
    venue: 'An Noor Convention Hall, behind of EAST WEST UNIVERSITY, Badda',
    bannerImage: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1790690733/1200X630_-_The_Takeover_yjy9dx.webp",
    startDate: new Date('2026-07-05T00:00:00.000Z'),
    endDate: new Date('2026-07-07T00:00:00.000Z'),
    startTime: '09:00',
    endTime: '15:00',


    description: `**THE TAKEOVER PRESENTS**

**PROJECT NOIR**

DHK's FIRST FUSION EVENING

Something Dhaka hasn't experienced before.

For the first time, three different forms of culture come together in one carefully curated experience

Live music, Dance performances and DJ Party.

**Nostalgic Live Music**

Experience the energy of RENESSUS.

Sing, move, and groove with BAND PLANXTON.

Feel the vibe with DJ SHIMMERIE

Good food, a carefully curated crowd, powerful performances, and an atmosphere built around bringing different sounds and cultures together.

**ONE EVENING**

This is where DJ meets nostalgic musics.

Where music meets movement.

Where different worlds fuse into one.

**THIS IS PROJECT NOIR.**

From our heart to yours

**PROJECT NOIR packages:**

**GENERAL ACCESS**

1650BDT PER PERSON

- Live music · Full of Nostalgia
- Band Performance · This gets better trust me.
- Dance performance by RENNESUS · Told ya...
- DJ Till the end · Come on how can we not !
- Complimentary Meal · Did you really think we were leaving you empty stomach!

**PREMIUM ACCESS**

2150/= BDT PER PERSON

- Live music · Full of Nostalgia
- Band Performance · This gets better trust me.
- Dance performance by RENNESUS · Told ya...
- DJ Till the end · Come on how can we not !
- Booze · I know you were thinking of this.
- Complimentary Meal · Did you really think we were leaving you empty stomach!

**18 of SEPTEMBER, 2026**

5 PM — 11 PM

Location: An-NOOR convention hall, behind of EAST WEST UNIVERSITY, Aftabnagar.

**THE TAKEOVER**

**THE FUSION BEGINS HERE.**`,

    tickets: [
      {
        name: 'General Entry',
        group: 'General',
        price: 1650,
        description: null,
        includes: [],
        available: true,
        sortOrder: 1,
      },
      {
        name: 'Premium entry',
        group: 'General',
        price: 2150,
        description: null,
        includes: [],
        available: true,
        sortOrder: 2,
      },
    ],
  },
}