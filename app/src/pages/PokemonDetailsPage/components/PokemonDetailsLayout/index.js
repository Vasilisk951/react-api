import React from 'react';
import {
    Button,
    Box,
    CircularProgress

} from '@material-ui/core/';

import HeaderContainer from '../../../../commonComponent/header/containers/HeaderContainer';
import './index.css'



const PokemonDetailsLayout = ({
    pokemonDetails,
    buyPokemon
}) => {
    console.log(pokemonDetails)
    return (
        <Box>
            <HeaderContainer />

            {pokemonDetails.isLoading ? < CircularProgress /> :
                <Box className='hero'>
                    <Box className='hero__header'>
                        {pokemonDetails.details.name}
                    </Box>
                    <Box className='hero__img'>
                        <img className='hero__img-img' src={pokemonDetails.details.image} alt={pokemonDetails.details.name}></img>
                    </Box>
                    <Box className='hero__container'>
                        <Box className='hero__heading'>Abilities</Box>
                        <Box className='hero__item hero__item__abilities'>
                            <Box className='hero__item  hero__item__head'>{pokemonDetails.details.abilities[0].title}</Box>
                            <Box className='hero__item  hero__item__body'>{pokemonDetails.details.abilities[0].description}</Box>
                        </Box>
                        <Box className='hero__item hero__item__abilities'>
                            <Box className='hero__item  hero__item__head'>{pokemonDetails.details.abilities[1].title}</Box>
                            <Box className='hero__item  hero__item__body'>{pokemonDetails.details.abilities[1].description}</Box>
                        </Box>
                        <Box className='hero__heading'>Stats</Box>
                        <Box className='hero__item hero__item-hp'>
                            <Box>{pokemonDetails.details.stats[0].title}</Box>
                            <Box>{pokemonDetails.details.stats[0].value}</Box>
                        </Box>
                        <Box className='hero__item hero__item-attack'>
                            <Box>{pokemonDetails.details.stats[1].title}</Box>
                            <Box>{pokemonDetails.details.stats[1].value}</Box>
                        </Box>
                        <Box className='hero__item hero__item-defense'>
                            <Box>{pokemonDetails.details.stats[2].title}</Box>
                            <Box>{pokemonDetails.details.stats[2].value}</Box>
                        </Box>
                        <Box className='hero__item hero__item-special-attack'>
                            <Box>{pokemonDetails.details.stats[3].title}</Box>
                            <Box>{pokemonDetails.details.stats[3].value}</Box>
                        </Box>
                        <Box className='hero__item hero__item-special-defense'>
                            <Box>{pokemonDetails.details.stats[4].title}</Box>
                            <Box>{pokemonDetails.details.stats[4].value}</Box>
                        </Box>
                        <Box className='hero__item hero__item-speed'>
                            <Box>{pokemonDetails.details.stats[5].title}</Box>
                            <Box>{pokemonDetails.details.stats[5].value}</Box>
                        </Box>
                    </Box>
                    <Button
                        className='hero-buy'
                        variant="contained"
                        color="primary"
                        onClick={() => buyPokemon(pokemonDetails.details.id)}
                    > BUY ${pokemonDetails.details.price}</Button>
                </Box>
            }</Box>
    )
};

export default PokemonDetailsLayout;