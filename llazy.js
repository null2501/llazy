;(function(global){
  global.$llazy = global.$lazy || new function(){
    var self = this, observer = false;
    self.update = function(obj){
      obj = obj || global.document;
			var im = obj.getElementsByClassName('llazy');
      for(var i=0;i<im.length;i++){
              var lsrc = im[i].getAttribute('data-src') || false,
              lbg = im[i].getAttribute('data-bg') || false,
              lss = im[i].getAttribute('data-srcset') || false,    
              got = im[i].getAttribute('data-got');
              if((lsrc||lbg||lss)&&(!got)) {
                im[i].setAttribute('data-got',1);
                if(observer) {
                  observer.observe(im[i]);
                } else {
                  self.load(im[i]);
                }
              }
      }
    }
    self.load = function(img){
              if(!img) return;
              var lsrc = img.getAttribute('data-src') || false,
              lbg = img.getAttribute('data-bg') || false,
              lss = img.getAttribute('data-srcset') || false;
              if(lsrc) {
                img.src = lsrc;
                img.removeAttribute('data-src');
              }
              if(lss) {
                img.srcset = lss;
                img.removeAttribute('data-srcset');
              }
              if(lbg) {
                img.style.backgroundImage = "url("+lbg+")";
                img.removeAttribute('data-bg');
              }
              img.removeAttribute('data-got');
    }
		var observerCallback = function(entries){
			entries.forEach(function(entry) {
						if(entry.intersectionRatio>=.1){
							var img = entry.target;
							self.load(img);
							observer.unobserve(img);
						}
			});
		}
    if ('IntersectionObserver' in global) {	
				var observerOptions = {
		    	root: null,
		    	rootMargin: "0px",
		    	threshold: [0.1]
		  	};
		  	observer = new IntersectionObserver(observerCallback, observerOptions);
		}
    self.update();
  }
}(window));

