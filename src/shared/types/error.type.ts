export interface IError {
    id?: string;
    status?: number;
    title?: string;
    details: {
        message: string;
        code?: string;
    };
}
