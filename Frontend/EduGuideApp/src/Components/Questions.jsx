const questions = [
  {
    question: "Which subject do you enjoy studying the most?",
    options: [
      "Mathematics",
      "Biology",
      "History",
      "English",
      "Business Studies",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
  {
    question: "What kind of activities do you find most engaging?",
    options: [
      "Solving complex math problems",
      "Doing science experiments",
      "Debating social and political issues",
      "Writing stories or creating art",
      "Planning business ventures",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
  {
    question: "Which of the following do you excel in academically?",
    options: [
      "Logical reasoning",
      "Understanding living organisms and life sciences",
      "Memorizing dates, events, and historical facts",
      "Writing essays and interpreting literature",
      "Understanding market trends and business principles",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
  {
    question: "How do you prefer to spend your free time?",
    options: [
      "Solving puzzles or playing brain games",
      "Watching science documentaries",
      "Reading about historical events",
      "Writing poetry or designing graphics",
      "Reading business news or economic reports",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
  {
    question:
      "Which of these subjects do you think will help you in the future?",
    options: [
      "Advanced mathematics",
      "Medicine and health science",
      "Political science or law",
      "Creative writing or mass communication",
      "Economics or entrepreneurship",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
  {
    question: "When faced with a challenging problem, what is your approach?",
    options: [
      "Break it down into steps and use logic",
      "Conduct research or an experiment to solve it",
      "Analyze it from multiple angles, including social impact",
      "Think creatively and brainstorm ideas",
      "Weigh the risks and make calculated decisions",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
  {
    question: "How would you describe your analytical skills?",
    options: [
      "Strong with numbers and patterns",
      "Strong with data and experiments",
      "Strong with historical and social analysis",
      "Strong with creativity and expression",
      "Strong with business strategies and decisions",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
  {
    question: "What kind of puzzles or problems do you enjoy solving?",
    options: [
      "Mathematical equations",
      "Scientific challenges or health-related issues",
      "Social problems or case studies",
      "Creative writing prompts or design challenges",
      "Business simulations or financial case studies",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
  {
    question: "What kind of career do you envision for yourself?",
    options: [
      "Engineer",
      "Doctor",
      "Lawyer or Civil Servant",
      "Author or Journalist",
      "Entrepreneur or Business Manager",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
  {
    question: "Which career would you avoid?",
    options: [
      "Writing or journalism",
      "Anything unrelated to science or health",
      "Business or commerce",
      "Engineering or technical work",
      "Creative arts",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
  {
    question: "How important is financial success in your career decision?",
    options: [
      "Somewhat important, but job satisfaction matters more",
      "Important, but I also value helping people",
      "Financial success matters, but so does making a social impact",
      "Less important than creative fulfillment",
      "Very important, I want to succeed financially",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
  {
    question: "Where do you see yourself working?",
    options: [
      "In a lab or on technical projects",
      "In a hospital or medical facility",
      "In a courtroom or government office",
      "In a newsroom or creative studio",
      "In a corporate office or running my own business",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
  {
    question: "How do you handle working under pressure?",
    options: [
      "I thrive when working on complex, time-bound problems",
      "I stay calm and rely on facts or research to guide me",
      "I consider various perspectives and handle pressure well",
      "I express my ideas creatively to relieve stress",
      "I make strategic decisions and stay focused on goals",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
  {
    question: "What type of learning do you prefer?",
    options: [
      "Hands-on problem-solving and practical exercises",
      "Conducting experiments and understanding theory",
      "Reading, analyzing, and debating ideas",
      "Creative expression, through writing or art",
      "Case studies, business models, and market analysis",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
  {
    question: "How do you study best?",
    options: [
      "By practicing problem sets or working on projects",
      "By conducting experiments and taking detailed notes",
      "By analyzing historical or social trends and discussing them",
      "By writing essays, stories, or creating visual projects",
      "By analyzing business cases or market trends",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
  {
    question: "Which of these activities do you find more interesting?",
    options: [
      "Solving math or physics problems",
      "Studying cells and organisms under a microscope",
      "Analyzing historical events and their impact on society",
      "Writing a short story or creating a graphic design",
      "Developing a business plan",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
  {
    question: "What interests you the most about science?",
    options: [
      "The laws of physics and how things work",
      "Human biology and medical advancements",
      "The societal impact of scientific discoveries",
      "How technology and science inspire creativity",
      "The role of science in driving business innovations",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
  {
    question:
      "Which of the following subjects would you prefer to study in-depth?",
    options: [
      "Calculus or mechanics",
      "Genetics or human anatomy",
      "History of civilizations",
      "English literature",
      "Financial management or economics",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
  {
    question:
      "If you could only choose one elective subject, what would it be?",
    options: [
      "Advanced mathematics",
      "Biology",
      "Political science",
      "Literature or journalism",
      "Economics",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
  {
    question: "What are you most curious to learn about in school?",
    options: [
      "How machines and systems work",
      "How the human body functions",
      "How societies evolve and function",
      "How stories and media shape culture",
      "How businesses succeed and fail",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
  {
    question: "What extracurricular activity do you most enjoy?",
    options: [
      "Math or science club",
      "Science fairs or medical camps",
      "Debate team or Model United Nations",
      "Writing for the school newspaper or participating in arts clubs",
      "Organizing school events or participating in entrepreneurship clubs",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
  {
    question: "How do you prefer to express your ideas?",
    options: [
      "Through logical reasoning and detailed explanations",
      "Through scientific experiments and data",
      "Through debate, discussion, or written reports",
      "Through stories, artwork, or presentations",
      "Through strategic planning and financial decisions",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
  {
    question: "What drives you the most in life?",
    options: [
      "Solving problems and finding logical solutions",
      "Helping others and improving health or well-being",
      "Making a positive impact on society",
      "Expressing creativity and achieving personal fulfillment",
      "Achieving financial success and building a legacy",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
  {
    question: "What career values do you prioritize most?",
    options: [
      "Intellectual challenge and problem-solving",
      "Helping others through healthcare or research",
      "Making a social impact through law or governance",
      "Personal expression and creativity",
      "Building financial success and business acumen",
    ],
    relatedCareers: [0, 1, 2, 3, 4],
  },
];

export default questions;
