export class MyWysiwyg {
    constructor(element, options) {
        const DefaultOptions = {
            buttons: ["Gras", "italic", "color"]
        };

        this.options = { ...DefaultOptions, ...options };
        this.element = element;

        this.options.buttons.forEach(button => {
            this.create(button);
        })
    }

    create(str) {
        let button = document.createElement('button');
        button.textContent = str;
        document.body.appendChild(button);
        button.setAttribute('onclick', `function()`);

        let div = document.getElementById('buttons')
        button.classList.add(str)
        
        document.body.appendChild(button);
        div.appendChild(button)
    }
}


