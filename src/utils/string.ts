export const stripped = (str: string) =>
  str?.replace(/(<([^>]+)>)/gi, "")?.replace(/(\r\n|\n|\r)/gm, "");

export const shorten = (str: string, maxLen: number) => {
  if (str.length <= maxLen) return str;
  return str.replace(/^(.{20}[^\s]*).*/, "$1") + "...";
};
