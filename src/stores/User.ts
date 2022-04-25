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

    @action.bound
    setHasAddedCurrArt(){
        console.log("in here");
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
            if(data && data.user && data.user[0] === 1){
                this.setStatus(enums.STATUS.SUCCESS);
                return data.user[1][0];
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








}

export default UserStore;
