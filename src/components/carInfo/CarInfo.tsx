"use client"
import axios from "axios"
import Image from "next/image"

import { useEffect, useState } from "react"

type Car = {
    name: string
    model: string
    price: number
    color: string
    power: number
    placeNumber: number
    status: boolean
    image: Image[]
    brand: Brand
    carTypes: {name: string}
    motorTypes: {name: string}
}
type Image ={
    url: string
}
type Brand = {
    name: string
    logoUrl: string
}

export default function CarInfo() {
    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/car_show/car')
            .then(response => {
                setCars(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données des voitures', error);
            });
    }, []);

    if (cars.length === 0) {
        return <div>Chargement des informations des voitures...</div>;
    }

    return (
        <div>
            {cars.map((car, index) => (
                <div key={index}>
                    <h1>{car.name} - {car.model}</h1>
                    <p>Prix: {car.price}€</p>
                    <p>Couleur: {car.color}</p>
                    <p>Puissance: {car.power} CV</p>
                    <p>Nombre de places: {car.placeNumber}</p>
                    <p>Status: {car.status ? 'Disponible' : 'Indisponible'}</p>
                    {car.image && car.image.length > 0 && <Image src={car.image[0].url} alt="Image de la voiture" />}
                    <p>Marque: {car.brand.name}</p>
                    <Image src={car.brand.logoUrl} alt="Logo de la marque" />
                    <p>Type de voiture: {car.carTypes.name}</p>
                    <p>Type de moteur: {car.motorTypes.name}</p>
                </div>
            ))}
        </div>
    );
}