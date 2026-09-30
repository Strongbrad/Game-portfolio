const buttons=document.querySelectorAll(".filter button");
const projects=document.querySelectorAll(".project");
buttons.forEach(btn=>{
  btn.addEventListener("click",()=>{
    buttons.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const filter=btn.dataset.filter;
    projects.forEach(p=>{
      p.style.display=(filter==="all"||p.dataset.type===filter)?"block":"none";
    });
  });
});
const menu=document.querySelector(".menu");
const nav=document.querySelector(".nav nav");
menu?.addEventListener("click",()=>{nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.position="absolute";nav.style.right="20px";nav.style.top="65px";nav.style.flexDirection="column";nav.style.background="#10121a";nav.style.padding="18px";nav.style.border="1px solid #20232e"});
