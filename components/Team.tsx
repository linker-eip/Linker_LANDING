import Image from "next/image"
import { FaLinkedin, FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Team = (): JSX.Element => {
  return (
    <div className="bg-white" id="team">
      <div className="container mx-auto flex flex-col items-center py-8 px-4">
        <h1 className="text-3xl text-center text-blue-200 font-bold mb-24">L&apos;ÉQUIPE</h1>
        <div data-aos="fade-up" className="flex flex-wrap justify-center md:justify-around items-center md:space-x-20 gap-y-8 mb-24">
          <div className="flex flex-col items-center space-y-4 md:space-y-4">
            <Image className="rounded-full" src="/jeremy.jpeg" alt="Linker" width={150} height={150} />
            <p className="w-40 text-center text-lg font-bold">Jérémy <br />CALVO</p>
            <p className="w-40 text-center text-sm text-gray-500">Développeur Back</p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/jeremy-calvo/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/jeremycalvo" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 md:space-y-4">
            <Image className="rounded-full" src="/rayane.jpeg" alt="Linker" width={150} height={150} />
            <p className="w-40 text-center text-lg font-bold">Rayane <br />ELOUDJEDI</p>
            <p className="w-40 text-center text-sm text-gray-500">Dev Android / DevSecOps</p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/rayane-eloudjedi" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/RayaneTekMars" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 md:space-y-4">
            <Image className="rounded-full" src="/pierre.jpeg" alt="Linker" width={150} height={150} />
            <p className="w-40 text-center text-lg font-bold">Pierre <br />NANA</p>
            <p className="w-40 text-center text-sm text-gray-500">Développeur iOS</p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/pierre-nana-069818207/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/kilouri" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 md:space-y-4">
            <Image className="rounded-full" src="/theo.jpeg" alt="Linker" width={150} height={150} />
            <p className="w-40 text-center text-lg font-bold">Théo <br />TARALLO</p>
            <p className="w-40 text-center text-sm text-gray-500">Développeur Front</p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/theo-tarallo/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/thtarallo" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 md:space-y-4">
            <Image className="rounded-full" src="/alexandre.jpeg" alt="Linker" width={150} height={150} />
            <p className="w-40 text-center text-lg font-bold">Alexandre <br />TOURRAL</p>
            <p className="w-40 text-center text-sm text-gray-500">Développeur Front</p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/alexandre-tourral-339001200/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/AlexandreTourral" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 md:space-y-4">
            <Image className="rounded-full" src="/tony.jpeg" alt="Linker" width={150} height={150} />
            <p className="w-40 text-center text-lg font-bold">Tony <br />BANO</p>
            <p className="w-40 text-center text-sm text-gray-500">Développeur Back</p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/tony-bano-a5265a206/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/Tonymelyo" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-center py-8 px-4 gap-4" id="contact">
          <h1 className="text-3xl text-center text-blue-200 font-bold mb-4">NOUS CONTACTER</h1>
          <p className="text-center text-lg mb-4">Pour plus d&apos;informations, suivez-nous sur nos réseaux sociaux ou contactez-nous directement.</p>
          <div className="flex space-x-8">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team