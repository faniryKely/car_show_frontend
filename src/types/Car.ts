import { Images } from "./Images"
import { Brand } from "./Brand";
import { CarType } from "./CarType";
import { MotorType } from "./MotorType";

export type Car = {
    carId: number;
    name: string;
    model: string;
    price: number; 
    color: string;
    power: number;
    placeNumber: number;
    status: boolean;
    images: Images[];
    brand: Brand 
    carType: CarType
    motorType: MotorType 
};