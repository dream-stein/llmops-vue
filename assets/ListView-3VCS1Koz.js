import{u as ae,a as se,b as ne}from"./use-dataset-sDRCM563.js";import{g as le}from"./dataset-DVrif3iK.js";import{u as ie}from"./upload-file-D8lScIpm.js";import{h as re}from"./moment-C5S46NFB.js";import{d as ce,o as d,l as p,w as t,u as a,j as s,e,c as de,g as ue,a as l,f as _,t as u,F as me,m as q}from"./index-DudfF476.js";const pe={class:"flex items-center gap-3 mb-3"},_e={class:"flex flex-1 justify-between"},fe={class:"flex flex-col"},ge={class:"text-xs text-gray-500 line-clamp-1"},ye={class:"leading-[18px] text-gray-500 h-[72px] line-clamp-4 mb-2"},xe={class:"flex items-center gap-1.5"},be={class:"text-xs text-gray-400"},ve={class:"flex items-center justify-between"},we={class:"text-lg font-bold text-gray-700"},ke={class:"pt-6"},he={class:"flex items-center justify-between"},Ue=ce({__name:"ListView",props:{createType:{type:String,required:!0}},emits:["update-create-type"],setup(z,{emit:M}){let b="";const C=z,B=M,{loading:D,datasets:V,paginator:v,loadDatasets:w}=ae(),{loading:F,form:i,formRef:k,saveDataset:H,showUpdateModal:N,updateShowUpdateModal:L}=se(),{handleDelete:R}=ne(),I=async r=>{const{scrollTop:o,scrollHeight:c,clientHeight:m}=r.target;if(o+m>=c-10){if(D.value)return;await w()}},E=r=>{L(!0,async()=>{var m;const c=(await le(r)).data;b=r,(m=k.value)==null||m.resetFields(),i.fileList=[{uid:"1",name:"知识库图标",url:c.icon}],i.icon=c.icon,i.name=c.name,i.description=c.description})},f=()=>{L(!1,async()=>{var r;b="",(r=k.value)==null||r.resetFields(),B("update-create-type","")})},G=async({errors:r})=>{r||(await H(b),f(),await w(!0))};return(r,o)=>{const c=s("a-avatar"),m=s("router-link"),O=s("icon-more"),g=s("a-button"),S=s("a-doption"),P=s("a-dropdown"),W=s("icon-user"),A=s("a-card"),y=s("a-col"),J=s("a-empty"),T=s("a-row"),U=s("a-spin"),j=s("a-space"),K=s("icon-close"),Q=s("a-upload"),h=s("a-form-item"),X=s("a-input"),Y=s("a-textarea"),Z=s("a-form"),$=s("a-modal");return d(),p(U,{loading:a(D),class:"block h-full w-full scrollbar-w-none overflow-scroll",onScroll:I},{default:t(()=>[e(T,{gutter:[20,20],class:"flex-1"},{default:t(()=>[(d(!0),de(me,null,ue(a(V),n=>(d(),p(y,{key:n.id,span:6},{default:t(()=>[e(A,{hoverable:"",class:"cursor-pointer rounded-lg"},{default:t(()=>[l("div",pe,[e(c,{size:40,shape:"square","image-url":n.icon},null,8,["image-url"]),l("div",_e,[l("div",fe,[e(m,{to:{name:"space-datasets-documents-list",params:{dataset_id:n.id}},class:"text-base text-gray-900 font-bold"},{default:t(()=>[_(u(n.name),1)]),_:2},1032,["to"]),l("div",ge,u(n.document_count)+" 文档 · "+u(Math.round(n.character_count/1e3))+" 千字符 · "+u(n.related_app_count)+" 关联应用 ",1)]),e(P,{position:"br"},{content:t(()=>[e(S,{onClick:()=>E(n.id)},{default:t(()=>o[3]||(o[3]=[_("设置")])),_:2},1032,["onClick"]),e(S,{class:"!text-red-500",onClick:()=>a(R)(n.id,()=>a(w)(!0))},{default:t(()=>o[4]||(o[4]=[_("删除")])),_:2},1032,["onClick"])]),default:t(()=>[e(g,{type:"text",size:"small",class:"rounded-lg !text-gray-700"},{icon:t(()=>[e(O)]),_:1})]),_:2},1024)])]),l("div",ye,u(n.description),1),l("div",xe,[e(c,{size:18,class:"bg-blue-700"},{default:t(()=>[e(W)]),_:1}),l("div",be," 慕小课 · 最近编辑 "+u(a(re)(n.created_at).format("MM-DD HH:mm")),1)])]),_:2},1024)]),_:2},1024))),128)),a(V).length===0?(d(),p(y,{key:0,span:24},{default:t(()=>[e(J,{description:"没有可用的知识库",class:"h-[400px] flex flex-col items-center justify-center"})]),_:1})):q("",!0)]),_:1}),a(v).total_page>=2?(d(),p(T,{key:0},{default:t(()=>[a(v).current_page<=a(v).total_page?(d(),p(y,{key:0,span:24,align:"center"},{default:t(()=>[e(j,{class:"my-4"},{default:t(()=>[e(U),o[5]||(o[5]=l("div",{class:"text-gray-400"},"加载中",-1))]),_:1})]),_:1})):(d(),p(y,{key:1,span:24,align:"center"},{default:t(()=>o[6]||(o[6]=[l("div",{class:"text-gray-400 my-4"},"数据已加载完成",-1)])),_:1}))]),_:1})):q("",!0),e($,{width:520,visible:C.createType==="dataset"||a(N),"hide-title":"",footer:!1,"modal-class":"rounded-xl",onCancel:f},{default:t(()=>[l("div",ve,[l("div",we,u(C.createType==="dataset"?"新建":"更新")+"知识库 ",1),e(g,{type:"text",class:"!text-gray-700",size:"small",onClick:f},{icon:t(()=>[e(K)]),_:1})]),l("div",ke,[e(Z,{ref_key:"formRef",ref:k,model:a(i),onSubmit:G,layout:"vertical"},{default:t(()=>[e(h,{field:"fileList","hide-label":"",rules:[{required:!0,message:"知识库图标不能为空"}]},{default:t(()=>[e(Q,{limit:1,"list-type":"picture-card",accept:"image/png, image/jpeg",class:"!w-auto mx-auto","file-list":a(i).fileList,"onUpdate:fileList":o[0]||(o[0]=n=>a(i).fileList=n),"image-preview":"","custom-request":n=>{const{fileItem:ee,onSuccess:te,onError:oe}=n;return(async()=>{try{const x=await a(ie)(ee.file);a(i).icon=x.data.image_url,te(x)}catch(x){oe(x)}})(),{abort:()=>{}}},"on-before-remove":async()=>(a(i).icon="",!0)},null,8,["file-list","custom-request","on-before-remove"])]),_:1}),e(h,{field:"name",label:"知识库名称","asterisk-position":"end",rules:[{required:!0,message:"知识库名称不能为空"}]},{default:t(()=>[e(X,{modelValue:a(i).name,"onUpdate:modelValue":o[1]||(o[1]=n=>a(i).name=n),placeholder:"请输入知识库名称","show-word-limit":"","max-length":60},null,8,["modelValue"])]),_:1}),e(h,{field:"description",label:"知识库描述","asterisk-position":"end"},{default:t(()=>[e(Y,{modelValue:a(i).description,"onUpdate:modelValue":o[2]||(o[2]=n=>a(i).description=n),"auto-size":{minRows:4,maxRows:6},placeholder:"请输入知识库内容的描述"},null,8,["modelValue"])]),_:1}),l("div",he,[o[9]||(o[9]=l("div",{class:""},null,-1)),e(j,{size:16},{default:t(()=>[e(g,{class:"rounded-lg",onClick:f},{default:t(()=>o[7]||(o[7]=[_("取消")])),_:1}),e(g,{loading:a(F),type:"primary","html-type":"submit",class:"rounded-lg"},{default:t(()=>o[8]||(o[8]=[_(" 保存 ")])),_:1},8,["loading"])]),_:1})])]),_:1},8,["model"])])]),_:1},8,["visible"])]),_:1},8,["loading"])}}});export{Ue as default};
