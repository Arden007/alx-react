import { getFullYear, getFooterCopy, getLatestNotifications } from "./utils";

test("returns the correct year", () => {
  expect(getFullYear()).toBe(2023);
});

test("returns the correct string when the argument is true or false", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("checking the returned string", () => {
  expect(getLatestNotifications()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
