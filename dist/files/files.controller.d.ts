import { fileElementResponse } from './dto/file-response-element.response';
import { FilesService } from './files.service';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    uploadFile(file: Express.Multer.File): Promise<fileElementResponse[]>;
}
