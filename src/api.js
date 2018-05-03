import m from 'mithril'
import store from './store'

export const newShuffledDeck = () => {
  return m.request({
    url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
  }).then(deck => { store.deck = deck })
}

export const getFullDeck = (id) => {
  return m.request({
    url: `https://deckofcardsapi.com/api/deck/${id}/draw/?count=52`
  })
}

export const addToPile = (deck, pile, cards) => {
  return m.request({
    url: `https://deckofcardsapi.com/api/deck/${deck}/pile/${pile}/add/?cards=${cards.join(',')}`
  })
}

export const getCardsInPile = (deck, pile) => {
  return m.request({
    url: `https://deckofcardsapi.com/api/deck/${deck}/pile/${pile}/list/`
  })
}
