function drag(obj,_obj1,_obj2,min,max,default_) {

    obj.onmousedown = function(ev) {
        var ev = ev || event;

        var disX = ev.clientX - this.offsetLeft;

        if ( obj.setCapture ) {
            obj.setCapture();
        }
        document.onmousemove = function(ev) {
            var ev = ev || event;

            var L = ev.clientX - disX;

            if ( L < min ) {
                L = min;
            } else if ( L > max ) {
                L = max;
            }

            obj.style.left = L + 'px';
            if(L-default_>0){
                _obj1.css("opacity",Math.abs(L-default_)/(max-default_)*1);
                _obj2.css("opacity",1-Math.abs(L-default_)/(max-default_)*1);
            }else{
                _obj1.css("opacity",Math.abs(L-default_)/(default_-min)*1);
                _obj2.css("opacity",1-Math.abs(L-default_)/(max-default_-min)*1);
            }

        }

        document.onmouseup = function() {
            document.onmousemove = document.onmouseup = null;
            if ( obj.releaseCapture ) {
                obj.releaseCapture();
            }
        }

        return false;

    }

}



function drag1(obj,_obj1,min,max,default_) {

    obj.onmousedown = function(ev) {
        var ev = ev || event;

        var disX = ev.clientX - this.offsetLeft;

        if ( obj.setCapture ) {
            obj.setCapture();
        }
        document.onmousemove = function(ev) {
            var ev = ev || event;

            var L = ev.clientX - disX;

            if ( L < min ) {
                L = min;
            } else if ( L > max ) {
                L = max;
            }

            obj.style.left = L + 'px';
            if(L-default_>0){
                //Math.abs(L-default_)/(max-default_)
                _obj1.css("width",50+Math.abs(L-default_)/(max-default_)*100+"%");
            }else{
                _obj1.css("width",50-Math.abs(L-default_)/(default_-min)*100+"%");
            }

        }

        document.onmouseup = function() {
            document.onmousemove = document.onmouseup = null;
            if ( obj.releaseCapture ) {
                obj.releaseCapture();
            }
        }

        return false;

    }

}