const startSlider = () => {
  const parentSlider = document.getElementsByClassName("slider__container")[0];
  const childrenSlider = Array.from(parentSlider.children);

  childrenSlider.forEach((x) => {
    parentSlider.appendChild(x.cloneNode(true));
  });
};

startSlider();
