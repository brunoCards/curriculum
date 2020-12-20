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

const PhoneInputPage = () => {
  const [form, onChangeInput] = useForm({
    phone: '',
  });

  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChangeInput(name, value);
  };

  const handleSubmit = () => {
    history.push('/emails');
  };

  return (
    <>
      <Header />
      <PagesContainer>
        <MainContainer>
          <Text
            content="Qual o"
            span="seu"
            continueContent="telefone principal?"
          />
        </MainContainer>
        <Form>
          <Input
            onChange={handleInputChange}
            type="text"
            name="phone"
            value={form.phone}
          />
        </Form>

        <Footer tosubmit={handleSubmit} hasAddButton />
      </PagesContainer>
    </>
  );
};
export default PhoneInputPage;
