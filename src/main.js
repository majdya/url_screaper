/*
*       a small program that get all titles and its link for a certain website
*
*/

const websiteUrl = 'https://www.facebook.com/';

import { getNestedUrls } from "./fetch_urls/getNestedUrls.js";

getNestedUrls(websiteUrl)
    .then((urls) => {
        console.log('All Nested URLs:', urls);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });
