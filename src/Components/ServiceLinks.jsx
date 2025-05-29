import { useNavigate } from "react-router-dom";

const ServiceLinks = () => {
  const navigate = useNavigate();

  const handleRedirect = (link) => {
    navigate(link);
  };

  const services = [
    {
      icon: "🧪",
      title: "FREE IN-STORE PARTS TESTING",
      description: "We’ll check your alternator, starter, battery and more.",
      link: "/PartsTesting",
    },
    {
      icon: "🧰",
      title: "LOAN-A-TOOL®",
      description: "Need a tool? Borrow one of ours.",
      link: "/LoanTool",
    },
    {
      icon: "🧾",
      title: "FREE FIX FINDER SERVICE",
      description: "Check engine light on?",
      link: "/BatteryTesting",
    },
  ];

  return (
    <div className="service-links-container">
      {services.map((service, index) => (
        <div
          key={index}
          className="service-box"
          onClick={() => handleRedirect(service.link)}
        >
          <div className="icon">{service.icon}</div>
          <div className="text-content">
            <h5>{service.title}</h5>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceLinks;
