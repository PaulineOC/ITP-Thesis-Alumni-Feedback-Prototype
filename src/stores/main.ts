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

    @action.bound
    addArtWorkToCollection(art: Artwork): void {
        this.userCollection?.push(art);
    }

}
export default new MainStore();
