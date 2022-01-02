import { useState } from "react";
import HeroSlider from "../hero/HeroSlider";

export default function Maps( {content} ) {
	return (
		<section className="grid sm:grid-cols-2">
			<div>
				<HeroSlider content={content} display={'hidden'}/>
			</div>
		</section>
	)
}


