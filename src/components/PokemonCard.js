import React, { Component } from 'react'

import './PokemonCard.css'

class PokemonCard extends Component {

    render() {

        const { pokemonName, pokemonCaract, pokemonType, pokemonId, pokemonCatchRate, picture } = this.props

        return (
            <div className="card horizontal" style={ { margin: 'auto' } }>
                <div className="card-image pokemon-img-container">
                    <img alt="city" className="pokemon-img" src={ picture } />
                </div>
                <div className="card-stacked">
                    <div className="card-content">

                        <div className="pokemon-data">
                            <p>
                                <i className="material-icons">info</i>
                                <span>{ 'Type: ' + pokemonType }</span>
                            </p>
                            <p>
                                <i className="material-icons">flag</i>
                                <span>{'Catch Rate: ' + Math.round(pokemonCatchRate/255*100) + ' %'}</span>
                            </p>

                            <p>
                                <i className="material-icons">star</i>
                                <span>{'Description: ' + pokemonCaract}</span>
                            </p>
                        </div>

                        <div className="pokemon-icon"> Id : { pokemonId } </div>
                    </div>
                    <div className="card-action center-align">
                        <a className="pokemon-city" href="#" onClick={ e => e.preventDefault() }>{ pokemonName }</a>
                    </div>
                </div>
            </div>
        )
    }

}

export default PokemonCard