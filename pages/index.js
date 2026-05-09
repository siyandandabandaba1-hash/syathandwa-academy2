import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './_app';

const ACADEMIC_DATA = {
  "Grade 12": {
    "Mathematics": ["Paper 1 — 2024","Paper 2 — 2024","Paper 1 — 2023","Paper 2 — 2023","Paper 1 — 2022"],
    "Physical Sciences": ["Paper 1 — 2024","Paper 2 — 2024","Paper 1 — 2023","Paper 2 — 2023"],
    "Accounting": ["Final Exam 2024","Final Exam 2023","Final Exam 2022"],
    "Life Sciences": ["Paper 1 — 2024","Paper 2 — 2024","Paper 1 — 2023"],
  },
  "Grade 11": {
    "Mathematics": ["November 2024","November 2023","June 2023"],
    "English FAL": ["Paper 1 — 2023","Paper 2 — 2023"],
    "Physical Sciences": ["November 2024","November 2023"],
  },
  "Grade 10": {
    "Mathematics": ["Final 2024","Final 2023","Final 2022"],
    "Natural Sciences": ["June 2024","June 2023"],
  },
  "Grade 9": {
    "Natural Sciences": ["June 2024","November 2023"],
    "Mathematics": ["Final 2024","Final 2023"],
  },
  "Grade 8": {
    "Mathematics": ["Final 2024","Final 2023"],
    "English": ["Term 3 — 2023"],
  },
};

const COLORS = {
  "Mathematics":"#C9933A","Physical Sciences":"#4A7FA5",
  "Accounting":"#9B7EC8","Life Sciences":"#5A9E7A",
  "English FAL":"#C05A4A","English":"#C0
