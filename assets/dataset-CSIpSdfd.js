import{p as a,l as n}from"./index-CLu65jPb.js";const o=(t=1,e=10,s="")=>n("/datasets",{params:{current_page:t,page_size:e,search_word:s}}),u=t=>a("/datasets",{body:t}),c=(t,e)=>a(`/datasets/${t}`,{body:e}),m=t=>a(`/datasets/${t}/delete`),$=t=>n(`/datasets/${t}`),g=(t,e={current_page:1,page_size:20,search_word:""})=>n(`/datasets/${t}/documents`,{params:e}),b=(t,e)=>n(`/datasets/${t}/documents/${e}`),p=(t,e,s)=>a(`/datasets/${t}/documents/${e}/enabled`,{body:{enabled:s}}),D=(t,e)=>a(`/datasets/${t}/documents/${e}`),l=(t,e,s)=>a(`/datasets/${t}/documents/${e}`,{body:{name:s}}),i=(t,e)=>a(`/datasets/${t}/hit`,{body:e}),y=t=>n(`/datasets/${t}/queries`),h=(t,e)=>a(`/datasets/${t}/documents`,{body:e}),S=(t,e)=>n(`/datasets/${t}/documents/batch/${e}`),P=(t,e,s)=>n(`/datasets/${t}/documents/${e}/segments`,{params:s}),W=(t,e,s)=>a(`/datasets/${t}/documents/${e}/segments`,{body:s}),_=(t,e,s)=>a(`/datasets/${t}/documents/${e}/segments/${s}/delete`),f=(t,e,s,d)=>a(`/datasets/${t}/documents/${e}/segments/${s}`,{body:d}),q=(t,e,s,d)=>a(`/datasets/${t}/documents/${e}/segments/${s}/enabled`,{body:{enabled:d}}),E=(t,e,s)=>n(`/datasets/${t}/documents/${e}/segments/${s}`);export{b as a,y as b,h as c,S as d,f as e,W as f,$ as g,i as h,E as i,o as j,c as k,u as l,g as m,P as n,m as o,D as p,p as q,_ as r,q as s,l as u};
