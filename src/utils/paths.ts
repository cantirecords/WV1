export const getAssetPath = (path: string) => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/WV1';
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `${basePath}/${cleanPath}`;
};
