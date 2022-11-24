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
            throw new ValidationError(`Suma wszystkich statystyk musz wynosic 10. Aktualnie jest to ${sum}.`)
        }
    }
}