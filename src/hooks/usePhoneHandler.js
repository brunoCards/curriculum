//import context
import { useFormulary } from '../contexts/FormContext';

const usePhoneHandler = () => {
  const { phones, setPhones, form, setForm } = useFormulary();
  const handleAddingPhones = () => {
    const newPhone = {
      id: new Date().getTime(),
      number: form.phone,
    };
    if (phones.find((phone) => phone.number === form.phone)) {
      alert('Este telefone já está em uso');
      return;
    }
    setPhones([...phones, newPhone]);
    setForm({ ...form, phone: '' });
  };

  const handleDeletePhone = (id) => {
    const phoneFilter = [...phones].filter((phone) => phone.id !== id);

    setPhones(phoneFilter);
  };

  const handleEditPhone = (id, number) => {
    if (form.phone !== '') {
      alert('Você já está editando um telefone');
      return;
    }
    const findPhone = phones.find((phone) => phone.id === id);

    if (findPhone !== -1) {
      phones.pop(findPhone, 1);
      setForm({ ...form, phone: findPhone.number });
    }
  };

  return [handleAddingPhones, handleEditPhone, handleDeletePhone];
};

export default usePhoneHandler;
