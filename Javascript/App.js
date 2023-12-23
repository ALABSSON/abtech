
window.onload = function(){
	setTimeout(function(){
	const loader = document.getElementsByClassName("loader")[0];
	loader.className="loader fadeout" ;
	setTimeout(function(){loader.style.display="none"},100)
        const Header = document.querySelector('.Header')
            Header.style.position = 'sticky'
	},1000) 

}//强制显示loading page 1s///////////////////// Header Start ////////////////////

const MenuDiv = document.querySelector('#MenuDiv2')
const Show =  document.querySelector('.Show')
const Close =  document.querySelector('.Close')
const AcctClick =  document.querySelector('.AcctClick')
const ShowAccount =  document.querySelector('.ShowAccount')
const AcctClick2 =  document.querySelector('.AcctClick2')


Show.onclick=()=>{
    MenuDiv.style.display = 'flex'
    Close.style.display = 'flex'
    Show.style.display = 'none'
    ShowAccount.style.display = 'none'
    AcctClick.style.display = 'flex'
    AcctClick2.style.display = 'none'
}

Close.onclick=()=>{
    MenuDiv.style.display = 'none'
    Close.style.display = 'none'
    Show.style.display = 'flex'
}

AcctClick.onclick=()=>{
    ShowAccount.style.display = 'flex'
    AcctClick.style.display = 'none'
    AcctClick2.style.display = 'flex'
    MenuDiv.style.display = 'none'
    Show.style.display = 'flex'
    Close.style.display = 'none'
}

AcctClick2.onclick=()=>{
    ShowAccount.style.display = 'none'
    AcctClick.style.display = 'flex'
    AcctClick2.style.display = 'none'
}

///////////////////// Header end ////////////////////

///////////////////// Section One Start ////////////////////

const homebgimg = document.getElementById('homebgimg')
const homebgimg2 = document.getElementById('homebgimg2')
const homebgimg3 = document.getElementById('homebgimg3')
const homebgimg4 = document.getElementById('homebgimg4')

const Circle1 = document.getElementById('Circle1')
const Circle2 = document.getElementById('Circle2')
const Circle3 = document.getElementById('Circle3')
const Circle4 = document.getElementById('Circle4')

const FirstText1 = document.querySelector('.FirstText1')
const FirstText2 = document.querySelector('.FirstText2')
const FirstText3 = document.querySelector('.FirstText3')
const FirstText4 = document.querySelector('.FirstText4')

const SecondText1 = document.querySelector('.SecondText1')
const SecondText2 = document.querySelector('.SecondText2')
const SecondText3 = document.querySelector('.SecondText3')
const SecondText4 = document.querySelector('.SecondText4')


Circle1.onclick =()=> {
    homebgimg.style.display = 'flex'
    FirstText1.style.display = 'flex'
    SecondText1.style.display = 'flex'
    
    homebgimg2.style.display = 'none'
    FirstText2.style.display = 'none'
    SecondText2.style.display = 'none'

    homebgimg3.style.display = 'none'
    FirstText3.style.display = 'none'
    SecondText3.style.display = 'none'

    homebgimg4.style.display = 'none'
    FirstText4.style.display = 'none'
    SecondText4.style.display = 'none'
}

Circle2.onclick =()=> {
    homebgimg.style.display = 'none'
    FirstText1.style.display = 'none'
    SecondText1.style.display = 'none'
    
    homebgimg2.style.display = 'flex'
    FirstText2.style.display = 'flex'
    SecondText2.style.display = 'flex'

    homebgimg3.style.display = 'none'
    FirstText3.style.display = 'none'
    SecondText3.style.display = 'none'

    homebgimg4.style.display = 'none'
    FirstText4.style.display = 'none'
    SecondText4.style.display = 'none'
}

Circle3.onclick =()=> {
    homebgimg.style.display = 'none'
    FirstText1.style.display = 'none'
    SecondText1.style.display = 'none'
    
    homebgimg2.style.display = 'none'
    FirstText2.style.display = 'none'
    SecondText2.style.display = 'none'

    homebgimg3.style.display = 'flex'
    FirstText3.style.display = 'flex'
    SecondText3.style.display = 'flex'

    homebgimg4.style.display = 'none'
    FirstText4.style.display = 'none'
    SecondText4.style.display = 'none'
}

Circle4.onclick =()=> {
    homebgimg.style.display = 'none'
    FirstText1.style.display = 'none'
    SecondText1.style.display = 'none'
    
    homebgimg2.style.display = 'none'
    FirstText2.style.display = 'none'
    SecondText2.style.display = 'none'

    homebgimg3.style.display = 'none'
    FirstText3.style.display = 'none'
    SecondText3.style.display = 'none'

    homebgimg4.style.display = 'flex'
    FirstText4.style.display = 'flex'
    SecondText4.style.display = 'flex'
}

