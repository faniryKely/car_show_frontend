import { Create, SimpleForm, TextInput, useNotify, useRedirect } from 'react-admin';
import { useState } from 'react';

export const CreateBrand = () => {
    const [brand, setBrand] = useState({ name: '', logoUrl: '' });
    const notify = useNotify();
    const redirect = useRedirect();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result;
                if (typeof result === 'string') {  // Assurez-vous que result est une chaîne
                    setBrand(prev => ({ ...prev, logoUrl: result }));
                }
            };
            reader.readAsDataURL(file); // Pour générer une URL utilisable pour l'image
        }
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        setBrand(prev => ({ ...prev, name }));
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8080/car_show/brand', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(brand),
            });
            if (!response.ok) throw new Error('Something went wrong');
            notify('Brand created successfully', { type: 'info' });
            redirect('/admin#/car_show/brand');
        } catch (error) {
            notify('Error: ' + (error as Error).message, { type: 'warning' });
        }
    };

    return (
        <Create>
            <SimpleForm onSubmit={handleSubmit}>
                <TextInput source="name" onChange={handleNameChange} />
                <input type="file" accept="image/*" onChange={handleFileChange} />
            </SimpleForm>
        </Create>
    );
}