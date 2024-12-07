import { ITrainingProgram } from "@/interfaces";

export const trainingPrograms: ITrainingProgram[] = [
  {
    _id: "program_001",
    title: "Beginner's Motocross Bootcamp",
    description:
      "Perfect for newcomers, this program covers the fundamentals of motocross riding, safety, and bike control.",
    banner:
      "https://images.pexels.com/photos/9358820/pexels-photo-9358820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    fee: 300,
    programs: [
      {
        _id: "day_001",
        day: 1,
        title: "Introduction to Motocross",
        sessions: [
          {
            _id: "session_001",
            time: "10:00 AM - 11:30 AM",
            activities: ["Bike setup basics", "Safety gear essentials"],
          },
          {
            _id: "session_002",
            time: "1:00 PM - 3:00 PM",
            activities: ["Basic riding posture", "Throttle and brake control"],
          },
        ],
      },
      {
        _id: "day_002",
        day: 2,
        title: "Core Riding Skills",
        sessions: [
          {
            _id: "session_003",
            time: "9:00 AM - 11:00 AM",
            activities: ["Cornering techniques", "Body positioning"],
          },
          {
            _id: "session_004",
            time: "1:00 PM - 3:00 PM",
            activities: [
              "Standing and sitting transitions",
              "Slow-speed maneuvers",
            ],
          },
        ],
      },
    ],
  },
  {
    _id: "program_002",
    title: "Intermediate Motocross Training",
    description:
      "For riders ready to sharpen their skills with advanced techniques and endurance challenges.",
    banner:
      "https://images.pexels.com/photos/28610192/pexels-photo-28610192/free-photo-of-intense-off-road-motorcycle-racing-action.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    fee: 500,
    programs: [
      {
        _id: "day_001",
        day: 1,
        title: "Technical Riding Skills",
        sessions: [
          {
            _id: "session_005",
            time: "10:00 AM - 12:00 PM",
            activities: ["Advanced cornering", "Jumping fundamentals"],
          },
          {
            _id: "session_006",
            time: "2:00 PM - 4:00 PM",
            activities: ["Hill climbs and descents", "Obstacle navigation"],
          },
        ],
      },
      {
        _id: "day_002",
        day: 2,
        title: "Track and Endurance Training",
        sessions: [
          {
            _id: "session_007",
            time: "9:00 AM - 11:00 AM",
            activities: ["Track laps with timed goals", "Endurance drills"],
          },
          {
            _id: "session_008",
            time: "1:00 PM - 3:00 PM",
            activities: ["Bike maintenance tips", "Posture correction"],
          },
        ],
      },
    ],
  },
  {
    _id: "program_003",
    title: "Advanced Motocross Mastery",
    description:
      "Master the art of motocross with expert-level techniques, competitive strategies, and advanced track navigation.",
    banner:
      "https://images.pexels.com/photos/9607252/pexels-photo-9607252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    fee: 800,
    programs: [
      {
        _id: "day_001",
        day: 1,
        title: "Expert Techniques",
        sessions: [
          {
            _id: "session_009",
            time: "9:00 AM - 11:00 AM",
            activities: ["Whip and scrub techniques", "High-speed cornering"],
          },
          {
            _id: "session_010",
            time: "1:00 PM - 3:00 PM",
            activities: [
              "Line selection strategies",
              "Advanced jumps and landings",
            ],
          },
        ],
      },
      {
        _id: "day_002",
        day: 2,
        title: "Race Simulation",
        sessions: [
          {
            _id: "session_011",
            time: "10:00 AM - 12:00 PM",
            activities: ["Practice races", "Time attack challenges"],
          },
          {
            _id: "session_012",
            time: "2:00 PM - 4:00 PM",
            activities: ["Race strategies", "Post-race analysis"],
          },
        ],
      },
    ],
  },
  {
    _id: "program_004",
    title: "Motocross Fitness and Conditioning",
    description:
      "Enhance your physical fitness and mental endurance to achieve peak motocross performance.",
    banner:
      "https://images.pexels.com/photos/18004080/pexels-photo-18004080/free-photo-of-a-person-jumping-on-a-motocross-bike.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    fee: 400,
    programs: [
      {
        _id: "day_001",
        day: 1,
        title: "Physical Preparation",
        sessions: [
          {
            _id: "session_013",
            time: "10:00 AM - 12:00 PM",
            activities: ["Core strength exercises", "Cardio drills"],
          },
          {
            _id: "session_014",
            time: "2:00 PM - 4:00 PM",
            activities: [
              "Flexibility and mobility training",
              "Balance improvement",
            ],
          },
        ],
      },
      {
        _id: "day_002",
        day: 2,
        title: "Mental and Recovery Strategies",
        sessions: [
          {
            _id: "session_015",
            time: "9:00 AM - 11:00 AM",
            activities: ["Mental focus exercises", "Stress management"],
          },
          {
            _id: "session_016",
            time: "1:00 PM - 3:00 PM",
            activities: ["Post-ride recovery techniques", "Nutrition planning"],
          },
        ],
      },
    ],
  },
  {
    _id: "program_005",
    title: "Youth Motocross Starter Pack",
    description:
      "A fun and engaging program tailored for younger riders to learn motocross in a safe environment.",
    banner:
      "https://images.unsplash.com/photo-1435244837924-21c508f9db25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fee: 250,
    programs: [
      {
        _id: "day_001",
        day: 1,
        title: "Getting Started Safely",
        sessions: [
          {
            _id: "session_017",
            time: "10:00 AM - 11:30 AM",
            activities: ["Basic safety instructions", "Gear fitting and setup"],
          },
          {
            _id: "session_018",
            time: "1:00 PM - 2:30 PM",
            activities: [
              "Introduction to bike controls",
              "Short riding practice",
            ],
          },
        ],
      },
      {
        _id: "day_002",
        day: 2,
        title: "Skill Building for Kids",
        sessions: [
          {
            _id: "session_019",
            time: "10:00 AM - 12:00 PM",
            activities: [
              "Simple track navigation",
              "Riding drills for balance",
            ],
          },
          {
            _id: "session_020",
            time: "1:30 PM - 3:00 PM",
            activities: ["Fun obstacle courses", "Basic cornering practice"],
          },
        ],
      },
    ],
  },
  {
    _id: "program_006",
    title: "Off-Road Adventure Training",
    description:
      "Develop off-road handling skills and adapt to challenging terrains in this unique program.",
    banner:
      "https://images.unsplash.com/photo-1687278346516-17a9f85b0252?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fee: 600,
    programs: [
      {
        _id: "day_001",
        day: 1,
        title: "Terrain Mastery",
        sessions: [
          {
            _id: "session_021",
            time: "9:00 AM - 11:30 AM",
            activities: [
              "Riding on sand and gravel",
              "Mud handling techniques",
            ],
          },
          {
            _id: "session_022",
            time: "1:30 PM - 3:30 PM",
            activities: [
              "Rocky terrain navigation",
              "Slippery surface control",
            ],
          },
        ],
      },
      {
        _id: "day_002",
        day: 2,
        title: "Trail Challenges",
        sessions: [
          {
            _id: "session_023",
            time: "10:00 AM - 12:00 PM",
            activities: [
              "Trail mapping and planning",
              "Endurance off-road riding",
            ],
          },
          {
            _id: "session_024",
            time: "2:00 PM - 4:00 PM",
            activities: [
              "Handling steep inclines",
              "Water crossing techniques",
            ],
          },
        ],
      },
    ],
  },
  {
    _id: "program_007",
    title: "Motocross Pro Competition Training",
    description:
      "Prepare for professional motocross competitions with advanced techniques and race simulations.",
    banner:
      "https://images.unsplash.com/photo-1625677797097-30894d21abb9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fee: 900,
    programs: [
      {
        _id: "day_001",
        day: 1,
        title: "Competition Strategies",
        sessions: [
          {
            _id: "session_025",
            time: "9:00 AM - 11:00 AM",
            activities: [
              "Race starts and holeshot",
              "Track analysis for faster laps",
            ],
          },
          {
            _id: "session_026",
            time: "1:00 PM - 3:00 PM",
            activities: [
              "Overtaking techniques",
              "Adapting to track conditions",
            ],
          },
        ],
      },
      {
        _id: "day_002",
        day: 2,
        title: "Pro-Level Race Simulation",
        sessions: [
          {
            _id: "session_027",
            time: "10:00 AM - 12:00 PM",
            activities: [
              "Timed competitive races",
              "Endurance and focus training",
            ],
          },
          {
            _id: "session_028",
            time: "2:00 PM - 4:00 PM",
            activities: [
              "Post-race strategy refinement",
              "Analyzing competitor strengths",
            ],
          },
        ],
      },
    ],
  },
  {
    _id: "program_008",
    title: "Motocross Freestyle Training",
    description:
      "Focus on freestyle motocross skills like tricks, flips, and style improvement for exhibitions.",
    banner:
      "https://images.unsplash.com/photo-1453901593090-e57bfb58f39b?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fee: 700,
    programs: [
      {
        _id: "day_001",
        day: 1,
        title: "Basics of Freestyle",
        sessions: [
          {
            _id: "session_029",
            time: "10:00 AM - 12:00 PM",
            activities: ["Body control in the air", "Small jumps and landings"],
          },
          {
            _id: "session_030",
            time: "2:00 PM - 4:00 PM",
            activities: [
              "Introduction to freestyle tricks",
              "Coordination and balance",
            ],
          },
        ],
      },
      {
        _id: "day_002",
        day: 2,
        title: "Advanced Freestyle Tricks",
        sessions: [
          {
            _id: "session_031",
            time: "9:00 AM - 11:30 AM",
            activities: [
              "Backflips and whips",
              "Combining tricks in sequences",
            ],
          },
          {
            _id: "session_032",
            time: "1:30 PM - 3:30 PM",
            activities: ["Exhibition practice", "Style and performance focus"],
          },
        ],
      },
    ],
  },
];
