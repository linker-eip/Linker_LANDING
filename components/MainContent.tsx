import Image from "next/image"
import Link from "next/link"

const MainContent = (): JSX.Element => {
  return (
    <div className="bg-blue-100 overflow-x-hidden">
      <div className="w-full flex flex-col items-center md:items-start md:flex-row justify-around mx-auto py-8 px-4">
        <div className="flex flex-col items-center text-center md:text-left md:items-start space-y-6 md:space-y-4 md:mt-24">
          <Image className="-mb-6 md:-mb-8 w-40 md:w-80" src="/linker.svg" alt="Linker" width={300} height={160} />
          <div className="items-center md:items-start flex flex-col md:space-y-4">
            <p className="text-white text-xl font-bold ml-3 mb-6">
              Renforçons le <span className="text-blue-200">lien</span> entre <br />
              les <span className="text-blue-200">entreprises</span> et les <span className="text-blue-200">étudiants</span>.
            </p>
            <Link href="/linker.apk">
              <button className="bg-blue-200 text-white font-bold py-2 px-4 ml-3 w-64 mb-4 rounded-full">
                Télécharger l&apos;app mobile
              </button>
            </Link>
            <Link href="https://linker-app.fr/">
              <button className="bg-blue-200 text-white font-bold py-2 px-4 ml-3 w-64 rounded-full">
                Visiter notre plateforme
              </button>
            </Link>
          </div>
        </div>
        <div data-aos="flip-left" className="z-50 mt-20 md:mt-0">
          <Image className="w-full max-w-md md:max-w-lg" src="/phones.svg" alt="Linker" width={700} height={595} />
        </div>
      </div>
    </div>
  )
}

export default MainContent
