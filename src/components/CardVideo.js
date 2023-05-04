import React from "react";
import InfosUsuario from "./InfosUsuario";

function CardVideo(props) {
    const video = props.video;

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }
    return (
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src={props.video.imagem} alt="" />
            <h4>{props.video.titulo}</h4>
            <InfosUsuario usuario={props.video.usuario} />
        </div>
    )

}

export default CardVideo;