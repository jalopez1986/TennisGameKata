export class Points {
    constructor(private points: number) {

    }

    winPoint(): Points {
        return new Points(this.points + 1);
    }

    score(): string {
        if (this.points === 0) { return 'love'; }
        if (this.points === 1) { return 'fifteen'; }
        if (this.points === 2) { return 'thirty'; }
        if (this.points === 3) { return 'forty'; }
    }
}
