import { Car } from "@/components/Interface";
import { Brand } from "./Brand";

export type Images = {
    imageId: number;
    url: string;
    car: Car | null;
    brand: Brand | null;
}

