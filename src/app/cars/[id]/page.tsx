'use client'

import { GetServerSideProps } from "next";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Car } from '@/components/Interface';
import { useEffect, useState } from "react";

interface CarDetailsProps {
    car : Car;
}

const CarDetails : React.FC<CarDetailsProps> = ({car}) => {

    const [carsDetail, setCarDetail] = useState<Car>();

    useEffect(() => {
        const fetchCarDetail = async () => {
            const response = await axios.get('http://localhost:8080/car_show/car');
            const cars : Car = response.data;
            setCarDetail(cars);
        }
        fetchCarDetail();
    }, []);

    return (
        <div className="card" style={{ width: '18rem' }}>
            {car.images.length > 0 && (
                <Image src={car.images[0].url} className="card-img-top" alt={car.name} width={288} height={162} />
            )}
            <div className="card-body">
                <h5 className="card-title">{car.name}</h5>
                <p className="card-text">Model: {car.model}</p>
                <p className="card-text">Price: ${car.price}</p>
                <p className="card-text">Color: {car.color}</p>
                <p className="card-text">Power: {car.power} HP</p>
                <p className="card-text">Seats: {car.placeNumber}</p>
                <p className="card-text">Status: {car.status ? 'Available' : 'Unavailable'}</p>
                {car.images.map((image) => (
                    <div key={image.imageId}>
                        <Image src={image.url} alt={car.name} width={288} height={162} />
                    </div>
                ))}
                <Link href="/">
                    <p className="btn btn-primary">Back to list</p>
                </Link>
            </div>
        </div>
    )
}

export default CarDetails;