let title = document.querySelector('.tittle')
let turn = 'x'
let squre = []
function game(id){
    let elment = document.getElementById(id)
if(turn=== 'x' &&  elment.innerHTML == '')
{
    elment.innerHTML = 'x'
    turn = 'o'
    title.innerHTML = 'o role'
}else if(turn=== 'o' &&  elment.innerHTML == '')
{
    elment.innerHTML = 'o'
    turn = 'x'
    title.innerHTML = 'x role'

}
winner();
}

function end(num1,num2,num3)
    {
        title.innerHTML = `${squre[num1]} winner`
        document.getElementById('item'+num1).style.background = '#000';
        document.getElementById('item'+num2).style.background = '#000'
        document.getElementById('item'+num3).style.background = '#000'
        setInterval(function(){title.innerHTML += '.'},1000)
        setInterval(function(){location.reload()},4000)
}

function winner(){
for(let i = 1 ; i<10 ; i++)
{
   squre[i] = document.getElementById('item' + i).innerHTML
}
if(squre[1] == squre[2] && squre[2] == squre[3] && squre[1]!=''){
end(1,2,3)
}

else if(squre[4] == squre[5] && squre[5] == squre[6] && squre[4]!='')
{
end(4,5,6)
}else if(squre[7] == squre[8] && squre[8] == squre[9] && squre[7]!=''){
end(7,8,9)
}else if(squre[1] == squre[4] && squre[4] == squre[7] && squre[1]!='')
{
end(1,4,7)
}else if(squre[2] == squre[5] && squre[5] == squre[8] && squre[2]!=''){
end(2,5,8)
}else if(squre[3] == squre[6] && squre[6] == squre[9] && squre[3]!='')
{
end(3,6,9)
}else if(squre[1] == squre[5] && squre[5] == squre[9] && squre[5]!='')
{
end(1,5,9)
}else if(squre[3] == squre[5] && squre[5] == squre[7] && squre[3]!=''){
end(3,5,7)
}

}