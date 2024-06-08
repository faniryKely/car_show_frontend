"use client"

import { CarList } from "@/components/CarList";
import CarInfo from "@/components/carInfo/CarInfo";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { error } from "console";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import styles from "./cars.module.css";

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
        const fetchCars = async () => {
            try {
                const response = await axios.get("http://localhost:8080/car_show/car");
                setCarList(response.data);
            } catch (error) {
                console.error("Error fetching car data:", error);
            }
        };

        fetchCars();
    }, []);
    return (
        <div className="container card">
            <Header/>
           {carList.map((car=>(
            <div>
                <Image className="carPicture" src={car.images.url} alt=""></Image>
                <p>{car.model}</p>
            </div>
           )))}
        </div>
    )
}