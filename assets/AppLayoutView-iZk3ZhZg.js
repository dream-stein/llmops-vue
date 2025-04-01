import{h as M}from"./moment-C5S46NFB.js";import{d as N,y as T,z as H,w as a,q as o,t as d,e,a as n,x as m,b as t,c as y,j as G,i as c,f as L,F as E,r as O,o as R,A as U}from"./index-_6t8UBVH.js";import{f as W,g as I,b as J,h as K,i as Q}from"./use-app-B3-QCv50.js";const X={class:""},Z={class:"flex items-center gap-3 mb-3"},tt={class:"flex flex-col"},et={class:"text-gray-700 font-bold"},st={class:"text-xs text-gray-500"},at={class:"text-gray-500"},ot={class:"text-gray-500 text-xs mb-[18px]"},nt={class:"flex items-center justify-between"},it={class:"flex flex-col gap-2"},lt={class:"flex items-center gap-2"},dt={class:"text-xs text-gray-500"},rt={key:0,class:"flex items-center justify-center"},ct={key:1,class:"text-gray-400 my-4"},pt=N({__name:"PublishHistoryDrawer",props:{visible:{type:Boolean,required:!0},app:{type:Object,required:!0}},emits:["update:visible","loadDraftAppConfig"],setup(h,{emit:f}){const _=h,u=f,{loading:p,paginator:g,publishHistories:C,loadPublishHistories:z}=W(),{handleFallbackHistoryToDraft:V}=I(),$=async s=>{var v;const{scrollTop:i,scrollHeight:b,clientHeight:x}=s.target;if(i+x>=b-10){if(p.value)return;await z((v=_.app)==null?void 0:v.id)}};return T(()=>_.visible,async s=>{var i;s?await z((i=_.app)==null?void 0:i.id,!0):C.splice(0,C.length)}),(s,i)=>{const b=o("a-avatar"),x=o("a-divider"),v=o("a-tag"),w=o("a-button"),q=o("a-card"),D=o("a-spin"),B=o("a-space"),P=o("a-drawer");return d(),H(P,{visible:_.visible,title:"发布历史",width:394,footer:!1,"drawer-style":{backgroundColor:"#f9fafb"},onCancel:i[0]||(i[0]=()=>u("update:visible",!1))},{default:a(()=>[e(D,{loading:t(p),class:"block h-full w-full scrollbar-w-none overflow-scroll",onScroll:$},{default:a(()=>{var S,Y,A,j;return[n("div",X,[n("div",Z,[e(b,{size:40,shape:"square",class:"rounded-lg","image-url":(S=h.app)==null?void 0:S.icon},null,8,["image-url"]),n("div",tt,[n("div",et,m((Y=h.app)==null?void 0:Y.name),1),n("div",st," 最近编辑 · "+m(t(M)((A=h.app)==null?void 0:A.draft_updated_at).format("YYYY-MM-DD HH:mm:ss")),1)])]),n("div",at,m((j=h.app)==null?void 0:j.description),1)]),e(x),n("div",ot," 共计 "+m(t(g).total_record)+" 条发布记录 ",1),(d(!0),y(E,null,G(t(C),(k,l)=>(d(),H(q,{key:k.id,hoverable:"",class:"rounded-lg mb-4 cursor-pointer group"},{default:a(()=>[n("div",nt,[n("div",it,[n("div",lt,[i[2]||(i[2]=n("div",{class:"font-bold text-gray-900"},"版本",-1)),e(v,{size:"small",class:"text-gray-700 rounded-lg !border !border-gray-100"},{default:a(()=>[c(" # "+m(String(k.version).padStart(3,"0")),1)]),_:2},1024),l===0?(d(),H(v,{key:0,size:"small",class:"text-gray-700 rounded-lg !border !border-gray-100"},{default:a(()=>i[1]||(i[1]=[c(" 当前版本 ")])),_:1})):L("",!0)]),n("div",dt," 发布时间："+m(t(M)(k.created_at).format("YYYY-MM-DD HH:mm")),1)]),e(w,{size:"small",class:"rounded-lg hidden group-hover:block",onClick:async()=>{var r;await t(V)((r=_.app)==null?void 0:r.id,k.id,async()=>{u("update:visible",!1),u("loadDraftAppConfig")})}},{default:a(()=>i[3]||(i[3]=[c(" 回退 ")])),_:2},1032,["onClick"])])]),_:2},1024))),128)),t(g).total_page>=2?(d(),y("div",rt,[t(g).current_page<=t(g).total_page?(d(),H(B,{key:0,class:"my-4"},{default:a(()=>[e(D),i[4]||(i[4]=n("div",{class:"text-gray-400"},"加载中",-1))]),_:1})):(d(),y("div",ct,"数据已加载完成"))])):L("",!0)]}),_:1},8,["loading"])]),_:1},8,["visible"])}}}),_t={class:"min-h-screen flex flex-col h-full overflow-hidden"},ut={class:"h-[77px] bg-gray-50 p-4 flex items-center justify-between relative border-b"},mt={class:"flex items-center gap-2"},ft={class:"flex items-center gap-3"},gt={class:"flex flex-col justify-between h-[40px]"},bt={key:1,class:"text-gray-700 font-bold"},xt={key:2,class:"flex items-center gap-2"},vt={key:3,class:"flex items-center gap-2"},yt={class:"flex items-center h-[18px] text-xs text-gray-500"},ht={class:"flex items-center h-[18px] text-xs text-gray-500"},wt={class:"absolute left-1/2 -translate-x-1/2"},kt={class:""},Ht=N({__name:"AppLayoutView",setup(h){const f=U(),_=O(!1),{loading:u,app:p,loadApp:g}=J(),{loading:C,handlePublish:z}=K(),{handleCancelPublish:V}=Q();return R(async()=>{var $;return await g(($=f.params)==null?void 0:$.app_id)}),($,s)=>{const i=o("icon-left"),b=o("a-button"),x=o("router-link"),v=o("a-avatar"),w=o("a-skeleton-line"),q=o("icon-user"),D=o("icon-schedule"),B=o("a-tag"),P=o("a-space"),S=o("icon-down"),Y=o("a-doption"),A=o("a-dropdown"),j=o("a-button-group"),k=o("router-view");return d(),y("div",_t,[n("div",ut,[n("div",mt,[e(x,{to:{name:"space-apps-list"}},{default:a(()=>[e(b,{size:"mini"},{icon:a(()=>[e(i)]),_:1})]),_:1}),n("div",ft,[e(v,{size:40,shape:"square",class:"rounded-lg","image-url":t(p).icon},null,8,["image-url"]),n("div",gt,[t(u)?(d(),H(w,{key:0,widths:[100]})):(d(),y("div",bt,m(t(p).name),1)),t(u)?(d(),y("div",xt,[e(w,{widths:[60],"line-height":18}),e(w,{widths:[60],"line-height":18}),e(w,{widths:[60],"line-height":18})])):(d(),y("div",vt,[n("div",yt,[e(q),s[4]||(s[4]=c(" 个人空间 "))]),n("div",ht,[e(D),c(" "+m(t(p).status==="draft"?"草稿":"已发布"),1)]),e(B,{size:"small",class:"rounded h-[18px] leading-[18px] bg-gray-200 text-gray-500"},{default:a(()=>[c(" 已自动保存 "+m(t(M)(t(p).draft_updated_at).format("HH:mm:ss")),1)]),_:1})]))])])]),n("div",wt,[e(P,{size:12},{default:a(()=>{var l,r,F;return[e(x,{to:{name:"space-apps-detail",params:{app_id:String((l=t(f).params)==null?void 0:l.app_id)}},class:"text-base font-bold text-gray-500","active-class":"!text-blue-700"},{default:a(()=>s[5]||(s[5]=[c(" 编排 ")])),_:1},8,["to"]),e(x,{to:{name:"space-apps-published",params:{app_id:String((r=t(f).params)==null?void 0:r.app_id)}},class:"text-base font-bold text-gray-500","active-class":"!text-blue-700"},{default:a(()=>s[6]||(s[6]=[c(" 发布配置 ")])),_:1},8,["to"]),e(x,{to:{name:"space-apps-analysis",params:{app_id:String((F=t(f).params)==null?void 0:F.app_id)}},class:"text-base font-bold text-gray-500","active-class":"!text-blue-700"},{default:a(()=>s[7]||(s[7]=[c(" 统计分析 ")])),_:1},8,["to"])]}),_:1})]),n("div",kt,[e(P,{size:12},{default:a(()=>[e(b,{disabled:t(u),class:"rounded-lg",onClick:s[0]||(s[0]=l=>_.value=!0)},{icon:a(()=>[e(D)]),_:1},8,["disabled"]),e(j,null,{default:a(()=>[e(b,{disabled:t(u),loading:t(C),type:"primary",class:"!rounded-tl-lg !rounded-bl-lg",onClick:s[1]||(s[1]=async()=>{var r;const l=(r=t(f).params)==null?void 0:r.add_id;await t(z)(l),await t(g)(l)})},{default:a(()=>s[8]||(s[8]=[c(" 更新发布 ")])),_:1},8,["disabled","loading"]),e(A,{position:"br"},{content:a(()=>[e(Y,{disabled:t(p).status==="draft",class:"!text-red-700",onClick:s[2]||(s[2]=async()=>{var r;const l=(r=t(f).params)==null?void 0:r.app_id;await t(V)(l,async()=>await t(g)(l))})},{default:a(()=>s[9]||(s[9]=[c(" 取消发布 ")])),_:1},8,["disabled"])]),default:a(()=>[e(b,{disabled:t(u),type:"primary",class:"!rounded-tr-lg !rounded-br-lg !w-5"},{icon:a(()=>[e(S)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})])]),e(k,{app:t(p)},null,8,["app"]),e(pt,{app:t(p),visible:_.value,"onUpdate:visible":s[3]||(s[3]=l=>_.value=l),onLoadDraftAppConfig:()=>{}},null,8,["app","visible"])])}}});export{Ht as default};
