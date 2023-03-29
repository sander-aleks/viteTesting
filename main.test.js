// @vitest-environment jsdom


import { expect, test } from 'vitest';
import { plusButton, minusButton} from './main';

test('use jsdom in this test file', () => {
  expect(plusButton).toBe( + 1 )
});

test('use jsdom in this test file', () => {
  expect(minusButton).toBe( - 1 );
})