// src/utils/urlUtils.ts
export const BASE_URL = "https://image.tmdb.org/t/p/original";

export const getBackdropUrl = (path: string) => `${BASE_URL}${path}`;