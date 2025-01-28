import GoogleSignIn from "@/components/auth/google-sign-in";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { DM_Serif_Display } from "next/font/google";
import Link from "next/link";
import { redirect } from "next/navigation";

const dmSerifSans = DM_Serif_Display({
    weight: '400',
    subsets: ['latin'],
})

export default async function SignIn() {
    const session = await auth()
    if (session) {
        redirect("/")
    }
    return (
        <div className="flex items-center justify-center h-screen bg-background">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-primary text-2xl">Welcome to <span className={`${dmSerifSans.className} text-3xl text-primary`}>Cadwell</span></h1>
                <div className="w-[300px]">
                    <GoogleSignIn />
                </div>
                <div className="max-w-[300px] text-sm text-muted-foreground text-center mt-4">
                    <p>Cadwell is invite only. If you have an invite, please contact us at <a href="mailto:hello@cadwell.com">hello@cadwell.com</a></p>
                </div>
            </div>
            <div className="absolute bottom-0 mb-4">
                <Link href="/">
                    <Button variant="link">Terms of Service</Button>
                </Link>
            </div>
        </div>
    )
}