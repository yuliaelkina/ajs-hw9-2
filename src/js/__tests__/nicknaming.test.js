import Validator from '../nicknaming';

test('проверка валидного логина', () => {
  const userNameChecker = new Validator();
  expect(userNameChecker.validateUsername('arte_ksa')).toBe(true);
});

test('проверка невалидного логина', () => {
  const userNameChecker = new Validator();
  expect(userNameChecker.validateUsername('7arte_ksa')).toBe(false);
  expect(userNameChecker.validateUsername('arte888_ksa')).toBe(false);
});
