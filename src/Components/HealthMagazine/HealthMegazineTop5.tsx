/** @jsxImportSource @emotion/react */
import axios from "axios";
import * as s from "./style";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface HealthMagazine {
  id: number;
  title: string;
  viewCount: number;
}

export default function HealthMagazineTop5() {
  const navigate = useNavigate();
  const [healthMagazines, setHealthMagazines] = useState<HealthMagazine[]>([]);

  const fetchHealthMagazines = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4040/api/v1/health-magazine/top5"
      );
      const data = response.data.data;
      setHealthMagazines(data);
    } catch (e) {
      console.log("failed to fetch magazines data", e);
    }
  };

  const handleBoxClick = (id: number) => {
    console.log(id);
    navigate(`/health-magazine/${id}`);
  };

  useEffect(() => {
    fetchHealthMagazines();
  }, []);

  return (
    <div>
      <ul>
        {healthMagazines.map((magazine, index) => (
          <li key={magazine.id} css={s.listStyle}>
            <div css={s.title} onClick={() => handleBoxClick(magazine.id)}>
              <span css={s.titleText}>{index + 1}.</span> <span css={s.under}>{magazine.title}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
