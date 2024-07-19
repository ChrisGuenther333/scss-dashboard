const notif = document.getElementById('notif')
const notifList = document.getElementById('notifList')
const pfp = document.getElementById('pfp')
const pfpList = document.getElementById('pfpList')
let displayNotif = false
let displayPfp = false

notif.addEventListener('click', displayNotifList)
pfp.addEventListener('click', displayPfpList)

function displayNotifList() {
    let html = ''
    displayNotif = !displayNotif    
    if (displayNotif) {
        displayPfp ? displayPfpList(): displayPfp
        html =
        `<ul>
            <li>None</li>
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
            <a><li>Profile</li></a>
            <hr>
            <a><li>Logout</li></a>
        </ul>`
    }
    else {
        html = ''
    }
    pfpList.innerHTML = html
}