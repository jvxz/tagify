import { parseBuffer } from "music-metadata";

export default async function getTags(file: File) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const metadata = await parseBuffer(buffer);
    return metadata;
}
