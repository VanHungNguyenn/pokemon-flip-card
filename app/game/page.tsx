'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { listDifficultLevel, imgCards, imgIconBack } from '@/constants'
import Card from '@/components/Card'

const Game = () => {
	const searchParams = useSearchParams()
	const level = searchParams.get('level')
	const numberCol =
		listDifficultLevel.find((item) => item.name.toLowerCase() === level)
			?.number ?? 4

	const [cards, setCards] = useState<
		{
			src: string
			isFlipped: boolean
			canFlip: boolean
		}[]
	>([])

	console.log(numberCol)

	useEffect(() => {
		const initializeCards = () => {
			const totalCards = numberCol * numberCol

			const selectedImages = imgCards
				.toSorted(() => 0.5 - Math.random())
				.slice(0, totalCards / 2)

			const unshuffledCards = [...selectedImages, ...selectedImages].map(
				(item) => ({
					src: item.src,
					isFlipped: false,
					canFlip: true,
				})
			)

			const shuffledCards = unshuffledCards.toSorted(
				() => 0.5 - Math.random()
			)

			setCards(shuffledCards)
		}

		if (numberCol) {
			initializeCards()
		}
	}, [numberCol])

	return (
		<div className='flex-1 flex items-center py-12 flex-col h-full'>
			<div className={`grid grid-cols-${numberCol} gap-2 h-full`}>
				{cards.map((item, index) => (
					<div key={index} className='aspect-square w-full bg-red-50'>
						Hahaaha
					</div>
				))}
			</div>
		</div>
	)
}

export default Game
