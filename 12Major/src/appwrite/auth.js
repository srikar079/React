import conf from "../conf/config";

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
            try {
             const userAccount = await this.account.create(ID.unique(),email,password,name);
             if(userAccount){
                //call another method
             }
             else{
                return userAccount;
                
             }
                   
            } 
            catch (error) {
                throw error;
            }
         }
}
// so here we are making the code and ui seperate and more 
//easily readable, we will be creating an class, of whose objects 
// we will export and the user will use whenever creating
// a new account 
const authService = new AuthService();


export default authService;