import obj from "./one"
import img from "./1.jpg"
import "./index"
import Vue from "vue"
import App from "./App"
import page1 from "./page1"
import router from "./src/router/index"



new Vue({
    components: {
        App,
        page1
    },
    el:"#app",
    data:{

    },
    router,
    template:"<App/>"
})

document.querySelector("h1").innerHTML = obj.text
var myImg = document.createElement("img");
myImg.src = img;
document.querySelector("#container").appendChild(myImg)
