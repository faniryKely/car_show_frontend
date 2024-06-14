export interface Image{
    imageId : number;
    url : string;
    car : Car;
}

export interface Car{
    carId : number;
    name : string;
    model : string;
    price : number;
    color : string;
    power : number;
    placeNumber : number;
    status : boolean
    brand : { id: number, name : string};
    carType : { id : number, name : string};
    motorType : { id: number, name : string};
    images : Image[];
}