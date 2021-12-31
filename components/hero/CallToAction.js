export default function CallToAction() {
	return(
		<div className="sticky right-0 top-[80vh] z-50 leading-tight text-center">
			<div className=" bg-darkBlue p-2 rounded-l-lg flex items-center">
				<img className="h-8 mr-2" src="/images/icons/whap.png"/>
				<p className="text-white uppercase ">Habla con <br/> Nosotros</p>
			</div>
			<div className="mt-2 bg-darkBlue p-2 rounded-l-lg flex items-center">
				<img className="h-8 mr-2" src="/images/icons/card.svg"/>
				<p className="text-white uppercase font-semibold">Contrata <br/> EPS Card</p>
			</div>
		</div>
	)
}