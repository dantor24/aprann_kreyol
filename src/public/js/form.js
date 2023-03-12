class SwitchLogin {

  constructor(element,label) {
    this.radio = document.querySelector(element);
    this.label = document.querySelector(label);
    this.set_color = this.set_color.bind(this); // Bind the set_color method to the current instance
  }

  set_color(active_color, unactive_color) {
    let label = null;
    this.radio.addEventListener('change', function(event) {
      if (event.target.checked) {
        label = event.target.previousElementSibling;
        label.style.color = active_color;
        this.label.style.color = unactive_color;
      }
    }.bind(this)); // Bind the event listener function to the current instance
  }
}


class Animation {

  constructor(element, animation){
    this.element =document.querySelector(element);
    this.animation = animation;

  }

  add(){
    this.element.style.display = "flex";
    console.log(this.animation);
    this.element.classList.add(this.animation);
  }

  radioEvent(radio,func){
    document.querySelector(radio).addEventListener('change', function(event){
      if(event.target.checked){
        func();
        console.log("checked");
        this.add();
      }
    }.bind(this));
  }
  
  
}