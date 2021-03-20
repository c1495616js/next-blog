import Head from 'next/head'
export default function Home() {
  return (
    <div className="flex justify-center dark:bg-black">
      <Head>
        <title>Next.js Boilerplate</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen justify-center items-center">
        <div className="container mx-auto">
          <div className="p-6 max-w-sm mx-auto bg-white dark:bg-black rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img className="h-18 w-36" src="https://miro.medium.com/max/930/1*uKcXMiwIIUy4xkgtEto6kA.png" alt="ChitChat Logo" />
            </div>
            <div>
              <div className="text-xl font-medium dark:text-white">Next.js Boilerplate</div>
              <p className="text-gray-600 dark:text-gray-300">Author: Jerry Wang</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}