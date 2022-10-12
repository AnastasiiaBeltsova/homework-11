document.addEventListener('DOMContentLoaded', function () {
    function Tasks(input, todosWrapper) {
        this.input = document.querySelector(input);
        this.todosWrapper = document.querySelector(todosWrapper);
        this.completeName = 'js--complete';
        this.deleteName = 'js--delete';

        this.addItem = (event) => {
            event.preventDefault();
            const value = this.input.value; 
            this.input.value = '';
            const item = this.createTemplate(value);
            this.todosWrapper.insertAdjacentHTML('afterbegin', item);
            document.querySelectorAll(`.${this.completeName}`).forEach(checkboxItem => {
                checkboxItem.addEventListener('click', this.complete)
            })

            document.querySelectorAll(`.${this.deleteName}`).forEach(deleteItem => {
                deleteItem.addEventListener('click', this.delete)
            })
        }

        this.complete = function () {
            this.parentNode.classList.toggle('todo-item__desc--underline');
        }

        this.delete = function () {
            let elem = document.querySelector('.todo-item');
            elem.remove(elem);
            
        }

        this.createTemplate = (description) => {
            return (
                `
                    <label class="todo-item">
                        <input class="${this.completeName}" type="checkbox">
                        <div class="todo-item__desc">${description}</div>
                        <button class="todo-item__delete ${this.deleteName} onclick="deleteItem()">Удалить</button>
                    </label>
                `
            )
        }
    }

    const tasks = new Tasks('.js--form__input', '.js--todos-wrapper')
    document.querySelector('.js--form').addEventListener('submit', tasks.addItem);
})
