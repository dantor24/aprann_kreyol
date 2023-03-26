class Menu {
    constructor(btn, icon, panel) {
        this.btn = document.querySelector(btn);
        this.icon = document.querySelector(icon);
        this.panel = document.querySelector(panel);
        
    }

    eventIcon(){
        // console.log(this.icon);
        this.btn.addEventListener('change', (event) => {
            if (event.target.checked) {
                this.icon.innerHTML = 'arrow_forward';
                this.panel.animate(
                    [
                        {right: "-210px"},
                        {right: "0px"}
                    ],
                    {
                        duration: 1000,
                        easing: "cubic-bezier(.92,.88,.55,1.08)",
                        iterations: 1,
                        fill: "both"
                        
                    }
                );
            } else {
                console.log('Checkbox is unchecked');
                this.icon.innerHTML = 'arrow_back';
                this.panel.animate(
                    [
                        {right: "0px"},
                        {right: "-210px"}
                    ],
                    {
                        duration: 1000,
                        easing: "cubic-bezier(1,.34,.67,.11)",
                        iterations: 1,
                        fill: "both"
                        
                    }
                );
            }
        });
    }
    // reset the position of the menu 
    onLoad() {
        this.btn.checked = false;
        this.icon.innerHTML = 'arrow_back';

    }

}

const menu = new Menu('#arrow-back','#arrow','.panel-account');
menu.eventIcon();
menu.onLoad();