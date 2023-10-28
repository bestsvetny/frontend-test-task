import axios, { AxiosResponse } from 'axios';

export const $host = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        city: string;
    };
    phone: string;
    company: {
        name: string;
    };
}

export const UsersApi = {
    async getUser(userId: string): Promise<AxiosResponse<IUser>> {
        return $host.get<IUser>(`users/${userId}`);
    },
    async getAllUsers(): Promise<AxiosResponse<Array<IUser>>> {
        return $host.get<Array<IUser>>(`users`);
    }
};
