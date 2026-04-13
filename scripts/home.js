const loadingScreen = (value) => {

    const loadContainer = document.getElementById('loading-container')
    const cardContainer = document.getElementById('card-container')

    if (value === true) {

        cardContainer.classList.add('hidden')
        loadContainer.classList.remove('hidden')

    } else if (value === false) {
        cardContainer.classList.remove('hidden')
        loadContainer.classList.add('hidden')
    }
}

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

const typeLogo = (obj) => {
    if (obj.status === "open") {
        return '<img src="./assets/Open-Status.png">'
    }
    else {
        return '<img src="./assets/Closed-Status.png">'
    }
}

const date = (date) => {
    const datea = new Date(date)

    return datea.toLocaleDateString('en-gb')

}

const displayCardDetails = (obj) => {


    const modalBox = document.getElementById('modal-box-container')

    modalBox.innerHTML = `

                <h2 class="text-[#1f2937] text-2xl font-bold mb-2">${obj.title}</h2>
                <div class="flex items-center gap-2">
                    <div id="modal-status-container-${obj.id}">
                    </div>
                    <div>
                        <p class="text-[#64748b]">
                            • <span>Opened</span> by <span>${obj.author}</span> • <span>${date(obj.createdAt)}</span>
                        </p>
                    </div>
                </div>

                <div id="modal-badge-container-${obj.id}" class="mt-6 flex gap-1">

                </div>

                <div>
                    <p class="text-[#64748b] text-base mt-6">
                        ${obj.description}
                    </p>
                </div>

                <div class="flex mt-7 rounded-lg p-4 bg-[#f8fafc]">
                    <div class="flex flex-col w-72">
                        <p class="text-[#64748b]">Assignee:</p>
                        <p class="text-[#1f2937] text-base font-semibold">${obj.assignee ? obj.assignee : "unassigned"}</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p class="text-[#64748b]">Priority:</p>
                        <div id="modal-priority-badge-container-${obj.id}"></div>
                    </div>
                </div>

    `

    const modalBadges = () => {
        const modalBadgeContainer = document.getElementById(`modal-badge-container-${obj.id}`)

        const objLabels = obj.labels

        objLabels.forEach(label => {

            const badge = document.createElement('button')

            const bugStyle = ['rounded-xl', 'badge', 'badge-soft', 'badge-error', 'border-error/30', 'text-xs', 'badge-sm']

            const helpStyle = ['rounded-xl', 'badge', 'badge-soft', 'badge-warning', 'border-warning/30', 'text-xs', 'badge-sm']

            const enhancementStyle = ['rounded-xl', 'badge', 'badge-soft', 'badge-success', 'border-success/30', 'text-xs', 'badge-sm']

            const documentationStyle = ['rounded-xl', 'badge', 'badge-soft', 'badge-info', 'border-info/30', 'text-xs', 'badge-sm']

            const GFIStyle = ['rounded-xl', 'badge', 'badge-soft', 'badge-accent', 'border-accent/30', 'text-xs', 'badge-sm']

            const Label = label.toUpperCase()

            if (label === 'bug') {
                badge.innerHTML = `<i class= "fa-solid fa-bug" ></i> ${Label}`
                badge.classList.add(...bugStyle)
                modalBadgeContainer.appendChild(badge)
            }
            else if (label === 'help wanted') {
                badge.innerHTML = `<i class= "fa-solid fa-circle-radiation" ></i> ${Label}`
                badge.classList.add(...helpStyle)
                modalBadgeContainer.appendChild(badge)
            }
            else if (label === 'enhancement') {
                badge.innerHTML = `<i class= "fa-solid fa-star" ></i> ${Label}`
                badge.classList.add(...enhancementStyle)
                modalBadgeContainer.appendChild(badge)
            }
            else if (label === 'documentation') {
                badge.innerHTML = `<i  class= "fa-solid fa-file" ></i> ${Label}`
                badge.classList.add(...documentationStyle)
                modalBadgeContainer.appendChild(badge)
            }
            else if (label === 'good first issue') {
                badge.innerHTML = `<i class= "fa-solid fa-file" ></i> ${Label}`
                badge.classList.add(...GFIStyle)
                modalBadgeContainer.appendChild(badge)
            }
        })

    }

    const modalStatus = () => {

        const modalStatusContainer = document.getElementById(`modal-status-container-${obj.id}`)

        const modalStatusBadge = document.createElement('button')

        const openStyles = ['badge', 'badge-active', 'badge-success', 'text-white', 'text-xs', 'font-medium', 'rounded-full']

        const closedStyles = ['badge', 'badge-active', 'badge-error', 'text-white', 'text-xs', 'font-medium', 'rounded-full']

        if (obj.status === "open") {
            modalStatusContainer.appendChild(modalStatusBadge)
            modalStatusBadge.innerText = "Opend"
            modalStatusBadge.classList.add(...openStyles)
        }
        else {
            modalStatusContainer.appendChild(modalStatusBadge)
            modalStatusBadge.innerText = "Closed"
            modalStatusBadge.classList.add(...closedStyles)
        }
    }

    const modalpriorityBadge = () => {
        const badge = document.createElement('button')

        badge.innerText = (obj.priority).toUpperCase()
        const modalpriorityBadgeContainer = document.getElementById(`modal-priority-badge-container-${obj.id}`)


        if (obj.priority === "high") {
            const styelsToAdd = ['badge', 'badge-active', 'badge-error']
            badge.classList.add(...styelsToAdd)
            modalpriorityBadgeContainer.appendChild(badge)

        }
        else if (obj.priority === "medium") {
            const styelsToAdd = ['badge', 'badge-active', 'badge-warning']
            badge.classList.add(...styelsToAdd)
            modalpriorityBadgeContainer.appendChild(badge)

        }
        else {
            const styelsToAdd = ['badge', 'badge-active', 'badge-gray-400']
            badge.classList.add(...styelsToAdd)
            modalpriorityBadgeContainer.appendChild(badge)

        }
    }


    modalpriorityBadge()
    modalStatus()
    modalBadges()
    my_modal_5.showModal()

}

const loadCardDetails = (id) => {
    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
        .then(response => response.json())
        .then(json => displayCardDetails(json.data))
}

const displayIssues = (arrOfObject) => {

    const totalIssue = document.getElementById('total-issue-in-container')
    totalIssue.innerHTML = arrOfObject.length
    const issueCardContainer = document.getElementById('issue-card-container')

    issueCardContainer.innerHTML = ""
    arrOfObject.forEach(obj => {

        const issueCard = document.createElement('div')




        issueCard.innerHTML = `

        <div id="issue-card-${obj.id}" onclick= "loadCardDetails(${obj.id})" class="bg-white w-full h-72 sm:h-[279px] rounded shadow-md">

            <div class="p-4 space-y-2 sm:space-y-3">

                <div class="flex justify-between">

                    <div>
                        ${typeLogo(obj)}
                    </div>
                    <div id='priority-badge-container-${obj.id}'>
                        <p></p>
                    </div>

                </div>

                <div class="space-y-2">
                    <h2 class="text-[#1f2937] h-[34px] text-sm font-semibold">${obj.title}</h2>
                    <p class="text-[#64748b] text-xs line-clamp-2 max-h-7">${obj.description}
                    </p>
                </div>

                <div id="issue-badge-container-${obj.id}" class="flex max-lg:flex-wrap gap-1">

                </div>

            </div class="h-[70px]">
            <span class="text-[#e4e4e7FF] font-semibold">
                <hr>
            </span>
            <div class="flex flex-col max-h-2">
                <div class="p-4 space-y-2 flex justify-between">
                    <p class="text-[#64748b] text-xs">#${obj.id} by ${obj.author}</p>
                    <p class="text-[#64748b] text-xs">${date(obj.createdAt)}</p>
                </div>
                <div class="p-4 space-y-2 flex justify-between">
                    <p class="text-[#64748b] text-xs">Asignee: ${obj.assignee ? obj.assignee : "unassigned"}</p>
                    <p class="text-[#64748b] text-xs">${date(obj.updatedAt)}</p>
                </div>
            </div>
        </div>
        
        `

        issueCardContainer.appendChild(issueCard)


        const issueBadges = () => {
            const issueBadgeContainer = document.getElementById(`issue-badge-container-${obj.id}`)

            const objLabels = obj.labels

            objLabels.forEach(label => {
                // console.log(label);
                const badge = document.createElement('button')

                const bugStyle = ['rounded-xl', 'badge', 'badge-soft', 'badge-error', 'border-error/30', 'text-xs', 'badge-sm']
                const helpStyle = ['rounded-xl', 'badge', 'badge-soft', 'badge-warning', 'border-warning/30', 'text-xs', 'badge-sm']
                const enhancementStyle = ['rounded-xl', 'badge', 'badge-soft', 'badge-success', 'border-success/30', 'text-xs', 'badge-sm']
                const documentationStyle = ['rounded-xl', 'badge', 'badge-soft', 'badge-info', 'border-info/30', 'text-xs', 'badge-sm']
                const GFIStyle = ['rounded-xl', 'badge', 'badge-soft', 'badge-accent', 'border-accent/30', 'text-xs', 'badge-sm']

                const Label = label.toUpperCase()

                if (label === 'bug') {
                    badge.innerHTML = `<i class= "fa-solid fa-bug" ></i> ${Label}`
                    badge.classList.add(...bugStyle)
                    issueBadgeContainer.appendChild(badge)
                }
                else if (label === 'help wanted') {
                    badge.innerHTML = `<i class= "fa-solid fa-circle-radiation" ></i> ${Label}`
                    badge.classList.add(...helpStyle)
                    issueBadgeContainer.appendChild(badge)
                }
                else if (label === 'enhancement') {
                    badge.innerHTML = `<i class= "fa-solid fa-star" ></i> ${Label}`
                    badge.classList.add(...enhancementStyle)
                    issueBadgeContainer.appendChild(badge)
                }
                else if (label === 'documentation') {
                    badge.innerHTML = `<i  class= "fa-solid fa-file" ></i> ${Label}`
                    badge.classList.add(...documentationStyle)
                    issueBadgeContainer.appendChild(badge)
                }
                else if (label === 'good first issue') {
                    badge.innerHTML = `<i class= "fa-solid fa-file" ></i> ${Label}`
                    badge.classList.add(...GFIStyle)
                    issueBadgeContainer.appendChild(badge)
                }
            })

        }

        const priorityBadge = () => {
            const badge = document.createElement('button')

            badge.innerText = (obj.priority).toUpperCase()
            const priorityBadgeContainer = document.getElementById(`priority-badge-container-${obj.id}`)


            if (obj.priority === "high") {
                const styelsToAdd = ['badge', 'badge-soft', 'badge-error']
                badge.classList.add(...styelsToAdd)
                priorityBadgeContainer.appendChild(badge)

            }
            else if (obj.priority === "medium") {
                const styelsToAdd = ['badge', 'badge-soft', 'badge-warning']
                badge.classList.add(...styelsToAdd)
                priorityBadgeContainer.appendChild(badge)

            }
            else {
                const styelsToAdd = ['badge', 'badge-soft', 'badge-gray-400']
                badge.classList.add(...styelsToAdd)
                priorityBadgeContainer.appendChild(badge)

            }
        }

        const border = () => {
            const issueCard = document.getElementById(`issue-card-${obj.id}`)
            const openStyles = ['border-t-4', 'border-t-green-500', 'rounded', 'shadow-md']
            const closedStyles = ['border-t-4', 'border-t-violet-600', 'rounded', 'shadow-md']

            if (obj.status === "open") {
                issueCard.classList.add(...openStyles)
            }
            else {
                issueCard.classList.add(...closedStyles)
            }
        }


        issueBadges()
        priorityBadge()
        border()

    })
    loadingScreen(false)
}

const searchIssueBtn = document.getElementById('search-issues-btn').addEventListener('click', () => {

    const inputBar = document.getElementById('input-bar')
    const inputValue = inputBar.value.toLowerCase().trim()

    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${inputValue}`)
        .then(response => response.json())
        .then(json => displayIssues(json.data)
        )
    removeActiveBtn()
    loadingScreen(true)

})

const closedIssues = (arrOfObject) => {
    const filterdIssues = arrOfObject.filter(obj => obj.status === 'closed')
    displayIssues(filterdIssues)
}

const openIssues = (arrOfObject) => {
    const filterdIssues = arrOfObject.filter(obj => obj.status === 'open')
    displayIssues(filterdIssues)

}

const loadAllIssues = () => {
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then(response => response.json())
        .then(json => displayIssues(json.data))
    loadingScreen(true)
}

const loadClosedIssues = () => {
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then(response => response.json())
        .then(json => closedIssues(json.data))
    loadingScreen(true)
}

const loadOpenIssues = () => {
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then(response => response.json())
        .then(json => openIssues(json.data))
    loadingScreen(true)
}



loadAllIssues()
