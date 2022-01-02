export default function CallToAction() {
	return(
		<div className="relative">
			<div className="fixed right-0 top-[80vh] z-50 leading-tight text-center">
				<div className=" bg-darkBlue p-2 rounded-l-lg flex items-center">
					<img className="h-8 mr-2" src="/images/icons/whap.png"/>
					<p className="text-white uppercase ">Habla con <br/> Nosotros</p>
				</div>
				<div className="mt-2 bg-darkBlue p-2 rounded-l-lg flex items-center">
					<img className="h-8 mr-2" src="/images/icons/cardWhite.svg"/>
					<p className="text-white uppercase font-semibold">Contrata <br/> EPS Card</p>
				</div>
			</div>
			<div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50">
				<div className="bg-darkBlue py-4 px-8 rounded-t-lg">
					<p className="text-white uppercase font-semibold">Aseguradoras</p>
				</div>
			</div>
		</div>
	)
}