import { isValid, format, parse, isEqual, isBefore, formatDate } from "date-fns";

export function validateDate(newDate) {
  if (isValid(newDate)) {
    return false;
  }
  if (isBefore(newDate, new Date())) {
    return false;
  }

  return true;
}

export function parseDate(date) {
  if(typeof(date) != "object"){
     return parse(date);
  }
  return date;
}

