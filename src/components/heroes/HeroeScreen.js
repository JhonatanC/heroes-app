import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesById } from '../../selectors/getHeroeById';

export const HeroeScreen = ({ history }) => {

    // const params = useParams();
    const { heroeId } = useParams();
    // console.log( heroeId );

    const hero = useMemo( () => getHeroesById(heroeId), [heroeId] );

    // const hero = getHeroesById( heroeId );
    // console.log( hero );

    const { 
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;
    
    if( !hero ) { return <Redirect to ="/" /> }

    const handleReturn = () => {
        if( history.length <= 2 ) {
            history.push('/');
        } else {
            history.goBack();
        }
    }

    return (
        <div className="row mt-5">
            <div className="col-md-4">
                <img className="img-thumbnail animate__animated animate__bounce animate__fadeInLeft" src = { `../assets/heroes/${ heroeId }.jpg`} alt = { superhero } />
            </div>
            <div className="col-md-8">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                    <li className="list-group-item"> <b> First appearance: </b> { first_appearance } </li>
                </ul>

                <h5> Charaters </h5>
                <p> { characters } </p>
                <button
                    className="btn btn-outline-info"
                    onClick = { handleReturn }
                >
                    Return
                </button>
            </div>
        </div>
    )
}
