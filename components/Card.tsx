import React from 'react'
import Image from 'next/image'

interface CardProps {
	src: string
}

const Card = ({ src }: CardProps) => {
	return (
		<div className='h-full w-full flex items-center justify-center cursor-pointer shadow bg-gray-700 rounded-xl'>
			<Image src={src} alt='card' fill />
		</div>
	)
}

export default Card
