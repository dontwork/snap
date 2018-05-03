import m from 'mithril'

export default {
  view ({attrs: {controls, p}}) {
    return m('.player', [
      m('span', 'Player'),
      m('.controls', [
        m('p', `Press ${controls.snap.toUpperCase()} for snap`),
        m('p', `Press ${controls.addToPile.toUpperCase()} for add pile to card`),
        m('h3', p.cardsLeft)
      ])
    ])
  }
}
