export interface Image{
    imageId : number;
    url : string;
    car : Car;
}

export interface Car{
    carTypeId : number;
    name : string;
    model : string;
    price : number;
    color : string;
    power : number;
    placeNumber : number;
    status : boolean
    brand : { id: number, name : string};
    carType : { id : number, type : string};
    motorType : { id: number, type : string};
    images : Image[];
}