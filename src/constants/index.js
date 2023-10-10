import {
    bake,
    book,
    chess,
    leaf,
    note,
    yoga,
    html,
    tailwind,
    cSharp,
    cPlusPlus,
    java,
    go,
    python,
    redis,
    looker,
    dart,
    github,
    firebase,
    mirror,
    photoshop,
    twoducky,
    doubleaxion,
    storm8,
    chegg,
    bitrush,
    hackathons,
    lifeformula,
    lyricnn,
    thesis,
    web,
    playstore
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "portfolio",
      title: "Portfolio",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Nature Admirer",
      icon: leaf,
    },
    {
      title: "Spiritual Seeker",
      icon: yoga,
    },
    {
      title: "Carnatic Singer",
      icon: note,
    },
    {
      title: "Recipe Explorer",
      icon: bake,
    },
    {
      title: "Chess Enthusiast",
      icon: chess,
    },
    {
      title: "Avid Bookworm",
      icon: book,
    },
  ];
  
  const technologies = [
    {
      name: "Unity3D C#",
      icon: cSharp,
    },
    {
      name: "C++",
      icon: cPlusPlus,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Go",
      icon: go,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Redis",
      icon: redis,
    },
    {
      name: "Looker",
      icon: looker,
    },
    {
      name: "GitHub",
      icon: github,
    },
    {
      name: "Dart",
      icon: dart,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Mirror Networking",
      icon: mirror,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "TailwindCSS",
      icon: tailwind,
    },
    {
      name: "Photoshop",
      icon: photoshop,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Software Engineer",
      company_name: "Storm8",
      icon: storm8,
      iconBg: "#E8E9EB",//"#383E56",
      date: "Oct 2021 - Sep 2023",
      points: [
        "Maintain responsibility for front-end changes in Unity3D C#, Protobuf, and Google Sheets integration across features, events, ad experiments, and internal tools, optimizing team productivity and user engagement.",
        "Partnered with the UI team as the main engineer to execute a sweeping UI Bottom HUD and tutorial overhaul, resulting in substantial screen real estate and improved user experience.",
        "Enabled server-side sale logic, and push notification token systems while tunneling to AWS using Go integrated with Redis, JSON, SQL, and Unity3D C#, for experimenting on increased revenue, retention, and quality-of-life.",
        "Spearheaded front-end functionality for “Designer vs Designer”, “Home Design TV”, and “Sweepstakes” features in “Property Bros: Home Design” and “Home Design: Makeover” apps, yielding an unprecedented boost in revenue.",
        "Demonstrate strong knowledge of SourceTree for version control and Looker for analytics observation.",
        "Foster and sustain collaborative working relationships with various leads to drive development.",
        "Ensure project completion and optimal quality within an Agile development environment.",
        "Perform software testing and bug-fixing through code reviews to verify proper functionality."
      ],
    },
    {
      title: "Core Game Mechanics Intern",
      company_name: "TwoDucky Studios",
      icon: twoducky,
      iconBg: "#E8E9EB",//"#E6DEDD",
      date: "Jan 2019 - Mar 2019",
      points: [
        "Charted the successful development of an audio tool prototype using Unity3D C# editor tools.",
        "Integrated various features, such as beats per minute (BPM), auto play, and key placement.",
        "Adapted to quickly changing priorities within a fast-paced and tight-knit work environment.",
        "Used strong critical thinking and problem-solving skills to efficiently resolve technical issues.",
      ],
    },
    {
      title: "Unity Game Programmer Intern",
      company_name: "Double Axion Games",
      icon: doubleaxion,
      iconBg: "#E8E9EB",//"#383E56",
      date: "Jul 2017 - Sep 2018",
      points: [
        "Gained experience using Unity3D C# to program with Photon Unity Networking (PUN), Google Leaderboards, AI, gameplay, and in-app purchases for the “Tank Crashers” app beta on the Google Play Store.",
        "Solo engineer in repurposing gameplay for educational children’s apps in the Multiverse Games sector.",
        "Led the Chromefire Trivia 2D project independently with Android/Windows support in Unity3D C#.",
      ],
    },
    {
      title: "Student Tutor",
      company_name: "Coding Minds, Chegg, Tutorme",
      icon: chegg,
      iconBg: "#E8E9EB",//"#E6DEDD",
      date: "Sep 2015 - Aug 2021",
      points: [
        "Tutored students on a variety of academic subjects, including Unity, mathematics, and writing.",
        "Leveraged strong interpersonal and communication skills to build relationships of trust.",
        "Gained a deep understanding of student needs to provide tailored support.",
        "Recommended supplementary resources and materials to boost student development.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Nandan is a team player that knows what is needed for a project, and will strive to fulfill and exceed that need in all possible ways.",
      name: "Jonathan Fong",
      designation: "QA Engineer",
      company: "ThirdVerse",
      image: "src/assets/people/jonathanf.jpg",
    },
    {
      testimonial:
        "I have always been impressed with Nandan's ingenuity in engineering solutions, integrity as a team member, and leadership skills in large groups under any circumstances.",
      name: "Kyle Turchik",
      designation: "Sr Tech UI Designer",
      company: "High Moon Studios",
      image: "src/assets/people/kylet.jpg",
    },
    {
      testimonial:
        "Every Hackathon I participated in with Nandan as a teammate, he consistently demonstrated effective communication and collaboration with all members in the team. His initiative, flexibility, and willingness to lead was paramount to our success, and he proved himself to be a valuable asset to any team.",
      name: "Lance Dall",
      designation: "Software Engineer",
      company: "Powur",
      image: "src/assets/people/lance.jpg",
    },
    /*{
      testimonial:
        "I've worked with Nandan on several projects supporting the student game developer community. Nandan is dependable, cheerful, and constructive. He's someone I like to have on my team.",
      name: "Peter Doria",
      designation: "Game Developer",
      company: "",
      image: "",
    },*/
  ];
  
  const projects = [
    {
      name: "Masters' Thesis",
      description:
        "A study of video game development techniques for students to improve financial literacy. Involves building a single player card game system, pre-testing several students, having them test the game, and evaluates results based on their responses to a follow-up test on whether it was an effective strategy.",
      tags: [
        {
          name: "financial-literacy",
          color: "text-heroColor font-bold",
        },
        {
          name: "game-development",
          color: "text-peacockMagenta font-bold",
        },
      ],
      image: thesis,
      icon: web,
      source_code_link: "https://scholarworks.calstate.edu/concern/theses/8w32rb87c",
    },
    {
      name: "Life Formula",
      description:
        "Designed with the idea of ancient Indian medicine, or Ayurveda, in mind, life formula was built to help people categorize themselves based on their many physiological and mental functions. Based on their profile, the best suggestions catered to you are offered such that you can find your own path to success.",
      tags: [
        {
          name: "flutter",
          color: "text-heroColor font-bold",
        },
        {
          name: "firebase",
          color: "text-peacockMagenta font-bold",
        },
      ],
      image: lifeformula,
      icon: web,
      source_code_link: "https://nandanvinjamury.github.io/lifeformula/",
    },
    {
      name: "Bit Rush",
      description:
        "A simple platformer demo with challenging obstacles barring your way, this game pushes you to improve your time. The goal is to find out how to reach the finish line by unlocking it through reaching three pink platforms. Follow the rules of this flat world, or pay the price! Welcome to Bit Rush!",
      tags: [
        {
          name: "unity3d",
          color: "text-heroColor font-bold",
        },
        {
          name: "play-store",
          color: "text-peacockMagenta font-bold",
        },
      ],
      image: bitrush,
      icon:playstore,
      source_code_link: "https://play.google.com/store/apps/details?id=com.PondererProductions.sixtyfourbitgame",
    },
    {
      name: "Hackathons & Game Jams",
      description:
        "A portfolio of games, compiled over eight hackathons and game jams alongside many cross-functional teams. Oversaw various activities related to building UI/gameplay, designing, iterating, and testing in a fast-paced, collaborative setting.",
        tags: [
          {
            name: "c-sharp",
            color: "text-heroColor font-bold",
          },
          {
            name: "photoshop",
            color: "text-peacockMagenta font-bold",
          },
        ],
      image: hackathons,
      icon: web,
      source_code_link: "https://nandanv123.itch.io/",
    },
    {
      name: "LyricNN",
      description:
        "A lyric generator that demonstrates machine learning and natural language processing concepts. It produces song lyrics using a massive dataset from the lyricsgenius API, n-grams, and word2vec with the Gensim library in Python in the likeness of a given artist.",
      tags: [
        {
          name: "natural-language-processing",
          color: "text-heroColor font-bold",
        },
        {
          name: "word2vec",
          color: "text-peacockMagenta font-bold",
        },
      ],
      image: lyricnn,
      icon:github,
      source_code_link: "https://github.com/lekhuong07/lyrics_generator",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };