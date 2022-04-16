import React from "react";
import Unity, { UnityContext } from 'react-unity-webgl';

const unityContext = new UnityContext({
    loaderUrl: "build/RoomSize-v2-UI_Button_Test.loader.js",
    dataUrl: "build/RoomSize-v2-UI_Button_Test.data",
    frameworkUrl: "build/RoomSize-v2-UI_Button_Test.framework.js",
    codeUrl: "build/RoomSize-v2-UI_Button_Test.wasm",
});

const RoomBuilder  = () => {
    return <Unity unityContext={unityContext} />;
};

export default RoomBuilder;
