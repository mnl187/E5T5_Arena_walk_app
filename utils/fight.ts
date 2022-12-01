import {WarriorRecord} from "../records/warrior.record";

export const fight = (warrior1 :WarriorRecord, warrior2: WarriorRecord): string[] => {
    const log: string[] = [];

    const warrior1TmpStats = {
        hp: warrior1.stamina * 10,
        dp: warrior1.defence,
    };
    const warrior2TmpStats = {
        hp: warrior2.stamina * 10,
        dp: warrior2.defence,
    };

    let attacker = warrior1;
    let defender = warrior2;

    do {

    } while (warrior1TmpStats.hp > 0 && warrior2TmpStats.hp > 0);

    return log;
};