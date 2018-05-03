import m from 'mithril'
import store from './store'
import {newShuffledDeck} from './api'
import players from './players'
import './style.css'

const snap = {
  oninit () {
    newShuffledDeck().then(() => {
      store.allowGameStart = true
      m.redraw()
    })
  },
  view () {
    return m('.snap', [
      m('.pile', [

        m('button', {
          disabled: !store.allowGameStart,
          onclick: store.dealCards
        }, 'Start the game')
      ]),
      m(players)
    ])
  }
}

m.mount(document.body, snap)
