function okLoveYou(){
    alert("I love you too <3");
}

function noLoves(){
    let w = Math.floor(Math.random() * window.innerWidth);
    let h = Math.floor(Math.random() * window.innerHeight);
    document.getElementById('n').style.top = h + 'px';
    document.getElementById('n').style.left = w + 'px';

}