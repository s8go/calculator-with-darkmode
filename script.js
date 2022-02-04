     //inner HTML of the buttons
    
     let btn =document.querySelector("#button");
     btn.innerHTML = ` <button class="sign cl" onclick="clr()">C</button>
                                         <button class="sign del" onclick="del()">DEL</button>
                                         <button class="sign div" onclick="num('(')">(</button>
                                         <button class="sign div" onclick="num(')')">)</button>
                                         <button class="sign div" onclick="num('%')">%</button>
                                         <button class="sign div" onclick="num('+')">+</button>
                                     <button class="sign add" onclick="num(1)">1</button>
                                         <button class="sign sub" onclick="num(2)">2</button>
                                         <button class="sign multi" onclick="num(3)">3</button>
                                         <button class="sign div" onclick="num('-')">-</button>
                                     <button class="number number0" onclick="num(4)">4</button>
                                     <button class="number number1" onclick="num(5)">5</button>
                                     <button class="number number2" onclick="num(6)">6</button>
                                     <button class="number number3" onclick="num('*')">*</button>
                                     <button class="number number4" onclick="num(7)">7</button>
                                     <button class="number number5" onclick="num(8)">8</button>
                                     <button class="number number6" onclick="num(9)">9</button>
                                     <button class="number number7" onclick="num('/')">/</button>
                                     <button class="number number8" onclick="num(0)">0</button>
                                     <button class="number number9" onclick="zero()">.</button>
                                     <button class="sign equal" onclick="equal()">=</button>`;

 //styling of some elements

 let body = document.querySelector("body");
     body.style = `
         background: rgb(53, 53, 53);
         height: 100%;
         padding: 2%;
     `;

     let screen = document.getElementById('screen');
     screen.style = ` height: 20%;
     padding: 2%;
     padding-inline:10%;
     width: 100%;
     display: block;
     background: rgb(100, 100, 100);
     box-shadow: 0px 0px 8px rgb(55, 55, 55), -5px -5px 5px rgb(30, 30, 30);
     color: rgb(250,250,250);
     text-align: right;
     transition: .2s;`;

 let clear = document.querySelectorAll(".cl");
     clear.forEach((x)=>{
         x.style = ` grid-column: 1/3;
         background: rgb(32, 1, 1);
         box-shadow:10px 10px 10px rgb(56, 56, 56),inset -10px -10px 10px rgb(0, 0, 0);
          color: rgb(255, 255, 255);
          `
     });

     let delet = document.querySelectorAll(".del");
     delet.forEach((x)=>{
         x.style = `grid-column: 3/5;
         color: rgb(255, 255, 255);
         background: rgb(0, 2, 31);
         box-shadow:5px 5px 5px rgb(56, 56, 56),-5px -5px 5px rgb(0, 0, 0);`});


 

   //addition of functions

 function num(x){
     
     if(screen.value.length >= 10) {
         alert("Maxlength is 10");
     } else{
          return screen.value += x;
     }
 }

 function zero(){
     if(screen.value == ""){
         return "";
     } else{
         return screen.value += "."
     }
 }

 function equal(){
     try{
     if(screen.value == ""){
         return "";
     } else{
    return screen.value = eval(screen.value)
     }
    }

    catch(err){
        alert(err.name);
        return screen.value = "";
    }
 }
 function clr(){
      screen.value = '';
 }

 function del(){
     return screen.value = screen.value.slice(0, -1);
 }

 let lightmode = document.querySelector("#lightmode");
 let dark = document.querySelector("#dark");
 let light = document.querySelector("#light");
 let number = document.querySelectorAll(".number");
 let sign = document.querySelectorAll(".sign");
 dark.style.width = "80%";
 light.style.width = "20%";
 dark.innerText = "Dark";
 light.innerText = "";

     lightmode.onclick =()=>{
         if(dark.style.width === "80%") {
             dark.style.width = "20%";
             light.style.width = "80%";
             dark.innerText = "";
             light.innerText = "Light";
             body.style.background = "rgb(183,183,183)";
             screen.style.background = "rgb(233,233,233)";
             screen.style.color = "rgb(0,0,0)";
             sign.forEach((s)=>{
                 s.classList.add("sign-light")
             });
             number.forEach((n)=>{
                 n.classList.add("number-light")
             });
         } else{
             dark.style.width = "80%";
             light.style.width = "20%";
             light.innerText = "";
             dark.innerText = "Dark";
             body.style.background = "rgb(53,53,53)";
             screen.style.background = "rgb(70,70,70)";
             screen.style.color = "rgb(250,250,250)";
             sign.forEach((s)=>{
                s.classList.remove("sign-light")
             });
             number.forEach((n)=>{
                 n.classList.remove("number-light")
             });
         }
     }