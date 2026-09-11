import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/section";
import { ServiceMenu } from "@/components/services/service-menu";
import { FinalCta } from "@/components/home/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { getCategory, serviceCategories } from "@/lib/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return pageMetadata({
    title: category.seoTitle.replace(" | Ella’s Beauty", ""),
    description: category.seoDescription,
    path: category.href,
  });
}

export default async function ServiceCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Treatments", path: "/services" },
          { name: category.title, path: category.href },
        ])}
      />
      <PageHero
        eyebrow={category.eyebrow}
        title={category.title}
        description={category.intro}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Treatments", href: "/services" },
          { name: category.title, href: category.href },
        ]}
      />
      <Section className="pt-4">
        <Container>
          <ServiceMenu services={category.services} />
        </Container>
      </Section>
      <FinalCta />
    </>
  );
}
