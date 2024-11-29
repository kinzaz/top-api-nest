import { CreateTopPageDto } from './dto/create-top-page.dto';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageService } from './top-page.service';
export declare class TopPageController {
    private readonly topPageService;
    constructor(topPageService: TopPageService);
    create(dto: CreateTopPageDto): Promise<{
        title: string;
        advantages: import("@prisma/client/runtime/library").JsonValue[];
        tags: string[];
        category: string;
        id: string;
        firstCategory: number;
        secondaryCategory: string;
        alias: string;
        hh: import("@prisma/client/runtime/library").JsonValue | null;
        seoText: string;
        tagsTitle: string;
    }>;
    get(id: string): Promise<{
        title: string;
        advantages: import("@prisma/client/runtime/library").JsonValue[];
        tags: string[];
        category: string;
        id: string;
        firstCategory: number;
        secondaryCategory: string;
        alias: string;
        hh: import("@prisma/client/runtime/library").JsonValue | null;
        seoText: string;
        tagsTitle: string;
    }>;
    getByAlias(alias: string): Promise<{
        title: string;
        advantages: import("@prisma/client/runtime/library").JsonValue[];
        tags: string[];
        category: string;
        id: string;
        firstCategory: number;
        secondaryCategory: string;
        alias: string;
        hh: import("@prisma/client/runtime/library").JsonValue | null;
        seoText: string;
        tagsTitle: string;
    }>;
    delete(id: string): Promise<{
        title: string;
        advantages: import("@prisma/client/runtime/library").JsonValue[];
        tags: string[];
        category: string;
        id: string;
        firstCategory: number;
        secondaryCategory: string;
        alias: string;
        hh: import("@prisma/client/runtime/library").JsonValue | null;
        seoText: string;
        tagsTitle: string;
    }>;
    patch(id: string, dto: CreateTopPageDto): Promise<{
        title: string;
        advantages: import("@prisma/client/runtime/library").JsonValue[];
        tags: string[];
        category: string;
        id: string;
        firstCategory: number;
        secondaryCategory: string;
        alias: string;
        hh: import("@prisma/client/runtime/library").JsonValue | null;
        seoText: string;
        tagsTitle: string;
    }>;
    find(dto: FindTopPageDto): Promise<{
        title: string;
        secondaryCategory: string;
        alias: string;
    }[]>;
}
