import { load } from "cheerio";

export const parseHtmlForLinks = async (html, baseUrl) => {
    const $ = load(html);
    const nestedUrls = {};
    $('a').each((index, element) => {
        const href = $(element).attr('href');
        console.log("href: ", href);
        if (href) {
            const absoluteUrl = new URL(href, baseUrl).href;
            const pathSegments = new URL(absoluteUrl).pathname.split('/').filter(Boolean);
            let currentLevel = nestedUrls;
            pathSegments.forEach((segment, index) => {
                if (!currentLevel[segment]) {
                    currentLevel[segment] = index === pathSegments.length - 1 ? [absoluteUrl] : {};
                }
                currentLevel = currentLevel[segment];
            });
        }
    });
    return nestedUrls;
};