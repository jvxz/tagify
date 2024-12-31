import MP3Tag from "mp3tag.js";
import { type Tags } from "./types";
import { saveAs } from "file-saver";

export default async function saveTags(file: File, tags: Tags, name: string) {

    const arrayBuffer = await file.arrayBuffer();
    const mp3tag = new MP3Tag(arrayBuffer, true);

    mp3tag.read()

    mp3tag.tags.album = tags.album!
    mp3tag.tags.artist = tags.artist!
    mp3tag.tags.title = tags.title!
    mp3tag.tags.year = tags.year!.toString()
    mp3tag.tags.comment = tags.comments?.toString() ?? ""

    mp3tag.save()

    saveAs(new Blob([mp3tag.buffer]), name)
    return mp3tag.buffer
}

// import { ID3Writer } from 'browser-id3-writer';
// import { type Tags } from './types';

// export default async function saveTags(file: File, tags: Tags) {
//     const arrayBuffer = await file.arrayBuffer();
//     const writer = new ID3Writer(arrayBuffer);

//     if (tags.title) {
//     writer.setFrame("TIT2", tags.title);
//   }

//   writer.addTag();

//   const blob = writer.getBlob();
//   const url = writer.getURL();
//   return { blob, url };
// }
