export interface Car {
    id: number;
    name: string;
    model: string;
    price: number;
    color: string;
    power: number;
    placeNumber: number;
    status: boolean;
    brandId: number;
    carTypeId: number;
    motorTypeId: number;
}

export interface CarSearchParams {
    name?: string;
    model?: string;
    price?: number;
    color?: string;
    power?: number;
    placeNumber?: number;
    status?: boolean;
    brandId?: number;
    carTypeId?: number;
    motorTypeId?: number;
    page?: number;
    size?: number;
}

export interface CarSearchResult {
    content: Car[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
}