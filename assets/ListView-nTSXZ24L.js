import{l as S,d as L,n as F,b as v,q as A,s as M,o as n,c as g,w as l,g as e,h as c,a as q,f as u,t as y,F as h,i as b,C as N,v as a,r,u as P,y as H}from"./index-CLu65jPb.js";import{h as J}from"./moment-C5S46NFB.js";const T=()=>S("/builtin-tools/categories"),U=()=>S("/builtin-tools"),W={class:"p-6 flex flex-col"},K={class:"flex items-center justify-between mb-6"},O={class:"flex items-center gap-2"},Q={class:"flex items-center justify-between mb-6"},R={class:"flex items-center gap-2"},X={class:"flex items-center gap-3 mb-3"},Z=["src","alt"],I={class:"flex flex-col"},ee={class:"text-base text-gray-900 font-bold"},te={class:"text-xs text-gray-500 line-clamp-1"},se={class:"leading-[18px] text-gray-500 h-[72px] line-clamp-4 mb-2"},ae={class:"flex items-center gap-1.5"},le={class:"text-xs text-gray-400"},oe={key:0,class:""},ne={class:"flex items-center gap-3 mb-3"},ce=["src","alt"],ie={class:"flex flex-col"},re={class:"text-base text-gray-900 font-bold"},de={class:"text-xs text-gray-500 line-clamp-1"},ue={class:"leading-[18px] text-gray-500 mb-2"},_e={class:"flex flex-col gap-2"},me={class:"text-xs text-gray-500"},pe={class:"font-bold text-gray-900 mb-2"},ge={class:"text-gray-500 text-xs"},xe={key:0,class:""},fe={class:"flex flex-col gap-4"},ve={class:"flex items-center gap-2 text-xs"},ye={class:"text-gray-900 font-bold"},he={class:"text-gray-500"},be={key:0,class:"text-red-700"},ke={class:"text-xs text-gray-500"},ze=L({__name:"ListView",setup(we){const k=F([]),w=F([]),p=v(!1),m=v("all"),x=v(""),o=v(-1),i=A(()=>w.filter(_=>{const s=m.value==="all"||_.category===m.value,C=x.value===""||_.label.toLowerCase().includes(x.value);return s&&C}));return M(async()=>{try{p.value=!0;const _=await T();k.push(..._.data)}finally{p.value=!1,k.push({name:"网络搜索",category:"1"},{name:"图片处理",category:"2"},{name:"天气预报",category:"3"},{name:"实用工具",category:"4"},{name:"其他工具",category:"5"})}}),M(async()=>{try{p.value=!0;const _=await U();w.push(..._.data)}finally{p.value=!1,w.push({idx:0,label:"Google",icon:"https://img1.baidu.com/it/u=1682812017,3182056438&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",name:"google",background:"#ff0000",tools:[{name:"谷歌",label:"谷歌Serper搜素",description:"这是一个低成本的谷歌搜素API，当你需要搜素时事的图标，可以使用该工具，该工具的输入是一个查询语法",inputs:[{name:"query",label:"query",type:"str",description:"需要检索查询的语句",required:!0}]}],category:"1",description:"谷歌服务提供商，覆盖了谷歌搜索等工具",created_at:1740324084e3},{idx:1,label:"时间",icon:"https://img0.baidu.com/it/u=3411057916,604696305&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",name:"time",background:"#ff0000",tools:[{name:"获取当前时间",label:"获取当前时间",description:"一个获取当前时间的工具",inputs:[]},{name:"获取当前时间2",label:"获取当前时间2",description:"一个获取当前时间的工具",inputs:[]}],category:"1",description:"一个用于获取当前时间的工具",created_at:1741323751e3})}}),(_,s)=>{const C=r("icon-common"),f=r("a-avatar"),V=r("a-button"),Y=r("a-input-search"),$=r("icon-user"),z=r("a-card"),B=r("a-col"),j=r("a-empty"),D=r("a-row"),E=r("a-drawer"),G=r("a-spin");return n(),g(G,{loading:p.value,class:"block h-full w-full"},{default:l(()=>[e("div",W,[e("div",K,[e("div",O,[c(f,{size:32,class:"bg-blue-700"},{default:l(()=>[c(C,{size:18})]),_:1}),s[3]||(s[3]=e("div",{class:"text-lg font-medium text-gray-900"},"插件广场",-1))]),c(V,{type:"primary",class:"rounded-lg"},{default:l(()=>s[4]||(s[4]=[q("创建自定义插件")])),_:1})]),e("div",Q,[e("div",R,[c(V,{type:m.value==="all"?"secondary":"text",class:"rounded-lg !text-gray-700 px-3",onClick:s[0]||(s[0]=t=>m.value="all")},{default:l(()=>s[5]||(s[5]=[q("全部 ")])),_:1},8,["type"]),(n(!0),u(h,null,y(k,t=>(n(),g(V,{key:t.category,type:m.value===t.category?"secondary":"text",class:"rounded-lg !text-gray-700 px-3",onClick:d=>m.value=t.category},{default:l(()=>[q(a(t.name),1)]),_:2},1032,["type","onClick"]))),128))]),c(Y,{modelValue:x.value,"onUpdate:modelValue":s[1]||(s[1]=t=>x.value=t),placeholder:"请输入插件名称",class:"w-[240px] bg-white rounded-lg border-gray-300"},null,8,["modelValue"])]),c(D,{gutter:[20,20],class:"flex-1"},{default:l(()=>[(n(!0),u(h,null,y(i.value,(t,d)=>(n(),g(B,{key:t.name,span:6},{default:l(()=>[c(z,{hoverable:"",class:"cursor-pointer rounded-lg",onClick:Ce=>o.value=d},{default:l(()=>[e("div",X,[c(f,{size:40,shape:"square",style:N({backgroundColor:t.background})},{default:l(()=>[e("img",{src:t.icon,alt:t.name},null,8,Z)]),_:2},1032,["style"]),e("div",I,[e("div",ee,a(t.label),1),e("div",te," 提供商 "+a(t.name)+" · "+a(t.tools.length)+" 插件 ",1)])]),e("div",se,a(t.description),1),e("div",ae,[c(f,{size:18,class:"bg-blue-700"},{default:l(()=>[c($)]),_:1}),e("div",le," 慕课 · 发布时间 "+a(P(J)(t.created_at).format("YYYY-MM-DD HH:mm")),1)])]),_:2},1032,["onClick"])]),_:2},1024))),128)),i.value.length===0?(n(),g(B,{key:0,span:24},{default:l(()=>[c(j,{description:"没有可用的内置插件",class:"h-[400px] flex flex-col items-center justify-center"})]),_:1})):b("",!0)]),_:1}),c(E,{visible:o.value!=-1,width:350,footer:!1,title:"工具详情","drawer-style":{background:"#F9FAFB"},onCancel:s[2]||(s[2]=t=>o.value=-1)},{default:l(()=>[o.value!=-1?(n(),u("div",oe,[e("div",ne,[c(f,{size:40,shape:"square",style:N({backgroundColor:i.value[o.value].background})},{default:l(()=>[e("img",{src:i.value[o.value].icon,alt:i.value[o.value].name},null,8,ce)]),_:1},8,["style"]),e("div",ie,[e("div",re,a(i.value[o.value].label),1),e("div",de," 提供商 "+a(i.value[o.value].name)+" · "+a(i.value[o.value].tools.length)+" 插件 ",1)])]),e("div",ue,a(i.value[o.value].description),1),s[7]||(s[7]=e("hr",{class:"my-4"},null,-1)),e("div",_e,[e("div",me," 包含 "+a(i.value[o.value].tools.length)+" 个工具 ",1),(n(!0),u(h,null,y(i.value[o.value].tools,t=>(n(),g(z,{key:t.name,class:"cursor-pointer flex flex-col rounded-xl"},{default:l(()=>[e("div",pe,a(t.label),1),e("div",ge,a(t.description),1),t.inputs.length>0?(n(),u("div",xe,[s[6]||(s[6]=e("div",{class:"flex items-center gap-2 my-4"},[e("div",{class:"text-xs font-bold text-gray-500"},"参数"),e("hr",{class:"flex-1"})],-1)),e("div",fe,[(n(!0),u(h,null,y(t.inputs,d=>(n(),u("div",{key:d.name,class:"flex flex-col gap-2"},[e("div",ve,[e("div",ye,a(d.name),1),e("div",he,a(P(H)[d.type]),1),d.required?(n(),u("div",be,"必填")):b("",!0)]),e("div",ke,a(d.description),1)]))),128))])])):b("",!0)]),_:2},1024))),128))])])):b("",!0)]),_:1},8,["visible"])])]),_:1},8,["loading"])}}});export{ze as default};
