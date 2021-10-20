import React from 'react';
import { Link } from 'react-router-dom';


export const HeroCard = ({ heroe }) => {

    const { id, superhero, alter_ego, first_appearance, characters } = heroe;

    return (
        // <div className="card md-3" style = { {maxWidth: 450} }>
        <div className="card col-md-4">
            <div className="row">
                <div className="col-md-4">
                    <img src={ `./assets/heroes/${ id }.jpg` } className="card-img" alt={ superhero } />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"> { superhero } </h5>
                        <p className="card-text"> { alter_ego } </p>
                        {
                            ( alter_ego !== characters ) ? <p> { characters } </p> : ''
                            // ( alter_ego !== characters ) && <p className="card-text"> { characters } </p>
                        }

                        <p className="card-text">
                            <small className="text-muted"> { first_appearance } </small>
                        </p>

                        <Link to = { `./hero/${ id }` } > Más... </Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
