import React, {Component} from 'react'
import Styles from './storeCards.css'
import CSSModules from 'react-css-modules'

@CSSModules(Styles)
export default class StoreCards extends Component {
    render(){
        const {
            cards
        } = this.props


        return (
            <div styleName={cards.length>20 ? 'storeCardStack' : (cards.length>1 ? 'storeCardStack_less' : 'storeCardStack_single')}>
                {cards.length}
            </div>
        )
    }
}