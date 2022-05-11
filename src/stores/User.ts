import {
    observable,
    action,
    computed,
    toJS,
} from 'mobx';

import ApiService from '../utils/api';
import { User } from '../utils/apiModels';

import isEmpty from 'lodash/isEmpty';
import uniqBy from 'lodash/uniqBy';
import isNil from 'lodash/isNil';
import enums from '../utils/enums';

class UserStore {

    @observable
    status: string | null = null;

    @observable
    userId: string | null = null;

    @observable
    userUniqueId: string | null = null;

    @observable
    userName: string | null = null;

    @observable
    mainImgClass: string = '';

    @observable
    hasAddedCurrArt = false;

    @observable
    previouslySavedArt: string[] = [];

    @observable
    hasTriedToGoToRoomBuilder = false;


    @computed
    get canGoToRoomBuilder(){
        if(this.previouslySavedArt.length > 0 ){
            return true;
        }
        return false;
    }

    @action.bound
    setHasAddedCurrArt(){
        this.hasAddedCurrArt = true;
    }

    @action.bound
    setUserId(userId: string){
        this.userId = userId;
    }

    @action.bound
    setUserUniqueId(uniqueId: string){
        this.userUniqueId = uniqueId;
    }

    @action.bound
    setUserName(name: string){
        this.userName = name;
    }

    @action.bound
    setMainImgClass(newClass: string){
        console.log("changing main image class");
        this.mainImgClass = newClass;
        console.log(this.mainImgClass);
    }

    @action.bound
    setPreviouslySavedArt( savedArt :string[]){
        this.previouslySavedArt = savedArt;
    }

    @action.bound
    setHasTriedToGoToRoomBuilder(){
        this.hasTriedToGoToRoomBuilder = true;
    }

    @action.bound
    setStatus(newStatus: string): void {
        this.status = newStatus;
    }

    @action.bound
    async addObjectToUserCollection(objDbTitle: string){
        try{
            this.setStatus(enums.STATUS.PENDING);

            const user = {
                id: this.userId,
                username: this.userName,
                uniqueId: this.userUniqueId,
                toAdd: objDbTitle,
            } as User;
            //
            const { data }  = await ApiService.addObjectToUserCollection({user});

            if(data && data.user){
                console.log(data.user);
                this.setStatus(enums.STATUS.SUCCESS);
                return data.user;
            }

        }
        catch(e){
            this.setStatus(enums.STATUS.FAILURE);
        }
    }

    @action.bound
    async getUserSavedObjs(){
        try{
            this.setStatus(enums.STATUS.PENDING);
            const { data }  = await ApiService.getUser(this.userId || '', this.userUniqueId|| '' );
            if(data && data.user && data.user.savedArt){
                 this.setStatus(enums.STATUS.SUCCESS);
                return data.user.savedArt ?? [];
            }

        }
        catch(e){
            this.setStatus(enums.STATUS.FAILURE);
        }
    }

    @action.bound
    async setUserSavedObjs() {
        const userArt = await this.getUserSavedObjs();
        console.log(userArt);
        this.previouslySavedArt = userArt ?? [];
    }

    @action.bound
    async UpdateUserWallImages(wallImages: string[]){
        try{
            this.setStatus(enums.STATUS.PENDING);

            const user = {
                id: this.userId,
                username: this.userName,
                uniqueId: this.userUniqueId,
                wallImagesToSave: wallImages,
            } as User;

            const { data }  = await ApiService.uploadUserWallImages({user});

            // if(data && data.user && data.user.savedArt){
            //     this.setStatus(enums.STATUS.SUCCESS);
            //     return data.user.savedArt ?? [];
            // }
        }
        catch(e) {
            this.setStatus(enums.STATUS.FAILURE);
        }
    }

    @action.bound
    async UpdateAllUserImages(wallImages: string[], overheadImages: string[]){
        try{
            this.setStatus(enums.STATUS.PENDING);

            const user = {
                id: this.userId,
                username: this.userName,
                uniqueId: this.userUniqueId,
                wallImagesToSave: wallImages,
                overheadImagesToSave: overheadImages,
            } as User;

            const { data }  = await ApiService.uploadUserAllImages({user});

            // if(data && data.user && data.user.savedArt){
            //     this.setStatus(enums.STATUS.SUCCESS);
            //     return data.user.savedArt ?? [];
            // }
        }
        catch(e) {
            this.setStatus(enums.STATUS.FAILURE);
        }
    }








}

export default UserStore;
