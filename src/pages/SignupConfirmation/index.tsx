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
import UserStore from '../../stores/User';

const SignupConfirmation: FunctionComponent = (props): ReactElement => {

    const navigate = useNavigate();

    const [userName, setUsername] = useState('');

    useEffect(() => {

        const userCookies = document.cookie;
        if(userCookies !== undefined ){
            const splitCookies = userCookies.split('; ');
            if(splitCookies !== undefined){

                const idCookie = splitCookies.find((row)=>{
                    return (row.includes('user_id='));
                });
                const username = splitCookies.find((row)=>{
                    return (row.includes('username='));
                });
                if(username !== undefined ){
                    const userNameActual = username.split("=");
                    console.log(username);
                    setUsername(userNameActual[1]);
                }
            }
        }
    }, []);

    return (
        <Container sx={{paddingTop: "4vh", paddingBottom: "4vh%"}}>
            <Typography className="title" variant={"h4"} component={"h4"}>
                Thanks for signing up!
            </Typography>

            <Typography className="mainFont firstParagraph" variant={"body1"} component={"p"}>
                Your username is: {userName}
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
                        1. When you like a work of art,  scan its QR code with your camera app. You will be taken to the "More Info" page about that work
                    </Typography>
                    <Stack
                        spacing={1}
                        direction={"column"}
                        sx={{alignItems: 'start',  width: '100%',  paddingTop: '8px'}}
                    >
                        <Typography className="mainFont" variant={"body1"} component={"p"}>
                            2. If you like it, add it to your collection by clicking a button that looks like this:
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
                            3. If you're done collecting works, curate these saved objects in your own space by using the Room Builder, which you navigate to via a button that looks like this:
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

            <Typography className="title mainFont firstParagraph" variant={"body1"} component={"p"}>
                Feel free to close this browser tab as you peruse the art!
            </Typography>
        </Container>

    );
};

export default SignupConfirmation;

