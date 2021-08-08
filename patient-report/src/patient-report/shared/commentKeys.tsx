type CommentValue = {
  keyInReport: string;
  label: string;
};

export type CommentSectionMapper = Record<string, CommentValue[]>;

export const commentSectionMapper: CommentSectionMapper = {
  SCALE_FALLS: [
    {
      keyInReport: "E3a",
      label: "Falls (30 days)",
    },
    {
      keyInReport: "E3b",
      label: "Falls (31–90 days)",
    },
    {
      keyInReport: "E3c",
      label: "Falls (91–180 days)",
    },

    {
      keyInReport: "E4a",
      label: "Dizziness",
    },
    {
      keyInReport: "E4b",
      label: "Unsteady when walking",
    },
    {
      keyInReport: "E4c",
      label: "Chest pain",
    },
    {
      keyInReport: "E4d",
      label: "Aphasia",
    },
    {
      keyInReport: "E4e",
      label: "Constipation",
    },
    {
      keyInReport: "E4f",
      label: "Diarrhea",
    },
    {
      keyInReport: "E4g",
      label: "Vomiting",
    },
    {
      keyInReport: "E4h",
      label: "Sleep",
    },
    {
      keyInReport: "E4i",
      label: "Peripheral edema",
    },
    {
      keyInReport: "E4j",
      label: "Dehydration",
    },
  ],
  SCALE_PAIN: [
    {
      keyInReport: "E1",
      label: "Bladder control",
    },
    {
      keyInReport: "E2",
      label: "Bowel control",
    },

    {
      keyInReport: "E5",
      label: "Shortness of breath",
    },
    {
      keyInReport: "E6",
      label: "Fatigue",
    },
    {
      keyInReport: "E7",
      label: "Pain frequency",
    },
    {
      keyInReport: "E8",
      label: "Pain intensity",
    },
    {
      keyInReport: "E9",
      label: "Unstable conditions",
    },
    {
      keyInReport: "E10",
      label: "Acute problems or flare-ups",
    },
    {
      keyInReport: "E11",
      label: "Self-rated health",
    },
    {
      keyInReport: "E12",
      label: "Smoking",
    },
    {
      keyInReport: "E13",
      label: "Alcohol consumption",
    },
  ],
  SCALE_COMMUNICATIOn: [
    {
      keyInReport: "B1",
      label: "Daily decision-making",
    },
    {
      keyInReport: "B2",
      label: "Memory problems",
    },
    {
      keyInReport: "B3",
      label: "Change in decision-making",
    },
    {
      keyInReport: "B4",
      label: "Making self understood",
    },
    {
      keyInReport: "B5",
      label: "Understanding others",
    },
    {
      keyInReport: "B6",
      label: "Vision",
    },
    {
      keyInReport: "B7",
      label: "Hearing",
    },
  ],
  SCALE_Coginitive_Performance2: [
    {
      keyInReport: "C1",
      label: "Little interest or pleasure",
    },
    {
      keyInReport: "C2",
      label: "Anxiety or restlessness",
    },
    {
      keyInReport: "C3",
      label: "Sadness or hopelessness",
    },
    {
      keyInReport: "C4",
      label: "Social activities",
    },
    {
      keyInReport: "C5",
      label: "Loneliness",
    },
    {
      keyInReport: "C6",
      label: "Friends",
    },
    {
      keyInReport: "C7",
      label: "Informal support",
    },
    {
      keyInReport: "C8",
      label: "Caregivers overwhelmed",
    },
    {
      keyInReport: "C9",
      label: "Social, religious, or work activities",
    },
  ],
  SCALE_ADL_hierachy: [
    {
      keyInReport: "D1a",
      label: "Meal preparation",
    },
    {
      keyInReport: "D1b",
      label: "Ordinary housework",
    },
    {
      keyInReport: "D1c",
      label: "Managing finances",
    },
    {
      keyInReport: "D1d",
      label: "Managing medications",
    },
    {
      keyInReport: "D1e",
      label: "Phone use",
    },
    {
      keyInReport: "D1f",
      label: "Stairs",
    },
    {
      keyInReport: "D1g",
      label: "Shopping",
    },
    {
      keyInReport: "D1h",
      label: "Transportation",
    },
    {
      keyInReport: "D2a",
      label: "Bathing",
    },
    {
      keyInReport: "D2b",
      label: "Personal hygiene",
    },
    {
      keyInReport: "D2c",
      label: "Dressing lower body",
    },
    {
      keyInReport: "D2d",
      label: "Walking",
    },
    {
      keyInReport: "D2e",
      label: "Moving around inside of home",
    },
    {
      keyInReport: "D2f",
      label: "Moving around outside of home",
    },
    {
      keyInReport: "D2g",
      label: "Transfer toilet",
    },
    {
      keyInReport: "D2h",
      label: "Toilet use ",
    },
    {
      keyInReport: "D2i",
      label: "Bed mobility",
    },
    {
      keyInReport: "D2j",
      label: "Eating",
    },
    {
      keyInReport: "D3a",
      label: "Moving indoors",
    },
    {
      keyInReport: "D3b",
      label: "Physical activity",
    },
    {
      keyInReport: "D3c",
      label: "Leaving the house",
    },
    {
      keyInReport: "D3d",
      label: "Change in basic activities",
    },
    {
      keyInReport: "D3e",
      label: "Driving",
    },
  ],
  SCALE_Self_Related_MOOD: [
    {
      keyInReport: "G1",
      label: "Lost weight",
    },
    {
      keyInReport: "G2",
      label: "Eating behaviour",
    },
    {
      keyInReport: "G3",
      label: "Food or fluid consumption",
    },
  ],
  SCALE_DIVERT: [
    {
      keyInReport: "H1a",
      label: "Inpatient hospital stay",
    },
    {
      keyInReport: "H1b",
      label: "Emergency room visit",
    },
    {
      keyInReport: "H1c",
      label: "Medical visits",
    },
    {
      keyInReport: "H2",
      label: "Flu shot",
    },
    {
      keyInReport: "H3",
      label: "Wound care",
    },
    {
      keyInReport: "I1",
      label: "Finances",
    },
    {
      keyInReport: "I2",
      label: "Major stressors",
    },
  ],
};
