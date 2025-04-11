import { ref } from 'vue'
import type { GetConversationMessagesWithPageResponse } from '@/models/conversation.ts'
import {
  deleteConversation,
  deleteMessage,
  getConversationMessages,
  getConversationName,
  updateConversationIsPinned,
  updateConversationName,
} from '@/service/conversation.ts'
import { Message, Modal } from '@arco-design/web-vue'

export const useGetConversationMessagesWithPage = () => {
  // 1.定义hooks所需数据
  const loading = ref(false)
  const messages = ref<GetConversationMessagesWithPageResponse['data']['list']>([])
  const created_at = ref(0)
  const defaultPaginator = {
    current_page: 1,
    page_size: 5,
    total_page: 0,
    total_record: 0,
  }
  const paginator = ref({ ...defaultPaginator })

  // 2.定义加载数据函数
  const loadConversationMessagesWithPage = async (
    conversation_id: string,
    init: boolean = false,
  ) => {
    // 2.1 判断是否为初始化，如果是则先初始化分页器
    if (init) {
      paginator.value = { ...defaultPaginator }
      created_at.value = 0
    } else if (paginator.value.current_page > paginator.value.total_page) {
      return
    }

    // 2.2 加载更多数据
    try {
      loading.value = true
      const resp = await getConversationMessages(conversation_id, {
        current_page: paginator.value.current_page,
        page_size: paginator.value.page_size,
        created_at: created_at.value,
      })
      const data = resp.data

      // 2.3 更新分页器
      paginator.value = data.paginator

      // 2.4 判断是否存在更多数据
      if (paginator.value.current_page <= paginator.value.total_page) {
        paginator.value.current_page += 1
      }

      // 2.5 追加或者覆盖数据
      if (init) {
        messages.value = data.list
      } else {
        messages.value.push(...data.list)
        created_at.value = data.list[0]?.created_at ?? 0
      }
    } finally {
      messages.value = [
        {
          agent_thoughts: [
            {
              created_at: 1736800082,
              event: 'long_term_memory_recall',
              id: '66ef482b-7fec-4375-8016-e758e117840e',
              latency: 0.0,
              observation:
                '人类询问AI关于LLMops的情况，AI解释道LLMOps（大型语言模型操作）是管理和优化大型语言模型生命周期的一系列实践和技术，涵盖模型训练、部署、监控、维护和持续改进等方面，并表示愿意提供更多具体信息。',
              position: 1,
              thought: '',
              tool: '',
              tool_input: {},
            },
            {
              created_at: 1736800082,
              event: 'agent_thought',
              id: 'edb30bb1-f1e1-49eb-bbdf-de77b432dc12',
              latency: 1.8113511000046856,
              observation: '',
              position: 2,
              thought:
                '[{"name": "google_serper", "args": {"query": "\未\来\人\类\自\我\意\识\的\发\展\趋\势"}, "id": "chatcmpl-Y6XafuEwiz2ltddFCGmcyVsMzOSvk", "type": "tool_call"}]',
              tool: '',
              tool_input: {},
            },
            {
              created_at: 1736800082,
              event: 'agent_action',
              id: '8eedbf60-776a-4bb4-87cf-a00054b3dcf3',
              latency: 1.3353191999995033,
              observation:
                '"... \人\类\的\感\知\和\思\考\能\力\。 \当\然\，\这\远\远\不\足\以\让\人\工\智\能\产\生\真\正\的\自\我\意\识\，\但\这\是\未\来\的\趋\势\。 \其\次\，\自\我\意\识\是\一\个\非\常\复\杂\的\概\念\，\涉\及\到\许\多\不\同 ... ... \➤\大\模\型\、\大\数\据\的\驱\动\让\人\工\智\能\在\对\话\的\自\然\度\、\趣\味\性\上\有\了\很\大\突\破\，\但\距\离\具\备\自\主\意\识\还\很\远\。\换\言\之\，\即\便\人\工\智\能\可\以\对\人\类\的\语\言\、\表\情 ... \人\类\未\来\的\新\角\色\是\智\能\机\器\的\“\牧\羊\人\”\，\人\最\重\要\的\能\力\将\是\使\用 ... \所\以\与\意\识\相\关\的\自\主\决\策\、\自\我\管\理\、\自\我\纠\正\、\自\我\提\升\，\这\些\研\究\已\然 ... ... \未\来\可\能\会\有\越\来\越\多\的\人\工\智\能\被\设\计\出\来\辅\助\人\类\推\进\社\会\管\理\工\作\。\对\自\我\反\思\能\力\的\探\讨\，\或\许\会\对\未\来\人\工\智\能\的\良\性\发\展\有\所\助\益\。 3.\高\尚\人\格 ... \如\果AI\拥\有\自\我\意\识\是\朝\着\好\的\方\向\发\展\，\就\不\可\怕\。\其\实\不\管\未\来\是\什\么\样\的\情\况\，\谁\也\无\法\定\论\，\只\能\是\列\出\尽\可\能\多\的\情\况\供\大\家\参\考\，\这\本\身\也\是\有\意\义\的\。 \实\验\结\果\表\明\，\当\前\以\大\模\型\为\代\表\的AI\已\接\近\人\类\成\人\智\能\水\平\，\但\尚\无\证\据\表\明\其\具\备\自\我\意\识\。 \此\外\，\研\究\还\揭\示\了\实\现\具\有\自\我\意\识\的\通\用\人\工\智\能\（AGI\）\在 ... \当\今\的\人\工\智\能\发\展\突\飞\猛\进\，\人\们\对\其\远\超\于\人\的\强\劲\的\能\力\抱\有\警\惕\甚\至\恐\惧\的\态\度\。\人\工\智. \能\一\旦\具\有\了\“\自\我\意\识\”\，\其\存\在\对\人\类\来\说\将\可\能\会\是\毁\灭\性\的 ... \机\器\能\有\自\我\意\识\吗\？\随\着\自\主\人\工\智\能(AI)\的\发\展,\这\些\系\统\是\否\能\够\真\正\实\现\自\我\意\识\的\问\题\变\得\更\加\重\要\。\技\术\已\经\取\得\了\长\足\的\进\步\，\但\要\制\造\出\像\人\类\一\样 ... \摩\尔\定\律& \莫\拉\维\克\悖\论\尽\管\每\个\人\都\相\信\人\有\意\识\和\自\我\意\识\，\但\是\机\器\究\竟\有\没\有\自\我\意\识\，\能\不\能\以\及\何\时\会\发\展\出\自\我\意\识\，\是\我\们\知\之\甚\少\也\知\之\不\确 ... \本\专\题\的\四\篇\文\章\分\别\从\自\我\意\识\、\算\法\安\全\、. \算\法\歧\视\和\外\观\设\计\四\个\方\向\探\索\了\人\工\智\能\的\前\景\。 ... \类\理\智\的\高\阶\部\分\，\而\意\识\和\自\我\意\识\属\于\人\类. \的\本\能\活\动\，\是\不 ..."',
              position: 3,
              thought: '',
              tool: 'google_serper',
              tool_input: {
                query: '未来人类自我意识的发展趋势',
              },
            },
            {
              created_at: 1736800082,
              event: 'agent_message',
              id: '61571260-c7a0-40cf-9c9f-c135b8eb1a7e',
              latency: 2.6854701999982353,
              observation: '',
              position: 4,
              thought:
                '未来人类自我意识的发展可能会受到人工智能（AI）和技术进步的深刻影响。虽然当前AI尚未具备真正的自我意识，但随着技术的不断演进，未来可能会出现更为复杂的智能系统，这些系统可能会在某种程度上模拟人类的自我意识。\n\n研究表明，人类的自我意识是一个复杂而动态的概念，涉及多种心理和生物因素。未来的AI可能会在某些方面超越人类的认知能力，但是否能真正拥有自我意识仍然存在争议。\n\n此外，随着社会对AI伦理和安全性的关注加剧，如何管理和规范这些技术的发展也将成为重要议题。总之，未来人类自我意识的发展将是一个充满挑战和机遇的领域。',
              tool: '',
              tool_input: {},
            },
          ],
          answer:
            '未来人类自我意识的发展可能会受到人工智能（AI）和技术进步的深刻影响。虽然当前AI尚未具备真正的自我意识，但随着技术的不断演进，未来可能会出现更为复杂的智能系统，这些系统可能会在某种程度上模拟人类的自我意识。\n\n研究表明，人类的自我意识是一个复杂而动态的概念，涉及多种心理和生物因素。未来的AI可能会在某些方面超越人类的认知能力，但是否能真正拥有自我意识仍然存在争议。\n\n此外，随着社会对AI伦理和安全性的关注加剧，如何管理和规范这些技术的发展也将成为重要议题。总之，未来人类自我意识的发展将是一个充满挑战和机遇的领域。',
          conversation_id: '73f1d3f4-9388-48a4-a49a-46acf090f653',
          created_at: 1736800076,
          id: '2d14d0ea-5b23-4e50-ad52-976d228e4a1d',
          latency: 5.832140500002424,
          query: '人类自我意识的未来如何？',
          image_urls: [],
          total_token_count: 3466,
        },
        {
          agent_thoughts: [
            {
              created_at: 1736798843,
              event: 'long_term_memory_recall',
              id: '783ace3c-e797-48b1-bc5d-c6273e7e3862',
              latency: 0.0,
              observation: '',
              position: 1,
              thought: '',
              tool: '',
              tool_input: {},
            },
            {
              created_at: 1736798843,
              event: 'agent_thought',
              id: 'f8670356-6be4-4852-a760-129143cd0462',
              latency: 1.6321122000008472,
              observation: '',
              position: 2,
              thought:
                '[{"name": "wf_llmops_workflow", "args": {"query": "LLMops\相\关\内\容"}, "id": "chatcmpl-cN782A0RQfI7wsBoJbyQIkd0Gh89c", "type": "tool_call"}]',
              tool: '',
              tool_input: {},
            },
            {
              created_at: 1736798843,
              event: 'agent_action',
              id: 'c8f59ebd-a1ca-49da-a5b9-a9a779654b55',
              latency: 4.944664399998146,
              observation:
                '{"workflow_output": "\您\好\！\看\起\来\您\的\提\问\是\关\于LLMOps\的\，\但\具\体\内\容\似\乎\没\有\明\确\给\出\。LLMOps\（Large Language Model Operations\）\是\指\管\理\和\优\化\大\规\模\语\言\模\型\生\命\周\期\的\一\系\列\实\践\和\技\术\，\包\括\但\不\限\于\模\型\训\练\、\部\署\、\监\控\、\维\护\以\及\持\续\改\进\等\方\面\。\如\果\您\有\更\具\体\的\问\题\或\想\了\解LLMOps\中\的\某\个\特\定\方\面\，\请\告\诉\我\，\我\很\乐\意\为\您\提\供\更\多\信\息\！"}',
              position: 3,
              thought: '',
              tool: 'wf_llmops_workflow',
              tool_input: {
                query: 'LLMops相关内容',
              },
            },
            {
              created_at: 1736798843,
              event: 'agent_message',
              id: '41a2e78a-58f8-4474-aaa9-ef48ea54ac76',
              latency: 1.4676063000006252,
              observation: '',
              position: 4,
              thought:
                'LLMOps（Large Language Model Operations）是指管理和优化大型语言模型生命周期的一系列实践和技术，包括模型训练、部署、监控、维护以及持续改进等方面。如果您有更具体的问题或想了解LLMOps中的某个特定方面，请告诉我，我很乐意为您提供更多信息！',
              tool: '',
              tool_input: {},
            },
          ],
          answer:
            'LLMOps（Large Language Model Operations）是指管理和优化大型语言模型生命周期的一系列实践和技术，包括模型训练、部署、监控、维护以及持续改进等方面。如果您有更具体的问题或想了解LLMOps中的某个特定方面，请告诉我，我很乐意为您提供更多信息！',
          conversation_id: '73f1d3f4-9388-48a4-a49a-46acf090f653',
          created_at: 1736798834,
          id: '3925533d-877e-4171-a381-66b37a7c225f',
          latency: 8.044382899999619,
          query: '帮我调用wf_llmops_workflow()工具，查询LLMops',
          image_urls: [],
          total_token_count: 1158,
        },
      ]
      paginator.value = {
        current_page: 1,
        page_size: 20,
        total_page: 1,
        total_record: 2,
      }
      loading.value = false
    }
  }

  return { loading, messages, paginator, loadConversationMessagesWithPage }
}

export const useDeleteConversation = () => {
  const handleDeleteConversation = (conversation_id: string, success_callback?: () => void) => {
    Modal.warning({
      title: '要删除该会话么?',
      content: '删除会话信息后，删除会话后，该会话下的所有聊天记录将被永远删除，无法找回。',
      hideCancel: false,
      onOk: async () => {
        // 1.点击确定后向API接口发起请求
        const resp = await deleteConversation(conversation_id)
        Message.success(resp.message)

        // 2.调用callback函数指定回调功能
        success_callback && success_callback()
      },
    })
  }

  return { handleDeleteConversation }
}

export const useDeleteMessage = () => {
  // 1.定义hooks所需数据
  const loading = ref(false)

  // 2.定义删除消息处理器
  const handleDeleteMessage = async (conversation_id: string, message_id: string) => {
    try {
      loading.value = true
      await deleteMessage(conversation_id, message_id)
    } finally {
      loading.value = false
    }
  }

  return { loading, handleDeleteMessage }
}

export const useGetConversationName = () => {
  // 1.定义hooks所需数据
  const loading = ref(false)
  const name = ref<string>('')

  // 2.定义加载数据处理器
  const loadConversationName = async (conversation_id: string) => {
    try {
      loading.value = true
      const resp = await getConversationName(conversation_id)
      name.value = resp.data.name
    } finally {
      loading.value = false
    }
  }

  return { loading, name, loadConversationName }
}

export const useUpdateConversationName = () => {
  // 1.定义hooks所需数据
  const loading = ref(false)

  // 2.定义更新会话名字处理器
  const handleUpdateConversationName = async (conversation_id: string, name: string) => {
    try {
      loading.value = true
      const resp = await updateConversationName(conversation_id, name)
      Message.success(resp.message)
    } finally {
      loading.value = false
    }
  }

  return { loading, handleUpdateConversationName }
}

export const useUpdateConversationIsPinned = () => {
  // 1.定义hooks所需数据
  const loading = ref(false)

  // 2.定义更新置顶状态处理器
  const handleUpdateConversationIsPinned = async (
    conversation_id: string,
    is_pinned: boolean = false,
    success_callback?: () => void,
  ) => {
    try {
      loading.value = true
      const resp = await updateConversationIsPinned(conversation_id, is_pinned)
      Message.success(resp.message)
      success_callback && success_callback()
    } finally {
      loading.value = false
    }
  }

  return { loading, handleUpdateConversationIsPinned }
}
