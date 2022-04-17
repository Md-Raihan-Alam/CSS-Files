let slider=document.querySelector('.image-slider');
    let div=document.createElement('div');
    let img=document.querySelector('#previousImage');
    slider.insertBefore(img,div);

    let range=document.createElement('input');
    range.type="range";
    range.addEventListener('input',function(){
        div.style.width=this.value+'%';
    });
    slider.appendChild(range);
