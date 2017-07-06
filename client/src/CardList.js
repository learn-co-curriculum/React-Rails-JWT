import React, { Component } from 'react'
import SingleCard from './Card'
import CardFactory from './CardFactory'
import { Dimmer, Loader, Card} from 'semantic-ui-react'

class CardsList extends Component {
  componentWillMount () {
  }
  componentWillUpdate () {
  }
  loading () {
    if (this.props.cards) {
      const cardsList = this.props.cards.map(card => <SingleCard {...card} key={card.multiverseid} />)
      return (<Card.Group itemsPerRow={6}> {cardsList} </Card.Group>)
    } else {
      return (<Dimmer active><Loader /></Dimmer>)
    }
  }
  render () {
    return (this.loading())
  }
}

export default CardFactory(CardsList)
