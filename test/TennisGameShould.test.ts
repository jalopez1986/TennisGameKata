import {Player} from "../src/tennisGame/Player";


describe("Tennis Game Should", () => {

    test("when a player have 0 points won, the score must be love", () => {
        const playerA = new Player('A');

        expect(playerA.score()).toBe('love');
    });

    test("when a player have 1 points won, the score must be fifteen", () => {
        const playerA = new Player('A');

        playerA.winPoint();

        expect(playerA.score()).toBe('fifteen');
    });

    test("when a player have 2 points won, the score must be fifteen", () => {
        const playerA = new Player('A');

        playerA.winPoint();
        playerA.winPoint();

        expect(playerA.score()).toBe('thirty');
    });

    test("when a player have 3 points won, the score must be forty", () => {
        const playerA = new Player('A');

        playerA.winPoint();
        playerA.winPoint();
        playerA.winPoint();

        expect(playerA.score()).toBe('forty');
    });
});
