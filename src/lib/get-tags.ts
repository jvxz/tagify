import { read } from "node-id3";

export default function getTags(buffer: Buffer) {
    const tags = read(buffer);
    return tags;
}