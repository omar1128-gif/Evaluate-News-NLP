import { handleSubmit } from "./js/formHandler";
import { validateURL } from "./js/URLValidator";

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

import logoImage from "./img/logo.png";

document.getElementById("logo").src = logoImage;

export { handleSubmit, validateURL };
