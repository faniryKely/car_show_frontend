import React from "react";
import { Datagrid, List, SearchInput, TextField } from "react-admin";

export const AppointmentList = () => (
    <List 
        title="Appointments List"
        sort={ {field: "appointmentDate", order: "ASC"} }
        filters={[
            <SearchInput source="search" alwaysOn key="searchInput" />
        ]}
    >
        <Datagrid rowClick="edit">
            <TextField source="car.name"/>
            <TextField source="name"/>
            <TextField source="firstname"/>
            <TextField source="email"/>
            <TextField source="message"/>
            <TextField source="contact"/>
            <TextField source="appointmentDate"/>
            <TextField source="status"/>
        </Datagrid>
    </List>
);