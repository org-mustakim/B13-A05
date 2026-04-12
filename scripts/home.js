const removeActiveBtn = (element) => {
    const btnContainer = document.querySelectorAll('.clickable-btn')

    const styelsToRemove = ['btn-primary', 'text-white', 'shadow-md']
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
    const ActiveBtnStyle = ['btn-primary', 'text-white', 'shadow-md']

    btnToGetActive.classList.remove(...styelsToRemove)
    btnToGetActive.classList.add(...ActiveBtnStyle)
}


const displayIssues = (arrOfObject) => {

    console.log(arrOfObject);

}


const loadIssues = () => {
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then(response => response.json())
        .then(json => displayIssues(json.data)
        )
}

loadIssues()

