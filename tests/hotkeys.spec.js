import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Runs before each test and signs in each page.
  await page.goto('http://localhost:3000/tests/hotkeys.html');
  await expect(page.locator('#log')).toBeEmpty();
});

test('test if button works', async ({ page }) => {
  await page.getByRole('button', { name: 'A', exact: true }).click();
  await expect(page.locator('#log')).toHaveText('1 Pressed "A"');
});

test('Hotkey: simple. single button', async ({ page }) => {
  await page.keyboard.press('a');
  await page.getByText('1 Pressed "A"');
});

test('Hotkey: simple. 2 buttons', async ({ page }) => {
  await page.keyboard.press('b');
  await page.getByText('1 Pressed "B"');
  await page.getByText('2 Pressed "B"');
});

test('Hotkey: simple | simple. single button', async ({ page }) => {
  await page.keyboard.press('d');
  await page.getByText('1 Pressed "D or E"');
  await page.keyboard.press('e');
  await page.getByText('2 Pressed "D or E"');
});

test('Hotkey: modifier. single button', async ({ page }) => {
  await page.keyboard.press('Meta+f');
  await page.getByText('1 Pressed "Ctrl+F"');
  await page.keyboard.press('Shift+f');
  await page.getByText('2 Pressed "Shift+F"');
  await page.keyboard.press('Alt+f');
  await page.getByText('3 Pressed "Alt+F"');
});

test('Hotkey: more modifiers. single button', async ({ page }) => {
  await page.keyboard.press('Ctrl+Shift+f');
  await page.getByText('1 Pressed "Ctrl+Shift+F"');
  await page.keyboard.press('Shift+f');
  await page.getByText('2 Pressed "Shift+F"');
  await page.keyboard.press('Alt+f');
  await page.getByText('3 Pressed "Alt+F"');
});


test('Hotkey: modifier | simple. single button', async ({ page }) => {
  await page.keyboard.press('Meta+g');
  await page.getByText('1 Pressed "Ctrl+G or H"');
  await page.keyboard.press('h');
  await page.getByText('2 Pressed "Ctrl+G or H"');
});

test('Hotkey: modifier | modifier. single button', async ({ page }) => {
  await page.keyboard.press('Meta+i');
  await page.getByText('1 Pressed "Ctrl+I or Ctrl+J"');
  await page.keyboard.press('Meta+j');
  await page.getByText('2 Pressed "Ctrl+I or Ctrl+J"');
});

test('Hotkey: simple. button (disabled)', async ({ page }) => {
  await page.keyboard.press('k');
  await expect(page.locator('#log')).toBeEmpty();

  await page.getByRole('button', { name: 'A', exact: true }).click();
  await expect(page.locator('#log')).toHaveText('1 Pressed "A"');
});

