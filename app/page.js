import Link from 'next/link';

export default function Home() {
  return (
    <div className="mt-4 lg:px-10 px-4 md:px-10 flex justify-center items-center">

      {/* This button leads the user to the get started page where they can either login or register */}
      <Link href="/get-started" className="flex justify-center items-center bg-primary-green p-4 text-white hover:text-primary-green hover:bg-white cursor-pointer hover:border hover:border-primary-green rounded lg:w-1/4 md:w-1/2 w-full">
        Click me to login!
      </Link>
    </div>    
  )
}
