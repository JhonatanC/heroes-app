import React, { useMemo } from 'react';

import queryString from 'query-string';

import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();

    const { q = '' } = queryString.parse( location.search );

    const [valuesForm, setValuesForm] = useForm({
        search: q
    });
    
    const { search } = valuesForm;

    // const heroesFiltered = getHeroesByName( search );

    const heroesFiltered = useMemo( () => getHeroesByName( q ), [q]);

    // console.log( valuesForm );

    const handleSearch = (e) => {
        e.preventDefault();
        // const valueInput = e.target;
        // console.log( search );
        history.push(`?q=${ search }`);
    }

    return (
        <div>
            <h1> Search Screen </h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit = { handleSearch }>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="search"
                            value = { search }
                            onChange = { setValuesForm }
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary btn-block m-1"
                        >
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4> Results </h4>
                    <hr />
                    
                    {
                        (q ==='') ? <div className="alert alert-info"> Search a hero </div> : ''
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0 ) ? <div className="alert alert-danger"> There is not a hero with { q } </div> : ''
                    }


                    {
                        heroesFiltered.map( hero => {
                            // <HeroCard key = { hero.id } { ...hero } />
                            return <HeroCard key = { hero.id } heroe = {hero} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
