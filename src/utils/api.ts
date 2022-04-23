import http from './http-common';
import { User } from './apiModels';

class ApiService {

    async createUser(body: {user: User}){
        return http.post('/users/create', body);
    }
    //All
    async getAllContentSummary(){
        return http.get('/');
    }

    // // Hall
    // async createHall(body: {hall: Hall}){
    //     return http.post('/hall/create', body);
    // }
    //
    // async fetchHallById(id: string){
    //     return http.get(`/hall/read/${id}`);
    // }
    //
    // async fetchAllHalls(){
    //     return http.get('/hall/get-all');
    // }
    //
    // async updateHallById(id: string, body: {hall: Hall}){
    //     return http.put(`/hall/update/${id}`, body);
    // }
    //
    // async deleteHallById(id: string){
    //     return http.delete(`/hall/delete/${id}`)
    // }
    //
    // // Exhibition
    // async createExhibition(body: {exhibition: Exhibition}){
    //     return http.post('/exhibition/create', body);
    // }
    //
    // async fetchAllExhibits(){
    //     return http.get('/exhibition/get-all');
    // }
    //
    // async fetchExhibitById(id:string){
    //     return http.get(`/exhibition/read/${id}`);
    // }
    //
    // async updateExhibitionById(id: string, body: {exhibition: Exhibition}){
    //     return http.put(`/exhibition/update/${id}`, body);
    // }
    //
    // async deleteExhibitById(id: string){
    //     return http.delete(`/exhibition/delete/${id}`)
    // }
    //
    // // Interactive
    // async createInteractive(body: {interactive: Interactive}){
    //     return http.post('/interactive/create', body);
    // }
    //
    // async fetchAllInteractives(){
    //     return http.get('/interactive/get-all');
    // }
    //
    // async fetchInteractiveById(id: string){
    //     return http.get(`/interactive/read/${id}`);
    // }
    //
    // async updateInteractive(id: string, body: {interactive: Interactive}){
    //     return http.put(`/interactive/update/${id}`, body);
    // }
    //
    // async deleteInteractiveById(id: string){
    //     return http.delete(`/interactive/delete/${id}`)
    // }
    //
    // async getAssociatedContentOptions(){
    //     return http.get(`/interactive/get-associated-content-options`);
    // }
    //
    // // Photos
    // async createPhotos(photos: Photo[]) {
    //     return Promise.all(photos.map(photo => http.post('/photo/bulk-create', {photosToCreate: [photo]})));
    // }
    //
    // async deletePhotosByAssociatedContentId(id: string, associatedContentType: enums.ASSOCIATED_CONTENT_TYPE ){
    //     return http.delete('/photo/bulk-delete/content-id',
    //         {data: {contentId: id, associatedContentType: associatedContentType  }}
    //     );
    // }
    //
    // async deletePhotosByIds(photoIds: string[]){
    //     return http.delete('/photo/bulk-delete/photo-ids',
    //         { data: { photoIds: photoIds } });
    // }
    //
    // //Videos
    // async createVideos(videos: Video[]){
    //     return Promise.all(videos.map(video => http.post('/video/bulk-create', {videosToCreate: [video]})));
    // }
    //
    // async deleteVideosByAssociatedContentId(id: string, associatedContentType: enums.ASSOCIATED_CONTENT_TYPE){
    //     return http.delete('/video/bulk-delete/content-id',
    //         {data: {contentId: id, associatedContentType: associatedContentType  }}
    //     );
    // }

}


export default new ApiService();
