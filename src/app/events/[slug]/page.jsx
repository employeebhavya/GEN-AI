import { getEventBySlug, getAllEventSlugs } from "@/data/eventsData";
import SingleEventPage from "@/blogscomponents/SingleEventPage";
import { notFound } from "next/navigation";

// Generate static params for all event slugs
export function generateStaticParams() {
  return getAllEventSlugs().map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each event
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: `${event.title} | Nexcura Events`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      images: [event.image],
    },
  };
}

export default async function EventPage({ params }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return <SingleEventPage event={event} />;
}
