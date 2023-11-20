import { fetchHtml } from "./fetchHtml.js";
import { parseHtmlForLinks } from "./parseHtmlForLinks.js";

export const getNestedUrls = async (url) => {
    try {
        const html = await fetchHtml(url);
        const linksMap = parseHtmlForLinks(html, url);
        return linksMap;
    } catch (error) {
        console.error('Error getting nested URLs:', error.message);
        throw error;
    }
};