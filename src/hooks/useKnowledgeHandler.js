//import context
import { useFormulary } from '../contexts/FormContext';

const useKnowledgeHandler = () => {
  const { form, setForm, knowledges, setKnowledges } = useFormulary();

  const handleAddingKnowledges = () => {
    const newKnowledge = {
      id: new Date().getTime(),
      text: form.knowledge,
    };
    if (
      knowledges.find(
        (knowledge) =>
          knowledge.text.toLowerCase() === form.knowledge.toLowerCase()
      )
    ) {
      alert('Este conhecimento já foi adicionado');
      return;
    }
    setKnowledges([...knowledges].concat(newKnowledge));
    setForm({ ...form, knowledge: '' });
  };

  const handleDeleteKnowledge = (id) => {
    const knowledgeFilter = [...knowledges].filter(
      (knowledge) => knowledge.id !== id
    );
    setKnowledges(knowledgeFilter);
  };

  const handleEditKnowledge = (id) => {
    if (form.knowledge !== '') {
      alert('Você já está editando este conhecimento');
      return;
    }
    const findKnowledge = knowledges.find((knowledge) => knowledge.id === id);
    if (findKnowledge !== -1) {
      knowledges.pop(findKnowledge, 1);
      setForm({ ...form, knowledge: findKnowledge.text });
    }
  };
  return [handleAddingKnowledges, handleEditKnowledge, handleDeleteKnowledge];
};

export default useKnowledgeHandler;
