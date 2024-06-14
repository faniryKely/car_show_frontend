import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import {Car} from "@/components/Interface"
import { GetServerSideProps } from 'next';

interface CardProps {
    cars : Car[];
}

const CarCard: React.FC<CardProps> = ({ cars }) => {
    return (
        <div>
            {cars.map((car) => (
                <div key={car.carTypeId} className="card" style={{ width: '18rem' }}>
                    {car.images.length > 0 && (
                        <Image src={car.images[0].url} className="card-img-top" alt={car.name} width={288} height={162} />
                    )}
                    <div className="card-body">
                        <h5 className="card-title">{car.name}</h5>
                        <p className="card-text">Model: {car.model}</p>
                        <p className="card-text">Price: ${car.price}</p>
                        <Link href={`/cars/${car.carTypeId}`}>
                            <a className="btn btn-primary">View Details</a>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export const getServersideProps: GetServerSideProps = async () => {
    const response = await axios.get('http://localhost:8080/car_show/car');
    const cars : Car[] = response.data; 

    return{
        props: {
            cars,
        },
    }
}

export default CarCard;