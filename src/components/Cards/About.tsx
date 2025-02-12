import content from "@/data/about.json";

export const Content = () => {
  const [about, testimonials] = content;

  return (
    <>
      <section id={about.section_name} className="mb-10">
        <h1 className="text-2xl mb-4">
          {about.title.primary}
          <span className="text-subtitle">{about.title.secondary}</span>
        </h1>
        {about.body &&
          about.body.map((paragraph, index) => (
            <p className="mb-2" key={`about-para-${index + 1}`}>
              {paragraph}
            </p>
          ))}
      </section>
      <section>
        <h2 className="text-xl mt-8 mb-6">{testimonials.title.primary}</h2>
        <div>
          {testimonials.testimonies &&
            testimonials.testimonies.map((testimony, index) => (
              <div
                key={`testimonials-${index + 1}`}
                className="mb-6 border-l-2 border-l-border pl-4"
              >
                <p className="mb-2 text-subtitle text-sm leading-6">
                  {testimony.message}
                </p>
                <p className="text-sm">{testimony.person}</p>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};
