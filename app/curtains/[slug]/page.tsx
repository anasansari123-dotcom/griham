import ClientRedirect from "@/components/ClientRedirect";
import { categoryPageHref, curtainsData, getCurtainBySlug, type CurtainFilterOption } from "@/lib/curtainsData";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return curtainsData.map((item) => ({ slug: item.slug }));
}

export default function LegacyCurtainProductRedirect({ params }: Props) {
  const curtain = getCurtainBySlug(params.slug);
  if (!curtain) notFound();

  const filter = (curtain.tag ?? "All") as CurtainFilterOption;
  const href = categoryPageHref(filter);

  return <ClientRedirect href={href} />;
}
