export interface IResult {
    results: IMember[];
}

export interface IMember {
    id: string;
    title: string;
    short_tittle: string;
    first_name: string;
    last_name: string;
    date_of_birth: string;
    gender: string;
    party: string;
    total_votes: number;
    phone: string;
}

