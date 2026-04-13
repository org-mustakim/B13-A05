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


    const openStyles = ['border-t-4', 'border-t-green-500', 'rounded', 'shadow-md']

    if (obj.status === "open") {
        return '<img src="./assets/Open-Status.png">'
        issueCard.classList.add(...openStyles)
    }
    else {
        return '<img src="../assets/Closed- Status .png">'
    }
}


const date = (date) => {
    const datea = new Date(date)

    return datea.toLocaleDateString('en-gb')

}


const displayIssues = (arrOfObject) => {

    const totalIssue = document.getElementById('total-issue-in-container')
    totalIssue.innerHTML = arrOfObject.length

    const issueCardContainer = document.getElementById('issue-card-container')
    issueCardContainer.innerHTML = ""

    // {
    //     "id": 1,
    //     "title": "Fix navigation menu on mobile devices",
    //     "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
    //     "status": "open",
    //     "labels": [
    //         "bug",
    //         "help wanted"
    //     ],
    //     "priority": "high",
    //     "author": "john_doe",
    //     "assignee": "jane_smith",
    //     "createdAt": "2024-01-15T10:30:00Z",
    //     "updatedAt": "2024-01-15T10:30:00Z"
    // }


    arrOfObject.forEach(obj => {

        const id = obj.id


        const issueCard = document.createElement('div')


        issueCard.innerHTML = `
        
        <div id="issue-card-${obj.id}" class="bg-white w-full h-[279px] rounded shadow-md">

            <div class="p-4 space-y-3">

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
                    badge.innerHTML = `<i class="fa-solid fa-bug"></i> ${Label}`
                    badge.classList.add(...bugStyle)

                    issueBadgeContainer.appendChild(badge)
                }
                else if (label === 'help wanted') {
                    badge.innerHTML = `<i class="fa-solid fa-circle-radiation"></i> ${Label}`
                    badge.classList.add(...helpStyle)
                    issueBadgeContainer.appendChild(badge)
                }
                else if (label === 'enhancement') {
                    badge.innerHTML = `<i class="fa-solid fa-star"></i> ${Label}`
                    badge.classList.add(...enhancementStyle)
                    issueBadgeContainer.appendChild(badge)
                }
                else if (label === 'documentation') {
                    badge.innerHTML = `<i class="fa-solid fa-file"></i> ${Label}`
                    badge.classList.add(...documentationStyle)
                    issueBadgeContainer.appendChild(badge)
                }
                else if (label === 'good first issue') {
                    badge.innerHTML = `<i class="fa-solid fa-file"></i> ${Label}`
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

                return '<img src="./assets/Open-Status.png">'
            }
            else {
                issueCard.classList.add(...closedStyles)
                return '<img src="../assets/Closed- Status .png">'
            }
        }


        issueBadges()
        priorityBadge()
        border()

    })
    loadingScreen(false)
}


const loadAllIssues = () => {
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then(response => response.json())
        .then(json => {
            displayIssues(json.data)
        })
    loadingScreen(true)

}


loadAllIssues()

