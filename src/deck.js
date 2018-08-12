import Suite from './suite'
import Rank from './rank'
import Card from './card'

export default class Deck {
    constructor() {
        this.cards = this.generateCards()
    }

    generateCards() {
        return []
            .concat(this.generateSuite(Suite.SPADE))
            .concat(this.generateSuite(Suite.HEART))
            .concat(this.generateSuite(Suite.DIAMOND))
            .concat(this.generateSuite(Suite.CLUB))
    }

    generateSuite = (suite) => {
        const suiteCards = []
        Object.values(Rank).forEach((value) => {
            suiteCards.push(new Card(suite, value))
        })
        return suiteCards
    }

    remainingNumberOfCards() {
        return this.cards.length
    }

    card() {
        if (this.cards.length > 0) {
            return this.cards.pop()
        }
        return null
    }

    shuffle() {
        let currentIndex = this.cards.length
        let temporaryValue
        let randomIndex

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1

            // And swap it with the current element.
            temporaryValue = this.cards[currentIndex]
            this.cards[currentIndex] = this.cards[randomIndex]
            this.cards[randomIndex] = temporaryValue
        }
    }
    
    toString() {
        return this.cards.join('\n')
    }
}
