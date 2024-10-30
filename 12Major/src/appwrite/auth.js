import conf from "../conf/conf";

import { Client , Account, ID} from "appwrite"

// const client = new Client().setEndpoint().setProject()

// const account = new Account(client);
// const user = await account.create(
//     ID.unique(),
//     "",
//     ""
// );



export class AuthService{
         client = new Client();
         account;
         constructor(){
            this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
            this.account=new Account(this.client);
         }

         async createAccount({email,password,name}){
           
             const userAccount = await this.account.create(ID.unique(),email,password,name);
             if(userAccount){
                //call another method
                return this.login({email,password})
                
             }
             else{
                return userAccount;
                
             }
                   
            } 
          
         
         async login({email,password}){
            try {
               return await this.account.createEmailPasswordSession(email,password)
            } catch (error) {
               console.log(error)
               
            }
         }
         
         
         async getCurrentUser(){
            try {
               return await this.account.get();
            } catch (error) {
               console.log(`Appwrite serive :: getCurrentUser :: error  ${error}`);
            }
            return null;
         }
         async logout(){
            try {
               await this.account.deleteSessions();
            } catch (error) {
               console.log( `Appwrite serive :: logout :: error  ${error}`);
            }
         }
}
// so here we are making the code and ui seperate and more 
//easily readable, we will be creating an class, of whose objects 
// we will export and the user will use whenever creating
// a new account 
const authService = new AuthService();


export default authService;