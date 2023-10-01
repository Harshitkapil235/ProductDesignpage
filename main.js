document.addEventListener('DOMContentLoaded', ()=>{
    const images = ["1.png", "2.png", "3.png","4.png"];
    let right = document.getElementById("right")
    let left = document.getElementById("left")
    let image = document.getElementById("image")
    let heart = document.getElementById("heart")
    let wishlist = document.getElementById("wishlist")
    let btn = document.getElementsByClassName("btn1")
    let swipe = new Audio("swipe.mp3")
    let index = 0
    heart.addEventListener('click', ()=>{
        if(heart.style.color==="white"){
            heart.style.color="red"
            heart.style.background="white"
            wishlist.style.display="block"
            setTimeout(() => {
                wishlist.style.display="none"
            }, 1500);
        }
        else{
            heart.style.color="white"
            heart.style.background="red"
        }
    })
    right.addEventListener('click' , ()=>{
        swipe.play();
    if(index=== images.length - 1){
        index=0;
    }
    else{
        index++
    }
    image.src=images[index];
for(bt of btn){
    bt.classList.remove("active")
    btn[index].classList.add("active")
}
    })

    left.addEventListener('click' , ()=>{
        swipe.play();
    if(index===0){
        index=images.length-1;
    }
    else{
        index--
    }
    for(bt of btn){
        bt.classList.remove("active")
        btn[index].classList.add("active")
    }
    image.src=images[index];
    })
})
