function closest(el, fn) {
    return el && (fn(el) ? el : closest(el.parentNode, fn));
}



function closeLastOpenPopUp() {
	var popUp = document.querySelector("pop-up.open");
    if(popUp){
    	popUp.close();
    }
}



var PopupPrototype = Object.create(HTMLElement.prototype);
PopupPrototype.createdCallback = function() {
    var self = this;

    // PRIVATE VARS ------------------------------------

    var _isOpen = false;
    	_globalName = this.getAttribute('data-id');


    // end PRIVATE VARS --------------------------------

    

    // PROPERIES ---------------------------------------

    this.name = 'pop-up'

    // end PROPERIES -----------------------------------



    // INIT --------------------------------------------

    function init(){
        if(_globalName) try {
            _globalName = _globalName.replace(/-([a-z])/g, _upper );
            _globalName = _globalName.replace(_globalName[0], _globalName[0].toUpperCase() );
            
            if(window['popUp' + _globalName]){
                throw new Error('Name for "ct-pop-up" must be unique!');
            }
            
            window['popUp' + _globalName] = self;

        } catch (e) {
            console.log(e.name + ': ' + e.message, self);
        }
    }

    // end INIT ----------------------------------------



    // EVENTS ------------------------------------------

    this.addEventListener('click', function(event) {
        e = event || window.event;
        if (e.target == self) {
            self.close();
        }
    });

    // end EVENTS --------------------------------------



    // METHODS -----------------------------------------

  	this.open = function(){
    	self._isOpen = true;
        self.classList.add("open");
        document.querySelector('body').style.overflow = 'hidden';
    }

    this.close = function(){
    	self._isOpen = false;
        self.classList.remove("open");
        document.querySelector('body').style.overflow = 'auto';
    }

    // end METHODS -------------------------------------

    init(); 
};
var Popup = document.registerElement('pop-up', {prototype: PopupPrototype});









var ContentPopupPrototype = Object.create(HTMLElement.prototype);
ContentPopupPrototype.createdCallback = function() {
  	this.name = 'pop-up-content'

};
var ContentPopup = document.registerElement('pop-up-content',{prototype: ContentPopupPrototype});









var ClosePopupPrototype = Object.create(HTMLElement.prototype);
ClosePopupPrototype.createdCallback = function() {
  	this.name = 'pop-up-close'

	// EVENTS ------------------------------------------

    this.addEventListener('click', function(e) {
        closest(this, function(el) {return el.tagName === 'POP-UP'}).close();
    });

    // end EVENTS --------------------------------------
    
};
var ClosePopup = document.registerElement('pop-up-close',{prototype: ClosePopupPrototype});









var OpenPopupPrototype = Object.create(HTMLElement.prototype);
OpenPopupPrototype.createdCallback = function() {
  	this.name = 'pop-up-open'

	// EVENTS ------------------------------------------

    this.addEventListener('click', function(event) {
        var id = this.getAttribute('data-id');
        var popUp = document.querySelector('pop-up[data-id="'+id+'"]');
        
        if(popUp != undefined){
           popUp.open();
        }
    });

    // end EVENTS --------------------------------------
    
};
var OpenPopup = document.registerElement('pop-up-open',{prototype: OpenPopupPrototype});
