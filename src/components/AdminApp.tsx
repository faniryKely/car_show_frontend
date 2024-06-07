"use client";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./UserList";
import { CarList } from "./CarList";
import { AppointmentList } from "./AppointmentList";

const dataProvider = jsonServerProvider("http://localhost:8080");

const AdminApp = () => (
    <Admin dataProvider={dataProvider}>
        <Resource
            name="user"
            list={UserList}
            edit={EditGuesser}
            recordRepresentation={"email"}
        />
        <Resource
            name="car_show/car"
            list={CarList}
            edit={EditGuesser}
            recordRepresentation={"name"}
        />
        <Resource
            name="car_show/brand"
            list={ListGuesser}
            edit={EditGuesser}
            recordRepresentation={"name"}
        />
        <Resource
            name="car_show/appointment"
            list={AppointmentList}
            edit={EditGuesser}
            recordRepresentation={"email"}
        />
        <Resource
            name="car_show/image"
            list={ListGuesser}
            edit={EditGuesser}
            recordRepresentation={"url"}
        />
        <Resource
            name="car_show/carType"
            list={ListGuesser}
            edit={EditGuesser}
            recordRepresentation={"name"}
        />
        <Resource
            name="car_show/motorType"
            list={ListGuesser}
            edit={EditGuesser}
            recordRepresentation={"name"}
        />
    </Admin>
);

export default AdminApp;