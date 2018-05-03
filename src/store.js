import { getFullDeck, addToPile, getCardsInPile } from './api'

const dealCards = () => {
  store.gameStarted = true
  getFullDeck(store.deck.deck_id).then(d => {
    const piles = []
    d.cards.map((c, i) => {
      const player = i % store.players.length

      if (piles.length < store.players.length) {
        piles[player] = []
      }
      piles[player].push(c.code)
    })

    const requests = Promise.all(piles.map((p, i) => {
      return addToPile(store.deck.deck_id, i, p)
    }))

    requests.then((data) => {
      return getCardsInPile(store.deck.deck_id, 0)
    }).then((p) => {
      Object.keys(p.piles).map((k) => {
        store.players[k].cardsLeft = p.piles[k].remaining
      })

      console.log(store.players)
    })
  })
}

const addPlayer = () => {
  store.players.push({})
}

// const nextTurn = () => {
//   if (store.turnOfPlayer < store.players.length) {
//     store.turnOfPlayer++
//   } else {
//     store.turnOfPlayer = 0
//   }
// }

const store = {
  allowGameStart: false,
  players: [{}, {}],
  deck: undefined,
  dealCards,
  addPlayer,
  turnOfPlayer: 0,
  gameStarted: false
}

export default store
