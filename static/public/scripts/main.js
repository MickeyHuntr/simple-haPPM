// Modal

const modal = document.querySelector(".modal");
const html = document.querySelector("html");

const showModal = () => {
    modal.classList.add("is-active");
    html.classList.add("is-clipped");
};

const hideModal = () => {
    modal.classList.remove("is-active");
    html.classList.remove("is-clipped");
};

document.querySelector("a.show-modal").addEventListener("click", function (e) {
    e.preventDefault();
    showModal();
});

modal.querySelector(".modal .delete").addEventListener("click", function (e) {
    e.preventDefault();
    hideModal();
});

// Form submition

const form = document.querySelector("#record-form");
const url = form.getAttribute("action");
const method = form.getAttribute("method");

const prependRecord = html => {
    const tbody = document.querySelector('tbody');
    const div = document.createElement("tr");
    div.innerHTML = html;
    tbody.insertBefore(div, tbody.firstElementChild.nextElementSibling)
};

const updateRecord = html => {
    const tbody = document.querySelector('tbody');
    const div = document.createElement("tr");
    div.innerHTML = html;
    tbody.replaceChild(div, tbody.firstElementChild.nextElementSibling)
};

const onSuccess = html => {
    console.log('odpalone')
    hideModal();
    form.reset();

    let params = window.location.pathname.split('/');
    console.log(params)
    if (params[1] != '' && params[2] != undefined) {
        console.log('doot')
        updateRecord(html)
    } else {
        console.log('toot')
        prependRecord(html);
    }
};

form.addEventListener("submit", e => {
    e.preventDefault();

    fetch(url, {
        method,
        body: new FormData(form)
    })
        .then(response => response.text())
        .then(text => onSuccess(text))
        .catch(error => console.error(error));
});