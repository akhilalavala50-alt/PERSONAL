import { Project, Skill, HackathonActivity, VisionArea } from '../types';

export const STUDENT_PROFILE = {
  name: 'ALAVALA RAM AKHIL',
  currentStatus: '1st Semester College Student',
  careerGoal: 'Aspiring AI Engineer',
  currentLevel: 'GenAI Beginner / Early-stage AI Engineer',
  subtitle: 'Student • Aspiring AI Engineer • Python & Web Development Learner',
  heroSupportingText:
    'Building my foundation in Python, Web Development, and Generative AI — one project at a time.',
  aboutMeText:
    'I am a first-semester college student passionate about technology, artificial intelligence, and building practical projects. I am currently learning Python, web development, and Generative AI while experimenting with projects in automation, problem solving, gaming, and creative technology. My goal is to grow into an AI Engineer by continuously learning, participating in hackathons and ideathons, and building real-world solutions.',
  linkedinUrl: 'https://www.linkedin.com/in/alavala-ram-akhil-21bb00423',
};

export const SKILLS_DATA: Skill[] = [
  // Currently Learning
  {
    name: 'Python',
    category: 'Currently Learning',
    description: 'Writing scripts, mastering control flow, functions, loops, and building practical terminal applications.',
    focusArea: 'Core Programming & Logic',
  },
  {
    name: 'Web Development',
    category: 'Currently Learning',
    description: 'Understanding the web architecture, DOM manipulation, responsive layouts, and modern front-end foundations.',
    focusArea: 'Full-stack Foundations',
  },
  {
    name: 'Generative AI',
    category: 'Currently Learning',
    description: 'Exploring LLM fundamentals, prompt crafting, and how generative models can solve practical developer problems.',
    focusArea: 'Applied AI',
  },
  {
    name: 'Problem Solving',
    category: 'Currently Learning',
    description: 'Deconstructing real-world logic challenges into modular computational steps and algorithmic solutions.',
    focusArea: 'Computational Thinking',
  },

  // Building With
  {
    name: 'HTML',
    category: 'Building With',
    description: 'Structuring clean, accessible, semantic web content with modern HTML5 standards.',
    focusArea: 'Markup & Semantics',
  },
  {
    name: 'CSS',
    category: 'Building With',
    description: 'Styling interfaces with responsive flexbox, grid, and clean visual design principles.',
    focusArea: 'Styling & Responsive UI',
  },
  {
    name: 'JavaScript',
    category: 'Building With',
    description: 'Building client-side interactive logic, event handling, and dynamic UI states.',
    focusArea: 'Interactive Logic',
  },
  {
    name: 'Git / GitHub',
    category: 'Building With',
    description: 'Version control workflow, tracking project revisions, repository management, and collaboration basics.',
    focusArea: 'Developer Tooling',
  },
  {
    name: 'Prompt Engineering',
    category: 'Building With',
    description: 'Designing structured prompts, system instructions, few-shot prompting, and iterative prompt refinement.',
    focusArea: 'AI Interaction',
  },

  // Exploring
  {
    name: 'AI Fundamentals',
    category: 'Exploring',
    description: 'Studying core concepts of artificial intelligence, search algorithms, data representations, and learning paradigms.',
    focusArea: 'Theory & Foundations',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'voter-eligibility-checker',
    title: 'Voter Eligibility Checker',
    category: 'Python',
    shortDescription:
      'A Python-based project that checks whether a person is eligible to vote based on their age and predefined conditions.',
    technologies: ['Python', 'Conditional Logic', 'CLI Interface'],
    keyConcepts: [
      'Conditional statements (if-elif-else)',
      'User input sanitization and type conversion',
      'Boundary case evaluation (e.g. negative or non-numeric inputs)',
      'Structured command-line feedback',
    ],
    detailedOverview:
      'The Voter Eligibility Checker is a foundational Python utility that evaluates citizenship and legal age prerequisites before determining voting eligibility. It demonstrates clean input validation and prevents runtime exceptions through defensive type handling.',
    logicHighlights: [
      'Prompts user for age and nationality/registration parameters',
      'Validates integer types to prevent crashes on string inputs',
      'Evaluates boundary conditions (e.g., exact 18-year mark)',
      'Outputs clear, human-friendly eligibility confirmation messages',
    ],
  },
  {
    id: 'calculator',
    title: 'Calculator',
    category: 'Python',
    shortDescription:
      'A beginner-friendly calculator project designed to perform basic arithmetic operations while demonstrating programming fundamentals.',
    technologies: ['Python', 'Functions', 'Mathematical Operations'],
    keyConcepts: [
      'Modular arithmetic functions (addition, subtraction, multiplication, division)',
      'Loop-driven continuous calculation cycles',
      'Zero-division error handling and prevention',
      'Menu-driven terminal selection',
    ],
    detailedOverview:
      'Built to solidify programming foundations, this calculator organizes basic arithmetic operations into modular, reusable functions. It features a continuous execution loop allowing multiple operations without restarting the script.',
    logicHighlights: [
      'Separates mathematical computation from user interaction logic',
      'Guards against zero-division errors with explicit conditional checks',
      'Supports recurring calculations through a structured while loop',
      'Cleans terminal display between calculation sessions',
    ],
  },
  {
    id: 'atm-management-system',
    title: 'ATM Management System',
    category: 'Python',
    shortDescription:
      'A Python-based ATM management project demonstrating concepts such as user interaction, balance checking, withdrawals, deposits, and basic transaction logic.',
    technologies: ['Python', 'State Management', 'Transaction Logic'],
    keyConcepts: [
      'State tracking across sequential user operations',
      'Transaction verification (overdraw protection, minimum balances)',
      'Multi-option interactive terminal menu',
      'Basic security flow (PIN verification simulation)',
    ],
    detailedOverview:
      'This project simulates the core logical workflow of an automated teller machine. It manages account balances in memory, enforces withdrawal thresholds, validates PIN inputs, and logs deposits and withdrawals accurately.',
    logicHighlights: [
      'PIN authentication gate before granting access to account menu',
      'Real-time balance deduction with insufficient funds safeguards',
      'Deposit processing with positive integer validation',
      'Session summary upon exit to reinforce transaction clarity',
    ],
  },
  {
    id: 'editing-projects',
    title: 'Editing Projects',
    category: 'Creative & Media',
    shortDescription:
      'Creative editing projects demonstrating visual creativity, digital editing, and experimentation with multimedia content.',
    technologies: ['Digital Editing', 'Multimedia Tools', 'Visual Design'],
    keyConcepts: [
      'Visual composition and spatial balance',
      'Timing, audio synchronization, and narrative pacing',
      'Color correction and mood grading',
      'Asset curation and digital workflow organization',
    ],
    detailedOverview:
      'A collection of creative multimedia editing experiments where Ram Akhil explores visual storytelling, digital asset manipulation, and rhythm-based sequencing. Demonstrates a strong eye for clean aesthetics and content presentation.',
    logicHighlights: [
      'Structured timeline organization with dedicated visual and audio tracks',
      'Selective color grading to enhance scene atmosphere',
      'Audio leveling to ensure vocal clarity and balanced background sound',
      'Export optimization tailored for diverse viewing resolutions',
    ],
  },
  {
    id: 'gaming-projects',
    title: 'Gaming Projects',
    category: 'Interactive',
    shortDescription:
      'Gaming-related experiments and projects focused on game concepts, interactive experiences, and learning game development.',
    technologies: ['Interactive Logic', 'Game Mechanics', 'Event Systems'],
    keyConcepts: [
      'Core game loop implementation (update, render, event handling)',
      'Player coordinate tracking and basic collision boundaries',
      'Score calculation and state transitions (start, play, game over)',
      'User responsive keyboard/input mapping',
    ],
    detailedOverview:
      'Exploratory interactive experiments where gaming mechanics serve as an intuitive medium for learning state management, event listeners, and coordinate math. Focuses on minimal, engaging player interactions.',
    logicHighlights: [
      'Initialization of game canvas and entity coordinates',
      'Continuous tick update cycle evaluating movement vectors',
      'Condition checking for score increments and win/loss states',
      'Replay mechanism preserving session high scores',
    ],
  },
  {
    id: 'student-grade-calculator',
    title: 'Student Grade Calculator',
    category: 'Python',
    shortDescription:
      'A project that calculates student grades based on marks and predefined grading conditions, demonstrating Python logic and conditional statements.',
    technologies: ['Python', 'Data Evaluation', 'Formatted Reporting'],
    keyConcepts: [
      'Multi-tier grade threshold evaluation',
      'Subject score aggregation and percentage calculation',
      'Pass/fail logic and criteria checking',
      'Tabular report formatting for output readability',
    ],
    detailedOverview:
      'An academic grading utility that accepts multiple subject marks, computes cumulative percentages, and outputs standard letter grades alongside performance remarks based on predefined institution metrics.',
    logicHighlights: [
      'Iterative subject score collection with range validation (0–100)',
      'Cumulative score summation and automated average derivation',
      'Cascading if-elif-else hierarchy assigning letter grades (A, B, C, D, F)',
      'Clear, formatted summary displaying marks per subject and overall outcome',
    ],
  },
];

export const HACKATHON_ACTIVITIES: HackathonActivity[] = [
  {
    title: 'Rapid Prototype Sprints',
    actionWord: 'Building',
    focus: 'Fast Iteration & Functional MVPs',
    description:
      'Transforming problem statements into functional code prototypes within strict time constraints, focusing on core utility first.',
    takeaway: 'Learned the importance of prioritizing core functional flows over premature perfection.',
  },
  {
    title: 'Collaborative Problem-Solving',
    actionWord: 'Participating',
    focus: 'Team Coordination & Brainstorming',
    description:
      'Engaging in hackathons and ideathons to collaborate with peers, divide project components, and integrate multi-member contributions.',
    takeaway: 'Understood how version control and clear communication drive team efficiency.',
  },
  {
    title: 'Idea Validation & Ideathons',
    actionWord: 'Exploring',
    focus: 'Real-World Problem Scoping',
    description:
      'Brainstorming technological solutions for student and campus challenges, structuring problem-solution matrices, and pitching prototypes.',
    takeaway: 'Discovered how user research and clear problem definitions make code significantly more impactful.',
  },
  {
    title: 'Tech Stack Experimentation',
    actionWord: 'Experimenting',
    focus: 'Emerging Tools & AI APIs',
    description:
      'Testing modern developer tools, exploring Generative AI workflows, and evaluating how automation speeds up development cycles.',
    takeaway: 'Gained hands-on confidence testing unfamiliar libraries and debugging under pressure.',
  },
  {
    title: 'Continuous Peer Learning',
    actionWord: 'Learning',
    focus: 'Mentorship & Code Reviews',
    description:
      'Reviewing architectures built by senior student teams, attending workshop sessions, and absorbing practical developer habits.',
    takeaway: 'Accelerated understanding of clean code organization, documentation, and maintainability.',
  },
];

export const CAREER_VISION_AREAS: VisionArea[] = [
  {
    title: 'Generative AI',
    description: 'Studying foundational architectures, transformer mechanics, prompt engineering patterns, and multimodal generation.',
    status: 'Future Learning Goal',
  },
  {
    title: 'Machine Learning',
    description: 'Gaining mathematical foundations in linear algebra, statistics, gradient descent, and supervised/unsupervised training algorithms.',
    status: 'Future Learning Goal',
  },
  {
    title: 'AI Agents',
    description: 'Understanding autonomous reasoning loops, tool-calling interfaces, memory systems, and multi-agent coordination.',
    status: 'Future Learning Goal',
  },
  {
    title: 'Natural Language Processing',
    description: 'Exploring tokenization, semantic embeddings, sentiment classification, text summarization, and vector search.',
    status: 'Future Learning Goal',
  },
  {
    title: 'Computer Vision',
    description: 'Investigating image processing, object detection basics, convolutional neural networks, and visual feature extraction.',
    status: 'Future Learning Goal',
  },
  {
    title: 'AI-Powered Applications',
    description: 'Connecting back-end AI models with clean front-end interfaces to build practical, intuitive tools that solve daily problems.',
    status: 'Future Learning Goal',
  },
  {
    title: 'Automation & Scripting',
    description: 'Designing Python-driven scripts and workflows to streamline repetitive digital workflows and data processing tasks.',
    status: 'Future Learning Goal',
  },
];
