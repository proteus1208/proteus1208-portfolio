export interface Requirement {
  name: string;
  items: string[];
}

export interface JoinMeItem {
  title: string;
  overview: string;
  requirements: Requirement[];
  image: string;
  delivers?: string[];
}

export const joinMeItems: JoinMeItem[] = [
  {
    title: "Client Consultant & Business Assistant",
    overview: "I am looking for a Junior Client Consultant & Account Manager to support my international growth. This role focuses on communication, client coordination, and market insight, rather than hands-on development. You will act as a bridge between my technical team and international clients, helping me better understand local markets and build strong client relationships.",
    requirements: [
      {
        name: "Responsibilities",
        items: [
          "Communicate with potential and existing international clients",
          "Assist in understanding client requirements and translating them to our internal team",
          "Provide insights into local market trends and client expectations",
          "Support business development and partnership opportunities",
          "Help manage ongoing client relationships and ensure smooth communication",
          "Participate in calls, follow-ups, and basic project coordination"
        ]
      },
      {
        name: "Requirements",
        items: [
          "Basic understanding of web development (non-technical level is fine)",
          "Strong language communication skills (written & spoken)",
          "Availability: 1–2 hours per day (flexible)",
          "Reliable internet connection and quiet working environment",
          "Good interpersonal and communication skills",
          "Self-motivated and responsible"
        ]
      },
      {
        name: "Nice to Have",
        items: [
          "Background in business, marketing, or IT-related fields",
          "Experience in client communication or account management",
          "Experience working with international teams"
        ]
      },
      {
        name: "Compensation",
        items: [
          "To be discussed during the interview",
          "Based on experience and level of involvement"
        ]
      },
    ],
    image: "/images/join-me/broker.png",

    delivers: [
      "Fully Remote Work",
      // "New PC/Mac and peripherals",
      "Strong technical support",
      "Friendly and experience"
    ]
  }
];