'use client';
import activities from '@/lib/activities'
import Image from "next/image";


export default function Activities() {
  return (
    <div id='activities' className="pb-10 bg-linear-to-b from-orange-100 to-white">
      {/* TODO: Add Title for Page */}
      <div className='pt-10 pb-4 text-center'>
        <h1 className='text-5xl font-semibold p-4 mt-8'>Activities We Provide</h1>
        <p className="text-2xl pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, illo?</p>
      </div>
      <div className="flex overflow-x-auto gap-8 [scrollbar-width:none] mx-14 py-8">
        {activities.map((activity) => (
          //* creating the card 
          <div key={activity.title} className="rounded-2xl w-100 shrink-0 bg-white overflow-hidden shadow-lg">

            {/* Background Photo on card  */}
            <div className="relative w-full h-50 bg-blue-300">
              <Image
                src={activity.photo}
                alt={activity.title}
                fill sizes='400px'
                className='object-cover object-top grayscale'
              />
              <div className="absolute inset-0 bg-blue-600/40" />

              {/* Icon on cards in top left courner */}
                <div className="absolute top-3 left-3 w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center">
                    <Image
                      src={activity.icon}
                      alt={activity.title}
                      width={50} height={50}
                      className=''
                    />
                </div>
            </div>
            {/* Card Info HERE */}
            <div className="p-4">
              <h3 className="font-bold text-lg text-sky-500">{activity.title}</h3>

              {/* List of Activities */}
              <ul className='list-disc pl-5 text-base mt-2'>
                {activity.examples.map((example) =>(
                  <li className='p-1.5' key={example}>{example}</li>
                ))}
              </ul>

              {/* Note, Only shows if the activity HAS one */}
              {activity.note && (
                <p className="text-xs italic mt-3 text-gray-500">{activity.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}