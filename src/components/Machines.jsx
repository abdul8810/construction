import {
  FaTruckMoving,
  FaHardHat,
  FaIndustry,
  FaWarehouse
} from "react-icons/fa";

import "./Machines.css";

export default function Machines() {

  const machines = [
    {
      icon: <FaTruckMoving />,
      name: "Hammer Machine",
      category: "Drill",
      price: "₹5,00 / Day"
    },
    {
      icon: <FaHardHat />,
      name: "Excavator",
      category: "Heavy Equipment",
      price: "₹8,000 / Day"
    },
    {
      icon: <FaIndustry />,
      name: "Concrete Mixer",
      category: "Concrete Equipment",
      price: "₹1000 / Day"
    },
    {
      icon: <FaWarehouse />,
      name: "Generator",
      category: "Power Equipment",
      price: "₹1000 / Day"
    }
  ];

  return (
    <section className="machines-section">

      <div className="section-heading">

        <p>MACHINERY RENTAL</p>

        <h2>
          Machines <span>For Rent</span>
        </h2>

        <div className="heading-line"></div>

        <p className="heading-text">
          Reliable construction equipment available for your project.
        </p>

      </div>

      <div className="machines-grid">

        {machines.map((machine, index) => (

          <div className="machine-card" key={index}>

            <div className="machine-image">
              {machine.icon}
            </div>

            <div className="machine-content">

              <p className="machine-category">
                {machine.category}
              </p>

              <h3>{machine.name}</h3>

              <div className="machine-bottom">

                <strong>{machine.price}</strong>

                <button>
                  Rent Now
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

      <div className="view-all">
        <button>View All Machines →</button>
      </div>

    </section>
  );
}