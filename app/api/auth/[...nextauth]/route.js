
import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from "next-auth/providers/github";
import { connectDB } from "@/libs/mongodb";
import User from '@/models/User'



const handler= NextAuth({
  providers: [

    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),
  
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    
  
  ]
,
callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
  
if(account.provider=="github"){

await connectDB()

const loggedUser = await User.findOne({email:email})

if(!loggedUser){
const newUser= User.create({email:user.email,name: user.email.split("@")[0]})
}

}
return true
  }
},
async session({ session, user, token }) {
 
 const sessionUser = await User.findOne({email:session.user.email})
 
 session.user.name= sessionUser.username
 
  return session
},
pages:{
  signIn: 'auth/signIn'
}



}

)



export {handler as GET,handler as POST}