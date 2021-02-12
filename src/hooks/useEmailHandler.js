//import context
import { useFormulary } from '../contexts/FormContext';

const useEmailHandler = () => {
  const { emails, setEmails, form, setForm } = useFormulary();

  //Emailhandlers
  const handleAddingEmails = () => {
    const newEmail = {
      id: new Date().getTime(),
      text: form.email,
    };
    let pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    const patternTest = pattern.test(newEmail.text);
    if (!newEmail || patternTest === false) {
      alert('Insira um email válido!');
      return;
    }
    if (
      emails.find(
        (email) => email.text.toLowerCase() === form.email.toLowerCase()
      )
    ) {
      alert('Este email já está em uso');
      return;
    }
    setEmails([...emails].concat(newEmail));
    setForm({ ...form, email: '' });
  };

  const handleDeleteEmail = (id) => {
    setEmails(emails.filter((email) => email.id !== id));
  };

  const handleEditEmail = (id) => {
    if (form.email !== '') {
      alert('Você já está editando um email');
      return;
    }
    const findEmail = emails.find((email) => email.id === id);
    if (findEmail !== -1) {
      emails.pop(findEmail, 1);
      setForm({ ...form, email: findEmail.text });
    }
  };
  return [handleAddingEmails, handleEditEmail, handleDeleteEmail];
};
export default useEmailHandler;
