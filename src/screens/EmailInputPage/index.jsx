import React from 'react';

//xcustom-hook
import useForm from '../../hooks/useForm';

//imports react-router-dom
import { useHistory } from 'react-router-dom';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';
import Footer from '../../components/Footer';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { Form } from '../../styles/Components/Form/styles';
import { Input } from '../../styles/Components/Input/styles';

//styled-components
import { MainContainer } from './styles';

const EmailInputPage = () => {
  const [form, onChangeInput] = useForm({
    email: '',
  });

  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChangeInput(name, value);
  };

  const handleSubmit = () => {
    history.push('/descricao');
  };

  return (
    <>
      <Header />
      <PagesContainer>
        <MainContainer>
          <Text content="Qual o" span="seu" continueContent="melhor email?" />
        </MainContainer>
        <Form>
          <Input
            onChange={handleInputChange}
            type="text"
            name="email"
            value={form.email}
          />
        </Form>

        <Footer tosubmit={handleSubmit} hasAddButton />
      </PagesContainer>
    </>
  );
};
export default EmailInputPage;
