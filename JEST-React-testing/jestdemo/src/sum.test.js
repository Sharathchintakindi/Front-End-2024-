import sum from "./sum";

test("testing for sum function", ()=>{
  expect(sum(10,15)).toBe(25)
});

test("testing for sum function", ()=>{
  expect(sum(1,15)).toBe(16)
});