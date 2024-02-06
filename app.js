screen.addEventListener("orientationchange", () => {
    console.log(`The orientation of the screen is: ${screen.orientation}`);
  });

  screen.orientation.lock("portrait");

  const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
    const x = e.clientX,
    y = e.clientY ;

    const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 6 : 1})`
    }
    trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards"
    });
}

window.onmousemove = e => {
    const interactable = e.target.closest("#animate-text"),
    interacting = interactable !== null; 
    animateTrailer(e, interacting);
    trailer.dataset.type = interacting ? interactable.dataset.type : "";
}
