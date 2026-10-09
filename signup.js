const supabaseUrl = "https://xjkncxekoppbqyjtbaoe.supabase.co/rest/v1/";
const supabaseKey = "sb_publishable_ewN80NKx7t9iY2AkzAPZIw_dhYf_t6Q";

const supabase = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);

const signupForm = document.querySelector(".signup-form");

const fullnameInput = document.querySelector("#fullname");

const emailInput = document.querySelector("#signup-email");

const passwordInput = document.querySelector("#signup-password");

const confirmPasswordInput = document.querySelector("#confirm-password");


signupForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const fullname = fullnameInput.value.trim();

    const email = emailInput.value.trim();

    const password = passwordInput.value.trim();

    const confirmPassword = confirmPasswordInput.value.trim();


    if (fullname === "") {
        alert("Please enter your full name.");
        return;
    }


    if (email === "") {
        alert("Please enter your email address.");
        return;
    }


    if (password === "") {
        alert("Please create a password.");
        return;
    }


    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }


    if (confirmPassword === "") {
        alert("Please confirm your password.");
        return;
    }


    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }


    const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password
});

if (error) {
    alert(error.message);
    return;
}

alert("Account created successfully!");

console.log(data);
});