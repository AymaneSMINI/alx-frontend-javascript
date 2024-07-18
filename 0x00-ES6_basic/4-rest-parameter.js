export default function returnHowManyArguments(...args) {
return args.length;
}
test('returns the right number of arguments', () => {
    expect(returnHowManyArguments(10, 20, 30, 4)).toBe(4);
  });