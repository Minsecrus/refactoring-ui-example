import { BeforeAfter, Section } from "../Section";
import DepthSection from "../demos/DepthSection";

export default function DepthPrinciplesSection() {
  return (
    <Section
      id="depth"
      number="05"
      title="光影:用阴影替代边框来表达层次"
      subtitle="现实世界靠光与影感知远近。模拟一个自上而下的光源,让界面拥有真实的质感。"
      compact
    >
      <BeforeAfter caption="左侧是固定的高度系统参考;右侧卡片随开关切换。">
        {(improved) => <DepthSection improved={improved} />}
      </BeforeAfter>
    </Section>
  );
}
