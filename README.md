<p align="center">
  <img height="160" src="logo.png" />
</p>

# Idiot
Plays Idiot (Solitaire) for you and gives you a winning shuffle, that way you can sort your deck beforehand and always win (because winning is everything).

## Getting started

```bash
$ git clone git@github.com:n1mda/idiot.git
$ cd idiot
$ yarn install
$ yarn start
```

Since the program shuffles the deck and plays until it wins the number of iterations will be different for each time.

## Example output

```bash
$ yarn start
yarn run v1.7.0
$ npm run build && node dist/src/index.js

> idiot@1.0.0 build /Users/john/code/nodejs/idiot
> rimraf dist/ && babel ./ --out-dir dist/ --ignore ./node_modules

src/card.js -> dist/src/card.js
src/deck.js -> dist/src/deck.js
src/game.js -> dist/src/game.js
src/index.js -> dist/src/index.js
src/rank.js -> dist/src/rank.js
src/stack.js -> dist/src/stack.js
src/suite.js -> dist/src/suite.js
Winner with this shuffle:
--- Bottom of deck ---
K❤️
J♣️
8♣️
3♠️
2♠️
8♦️
J❤️
A♦️
Q♠️
7♠️
7♦️
Q♣️
2❤️
2♦️
7♣️
A♣️
A♠️
2♣️
10❤️
4♠️
4♦️
10♠️
9♦️
6♦️
J♠️
6♠️
7❤️
3❤️
K♣️
9♣️
6♣️
6❤️
5❤️
Q♦️
8♠️
9❤️
K♦️
9♠️
5♦️
3♣️
4❤️
10♣️
3♦️
10♦️
J♦️
5♠️
5♣️
K♠️
Q❤️
8❤️
4♣️
A❤️
--- Top of deck ---
Stack 1 with 1 cards in it: A❤️
Stack 2 with 1 cards in it: A♣️
Stack 3 with 1 cards in it: A♠️
Stack 4 with 1 cards in it: A♦️

WINNER AFTER 180 iterations!
✨  Done in 1.97s.
```
