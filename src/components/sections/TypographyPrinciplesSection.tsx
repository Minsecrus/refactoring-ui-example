import { BeforeAfter, Section } from "../Section";
import TypographySection from "../demos/TypographySection";

export default function TypographyPrinciplesSection() {
  return (
    <Section
      id="typography"
      number="04"
      title="字体排印：好排版是设计的一半"
      subtitle="预设字号阶梯、控制行宽 45–75 字符、按字号调整行高——这三件事能解决大部分排印问题。"
      compact
    >
      <BeforeAfter caption="右侧文章：限制行宽（max-w-prose）、放宽行高、左对齐、用颜色而非下划线表达链接。">
        {(improved) => <TypographySection improved={improved} />}
      </BeforeAfter>
    </Section>
  );
}
