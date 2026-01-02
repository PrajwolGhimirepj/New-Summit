import "./Event.css";

const Events = () => {
  const eventsData = [
    {
      id: 1,
      name: "Tech Symposium",
      date: "15/08/2024",
      description:
        "A day-long event showcasing the latest in technology with guest speakers, workshops, and exhibitions.",
    },
    {
      id: 2,
      name: "Hackathon 2024",
      date: "22/09/2024",
      description:
        "24-hour coding competition focused on innovation, teamwork, and problem-solving.",
    },
    {
      id: 3,
      name: "AI Workshop",
      date: "05/10/2024",
      description:
        "Hands-on workshop covering AI fundamentals, tools, and real-world applications.",
    },
  ];

  return (
    <div className="event-con  QuickSand-Regular">
      <div className="event-grid">
        {eventsData.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-image" />

            <div className="event-content">
              <h3>{event.name}</h3>
              <span className="event-date">Date: {event.date}</span>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      <img className="bgImg-summmit" src="Group 21.png" alt="" />
    </div>
  );
};

export default Events;
