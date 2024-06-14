import { Role } from "./RoleType";

export type User = {
    userId: number;
    name: string;
    email: string;
    password: string;
    isActive: boolean;
    role: Role;
};