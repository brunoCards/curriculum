import { useEffect } from 'react';

//import context
import { useFormulary } from '../contexts/FormContext';

const useLocalStorage = () => {
  const {
    emails,
    setEmails,
    phones,
    setPhones,
    knowledges,
    setKnowledges,
  } = useFormulary();

  //emails
  useEffect(() => {
    const persistEmails = window.localStorage.getItem('emails');
    if (persistEmails) {
      setEmails(JSON.parse(persistEmails));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('emails', JSON.stringify(emails));
  });

  //phones
  useEffect(() => {
    const persistPhones = window.localStorage.getItem('phones');
    if (persistPhones) {
      setPhones(JSON.parse(persistPhones));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('phones', JSON.stringify(phones));
  });

  //knowledges
  useEffect(() => {
    const persistKnowledges = window.localStorage.getItem('knowledges');
    if (persistKnowledges) {
      setKnowledges(JSON.parse(persistKnowledges));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('knowledges', JSON.stringify(knowledges));
  });

  // //address
  // useEffect(() => {
  //   const persistAddress = window.localStorage.getItem('address');
  //   if (persistAddress) {
  //     setAddress(JSON.parse(persistAddress));
  //   }
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('address', JSON.stringify(address));
  // });
};

export default useLocalStorage;
