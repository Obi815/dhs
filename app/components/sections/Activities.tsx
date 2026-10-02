'use client';
import activities from '@/lib/activities'
import Image from "next/image";


export default function Activities() {
  return (
    <div className="">
      {/* TODO: Add Title for Page */}
      <div className="flex overflow-x-auto gap-4 px-14 py-8">
        {activities.map((activity) => (
          <div key={activity.title} className="rounded-2xl w-64 p-6 m-auto bg-white justify-items-center">
            <Image 
              src={activity.icon} 
              alt={activity.title} 
              width={48} height={48}
            />
            {/* TODO: activity.title here */}
          </div>
        ))}
      </div>
    </div>
  );
}