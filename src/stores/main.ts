import {
	observable,
	action,
	computed,
	toJS,
} from 'mobx';

import isEmpty from 'lodash/isEmpty';
import uniqBy from 'lodash/uniqBy';
import isNil from 'lodash/isNil';

import { Artwork } from '../utils/apiModels'; 
import { sampleData } from '../assets/sampleData';

class MainStore {
    @observable
    allCollection: Artwork[] | null = [];

    @observable
    userCollection: Artwork[] | null = [];

    constructor(){
        this.allCollection = sampleData;
    }

    @observable
    leftWallArt: Artwork | null = null;

    @observable
    backWallArt: Artwork | null = null;

    @observable
    rightWallArt: Artwork | null = null;


    @action.bound
    addArtWorkToCollection(art: Artwork): void {
        this.userCollection?.push(art);
    }

    @action.bound
    setLeftWallArt(art: Artwork): void {
        this.leftWallArt = art;
    }

    @action.bound
    setBackWallArt(art: Artwork): void {
        this.backWallArt = art;
    }

    @action.bound
    setRightWallArt(art: Artwork): void {
        this.rightWallArt = art;
    }

}
export default new MainStore();
