import * as url from "node:url";

export const urlStringExample = 'https://github.com/C215714N/digitalers_nodejs/blob/main/readme.md?tab=readme-ov-file#tabla-de-contenidos';
export const urlObjectExample = {
    protocol: 'https:',
    slashes: true,
    host: 'github.com',
    port: null,
    hostname: 'github.com',
    hash: '#tabla-de-contenidos',
    search: '?tab=readme-ov-file',
    query: 'tab=readme-ov-file',
    pathname: '/c215714n/digitalers_nodejs/',
    path: '/c215714n/digitalers_nodejs/?tab=readme-ov-file#tabla-de-contenidos',
    href: 'https://github.com/c215714n/digitalers_nodejs/?tab=readme-ov-file#tabla-de-contenidos'
}
export const parseUrl = string => url.parse(string)