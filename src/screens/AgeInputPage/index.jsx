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

const AgeInputPage = () => {
  const [data, setData] = useState({});
  const [form, onChangeInput] = useForm({
    age: '',
  });

  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChangeInput(name, value);
  };

  const handleSubmit = () => {
    history.push('/cidade');

    setData({ ...data, form });
  };

  return (
    <>
      <Header />
      <PagesContainer>
        <MainContainer>
          <Text content="Qual a" span="sua" continueContent="idade?" />
        </MainContainer>
        <Form>
          <Input
            onChange={handleInputChange}
            type="text"
            name="age"
            value={form.age}
          />
        </Form>

        <Footer tosubmit={handleSubmit} />
      </PagesContainer>
    </>
  );
};
export default AgeInputPage;
