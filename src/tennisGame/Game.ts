import { Player } from "./Player";

export class Game {
    constructor(private firstPlayer: Player, private secondPlayer: Player) {

    }

    score() {
        if (this.hasOnePlayerWonAtLeastFourPoints() && this.hasOnePlayerAtLeasTwoPointsMoreThanTheOtherPlayer()) {
            return `${this.leadPlayerName()} won`;
        }

        if (this.haveBothPlayersThreeOrMorePoints() ) {
            if (this.isAdvantageScore()) { return `advantage ${this.leadPlayerName()}`; }

            if (this.isDeuceScore()) { return 'deuce'; }
        }

        return `${this.firstPlayer.score()} - ${this.secondPlayer.score()}`;
    }

    private hasOnePlayerWonAtLeastFourPoints() {
        return this.firstPlayer.totalPoints() >= 4 || this.secondPlayer.totalPoints() >= 4;
    }

    private hasOnePlayerAtLeasTwoPointsMoreThanTheOtherPlayer() {
        return Math.abs(this.firstPlayer.totalPoints() - this.secondPlayer.totalPoints()) >= 2;
    }

    private haveBothPlayersThreeOrMorePoints() {
        return this.firstPlayer.totalPoints() >= 3 && this.secondPlayer.totalPoints() >= 3;
    }


    private isAdvantageScore() {
        return Math.abs(this.firstPlayer.totalPoints() - this.secondPlayer.totalPoints()) === 1;
    }

    private isDeuceScore() {
        return this.firstPlayer.totalPoints() === this.secondPlayer.totalPoints();
    }




    private leadPlayerName(): string {
        if (this.firstPlayer.totalPoints() > this.secondPlayer.totalPoints()) { return this.firstPlayer.name; }
        return this.secondPlayer.name;
    }
}
