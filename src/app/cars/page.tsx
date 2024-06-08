"use client"

import { CarList } from "@/components/CarList";
import CarInfo from "@/components/carInfo/CarInfo";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { error } from "console";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/components/header/Header";

type Car = {
    name: string,
    model: string,
    price: number,
    color: string,
    power: number,
    placeNumber: number,
    images: {
        imageId: number,
        url: string
    },
    brand: {
        brandId: number, name: string
    },
    carTypes: {carTypeId: number, name: string},
    motorTypes: {motorTypeId: number, name: string}
} 
  

export default function Car(){
    const [carList, setCarList] = useState<Car[]>([])

    useEffect(() => {
        const response = await axios.get("http://localhost8080/car_show/car")
        setCarList(response.data)
    })
    return (
        <div>
            <Header/>
           {carList.map((car=>(
            <div>
                <Image src={car.images.url} alt=""></Image>
                <p>{car.model}</p>
            </div>
           )))}
        </div>
    )
}