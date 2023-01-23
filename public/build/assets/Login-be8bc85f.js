import{u as g,r as h,j as a,F as x,a as e,H as f,L as b}from"./app-5c15c126.js";import{T as l}from"./TextInput-b57582b9.js";import{I as n}from"./InputLabel-d0f0f8ac.js";import{D as m}from"./DangerButton-3b17c5f5.js";import{I as o}from"./InputError-f801f2c8.js";function C(){const{data:t,setData:p,post:d,processing:c,errors:r,reset:u}=g({email:"",password:"",remember:""});h.useEffect(()=>()=>{u("password")},[]);const i=s=>{p(s.target.name,s.target.value)};return a(x,{children:[e(f,{title:"Login"}),a("div",{className:"mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3",children:[e("div",{className:"fixed top-[-50px] hidden lg:block",children:e("img",{src:"/images/signup-image.png",className:"hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]",alt:""})}),e("div",{className:"py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]",children:a("div",{children:[e("img",{src:"/images/moonton-white.svg",alt:""}),a("div",{className:"my-[70px]",children:[e("div",{className:"font-semibold text-[26px] mb-3",children:"Welcome Back"}),a("p",{className:"text-base text-[#767676] leading-7",children:["Explore our new movies and get ",e("br",{}),"the better insight for your life"]})]}),a("form",{className:"w-[370px]",onSubmit:s=>{s.preventDefault(),d(route("login"))},children:[a("div",{className:"flex flex-col gap-6",children:[a("div",{children:[e(n,{forInput:"email",value:"Email Address"}),e(l,{id:"email",type:"email",name:"email",value:t.email,autoComplete:"username",isFocused:!0,handleChange:i}),e(o,{message:r.email,className:"mt-2"})]}),a("div",{children:[e(n,{forInput:"password",value:"password"}),e(l,{id:"password",type:"password",name:"password",value:t.password,autoComplete:"current-password",handleChange:i}),e(o,{message:r.password,className:"mt-2"})]})]}),a("div",{className:"grid space-y-[14px] mt-[30px]",children:[e(m,{type:"submit",variant:"primary",processing:c,children:e("span",{className:"text-base font-semibold",children:"Start Watching"})}),e(b,{href:route("register"),children:e(m,{type:"button",variant:"light-outline",children:e("span",{className:"text-base text-white",children:"Create New Account"})})})]})]})]})})]})]})}export{C as default};
