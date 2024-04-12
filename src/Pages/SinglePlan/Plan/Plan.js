import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BookPlan from "../BookPlan/BookPlan";
import DetailsPlan from "../DetailsPlan/DetailsPlan";

const Plan = () => {
  const { planId } = useParams();
  const [plan, setPlan] = useState([]);
  useEffect(() => {
    const url = `http://localhost:3001/locations/${planId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlan(data));
  }, []);
  return (
    <div>
      <DetailsPlan plan={plan} key={plan.id}></DetailsPlan>
      <BookPlan plan={plan} key={plan.id}></BookPlan>
    </div>
  );
};

export default Plan;
