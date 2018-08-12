export default class Card {
    constructor(suite, rank) {
        this.suite = suite
        this.rank = parseInt(rank, 0)
    }

    getRank() {
        return this.rank
    }

    prettyRank() {
        if (this.rank === 14) {
            return 'A'
        }
        if (this.rank === 13) {
            return 'K'
        }
        if (this.rank === 12) {
            return 'Q'
        }
        if (this.rank === 11) {
            return 'J'
        }
        return this.rank
    }

    toString() {
        return `${this.prettyRank()}${this.suite}`
    }

    // Compare this Card with another Card
    // Returns 0 if they are uncomparable (different suites)
    // or same value (which should never happen)
    // Returns -1 if this Card is Lower than the other Card
    // Retusn 1 if this Card is Higher than the other Card
    compare(card) {
        if (this.suite !== card.suite || this.rank === card.rank) {
            return 0
        }

        return this.rank > card.rank ? 1 : -1
    }
}
