import React, { useState } from 'react'
import {
    Button,
    TextField,
    Typography,
    Box,
    Card,
    CardMedia,
    CardContent,
    CardActionArea,
    CardActions,
    Menu,
    MenuItem,
    CircularProgress

} from '@material-ui/core/';

import HeaderContainer from '../../../../commonComponent/header/containers/HeaderContainer';

import './index.css'

const MarketLayout = ({
    pokemons,
    capitalizeFirstLetter,
    hendlePokemonBuy,
    basketPokemon
}) => {
    return (
        <Box>
            <HeaderContainer basketPokemon={basketPokemon} />

            <Box className='card'>
                {pokemons.isLoading ? <CircularProgress /> : pokemons.data.map(pokemon => (
                    <Card className='card__item' key={pokemon.id}>
                        <CardActionArea>
                            <CardMedia
                                className='card__item__img'
                                image={pokemon.image}
                                title={pokemon.name}
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography>
                                {capitalizeFirstLetter(pokemon.name)}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                variant="contained"
                                color="primary"
                                id={pokemon.id}
                                onClick={event => hendlePokemonBuy(event)}
                            >
                                ${pokemon.price}
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}

export default MarketLayout;