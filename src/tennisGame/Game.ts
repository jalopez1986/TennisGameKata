import { Player } from "./Player";

export class Game {
    constructor(private firstPlayer: Player, private secondPlayer: Player) {

    }

    score() {
        if (this.haveBothPlayersThreeOrMorePoints() ) {
            if (this.isAdvantageScore()) {
                return `advantage ${this.leadPlayerName()}`;
            }
        }

        return `${this.firstPlayer.score()} - ${this.secondPlayer.score()}`;
    }

    private isAdvantageScore() {
        return Math.abs(this.firstPlayer.totalPoints() - this.secondPlayer.totalPoints()) === 1;
    }

    private haveBothPlayersThreeOrMorePoints() {
        return this.firstPlayer.totalPoints() >= 3 && this.secondPlayer.totalPoints() >= 3;
    }


    private leadPlayerName(): string {
        if (this.firstPlayer.totalPoints() > this.secondPlayer.totalPoints()) { return this.firstPlayer.name; }
        return this.secondPlayer.name;
    }
}
