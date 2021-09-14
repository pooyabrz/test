let usname=document.getElementById("usname")
let pass=document.getElementById("pass")
let sel=document.getElementById("site-name")
let savebtn=document.getElementById("save")
let passicon=document.querySelector(".fa-eye")
sel.addEventListener("change",add)
function add(){
    if (sel.value === "random") {
        let input = document.createElement("input")
        let op = document.createElement("option")
        let div = document.querySelector(".main__form")
        sel.appendChild(op)
        div.appendChild(input)
        input.addEventListener("focusout", inh)
        function inh() {
            op.innerHTML = input.value
            input.style.display="none"
        }
    }
}
passicon.addEventListener("click",change)
function change(){
    if (pass.type==="text"){
        pass.type="password"
    }else {
        pass.type="text"
    }
}
savebtn.addEventListener("click",saving)
function saving(e){
    e.preventDefault()
    if (usname.value!=="",pass.value!=="") {

        let tr = document.createElement("tr")
        let username = document.createElement("td")
        username.innerHTML=usname.value
        let password= document.createElement("td")
        let icon=document.createElement("i")
        icon.className="fas fa-eye"
        password.innerText = "*".repeat(pass.value.length)
        password.style.color="black"
        let sitename=document.createElement("td")
        sitename.innerHTML=sel.options[sel.selectedIndex].text
        let table= document.querySelector("table")
        table.appendChild(tr)
        tr.appendChild(username)
        tr.appendChild(password)
        tr.appendChild(sitename)
        password.appendChild(icon)
        icon.addEventListener("click",hide)

        password.dataset.value = pass.value;

        function hide() {
            if (password.style.color==="red") {
                password.innerText = "*".repeat(password.dataset.value.length)
                password.style.color="black"
                password.appendChild(icon)
            }else{
                password.innerHTML=password.dataset.value
                password.style.color="red"
                password.appendChild(icon)
            }
        }
        document.forms["form"].reset()
    }else if (usname.value==="") {
        usname.focus()
    }else{
        pass.focus()
    }
}
