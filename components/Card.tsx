import React from 'react'
import Image from 'next/image'

interface CardProps {
	src: string
}

const Card = ({ src }: CardProps) => {
	return (
		<div
			className='w-[150px] h-[200px] flex items-center justify-center cursor-pointer shadow bg-gray-700 rounded-xl'
			style={{
				boxShadow: '0 3px 18px 3px rgba(0,0,0,.2);',
			}}
		>
			<Image
				src={src}
				alt='card'
				width={100}
				height={100}
				className='w-[80%] h-auto'
			/>
		</div>
	)
}

export default Card
