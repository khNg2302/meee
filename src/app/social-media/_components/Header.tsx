import { PaddingBox } from "@/components/PaddingBox"
import Link from "next/link"

export const SocialHeader = () => {
    return <PaddingBox className="flex justify-center">
        <ul>
            <li>
                <Link href='/social-media/'>Posts</Link>
                <Link href='/social-media/chat'>Chat</Link>
            </li>
        </ul>
    </PaddingBox>
}