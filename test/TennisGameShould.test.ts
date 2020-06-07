import { Player } from "../src/tennisGame/Player";


describe("Tennis Game Should", () => {
    let playerA: Player;

    test("when a player have 0 points won, the score must be love", () => {
        givenAPlayer('A');

        whenThePlayerWontThisPoints(0);

        thenTheScoreIs('love');
    });

    test("when a player have 1 points won, the score must be fifteen", () => {
        givenAPlayer('A');

        whenThePlayerWontThisPoints(1);

        thenTheScoreIs('fifteen');

    });

    test("when a player have 2 points won, the score must be fifteen", () => {
        givenAPlayer('A');

        whenThePlayerWontThisPoints(2);

        thenTheScoreIs('thirty');
    });

    test("when a player have 3 points won, the score must be forty", () => {
        givenAPlayer('A');

        whenThePlayerWontThisPoints(3);

        thenTheScoreIs('forty');
    });

    function givenAPlayer(name: string): void {
        playerA = new Player(name);
    }

    function whenThePlayerWontThisPoints(points: number) {
        for(let i = 0; i < points; i++) {
            playerA.winPoint();
        }
    }

    function thenTheScoreIs(score: string) {
        expect(playerA.score()).toBe(score);
    }
});
