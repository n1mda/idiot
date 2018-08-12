import Rank from './rank'

export default class Stack {
    constructor(name) {
        this.name = name
        this.cards = []
    }

    addCard(card) {
        this.cards.push(card)
    }

    numberOfCards() {
        return this.cards.length
    }

    isEmpty() {
        return this.cards.length === 0
    }

    visibleCard() {
        if (this.cards.length > 0) {
            return this.cards[this.cards.length - 1]
        }
        return null
    }

    popCardIfPossible(...theOtherStacks) {
        if (this.numberOfCards() > 0) {
            const thisCard = this.visibleCard()
            for (let i = 0; i < theOtherStacks.length; i += 1) {
                const stack = theOtherStacks[i]
                if (stack.visibleCard()
                    && thisCard.compare(stack.visibleCard()) === -1) {
                    return this.pop()
                }
            }
        }
        return null
    }

    pop() {
        return this.cards.pop()
    }

    isWinningStack() {
        return this.numberOfCards() === 1
            && this.visibleCard().getRank() === Rank.ACE
    }

    toString() {
        return `Stack ${this.name} with ${this.cards.length} cards in it`
    }
}
