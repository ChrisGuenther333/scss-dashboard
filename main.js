const notif = document.getElementById('notif')
const notifList = document.getElementById('notifList')
const pfp = document.getElementById('pfp')
const pfpList = document.getElementById('pfpList')
let displayNotif = false
let displayPfp = false

notif.addEventListener('click', displayNotifList)
pfp.addEventListener('click', displayPfpList)
document.addEventListener('click', event => {
    if (event.target.id !== 'notif' && event.target.id !== 'pfp' && !event.target.classList.contains('notifListLi') && !event.target.classList.contains('pfpOption')) {
        if (displayNotif) {
            displayNotifList()
        }
        else if (displayPfp) {
            displayPfpList()
        }
    }
    console.log(event.target)
})

function displayNotifList() {
    let html = ''
    displayNotif = !displayNotif    
    if (displayNotif) {
        displayPfp ? displayPfpList(): displayPfp
        html =
        `<ul>
            <li class="notifListLi">None</li>
        </ul>`
    }
    else {
        html = ''
    }

    notifList.innerHTML = html
}

function displayPfpList() {
    let html = ''
    displayPfp = !displayPfp
    
    if (displayPfp) {
        displayNotif ? displayNotifList(): displayNotif
        html =
        `<ul>
            <a><li class="pfpOption">Profile</li></a>
            <hr>
            <a><li class="pfpOption">Logout</li></a>
        </ul>`
    }
    else {
        html = ''
    }
    pfpList.innerHTML = html
}