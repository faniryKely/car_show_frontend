import { Datagrid, List, SearchInput, TextField } from "react-admin";

export const CarList = () => (
    <List
        title="Car List"
        filters={[<SearchInput source="search" alwaysOn key="searchInput" />]}
    >
        <Datagrid rowClick="edit">
            <TextField source="name"/>
            <TextField source="brand.name"/>
            <TextField source="model"/>
            <TextField source="carTypes.name"/>
            <TextField source="color"/>
            <TextField source="motorTypes.name"/>
            <TextField source="power"/>
            <TextField source="placeNumber"/>
            <TextField source="price"/>
            <TextField source="status"/>
        </Datagrid>
    </List>
);