import React, {FunctionComponent, ReactElement, useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

import './moreInfo.css'

const MoreInfo: FunctionComponent = (props): ReactElement | null => {

    const navigate = useNavigate();
    let { objectId } = useParams();

    const store = MainStore;

    const item: Artwork | null | undefined = store.allCollection?.slice().find((ele: Artwork)=>{
        return ele.metId === objectId;
    });

    const [imageDimensions, setImageDimensions] = React.useState({height: -1, width: -1 });

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
        console.log('Calculating Image information');
        const fetchImageInfo = async () => {
            const result = await determineImageInfo(item?.imgSrc ?? '');
            setImageDimensions(result ?? {height: -1, width: -1 });
        };
        if(imageDimensions.height === -1){
            fetchImageInfo().catch(console.error);
        }
    }, []);

    const determineClassBasedOnImageAspectRatio = () => {
        const { width, height } = imageDimensions;
        if(imageDimensions.height===-1){return;}
        if(width >= height){
            return 'landscape-img';
        }
        else{
            return 'portrait-img';
        }
    };

    const [currState, setState] = React.useState({
        open: false,
    });

    const saveToCollection = () => {
        if(item){
            store.addArtWorkToCollection(item);
            setState({
                open: true,
            });
        }
    };

    const handleClose = () => {
        setState({
            open: false,
        });
    };

    const goToRoomBuilder = () => {
        navigate('/room-builder');
    };

    const goToChooseObjects = () => {
        navigate('/choose-objects');
    };

    const renderDialog = () => {
        return (
            <Dialog
                open={currState.open}
                onClose={handleClose}
                maxWidth={'lg'}
            >

                <DialogTitle >
                    {currState.open ? (
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                float: 'right',
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    ) : null}
                </DialogTitle>

                <DialogContent>
                    Do you want to try out the room builder and envision your collection?
                </DialogContent>

                <DialogActions sx={{ display: 'flex', justifyContent: 'space-between',
                    paddingTop: '2%', paddingBottom: '2%'}}
                >

                    <Button onClick={handleClose}
                            variant="contained"
                            className={"cancelButton"}
                    >
                        No, not right now
                    </Button>
                    <Button onClick={goToRoomBuilder}
                            variant="contained"
                            color="error"
                    >
                        Yes, take me there
                    </Button>

                </DialogActions>
            </Dialog>

        );
    };

    return isNil(item) ? null : (
        <Container sx={{paddingTop: "2%", paddingBottom: "2%"}}>

            {renderDialog()}

            <Stack
                id={"container"}
                spacing={2}
                direction={"column"}
                sx={{width: '100%', height: '100%', display:'flex', alignItems: 'center'}}
            >
                <Box sx={{display: 'flex', paddingTop: '2%', paddingBottom: '2%', width: '100%', justifyContent: 'space-between'}}>

                    <Button
                        component="span"
                        variant="contained"
                        color="error"
                        onClick={goToChooseObjects}
                        className={"cancelButton"}
                    >
                        BACK TO PERUSING OBJECTS
                    </Button>

                    <Button
                        component="span"
                        variant="contained"
                        color="error"
                        onClick={saveToCollection}
                    >
                        SAVE TO MY COLLECTION
                    </Button>




                </Box>


                <Box className={"mainInfo"}>
                    <Box className={"infoContainer"}>
                        <Typography variant={"h5"} component="h5">
                            {item.title}
                        </Typography>

                        <Typography variant={"body1"} component="p" className="description">
                            {item.description}
                        </Typography>
                    </Box>

                    <Box className={"infoContainer"} >
                        <img src={item.imgSrc} id={"mainImg"} className={determineClassBasedOnImageAspectRatio()}/>
                    </Box>
                </Box>

                <Typography variant={"subtitle1"} component="p" id={"moreDetails"} >
                    [More Details]
                </Typography>

            </Stack>
        </Container>
    );
};

export default MoreInfo;

