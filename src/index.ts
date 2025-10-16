import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new McpServer({
    name: "Hello World MCP Server",
    version: "1.0.0",
    description: "A simple MCP server that responds with 'Hello, World!'",
    capabilities: {
        resources: {},
        tools: {},
        prompts: {},
    }
});

async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
}

main();