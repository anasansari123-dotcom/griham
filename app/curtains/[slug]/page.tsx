import { categoryPageHref, getCurtainBySlug, type CurtainFilterOption } from "@/lib/curtainsData";
import { notFound, redirect } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default function LegacyCurtainProductRedirect({ params }: Props) {
  const curtain = getCurtainBySlug(params.slug);
  if (!curtain) notFound();

  const filter = (curtain.tag ?? "All") as CurtainFilterOption;
  redirect(categoryPageHref(filter));
}
