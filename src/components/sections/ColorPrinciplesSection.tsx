import { Section } from "../Section";
import ColorSection from "../demos/ColorSection";

export default function ColorPrinciplesSection() {
  return (
    <Section
      id="color"
      number="03"
      title="色彩：你需要的比想象中多得多"
      subtitle="一套实用的配色不是 5 个色块，而是 8–10 个色相 × 每个 9–10 档明暗，提前定义、按需取用。"
      compact
    >
      <ColorSection />
    </Section>
  );
}
