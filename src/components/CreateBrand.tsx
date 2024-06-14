import { Create, SimpleForm, TextInput, useNotify, useRedirect } from 'react-admin';
import { useState } from 'react';
import taunusImage from '../../public/Assets/ford-taunus.png';
import Image from 'next/image';

export const CreateBrand = () => {
    const [brand, setBrand] = useState({ name: '', logoUrl: taunusImage }); // Utilisez l'image importée comme valeur initiale
    const notify = useNotify();
    const redirect = useRedirect();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            const objectUrl = URL.createObjectURL(file); // Crée une URL pour le fichier
            setBrand(prev => ({ ...prev, logoUrl: objectUrl }));
        }
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        setBrand(prev => ({ ...prev, name }));
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8080/brand', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(brand),
            });
            if (!response.ok) throw new Error('Something went wrong');
            notify('Brand created successfully', { type: 'info' });
            redirect('/admin#/brand');
        } catch (error) {
            notify('Error: ' + (error as Error).message, { type: 'warning' });
        }
    };

    return (
        <Create>
            <SimpleForm onSubmit={handleSubmit}>
                <TextInput source="name" onChange={handleNameChange} />
                <input type="file" accept="image/*" onChange={handleFileChange} />
                <Image src={brand.logoUrl} width={100} height={100} alt="Brand Logo" />
            </SimpleForm>
        </Create>
    );
}