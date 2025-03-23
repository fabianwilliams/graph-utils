/**
 * Converts a JavaScript Date to ISO 8601 string format used by Microsoft Graph
 * @param date A JavaScript Date object
 * @returns ISO 8601 UTC string
 */
export const toGraphTime = (date) => date.toISOString();
/**
 * Parses an ISO 8601 string from Microsoft Graph into a JavaScript Date
 * @param isoString ISO 8601 formatted string
 * @returns A JavaScript Date object
 */
export const fromGraphTime = (isoString) => new Date(isoString);
/**
 * Builds a full Microsoft Graph API URL with query parameters
 * @param path Graph path (e.g. "/users")
 * @param queryParams Key-value object of query parameters (e.g. { $filter: "...", $select: "..." })
 * @returns Full Graph API URL as string
 */
export const buildGraphUrl = (path, queryParams) => {
    const baseUrl = 'https://graph.microsoft.com/v1.0';
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const url = new URL(`${baseUrl}${cleanPath}`);
    if (queryParams) {
        Object.entries(queryParams).forEach(([key, value]) => {
            url.searchParams.append(key, value);
        });
    }
    return url.toString();
};
