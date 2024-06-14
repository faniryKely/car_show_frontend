"use client"
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";

type CarSearchParam = {
    brandId: string;
    model: string;
    minPrice: number;
    maxPrice: number;
}

type Car = {
    name: string;
    model: string;
    price: number;
}

export default function CarSearch() {
    const [cars, setCars] = useState<Car[]>([]);
    const [options, setOptions] = useState<{ brands: string[], models: string[] }>({ brands: [], models: [] });
    
    const { register, handleSubmit } = useForm<CarSearchParam>();

    const onSubmit: SubmitHandler<CarSearchParam> = async (data) => {
        try {
            const response = await axios.get("http://localhost:8080/car_show/car", {
                params: {
                    brandId: data.brandId,
                    model: data.model,
                    minCost: data.minPrice,
                    maxCost: data.maxPrice
                }
            });
            setCars(response.data.map((car: Car) => ({
                name: car.name,
                model: car.model,
                price: car.price
            })));
        } catch (error) {
            console.error("Failed to fetch cars:", error);
        }
    };

    useEffect(() => {
        async function fetchOptions() {
            try {
                const brandResponse = await axios.get("http://localhost:8080/car_show/brand");
                const modelResponse = await axios.get("http://localhost:8080/car_show/model");
                setOptions({
                    brands: brandResponse.data.map((brand: { id: string, name: string }) => brand.name),
                    models: modelResponse.data.map((model: { id: string, name: string }) => model.name)
                });
            } catch (error) {
                console.error("Failed to fetch options:", error);
            }
        }
        fetchOptions();
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register("brandId")}>
                    {options.brands.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
                    ))}
                </select>
                <select {...register("model")}>
                    {options.models.map((model) => (
                        <option key={model} value={model}>{model}</option>
                    ))}
                </select>
                <input type="number" {...register("minPrice")} />
                <input type="number" {...register("maxPrice")} />
                <button type="submit">Rechercher</button>
            </form>
            <div>
                {cars.map((car) => (
                    <div key={car.name}>{car.name} {car.model} {car.price}</div>
                ))}
            </div>
        </div>
    );
}