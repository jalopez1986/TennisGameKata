import {Points} from "./Points";

export class Player {
    private readonly _name: string;
    private points: Points;
    constructor(name: string) {
        this._name = name;
        this.points = new Points(0);
    }

    get name(): string {
        return this._name;
    }

    score(): string {
        return this.points.score();
    }

    winPoint() {
        this.points = this.points.winPoint();
    }

    totalPoints() {
        return this.points.points;
    }
}
