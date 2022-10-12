function input() {
    let input_number = document.querySelector(".form__number").value;
    document.querySelector(".js--number").innerHTML = input_number;
}

let name = document.querySelector(".form__name");
name.addEventListener('keyup', function (elem) {
    let holder = document.querySelector(".card__holder");
    holder.textContent = elem.target.value;
})

let month = document.querySelector(".form__month");
month.addEventListener('change', function (event) {
    let date = document.querySelector(".js--month");
    date.textContent = event.target.value;
})

function changeYear() {
    let input_year = document.querySelector(".form__year").value;
    document.querySelector(".js--year").innerHTML = input_year;
}

function getFormValue(event) {
    event.preventDefault();
    const formNumb = document.querySelector(".form__number").value;
    const formName = document.querySelector(".form__name").value;
    const formMonth = document.querySelector(".form__month").value;
    const formYear = document.querySelector(".form__year").value;
    const formCvv = document.querySelector(".form__cvv").value;

    console.log({
        number: formNumb,
        name: formName,
        month: formMonth,
        year: formYear,
        cvv: formCvv
    });
}


