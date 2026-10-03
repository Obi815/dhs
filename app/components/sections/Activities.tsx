'use client';
import activities from '@/lib/activities'
import Image from "next/image";


export default function Activities() {
  return (
    <div className="">
      {/* TODO: Add Title for Page */}
      <div className="flex overflow-x-auto gap-4 px-14 py-8">
        {activities.map((activity) => (
          <div key={activity.title} className="rounded-t-2xl w-100 shrink-0 bg-white h-70 overflow-hidden">
            <div className="relative w-full h-70 bg-blue-300">
              <Image
                src={activity.photo}
                alt={activity.title}
                fill
                className='object-cover grayscale '
              />
              <div className="absolute inset-0 bg-blue-600/40" />

              <div className="absolute inset-0 bg-emeral-600">
                <div className="absolute top-3 left-3 w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center">
                    <Image
                      src={activity.icon}
                      alt={activity.title}
                      width={50} height={50}
                      className=''
                    />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}