//Vars
let tit = document.querySelector(".title")
let turn = 'x'
let square = []
var xUser = prompt("Please enter X name: ") 
var oUser = prompt("Please enter O name: ") 
//win function
let win = (num1,num2,num3) =>{
    let hasName = (square[num1] === 'x') ? xUser : oUser;
    tit.innerHTML = `${hasName} is the winner`
        document.getElementById(`item${num1}`).style.background ="blueviolet"
        document.getElementById(`item${num2}`).style.background ="blueviolet"
        document.getElementById(`item${num3}`).style.background ="blueviolet"

        setInterval(() => {tit.innerHTML +='.'}, 1000);

        setTimeout(()=>{location.reload()},4000)
}

//winner function
let winner = () =>{
    for(let i = 1; i < 10; i++){
    square[i] = document.getElementById(`item${i}`).innerHTML
    }
if(square[1]==square[2]&& square[2]==square[3] && square[1] !=''){
    win(1,2,3)
}else if(square[4]==square[5]&& square[5]==square[6] && square[4] !=''){
    win(4,5,6)
}
else if(square[7]==square[8]&& square[8]==square[9] && square[7] !=''){
    win(7,8,9)
}else if(square[1]==square[4]&& square[4]==square[7] && square[1] !=''){
    win(1,4,7)
}else if(square[2]==square[5]&& square[5]==square[8] && square[2] !=''){
    win(2,5,8)
}else if(square[3]==square[6]&& square[6]==square[9] && square[3] !=''){
    win(3,6,9)
}else if(square[1]==square[5]&& square[5]==square[9] && square[1] !=''){
    win(1,5,9)
}else if(square[3]==square[5]&& square[5]==square[7] && square[3] !=''){
    win(3,5,7)
}
}

//handelGame function
let handelGame = (id) =>{
    let ele = document.getElementById(id)
    if(turn === 'x' && ele.innerHTML ==="" ){
        ele.innerHTML = 'x'
        turn = 'o'
        tit.innerHTML = oUser
        tit.setAttribute("style", " color: blueviolet; font-weight: 500; font-size : 20px"); 
    
    }else if(turn === 'o' && ele.innerHTML ==="" ){
        ele.innerHTML = 'o'
        turn = 'x'
        tit.innerHTML = xUser
        tit.setAttribute("style", " color: blueviolet; font-weight: 500; font-size : 20px"); 
    }
    winner()
}
//تم بحمد الله
