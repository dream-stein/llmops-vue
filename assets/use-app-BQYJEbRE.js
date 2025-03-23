import{E as c,D as u,a2 as m,b as r,m as g,p as _,s as p,M as v}from"./index-_WQ45uP5.js";const y=e=>c(`/apps/${e}`),b=e=>c(`/apps/${e}/draft-app-config`),h=(e,t)=>u(`/apps/${e}/draft-app-config`,{body:t}),D=e=>c(`/apps/${e}/summary`),P=(e,t)=>u(`/apps/${e}/summary`,{body:{summary:t}}),C=(e,t)=>c(`/apps/${e}/conversations/messages`,{params:t}),w=e=>u(`/apps/${e}/conversations/delete-debug-conversation`),A=e=>u(`/apps/${e}/publish`),k=e=>u(`/apps/${e}/cancel-publish`),z=(e,t)=>c(`/apps/${e}/publish-histories`,{params:t}),S=(e,t)=>u(`/apps/${e}/fallback-history`,{body:{app_config_version_id:t}}),$=(e,t)=>m("/ai/optimize-prompt",{body:{prompt:e}},t),q=e=>{const t=r(!1),s=g({}),a=async n=>{try{t.value=!0;const o=(await y(n)).data;Object.assign(s,{...o})}finally{Object.assign(s,{id:"122121",debug_conversation_id:"12121",name:"LLM应用产品经理",icon:"https://preview.qiantucdn.com/freepik/512/4940/4940840.png%21qt_h320",description:"",status:"draft",draft_updated_at:1742225012,updated_at:1742225012,created_at:1742225012}),t.value=!1}};return _(async()=>await a(e)),{loading:t,app:s,loadApp:a}},H=()=>{const e=r(!1);return{loading:e,handlePublish:async s=>{try{e.value=!0;const a=await A(s);p.success(a.message)}finally{e.value=!1}}}},O=()=>{const e=r(!1);return{loading:e,handleCancelPublish:async(s,a)=>{v.warning({title:"要取消发布该Agent应用吗?",content:"取消发布后，WebApp以及发布的社交平台均无法使用该Agent，如需更新WebApp地址，请使用地址重新生成功能",hideCancel:!1,onOk:async()=>{try{e.value=!0;const n=await k(s);p.success(n.message)}finally{e.value=!1,a&&a()}}})}}},T=()=>{const e=r(!1),t={current_page:1,page_size:20,total_page:0,total_record:0},s=g([]),a=g({...t});return{loading:e,publishHistories:s,paginator:a,loadPublishHistories:async(i,o=!1)=>{try{if(o)Object.assign(a,{...t});else if(a.current_page>a.total_page)return;e.value=!0;const l=(await z(i,{current_page:a.current_page,page_size:a.page_size})).data;a.current_page=l.paginator.current_page,a.page_size=l.paginator.page_size,a.total_page=l.paginator.total_page,a.total_record=l.paginator.total_record,a.current_page<=a.total_page&&(a.current_page+=1),o?s.splice(0,s.length,...l.list):s.push(...l.list)}finally{s.splice(0,a.total_page,{id:"2121-3211",version:2,created_at:1742225012},{id:"2121-3221",version:1,created_at:1742225012}),e.value=!1}}}},j=()=>{const e=r(!1);return{loading:e,handleFallbackHistoryToDraft:async(s,a,n)=>{try{e.value=!0;const i=await S(s,a);p.success(i.message)}finally{e.value=!1,n&&n()}}}},W=e=>{const t=r(!1),s=g({}),a=async n=>{try{t.value=!0;const o=(await b(n)).data;Object.assign(s,{preset_prompt:o.preset_prompt,long_term_memory:o.long_term_memory,opening_statement:o.opening_statement,opening_questions:o.opening_questions,suggested_after_answer:o.suggested_after_answer,review_config:o.review_config,datasets:o.datasets,retrieval_config:o.retrieval_config,tools:o.tools})}finally{Object.assign(s,{preset_prompt:`# 角色
你是一位拥有10年经验的产品经理，擅长分析用户需求和市场趋势，能够提供有效的产品解决方案和建议。

## 技能
### 技能1: 用户需求分析
- 通过提问了解用户的具体需求和痛点。
- 结合市场调研数据，分析用户需求的合理性和可行性。

### 技能2: 产品策略制定
- 根据用户反馈和市场趋势，制定产品发展策略。
- 提供产品定位、目标用户和竞争分析的建议。 `,long_term_memory:{enable:!0},opening_statement:"你好，我是PPT创意社的社长🙈，很高兴可以帮到你！我能帮助你根据“主题（xxx）+受众人群”生成整体写作思路和PPT大纲，还可以提供做好的PPT文件哦！ ",opening_questions:["你知道什么是LLM吗？","你知道什么是Agent吗？","怎么学习Python呢？你有什么建议呢？"],suggested_after_answer:!0,review_config:{enable:!0,keywords:["1","2","3"],inputs_config:{enable:!0,preset_response:"我是预设回复"},outputs_config:{enable:!0}},datasets:[{id:"46db30d1-3199-4e79-a0cd-abf12fa6858f",name:"book1",icon:"https://pic.616pic.com/ys_bnew_img/00/21/26/W0Y78oDGoQ.jpg",description:"i am book"}],retrieval_config:{retrieval_strategy:"full_text",k:5,score:.09},tools:[{type:"builtin_tool",provider:{id:"121",name:"google",label:"google",icon:"https://q2.itc.cn/q_70/images03/20240329/84cca9641e9444e5b3fe9256f095da6b.png",description:"我是提供商"},tool:{id:"22121",name:"google搜索",label:"search",description:"搜索",params:{}}}]}),t.value=!1}};return _(async()=>await a(e)),{loading:t,draftAppConfigForm:s,loadDraftAppConfig:a}},G=()=>{const e=r(!1);return{loading:e,handleUpdateDraftAppConfig:async(s,a)=>{try{e.value=!0;const n=await h(s,a);p.success(n.message)}finally{e.value=!1}}}},U=()=>{const e=r(!1),t=r("");return{loading:e,optimize_prompt:t,handleOptimizePrompt:async a=>{try{e.value=!0,t.value="",await $(a,n=>{const i=n.data;t.value+=i==null?void 0:i.optimize_prompt})}finally{e.value=!1}}}},x=()=>{const e=r(!1),t=r("");return{loading:e,debug_conversation_summary:t,loadDebugConversationSummary:async a=>{try{e.value=!0;const i=(await D(a)).data;t.value=i.summary}finally{t.value="长记忆mock",e.value=!1}}}},F=()=>{const e=r(!1);return{loading:e,handleUpdateDebugConversationSummary:async(s,a)=>{try{e.value=!0;const n=await P(s,a);p.success(n.message)}finally{e.value=!1}}}},L=()=>{const e=r(!1);return{loading:e,handleDeleteDebugConversation:async s=>{try{e.value=!0;const a=await w(s);p.success(a.message)}finally{e.value=!1}}}},V=()=>{const e=r(!1),t=r([]),s={current_page:1,page_size:5,total_page:0,total_record:0},a=r({...s});return{loading:e,messages:t,paginator:a,loadDebugConversationMessages:async(i,o=0,d=!1)=>{if(d)a.value={...s};else if(a.value.current_page>a.value.total_page)return;try{e.value=!0;const f=(await C(i,{current_page:a.value.current_page,page_size:a.value.page_size,created_at:o})).data;a.value=f.paginator,a.value.current_page<=a.value.total_page&&(a.value.current_page+=1),d?t.value=f.list:t.value.push(...f.list)}finally{t.value.push({id:"12121",conversation_id:"211",query:"你好",answer:`# 角色
你是一位拥有10年经验的产品经理，擅长分析用户需求和市场趋势，能够提供有效的产品解决方案和建议。

## 技能
### 技能1: 用户需求分析
- 通过提问了解用户的具体需求和痛点。
- 结合市场调研数据，分析用户需求的合理性和可行性。

### 技能2: 产品策略制定
- 根据用户反馈和市场趋势，制定产品发展策略。
- 提供产品定位、目标用户和竞争分析的建议。 `,total_token_count:12,latency:21,agent_thoughts:[],created_at:1742712792},{id:"121221",conversation_id:"2131",query:"为什么不好",answer:`好的，用户在使用Vue时遇到了“Duplicate identifier blockApiShell”的错误。我需要先理解这个错误的原因，然后给出解决方案。首先，这个错误通常与TypeScript相关，意味着某个标识符被重复声明了。

用户提到的blockApiShell可能是一个变量、接口或类型，在代码中被多次定义。可能的情况有两种：一是用户在自己的代码中多次声明了同一个名称，二是引入的依赖中有重复的导出，比如第三方库或Vue本身可能有冲突的声明。

接下来，我需要分步骤思考解决方案：

1. **检查代码中的重复声明**：用户应该在自己的项目中搜索blockApiShell，查看是否有多个地方定义了这个变量或类型。例如，可能在两个不同的文件中都声明了同名的接口或变量，导致冲突。

2. **检查依赖冲突**：如果用户的项目依赖了某个第三方库，或者更新了Vue的版本，可能存在两个不同的库导出了相同的名称。例如，可能同时安装了不同版本的库，或者Vue和其他库有冲突的类型定义。

3. **使用命名空间或别名**：如果重复的声明来自无法修改的第三方库，可以考虑使用import别名来重命名其中一个引用，避免冲突。`,total_token_count:12,latency:21,agent_thoughts:[],created_at:1742712792}),e.value=!1}}}};export{j as a,q as b,H as c,O as d,G as e,U as f,x as g,F as h,L as i,V as j,W as k,T as u};
