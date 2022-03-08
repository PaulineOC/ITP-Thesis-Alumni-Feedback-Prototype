//@ts-ignore
import enums from './enums.ts';

export type Artwork = {
	id?: string,
    department: enums.DEPARTMENTS, 
    metId: string,
    metLink: string, 
    imgSrc?: string,
    title: string,
    description?: string,
}