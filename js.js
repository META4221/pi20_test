qu = 0
rs = 0
document.querySelectorAll('.image img').forEach((el, index) => {
    el.addEventListener('click', () => {
        if (index === questions[qu].rightAnswer) {
            el.parentNode.classList.add('image__success')
            rs = rs + 1
        } else {
            el.parentNode.classList.add('image__failure')
            document.querySelectorAll('.image')[questions[qu].rightAnswer].classList.add('image__success')
        }
        document.querySelectorAll('.image').forEach((e) => {
            e.style.pointerEvents = 'none'
        })
        document.querySelector('.button').classList.add('button__active')
        document.querySelector('.text div').textContent = 'умочка'
        qu = qu + 1
    })
})

//изменение картинок и вопроса после нажатия
document.querySelector('.button').addEventListener('click', () => {
    document.querySelector('.button').classList.remove('button__active')
    document.querySelectorAll('.image').forEach((el, index) => {
        el.style.pointerEvents = ''
        el.classList.remove('image__success')
        el.classList.remove('image__failure')
        el.querySelector('img').src = questions[qu].options[index]
        console.log(qu)
    })
    document.querySelector('.text div').textContent = questions[qu].question
    document.getElementById(qu).classList.add('link__active')
    if (qu === 6) {
        alert('Ваш результат ' + rs + '. Обновите страницу')
    }
})

const questions = [{
        question: "Начинаем с простенького. Судя по мультфильму, Чебурашка и Гена много гуляли и ходили пешком. А вот если бы они устали, то могли бы спокойно воспользоваться любым другим способом передвижения, кроме одного. Какого?",
        options: [
            "/imgs/var1.jpg",
            "/imgs/var2.jpg",
            "/imgs/var3.jpg",
            "/imgs/var4.jpg",
        ],
        rightAnswer: 0,
    },
    {
        question: "Кто?",
        options: [
            "/imgs/var4.jpg",
            "/imgs/var1.jpg",
            "/imgs/var2.jpg",
            "/imgs/var3.jpg",
        ],
        rightAnswer: 1,
    },
    {
        question: "Где?",
        options: [
            "/imgs/var1.jpg",
            "/imgs/var4.jpg",
            "/imgs/var2.jpg",
            "/imgs/var3.jpg",
        ],
        rightAnswer: 2,
    },
    {
        question: "Когда?",
        options: [
            "/imgs/var1.jpg",
            "/imgs/var2.jpg",
            "/imgs/var4.jpg",
            "/imgs/var3.jpg",
        ],
        rightAnswer: 3,
    },
    {
        question: "Когда?",
        options: [
            "/imgs/var4.jpg",
            "/imgs/var2.jpg",
            "/imgs/var1.jpg",
            "/imgs/var3.jpg",
        ],
        rightAnswer: 0,
    },
    {
        question: "Когда?",
        options: [
            "/imgs/var2.jpg",
            "/imgs/var1.jpg",
            "/imgs/var4.jpg",
            "/imgs/var3.jpg",
        ],
        rightAnswer: 3,
    },
    {
        question: "Когда?",
        options: [
            "/imgs/var1.jpg",
            "/imgs/var2.jpg",
            "/imgs/var4.jpg",
            "/imgs/var3.jpg",
        ],
        rightAnswer: 3,
    }

];