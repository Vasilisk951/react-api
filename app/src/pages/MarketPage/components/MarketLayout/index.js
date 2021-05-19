import React from 'react';
import {
    Button,
    Typography,
    Box,
    Card,
    CardMedia,
    CardContent,
    CardActionArea,
    CardActions,
    CircularProgress

} from '@material-ui/core/';

import HeaderContainer from '../../../../commonComponent/header/containers/HeaderContainer';

import './index.css';

const MarketLayout = ({
    pokemons,
    capitalizeFirstLetter,
    hendlePokemonBuy,
    handleGoToDetails,
    pages,
    handleChangePage
}) => {

    return (
        <Box>
            <HeaderContainer />

            <Box className='card'>
                {pokemons.isLoading ? <CircularProgress /> : pokemons.data.map(pokemon => (
                    <Card className='card__item' key={pokemon.id}>
                        <CardActionArea>
                            <CardMedia
                                onClick={() => handleGoToDetails(pokemon.id)}
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
                                onClick={() => hendlePokemonBuy(pokemon.id)}
                            >
                                ${pokemon.price}
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
            <Box className='pagination'>
                {pages.map(index => (
                    <Box
                        key={index}
                        className='pagination__btn'
                        onClick={() => handleChangePage(index)}
                    >
                        {index}
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default MarketLayout;