export function getEstimatedReadingTimeInMinutes(text: string) {
  const AVG_WORDS_PER_MINUTE = 238;

  const textLength = text.split(" ").length;
  const estimatedTime = Math.ceil(textLength / AVG_WORDS_PER_MINUTE);

  return estimatedTime;
}
