#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const zod_1 = require("zod");
const index_mts_1 = require("./index.mts");
// Create and configure the MCP server
const server = new mcp_js_1.McpServer({
    name: "Fabs-Graph-Utils",
    version: "1.0.1",
});
// Tool 1: Convert JS Date to Graph Time ISO string
server.tool("toGraphTime", "Convert JavaScript Date string to ISO string for Graph API", {
    date: zod_1.z.string().describe("ISO 8601 Date String (e.g. new Date().toISOString())"),
}, async ({ date }) => {
    const result = (0, index_mts_1.toGraphTime)(new Date(date));
    return {
        content: [{ type: "text", text: result }],
    };
});
// Tool 2: Convert Graph Time string back to Date
server.tool("fromGraphTime", "Convert Graph Time ISO string to JavaScript Date", {
    iso: zod_1.z.string().describe("Graph-formatted ISO string"),
}, async ({ iso }) => {
    const result = (0, index_mts_1.fromGraphTime)(iso);
    return {
        content: [{ type: "text", text: result.toISOString() }],
    };
});
// Tool 3: Build Graph URL from path and query parameters
server.tool("buildGraphUrl", "Construct a Microsoft Graph API URL from path and query parameters", {
    path: zod_1.z.string().describe("API path (e.g. /users or /me/messages)"),
    queryParams: zod_1.z.record(zod_1.z.string()).optional().describe("Optional query parameters like $filter, $select"),
}, async ({ path, queryParams }) => {
    const url = (0, index_mts_1.buildGraphUrl)(path, queryParams);
    return {
        content: [{ type: "text", text: url }],
    };
});
// Entry point
async function main() {
    const transport = new stdio_js_1.StdioServerTransport();
    await server.connect(transport);
}
main().catch((err) => {
    console.error("Fatal error starting Fabs-Graph-Utils MCP server:", err);
    process.exit(1);
});
//# sourceMappingURL=main.js.map