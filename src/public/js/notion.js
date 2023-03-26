class Notion {
  constructor(notion, modal) {
    this.notion = document.querySelectorAll(notion);
    this.modal = document.querySelector(modal);
    this.audio = document.querySelectorAll(`${notion} audio`);
    this.option = null;
  }

  showModal() {
    this.notion.forEach((item) => {
      item.addEventListener("click", (event) => {
        this.modal.style.display = "flex";
      });
    });
  }

  hideModal() {
    this.modal.addEventListener("click", (event) => {
      if (event.target === this.modal) {
        event.target.style.display = "none";
      }
    });
  }
}

class Hearing {
  constructor(hearing, sound) {
    this.hearing = document.querySelectorAll(hearing);
    this.sound = document.querySelectorAll(sound);
  }

  playSound() {
    this.hearing.forEach((btn, voice) => {
      btn.addEventListener("click", (event) => {
        this.sound[voice].currentTime = 0;
        this.sound[voice].play();
      });
    });
  }
}

class Next {
  static item = 0;
  static indextest = 0;
  constructor(btn, content) {
    this.btn = document.querySelector(btn);
    this.content = document.querySelectorAll(content);
  }

  showContent() {
    let checktest = document.querySelectorAll(".checktest");
    let valid = 0;
    let previouse = 0;
    if (Next.item === 0) {
      this.content[Next.item].style.display = "flex";
      previouse = Next.item;
      Next.item++;
    }
    this.btn.addEventListener("click", (event) => {
      if (
        checktest[valid].checked &&
        valid < Object.keys(this.content).length
      ) {
        if (Next.item !== 0 && Next.item < Object.keys(this.content).length) {
          this.content[previouse].style.display = "none";
          this.content[Next.item].style.display = "flex";
          previouse = Next.item;
          Next.item++;
          // this.progress('.modal-notion__progress');
        }
        valid++;
      }
    });
  }

  // this function compare the input to the corresponding answer 
  checkResponse(input, answer) {
    let inputs = document.querySelectorAll(input);
    let answers = document.querySelectorAll(answer);
    let message = document.querySelector("#state");
    let i = 0;
  
    this.btn.addEventListener("click", () => {
      let exp = 0;
      let showexp = document.querySelector("#panel-account-exp-value");
      let current_value = parseInt(showexp.innerHTML);
  
      if (Next.indextest < answers.length) {
        if (answers[Next.indextest].getAttribute("data-custom") != null) {
          if (
            inputs[i] && // check if input[i] is defined
            answers[Next.indextest].getAttribute("data-custom") == inputs[i].value
          ) {
            exp = answers[Next.indextest].getAttribute("data-exp");
            current_value += parseInt(exp);
            showexp.innerHTML = current_value;
            answers[Next.indextest].checked = true;
            message.style.display = "block";
            document.querySelector("#state span").innerHTML = exp + " Xp";
            setTimeout(() => {
              message.style.display = "none";
            }, 2000);
            Next.indextest++;
            i++;
          } else {
            answers[Next.indextest].checked = false;
            message.style.display = "block";
            document.querySelector("#state span").innerHTML = "mauvaise reponse!";
            setTimeout(() => {
              message.style.display = "none";
            }, 2000);
          }
        } else {
          answers[Next.indextest].checked = true;
          Next.indextest++;
        }
      }
    });
  }
  

  progress(progressBar,test) {
    progressBar = document.querySelector(progressBar);
    test = document.querySelectorAll(test);

    let currentIndex = 0;
    let index_test = 0;
    this.btn.addEventListener("click", () => {
      
      if(index_test < test.length && test[index_test].checked){
      if (currentIndex < this.content.length - 1) {
        currentIndex++;
        
        //   console.log(progressBar)
        // progressBar.style.display = "none";
        progressBar.style.width = `${
          ((currentIndex + 1) / this.content.length) * 100
        }%`;
        
      }
      index_test++;
    }
    });
  
  }
}
const notion = new Notion(".wrapper__notion", ".modal-notion");
notion.showModal();
notion.hideModal();

const hearing = new Hearing(
  ".modal-notion__wrapper__audio-btn-hearing",
  ".modal-notion__wrapper__sound"
);
hearing.playSound();

const next = new Next(".btn-change", ".modal-notion__wrapper__audio");

next.checkResponse(".modal-notion__wrapper-input", ".checktest");
next.showContent();
next.progress(".modal-notion__progress",".checktest");