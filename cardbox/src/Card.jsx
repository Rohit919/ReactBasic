import React from "react";
import "./card.css";

function Card(props) {
    return(
        <div className="card">
        <div className="card-image">
          <img src={props.cimage} alt="card-image" />
        </div>
        <div className="profile-image">
          <img src={props.pimage} alt="" />
        </div>
        <div className="card-content">
          <h3>{props.fname}</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit similique consequuntur explicabo voluptatum iure
            deleniti totam distinctio suscipit repellat magnam excepturi, ipsum
            minus beatae voluptatem exercitationem ab dolorem nostrum alias
          </p>
        </div>
        <div className="icons">
          <a href="#" className="fab fa-facebook-f" title="Facebook" />
          <a href="#" className="fab fa-instagram" title="Instagram" />
          <a href="#" className="fab fa-youtube" title="Youtube" />
          <a href="#" className="fab fa-twitter" title="Twitter" />
          <a href="#" className="fab fa-whatsapp" title="Whatsapp" />
        </div>
      </div>
    );
};

export default Card;