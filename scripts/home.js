const removeActiveBtn = (element) => {
    const btnContainer = document.querySelectorAll('.clickable-btn')

    const styelsToRemove = ['btn-primary', 'text-white']
    const styelsToAdd = ['btn-outline', 'text-[#64748bFF]']

    btnContainer.forEach((btn) => {
        btn.classList.remove(...styelsToRemove)
        btn.classList.add(...styelsToAdd)
    })
}

const activeBtn = (id) => {
    const btnToGetActive = document.getElementById(id)

    removeActiveBtn(btnToGetActive)

    const styelsToRemove = ['btn-outline', 'text-[#64748bFF]']
    const ActiveBtnStyle = ['btn-primary', 'text-white']

    btnToGetActive.classList.remove(...styelsToRemove)
    btnToGetActive.classList.add(...ActiveBtnStyle)
}






