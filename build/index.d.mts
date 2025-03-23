/**
 * Converts a JavaScript Date to ISO 8601 string format used by Microsoft Graph
 * @param date A JavaScript Date object
 * @returns ISO 8601 UTC string
 */
export declare const toGraphTime: (date: Date) => string;
/**
 * Parses an ISO 8601 string from Microsoft Graph into a JavaScript Date
 * @param isoString ISO 8601 formatted string
 * @returns A JavaScript Date object
 */
export declare const fromGraphTime: (isoString: string) => Date;
/**
 * Builds a full Microsoft Graph API URL with query parameters
 * @param path Graph path (e.g. "/users")
 * @param queryParams Key-value object of query parameters (e.g. { $filter: "...", $select: "..." })
 * @returns Full Graph API URL as string
 */
export declare const buildGraphUrl: (path: string, queryParams?: Record<string, string>) => string;
//# sourceMappingURL=index.d.mts.map