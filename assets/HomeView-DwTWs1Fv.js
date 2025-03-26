import{d as M,r as l,u as V,o as z,a as i,c as r,b as s,e as n,w as o,f as c,g as N,h as O,i as d,F as B,j as $,k as j,v as G,l as H,n as Q,m as a,t as U}from"./index-f8Z9b5ER.js";import{u as D,s as F,_ as K,a as T,b as E}from"./AiMessage.vue_vue_type_script_setup_true_lang-191g0KvQ.js";const J="/llmops-vue/assets/assistant-agent-background-Jf_uHUnU.png",R={class:"w-[600px] h-full min-h-screen mx-auto"},P={key:0,class:"flex flex-col px-6 h-[calc(100%-100px)] min-h-[calc(100vh-100px)]"},W={class:"flex flex-col gap-6 py-6"},X={key:0,class:"h-[50px] flex items-center justify-center"},Y={key:1,class:"flex flex-col p-6 gap-2 items-center justify-center overflow-scroll scrollbar-w-none h-[calc(100%-100px)] min-h-[calc(100vh-100px)]"},Z={class:"flex gap-2"},ee={class:"flex flex-col items-start gap-2"},se={class:"bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-2xl break-all leading-7"},te={class:"list-disc pl-6"},ne={class:"flex flex-col gap-2"},oe={class:"w-full flex flex-col flex-shrink-0"},le={class:"px-6 flex items-center gap-4"},ae={class:"bg-white h-[50px] flex items-center gap-2 px-4 flex-1 border border-gray-200 rounded-full"},pe=M({__name:"HomeView",setup(ie){const p=l(""),v=l(""),g=l(""),m=l(null);l(0);const y=V(),x=l(!1),b=l(!1),h=["什么是LLMOps?","我想创建一个应用","能介绍下什么是RAG吗?"],{suggested_questions:k,handleGenerateSuggestedQuestions:re}=D(),_=[{id:"1221",conversation_id:"212121",query:"帮我看一下2025年4月的黄金走势",answer:`
2025年4月黄金走势可能呈现以下特点：

### 短期趋势：
1. **技术性回调压力**：金价在3月突破3000美元后，部分获利盘可能离场，叠加市场对前期快速上涨的消化需求，4月可能出现短期回调或盘整。
2. **关税政策影响**：美国4月关税政策细节若落地，可能缓解市场对贸易紧张的担忧，短期削弱避险需求，导致金价回调。

### 中长期支撑因素：
1. **美联储降息预期**：若美国经济数据疲软（如失业率上升、通胀回落），市场对美联储三季度降息的预期将升温，推动金价向3200美元甚至更高目标迈进。
2. **地缘政治风险**：中东局势持续紧张（如巴以冲突、胡塞武装行动）、全球去美元化趋势及央行持续购金（尤其是中国、印度等国）将为金价提供长期支撑。
3. **美元疲软**：美元指数走弱直接利好以美元计价的黄金，若美元延续跌势，金价上行空间将进一步打开。

### 机构观点：
- **乐观预期**：瑞银、高盛等机构上调目标价至3200美元，麦格理甚至预测三季度金价可能冲击3500美元。
- **谨慎提醒**：法兴银行指出，若贸易紧张局势缓和或美联储降息信号不明，金价下半年涨势可能受限。

### 总结：
4月金价或先经历短期回调，但中长期在避险需求、宽松货币政策预期及央行购金支撑下仍具备上行空间。投资者需关注美联储政策动向、地缘冲突进展及关税政策细节，建议分批布局，控制仓位以应对短期波动。`,total_token_count:2121,latency:0,agent_thoughts:[],created_at:0}];return z(()=>{}),(ce,e)=>{const w=a("icon-poweroff"),u=a("a-button"),A=a("icon-apps"),L=a("a-avatar"),C=a("router-link"),S=a("icon-empty"),q=a("icon-send");return i(),r("div",{class:"w-full h-full min-h-screen bg-gray-100 bg-cover bg-no-repeat bg-center",style:Q({backgroundImage:`url(${c(J)})`})},[s("div",R,[_.length>0?(i(),r("div",P,[n(c(E),{ref_key:"scroller",ref:m,items:_.slice().reverse(),"min-item-size":1,onScroll:()=>{},class:"h-full scrollbar-w-none"},{default:o(({item:t,index:f,active:I})=>[n(c(F),{item:t,active:I,"data-index":t.id},{default:o(()=>[s("div",W,[n(K,{query:t.query,account:c(y).account},null,8,["query","account"]),n(T,{agent_thoughts:t.agent_thoughts,answer:t.answer,app:{name:"辅助Agent"},suggested_questions:t.id===g.value?c(k):[],loading:t.id===g.value&&x.value,latency:t.latency,total_token_count:t.total_token_count,message_class:"bg-white",onSelectSuggestedQuestion:()=>{}},null,8,["agent_thoughts","answer","suggested_questions","loading","latency","total_token_count"])])]),_:2},1032,["item","active","data-index"])]),_:1},8,["items"]),v.value&&x.value?(i(),r("div",X,[n(u,{loading:b.value,class:"rounded-lg px-2",onClick:()=>{}},{icon:o(()=>[n(w)]),default:o(()=>[e[1]||(e[1]=d(" 停止响应 "))]),_:1},8,["loading"])])):N("",!0)])):(i(),r("div",Y,[e[11]||(e[11]=O('<div class="mb-9"><div class="text-[40px] font-bold text-gray-700 mt-[52px] mb-4"> Hi，我是 AI 应用构建器 </div><div class="text-[30px] font-bold text-gray-700 mb-2"> 你的专属 <span class="text-blue-700">AI 原生应用</span> 开发平台 </div><div class="text-base text-gray-700"> 说出你的创意，我可以快速帮你创建专属应用，一键轻松分享给朋友，也可以一键发布到 LLMOps 平台、微信等多个渠道。 </div></div>',1)),s("div",Z,[n(L,{size:30,shape:"circle",class:"flex-shrink-0 bg-blue-700"},{default:o(()=>[n(A)]),_:1}),s("div",ee,[e[10]||(e[10]=s("div",{class:"text-gray-700 font-bold"},"辅助Agent",-1)),s("div",se,[e[7]||(e[7]=s("div",{class:"font-bold"},"你好，欢迎来到LLMOps🎉",-1)),e[8]||(e[8]=s("div",{class:""}," LLMOps是新一代大模型 AI 应用开发平台。无论你是否有编程基础，都可以快速搭建出各种 AI 应用，并一键发布到各大社交平台，或者轻松部署到自己的网站。 ",-1)),s("ul",te,[s("li",null,[e[3]||(e[3]=d(" 随时来 ")),n(C,{to:{name:"store-apps-list"},class:"text-blue-700"},{default:o(()=>e[2]||(e[2]=[d("应用广场 ")])),_:1}),e[4]||(e[4]=d(" 逛逛，这里内置了许多超有趣的应用。 "))]),e[5]||(e[5]=s("li",null,"你也可以直接发送“我想做一个应用”，我可以帮你快速创建应用。",-1)),e[6]||(e[6]=s("li",null,"你也可以向我提问有关课程的问题，我可以快速替你解答。",-1))]),e[9]||(e[9]=s("div",{class:""},"如果你还有其他LLMOps使用问题，也欢迎随时问我！",-1))]),s("div",ne,[(i(),r(B,null,$(h,(t,f)=>s("div",{key:f,class:"px-4 py-1.5 border rounded-lg text-gray-700 cursor-pointer bg-white hover:bg-gray-50",onClick:()=>{}},U(t),1)),64))])])])])),s("div",oe,[s("div",le,[n(u,{class:"flex-shrink-0 !text-gray-700",type:"text",shape:"circle",onClick:()=>{}},{icon:o(()=>[n(S,{size:16})]),_:1}),s("div",ae,[j(s("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>p.value=t),type:"text",class:"flex-1 outline-0",placeholder:"发送消息或创建AI应用...",onKeyup:H(()=>{},["enter"])},null,544),[[G,p.value]]),n(u,{type:"text",shape:"circle",class:"!text-gray-700",onClick:()=>{}},{icon:o(()=>[n(q,{size:16})]),_:1})])]),e[12]||(e[12]=s("div",{class:"text-center text-gray-500 text-xs py-4"}," 内容由AI生成，无法确保真实准确，仅供参考。 ",-1))])])],4)}}});export{pe as default};
