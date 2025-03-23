import { toGraphTime, fromGraphTime, buildGraphUrl } from './src/index.js';

console.log('ISO Time:', toGraphTime(new Date()));
console.log('Parsed Date:', fromGraphTime('2025-03-22T14:35:00.000Z'));

const url = buildGraphUrl('/users', {
  $filter: "startswith(displayName,'F')",
  $select: 'id,displayName',
});

console.log('Graph URL:', url);
