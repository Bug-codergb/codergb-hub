import { getRandom, getRandomStr } from "./getRandom";

function generateAnimation(container:HTMLElement,item:HTMLElement,index:number) {
  let r = getRandom(
    -container.offsetHeight +
      index * item.offsetHeight +
      item.offsetHeight,
    index * item.offsetHeight
  );
  let anName = getRandomStr(10);
  let keyframes = `
        @keyframes ${anName}{
          0%{
            transform :translateX(0) translateY(${r}px);
          }  
          100%{
            transform :translateX(${
              window.innerWidth +
              30 +
              item.offsetWidth
            }px) translateY(${r}px);
          }
        }
        `;
  
  const style = document.styleSheets[0];
  style.insertRule(keyframes);
  item.style.animation = `${anName} 16s normal`;
  item.style.animationFillMode = `forwards`;
}
export {
  generateAnimation
}