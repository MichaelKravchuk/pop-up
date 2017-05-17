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

	var _isOpen = false,
		_globalName = this.getAttribute('data-id');


	// end PRIVATE VARS --------------------------------

	

	// PROPERIES ---------------------------------------

	this.name = 'pop-up';

	// end PROPERIES -----------------------------------



	// INIT --------------------------------------------

	function init(){
		if(_globalName) try {
			_globalName = _globalName.replace(/-([a-z])/g, _upper );
			_globalName = _globalName.replace(_globalName[0], _globalName[0].toUpperCase() );
			
			if(window['popUp' + _globalName]){
				throw new Error('Attribute data-id for "ct-pop-up" must be unique!');
			}
			
			window['popUp' + _globalName] = self;

		} catch (e) {
			console.error(e.name + ': ' + e.message, self);
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

	this.open = function(callback){
		self._isOpen = true;
		self.classList.add("open");
		document.querySelector('body').style.overflow = 'hidden';
		if(callback && typeof callback === 'function') callback(); 
	}

	this.close = function(callback){
		self._isOpen = false;
		self.classList.remove("open");
		document.querySelector('body').style.overflow = 'auto';
		if(callback && typeof callback === 'function') callback(); 
	}

	// end METHODS -------------------------------------



	// PRIVATE METHODS ---------------------------------

	var _upper = function(word) {
		return word[1].toUpperCase();
	}

	// end PRIVATE METHODS -----------------------------



	init(); 
};
var Popup = document.registerElement('pop-up', {prototype: PopupPrototype});









var ContentPopupPrototype = Object.create(HTMLElement.prototype);
ContentPopupPrototype.createdCallback = function() {
	
	// PROPERIES ---------------------------------------

	this.name = 'pop-up-content'

	// end PROPERIES -----------------------------------

};
var ContentPopup = document.registerElement('pop-up-content',{prototype: ContentPopupPrototype});









var PopupClosePrototype = Object.create(HTMLElement.prototype);
PopupClosePrototype.createdCallback = function() {
	
	// PROPERIES ---------------------------------------

	this.name = 'pop-up-close'

	// end PROPERIES -----------------------------------


	// EVENTS ------------------------------------------

	this.addEventListener('click', function(e) {
		closest(this, function(el) {return el.tagName === 'POP-UP'}).close();
	});

	// end EVENTS --------------------------------------
	
};
var ClosePopup = document.registerElement('pop-up-close',{prototype: PopupClosePrototype});









var PopupOpenPrototype = Object.create(HTMLElement.prototype);
PopupOpenPrototype.createdCallback = function() {
	var self = this;



	// PRIVATE VARS ------------------------------------

	var _id = this.getAttribute('data-id');


	// end PRIVATE VARS --------------------------------


	
	// PROPERIES ---------------------------------------

	this.name = 'pop-up-open'

	// end PROPERIES -----------------------------------



	// EVENTS ------------------------------------------

	this.addEventListener('click', function(event) {
		var popUp = document.querySelector('pop-up[data-id="' + _id + '"]');
		
		try {
			if(popUp != undefined){
			   popUp.open();
			} else{
				throw new Error('Pop-Up with data-id "' + _id + '" not found!');
			}
		} catch (e) {
			console.error(e.name + ': ' + e.message, self);
		}
	   
	});

	// end EVENTS --------------------------------------
	
};
var OpenPopup = document.registerElement('pop-up-open',{prototype: PopupOpenPrototype});
