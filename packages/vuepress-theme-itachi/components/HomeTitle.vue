<template>
  <div class="rotating-text">
    <p>
      <span class="word alizarin" v-html="text"></span>
      <span class="word wisteria" v-html="text"></span>
      <span class="word peter-river" v-html="text"></span>
      <span class="word emerald" v-html="text"></span>
      <span class="word sun-flower" v-html="text"></span>
    </p>
    <!-- <p class="aa">Technology Articles</p> -->
  </div>
</template>
<script>
import { onMounted } from '@vue/composition-api'
export default {
  setup(props, ctx) {
    const text = 'VCOM&emsp;Technology Articles'
    onMounted(() => {
      let words = document.querySelectorAll('.word')
      words.forEach((word) => {
        let letters = word.textContent.split('')
        word.textContent = ''
        letters.forEach((letter) => {
          let span = document.createElement('span')
          span.textContent = letter
          span.className = 'letter'
          word.append(span)
        })
      })
      let currentWordIndex = 0
      let maxWordIndex = words.length - 1
      words[currentWordIndex].style.opacity = '1'

      let rotateText = () => {
        let currentWord = words[currentWordIndex]
        let nextWord =
          currentWordIndex === maxWordIndex
            ? words[0]
            : words[currentWordIndex + 1]
        // rotate out letters of current word
        Array.from(currentWord.children).forEach((letter, i) => {
          setTimeout(() => {
            letter.className = 'letter out'
          }, i * 80)
        })
        // reveal and rotate in letters of next word
        nextWord.style.opacity = '1'
        Array.from(nextWord.children).forEach((letter, i) => {
          letter.className = 'letter behind'
          setTimeout(() => {
            letter.className = 'letter in'
          }, 340 + i * 80)
        })
        currentWordIndex =
          currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1
      }

      rotateText()
      setInterval(rotateText, 4000)
    })

    return {
      text
    }
  },
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
.rotating-text {
  width:100%;
  text-align:center;
  position: absolute;
  bottom : 30px;
  left: 0%;
  // font-family: Lato, sans-serif;
  font-weight: 600;
  font-size: 40px;
  color: white;
  transform: translateX(-80px);

  p {
    display: inline-flex;
    margin: 0;
    vertical-align: top;

    .word {
      position: absolute;
      display: flex;
      right: 20px;
      opacity: 0;
      font-family Allura
      .letter {
        transform-origin: center center 25px;
        font-family Allura
        &.out {
          transform: rotateX(90deg);
          transition: 0.32s cubic-bezier(0.6, 0, 0.7, 0.2);
        }

        &.in {
          transition: 0.38s ease;
        }

        &.behind {
          transform: rotateX(-90deg);
        }
      }
    }
  }
}

// palette: https://flatuicolors.com/palette/defo
.alizarin {
  color: #e74c3c;
}

.wisteria {
  color: #8e44ad;
}

.peter-river {
  color: #3498db;
}

.emerald {
  color: #2ecc71;
}

.sun-flower {
  color: #f1c40f;
}
</style>
