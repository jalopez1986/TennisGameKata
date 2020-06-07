import { Player } from "../src/tennisGame/Player";
import { Game } from "../src/tennisGame/Game";

describe("Tennis Game Suit", () => {
    describe('Player Should', () => {
        test("when a player have 0 points won, the score must be love", () => {
            const player = givenAPlayer('A');

            whenThePlayerWontThisPoints(player, 0);

            thenTheScoreIs(player,'love');
        });

        test("when a player have 1 points won, the score must be fifteen", () => {
            const player = givenAPlayer('A');

            whenThePlayerWontThisPoints(player,1);

            thenTheScoreIs(player, 'fifteen');

        });

        test("when a player have 2 points won, the score must be fifteen", () => {
            const player = givenAPlayer('A');

            whenThePlayerWontThisPoints(player, 2);

            thenTheScoreIs(player, 'thirty');
        });

        test("when a player have 3 points won, the score must be forty", () => {
            const player = givenAPlayer('A');

            whenThePlayerWontThisPoints(player,3);

            thenTheScoreIs(player,'forty');
        });
    });

    describe('Game Should', () => {
        test('given a starting game, its score must be love-love' ,() => {
            const playerA = givenAPlayer('A');
            const playerB = givenAPlayer('B');
            const game = givenAGameWith(playerA, playerB);

            expect(game.score()).toBe('love - love');
        });

        test('given a game with the firstPlayer with 1 point and the second 0, the game score must be fifteen - love' ,() => {
            const playerA = givenAPlayer('A');
            const playerB = givenAPlayer('B');
            const game = givenAGameWith(playerA, playerB);

            whenThePlayerWontThisPoints(playerA, 1);
            whenThePlayerWontThisPoints(playerB, 0);

            expect(game.score()).toBe('fifteen - love');
        });

        test('given a game with the firstPlayer with 1 point and the second too, the game score must be fifteen - fifteen' ,() => {
            const playerA = givenAPlayer('A');
            const playerB = givenAPlayer('B');
            const game = new Game(playerA, playerB);

            whenThePlayerWontThisPoints(playerA, 1);
            whenThePlayerWontThisPoints(playerB, 1);

            expect(game.score()).toBe('fifteen - fifteen');
        });

        test('given a game with the firstPlayer with 0 point and the second with 1 point, the game score must be love - fifteen' ,() => {
            const playerA = givenAPlayer('A');
            const playerB = givenAPlayer('B');
            const game = givenAGameWith(playerA, playerB);


            whenThePlayerWontThisPoints(playerA, 0);
            whenThePlayerWontThisPoints(playerB, 1);

            expect(game.score()).toBe('love - fifteen');
        });


        test('If at least three points have been scored by each side and the firstPlayer has one more point' +
            'the score of the game is “advantage” for the firstPlayer', () => {
            const playerA = givenAPlayer('A');
            const playerB = givenAPlayer('B');
            const game = new Game(playerA, playerB);

            whenThePlayerWontThisPoints(playerA, 4);
            whenThePlayerWontThisPoints(playerB, 3);

            expect(game.score()).toBe('advantage ' + playerA.name);
        });

        test('If at least three points have been scored by each side and the secondPlayer has one more point' +
            'the score of the game is “advantage” for the firstPlayer', () => {
            const playerA = givenAPlayer('A');
            const playerB = givenAPlayer('B');
            const game = new Game(playerA, playerB);

            whenThePlayerWontThisPoints(playerA, 3);
            whenThePlayerWontThisPoints(playerB, 4);

            expect(game.score()).toBe('advantage ' + playerB.name);
        });
    });



    function givenAPlayer(name: string): Player {
        return new Player(name);
    }

    function givenAGameWith(firstPlayer: Player, secondPlayer: Player): Game  {
        return new Game(firstPlayer, secondPlayer);
    }

    function whenThePlayerWontThisPoints(player: Player, points: number) {
        for(let i = 0; i < points; i++) {
            player.winPoint();
        }
    }

    function thenTheScoreIs(player: Player, score: string) {
        expect(player.score()).toBe(score);
    }





});
