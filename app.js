window.addEventListener('load', solve);

function solve() {
    document.getElementById('next-btn').addEventListener('click', createPreview);
    const preview = document.querySelector('.class-info');
    const confirmPanel = document.querySelector('.confirm-class');

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const contactInput = document.getElementById('contact-number');
    const classTypeInput = document.getElementById('class-type');
    const timeInput = document.getElementById('class-time');


    function createPreview(event){
        event.preventDefault();

        const name = nameInput.value;
        const email = emailInput.value;
        const contact = contactInput.value;
        const classType = classTypeInput.value;
        const time = timeInput.value; 

       

        if(name === '' || email === '' || contact === '' || classType === '' || time === ''){
            return;
        }

        const element = document.createElement('li');
        element.className = 'info-item' ;
        const article = document.createElement('article');
        article.className = 'personal-info';
        article.appendChild(createParagraph(name));
        article.appendChild(createParagraph(email));
        article.appendChild(createParagraph(contact));
        article.appendChild(createParagraph(classType));
        article.appendChild(createParagraph(time));
        element.appendChild(article)

        preview.appendChild(element)


    }

    function createParagraph(content){
        const p = document

    }

}




