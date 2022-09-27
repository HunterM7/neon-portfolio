import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Controller, FreeMode } from 'swiper'
import SwiperCore, {
	Mousewheel,
	Parallax,
} from 'swiper/core'

import './App.scss'
import 'swiper/css'

import Slide from './components/Slide/Slide'

SwiperCore.use([Mousewheel, Parallax])

function App() {
	const [controlledSwiper, setControlledSwiper] =
		useState(null)

	const db = [
		{
			text: `111 Lorem ipsum dolor sit amet consectetur
		adipisicing elit. Culpa tenetur magnam quod
		dolorum perspiciatis cum repudiandae
		necessitatibus, nostrum sapiente. Fugit fuga natus
		asperiores deleniti a iste quisquam tempore
		commodi velit?`,
			img: '/images/1.jpg',
			parallax: 20,
		},
		{
			text: `222 Lorem ipsum dolor sit amet consectetur
		adipisicing elit. Culpa tenetur magnam quod
		dolorum perspiciatis cum repudiandae
		necessitatibus, nostrum sapiente. Fugit fuga natus
		asperiores deleniti a iste quisquam tempore
		commodi velit?`,
			img: '/images/2.jpg',
			parallax: 20,
		},
		{
			text: `333 Lorem ipsum dolor sit amet consectetur
		adipisicing elit. Culpa tenetur magnam quod
		dolorum perspiciatis cum repudiandae
		necessitatibus, nostrum sapiente. Fugit fuga natus
		asperiores deleniti a iste quisquam tempore
		commodi velit?`,
			img: '/images/3.jpg',
			parallax: 20,
		},
	]

	const slides = db.map((slide) => {
		return (
			<SwiperSlide tag='li'>
				<Slide slide={slide} />
			</SwiperSlide>
		)
	})

	return (
		<div className='App'>
			<Swiper
				tag='section'
				className='slider'
				wrapperTag='ul'
				freeMode={true}
				modules={[FreeMode, Controller]}
				centeredSlides={true}
				mousewheel={true}
				parallax={true}
				controller={{ control: controlledSwiper }}
				breakpoints={{
					0: {
						slidesPerView: 2.5,
						spaceBetween: 20,
					},
					680: {
						slidesPerView: 3.5,
						spaceBetween: 60,
					},
				}}
			>
				{slides}
			</Swiper>

			<Swiper
				tag='section'
				className='slider--bg'
				wrapperTag='ul'
				modules={[Controller]}
				centeredSlides={true}
				parallax={true}
				spaceBetween={60}
				slidesPerView={3.5}
				onSwiper={setControlledSwiper}
			>
				{slides}
			</Swiper>
		</div>
	)
}

export default App
