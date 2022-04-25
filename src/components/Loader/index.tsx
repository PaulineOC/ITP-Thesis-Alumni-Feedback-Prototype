import React, { FunctionComponent, ReactElement } from 'react';

import {
    Backdrop,
    CircularProgress,
} from '@mui/material';

type LoaderProps = {
    isOpen: boolean,
};

const Loader: FunctionComponent<LoaderProps> = ({isOpen }: LoaderProps): ReactElement => {
    return (
        <Backdrop
            sx={{ backgroundColor: '#fffa', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isOpen}
        >
            <CircularProgress />
        </Backdrop>
    );
};

export default Loader;
