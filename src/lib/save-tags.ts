import { ID3Writer } from 'browser-id3-writer';
import { type Tags } from './types';
import { saveAs } from 'file-saver';

export default async function saveTags(file: File, tags: Tags, name: string) {
    const arrayBuffer = await file.arrayBuffer();
    const writer = new ID3Writer(arrayBuffer);

    if (tags.title) {
        writer.setFrame("TIT2", tags.title);
    }

    if (tags.artist) {
        writer.setFrame("TPE1", [tags.artist]);
    }

    if (tags.albumArtist) {
        writer.setFrame("TPE2", tags.albumArtist);
    }

    if (tags.album) {
        writer.setFrame("TALB", tags.album);
    }

    if (tags.trackNumber) {
        writer.setFrame("TRCK", tags.trackNumber.toString());
    }

    if (tags.discNumber) {
        writer.setFrame("TPOS", tags.discNumber.toString());
    }

    if (tags.year) {
        writer.setFrame("TYER", tags.year);
    }

    const genre = tags.genre();
    if (genre) {
        writer.setFrame("TCON", [genre]);
    }

    if (Array.isArray(tags.comments) && tags.comments.length > 0) {
        writer.setFrame("COMM", {
            text: tags.comments[0] as string,
            description: "desc",
            language: "eng",
        });
    }

    writer.addTag();

    const blob = writer.getBlob();
    const url = writer.getURL();
    saveAs(blob, name);
    return { blob, url };
}
