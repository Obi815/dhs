interface Activity {
  title: string;
  examples: string[];
  note?: string;
}

// * Information used to loop through and create Cards with 
const activities: Activity[] = [
  {
    title: "Social and Recreational Activities",
    examples: [
      "Games and group activities",
      "Social groups",
      "Conversation and discussion groups",
      "Puzzles and cognitive games",
      "Celebrations and special events",
      "Participant-choice activities",
    ],
  },
  {
    title: "Arts, Music, and Cultural Activities",
    examples: [
      "Arts and crafts",
      "Music appreciation",
      "Singing and group music activities",
      "Cultural activities",
      "Creative expression",
      "Seasonal projects and celebrations",
    ],
  },
  {
    title: "Education and Life-Skills Activities",
    examples: [
      "Basic technology and digital literacy",
      "Educational presentations",
      "Practical life-skills activities",
      "Communication and social skills",
      "Community-resource education",
      "Safety awareness",
      "Independent living topics appropriate to participant abilities",
    ],
  },
  {
    title: "Wellness and Physical Activity",
    examples: [
      "Stretching",
      "Walking",
      "Chair-based activities",
      "Gentle movement",
      "Recreation",
      "Relaxation activities",
      "Wellness education",
    ],
    note: "These activities are not intended to constitute medical treatment or rehabilitation services.",
  },
  {
    title: "Community Integration",
    examples: [
      "Local outings",
      "Parks and recreational areas",
      "Libraries and community centers",
      "Cultural events",
      "Volunteer opportunities",
      "Community-service activities",
      "Other appropriate community experiences",
    ],
    note: "All community activities will be planned according to participant needs, safety considerations, staffing availability, transportation resources, and program policies.",
  },
];

export default activities
