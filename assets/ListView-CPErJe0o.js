import{d as fe,r as C,C as ve,o as ge,y as $,a as i,z as g,w as l,A as he,t as r,f as a,c as v,k as S,b as e,x as d,e as c,F as q,h as b,j as L,D as xe,M as ye}from"./index-Dq4rwdRE.js";import{u as be,a as we,b as ke,c as Ae,d as Ve,e as Pe}from"./use-tools-BQ5N0j0o.js";import{m as Te}from"./moment-tPOdpIJC.js";const Ce={class:"flex items-center gap-3 mb-3"},Se={class:"flex flex-col"},qe={class:"text-base text-gray-900 font-bold"},Le={class:"text-xs text-gray-500 line-clamp-1"},Ue={class:"leading-[18px] text-gray-500 h-[72px] line-clamp-4 mb-2"},Ie={class:"flex items-center gap-1.5"},ze={class:"text-xs text-gray-400"},De={key:0,class:""},Fe={class:"flex items-center gap-3 mb-3"},Me={class:"flex flex-col"},Be={class:"text-base text-gray-900 font-bold"},Ne={class:"text-xs text-gray-500 line-clamp-1"},Oe={class:"leading-[18px] text-gray-500 mb-4"},$e={class:"flex flex-col gap-2"},je={class:"text-xs text-gray-500"},He={class:"font-bold text-gray-900 mb-2"},Re={class:"text-gray-500 text-xs"},Ge={key:0,class:""},Ee={class:"flex flex-col gap-4"},Je={class:"flex items-center gap-2 text-xs"},Ke={class:"text-gray-900 font-bold"},We={class:"text-gray-500"},Qe={key:0,class:"text-red-700"},Xe={class:"text-xs text-gray-500"},Ye={class:"flex items-center justify-between"},Ze={class:"text-lg font-bold text-gray-700"},et={class:"pt-6"},tt={class:"rounded-lg border border-gray-200 w-full overflow-x-auto"},at={class:"w-full leading-[18px] text-xs text-gray-700 font-normal"},st={class:"p-2 pl-3"},lt={class:"p-2 pl-3 w-[236px]"},ot={class:"p-2 pl-3"},nt={class:"p-2 pl-3 w-[62px]"},it={class:"rounded-lg border border-gray-200 w-full overflow-x-auto"},rt={class:"w-full leading-[18px] text-xs text-gray-700 font-normal mb-3"},dt={key:0,class:"border-b border-gray-200"},ct={class:"p-2 pl-3"},ut={class:"p-2 pl-3"},pt={class:"p-2 pl-3"},mt={class:"flex items-center justify-between"},_t={class:""},ht=fe({__name:"ListView",props:{createType:{type:String,required:!0}},emits:["update:create-type"],setup(j,{emit:H}){const w=he(),I=j,M=H,n=C({fileList:[],icon:"",name:"",openapi_schema:"",headers:[]}),{loading:R,api_tool_provider:k,loadApiToolProvider:G}=be(),{loading:E,paginator:z,api_tool_providers:_,loadApiToolProviders:A}=we(),{handleDelete:J}=Pe(),{loading:K,handleUpdateApiToolProvider:W}=ke(),{loading:Q,handleCreateApiToolProvider:X}=Ae(),{handleValidateOpenAPISchema:Y}=Ve(),D=C(),u=C(-1),Z=C(!1),V=C(!1),ee=ve(()=>{try{const o=[],t=JSON.parse(n.value.openapi_schema);if("paths"in t){for(const f in t.paths)for(const h in t.paths[f])if(["get","post"].includes(h)){const p=t.paths[f][h];"operationId"in p&&"description"in p&&o.push({name:p==null?void 0:p.operationId,description:p==null?void 0:p.description,method:h,path:f})}}return o}catch(o){return ye.error(o.message),[]}}),te=o=>{var p;const{scrollTop:t,scrollHeight:f,clientHeight:h}=o.target;if(t+h>=f-10){if(E.value)return;A(!1,String(((p=w.query)==null?void 0:p.search_word)??""))}},ae=async()=>{var t;const o=_.value[u.value].id;await G(o),(t=D.value)==null||t.resetFields(),n.value.fileList=[{uid:"1",name:"插件图标",url:k.value.icon}],n.value.icon=k.value.icon,n.value.name=k.value.name,n.value.openapi_schema=k.value.openapi_schema,n.value.headers=k.value.headers,V.value=!0},se=()=>{const o=_.value[u.value].id;J(o,()=>{var t;P(),u.value=-1,A(!0,String(((t=w.query)==null?void 0:t.search_word)??""))})},le=async({values:o,errors:t})=>{var f;t||(I.createType==="tool"?await X(o):V.value&&await W(_.value[u.value].id,o),P(),u.value=-1,await A(!0,String(((f=w.query)==null?void 0:f.search_word)??"")))},P=()=>{var o;(o=D.value)==null||o.resetFields(),M("update:create-type",""),V.value=!1};return ge(()=>{var o;return A(!0,String(((o=w.query)==null?void 0:o.search_word)??""))}),$(()=>{var o;return(o=w.query)==null?void 0:o.search_word},o=>{A(!0,String(o))}),$(()=>{var o;return(o=w.query)==null?void 0:o.create_type},o=>{o==="tool"&&M("update:create-type","tool")},{immediate:!0}),(o,t)=>{const f=r("a-avatar"),h=r("icon-user"),p=r("a-card"),U=r("a-col"),oe=r("a-empty"),B=r("a-row"),N=r("a-spin"),O=r("a-space"),ne=r("icon-settings"),x=r("a-button"),ie=r("a-drawer"),re=r("icon-close"),de=r("a-upload"),y=r("a-form-item"),F=r("a-input"),ce=r("a-textarea"),ue=r("icon-delete"),pe=r("icon-plus"),me=r("a-form"),_e=r("a-modal");return i(),g(N,{loading:Z.value,class:"block h-full w-full scrollbar-w-none overflow-scroll",onScroll:te},{default:l(()=>[a(B,{gutter:[20,20],class:"flex-1"},{default:l(()=>[(i(!0),v(q,null,S(c(_),(s,m)=>(i(),g(U,{key:s.name,span:6},{default:l(()=>[a(p,{hoverable:"",class:"cursor-pointer rounded-lg",onClick:T=>u.value=Number(m)},{default:l(()=>[e("div",Ce,[a(f,{size:40,shape:"square","image-url":s.icon},null,8,["image-url"]),e("div",Se,[e("div",qe,d(s.name),1),e("div",Le," 提供商 "+d(s.name)+" · "+d(s.tools.length)+" 插件 ",1)])]),e("div",Ue,d(s.description),1),e("div",Ie,[a(f,{size:18,class:"bg-blue-700"},{default:l(()=>[a(h)]),_:1}),e("div",ze," 慕小课 · 编辑时间 "+d(c(Te)(s.created_at*1e3).format("MM-DD HH:mm")),1)])]),_:2},1032,["onClick"])]),_:2},1024))),128)),c(_).length===0?(i(),g(U,{key:0,span:24},{default:l(()=>[a(oe,{description:"没有可用的API插件",class:"h-[400px] flex flex-col items-center justify-center"})]),_:1})):b("",!0)]),_:1}),c(z).total_page>=2?(i(),g(B,{key:0},{default:l(()=>[c(z).current_page<=c(z).total_page?(i(),g(U,{key:0,span:24,align:"center"},{default:l(()=>[a(O,{class:"my-4"},{default:l(()=>[a(N),t[6]||(t[6]=e("div",{class:"text-gray-400"},"加载中",-1))]),_:1})]),_:1})):(i(),g(U,{key:1,span:24,align:"center"},{default:l(()=>t[7]||(t[7]=[e("div",{class:"text-gray-400 my-4"},"数据已加载完成",-1)])),_:1}))]),_:1})):b("",!0),a(ie,{visible:u.value!=-1,width:350,footer:!1,title:"工具详情","drawer-style":{background:"#F9FAFB"},onCancel:t[0]||(t[0]=s=>u.value=-1)},{default:l(()=>[u.value!=-1?(i(),v("div",De,[e("div",Fe,[a(f,{size:40,shape:"square","image-url":c(_)[u.value].icon},null,8,["image-url"]),e("div",Me,[e("div",Be,d(c(_)[u.value].name),1),e("div",Ne," 提供商 "+d(c(_)[u.value].name)+" · "+d(c(_)[u.value].tools.length)+" 插件 ",1)])]),e("div",Oe,d(c(_)[u.value].description),1),a(x,{loading:c(R),type:"dashed",long:"",class:"mb-2 rounded-lg",onClick:ae},{icon:l(()=>[a(ne)]),default:l(()=>[t[8]||(t[8]=L(" 编辑工具 "))]),_:1},8,["loading"]),t[10]||(t[10]=e("hr",{class:"my-4"},null,-1)),e("div",$e,[e("div",je," 包含 "+d(c(_)[u.value].tools.length)+" 个工具 ",1),(i(!0),v(q,null,S(c(_)[u.value].tools,s=>(i(),g(p,{key:s.name,class:"cursor-pointer flex flex-col rounded-xl"},{default:l(()=>[e("div",He,d(s.name),1),e("div",Re,d(s.description),1),s.inputs.length>0?(i(),v("div",Ge,[t[9]||(t[9]=e("div",{class:"flex items-center gap-2 my-4"},[e("div",{class:"text-xs font-bold text-gray-500"},"参数"),e("hr",{class:"flex-1"})],-1)),e("div",Ee,[(i(!0),v(q,null,S(s.inputs,m=>(i(),v("div",{key:m.name,class:"flex flex-col gap-2"},[e("div",Je,[e("div",Ke,d(m.name),1),e("div",We,d(c(xe)[m.type]),1),m.required?(i(),v("div",Qe,"必填")):b("",!0)]),e("div",Xe,d(m.description),1)]))),128))])])):b("",!0)]),_:2},1024))),128))])])):b("",!0)]),_:1},8,["visible"]),a(_e,{width:630,visible:I.createType==="tool"||V.value,"hide-title":"",footer:!1,"modal-class":"rounded-xl",onCancel:P},{default:l(()=>[e("div",Ye,[e("div",Ze,d(I.createType==="tool"?"新建":"更新")+"插件 ",1),a(x,{type:"text",class:"!text-gray-700",size:"small",onClick:P},{icon:l(()=>[a(re)]),_:1})]),e("div",et,[a(me,{ref_key:"formRef",ref:D,model:n.value,onSubmit:le,layout:"vertical"},{default:l(()=>[a(y,{field:"fileList","hide-label":"",rules:[{required:!0,message:"插件图标不能为空"}]},{default:l(()=>[a(de,{limit:1,"list-type":"picture-card",accept:"image/png, image/jpeg",class:"!w-auto mx-auto","file-list":n.value.fileList,"onUpdate:fileList":t[1]||(t[1]=s=>n.value.fileList=s),"image-preview":"","custom-request":s=>({}),"on-before-remove":async s=>(n.value.icon="",!0)},null,8,["file-list","on-before-remove"])]),_:1}),a(y,{field:"name",label:"插件名称","asterisk-position":"end",rules:[{required:!0,message:"插件名称不能为空"}]},{default:l(()=>[a(F,{modelValue:n.value.name,"onUpdate:modelValue":t[2]||(t[2]=s=>n.value.name=s),placeholder:"请输入插件名称，确保名称含义清晰","show-word-limit":"","max-length":60},null,8,["modelValue"])]),_:1}),a(y,{field:"openapi_schema",label:"OpenAPI Schema","asterisk-position":"end",rules:[{required:!0,message:"OpenAPI Schema不能为空"}]},{default:l(()=>[a(ce,{modelValue:n.value.openapi_schema,"onUpdate:modelValue":t[3]||(t[3]=s=>n.value.openapi_schema=s),"auto-size":{minRows:4,maxRows:6},placeholder:"在此处输入您的 OpenAPI Schema",onBlur:t[4]||(t[4]=()=>{n.value.openapi_schema.trim()!==""&&c(Y)(n.value.openapi_schema)})},null,8,["modelValue"])]),_:1}),a(y,{label:"可用工具"},{default:l(()=>[e("div",tt,[e("table",at,[t[11]||(t[11]=e("thead",{class:"text-gray-500"},[e("tr",{class:"border-b border-gray-200"},[e("th",{class:"p-2 pl-3 font-medium"},"名称"),e("th",{class:"p-2 pl-3 font-medium w-[236px]"},"描述"),e("th",{class:"p-2 pl-3 font-medium"},"方法"),e("th",{class:"p-2 pl-3 font-medium"},"路径")])],-1)),e("tbody",null,[(i(!0),v(q,null,S(ee.value,(s,m)=>(i(),v("tr",{key:m,class:"border-b last:border-0 border-gray-200 text-gray-700"},[e("td",st,d(s.name),1),e("td",lt,d(s.description),1),e("td",ot,d(s.method),1),e("td",nt,d(s.path),1)]))),128))])])])]),_:1}),a(y,{label:"Headers"},{default:l(()=>[e("div",it,[e("table",rt,[t[12]||(t[12]=e("thead",{class:"text-gray-500"},[e("tr",{class:"border-b border-gray-200"},[e("th",{class:"p-2 pl-3 font-medium"},"Key"),e("th",{class:"p-2 pl-3 font-medium"},"Value"),e("th",{class:"p-2 pl-3 font-medium w-[50px]"},"操作")])],-1)),n.value.headers.length>0?(i(),v("tbody",dt,[(i(!0),v(q,null,S(n.value.headers,(s,m)=>(i(),v("tr",{key:m,class:"border-b last:border-0 border-gray-200"},[e("td",ct,[a(y,{field:`headers[${m}].key`,"hide-label":"",class:"m-0"},{default:l(()=>[a(F,{modelValue:s.key,"onUpdate:modelValue":T=>s.key=T,placeholder:"请输入请求头键名"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["field"])]),e("td",ut,[a(y,{field:`headers[${m}].value`,"hide-label":"",class:"m-0"},{default:l(()=>[a(F,{modelValue:s.value,"onUpdate:modelValue":T=>s.value=T,placeholder:"请输入请求头键值内容"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["field"])]),e("td",pt,[a(x,{size:"mini",type:"text",class:"!text-gray-700",onClick:T=>n.value.headers.splice(m,1)},{icon:l(()=>[a(ue)]),_:2},1032,["onClick"])])]))),128))])):b("",!0)]),a(x,{size:"mini",class:"rounded ml-3 mb-3 !text-gray-700",onClick:t[5]||(t[5]=s=>n.value.headers.push({key:"",value:""}))},{icon:l(()=>[a(pe)]),default:l(()=>[t[13]||(t[13]=L(" 增加参数 "))]),_:1})])]),_:1}),e("div",mt,[e("div",_t,[V.value?(i(),g(x,{key:0,class:"rounded-lg !text-red-700",onClick:se},{default:l(()=>t[14]||(t[14]=[L(" 删除 ")])),_:1})):b("",!0)]),a(O,{size:16},{default:l(()=>[a(x,{class:"rounded-lg",onClick:P},{default:l(()=>t[15]||(t[15]=[L("取消")])),_:1}),a(x,{loading:c(K)||c(Q),type:"primary","html-type":"submit",class:"rounded-lg"},{default:l(()=>t[16]||(t[16]=[L(" 保存 ")])),_:1},8,["loading"])]),_:1})])]),_:1},8,["model"])])]),_:1},8,["visible"])]),_:1},8,["loading"])}}});export{ht as default};
