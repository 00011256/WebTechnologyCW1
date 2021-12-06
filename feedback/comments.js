const inputName = document.getElementById("input-name");
const inputText = document.getElementById("input-text");
const btnSubmit = document.getElementById("btn-submit");
const section = document.getElementById("all-comments");



const addComment = () => {
    let comment = `<div id="comment"><h3 id='name'><img src="user.png" alt="user">${inputName.value}</h3><p id="comment-name">${inputText.value}</p></div>`;

    console.log("Comment Added");
    section.insertAdjacentHTML("afterbegin", comment);
    inputName.value = inputText.value = '';


};

btnSubmit.addEventListener("click", addComment);
