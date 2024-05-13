export default function TimestampToDate(Timestamp) {
  let date = new Date(Timestamp); // 参数为毫秒数，所以这里将秒数乘于 1000
  let Y = date.getFullYear() + '-';
  let M =
    (date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) + '-';
  let D = date.getDate() + ' ';
  let h =
    date.getHours() >= 10 ? date.getHours() + ':' : '0' + date.getHours() + ':';
  let m =
    date.getMinutes() >= 10
      ? date.getMinutes() + ':'
      : '0' + date.getMinutes() + ':';
  let s = date.getSeconds() >= 10 ? date.getSeconds() : '0' + date.getSeconds();
  return Y + M + D + h + m + s;
}
