import React, {FunctionComponent, ReactElement, useState} from 'react';
import {
    Container,
    Stack,
    Typography,
    Button
} from '@mui/material';

import { Artwork } from '../../utils/apiModels';
import ImageGrid from '../../components/ImageGrid';
import MainStore from '../../stores/main';

type ChooseObjects = {
    
};
const ChooseObjects: FunctionComponent<ChooseObjects> = ({}: ChooseObjects): ReactElement => {

    const store = MainStore;

    return (

        <Container sx={{paddingTop: "2%", paddingBottom: "2%"}}>
            <Stack
                spacing={4}
                direction={"column"}
                sx={{alignItems: 'center'}}
            >
                <Typography variant="h4" component="h4">
                    Peruse The Met's Sample Collection of Objects
                </Typography>

                <ImageGrid allArtworks={store.allCollection?.slice() ?? []}/>

            </Stack>
        </Container>
    );
};

export default ChooseObjects;

