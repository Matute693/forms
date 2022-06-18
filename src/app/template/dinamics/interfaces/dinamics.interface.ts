export interface User {
    name: string;
    favorities: Favs[]
}

export interface Favs {
    id: number;
    name: string;
}