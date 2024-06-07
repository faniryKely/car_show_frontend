import React from 'react';
import { BooleanField, BooleanInput, Create, NumberField, NumberInput, ReferenceField, ReferenceInput, SimpleForm, TextInput } from "react-admin";

export const CreateCar = () => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (e.target) {
                        const content = e.target.result;
                        console.log(content); // Vous pouvez maintenant travailler avec le contenu du fichier
                    }
                };
                reader.readAsText(file); // ou reader.readAsDataURL(file) pour les fichiers binaires comme les images
            }
        }
    };

    return (
        <Create>
            <SimpleForm>
                <TextInput source="name" />
                <TextInput source="model" />
                <NumberInput source="price" />
                <TextInput source="color" />
                <NumberInput source="power" />
                <NumberInput source="placeNumber" />
                <BooleanInput source="status" />
                <ReferenceInput source="brand" reference="brand" />
                <ReferenceInput source="carType" reference="carType" />
                <ReferenceInput source="motorType" reference="motorTypes" />

                {/* Ajout d'un sélecteur de fichiers pour l'image */}
                <input type="file" accept="image/*" onChange={handleFileChange} />
            </SimpleForm>
        </Create>
    );
};