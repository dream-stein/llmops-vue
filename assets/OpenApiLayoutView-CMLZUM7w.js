import{d as f,b as m,o as c,f as v,g as t,h as s,w as o,a as n,u as x,c as y,i as b,j as k,r as a}from"./index-Cf6T1qU_.js";const w={class:"px-6 flex flex-col overflow-hidden h-full"},h={class:"pt-6 sticky top-0 z-20 bg-gray-50"},C={class:"flex items-center justify-between mb-6"},V={class:"flex items-center gap-2"},B={class:"flex items-center justify-between mb-6"},N={class:"flex items-center gap-2"},I=f({__name:"OpenApiLayoutView",setup(j){const p=k(),r=m(!1);return(z,e)=>{const d=a("icon-user"),u=a("a-avatar"),i=a("router-link"),_=a("a-button"),g=a("router-view");return c(),v("div",w,[t("div",h,[t("div",C,[t("div",V,[s(u,{size:32,class:"bg-blue-700"},{default:o(()=>[s(d,{size:18})]),_:1}),e[2]||(e[2]=t("div",{class:"flex items-center gap-2 text-lg font-medium text-gray-900"},[n(" 开放API "),t("div",{class:"text-xs text-gray-500"},"利用开放 API 快速与企业现有业务对接")],-1))])]),t("div",B,[t("div",N,[s(i,{to:"/openapi",class:"rounded-lg text-gray-700 px-3 h-8 leading-8 hover:bg-gray-200 transition-all","exact-active-class":"bg-gray-100"},{default:o(()=>e[3]||(e[3]=[n(" 快速开始 ")])),_:1}),s(i,{to:"/openapi/api-keys",class:"rounded-lg text-gray-700 px-3 h-8 leading-8 hover:bg-gray-200 transition-all","active-class":"bg-gray-100"},{default:o(()=>e[4]||(e[4]=[n(" 秘钥 ")])),_:1})]),x(p).path.startsWith("/openapi/api-keys")?(c(),y(_,{key:0,type:"primary",class:"rounded-lg",onClick:e[0]||(e[0]=l=>r.value=!0)},{default:o(()=>e[5]||(e[5]=[n(" 新增秘钥 ")])),_:1})):b("",!0)])]),s(g,{create_api_key:r.value,"onUpdate:create_api_key":e[1]||(e[1]=l=>r.value=l)},null,8,["create_api_key"])])}}});export{I as default};
