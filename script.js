
 var i = 0;
document.getElementById("btn").addEventListener('click',changeColor);

function changeColor()
{
    const color=['Red','blue','green','yellow','pink','orange','black','black','gray'];
   
    document.querySelector('body').style.backgroundColor=color[i];
    i++;
    if(i==color.length-1) {
        i=0;
    }
}