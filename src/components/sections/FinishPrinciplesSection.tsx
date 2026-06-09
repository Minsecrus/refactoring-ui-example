import { BeforeAfter, Section, TipList } from "../Section";
import FinishDemo from "../demos/FinishDemo";

export default function FinishPrinciplesSection() {
  return (
    <Section
      id="finish"
      number="06"
      title="细节打磨:平庸与出色的最后一公里"
      subtitle="彩色顶边、圆形头像、徽章标签、用心的空状态——这些低成本的小心思决定了界面的气质。"
      compact
    >
      <div className="space-y-8">
        <BeforeAfter caption="同样的消息列表:去掉表格边框,用间距分隔;头像、徽章、未读圆点替代纯文字。">
          {(improved) => <FinishDemo improved={improved} />}
        </BeforeAfter>
        <TipList
          tips={[
            {
              title: "给单调的设计加一条彩色顶边",
              desc: "卡片顶部一条 4px 的渐变色带,瞬间提升精致感,几乎零成本。",
            },
            {
              title: "用徽章替代纯文字元信息",
              desc: "「2 条未读」做成圆角小徽章,比一行括号文字更有设计感。",
            },
            {
              title: "别忘了空状态",
              desc: "空状态是用户的第一印象。一个表情、一句友好的话,胜过「暂无数据」。",
            },
            {
              title: "少用边框",
              desc: "分隔元素优先考虑:留白 > 微妙的背景色差 > 阴影,实在不行才用边框。",
            },
          ]}
        />
      </div>
    </Section>
  );
}
