import m from 'mithril'
import store from './store'
import player from './player'

const playerControls = [
  {
    snap: 'a',
    addToPile: 's'
  },
  {
    snap: 'd',
    addToPile: 'f'
  },
  {
    snap: 'g',
    addToPile: 'h'
  },
  {
    snap: 'j',
    addToPile: 'k'
  },
  {
    snap: 'o',
    addToPile: 'p'
  }
]

export default {
  view ({state: { players }}) {
    return m('.players-area', [
      m('.players', [
        store.players.map((p, i) => {
          return m(player, {
            p,
            controls: playerControls[i]
          })
        })
      ]),
      m('.game-controls', [
        m('button.add', {
          disabled: store.gameStarted,
          onclick () {
            store.addPlayer()
          }
        }, 'Add Player')
      ])
    ])
  }
}
