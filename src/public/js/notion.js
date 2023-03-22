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

    this.hearing.forEach((btn,voice) => {
      btn.addEventListener("click", (event) => {
        this.sound[voice].currentTime = 0;
        this.sound[voice].play();
      });
    });
  }
}

class Next {
  static item = 0;
  constructor(btn, content) {
    this.btn = document.querySelector(btn);
    this.content = document.querySelectorAll(content);
  }

  showContent() {
    let previouse = 0;
    if (Next.item === 0) {
      this.content[Next.item].style.display = "flex";
      previouse = Next.item;
      Next.item++;
    }
    this.btn.addEventListener("click", (event) => {
      if (Next.item !== 0 && Next.item < Object.keys(this.content).length) {
        this.content[previouse].style.display = "none";
        this.content[Next.item].style.display = "flex";
        previouse = Next.item;
        Next.item++;
      }
    });
  }

  progress(progressBar) {
    progressBar = document.querySelector(progressBar);
    
    let currentIndex = 0
    this.btn.addEventListener('click', () => {
        if (currentIndex < this.content.length - 1) {
          currentIndex++;
        //   console.log(progressBar)
        // progressBar.style.display = "none";
          progressBar.style.width = `${((currentIndex + 1) / this.content.length) * 100}%`;
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
next.showContent();
next.progress('.modal-notion__progress');