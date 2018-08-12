/* eslint-disable no-console */
import Game from './game'

let winner = false
let iteration = 0
for (; !winner; iteration += 1) {
    const game = new Game()
    winner = game.play()

    if (winner) {
        console.log('Winner with this shuffle:')
        console.log('--- Bottom of deck ---')
        console.log(game.printDeck())
        console.log('--- Top of deck ---')
        console.log(game.printBoard())
    }
}

console.log(`WINNER AFTER ${iteration} iterations!`)
