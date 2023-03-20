class Avatar{
    constructor(profil,modal){
        this.profil = document.querySelector(profil);
        this.modal = document.querySelector(modal);
        this.option = null;
    }

    selected(option,img){
        this.option = document.querySelectorAll(option);
        this.img = document.querySelector(img);
        let src_img = this.img.src;
        const wordList = ['avatar-one.jpg', 'avatar-two.jpg','avatar-three.jpg','avatar-four.jpg', 'avatar-five.jpg'];
        let regex = '';
        let selected_img = null;

        this.option.forEach(item => {
            item.addEventListener('click', (event) => {
                selected_img = event.target.value + ".jpg";
                regex = new RegExp(wordList.join('|'), 'gi');
                this.img.src = src_img.replace(regex, selected_img);
            });
        });
    }

    showModal() {
        this.profil.addEventListener('click', () =>{
            this.modal.style.display = 'flex';
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

const profile = new Avatar(".panel-account__profil",".avatar");
profile.showModal();
profile.hideModal();
profile.selected("input[name='avatar']","#panel-account-image");