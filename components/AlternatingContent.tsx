// components/AlternatingContent.tsx
import Image from 'next/image'

interface Content {
  id: number;
  imageUrl: string;
  text: JSX.Element;
  imageFirst: boolean;
}

const AlternatingContent = (): JSX.Element => {
  const contents: Content[] = [
    {
      id: 1,
      imageUrl: '/web_missions.png',
      text: (
        <>
          <h1 className="text-xl text-center md:text-start md:text-3xl text-white font-bold mb-4">Créez des missions en quelques clics</h1>
          <p className='text-white text-center md:text-start opacity-80 text-sm md:text-xl'>Linker vous permet de créer des missions de manière très simple. La mise en relation entre étudiants et entreprise n'a jamais été aussi facile.</p>
          <div data-aos="fade-left" className='text-center md:text-start mt-5 bg-blue-200 p-2 md:p-4 border-blue-300 border-t-8 md:border-t-0 md:border-l-8 rounded-md text-white text-sm md:text-lg font-semibold'>
            En quelques clics, trouvez des étudiants pour vos missions ponctuelles ou récurrentes.
          </div>
        </>
      ),
      imageFirst: true,
    },
    {
      id: 2,
      imageUrl: '/missions.png',
      text: (
        <>
          <h1 className="text-xl text-center md:text-start md:text-3xl text-white font-bold mb-4">Suivez vos missions en temps réel</h1>
          <p className='text-white text-center md:text-start opacity-80 text-sm md:text-xl'>Créez et suivez vos mission en temps réel. Linker intègre une messagerie qui vous accompagne tout au long de votre mission.</p>
          <div data-aos="fade-right" className='text-center md:text-start mt-5 bg-blue-200 p-2 md:p-4 border-blue-300 border-t-8 md:border-t-0 md:border-l-8 rounded-md text-white text-sm md:text-lg font-semibold'>
            Suivez vos missions en temps réel et échangez avec les étudiants pour plus de transparence.
          </div>
        </>
      ),
      imageFirst: false,
    },
    {
      id: 3,
      imageUrl: '/groupes.png',
      text: (
        <>
          <h1 className="text-xl text-center md:text-start md:text-3xl text-white font-bold mb-4">Créez votre groupe d'étudiants</h1>
          <p className='text-white text-center md:text-start opacity-80 text-sm md:text-xl'>Créez votre groupe d'étudiants pour vos missions. Gérez votre groupe en toute simplicité.</p>
          <div data-aos="fade-left" className='text-center md:text-start mb-5 md:mb-0 mt-5 bg-blue-200 p-2 md:p-4 border-blue-300 border-t-8 md:border-t-0 md:border-l-8 rounded-md text-white text-sm md:text-lg font-semibold'>
            Créez votre groupe d'étudiants pour vos missions et gérez-les en toute simplicité.
          </div>
        </>
      ),
      imageFirst: true,
    },
    {
      id: 4,
      imageUrl: '/chat.png',
      text: (
        <>
          <h1 className="text-xl text-center md:text-start md:text-3xl text-white font-bold mb-4">Discutez avec vos étudiants</h1>
          <p className='text-white text-center md:text-start opacity-80 text-sm md:text-xl'>Linker intègre une messagerie qui vous permet de discuter avec vos étudiants en toute simplicité.</p>
          <div data-aos="fade-right" className='text-center md:text-start mb-5 md:mb-0 mt-5 bg-blue-200 p-2 md:p-4 border-blue-300 border-t-8 md:border-t-0 md:border-l-8 rounded-md text-white text-sm md:text-lg font-semibold'>
            Discutez avec vos étudiants en toute simplicité grâce à la messagerie intégrée.
          </div>
        </>
      ),
      imageFirst: false,
    }
  ];

  return (
    <div className="bg-blue-100">
      <div className='container mx-auto py-8 px-4' id='alternating-content'>
        {contents.map((content) => (
          <div
            key={content.id}
            className={`flex ${content.imageFirst ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'} items-center justify-center gap-10 md:gap-20 p-4`}
          >
            <div data-aos={content.imageFirst ? 'fade-right' : 'fade-left'} className="w-full md:w-1/3">
              <Image src={content.imageUrl} alt={`Content image ${content.id}`} width={100} height={100}  objectFit="cover" layout="responsive" />
            </div>
            <div className="w-full md:w-1/3">
              {content.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlternatingContent;
