import { fileElementResponse } from './dto/file-response-element.response';
import { MFile } from './mfile.class';
export declare class FilesService {
    saveFiles(files: MFile[]): Promise<fileElementResponse[]>;
    convertToWebP(file: Buffer): Promise<Buffer<ArrayBufferLike>>;
}
