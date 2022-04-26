import React, { useEffect,useState } from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import UserStore from '../../stores/User';
import enums from '../../utils/enums';

import {
    Container,
    Stack,
    Typography,
} from '@mui/material';

const unityContext = new UnityContext({
    loaderUrl: "v3Test.loader.js",
    dataUrl: "v3Test.data",
    frameworkUrl: "v3Test.framework.js",
    codeUrl: "v3Test.wasm",
});

const RoomBuilder  = () => {
    
    //use effect fires BEFORE unity is loaded
    const store = new UserStore();

    const [userName , setUsername ] = useState('');
    const [ savedObjs, setSavedObjs] = useState<string[]>([]);

    // From Front-end --> Unity
    useEffect(() => {
        console.log('FE: First Use Effect is Firing:');
        //This didn't seem to fire?
        unityContext.send("DataListener","SpawnEnemies", 1);

        console.log("FE: before GetCookies");
        const GetCookies = (store: UserStore) => {
            const userCookies = document.cookie;
            if(userCookies !== undefined ){
                const splitCookies = userCookies.split('; ');
                if(splitCookies !== undefined){

                    const idCookie = splitCookies.find((row)=>{
                        return (row.includes('user_id='));
                    });

                    if(idCookie !== undefined ){
                        store.setUserId(idCookie.split(('='))[1]);
                    }

                    const uniqueCookie = splitCookies.find((row)=>{
                        return (row.includes('unique_id='));
                    });
                    if(uniqueCookie !== undefined ){
                        store.setUserUniqueId(uniqueCookie.split(('='))[1]);
                    }

                    const username = splitCookies.find((row)=>{
                        return (row.includes('username='));
                    });
                    if(username !== undefined ){
                        store.setUserName(username.split(('='))[1]);
                    }
                }
            }
        };
        GetCookies(store);

        const fetchObjs = async () => {
            try {
                const savedArt = await store.getUserSavedObjs();
                setSavedObjs(savedArt);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchObjs();
        setUsername(store.userName ?? '')
    }, []);


    // useEffect(function () {
    //     console.log("Downloaded SavedObjs, sending to Unity: ", savedObjs);
    //     unityContext.send("DataListener","SpawnEnemies", 1);
    //     //unityContext.send("GameManager", "ReceiveDataFromFrontEnd", 'TEST-STRING');
    //     //unityContext.send("GameManager", "ReceiveDataFromFrontEnd", savedObjs.join(','));
    // },[savedObjs]);

    // From Unity --> Front-end
    useEffect(function () {
        unityContext.on("SendScreenshot", (imgData)=>{
            console.log("Send Screenshot fired: ", imgData);
        });
    }, []);

    useEffect(function () {
        unityContext.on("debug", function (message) {
            console.log(message);
        });
    }, []);

    return (
        <Container sx={{paddingTop: "2%", paddingBottom: "2%"}}>
            <Stack
                spacing={4}
                direction={"column"}
                sx={{alignItems: 'center'}}
            >
                <Typography variant={"h4"} component={"h4"}>
                    {`Username: ${userName}`}
                </Typography>

                    <Unity
                        unityContext={unityContext}
                        style={{
                            width: 320,
                            height: 480,
                            border: "2px solid black",
                            background: "grey",
                        }}
                    />

            </Stack>
        </Container>
    );
};


export default RoomBuilder;
