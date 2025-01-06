/** @jsxImportSource @emotion/react */
import * as s from './style';
import React, { useState, useEffect } from 'react';
import { MAIN_URL } from "../../apis";

interface Caregiver {
  id: number;
  name: string;
  age: number;
  experience: string;
  specialty: string;
}

const CaregiverMatching: React.FC = () => {
  const [caregivers, setCaregivers] = useState<Caregiver[]>([]);
  const [selectedCaregiver, setSelectedCaregiver] = useState<Caregiver | null>(null);

  useEffect(() => {
    const fetchCaregivers = async () => {
      try {
        const response = await fetch(`${MAIN_URL}/caregivers`);
        if (!response.ok) throw new Error('Failed to fetch caregivers');
        const data: Caregiver[] = await response.json();
        setCaregivers(data);
      } catch (error) {
        console.error('Error fetching caregivers:', error);
      }
    };

    fetchCaregivers();
  }, []);

  const handleViewDetails = (caregiver: Caregiver) => {
    setSelectedCaregiver(caregiver);
  };

  return (
    <div>
      <h1>리스트</h1>
      <div css={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {caregivers.map((caregiver) => (
          <div key={caregiver.id} css={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <p>{caregiver.name}</p>
            <button
              css={s.caregiver_item_button}
              onMouseOver={(e) => e.currentTarget.classList.add(s.caregiver_item_button_hover.styles)}
              onMouseOut={(e) => e.currentTarget.classList.remove(s.caregiver_item_button_hover.styles)}
              onClick={() => handleViewDetails(caregiver)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedCaregiver && (
        <div css={s.caregiver_details}>
          <h2>{selectedCaregiver.name}</h2>
          <p>Age: {selectedCaregiver.age}</p>
          <p>Experience: {selectedCaregiver.experience}</p>
          <p>Specialty: {selectedCaregiver.specialty}</p>
          <div css={s.action_buttons}>
            <button
              css={s.action_button}
              onMouseOver={(e) => e.currentTarget.classList.add(s.action_button_hover.styles)}
              onMouseOut={(e) => e.currentTarget.classList.remove(s.action_button_hover.styles)}
            >
              Match
            </button>
            <button
              css={s.action_button}
              onMouseOver={(e) => e.currentTarget.classList.add(s.action_button_hover.styles)}
              onMouseOut={(e) => e.currentTarget.classList.remove(s.action_button_hover.styles)}
            >
              Send Message
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaregiverMatching;
