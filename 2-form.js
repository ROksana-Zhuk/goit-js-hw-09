import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},t=document.querySelector(".feedback-form"),o=t.querySelector('input[type="email"]'),m=t.querySelector("textarea"),s="feedback-form-state";t.addEventListener("input",a=>{e.email=o.value.trim(),e.message=m.value.trim(),localStorage.setItem(s,JSON.stringify(e))});const l=localStorage.getItem(s);console.log(l);if(l!==null){const a=JSON.parse(l);o.value=a.email,m.value=a.message,e.email=a.email,e.message=a.message}t.addEventListener("submit",a=>{if(e.email===""||e.message===""){alert("Fill please all fields");return}else console.log(e),a.preventDefault(),localStorage.removeItem(s),t.reset(),e.email="",e.message=""});
//# sourceMappingURL=2-form.js.map
