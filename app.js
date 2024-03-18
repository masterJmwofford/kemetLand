// var map = L.map('map').setView([40.505, -96.19], 13);
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 1,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);
// var marker = L.marker([32.1, -83.09]).addTo(map);
// marker.bindPopup("<b>BAF Headquarters</b><br>Click To View Center.").openPopup();


const programLib = {
    monday: {
        online: [
            "Men of the Movement @ 7pm EST",
            "New Member Orientation "
        ],
        inperson: [
            "Meditation Mondays @ 5pm EST",

        ]
    },
    tuesday: {
        online: [
            "BAF BOOK Club 6-7pm EST"
        ],
        inperson: [
            "Ping Pong Tournament (Demo Event)"
        ]
    },
    wednesday: {
        online: [
            "Chakra Chart Brigade (Demo Event)"
        ],
        inperson: ["Wellness Wednesday "]
    },
    thursday: {
        online: [
            "Etymology Thursdays ",
            "Atlanta Branch Meeting"
        ],
        inperson: ["Kemet CYphers 7-9 PM EST"]
    },
    friday: {
        online: [
            "Mental Health Advocacy Thinktank (Demo Event)"
        ],
        inperson: [
            "EDUtainment Friday 7pm EST"
        ]
    },
    saturday: {
        online: [
            "Smai.Tawi Mindful Meditation 9AM EST",
            "Community Open House"
        ],
        inperson: [
            "Open Mic 7-10 EST"
        ]
    },
    sunday: {
        online: [
            "BAF Weekly Info Session 2pm EST"
        ],
        inperson: [
            "Sip N Paste 4-6 pm EST"
        ]
    }
}

const mon = () => {
    let online = document.querySelector('.online')
    let inperson = document.querySelector(".inperson")
    online.innerHTML=""
    inperson.innerHTML=""
    programLib.monday.online.map((info) => {
        let schedulePointA = document.createElement('div')
        schedulePointA.setAttribute('class', 'Opoint')
        schedulePointA.innerHTML = info
        online.append(schedulePointA)

    })

    programLib.monday.inperson.map((info) => {
        let schedulePointB = document.createElement('div')
        schedulePointB.setAttribute('class', 'Ipoint')
        schedulePointB.innerHTML = programLib.monday.inperson
        inperson.append(schedulePointB)
    })
}

const tue = () => {
    let online = document.querySelector('.online')
    let inperson = document.querySelector(".inperson")
    online.innerHTML=""
    inperson.innerHTML=""
    programLib.tuesday.online.map((info) => {
        let schedulePointA = document.createElement('div')
        schedulePointA.setAttribute('class', 'Opoint')
        schedulePointA.innerHTML = info
        online.append(schedulePointA)

    })

    programLib.tuesday.inperson.map((info) => {
        let schedulePointB = document.createElement('div')
        schedulePointB.setAttribute('class', 'Ipoint')
        schedulePointB.innerHTML = programLib.tuesday.inperson
        inperson.append(schedulePointB)
    })
}
const wed = () => {
    let online = document.querySelector('.online')
    let inperson = document.querySelector(".inperson")
    online.innerHTML=""
    inperson.innerHTML=""
    programLib.wednesday.online.map((info) => {
        let schedulePointA = document.createElement('div')
        schedulePointA.setAttribute('class', 'Opoint')
        schedulePointA.innerHTML = info
        online.append(schedulePointA)

    })

    programLib.wednesday.inperson.map((info) => {
        let schedulePointB = document.createElement('div')
        schedulePointB.setAttribute('class', 'Ipoint')
        schedulePointB.innerHTML = programLib.wednesday.inperson
        inperson.append(schedulePointB)
    })
}
const thur = () => {
    let online = document.querySelector('.online')
    let inperson = document.querySelector(".inperson")
    online.innerHTML=""
    inperson.innerHTML=""
    programLib.thursday.online.map((info) => {
        let schedulePointA = document.createElement('div')
        schedulePointA.setAttribute('class', 'Opoint')
        schedulePointA.innerHTML = info
        online.append(schedulePointA)

    })

    programLib.thursday.inperson.map((info) => {
        let schedulePointB = document.createElement('div')
        schedulePointB.setAttribute('class', 'Ipoint')
        schedulePointB.innerHTML = programLib.thursday.inperson
        inperson.append(schedulePointB)
    })
}
const fri = () => {
    let online = document.querySelector('.online')
    let inperson = document.querySelector(".inperson")
    online.innerHTML=""
    inperson.innerHTML=""
    programLib.friday.online.map((info) => {
        let schedulePointA = document.createElement('div')
        schedulePointA.setAttribute('class', 'Opoint')
        schedulePointA.innerHTML = info
        online.append(schedulePointA)

    })

    programLib.friday.inperson.map((info) => {
        let schedulePointB = document.createElement('div')
        schedulePointB.setAttribute('class', 'Ipoint')
        schedulePointB.innerHTML = programLib.friday.inperson
        inperson.append(schedulePointB)
    })
}
const sat = () => {
    let online = document.querySelector('.online')
    let inperson = document.querySelector(".inperson")
    online.innerHTML=""
    inperson.innerHTML=""
    programLib.saturday.online.map((info) => {
        let schedulePointA = document.createElement('div')
        schedulePointA.setAttribute('class', 'Opoint')
        schedulePointA.innerHTML = info
        online.append(schedulePointA)

    })

    programLib.saturday.inperson.map((info) => {
        let schedulePointB = document.createElement('div')
        schedulePointB.setAttribute('class', 'Ipoint')
        schedulePointB.innerHTML = programLib.saturday.inperson
        inperson.append(schedulePointB)
    })
}
const sun = () => {
    let online = document.querySelector('.online')
    let inperson = document.querySelector(".inperson")
    online.innerHTML=""
    inperson.innerHTML=""
    programLib.sunday.online.map((info) => {
        let schedulePointA = document.createElement('div')
        schedulePointA.setAttribute('class', 'Opoint')
        schedulePointA.innerHTML = info
        online.append(schedulePointA)

    })

    programLib.sunday.inperson.map((info) => {
        let schedulePointB = document.createElement('div')
        schedulePointB.setAttribute('class', 'Ipoint')
        schedulePointB.innerHTML = programLib.sunday.inperson
        inperson.append(schedulePointB)
    })
}