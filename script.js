//selects everything with the class of '.panel' and puts it in an array "Panels"

const panels = document.querySelectorAll('.panel')



//iiterates over every panel of array pannels
panels.forEach((panel) => {
    //console.log(panel)
    panel.addEventListener('click', () =>{
        removeActiveClasses()
        panel.classList.add('active')
    })
    //makes them reponsive to clicks and adds class of active
})


function removeActiveClasses(){
    panels.forEach((panel)=>{
      panel.classList.remove('active')
    })
}