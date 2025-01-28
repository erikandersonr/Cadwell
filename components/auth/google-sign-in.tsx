import { signIn } from "@/lib/auth"
import { Button } from "../ui/button"
import { FcGoogle } from "react-icons/fc"
import { FaGoogle } from "react-icons/fa"
 
export default function GoogleSignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
        <Button className="w-full" variant="default">
            <FaGoogle className="w-5 h-5" />
            <span>Continue with Google</span>
        </Button>
    </form>
  )
} 