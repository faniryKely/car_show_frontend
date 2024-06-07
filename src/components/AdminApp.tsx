"use client";
import { Admin, Resource, ListGuesser, EditGuesser, Create } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./UserList";
import { CarList } from "./CarList";
import { AppointmentList } from "./AppointmentList";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PanoramaIcon from '@mui/icons-material/Panorama';
import { CreateCar } from "./CreateCar";
import CustomizeLoginPage from "../app/login/page";

const dataProvider = jsonServerProvider("http://localhost:8080");

const AdminApp = () => (
    <Admin loginPage= {CustomizeLoginPage} dataProvider={dataProvider}>
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
            list={ListGuesser}
            edit={EditGuesser}
            create={Create}
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