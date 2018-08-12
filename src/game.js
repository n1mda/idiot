import Deck from './deck'
import Stack from './stack'

export default class Game {
    constructor() {
        this.deck = new Deck()
        this.sortedCards = null
        this.stacks = []
            .concat(new Stack('1'))
            .concat(new Stack('2'))
            .concat(new Stack('3'))
            .concat(new Stack('4'))
    }

    play() {
        this.deck.shuffle()
        this.sortedCards = this.deck.toString()

        while (this.deck.remainingNumberOfCards() > 0) {
            this.playHand()
        }

        return this.isWinner()
    }

    playHand() {
        this.dealHand()
        this.playBoardUntilNoMoreMoves()
    }

    dealHand() {
        this.stacks.forEach((stack) => {
            const card = this.deck.card()
            stack.addCard(card)
        })
    }

    playBoardUntilNoMoreMoves() {
        let continuePlaying = true

        while (continuePlaying) {
            continuePlaying = false
            this.stacks.forEach((stack) => {
                if (this.possiblyRemoveCardsFromStack(stack)) {
                    continuePlaying = true
                }
            })
        }
    }

    possiblyRemoveCardsFromStack(stack) {
        const theOtherStacks = this.stacks.filter(s => s !== stack)
        let removedCard = false
        while (stack.popCardIfPossible(...theOtherStacks)) {
            removedCard = true
            // If stack is empty move another card there
            if (stack.isEmpty()) {
                this.moveCard(theOtherStacks, stack)
            }
        }

        return removedCard
    }

    moveCard = (fromStacks, toStack) => {
        for (let i = 0; i < fromStacks.length; i += 1) {
            const stack = fromStacks[i]
            if (stack.numberOfCards() >= 2) {
                const moveCard = stack.pop()
                toStack.addCard(moveCard)
                break
            }
        }
    }

    isWinner() {
        return this.stacks.every(stack => stack.isWinningStack())
    }

    printDeck() {
        return this.sortedCards
    }

    printBoard() {
        let result = ''
        result += this.stacks.forEach(stack => result += `${stack}: ${stack.visibleCard()}\n`)
        return result
    }
}
