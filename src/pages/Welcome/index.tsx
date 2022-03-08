import React, {FunctionComponent, ReactElement, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Stack,
    Typography,
    Button, 
    IconButton,
} from '@mui/material';

const Welcome: FunctionComponent = (props): ReactElement => {

    const navigate = useNavigate();

    const onButtonClick = () => {
        console.log('Welcome --> Choose Objects');

        navigate('/choose-objects');
    };
  
    return (

        <Container sx={{paddingTop: "2%", paddingBottom: "2%"}}>
            <Stack
                spacing={4}
                 direction={"column"}
                sx={{alignItems: 'center'}}
            >
                <Typography variant={"h4"} component={"h4"}>
                    Welcome to the MET's Collection & Room Building Experience
                </Typography>

                <Typography variant={"body1"} component={"p"}>
                    [INSTRUCTIONS]
                </Typography>

                <Button
                    component="span"
                    variant="contained"
                    color="error"
                    onClick={onButtonClick}
             >
                    BEGIN EXPERIENCE
                </Button>
            </Stack>
         </Container>

    );
};

export default Welcome;

