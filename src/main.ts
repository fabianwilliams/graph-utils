#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { buildGraphUrl, fromGraphTime, toGraphTime } from './index.mts';

// Create and configure the MCP server
const server = new McpServer({
  name: 'Fabs-Graph-Utils',
  version: '1.0.1',
});

// Tool 1: Convert JS Date to Graph Time ISO string
server.tool(
  'toGraphTime',
  'Convert JavaScript Date string to ISO string for Graph API',
  {
    date: z
      .string()
      .describe('ISO 8601 Date String (e.g. new Date().toISOString())'),
  },
  async ({ date }) => {
    const result = toGraphTime(new Date(date));
    return {
      content: [{ type: 'text', text: result }],
    };
  },
);

// Tool 2: Convert Graph Time string back to Date
server.tool(
  'fromGraphTime',
  'Convert Graph Time ISO string to JavaScript Date',
  {
    iso: z.string().describe('Graph-formatted ISO string'),
  },
  async ({ iso }) => {
    const result = fromGraphTime(iso);
    return {
      content: [{ type: 'text', text: result.toISOString() }],
    };
  },
);

// Tool 3: Build Graph URL from path and query parameters
server.tool(
  'buildGraphUrl',
  'Construct a Microsoft Graph API URL from path and query parameters',
  {
    path: z.string().describe('API path (e.g. /users or /me/messages)'),
    queryParams: z
      .record(z.string())
      .optional()
      .describe('Optional query parameters like $filter, $select'),
  },
  async ({ path, queryParams }) => {
    const url = buildGraphUrl(path, queryParams);
    return {
      content: [{ type: 'text', text: url }],
    };
  },
);

// Entry point
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error('Fatal error starting Fabs-Graph-Utils MCP server:', err);
  process.exit(1);
});
