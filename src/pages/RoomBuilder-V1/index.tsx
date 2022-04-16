import React, {FunctionComponent, ReactElement, useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
    observable,
    action,
    computed,
    toJS,
} from 'mobx';

import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';

import {
    Container,
    Stack,
    Typography,
    Button,
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    ImageList,
    ImageListItem,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


import MainStore from '../../stores/main';
import { Artwork } from '../../utils/apiModels';

import './RoomInfo.css'


const MoreInfo: FunctionComponent = (props): ReactElement | null => {

    const navigate = useNavigate();
    let { objectId } = useParams();

    const store = MainStore;

    const item: Artwork | null | undefined = store.allCollection?.slice().find((ele: Artwork)=>{
        return ele.metId === objectId;
    });

    const [currState, setState] = React.useState({
        chosenWall: '',
        open: false,
        artOptions: [] as any,
    });

    const determineImageInfo = async (src: string) => {
        if(isEmpty(src)){ return;}
        const img = new Image();
        img.src = src;
        await img.decode();
        // img is ready to use
        console.log( `width: ${ img.width }, height: ${ img.height }` );
        return {width: img.width, height: img.height};
    };

    // Will only run once since the deps is an empty array
    useEffect(  () => {
        console.log('Setting Art');
        if(store.userCollection){
            const newArt = store.userCollection.slice() ?? [];
            setState({
                chosenWall: '',
                open: false,
                artOptions: newArt as any[],
            });
        }

    }, []);

    const goToChooseObjects = () => {
        navigate('/choose-objects')
    };

    const openChooseArtModal = (wallType: string, e: any) => {
        setState({
            open: true,
            chosenWall: wallType,
            artOptions: currState.artOptions,
        });
    };

    const closeChooseArtModal = () => {
        setState({
            open: false,
            chosenWall: '',
            artOptions: currState.artOptions,
        });
    };

    const selectArt = (toShow: Artwork, e: any ) => {
        switch(currState.chosenWall){
            case 'left':
                store.setLeftWallArt(toShow);
                closeChooseArtModal();
                break;
            case 'back':
                store.setBackWallArt(toShow);
                closeChooseArtModal();
                break;
            case 'right':
                store.setRightWallArt(toShow);
                closeChooseArtModal();
                break;
            default:
                break;
        }
    };

    const renderDialog = () => {
        return (
            <Dialog
                open={currState.open}
                onClose={closeChooseArtModal}
                maxWidth={'lg'}
            >
                <DialogTitle >
                    {currState.open ? (
                        <Stack sx={{display: 'flex', justifyContent: 'space-between',}}>
                            <Typography variant={"h5"} component="h5">
                                Select art for the {currState.chosenWall} wall
                            </Typography>
                        </Stack>
                    ) : null}
                </DialogTitle>

                <DialogContent>

                    <ImageList cols={3} rowHeight={200} gap={8}>
                        {currState.artOptions.map((art: Artwork)=>{
                            return (
                                <ImageListItem key={art.metId}>
                                    <img
                                        style={{cursor: 'pointer'}}
                                        src={art.imgSrc}
                                        alt={art.title}
                                        loading="lazy"
                                        onClick={selectArt.bind(this, art)}
                                    />
                                </ImageListItem>
                            );
                        })}
                    </ImageList>

                </DialogContent>


            </Dialog>
        );
    };


    return (

        <Container sx={{paddingTop: "2%", paddingBottom: "2%"}}>

            {renderDialog()}

            <Stack
                id={"container"}
                spacing={2}
                direction={"column"}
                sx={{width: '100%', height: '100%', display:'flex', alignItems: 'center'}}
            >
                <Button
                    component="span"
                    variant="contained"
                    onClick={goToChooseObjects}
                    sx={{backgroundColor: '#bbb'}}
                >
                    BACK TO PERUSING MUSEUM OBJECTS
                </Button>

                <Box id={"artSpace"}>

                    <Box id={"leftWall"} className={"artContainer"}>

                        <Typography variant={"h5"} component="h5">
                            Left Wall
                        </Typography>

                        {store.leftWallArt && (
                            <img src={toJS(store.leftWallArt).imgSrc} className={'wallImg'}/>
                        )}

                    </Box>

                    <Box id={"backWall"} className={"artContainer"}>

                        <Typography variant={"h5"} component="h5">
                            Back Wall
                        </Typography>

                        {store.backWallArt && (
                            <img src={toJS(store.backWallArt).imgSrc} className={'wallImg'}/>
                        )}

                    </Box>

                    <Box id={"rightWall"} className={"artContainer"}>
                        <Typography variant={"h5"} component="h5">
                            Right Wall
                        </Typography>

                        {store.rightWallArt && (
                            <img src={toJS(store.rightWallArt).imgSrc} className={'wallImg'}/>
                        )}

                    </Box>



                </Box>


                <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>

                    <Button
                        component="span"
                        variant="contained"
                        color="error"
                        onClick={openChooseArtModal.bind(this, 'left')}
                    >
                        Choose art for Left WALL
                    </Button>

                    <Button
                        component="span"
                        variant="contained"
                        color="error"
                        onClick={openChooseArtModal.bind(this, 'back')}
                    >
                        Choose art for BACK WALL
                    </Button>


                    <Button
                        component="span"
                        variant="contained"
                        color="error"
                        onClick={openChooseArtModal.bind(this, 'right')}
                    >
                        Choose art for Right WALL
                    </Button>



                </Box>


            </Stack>
        </Container>

    );
};

export default MoreInfo;

