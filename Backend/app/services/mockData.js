import trainerTypeDAO from "../DAO/trainerTypeDAO";
import trainingDAO from "../DAO/trainingDAO";

export const exercisesArray = [
  {
    title: "Przysiady z podskokiem",
    description:
      "Zacznij od pozycji stojącej, wykonaj przysiad, a następnie dodaj skok na koniec.",
    numberOfRepetitions: 15,
  },
  {
    title: "Pompki",
    description:
      "Przyjmij pozycję deski, opuść ciało do dołu, a następnie wróć do pozycji wyjściowej.",
    numberOfRepetitions: 20,
  },
  {
    title: "Plank z unoszeniem nóg",
    description:
      "Wejdź w pozycję deski i unosź naprzemiennie jedną nogę do góry.",
    numberOfRepetitions: 12,
  },
  {
    title: "Mountain climbers",
    description:
      "W pozycji deski wykonuj bieganie w miejscu, przynosząc kolana do klatki piersiowej przez 30s .",
    numberOfRepetitions: 10,
  },
  {
    title: "Skłony boczne z hantlami",
    description:
      "W weź hantle, pochyl się na bok, a następnie unosź się do góry.",
    numberOfRepetitions: 12,
  },
];

export const trainerTypeArray = [
  {
    trainerType: trainerTypeDAO.trainerType.forWomenDuringAndAfterPregnancy,
  },
  {
    trainerType: trainerTypeDAO.trainerType.functional,
  },
  {
    trainerType: trainerTypeDAO.trainerType.generalDevelopment,
  },
  {
    trainerType: trainerTypeDAO.trainerType.reducing,
  },
  {
    trainerType: trainerTypeDAO.trainerType.relaxingTheSenses,
  },
  {
    trainerType: trainerTypeDAO.trainerType.strengthening,
  },
];

export const trainingArray = [
  {
    title: "Trening wzmacniajacy",
    description: "Trenning który cię wzmocni",
    sex: trainingDAO.sexType.men,
    trainingGoal: "Coś",
    physicalActivity: trainingDAO.physcialActivityType.small,
    workType: trainingDAO.workType.sitting,
  },
  {
    title: "Trening relaksujący",
    description: "Trening który pomoże ci sie zrelaksować",
    sex: trainingDAO.sexType.women,
    trainingGoal: "Coś",
    physicalActivity: trainingDAO.physcialActivityType.absence,
    workType: trainingDAO.workType.standing,
  },
];
