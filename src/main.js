import { Application, Sprite } from "pixijs";
import logo from "./assets/img/logo.jpg";

let app = new Application({ width: 640, height: 360 });

window.document.body.appendChild(app.view);

let sprite = Sprite.from(logo);

app.stage.addChild(sprite);

window.document.getElementById("currentTemperatureTxt").innerText = "-276 ºC";