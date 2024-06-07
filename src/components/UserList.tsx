import { Datagrid, List, SearchInput, TextField } from "react-admin";

export const UserList = () => (
    <List
        filters={[<SearchInput source="search" alwaysOn/>]}
    >
        <Datagrid rowClick="edit">
            <TextField source="name"/>
            <TextField source="email"/>
            <TextField source="isActive"/>
        </Datagrid>
    </List>
);