"use client";

import { SignIn } from "@clerk/nextjs";

const Page = () => {
    return (
        <div className="w-full flex h-screen items-center justify-center">
            <SignIn signUpUrl="/sign-in" />
        </div>
    )
}

export default Page;