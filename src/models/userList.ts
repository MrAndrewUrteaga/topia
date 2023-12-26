export interface User {
        id: number;
        is_broadcaster: boolean;
        username: string;
        x: number;
        y: number;
};

export interface ListUser extends User {
    distance: string;
};