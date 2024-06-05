"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { searchCars } from '../services/api';
import { Car, CarSearchParams } from '../types';

const CarSearchSchema = z.object({
    name: z.string().optional(),
    model: z.string().optional(),
    price: z.number().optional(),
    color: z.string().optional(),
    power: z.number().optional(),
    placeNumber: z.number().optional(),
    status: z.boolean().optional(),
    brandId: z.number().optional(),
    carTypeId: z.number().optional(),
    motorTypeId: z.number().optional(),
});

type CarSearchFormValues = z.infer<typeof CarSearchSchema>;

const CarSearch: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<CarSearchFormValues>({
        resolver: zodResolver(CarSearchSchema),
    });
    const [results, setResults] = useState<Car[]>([]);

    const onSubmit = async (data: CarSearchFormValues) => {
        try {
            const searchParams: CarSearchParams = Object.fromEntries(
                Object.entries(data).filter(([_, v]) => v != null)
            );
            const searchResults = await searchCars(searchParams);
            setResults(searchResults.content);
        } catch (error) {
            console.error('Search failed:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name:</label>
                    <input {...register('name')} />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div>
                    <label>Model:</label>
                    <input {...register('model')} />
                    {errors.model && <span>{errors.model.message}</span>}
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" {...register('price')} />
                    {errors.price && <span>{errors.price.message}</span>}
                </div>
                <div>
                    <label>Color:</label>
                    <input {...register('color')} />
                    {errors.color && <span>{errors.color.message}</span>}
                </div>
                <div>
                    <label>Power:</label>
                    <input type="number" {...register('power')} />
                    {errors.power && <span>{errors.power.message}</span>}
                </div>
                <div>
                    <label>Place Number:</label>
                    <input type="number" {...register('placeNumber')} />
                    {errors.placeNumber && <span>{errors.placeNumber.message}</span>}
                </div>
                <div>
                    <label>Status:</label>
                    <input type="checkbox" {...register('status')} />
                    {errors.status && <span>{errors.status.message}</span>}
                </div>
                <div>
                    <label>Brand ID:</label>
                    <input type="number" {...register('brandId')} />
                    {errors.brandId && <span>{errors.brandId.message}</span>}
                </div>
                <div>
                    <label>Car Type ID:</label>
                    <input type="number" {...register('carTypeId')} />
                    {errors.carTypeId && <span>{errors.carTypeId.message}</span>}
                </div>
                <div>
                    <label>Motor Type ID:</label>
                    <input type="number" {...register('motorTypeId')} />
                    {errors.motorTypeId && <span>{errors.motorTypeId.message}</span>}
                </div>
                <button type="submit">Search</button>
            </form>

            <div>
                <h2>Search Results</h2>
                {results.length > 0 ? (
                    <ul>
                        {results.map((car) => (
                            <li key={car.id}>{car.name} - {car.model}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
};

export default CarSearch;
