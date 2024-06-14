import { Car } from "./Car";


export type Appointment = {
    appointmentId: number;
    name: string;
    firstName?: string; // Le prénom est optionnel selon votre définition
    email: string;
    message?: string; // Le message est optionnel selon votre définition
    contact: string;
    appointmentDate: Date; // Utilisation de Date pour le type de date
    status: AppointmentStatus;
    car?: Car | null; 
}