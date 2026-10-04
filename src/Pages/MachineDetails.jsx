import { useParams } from "react-router-dom";

export default function MachineDetails() {

  const { id } = useParams();

  return (
    <div style={{ padding: "100px 7%" }}>
      <h1>Machine Details</h1>
      <p>Machine ID: {id}</p>
    </div>
  );
}