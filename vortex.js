/*
@author Espen Gjendem <espen.gjendem@gmail.com>
@version 0.1

This is not supposed to be used in production environments for bigger web applications.
I just made this little front-end library to make it easier to read and save data 
directly on the "Vortex" DOM element.

Maybe I'll make something more robust in the future. But just try it out.
Documentation will be available on Github later on.

*/

(function(window) {
    window.vortex = {
        elements: [],
        addAndReturnElement: function(x) {
            this.elements.push(x)

            return x
        }
    }

    window.vortex.__proto__ = Vortex.prototype

    Vortex.prototype.returnMyElement = function() {
        return this.element
    }
    Vortex.prototype.hide = function() {
        this.element.style.display = 'none'
    }
    Vortex.prototype.show = function() {
        this.element.style.display = 'block'
    }
    Vortex.prototype.click = function(cb) {
        this.element.addEventListener('click', cb)
    }
    Vortex.prototype.data = function(key, value) {
        return (value) ? this.element.dataset[key] = value : this.element.dataset[key]
    }
    Vortex.prototype.class = function(value) {
        this.element.className = value
    }

    function Vortex(x) {
        this.element = x
    }

    window.vx = function(x) {
        var element = window.vortex.elements.find(function(e) {
            return e.element == window.document.getElementById(x)
        }) || window.document.getElementById(x)

        if (element instanceof Vortex) {
            return element
        } else if (element) {
            return window.vortex.addAndReturnElement(new Vortex(element))
        }

        element = window.document.createElement('div')
        element.setAttribute('id', x)

        return window.vortex.addAndReturnElement(new Vortex(element))
    }

})(window)