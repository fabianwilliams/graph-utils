import { toGraphTime, fromGraphTime, buildGraphUrl } from './index.mts';
import { test, expect } from 'vitest';

test('converts to ISO string', () => {
  const date = new Date('2025-03-22T14:35:00.000Z');
  expect(toGraphTime(date)).toBe('2025-03-22T14:35:00.000Z');
});

test('parses ISO string', () => {
  const iso = '2025-03-22T14:35:00.000Z';
  const result = fromGraphTime(iso);
  expect(result.toISOString()).toBe(iso);
});

test('buildGraphUrl works', () => {
  const urlStr = buildGraphUrl('/users', {
    $filter: "startswith(displayName,'F')",
    $select: 'id,displayName',
  });

  const url = new URL(urlStr);
  const params = url.searchParams;

  expect(url.pathname).toBe('/v1.0/users');
  expect(params.get('$filter')).toBe("startswith(displayName,'F')");
  expect(params.get('$select')).toBe('id,displayName');
});
