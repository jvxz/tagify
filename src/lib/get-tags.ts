import { MP3Tag } from "mp3tag.js";

export default async function getTags(file: File) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const tags = MP3Tag.readBuffer(buffer);
    return tags;
}