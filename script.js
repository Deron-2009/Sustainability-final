const body = document.querySelector("body")
const instruction = document.querySelector("#instruction")
const formone = document.querySelector(".formone")
const formtwo = document.querySelector(".formtwo")
const formthree = document.querySelector(".formthree")
const form1 = document.querySelector("#form1")
const form2 = document.querySelector("#form2")
const form3 = document.querySelector("#form3")
const ans = document.querySelector("#ans")
const ans2 = document.querySelector("#ans2")
const ans3 = document.querySelector("#ans3")
const q1o1 = document.querySelector("#q1o1")
const q1o2 = document.querySelector("#q1o2")
const q1o3 = document.querySelector("#q1o3")
const q1o4 = document.querySelector("#q1o4")
const q2o1 = document.querySelector("#q2o1")
const q2o2 = document.querySelector("#q2o2")
const q2o3 = document.querySelector("#q2o3")
const q2o4 = document.querySelector("#q2o4")
const q3o1 = document.querySelector("#q3o1")
const q3o2 = document.querySelector("#q3o2")
const q3o3 = document.querySelector("#q3o3")
const q3o4 = document.querySelector("#q3o4")
const info = document.querySelector(".info1")
const info2 = document.querySelector(".info2")
const info3 = document.querySelector(".info3")
const empty = document.querySelector(".empty")
const empty2 = document.querySelector(".empty2")
const empty3 = document.querySelector(".empty3")

instruction.addEventListener("click",
function(){
    window.alert(" INSTRUCTIONS: This is a quiz on what you have learnt till now on this website. It includes just three questions.Try it out! If you don't succeed at the first attempt, you can always go and try again by reloading the tab. Give it a try and enjoy!!! 😊😃")
})

q1o1.addEventListener("click",
function(){
    form1.className="formclass"
    formone.style.backgroundColor="red"
    info.value="INCORRECT!!!"
    info.className="wrong"
    ans.innerText=""
    empty.innerText="🥺😭"
})
q1o2.addEventListener("click",
function(){
    form1.className="formclass"
    formone.style.backgroundColor="lime"
    info.value="CORRECT!!!"
    info.className="right"
    ans.innerText=""
    empty.innerText="😊😃"
})
q1o3.addEventListener("click",
function(){
    form1.className="formclass"
    formone.style.backgroundColor="red"
    info.value="INCORRECT!!!"
    info.className="wrong"
    ans.innerText=""
    empty.innerText="🥺😭"
})
q1o4.addEventListener("click",
function(){
    form1.className="formclass"
    formone.style.backgroundColor="red"
    info.value="INCORRECT!!!"
    info.className="wrong"
    ans.innerText=""
    empty.innerText="🥺😭"
})

q2o1.addEventListener("click",
function(){
    form2.className="formclass"
    formtwo.style.backgroundColor="lime"
    info2.value="CORRECT!!!"
    info2.className="right"
    ans2.innerText=""
    empty2.innerText="😊😃"
})
q2o2.addEventListener("click",
function(){
    form2.className="formclass"
    formtwo.style.backgroundColor="red"
    info2.value="INCORRECT!!!"
    info2.className="wrong"
    ans2.innerText=""
    empty2.innerText="🥺😭"
})
q2o3.addEventListener("click",
function(){
    form2.className="formclass"
    formtwo.style.backgroundColor="red"
    info2.value="INCORRECT!!!"
    info2.className="wrong"
    ans2.innerText=""
    empty2.innerText="🥺😭"
})
q2o4.addEventListener("click",
function(){
    form2.className="formclass"
    formtwo.style.backgroundColor="red"
    info2.value="INCORRECT!!!"
    info2.className="wrong"
    ans2.innerText=""
    empty2.innerText="🥺😭"
})

q3o1.addEventListener("click",
function(){
    form3.className="formclass"
    formthree.style.backgroundColor="lime"
    info3.value="CORRECT!!!"
    info3.className="right"
    ans3.innerText=""
    empty3.innerText="😊😃"
})
q3o2.addEventListener("click",
function(){
    form3.className="formclass"
    formthree.style.backgroundColor="red"
    info3.value="INCORRECT!!!"
    info3.className="wrong"
    ans3.innerText=""
    empty3.innerText="🥺😭"
})
q3o3.addEventListener("click",
function(){
    form3.className="formclass"
    formthree.style.backgroundColor="red"
    info3.value="INCORRECT!!!"
    info3.className="wrong"
    ans3.innerText=""
    empty3.innerText="🥺😭"
})
q3o4.addEventListener("click",
function(){
    form3.className="formclass"
    formthree.style.backgroundColor="red"
    info3.value="INCORRECT!!!"
    info3.className="wrong"
    ans3.innerText=""
    empty3.innerText="🥺😭"
})