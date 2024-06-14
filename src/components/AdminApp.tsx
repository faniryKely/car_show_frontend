"use client";
import { Admin, Resource, ListGuesser, EditGuesser, Create } from "react-admin";
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
import { UserEdit } from "./UserEdit";
import { dataProvider } from "./dataProvider/dataProvider";

const AdminApp = () => (
    <Admin loginPage={CustomizeLoginPage} dataProvider={dataProvider} authProvider={authProvider}>
        <Resource
            name="user"
            list={UserList}
            edit={UserEdit}
            create={Create}
            recordRepresentation={"email"}
        />
        <Resource
            name="car"
            list={CarList}
            icon={DirectionsCarIcon}
            edit={EditGuesser}
            create={CreateCar}
            recordRepresentation={"name"}
        />
        <Resource
            name="brand"
            list={BrandList}
            edit={EditGuesser}
            create={CreateBrand}
            recordRepresentation={"name"}
        />
        <Resource
            name="appointment"
            list={AppointmentList}
            edit={EditGuesser}
            create={Create}
            recordRepresentation={"email"}
        />
        <Resource
            name="image"
            list={ListGuesser}
            edit={EditGuesser}
            create={Create}
            icon={PanoramaIcon}
            recordRepresentation={"url"}
        />
        <Resource
            name="carType"
            list={ListGuesser}
            edit={EditGuesser}
            create={Create}
            recordRepresentation={"name"}
        />
        <Resource
            name="motorType"
            list={ListGuesser}
            edit={EditGuesser}
            create={Create}
            recordRepresentation={"name"}
        />
    </Admin>
);

export default AdminApp;