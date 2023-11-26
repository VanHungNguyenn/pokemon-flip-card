import Link from 'next/link'
import { listDifficultLevel } from '@/constants'

export default function Home() {
	return (
		<div className='flex items-center justify-center flex-col w-full h-full text-center'>
			<h1 className='text-[72px]'>Pokemon Flip card</h1>
			<p className='text-[32px] mb-10'>Select mode to start game</p>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
				{listDifficultLevel.map((item) => {
					return (
						<Link
							key={item.id}
							href={`/game?level=${item.name.toLowerCase()}`}
						>
							<button className='border w-[150px] h-[150px] cursor-pointer rounded-3xl hover:bg-gray-200 hover:text-gray-700 transition-all duration-300'>
								<div className='text-2xl mb-2'>
									{item.number} x {item.number}
								</div>
								<div className='text-2xl'>{item.name}</div>
							</button>
						</Link>
					)
				})}
			</div>
		</div>
	)
}
