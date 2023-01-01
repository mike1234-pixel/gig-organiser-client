import moment, { Moment } from "moment";
import { ActionI } from "../../types/Action_Object";

export const retrieveUpcomingActions = (
  actions: ActionI[],
  currentDate: Moment
) => {
  return actions
    .filter((a) => moment(a.complete_by).isAfter(currentDate))
    .sort((a, b) => {
      const aDate = moment(a.complete_by);
      const bDate = moment(b.complete_by);
      return aDate.diff(currentDate) - bDate.diff(currentDate);
    })
    .slice(0, 3);
};
