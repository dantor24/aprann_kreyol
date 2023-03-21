class Notion{
    constructor(notion,modal){
        this.notion = document.querySelectorAll(notion);
        this.modal = document.querySelector(modal);
        this.audio = document.querySelectorAll(`${notion} audio`);
        this.option = null;
    }

    showModal() {
        
        this.notion.forEach(item => {
            item.addEventListener('click', event => {
              this.modal.style.display = 'flex';
            })
          });
    }

    hideModal() {
        this.modal.addEventListener('click', (event) =>{

            if(event.target === this.modal) {
                event.target.style.display = 'none';
            }
            
        });
    }

}

const notion = new Notion(".wrapper__notion",".modal-notion");
notion.showModal();
notion.hideModal();
var audio = document.querySelectorAll('.wrapper__notion audio');

