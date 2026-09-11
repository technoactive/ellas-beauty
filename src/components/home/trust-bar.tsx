import { NumberTicker } from "@/components/magicui/number-ticker";
import { Container } from "@/components/ui/section";
import { SITE } from "@/lib/site";

const stats = [
  { label: "Fresha rating", value: SITE.rating, suffix: " / 5", decimals: 1 },
  { label: "Verified reviews", value: SITE.reviewCount, suffix: "+" },
  { label: "Years of artistry", value: SITE.founder.yearsExperience, suffix: "+" },
  { label: "Industry awards", value: SITE.awards.length },
];

export function TrustBar() {
  return (
    <Container className="py-14 sm:py-18">
      <dl className="gold-panel grid grid-cols-2 gap-y-10 rounded-[2rem] px-6 py-10 lg:grid-cols-4 lg:divide-x lg:divide-gold/40 lg:px-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="flex flex-col items-start gap-3 lg:items-center lg:text-center"
          >
            <dt className="order-2 flex items-center gap-3 text-[0.62rem] tracking-[0.3em] text-muted uppercase">
              <span className="font-script text-base text-gold normal-case tracking-normal">
                0{index + 1}
              </span>
              {stat.label}
            </dt>
            <dd className="order-1 font-serif text-5xl tracking-[-0.02em] text-ink sm:text-6xl">
              <NumberTicker
                value={stat.value}
                decimalPlaces={"decimals" in stat ? stat.decimals : 0}
              />
              <span className="gold-text text-2xl">{stat.suffix}</span>
            </dd>
          </div>
        ))}
      </dl>
    </Container>
  );
}
