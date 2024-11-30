import { fromFile } from '@catamphetamine/id3js/browser';

export default async function getTags(file: File) {
    const tags = await fromFile(file);
    return tags;
}
