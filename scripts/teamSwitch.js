function team(num) {
    let teamMembers = []
    for(let i = 0; i < 3; i++) {
        teamMembers.push(document.getElementById(`member0${i}`))
    }
    /* teamMembers[num].style.display = 'flex' */
    teamMembers[num].classList.add('showFlex')
    teamMembers[num].classList.remove('hide')
    for (const [index,item] of teamMembers.entries()) {
        if (index != num) {
            /* teamMembers[index].style.display = 'none' */
            teamMembers[index].classList.remove('showFlex')
            teamMembers[index].classList.add('hide')
        }
    }
}