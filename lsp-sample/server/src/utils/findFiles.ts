// -----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation. All rights reserved.
// -----------------------------------------------------------------------------

import { join, extname } from 'path';
import { readdirSync } from 'fs';

/**
 * Recursively searches the specified directory and its subdirectories for `.tmdl` files.
 * @param dir The root directory to begin the search.
 * @param tmdlFiles An array to collect the paths of discovered `.tmdl` files.
 * @returns A promise that resolves to an array of `.tmdl` file paths.
 */
export async function findFiles(dir: string, tmdlFiles: string[]): Promise<string[]> {
    const entries = await readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = join(dir, entry.name);

        if (entry.isDirectory()) {
            await findFiles(fullPath, tmdlFiles);
        }
        else if (entry.isFile() && extname(entry.name) === '.tmdl') {
            tmdlFiles.push(fullPath);
        }
    }
    return tmdlFiles;
}
