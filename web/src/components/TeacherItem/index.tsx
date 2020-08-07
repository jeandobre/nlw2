import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
	return (
		<article className="teacher-item">
			<header>
				<img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
				<div>
					<strong>Jean Alexandre</strong>
					<span>Química</span>
				</div>
			</header>
			<p>
				Texto texto
				<br /><br />
				Texto texto
			</p>

			<footer>
				<p>
					Preço/hora
					<strong>R$ 80,00</strong>
				</p>
				<button type="button">
					<img src={whatsappIcon} alt="Whatsapp" />
					Entrar em contato
				</button>
			</footer>
		</article>
	);
}

export default TeacherItem;