export type PatientReportSubItem = {
  name: string;
  keyInReport: string;
  numberOfValues: number;
};

export type PatientReportItem = {
  name: string;
  minValue?: number;
  description: string;
  summaryText: string;
  valueMapper?: string[];
  keyInReport: string;
  hasNumericValue?: boolean;
  subItems?: PatientReportSubItem[];
  moveToNewPage?: boolean;
};

export type ReportSectionContentProps = PatientReportItem & {
  borderColor: string;
};

export type PatientReportSection = {
  image: string;
  title: string;
  items: PatientReportItem[];
  borderColor: string;
  moveToNewPage?: boolean;
};

export const patientReport: PatientReportSection[] = [
  {
    image: "/patient-report/hospital.png",
    title: "Clinical complications",
    borderColor: "#80B4FF",
    items: [
      {
        summaryText: "The results indicate {%name%} {%value%}",
        name: "Falls",
        keyInReport: "SCALE_FALLS",
        description: "History of falling in the last 90 days.",
        valueMapper: [
          "has not recently experienced a fall",
          "has experienced a fall, but not recently",
          "has recently experienced a fall",
          "has recently experienced two or more falls",
        ],
      },
      {
        name: "Pain",
        keyInReport: "SCALE_PAIN",

        summaryText:
          "The results indicate {%name%} may be experiencing {%value%}",
        description: "Frequency and intensity of pain.",
        valueMapper: [
          "no pain",
          "less than daily pain",
          "daily pain but not severe",
          "daily severe pain",
          "daily excruciating pain",
        ],
      },
    ],
  },

  {
    image: "/patient-report/thinking-and-comnms.png",
    borderColor: "#3F51B5",
    title: "Thinking and communication",

    items: [
      {
        name: "Communication",
        keyInReport: "SCALE_COMMUNICATIOn",
        summaryText:
          "The results indicate {%name%} may {%value%} challenges communicating with others or understanding what others say.",
        description: "Ability to communicate and understand information.",
        valueMapper: [
          "not have",
          "have minimal",
          "have mild",
          "have mild to moderate",
          "have moderate",
          "have moderate to severe",
          "have severe",
          "have severe to very severe",
          "have very severe",
        ],
      },
      {
        name: "Thinking",
        keyInReport: "SCALE_Coginitive_Performance2",
        summaryText:
          "The results indicate {%name%} may {%value%} challenges with thinking or processing information.",
        description: "Cognitive status of an individual.",
        valueMapper: [
          "not have",
          "have minimal",
          "have mild",
          "have mild to moderate",
          "have moderate",
          "have moderate to severe",
          "have severe",
          "have severe to very severe",
          "have very severe",
        ],
      },
    ],
  },

  {
    image: "/patient-report/daily-functioning.png",
    title: "Daily functioning",
    borderColor: "#E9AD8A",
    items: [
      {
        name: "Basic daily activities",
        keyInReport: "SCALE_ADL_hierachy",
        summaryText:
          "The results indicate {%name%} may {%value%} to complete basic daily activities.",
        description: "Ability to complete basic activities of daily living.",
        valueMapper: [
          "be independent",
          "require some supervision",
          "require limited assistance",
          "require extensive assistance",
          "be dependent on others",
          "be totally dependent on others",
        ],
        subItems: [
          {
            name: "Movement",
            keyInReport: "D2ea",
            numberOfValues: 3,
          },
          {
            name: "Eating",
            keyInReport: "D2ja",
            numberOfValues: 3,
          },
          {
            name: "Toilet use",
            keyInReport: "D2ha",
            numberOfValues: 3,
          },
          {
            name: "Personal hygiene",
            numberOfValues: 3,
            keyInReport: "D2ba",
          },
        ],
      },
      {
        name: "Household activities",
        moveToNewPage: true,
        keyInReport: "SCALE_ADL_hierachy",
        summaryText:
          "The results indicate {%name%} may {%value%} in completing daily household activities.",
        description:
          "Ability to complete activities like meal preparation, cleaning, telephone use, managing finances, and taking medications.",
        valueMapper: [
          "have no difficulties",
          "have some difficulties",
          "have some difficulties",
          "have some dependence",
          "have more dependence",
          "have complete dependence",
        ],
      },
    ],
  },

  {
    image: "/patient-report/emontional-state.png",
    title: "Emotional state",

    borderColor: "#FAE20E",
    items: [
      {
        name: "Mood",
        keyInReport: "SCALE_Self_Related_MOOD",
        summaryText: "The results indicate {%name%} may have {%value%}.",
        description: "Negative mood symptoms such as sadness or anxiety.",
        valueMapper: [
          "positive mood symptoms",
          "positive mood symptoms",
          "borderline mood symptoms",
          "borderline mood symptoms",
          "moderate mood symptoms",
          "moderate mood symptoms",
          "poorer mood symptoms",
          "poorer mood symptoms",
          "poor mood symptoms",
        ],
      },
    ],
  },

  {
    image: "/patient-report/health-insstability.png",
    title: "Health instability",
    borderColor: "#9CE3FC",
    items: [
      {
        name: "Risk of hospital use",
        keyInReport: "SCALE_DIVERT",
        summaryText:
          "The results indicate {%name%} may be at {%value%} of future hospital use.",
        description: "Potential of future hospital (emergency department) use.",
        valueMapper: [
          "low risk",
          "low risk",
          "medium risk",
          "medium risk",
          "higher risk",
          "higher risk",
        ],
      },
    ],
  },

  {
    image: "/patient-report/past-hospital-use.png",
    title: "Summary of past hospital use",
    borderColor: "#BABAF7",
    items: [
      {
        name: "Hospital use",
        keyInReport: "H1a",
        summaryText:
          "The number of times {%name%} was admitted to the hospital for an overnight stay in the last 90 days.",
        description: "",
        hasNumericValue: true,
      },
      {
        name: "ED use",
        keyInReport: "H1b",
        summaryText:
          "The number of times {%name%} visited the emergency department in the last 90 days (excluding overnight stays). ",
        hasNumericValue: true,
        description: "",
      },
    ],
  },
];
