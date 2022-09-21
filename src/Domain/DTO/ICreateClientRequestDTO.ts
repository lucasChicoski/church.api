

export interface ICreateClientRequestDTO {
    id?: string;
    name: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    photo?: string
    id_church: string;
}