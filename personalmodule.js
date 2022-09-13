module.exports = { dateRequest }

function dateRequest(name) {
    let date = new Date()
    let info = "Date of request: " + date

    let curTime = date.getHours()
    console.log(curTime);
    if (curTime > 5 && curTime < 11) {
        return info + ' <br> Good morning ' + name
    } else if (curTime > 11 && curTime < 17) {
        return info + ' <br> Good day ' + name
    } else if (curTime > 17 && curTime < 23) {
        return info + ' <br> Good evening ' + name
    } else if ((curTime >= 23 && curTime <= 24) || (curTime >= 1 && curTime <= 5)) {
        return info + ' <br> Good night ' + name

    }
}

