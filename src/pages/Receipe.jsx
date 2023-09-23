import { useParams } from "react-router-dom";

export default function Receipe() {
  const { id } = useParams();
  return <div>Receipe {id}</div>;
}
