window.onload = function(){
    var oUl = document.getElementById('list');
    var aLi = oUl.getElementsByTagName('li');
    var aLink = oUl.getElementsByTagName('a');
    var aImg = oUl.getElementsByClassName('icon');
    var aCont= oUl.getElementsByTagName('p');
    var oBlog = document.getElementById('blog');
    var disT = 4;

    for(var i=0;i<aImg.length;i++){
        aImg[i].onmouseover = function(){
//            aCont[i].addClass("show");alert('fdsaf');
            aCont[i].className += "show";
            this.offsetHeight = this.clientHeight - disT + 'px'; 
            aCont[i].offsetHeight = aCont[i].clientHeight - disT + 'px';
        }
        aImg[i].onmouseout = function(){
            aCont[i].className+="hidden";
            this.offsetHeight = this.clientHeight + disT + 'px';
            aCont[i].offsetHeight = aCont[i].clientHeight + disT + 'px';
        }
    }
    
    
    
    
    
    
}





