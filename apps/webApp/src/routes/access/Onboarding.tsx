import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROnboarding } from '@rufferal-frontend/store';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { WebOnboarding } from '../../components/WebOnboarding';

export const Onboarding = () => {
  // showOnboarding == true -> they have not interacted with Onboarding, do display
  // showOnboarding == false -> they have interacted with Onboarding, do NOT display again
  // showOnboarding will check AsyncStorage for key "showOnboarding"
  // If a user hasn't interacted with Onboarding, getItem("showOnboarding") should be null
  // If a user interacts with Onboarding, we setItem("showOnboarding", "true")
  // At the Screens level, we just get AsyncStorage
  const [showOnboarding, setShowOnboarding] = useState<boolean>(true);

  useEffect(() => {
    AsyncStorage.getItem('showOnboarding').then((value) => {
      if (value === 'true') {
        setShowOnboarding(false);
      }
    });
  });

  // user has already seen onboarding
  if (!showOnboarding) {
    return <Navigate to="/" replace />;
  }

  return <ROnboarding swiper={<WebOnboarding />} />;
};
