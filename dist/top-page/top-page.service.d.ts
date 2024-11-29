import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTopPageDto, TopLevelCategory } from './dto/create-top-page.dto';
export declare class TopPageService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
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
    findById(id: string): Promise<{
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
    findByAlias(alias: string): Promise<{
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
    findByCategory(firstCategory: TopLevelCategory): Promise<{
        title: string;
        secondaryCategory: string;
        alias: string;
    }[]>;
    findAll(): Promise<{
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
    }[]>;
}
