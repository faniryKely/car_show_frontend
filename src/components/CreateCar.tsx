import React from 'react';
import { BooleanInput, Create, CreateProps, NumberInput, ReferenceInput, SimpleForm, TextInput } from "react-admin";

export const CreateCar = (props: CreateProps) => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            const objectUrl = URL.createObjectURL(file); // Crée une URL pour le fichier
            console.log(objectUrl); // Vous pouvez maintenant travailler avec l'URL du fichier
        }
    };

    return (
        <Create {...props}>
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