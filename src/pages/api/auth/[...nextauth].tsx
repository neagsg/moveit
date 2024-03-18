// import NextAuth from "next-auth";
import NextAuth, { AuthOptions } from "next-auth";
import { authOptions } from "../../../lib/auth";

export default NextAuth(authOptions);
