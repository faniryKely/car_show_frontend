'use client'

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Car } from '@/components/Interface';
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { usePathname, useRouter } from "next/navigation";

const CarDetails : React.FC = () => {

    const [carsDetail, setCarDetail] = useState<Car>();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const fetchCarDetail = async () => {
            let id = pathname.substring(6);
            const response = await axios.get(`http://localhost:8080/car/${id}`);
            const cars : Car = response.data;
            setCarDetail(cars);
        }
        fetchCarDetail();
    }, []);

    return (
        <div className="card" style={{ width: '18rem' }}>
            {carsDetail && carsDetail.images.length > 0 && (
                <Image src={carsDetail.images[0].url} className="card-img-top" alt={carsDetail.name} width={288} height={162} />
            )}
            <div className="card-body">
                <h5 className="card-title">{carsDetail?.name}</h5>
                <p className="card-text">Model: {carsDetail?.model}</p>
                <p className="card-text">Price: ${carsDetail?.price}</p>
                <p className="card-text">Color: {carsDetail?.color}</p>
                <p className="card-text">Power: {carsDetail?.power} HP</p>
                <p className="card-text">Seats: {carsDetail?.placeNumber}</p>
                <p className="card-text">Status: {carsDetail?.status ? 'Available' : 'Unavailable'}</p>
                {carsDetail?.images.map((image) => (
                    <div key={image.imageId}>
                        <Image src={image.url} alt={carsDetail?.name} width={288} height={162} />
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