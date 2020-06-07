import {Points} from "./Points";

export class Player {
    private points: Points;
    constructor(private name: string) {
        this.points = new Points(0);
    }

    score(): string {
        return this.points.score();
    }

    winPoint() {
        this.points = this.points.winPoint();
    }
}
