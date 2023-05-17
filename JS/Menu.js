const list = document.querySelectorAll(".list");
        function activeLink() {
            list.forEach((item) => {
                item.classList.remove('active');
                this.classList.add('active');
            })
        }
        list.forEach((item) =>
            item.addEventListener('click', activeLink));

        function menuToggle() {
            const toggleMenu = document.querySelector('.userDropdown');
            toggleMenu.classList.toggle('active')
        }

const API_KEY = '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'
const submitButton = document.querySelector('#submit')
const outPutElement = document.querySelector('#output')
const inputElement = document.querySelector('input')
const historyElement = document.querySelector('.history')
const buttonElement = document.querySelector('button')

function changeInput(value) {
   const inputElement = document.querySelector('input')
   inputElement.value = value
}


async function getMessage() {
    console.log('salom');
    const options = {
        method: 'POST',
        headers: {
            'Authorization' : `Bearer ${API_KEY}`,
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: inputElement.value}],
            max_tokens: 100
        })
    }
    try{
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        console.log(data);
        outPutElement.textContent = data.choices[0].message.content
        if(data.choices[0].message.content && inputElement.value){
            const pElement = document.createElement('p')
            pElement.textContent = inputElement.valuelo
            pElement.addEventListener('click', () => changeInput(pElement.textContent))
            historyElement.append(pElement)
        }
    }catch (error){
        console.log(error);

    }
}

// submitButton.addEventListener('click', getMessage)

// function clearInput() {

//     inputElement.value = ''
// }

// buttonElement.addEventListener('click', clearInput)