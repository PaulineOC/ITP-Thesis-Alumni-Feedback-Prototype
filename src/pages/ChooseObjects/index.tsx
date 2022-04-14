import React, {FunctionComponent, ReactElement, useState} from 'react';
import {
    Container,
    Stack,
    Typography,
    Button
} from '@mui/material';

import ImageGrid from '../../components/ImageGrid';
import MainStore from '../../stores/main';
import {useNavigate} from 'react-router';

type ChooseObjects = {
    
};
const ChooseObjects: FunctionComponent<ChooseObjects> = ({}: ChooseObjects): ReactElement => {

    const store = MainStore;
    const navigate = useNavigate();

    const goToRoomBuilder = () => {
        navigate('/room-builder');
    };

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

                <Button
                    component="span"
                    variant="contained"
                    color="error"
                    onClick={goToRoomBuilder}
                >
                    CHECK OUT ROOM BUILDER
                </Button>

            </Stack>
        </Container>
    );
};

export default ChooseObjects;

