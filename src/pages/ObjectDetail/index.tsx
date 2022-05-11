import React from 'react';
import {observer} from 'mobx-react';

import {useLocation, useNavigate, useParams} from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

import {Box, Button, Container, Stack, Typography, Alert, AlertTitle} from '@mui/material';
import {OBJECT_DATA} from '../../assets/data';

import './ObjectDetail.css';
import UserStore from '../../stores/User';

import enums from '../../utils/enums';

const WrappedObjectDetail = (props: any) => {
    const location = useLocation();
    const history = useNavigate();
    const params = useParams();

    return <ObjectDetail params={params} history={history} location={location} {...props} />
};


@observer
class ObjectDetail extends React.Component<any>{
    store: UserStore;
    currMetObj: any = null;

    constructor(props: {}){
        super(props);

        this.store = new UserStore();
        this.store.setStatus(enums.STATUS.SUCCESS);


        let objId = this.props.params.objectId;

        this.currMetObj = OBJECT_DATA.find((item)=>{
            return item.metId.toString() == objId;
        });

        this.onRoomBuilderClick = this.onRoomBuilderClick.bind(this);
        this.addToMyMetOnClick = this.addToMyMetOnClick.bind(this);

        this.setMainImgClassBasedOnOrientation = this.setMainImgClassBasedOnOrientation.bind(this);
        this.determineImageInfo = this.determineImageInfo.bind(this);
        this.determineClassBasedOnImageAspectRatio = this.determineClassBasedOnImageAspectRatio.bind(this);
        this.determineClassBasedOnImageAspectRatio = this.determineClassBasedOnImageAspectRatio.bind(this);
        this.renderAlert = this.renderAlert.bind(this);

        const userCookies = document.cookie;
        if(userCookies !== undefined ){
            const splitCookies = userCookies.split('; ');
            if(splitCookies !== undefined){

                const idCookie = splitCookies.find((row)=>{
                    return (row.includes('user_id='));
                });

                if(idCookie !== undefined ){
                    this.store.setUserId(idCookie.split(('='))[1]);
                }

                const uniqueCookie = splitCookies.find((row)=>{
                    return (row.includes('unique_id='));
                });
                if(uniqueCookie !== undefined ){
                    this.store.setUserUniqueId(uniqueCookie.split(('='))[1]);
                }

                const username = splitCookies.find((row)=>{
                    return (row.includes('username='));
                });
                if(username !== undefined ){
                    this.store.setUserName(username.split(('='))[1]);
                }
            }
        }
    }

    async setMainImgClassBasedOnOrientation(){
        const dimensions = await this.determineImageInfo(this.currMetObj.imgSrc);
        if(dimensions && dimensions.width && dimensions.height){
            return this.determineClassBasedOnImageAspectRatio(dimensions.width, dimensions.height); //@ts-ignore
        }
        else {
            return '';
        }
    }

    async determineImageInfo(src: string){
        if(isEmpty(src)){ return;}
        const img = new Image();
        img.src = src;
        await img.decode();
        // console.log( `width: ${ img.width }, height: ${ img.height }` );
        return {width: img.width || -1, height: img.height || -1};
    };

    determineClassBasedOnImageAspectRatio(width: number, height: number): string{
        if(height === -1 || width === -1){
            return '';
        }
        if(width >= height){
            return 'landscape-img';
        }
        else{
            return 'portrait-img';
        }
        return '';
    };

    async componentDidMount(){

        const val = await this.setMainImgClassBasedOnOrientation();
        this.store.setMainImgClass(val);
        await this.store.setUserSavedObjs();
    }

    onRoomBuilderClick = () => {
        if(this.store.previouslySavedArt && this.store.previouslySavedArt.length > 0){
            this.props.history.bind(this, '/room-builder').call();
        }
        else{
            alert("FYI, room builder won't work properly if you don't have any saved objects!");
            this.props.history.bind(this, '/room-builder').call();
        }
    };

    addToMyMetOnClick = async () => {
        const updatedUser = await this.store.addObjectToUserCollection(this.currMetObj.dbTitle);
        if(updatedUser){;
            this.store.setPreviouslySavedArt(updatedUser.savedArt);
            this.store.setHasAddedCurrArt();
            this.forceUpdate();
        }
    };

    renderAlert(){
        console.log("IN HERE");
        if(this.store.hasTriedToGoToRoomBuilder && !this.store.canGoToRoomBuilder){
            return (
                <Alert severity="error" sx={{width: '100%'}}>
                    <AlertTitle>Can't Go to Room Builder</AlertTitle>
                    Please have <strong>at least 1 object saved</strong> before continuing to the room builder.
                </Alert>
            );
        }
        return(null);
    }


    render(){
        if(this.currMetObj === null){
            return null;
        }
        else{

            const { status, mainImgClass, hasAddedCurrArt } = this.store;
            switch(status){
                case enums.STATUS.PENDING:
                    return null;
                    break;

                case enums.STATUS.SUCCESS:
                    return (
                        <Container sx={{paddingTop: "1vh", paddingBottom: "1vh"}}>
                            <Stack
                                id={"container"}
                                spacing={2}
                                direction={"column"}
                                sx={{width: '100%', height: '100%', display:'flex', alignItems: 'start'}}
                            >
                                <Box sx={{padding: `8% 0 8% 0`}} >
                                    <img src={this.currMetObj.imgSrc} id={"mainImg"} className={`${mainImgClass}`}/>
                                </Box>

                                <Typography variant={"h5"} component="h5">
                                    {this.currMetObj.title}
                                </Typography>

                                <Typography variant={"h5"} component="h5">
                                    {this.currMetObj.date}
                                </Typography>

                                <Box sx={{display: 'flex'}}
                                >
                                    {this.currMetObj.creator && (
                                        <Typography variant={"h5"} component="span">
                                            {this.currMetObj.creator}
                                        </Typography>
                                    )}

                                    {this.currMetObj.creatorNationality && (
                                        <Typography variant={"body1"} component="span">
                                            {this.currMetObj.creatorNationality}
                                        </Typography>
                                    )}

                                </Box>

                                <Typography variant={"h6"} component="h5">
                                    {this.currMetObj.metLocation}
                                </Typography>

                                {this.renderAlert()}

                                <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
                                    <Button
                                        disabled={hasAddedCurrArt}
                                        id={"addToMyMet"}
                                        component="button"
                                        variant="contained"
                                        onClick={this.addToMyMetOnClick}
                                        sx={{width: '40%', backgroundColor: "#e4002b !important"}}
                                    >
                                        + My Met
                                    </Button>

                                    <Button
                                        component="button"
                                        variant="contained"
                                        color="error"
                                        onClick={this.onRoomBuilderClick}
                                        className={"cancelButton"}
                                        sx={{width: '50%'}}
                                    >
                                        Room Builder
                                    </Button>

                                </Box>

                                <Typography variant={"body2"} component="h5" id={"descriptionParagraph"}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan vulputate mollis. Quisque maximus mi eu augue ultricies rhoncus. Vestibulum ac orci eget odio congue mattis. Curabitur id sapien nec sem mattis porta non eu enim. Sed elementum metus dignissim faucibus porta. Ut ullamcorper neque in placerat interdum. Pellentesque pharetra erat vel placerat consequat. Pellentesque quis consequat libero.
                                </Typography>

                            </Stack>
                        </Container>
                    );

                    break;
            }
        }
    }
}



export default WrappedObjectDetail;


// {this.currMetObj.description}
