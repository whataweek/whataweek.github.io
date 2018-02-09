import { getDay } from './getDay';

export const getStudyYearStartDate = now => {
  const thisYear = now.getFullYear();
  const currentStudyDate = new Date(thisYear, 8, 1);
  const prevStudyDate = new Date(thisYear - 1, 8, 1);
  const studyDate = now < currentStudyDate ? prevStudyDate : currentStudyDate;

  if (getDay(studyDate) === 6) {
    const year = studyDate.getFullYear();
    const month = studyDate.getMonth();
    const day = studyDate.getDate() + 1;
    return new Date(year, month, day);
  }

  return studyDate;
};
