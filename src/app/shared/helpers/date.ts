import * as moment from 'moment-timezone';

export class DateHelpers {
  public static getRelativeDate(dateString: string): string {
    return moment(dateString).fromNow();
  }

  public static getAbsoluteDate(dateString: string): string {
    return moment(dateString).tz(moment.tz.guess()).format('YYYY-MM-DD hh:mm a z');
  }
}
