import moment from 'moment';

export const getTimeAgo = date => moment(date).fromNow();

export const getProgress = (startAt, endAt) => {
  let now = moment();
  let start = moment(startAt);
  let end = moment(endAt);
  let duration = moment.duration(end.diff(start));
  let remaining = moment.duration(end.diff(now));
  let percent = remaining.asSeconds() / duration.asSeconds();
  if (percent <= 0) percent = 0;
  if (percent >= 1) percent = 1;
  return percent;
};
