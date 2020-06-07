export class Player {
    private points: number;
    constructor(private name: string) {
        this.points = 0;
    }

    score(): string {
        if (this.points === 0) { return 'love'; }
        if (this.points === 1) { return 'fifteen'; }
        if (this.points === 2) { return 'thirty'; }
        if (this.points === 3) { return 'forty'; }

    }

    winPoint() {
        this.points = this.points + 1;
    }
}
