import { useState } from "react";

import Especialidades from "./Especialidades";
import User from "./User";


export default function Main() {
	//Info

	//Paneles
	const [showUser, setShowUser] = useState(true) //False later
	const [showEspecialidades, setShowEspecialidades] = useState(false) //False later

	const sendUser = () => {
		//La funcion de verdad
		//--------------//

		//Aca solo simulo
		setShowUser(false)
		setShowEspecialidades(true)
		//--------------//
	}

	return (
		<section className="py-16">
			<User show={showUser} sendUser={sendUser}/>
			<Especialidades show={showEspecialidades}/>
		</section>
	)
}