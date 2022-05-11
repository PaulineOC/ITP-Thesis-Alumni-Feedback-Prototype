import React, {
    FunctionComponent,
    ReactElement,
    useState,
    ChangeEvent,
    FormEvent,
    useEffect,
    useMemo,
    useCallback
} from 'react';
import { flushSync } from 'react-dom';
import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isNil';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Stack,
    Typography,
    Button,
    TextField,
    IconButton,
} from '@mui/material';

import ApiService from '../../utils/api';
import {User} from '../../utils/apiModels';
import MyMetButton from './MyMetButton.png';
import RoomBuilderButton from './RoomBuilderButton.png';
import './SignupConfirmation.css';

const SignupConfirmation: FunctionComponent = (props): ReactElement => {

    const navigate = useNavigate();

    const [hasLoaded, setUsername] = useState('');

    useEffect(() => {
        console.log(
            "Occurs ONCE, AFTER the initial render."
        );
    }, []);

    return (

        <Container sx={{paddingTop: "4vh", paddingBottom: "4vh%"}}>

            <Typography className="title" variant={"h4"} component={"h4"}>
                Thanks for signing up!
            </Typography>

            <Stack
                spacing={3}
                direction={"column"}
                sx={{alignItems: 'start'}}
            >
                <Typography className="mainFont firstParagraph" variant={"body1"} component={"div"}>
                    Here's what you can do with My Met:
                </Typography>

                <Stack
                    spacing={2}
                    direction={"column"}
                    sx={{alignItems: 'start', width: '85%'}}
                >
                    <Typography className="mainFont" variant={"body1"} component={"p"}>
                        1. Scan an object's QR code
                    </Typography>
                    <Stack
                        spacing={1}
                        direction={"column"}
                        sx={{alignItems: 'start',  width: '100%',  paddingTop: '8px'}}
                    >
                        <Typography className="mainFont" variant={"body1"} component={"p"}>
                            2. Add it to your collection
                        </Typography>


                        <Stack
                            spacing={0}
                            direction={"row"}
                            sx={{alignItems: 'start', justifyContent: 'center', width: "100%", paddingTop: '8px'}}
                        >
                            <img src={MyMetButton} className="rightAlign" width={'50%'} />
                        </Stack>
                    </Stack>

                    <Stack
                        spacing={1}
                        direction={"column"}
                        sx={{alignItems: 'start', paddingTop: '8px'}}
                    >
                        <Typography className="mainFont" variant={"body1"} component={"p"}>
                            3. Curate saved objects in your own space
                        </Typography>

                        <Stack
                            spacing={0}
                            direction={"row"}
                            sx={{alignItems: 'start', justifyContent: 'center', width: "100%", paddingTop: '8px'}}
                        >
                            <img src={RoomBuilderButton} className="rightAlign" width={'50%'} />
                        </Stack>
                    </Stack>
                </Stack>

            </Stack>
        </Container>

    );
};

export default SignupConfirmation;

