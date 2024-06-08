import { useState, useEffect } from "react";

export default function CarSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
    const [cars, setCars] = useState([]);

    // Debounce search term so that it only updates after a delay
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300); // 300ms delay

        return () => {
            clearTimeout(timerId);
        };
    }, [searchTerm]);

    // Fetch cars from the API when debouncedSearchTerm changes
    useEffect(() => {
        async function fetchCars() {
            const response = await fetch(`/car_show/car?name=${debouncedSearchTerm}&model=${debouncedSearchTerm}`);
            const data = await response.json();
            setCars(data);
        }

        if (debouncedSearchTerm) {
            fetchCars();
        } else {
            setCars([]); // Clear cars when search term is cleared
        }
    }, [debouncedSearchTerm]);

    return (
        <div>
            <input
                type="text"
                placeholder="Recherche par marque ou modèle"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {cars.map(car => (
                    <li key={car.carId}>{car.name} - {car.model}</li>
                ))}
            </ul>
        </div>
    );
}