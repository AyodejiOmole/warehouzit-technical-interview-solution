"use client";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Login & Sign Up",
    description: "Login and sign up page for Warehouzit"
}

// The layout of the get started route that contains both the Login and Get started components of the app
const GetStartedLayout = ({ children }) => {
    return (
        <div>
            <div className="flex justify-between align-center items-center p-4 bg-primary-green w-full">
                <p className="text-white font-semibold text-sm md:text-base lg:text-lg">Hello, Welcome</p>
                {/* A cancel button to close the login/register page and return to the Homepage */}
                <Link href="/">
                    <h3 className="text-2xl font-semibold cursor-pointer text-white">&times;</h3>
                </Link>
            </div>

            {children}

            <div class="flex items-center justify-center lg:w-1/3 w-full md:w-1/2 mx-auto">
                {/* <!-- Left horizontal line --> */}
                <div class="w-1/4 h-px bg-gray-400"></div> 
                
                <span class="mx-3 text-black text-sm">or continue with</span>

                {/* <!-- Right horizontal line --> */}
                <div class="w-1/4 h-px bg-gray-400"></div> 
            </div>
        </div>
    )
}

export default GetStartedLayout;