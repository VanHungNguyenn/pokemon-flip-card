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

	if (!numberCol) {
		return <div>Level not found</div>
	}

	return (
		<div className='flex items-center pt-10 flex-col w-full h-full text-center'>
			<div className={`grid grid-cols-${numberCol} gap-3`}>
				{cards.map((item, index) => (
					<div key={index}>
						<Card
							src={item.isFlipped ? item.src : imgIconBack.src}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default Game
