import { BeforeAfter, Section, TipList } from "../Section";
import HierarchyDemo from "../demos/HierarchyDemo";

export default function HierarchySection() {
  return (
    <Section
      id="hierarchy"
      number="01"
      title="视觉层级：不是所有元素都同等重要"
      subtitle="刻意地强调与弱化。用字重、颜色、字号区分主次，而不是让所有信息扯着嗓子喊。"
      compact
    >
      <div className="space-y-8">
        <BeforeAfter caption="提示：点击右上角的「优化前 / 优化后」切换对比。">
          {(improved) => <HierarchyDemo improved={improved} />}
        </BeforeAfter>
        <TipList
          tips={[
            {
              title: "弱化次要信息，而不是放大重要信息",
              desc: "把邮箱、入职时间调灰调小，「姓名」自然就突出了——不需要把它加到 30px。",
            },
            {
              title: "标签是最后的手段",
              desc: "「姓名：王晓琳」中的「姓名：」往往可以删掉，格式和上下文本身就能传达含义。",
            },
            {
              title: "按重要性区分按钮样式",
              desc: "主操作用实心按钮，危险但低频的操作（移除成员）降级为链接，需要时再强调。",
            },
            {
              title: "灰阶传达层级：900 / 700 / 400",
              desc: "深色做标题、中灰做正文、浅灰做辅助信息，三档就够了。",
            },
          ]}
        />
      </div>
    </Section>
  );
}
