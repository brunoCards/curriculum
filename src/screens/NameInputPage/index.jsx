import React, { useState } from 'react';

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

const NameInputPage = () => {
  const [data, setData] = useState({});
  const [form, onChangeInput] = useForm({
    name: '',
  });

  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChangeInput(name, value);
  };

  const handleSubmit = () => {
    history.push('/idade');

    setData({ ...data, form });
  };

  return (
    <>
      <Header />
      <PagesContainer>
        <MainContainer>
          <Text content="Olá como" span="você" continueContent="se chama?" />
        </MainContainer>
        <Form>
          <Input
            onChange={handleInputChange}
            type="text"
            name="name"
            value={form.name}
          />
        </Form>

        <Footer tosubmit={handleSubmit} />
      </PagesContainer>
    </>
  );
};
export default NameInputPage;
