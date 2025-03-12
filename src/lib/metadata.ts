import { Metadata } from "next";
import metadata from "@/content/metadata.json";

interface PageMetadataProps {
  title: string;
  description?: string;
  canonical: string;
  keywords?: [string];
  twitter?: {
    site?: string;
    creator?: string;
    card?: string;
    image?: string;
  };
  openGraph?: {
    type?: string;
    image?: string;
    site_name?: string;
    locale?: string;
  };
}

export default function generateMetadata(props?: PageMetadataProps): Metadata {
  const title = props?.title
    ? metadata.titleTemplate.replace("%s", props.title)
    : metadata.title;
  const description = props?.description || metadata.description;
  const canonical = props?.canonical
    ? metadata.siteUrl + props.canonical
    : metadata.siteUrl;
  const keywords = props?.keywords || metadata.keywords;
  const openGraph = {
    ...metadata.openGraph,
    title,
    description,
    url: canonical,
    site_name: title,
    ...props?.openGraph,
  };
  const twitter = {
    title,
    description,
    ...metadata.twitter,
    ...props?.twitter,
  };
  const alternates = {
    types: {
      "application/rss+xml": metadata.siteUrl + "/feed.xml",
    },
    canonical,
  };

  return {
    title,
    description,
    alternates,
    keywords,
    openGraph,
    twitter,
  };
}
