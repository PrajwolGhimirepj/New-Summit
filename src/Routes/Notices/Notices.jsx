import "./Notices.css";

const Notices = () => {
  const NoticesData = [
    {
      id: 1,
      name: "Tech Symposium",
      date: "15/08/2024",
      description:
        "A day-long notice showcasing the latest in technology with guest speakers, workshops, and exhibitions.",
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
    {
      id: 3,
      name: "AI Workshop",
      date: "05/10/2024",
      description:
        "Hands-on workshop covering AI fundamentals, tools, and real-world applications.",
    },
  ];

  return (
    <div className="notice-con  QuickSand-Regular">
      <div className="notice-grid">
        {NoticesData.map((notice) => (
          <div key={notice.id} className="notice-card">
            <div className="notice-image" />
            <div className="notice-content">
              <span className="notice-date">Date: {notice.date}</span>
              <p>{notice.description}</p>
            </div>
          </div>
        ))}
      </div>
      <img className="bgImg-summmit" src="Group 21.png" alt="" />
    </div>
  );
};

export default Notices;
