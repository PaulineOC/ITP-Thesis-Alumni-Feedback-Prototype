import {
    observable,
    action,
    computed,
    toJS,
} from 'mobx';

import isEmpty from 'lodash/isEmpty';
import uniqBy from 'lodash/uniqBy';
import isNil from 'lodash/isNil';

class UserStore {

    @observable
    userName: string | null = null;

    @observable
    isPageSubmitted: boolean|null = false;



}

export default UserStore;
