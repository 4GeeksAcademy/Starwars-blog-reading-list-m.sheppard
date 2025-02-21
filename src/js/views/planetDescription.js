import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDescription = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [planet, setPlanet] = useState({});
  console.log("Old ID:", id);

  // Map old ID to new ID
  function findNewId(oldID) {
    const idMap = {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
    };
    return idMap[oldID] || null;
  }
  const newID = findNewId(id);

  useEffect(() => {
    if (!newID) {
      console.error("Invalid ID mapping for:", id);
      return;
    }

    async function fetchData() {
      try {
        const res = await fetch(`https://swapi.tech/api/planets/${newID}`);
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const data = await res.json();
        if (data.result) {
          setPlanet(data.result.properties); // Access properties directly
        } else {
          console.error("Planets data not found");
        }
      } catch (error) {
        console.error("Error fetching planets data:", error);
      }
    }
    fetchData();
  }, [newID]);

  return (
    <div className="container">
      {newID ? (
        <>
          <h1>{planet.name}</h1>
          <p>
            <strong>Climate:</strong> {planet.climate}
          </p>
          <p>
            <strong>Diameter:</strong> {planet.diameter}
          </p>
          <p>
            <strong>Gravity:</strong> {planet.gravity}
          </p>
          <p>
            <strong>Terrain:</strong> {planet.terrain}
          </p>
        </>
      ) : (
        <p>Invalid Planet ID</p>
      )}
    </div>
  );
};
