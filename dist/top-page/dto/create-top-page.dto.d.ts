export declare enum TopLevelCategory {
    Courses = 0,
    Services = 1,
    Books = 2,
    Products = 3
}
export declare class HhDataDto {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
    [key: string]: number | undefined;
}
export declare class TopPageAdvantageDto {
    title: string;
    description: string;
    [key: string]: string;
}
export declare class CreateTopPageDto {
    firstCategory: TopLevelCategory;
    secondaryCategory: string;
    alias: string;
    title: string;
    category: string;
    hh?: HhDataDto;
    advantages: TopPageAdvantageDto[];
    seoText: string;
    tagsTitle: string;
    tags: string[];
}
