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

const Welcome: FunctionComponent = (props): ReactElement => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [isUsernameValid, setIsUsernameValid] = useState(true);
    const [isPageSubmitted, setIsPageSubmitted] = useState(false);

    const onUserNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    useEffect(()=>{
        console.log('firing page use effect: ', isPageSubmitted);
        if(isPageSubmitted){
            setIsUsernameValid(!!username);
        }
        else{
            setIsUsernameValid(true);
        }
        //return true;
    }, [isPageSubmitted, username]);

    const onButtonClick = async (e: FormEvent) => {

        if(!isPageSubmitted){
            setIsPageSubmitted(true);
        }

        if(!!username){
            const user = {
                username,
            } as User;

            const { data } = await ApiService.createUser({user});
            const idCookie = `user_id=${data.id};expires=${new Date('December 31, 2025 23:50:00')}`;
            const uniqueIdCookie = `unique_id=${data.uniqueId};expires=${new Date('December 31, 2025 23:50:00')}`;
            const usernameCookie = `username=${data.username};expires=${new Date('December 31, 2025 23:50:00')}`;
            document.cookie = idCookie;
            document.cookie = uniqueIdCookie;
            document.cookie = usernameCookie;
            //navigate('/choose-objects');
        }
    };
  
    return (

        <Container sx={{paddingTop: "2%", paddingBottom: "2%"}}>
            <Stack
                spacing={4}
                 direction={"column"}
                sx={{alignItems: 'center'}}
            >
                <Typography variant={"h4"} component={"h4"}>
                    Welcome to My Met
                </Typography>

                <Typography variant={"body1"} component={"p"}>
                    [INSTRUCTIONS]
                </Typography>

                <TextField
                    id="title-input"
                    required
                    error={!isUsernameValid}
                    name={"Title Input"}
                    label={"Enter your username"}
                    variant="filled"
                    value={username}
                    sx={{
                        width: "75%",
                    }}
                    onChange={onUserNameInputChange}
                />

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

