import styles from "./styles.module.css";

interface MdRendererProps {
  content: string;
}

export default function MdRenderer({ content }: MdRendererProps) {
  // Convert anchor links to external
  const modifiedContent = content.replaceAll("<a", "<a target='_blank'");

  return (
    <div
      className={styles.renderer}
      dangerouslySetInnerHTML={{ __html: modifiedContent }}
    />
  );
}
