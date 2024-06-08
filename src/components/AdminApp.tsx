"use client";
import { Admin, Resource, ListGuesser, EditGuesser, Create } from "react-admin";
import { fetchUtils, DataProvider } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./UserList";
import { CarList } from "./CarList";
import { AppointmentList } from "./AppointmentList";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PanoramaIcon from '@mui/icons-material/Panorama';
import { CreateCar } from "./CreateCar";
import CustomizeLoginPage from "../app/login/page";
import { CreateBrand } from "./CreateBrand";
import { BrandList } from "./BrandList";
import authProvider from "../components/authprovider/useClientProvider";

const httpClient = (url: string, options: { headers?: HeadersInit } = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    return fetchUtils.fetchJson(url, options);
};

const apiUrl = 'http://localhost:8080';
const dataProvider = jsonServerProvider(apiUrl, httpClient);

const myDataProvider: DataProvider = {
    ...dataProvider,
    getOne: (resource, params) =>
        dataProvider.getOne(resource, {
            ...params,
            id: `${params.id}`,
        }),
    getList: (resource, params) =>
        dataProvider.getList(resource, params).then(response => ({
            ...response,
            data: response.data.map(record => ({
                ...record,
                id: record[`${resource}Id`] // Utilisez le nom de l'identifiant spécifique à la table
            }))
        })),
    getMany: (resource, params) =>
        dataProvider.getMany(resource, params).then(response => ({
            ...response,
            data: response.data.map(record => ({
                ...record,
                id: record[`${resource}Id`]
            }))
        })),
    getManyReference: (resource, params) =>
        dataProvider.getManyReference(resource, params).then(response => ({
            ...response,
            data: response.data.map(record => ({
                ...record,
                id: record[`${resource}Id`]
            }))
        })),
    update: (resource, params) =>
        dataProvider.update(resource, {
            ...params,
            id: params.data.id || params.id
        }),
    updateMany: (resource, params) =>
        dataProvider.updateMany(resource, {
            ...params,
            ids: params.ids
        }),
    create: (resource, params) =>
        dataProvider.create(resource, params),
    delete: (resource, params) =>
        dataProvider.delete(resource, {
            ...params,
            id: params.id
        }),
    deleteMany: (resource, params) =>
        dataProvider.deleteMany(resource, {
            ...params,
            ids: params.ids
        }),
};

const AdminApp = () => (
    <Admin loginPage={CustomizeLoginPage} dataProvider={myDataProvider} authProvider={authProvider}>
        <Resource
            name="user"
            list={UserList}
            edit={EditGuesser}
            create={Create}
            recordRepresentation={"email"}
        />
        <Resource
            name="car_show/car"
            list={CarList}
            icon={DirectionsCarIcon}
            edit={EditGuesser}
            create={CreateCar}
            recordRepresentation={"name"}
        />
        <Resource
            name="car_show/brand"
            list={BrandList}
            edit={EditGuesser}
            create={CreateBrand}
            recordRepresentation={"name"}
        />
        <Resource
            name="car_show/appointment"
            list={AppointmentList}
            edit={EditGuesser}
            create={Create}
            recordRepresentation={"email"}
        />
        <Resource
            name="car_show/image"
            list={ListGuesser}
            edit={EditGuesser}
            create={Create}
            icon={PanoramaIcon}
            recordRepresentation={"url"}
        />
        <Resource
            name="car_show/carType"
            list={ListGuesser}
            edit={EditGuesser}
            create={Create}
            recordRepresentation={"name"}
        />
        <Resource
            name="car_show/motorType"
            list={ListGuesser}
            edit={EditGuesser}
            create={Create}
            recordRepresentation={"name"}
        />
    </Admin>
);

export default AdminApp;