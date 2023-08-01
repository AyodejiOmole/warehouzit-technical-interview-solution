"use client";
import Image from "next/image";
import Link from "next/link";

// Metadata for the login and register page of Warehoutit
export const metadata = {
    title: "Login & Sign Up",
    description: "Login and sign up page for Warehouzit"
}

// The layout of the get-started route that contains both the Login and Get started components and all the shared layouts between them.
const GetStartedLayout = ({ children }) => {
    return (
        <div>
            <div className="flex justify-between fixed z-10 align-center items-center p-4 bg-primary-green w-full">
                <p className="text-white font-semibold text-sm md:text-base lg:text-lg">Hello, Welcome</p>
                {/* A cancel button to close the login/register page and return to the Homepage */}
                <Link href="/">
                    <h3 className="text-2xl font-semibold cursor-pointer text-white">&times;</h3>
                </Link>
            </div>

            {children}

            <div className="flex items-center justify-center lg:w-1/3 w-full md:w-1/2 mx-auto">
                {/* <!-- Left horizontal line --> */}
                <div className="lg:w-1/4 md:w-1/4 w-1/4 h-px bg-gray-400"></div> 
                
                <span className="mx-3 text-black text-xs lg:text-sm">or continue with</span>

                {/* <!-- Right horizontal line --> */}
                <div className="lg:w-1/4 md:w-1/4 w-1/4 h-px bg-gray-400"></div> 
            </div>

            {/* Buttons to allow users to login and register via google and register */}
            <div className="flex w-full gap-3 my-4 align-center justify-center">
                <Image
                    src={"/assets/google.png"}
                    alt="Google logo"
                    width={40}
                    height={40}/>
                <Image
                    src={"/assets/facebook.png"}
                    alt="Facebook logo"
                    width={40}
                    height={40}/>
            </div>
        </div>
    )
}

export default GetStartedLayout;