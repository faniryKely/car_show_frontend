import { Datagrid, List, SearchInput, TextField } from "react-admin";

export const BrandList = () => (
    <List
        title="Brand List"
        filters={[<SearchInput key="searchInput" source="search" alwaysOn />]}
    >
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="logoUrl" />
        </Datagrid>
    </List>
);

