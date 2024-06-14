"use client"

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import {Car} from "@/components/Interface"
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';

interface CardProps {
    cars : Car[];
}

<<<<<<< HEAD
const CarCard: React.FC<CardProps> = ({ cars }) => {
    if (!cars) {
        return <div>No cars available</div>;
    }
=======
const CarCard: React.FC<CardProps> = () => {

    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        const fetchCars = async () => {
            const response = await axios.get('http://localhost:8080/car_show/car');
            const cars : Car[] = response.data;
            setCars(cars);
        }
        fetchCars();
    }, []);
    
>>>>>>> 29d817606e29abbaedcd1b1415a172a8756aab5e
    return (
        <div>
            {cars.map((car) => (
                <div key={car.carId} className="card" style={{ width: '18rem' }}>
                    {car.images.length > 0 && (
                        <Image src={car.images[0].url} className="card-img-top" alt={car.name} width={288} height={162} />
                    )}
                    <div className="card-body">
                        <h5 className="card-title">{car.name}</h5>
                        <p className="card-text">Model: {car.model}</p>
                        <p className="card-text">Price: ${car.price}</p>
                        <Link href={`/cars/${car.carId}`}>
                            <p className="btn btn-primary">View Details</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CarCard;