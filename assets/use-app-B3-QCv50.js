import{g as c,p,s as v,r as o,B as _,E as f,o as h,M as u,L as y}from"./index-_6t8UBVH.js";const b=e=>c(`/apps/${e}`),m=e=>p("/apps",{body:e}),A=(e,t)=>p(`/apps/${e}`,{body:t}),C=e=>p(`/apps/${e}/delete`),w=e=>p(`/apps/${e}/copy`),D=e=>c("/apps",{params:e}),P=e=>c(`/apps/${e}/draft-app-config`),k=(e,t)=>p(`/apps/${e}/draft-app-config`,{body:t}),$=e=>c(`/apps/${e}/summary`),S=(e,t)=>p(`/apps/${e}/summary`,{body:{summary:t}}),W=(e,t,s)=>v(`/apps/${e}/conversations`,{body:{query:t}},s),T=(e,t)=>p(`/apps/${e}/conversations/tasks/${t}/stop`),z=(e,t)=>c(`/apps/${e}/conversations/messages`,{params:t}),M=e=>p(`/apps/${e}/conversations/delete-debug-conversation`),j=e=>p(`/apps/${e}/publish`),q=e=>p(`/apps/${e}/cancel-publish`),F=(e,t)=>c(`/apps/${e}/publish-histories`,{params:t}),H=(e,t)=>p(`/apps/${e}/fallback-history`,{body:{app_config_version_id:t}}),U=e=>c(`/apps/${e}/published-config`),G=e=>p(`/apps/${e}/published-config/regenerate-web-app-token`),R=()=>{const e=o(!1),t=o({});return{loading:e,app:t,loadApp:async a=>{try{e.value=!0;const n=await b(a);t.value=n.data}finally{e.value=!1}}}},V=()=>{const e=o(!1),t=o([]),s={current_page:1,page_size:20,total_page:0,total_record:0},a=o({...s});return{loading:e,apps:t,paginator:a,loadApps:async(i=!1,r="")=>{if(i)a.value=s;else if(a.value.current_page>a.value.total_page)return;try{e.value=!0;const l=(await D({current_page:a.value.current_page,page_size:a.value.page_size,search_word:r})).data;a.value=l.paginator,a.value.current_page<=a.value.total_page&&(a.value.current_page+=1),i?t.value=l.list:t.value.push(...l.list)}finally{e.value=!1}}}},L=()=>{const e=_(),t=o(!1);return{loading:t,handleCreateApp:async a=>{try{t.value=!0;const n=await m(a);u.success("新增Agent应用成功"),await e.push({name:"space-apps-detail",params:{app_id:n.data.id}})}finally{t.value=!1}}}},B=()=>{const e=o(!1);return{loading:e,handleUpdateApp:async(s,a)=>{try{e.value=!0;const n=await A(s,a);u.success(n.message)}finally{e.value=!1}}}},E=()=>{const e=_(),t=o(!1);return{loading:t,handleCopyApp:async a=>{try{t.value=!0;const n=await w(a);u.success("创建应用副本成功"),await e.push({name:"space-apps-detail",params:{app_id:n.data.id}})}finally{t.value=!1}}}},I=()=>({handleDeleteApp:async(t,s)=>{y.warning({title:"要删除该应用吗?",content:"删除应用后，发布的WebApp、开放API以及关联的社交媒体平台均无法使用该Agent应用，如果需要暂停应用，可使用取消发布功能。",hideCancel:!1,onOk:async()=>{try{const a=await C(t);u.success(a.message)}finally{s&&s()}}})}}),K=()=>{const e=o(!1);return{loading:e,handlePublish:async s=>{try{e.value=!0;const a=await j(s);u.success(a.message)}finally{e.value=!1}}}},Q=()=>{const e=o(!1);return{loading:e,handleCancelPublish:async(s,a)=>{y.warning({title:"要取消发布该Agent应用吗?",content:"取消发布后，WebApp以及发布的社交平台均无法使用该Agent，如需更新WebApp地址，请使用地址重新生成功能",hideCancel:!1,onOk:async()=>{try{e.value=!0;const n=await q(s);u.success(n.message)}finally{e.value=!1,a&&a()}}})}}},Y=()=>{const e=o(!1),t={current_page:1,page_size:20,total_page:0,total_record:0},s=f([]),a=f({...t});return{loading:e,publishHistories:s,paginator:a,loadPublishHistories:async(i,r=!1)=>{try{if(r)Object.assign(a,{...t});else if(a.current_page>a.total_page)return;e.value=!0;const l=(await F(i,{current_page:a.current_page,page_size:a.page_size})).data;a.current_page=l.paginator.current_page,a.page_size=l.paginator.page_size,a.total_page=l.paginator.total_page,a.total_record=l.paginator.total_record,a.current_page<=a.total_page&&(a.current_page+=1),r?s.splice(0,s.length,...l.list):s.push(...l.list)}finally{s.splice(0,a.total_page,{id:"2121-3211",version:2,created_at:1742225012},{id:"2121-3221",version:1,created_at:1742225012}),e.value=!1}}}},J=()=>{const e=o(!1);return{loading:e,handleFallbackHistoryToDraft:async(s,a,n)=>{try{e.value=!0;const i=await H(s,a);u.success(i.message)}finally{e.value=!1,n&&n()}}}},N=e=>{const t=o(!1),s=f({}),a=async n=>{try{t.value=!0;const r=(await P(n)).data;Object.assign(s,{dialog_round:r.dialog_round,model_config:r.model_config,preset_prompt:r.preset_prompt,long_term_memory:r.long_term_memory,opening_statement:r.opening_statement,opening_questions:r.opening_questions,suggested_after_answer:r.suggested_after_answer,review_config:r.review_config,datasets:r.datasets,retrieval_config:r.retrieval_config,tools:r.tools,workflows:r.workflows})}finally{Object.assign(s,{dialog_round:10,model_config:{provider:"月之暗面",model:"Moonshot（128K）",icon:"https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F0316%2Fb8184b8ej00saf80g002ad000ew00ejp.jpg&thumbnail=660x2147483647&quality=80&type=jpg"},preset_prompt:`# 角色
你是一位拥有10年经验的产品经理，擅长分析用户需求和市场趋势，能够提供有效的产品解决方案和建议。

## 技能
### 技能1: 用户需求分析
- 通过提问了解用户的具体需求和痛点。
- 结合市场调研数据，分析用户需求的合理性和可行性。

### 技能2: 产品策略制定
- 根据用户反馈和市场趋势，制定产品发展策略。
- 提供产品定位、目标用户和竞争分析的建议。 `,long_term_memory:{enable:!0},opening_statement:"你好，我是PPT创意社的社长🙈，很高兴可以帮到你！我能帮助你根据“主题（xxx）+受众人群”生成整体写作思路和PPT大纲，还可以提供做好的PPT文件哦！ ",opening_questions:["你知道什么是LLM吗？","你知道什么是Agent吗？","怎么学习Python呢？你有什么建议呢？"],suggested_after_answer:!0,review_config:{enable:!0,keywords:["1","2","3"],inputs_config:{enable:!0,preset_response:"我是预设回复"},outputs_config:{enable:!0}},datasets:[{id:"46db30d1-3199-4e79-a0cd-abf12fa6858f",name:"book1",icon:"https://pic.616pic.com/ys_bnew_img/00/21/26/W0Y78oDGoQ.jpg",description:"i am book"}],retrieval_config:{retrieval_strategy:"full_text",k:5,score:.09},tools:[{type:"builtin_tool",provider:{id:"121",name:"google",label:"google",icon:"https://q2.itc.cn/q_70/images03/20240329/84cca9641e9444e5b3fe9256f095da6b.png",description:"我是提供商"},tool:{id:"22121",name:"google搜索",label:"search",description:"搜索",params:{}}}]}),t.value=!1}};return h(async()=>await a(e)),{loading:t,draftAppConfigForm:s,loadDraftAppConfig:a}},X=()=>{const e=o(!1);return{loading:e,handleUpdateDraftAppConfig:async(s,a)=>{try{e.value=!0;const n=await k(s,a);u.success(n.message)}finally{e.value=!1}}}},Z=()=>{const e=o(!1),t=o("");return{loading:e,debug_conversation_summary:t,loadDebugConversationSummary:async a=>{try{e.value=!0;const i=(await $(a)).data;t.value=i.summary}finally{t.value="长记忆mock",e.value=!1}}}},ee=()=>{const e=o(!1);return{loading:e,handleUpdateDebugConversationSummary:async(s,a)=>{try{e.value=!0;const n=await S(s,a);u.success(n.message)}finally{e.value=!1}}}},ae=()=>{const e=o(!1);return{loading:e,handleDeleteDebugConversation:async s=>{try{e.value=!0;const a=await M(s);u.success(a.message)}finally{e.value=!1}}}},te=()=>{const e=o(!1),t=o([]),s=o(0),a={current_page:1,page_size:5,total_page:0,total_record:0},n=o({...a});return{loading:e,messages:t,paginator:n,loadDebugConversationMessages:async(r,g=!1)=>{var l;if(g)n.value={...a},s.value=0;else if(n.value.current_page>n.value.total_page)return;try{e.value=!0;const d=(await z(r,{current_page:n.value.current_page,page_size:n.value.page_size,created_at:s.value})).data;n.value=d.paginator,n.value.current_page<=n.value.total_page&&(n.value.current_page+=1),g?t.value=d.list:(t.value.push(...d.list),s.value=((l=d.list[0])==null?void 0:l.created_at)??0)}finally{t.value.push({id:"12121",conversation_id:"211",query:"你好",answer:`# 角色
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

3. **使用命名空间或别名**：如果重复的声明来自无法修改的第三方库，可以考虑使用import别名来重命名其中一个引用，避免冲突。`,total_token_count:12,latency:21,agent_thoughts:[],created_at:1742712792}),e.value=!1}}}},se=()=>{const e=o(!1);return{loading:e,handleDebugChat:async(s,a,n)=>{try{e.value=!0,await W(s,a,n)}finally{e.value=!1}}}},ne=()=>{const e=o(!1);return{loading:e,handleStopDebugChat:async(s,a)=>{try{e.value=!0,await T(s,a)}finally{e.value=!1}}}},oe=()=>{const e=o(!1),t=o({});return{loading:e,published_config:t,loadPublishedConfig:async a=>{try{e.value=!0;const n=await U(a);t.value=n.data}finally{e.value=!1}}}},re=()=>{const e=o(!1),t=o("");return{loading:e,token:t,handleRegenerateWebAppToken:async a=>{try{e.value=!0;const n=await G(a);u.success("重新生成WebApp访问链接成功"),t.value=n.data.token}finally{e.value=!1}}}};export{B as a,R as b,E as c,V as d,I as e,Y as f,J as g,K as h,Q as i,X as j,Z as k,ee as l,ae as m,te as n,se as o,ne as p,N as q,oe as r,re as s,L as u};
