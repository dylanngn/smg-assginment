export const randomPick = (arr: Array<any> = [], numberOfElements = 1) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numberOfElements);
}