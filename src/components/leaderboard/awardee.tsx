import React from 'react'
import Image from '../image';

const Awardee = ({
    name,
    points,
    rank,
    image,
}: {
    name: string;
    points: number;
    rank: number;
    image: string;
}) => {
  return (
    <div className='py-4 px-10 bg-black-pearl rounded-xl flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <p>{rank}</p>
        <Image src={image} alt="" className="w-5 h-5" />
        <p>{name}</p>
      </div>
      <div className='flex items-center gap-2.5'>
        <p>{points}pts</p>
        <Image src="/assets/svgs/gold-medal.svg" alt="" className="w-5 h-4" />
      </div>
    </div>
  )
}

export default Awardee
