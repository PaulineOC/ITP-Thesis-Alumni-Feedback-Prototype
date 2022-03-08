import React, {FunctionComponent, ReactElement, useState} from 'react';
import { useNavigate } from 'react-router-dom';



import {
    Box,
    Button,
    IconButton,
    ImageList,
    ImageListItem,
} from '@mui/material';

import {Artwork} from '../../utils/apiModels';

type ImageGridProps = {
    allArtworks: Artwork[],
};
const ImageGrid: FunctionComponent<ImageGridProps> = ({allArtworks}: ImageGridProps): ReactElement => {

    const navigate = useNavigate();

    const handleObjClick = (objectId: string, e: any ) => {
        console.log('Choose Objects --> Object Detail');
        navigate(`/more-info/${objectId}`);
    };

    return (
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
           
            <ImageList cols={3} rowHeight={200} gap={8}>
                {allArtworks.slice().map((art, ind)=>{
                    return (
                        <ImageListItem key={art.metId}>
                            <img
                                style={{cursor: 'pointer'}}
                                src={art.imgSrc}
                                alt={art.title}
                                loading="lazy"
                                onClick={handleObjClick.bind(this, art.metId)}
                            />
                        </ImageListItem>
                    );
                })}
            </ImageList>
        </Box>

    );
};

export default ImageGrid;