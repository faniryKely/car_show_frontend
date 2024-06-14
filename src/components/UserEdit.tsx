import { ArrayInput, BooleanInput, Edit, ReferenceInput, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin';

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="password" />
            <ReferenceInput source="role.roleId" reference="car_show/role" />
            <TextInput source="username" />
            <ArrayInput source="authorities"><SimpleFormIterator><TextInput source="authority" /></SimpleFormIterator></ArrayInput>
            <BooleanInput source="accountNonExpired" />
            <BooleanInput source="accountNonLocked" />
            <BooleanInput source="credentialsNonExpired" />
            <BooleanInput source="active" />
            <BooleanInput source="enabled" />
            <TextInput source="id" />
        </SimpleForm>
    </Edit>
);