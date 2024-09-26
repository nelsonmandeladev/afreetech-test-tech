// Enum for User Roles
export enum Role {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    AGENT = 'AGENT',
    CLIENT = 'CLIENT',
    USER = 'USER',
}

// Interface for Assurance
export interface Assurance {
    id: string; // ObjectId
    name: string;
    amount: number;
    clientId: string; // ObjectId of the associated Client
    client?: Client; // Optional reference to Client
    useId: string; // ObjectId of the User who created it
    createBy?: User; // Optional reference to User
    agencyId: string; // ObjectId of the associated Agence
    agency?: Agence; // Optional reference to Agence
    createdAt: Date; // DateTime
    updatedAt: Date; // DateTime
}

// Interface for Client
export interface Client {
    id: string; // ObjectId
    nom: string;
    prenom: string;
    email: string; // Unique
    phone: string;
    agencyId: string; // ObjectId of the associated Agence
    agence?: Agence; // Optional reference to Agence
    assurances?: Assurance[]; // Optional array of Assurance
    userId: string; // Unique ObjectId of the associated User
    createdAt: Date; // DateTime
    updatedAt: Date; // DateTime
}

// Interface for Agence
export interface Agence {
    id: string; // ObjectId
    nom: string;
    clients?: Client[]; // Optional array of Clients associated with the Agence
    userId: string; // Unique ObjectId of the associated User
    user?: User; // Optional reference to User
    assurances?: Assurance[]; // Optional array of Assurance
    createdAt: Date; // DateTime
    updatedAt: Date; // DateTime
}

// Interface for User
export interface User {
    id: string; // ObjectId
    email: string; // Unique
    password: string;
    firstName: string;
    lastName: string;
    role: Role; // Default to USER
    createdAt: Date; // DateTime
    updatedAt: Date; // DateTime
    agency?: Agence; // Optional reference to Agence
    assurances?: Assurance[]; // Optional array of Assurance
    clients?: Client[]; // Optional array of Clients associated with the User
}
