import { Injectable } from '@nestjs/common';
import { path } from 'app-root-path';
import { format } from 'date-fns';
import { ensureDir, writeFile } from 'fs-extra';
import * as sharp from 'sharp';
import { fileElementResponse } from './dto/file-response-element.response';
import { MFile } from './mfile.class';

@Injectable()
export class FilesService {
  async saveFiles(files: MFile[]): Promise<fileElementResponse[]> {
    const dateFolder = format(new Date(), 'yyyy-MM-dd');
    const uploadFolder = `${path}/uploads/${dateFolder}`;
    await ensureDir(uploadFolder);
    const response: fileElementResponse[] = [];

    for (const file of files) {
      await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer);
      response.push({
        url: `${dateFolder}/${file.originalname}`,
        name: file.originalname,
      });
    }
    return response;
  }

  async convertToWebP(file: Buffer) {
    return sharp(file).webp().toBuffer();
  }
}
