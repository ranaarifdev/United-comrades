/* ==========================================================================
   United Comrades — Premium Group Website JavaScript
   ========================================================================== */
/**
 * 1. DATA-DRIVEN ARCHITECTURE
 * ALL image filenames verified exactly against /images folder.
 * GitHub Pages = Linux = case-sensitive. Every name must match perfectly.
 *
 * Verified folder contents (176 files):
 *   Arif1.jpg  Arif2.jpg  Arif3.jpg  Arif4.jpg  Arif5.jpg  Arif6.jpeg
 *   Arif7.jpg  Arif8.jpeg Arif9.jpeg Arif10.jpeg Arif11.jpeg Arif12.jpeg
 *   Aurangzaib1.jpeg Aurangzaib2.jpg Aurangzaib4.jpg Aurangzaib5.jpg
 *   Aurangzaib6.jpg  Aurangzaib7.jpeg Aurangzaib8.jpeg Aurangzaib9.jpeg
 *   Aurangzaib10.jpeg   (NO Aurangzaib3)
 *   Basit1.jpg  Basit2.jpg  Basit3.jpg  Basit4.jpg
 *   Basit5–40 all .jpeg
 *   Faizan1.jpeg  Faizan2.jpeg
 *   Hanan1.jpeg   Hanan2.jpeg
 *   Javed1–10 all .jpeg (capitalized Javed)
 *   Mursaleen1.jpeg  Mursaleen2.jpeg
 *   Rana1.jpg  Rana2.jpeg  Rana3.jpg  Rana4.jpg  Rana5.jpg  Rana6.jpg
 *   Rana7.jpg  Rana8.jpg  Rana9.jpg  Rana10.jpg Rana11.jpg Rana12.jpg
 *   Rana13.jpeg Rana14.jpg Rana15.jpg Rana16.jpg Rana17.jpg Rana18.jpg
 *   Rana19.jpg  Rana20.jpg  Rana21.jpg  Rana22.jpg  Rana23.jpg  Rana24.jpg
 *   Rana25.jpg  Rana26.jpg  Rana27.jpeg Rana28.jpeg Rana29.jpg  Rana30.jpg
 *   Rana31.jpeg Rana32.jpg  Rana33.jpg  Rana34.jpg  Rana35.jpeg Rana36.jpg
 *   Rana37.jpeg Rana38.jpg  Rana39.jpg  Rana40.jpg  Rana41.jpg  Rana42.jpeg
 *   Rana43.jpg  Rana44.jpeg Rana45.jpg  Rana46.jpg  Rana47.jpg  Rana48.jpg
 *   Rana49.jpg  Rana50.jpg  Rana51.jpeg Rana52.jpg  Rana53.jpeg Rana54.jpg
 *   Rana55.jpg  Rana56.jpeg Rana57.jpg  Rana58.jpg  Rana59.jpeg Rana60.jpeg
 *   Rana61.jpeg Rana62.jpg  Rana63.jpg  Rana64.jpeg Rana65.jpeg Rana66.jpg
 *   Rana67.jpg  Rana68.jpg  Rana69.jpeg Rana70.jpeg Rana71.jpeg Rana72.jpeg
 *   Rana73.jpg  Rana74.jpg  Rana75.jpeg Rana76.jpeg Rana77.jpeg Rana78.jpeg
 *   Rana79.jpeg Rana80.jpeg Rana81.jpeg Rana82.jpeg Rana83.jpeg Rana84.jpeg
 *   Rana85.jpeg Rana86.jpeg
 *   Saad1–5 all .jpeg
 *   Zahid1.jpeg Zahid2–8 all .jpg
 */

const members = [
  {
    name: "Aurangzaib",
    role: "Leader",
    description: "Developer at a company in Islamabad. Leads United Comrades with dedication and vision, guiding the brotherhood towards professional and academic excellence.",
    belongsTo: "DG Khan",
    images: [
      "Aurangzaib1.jpeg", "Aurangzaib2.jpg",  "Aurangzaib4.jpg",
      "Aurangzaib5.jpg",  "Aurangzaib6.jpg",  "Aurangzaib7.jpeg",
      "Aurangzaib8.jpeg", "Aurangzaib9.jpeg", "Aurangzaib10.jpeg"
    ]
  },
  {
    name: "Hanan Haider",
    role: "Event Manager",
    description: "Cyber Security Student at Emerson University Multan. Passionate about ethical hacking, network analysis, and securing digital infrastructure. Certified SEO and Web Developer.",
    belongsTo: "Kot Addu",
    images: ["Hanan1.jpeg", "Hanan2.jpeg"]
  },
  {
    name: "Muhammad Basit",
    role: "Additional Leader",
    description: "Senior Accountant at Aqil Mobile Shop. He manages the administrative and organizational operations of United Comrades while continuing his studies. Student of Cyber Security at Emerson University Multan. Passionate about ethical hacking, network analysis, and securing digital infrastructure.",
    belongsTo: "Ali Pur",
    images: [
      "Basit1.jpg",   "Basit2.jpg",   "Basit3.jpg",   "Basit4.jpg",
      "Basit5.jpeg",  "Basit6.jpeg",  "Basit7.jpeg",  "Basit8.jpeg",
      "Basit9.jpeg",  "Basit10.jpeg", "Basit11.jpeg", "Basit12.jpeg",
      "Basit13.jpeg", "Basit14.jpeg", "Basit15.jpeg", "Basit16.jpeg",
      "Basit17.jpeg", "Basit18.jpeg", "Basit19.jpeg", "Basit20.jpeg",
      "Basit21.jpeg", "Basit22.jpeg", "Basit23.jpeg", "Basit24.jpeg",
      "Basit25.jpeg", "Basit26.jpeg", "Basit27.jpeg", "Basit28.jpeg",
      "Basit29.jpeg", "Basit30.jpeg", "Basit31.jpeg", "Basit32.jpeg",
      "Basit33.jpeg", "Basit34.jpeg", "Basit35.jpeg", "Basit36.jpeg",
      "Basit37.jpeg", "Basit38.jpeg", "Basit39.jpeg", "Basit40.jpeg"
    ]
  },
  {
    name: "Faizan Ali Chohan",
    role: "Executive Coordinator",
    description: "Cyber Security Student | SEO Enthusiast | Digital Skills Explorer 🌐. Managing administrative and organizational functions at United Comrades.",
    belongsTo: "Muzaffargarh",
    images: ["Faizan1.jpeg", "Faizan2.jpeg"]
  },
  {
    name: "Muhammad Arif",
    role: "Website Developer & Manager of United Comrades",
    description: "Cyber Security Student at Emerson University Multan. Beginner web designer, backend developer, and network configurations specialist. Certified through Cisco Networking Academy, Security Blue Team, and Udemy in networking.",
    belongsTo: "Shujabad",
    images: [
      "Arif1.jpg",   "Arif2.jpg",   "Arif3.jpg",   "Arif4.jpg",
      "Arif5.jpg",   "Arif6.jpeg",  "Arif7.jpg",   "Arif8.jpeg",
      "Arif9.jpeg",  "Arif10.jpeg", "Arif11.jpeg",  "Arif12.jpeg"
    ]
  },
  {
    name: "Muhammad Zahid",
    role: "Accountant",
    description: "Cyber Security Student. Dedicated to researching malware analysis, network protocols, and hardware security frameworks. Learning Web development.",
    belongsTo: "Lahore",
    images: [
      "Zahid1.jpeg", "Zahid2.jpg", "Zahid3.jpg", "Zahid4.jpg",
      "Zahid5.jpg",  "Zahid6.jpg", "Zahid7.jpg", "Zahid8.jpg"
    ]
  },
  {
    name: "Javed Iqbal",
    role: "Analysts",
    description: "Cyber Security Student, SHO of BMP Defenders of border areas, Saviour of Koh-e-Suleman 💖, and IT Incharge BMP.",
    belongsTo: "Rajan Pur",
    images: [
      "Javed1.jpeg", "Javed2.jpeg",  "Javed3.jpeg",  "Javed4.jpeg",
      "Javed5.jpeg", "Javed6.jpeg",  "Javed7.jpeg",  "Javed8.jpeg",
      "Javed9.jpeg", "Javed10.jpeg"
    ]
  },
  {
    name: "Saad Habib",
    role: "Social Media Coordinator",
    description: "Cyber Security Student. Interested in social engineering prevention, security audits, and risk assessment strategies.",
    belongsTo: "Multan",
    images: ["Saad1.jpeg", "Saad2.jpeg", "Saad3.jpeg", "Saad4.jpeg", "Saad5.jpeg"]
  },
  {
    name: "Muhammad Mursaleen",
    role: "Social Media Coordinator",
    description: "Cyber Security Student. Focused on defensive security operations, threat hunting, and incident response procedures. Media Coordinator in United Comrades.",
    belongsTo: "Shujabad",
    images: ["Mursaleen1.jpeg", "Mursaleen2.jpeg"]
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// Group Album & Gallery Photos
// ALL filenames verified 1-to-1 against the /images folder (case-exact).
// GitHub Pages runs on Linux → filenames ARE case-sensitive.
// ─────────────────────────────────────────────────────────────────────────────
const albumPhotos = [

  // ── GROUP PHOTOS ──────────────────────────────────────────────────────────
  { src: 'Rana1.jpg',   category: 'group', title: 'Comrades Assemble' },
  { src: 'Rana2.jpeg',  category: 'group', title: 'Brotherhood Bonds' },
  { src: 'Rana3.jpg',   category: 'group', title: 'Stronger Together' },
  { src: 'Rana4.jpg',   category: 'group', title: 'Brotherhood Moments' },
  { src: 'Rana5.jpg',   category: 'group', title: 'Comrades Core' },
  { src: 'Rana6.jpg',   category: 'group', title: 'Emerson Courtyard' },
  { src: 'Rana7.jpg',   category: 'group', title: 'Group Vibes' },
  { src: 'Rana8.jpg',   category: 'group', title: 'Classmates' },
  { src: 'Rana9.jpg',   category: 'group', title: 'Campus Stroll' },
  { src: 'Rana11.jpg',  category: 'group', title: 'Comrades Gathering' },
  { src: 'Rana12.jpg',  category: 'group', title: 'Afternoon Chat' },
  { src: 'Rana14.jpg',  category: 'group', title: 'University Life' },
  { src: 'Rana16.jpg',  category: 'group', title: 'Group Portrait' },
  { src: 'Rana17.jpg',  category: 'group', title: 'Study Session Break' },
  { src: 'Rana18.jpg',  category: 'group', title: 'Comrades Smile' },
  { src: 'Rana19.jpg',  category: 'group', title: 'Outdoor Gathering' },
  { src: 'Rana20.jpg',  category: 'group', title: 'Lawn Discussion' },
  { src: 'Rana21.jpg',  category: 'group', title: 'Academic Life' },
  { src: 'Rana22.jpg',  category: 'group', title: 'Cyber Security Unit' },
  { src: 'Rana23.jpg',  category: 'group', title: 'Laughter & Memories' },
  { src: 'Rana24.jpg',  category: 'group', title: 'Group Photo' },
  { src: 'Rana25.jpg',  category: 'group', title: 'Afternoon Group' },
  { src: 'Rana26.jpg',  category: 'group', title: 'Sunny Day Gathering' },
  { src: 'Rana29.jpg',  category: 'group', title: 'Campus Walkway' },
  { src: 'Rana30.jpg',  category: 'group', title: 'Group Memory' },
  { src: 'Rana34.jpg',  category: 'group', title: 'Emerson Comrades' },
  { src: 'Rana36.jpg',  category: 'group', title: 'Main Campus Gate' },
  { src: 'Rana39.jpg',  category: 'group', title: 'Under the Tree' },
  { src: 'Rana40.jpg',  category: 'group', title: 'Casual Talk' },
  { src: 'Rana41.jpg',  category: 'group', title: 'University Friends' },
  { src: 'Rana42.jpeg', category: 'group', title: 'Comrades Lineup' },
  { src: 'Rana43.jpg',  category: 'group', title: 'Campus Lawn' },
  { src: 'Rana44.jpeg', category: 'group', title: 'Cyber Group' },
  { src: 'Rana45.jpg',  category: 'group', title: 'Shaded Bench' },
  { src: 'Rana46.jpg',  category: 'group', title: 'Gathering Photo' },
  { src: 'Rana47.jpg',  category: 'group', title: 'Classmates Bond' },
  { src: 'Rana48.jpg',  category: 'group', title: 'Group Pose' },
  { src: 'Rana49.jpg',  category: 'group', title: 'Comrades Day' },
  { src: 'Rana50.jpg',  category: 'group', title: 'Campus Steps' },
  { src: 'Rana52.jpg',  category: 'group', title: 'Lawn Portrait' },
  { src: 'Rana54.jpg',  category: 'group', title: 'Group Together' },
  { src: 'Rana57.jpg',  category: 'group', title: 'Campus Portrait' },

  // ── EVENTS / MEMORIES ────────────────────────────────────────────────────
  { src: 'Rana10.jpg',  category: 'events', title: 'University Event' },
  { src: 'Rana13.jpeg', category: 'events', title: 'Department Presentation' },
  { src: 'Rana15.jpg',  category: 'events', title: 'Special Ceremony' },
  { src: 'Rana27.jpeg', category: 'events', title: 'Campus Event' },
  { src: 'Rana28.jpeg', category: 'events', title: 'Brotherhood Moment' },
  { src: 'Rana31.jpeg', category: 'events', title: 'Campus Gathering' },
  { src: 'Rana32.jpg',  category: 'events', title: 'Cyber Security Seminar' },
  { src: 'Rana33.jpg',  category: 'events', title: 'Gathering Event' },
  { src: 'Rana35.jpeg', category: 'events', title: 'Special Memory' },
  { src: 'Rana37.jpeg', category: 'events', title: 'Campus Day' },
  { src: 'Rana38.jpg',  category: 'events', title: 'Comrades Circle' },
  { src: 'Rana51.jpeg', category: 'events', title: 'Emerson Sports Day' },
  { src: 'Rana53.jpeg', category: 'events', title: 'Sports Event Group' },
  { src: 'Rana55.jpg',  category: 'events', title: 'Official Celebration' },
  { src: 'Rana56.jpeg', category: 'events', title: 'Special Gathering' },
  { src: 'Rana58.jpg',  category: 'events', title: 'Campus Memories' },
  { src: 'Rana59.jpeg', category: 'events', title: 'Comrades Event' },
  { src: 'Rana60.jpeg', category: 'events', title: 'Tech Talk Gathering' },
  { src: 'Rana61.jpeg', category: 'events', title: 'Class Presentation Day' },
  { src: 'Rana62.jpg',  category: 'events', title: 'Special Occasion' },
  { src: 'Rana63.jpg',  category: 'events', title: 'Annual Celebration' },
  { src: 'Rana64.jpeg', category: 'events', title: 'Annual Dinner' },
  { src: 'Rana65.jpeg', category: 'events', title: 'Department Meetup' },
  { src: 'Rana66.jpg',  category: 'events', title: 'Farewell Gathering' },
  { src: 'Rana67.jpg',  category: 'events', title: 'Computing Lab Event' },
  { src: 'Rana68.jpg',  category: 'events', title: 'Campus Event' },
  { src: 'Rana69.jpeg', category: 'events', title: 'Group Moment' },
  { src: 'Rana70.jpeg', category: 'events', title: 'Comrades Reunion' },
  { src: 'Rana71.jpeg', category: 'events', title: 'University Life' },
  { src: 'Rana72.jpeg', category: 'events', title: 'Outdoor Event' },
  { src: 'Rana73.jpg',  category: 'events', title: 'Campus Walk' },
  { src: 'Rana74.jpg',  category: 'events', title: 'Comrades Moment' },
  { src: 'Rana75.jpeg', category: 'events', title: 'Campus Memory' },
  { src: 'Rana76.jpeg', category: 'events', title: 'Brotherhood Day' },
  { src: 'Rana77.jpeg', category: 'events', title: 'Comrades Spirit' },
  { src: 'Rana78.jpeg', category: 'events', title: 'Friendship Forever' },
  { src: 'Rana79.jpeg', category: 'events', title: 'United We Stand' },
  { src: 'Rana80.jpeg', category: 'events', title: 'Comrades Legacy' },
  { src: 'Rana81.jpeg', category: 'events', title: 'Brotherhood Vibes' },
  { src: 'Rana82.jpeg', category: 'events', title: 'Together Always' },
  { src: 'Rana83.jpeg', category: 'events', title: 'UC Memories' },
  { src: 'Rana84.jpeg', category: 'events', title: 'Comrades Bond' },
  { src: 'Rana85.jpeg', category: 'events', title: 'Campus Moments' },
  { src: 'Rana86.jpeg', category: 'events', title: 'Brotherhood Forever' },

  // ── INDIVIDUAL MEMBERS ────────────────────────────────────────────────────
  // Muhammad Arif — 12 photos (Arif1-5.jpg, Arif6.jpeg, Arif7.jpg, Arif8-12.jpeg)
  { src: 'Arif1.jpg',   category: 'individual', title: 'Muhammad Arif' },
  { src: 'Arif2.jpg',   category: 'individual', title: 'Muhammad Arif' },
  { src: 'Arif3.jpg',   category: 'individual', title: 'Muhammad Arif' },
  { src: 'Arif4.jpg',   category: 'individual', title: 'Muhammad Arif' },
  { src: 'Arif5.jpg',   category: 'individual', title: 'Muhammad Arif' },
  { src: 'Arif6.jpeg',  category: 'individual', title: 'Muhammad Arif' },
  { src: 'Arif7.jpg',   category: 'individual', title: 'Muhammad Arif' },
  { src: 'Arif8.jpeg',  category: 'individual', title: 'Muhammad Arif' },
  { src: 'Arif9.jpeg',  category: 'individual', title: 'Muhammad Arif' },
  { src: 'Arif10.jpeg', category: 'individual', title: 'Muhammad Arif' },
  { src: 'Arif11.jpeg', category: 'individual', title: 'Muhammad Arif' },
  { src: 'Arif12.jpeg', category: 'individual', title: 'Muhammad Arif' },

  // Aurangzaib — 9 photos (no Aurangzaib3 in folder)
  { src: 'Aurangzaib1.jpeg',  category: 'individual', title: 'Aurangzaib' },
  { src: 'Aurangzaib2.jpg',   category: 'individual', title: 'Aurangzaib' },
  { src: 'Aurangzaib4.jpg',   category: 'individual', title: 'Aurangzaib' },
  { src: 'Aurangzaib5.jpg',   category: 'individual', title: 'Aurangzaib' },
  { src: 'Aurangzaib6.jpg',   category: 'individual', title: 'Aurangzaib' },
  { src: 'Aurangzaib7.jpeg',  category: 'individual', title: 'Aurangzaib' },
  { src: 'Aurangzaib8.jpeg',  category: 'individual', title: 'Aurangzaib' },
  { src: 'Aurangzaib9.jpeg',  category: 'individual', title: 'Aurangzaib' },
  { src: 'Aurangzaib10.jpeg', category: 'individual', title: 'Aurangzaib' },

  // Muhammad Basit — 40 photos (Basit1-4.jpg, Basit5-40.jpeg)
  { src: 'Basit1.jpg',   category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit2.jpg',   category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit3.jpg',   category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit4.jpg',   category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit5.jpeg',  category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit6.jpeg',  category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit7.jpeg',  category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit8.jpeg',  category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit9.jpeg',  category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit10.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit11.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit12.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit13.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit14.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit15.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit16.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit17.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit18.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit19.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit20.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit21.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit22.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit23.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit24.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit25.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit26.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit27.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit28.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit29.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit30.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit31.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit32.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit33.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit34.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit35.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit36.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit37.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit38.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit39.jpeg', category: 'individual', title: 'Muhammad Basit' },
  { src: 'Basit40.jpeg', category: 'individual', title: 'Muhammad Basit' },

  // Muhammad Zahid — 8 photos (Zahid1.jpeg, Zahid2-8.jpg)
  { src: 'Zahid1.jpeg', category: 'individual', title: 'Muhammad Zahid' },
  { src: 'Zahid2.jpg',  category: 'individual', title: 'Muhammad Zahid' },
  { src: 'Zahid3.jpg',  category: 'individual', title: 'Muhammad Zahid' },
  { src: 'Zahid4.jpg',  category: 'individual', title: 'Muhammad Zahid' },
  { src: 'Zahid5.jpg',  category: 'individual', title: 'Muhammad Zahid' },
  { src: 'Zahid6.jpg',  category: 'individual', title: 'Muhammad Zahid' },
  { src: 'Zahid7.jpg',  category: 'individual', title: 'Muhammad Zahid' },
  { src: 'Zahid8.jpg',  category: 'individual', title: 'Muhammad Zahid' },

  // Javed Iqbal — 10 photos (all .jpeg, capitalized Javed)
  { src: 'Javed1.jpeg',  category: 'individual', title: 'Javed Iqbal' },
  { src: 'Javed2.jpeg',  category: 'individual', title: 'Javed Iqbal' },
  { src: 'Javed3.jpeg',  category: 'individual', title: 'Javed Iqbal' },
  { src: 'Javed4.jpeg',  category: 'individual', title: 'Javed Iqbal' },
  { src: 'Javed5.jpeg',  category: 'individual', title: 'Javed Iqbal' },
  { src: 'Javed6.jpeg',  category: 'individual', title: 'Javed Iqbal' },
  { src: 'Javed7.jpeg',  category: 'individual', title: 'Javed Iqbal' },
  { src: 'Javed8.jpeg',  category: 'individual', title: 'Javed Iqbal' },
  { src: 'Javed9.jpeg',  category: 'individual', title: 'Javed Iqbal' },
  { src: 'Javed10.jpeg', category: 'individual', title: 'Javed Iqbal' },

  // Saad Habib — 5 photos (all .jpeg)
  { src: 'Saad1.jpeg', category: 'individual', title: 'Saad Habib' },
  { src: 'Saad2.jpeg', category: 'individual', title: 'Saad Habib' },
  { src: 'Saad3.jpeg', category: 'individual', title: 'Saad Habib' },
  { src: 'Saad4.jpeg', category: 'individual', title: 'Saad Habib' },
  { src: 'Saad5.jpeg', category: 'individual', title: 'Saad Habib' },

  // Muhammad Mursaleen — 2 photos
  { src: 'Mursaleen1.jpeg', category: 'individual', title: 'Muhammad Mursaleen' },
  { src: 'Mursaleen2.jpeg', category: 'individual', title: 'Muhammad Mursaleen' },

  // Hanan Haider — 2 photos
  { src: 'Hanan1.jpeg', category: 'individual', title: 'Hanan Haider' },
  { src: 'Hanan2.jpeg', category: 'individual', title: 'Hanan Haider' },

  // Faizan Ali Chohan — 2 photos
  { src: 'Faizan1.jpeg', category: 'individual', title: 'Faizan Ali Chohan' },
  { src: 'Faizan2.jpeg', category: 'individual', title: 'Faizan Ali Chohan' }
];

/**
 * 2. IMAGE UTILITIES (Error Safe & Path Prepending)
 */
function resolveImagePath(path) {
  if (!path) return 'images/placeholder.svg';
  // If it's already an absolute URL or starts with images/, keep it
  if (path.startsWith('http') || path.startsWith('images/') || path.startsWith('./')) {
    return path;
  }
  // Otherwise prepend images/
  return `images/${path}`;
}

/**
 * Helper to handle avatar loading with progressive fallback.
 * Tries each image in the list; falls back to placeholder SVG on all failures.
 */
function setupAvatarFallback(imgElement, imageList) {
  let attemptIdx = 0;

  imgElement.onerror = function () {
    attemptIdx++;
    if (imageList && attemptIdx < imageList.length) {
      imgElement.src = resolveImagePath(imageList[attemptIdx]);
    } else {
      // Show a nice placeholder instead of broken image
      imgElement.src = generatePlaceholderSVG();
      imgElement.onerror = null; // Prevent infinite loop
    }
  };

  // Set initial source
  if (imageList && imageList.length > 0) {
    imgElement.src = resolveImagePath(imageList[0]);
  } else {
    imgElement.src = generatePlaceholderSVG();
  }
}

/**
 * Generate an inline SVG data URL as placeholder (no network request needed).
 */
function generatePlaceholderSVG() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
    <rect width="300" height="300" fill="#141414"/>
    <circle cx="150" cy="120" r="50" fill="#222"/>
    <rect x="75" y="190" width="150" height="80" rx="40" fill="#222"/>
    <text x="150" y="270" text-anchor="middle" fill="#555" font-size="14" font-family="sans-serif">No Photo</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

/**
 * 3. RENDER MEMBER CARDS
 */
function renderMemberCards() {
  const grid = document.getElementById('membersGrid');
  if (!grid) return;

  grid.innerHTML = '';

  members.forEach((member, index) => {
    const card = document.createElement('div');
    card.className = 'member-card fade-in';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.onclick = () => openMemberModal(index);
    card.onkeypress = (e) => { if (e.key === 'Enter') openMemberModal(index); };

    // Placeholder while loading
    const placeholder = generatePlaceholderSVG();

    card.innerHTML = `
      <div class="member-card-img-wrap">
        <img src="${placeholder}" alt="${member.name}" loading="lazy" class="member-card-img" decoding="async">
        <div class="member-card-overlay">
          <span class="member-card-view">View Profile →</span>
        </div>
      </div>
      <div class="member-card-body">
        <h3 class="member-card-name">${member.name}</h3>
        <span class="member-card-role">${member.role}</span>
        ${member.images && member.images.length > 0 ? `<span class="member-card-photos">${member.images.length} Photos</span>` : ''}
        ${member.belongsTo ? `<span class="member-card-city">📍 ${member.belongsTo}</span>` : ''}
      </div>
    `;

    // Set fallback logic on card image
    const img = card.querySelector('.member-card-img');
    setupAvatarFallback(img, member.images);

    grid.appendChild(card);
  });
}

/**
 * 4. MEMBER MODAL SLIDER SYSTEM
 */
let currentMemberSliderIndex = 0;
let currentMemberImages = [];

function openMemberModal(index) {
  const m = members[index];
  const modal = document.getElementById('memberModal');
  if (!modal) return;

  document.getElementById('memberModalName').textContent = m.name;
  document.getElementById('memberModalRole').textContent = m.role;
  document.getElementById('memberModalDesc').textContent = m.description;

  // Format images array
  currentMemberImages = m.images && m.images.length > 0 ? m.images : [];
  currentMemberSliderIndex = 0;

  // Display images count
  const countBadge = document.getElementById('memberModalPhotoCount');
  if (countBadge) {
    countBadge.textContent = currentMemberImages.length > 0 ? `${currentMemberImages.length} Photos` : '';
  }

  // Initialize slider and thumbnails
  renderMemberSlider();
  renderMemberThumbnails();

  modal.classList.add('show');
  document.body.style.overflow = 'hidden';

  // Push history state so back button closes modal instead of leaving site
  history.pushState({ modal: 'member', memberIndex: index }, '');
}

function closeMemberModal() {
  const modal = document.getElementById('memberModal');
  if (modal) modal.classList.remove('show');
  document.body.style.overflow = '';
}

function renderMemberSlider() {
  const sliderImg = document.getElementById('memberModalSliderImg');
  const dotsContainer = document.getElementById('memberSliderDots');
  if (!sliderImg) return;

  dotsContainer.innerHTML = '';

  if (currentMemberImages.length === 0) {
    sliderImg.src = generatePlaceholderSVG();
    sliderImg.onerror = null;
    sliderImg.style.cursor = 'default';
    sliderImg.onclick = null;
    const navBtns = document.querySelector('.member-slider-nav-btns');
    if (navBtns) navBtns.style.display = 'none';
    return;
  }

  const navBtns = document.querySelector('.member-slider-nav-btns');
  if (navBtns) navBtns.style.display = currentMemberImages.length > 1 ? 'flex' : 'none';

  // Click on main image opens full-screen preview lightbox
  sliderImg.style.cursor = 'zoom-in';
  sliderImg.onclick = () => {
    const fullList = currentMemberImages.map(img => resolveImagePath(img));
    openPreviewFromList(fullList, currentMemberSliderIndex);
  };

  // Update image source with smart fallback
  updateSliderImage();

  // Render dots
  if (currentMemberImages.length > 1) {
    currentMemberImages.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.className = `dot ${i === currentMemberSliderIndex ? 'active' : ''}`;
      dot.onclick = () => {
        currentMemberSliderIndex = i;
        updateSliderImage();
      };
      dotsContainer.appendChild(dot);
    });
  }
}

function updateSliderImage() {
  const sliderImg = document.getElementById('memberModalSliderImg');
  if (!sliderImg) return;

  // Add a smooth fade effect
  sliderImg.style.opacity = '0.3';

  const src = resolveImagePath(currentMemberImages[currentMemberSliderIndex]);

  sliderImg.onerror = function () {
    sliderImg.src = generatePlaceholderSVG();
    sliderImg.onerror = null;
    sliderImg.style.opacity = '1';
  };

  sliderImg.onload = function () {
    sliderImg.style.opacity = '1';
  };

  sliderImg.src = src;

  // Update active dot class
  const dots = document.querySelectorAll('#memberSliderDots .dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentMemberSliderIndex);
  });

  // Update active thumbnail border
  const thumbs = document.querySelectorAll('#memberModalGallery .member-gallery-item');
  thumbs.forEach((thumb, idx) => {
    thumb.classList.toggle('active', idx === currentMemberSliderIndex);
  });

  // Scroll active thumbnail into view
  if (thumbs[currentMemberSliderIndex]) {
    thumbs[currentMemberSliderIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}

function navigateMemberSlider(direction) {
  if (currentMemberImages.length <= 1) return;
  currentMemberSliderIndex = (currentMemberSliderIndex + direction + currentMemberImages.length) % currentMemberImages.length;
  updateSliderImage();
}

function renderMemberThumbnails() {
  const gallery = document.getElementById('memberModalGallery');
  if (!gallery) return;

  gallery.innerHTML = '';

  if (currentMemberImages.length === 0) {
    gallery.innerHTML = '<div class="no-photos"><p>📷 No photos yet</p><span>Photos will be added soon</span></div>';
    return;
  }

  currentMemberImages.forEach((photo, i) => {
    const item = document.createElement('div');
    item.className = `member-gallery-item ${i === currentMemberSliderIndex ? 'active' : ''}`;

    const thumbImg = document.createElement('img');
    thumbImg.src = resolveImagePath(photo);
    thumbImg.alt = `Photo ${i + 1}`;
    thumbImg.loading = 'lazy';
    thumbImg.decoding = 'async';

    // Thumbnail fallback
    thumbImg.onerror = function () {
      thumbImg.src = generatePlaceholderSVG();
      thumbImg.onerror = null;
    };

    item.onclick = () => {
      currentMemberSliderIndex = i;
      updateSliderImage();
    };

    item.appendChild(thumbImg);
    gallery.appendChild(item);
  });
}

/**
 * 5. UNITED ALBUM DYNAMIC FILTERING
 */
let filteredPhotosList = [];

// Lazy loading via IntersectionObserver for album grid
const imageObserver = typeof IntersectionObserver !== 'undefined'
  ? new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  }, { rootMargin: '200px 0px' })
  : null;

function renderGroupAlbum(filterCategory = 'all') {
  const grid = document.getElementById('groupAlbumGrid');
  if (!grid) return;

  grid.innerHTML = '';

  // Filter photos
  filteredPhotosList = filterCategory === 'all'
    ? albumPhotos
    : albumPhotos.filter(p => p.category === filterCategory);

  // Render each photo
  filteredPhotosList.forEach((photo, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-item fade-in';
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');

    const src = resolveImagePath(photo.src);

    item.innerHTML = `
      <img data-src="${src}" src="${generatePlaceholderSVG()}" alt="${photo.title}" loading="lazy" class="gallery-img" decoding="async">
      <div class="gallery-item-overlay">
        <span class="gallery-item-title">${photo.title}</span>
        <span class="gallery-item-cat">${photo.category.toUpperCase()}</span>
      </div>
    `;

    const img = item.querySelector('.gallery-img');
    img.onerror = function () {
      img.src = generatePlaceholderSVG();
      img.onerror = null;
    };

    // Use IntersectionObserver for true lazy loading
    if (imageObserver) {
      imageObserver.observe(img);
    } else {
      img.src = src;
    }

    item.onclick = () => openPreviewFromList(filteredPhotosList.map(p => resolveImagePath(p.src)), index);
    item.onkeypress = (e) => { if (e.key === 'Enter') openPreviewFromList(filteredPhotosList.map(p => resolveImagePath(p.src)), index); };

    grid.appendChild(item);

    // Trigger smooth fade-in after append
    setTimeout(() => {
      item.classList.add('visible');
    }, 40 + (index * 12)); // staggered slide-in
  });
}

function setupFilterNavigation() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      // Remove active class from all
      filterButtons.forEach(b => b.classList.remove('active'));
      // Add active to clicked
      this.classList.add('active');

      const filter = this.getAttribute('data-filter');

      // Animate grid change
      const grid = document.getElementById('groupAlbumGrid');
      grid.style.opacity = '0';
      grid.style.transform = 'translateY(15px)';

      setTimeout(() => {
        renderGroupAlbum(filter);
        grid.style.opacity = '1';
        grid.style.transform = 'translateY(0)';
      }, 280);
    });
  });
}

/**
 * 6. SHARED PREVIEW MODAL (LIGHTBOX)
 */
let currentPreviewList = [];
let currentPreviewIndex = 0;
let previewModal, previewImage, previewVideo, modalCounter;

function initPreviewElements() {
  previewModal = document.getElementById('previewModal');
  previewImage = document.getElementById('previewImage');
  previewVideo = document.getElementById('previewVideo');
  modalCounter = document.getElementById('modalCounter');
}

function openPreviewFromList(list, index) {
  currentPreviewList = list;
  currentPreviewIndex = index;
  showPreviewItem();

  if (previewModal) {
    previewModal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  // Push history state so back button closes preview instead of leaving site
  history.pushState({ modal: 'preview' }, '');
}

function showPreviewItem() {
  if (!previewModal) return;
  const src = currentPreviewList[currentPreviewIndex];

  if (modalCounter) {
    modalCounter.textContent = `${currentPreviewIndex + 1} / ${currentPreviewList.length}`;
  }

  if (src && src.match(/\.(mp4|webm|ogg)$/i)) {
    if (previewVideo) {
      previewVideo.src = src;
      previewVideo.style.display = 'block';
      previewVideo.play().catch(() => { });
    }
    if (previewImage) previewImage.style.display = 'none';
  } else {
    if (previewImage) {
      previewImage.style.opacity = '0';
      previewImage.src = src;
      previewImage.style.display = 'block';
      previewImage.onload = function () {
        previewImage.style.opacity = '1';
      };
      previewImage.onerror = function () {
        previewImage.src = generatePlaceholderSVG();
        previewImage.style.opacity = '1';
        previewImage.onerror = null;
      };
    }
    if (previewVideo) {
      previewVideo.style.display = 'none';
      previewVideo.pause();
    }
  }
}

function navigatePreview(direction) {
  if (currentPreviewList.length <= 1) return;
  currentPreviewIndex = (currentPreviewIndex + direction + currentPreviewList.length) % currentPreviewList.length;
  showPreviewItem();
}

function closePreview() {
  if (previewModal) {
    previewModal.classList.remove('show');
  }

  // Restore body overflow only if member modal is not open
  const memberModal = document.getElementById('memberModal');
  const isMemberModalOpen = memberModal && memberModal.classList.contains('show');
  document.body.style.overflow = isMemberModalOpen ? 'hidden' : '';

  setTimeout(() => {
    if (previewImage) {
      previewImage.src = '';
      previewImage.style.opacity = '0';
    }
    if (previewVideo) {
      previewVideo.pause();
      previewVideo.removeAttribute('src');
      previewVideo.load();
    }
  }, 400);
}

// Bind lightbox functions to window so inline onclick works
window.navigatePreview = navigatePreview;
window.closePreview = closePreview;

/**
 * 7. TOUCH / SWIPE SUPPORT FOR LIGHTBOX & MEMBER SLIDER
 */
function setupSwipeSupport(element, onSwipeLeft, onSwipeRight) {
  let startX = 0;
  let startY = 0;

  element.addEventListener('touchstart', (e) => {
    startX = e.changedTouches[0].clientX;
    startY = e.changedTouches[0].clientY;
  }, { passive: true });

  element.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) onSwipeLeft();
      else onSwipeRight();
    }
  }, { passive: true });
}

/**
 * 8. CORE EVENT LISTENERS & INITIALIZATION
 */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize preview modal element references
  initPreviewElements();

  // Render UI Components
  renderMemberCards();
  renderGroupAlbum('all');
  setupFilterNavigation();

  // Sticky Navbar
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 100);
    }, { passive: true });
  }

  // Mobile Nav Toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('active');
    });
  }

  // Global Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    // If preview modal is open
    if (previewModal && previewModal.classList.contains('show')) {
      if (e.key === 'Escape') closePreview();
      if (e.key === 'ArrowLeft') navigatePreview(-1);
      if (e.key === 'ArrowRight') navigatePreview(1);
      return;
    }

    // If member modal is open
    const memberModal = document.getElementById('memberModal');
    if (memberModal && memberModal.classList.contains('show')) {
      if (e.key === 'Escape') closeMemberModal();
      if (e.key === 'ArrowLeft') navigateMemberSlider(-1);
      if (e.key === 'ArrowRight') navigateMemberSlider(1);
    }
  });

  // Swipe support for lightbox
  if (previewModal) {
    setupSwipeSupport(
      previewModal,
      () => navigatePreview(1),
      () => navigatePreview(-1)
    );
  }

  // Swipe support for member modal slider
  const memberSlider = document.querySelector('.member-slider');
  if (memberSlider) {
    setupSwipeSupport(
      memberSlider,
      () => navigateMemberSlider(1),
      () => navigateMemberSlider(-1)
    );
  }

  // Scroll Fade-in observer
  setupScrollAnimations();

  // Initialize Particle Canvas
  initParticleCanvas();

  // ── BACK BUTTON NAVIGATION ─────────────────────────────────────────────
  // Handle browser back button to close modals instead of leaving the site
  window.addEventListener('popstate', (e) => {
    const state = e.state;

    // If preview lightbox is open, close it first
    if (previewModal && previewModal.classList.contains('show')) {
      closePreview();
      return;
    }

    // If member modal is open, close it
    const memberModal = document.getElementById('memberModal');
    if (memberModal && memberModal.classList.contains('show')) {
      closeMemberModal();
      return;
    }
  });

  // Set initial history state so first back press triggers popstate
  history.replaceState({ modal: null }, '');
});

// Close Mobile Nav Helper
window.closeNav = function () {
  const navLinks = document.getElementById('navLinks');
  const navToggle = document.getElementById('navToggle');
  if (navLinks) navLinks.classList.remove('open');
  if (navToggle) navToggle.classList.remove('active');
};

// Bind Modal controls to window
window.closeMemberModal = closeMemberModal;
window.navigateMemberSlider = navigateMemberSlider;

/**
 * 9. SCROLL ANIMATIONS (INTERSECTION OBSERVER)
 */
function setupScrollAnimations() {
  const fadeItems = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeItems.forEach(item => observer.observe(item));
}

/**
 * 10. CANVAS PARTICLE BACKGROUND ANIMATION
 */
function initParticleCanvas() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  const particleCount = 50;
  let animationId;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas, { passive: true });

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 2 + 0.6;
      this.opacity = Math.random() * 0.35 + 0.15;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    // Draw connecting lines between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 115) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(212, 175, 55, ${0.09 * (1 - dist / 115)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    animationId = requestAnimationFrame(animate);
  }

  animate();

  // Pause animation when tab is hidden to save resources
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      animate();
    }
  });
}
