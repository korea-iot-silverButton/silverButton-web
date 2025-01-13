/** @jsxImportSource @emotion/react */
import axios from "axios";
import * as s from "./style";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface HealthMagazineItemType {
  id: number;
  thumbnailImageUrl: string;
  title: string;
}

interface HealthMagazineItemListProps {
  currentItems: HealthMagazineItemType[]
}

export default function HealthMagazineItemList({currentItems}: HealthMagazineItemListProps) {
  const navigate = useNavigate();
  console.log(currentItems);

  const itemsPerPage = 6;

  const emptyBoxes = Array(itemsPerPage - currentItems.length).fill(null);

  const handleBoxClick = (id: number) => {
    console.log(id);
    navigate(`/health-magazine/${id}`);
  };

  return (
    <div css={s.itemsContainer}>
      {currentItems.map((currentItems) => (
        <div
          key={currentItems.id}
          css={s.mainBox}
          onClick={() => handleBoxClick(currentItems.id)}
        >
          <div css={s.imageBox}>
            <img
              src={currentItems.thumbnailImageUrl}
              alt={currentItems.title}
            />
          </div>
          <div css={s.textBox}>{currentItems.title}</div>
        </div>
      ))}
      {emptyBoxes.map((_, index) => (
        <div key={`empty-${index}`} css={s.emptyBox}></div>
      ))}
    </div>
  );
}
