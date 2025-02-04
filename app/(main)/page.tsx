import { SignOut } from "@/components/auth/sign-out";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth()
  if (!session) {
    redirect("/sign-in")
  }
  return (
    <div>
      <SignOut />
    </div>
  )
}
