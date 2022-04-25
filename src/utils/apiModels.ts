//@ts-ignore
import enums from './enums.ts';

export type User = {
    id?: string,
    username: string,
    uniqueId?: string,
    toAdd?: enums.DB_TITLE,
    screenshots?: any,
};


export type Artwork = {
	id?: string,
    department: enums.DEPARTMENTS, 
    metId: string,
    metLink: string, 
    imgSrc?: string,
    title: string,
    description?: string,
}




//     return http.post('/exhibition/create', body);
