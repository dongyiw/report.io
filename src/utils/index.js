export const showText = async (id, className, animateClass = 'animate__animated animate__lightSpeedInLeft') => {
    const containerEl = document.getElementById(id)
    const classArray = Array.from(containerEl.getElementsByClassName(className))
    console.log(classArray)
    // Array.from(classArray).forEach(item => {
    //     console.log(item)
    // })
    for(let i=0; i < classArray.length; i++) {
        await new Promise((resolve) => {
            setTimeout(() => {
                // classArray[i].setAttribute('class', 'text-show animate__animated animate__fadeIn')
                classArray[i].setAttribute('class', 'text-show ' + animateClass)
                resolve()
                console.log('等待完成')
            }, 1000);
        })
    }
    // Array.from(classArray).forEach(async el => {
    //     await new Promise((resolve) => {
    //         console.log(el)
    //         setTimeout(() => {
    //             el.setAttribute('class', 'text-show animate__animated animate__fadeIn')
    //             resolve()
    //             console.log('******1')
    //             console.log(el)
    //             console.log('*******2')
    //             console.log('等待完成')
    //         }, 3000);
    //     })
    // })
}