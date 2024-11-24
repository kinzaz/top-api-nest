import { TopPage } from '@prisma/client';
import { FindTopPageDto } from './dto/find-top-page.dto';
export declare class TopPageController {
    create(dto: Omit<TopPage, '_id'>): Promise<void>;
    get(id: string): Promise<void>;
    delete(id: string): Promise<void>;
    patch(id: string, dto: TopPage): Promise<void>;
    find(dto: FindTopPageDto): Promise<void>;
}
