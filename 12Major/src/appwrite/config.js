import conf from "../conf/conf.js"


import{Client, ID, Databases,Storage, Query} from "appwrite";

export class Service{
 client = new Client();
 databases;
 storage;

 constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);
    this.databases= new Databases(this.client);
    this.storage= new Storage(this.client);

    }
    async createPost({title, slug,content, featuredImage
        ,status,userId
    })
    {
      try{
        return await this.databases.createDocument(
        conf.appwriteDatabasetId,
        conf.appwriteCollectionId,
        slug,
        {
            title,
            content,
            featuredImage,
            status,
            userId,
        }
    )
    }
    catch(error){
          console.log(error);
    }
    
    }
     
    async updatePost(slug,{title, content, featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabasetId,
                conf.appwriteCollectionId,
                 slug,
                 {
                    title,
                    content,
                    featuredImage,
                    status,
                 }
            )
        } catch (error) {
            console.log(error)
        }
    }
       async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabasetId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log(error);
            return false;
        }
       }
 async getPost(slug){
    try {
        return await this.databases.getDocument(
            conf.appwriteDatabasetId,
            conf.appwriteCollectionId,
            slug
        )
    } catch (error) {
      console.log(error)  ;
      return false;
    } 
 }
   async getPosts(queries = [Query.equal("status","active")]){
       try {
               return await this.databases.listDocuments(
                conf.appwriteDatabasetId,
                conf.appwriteCollectionId,
                queries,
                100,
                0
               )
       } catch (error) {
        console.log(error);
        return false;
       }
   }
   async uploadFile(file){
    try {
        return await this.bucket.createFile(
        conf.appwriteBuckettId,
        ID.unique(),
        file
        )
    } catch (error) {
        console.log(error);
        return false;
    }
   }

   async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            conf.appwriteBuckettId,
            fileId
        )
    } catch (error) {
        console.log(error)
    }
   }
   getFilePreview(fileId){
    return this.storage.getFilePreview(
        conf.appwriteBuckettId,
        fileId
    )
   }
}


const service = new Service()
export default service