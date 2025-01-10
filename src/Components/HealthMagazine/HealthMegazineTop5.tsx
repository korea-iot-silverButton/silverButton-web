/** @jsxImportSource @emotion/react */
import axios from "axios";
import * as s from "./style";
import React, { useEffect, useState } from "react";
import { response } from "express";

export interface HealthMagazine {
  id: number;
  title: string;
  viewCount: number;
}

export default function HealthMagazineTop5() {
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

  useEffect(() => {
    fetchHealthMagazines();
  }, []);

  return (
    <div>
      {healthMagazines.map((magazine, index) => (
        <ul>
          <div key={magazine.id}>
            <li css={s.listStyle}>
              <div css={s.title}>
                <span css={s.titleText}>{index + 1}.</span> <span css={s.under}>{magazine.title}</span>
              </div>
            </li>
          </div>
        </ul>
      ))}
    </div>
  );
}
