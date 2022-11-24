import {ValidationError} from "../utils/error";

export class WarriorRecord {
    public id?: string;
    /**
     * Name is always unique  (pokaże się podpowiedziach dot. składni, np. w index.ts)
     */
    public readonly name: string;
    public readonly power: number;
    public readonly defence: number;
    public readonly stamina: number;
    public readonly agility: number;
    public wins?: number;

    constructor(obj: WarriorRecord) {
        const{id, stamina, defence, name, power, agility, wins} = obj;

        const sum = [stamina, defence, power, agility].reduce((prev, curr) => prev + curr, 0)

        if (sum != 10) {
            throw new ValidationError(`Suma wszystkich statystyk musi wynosic 10. Aktualnie jest to ${sum}.`)
        }

        if (name.length < 3 && name.length > 50) {
            throw new ValidationError(`Imię musi posiadać od 3 do 50 znaków. Aktualnie jest to ${name.length}.`)
        }

        this.id = id;
        this.defence = defence;
        this.agility = agility;
        this.name = name;
        this.power = power;
        this.stamina = stamina;
        this.wins = wins;
    };

    async insert(): Promise<string> {

    }

    async update(): Promise<void> {

    }

    static async getOne(id: string): Promise<WarriorRecord | null> {

    }

    static async listAll(id: string): Promise<WarriorRecord[]> {

    }

    static async listTop(topCount: number): Promise<WarriorRecord[]> {

    }
}