import React from "react";
import Unity, { UnityContext } from 'react-unity-webgl';

const unityContext = new UnityContext({
    loaderUrl: "RoomSize-v2-UI_Button_Test.loader.js",
    dataUrl: "RoomSize-v2-UI_Button_Test.data",
    frameworkUrl: "RoomSize-v2-UI_Button_Test.framework.js",
    codeUrl: "RoomSize-v2-UI_Button_Test.wasm",
});

const RoomBuilder  = () => {
    return (
        <div>
            <p>Room Builder:</p>
            <Unity
                unityContext={unityContext}
                style={{
                    width: 360,
                    height: 640,
                    border: "2px solid black",
                    background: "grey",
                }}
            />
        </div>

    );
};

export default RoomBuilder;