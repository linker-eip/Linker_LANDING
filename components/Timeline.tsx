import { FaParagraph } from 'react-icons/fa6';

import React from 'react';

interface TimelineItemProps {
  title: string;
  date: string;
  side: 'left' | 'right';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, date, side }) => {
  const containerClasses = side === 'right' ? "flex-row-reverse" : "flex-row";
  const textAlignmentClasses = side === 'right' ? "text-center" : "text-center";

  return (
    <div className={`flex justify-center items-center ${containerClasses} mb-8 gap-32 md:gap-96`} data-aos={side === 'right' ? 'fade-left' : 'fade-right'}>
      <div className={`w-full px-4 ${textAlignmentClasses}`}>
        <p className="md:w-96 text-2xl font-bold text-white">{title}</p>
        <p className="text-lg text-white opacity-90">{date}</p>
      </div>
      <div className="absolute w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center"></div>
      <div className="absolute w-3 h-3 rounded-full bg-blue-200 flex items-center justify-center"></div>
      <div className="w-1/2 px-4"></div>
    </div>
  );
};

const Timeline = (): JSX.Element => {
  const events = [
    { title: "Idéation de Linker", date: "Octobre 2022", side: 'left'},
    { title: "Finalisation de l'équipe", date: "Novembre 2022", side: 'right' },
    { title: "Elaboration du Pitch", date: "Décembre 2022", side: 'left' },
    { title: "Création charte graphique", date: "Janvier 2023", side: 'right' },
    { title: "Début des maquettes", date: "Mars 2023", side: 'left' },
    { title: "Environnement de travail", date: "Avril 2023", side: 'right' },
    { title: "Bêta", date: "Mars 2024", side: 'left' },
  ];

  return (
    <div className="bg-blue-100 pb-20" id="timeline">
      <div className="container mx-auto flex flex-col items-center py-8 px-4">
        <h1 className="text-3xl text-center text-blue-200 font-bold mb-24">TIMELINE</h1>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute w-0.5 bg-white opacity-70 h-full left-1/2 transform -translate-x-1/2"></div>
          <div className="flex flex-col items-center space-y-4 md:space-y-12">
            {events.map(event => (
              <TimelineItem key={event.title} title={event.title} date={event.date} side={event.side as 'left' | 'right'} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
