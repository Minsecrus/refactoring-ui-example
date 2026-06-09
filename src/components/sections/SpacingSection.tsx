import { BeforeAfter, Section, TipList } from "../Section";
import SpacingDemo from "../demos/SpacingDemo";

export default function SpacingSection() {
  return (
    <Section
      id="spacing"
      number="02"
      title="留白:从过量开始,再逐步删减"
      subtitle="界面拥挤几乎都是因为留白不够。先给足空间,再慢慢收紧,而不是反过来。"
      compact
    >
      <div className="space-y-8">
        <BeforeAfter caption="同一个表单:左右只是间距和留白的区别,信息完全相同。">
          {(improved) => <SpacingDemo improved={improved} />}
        </BeforeAfter>
        <TipList
          tips={[
            {
              title: "建立间距系统",
              desc: "使用 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 这样的非线性刻度,告别「再挪 1px 试试」。",
            },
            {
              title: "相关元素靠得更近",
              desc: "label 离自己的输入框近、离上一组远,亲密性本身就是一种分组方式。",
            },
            {
              title: "元素不必填满整行",
              desc: "表单宽度由内容需要决定,而不是屏幕宽度。注册表单 384px 足矣。",
            },
            {
              title: "密集界面是一种选择,而非默认",
              desc: "数据表格可以紧凑,但那应该是刻意的设计决定。",
            },
          ]}
        />
      </div>
    </Section>
  );
}
