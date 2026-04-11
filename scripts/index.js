document.getElementById('signin-btn').addEventListener('click', () => {
    const userNameInput = document.getElementById('input-username')
    const userNameInputValue = userNameInput.value
    const UserPasswordInput = document.getElementById('input-password')
    const UserPasswordInputValue = UserPasswordInput.value

    // console.log(userNameInputValue, UserPasswordInputValue);


    if ((userNameInputValue === 'admin') && (UserPasswordInputValue === 'admin123')) {
        window.location.assign('./home.html')
    } else {
        document.getElementById('my_modal_5').showModal()
    }
})