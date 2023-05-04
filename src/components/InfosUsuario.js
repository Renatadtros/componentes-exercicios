import React from "react";

function InfosUsuario(props) {
return (
    <p><img className="avatarImg" src={props.usuario.avatar}/> {props.usuario.nome} </p>
    )

}

export default InfosUsuario;