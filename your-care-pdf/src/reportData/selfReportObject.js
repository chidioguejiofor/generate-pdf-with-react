export const GROUP_ORDER = [
  "FRAILTY",
  "HEALTH RISKS",
  "HEALTH SERVICE USE",
  "MOOD",
  "COGNITION & COMMUNICATION",
];

export const GROUP_TO_BREAK_TO_NEW_PAGE = new Set([
  "HEALTH SERVICE USE",
  // "COGNITION & COMMUNICATION"
]);

const OTHERS_MUST_DO_VALUE_INFO = {
  valueCode: "THREE",
  valueInfo: [
    "Independence",
    "Some Assistance",
    "Others must always do this for them",
  ],
};

const YES_OR_NO = {
  valueCode: "TWO",
  valueInfo: ["No", "Yes"],
};

const DAILY_FIVE_VALUE_INFO = {
  valueCode: "FIVE",
  valueInfo: [
    "Not in last 3 days",
    "Not in last 3 days, but often has this problem",
    "On 1 of last 3 days",
    "On 2 of last 3 days",
    "Daily in last 3 days",
  ],
};

const DAILY_FOUR_VALUE = {
  valueCode: "FOUR",
  valueInfo: [
    "Not in last 3 days",
    "Not in last 3 days, but often feels this way",
    "In 1-2 of last 3 days",
    "Daily in last 3 days",
  ],
};

const INTACT_NINE_VALUE = {
  valueCode: "NINE",
  valueInfo: [
    "Intact",
    "Borderline intact",
    "Mild impairmen",
    "Mild/moderate impairment",
    "Moderate impairment",
    "Moderate/severe impairment",
    "Severe impairment",
    "Severe/very severe impairment",
    "Very severe impairment",
  ],
};

const DISEASE_PRESENT = {
  valueCode: "THREE",
  valueInfo: [
    "Disease not present",
    "Disease present but not being treated or monitored",
    "Disease present and being treated or monitored",
  ],
};

const IMPROVED_WORSENED_INFO = {
  valueCode: "THREE",
  valueInfo: ["Improved", "No Change", "Worsend"],
};
export const selfReportStructure = {
  FRAILTY: [
    {
      title: "Self-Reliance",
      keyInReport: "SCALE_Self_Reliance",
      valueCode: "TWO",
      valueInfo: ["Self-reliant", "Not self reliant"],
      description:
        "Identifies those who are independent in ADLs and daily decision-making.",
      values: [
        {
          name: "Bathing",
          label: "siG2a",
          valueCode: "THREE_WITH_TWO_DOTS",
          keyInReport: "D2aa",
          valueInfo: [
            "Independence",
            "Some Assistance",
            "Did not bathe/shower in last 3 days",
          ],
        },
        {
          name: "Dressing lower body",
          label: "siG2d",
          keyInReport: "D2ca",
          valueCode: "THREE_WITH_TWO_DOTS",
          valueInfo: [
            "Independence",
            "Some Assistance",
            "Did not dress/undress in last 3 days",
          ],
        },
      ],
      nested: {
        showWhen: {
          keyInReport: "SCALE_Self_Reliance",
          equals: 1,
        },
        subTableTitle: "PHYSICAL FUNCTION",
        rows: [
          {
            title: "Activities of Daily Living",
            bottomText: "(ADL Items)",
            description:
              "Consider home support, physical activity, and advanced care planning.",
            values: [
              {
                name: "Personal Hygiene",
                label: "siG2b",
                keyInReport: "D2ba",
                valueCode: "THREE_WITH_TWO_DOTS",
                valueInfo: [
                  "Independence",
                  "Some Assistance",
                  "Did not manage in last 3 days",
                ],
              },
              {
                name: "Locomotion indoors",
                label: "siG2f",
                keyInReport: "D2ea",
                valueCode: "THREE_WITH_TWO_DOTS",
                valueInfo: [
                  "Independence",
                  "Some Assistance",
                  "Did not move around indoors in last 3 days",
                ],
              },
              {
                name: "Toilet transfer",
                label: "siG2h",
                keyInReport: "D2ha",
                valueCode: "THREE_WITH_TWO_DOTS",
                valueInfo: [
                  "Independence",
                  "Some Assistance",
                  "Did not move onto or off of a toilet in last 3 days",
                ],
              },
              {
                name: "Eating",
                label: "siG2j",
                keyInReport: "D2ja",
                valueCode: "THREE_WITH_TWO_DOTS",
                valueInfo: [
                  "Independence",
                  "Some Assistance",
                  "Did not eat in last 3 days",
                ],
              },
            ],
          },
          {
            title: "Instrumental Activities of Daily",
            description: "Consider home support and physical activity.",
            bottomText: "(IADL Hierarchy)",
            values: [
              {
                name: "Meal preparation",
                label: "iG1ab",
                keyInReport: "D1aa",
                ...OTHERS_MUST_DO_VALUE_INFO,
              },
              {
                name: "Housework",
                label: "iG1bb",
                keyInReport: "D1ba",
                valueCode: "THREE",
                ...OTHERS_MUST_DO_VALUE_INFO,
              },
              {
                name: "Managing finances",
                label: "iG1cb",
                keyInReport: "D1ca",
                ...OTHERS_MUST_DO_VALUE_INFO,
              },
              {
                name: "Managing medications",
                label: "iG1db",
                keyInReport: "D1da",
                ...OTHERS_MUST_DO_VALUE_INFO,
              },
              {
                name: "Shopping",
                label: "iG1gb",
                keyInReport: "D1ga",
                ...OTHERS_MUST_DO_VALUE_INFO,
              },
            ],
          },
        ],
      },
    },
    {
      title: "Health Instability",
      description: `
      Identifies individuals at-risk of serious health decline. Objective is to minimize problems related to declines in function. 
      Score informed by: Change in decision-making, change in ADL status, vomiting, peripheral edema, dyspnea, weight loss, and decrease in food/fluid intake.
      `,
      bottomText: "(CHESS Scale)",
      keyInReport: "SCALE_CHESS",
      valueCode: "SIX",
      newPage: true,
      valueInfo: [
        "No health instability",
        "Minimal health instability",
        "Low health instability",
        "Moderate health instability",
        "High health instability",
        "Very High health instability",
      ],
      values: [
        {
          name: "End Stage Disease",
          label: "xendstg",
          keyInReport: "not-found",
          ...YES_OR_NO,
        }, // check this out
        {
          name: "Decrease in food or fluid intake",
          label: "siK2g",
          keyInReport: "G3",
          ...YES_OR_NO,
        },
        {
          name: "Eating one or fewer meals",
          label: "siK2e",
          keyInReport: "G2",
          ...YES_OR_NO,
        },
        {
          name: "Weight loss",
          label: "siK2a",
          keyInReport: "G1",
          ...YES_OR_NO,
        },
        {
          name: "Dyspnea",
          label: "siJ3",
          keyInReport: "E5",
          valueInfo: [
            "No shortness of breath at any time",
            "Had shortness of breath during moderate activities",
            "Had shortness of breath during normal day-to-day activities",
            "Had shortness of breath when resting",
          ],
          valueCode: "FOUR",
        },
        {
          name: "Edema",
          label: "siJ2s",
          keyInReport: "E4i",
          valueCode: "FIVE",
          ...DAILY_FIVE_VALUE_INFO,
        },
        {
          name: "Vomiting",
          label: "siJ2n",
          keyInReport: "E4g",
          valueCode: "FIVE",
          ...DAILY_FIVE_VALUE_INFO,
        },
        {
          name: "Change in ADL status",
          label: "siG8a3",
          keyInReport: "D3d",
          ...IMPROVED_WORSENED_INFO,
        },
      ],
    },
    {
      title: "Need for Geriatric Assessment",
      description: `Identifies individuals needing a comprehensive assessment and initiation of community services.

      Score informed by: Self-reported sadness, family overwhelmed, personal hygiene, dyspnea, unstable condition, self-rated health, and self-reliance index`,
      bottomText: "(AUA Scale)",
      keyInReport: "SCALE_AUA",
      valueCode: "SIX",
      minimumValue: 1,
      valueInfo: [
        "Least urgent",
        "Low urgency",
        "Medium urgency",
        "Medium urgency",
        "More urgent",
        "Most urgent",
      ],

      values: [
        {
          name: "Family overwhelmed",
          label: "siF7d",
          keyInReport: "C8",
          ...YES_OR_NO,
        },
        {
          name: "Unstable conditions",
          label: "siJ6a",
          keyInReport: "E9",
          ...YES_OR_NO,
        },
      ],
    },
  ],
  "HEALTH RISKS": [
    {
      title: "Falls",
      keyInReport: "SCALE_FALLS",
      description:
        "History of falls in the last 30 days, 31–90 days, and 91–180 days.",
      valueCode: "FOUR",
      valueInfo: [
        "No fall in last 90 days",
        "No fall in last 30 days but fell 30-90 days ago",
        "One fall in last 30 days",
        "3 – 2 or more falls in last 30 days",
      ],
      values: [],
    },
    {
      title: "Pain",
      description: " Frequency and intensity of any pain.",
      keyInReport: "SCALE_PAIN",
      valueCode: "FIVE",
      valueInfo: [
        "No pain",
        "Less than daily pain",
        "Daily pain but not severe",
        "Daily severe pain",
        "Daily excruciating pain",
      ],
      values: [
        {
          name: "Frequency",
          label: "siJ5a",
          keyInReport: "E7",
          valueCode: "FOUR",
          valueInfo: [
            "No pain",
            "Not in last 3 days, but often has pain",
            "In 1-2 of last 3 days",
            "Daily in last 3 days",
          ],
        },
        {
          name: "Intensity",
          label: "siJ5b",
          keyInReport: "E8",
          valueCode: "FIVE",
          valueInfo: [
            "No pain",
            "Mild pain",
            "Moderate pain",
            "Severe pain",
            "Horrible or excruciating pain",
          ],
        },
      ],
    },
    {
      title: "Cardiorespiratory Symptoms",
      description:
        "Score informed by: Dizziness, chest pain, and shortness of breath.",
      bottomText: "(Cardio CAP)",
      keyInReport: "not-found", //cardio cap
      valueCode: "TWO",
      valueInfo: ["Not triggered", "Triggered"],
      values: [
        {
          name: "Dizziness",
          label: "siJ2c",
          keyInReport: "E4a",
          ...DAILY_FIVE_VALUE_INFO,
        },
        {
          name: "Chest pain",
          label: "siJ2e",
          keyInReport: "E4c",
          ...DAILY_FIVE_VALUE_INFO,
        },
      ],
    },
  ],
  MOOD: [
    {
      title: "Self-Reported Mood Symptom Scale",
      keyInReport: "SCALE_Self_Related_MOOD",
      valueCode: "TEN",
      valueInfo: [
        "Positive mood",
        "Positive mood",
        "Borderline mood",
        "Borderline mood",
        "Borderline mood",
        "Moderate mood",
        "Moderate mood",
        "Moderate mood",
        "Poor self-reported mood",
        "Poor self-reported mood",
      ],

      values: [
        {
          name: "Anhedonia",
          label: "siE2a",
          keyInReport: "C1",
          ...DAILY_FOUR_VALUE,
        },
        {
          name: "Anxious",
          label: "siE2b",
          keyInReport: "C2",
          ...DAILY_FOUR_VALUE,
        },
        { name: "Sad", label: "siE2c", keyInReport: "C3", ...DAILY_FOUR_VALUE },
      ],
    },
  ],
  "COGNITION & COMMUNICATION": [
    {
      title: "Communication",
      keyInReport: "SCALE_COMMUNICATIOn",
      description:
        "Ability to communicate with others and comprehend information",
      values: [
        {
          name: "Ability to make self understood",
          label: "siD1",
          keyInReport: "B4",
          valueCode: "FIVE",
          valueInfo: [
            "Can express ideas without difficulty",
            "Have difficulty finding words or finishing thoughts, but they are understood if given time",
            "Have difficulty finding words or finishing thoughts and they usually need prompting",
            "They can only make simple requests",
            "They are rarely or never understood",
          ],
        },
        {
          name: "Ability to understand others",
          label: "siD2",
          keyInReport: "B5",

          valueCode: "FIVE",
          valueInfo: [
            "Have no difficulty understanding others",
            "They miss some part or meaning but understand most conversation",
            "They miss some part or meaning but often understand conversation with repetition or explanation",
            "They can only respond to simply conversation",
            "They rarely or never understand others",
          ],
        },
      ],

      ...INTACT_NINE_VALUE,
    },
    {
      ...INTACT_NINE_VALUE,
      title: "Cognitive Performance",
      description:
        "Cognitive status of an individual and suggests signs of cognitive decline. This scale has been validated against the MMSE by a number of researchers",
      newPage: true,
      bottomText: "(CPS 2)",
      keyInReport: "SCALE_Coginitive_Performance2",
      values: [
        {
          name: "Change in decision-making",
          label: "siC5",
          keyInReport: "B3",
          ...IMPROVED_WORSENED_INFO,
        },
        {
          name: "Memory problem",
          label: "siC2a",
          keyInReport: "B2",
          valueCode: "FIVE",
          valueInfo: [
            "Never",
            "Rarely",
            "Sometimes",
            "Most of the time",
            "Always",
          ],
        },
        {
          name: "Walking",
          label: "siG2e",
          keyInReport: "D2da",
          valueCode: "THREE_WITH_TWO_DOTS",
          valueInfo: [
            "Independent",
            "Some assistance",
            "Did not walk in last 3 days",
          ],
        },
      ],
    },
  ],
  "HEALTH SERVICE USE": [
    {
      title: "Risk of Future Hospitalization",
      bottomText: "(DIVERT)",
      description: `
      Classifies risk of Emergency Department (ED) use.
Score informed by: ED or overnight hospital visits; Change in ADL status; history of stroke, coronary artery disease (CAD), congestive heart failure (CHF), chronic obstructive pulmonary disease (COPD), or diabetes; weight loss; decrease in food/fluid intake; cardio CAP score; self-rated mood scale; and falls history.`,
      keyInReport: "SCALE_DIVERT",
      valueInfo: [
        "Lowest risk",
        "Low risk",
        "Medium risk",
        "Medium risk",
        "More risk",
        "Most risk",
      ],
      valueCode: "SIX",
      minimumValue: 1,

      values: [
        {
          name: "Stroke",
          label: "siI1jbis",
          keyInReport: "F1c",
          valueCode: "THREE",
          valueInfo: [
            "Disease not present",
            "Disease present but not being treated or monitored",
            "Disease present and being treated or monitored",
          ],
        },
        {
          name: "Coronary artery disease",
          label: "siI1kbis",
          keyInReport: "F1d",
          ...DISEASE_PRESENT,
        },
        {
          name: "Congestive heart failure",
          label: "siI1lbis",
          keyInReport: "F1f",
          ...DISEASE_PRESENT,
        },
        {
          name: "COPD",
          label: "siI1mbis",
          keyInReport: "F1e",

          ...DISEASE_PRESENT,
        },
        {
          name: "Diabetes",
          label: "siI1tbis",
          keyInReport: "F1h",
          ...DISEASE_PRESENT,
        },
      ],
    },
    {
      title: "Hospital use",
      bottomText: "(last 90 days)",
      description: 'Admissions for overnight stay.',
      keyInReport: "H1a", // This does not exists in report.
      values: [],
      valueCode: "TWO",
      valueInfo: ["0 admissions", "1 or more admissions"],
    },
    {
      title: "Emergency Department (ED) visits",
      bottomText: "(last 90 days)",
      keyInReport: "H1b", // This does not exists in report.
      valueCode: "TWO",
      valueInfo: ["0 visits", "1 or more visits"],
      values: [],
    },
  ],
};
