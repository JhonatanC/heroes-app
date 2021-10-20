import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher] );

    // const heroes = getHeroesByPublisher( publisher );
    return (
        <div className="row card-columns animate__animated animate__bounce animate__fadeIn">
            {
                heroes.map( hero => {
                    // return <HeroCard key = { hero.id }> { hero.superhero } </HeroCard>
                    return <HeroCard key = { hero.id } heroe = { hero } />
                })
            }
        </div>
    )
}