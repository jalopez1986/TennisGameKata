import { Player } from "./Player";

export class Game {
    constructor(private firstPlayer: Player, private secondPlayer: Player) {

    }

    score(): string {
        if (this.hasOnePlayerWonAtLeastFourPoints() && this.hasAPlayerAtLeasTwoPointsMoreThanTheOtherPlayer()) {
            return this.wonScore();
        }

        if (this.haveBothPlayersThreeOrMorePoints() ) {
            if (this.hasAPlayerOneMorePointThanTheOtherPlayer()) { return this.advantageScore(); }

            if (this.hasThePlayersTheSamePoints()) { return this.deuceScore(); }
        }

        return this.regularScore();
    }

    private hasOnePlayerWonAtLeastFourPoints(): boolean {
        return this.firstPlayer.totalPoints() >= 4 || this.secondPlayer.totalPoints() >= 4;
    }

    private hasAPlayerAtLeasTwoPointsMoreThanTheOtherPlayer(): boolean {
        return Math.abs(this.firstPlayer.totalPoints() - this.secondPlayer.totalPoints()) >= 2;
    }

    private haveBothPlayersThreeOrMorePoints(): boolean {
        return this.firstPlayer.totalPoints() >= 3 && this.secondPlayer.totalPoints() >= 3;
    }

    private hasAPlayerOneMorePointThanTheOtherPlayer(): boolean {
        return Math.abs(this.firstPlayer.totalPoints() - this.secondPlayer.totalPoints()) === 1;
    }

    private hasThePlayersTheSamePoints(): boolean {
        return this.firstPlayer.totalPoints() === this.secondPlayer.totalPoints();
    }

    private wonScore(): string {
        return `${this.leadPlayerName()} won`;
    }

    private advantageScore(): string {
        return `advantage ${this.leadPlayerName()}`;
    }

    private deuceScore(): string {
        return 'deuce';
    }

    private regularScore(): string {
        return `${this.firstPlayer.score()} - ${this.secondPlayer.score()}`;
    }

    private leadPlayerName(): string {
        if (this.firstPlayer.totalPoints() > this.secondPlayer.totalPoints()) { return this.firstPlayer.name; }
        return this.secondPlayer.name;
    }
















}
