import {ValidationError} from "../utils/error";
import {v4 as uuid} from 'uuid';
import {pool} from "../utils/db";

export interface WarriorEntity {
    id?: string;
    readonly name: string;
    readonly power: number;
    readonly defence: number;
    readonly stamina: number;
    readonly agility: number;
    wins?: number;
}

export class WarriorRecord implements WarriorEntity {
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

    constructor(obj: Omit<WarriorRecord, 'insert' | 'update'>) {
        const {id, stamina, defence, name, power, agility, wins} = obj;

        const stats = [stamina, defence, power, agility];

        const sum = stats.reduce((prev, curr) => prev + curr, 0)

        for (const stat of stats) {
            if (stat < 1) {
                throw new ValidationError('Każda ze statystyk musi wynosic min. 1. Ta zasada została złamana.');
            }
        }

        if (sum != 10) {
            throw new ValidationError(`Suma wszystkich statystyk musi wynosic 10. Aktualnie jest to ${sum}.`)
        }

        if (name.length < 3 && name.length > 50) {
            throw new ValidationError(`Imię musi posiadać od 3 do 50 znaków. Aktualnie jest to ${name.length}.`)
        }

        this.id = id ?? uuid();
        this.wins = wins ?? 0;
        this.defence = defence;
        this.agility = agility;
        this.name = name;
        this.power = power;
        this.stamina = stamina;
    };

    async insert(): Promise<string> {

        await pool.execute("INSERT INTO `warriors`(`id`, `name`, `power`, `defence`, `stamina`, `agility`, `wins`) VALUES (:id, :name, :power, :defence, :stamina, :agility, :wins)", {
            id: this.id,
            name: this.name,
            power: this.power,
            defence: this.defence,
            stamina: this.stamina,
            agility: this.agility,
            wins: this.wins,
        });
        return this.id;

    }

    async update(): Promise<void> {
        await pool.execute("UPDATE `warriors` SET `wins` = :wins", {
            wins: this.wins,
        });
    }

    static async getOne(id: string): Promise<WarriorRecord | null> {
        return null
    }

    static async listAll(id: string): Promise<WarriorRecord[]> {
        return [];
    }

    static async listTop(topCount: number): Promise<WarriorRecord[]> {
        return [];
    }
}