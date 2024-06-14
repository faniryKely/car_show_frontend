import React from "react";
import { Datagrid, List, SearchInput, TextField } from "react-admin";

export const UserList = () => (
    <List
        title="User List"
        filters={[<SearchInput key="searchInput" source="search" alwaysOn/>]}
    >
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="password" />
            <TextField source="role.roleName" />
        </Datagrid>
    </List>
);