import{d as he,r as C,D as xe,E as ye,o as be,y as j,z as g,w as l,A as we,q as r,t as d,e as a,c as v,j as S,a as e,x as c,b as i,F as q,f as w,i as L,G as ke,M as Ae}from"./index-DwFFb2my.js";import{u as Te,a as Ve,b as Pe,c as Ce,d as Se,e as qe}from"./use-tools-DFFO9sRv.js";import{m as Le}from"./moment-DOXqoJ2B.js";const Ie={class:"flex items-center gap-3 mb-3"},Ue={class:"flex flex-col"},ze={class:"text-base text-gray-900 font-bold"},De={class:"text-xs text-gray-500 line-clamp-1"},Me={class:"leading-[18px] text-gray-500 h-[72px] line-clamp-4 mb-2"},Fe={class:"flex items-center gap-1.5"},Oe={class:"text-xs text-gray-400"},Be={key:0,class:""},Ne={class:"flex items-center gap-3 mb-3"},$e={class:"flex flex-col"},je={class:"text-base text-gray-900 font-bold"},He={class:"text-xs text-gray-500 line-clamp-1"},Re={class:"leading-[18px] text-gray-500 mb-4"},Ee={class:"flex flex-col gap-2"},Ge={class:"text-xs text-gray-500"},Je={class:"font-bold text-gray-900 mb-2"},Ke={class:"text-gray-500 text-xs"},We={key:0,class:""},Qe={class:"flex flex-col gap-4"},Xe={class:"flex items-center gap-2 text-xs"},Ye={class:"text-gray-900 font-bold"},Ze={class:"text-gray-500"},et={key:0,class:"text-red-700"},tt={class:"text-xs text-gray-500"},at={class:"flex items-center justify-between"},st={class:"text-lg font-bold text-gray-700"},lt={class:"pt-6"},ot={class:"rounded-lg border border-gray-200 w-full overflow-x-auto"},nt={class:"w-full leading-[18px] text-xs text-gray-700 font-normal"},it={class:"p-2 pl-3"},rt={class:"p-2 pl-3 w-[236px]"},dt={class:"p-2 pl-3"},ct={class:"p-2 pl-3 w-[62px]"},ut={class:"rounded-lg border border-gray-200 w-full overflow-x-auto"},pt={class:"w-full leading-[18px] text-xs text-gray-700 font-normal mb-3"},mt={key:0,class:"border-b border-gray-200"},_t={class:"p-2 pl-3"},ft={class:"p-2 pl-3"},vt={class:"p-2 pl-3"},gt={class:"flex items-center justify-between"},ht={class:""},kt=he({__name:"ListView",props:{createType:{type:String,required:!0}},emits:["update-create-type"],setup(H,{emit:R}){const k=we(),U=H,F=R,n=C({fileList:[],icon:"",name:"",openapi_schema:"",headers:[]}),{image_url:O,handleUploadImage:E}=xe(),{loading:G,api_tool_provider:A,loadApiToolProvider:J}=Te(),{loading:K,paginator:z,api_tool_providers:_,loadApiToolProviders:T}=Ve(),{handleDelete:W}=qe(),{loading:Q,handleUpdateApiToolProvider:X}=Pe(),{loading:Y,handleCreateApiToolProvider:Z}=Ce(),{handleValidateOpenAPISchema:ee}=Se(),D=C(),u=C(-1),te=C(!1),V=C(!1),ae=ye(()=>{try{if(n.value.openapi_schema==="")return[];const o=[],t=JSON.parse(n.value.openapi_schema);if("paths"in t){for(const f in t.paths)for(const h in t.paths[f])if(["get","post"].includes(h)){const m=t.paths[f][h];"operationId"in m&&"description"in m&&o.push({name:m==null?void 0:m.operationId,description:m==null?void 0:m.description,method:h,path:f})}}return o}catch(o){return Ae.error(o.message),[]}}),se=o=>{var m;const{scrollTop:t,scrollHeight:f,clientHeight:h}=o.target;if(t+h>=f-10){if(K.value)return;T(!1,String(((m=k.query)==null?void 0:m.search_word)??""))}},le=async()=>{var t;const o=_.value[u.value].id;await J(o),(t=D.value)==null||t.resetFields(),n.value.fileList=[{uid:"1",name:"插件图标",url:A.value.icon}],n.value.icon=A.value.icon,n.value.name=A.value.name,n.value.openapi_schema=A.value.openapi_schema,n.value.headers=A.value.headers,V.value=!0},oe=()=>{const o=_.value[u.value].id;W(o,()=>{var t;P(),u.value=-1,T(!0,String(((t=k.query)==null?void 0:t.search_word)??""))})},ne=async({values:o,errors:t})=>{var f;t||(U.createType==="tool"?await Z(o):V.value&&await X(_.value[u.value].id,o),P(),u.value=-1,await T(!0,String(((f=k.query)==null?void 0:f.search_word)??"")))},P=()=>{var o;(o=D.value)==null||o.resetFields(),F("update-create-type",""),V.value=!1};return be(()=>{var o;return T(!0,String(((o=k.query)==null?void 0:o.search_word)??""))}),j(()=>{var o;return(o=k.query)==null?void 0:o.search_word},o=>{T(!0,String(o))}),j(()=>{var o;return(o=k.query)==null?void 0:o.create_type},o=>{o==="tool"&&F("update-create-type","tool")},{immediate:!0}),(o,t)=>{const f=r("a-avatar"),h=r("icon-user"),m=r("a-card"),I=r("a-col"),ie=r("a-empty"),B=r("a-row"),N=r("a-spin"),$=r("a-space"),re=r("icon-settings"),x=r("a-button"),de=r("a-drawer"),ce=r("icon-close"),ue=r("a-upload"),y=r("a-form-item"),M=r("a-input"),pe=r("a-textarea"),me=r("icon-delete"),_e=r("icon-plus"),fe=r("a-form"),ve=r("a-modal");return d(),g(N,{loading:te.value,class:"block h-full w-full scrollbar-w-none overflow-scroll",onScroll:se},{default:l(()=>[a(B,{gutter:[20,20],class:"flex-1"},{default:l(()=>[(d(!0),v(q,null,S(i(_),(s,p)=>(d(),g(I,{key:s.name,span:6},{default:l(()=>[a(m,{hoverable:"",class:"cursor-pointer rounded-lg",onClick:b=>u.value=Number(p)},{default:l(()=>[e("div",Ie,[a(f,{size:40,shape:"square","image-url":s.icon},null,8,["image-url"]),e("div",Ue,[e("div",ze,c(s.name),1),e("div",De," 提供商 "+c(s.name)+" · "+c(s.tools.length)+" 插件 ",1)])]),e("div",Me,c(s.description),1),e("div",Fe,[a(f,{size:18,class:"bg-blue-700"},{default:l(()=>[a(h)]),_:1}),e("div",Oe," LLMOps · 编辑时间 "+c(i(Le)(s.created_at).format("MM-DD HH:mm")),1)])]),_:2},1032,["onClick"])]),_:2},1024))),128)),i(_).length===0?(d(),g(I,{key:0,span:24},{default:l(()=>[a(ie,{description:"没有可用的API插件",class:"h-[400px] flex flex-col items-center justify-center"})]),_:1})):w("",!0)]),_:1}),i(z).total_page>=2?(d(),g(B,{key:0},{default:l(()=>[i(z).current_page<=i(z).total_page?(d(),g(I,{key:0,span:24,align:"center"},{default:l(()=>[a($,{class:"my-4"},{default:l(()=>[a(N),t[6]||(t[6]=e("div",{class:"text-gray-400"},"加载中",-1))]),_:1})]),_:1})):(d(),g(I,{key:1,span:24,align:"center"},{default:l(()=>t[7]||(t[7]=[e("div",{class:"text-gray-400 my-4"},"数据已加载完成",-1)])),_:1}))]),_:1})):w("",!0),a(de,{visible:u.value!=-1,width:350,footer:!1,title:"工具详情","drawer-style":{background:"#F9FAFB"},onCancel:t[0]||(t[0]=s=>u.value=-1)},{default:l(()=>[u.value!=-1?(d(),v("div",Be,[e("div",Ne,[a(f,{size:40,shape:"square","image-url":i(_)[u.value].icon},null,8,["image-url"]),e("div",$e,[e("div",je,c(i(_)[u.value].name),1),e("div",He," 提供商 "+c(i(_)[u.value].name)+" · "+c(i(_)[u.value].tools.length)+" 插件 ",1)])]),e("div",Re,c(i(_)[u.value].description),1),a(x,{loading:i(G),type:"dashed",long:"",class:"mb-2 rounded-lg",onClick:le},{icon:l(()=>[a(re)]),default:l(()=>[t[8]||(t[8]=L(" 编辑工具 "))]),_:1},8,["loading"]),t[10]||(t[10]=e("hr",{class:"my-4"},null,-1)),e("div",Ee,[e("div",Ge," 包含 "+c(i(_)[u.value].tools.length)+" 个工具 ",1),(d(!0),v(q,null,S(i(_)[u.value].tools,s=>(d(),g(m,{key:s.name,class:"cursor-pointer flex flex-col rounded-xl"},{default:l(()=>[e("div",Je,c(s.name),1),e("div",Ke,c(s.description),1),s.inputs.length>0?(d(),v("div",We,[t[9]||(t[9]=e("div",{class:"flex items-center gap-2 my-4"},[e("div",{class:"text-xs font-bold text-gray-500"},"参数"),e("hr",{class:"flex-1"})],-1)),e("div",Qe,[(d(!0),v(q,null,S(s.inputs,p=>(d(),v("div",{key:p.name,class:"flex flex-col gap-2"},[e("div",Xe,[e("div",Ye,c(p.name),1),e("div",Ze,c(i(ke)[p.type]),1),p.required?(d(),v("div",et,"必填")):w("",!0)]),e("div",tt,c(p.description),1)]))),128))])])):w("",!0)]),_:2},1024))),128))])])):w("",!0)]),_:1},8,["visible"]),a(ve,{width:630,visible:U.createType==="tool"||V.value,"hide-title":"",footer:!1,"modal-class":"rounded-xl",onCancel:P},{default:l(()=>[e("div",at,[e("div",st,c(U.createType==="tool"?"新建":"更新")+"插件 ",1),a(x,{type:"text",class:"!text-gray-700",size:"small",onClick:P},{icon:l(()=>[a(ce)]),_:1})]),e("div",lt,[a(fe,{ref_key:"formRef",ref:D,model:n.value,onSubmit:ne,layout:"vertical"},{default:l(()=>[a(y,{field:"fileList","hide-label":"",rules:[{required:!0,message:"插件图标不能为空"}]},{default:l(()=>[a(ue,{limit:1,"list-type":"picture-card",accept:"image/png, image/jpeg",class:"!w-auto mx-auto","file-list":n.value.fileList,"onUpdate:fileList":t[1]||(t[1]=s=>n.value.fileList=s),"image-preview":"","custom-request":s=>((async()=>{const{fileItem:b,onSuccess:ge,onError:xt}=s;await i(E)(b.file),n.value.icon=i(O),ge(i(O))})(),{}),"on-before-remove":async s=>(n.value.icon="",!0)},null,8,["file-list","custom-request","on-before-remove"])]),_:1}),a(y,{field:"name",label:"插件名称","asterisk-position":"end",rules:[{required:!0,message:"插件名称不能为空"}]},{default:l(()=>[a(M,{modelValue:n.value.name,"onUpdate:modelValue":t[2]||(t[2]=s=>n.value.name=s),placeholder:"请输入插件名称，确保名称含义清晰","show-word-limit":"","max-length":60},null,8,["modelValue"])]),_:1}),a(y,{field:"openapi_schema",label:"OpenAPI Schema","asterisk-position":"end",rules:[{required:!0,message:"OpenAPI Schema不能为空"}]},{default:l(()=>[a(pe,{modelValue:n.value.openapi_schema,"onUpdate:modelValue":t[3]||(t[3]=s=>n.value.openapi_schema=s),"auto-size":{minRows:4,maxRows:6},placeholder:"在此处输入您的 OpenAPI Schema",onBlur:t[4]||(t[4]=()=>{n.value.openapi_schema.trim()!==""&&i(ee)(n.value.openapi_schema)})},null,8,["modelValue"])]),_:1}),a(y,{label:"可用工具"},{default:l(()=>[e("div",ot,[e("table",nt,[t[11]||(t[11]=e("thead",{class:"text-gray-500"},[e("tr",{class:"border-b border-gray-200"},[e("th",{class:"p-2 pl-3 font-medium"},"名称"),e("th",{class:"p-2 pl-3 font-medium w-[236px]"},"描述"),e("th",{class:"p-2 pl-3 font-medium"},"方法"),e("th",{class:"p-2 pl-3 font-medium"},"路径")])],-1)),e("tbody",null,[(d(!0),v(q,null,S(ae.value,(s,p)=>(d(),v("tr",{key:p,class:"border-b last:border-0 border-gray-200 text-gray-700"},[e("td",it,c(s.name),1),e("td",rt,c(s.description),1),e("td",dt,c(s.method),1),e("td",ct,c(s.path),1)]))),128))])])])]),_:1}),a(y,{label:"Headers"},{default:l(()=>[e("div",ut,[e("table",pt,[t[12]||(t[12]=e("thead",{class:"text-gray-500"},[e("tr",{class:"border-b border-gray-200"},[e("th",{class:"p-2 pl-3 font-medium"},"Key"),e("th",{class:"p-2 pl-3 font-medium"},"Value"),e("th",{class:"p-2 pl-3 font-medium w-[50px]"},"操作")])],-1)),n.value.headers.length>0?(d(),v("tbody",mt,[(d(!0),v(q,null,S(n.value.headers,(s,p)=>(d(),v("tr",{key:p,class:"border-b last:border-0 border-gray-200"},[e("td",_t,[a(y,{field:`headers[${p}].key`,"hide-label":"",class:"m-0"},{default:l(()=>[a(M,{modelValue:s.key,"onUpdate:modelValue":b=>s.key=b,placeholder:"请输入请求头键名"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["field"])]),e("td",ft,[a(y,{field:`headers[${p}].value`,"hide-label":"",class:"m-0"},{default:l(()=>[a(M,{modelValue:s.value,"onUpdate:modelValue":b=>s.value=b,placeholder:"请输入请求头键值内容"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["field"])]),e("td",vt,[a(x,{size:"mini",type:"text",class:"!text-gray-700",onClick:b=>n.value.headers.splice(p,1)},{icon:l(()=>[a(me)]),_:2},1032,["onClick"])])]))),128))])):w("",!0)]),a(x,{size:"mini",class:"rounded ml-3 mb-3 !text-gray-700",onClick:t[5]||(t[5]=s=>n.value.headers.push({key:"",value:""}))},{icon:l(()=>[a(_e)]),default:l(()=>[t[13]||(t[13]=L(" 增加参数 "))]),_:1})])]),_:1}),e("div",gt,[e("div",ht,[V.value?(d(),g(x,{key:0,class:"rounded-lg !text-red-700",onClick:oe},{default:l(()=>t[14]||(t[14]=[L(" 删除 ")])),_:1})):w("",!0)]),a($,{size:16},{default:l(()=>[a(x,{class:"rounded-lg",onClick:P},{default:l(()=>t[15]||(t[15]=[L("取消")])),_:1}),a(x,{loading:i(Q)||i(Y),type:"primary","html-type":"submit",class:"rounded-lg"},{default:l(()=>t[16]||(t[16]=[L(" 保存 ")])),_:1},8,["loading"])]),_:1})])]),_:1},8,["model"])])]),_:1},8,["visible"])]),_:1},8,["loading"])}}});export{kt as default};
