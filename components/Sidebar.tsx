import { DM_Serif_Display } from "next/font/google"
import { PanelRightOpen, PersonStanding, Settings, User, Home, PlusCircle } from "lucide-react"
import { Button } from "./ui/button"

const dmSerifSans = DM_Serif_Display({
    weight: '400',
    subsets: ['latin'],
})

export default function Sidebar() {
    return (
        <div className="bg-white w-full h-full">
            <div className="flex flex-col justify-between h-full py-4 px-3">
                <div>
                    <div className="flex items-center justify-between">
                        <h1 className={`${dmSerifSans.className} text-3xl`}>
                            Cadwell
                        </h1>
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-center mt-4">
                        <Button variant="outline" className="w-full">
                            New Workflow
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}