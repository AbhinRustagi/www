import Back from "@/components/Back";
import timeline from "@/content/timeline.json";
import {
  TimelineItem as ITimelineItem,
  TYPE_DISPLAY_MAP,
} from "@/lib/timeline";
import Link from "next/link";
import { PiArrowLeftBold, PiCalendarBlankFill } from "react-icons/pi";

const TimelineItem = (props: ITimelineItem) => {
  const { type, title, date, description } = props;
  const { display, icon: Icon, color } = TYPE_DISPLAY_MAP[type];

  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-2">
        <div
          className={`${color} text-base font-semibold font-inter-tight flex items-center`}
        >
          <Icon /> &nbsp; {display}
        </div>
        <div className="flex items-center gap-2 font-semibold font-inter-tight text-base">
          <PiCalendarBlankFill /> {date}
        </div>
      </div>
      <div>
        <h2 className="text-xl mb-2">{title}</h2>
        {description && <p className="text-base">{description}</p>}
      </div>
    </div>
  );
};

export default async function Timeline() {
  return (
    <section className="mb-16">
      <Back />
      <h1 className="text-2xl mb-1">Timeline</h1>
      <p className="mb-8 italic">Infrequent updates of what I've been up to.</p>
      <div className="mt-16 border-l-3 border-l-gray-border border-dashed pl-5 py-4">
        {timeline.map((item) => (
          <TimelineItem key={item.title} {...(item as ITimelineItem)} />
        ))}
      </div>
    </section>
  );
}
