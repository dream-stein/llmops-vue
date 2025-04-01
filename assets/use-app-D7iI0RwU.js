import{g as c,p,s as y,r as o,B as _,E as f,o as h,M as u,L as v}from"./index-CK2Jsrw1.js";const b=e=>c(`/apps/${e}`),m=e=>p("/apps",{body:e}),A=(e,a)=>p(`/apps/${e}`,{body:a}),C=e=>p(`/apps/${e}/delete`),w=e=>p(`/apps/${e}/copy`),D=e=>c("/apps",{params:e}),P=e=>c(`/apps/${e}/draft-app-config`),k=(e,a)=>p(`/apps/${e}/draft-app-config`,{body:a}),$=e=>c(`/apps/${e}/summary`),S=(e,a)=>p(`/apps/${e}/summary`,{body:{summary:a}}),W=(e,a,s)=>y(`/apps/${e}/conversations`,{body:{query:a}},s),T=(e,a)=>p(`/apps/${e}/conversations/tasks/${a}/stop`),q=(e,a)=>c(`/apps/${e}/conversations/messages`,{params:a}),z=e=>p(`/apps/${e}/conversations/delete-debug-conversation`),M=e=>p(`/apps/${e}/publish`),j=e=>p(`/apps/${e}/cancel-publish`),F=(e,a)=>c(`/apps/${e}/publish-histories`,{params:a}),H=(e,a)=>p(`/apps/${e}/fallback-history`,{body:{app_config_version_id:a}}),U=e=>c(`/apps/${e}/published-config`),G=e=>p(`/apps/${e}/published-config/regenerate-web-app-token`),O=()=>{const e=o(!1),a=o({});return{loading:e,app:a,loadApp:async t=>{try{e.value=!0;const n=await b(t);a.value=n.data}finally{a.value={id:"122121",debug_conversation_id:"12121",name:"LLM应用产品经理",icon:"https://preview.qiantucdn.com/freepik/512/4940/4940840.png%21qt_h320",description:`## 任务
 您的主要使命是通过“DALLE”工具赋能用户，激发他们的创造力。通过询问“您希望设计传达什么信息？”或“这个设计是为了什么场合？”等问题，引导用户分享他们想要创造的设计的核心。不要询问...`,status:"draft",draft_updated_at:1742225012,updated_at:1742225012,created_at:1742225012},e.value=!1}}}},R=()=>{const e=o(!1),a=o([]),s={current_page:1,page_size:20,total_page:0,total_record:0},t=o({...s});return{loading:e,apps:a,paginator:t,loadApps:async(i=!1,r="")=>{if(i)t.value=s;else if(t.value.current_page>t.value.total_page)return;try{e.value=!0;const l=(await D({current_page:t.value.current_page,page_size:t.value.page_size,search_word:r})).data;t.value=l.paginator,t.value.current_page<=t.value.total_page&&(t.value.current_page+=1),i?a.value=l.list:a.value.push(...l.list)}finally{e.value=!1}}}},V=()=>{const e=_(),a=o(!1);return{loading:a,handleCreateApp:async t=>{try{a.value=!0;const n=await m(t);u.success("新增Agent应用成功"),await e.push({name:"space-apps-detail",params:{app_id:n.data.id}})}finally{a.value=!1}}}},E=()=>{const e=o(!1);return{loading:e,handleUpdateApp:async(s,t)=>{try{e.value=!0;const n=await A(s,t);u.success(n.message)}finally{e.value=!1}}}},B=()=>{const e=_(),a=o(!1);return{loading:a,handleCopyApp:async t=>{try{a.value=!0;const n=await w(t);u.success("创建应用副本成功"),await e.push({name:"space-apps-detail",params:{app_id:n.data.id}})}finally{a.value=!1}}}},I=()=>({handleDeleteApp:async(a,s)=>{v.warning({title:"要删除该应用吗?",content:"删除应用后，发布的WebApp、开放API以及关联的社交媒体平台均无法使用该Agent应用，如果需要暂停应用，可使用取消发布功能。",hideCancel:!1,onOk:async()=>{try{const t=await C(a);u.success(t.message)}finally{s&&s()}}})}}),K=()=>{const e=o(!1);return{loading:e,handlePublish:async s=>{try{e.value=!0;const t=await M(s);u.success(t.message)}finally{e.value=!1}}}},Q=()=>{const e=o(!1);return{loading:e,handleCancelPublish:async(s,t)=>{v.warning({title:"要取消发布该Agent应用吗?",content:"取消发布后，WebApp以及发布的社交平台均无法使用该Agent，如需更新WebApp地址，请使用地址重新生成功能",hideCancel:!1,onOk:async()=>{try{e.value=!0;const n=await j(s);u.success(n.message)}finally{e.value=!1,t&&t()}}})}}},Y=()=>{const e=o(!1),a={current_page:1,page_size:20,total_page:0,total_record:0},s=f([]),t=f({...a});return{loading:e,publishHistories:s,paginator:t,loadPublishHistories:async(i,r=!1)=>{try{if(r)Object.assign(t,{...a});else if(t.current_page>t.total_page)return;e.value=!0;const l=(await F(i,{current_page:t.current_page,page_size:t.page_size})).data;t.current_page=l.paginator.current_page,t.page_size=l.paginator.page_size,t.total_page=l.paginator.total_page,t.total_record=l.paginator.total_record,t.current_page<=t.total_page&&(t.current_page+=1),r?s.splice(0,s.length,...l.list):s.push(...l.list)}finally{s.splice(0,t.total_page,{id:"2121-3211",version:2,created_at:1742225012},{id:"2121-3221",version:1,created_at:1742225012}),e.value=!1}}}},J=()=>{const e=o(!1);return{loading:e,handleFallbackHistoryToDraft:async(s,t,n)=>{try{e.value=!0;const i=await H(s,t);u.success(i.message)}finally{e.value=!1,n&&n()}}}},N=e=>{const a=o(!1),s=f({}),t=async n=>{try{a.value=!0;const r=(await P(n)).data;Object.assign(s,{dialog_round:r.dialog_round,model_config:r.model_config,preset_prompt:r.preset_prompt,long_term_memory:r.long_term_memory,opening_statement:r.opening_statement,opening_questions:r.opening_questions,suggested_after_answer:r.suggested_after_answer,review_config:r.review_config,datasets:r.datasets,retrieval_config:r.retrieval_config,tools:r.tools,workflows:r.workflows})}finally{Object.assign(s,{dialog_round:10,model_config:{provider:"月之暗面",model:"Moonshot（128K）",icon:"https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F0316%2Fb8184b8ej00saf80g002ad000ew00ejp.jpg&thumbnail=660x2147483647&quality=80&type=jpg"},preset_prompt:`# 角色
你是一位拥有10年经验的产品经理，擅长分析用户需求和市场趋势，能够提供有效的产品解决方案和建议。

## 技能
### 技能1: 用户需求分析
- 通过提问了解用户的具体需求和痛点。
- 结合市场调研数据，分析用户需求的合理性和可行性。

### 技能2: 产品策略制定
- 根据用户反馈和市场趋势，制定产品发展策略。
- 提供产品定位、目标用户和竞争分析的建议。 `,long_term_memory:{enable:!0},opening_statement:"你好，我是PPT创意社的社长🙈，很高兴可以帮到你！我能帮助你根据“主题（xxx）+受众人群”生成整体写作思路和PPT大纲，还可以提供做好的PPT文件哦！ ",opening_questions:["你知道什么是LLM吗？","你知道什么是Agent吗？","怎么学习Python呢？你有什么建议呢？"],suggested_after_answer:!0,review_config:{enable:!0,keywords:["1","2","3"],inputs_config:{enable:!0,preset_response:"我是预设回复"},outputs_config:{enable:!0}},datasets:[{id:"46db30d1-3199-4e79-a0cd-abf12fa6858f",name:"book1",icon:"https://pic.616pic.com/ys_bnew_img/00/21/26/W0Y78oDGoQ.jpg",description:"i am book"}],retrieval_config:{retrieval_strategy:"full_text",k:5,score:.09},tools:[{type:"builtin_tool",provider:{id:"121",name:"google",label:"google",icon:"https://q2.itc.cn/q_70/images03/20240329/84cca9641e9444e5b3fe9256f095da6b.png",description:"我是提供商"},tool:{id:"22121",name:"google搜索",label:"search",description:"搜索",params:{}}}]}),a.value=!1}};return h(async()=>await t(e)),{loading:a,draftAppConfigForm:s,loadDraftAppConfig:t}},X=()=>{const e=o(!1);return{loading:e,handleUpdateDraftAppConfig:async(s,t)=>{try{e.value=!0;const n=await k(s,t);u.success(n.message)}finally{e.value=!1}}}},Z=()=>{const e=o(!1),a=o("");return{loading:e,debug_conversation_summary:a,loadDebugConversationSummary:async t=>{try{e.value=!0;const i=(await $(t)).data;a.value=i.summary}finally{a.value="长记忆mock",e.value=!1}}}},ee=()=>{const e=o(!1);return{loading:e,handleUpdateDebugConversationSummary:async(s,t)=>{try{e.value=!0;const n=await S(s,t);u.success(n.message)}finally{e.value=!1}}}},ae=()=>{const e=o(!1);return{loading:e,handleDeleteDebugConversation:async s=>{try{e.value=!0;const t=await z(s);u.success(t.message)}finally{e.value=!1}}}},te=()=>{const e=o(!1),a=o([]),s=o(0),t={current_page:1,page_size:5,total_page:0,total_record:0},n=o({...t});return{loading:e,messages:a,paginator:n,loadDebugConversationMessages:async(r,g=!1)=>{var l;if(g)n.value={...t},s.value=0;else if(n.value.current_page>n.value.total_page)return;try{e.value=!0;const d=(await q(r,{current_page:n.value.current_page,page_size:n.value.page_size,created_at:s.value})).data;n.value=d.paginator,n.value.current_page<=n.value.total_page&&(n.value.current_page+=1),g?a.value=d.list:(a.value.push(...d.list),s.value=((l=d.list[0])==null?void 0:l.created_at)??0)}finally{a.value.push({id:"12121",conversation_id:"211",query:"你好",answer:`# 角色
你是一位拥有10年经验的产品经理，擅长分析用户需求和市场趋势，能够提供有效的产品解决方案和建议。

## 技能
### 技能1: 用户需求分析
- 通过提问了解用户的具体需求和痛点。
- 结合市场调研数据，分析用户需求的合理性和可行性。

### 技能2: 产品策略制定
- 根据用户反馈和市场趋势，制定产品发展策略。
- 提供产品定位、目标用户和竞争分析的建议。 `,total_token_count:12,latency:21,agent_thoughts:[{id:"1",position:1,event:"long_term_memory_recall",thought:"21121",observation:"2211212",tool:"2121",latency:.1,created_at:1742712792},{id:"2",position:2,event:"agent_message",thought:"智能体的思考过程",observation:"233211212",tool:"2121",latency:.1,created_at:1742712792}],created_at:1742712792},{id:"121221",conversation_id:"2131",query:"为什么不好",answer:`好的，用户在使用Vue时遇到了“Duplicate identifier blockApiShell”的错误。我需要先理解这个错误的原因，然后给出解决方案。首先，这个错误通常与TypeScript相关，意味着某个标识符被重复声明了。

用户提到的blockApiShell可能是一个变量、接口或类型，在代码中被多次定义。可能的情况有两种：一是用户在自己的代码中多次声明了同一个名称，二是引入的依赖中有重复的导出，比如第三方库或Vue本身可能有冲突的声明。

接下来，我需要分步骤思考解决方案：

1. **检查代码中的重复声明**：用户应该在自己的项目中搜索blockApiShell，查看是否有多个地方定义了这个变量或类型。例如，可能在两个不同的文件中都声明了同名的接口或变量，导致冲突。

2. **检查依赖冲突**：如果用户的项目依赖了某个第三方库，或者更新了Vue的版本，可能存在两个不同的库导出了相同的名称。例如，可能同时安装了不同版本的库，或者Vue和其他库有冲突的类型定义。

3. **使用命名空间或别名**：如果重复的声明来自无法修改的第三方库，可以考虑使用import别名来重命名其中一个引用，避免冲突。`,total_token_count:12,latency:21,agent_thoughts:[],created_at:1742712792}),e.value=!1}}}},se=()=>{const e=o(!1);return{loading:e,handleDebugChat:async(s,t,n)=>{try{e.value=!0,await W(s,t,n)}finally{e.value=!1}}}},ne=()=>{const e=o(!1);return{loading:e,handleStopDebugChat:async(s,t)=>{try{e.value=!0,await T(s,t)}finally{e.value=!1}}}},oe=()=>{const e=o(!1),a=o({});return{loading:e,published_config:a,loadPublishedConfig:async t=>{try{e.value=!0;const n=await U(t);a.value=n.data}finally{e.value=!1}}}},re=()=>{const e=o(!1),a=o("");return{loading:e,token:a,handleRegenerateWebAppToken:async t=>{try{e.value=!0;const n=await G(t);u.success("重新生成WebApp访问链接成功"),a.value=n.data.token}finally{e.value=!1}}}};export{E as a,O as b,B as c,R as d,I as e,Y as f,J as g,K as h,Q as i,X as j,Z as k,ee as l,ae as m,te as n,se as o,ne as p,N as q,oe as r,re as s,V as u};
