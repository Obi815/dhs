'use client';
import activities from '@/lib/activities'
import Image from "next/image";


export default function Activities() {
  return (
    <div className="flex overflow-x-auto gap-6 px-14 py-8">
      {activities.map((activity) => (
        <div key={activity.title} className="/* TODO: rounded-2xl, fixed width, padding, background */">
          {/* TODO: icon here */}
          {/* TODO: activity.title here */}
        </div>
      ))}
    </div>
  );
}