let isIgnite = false;

function changeCard(event){
    //console.log("ok")
    const card = event.currentTarget
    const bg = isIgnite ? "explorer" : "ignite"

    isIgnite = !isIgnite

    card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
}