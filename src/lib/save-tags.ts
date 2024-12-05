import { ID3Writer } from 'browser-id3-writer';
import { type Tags } from './types';
import { saveAs } from 'file-saver';

export default async function saveTags(file: File, tags: Tags, name: string) {
    const arrayBuffer = await file.arrayBuffer();
    const writer = new ID3Writer(arrayBuffer);

    if (tags.title) {
        writer.setFrame("TIT2", tags.title);
    }

    writer.addTag();

    const blob = writer.getBlob();
    const url = writer.getURL();
    saveAs(blob, name);
    return { blob, url };
}
