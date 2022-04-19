import React, { useEffect,useState } from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';

const unityContext = new UnityContext({
    loaderUrl: "v7.loader.js",
    dataUrl: "v7.data",
    frameworkUrl: "v7.framework.js",
    codeUrl: "v7.wasm",
});

const RoomBuilder  = () => {

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
        <div>
            <p>Room Builder:</p>
            <Unity
                unityContext={unityContext}
                style={{
                    width: 320,
                    height: 480,
                    border: "2px solid black",
                    background: "grey",
                }}
            />
        </div>

    );
};

export default RoomBuilder;
