import React from 'react'

import styles from './Slide.module.scss'

const Slide = ({ slide }) => {
	return (
		<div className={styles.wrapper}>
			<div
				className={styles.img}
				data-swiper-parallax={`${slide.parallax}%`}
				style={{ backgroundImage: `url(${slide.img})` }}
			></div>
		</div>
	)
}

export default Slide
