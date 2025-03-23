'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const index_mts_1 = require('./index.mts');
const vitest_1 = require('vitest');
(0, vitest_1.test)('converts to ISO string', () => {
  const date = new Date('2025-03-22T14:35:00.000Z');
  (0, vitest_1.expect)((0, index_mts_1.toGraphTime)(date)).toBe(
    '2025-03-22T14:35:00.000Z',
  );
});
(0, vitest_1.test)('parses ISO string', () => {
  const iso = '2025-03-22T14:35:00.000Z';
  const result = (0, index_mts_1.fromGraphTime)(iso);
  (0, vitest_1.expect)(result.toISOString()).toBe(iso);
});
(0, vitest_1.test)('buildGraphUrl works', () => {
  const urlStr = (0, index_mts_1.buildGraphUrl)('/users', {
    $filter: "startswith(displayName,'F')",
    $select: 'id,displayName',
  });
  const url = new URL(urlStr);
  const params = url.searchParams;
  (0, vitest_1.expect)(url.pathname).toBe('/v1.0/users');
  (0, vitest_1.expect)(params.get('$filter')).toBe(
    "startswith(displayName,'F')",
  );
  (0, vitest_1.expect)(params.get('$select')).toBe('id,displayName');
});
//# sourceMappingURL=utils.test.js.map
