const inputs = document.querySelectorAll('input');

var patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

}

const validate = (field, regex) => {
    if (regex.test(field.value)) {
        field.className = "valid";
    } else {
        field.className = "invalid";
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (evt) => {
        // console.log(evt.target.attributes.name.value);
        validate(evt.target, patterns[evt.target.attributes.name.value])
    });
});

