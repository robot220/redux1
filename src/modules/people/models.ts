export interface IPerson {
    name: string;
    type: PersonType;
}

export class Person implements IPerson {
    public name: string;
    public type: PersonType;

    constructor(name: string, type: PersonType) {
        this.name = name;
        this.type = type;
    }
}

export enum PersonType {
    Male,
    Female
}
