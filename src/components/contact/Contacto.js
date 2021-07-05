import React from "react";

export const Contacto = () => {
  return (
    <div className="contacto">
      <form>
        <label>Nombre</label>
        <input type="text" />
        <label>Correo Electronico</label>
        <input type="text" />
        <label>Asunto</label>
        <input type="text" />
        <label>Mensaje</label>
        <textarea name="mensaje" id="msg" cols="30" rows="10"></textarea>
        <button>Enviar</button>
      </form>

      <div className="social">
        <a target="_blank" href="https://twitter.com/4lub1?s=08">
          <i class="fab fa-twitter-square"></i>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/p/CP6jYMsh3wT/?utm_medium=share_sheet"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/Brimar-Suministros-Medicos-SA-de-CV-107889634770488"
        >
          <i class="fab fa-facebook-square"></i>
        </a>
      </div>
    </div>
  );
};
