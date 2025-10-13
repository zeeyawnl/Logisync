import { stackServerApp } from "@/stack/server";
import { redirect } from "next/navigation";

export default async function getCurrentUser() {
    const user = await stackServerApp.getUser()
    if (!user) {
        redirect("/sign-in")
    }
    return user
}